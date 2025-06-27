---
title: Matching Guest Registrations
parent: Testing Person Accounts
---

# ✅ Test Case: Matching Guest Registration

---

## 🎯 Purpose

Test the Summit Events App’s **Guest Registration functionality** and Matching their records:

- Confirm that when a registrant adds a guest, the guest’s:
  - Name
  - Email
- …are captured properly and stored
- Validate that Person Account matching logic applies to **guest records** the same way it does for primary registrants
- Confirm that guests are stored as separate registrations and linked correctly

---

## 🔗 Prerequisites

- Summit Events App installed and fully configured
- Person Accounts enabled
- Duplicate Rules configured and active
- An Event and Event Instance are created with:
  - Guest Registration enabled
  - Matching logic turned on

See:  

---

## 🏁 Where to Start

- Navigate to your existing **Summit Event** record
- Ensure:
  - Ensure "Use Matching for Guest Registrations" = **Checked**
  - Setup Guest Registration:
🔗 [Guest Registrations Documentation](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/Guest-Registrations/)

---

## 🛠 Step 1 — Confirm Guest Registration is Enabled

- Open the Summit Event record and go to the "Guest Registration" tab:
- Verify:
  - Display Guest Registration = **Checked**
  - Guest Max Amount = 1 or more
  - Remaining Guest fields can be left blank or default values
  - As noted above, ensure Guest Registration Questions are configured as Summit Events Question Records for:
    - Guest First Name
    - Guest Last Name
    - Guest Email

✅ **Expected Result:**
- Guest Registration fields appear on the registration page/form

---

## 🛠 Step 2 — Register a Primary Person With No Guest

- Click **Register** on the Event Instance
- Complete the registration for:
  - First Name: Emma
  - Last Name: Johnson
  - Email: emma.johnson@example.com
- **Do not add a guest**
- Submit the registration

✅ **Expected Result:**
- A new Person Account for Emma Johnson is created
- A Summit Event Registration record is linked to Emma’s Person Account

---

## 🛠 Step 3 — Register the Same Primary Person With a Guest

- Click **Register** again
- Enter the same primary registrant details:
  - First Name: Emma
  - Last Name: Johnson
  - Email: emma.johnson@example.com
- Check **“Add Guest”**
- Enter guest details:
  - First Name: Olivia
  - Last Name: Brown
  - Email: olivia.brown@example.com
- Submit the registration

✅ **Expected Result:**
- Emma Johnson’s registration:
  - Links to the existing Emma Johnson Person Account (from Step 2)
  - Creates a new Summit Event Registration record for this instance
- Olivia Brown’s guest registration:
  - Triggers matching logic
  - If no existing Person Account matches → a new Person Account is created for Olivia
  - If a matching Person Account exists → Olivia’s registration links to that account
- Both registrations appear under the Event Instance’s list of participants
- The Summit Event Registration records reflect matching logic results for both individuals

---

## 🛠 Step 4 — Register a Guest Who Already Exists

- Create a Person Account manually in Salesforce:
  - First Name: Olivia
  - Last Name: Brown
  - Email: olivia.brown@example.com
- Repeat Step 3, registering Emma and Olivia again as primary + guest

✅ **Expected Result:**
- Olivia’s guest registration:
  - Links to the **existing Olivia Brown Person Account** instead of creating a duplicate
- Summit Event Registration record for Olivia:
  - Displays matching logic context confirming the match

---

## 🛠 Step 5 — Register Guest With a Different Email

- Register Emma again with guest:
  - Guest First Name: Olivia
  - Guest Last Name: Brown
  - Guest Email: olivia.b.alt@example.com

✅ **Expected Result:**
- A **new Person Account** is created for Olivia B. Alt because of the different email
- Registration record reflects “no match found — new Person Account created”

---

## 🛠 Step 6 — Test Fuzzy Matching For Guests

- Register Emma with guest:
  - Guest First Name: Liv
  - Guest Last Name: Brown
  - Guest Email: olivia.brown@example.com

✅ **Expected Result:**
- Depending on duplicate rule configuration:
  - Guest record may match existing Olivia Brown
  - Or create a new Person Account
- Summit Event Registration record clearly shows matching logic result

---

## ✅ Pass/Fail Criteria

- Guest registration functionality is visible and accessible
- Guests’ data (Name, Email) is captured and saved
- Matching logic applies to guests the same way it does to primary registrants
- Registrations are linked to the correct Person Accounts:
  - Existing records if matched
  - New records if no match
- Summit Event Registration records show matching context for guests

---

## 💬 Report Results

Submit your results here:  
[Google Feedback Form](https://forms.gle/LDMYekkdJoLvYah66)

Include:
- Org type used (Standard, Education Cloud, Nonprofit)
- Steps taken
- Screenshots
- Any unexpected results or errors
- Behavior of matching logic for guests

