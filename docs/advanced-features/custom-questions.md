---
title: Custom Questions
parent: Advanced Features
has_children: true
---

# Custom Questions

## Registrant and Guest Questions
Summit Events comes with [standard questions](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/standard-reg-questions/) and [additional questions](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/standard-reg-questions/) that can be asked during the registration process.  These fields have specific preconfigured field types (e.g. text, picklist, etc.).   The standard questions are configured on the Summit Events event pages.  You can select which ones you want to display, if the field should be required, you can even change the label of the question.    These may be all that is needed for most of your events.  If you have more advanced needs, Summit Events also provides the ability to create your own custom questions.   This page covers creating custom questions.

## Custom Questions
Some considerations to keep in mind when creating custom questions:
* A field is needed on the Summit Events Registration object to house the information entered by the registrant.
* A matching question is needed on the Summit Event that references the field on the Summit Events Registration Object.  Care should be used to make sure that the fields accept the same type of data.  For example, you would not write text to a number field.
* If creating a Lookup Field, a sharing rule needs to be set up to the object used for the lookup.   Sharing rules can also limit the types of records that are available during lookup.  For example, you may only want to include Accounts that have a specific record type or that are coded in some manner.
* The guest user must have read permission on the Lookup object as well as to the fields on the lookup-to object (In our example, Account) to any fields that are listed as “Lookup fields”.

 <iframe width="560" height="315" src="https://www.youtube.com/embed/IsFGoQRQOQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>
There are several steps involved in creating new custom questions.  
<img width="809" alt="image" src="https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/4521914/7050bfc4-0684-403d-a004-2dfa56e56d5f">



## 1. Create new question field on Summit Events Registration object
This is where the answer the registrant provides will be stored. To create a new field on the Summit Events Registration object:
1. From Setup, select the Object Manager tab.
2. Search for and select the Summit Events Registration object.
3. Follow the process to create the new field.
4. **Note the API name of your newly created field**, you will need this later.  
5. Give access to the question to the Guest User.   See the section labeled “Custom Questions - Guest User Access“.

## 2. Create a new question on your Summit Event 
This is what tells the registration form to display the question. To create a new question for use on your Summit Event:
1. Once you have created your Summit Event record, navigate to the Summit Events Questions related list.  
2. Click the New button and add the new question. 
3. Complete the appropriate fields in the sections for the type of information you want to capture.  
4. Save the new question.  Repeat this process for each additional question needed.

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
* __Display Style__ - controls how Summit Event Questions are displayed on the registration page. You can select from display options to show the question full width, half width and third width.  If no width is selected, the default setting is half width. You can control this on each Summit Event Question record by utilizing the Display field. This feature will adjust on mobile devices to full width as well as adjust to browser size changes.

### Field Question Details Section
There are several types of question fields which can be created and the type will dictate what fields you complete in the Field Question Details section and in the Record Lookup section.  If you are creating a Record Lookup field, you will only complete the Map to Field in the Field Question Details section.  
* __Map to Field__ - the Summit Event Registration object field to which this field should map.  Enter the API field name of the field you created here.  The API field name should end in __c.
* __Text Limit__ - determines the character limit on a text field.  This should never be longer than the field length of the Summit Event Registration object field where the data will be stored.
* __Existing Picklist Values__ - there are a number of predefined existing picklist fields that can be referenced.  Choose one of them if appropriate.
* __Picklist Values__ - Values that will display as choices in a picklist field.  Enter each item on its own line. 

### Record Lookup Section
The record lookup section is only to be completed if looking up values from another object and field and returns the record ID of the selected record.  See [Lookup and Lookup Picklist](Custom_Qs_LookupFeature.md) for detailed setup information.
* __Lookup Object__ - object that contains the field with the data to be referenced.
* __Lookup Fields__ - fields that you want to show when the registrant searches for an item.
* __Lookup Where Clause__ - using SOQL statement syntax, you can limit the records available for search in your lookup field.  The API name of the field should be referenced.  The WHERE clause follows field expression syntax. A fieldExpression is defined as follows: 
> WHERE <fieldAPIName> <comparisonOperator> <value>.  Valid comparison operators include the following: =, !=, <, <=, >, >=, LIKE, IN, NOT IN, INCLUDES, and EXCLUDES. 
* __Lookup Results Icon (optional)__ - Defaults to the standard account icon. Override the icon by entering the name of any standard icon found here:
https://www.lightningdesignsystem.com/icons/#standard
* __Lookup Secondary Value Field__ - This is required if using the Lookup Object feature.  The API name for the field to land manual, registrant inputs when the registrant opts out of looking up a record.
* __Lookup Secondary Input Link Text__ - The link text that invites a user not to use the record lookup but rather fill in a value manually.
* __Lookup Secondary Input Question__ - If the lookup query is opted out of these instructions will appear below a blank text box for manual entry.


## 3. If needed, give the User Guest access to the custom field via the Summit Events Registrant Custom permission set. 
1. From setup, search for Permission Sets.
2. Locate the your custom permission set for the guest user access.
3. Click on Object settings.
4. Edit the Summit Events Registrations object and give edit access to the newly created field.
5. Save the changes.
The custom permission set should have been created by the administrator as part of the post installation steps.  For more information about creating a custom permission set see:
[Create a Custom Permission Set for the Guest User](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/Installing/#create-a-custom-permission-set-for-the-guest-user)
<br>
<br>

# Troubleshooting
__Receive error message:__ "Question setup issue(s): Map to field: Field Your_Custom_Field__c is not accessible by guest user.Map To Field: Field Your_Custom_Field__c is not accessible by guest user.
 
- __Solution:__  Give guest user edit access to field.  See [Troubleshooting](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/blob/main/docs/Getting-Started/troubleshoot.md) for details on guest user access.

 
__Lookup field displays, but no information shows for search or selection__
 
- __Possible solutions below:__ 
1. Review the information in the Lookup Where Clause field and verify that records match this criteria.  

2. Make sure the type of record is included in the [Sharing rules](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/Installing/#set-sharing-rules).  Account sharing rule example: 
![](images/SampleAccountSharingRules.png)

