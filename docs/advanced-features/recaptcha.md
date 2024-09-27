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
*  Note: _This is the most advanced version confirming that you are not a bot that doesn't require the user to do anything. If ReCAPTCHA v3 is active, it evaluates all the information it can get about that person: IP address, where they are coming from and several other environmental variables of which the user is not necessarily aware. Google then compares that information to its database and gives you a score of 0-1. The higher the score, the more likely you are to be a real person._
