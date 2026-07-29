---
title: Custom Templates
parent: Advanced Features
---
# Summit Events Custom Branding — Manual Setup Guide

A copy-and-paste walkthrough for applying custom branding to the Summit Events App. You will download the package's existing files, make targeted edits, and re-upload — no coding from scratch required.

---

## Overview

Summit Events renders registration pages through Visualforce. The package ships with a default template and a Static Resource zip that contains all the CSS and JS. The approach here is:

1. Download the package zip — it has everything you need
2. Edit the CSS to add your header and brand colors
3. Re-upload as a new Static Resource
4. Create a Visualforce page (copy-paste provided below)
5. Add a picklist value to the Template field
6. Set the template on each event record

---

## Step 1 — Download the Package Static Resource

1. In Salesforce Setup, search **Static Resources**
2. Find **SummitEventsAssets** (it may appear as `summit__SummitEventsAssets`)
3. Click **View file** to download the zip
4. Save it to your computer and unzip it

You will see this structure:

```
summit__SummitEventsAssets/
├── css/
│   ├── main.css            ← forms, validation, loading overlay styles
│   └── calendar.css        ← calendar widget styles
├── js/
│   ├── loading.js
│   ├── sldsHelper.js
│   ├── register.js
│   ├── additionalQuestions.js
│   ├── options.js
│   ├── guestRegistration.js
│   ├── donation.js
│   ├── submit.js
│   └── calendar.js
├── fullcalendar/
│   └── index.global.min.js
└── img/
    ├── loading-shield.gif  ← delete this
    └── loading-summit_events.gif  ← delete this
```

---

## Step 2 — Prepare the Zip

**Duplicate the unzipped folder** and rename it to your org/brand name (e.g. `Acme_Events`). This is your working copy — you will edit it and re-zip it.

Inside your copy, make these changes to the `img/` folder:

1. **Replace** `loading-shield.gif` and `loading-summit_events.gif` with your own images, or simply delete them — the CSS edits in Step 3 will remove any reference to them
2. **Add** your favicon files to `img/`:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

   > If you don't have custom favicons yet, you can skip this and remove the favicon `<link>` tags from the Visualforce page in Step 5.

Your folder should now look like:

```
Acme_Events/
├── css/
│   ├── main.css
│   └── calendar.css
├── img/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
├── js/
│   └── (all JS files from the package)
└── fullcalendar/
    └── index.global.min.js
```

---

## Step 3 — Edit the CSS

Open `css/main.css` in any text editor. You will make two edits.

### Edit 1 — Add your branding at the top

Paste this block at the very **top** of `main.css`, before any existing styles. Fill in your brand colors and header text:

```css
/* ── Your Brand Header ── */
body {
    background-color: #f4f6f9;   /* page background */
    font-family: Arial, sans-serif;
    color: #1B3A6B;              /* default text color */
}

header {
    width: 100%;
    background: #1B3A6B;         /* header background — your primary color */
    padding: 0;
}

header::after {
    content: '';
    display: block;
    height: 6px;
    background: #C9A84C;         /* accent stripe under header */
}

.your-header-inner {
    max-width: 1024px;
    margin: 0 auto;
    padding: 24px 32px;
    display: flex;
    align-items: center;
    gap: 16px;
}

.your-wordmark {
    font-size: 1.75rem;
    font-weight: 700;
    color: #FFFFFF;
}

.your-tagline {
    font-size: 0.85rem;
    color: #C9A84C;              /* accent color */
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-top: 4px;
}

/* ── Buttons ── */
.slds-scope .slds-button_brand,
.slds-scope .slds-button--brand {
    background-color: #1B3A6B;   /* your primary color */
    border-color: #1B3A6B;
}

.slds-scope .slds-button_brand:hover,
.slds-scope .slds-button--brand:hover {
    background-color: #162f57;
    border-color: #162f57;
}

/* ── Links ── */
.slds-scope a {
    color: #1B3A6B;
}
```

