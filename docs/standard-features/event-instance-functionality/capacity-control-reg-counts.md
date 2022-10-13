---
title: Capacity Control & Registrant Counts
parent: Event Instance Functionality
grand_parent: Standard Features
---

# Capacity Control & Registrant Counts
The Summit Event App allows you to control capacity to your events at the instance level. Each instance requires you to input a Capacity and the count is based on a number of rollup fields (meaning they are based on the Registration records). The following will give you insight into the functionality of how to control capacity, what impact the registration counts and how to ensure you don't go over capacity.

## Controlling Event Capacity
When creating an Event instance, you're requred to indicate "Capacity Control" and "Capacity". 

[image of new Instance]()

### Capacity
Starting with the Capacity field, you'll need to indicate the number of total people you will max your event at.  If there is no capacity limit, you can enter a number much larger than your anticipated attendance.

### Capacity Control
There are two options with Capacity Control:
1) Registrant plus Guests
1) Individual Registrant

The selected the value will control the number represented on the "Current Available Capacity" field. The selected value will look at the neccessary rollup field to determine what the available capacity is. Let's break down each of the values:

> **Individual Registrant** - When selected, this is going to count each Registrant record as 1. This is dependent on the status of those registrations being in a status not equal to "Cancelled" or "Rescheduled". The number of Individual Registrants meeting the criteria is reflected on the "Primary Attendee" field on the Instance record.

> **Registrant plus Guests** - When selected, this is going to count each registration record as 1 PLUS the "Number of Guests", which is on the registration record. This is dependent on the status of those registrations being in a status equal to "Registered", "In Progress", "Confirmed", "Attended" and "No-Show". The number of Registrant plus Guests meeting the criteria is reflected on the "Count of Attendees" field on the Instance record.

When selecting Registrant Plus Guest, this is typically used when "Allow Other Attendees" is marked as TRUE on the related Event record. See the note below about Guest counts related to utilizing the [Guest Feature]().

As these are selected and changed, you'll see the "Current Available Capacity" updating to reflect the counts appropriately.

## Registrant Counts
Summit Events has a number or fields that rollup the count of registration records and some of the fields associated to it. There are 4 fields on the Event Instance that capture counts for the specific instance. The below highlights those fields and what they present (and the logic behind it!):

+ **Primary Attendees**
    + Captures: The number of Registration records associted to the instance that are not in a "Cancelled" or "Rescheduled" status
    + Logic: Status NOT EQUAL to Cancelled or Rescheduled
+ **Primary Confirmed Attendees**
    + Captures: The number of Registration records associated to the 
    + Logic: Status EQUALS Confirmed
+ **Count of Attendees**
    + Captures: The number of Registrations records PLUS the number indicated on the "Number of Guests" when the records are in a status of "Registered", "In Progress", "Confirmed", "Attended" or "No-Show"
    + Logic: Status EQUALS Registered, In Progress, Confirmed, Attended or No-Show
+ **Confirmed Attendees**
    + Captures: The number of Registrations records PLUS the number indicated on the "Number of Guests" when the records are in a status of "Confirmed"
    + Logic: Status EQUALS Confirmed

## Expectations
+ **Exceeding Event Capacity**

## Additional Notes
+ **Guest Counts** - Within Summit Events, there is a [Guest Feature]() that allows you to input Registration details. When utilizing the feature, a new registration record is created and link to the original registrant. With the feature each attendee gets their own registration record and counted as a Primary Attendee.


