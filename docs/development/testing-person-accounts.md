---
title: Testing Person Accounts
parent: Developers Wanted
has_children: true
---

# 🧪 Summit Events App Testing Guide  
**Focus: Person Account Matching + Core Event Functionality**

---

## 🔍 Overview

This test covers an upcoming release of the **Summit Events App**, which introduces enhanced **Person Account Matching logic**. While core capabilities remain the same, the matching engine has been streamlined for performance and accuracy. Testers will install the package, configure matching logic, simulate real-world registrations, and validate both core and advanced event functionality.

> This package is **not upgradeable** and is intended for **throwaway testing only**. Please test in a **scratch org or new developer org only**.

---

## ✅ Before You Begin

Create a new org from one of the options below:

| Org Type | Link | Person Accounts Enabled |
|----------|------|--------------------------|
| Standard Dev Org | [https://developer.salesforce.com/free-trials](https://developer.salesforce.com/free-trials) | ❌ No |
| Education Cloud Dev Org | [https://developer.salesforce.com/free-trials/comparison/education-cloud](https://developer.salesforce.com/free-trials/comparison/education-cloud) | ✅ Yes |
| Nonprofit Cloud Dev Org | [https://developer.salesforce.com/free-trials/comparison/nonprofit-cloud](https://developer.salesforce.com/free-trials/comparison/nonprofit-cloud) | ✅ Yes |

You may wish to test across org types to evaluate Person Account behaviors and validate that existing functionality (e.g., Lead and Contact matching) continues to work as expected.

---

## 📦 Step 1: Install the Summit Events App

You will receive an install URL the day of testing.  

Instructions:

1. Log in to your developer org at `login.salesforce.com`.
2. The URL to install will be provided by the testing team. **Do NOT use the URL on the linked page below**
3. Choose **Install for Admins Only**.
4. Open the **Setup Menu** and navigate to **Installed Packages** to verify that **Summit Events** is listed.

---

## 🛠 Step 2: App Setup

Follow the official documentation to complete setup:  
🔗 [Installation & Setup Instructions + Video](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/Installing/)

Required setup includes:

- Creation of a **Site**, **Custom Settings**, **Sharing Rules**, and **Permission Sets**
- Assigning permission sets to your **user** and the **site guest user**
- Cloning the guest user permission set and updating it to include [**Read Access to the Account object**](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/Installing/#create-a-custom-permission-set-for-the-guest-user)

> Prefer using a Trailhead Org? Follow this guide:  
🔗 [Trailhead Org Installation](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/trailhead-install/)

---

## ⚙️ Step 3: Configure Person Account Matching

Follow this guide:  
🔗 [Contact & Person Account Matching Configuration](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/Contact-Matching/)

Steps:

1. **Create a Matching Rule** for Person Accounts (e.g., First Name, Last Name, Email).
2. **Create and activate a Duplicate Rule** tied to the matching rule.
3. Ensure both rules are **activated**.
4. Matching is triggered **automatically** when a registration creates or links to a Person Account.

---

## 📅 Step 4: Create a Summit Event and Event Instance

1. Navigate to the **Summit Event** tab.
2. Create a new Summit Event using the  
   🔗 [Create a Basic Event Guide](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/create-basic-event/)  
   Ensure the event has **matching logic enabled**.
3. From the related list, create a **Summit Event Instance**:
   - Set values such as Capacity, Dates, and Registration Settings.
   - After saving, click **Register** to verify the event is ready for registrations.

---

## 👥 Step 5: Register and Trigger Matching

1. On the Summit Event Instance, click the **“Register”** link.
2. Submit a registration form with a test contact.
3. Repeat with slight variations (e.g., spelling errors) to test matching logic.

The system will:

- Create a **new Person Account** if no match is found
- Match to an **existing Person Account** if a match is found
- Handle **multiple potential matches** and auto-select the best one

The **Summit Event Registration record** will display:

- Whether a match occurred
- Whether a new Person Account was created
- A **table showing matching context** and evaluated criteria

### 🔍 Scenarios to Test

- ✅ Exact match (same name/email)
- ✅ Fuzzy match (e.g., typo in email or swapped name)
- ✅ No match (entirely new person)
- ✅ Match against:
  - A manually created Person Account
  - Other account record types to verify non-matching behavior

---

## 🧪 Step 6: Validate Event Functionality

Please test standard and advanced event features:

🔗 [Standard Features](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/)  
🔗 [Advanced Features](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/)  
🔗 [Field Mapping via Custom Metadata](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/Contact-Matching/#custom-metadata-for-field-mapping)

### Key Areas to Validate:

- ✅ RSVP flow (registration experience)
- ✅ Capacity limits (e.g., stops or waitlists when full)
- ✅ Transactional emails (confirm triggers and merge field usage)
- ✅ Field-level matching via custom metadata
- ✅ Guest registration functionality
- ✅ Summit Event Appointments (creation of related records)

---

## 📝 Step 7: Submit Feedback

📋 [Submit via Google Form](https://forms.gle/LDMYekkdJoLvYah66)

Please include:

- Org type used (Standard, Education Cloud, or Nonprofit)
- Steps to reproduce any issue
- Screenshots or error messages
- Matching results and behavior observations
- Event functionality validation results

For bugs:

- Include **debug logs** when applicable
- Be detailed and clear in your report

---

## ✅ You're Done!

Thanks for helping us validate the next generation of Summit Events! Your feedback is vital to refining this release. Let us know if you'd like to explore advanced use cases or provide suggestions for documentation improvement.
