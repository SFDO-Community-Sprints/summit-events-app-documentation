---
title: Associate Campaigns to Summit Events
parent: Recipes
---

# Associating Campaigns to Summit Events
This recipe is intended to all Event Manager align their Campaigns Members with Summit Event Records and/or Summit Event Instance Records. Please read though the documentation to ensure it meets your needs and you make the appropriate updates to align with your business processes.

## Prerequisites
For this recipe to work, please ensure you've meet the following prerequisites:
- Summit Events App is installed
- Contact or Lead Matching is enabled and configured
- You have access to Campaign and Campaign Members

## What's Included
- Fields
  - Campaign (Summit Event Object)
  - Campaign Override (Summit Events Instance Object)
- Flow
  - Auto-Launch Flow: "summit_Campaign_Flow_Recipe"

## Installable Unlocked Package
You can install this recipe. With this being an unlocked packed, you can edit it and make all appropriate updates to meet your needs.

- Sandbox: https://test.salesforce.com/packaging/installPackage.apexp?p0=04t5f000000rM5DAAU
- Production: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t5f000000rM5DAAU

## Setup
Once installed, you need to take the following actions:
- Ensure all prerequisites have been completed
- Update the *Lightning Record Page* on the Summit Events Object. Add the field "Campaign" to the layout.
   > Note: The Summit Events Object leverages dynamic page layouts, so be sure to update the Lightning Record Page versus the Page Layout
- Update the *Page Layout* on the Summit Events Instance Object. Add the field "Campaign Override" to the layout. Because this is an override, it's recommended that you add it to the Override section.
- Create/Select a Campaign and update your event/instance to have a related Campaign.
- Review and Active the Flow
  > Note: The flow out of the box uses standed Campaign Member status'. If you are using custom Campaign Member Status', be sure to review and update your flow accordingly.

## How it works
The goal of this recipe is to allow Events and Event Instances to align with Campaigns while the Event Registrations Lead or Contact have a related Campaign Member. This idea is driven by Campaigns being utilized for communication purposes, not to manage the event as that is what Summit Events App is intended for!

The flow is built to run when an Event Registration records status is changed to "Registered".

![image](https://user-images.githubusercontent.com/60475518/226238920-37364df1-c34c-4e1b-837a-84a12f147bdc.png)


The way this flow works, it'll capture the Campaign ID from the Event or Event Instance. This will always depend on if there is an Instance Campaign Override. If there is a Campaign Instance Override, it'll utilize the Instance Campaign. If the Instance Campaign Override field is blank, it'll use the Campaign from the Event record. If both blank, it'll do nothing.

![SEA-Campaign-Decision](https://user-images.githubusercontent.com/60475518/226241131-31dae989-fc9f-4553-b6db-fc8caec29eab.png)


Once it captures the Campaign ID, it'll look to see that a Contact or Lead exists on the record. If there isn't one, it'll end the flow as Campaigns and Campaign Members require a Lead or Contact relationship. 

![SEA-Lead-Contact-Decision](https://user-images.githubusercontent.com/60475518/226241190-78f53b6a-a759-4948-a21d-6338324727ed.png)


At this point in the flow, it knows who the Contact or Lead is and will proceed to look if that Contact or Lead has a Campaign Member record related to the Campaign it captured initially in the flow. If a Campaign Member is found, it'll update the Campaign Member Status. If it doesn't find a Campaign Member, it will create one associated to the Contact or Lead. This will complete the Flow.

![SEA-Campaign-Member-path](https://user-images.githubusercontent.com/60475518/226241201-53825136-bd4b-4505-9f87-d6829fe1efdd.png)


## In Context
When leveraging Pardot or Marketing Cloud, you may write a report of constituents and add them to a campaign to invite them to an event. That email may be coming out of Pardot or Marketing Cloud, which can look at the Campaign. The invitation includes a registration link associated that is associated to the campaign (on the Event or Instance Record). When the recipient of the email registers, it'll create the event registration record, find the Campaign Member with a Status of "Sent" and update it to "Responded". If you're using something like Journey Builder in Marketing Cloud, you can have the journey check the status and ensure they don't get the "reminder to register" email.

You can use different status', but you'll want to make sure they are available on all campaigns and then update the flow accordingly. If your pardot or Marketing Cloud are updating campaign member status' based on other interactions, be sure these all work well together and each status is appropriately defined within your business process.

## Additional Notes
This flow is intended to give users a jump start in aligning their Event Registration with Campaign Members. You may be utilizing various campaign status' and will want to update your flow accordingly.  A good example of this is when the flow "Creates a Campaign Member". You may not want it to have the same status as someone who was invited initially. Be sure to test this in a Sandbox and make it aligns to your business processes as well as reporting goals.
