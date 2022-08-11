---
title: Contact and Lead Matching
parent: Advanced Features
---

[Contact Matching Rules](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/contact-and-lead-matching/#contact-matching-rules)

[Lead Matching Rules](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/contact-and-lead-matching/#lead-matching-rules)

*These pages are a work in progress and still needing reviewing/ additional content. If you're interested in contributing to the Summit Events App and want to help provide support by creating this page, comment below and let us know!*

_Note:  This is optional functionality, if your organization does not want to match Summit Events Registration records with Contacts or Leads then you can stop reading and skip this step_

When a Summit Events Registration record is created several fields about the person registering are populated.   These values only exist in the Summit Events Registration object unless you select a Contact or Lead Matching Rule on the Summit Events record.  If you select a Contact Matching Rule on the Summit Events record this rule will check to see if a Contact record exists in Salesforce for this person:
* If the Contact Matching Rule finds a Contact record that matches the rule logic, it matches this Contact with the Summit Events Registration record.
* If the Contact Matching Rule does not find a Contact record that matches the rule logic, you can either create a new Contact record that is matched with the Summit Events Registration record, or you can skip Contact creation and enable Lead matching to search for a Lead next using these [details on Setting up Lead Matching](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/0c-%E2%80%93-Setup-Lead-Matching).

# Contact Matching Rules

Contact Matching Rules in Summit Events utilizes native Salesforce Duplicate Rules and Custom Matching Rules.  This allows an organization to create their own matching logic.  You can learn more about this at [Salesforce Duplicate Rule and Matching Rule documentation](https://help.salesforce.com/articleView?id=duplicate_rules_map_of_reference.htm&type=5)

_Note that any fields mapped using Custom Metadata (as detailed in the "Adding Additional Field Values When Matching Rules Create New Contacts" section below) are also available to be included in your Salesforce Duplicate Rule._

_Note that when using a Salesforce Duplicate Rule it is important that you set the "Record-Level Security" field value to "Bypass sharing rules" so the guest user profile used for registration can see the Contacts in the org, and also that the "Alert" checkboxes are unchecked so the registrant does not receive alert messages:_

## How to Set Fields on Summit Events record to Use Contact Matching Rules

### Option 1:  Contact Matching only
![Contact Matching only setup on an event record](https://github.com/SFDO-Community-Sprints/Summit-Events-App/blob/master/images/Contact%20Matching%20only%20Setup%20on%20Summit%20Event%20record.png?raw=true)

### Option 2:  Contact Matching first, then Lead Matching if Contact match not found
![Both Contact Matching and Lead Matching setup on an event record](https://github.com/SFDO-Community-Sprints/Summit-Events-App/blob/master/images/Contact%20and%20Lead%20Matching%20Setup%20when%20using%20both%20on%20Summit%20Event%20record.png?raw=true)

## Field Values Automatically Added to Contacts When Matching Rules Create New Contacts

When a new Contact is created by the Contact Matching Rule the following fields from the Summit Events Registration record are automatically added to the Contact record:

![Hardcoded values mapped from Summit Events Registration to Contact](https://github.com/SFDO-Community/Summit-Events-App/blob/master/images/Contact%20Matching%20Rule%20hardcoded%20fields%20v2.png)

## Adding Additional Field Values When Matching Rules Create New Contacts
If you want additional field values to be added to the Contact record you can use the "Custom Metadata Contact Matching Method" on Summit Events to do this.  Custom Metadata Types is the Salesforce tool that allows an admin to create field mappings that are read by the code in the managed package - for details take a look at [More Info On Custom Metadata Types](https://help.salesforce.com/articleView?id=custommetadatatypes_about.htm&type=5).

To setup your custom field mappings: 
1) Select a "Custom Metadata Contact Matching Method" value on the Summit Events record (The only Matching Method available in the current version is "Admissions", additional options will be added soon)
2) Follow the instructions here to access the Custom Metadata records in Setup to [Add or Edit Custom Metadata Records](https://help.salesforce.com/articleView?id=custommetadatatypes_ui_populate.htm&type=5) 
     + Go to "Setup", then in the Quick Find box at the top of the setup menu type "Custom Metadata Types
     + Click on the "Custom Metadata Types" link and find the "Summit Events Contact Matching Mapping" section 
     + Click on "Manage Records" link before this section (_don't_ click on the Summit Events Contact Matching Mapping" link)
3) Create a Custom Metadata record for each field value you want to be added to the Contact record.  Note that you have the option to either map values from the Summit Events Registration record or add hardcoded values that will be added to the Contact record.
      + If you are mapping field values from Summit Events Registration make sure you use the field API name, not the field label.

Here is an example of what the Custom Metadata records look like for Contacts:

![Contact Custom Metadata Example](https://github.com/SFDO-Community-Sprints/Summit-Events-App/blob/master/images/3.9_Contact_Matching%20_Custom_Metadata_Mapping_Example.png)



[Optional Next Step if you use Leads: Setup Lead Matching](https://github.com/SFDO-Community/Summit-Events-App/wiki/0c-%E2%80%93-Setup-Lead-Matching)



_Note:  This is optional functionality, if your organization does not use Leads or does not want to match Summit Events Registration records with Leads then you can stop reading and skip this step_.  [If you are looking for Contact Matching instead click here](https://github.com/SFDO-Community-Sprints/Summit-Events-App/wiki/0c--%E2%80%93-Setup-Contact-Matching)

When a Summit Events Registration record is created several fields about the person registering are populated.   These values only exist in the Summit Events Registration object unless you select a Contact or Lead Matching Rule on the Summit Events record.  If you select a Lead Matching Rule on the Summit Events record this rule will check to see if a Lead record exists in Salesforce for this person:
* If the Lead Matching Rule finds a Lead record that matches the rule logic, it matches this Lead with the Summit Events Registration record.
* If the Lead Matching Rule does not find a Lead record that matches the rule logic, it will create a new Lead record and match this newly created Lead with the Summit Events Registration record.

# Lead Matching Rules

Lead Matching Rules in Summit Events utilizes native Salesforce Duplicate Rules and Custom Matching Rules.  This allows an organization to create their own matching logic.  You can learn more about this at [Salesforce Duplicate Rule and Matching Rule documentation](https://help.salesforce.com/articleView?id=duplicate_rules_map_of_reference.htm&type=5)

_Note that any fields mapped using Custom Metadata (as detailed in the "Adding Additional Field Values When Matching Rules Create New Lead" section below) are also available to be included in your Salesforce Duplicate Rule._

_Note that when using a Salesforce Duplicate Rule it is important that you set the "Record-Level Security" field value to "Bypass sharing rules" so the guest user profile used for registration can see the Leads in the org, and also that the "Alert" checkboxes are unchecked so the registrant does not receive alert messages:_
  
![Lead Duplicate Rule Settings](https://raw.githubusercontent.com/SFDO-Community-Sprints/Summit-Events-App/master/images/Lead%20Duplicate%20Rule%20settings%20screenshot%20for%20Summit%20Events%20matching.png)

## How to Set Fields on Summit Events record to Use Lead Matching Rules
### Option 1: Contact Matching first, then Lead Matching if Contact match not found
![Both Contact Matching and Lead Matching setup on an event record](https://github.com/SFDO-Community-Sprints/Summit-Events-App/blob/master/images/Contact%20and%20Lead%20Matching%20Setup%20when%20using%20both%20on%20Summit%20Event%20record.png?raw=true)

### Option 2:  Lead Matching only
![Lead Matching only setup on an event record](https://github.com/SFDO-Community-Sprints/Summit-Events-App/blob/master/images/Lead%20Matching%20only%20Setup%20on%20Summit%20Event%20record.png?raw=true)

## Field Values Automatically Added to Leads When Matching Rules Create New Leads

When a new Lead is created by the Lead Matching Rule the following fields from the Summit Events Registration record are automatically added to the Lead record:

![Hardcoded values mapped from Summit Events Registration to Lead](https://raw.githubusercontent.com/SFDO-Community-Sprints/Summit-Events-App/master/images/Lead%20Matching%20Rule%20hardcoded%20fields.png)

## Adding Additional Field Values When Matching Rules Create New Leads
If you want additional field values to be added to the Lead record you can use the "Custom Metadata Lead Matching Method" on Summit Events to do this.  Custom Metadata Types is the Salesforce tool that allows an admin to create field mappings that are read by the code in the managed package - for details take a look at [More Info On Custom Metadata Types](https://help.salesforce.com/articleView?id=custommetadatatypes_about.htm&type=5).

To setup your custom field mappings: 
1) Select a "Custom Metadata Lead Matching Method" value on the Summit Events record 
2) Follow the instructions here to access the Custom Metadata records in Setup to [Add or Edit Custom Metadata Records](https://help.salesforce.com/articleView?id=custommetadatatypes_ui_populate.htm&type=5) 
     + Go to "Setup", then in the Quick Find box at the top of the setup menu type "Custom Metadata Types
     + Click on the "Custom Metadata Types" link and find the "Summit Events Lead Matching Mapping" section 
     + Click on "Manage Records" link before this section (_don't_ click on the Summit Events Lead Matching Mapping" link)
3) Create a Custom Metadata record for each field value you want to be added to the Lead record.  Note that you have the option to either map values from the Summit Events Registration record or add hardcoded values that will be added to the Lead record.
      + If you are mapping field values from Summit Events Registration make sure you use the field API name, not the field label.

Here is an example of what the Custom Metadata records look like for Leads:

![Summit Events Custom Metadata example](https://github.com/SFDO-Community-Sprints/Summit-Events-App/blob/master/images/Lead%20Matching%20Custom%20Metadata%20Mappings.png?raw=true)
