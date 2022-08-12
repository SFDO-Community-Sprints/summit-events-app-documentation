---
title: Creating a Basic Event
parent: Getting Started
nav_order: 4
---

<br/>

The first step in setting up a brand new event is to create a Summit Event record.  Summit Events are parent records to Summit Event Instance records.  You cannot have a summit event instance without it being tied to a parent summit event record.  Summit event instance records inherit much of the information from the parent Summit Event record.  There is an Overrides section on the event instance which will allow for overriding some of the parent Summit Event record configurations.  

Some events, that are one off events held only once, will have one Summit Event record related to one Summit Event Instance record.  Other events, like a monthly webinar series may have one Summit Event record with 12 Summit Event Instance records tied to it, one for each month's webinar.  This document covers creating a basic event.
<br/>
<br/>

# Creating a Basic Event

## Create the Event and related Event Instance

1. Navigate to the Summit Events Application in the App Selector.

2. Navigate to the Summit Event tab and click on New.

3. Fill out the following fields on the Summit Event record.  Many of the fields listed below are not required but drive functionality and appear on the registration page.

| Object       | Field        | Section       | Purpose    |     
| :---         | :---         | :---          | :---       |
| Summit Event | Event Label  | Event Details | The Salesforce Record Name, should be populated otherwise will default to the record ID|
| Summit Event | Event Name   | Event Details | Name of the Event is the title on the registration page.|
| Summit Event| Event Status |Event Details | If the status on the Event is Active, it will show in the Community Base URL calendar.|
| Summit Event | Template | Event Details | Creates the page style |
| Summit Event | Event Description | Event Details | Used for a short description on the registration page.|
| Summit Event | Event Confirmation Title| Page Details | Title on the confirmation page after the registration was submitted. |
| Summit Event | Event Confirmation Description | Page Details | Additional details on the confirmation page.|


4. Save Summit Event record.

5. Navigate to the Summit Event Instance Related List on the Event record and create a New Summit Event Instance

| Object       | Field        | Section       | Purpose    |     
| :---         | :---         | :---          | :---       |
| Summit Events Instance | Active Status | Event Instance Page | Instance needs to be “Active” for registration fields to be available |
| Summit Events Instance | Instance Title | Event Instance Page | Instance title appears under the Event Title on the Registration page. |
| Summit Events Instance | Capacity | Event Instance Page | Capacity field needs to be greater than 1 in order to see the registration fields and create a registration record.|
| Summit Events Instance |  Instance Start Date |  Summit Events Instance | Needs to be in the future or possibly day of to register. |
| Summit Events Instance | Instance Start Time |  Summit Events Instance | Time Event is starting, appears on the registration page. |
| Summit Events Instance | Instance End Date | Event Instance Page | End Date appears on the registration page|
| Summit Events Instance | Instance End Time | Event Instance Page | End Time appears on the registration page.|


6. On the Summit Event Instance record, click the Register link under the Registration Link in the record heading.  Navigate to the registration page and confirm registration fields are displaying and editable.  Screenshot
