---
title: Setting up Contact Matching
parent: Contact and Lead Matching
grand_parent: Advanced Features
---

# Contact Matching Documentation

## Introduction
This documentation provides an overview of contact matching in Salesforce and how it is configured within the Summit Event application.

## Setting Up Contact Matching

### Salesforce Duplicate Rules
1. To set up contact matching, we leverage standard Salesforce functionality, specifically Salesforce Duplicate Rules.

2. In the Summit Event application, navigate to the "Contact and Lead Matching" tab to configure contact matching.

3. You have the option to use an advanced contact creation rule with custom Apex logic or use Salesforce Duplicate Rules.

### Configuring Salesforce Duplicate Rules
4. When choosing to use Salesforce Duplicate Rules, select the desired contact creation duplicate rule.

5. You can set up matching rules based on specific criteria, such as first name, last name, or email address. These rules determine when duplicates are identified.

6. Activate the matching rule once you've configured it.

### Custom Metadata for Field Mapping

7. Summit Events allows custom field mapping between Salesforce and the application. These mappings define how data flows from Summit Event to Salesforce.

8. Custom metadata types define which fields should be matched and transferred to the contact record.

9. You can specify fields like first name, last name, and email address for matching and mapping purposes.

### Contact Creation Options
10. Choose the action to take when a match is found or not found:
    - Create a new contact: Automatically create a new contact record in Salesforce when no match is found.
    - Skip creating: Skip creating a contact and handle it manually or through a flow.

11. Specify how the application should handle multiple matches, whether to skip matching entirely or match to the most recently modified record.

## Testing Contact Matching

12. Test the contact matching feature by registering multiple instances under the same name.

13. Check the matching log to see which records matched and the actions taken based on your configuration.

14. Verify that custom field mappings and data transfers work as expected.

## Field Values Automatically Added to Contacts When Matching Rules Create New Contacts

When a new Contact is created by the Contact Matching Rule the following fields from the Summit Events Registration record are automatically added to the Contact record:

![Contact Matching Rule hardcoded fields v2](https://user-images.githubusercontent.com/60475518/234095301-13f54e07-a68a-4a1c-9136-c04d2d935baf.png)

## Adding Additional Field Values When Matching Rules Create New Contacts
If you want additional field values to be added to the Contact record you can use the "Custom Metadata Contact Matching Method" on Summit Events to do this.  Custom Metadata Types is the Salesforce tool that allows an admin to create field mappings that are read by the code in the managed package - for details take a look at [More Info On Custom Metadata Types](https://help.salesforce.com/articleView?id=custommetadatatypes_about.htm&type=5).

To setup your custom field mappings: 
1. Select a "Custom Metadata Contact Matching Method" value on the Summit Events record (The only Matching Method available in the current version is "Admissions", additional options will be added soon).
2. Follow the instructions here to access the Custom Metadata records in Setup to [Add or Edit Custom Metadata Records](https://help.salesforce.com/articleView?id=custommetadatatypes_ui_populate.htm&type=5). 
     + Go to "Setup", then in the Quick Find box at the top of the setup menu type "Custom Metadata Types.
     + Click on the "Custom Metadata Types" link and find the "Summit Events Contact Matching Mapping" section. 
     + Click on "Manage Records" link before this section (_don't_ click on the Summit Events Contact Matching Mapping" link).
3. Create a Custom Metadata record for each field value you want to be added to the Contact record.  Note that you have the option to either map values from the Summit Events Registration record or add hardcoded values that will be added to the Contact record.
      + If you are mapping field values from Summit Events Registration make sure you use the field API name, not the field label.

Here is an example of what the Custom Metadata records look like for Contacts:

![Contact Custom Metadata Example](https://github.com/SFDO-Community-Sprints/Summit-Events-App/blob/master/images/3.9_Contact_Matching%20_Custom_Metadata_Mapping_Example.png?raw=true)



## Conclusion
This documentation covers the setup and configuration of contact matching in the Summit Event application using Salesforce Duplicate Rules and custom metadata for field mapping. Testing the feature helps ensure that records are matched and data is transferred accurately.
