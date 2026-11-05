/*
 * Upcoming events box for the Summit Events App documentation home page.
 *
 * Shows a plain list of the events coming up in the next few months, read from the Summit Events App (SEA)
 * REST feed. It does not use FullCalendar or any other library.
 *
 * The page needs one element with the id seaUpcomingEvents. These optional data attributes are read from it:
 *   data-feed-url  The address of the Salesforce site where SEA is installed. Defaults to the SEA sample site.
 *   data-months    How many months ahead to look. Defaults to 6.
 *   data-max       The most events to list. Defaults to 8.
 *
 * Behavior:
 *  - Each request waits up to 8 seconds and is tried one more time. If the feed still cannot be reached the box
 *    says so and offers a "Try again" button. No saved copy of the events is kept.
 *  - Closed events are not listed. Events with the same title and start time are listed once.
 *  - Event text is inserted as text, never as HTML, and only web addresses that start with https or http
 *    become links.
 *  - Add ?seaDebug to the page address to log how long each request took in the browser console.
 */
(function () {
    "use strict";

    const DEFAULT_FEED_URL = "https://summit-events-ldo.my.salesforce-sites.com/";
    const DEFAULT_MONTHS = 6;
    const DEFAULT_MAX_EVENTS = 8;
    const REQUEST_TIMEOUT_MS = 8000;
    const RETRY_COUNT = 1;

    const debugEnabled = /[?&]seaDebug(=|&|$)/.test(window.location.search);

    if (document.readyState !== "loading") {
        initialize();
    } else {
        document.addEventListener("DOMContentLoaded", initialize);
    }

    function initialize() {
        const box = document.getElementById("seaUpcomingEvents");
        const body = box ? box.querySelector(".seaUpcomingEventsBody") : null;
        if (!box || !body) {
            return;
        }

        const feedEndpoint = buildFeedEndpoint(box.getAttribute("data-feed-url") || DEFAULT_FEED_URL);
        const months = readWholeNumber(box.getAttribute("data-months"), DEFAULT_MONTHS, 1, 24);
        const maxEvents = readWholeNumber(box.getAttribute("data-max"), DEFAULT_MAX_EVENTS, 1, 50);
        let latestRequestNumber = 0;

        loadEvents();

        function loadEvents() {
            latestRequestNumber++;
            const thisRequestNumber = latestRequestNumber;
            showMessage("Loading events...", null);

            const firstDay = new Date();
            const lastDay = findLastDay(firstDay, months);
            const url = buildFeedUrl(feedEndpoint, {
                feedType: "eventList",
                viewStart: formatDateForFeed(firstDay),
                viewEnd: formatDateForFeed(lastDay),
                hideClosed: "true"
            });

            fetchJsonWithRetry(url)
                .then(function (data) {
                    if (!Array.isArray(data)) {
                        throw new Error("Unexpected response from the event feed.");
                    }
                    return data;
                })
                .then(function (data) {
                    if (thisRequestNumber === latestRequestNumber) {
                        showEvents(data);
                    }
                })
                .catch(function () {
                    if (thisRequestNumber === latestRequestNumber) {
                        showMessage("Events could not be loaded right now.", loadEvents);
                    }
                });
        }

        function showEvents(rawEvents) {
            const events = prepareEvents(rawEvents);
            if (events.length === 0) {
                showMessage("No events are scheduled in the next " + months + " months. Check back soon.", null);
                return;
            }

            const list = document.createElement("ul");
            list.className = "seaUpcomingEventsList";
            events.slice(0, maxEvents).forEach(function (event) {
                list.append(buildListItem(event));
            });
            if (events.length > maxEvents) {
                const more = document.createElement("li");
                more.className = "seaUpcomingEventsItem seaUpcomingEventsMoreItem";
                more.textContent = "and " + (events.length - maxEvents) + " more";
                list.append(more);
            }
            body.textContent = "";
            body.append(list);
        }

        function showMessage(text, retryAction) {
            body.textContent = "";
            const message = document.createElement("p");
            message.className = "seaUpcomingEventsStatus";
            message.textContent = text;
            body.append(message);
            if (retryAction) {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "btn btn-outline seaUpcomingEventsRetry";
                button.textContent = "Try again";
                button.addEventListener("click", retryAction);
                body.append(button);
            }
        }
    }

    // ----- turning the feed into list items -----

    function prepareEvents(rawEvents) {
        const seen = new Set();
        const events = [];
        rawEvents.forEach(function (rawEvent) {
            if (!rawEvent || rawEvent.eventClosed === true) {
                return;
            }
            const start = readWallClock(rawEvent.start);
            if (!start) {
                return;
            }
            const title = decodeHtmlEntities(rawEvent.title);
            // The same event can be entered twice in Salesforce. List it once.
            const key = title + "|" + String(rawEvent.start);
            if (seen.has(key)) {
                return;
            }
            seen.add(key);
            events.push({
                title: title,
                start: start,
                end: readWallClock(rawEvent.end),
                timeZone: readTimeZone(rawEvent.timezone),
                url: isWebAddress(rawEvent.eventUrl) ? rawEvent.eventUrl : null
            });
        });
        events.sort(function (first, second) {
            return first.start.date - second.start.date;
        });
        return events;
    }

    function buildListItem(event) {
        const item = document.createElement("li");
        item.className = "seaUpcomingEventsItem";

        const time = document.createElement("time");
        time.className = "seaUpcomingEventsDate";
        time.setAttribute("datetime", event.start.isoLocal);
        time.textContent = formatEventDate(event.start.date);
        item.append(time);

        if (event.url) {
            const link = document.createElement("a");
            link.href = event.url;
            link.target = "_blank";
            link.rel = "noopener";
            link.textContent = event.title;
            const hint = document.createElement("span");
            hint.className = "seaVisuallyHidden";
            hint.textContent = " (opens in a new tab)";
            link.append(hint);
            item.append(link);
        } else {
            const plainTitle = document.createElement("span");
            plainTitle.className = "seaUpcomingEventsTitle";
            plainTitle.textContent = event.title;
            item.append(plainTitle);
        }

        const timeText = formatEventTimes(event);
        if (timeText !== "") {
            const times = document.createElement("span");
            times.className = "seaUpcomingEventsTime";
            times.textContent = timeText;
            item.append(times);
        }
        return item;
    }

    // ----- dates and times -----

    // The feed writes the event's local clock time and ends it with a Z, which does not mean UTC here.
    // Keep those numbers exactly as written so every visitor sees the time the event really starts.
    function readWallClock(text) {
        const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(String(text || ""));
        if (!match) {
            return null;
        }
        const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]), Number(match[5])));
        if (Number.isNaN(date.getTime())) {
            return null;
        }
        return { date: date, isoLocal: match[1] + "-" + match[2] + "-" + match[3] + "T" + match[4] + ":" + match[5] };
    }

    // The feed sends a name like "Central Daylight Time (America/Chicago)". Keep the part in brackets.
    function readTimeZone(text) {
        const match = /\(([A-Za-z_]+(?:\/[A-Za-z_+\-0-9]+)+)\)/.exec(String(text || ""));
        const candidate = match ? match[1] : String(text || "").trim();
        try {
            new Intl.DateTimeFormat("en-US", { timeZone: candidate });
            return candidate;
        } catch (error) {
            return null;
        }
    }

    function formatEventDate(date) {
        const options = { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" };
        if (date.getUTCFullYear() !== new Date().getFullYear()) {
            options.year = "numeric";
        }
        return new Intl.DateTimeFormat(undefined, options).format(date);
    }

    function formatEventTimes(event) {
        const timeOptions = { hour: "numeric", minute: "2-digit", timeZone: "UTC" };
        const formatter = new Intl.DateTimeFormat(undefined, timeOptions);
        const endsSameDay = event.end && event.end.isoLocal.slice(0, 10) === event.start.isoLocal.slice(0, 10) && event.end.date > event.start.date;
        let text;
        if (endsSameDay && typeof formatter.formatRange === "function") {
            text = formatter.formatRange(event.start.date, event.end.date);
        } else {
            text = formatter.format(event.start.date);
        }
        if (event.timeZone) {
            try {
                const zoneParts = new Intl.DateTimeFormat("en-US", { timeZone: event.timeZone, timeZoneName: "short" }).formatToParts(event.start.date);
                const zone = zoneParts.find(function (part) {
                    return part.type === "timeZoneName";
                });
                if (zone) {
                    text += " " + zone.value;
                }
            } catch (error) {
                // Without a time zone name the time is still correct for the event's own clock.
            }
        }
        return text;
    }

    function findLastDay(firstDay, months) {
        const year = firstDay.getFullYear();
        const month = firstDay.getMonth() + months;
        const day = firstDay.getDate();
        const lastDay = new Date(year, month, day);
        // Starting on the 31st: land on the last day of the target month instead of spilling into the next one.
        return lastDay.getDate() === day ? lastDay : new Date(year, month + 1, 0);
    }

    function formatDateForFeed(date) {
        return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
    }

    // ----- network -----

    function buildFeedEndpoint(baseUrl) {
        return String(baseUrl).replace(/\/?$/, "/") + "services/apexrest/summit/summiteventsfeed";
    }

    function buildFeedUrl(endpoint, parameters) {
        const url = new URL(endpoint);
        Object.keys(parameters).forEach(function (name) {
            url.searchParams.set(name, parameters[name]);
        });
        return url.toString();
    }

    async function fetchJsonWithRetry(url) {
        let lastError = null;
        for (let attempt = 1; attempt <= RETRY_COUNT + 1; attempt++) {
            const controller = new AbortController();
            const startedAt = performance.now();
            const timer = setTimeout(function () {
                controller.abort();
            }, REQUEST_TIMEOUT_MS);
            try {
                const response = await fetch(url, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error("The event feed answered with HTTP " + response.status + ".");
                }
                const data = await response.json();
                logAttempt(attempt, startedAt, null);
                return data;
            } catch (error) {
                lastError = error;
                logAttempt(attempt, startedAt, error);
            } finally {
                clearTimeout(timer);
            }
        }
        throw lastError;
    }

    function logAttempt(attempt, startedAt, error) {
        if (!debugEnabled) {
            return;
        }
        const milliseconds = Math.round(performance.now() - startedAt);
        if (error) {
            console.info("SEA upcoming events: attempt " + attempt + " failed after " + milliseconds + " ms (" + error.name + ": " + error.message + ")");
        } else {
            console.info("SEA upcoming events: attempt " + attempt + " succeeded in " + milliseconds + " ms");
        }
    }

    // ----- small helpers -----

    function readWholeNumber(text, fallback, minimum, maximum) {
        const number = parseInt(text, 10);
        if (Number.isNaN(number)) {
            return fallback;
        }
        return Math.min(maximum, Math.max(minimum, number));
    }

    function isWebAddress(text) {
        try {
            const protocol = new URL(String(text)).protocol;
            return protocol === "https:" || protocol === "http:";
        } catch (error) {
            return false;
        }
    }

    // The feed HTML-escapes text (for example &#39;). Decode it so it can be shown with textContent.
    function decodeHtmlEntities(text) {
        if (!text) {
            return "";
        }
        const holder = document.createElement("textarea");
        holder.innerHTML = String(text);
        return holder.value;
    }
})();
