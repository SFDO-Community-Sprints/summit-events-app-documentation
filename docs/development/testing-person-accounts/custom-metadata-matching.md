---
title: Custom Metadata Matching "On" and "Off"
parent: Testing Person Accounts
---

# ✅ Test Case: Custom Metadata Person Matching ON vs. OFF

---

## 🎯 Purpose

Validate how Summit Events uses Custom Metadata-driven field mapping for Person Account matching. Confirm that:
- Custom Metadata matching influences which fields are used for duplicate checks (NO ADDITIONAL CONFIGURATION NEEDED FOR THIS TEST)
- System behavior changes when Custom Metadata is turned ON vs. OFF

---

## 🔗 Prerequisites

- Summit Events App installed and configured
- Person Accounts enabled
- Standard Person Account Duplicate Rule active

---

## 🏁 Where to Start

- Navigate to the **Summit Event** tab
- Create a new Event following:
  - [Create a Basic Event Instructions](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/create-basic-event/)

---

## 🛠 Test Steps — Custom Metadata Matching **OFF**

### 1. Configure Event Settings

- On the Summit Event record, set:
  - **Registration Matching Logic** → `Use Salesforce Duplicate Rules`
  - **Person Creation Duplicate Rule** → `Standard Person Account Duplicate Rule`
  - **Custom Metadata Person Matching Method** → Leave Blank
  - **Person Matching No Match Behavior** → `Create Person Account`
  - **Person Matching Multiple Match Behavior** → `Match with most recently modified`

Save the Event.

---

### 2. Create Event Instance

- Create a Summit Event Instance
- Configure capacity, dates, etc.
- Click **Register**

---

### 3. Register a Person

- Enter:
  - First Name: Maria
  - Last Name: Gonzalez
  - Email: maria.g@example.com
- Submit registration

✅ **Expected Result:**
- Person Account is created
- Registration is linked
- Matching driven solely by standard Duplicate Rule fields (likely Name, Email)

---

## 🛠 Test Steps — Custom Metadata Matching **ON**

### 4. Configure Event with Metadata Matching

- Go to the same Summit Event record
- Change:
  - **Custom Metadata Person Matching Method** → `Admissions`

Save the Event.

---

### 5. Register a Similar Person

- Register:
  - First Name: Maria
  - Last Name: Gonzalez
  - Email: maria.g@otherdomain.com

✅ **Expected Result:**
- Person Account is created/linked
- Registration is linked

---

### 6. Register a Non-Match Person

- Register:
  - First Name: Maria
  - Last Name: Gonzalez
  - Email: maria.unique@example.com
  - New phone number (if phone is used in metadata)

✅ **Expected Result:**
- New Person Account is created because no match found
- Matching context on registration record should reflect Custom Metadata mapping

---

## ✅ Pass/Fail Criteria

- With **Custom Metadata OFF**, only standard Duplicate Rules determine matches.
- With **Custom Metadata ON**, matching considers additional mapped fields.
- Registration record clearly shows which fields were evaluated.

---

## 💬 Report Results

Submit your results here:  
[Google Feedback Form](https://forms.gle/LDMYekkdJoLvYah66)

