/*
 * Summit Events App (SEA) calendar for FullCalendar 7.
 *
 * Plumbing between the SEA REST feed and FullCalendar 7. It replaces the FullCalendar 6 script
 * (full-calendar-demo-v6.js, also published as full-calendar-demo.js), which is kept only for calendars
 * that already use it. The page that loads this script sets the same configuration variables as the
 * older script (feedURL, hideCalendarUntilAudience, hardCodeAudience, hideAudiences, audienceDropDownId,
 * calendarDivId, audienceList). Only feedURL is required.
 *
 * Differences from the version 6 script:
 *  - Written for the FullCalendar 7 API (toolbar is opt-in, windowResize is gone, themes are separate files).
 *  - Every request to the SEA feed has a timeout and one retry, so a stalled connection cannot leave the
 *    page blank without explanation.
 *  - The last good audience list and event feed are saved in localStorage. Saved data is shown
 *    immediately and refreshed in the background. If the feed cannot be reached the saved copy stays on screen.
 *  - A status line tells the visitor when events are loading, when saved events are shown, and offers a retry.
 *  - Event text is inserted as text, never as HTML.
 */
(function () {
    "use strict";

    const REQUEST_TIMEOUT_MS = 8000;
    const RETRY_COUNT = 1;
    const FRESH_WINDOW_MS = 30000;
    const MAX_CACHE_AGE_MS = 14 * 24 * 60 * 60 * 1000;
    const CACHE_PREFIX = "seaCalendar:";
    const AUDIENCE_COOKIE_NAME = "SummitEvents";
    const NARROW_SCREEN_QUERY = "(max-width: 900px)";
    const CLOSED_EVENT_COLOR = "#6b7280";

    const ready = function (callback) {
        if (document.readyState !== "loading") {
            callback();
        } else {
            document.addEventListener("DOMContentLoaded", callback);
        }
    };

    ready(initializeCalendar);

    function initializeCalendar() {
        const calendarElement = document.getElementById(
            typeof calendarDivId === "string" ? calendarDivId : "fullCalendarView"
        );
        const audienceDropDown = document.getElementById(
            typeof audienceDropDownId === "string" ? audienceDropDownId : "audienceDD"
        );

        if (!calendarElement) {
            console.warn("SEA calendar: the calendar element was not found on the page.");
            return;
        }
        if (typeof FullCalendar === "undefined" || typeof FullCalendar.Calendar !== "function") {
            calendarElement.textContent = "The calendar could not be loaded. Please refresh the page.";
            return;
        }
        if (typeof feedURL !== "string" || feedURL === "") {
            calendarElement.textContent = "The calendar is not configured: feedURL is missing.";
            return;
        }

        const feedEndpoint = buildFeedEndpoint(feedURL);
        const hideUntilAudience = typeof hideCalendarUntilAudience !== "undefined" && hideCalendarUntilAudience === true;
        const hardCodedAudiences =
            typeof hardCodeAudience === "object" && hardCodeAudience !== null ? hardCodeAudience : {};
        const hiddenAudiences = typeof hideAudiences !== "undefined" && Array.isArray(hideAudiences) ? hideAudiences : [];
        const allowedAudiences = readAllowedAudiences();
        const singleHardCodedAudience =
            Object.keys(hardCodedAudiences).length === 1 ? hardCodedAudiences[Object.keys(hardCodedAudiences)[0]] : null;

        const requestsInFlight = new Map();
        const freshUntil = new Map();
        const statusState = { events: null, audiences: null };
        const statusElement = createStatusElement(calendarElement);
        let calendar = null;

        addCalendarStyles(calendarElement.id);

        if (singleHardCodedAudience !== null) {
            hideAudienceDropDown();
        }

        populateAudienceDropDown(readCachedAudiences());
        applyCalendarVisibility();

        calendar = new FullCalendar.Calendar(calendarElement, {
            initialView: getViewForScreenWidth(),
            headerToolbar: { start: "title", center: "", end: "today prev,next" },
            height: "auto",
            events: loadEvents,
            // loadEvents already tells the visitor when the feed fails, so mark the failure as handled.
            eventSourceFailure: function () {},
            // Class names used by the styles added in addCalendarStyles().
            listItemEventClass: "seaCalendarEvent",
            listItemEventBeforeClass: function (info) {
                // Month grid shows no bullet. The list view keeps its colored dot.
                return info.view.type === "dayGridMonth" ? "seaCalendarBullet" : "";
            },
            eventContent: renderEventContent,
            eventDidMount: attachTooltip,
            eventWillUnmount: removeTooltip,
            eventClick: openEventInNewTab
        });
        calendar.render();

        const narrowScreenQuery = window.matchMedia(NARROW_SCREEN_QUERY);
        narrowScreenQuery.addEventListener("change", function () {
            calendar.changeView(getViewForScreenWidth());
        });

        if (audienceDropDown) {
            audienceDropDown.addEventListener("change", function () {
                writeAudienceCookie(getAudienceValue());
                applyCalendarVisibility();
                calendar.refetchEvents();
            });
        }

        refreshAudiences();

        // ----- configuration helpers -----

        function readAllowedAudiences() {
            const fromUrl = new URLSearchParams(window.location.search).get("audienceList");
            if (fromUrl) {
                return fromUrl.split(",");
            }
            return typeof audienceList !== "undefined" && Array.isArray(audienceList) ? audienceList.slice() : [];
        }

        function getViewForScreenWidth() {
            return window.matchMedia(NARROW_SCREEN_QUERY).matches ? "listMonth" : "dayGridMonth";
        }

        function hideAudienceDropDown() {
            if (audienceDropDown) {
                const container = audienceDropDown.closest(".slds-col") || audienceDropDown;
                container.style.display = "none";
            }
        }

        function applyCalendarVisibility() {
            const hidden = hideUntilAudience && getAudienceValue() === "";
            calendarElement.style.visibility = hidden ? "hidden" : "visible";
        }

        // ----- audience drop down -----

        function getAudienceValue() {
            if (singleHardCodedAudience !== null) {
                return singleHardCodedAudience;
            }
            if (!audienceDropDown) {
                return "";
            }
            const value = audienceDropDown.value;
            return value === "Select..." ? "" : value;
        }

        function populateAudienceDropDown(audiences) {
            if (!audienceDropDown) {
                return;
            }
            const previousValue = getAudienceValue() || readAudienceCookie();
            const source = Object.keys(hardCodedAudiences).length > 0 ? hardCodedAudiences : audiences || {};

            audienceDropDown.innerHTML = "";
            const placeholder = document.createElement("option");
            placeholder.value = "";
            placeholder.textContent = "Select...";
            audienceDropDown.append(placeholder);

            let optionCount = 0;
            Object.entries(source).forEach(function ([label, value]) {
                const isHidden = hiddenAudiences.includes(value);
                const isAllowed = allowedAudiences.length === 0 || allowedAudiences.includes(value);
                if (!isHidden && isAllowed) {
                    const option = document.createElement("option");
                    option.value = value;
                    option.textContent = label;
                    audienceDropDown.append(option);
                    optionCount++;
                }
            });

            if (previousValue && Array.from(audienceDropDown.options).some((option) => option.value === previousValue)) {
                audienceDropDown.value = previousValue;
            }
            if (optionCount === 1) {
                hideAudienceDropDown();
            }
        }

        function readCachedAudiences() {
            const cached = readCache("audiences|" + feedEndpoint, isAudienceMap);
            return cached ? cached.data : null;
        }

        function refreshAudiences() {
            if (!audienceDropDown || Object.keys(hardCodedAudiences).length > 0) {
                applyCalendarVisibility();
                return;
            }
            const cacheKey = "audiences|" + feedEndpoint;
            const cached = readCache(cacheKey, isAudienceMap);
            requestJson(cacheKey, buildFeedUrl(feedEndpoint, { feedType: "audienceDD" }), isAudienceMap)
                .then(function (freshAudiences) {
                    setStatus("audiences", null);
                    if (!cached || JSON.stringify(cached.data) !== JSON.stringify(freshAudiences)) {
                        const audienceBefore = getAudienceValue();
                        populateAudienceDropDown(freshAudiences);
                        applyCalendarVisibility();
                        if (getAudienceValue() !== audienceBefore) {
                            calendar.refetchEvents();
                        }
                    } else {
                        applyCalendarVisibility();
                    }
                })
                .catch(function () {
                    applyCalendarVisibility();
                    if (!cached) {
                        setStatus("audiences", {
                            message: "The audience list could not be loaded.",
                            retry: refreshAudiences
                        });
                    }
                });
        }

        // ----- events -----

        function loadEvents(fetchInfo) {
            const audience = getAudienceValue();
            if (hideUntilAudience && audience === "") {
                return Promise.resolve([]);
            }

            const cacheKey = ["events", feedEndpoint, audience, fetchInfo.startStr, fetchInfo.endStr].join("|");
            const feedUrl = buildFeedUrl(feedEndpoint, {
                feedType: "eventList",
                audience: audience,
                start: fetchInfo.startStr,
                end: fetchInfo.endStr
            });
            const cached = readCache(cacheKey, Array.isArray);

            if (cached && Date.now() < (freshUntil.get(cacheKey) || 0)) {
                return Promise.resolve(cached.data.map(toCalendarEvent));
            }

            if (cached) {
                requestJson(cacheKey, feedUrl, Array.isArray)
                    .then(function (freshEvents) {
                        setStatus("events", null);
                        if (JSON.stringify(freshEvents) !== JSON.stringify(cached.data)) {
                            calendar.refetchEvents();
                        }
                    })
                    .catch(function () {
                        setStatus("events", {
                            message: "Showing saved events. The event server could not be reached.",
                            retry: retryEvents
                        });
                    });
                return Promise.resolve(cached.data.map(toCalendarEvent));
            }

            setStatus("events", { message: "Loading events..." });
            return requestJson(cacheKey, feedUrl, Array.isArray).then(
                function (rawEvents) {
                    setStatus("events", null);
                    return rawEvents.map(toCalendarEvent);
                },
                function (error) {
                    setStatus("events", {
                        message: "Events could not be loaded right now.",
                        retry: retryEvents
                    });
                    throw error;
                }
            );
        }

        function retryEvents() {
            freshUntil.clear();
            setStatus("events", { message: "Loading events..." });
            calendar.refetchEvents();
        }

        function toCalendarEvent(rawEvent) {
            const isClosed = rawEvent.eventClosed === true || String(rawEvent.eventClosed).toLowerCase() === "true";
            const calendarEvent = {
                id: rawEvent.ID || rawEvent.Id,
                title: decodeHtmlEntities(rawEvent.title),
                // The feed marks local wall-clock times with a trailing Z. Drop it so they stay local.
                start: String(rawEvent.start).replace("Z", ""),
                className: rawEvent.className || "",
                extendedProps: {
                    description: decodeHtmlEntities(rawEvent.description),
                    isClosed: isClosed,
                    statusClass: rawEvent.className || ""
                }
            };
            if (rawEvent.end) {
                calendarEvent.end = String(rawEvent.end).replace("Z", "");
            }
            if (isClosed) {
                calendarEvent.color = CLOSED_EVENT_COLOR;
            } else if (rawEvent.eventUrl) {
                calendarEvent.url = rawEvent.eventUrl;
            }
            return calendarEvent;
        }

        // ----- event rendering -----

        function renderEventContent(info) {
            const properties = info.event.extendedProps;
            const wrapper = document.createElement("span");
            wrapper.className = "SummitEventsItem " + properties.statusClass;

            const title = document.createElement("span");
            title.className = "summitEventsTitle";
            title.textContent = info.event.title;
            wrapper.append(title);

            if (properties.isClosed) {
                wrapper.append(document.createElement("br"));
                const closedNote = document.createElement("em");
                closedNote.textContent = "Event is closed.";
                wrapper.append(closedNote);
            }

            if (info.view.type === "dayGridMonth") {
                const timeText = formatTimeRange(info.event.start, info.event.end);
                if (timeText !== "") {
                    wrapper.append(document.createElement("br"));
                    const times = document.createElement("span");
                    times.className = "summitEventsTimes";
                    times.textContent = timeText;
                    wrapper.append(times);
                }
            } else {
                // List view: the time comes first, then the title, the closed note and the description.
                const timeText = formatTimeRange(info.event.start, info.event.end);
                if (timeText !== "") {
                    const times = document.createElement("span");
                    times.className = "summitEventsTimes";
                    times.textContent = timeText;
                    wrapper.prepend(times, document.createElement("br"));
                }
                if (properties.description) {
                    wrapper.append(document.createElement("br"));
                    const description = document.createElement("span");
                    description.className = "summitEventsDesc";
                    description.textContent = properties.description;
                    wrapper.append(description);
                }
            }
            return { domNodes: [wrapper] };
        }

        function formatTimeRange(startDate, endDate) {
            if (!startDate) {
                return "";
            }
            const format = { hour: "numeric", minute: "2-digit" };
            const startText = startDate.toLocaleTimeString([], format);
            return endDate ? startText + " - " + endDate.toLocaleTimeString([], format) : startText;
        }

        function attachTooltip(info) {
            const description = info.event.extendedProps.description;
            if (description && typeof tippy === "function") {
                tippy(info.el, { content: description, animation: "scale" });
            }
        }

        function removeTooltip(info) {
            if (info.el && info.el._tippy) {
                info.el._tippy.destroy();
            }
        }

        function openEventInNewTab(info) {
            if (info.event.url) {
                info.jsEvent.preventDefault();
                window.open(info.event.url, "_blank", "noopener");
            }
        }

        // ----- network, retry and saved copies -----

        function requestJson(cacheKey, url, isValid) {
            if (requestsInFlight.has(cacheKey)) {
                return requestsInFlight.get(cacheKey);
            }
            const request = fetchJsonWithRetry(url)
                .then(function (data) {
                    if (!isValid(data)) {
                        throw new Error("Unexpected response from the event feed.");
                    }
                    writeCache(cacheKey, data);
                    freshUntil.set(cacheKey, Date.now() + FRESH_WINDOW_MS);
                    return data;
                })
                .finally(function () {
                    requestsInFlight.delete(cacheKey);
                });
            requestsInFlight.set(cacheKey, request);
            return request;
        }

        // ----- status line -----

        function setStatus(source, value) {
            statusState[source] = value;
            renderStatus();
        }

        function renderStatus() {
            statusElement.textContent = "";
            const entries = Object.values(statusState).filter(Boolean);
            entries.forEach(function (entry) {
                const message = document.createElement("span");
                message.textContent = entry.message + " ";
                statusElement.append(message);
            });
            const retryActions = entries.map((entry) => entry.retry).filter(Boolean);
            if (retryActions.length > 0) {
                // One button retries everything that failed.
                const button = document.createElement("button");
                button.type = "button";
                button.textContent = "Try again";
                button.addEventListener("click", function () {
                    retryActions.forEach((retryAction) => retryAction());
                });
                statusElement.append(button);
            }
            statusElement.hidden = entries.length === 0;
        }
    }

    // ----- functions that do not depend on page state -----

    // Styles for the event list inside each day. They are scoped to the calendar element so they
    // cannot affect the rest of the page, and a page can override them with its own CSS.
    function addCalendarStyles(calendarId) {
        if (!calendarId || document.getElementById("seaCalendarStyles")) {
            return;
        }
        const scope = "#" + calendarId;
        const style = document.createElement("style");
        style.id = "seaCalendarStyles";
        style.textContent = [
            // No bullet next to events in the month grid.
            scope + " .seaCalendarBullet { display: none; }",
            // A line between events that fall on the same day.
            scope + " :has(> .seaCalendarEvent) + :has(> .seaCalendarEvent) > .seaCalendarEvent {",
            "    border-top: 1px solid #d1d5db;",
            "}",
            scope + " .seaCalendarEvent { padding-block: 3px; }",
            // Long titles wrap instead of being cut off, so a day grows to fit everything in it.
            scope + " .SummitEventsItem { overflow-wrap: anywhere; }"
        ].join("\n");
        document.head.append(style);
    }

    function buildFeedEndpoint(baseUrl) {
        return baseUrl.replace(/\/?$/, "/") + "services/apexrest/summit/summiteventsfeed";
    }

    function buildFeedUrl(endpoint, parameters) {
        const url = new URL(endpoint);
        Object.entries(parameters).forEach(function ([name, value]) {
            url.searchParams.set(name, value);
        });
        return url.toString();
    }

    async function fetchJsonWithRetry(url) {
        let lastError = null;
        for (let attempt = 0; attempt <= RETRY_COUNT; attempt++) {
            const controller = new AbortController();
            const timer = setTimeout(function () {
                controller.abort();
            }, REQUEST_TIMEOUT_MS);
            try {
                const response = await fetch(url, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error("The event feed answered with HTTP " + response.status + ".");
                }
                return await response.json();
            } catch (error) {
                lastError = error;
            } finally {
                clearTimeout(timer);
            }
        }
        throw lastError;
    }

    function createStatusElement(calendarElement) {
        const statusElement = document.createElement("div");
        statusElement.setAttribute("role", "status");
        statusElement.setAttribute("aria-live", "polite");
        statusElement.className = "seaCalendarStatus";
        statusElement.hidden = true;
        calendarElement.parentNode.insertBefore(statusElement, calendarElement);
        return statusElement;
    }

    // The audience feed is an object of label: value pairs, and every value is text.
    function isAudienceMap(value) {
        return (
            value !== null &&
            typeof value === "object" &&
            !Array.isArray(value) &&
            Object.values(value).every((entry) => typeof entry === "string")
        );
    }

    // The feed HTML-escapes text (for example &#39;). Decode it so it can be shown with textContent.
    function decodeHtmlEntities(text) {
        if (!text) {
            return "";
        }
        const holder = document.createElement("textarea");
        holder.innerHTML = text;
        return holder.value;
    }

    function readCache(key, isValid) {
        try {
            const raw = window.localStorage.getItem(CACHE_PREFIX + key);
            if (!raw) {
                return null;
            }
            const entry = JSON.parse(raw);
            if (!entry || typeof entry.savedAt !== "number" || Date.now() - entry.savedAt > MAX_CACHE_AGE_MS) {
                return null;
            }
            return isValid(entry.data) ? entry : null;
        } catch (error) {
            return null;
        }
    }

    function writeCache(key, data) {
        try {
            window.localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ savedAt: Date.now(), data: data }));
        } catch (error) {
            // Storage can be full or blocked. The calendar works without a saved copy.
        }
    }

    function readAudienceCookie() {
        try {
            const pattern = new RegExp("(?:^|; )" + encodeURIComponent(AUDIENCE_COOKIE_NAME) + "=([^;]*)");
            const match = document.cookie.match(pattern);
            if (!match) {
                return "";
            }
            const settings = JSON.parse(decodeURIComponent(match[1]));
            return settings && typeof settings.audience === "string" ? settings.audience : "";
        } catch (error) {
            return "";
        }
    }

    function writeAudienceCookie(audience) {
        document.cookie =
            encodeURIComponent(AUDIENCE_COOKIE_NAME) +
            "=" +
            encodeURIComponent(JSON.stringify({ audience: audience })) +
            "; path=/; SameSite=Lax";
    }
})();
