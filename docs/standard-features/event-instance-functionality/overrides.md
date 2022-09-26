---
title: Overrides
parent: Event Instance Functionality
grand_parent: Standard Features
---
# Overrides

In Summit Events, the standard functionality calls for each instance to utilize details from the parent event record. While you can control the date, time and capacity on an instance, the location details, Alternative Registration URL link, Feed Registration Button Text and Fees are read from parent event. As an event manager, you may be creating different instances of the same event, but some may be virtual. Rather than creating an entirely new event record, you can control certain fields that impact the individual instance.

## Steps to Leveraging Overrides
Leveraging overrides is as simple as inputting a value in a field that ends in "Override" on the Event Instance record. These fields will typically be in the "Overrides" section on the page layout. If you don't see these fields, you may need to update your page layout.


>![image](https://user-images.githubusercontent.com/60475518/190320886-6a6fcb0a-1ec5-45fc-984f-67d4d00ad4ce.png)


## Expectations and Examples
You should expect that the ovveride fields utilized will update on the registration page layout as well as map appproiately to the registration record. Below is an example of how the registration page will change based on an Instance Override. In the example below, there is a single Event record with 2 Instance records. You'll be able to see this as part of the Registration Views.

| |Admin View | Registrant View |
|:-----|:-----------------|:------|
| Event |![image](https://user-images.githubusercontent.com/60475518/192381056-0d9efe87-8c99-4604-a0b6-a7d4d241c0c3.png)| ![image](https://user-images.githubusercontent.com/60475518/192383071-919057ba-a61f-4139-883e-5506c8d3d8c0.png)
|Instance Override | ![image](https://user-images.githubusercontent.com/60475518/192381811-d97573f6-97c0-403e-b8db-0b1824627d4c.png) | ![image](https://user-images.githubusercontent.com/60475518/192382985-352cdbe7-0217-492d-9287-b66fa57e3a89.png)





## Override Mappings

|Instance Override Field | |Event Record Field|
|:-----------------------|:--------------|:-------|
|Alternate Registration URL Override| *will override* |Alternate Registration URL |
|Building Override| *will override*| Building|
|Event Fee Additional Allocation Override|*will override*| Event Fee Additional Allocation|
|Event Fee Additional Override |*will override*| Event Fee Additional|
|Event Fee Allocation Override |*will override*| Event Fee Allocation|
|Event Fee Override|*will override*| Event Fee|
|Feed Registration Button Text Override|*will override*| Feed Registration Button Text|
|Location Address Override|*will override*| Location Address|
|Location Map Link Override|*will override*| Location Map Link|
|Location Title Override|*will override*| Location Title|
|Location Type Override|*will override*| Location Type|





