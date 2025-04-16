---
title: SEA QR Code
parent: Advanced Features
has_children: false
---

# QR Code Configuration
## Adding the QR code generator site in Salesforce as a Trusted Domain

In order for the QR Code to display properly in Summit Events, the URL of the site that generates the QR image needs to be added to Salesforce as a Trusted URL.

1. From Setup, search for Trusted URLS
2. From the Trusted URLS setup screen, click the New Trusted URL button.
3. Fill in the Trusted URL Information

   **API Name:** SEA_QR_Code_Generator
   
   **URL:** https://api.qrserver.com
   
   **Description:** Site that generates the SEA QR Code.
   
   Make sure the select img-src (images) is checked. This option is enabled by default
   
   Make sure the Active checkbox is checked.  This option is enabled by default.
   Leave the remainder of the default settings.
   
5. Save the new Trusted URL.

For more information on Trusted URLS see: https://help.salesforce.com/s/articleView?id=xcloud.security_trusted_urls_manage.htm&type=5

