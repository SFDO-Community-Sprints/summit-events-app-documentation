---
title: Installing SEA
parent: Getting Started
nav_order: 1
---

# Installing the Summit Events App

The Summit Events App (SEA) is a managed package and has been security reviewed by Salesforce. Installation, along with many other great Salesforce.org Open Source Commons applications, is done through Salesforce.org's [MetaDeploy installer](https://github.com/SFDO-Tooling/MetaDeploy).

[Install the latest managed pacakge](https://install.salesforce.org/products/SummitEventsApp/latest){: .btn .btn-green }{:target="_blank"}

## Post Installation Instructions

There are a few steps after you install the SEA managed package to getting your Salesforce org configured to run SEA. Following along with this helpful post installation video and/org follow the steps below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ph1LAh6FoQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Confirm Summit Events is Installed
1. From Setup, search for and select Installed Packages.
2. Confirm you see Summit Events App as one of the installed packages.

### Create a site subdomain
If your org does not already have a Salesforce “Site,” which is used to display public visual force pages, you will need to set up one. If your org has one set up, you may use the existing Site.

1. In Setup, go to User Interface -> Sites and Domains -> Sites.

2. Determine the name you want to use for the Site (it will be in the form of [site.force.com]) and click the “Check Availability” button to see whether or not it is available. <b>Note:</b> Each Site must be unique.

3. Click on the "Register My Salesforce Site Domain" button.

![](../images/Site%20Setup.png)

<b>Once your domain has been registered continue:</b>

1. Click the "New" button next to the site header.

2. Enter the following data in the form (label, name, and homepage can be adjust to whatever makes sense for your site):
    * Site Label: Summit Events
    * Site Name: Summit_Events
    * Active Site Home Page:
        * Select the magnifying glass look-up icon and search for and select SummitEvents.
    * Leave all other settings at their defaults and text areas blank.

3. Click "Save".
![](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/images/SummitEventsSiteConfig.PNG)

5. Upon save, you will see the Site under the Sites section. Click the "Activate" button at the top of the page.

6. From Setup, search for sites.  From the list of sites, find the Summit Events site.  In the Site URL column, right-click on the Site URL link and copy the URL to your clipboard. You will need the Site URL in the next stage of post-installation set-up steps.

![](../images/Site%20URL%20Capture.png)

### Set Custom Settings
Since each installation can have a different site URL, we need to define that URL for the event application to use as its root web presence. This is used for feed URLs, allowing external sites to access it, among other things. [Learn more about other custom settings](../advanced-features/custom-settings.md).

1. In Setup searcch for Custom Settings.

2. Click on the "Manage" link next to the custom setting "Summit Events Settings".

3. Click "New" button at the top of the page just before the "Default Organization Level Value." NOTE: There are two "New" buttons on the page, which can be confusing. You will know you are on the wrong one if you are asked to assign a user or a profile. You will know you are on the right one if you only need to enter the URL in the following step.

4. Paste the URL you copied from the “Create a site record” section (step 6 above) and enter it into the Community Base URL field.

5. Click the "Save" button.

Once you hit "Save" the "New" button will be replaced with "Edit." (You will need to click the Edit button to make future adjustments to this setting.)

### Set Sharing Rules
Salesforce Winter '20 and Spring '20 releases severely limited Guest User access to objects to ensure security. The Summit Events application requires the Guest User profile used by the event registrant to be able to read and upsert to the solution’s custom objects. To comply with these new security requirements, we need to create a sharing rule. Code has also been adjusted to allow for the required upserts. The following instructions will help you set up the required sharing rule. Unfortunately, we are not able to automate these steps yet due to limitations in SFDX.

### Set Sharing Object Access:

1. In Setup, type "Sharing" in the quick-find box in Setup and click on "Sharing Settings".

2. In the Organization-Wide Defaults section, find Summit Events (towards the bottom) verify it is set to Public Read/Write. If it is, <b>skip to step 6.</b>

3. If Summit Events is not set to Public Read/Write, click the "Edit" button.

4. Scroll down to "Summit Events" and select Public Read/Write in both the Default Internal Access column and the Default External Access column.

5. Click the “Save” button.

6. Under the "Sharing Rules" header (just below the Organization-Wide Default section), scroll down to the "Summit Events Sharing Rules" section and click the “New” button.

7. In the "Step 1: Rule Name" section, under Label field, enter "Guest User Read Access" and click tab. This will automatically populate the Rule Name field with "Guest_User_Read_Access."

8. In the "Step 2: Select your rule type" section, select the "Guest user access, based on criteria" radio button.

9. In the "Step 3: Select which records to be shared" section, set the following:
> * "Criteria" to Field = Event Name
> * Operator = "not equal to"
> * Value = null (type the word 'null' for the value).

10. In the "Step 4: Select the users to share with" section, click the Share With drop-down arrow and select the *Event Site Guest User, Summit Events Site Guest User, in our example.

11. Set Access Level to "Read Only".

12. Click the "Save" button.

*Note:  The guest user gets created when the site is created and is named after the site name so your guest user may be named slightly different for example it may be called “Event Guest User”. There is usually only one guest user for the site so it’s pretty safe to assume the one you see is the one for which you should assign the Guest Registrant permissions set.*

![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/3fbbe72a-53f5-490a-a5a5-d6259175d664)



### Apply Permission Sets
There are two permission sets provided in this application.  These permission sets should be leveraged to ensure functionality persists between upgrades.  
1. <b>Summit Events Admin</b> - allows users to create and maintain events
2. <b>Summit Events Registrant</b> - allows unauthenticated users and authenticated users in a community to register for an event

**Summit Events Admin:** Apply to admin users that need to create and maintain events.
   > Note: Users who are not system administrators but who will administer Summit Events will need this permission set. You do not need to add the Permission Set at this time, but follow the steps bulleted below if/when you need a user to administer Summit Events. It is recommended that the Summit Event Admin permission set is cloned so appropriate configurations can be made to reduce/expand access to various fields.

1. In Setup search for and select Permission Sets.
2. Click on Summit Events Admin or your cloned Summit Events Admin permission set.
3. Click on the “Manage Assignments” button.
4. Click the checkbox next to the user who will administer Summit Events and click the “Add Assignments” button.

**Summit Events Registrant:** This permission set needs to be applied to the Guest User profile of your site for the public to be able to access to registration forms. In addition, a custom permission set should be created to control for additional access based on event configurations.

### Create a Custom Permission Set for the Guest User
This custom permission set allows you to add additional permissions for the guest user without worrying about issues during upgrades.  This permission set combined with the packaged Summit Events Registration permission set gives your organization the most flexibility.  It ensures Summit Events App works seamless with any upgrade and the Guest User always has the appropriate access to recieve event registrations.

1. Create a new [Permissions Set](https://help.salesforce.com/s/articleView?id=sf.perm_sets_create.htm&type=5).
2. Label the permission set to align with the Summit Event Registration for Guest Users - <b>Example: Summit Events Custom Registrant.</b>
3. Go to Object Settings and grant "READ" access on the Account object. No additional fields needed.

Once you've create the Custom Permission set, apply it to the Guest User as outlined below. With this custom permission set, you'll be able to grant appropriate access to any additional objects or fields being utilized for Summit Events as well as the following:
- Avoid disruptions and limit additional configurations during upgrades.
- Leverage Summit Event Questions and the Lookup options for improved data integrity.

#### Apply Summit Events Registrant permission set and the custom permission set you created to the Guest User of your site

1. In Setup, Search for and select Sites.
2. Under the Sites section, click on the words Summit Events in the "Site Label" field.
3. Click on the "Public Access Settings" button at the top of the site definition page.
4. On the Summit Events Profile page, click the Assigned Users button.
5. Under the Full Name column, click on the Site Guest User name (Site Guest User, Summit Events - which is a link).
6. On the Summit Events Site Guest User page, scroll down to Permission Set Assignment and click the “Edit Assignments” button.
7. In the Available Permission Sets section, click on Summit Events Registrant and click the “Add” button.  Repeat this process for the new custom permission set you created. This will move them both into the Enabled Permission Sets section.
8. Click the “Save” button.



## Congrats! At this point, you should have a functioning Summit Events Package. 
Check out [Post-Installation Considerations](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/post-install-consideration/) for additional considerations you’ll want to make to ensure there is alignment with your organization


