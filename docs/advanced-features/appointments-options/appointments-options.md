---
title: Appointments/Options
parent: Advanced Features
has_children: true
---


# Creating and Managing Event Appointments

Appointments are extremely flexible and can be used for a number of different scenarios.  Appointments allow the registrant to select multiple options during the registration process.  They also allow for time based options which is one way they differ from questions.   This document is going to walk through a simple scenario of at how to set up Appointments for a student's admissions visit assuming that the student can choose a couple of options during the visit.

Basic steps needed to set up appointments:
1. [Create an event with an event instance](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/create-basic-event/)
2. Create the appointments for selection on the event page


Once the event and event instance have been created, the next step is to set the Appointment Option details on the Event page and create the appointments.

## Set the Appointment Option Details
When creating or editing an Event page, use the Appointment Page Option section to configure the Event Appointment Title and Event Appointment Description.  
![](../images/AppointOptionHeader.PNG)

These will appear above the Appointments on the registration screen.
![](../images/AppointOptionHeaderRegScreen.PNG)

## Create Appointments
Starting on the Summit Event page, from Appointment type related list, choose New.
![](../images/CreateNewAppointmentRec1.PNG)


Since we started from the Event page, the Event field should default to the correct event.  If not, use the search feature to search for and select the correct event.

Give the appointment a Title.  This appears as the title of the appointment from which the registrant will select.

The Appointment Type Status will default to Active.  Leave this default.

Change the Sort Order to reflect the order in which the item should appear (optional).

In the Appointment Options section, set the following fields:
-Registrant Input - choose the type of information being collected for this appointment -(custom picklist, custom picklist required, text, text required).
-Custom Picklist - if using custom picklist as the registrant input, add the picklist values for selection.  Multiple items should be entered with a hard return in between each.
![](../images/AppointSetup_NewApp_P1.PNG)

Click Save to save the new appointment.

Repeat this process for each appointment needed.


