---
title: Creating an Event Email
parent: Standard Features
has_children: true
---


# Create an Event Email

Summit Events makes it easy to send an automated email to your registrant based on their registration status. This feature is a transactional-based feature, meaning that it sends emails based on changes to the registrant's status to the email provided. It is not intended for bulk messaging.  For example, the Director of Career Services could use this feature to send an email to the registrant when they register for her career services event.  Let's take a look at the steps it takes to create the email message.  This post will cover the basic features that will work for most simple events.  

### 1. Click the "New" button

Starting from the existing Summit Events Event record, locate the Summit Events Emails related list and click the New button.  Depending upon how your system is configured, the related list may be found in the Related List Quick Links area at the top of the event, if that is the case, hover over the link to access the New button.  If it is found along the right-side of the event screen or bottom of the event page with other related lists, click on the drop-down arrow and choose New. When creating a new email from the event, the event name populates automatically.

![creating a new Summit Events email](../images/create-new-SEA-email.png)

### 2. Provide an Org Email

This feature is based on utilizing an [Organization-Wide Email address](https://help.salesforce.com/s/articleView?id=sf.orgwide_email.htm&type=5). The email address utilized will need to be accessible to All Profiles. Once the email address is established, from the drop-down selection on "Select Organization Wide Email", select an approved and appropriate Org-Wide Email address. This is the email address that shows as the sender address and will be the address to which the email is sent should they reply to the email. Hit "Save Letterhead Settings".

### 3. Choose a Letterhead

This feature currently leverages the [Classic Salesforce Letterhead](https://help.salesforce.com/s/articleView?id=sf.creating_letterheads.htm&type=5) template builder which can be found in the Setup menu and typing "letterhead" in the quick search menu. Once you have a classic letterhead created, from the drop down selection on "Select Classic Letterhead", select an approved Classic Letterhead. The selected letterhead is how your email will be wrapped. Hit "Save Letterhead Settings".

![Save Letterhead Settings](../images/save-letterhead.png)

### 4. Select the appropriate Action and Sub Action Status

Choose the Action Status value of "Registered" from the Action Status drop-down. Registered is being selected as it is the default status when an individual submits their registration and it is common practice for the person to receive an email when they complete the registration process. Sub Action Status is optional.  No Sub Action Statuses are being used for this event so this is left blank.

![Selecting Action Status for an email](../images/registered-status.png)

### 5. Enter the Subject

Using the Subject field, enter a meaningful subject for the email. This is what shows as the subject to the person receiving the email message.

### 6. Enter the Email Content

Using the rich text editor, enter the details of the email into the Email Content Field.  This is what will appear in the body of the email message.  API names of the Salesforce fields can be used within the email so content can be dynamic based on the registration information. These are also sometimes referred to as merge field names.  A system administrator can help find the API names for fields. Additional documentation with API names is in progress. 

#### Merge Fields
Merge fields can be used in the email template to merge in data about the event and registrant.   Only fields on the Summit Event Registration object can be merged into the email content.  The Sumit Event Registration object contains formula fields to many of the frequently referenced fields from the Event and Event Instance.  If needed, additional formula feilds can be created on the Summit Event Registration object to reference fields from related objects such as the Event or Event Instance.  When adding merge feilds, it is the API name of the feild that is used.   All API field names should be encompassed with merge brackets, often seen in the classic email template builder. Example: {!summit__First_Name__c}. 

### 7. Provide a BCC Email (optional)

On the registration record, an Event Manager can manually add a(n) email(s) to the BCC Transactional Emails field on the Summit Events Registration record while selecting a corresponding status on the BCC Transactional Email Status field to allow for unique individuals to be added on triggered email communications to that specific registrant. A higher education use case may involve adding a coach or faculty member on a confirmation email that has the registrant’s itinerary on it as a reminder/notification.

Please note that if the Summit Events Email record includes an Action Sub status the Email will not send. This functionality is limited to Summit Event Registration field Status and Summit Events Email field Action Status matching. An enhancement request has been entered for the functionality to send regardless of Summit Events Email field Action Sub status.

*Note: this text area field allows value that has no more than 1000 characters.* 

![BCC Feature](../images/BCCFeature.png)


### 8. Save the new email

These are all the fields we need to complete for our simple event.  For information about all of the fields, see the Field list below.

*Note: Other Salesforce products such as Pardot and Markting Cloud have much more emailing and engagement features.*
  
*Note: We recommend creating an event email from the Event as this will automatically associate the event with the email. If you go to the Summit Event Emails object and create an event email, you will need to assign an existing event record to the Event field. If the value you input does not match with an existing record, an error will be triggered.*



## Event Email Fields and Descriptions

**Summit  Event Email Name**: An identification number of each event email. It is a standard Salesforce field and displays in a format of Email-{0000}. The system will automatically generate and assign a number to this field once an event email is created. No need for any user input and this field cannot be edited.

**Event**: The event name that the email is defined for. It is a lookup field that pulls the Event Label value from the Summit Event object. As mentioned above, the value must be matched with a record in the Summit Event object. When you hover the cursor over to the Event field on the View page, a mini page of the contact will show up. 
 
**Action Status**: The Registration Status of an event registration from which you wish to have this email sent. 
This field has the following picklist values:
* Started 
* Requested
* Received
* Confirmed
* Ready
* Canceled
* Rescheduled
* Status
* -Inactive-

**Action Sub status**: The Sub status setting of an event registration from which you wish to have this email sent. Combines with Action Status if one is selected.
This field has the following picklist values:
* All appointments Confirmed
* Attended
* Attended – Incomplete
* Checked-in
* Declined
* No-show
* On Hold
* Pending Appointments
* Unavailable

**Email Subject**: The subject of the email.

**Email Content**: The content of the email. For advanced users, you can put the API names of the Salesforce fields so that the email content can be dynamic based on the registration information. 

**Org Email**: The email address that the email is sent from. This value will populate automatically when an email address is selected from the drop-down menu on "Select Organization Wide Email".  Also see Salesforce's documentation on [Organization-Wide Email Addresses](https://help.salesforce.com/s/articleView?id=sf.orgwide_email.htm&type=5)

**BCC Email**: Blind carbon copy. If you enter multiple email addresses, you will use a comma to separate the email addresses. The text area allows value that has no more than 1000 characters. 

**Letterhead / Classic Letterhead**: The Classic Letterhead in which your email should be wrapped. Also see Salesforce's documenation on [Classic Letterhead](https://help.salesforce.com/s/articleView?id=sf.creating_letterheads.htm&type=5).

**Letterhead Name**: The name of the selected/assigned letterhead. This value will populate automatically when a letterhead is selected from the drop-down menu on "Select Classic Letterhead".

**Letterhead HTML**: The letterhead of the email in which the content will be placed. The content will populate automatically when a letterhead is selected from the drop-down menu on "Select Classic Letterhead".

**Org Email Id**: ID of the organizational email that allows for external sending out of Salesforce. This value will populate automatically when an email address is selected from the drop-down menu on "Select Organization Wide Email".



