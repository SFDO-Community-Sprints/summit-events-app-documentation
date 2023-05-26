---
title: Troubleshooting
parent: Getting Started
nav_order: 6
---

**This page is intended to capture common troubleshooting issues with the Summit Events App.  Have something to contribute, comment below and we'll add it to this page.**


**Receive error message:** "Question setup issue(s): Map to field: Field Your_Custom_Field__c is not accessible by guest user.Map To Field: Field Your_Custom_Field__c is not accessible by guest user.

**Soultion:** Add access to Your_Custom_Field__c to the guest user.  To do this, navigate to Setup and search for Permission Sets.  Click on the Summit Events Registrant permission set.  Edit the permission set.  Go to the Object Settings and select the object that contains the field (e.g. Summit Events Registrant).  Edit the permissions and give Edit Access to the field.
