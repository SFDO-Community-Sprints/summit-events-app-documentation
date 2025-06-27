---
title: Custom Metadata Behavior
parent: Testing Person Accounts
---

# ✅ Test Case: Custom Metadata Matching — New Matching Type, Field Mapping, and Birthdate Matching

---

## 🎯 Purpose

Verify that the Summit Events App:

- Supports creating new **Custom Metadata Matching Types**
- Maps additional fields from **Summit Event Registration** → **Person Account**
- Correctly matches records using:
  - Standard fields (Name, Email)
  - Custom mapped fields
  - Birthdate

This ensures custom matching logic works as intended, extends beyond default standard field matching, and moves data from the registration to the Person Account record.

---

## 🔗 Prerequisites

- Summit Events App installed and configured
- Person Accounts enabled
- Admin access to create:
  - Custom Metadata Types
  - Custom fields on Contact (visible on Account as `__pc` fields)
  - Custom fields on Summit Event Registration

---

## 🏁 Where to Start

- Navigate to **Setup**
- Confirm the following custom fields exist:
  - On **Contact**:
    - Custom Field (e.g. `Custom_Field__c`)
    - Birthdate
  - On **Summit Event Registration**:
    - `Registrant_Custom_Field__c`
    - `summit__Registrant_Date_of_Birth__c`

If these custom fields do not exist, create them as follows:

| Object | Field API Name | Type |
|--------|----------------|------|
| Contact | Custom_Field__c | Text(255) |
| Contact | Birthdate | Date |
| Summit Event Registration | Registrant_Custom_Field__c | Text(255) |
| Summit Event Registration | summit__Registrant_Date_of_Birth__c | Date |

---

## 🛠 Step 1 — Create a New Custom Metadata Matching Type

### 1. Navigate to Custom Metadata Types

- Go to:
  - Setup → Custom Metadata Types → **Contact Matching Method**
  - Click **Manage Records**

---

## 🛠 Step 2 — Create Field Mappings in Custom Metadata

For each field to match, create a new Custom Metadata record under:

- **Summit Events Contact Matching Mapping**

#### Mapping 1 — Email

- Label → `Email`
- Source Type → `Field`
- Source Value → `summit__Registrant_Email__c`
- Contact Field → `Email`
- Contact Matching Method → `Blue`
- All checkboxes should be unchecked

---

#### Mapping 2 — Custom Field

- Label → Appropriate custom field label
- Source Type → `Field`
- Source Value → `Registrant_Custom_Field__c`
- Contact Field → `Custom_Field__c`
- Contact Matching Method → `Blue`
- All checkboxes should be unchecked

---

#### Mapping 3 — Birthdate

- Label → `Birthdate`
- Source Type → `Field`
- Source Value → `summit__Registrant_Date_of_Birth__c`
- Contact Field → `Birthdate`
- Contact Matching Method → `Blue`
- All checkboxes should be unchecked

---

✅ **Expected Result:**
- Custom Metadata records exist linking Registration fields to Person Account fields for the matching method `Blue`.

---

## 🛠 Step 3 — Configure Summit Event to Use New Matching Method

- Go to your Summit Event record
- Set:
  - **Registration Matching Logic** → `Use Salesforce Duplicate Rules`
  - **Person Creation Duplicate Rule** → `Standard Person Account Duplicate Rule`
  - **Custom Metadata Person Matching Method** → `Blue`
  - **Person Matching No Match Behavior** → `Create Person Account`
  - **Person Matching Multiple Match Behavior** → `Match with most recently modified`

Save the record.

---

## 🛠 Step 4 — Create Event Instance

- Create a **Summit Event Instance**
- Configure capacity, dates, and registration options
- Save the record

---

## 🛠 Step 5 — Register a New Person with All Fields

### Registration #1

- Click **Register**
- Enter:
  - First Name: Daniel
  - Last Name: Rivers
  - Email: daniel.rivers@example.com
  - Custom Field: Appropriate value
  - Birthdate: 1990-02-15
- Submit the registration

✅ **Expected Result:**

- A **new Person Account** for Daniel Rivers is created
- Person Account record contains:
  - Custom_Field__c → Appropriate value
  - Birthdate → 1990-02-15
- Summit Event Registration record is linked to this Person Account
- Registration record shows matching context indicating:
  - “New Person Account created”
  - Fields used for matching

---

## 🛠 Step 6 — Register Same Person Again to Test Matching

### Registration #2

- Click **Register**
- Enter:
  - First Name: Daniel
  - Last Name: Rivers
  - Email: daniel.rivers@example.com
  - Custom Field: Same value as Registration #1
  - Birthdate: 1990-02-15
- Submit the registration

✅ **Expected Result:**

- The **existing Person Account** is matched
- No new Person Account is created
- New Summit Event Registration record is linked to the same Person Account
- Registration record shows matching logic confirmation

---

## 🛠 Step 7 — Register Person with Different Custom Field Value

### Registration #3

- Click **Register**
- Enter:
  - First Name: Daniel
  - Last Name: Rivers
  - Email: daniel.rivers@example.com
  - Custom Field: A different value
  - Birthdate: 1990-02-15
- Submit the registration

✅ **Expected Result:**

- The **existing Person Account** is still matched
- No new Person Account is created
- New Summit Event Registration record is linked to the same Person Account
- The Person Account retains the **original custom field value** because mapping should not overwrite existing data during matching

---

## ✅ Pass/Fail Criteria

- Custom Metadata Matching Method `Blue` is selectable and functional
- Field mappings correctly link:
  - Registration Custom Field → Person Account/Contact Custom Field
  - Birthdate → Birthdate
- System matches or creates Person Accounts based on combined logic across multiple fields
- Summit Event Registration records clearly display:
  - Matching outcome
  - Fields evaluated
- No unexpected errors or failures occur during registration

---

## 💬 Report Results

Submit your results here:  
[Google Feedback Form](https://forms.gle/LDMYekkdJoLvYah66)

Include:
- Org type used (Standard, Education Cloud, Nonprofit)
- Steps taken
- Screenshots of:
  - Registration records
  - Matching context tables
- Confirmation of Person Account creation vs. matching
- Any unexpected results or errors
