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


## Step 3: Create Guest Registration Questions

10. To create questions for the Guest Registration Page, click on "Event Question Registration."

11. Name your question and select "Guest" as the registrant type.

12. Choose a field type; for example, you can use "Text Area."

13. Label the question, e.g., "First Name."

14. Indicate whether the question is required or not.

15. Add instructions, help text, and a default value if needed.

16. Set the display order (e.g., "10"), which helps control the order of questions.

17. Map the question to the correct field by specifying the namespace and field name (e.g., "registrants.first_name").

18. Click "Save" to create the question.

19. You can add more questions following the same process, such as last name, email, or any other relevant information.

## Step 4: Review and Test

20. Review the Guest Registration Page by refreshing the page.

21. Observe the changes you made, including the number of guests allowed, button labels, and question labels.

22. Test the registration process to ensure it works as expected. Fill out the registration form and submit it.

## Step 5: Manage Guest Registrations

23. After attendees register with guests, you can view the registrations in your event.

24. Hosted registrations will be linked to the main registrant, showing who brought additional guests.

25. Remember that guests will not receive email confirmations.

26. You can view hosted registrations and their statuses under "Guest Host."

**Conclusion**

This guide outlines how to set up a Guest Registration Page in WEBVTT for your event. Customize the registration questions, manage guest registrations, and make your event registration process smoother for both attendees and organizers. If you have any questions or need further assistance, feel free to ask.

From: Ryan Blake <ryan.blake@cloud4good.com>
Sent: Wednesday, September 20, 2023 2:55 PM
To: Whitig, Donna <dlw265@psu.edu>; Dahlberg, Thaddaeus B. <thad.dahlberg@stthomas.edu>; Walter, Michael A. <mawalter@stthomas.edu>
Subject: Re: ChatGPT and SEA documentation writing
 
Pretty much exactly what you said.  As a follow up prompt say, can you give me it in markdown so I can added it to Github.



Ryan Blake
Solutions Engineer Team Lead | Cloud for Good 
ryan.blake@cloud4good.com | 1 (855) 536-1251 | www.cloud4good.com
From: Whitig, Donna <dlw265@psu.edu>
Sent: Wednesday, September 20, 2023 1:52 PM
To: Ryan Blake <ryan.blake@cloud4good.com>; Dahlberg, Thaddaeus B. <thad.dahlberg@stthomas.edu>; Walter, Michael A. <mawalter@stthomas.edu>
Subject: Re: ChatGPT and SEA documentation writing
 
Okay, I did absolutely no clean out, feeding in with the prompt "Clean up and create how to document" and this is what it spit out (in grey highlight).  So maybe do minimum cleanup.  I think they are good starting points for someone then to watch the video and just update the documentation.  What instructions would you think I would give it to have it create mark down code?

Step 1: Accessing Guest Registration

Log in to your WEBVTT account.
Navigate to the event you want to set up the Guest Registration Page for.
Step 2: Configure Guest Registration

Click on the "Guest Registration" tab within your event.

To display the Guest Registration Page, ensure that the "Display Guest Registration" option is enabled.

Set the maximum number of additional guests each attendee can bring. For example, if each attendee can bring up to three guests, input "3" in the "Max Amount" field.

Customize the label for the "Add" button. For example, you can use a fun label like "Joining Me Right."

Optionally, provide a message for when no registrations have been added, like "You'll make friends at the event."

Specify the "Registration Page Title."

Click the "Save" button to save your settings.

Step 3: Create Guest Registration Questions

To create questions for the Guest Registration Page, click on "Event Question Registration."

Name your question and select "Guest" as the registrant type.

Choose a field type; for example, you can use "Text Area."

Label the question, e.g., "First Name."

Indicate whether the question is required or not.

Add instructions, help text, and a default value if needed.

Set the display order (e.g., "10"), which helps control the order of questions.

Map the question to the correct field by specifying the namespace and field name (e.g., "registrants.first_name").

Click "Save" to create the question.

You can add more questions following the same process, such as last name, email, or any other relevant information.

Step 4: Review and Test

Review the Guest Registration Page by refreshing the page.

Observe the changes you made, including the number of guests allowed, button labels, and question labels.

Test the registration process to ensure it works as expected. Fill out the registration form and submit it.

Step 5: Manage Guest Registrations

After attendees register with guests, you can view the registrations in your event.

Hosted registrations will be linked to the main registrant, showing who brought additional guests.

Remember that guests will not receive email confirmations.

You can view hosted registrations and their statuses under "Guest Host."

Conclusion

This guide outlines how to set up a Guest Registration Page in WEBVTT for your event. Customize the registration questions, manage guest registrations, and make your event registration process smoother for both attendees and organizers. If you have any questions or need further assistance, feel free to ask

