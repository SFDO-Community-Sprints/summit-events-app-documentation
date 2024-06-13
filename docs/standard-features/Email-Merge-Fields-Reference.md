---
title: Event Email Merge Fields Reference
parent: Standard Features
has_children: true
---

Merge fields can be used in the email template to merge in data about the event and registrant.   Only fields on the Summit Event Registration object can be merged into the email content.  The Summit Event Registration object contains formula fields to many of the frequently referenced fields from the Event and Event Instance.  If needed, additional formula feilds can be created on the Summit Event Registration object to reference fields from related objects such as the Event or Event Instance.  When adding merge feilds, it is the API name of the feild that is used.   All API field names should be encompassed with merge brackets, often seen in the classic email template builder. Example: {!summit__First_Name__c}.

For your convenience, below is a reference of some of the more used merge feilds and their API names which can be copied into the email template.  Additonal API field names can be found on the Summit Event Registration object.

| API Name  | Description |  Merge Syntax (copy to email template) |
|:---|:---|:---|
| summit__First_Name__c | Registrant First Name |  {!summit__First_Name__c} |
|  summit__Last_Name__c |  Registrant Last Name |  {!summit__Last_Name__c} |
| summit__Event_Name__c | The name of the Event | {!summit__Event_Name__c} |
| summit__Event_Instance_Title__c | The instance Title | {!summit__Event_Instance_Title__c} |
| summit__Event_Instance_Start_Time__c | The start time of the event instance | {!summit__Event_Instance_Start_Time__c} |
| summit__Event_Instance_End_Time__c | The end time of the event instance | {!summit__Event_Instance_End_Time__c} |
| summit__Event_Instance_Date_Time_Formatted__c | Formatted date/time of instance: Tuesday, August 27, 2025, 5:00 PM - 7:00 PM EST | {!summit__Event_Instance_Date_Time_Formatted__c} |
| summit__Event_Registration_Requested_Date__c | Date person registered | {!summit__Event_Registration_Requested_Date__c} |
| summit__Event_Registration_Cancel_Link__c | Link that registrant can use to cancel registration | {!summit__Event_Registration_Cancel_Link__c} |
| summit__Add_To_Calendar_Link__c | General add to calendar link for event instance | {!summit__Add_To_Calendar_Link__c} |
| summit__Virtual_Meeting_URL__c  | Virtual meeting url from the event instance  |  {!summit__Virtual_Meeting_URL__c} | 