### Edit 2 — Replace the loading spinner

Find this block in `main.css` (around line 174):

```css
#loading .background {
    width: 105px;
    height: 125px;
    background-image: url(../img/loading-shield.gif);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    -webkit-animation: loadspin 2s ease-in-out infinite;
    ...
}
```

You have two options:

---

**Option A — Use your own image**

Add your own loading GIF or PNG to the `img/` folder, then update just the `background-image` line to point to it. Leave everything else in the block unchanged:

```css
#loading .background {
    width: 105px;
    height: 125px;
    background-image: url(../img/your-loading-image.gif);  /* ← change this line only */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    -webkit-animation: loadspin 2s ease-in-out infinite;
    -moz-animation: loadspin 2s ease-in-out infinite;
    -o-animation: loadspin 2s ease-in-out infinite;
    animation: loadspin 2s ease-in-out infinite;
}
```

The existing `loadspin` keyframe animation in `main.css` will spin your image automatically — no other changes needed.

---

**Option B — Use a CSS spinner (no image required)**

Replace the entire `#loading .background` block with this. It removes the image dependency and draws a spinning ring in your brand colors using pure CSS:

```css
#loading .background {
    width: 72px;
    height: 72px;
    margin: 0 auto 8px;
    position: relative;
    background-image: none !important;
    animation: none !important;
    -webkit-animation: none !important;
}

#loading .background::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top-color: #1B3A6B;   /* your primary color */
    border-right-color: #C9A84C; /* your accent color */
    animation: brand-spin 0.85s ease-in-out infinite;
}

@keyframes brand-spin {
    to { transform: rotate(360deg); }
}
```

If you go with Option B, also find and delete the `@-webkit-keyframes loadspin`, `@-moz-keyframes loadspin`, `@-o-keyframes loadspin`, and `@keyframes loadspin` blocks below it — they are no longer needed.

Finally, add this anywhere in `main.css` to suppress the package's static loading div:

```css
.seaBackground {
    display: none !important;
    background-image: none !important;
}
```

### No changes needed to calendar.css

Leave `calendar.css` exactly as downloaded.

---

## Step 4 — Re-zip and Upload

1. Select all files **inside** your `Acme_Events` folder (not the folder itself) and compress them into a zip
2. In Salesforce Setup, go to **Static Resources → New**
3. Fill in:
   - **Name**: `Acme_Events` (no spaces — this is referenced in the Visualforce page)
   - **File**: upload your new zip
   - **Cache Control**: `Public`
4. Click **Save**

---

## Step 5 — Create the Visualforce Page

1. In Salesforce Setup, search **Visualforce Pages → New**
2. Set:
   - **Label**: `Acme SummitEvents` (human-readable)
   - **Name**: `Acme_SummitEvents` (this must match the picklist value you add in Step 6)
3. Replace all content in the editor with the markup below
4. Replace every instance of `Acme_Events` with your Static Resource name from Step 4
5. Replace the header HTML with your own org name and tagline
6. Click **Save**

