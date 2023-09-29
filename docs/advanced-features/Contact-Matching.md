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

## Conclusion
This documentation covers the setup and configuration of contact matching in the Summit Event application using Salesforce Duplicate Rules and custom metadata for field mapping. Testing the feature helps ensure that records are matched and data is transferred accurately.
