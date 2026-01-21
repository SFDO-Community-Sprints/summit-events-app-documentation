---
title: Creating a Basic Event
parent: Getting Started
nav_order: 4
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/EYYIXMoYOoA?si=yo5C3nA6LqmBQbC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>
<br/>
# Creating a Basic Event

<br/>
The first step in setting up a brand new event is to create a Summit Event record and an Event Instance record.  Summit Events are parent records to Summit Event Instance records.  You cannot have a Summit Event instance without it being tied to a parent Summit Event record.  Summit Event instance records inherit much of the information from the parent Summit Event record.  This document covers the fields needed when creating a basic event.
<br/>


![CreateBasicEventOverviewImage](images/CreateBasicEvent_Overview.png)  


### Create the Event

Navigate to the Summit Events Application in the App Selector.

![SearchforApp](images/SearchforSummitEventsApp.png)

Navigate to the Summit Event tab and click on New.

![EventTabNewButton](images/CreateBasicEvent_NewEventButton.png)

Fill out the following fields on the Summit Event record.  Many of the fields listed below are not required but drive functionality and appear on the registration page.

| Object       | Field        | Section       | Purpose    |     
| :---         | :---         | :---          | :---       |
| Summit Event | Event Label  | Event Details | The Salesforce Record Name, should be populated otherwise will default to the record ID|
| Summit Event | Event Name   | Event Details | Name of the Event is the title on the registration page.|
| Summit Event| Event Status |Event Details | If the status on the Event is Active, it will show in the Community Base URL calendar.|
| Summit Event | Template | Event Details | Creates the page style |
| Summit Event | Event Description | Event Details | Used for a short description on the registration page.|
| Summit Event | Event Confirmation Title| Page Details | Title on the confirmation page after the registration was submitted. |
| Summit Event | Event Confirmation Description | Page Details | Additional details on the confirmation page.|

![Registration Event Details Tab](https://github.com/user-attachments/assets/3abb31be-eb6a-475e-bddd-5cd77126eada)

> ![Registration Event Details Tab 2](https://github.com/user-attachments/assets/1d564429-bc97-4db9-8857-2a8d1ca0df49)
![Registration Event Page Details Tab](https://github.com/user-attachments/assets/1a695541-69c2-45da-82d7-085ef3566365)

**Save** Summit Event record.

## Create the Related Event Instance
Navigate to the Summit Event Instance Related List on the Event record and create a New Summit Event Instance.

![CreateBasicEventInstanceButton](images/CreateBasicEvent_NewInstanceButton.png)

<br/>

Fill out the following fields on the Summit Event Instance record. Many of the fields listed below are not required but drive functionality and appear on the registration page.


| Object       | Field        | Purpose    |     
| :---         | :---         |  :---       |
| Summit Events Instance | Instance Title | Instance title appears under the Event Title on the Registration page |
| Summit Events Instance | Active Status | Instance needs to be “Active” for registration fields to be available. |
| Summit Events Instance | Event | Event to which this Instance is related. |
| Summit Events Instance | Capacity Control | Capacity field needs to be greater than 1 in order to see the registration fields and create a registration record.|
| Summit Events Instance | Instance Start Date | Needs to be in the future or possibly day of to register. |
| Summit Events Instance | Instance Start Time | Time Event is starting, appears on the registration page. |
| Summit Events Instance | Instance End Date | End Date appears on the registration page|
| Summit Events Instance | Instance End Time | End Time appears on the registration page.|

![CreateBasicEventNewInstance](images/CreateBasicEvent_EventInstanceScreen1.png)

<br/>

**Save** Summit Event Instance record.

## Review the Basic Event
On the newly created Event Instance record,  click the *Register* link under the Registration Link in the record heading.  
![CreateBasicEventInstanceRegisterLink](images/CreateBasicEvent_EventInstanceScreen2.png)

Navigate to the registration page and confirm registration fields are displaying and editable.  
![CreateBasicEventInstanceRegistrationPage](images/CreateBasicEvent_EventInstanceScreen3.png)

***Congratulations, you've just created a basic event!***

## Create a Confirmation Email for your Event
- To create a confirmation email for the event, see [Creating an Event Email](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/create-event-email/create-event-email/).

## Additional Features
- To add questions to an event registration form, see [Standard Registration Questions](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/standard-reg-questions/).


