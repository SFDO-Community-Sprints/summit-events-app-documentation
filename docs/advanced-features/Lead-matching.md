---
title: Setting up Lead Matching
parent: Contact and Lead Matching
grand_parent: Advanced Features
---

# Lead Matching Documentation

## Introduction
This documentation provides an overview of lead matching in Salesforce and how it is configured within the Summit Event application.

## Setting Up Lead Matching

### Salesforce Duplicate Rules
To set up Lead matching, we leverage standard Salesforce functionality, specifically Salesforce Duplicate Rules.

In the Summit Event application, navigate to the “Contact and Lead Matching” tab to configure contact matching.

You have the option to use an advanced contact creation rule with custom Apex logic or use Salesforce Duplicate Rules.

Lead Matching Rules in Summit Events utilize native Salesforce Duplicate Rules and Custom Matching Rules. This allows an organization to create their own matching logic. You can learn more about this at [Salesforce Duplicate Rule and Matching Rule documentation](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_duplicate_rule.htm).

## How to Set Fields on Summit Events Record to Use Lead Matching Rules

### Option 1: Contact Matching first, then Lead Matching if Contact match not found.
Both Contact Matching and Lead Matching setup on an event record.

### Option 2: Lead Matching only.
Lead Matching only setup on an event record.

## Field Values Automatically Added to Leads When Matching Rules Create New Leads

When a new Lead is created by the Lead Matching Rule, the following fields from the Summit Events Registration record are automatically added to the Lead record:

![Hardcoded values mapped from Summit Events Registration to Lead](https://raw.githubusercontent.com/SFDO-Community-Sprints/Summit-Events-App/master/images/Lead%20Matching%20Rule%20hardcoded%20fields.png?raw=true)

## Adding Additional Field Values When Matching Rules Create New Leads

If you want additional field values to be added to the Lead record, you can use the "Custom Metadata Lead Matching Method" on Summit Events to do this. Custom Metadata Types is the Salesforce tool that allows an admin to create field mappings that are read by the code in the managed package. For details, take a look at [More Info On Custom Metadata Types](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_custommetadata.htm).

To set up your custom field mappings:

1. Select a "Custom Metadata Lead Matching Method" value on the Summit Events record.
2. Follow these instructions to access the Custom Metadata records in Setup to Add or Edit Custom Metadata Records:
   - Go to "Setup."
   - In the Quick Find box at the top of the setup menu, type "Custom Metadata Types."
   - Click on the "Custom Metadata Types" link and find the "Summit Events Lead Matching Mapping" section.
   - Click on the "Manage Records" link before this section (don't click on the Summit Events Lead Matching Mapping" link).
3. Create a Custom Metadata record for each field value you want to be added to the Lead record. Note that you have the option to either map values from the Summit Events Registration record or add hardcoded values that will be added to the Lead record.
4. If you are mapping field values from Summit Events Registration, make sure you use the field API name, not the field label.

Here is an example of what the Custom Metadata records look like for Leads:

![Summit Events Custom Metadata example](https://github.com/SFDO-Community-Sprints/Summit-Events-App/blob/master/images/Lead%20Matching%20Custom%20Metadata%20Mappings.png?raw=true)


## Lead Duplicate Rule Settings

To configure the Lead Duplicate Rule settings, follow these guidelines:

- Set the "Record-Level Security" field value to "Bypass sharing rules."  This lets guest user profile used for registration see the Leads in the org.
- Ensure that the "Alert" checkboxes are unchecked.  This is needed to ensure the registrant does not receive alert messages.

Any fields mapped using Custom Metadata (as detailed in the "Adding Additional Field Values When Matching Rules Create New Lead" section below) are also available to be included in your Salesforce Duplicate Rule.
 
![Lead Duplicate Rule Settings](https://raw.githubusercontent.com/SFDO-Community-Sprints/Summit-Events-App/master/images/Lead%20Duplicate%20Rule%20settings%20screenshot%20for%20Summit%20Events%20matching.png)
