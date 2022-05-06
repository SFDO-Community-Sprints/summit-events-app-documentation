---
title: Repository Definitions
parent: Process and Repo Definitions
grand_parent: Project Info
nav_order: 3
---

# Repository Definitions:

Below are repositories associated to Summit Events and how the are to be utilized for the overall project development.


## [Summit Events Repo](https://github.com/SFDO-Community/Summit-Events-App)
The Summit Events App is a part of the Salesforce Open Source Commons, which means that Salesforce.org is the direct owner of the repository. This repository is the primary development repo and will have the latest features and updates, so it will commonly be ahead of the packaged release. This is intentional for meaningful testing and community collaboration.

The Summit Events App repo will be the primary source for development utilizing the follow:
- Main Branch (currently labeled Master) = Latest updates on all contributions and feature developments prior to a new package or release.
- Branches = Updates/Developments from contributors or bug fixes to be submitted via pull rquest
- Issues = Capturing bugs and Feature Request after they've been shared in the Trailblazer Community.


### [Development/Review of Branches](https://github.com/SFDO-Community/Summit-Events-App/branches)
Branches are intended to capture project development prior to any updates being added to the Main Repo. The following are expectations as part of the Development and Review processes:
- **A new branch is required** when working on fixing a bug or creating new functionality based on a feature request.
- Each branch should have associated Issues as to what is being worked on to ensure efforts are maximized.
- When development is complete, the developer/bug fixer will need to create a pull request prior to being merged into the Main Branch. 
- The Summit Events App Team will review the Pull Request, making appropriate comments and requests for changes/updates. 
- Upon approval, the Summit Events Team will merge the pull request into the Main Branch. 

This process will allow the Summit Events App Team to test and approve development prior to community feedback and testing. Once the feature or bug is in the Main Repo, we will have the ability to invite the community in testing new functionality and bugs fixes utilizing [Metecho](https://metecho.herokuapp.com/projects). This will streamline the use of Metecho allowing the user to simply create a new scratch org from the main page (no Epics or Tasks).

**NOTE**: When something is packaged, it’ll be there that way forever! We will always be mindful of this when approving pull requests.

### [Issues on Summit Events Repo](https://github.com/SFDO-Community/Summit-Events-App/issues)
Issues are intended to capture bugs as well as feature request. There are pre-built forms with guidance on what to capture. The following are expectations with Issues
- Issues will get reviewed regularly by the primary project team
- They will be reviewed, at minimum, during standing Summit Events Team meetings, which happen monthly.
- Summit Event Users are encouraged to engage in the [Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kHi2SAE) to ask questions about expected functionality as well as feature requests before submitting a formal issue.


## [SFDO Community Sprint Summit Events Repo](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation)
The Summit Events App has regularly been represented at the SFDO Open Source Community Sprints since March 2020. Because Summit Events is a part of the Salesforce Open Source Commons, we want to sure that collaboration on documentation is easy to access, particularly during the Community Sprints.

This Repo will capture all of the documentation related to Summit Events based on the latest packaged release. The repo [leverages Github Pages](https://sfdo-community-sprints.github.io/summit-events-app-documentation/) for a more user friendly experience, which you're likely experiencing right now.

As a SFDO Community Member, you're held to a certain ethical standard and updates to this repo can be committed to directly to the main branch.

### [Issues on SFDO Community Sprint Summit Events Repo](https://github.com/SFDO-Community-Sprints/summit-events-app-documentation/issues)
The goal of issues on the SFDO Community Spring Summit Events Repo is to capture documentation needs as well as requests. We are still encouraing that Summit Events users connect on such items in the [Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kHi2SAE).


## [MetaDeploy/Appexchange](https://install.salesforce.org/products/SummitEventsApp/latest)
MetaDeploy is where the Summit Events App is currently able to be installed. This will have the latest package with updated documentation to account for the features, not features in development or in the Main Repo.
