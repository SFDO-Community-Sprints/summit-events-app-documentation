---
title: Logged-in User Contact Mapping
parent: Contact and Lead Matching
grand_parent: Advanced Features
---

## Logged-in User Contact Mapping

### Overview

When a user is logged in, Summit Events uses the **Contact** record associated with that user as the source for standard registration values. Those values are mapped to the **Summit Event Registration** record automatically. With Person Accounts, the Contact values still exist, so values from the fields on the contact object are being captured.

This means:

- The logged-in user does not need any special setup for this feature to work.
- Standard Contact values are passed into the Summit Event Registration record automatically.
- This happens whether or not the related field is being shown on the registration form.

### How it works

For logged-in users, Summit Events reads values from the Contact record and maps them to fields on the Summit Event Registration record.

The Contact remains the source record, but registration data is stored on the Summit Event Registration record.

If a field is displayed on the registration form, the user may see or interact with the value during registration if the field is null. If the field has a value, the user will not be able to change what it displayed. If a field is not displayed on the registration form, the Contact value can still be passed through to the Summit Event Registration record behind the scenes.

### Important behavior for address fields

Address values are also pulled from the Contact record for logged-in users.

If Summit Events is asking for address information and the Contact value matches the available picklist values on the Summit Event Registration record, the value is stored in the matching registration field.

If the Contact value does **not** match the available picklist values, Summit Events allows the value to be stored in an open text field instead. This is especially important for organizations that may have:

- **State/Country Picklists enabled**, or
- **State/Country Picklists disabled**

This approach allows Summit Events to support either configuration.

### What happens when Contact values do not match picklists

For logged-in users, matching against registration picklist values happens automatically.

- If the Contact value matches a picklist value, it is stored in the picklist field on the Summit Event Registration record.
- If the Contact value does not match a picklist value, it is stored in the related open text field instead.

This ensures the registration still captures the Contact's data, even when the Contact value is outside the available registration picklist options.

### Does this update the Contact record?

No.

If the user enters or adjusts a value during registration because the Contact value does not match a registration picklist, that information is stored on the **Summit Event Registration** record only.

It does **not** overwrite the Contact record.

### Key takeaway

For logged-in users:

- Standard field mapping happens automatically.
- Contact values pass through to the Summit Event Registration record whether or not the field is being asked on the form.
- If picklist values do not match, Summit Events uses open text fields so the value can still be captured.
- No special user setup is required.

## Field Mapping

The following Contact fields map to the Summit Event Registration record for logged-in users:

| Contact Field | Summit Event Registration Field |
|---|---|
| `FirstName` | `Registrant_First_Name__c` |
| `LastName` | `Registrant_Last_Name__c` |
| `Email` | `Registrant_Email__c` |
| `HomePhone` | `Registrant_Phone__c` |
| `MobilePhone` | `Registrant_Mobile_Phone__c` |
| `MailingStreet` | `Registrant_Street_1__c` |
| `MailingState` | `Registrant_State__c` |
| `MailingCity` | `Registrant_City__c` |
| `MailingPostalCode` | `Registrant_Postal_Code__c` |
| `MailingPostalCode` | `Registrant_Zip__c` |
| `Birthdate` | `Registrant_Date_of_Birth__c` |
| `Id` | `Contact__c` |

## Country Mapping Behavior

Country is handled a little differently from the other mapped fields.

When a Contact has a `MailingCountry` value, Summit Events checks whether that value matches a valid option in the `Registrant_Country__c` picklist on the Summit Event Registration record.

### If there is a match

The value is stored in:

- `Registrant_Country__c`

The related text field is left blank.

### If there is not a match

The picklist field is left blank, and the raw Contact value is stored in:

- `Registrant_Country_Text__c`

This makes sure the registration still captures the country value even when it does not align with the configured picklist options.

## Admin Notes

There is no additional setup required for this logged-in user mapping behavior.

Admins should be aware that:

- Contact values are the source for logged-in user registrations.
- Mapping happens automatically for standard fields.
- Picklist mismatches do not prevent values from being captured.
- Registration data entered during the process does not overwrite the Contact record.
