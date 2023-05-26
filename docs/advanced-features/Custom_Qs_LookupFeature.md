---
title: Lookup and Lookup Picklist question types
parent: Custom Questions
grand_parent: Advanced Features
---


This page covers more detail related to the Lookup features of custom questions.

There are two types of ways to present fields to the registrant which will lookup to existing records in your Salesforce org.  Lookup and Lookup Picklist.  The difference in the two methods are the following:

# Lookup
* Presents the field in the same way to the registrant as the lookup field is presented in Salesforce meaning the registrant would search for the record.
* Has the ability to display a hidden alternate text box field to capture information if registrant does not find a matching record.

# Lookup Picklist
* Presents the field as a drop-down of values from which they can select one option.
* Best for when you want registrant to pick from a list of predefined values.


# Fields that Control Behavior
* Lookup Object - object that contains the field with the data to be referenced
* Lookup Fields - fields that you want to show when the registrant searches for an item.
* Lookup Where Clause - using SOQL statement syntax, you can limit the records available for search in your lookup field. The API name of the field should be referenced. The WHERE clause follows field expression syntax. A fieldExpression is defined as follows: WHERE . Valid comparison operators include the following: =, !=, <, <=, >, >=, LIKE, IN, NOT IN, INCLUDES, and EXCLUDES.  ![Where Clause](images/WhereClauseExample.PNG)
    
* Lookup Results Icon (optional and for use with Lookup only) - Defaults to the standard account icon. Override the icon by entering the name of any standard icon found here https://www.lightningdesignsystem.com/icons/#standard
* Lookup Secondary Value Field (for use with Lookup only) - This is required if using the Lookup Object feature. The API name for the field to land manual, registrant inputs when the registrant opts out of looking up a record.
* Lookup Secondary Input Link Text (for use with Lookup only) - The link text that invites a user not to use the record lookup but rather fill in a value manually.
* Lookup Secondary Input Question (for use with Lookup only)- If the lookup query is opted out of these instructions will appear below a blank text box for manual entry.

__Lookup Example - Setup__
![Lookup Example Screen](images/Lookup%20Picklist.PNG)


__Lookup Picklist Example - Setup__

![Lookup Picklist Example Screen](images/Lookup_Picklist-Screen1.PNG)


