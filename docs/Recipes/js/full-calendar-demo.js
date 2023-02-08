let ready = (callback) => {
    if (document.readyState !== "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
    let urlParams = getUrlVars();
    if (urlParams['audienceList']) {
        audienceList = decodeURIComponent(urlParams['audienceList']).split(',');
    }
    initCalendar();
});


function getUrlVars() {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}

const initCalendar = function () {
    const calendarEl = document.getElementById(calendarDivId);

    const audienceDD = document.getElementById(audienceDropDownId);

    if (feedURL.endsWith('/')) {
        feedURL += 'services/apexrest/summit/summiteventsfeed';
    } else {
        feedURL += '/services/apexrest/summit/summiteventsfeed';
    }

    if (Object.keys(hardCodeAudience).length === 1) {
        audienceDD.closest('.slds-col').style.display = 'none';
    }

    if (audienceDD) {
        loadAudienceDD();
    }

    function getCalView() {
        let initialView = "dayGridMonth";
        if (window.innerWidth <= 900) {
            initialView = "listMonth";
        }
        return initialView;
    }

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: getCalView(),
        handleWindowResize: true,
        textColor: "#000",
        contentHeight: "auto",
        events: {
            url: feedURL,
            extraParams: function () {
                return {feedType: "eventList", audience: getAudienceDDValue()};
            },
        },
        eventDataTransform: function (rawEventData) {
            return {
                id: rawEventData.Id,
                title: rawEventData.title,
                url: rawEventData.eventUrl,
                start: rawEventData.start.replace('Z', ''),
                end: rawEventData.end.replace('Z', ''),
                description: rawEventData.description,
                className: rawEventData.className,
                eventClosed: rawEventData.eventClosed.toString()
            };
        },
        eventDisplay: "auto",
        eventTextColor: "#000",
        eventContent: function (info) {
            let wrap = document.createElement("div");
            let titleWrap = document.createElement("span");
            eventCount++;
            let toolTipId = 'tool-tip-' + eventCount;
            titleWrap.classList.add("summitEventsTitle");
            if (info.event.extendedProps.eventClosed.toLowerCase() === 'false') {
                titleWrap.innerHTML = info.event.title;
                wrap.href = info.event.url;
                wrap.target = "_blank";
            }
            if (info.event.extendedProps.eventClosed.toLowerCase() === 'true') {
                titleWrap.innerHTML = info.event.title + "<br/><em>Event is closed.</em><br/>";
            }
            wrap.classList.add("SummitEventsItem");
            wrap.classList.add(info.event.className);
            let descWrap = document.createElement("span");
            descWrap.classList.add("summitEventsDesc");
            descWrap.innerHTML = info.event.extendedProps.description;
            let timeWrap = document.createElement("span");
            timeWrap.classList.add("summitEventsTimes");
            let startTime = formatTimeString(info.event.start.toLocaleString());
            let endTime = formatTimeString(info.event.end.toLocaleString());
            timeWrap.innerHTML = startTime + " - " + endTime;
            wrap.append(titleWrap);
            if (info.view.type === "dayGridMonth") {
                wrap.append(timeWrap);
            } else {
                wrap.append(descWrap);
            }
            let arrayOfDomNodes = [wrap];
            return {domNodes: arrayOfDomNodes};
        },
        eventMouseEnter: function (info) {
            let desc = info.event.extendedProps.description;
            tippy(info.el, {animate: "fade", content: desc});
        },
        windowResize: function () {
            this.changeView(getCalView());
            this.refetchEvents();
        }
    });
    calendar.render();
    if (audienceDD) {
        audienceDD.addEventListener("change", function () {
            eraseCookie("SummitEvents");
            createCookie(
                "SummitEvents",
                '{"audience" : "' + getAudienceDDValue() + '"}',
                ""
            );
            if (getAudienceDDValue() === "" && hideCalendarUntilAudience) {
                calendarEl.style.visibility = "hidden";
            } else {
                calendarEl.style.visibility = "visible";
            }
            calendar.refetchEvents();
        });
    }

    function getAudienceDDValue() {
        if (Object.keys(hardCodeAudience).length === 1) {
            return hardCodeAudience[Object.keys(hardCodeAudience)[0]];
        }
        let audienceDDValue = "";
        if (audienceDD) {
            audienceDDValue = audienceDD.value;
        }
        if (audienceDDValue === "Select...") {
            audienceDDValue = "";
        }
        return audienceDDValue;
    }

    function loadAudienceDD() {
        fetch(feedURL + "?feedType=audienceDD")
            .then((resp) => resp.json())
            .then(function (data) {
                populateOptions(data, audienceDD);
                if (SESettings != null) {
                    if (SESettings.audience != null) {
                        audienceDD.value = SESettings.audience;
                    }
                }
                calendar.refetchEvents();
                if (getAudienceDDValue() === "" && hideCalendarUntilAudience) {
                    calendarEl.style.visibility = "hidden";
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function populateOptions(data, selector) {
        selector.innerHTML = "";
        let opt1 = document.createElement("option");
        opt1.value = "";
        opt1.text = "Select...";
        selector.append(opt1);
        if (Object.keys(hardCodeAudience).length > 0) {
            data = hardCodeAudience;
        }
        let optionCount = 0;
        for (const [key, value] of Object.entries(data)) {
            if (!hideAudiences.includes(value)) {
                if (audienceList.length === 0 || audienceList.includes(value)) {
                    let opt2 = document.createElement("option");
                    opt2.value = value;
                    opt2.text = key;
                    selector.append(opt2);
                    optionCount++;
                }
            }
        }
        if (optionCount === 1) {
            audienceDD.closest('.slds-col').style.display = 'none';
        }
    }

}


function getCalView() {
    let initialView = 'dayGridMonth';
    if (window.innerWidth <= 900) {
        initialView = 'listMonth';
    }
    return initialView;
}

function formatTimeString(stringIn) {
    let stringOut;
    stringIn = stringIn.split(",");
    stringIn = stringIn[stringIn.length - 1];
    let last = stringIn.lastIndexOf(":");
    stringOut = stringIn.substring(stringIn, last);
    stringOut += stringIn.substring(last + 3, stringIn.length);
    return stringOut;
}


function createCookie(name, value, days) {
    let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie =
        encodeURIComponent(name) +
        "=" +
        encodeURIComponent(value) +
        expires +
        "; path=/";
}

function readCookie(name) {
    let nameEQ = encodeURIComponent(name) + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

