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



