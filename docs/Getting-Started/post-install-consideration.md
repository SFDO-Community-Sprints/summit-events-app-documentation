---
title: Post-Installation Considerations
parent: Getting Started
nav_order: 2
---
# Post-Installation Considerations

After you install Summit Events in your org there are some additional considerations you'll want to make to ensure there is alignment with your organization. Before you begin, be sure that you've completed all of the steps to [Install and Configure](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/Installing/) Summmit Events.

## Picklist Considerations

Summit Events is delivered  with sample values for institution/organization based picklist fields. Some picklist fields are standard and should not be editted, like Status values on each object. To provide some guidance, review the below objects picklist fields, updating the values to meet your instutions/organizations needs. For information on updating picklist values, be sure to contact your Salesforce Administrator and follow Salesforce's [guided insturctions](https://trailhead.salesforce.com/en/content/learn/modules/picklist_admin/picklist_admin_manage). We encourage that you deactivate unused values rather than delete or rename.

<ins>Summit Events object</ins>
* Audience
* Building 
* Event Sponsor
* Event Type
* Location Type

<ins>Summit Events Instance object</ins>
*  Building Override *(should match "Building" on the Summit Events object)*
*  Category
* Location Type Override *(should match "Location Type" on the Summit Events object)*

<ins>Summit Events Appointment object</ins>
* Building *(should match "Building" on the Summit Events object)*

<ins>Summit Events Appointment Type object</ins>
* Appointment Category
* Appointment Type
* Auto Add Building *(should match "Building" on the Summit Events object)*

<ins>Summit Events Registration object</ins> *(Registrant will see these picklist values)*
* Applicant Type 
* Campus Tour Location
* Preferred Visit Time
* Registrant Gender
* Registrant Program Interest
* Registrant Pronouns
* Relationship to Institution

<ins>Summit Events Registration object</ins> *(Admin/Event Management)*
* Presentation Location *(should match "Building" on the Summit Events object)*
* Participation Type


<ins>Summit Events Questions object</ins>
* Exisiting Picklist Values *(Note: this will be based on any custom picklist fields on the Summit Events Registration object)*


---to be continued---

3. Other Customizations You Can Make:

* We include all fields for an object on the page layout so you know everything that is included.  You likely will not use all of these fields, so you should customize the page layouts so your users only see the fields you will be using.

 [How to create and edit page layouts](https://help.salesforce.com/articleView?id=customize_layoutcreate.htm&type=5)

* Add the Summit Events Registrant" related list to the Contact page layout so your users can easily see the events that your contacts have registered for.

* Configure the fields that display in the "Default" Search Layouts for [each of the Summit Events objects](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/ERD) by following these instructions on [How to configure Search Layouts](https://help.salesforce.com/articleView?id=search_results_setup_lex.htm&type=5). Configuring the default search layouts also helps you see more details on records in the 'Recently Viewed' list view for each object.

* If you need to change the display name of a field to better match your your organization works you can do that by following these instructions [How to change field label for managed package fields](https://www.greytrix.com/blogs/salesforce/2017/10/06/how-to-rename-the-field-label-in-salesforce-for-managed-package/)
  + Example:  The "Ask Applicant Type" field on Summit Events object could be renamed to "Ask Registrant Type" and the "Applicant Type" field on the Summit Events Registration object could be renamed to the "Registrant Type" field if your organization doesn't have applications but you want to use this field to categorize people registering for events.

* Add Record Types and custom page layouts on objects such as "Summit Events Host" and Summit Events to provide custom page layouts and picklist values to users based on their departments or roles in the organization
  + Example - add custom Record Types of "Admissions" and "Advancement" on the Summit Events object so each area sees fields and picklist values that are relevant to their department instead of showing them all fields and field values.

![Selecting a record type](images/1.2%20-%20Record%20type.png?raw=true)

   Optional: If you will only be using one record type, you can skip the step of selecting the record type each time by using these instructions to [set a default record type](https://help.salesforce.com/articleView?id=user_recordtype.htm&type=5).

[How to create Record Types](https://trailhead.salesforce.com/en/content/learn/projects/customize-a-salesforce-object/create-record-types)

* Add the Summit Events calendar to your website using these instructions [Add Event Calendar to Your Web Page](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/How-to-add-the-Event-Calendar-to-Any-Web-Page)

* If you want event Registrants to be matched with Contacts in Salesforce please use these instructions to setup this functionality [Contact Matching](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/0c--%E2%80%93-Setup-Contact-Matching)

__Future__

* Add your custom parking pass for use with the "UG Parking Pass Link" on the the Summit Events Registration object 

* Template - customize the "General SLDS" template or create a custom template
