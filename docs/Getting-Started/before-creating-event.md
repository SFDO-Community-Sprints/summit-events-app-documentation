---
title: Before Creating an Event
parent: Getting Started
nav_order: 3
---

*This content is a work in progress. If you're interested in contributing to the Summit Events App and want to help provide support by reviewing or adding to this page, comment below and let us know!*
 <br />
 <br />

# Post-Installation Considerations and Configuration Before Creating Your First Event

After you install Summit Events in your org there are some additional considerations you'll want to make to ensure there is alignment with your organization.  This page will capture items you'll want to review as part of your event before you start building and moving to [Creating a Basic Event](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/create-basic-event/).

## Review Visibility Options (Objects and Search) 
Because Summit Events is intended to integrate with your existing Salesforce org, you'll want to consider exposing records on related objects. The Contact record is a good example as you may want to create visibility to an individual's registration records from that object. Consider the following for visibility and clarity within your Salesforce org:

* Add the Summit Events Registrant related list to the Contact page layout.
* Configure the fields that display in the "Default" Search Layouts for [each of the Summit Events objects](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/object-field-resources/). You can leverage Salesforce resources to learn [how to configure Search Layouts](https://help.salesforce.com/articleView?id=search_results_setup_lex.htm&type=5).

## Review and Personalize Picklists
We deliver sample values for the picklist fields, but you will want to edit these fields to create your own values and deactivate some or all of our sample values.  You can do this following the instructions here that show [how to edit and create picklist values](https://trailhead.salesforce.com/en/content/learn/modules/picklist_admin/picklist_admin_manage).  Here are the picklist fields that need to be reviewed and personalized for your organization:

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
* *Registrant will see these picklist values*
  - Applicant Type
  - Campus Tour Location
  - Preferred Visit Time
  - Registrant Gender
  - Registrant Program Interest
  - Registrant Pronouns
  - Relationship to Institution
* *Admin/Event Management*
  - Presentation Location *(should match "Building" on the Summit Events object)*
  - Participation Type

<ins>Summit Events Questions object</ins>
* Existing Picklist Values *(Note: this will be based on any custom picklist fields on the Summit Events Registration object)*

---To be continued-work in progress. Please check back later!---


## Review Page Layouts
The Summit Events App was originally created for Higher Education institutions. You'll notice there are some fields that are specifically related to Admissions, like "Applicant Type". Based on your organization/institution, you may want to remove fields from the page layout to avoid confusion from your Users. We add the most commonly used fields that highlight existing functionality to the page layouts on install for visibility.  You can modify these to add or remove fields so that the page displays fields that make sense for your organization.  *We include all fields for an object on the page layout so you know everything that is included.  You likely will not use all of these fields, so you should customize the page layouts so your users only see the fields you will be using.

Additionly, you will want to dd the Summit Events Registrant" related list to the Contact page layout so your users can easily see the events for which your contacts have registered.

For support in creating new or editing your page layouts, we encourage you to review Salesforce documentation: [How to create and edit page layouts](https://help.salesforce.com/articleView?id=customize_layoutcreate.htm&type=5)

## Modify Search Layouts

* Configure the fields that display in the "Default" Search Layouts for [each of the Summit Events objects](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/ERD) by following these instructions on [How to configure Search Layouts](https://help.salesforce.com/articleView?id=search_results_setup_lex.htm&type=5). Configuring the default search layouts also helps you see more details on records in the 'Recently Viewed' list view for each object.

## Additional Considerations
There are some additional considerations to make Summit Events more personalized for your Organization/Institution. Consider the following and check out the provided resources:

* **Changing field Display Names**
    - Changing the field display name to better match your organization's/institution's jargon may be helpful to users.
    - The following instructions [how to change field label for managed package fields](https://www.greytrix.com/blogs/salesforce/2017/10/06/how-to-rename-the-field-label-in-salesforce-for-managed-package/).
    - **Note:** Doing this may create challenges in leveraging some of the documentation, so be mindful on what fields you're updating.
* **Creating Record Type and Custom Page Layouts**
    - Create Record Type and Custom Page layouts can help guide users based on their specific use cases. 
    - In Higher Education, you may have different layouts for Admissions and Advancements based on their needs and processes.
    - You can leverage Salesforce resources on [how to create Record Types](https://trailhead.salesforce.com/en/content/learn/projects/customize-a-salesforce-object/create-record-types).
* **Add the Summit Events Calendar to your website**
    - There are a couple of ways to do this and it may depend on your organization's/institution's website resources.
    - You can follow these instructions on getting the full calendar to a web page. - [Instructions Needed]()
    - You can follow these instructions for more advanced calendaring functionality and leverage the Summit Events Feed. - [Instructions Needed]()
* **Setup Contact and Lead Matching** 
    - Ideally, you'll want Event Registrants to be added to your Salesforce org in a meaningful way. You may want to create and match Leads and/or Contacts. Review the following to create a process that supports your organization/institution: [Contact and Lead Matching/Creation](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/contact-and-lead-matching/)
* **Create a Custom Template**
    - A custom template will allow for the registration form and pages to be branded for your organization/institution.
    - The "General SLDS" is standard and will allow for a professional looking form, but you may want more branding.
    - You can follow these instructions on [how to create a custom template](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/custom-templates/).
* **Add Summit Events Calendar to Website**
* Optionally, you can choose to add the Summit Events calendar to your website using the instructions on [Adding Event Calendar to Your Web Page](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/How-to-add-the-Event-Calendar-to-Any-Web-Page).

__Future__

* Add your custom parking pass for use with the "UG Parking Pass Link" on the the Summit Events Registration object. 

* Template - customize the "General SLDS" template or create a custom template.
