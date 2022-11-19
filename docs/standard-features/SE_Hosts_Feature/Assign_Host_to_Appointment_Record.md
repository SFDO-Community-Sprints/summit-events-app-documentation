---
title: Assigning a Host to a Registration Appointment
parent: Standard Features
---

Event Hosts work in conjunction with registrant's appointment records to allow event managers to assign hosts to appointments.  This can be help the event manager understand how many people are assgined to each campus tour guide or how many students may be visiting with a particular coach.  


# Assigning a Host to a Registrant's Appointment Record

1. Locate the Summit Event Appointments related list in the individual's registration.  This could be located at the bottom of the page, on the registrations related tab or on the side of the registration record depending upon your page layout.  
2. Choose the appointment to which you want to relate the host by clicking the value/hyperlink of the Event Appointments Name field. You will be directed to the Summit Event Appointment page.   

![Registrant Appointments Related List Image](../images/EventHost_SelectRegistrantsAppointment.PNG)
<br>
<br>
 
3. Edit the registrant's Summit Event Appointment page and use the lookup to select the desired Host.  <br>
*Tip: The host lookup feild, returns hosts regardless of instance.  To make it easier to find the correct host, you can [create a calculated field on the Host object](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/blob/main/docs/standard-features/SE_Hosts_Feature/Host_object_Calc_Field.md) to display more information in the lookup field.*

![Registrant Appointments Related List Image](../images/EventHost-HostOnLookupScreen.PNG)
<br>

4. Save the record.
 
<br>
See [Create and Event Host](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/blob/main/docs/standard-features/SE_Hosts_Feature/Creating-an-event-host.md) for information on setting up an Event Host.
<br>
<br>
## TROUBLESHOOTING ##


Select the Host type that you have set up for the event host record of the event host of the event instance that the registration and appointment belong to. If the value of the Remaining field of the event host is larger than 0, the Host List should show records of the available hostings for you to choose. Choose a hosting and click the Assign… button to assign the event host to the appointment. 

_Note: If the value of the Remaining field is 0 or below, there will be no records showed up under the Host List._
 
