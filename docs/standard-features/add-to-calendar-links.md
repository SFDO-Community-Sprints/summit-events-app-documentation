---
title: Add to Calendar Links
parent: Standard Features
---
# "Add to Calendar" Links and Logic

## Add to Calendar Sharing
When creating an event, to share the "Add to Calendar" Link, you'll need to create a [Summit Event Email](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/create-event-email/create-event-email/#create-an-event-email) to trigger off of the registration.  In creating the email, follow the [steps to add dynamic information ](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/create-event-email/create-event-email/#6-enter-the-email-content)

Utilize these fields in your email to allow individuals to add the event to their calendar:
* summit__Add_to_Apple_Calendar__c
* summit__Add_To_Google_Calendar_Link__c
* summit__Add_to_Outlook_Calendar__c
* summit__Add_To_Outlook_Web_Calendar__c
* summit__Add_To_Yahoo_Calendar__c

Example of an Email:
![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/d795cfe6-937b-40cd-9d81-d87a40f08c3d)

*NOTE: The calendar invite will give the timezone of the event.  So if the event instance is set to a Central Time Zone for 12 PM, but the registrant is in the Pacific Time Zone, there calendar invite will save and reflect 10 AM*

## Fields Utilized & Logic for the "Add to Calendar" functionality

Below are the objects, fields and logic being utilized in the Add to Calendar functionality.  The below captures all of the different options for adding to the calendar and intended for use in a transactional email as the date/time are Instance specific.


Calendar Location | Salesforce Object | Salesforce Field | Logic
|--------|------------|-----------------|------------
Subject | Summit Event | Event Name | If Instance Title is NOT BLANK, add the instance title: "Event Name - Instance Title"
" | Summit Event Instance | Instance Title | 
Location | Summit Event | Location Title | If "Location Title Override" has a value, use "Location Title Override"
" | Summit Event Instance | Location Title Override | 
" | Summit Event | Location Address | If "Location Address  Override" has a value, use "Location Address Override"
" | Summit Event Instance | Location Address Override | 
" | Summit Event | Building | If "Building Override" has a value, use "Building Override"
"  | Summit Event Instance | Building Override 
Start Date |Summit Event Instance | Instance Start Date
End Date | Summit Event Instance | Instance End Date
Start Time |Summit Event Instance | Instance Start Time
End Time | Summit Event Instance | Instance End Time
Calendar Body | - | - | Follows the same fields and logic for Subject and Location in addition to the below.
" | Summit Event | Location Map Link | If "Virtual Meeting Link" has a value, use "Virtual Meeting Link", otherwise give Location Map Link from Summit Event Object. If "Location Map Link Override" has a value, reflect the override link from the Instance.
" | Summit Event Instance | Location Map Link Override
" | Summit Event Instance | Virtual Meeting Link	
" | Summit Event | Event Description | If "Instance Short Description" has a value, use "Instance Short Description", otherwise use Event Description from Summit Event object
" | Summit Event Instance | Instance Short Description	

## Calendar Example with Field Placement
For additional context, below is an Outlook Calendar image showing where the fields will be placed, based on the above logic. The field in brackets indicate that they will appear "instead of", according to the field placement logic.

![Add to Calendar Field Location image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/e321419d-3725-4407-8e5f-eaffc43b5642)


