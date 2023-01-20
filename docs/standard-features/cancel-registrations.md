---
title: Canceling Registrations
parent: Standard Features
---

## How to cancel a registration

### External (for registrants)

1. Provide the registrant with the link stored in the "**Event Registration Cancel Link**" field on their [Event Registration](../../object-field-resources/summit-event-reg-obj/) record.  It is personalized to them and them only, so be sure that it is the correct Event Registration record's link within an Event Instance.
    * The most common way to do this is to ensure that the [Event Instance](../event-instance-functionality/)'s parent [Event](../../Getting-Started/create-basic-event/) record is configured to send [Event Emails](../create-event-email/create-event-email/) to registrants when they register.
2. The registrant clicks the cancellation link.
3. If the registrant's [Event Registration](../../object-field-resources/summit-event-reg-obj/) record is already in "Cancelled" status, the registrant's web browser simply displays a message telling them that they're cancelled.
4. Otherwise, the link offers a button for the registrant to click.  When they do:
    * In the background, the corresponding [Event Registration](../../object-field-resources/summit-event-reg-obj/)'s "**Status**" field value flips to "Cancelled."
    * The registrant's web browser will then display a message telling them that they're cancelled.

### Internal (for staff)

1. Inside of Salesforce, open the appropriate [Event Registration](../../object-field-resources/summit-event-reg-obj/) record and change its "**Status**" field value to "Cancelled."
2. Save the edited record.

## What happens to registration counts on the instance

All auto-counted fields on the parent [Event Instance](../event-instance-functionality/) record adjust as if the primary attendees, guests, etc. attached to the now-cancelled [Event Registration](../../object-field-resources/summit-event-reg-obj/) record had never registered in the first place.

_(Current Available Capacity, Count of Attendees, Confirmed Attendees, Primary Attendees, Primary Confirmed Attendees, etc.)_

For recordkeeping, the now-cancelled [Event Registration](../../object-field-resources/summit-event-reg-obj/) record remains in existence and remains a child object of its parent [Event Instance](../event-instance-functionality/) record.

## Cautions and considerations

1. Unique cancellation links are **personal** to each [Event Registration](../../object-field-resources/summit-event-reg-obj/) record on which they appear.<br/>**CAUTION:**  Do not copy one person's link to your clipboard and send it to to a lot of other people, lest registrants accidentally cancel each others' registrations.
    * This is different from registration links, which are found one level of data "up" on the [Event Instance](../event-instance-functionality/) record and can be shared with the whole world at once.
1. If someone calls to cancel over the phone, and you're confident it's really the registrant, you'll want to have someone with appropriate Salesforce data-editing permissions manually follow the internal cancellation instructions above as quickly as possible so that you make room for someone else to register for your event.
