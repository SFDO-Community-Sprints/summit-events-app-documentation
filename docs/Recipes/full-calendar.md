---
title: Calendar
parent: Recipes
---

# Showing a Calendar on an External Web Site

The Summit Events App (SEA) has a robust REST API feed that allows you to get general information about the events you have created outside of your salesforce org. One use for the SEA feed is to connect it to an open-source calendar solution called [FullCalendar](https://fullcalendar.io/) and embed this calendar on an external Web site. An example of this can be [found right here on our documentation site](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Recipes/full-calendar-demo/). Though you are welcome to build your own interactions with the SEA feed we have built an example JavaScript you can use below. A detailed explanation of the script follows the code.

```javascript
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.4/index.global.min.js'></script>
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
<script src="https://cdn.jsdelivr.net/gh/SFDO-Community-Sprints/summit-events-app-documentation@main/docs/Recipes/js/full-calendar-demo.js"></script>

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
```
## Breaking down the script
