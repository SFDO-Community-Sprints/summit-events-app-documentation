---
title: Before Creating an Event
parent: Getting Started
nav_order: 3
---

*This content is a work in progress. If you're interested in contributing to the Summit Events App and want to help provide support by reviewing or adding to this page, comment below and let us know!*
 <br />
 <br />

This page will capture items you'll want to capture as part of your event before you start building and moving to [Creating a Basic Event](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/create-basic-event/).

# Configuration Before Creating Your First Event

After you install Summit Events in your org there are some setup steps that you need do before you start using it:

1. Make sure you do the steps listed in the [Post Installation Section of Installing the Summit Events App](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/Installing/).

2. Edit and Create Picklist Values

We deliver sample values for the picklist fields, but you will want to edit these fields to create your own values and deactivate some or all of our sample values.  You can do this following the instructions here that show [how to edit and create picklist values](https://trailhead.salesforce.com/en/content/learn/modules/picklist_admin/picklist_admin_manage).

## Review and Personalize Picklists
Here are the picklist fields that need to be reviewed and personalized for your organization:

<ins>Summit Events object</ins>
* Event Type
* Audience
* Event Sponsor
* Location Type
* Building 

<ins>Summit Events Instance object</ins>
* Category
* Location Type Override
* Building Override

<ins>Summit Events Appointment object</ins>
* Building

<ins>Summit Events Appointment Type object</ins>
* Appointment Category
* Appointment Type
* Auto Add Building

<ins>Summit Events Registration object</ins>
* Applicant Type 
* Presentation Location
* Campus Tour Location
* Registrant Gender
* Registrant Pronouns
* Relationship to Institution
* Registrant Program Interest
* Participation Type


## Other Customizations You Can Make:

* We include all fields for an object on the page layout so you know everything that is included.  You likely will not use all of these fields, so you should customize the page layouts so your users only see the fields you will be using.

 [How to create and edit page layouts](https://help.salesforce.com/articleView?id=customize_layoutcreate.htm&type=5)

* Add the Summit Events Registrant" related list to the Contact page layout so your users can easily see the events that your contacts have registered for.

* Configure the fields that display in the "Default" Search Layouts for [each of the Summit Events objects](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/ERD) by following these instructions on [How to configure Search Layouts](https://help.salesforce.com/articleView?id=search_results_setup_lex.htm&type=5). Configuring the default search layouts also helps you see more details on records in the 'Recently Viewed' list view for each object.

* If you need to change the display name of a field to better match your your organization works you can do that by following these instructions [How to change field label for managed package fields](https://www.greytrix.com/blogs/salesforce/2017/10/06/how-to-rename-the-field-label-in-salesforce-for-managed-package/)
  + Example:  The "Ask Applicant Type" field on Summit Events object could be renamed to "Ask Registrant Type" and the "Applicant Type" field on the Summit Events Registration object could be renamed to the "Registrant Type" field if your organization doesn't have applications but you want to use this field to categorize people registering for events.

* Add Record Types and custom page layouts on objects such as "Summit Events Host" and Summit Events to provide custom page layouts and picklist values to users based on their departments or roles in the organization
  + Example - add custom Record Types of "Admissions" and "Advancement" on the Summit Events object so each area sees fields and picklist values that are relevant to their department instead of showing them all fields and field values.

![Selecting a record type](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/blob/main/docs/Getting-Started/images/1.2%20-%20Record%20type.png)

   Optional: If you will only be using one record type, you can skip the step of selecting the record type each time by using these instructions to [set a default record type](https://help.salesforce.com/articleView?id=user_recordtype.htm&type=5).

[How to create Record Types](https://trailhead.salesforce.com/en/content/learn/projects/customize-a-salesforce-object/create-record-types)

* Add the Summit Events calendar to your website using these instructions [Add Event Calendar to Your Web Page](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/How-to-add-the-Event-Calendar-to-Any-Web-Page)

* If you want event Registrants to be matched with Contacts in Salesforce please use these instructions to setup this functionality [Contact Matching](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/0c--%E2%80%93-Setup-Contact-Matching)

__Future__

* Add your custom parking pass for use with the "UG Parking Pass Link" on the the Summit Events Registration object 

* Template - customize the "General SLDS" template or create a custom template
