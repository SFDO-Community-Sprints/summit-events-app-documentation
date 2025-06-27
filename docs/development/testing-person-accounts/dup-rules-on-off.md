# ✅ Test Case: Duplicate Rules "Alerts" On and Off

---

## 🎯 Purpose

Verify how the Summit Events App handles duplicate matching when:
- Duplicate Rules are set to “Alerts Off” vs. “Alerts On”
- The Standard Person Account Duplicate Rule is used
- Various fuzzy name scenarios are tested

---

## 🔗 Prerequisites

- Summit Events App is installed and fully configured
- Person Accounts are enabled (test in an org where PA is available)
- The Standard Person Account Duplicate Rule exists and is **active**
- Ensure Duplicate Rules are **turned OFF** initially (no alert dialog)

---

## 🏁 Where to Start

1. Log into your Salesforce test org
2. Go to **Setup → Duplicate Rules**
3. Locate **Standard Person Account Duplicate Rule**
4. Confirm:
   - Rule is Active
   - Alert or Block settings are initially set to **OFF**

---

## 🛠 Test Steps (Alerts OFF)

### 1. Update Event Registration Settings

- Navigate to the **Summit Event** tab
- Create a new Event:
  - Follow [Create a Basic Event Instructions](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/Getting-Started/create-basic-event/)
  - Enable matching logic on the Event
- On the Event record:
  - Set:
    - **Registration Matching Logic** → `Use Salesforce Duplicate Rules`
    - **Person Creation Duplicate Rule** → `Standard Person Account Duplicate Rule`
    - **Custom Metadata Person Matching Method** → `Admissions`
    - **Person Matching No Match Behavior** → `Create Person Account`
    - **Person Matching Multiple Match Behavior** → `Match with most recently modified`

Save the Event.

---

### 2. Create an Event Instance

- Create a **Summit Event Instance** for the Event
- Set capacity, dates, and registration settings
- Click **Register** to proceed

---

### 3. Register a New Person

- Click **Register**
- Enter the following data:
  - First Name: John
  - Last Name: Smith
  - Email: john.smith@example.com
- Submit the registration

✅ **Expected Result:**
- A new Person Account record is created
- A new Summit Event Registration is linked to that Person Account

---

### 4. Register the Same Person Again

- Click **Register** again
- Enter exactly the same:
  - First Name: John
  - Last Name: Smith
  - Email: john.smith@example.com
- Submit the registration

✅ **Expected Result:**
- A second **Summit Event Registration** is created
- Both Registrations point to the **same Person Account**
- The **Summit Event Registration record** shows matching logic details confirming it used the duplicate rule and matched the record

---

### 5. Register a Different Email

- Click **Register** again
- Enter:
  - First Name: John
  - Last Name: Smith
  - Email: johnny.smith@example.com
- Submit the registration

✅ **Expected Result:**
- A **new Person Account** is created because the email differs
- Registration links to the new Person Account
- Matching logic reflects no match found → person was created

---

### 6. Fuzzy Name Matching Tests

Repeat steps 3-5 with slight name variations:
- John → Jonathan
- Steve → Steven
- Stephanie → Steph
- Kathy → Kathleen

✅ **Expected Result:**
- Depending on how your Matching Rule is configured (Exact vs. Fuzzy), the system:
  - Might match records if considered “fuzzy matches”
  - Might create new Person Accounts if not deemed matches
- The matching table on the Summit Event Registration record should clearly show the evaluation result

---

## 🔁 Repeat with Alerts ON

1. Return to **Setup → Duplicate Rules**
2. Edit **Standard Person Account Duplicate Rule**
   - Enable **Alert** or **Block** on Create/Update
3. Save the rule

Repeat **all steps 1-6** above, ensuring:

✅ **Expected Result (Alerts ON):**

- During registration:
  - System might display an alert if a duplicate is detected
- However:
  - Registrations should still be created as expected
  - Matching logic on the Summit Event Registration record should reflect the duplicate handling
- Confirm whether the alert message is displayed in UI or bypassed during Summit Events registration flow

---

## ✅ Pass/Fail Criteria

- Duplicate matching behaves as configured:
  - Matches exact duplicates to existing Person Accounts
  - Creates new Person Accounts for unique data
  - Alerts appear if “Alerts On” is active
- The **Summit Event Registration record** displays accurate matching context and linked Person Account
- No unexpected errors or failures occur

---

## 📝 Notes

- Capture screenshots of the Summit Event Registration record to document matching results.
- Include debug logs if you encounter unexpected errors.
- Test in both:
  - Standard Developer Org
  - Education Cloud / Nonprofit Cloud Dev Orgs

---

## 💬 Report Results

Submit your results via this form:  
[Google Feedback Form](https://forms.gle/LDMYekkdJoLvYah66)

Be sure to include:
- Org type
- Steps taken
- Screenshots
- Any anomalies or unexpected results

---

