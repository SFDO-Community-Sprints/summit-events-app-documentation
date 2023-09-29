---
title: Guest Registrations
parent: Advanced Features
---

# Guest Registration

This guide is intended to help you set up a Guest Registration Page that accepts additional registrations in Summit Events for your event, in a single registration process. An example would be that an individual is registering themselves and their partner to attend a Gala, both needing their own individual registration records.

## Reference for Guest Registration and Pre-Work

1. Setting up Guest Registrations is a similar process to creating [Custom Questions](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/custom-questions/). Navigate to that page for some video guidance.
2. You should have your event setup and established, ready to accept registrations. While it does not need to be active, you'll want to make sure all areas are complete and ready.

## Configure Guest Registration

1. Click on the "Guest Registration" tab within your event, on the Summit Event record.

2. To display the Guest Registration Page, ensure that the "Display Guest Registration" option is enabled.

3. Set the maximum number of additional guests each attendee can bring. For example, if each attendee can bring up to three guests, input "3" in the "Guest Max Amount" field.

4. You have the option to customize the label for the "Add" button. For example, you can use a fun label like "Add to Party". This will default to "Register Guest".

5. You also have the option to provide a message for when no registrations have been added, something like "You'll make friends at the event!". This will default to "No guests added yet".

6. Scroll to the next section called "Guest Registration Details" and specify the "Guest Registration Title", "Guest Registration Description", and the List Label.  These elements provide the experience for the end user to understand what they're being asked to do.

7. Click the "Save" button to save your settings.

*NOTE: While there are fields for "Guest Tables Available" and "Guest Table Size", there is no specific functionality associated to supporting these fields*

![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/4bb82c91-a38f-4374-a7fb-db520c4e0a2b)


## Create Guest Registration Questions

1. To create questions for the Guest Registration Page, you'll be leveraging the "Summit Events Question" object

2. While on your event record, create a new Summit Events Question record.

3. Name your question so you understand the intention of this question. Starting with "Guest" may help support that if and when you need to make updates.

4.  Select the "Registration Type" and select "Guest". This will ensure this is asked on the Guest Registration page.

5. Choose a field type; for example, you can use "Textbox."

6. Label the question, e.g., "First Name."

7. Indicate whether the question is required or not.  Be sure to require questions that impact your event.

8. Add instructions, help text, and a default value if needed.

9. Set the display order (e.g., "10"), which helps control the order of questions as they are presented to the registrant.

10. Map the question to the correct field by specifying the namespace and field name (e.g., "summit__Registrant_First_Name__c"). You can map to any field on the Summit Events Registration record as long as the field types match.

Note: Since you're creating an additional registration record, you'll want to always create First Name, Last Name and Email as those are standard questions for all registrants.

11. Click "Save" to create the question.

12. You can add more questions following the same process, such as last name, email, or any other relevant information.

Admin perspective:
![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/40bedaa9-590d-4dbe-80c7-efab871e304b)

Registrant Perspective:
![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/e82f21f7-7899-458e-a483-8f0d97b453f8)



## Review and Test

1. After you've setup the fields you'd like to capture for guests, review the Guest Registration Page from the registrant experience. You can do this by going to an instance and selecting "Admin Open Registration".

2. Observe the changes you made, including the number of guests allowed, button labels, and question labels.

3. We suggest that you test the registration process to ensure it works as expected. You can also delete the test registration records to ensure it doesn't impact capacity.

## Manage Guest Registrations

1. After attendees register with guests, you can view the registrations in your event.

2. Hosted registrations will be linked to the main registrant, showing who brought additional guests.

3. You can view hosted registrations and their statuses under "Guest Host."

*NOTE: Guest Registrants will NOT receive email confirmations.

The initial registration with a "Hosted Registration":
![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/20204523-54d3-42d6-acee-dbb4293b6f60)

The registration record of the guest, which reflects who the "Guest Host" is:
![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/4ba6af4b-ff9d-42d4-a2c2-7b6a1d914496)

## Items of Note
* If you don't want to capture a full registration, but just want to know how many people are coming with the initial registration, leverage the "Allow Other Attendees" and "Max Other Attendees" on the "Add'l Configuration & Options" Tab. This might be utilized for Tours where you're wanting to control capacity, but only need the individual registration information
* Lookup and Lookup Picklist are currently unavailable for Guest registrants
