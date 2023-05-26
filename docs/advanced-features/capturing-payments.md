---
title: Capturing Payments
parent: Advanced Features
has_children: true
---

# Capturing Payments 

Summit Events App (SEA) has everything needed to record a payment, but how do you capture the event fees into my organization's accounts? The short answer is SEA does not directly connect you to a credit card payment gateway and added code will be needed for which to accomplish this connection.  

## Why isn’t SEA able to connect to credit card gateways out of the box? 

Since SEA is an Open-Source project, we are unable to incorporate commercial solutions into our code base. It is our hope that as SEA users develop these connections to payment gateways the community will share these code recipes in the tradition of Open-Source. 

## What is a credit card payment gateway? 

A credit card payment gateway is a service that collects credit card and bank payments in a secure, PCI compliant way. Web applications like SEA may jump to a gateway interface on another page or have an interface that appears to be on the same page. There is always a virtual wall around the data that gets entered into a payment gateway that does not allow the Web application using the gateway to know the confidential information being entered. There are many commercial payment gateways out there that could be added to Summit Events: Stripe, Authorize.net, TouchNet to name a few.  

## How does SEA let you jump out to a Payment Gateway? 

For the event you can fill in fees and fee allocations to create a fee for the event. This fee will appear during registration of the event. We have designs to add fees to appointments in the future for an a la carte experience to fees. 

There is a field on the event object called Payment Gateway. As SEA user you can fill in the name of a Visualforce page to jump to for payments. During the payment process this will redirect your user to that defined page. This exits your registrant, briefly, out of SEA so that external-to-the-package code can take care of your payment needs. 

Since SEA uses an encrypted cookie to maintain the state of your registration you can utilize that information (as the key is available to code outside the package for decryption within the org) to carry on with code outside of SEA and still know the user's registration id. This will let you query for fees and know how to report back the success of your payment. 

If your gateway code is professionally written it will receipt the transaction on the SEA payment object when the transaction is complete and send you back to the confirmation page. At this point SEA will see that all fees have been satisfied and end registration. 

[custom questions section](../image/Preview_Event_Web_Form.png).
