---
title: Standard Registration Questions
parent: Standard Features
nav_order: 1
---

# Setting Up Standard Questions

<iframe width="560" height="315" src="https://www.youtube.com/embed/IysJ8RT3U0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**NOTE:  Screenshots apply to new installations beginning with Version 0.27.0.1.  If you have upgraded from a previous version, your screens may look different.

Once you have set up your Event Details, you may find that you want to further customize your event registration page to capture additional information. First Name, Last Name, and Email are default required registration questions for all events. Standard Questions are predefined questions that can be enabled to show during the registration process.  You can also change the prompts that display for these fields by overriding it with the text you add in the corresponding Label field.  

Standard Questions are configured on the Summit Events record in the Standard Options & Labels area.
![Standard Options and Labels Pic](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-StandardOpsTab.PNG)

Standard Questions, by default are set to _Do not ask_ and will not appear on the event’s registration page.  
In most cases, there are three options for Standard Questions:
1. _Do Not Ask_: question will not appear on the registration form
2. _Ask_: enables the phone field so that the question will appear on the registration form as optional field
3. _Ask and Require_: enables the phone field so that the question will appear on the registration form with a red asterisk, indicating it is required.


## Required Field Labels
The standard fields First Name, Last Name and Email  are all required fields.  The required fields labels section lets you rename the labels for these required fields as needed.  

## Phone Options | Label
Use this section to enable the phone question and change the labels/text associated with the phone question.  Ask Phone field, if enabled, will prompt registrants to provide a phone number and depending on the setting, prompt the registrant to choose the type of phone and indicate if they want to receive text messages about the event.    The standard phone question supports home and mobile phone types.  If more complexity is needed, additional or custom questions can be used.

**Let's take at how it works** 

We want to ask our registrant to enter their phone number and we want to know the type of number they are entering.  If they enter a mobile number, we want to get consent to be able to text them.  We’ll set the standard question field Ask Phone to _Ask with type require_.  We add instructional text into the Registrant Receive Texts Label field.  This will enable the checkbox field with the instructional text we entered to capture the registrant's consent.

Summit Event Setup

![Standard Phone Options Label](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-PhoneOptionsLabels-S1.PNG)


The registration process displays the standard phone number field with an added Type dropdown where the registrant can specify the type of phone.  When the registrant chooses a Type of Mobile, the text entered in the Registrant Receive Texts Label appears as a checkbox field on the registration form.

![Standard Phone Reg View](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-PhoneOptionsLabels-S2.PNG)

## Standard Options
_Note: The picklist values of these fields can be updated by your system administrator._

There are several standard optional questions that come predefined with Summit Events.  These fields can be enabled based on your registration needs using the Do not ask, Ask, and Ask and require field settings.  The standard question fields are as follows:

Preferred First Name
Gender
Pronouns
Title
Company or Organization
Date of Birth
Registrant Address
Application Type
Relationship (select all that apply)
Preferred Class Year
Last Name As Student
Ask Third Party Registrant

**Let's take at how it works**  

We want to ask our registrant if they prefer to go by a nickname.  We can use a standard question to accomplish this.  We set the Ask Preferred First Name standard question field to _Ask_ and change the prompt to read _Nickname_.

Summit Event Setup

![Ask Preferred First Name Image](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs1.png)

When the person registers, they see the prompt of Nickname but the answer they provide is stored in the standard Ask Preferred First Name field.
![Ask Preferred First Name Reg View](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs2.png)

There are a couple standard question fields that have additional functionality or behavior.  The Ask Applicant Type includes additional options of _Do not ask but assign First-Year, Do not ask but assign Transfer,_ and _Do not ask but assign Graduate_.  These options are educational institution centric and can be used to automatically set the Type field to one of the three predefined options without having to ask the registrant. If this is not a feature your organization needs, your administrator can remove these options by disabling the picklist item.

![Ask Applicant Type Image](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-AskType.png)

The Ask Third Party Registrant standard question allows the individual completing the registration to complete registration for someone else.   To enable this field, simply move desired values in the Available column to the Chosen column.  This enables this field and makes the Chosen items available during the registration process.

![Ask Third Party Reg Image](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-ThirdPartyReg.png)

## Modifying Standard Questions Picklist Values
The standard questions and labels fields on the Summit Event Object have a corresponding field on the Summit Event Registration object and can be modified there.  If you do not have access to do this, your system administrator can update them for you. See the [full list](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/object-field-resources/summit-event-obj/field-mappings/#summit-events-object-to-the-event-registration-object-mappings) of Summit Event Object Field Mappings for Standard Questions.

Let’s look at an example of how they can be updated.  We are asking for gender and we want to add the value “Non-binary” to the available choices.

**Let's take at how it works**

We’ll click on the Gear Icon and choose Setup to go to the Setup area.

![Setup Gear Icon](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-SetupGearIcon.png)

Starting on the Object Manager tab, we’ll use the search box to search for the Summit Events Registration object.  We’ll click on the label name to go to the settings area for the object.

![Registration Object Setup](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-RegObject.png)

From the setup menu for the object, we’ll click the Fields & Relationships menu and use the search box to search for the Registrant Pronouns field then click on the Field Label to open the Field Definition Detail screen.

![Object Search for Field](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-FieldSearch.png)

In the Values section, the New button allows us to add our additional item.

![Picklist New Button](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-PickListNewbutton.png)

We’ll add the new options and click Save.  

![Adding Picklist Item Screen](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-PickListAddItem.png)

![Picklist Item Added Screen](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-PickListItemAdded.png)


If we've enabled the field to display on our form, the new items will appear as an option for our registrant to select.

![New Item Displays](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/images/StandardQs-GenderDisplays.png)




_Updated 05/12/2022_
_Documentation contributed by: Tania Ortiz-Ashby_





