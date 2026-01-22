---
title: Troubleshooting
nav_order: 10
---

*This page is intended to capture common troubleshooting issues with the Summit Events App.  Have something to contribute, comment below and we'll add it to this page.*  __Can't find what you are looking for here?  Have suggestions for improvements?__  Post your question on the SEA Trailblazer community page:  [SEA Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kHi2SAE)


## Post installation Errors/Issues

**Installed Summit Events but when go to registration screen, see Authorization Required force.com page**
<img width="554" alt="image" src="https://github.com/user-attachments/assets/51960dc7-dc13-41b1-b3eb-101dc830b983">

This is usually due to the guest user not having proper permissons to either a custom field referenced on the registration form or was not setup initially with the proper permissions.  Make sure that the guest user has permissions to Summit Events as outlined in the Install SEA in Sandbox or Production page of the documenation site.  Make sure that the registrant custom permission set is given access any new feilds that were created for the registration process.

**Clicking on the Register link on an Event Instance takes you back to the internal Domains page**
Most likely the Community Base URL in the Custom Settings is incorrect.  Try to re-copy and paste the URL and resave the custom settings.  It may take a moment or two for caching.
See [Custom Settings](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/custom-settings/)


## Duplicate Rules Related

**New Duplicate Rule not appearing for selection in Event's Contact Creation Duplicate Rule field.**

Check that the value has been added to the Contact Creation Duplicate Rule field's picklist value on the Summit Events object and that the picklist value is named exactly as the rule is named.

Check that the controlling field - Contact Matching Rule has been adjusted to include the new value.  This appears in the Picklists options section of the Contact Creation Duplicate Rule field.

Also see: [Contact Matching Documentation](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/Contact-Matching/)


## Email Related

**Registration confirmation emails not being sent**

Verify that a confirmation email is associated with the event and that it is configured to be sent when the Status field is set to Registered.  See [Create an Event Email](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/create-event-email/create-event-email/) for more information.

**New Status or Substatus values not appearing for selection when setting up email content**

The new values need to be added to the status/substatus fields on both the Summmit_Events_Registration object and the Summit_Events_Email objects.  Verify that the picklist values appear in both objects.
If a new substatus does not appear on the registration page, verify that you have properly configured the dependency.  The substatus field has a dependency on the status field.  
For more information on dependent picklists see: [https://help.salesforce.com/s/articleView?id=sf.fields_editing_field_dependencies.htm&type=5](https://help.salesforce.com/s/articleView?id=sf.fields_editing_field_dependencies.htm&type=5)


## Registration Pages

**Receive error message: "Question setup issue(s): Map to field: Field Your_Custom_Field__c is not accessible by guest user.Map To Field: Field Your_Custom_Field__c is not accessible by guest user.**

Add access to Your_Custom_Field__c to the guest user.  To do this, navigate to Setup and search for Permission Sets.  Click on the Summit Events Registrant permission set or the custom permission set you created.  Edit the permission set.  Go to the Object Settings and select the object that contains the field (e.g. Summit Events Registrant).  Edit the permissions and give Edit Access to the field.

**Registration not showing fields despite being configured.**
Check that the event end date and time is a future date & time otherwise the “event instance close date & time”  will indicate the instance is closed, which will cause the registration page not showing any fields for guest to register the event. 


## Calendar Page
**Event not showing on Calendar: Event instance setup but is not displaying on standard Summit Events Calendar.**

Verify that the Event Instance's Event Status field is set to Active.


## Known Issues

### Event Instance Date Time Formatted field on Summit Events Registration object does not get updated if a change is made to the date or time of the event after initial creation.
This is a known issue which may be corrected in an upcoming release.  To track the progress of the known issue see: [Issue Tracker](https://github.com/SFDO-Community/Summit-Events-App/issues/525)

### Open Registration Checkbox field on Summit Events Instance Object Inconsistency.
The Open Registration checkbox field on the Summit Events Instance object isn’t calculating the same way the Registrant will experience. With this release there is improved confidence in what the registrant experiences than what may display on the Instance to the Event Manager. The registrant experiences what the Event Manager would expect, causing confusion as to why an event may appear open based on the Open Registration checkbox field, but isn’t (or vice versa) within the Event Manager or Admin perspective of Salesforce.  See issue for additional information about how to reproduce and suggested work around. [Issue Tracker](https://github.com/SFDO-Community/Summit-Events-App/issues/541)

### Upgrading from an earlier version removes Default Label on Existing Event Records
When upgrading from .26 to a newer version, one of the new features is the ability to control field labels on the standard questions. Because of the new feature, the existing event records don’t automatically have the default field labels which are identified at the time of Event record creation.   See issue for additional information about how to reproduce and suggested work around. [Issue Tracker](https://github.com/SFDO-Community/Summit-Events-App/issues/410)

