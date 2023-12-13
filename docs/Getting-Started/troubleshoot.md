---
title: Troubleshooting
nav_order: 10
---

*This page is intended to capture common troubleshooting issues with the Summit Events App.  Have something to contribute, comment below and we'll add it to this page.*  __Can't find what you are looking for here?  Have suggestions for improvements?__  Post your question on the SEA Trailblazer community page:  [SEA Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kHi2SAE)


# Registration Pages

### Receive error message: "Question setup issue(s): Map to field: Field Your_Custom_Field__c is not accessible by guest user.Map To Field: Field Your_Custom_Field__c is not accessible by guest user.

Add access to Your_Custom_Field__c to the guest user.  To do this, navigate to Setup and search for Permission Sets.  Click on the Summit Events Registrant permission set or the custom permission set you created.  Edit the permission set.  Go to the Object Settings and select the object that contains the field (e.g. Summit Events Registrant).  Edit the permissions and give Edit Access to the field.


# Calendar Page
### Event not showing on Calendar: Event instance setup but is not displaying on standard Summit Events Calendar.

Verify that the Event Instance's Event Status field is set to Active.

# Known Issues

### Event Instance Date Time Formatted field on Summit Events Registration object does not get updated if a change is made to the date or time of the event after initial creation.
This is a known issue which may be corrected in an upcoming release.  To track the progress of the known issue see: [Issue Tracker](https://github.com/SFDO-Community/Summit-Events-App/issues/525)

### Open Registration Checkbox field on Summit Events Instance Object Inconsistency.
The Open Registration checkbox field on the Summit Events Instance object isn’t calculating the same way the Registrant will experience. With this release there is improved confidence in what the registrant experiences than what may display on the Instance to the Event Manager. The registrant experiences what the Event Manager would expect, causing confusion as to why an event may appear open based on the Open Registration checkbox field, but isn’t (or vice versa) within the Event Manager or Admin perspective of Salesforce.  See issue for additional information about how to reproduce and suggested work around. [Issue Tracker](https://github.com/SFDO-Community/Summit-Events-App/issues/541)

### Upgrading from an earlier version removes Default Label on Existing Event Records
When upgrading from .26 to a newer version, one of the new features is the ability to control field labels on the standard questions. Because of the new feature, the existing event records don’t automatically have the default field labels which are identified at the time of Event record creation.   See issue for additional information about how to reproduce and suggested work around. [Issue Tracker](https://github.com/SFDO-Community/Summit-Events-App/issues/410)

