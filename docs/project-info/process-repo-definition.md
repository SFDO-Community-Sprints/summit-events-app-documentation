---
title: Process and Repo Definitions
parent: Project Info
nav_order: 1
---

# Development Process

The below is intended to capture the development cycle, tools utilized and setting expectations on Summit Events App development. This is subject to change and updates will be made as they occur. Please don't hesitate to ask questions so we can refine our documentation. We are always striving for transparancy and collaboration.

# Feature Request Process
The following reflects the ideal feature request process:
- All new Feature Requests are first shared in the [Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kHi2SAE). This is to capture some commmunity feedback on interest as well as some initial requirements.
- An individual on the Summit Events App Team creates Feature Request Issue in Github following the template, capturing some initial requirements while articulating some expectations.
- The Feature Request is reviewed by the Summit Events App team and technical specs are created, adding to the Issue created.
- The Feature Request Issue is assigned to an individual or a request is made to the community for support on development of the Feature Request.
- The assigned “Developer” will document and articulate their solution as part of their process, ensuring testers can recreate it and working as expected to based on the initial request and technical specs.
- Once developlment is complete and ready for a Pull Request, the rest of the Review Process will follow.

# Repository Definitions:

Below are definitions on the repositories being utilized and their overall function and expected status.

## [Summit Events Repo](https://github.com/SFDO-Community/Summit-Events-App)
The Summit Events App is a part of the Salesforce Open Source Commons, which means that Salesforce.org is the direct owner of the repository. This repository is the primary branch and will have the latest features and updates, so it will commonly be ahead of the packaged release. This is intentional for meaningful testing and community collaboration.

The Summit Events App repo will be the primary source for development utilizing the follow:
- Main Branch = Latest updates on all contributions and feature developments prior to a new package or release.
- Branches = Updates/Developments from Contributors or bug fixes to be submitted via pull rquest
- Issues = Capturing bugs and Feature Request with appropriate tags project relationships

### [Issues on Summit Events Repo](https://github.com/SFDO-Community/Summit-Events-App/issues)
Issues are intended to capture bugs as well as feature request. There are pre-built forms for both with guidance as what to capture. Issues will get reviewed regularly by the primary project team and minimally at standing Summit Events Team meetings which happen monthly. Summit Event Users are encouraged to engage in the [Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kHi2SAE) to ask questions about expected functionality as well as feature requests before submitting a formal issue

### [Development/Review of Branches](https://github.com/SFDO-Community/Summit-Events-App/branches)

When working on fixing a bug or creating new functionality based on a feature request, **a new branch will be required**. When the branch is ready for review, the individual will need to create a pull request prior to being merged into the Main Branch. The Summit Events App Team will review the Pull Request, making appropriate comments and requests for changes/updates. Once approved, the Summit Events Team will merge the pull request into the Main Branch. 

This process will allow the Summit Events App Team to test and approve development prior to community feedback and testing. Once the feature or bug is in the Main Branch, we will have the able to invite more community users to support in testing new functionality as well as ensuring bugs are resolved utilizing [Metecho](https://metecho.herokuapp.com/projects). This will streamline the use of Metecho allow the user to always create a new scratch org from the main page (no Epics or Tasks).

**NOTE**: When something is packaged, it’ll be there that way forever! We will always be mindful of this when approving pull requests.


## [SFDO Community Sprint Summit Events Repo](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation)
The Summit Events App has regularly been represented at the SFDO Open Source Community Sprints since March 2020. Because Summit Events is a part of the Salesforce Open Source Commons, we want to sure that collaboration on documentation is easy to access, particularly during the Community Sprints.

This Repo will capture all of the documentation related to Summit Events based on the latest packaged release. The repo [leverages Github Pages](https://sfdo-community-sprints.github.io/summit-events-app-documentation/) for a more user friendly experience, which you're likely experiencing right now.

### [Issues on SFDO Community Sprint Summit Events Repo](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/issues)
The goal of issues on the SFDO Community Spring Summit Events Repo is to capture documentation needs as well as requests. We are still encouraing that Summit Events users connect on such items in the [Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kHi2SAE).


## [MetaDeploy/Appexchange](https://install.salesforce.org/products/SummitEventsApp/latest)
MetaDeploy is where the Summit Events App is currently able to be installed. This will have the latest package with updated documentation to account for the features, not features in development or in the Main Repo.


# Standing Agenda Items for Monthly Meetings
- Review what's new in Main (Assign Testing/Tasks)
- Review what's in the development pipeline (Assign Testing/Tasks)
- Review Documentation needs
- Determine if the Main Repo is at a point to create a new package. This will be based on features developed, bugs fixed and overall team discussion.

# Making a new Package/Release:
To create a new package that's uploaded to [MetaDeploy](https://install.salesforce.org/products/SummitEventsApp/latest), the following 3 questions need to be answered:
- Do we have the minimum viable documentation for all new elements being packaged?
- Do we have any critical features or bugs that need to be packaged?
- Is there enough there to create a package? (This will be based on conversation and a review of what’s in Main)
