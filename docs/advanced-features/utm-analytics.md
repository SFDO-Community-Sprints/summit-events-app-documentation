---
title: UTM Analytics
parent: Advanced Features
---

# Analytics utilizing utm Parameters
Events are shared beyond just email and marketers are wanting to understand the path taken to get to an event link to measure ROI, particularly for paid media. Google Analyitics will aggregate much of the data with the appropriate configuration to understand volume and traffic. With Summit Events, additional fields can be leveraged as part of Google Tag Manager and utilizing Google Analytics, the utm parameters generated will surface onto the registration record for more granular analtics in Salesforce to understand the registrats path to registering.

## Fields Utilized for Google Tag Manager
On the Summit Events Record, the Event Manager can set values on the below fields to be utilized in Google Tag Manager (GTM). When utizling GTM, the value on these fields should populate for additional segementation and analytics with Google Analytics. The following fields are utilized as a part of the data layer and the [Google Tag Manager code](https://developers.google.com/tag-platform/tag-manager/web/datalayer) will need to be in your custom template.
* Account
* Audience
* Event label
* Category
* Sponsor

## Leveraging UTMs
When utilizing Google Analtics (GA) for campaign analytics, Summit Events captures the UTM values on the Event Registration record. While GA will capture the aggregate data appropraitely, Summit Events will identify the values to each individual.  The following parameters from the URL are captured on the registration record in Summit Events:

* utm_source
* utm_medium
* utm_campaign
* utm_content
* utm_term
* gclid 
* utm_id
* utm_source_platform
* utm_creative_format
* utm_marketing_tactic

> [The definition for each of these parameters can be found here.](https://support.google.com/analytics/answer/10917952?hl=en#zippy=%2Cin-this-article)

## Expectations and Walk-Through
Below is an example of how this may look, only looking at Summit Events and the experience inside of Salesforce. For more information about Google Analytics and collecting Campaign Analytics, please [refer to their documentation](https://support.google.com/analytics/answer/1033863?hl=en&ref_topic=1032998&sjid=9325373783481558763-NA#)
> To test this, utilize [Google's Demo and Tools Campaign URL Builder](https://ga-dev-tools.google/ga4/campaign-url-builder/).

* Start by creating an Event and an Event Instance
* Capture the URL form the Register link and input into the Campaign URL Builder
  > ![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/014c29b2-8891-47b2-a2d8-6dd2b225af53)
* The URL will generate and you can use that to start a new registration
  > ![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/848ad20c-93a0-4b43-b630-5b7719d3a50d)
* Complete the registration process. The utm are recorded when the registrant hit's Submit or Next on the first page. If there are additional pages associated to the registration, once they pass the first page, the URL removes the parameters in the URL and the values are captured on the registration record, which will be in a started status until the registrant hits "Submit".
* Initial Page: 
  > ![GA Summit Events](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/5eb00f01-1c6f-478f-bea7-75a625e7c939)
* Second Page after "Next": 
  > ![GA Summit Events 2](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/3b15811e-2c30-47f2-9e4f-82465e0afe86)
* Registration Record in a "Started" status: 
  > ![image](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/assets/60475518/d866b27f-6ff0-4d16-92dd-b1d137d435ed)





