---
title: Person Account No Math Behavior
parent: Testing Person Accounts
---

# ✅ Test Case: Contact Matching No Match Behavior — Create vs. Skip Creating Person Account

---

## 🎯 Purpose

Validate the Summit Events App’s behavior when no matching Person Account is found during registration, based on these settings:

- **Create Person Account**
- **Skip Creating Person Account**

This test ensures the system handles both scenarios properly and clearly reflects outcomes on the Summit Event Registration record.

---

## 🔗 Prerequisites

- Summit Events App installed and configured
- Person Accounts enabled
- Standard Person Account Duplicate Rule active
- An Event and Event Instance created

---

## 🏁 Where to Start

- Navigate to your Summit Event record
- Confirm matching logic is enabled
- Confirm Duplicate Rule settings are active

---

## 🛠 Step 1 — Test **Create Person Account** Behavior

### 1. Configure Event Settings

- Go to the Summit Event record
- Set:
  - **Registration Matching Logic** → `Use Salesforce Duplicate Rules`
  - **Person Creation Duplicate Rule** → `Standard Person Account Duplicate Rule`
  - **Custom Metadata Person Matching Method** → "Admissions"
  - **Person Matching No Match Behavior** → `Create Person Account`
  - **Person Matching Multiple Match Behavior** → `Match with most recently modified`

Save the Event.

---

### 2. Create Event Instance

- Create a **Summit Event Instance**
- Configure capacity, dates, etc.
- Save the record

---

### 3. Register a Completely New Person

- Click **Register**
- Enter:
  - First Name: Sarah
  - Last Name: Thompson
  - Email: sarah.thompson@example.com
- Submit registration

✅ **Expected Result:**
- A **new Person Account** for Sarah Thompson is created
- Summit Event Registration is linked to Sarah’s Person Account
- Registration record displays:
  - Matching logic used
  - “New Person Account created” context

---

## 🛠 Step 2 — Test **Skip Creating Person Account** Behavior

### 1. Update Event Settings

- Return to the same Summit Event record
- Change:
  - **Person Matching No Match Behavior** → `Skip Creating Person Account`

Save the Event.

---

### 2. Register a Completely New Person

- Click **Register**
- Enter:
  - First Name: Michael
  - Last Name: Lee
  - Email: michael.lee@example.com
- Submit registration

✅ **Expected Result:**
- **No new Person Account** is created
- Summit Event Registration is still created
- Registration record:
  - Does **not** have an Account linked
  - Displays context indicating:
    - No matching record found
    - Person Account creation was skipped

---

## 🛠 Step 3 — Register a Known Person

- Register:
  - First Name: Sarah
  - Last Name: Thompson
  - Email: sarah.thompson@example.com

✅ **Expected Result (Both Settings):**
- The registration matches to the existing Sarah Thompson Person Account
- A new Summit Event Registration is created and linked to Sarah’s Person Account
- Registration record reflects a successful match

---

## ✅ Pass/Fail Criteria

- **Create Person Account** setting:
  - Creates new Person Account if no match is found
  - Registration links to newly created Person Account

- **Skip Creating Person Account** setting:
  - Does **not** create a new Person Account if no match is found
  - Registration record remains unlinked to any Account
  - Registration record shows clear indication that no match was found and no account was created

- Matching logic:
  - Correctly links known duplicates regardless of the “no match” setting

---

## 💬 Report Results

Submit your results here:  
[Google Feedback Form](https://forms.gle/LDMYekkdJoLvYah66)

Include:
- Org type used (Standard, Education Cloud, Nonprofit)
- Steps taken
- Screenshots of the Registration record
- Confirmation of Account creation or non-creation
- Any unexpected errors or results

