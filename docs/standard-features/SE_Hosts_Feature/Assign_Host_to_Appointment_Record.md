---
title: Assigning a Host to Registration Appointments
parent: Standard Features
---

Event Hosts work in conjunction with registrant's appointment records to allow event managers to assign host to appointments.  This can be helpful to understand how many people are assgined to each campus tour guide or how many students may be visiting with a particular coach.  To [Create an Event Host](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/blob/main/docs/standard-features/SE_Hosts_Feature/Creating-an-event-host.md) understand how to setup host information.

# Assign Host to Registration Appointment Record

**Step 1:** Locate the Summit Event Appointments in the individual's registration.  This could be located at the bottom of the page, on the registrations related tab or on the side of the registration record depending upon your page layout.  Choose the appointment to which you want to relate the host by clicking the value/hyperlink of the Event Appointments Name field. You will be directed to the Summit Event Appointment page.  

![Registrant Appointments Related List Image](../images/EventHost_SelectRegistrantsAppointment.PNG)

 
**Step 2:** Edit the registrant's Summit Event Appointment page and use the lookup to select the desired Host.  Save the record.
 


**TIPS AND TROUBLESHOOTING**
The host lookup feild, returns hosts regardless of instance.  To make it easier to find the correct host, [create a calculated field on the Host object](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/blob/main/docs/standard-features/SE_Hosts_Feature/Host_object_Calc_Field.md) and add that to the Search Layout options as the first field.


Select the Host type that you have set up for the event host record of the event host of the event instance that the registration and appointment belong to. If the value of the Remaining field of the event host is larger than 0, the Host List should show records of the available hostings for you to choose. Choose a hosting and click the Assign… button to assign the event host to the appointment. 

_Note: If the value of the Remaining field is 0 or below, there will be no records showed up under the Host List._
 
