---
title: Calendar
parent: Recipes
---

# Showing a Calendar on an External Website

The Summit Events App (SEA) has a robust REST API feed that allows you to get general information about the events you have created outside of your salesforce org. One use for the SEA feed is to connect it to an open-source calendar solution called [FullCalendar](https://fullcalendar.io/) to create a dynamic and interactive calendar of SEA Events anywhere on the Web. An example of this can be [found right here on our documentation site](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Recipes/full-calendar-demo/).

Though you are welcome to build your own interactions with the SEA feed we have built an example JavaScript you can use below. The following script utilizes the audience setting found on the Event object. It creates a select dropdown of all audiences in your org and allows the user to filter your events by audience. There are also variable parameters that allow you to limit the audiences that display. A detailed explanation of the script follows the code.

```javascript
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/tippy.js@6/animations/scale.css"/>
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

<p id="fullCalendarView"></p>
```

## Breaking down the script

Now let's break down how the script above and see how it works as well as find out how we can customize it through setting some of the variables in the script.

### Loading the required scripts

Most of the above JavaScript in the script above simply allows you to modify what full calendar displays from the SEA feed by setting some variable parameters. The real work is done by the following script libraries being loaded first.

#### Library 1: FullCalendar

The javascript code uses the [FullCalendar](https://fullcalendar.io/) library, which is a popular open-source project for creating calendars in web applications.

```javascript
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.4/index.global.min.js'></script>
```

#### Library 2: Tippy

[Tippy.js](https://atomiks.github.io/tippyjs/) is the complete tooltip, popover, dropdown, and menu solution for the web, powered by Popper.

```javascript
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
```

#### Library 3: Custom SEA scripting

This script was created by the SEA team to be plumbing between FullCalendar and SEA. It is [hosted right here in this repository](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/blob/main/docs/Recipes/js/full-calendar-demo.js) and for your convenience being served up through the [jsDelivr](https://www.jsdelivr.com/) so you can use it on your own Web pages. If you are a Javascript developer you could download this script and modify it fo your own particular uses cases, but again you can just link to ours if you wish.

```javascript
<script src="https://cdn.jsdelivr.net/gh/SFDO-Community-Sprints/summit-events-app-documentation@main/docs/Recipes/js/full-calendar-demo.js"></script>
```

### Configuring Script Variables

#### Pointing to Your SEA Feed

Your SEA feed lives under the Salesforce site that you created for SEA. The URL below points to the SEA Salesforce.org and should be replaced with your org's URL.You can find your Salesforce site URL in Setup-> Custom Settings -> Summit Event Settings under the field Community Base URL where you initially set it during the install of SEA.

```javascript
let feedURL = "https://summit-events-ldo.my.salesforce-sites.com/";
```

#### Hide Calendar Option

When the variable "hideCalendarUntilAudience" is set to true will hide the calendar of events until an audience is selected from the audience dropdown. While set to true all you see on the Web page is a select list and no calendar until a select option is chosen.

```javascript
const hideCalendarUntilAudience = false;
```

#### Hard Code Your Dropdown Audience List

Out of the box the script above will show all the audience you have defined in the audience pick list on the Event object of SEA. Often there are times you would like to embed a calendar that shows only a small set of those audience. Setting values in hardCodeAudience variable will allow you to scope your audience.

The hardCodeAudience is a variable that is and key value object. In our case the "key" is the label we want the user to see for the select option and the value is the matching value you would find in the SEA Event object audience picklist. So, if we only wanted to show "Faculty/Staff" and "Online" audience we could set the variable thusly:

```javascript
const hardCodeAudience = {'Faculty/Staff':'Faculty/Staff','Online events':'Online'};
```

Notice that the "Online" audience has a different label, "Online events." While it is important that the value portion matches what is in your Salesforce audience picklist the label value can be whatever you want to help market the value to an audience.

It should also be noted that if you set just one audience in your hardCodeAudience variable the calendar will simply be stuck on one audience. This would allow you to omit the select dropdown completely not showing it and just show a calendar of one audience on a Web page.

#### Omit an An Audience in the Dropdown Audience List

Similar to the hardCodeAudience variable we just mentioned this is another way to scope your audience except this time we are omitting audience by name. This variable is a simple list of strings that match the audience picklist values found on the SEA Event Objects Audience picklist. If you wanted to omit the audience 'Faculty/Staff' and 'General Public' but let all other audiences appear in the select option list, you could set this variable like this:

```javascript
const hideAudiences = ['Faculty/Staff','General Public'];
```

#### Defining Where the Dropdown And Calendar Display

These variables define the html elements that the javascript above populates the select option dropdown for audience and where the calendar appears. These are preset for the example html elements, but if you had a need to use different elements to populate these items that had different Ids you could adjust them in these variables.

```javascript
const audienceDropDownId = "audienceDD";
const calendarDivId = "fullCalendarView";
```

#### Variables to leave alone

These two variables simply initiate themselves for use in our script. You should not need to set these.

```javascript
let eventCount = 0;
let audienceList = [];
```

### HTML to Add to Your Page

At the end of the script, we have some regular HTML elements. These can go anywhere on your Web page. They do not even have to be next to one another in code (though it is likely they will be). These elements are how the scripts above know where to put the select option list of audience and the calendar itself. Without them nothing will show up. It should be noted that you can also change the Ids of these elements if you have a need to do so. The new elements Ids would have to be defined in the audienceDropDownId and calendarDivId variables.

```html
<p>
    <select id="audienceDD" name="audienceDD" title="Select an audience that matches you.">
        <option selected="selected">Select...</option>
    </select>
</p>

<p id="fullCalendarView"></p>
```

### Additional Important Setup

Your SEA feed needs to be visible to the external site you are showing your calendar. This is a security setting called a CORS setting. CORS rules are the guidelines that determine how a browser, and a server can communicate and share resources across different domains using HTTP headers. You can find your CORS settings at Setup -> CORS. You need to make sure the domain name of the external site you wish to access the SEA feed from is added to your CORS rules in Salesforce. So, for example, if you were hosting your calendar script on google.com you would want to add https://google.com to your CORS rules.
