---
title: Google Recaptcha v3
parent: Advanced Features
has_children: false
---

# Adding ReCAPTCHA to an Event Page
## Step-by-Step Guide

## The Issue:
Your event tickets/paces are being "taken" by bots.

## The Resolution:
Add Goolgle reCAPTCHA to your event registration page to ensure the people signing up for your event are **actual people** and not bots.

## STEP 1: Get reCAPTCHA Keys from Google
* Go to [Google ReCAPTCHA](http://www.google.com/recaptcha/admin/create)
  * Note: _ReCAPTCHA is based on **your** Google account. You have to have a Google account in order to enable this for your Salesforce org.****_
* Enter a label and leave score-based (v3) checked.   
*  _Note: This is the most advanced version confirming that you are not a bot that doesn't require the user to do anything. If ReCAPTCHA v3 is active, it evaluates all the information it can get about that person: IP address, where they are coming from and several other environmental variables of which the user is not necessarily aware. Google then compares that information to its database and gives you a score of 0-1. The higher the score, the more likely you are to be a real person._
   
  ![image](https://github.com/user-attachments/assets/4c778d8d-b024-4873-aff5-b52e872ccbaa)
* Add your registration domain. Most often, if you go back to your registration page, you want the "address" from the first dot to the .com before the hash. Likely salesforce-sites.com.
*  _Note: If you set up this as an Experience site, the domain would be different._

![image](https://github.com/user-attachments/assets/01e3ca9f-1036-4b99-ac4b-3f1ede9fcdfd)
