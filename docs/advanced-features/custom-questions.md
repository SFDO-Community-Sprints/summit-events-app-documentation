---
title: Custom Questions
parent: Advanced Features
nav_order: 1
---

# Registrant and Guest Questions
Summit Events comes with standard questions that can be asked during the registration process.  These fields have specific preconfigured field types (e.g. text, picklist, etc.).   The standard questions are configured on the Summit Events event pages.  You can select which ones you want to display, if the field should be required, you can even change the label of the question.    These may be all that is needed for most of your events.  If you have more advanced needs, Summit Events also provides the ability to create your own custom questions. 

# Standard Questions
Standard questions are predefined questions that can be enabled to show during the registration process.   The fields default to Do not ask, meaning they will not display.  By selecting Ask from the drop-down, the question will display on the registration page.  If the field should be required, select Ask and require.  The label of the question can also be changed if needed.   Standard questions appear on the first page of the registration process.

# Custom Questions
There are a few components required for custom questions.
* A field on the Summit Events Registration object to house the information entered by the registrant.
* A matching question on the Summit Event that references the field on the Summit Events Registration Object.  Care should be used to make sure that the fields accept the same type of data.  For example, you would not write text to a number field.

## Create new question field on Summit Events registration object
This is where the answer the registrant provides will be stored.  
To create a new field on the Summit Events registration object:
1. From Setup, select the Object Manager tab.
2. Search for and select the Summit Events registration object.
3. Follow the process to create the new field.
4. Note the API name of your newly created field, you will need this later.  
5. Give access to the question to the Guest User.   See the section labeled “Custom Questions - Guest User Access “

## Create a new question on your Summit Event 
This is what tells the registration form to display the question.  
To create a new question for use on your Summit Event:
1. Once you have created your Summit Event record, navigate to the Summit Events Questions related list.  
2. Click the New button and add the new question. 
3. Complete the appropriate fields in the sections for the type of information you want to capture.
4. Save the new question.  Repeat this process for each additional question needed.

![](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Advanced-Features/images/AdvancedQs-ExamplesScreenshot.PNG)
![](../images/AdvancedQs-ExamplesScreenshot.PNG)

### Information Section
* __Summit Events Question Name__ - the backend name for the question.
* __Event__ - the event for which the registration question should apply.  The Event should default to the Event from where you started the process.  If it does not, search for and select the event here.
* __Question Field Type__ - type of field for example, text, picklist, number, etc.  Choose the type of the field.  This should match the field type of the Summit Events Registration object where the data will live.
* __Question Label__  - the label you want to display on the registration form. 
* __Instructions__ - enter helpful instructions related to completing the field.   Instructions appear below the question on the registration form.
* __Help Text__ - enter optional help text if desired.  Help Text appears if they hover over the bubble next to the question.
* __Registration Type__ - Registration Type to which this question applies.  Questions can be asked of just the Registrant, just the Guest or both.
* __Required?__ - Indicates the field should be required.  Check if you want to require the person to answer this question.
* __Is Visible?__ - Indicates the field should be visible on the form.  The Is Visible checkbox is set by default.  You can deselect it if you do not want the field to display.
* __Default Value__ -  Can be used to set the default value for the field.  This is especially helpful if you want to store a default value in a field but not display the field on the form.  
* __Error Assist Text__ - text that can be displayed if the answer provided is not valid.
* __Display Order__ - order in which this question should display on the additional questions page of the registration process.

### Field Question Details Section
There are several types of question fields which can be created and the type will dictate what fields you complete in the Field Question Details section and in the Record Lookup section.  If you are creating a Record Lookup field, you will only complete the Map to Field in the Field Question Details section.
* __Map to Field__ - the Summit Event Registration object field to which this field should map.  Enter the API field name of the field you created here.  The API field name should end in __c.
* __Text Limit__ - determines the character limit on a text field.  This should never be longer than the field length of the Summit Event Registration object field where the data will be stored.
* __Existing Picklist Values__ - there are a number of predefined existing picklist fields that can be referenced.  Choose one of them if appropriate.
* __Picklist Values__ - Values that will display as choices in a picklist field.  Enter each item on its own line. 

### Record Lookup Section
The record lookup section is only to be completed if looking up values from another object and field.   
* __Lookup Object__ - object that contains the field with the data to be referenced
* __Lookup Fields__ - fields that you want to show when the registrant searches for an item.
* __Lookup Where Clause__ - using SOQL statement syntax, you can limit the records available for search in your lookup field.  The API name of the field should be referenced.  The WHERE clause follows field expression syntax. A fieldExpression is defined as follows: WHERE <fieldAPIName> <comparisonOperator> <value>.  Valid comparison operators include the following: =, !=, <, <=, >, >=, LIKE, IN, NOT IN, INCLUDES, and EXCLUDES. 
* __Lookup Results Icon (optional)__ - Defaults to the standard account icon. Override the icon by entering the name of any standard icon found here https://www.lightningdesignsystem.com/icons/#standard
* __Lookup Secondary Value Field__ - This is required if using the Lookup Object feature.  The API name for the field to land manual, registrant inputs when the registrant opts out of looking up a record.
* __Lookup Secondary Input Link Text__ - The link text that invites a user not to use the record lookup but rather fill in a value manually.
* __Lookup Secondary Input Question__ - If the lookup query is opted out of these instructions will appear below a blank text box for manual entry.

