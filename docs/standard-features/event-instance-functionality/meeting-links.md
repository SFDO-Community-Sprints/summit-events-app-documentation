---
title: Virtual Meeting Links
parent: Event Instance Functionality
grand_parent: Standard Features
---

# Virtual Meeting Links
Summit Events can support sharing virtual meeting links to registrants through traditional transactional emails. In support of multiple meeting rooms that may occur from multiple instances on a single event, there is a field called "Virtual Meeting Link" that allows an event manager to share the virtual meeting location to the registrant.  The following will outline the expected process and DOES NOT entail any integrations or link generation from a virtual meeting platform. Within the confines of the Summit Events package, virtual meeting links must be generated outside of Salesforce and added manually.

## Steps to Leveraging Virtual Meetings
The below are steps in utilizing the Virtual Meeting Link field and sharing it with your registrants. Remember that Summit Events provides transcaction-based email sends, however, utilizing another email marketing tool you can share the Instance virtual meeting link by providing the field on a report.  The following will outline sharing the virtual meeting link utilizing the transaction based email sending.

  1) Create and capture the unique URL from your desired virtual meeting platform. Each instance should have their own unique URL, so if you have 3 instances, generate 3 unique links.

  2) Enter the link(s) in the "Virtual Meeting Link" field. Be sure to include the full link provided by the virtual meeting platform.

![Entering the Virtual Meeting Link on the Instance Record](https://user-images.githubusercontent.com/60475518/188554962-41df1374-2845-4791-93ee-e798c4e086a9.png)


  3) Save the Instance record.

  4) Create a [Event Email](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/create-event-email/) record, entering all appropriate details. Keep in mind that as you're entering your [email content](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/create-event-email/#6-enter-the-email-content), the email is for all instances.

  5) Where appropriate in your email content, you'll enter the merge field {summit__Virtual_Meeting_URL__c}.

![Adding the API field name to the Event Email Record](https://user-images.githubusercontent.com/60475518/188554975-92448826-42f3-43f1-a205-d566db309090.png)


  6) Save your Event Email record.

  7) You've finished. With each registration, the individual will recieve the specific instance link in their transactional email.

  8) To utilize the same link in a reminder email or mail merge utilizing another email platform, include the "Virtual Meeting URL" field on the Event Registration record in your report.

![Virtual Meeting Link from the registered Instance on the Event Registration Record](https://user-images.githubusercontent.com/60475518/188555031-56c09ccf-e9ce-48b0-ac18-d1f86a09054a.png)


## Additional Notes

- It is encouraged that Virtual Meeting Links are shared in the transactional email and NOT on the Event record on the Map Location. This is to ensure individuals are registering to get the meeting link and are not copying it from the first registration page.
- Ensure the appropriate security settings on the Virtual Meeting platform, like enabling a Wait Room and controlling who can share their screen.
