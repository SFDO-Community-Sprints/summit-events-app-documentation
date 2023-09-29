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

4. When choosing to use Salesforce Duplicate Rules, select the desired contact creation duplicate rule.

### Creating New Salesforce Duplicate Rules
1. You can set up matching rules based on specific criteria, such as first name, last name, or email address. These rules determine when duplicates are identified.
2. configure the Lead Duplicate Rule settings, follow these guidelines:
- Set the "Record-Level Security" field value to "Bypass sharing rules." This lets guest user profile used for registration see the Leads in the org.
- Ensure that the "Alert" checkboxes are unchecked. This is needed to ensure the registrant does not receive alert messages.
3. Activate the matching rule once you've configured it.

### Add the Custom Rule Name as a Picklist value in the Contact Creation Rule feild of the Summit Event object.
1. From Setup, search for the Summit Event object
2. In the Fields and Relationships area, search for and select the Contact Creation Rule field.
3. Click the New button to add a New piclist value.
4. Copy and Paste the name of your newly created duplicate rule here and save your changes.
5. Under Picklist options, click on Change next to the controlling field "Contact Matching Rule".  
6. Make sure the new Picklist item is added to Salesforce Duplicate Rule.





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

### Custom Metadata for Field Mapping
By default there are standard fields that are mapped from the registration record and written to the Contact record when a match is found.  See "Field Values Automatically Added to Contacts when Matching Rule Creates New Contact" section for details.  In addition to this, ummit Events allows custom field mapping between the registration and the Contact record. These mappings define how data flows from Summit Event to Salesforce.

To map additional feilds follow these steps:
1. In setup, search for and select Custom Metadata Types.
2. Click on the Label "Summit Events Contact Matching Mapping".
3. Next, click on the Manage Summit Event Contact Matching Mappings button.
4. Click the New button, to add a new mapping.
8. Enter the information to be mapped.
- Label - Label for custom metadata entery
- Source Type - set to "Field"
- Soure Object - set to "summit__Summit_Events_Registration__c"
- Source Value - the api name of the field on the summit__Summit_Events_Registration__c registration object.
- Contact Field API Name - the api Name of the feild on the Contact object where the value will be stored/mapped.
- Summit Events Contact Matching Mapping Name - ????
- Protected Component - ????
- Contact Matching Method - set to "Admissions"
- Matching Only - check if want to match on field only, not to write data to field.

* Create a Custom Metadata record for each field value you want to be added to the Contact record.  Note that you have the option to either map values from the Summit Events Registration record or add hardcoded values that will be added to the Contact record.
      + If you are mapping field values from Summit Events Registration make sure you use the field API name, not the field label.

Here is an example of what the Custom Metadata records look like for Contacts:

![Contact Custom Metadata Example](https://github.com/SFDO-Community-Sprints/Summit-Events-App/blob/master/images/3.9_Contact_Matching%20_Custom_Metadata_Mapping_Example.png?raw=true)


## Conclusion
This documentation covers the setup and configuration of contact matching in the Summit Event application using Salesforce Duplicate Rules and custom metadata for field mapping. Testing the feature helps ensure that records are matched and data is transferred accurately.