```xml
<apex:page id="summitEventsApp" sidebar="false" lightningStyleSheets="true"
    showHeader="false" standardStylesheets="false" cache="false"
    applyHtmlTag="false" docType="html-5.0">
    <apex:slds />
    <html lang="en" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="apple-touch-icon" sizes="180x180"
            href="{!URLFOR($Resource.Acme_Events, '/img/apple-touch-icon.png')}"/>
        <link rel="icon" type="image/png" sizes="32x32"
            href="{!URLFOR($Resource.Acme_Events, '/img/favicon-32x32.png')}"/>
        <link rel="icon" type="image/png" sizes="16x16"
            href="{!URLFOR($Resource.Acme_Events, '/img/favicon-16x16.png')}"/>
        <link rel="shortcut icon" type="image/x-icon" sizes="16x16"
            href="{!URLFOR($Resource.Acme_Events, '/img/favicon-16x16.png')}"/>
        <title>
            <apex:insert name="metaPageTitle"/>
        </title>
        <link rel="stylesheet"
            href="{!URLFOR($Resource.Acme_Events, '/css/main.css')}"/>
        <link rel="stylesheet"
            href="{!URLFOR($Resource.Acme_Events, '/css/calendar.css')}"/>
        <apex:insert name="scriptsHead"/>
    </head>
    <body>
    <header>
        <!-- Edit this block with your org name and tagline -->
        <div class="your-header-inner">
            <div>
                <span class="your-wordmark">Your Organization Name</span>
                <span class="your-tagline">Campus Events &amp; Registration</span>
            </div>
        </div>
    </header>
    <div class="slds-scope">
        <div class="slds-grid slds-grid_align-center">
            <div class="slds-col slds-size_1-of-1 slds-p-around_large
                hide-padding whiteOpacityBackground" style="max-width:1024px;">
                <div class="slds-p-around_large minimize-padding">
                    <!--[if IE]>
                    <p class="browserupgrade">You are using an
                    <strong>outdated</strong> browser. Please
                    <a href="https://browsehappy.com/">upgrade your browser</a>
                    to improve your experience and security.</p>
                    <![endif]-->
                    <apex:insert name="sectionNav"/>
                    <apex:insert name="body"/>
                    <apex:insert name="footer"/>
                </div>
            </div>
        </div>
    </div>
    <div id="backPage">
        <div id="seaLoading">
            <div class="seaBackground"></div>
        </div>
    </div>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/moment.min.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/fullcalendar/index.global.min.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/loading.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/sldsHelper.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/register.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/additionalQuestions.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/options.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/guestRegistration.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/donation.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/submit.js')}"
        type="text/javascript"></script>
    <script src="{!URLFOR($Resource.Acme_Events, '/js/calendar.js')}"
        type="text/javascript"></script>
    </body>
    </html>
</apex:page>
```

> **Required `<apex:insert>` slots — do not remove these five:**
>
> | Slot | Purpose |
> |---|---|
> | `metaPageTitle` | Browser tab title per registration step |
> | `scriptsHead` | Step-specific JS injected by Summit Events into `<head>` |
> | `sectionNav` | Step progress breadcrumb |
> | `body` | Main registration form content |
> | `footer` | Next / Back navigation buttons |

---

## Step 6 — Add the Picklist Value

The Template field on Summit Events is a restricted picklist. The value must exactly match the Visualforce page API name you used in Step 5.

1. Setup → **Object Manager → Summit Events → Fields & Relationships**
2. Click **Template**
3. Scroll to **Values** → **New**
4. Enter your Visualforce page name exactly (e.g. `Acme_SummitEvents`)
5. Click **Save**

---

## Step 7 — Wire Each Event Record

1. Open a Summit Events record (Open House, Campus Tour, etc.)
2. Click **Edit**
3. Set the **Template** field to your new picklist value
4. Click **Save**

Repeat for each event you want to use your branded template.

---

## Updating Branding Later

To change colors or the header text: edit `css/main.css` in your local folder, re-zip, and re-upload via Setup → Static Resources → find your resource → **Edit** → upload the new zip. Hard refresh the browser (`Cmd+Shift+R`) after uploading to clear the CDN cache.

To add a header image: add your image to `images/` in the zip, re-upload, then replace the header `<div>` in the Visualforce page with:

```html
<picture>
    <source media="(max-width: 576px)"
        srcset="{!URLFOR($Resource.Acme_Events, '/images/header-mobile.png')}"/>
    <source media="(min-width: 577px)"
        srcset="{!URLFOR($Resource.Acme_Events, '/images/header-desktop.png')}"/>
    <img src="{!URLFOR($Resource.Acme_Events, '/images/header-desktop.png')}"
        alt="Your Organization"/>
</picture>
```
