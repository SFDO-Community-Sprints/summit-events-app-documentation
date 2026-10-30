---
title: Calendar
parent: Recipes
---

# Showing a Calendar on Your Website

You can show your Summit Events App (SEA) events on any web page as a calendar. Visitors can page through the months, pick an audience to see only the events meant for them, and click an event to register.

See it working on the [calendar demo page](../full-calendar-demo/).

The calendar is built on [FullCalendar](https://fullcalendar.io/), a free and popular calendar tool. You do not need to know how it works. You copy a block of code onto your page, change one line to point at your own events, and you are done.

> **Already have the older calendar on your website?** It keeps working, and the link it uses has not been removed. When you have time, see [Moving from the older version 6 calendar](#moving-from-the-older-version-6-calendar) below. The older instructions are still available on the [legacy calendar page](../full-calendar-v6/).

## What you need

1. **The web address of your Summit Events site.** This is the Salesforce site where SEA is installed. To find it, go to Setup, then Custom Settings, then Summit Event Settings, and look at the field called **Community Base URL**. It looks something like `https://yourschool.my.salesforce-sites.com/`.
2. **A web page where you can add HTML.** Most website tools have an "HTML", "embed", or "custom code" block for this. If you are not sure, ask whoever manages your website.
3. **Events that are ready to show.** See [My calendar is empty](#my-calendar-is-empty) if events do not appear.

## Add the calendar to your page

1. Copy all of the code below.
2. Paste it into an HTML block on your web page, in the spot where you want the calendar to appear.
3. Find the line that starts with `let feedURL` and replace the address between the quotation marks with the address of your own Summit Events site. Keep the quotation marks and the semicolon.
4. Save and view your page.

```html
<!-- 1. Calendar tools. Leave these lines as they are. -->
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/all/global.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/themes/classic/global.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/skeleton.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/themes/classic/theme.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/themes/classic/palette.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tippy.js@6.3.7/animations/scale.css">
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js"></script>

<!-- 2. The Summit Events calendar script. Leave this line as it is. -->
<script src="https://cdn.jsdelivr.net/gh/SFDO-Community-Sprints/summit-events-app-documentation@calendar-v7.0.0/docs/Recipes/js/full-calendar-demo-v7.js"></script>

<!-- 3. Your settings. Replace the address with your own Summit Events site. -->
<script>
let feedURL = "https://summit-events-ldo.my.salesforce-sites.com/";
</script>

<!-- 4. Where the calendar appears. -->
<p>
    <select id="audienceDD" name="audienceDD" title="Select an audience that matches you.">
        <option selected="selected">Select...</option>
    </select>
</p>

<p id="fullCalendarView"></p>
```

The example address in the code belongs to the Summit Events sample site. Until you replace it, your calendar will show the sample site's events.

## What your visitors will see

- A month calendar on computers and tablets. On narrow screens, such as phones, it switches to a simple list.
- A drop-down list of audiences. Choosing one shows only the events for that audience. The calendar remembers the choice until the visitor closes their browser.
- Closed events are shown in gray with the note "Event is closed." and cannot be clicked.
- Long event names wrap onto more lines, so each day grows to fit everything in it. A thin line separates events on the same day.
- Hovering over an event shows its description. Clicking an open event opens its registration page in a new tab.
- If your Summit Events site is slow to answer, the calendar says "Loading events..." and tries again on its own. If it still cannot reach your events, it shows the events it saved from the last visit, along with a **Try again** button.

## Settings you can change

Everything in this section is optional. To use a setting, add its line inside the `<script>` block in step 3, below the `let feedURL` line.

```html
<script>
let feedURL = "https://yourschool.my.salesforce-sites.com/";
const hardCodeAudience = {'Faculty/Staff':'Faculty/Staff','Online events':'Online'};
</script>
```

### Show only some audiences

By default the drop-down lists every audience in your Summit Events App. To show only the ones you choose, list them in `hardCodeAudience`. Each entry has two parts. The first is the label your visitors will see. The second is the matching audience value in SEA, which must be spelled exactly as it is in your audience list on the Event object.

```javascript
const hardCodeAudience = {'Faculty/Staff':'Faculty/Staff','Online events':'Online'};
```

In this example, visitors see "Online events", and the calendar shows events whose audience is "Online". The label can be anything that makes sense to your visitors.

If you list **only one** audience, the drop-down is hidden and the calendar always shows that one audience. This is a good way to put a calendar for a single audience on its own page.

### Hide some audiences

To keep everything except a few audiences, list the ones to hide. Spell them exactly as they appear in SEA.

```javascript
const hideAudiences = ['Faculty/Staff','General Public'];
```

### Hide the calendar until an audience is chosen

Visitors see only the drop-down at first. The calendar appears after they pick an audience.

```javascript
const hideCalendarUntilAudience = true;
```

### Use different names for the calendar spots

The code in step 4 has two spots: the drop-down (named `audienceDD`) and the calendar (named `fullCalendarView`). If your website already uses those names for something else, you can rename the spots and tell the script the new names. Change the `id` in your HTML, and add matching lines to your settings:

```javascript
const audienceDropDownId = "myAudienceList";
const calendarDivId = "myCalendar";
```

You can also leave out the drop-down completely by removing it from the HTML in step 4. The calendar then shows events for all audiences.

## My calendar is empty

If the page loads but you see no events, the cause is almost always the events themselves rather than the code. SEA only sends an event to the calendar when **all** of these are true:

- The event's status is **Active**.
- The event instance (the date and time) is **Active**.
- Neither the event nor the instance is marked **Private**.
- The event's audience list does not include "No Audience".
- The instance's start date falls within the month being shown.

Also remember that the drop-down filters the calendar. If you choose an audience, the event must include that audience, or it will not appear. Try choosing "Select..." to see everything.

## Something else is wrong

**The calendar says "Events could not be loaded right now."**
Check the address in `feedURL`. Then paste that address, followed by `services/apexrest/summit/summiteventsfeed?feedType=audienceDD`, into your web browser. For example:

`https://yourschool.my.salesforce-sites.com/services/apexrest/summit/summiteventsfeed?feedType=audienceDD`

You should see a short list of your audiences as plain text. If you do not, the address is wrong or your Summit Events site is not turned on. If you do, click **Try again** on the calendar.

**Nothing appears where the calendar should be.**
Make sure the HTML from step 4 is on the page, and that the `id` names match the settings (`audienceDD` and `fullCalendarView` unless you changed them).

**It works on some days and not others, or it is slow.**
Slow responses usually come from the connection between a visitor and the Salesforce site, not from your calendar. The calendar waits up to 8 seconds, tries once more, and falls back to the events it saved from the last visit.

**Two more things worth checking with your website and Salesforce administrators.**
First, some websites restrict which outside addresses they are allowed to contact (this is called a Content Security Policy). If yours does, it needs to allow your Summit Events site address and `cdn.jsdelivr.net`. Second, the older instructions asked you to add your website's address in Salesforce under Setup, then **CORS** (for example `https://www.yourschool.edu`). The current SEA feed already lets any website read it, so this step may not be needed, but it does no harm and is worth trying if the calendar stays empty and your browser reports a "CORS" error.

## Keeping your calendar up to date

The calendar script link in step 2 ends with a version name: `calendar-v7.0.0`. Your calendar stays exactly as it is until you change that name, so it will not change on you unexpectedly.

When we improve the calendar, we will publish a new version name and list it here. To update, change the version name in that link.

| Version | What changed |
|---|---|
| calendar-v7.0.0 | First release on FullCalendar 7. |

## Moving from the older version 6 calendar

The calendar described on this page replaces an older one built on FullCalendar version 6. **If you already have the older calendar, nothing is forced on you.** The link it uses still works and will not be removed. The older version will only get small fixes, so we suggest switching when you have time.

**How to tell which one you have.** Look at the code on your page. If the Summit Events script link ends in `full-calendar-demo.js` and the first line mentions `fullcalendar@6`, you have the older one.

**To switch:**

1. Delete the old calendar tool lines: the line with `fullcalendar@6` in it, and the three lines that come from `unpkg.com` (the tippy stylesheet, the popper script and the tippy script).
2. Delete the old Summit Events script link (the one ending in `full-calendar-demo.js`).
3. In their place, paste the new blocks 1 and 2 from the [code above](#add-the-calendar-to-your-page).
4. Keep your own settings. `feedURL`, `hardCodeAudience`, `hideAudiences`, `hideCalendarUntilAudience`, and the two name settings all work the same way. You may delete the lines `let eventCount = 0;` and `let audienceList = [];`, because the new script does not need them. Leaving them in does no harm.
5. Keep the HTML from step 4 as it is.

**What you will notice:** the month view looks very similar, with a **Today** button and previous and next arrows at the top right. The bullet next to each event is gone, events on the same day are separated by a line, and long names wrap instead of being cut off. The calendar also keeps working better when your Summit Events site is slow.

Still using the older calendar? Its instructions are on the [legacy calendar page](../full-calendar-v6/), and you can see it on the [legacy demo](../full-calendar-demo-v6/).

## For web developers

- The script is [full-calendar-demo-v7.js](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/blob/main/docs/Recipes/js/full-calendar-demo-v7.js) in this repository. It reads the settings above as global variables. Only `feedURL` is required.
- It uses FullCalendar 7 with the "Classic" theme, which keeps the look of the older version. FullCalendar offers other themes in its [documentation](https://fullcalendar.io/docs/stock-themes). Another theme means changing the theme script and the two theme stylesheet lines, and you should test the result.
- The feed is the SEA REST endpoint `/services/apexrest/summit/summiteventsfeed`. It accepts `feedType=audienceDD` and `feedType=eventList`, and many filters such as `audience`, `eventId`, `type`, `category` and `sponsor`. `feedType=parameterKey` lists them all. This script sends only `audience` and the date range, so using the other filters means extending it.
- The script adds a small `<style>` block scoped to the calendar's element, so it cannot affect the rest of your page. It keeps the last good audience list and events in the visitor's browser `localStorage` under keys that begin with `seaCalendar:`.
