---
title: Calendar-Demo-2026
parent: Recipes
nav_exclude: true
---

<script src="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/all/global.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/themes/classic/global.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/skeleton.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/themes/classic/theme.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/fullcalendar@7.1.3/themes/classic/palette.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/tippy.js@6/animations/scale.css"/>
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
<script src="https://cdn.jsdelivr.net/gh/SFDO-Community-Sprints/summit-events-app-documentation@main/docs/Recipes/js/full-calendar-demo-2026.js"></script>

<script>
/*  feedURL:
    This should be the site URL of the salesforce site where Summit Events App is installed
 */
let feedURL = "https://summit-events-ldo.my.salesforce-sites.com/";

/* HIDE CALENDAR OPTION:
   hideCalendarUntilAudience set to true will hide the calendar of events until an audience is selected.
   const hideCalendarUntilAudience = true;
 */
const hideCalendarUntilAudience = false;

/* HARD CODE AUDIENCE DROPDOWN:
   Replace the list of audience currently being pulled from the Salesforce org with a custom list.
   This is a key,value list {'Option One Label':'Option One Value','Option Two Label':'Option Two Value'}.
   Key will display to the user and value is the audience to filter events in Salesforce.
   If not used this variable must still be defined with no values (const hardCodeAudience = {};).
   const hardCodeAudience = {'Faculty/Staff':'Faculty/Staff','Online events':'Online'};
 */
const hardCodeAudience = {};

/* OMIT AUDIENCE IN DROPDOWN:
   This option lets you define a list of audiences you wish to omit from the audience dropdown generated from Salesforce.
   If not used this variable must still be defined with no values (const hideAudiences = [];).
   const hideAudiences = ['Faculty/Staff','General Public'];
 */
const hideAudiences = [];

/* audienceDropDownId:
   The div id of the html element you want to populate with the audience dropdown
*/
const audienceDropDownId = "audienceDD";


/* calendarDivId:
   The div id of the html element you want to populate with the full calendar
*/
const calendarDivId = "fullCalendarView";

let eventCount = 0;

let audienceList = [];

</script>

<p>
    <select id="audienceDD" name="audienceDD" title="Select an audience that matches you.">
        <option selected="selected">Select...</option>
    </select>
</p>

<p id="fullCalendarView"></p>


