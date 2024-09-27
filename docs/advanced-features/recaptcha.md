---
title: Google Recaptcha v3
parent: Advanced Features
has_children: false
---
_Documentation in progress_

# Adding reCAPTCHA to an Event Page
## Step-by-Step Guide

## The Issue:
Your event registrations are being "taken" by bots.

## The Resolution:
Add Goolgle reCAPTCHA to your event registration page to ensure the people signing up for your event are **actual people** and not bots.

## STEP 1: Get reCAPTCHA Keys from Google
* Go to [Google ReCAPTCHA](http://www.google.com/recaptcha/admin/create)
  * Note: _ReCAPTCHA is based on **your** Google account. You need a Google account in order to enable this for your Salesforce org._
* Enter a label and leave score-based (v3) checked.
 * _Note: This is the most advanced version confirming that you are not a bot that doesn't require the user to do anything. If ReCAPTCHA v3 is active, it evaluates all the information it can get about that person: IP address, where they are coming from and several other environmental variables of which the user is not necessarily aware. Google then compares that information to its database and gives you a score of 0-1. The higher the score, the more likely you are to be a real person._

* Add your registration domain. Most often, if you go back to your registration page, you want the "address" from the first dot to the .com before the hash. Likely salesforce-sites.com.
  * _Note: If you set up this as an Experience site, the domain would be different._

* Name your Project, then click "Submit."

**Congratulations, you now have your new keys! Leave this tab open and go back to your Salesforce org. Now we have to use those keys to let Google talk to Salesforce.**

## STEP 2: Add reCAPTCHA keys to your Custom Settings
* Keep Google open in one tab.
 * Go to your org and go to Setup > Custom Settings
    * Summit Events Settings > Manage > Edit
* Populate the "reCAPTCHA Site Key" field with the "Site Key" from your Google tab. 
* Populate the "reCAPTCHA Secret Key" field with the "Secret Key" from your Google tab. 
* Populate the "reCAPTCHA v3 Score" field with a value between "0" and "1."
  * The lower the score, the more likely a user is a bot.
  * We recommend starting with "0.5" and adjust from there, as necessary.
* Click "Save."

## STEP 3: Populate reCAPTCHA fields on your Event record
* In the Summit Events App, find your event and click on the "Add'l Configuration & Options" tab.
* Populate the two reCAPTCHA fields
 * "reCAPTCHA"
 * "reCAPTCHA v3 Score Fail Text"

![Screenshot 2024-09-27 at 1 05 03 PM](https://github.com/user-attachments/assets/36122ff0-e691-4474-a029-b7f34e4a6c0c)

## STEP 4: Add Google Data to Remote Site Settings
In your Salesforce Org
* Setup > Remote Site Settings
 * Click "New Remote Site"
  * Populate the following fields as below:
    * "Remote Site Name" = Google_reCaptcha
    * "Remote Site URL" = https://www.google.com
    * "Description" = This is the reCaptcha site.
    * "Active" = true
* Click "Save"

## STEP 5: Test
In the Summit Events App:
* Find your Summit Events Event record > Instance.
* Click on the "Register" link found on the Instance record. This will bring you to the Instance's Event Registration page.
* Register for your event.
* Verify your guest is registered by reviewing the Summit Event Registration records for the chosen Instance.

## SUCCESS! You have now added reCAPTCHA to your Event Registration page!
