---
title: Testing Person Accounts
parent: Developers Wanted
---

# 🧪 Summit Events App Testing Guide  
**Focus: Person Account Matching + Core Event Functionality**

---

## 🔍 Overview

This test covers an upcoming release of the **Summit Events App**, which includes **Person Account Matching logic**. Though core capabilities remain the same, the matching engine has been streamlined for performance and accuracy. Testers will install the package, configure matching logic, simulate real-world registrations, and validate both core and advanced event functionality.

This package is **not upgradeable** and is intended for **throwaway testing only**. Please test in a **scratch org or new developer org only**.

---

## ✅ Before You Begin

Create a new org from one of the options below:

| Org Type | Link | Person Accounts Enabled |
|----------|------|--------------------------|
| Standard Dev Org | https://developer.salesforce.com/free-trials | ❌ No |
| Education Cloud Dev Org | https://developer.salesforce.com/free-trials/comparison/education-cloud | ✅ Yes |
| Nonprofit Cloud Dev Org | https://developer.salesforce.com/free-trials/comparison/nonprofit-cloud | ✅ Yes |

You may wish to test across org types to evaluate Person Account behaviors as well as validating existing functionality with Lead and Contact matching continue to work as expected.

---

## 📦 Step 1: Install the Summit Events App

You will receive an install URL the day of testing.  
Instructions:

1. Log in to your developer org (`login.salesforce.com`).
2. Use the provided URL to install the package.
3. Choose **Install for Admins Only**.
4. Open the Setup Menu and go to Installed Apps, verifying **Summit Events** has been installed.
---

## 🛠 Step 2: App Setup

Follow the official documentation to set up the app:  
🔗 [Installation & Setup Instructions + Video](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/Installing/)

Required setup includes:

- Creation of a **Site**, **Custom Settings**, **Sharing Rules** and **Applying Permission Sets**
- Assignment of **Permission Sets** should include to your User as well as your Site Guest User
- Be sure to **Clone the guest user permission set** and update it to include [**Read Access to the Account object**](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/Installing/#create-a-custom-permission-set-for-the-guest-user)
- If you prefer to leverage a Trailhead Org, please follow the [Trailhead Org Installation process](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/trailhead-install/)

---

## ⚙️ Step 3: Configure Person Account Matching

Follow this guide:  
🔗 [Contact & Person Account Matching Configuration](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/Contact-Matching/)

Steps to configure:

1. **Create a Matching Rule** for Person Accounts (e.g., Email, First Name, Last Name).
2. **Create and activate a Duplicate Rule** tied to the matching rule.
3. Be sure to activate your rules
4. Matching will trigger **automatically** when a registration creates or links a Person Account.

---

## 📅 Step 4: Create a Summit Event and Event Instance

1. Go to the **Summit Event** tab.
2. Create a new Summit Event:
   - Follow the [Create a Basic Event Instructions](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/create-basic-event/) and be sure to enable matching logic on your event.
3. From the related list or tab, create a **Summit Event Instance**:
   - Set values such as Capacity, Dates, and Registration Settings.
   - Once saved, click the "register" link to verify your event is ready to accept registrations.

---

## 👥 Step 5: Register and Trigger Matching

1. On the Summit Event Instance record, click **“Register”**.
2. Fill out the registration form to create a new registrant.
3. Repeat the process using a similar record (same or slightly different name/email) to test matching.

The system will:

- Create a **new Person Account** if no match is found
- Match to an **existing Person Account** if one qualifies
- Detect **multiple potential matches**, select the best fit, and reflect the result

All results will be visible on the **Summit Event Registration record**, including:

- Whether a match occurred
- Whether a new Person Account was created
- A **table view of matching context**

**Scenarios to test:**

- Exact match (same name/email)
- Fuzzy match (email typo or swapped name order)
- No match (completely new person)
- Match against both:
   - Test-created Person Accounts
   - Existing Person Account (created manually)
- Try registering with a non-Person Account record type to validate it's working as expected

---

## 🧪 Step 6: Validate Event Functionality

🔗 [Standard Features](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/standard-features/)  
🔗 [Advanced Features](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/)  
🔗 [Custom Metadata Field Mapping for Matching](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/advanced-features/Contact-Matching/#custom-metadata-for-field-mapping)

Please test:

- ✅ RSVP flow (Can a user register without errors?)
- ✅ Capacity limits (Does it stop once full?)
- ✅ Transactional emails (Are they triggered properly?)
- ✅ Custom metadata mapping for field-level matching (Does mapping behave as expected?)
- ✅ Guest Registration and Summit Events Appointments (Are all child records created appropriately?)

---

## 📝 Step 7: Submit Feedback

Submit all feedback here:  
📋 [Google Form](https://forms.gle/LDMYekkdJoLvYah66)

Please include:

- Type of org used (Standard, Education Cloud, Nonprofit)
- Steps taken to reproduce the issue
- Screenshots or error messages
- Matching results and observations
- Behavior of event functionality
- Any unexpected UI, logic, or record creation issues

For bugs:

- Include **debug logs**, if available
- Be as descriptive as possible

---

## ✅ You're Done!

Thanks for helping us validate the next generation of Summit Events! Let us know if you’d like to test more advanced use cases.

