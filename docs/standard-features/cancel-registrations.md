---
title: Canceling Registrations
parent: Standard Features
---

*This page is still needing some content. If you're interested in contributing to the Summit Events App and want to help provide support by creating this page, comment below and let us know!*

## How a registration can be cancelled

### Internally

TODO:  Screenshot

1. Change their status to "Cancelled"

### Externally

TODO:  Screenshot

1. Get the person their "unique cancellation link" off their [Event Registration](../object-field-resources/summit-event-reg-obj/) record.
    * TODO:  _(Most likely by making sure before you start using Summit Events, you turn on e-mail confirmations when people register.  This is not built into the scratch orgs by default.)_
2. They click it.
3. If their [Event Registration](../object-field-resources/summit-event-reg-obj/) record is already in "cancelled" status, it tells them they're cancelled.
4. Otherwise, it offers a button for them to click, which then will take them to a page telling them they're cancelled.

## What happens to registration counts on the instance

TODO:  Screenshot / flesh out with API names and better business examples

All count-related fields adjust as if the person had never registered in the first place.

_(The [Event Registration](../object-field-resources/summit-event-reg-obj/) record, however, remains a child object of the [Event Instance](./event-instance-functionality/) record, to facilitate historical analysis you might want to explore.)_

## Considerations for a cancelled registration

TODO:  ask others