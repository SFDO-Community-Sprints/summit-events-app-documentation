---
title: Testing a Pull Request
parent: Contributing to Summit Events
grand_parent: Project Info
---

# Testing a Pull Request
Below is an outline of Testing a Pull Request. As outlined in the [Repository Definitation](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/project-info/process-repo-definition/repository-definitions/#developmentreview-of-branches), a Pull Request and testing is required prior to any contributions being added to the Summit Events App.

## What is a Pull Request?
A pull request is a way for someone to propose changes to a project. It's like they are saying "Hey, I made some changes here, can you review them and decide if you want to accept them into the main project?".  With Summit Events being a community project and accessible application, we may get contributions from anyone in the Salesforce community. To ensure the Summit Events works as expected, we expected review, testing and feedback to any changes.

## Expectations in creating a Pull Request:
 - Document any and all changes associated to the Pull Request. There should be alignment with the Commits and Files Changes
 - Associate all [Issues](https://github.com/SFDO-Community/Summit-Events-App/issues) to the pull request in the following format: "Closes #100"
 - > NOTE: the issue nummber should be specific to the FULL issues being addressed.  If only part of the issue is being resolve, create another issue with the outstanding item and document it appropriately.
 - Add a Reviewer.  If you're unsure of who to add as a reviewer, make a comment on the Pull Request and message @tcdahlberg or @rdblake21
 - Test the Pull Request once submitted
 - Should any changes/updates need to be made, wait to push updates until you've coordinated with the Reviewer(s).

## Process for Reviewers
- Look at the description and comments of the pull request. This will explain what changes were made and why. Ask questions if you don't understand something in the conversation of the PR for transparency, tagging the creator.
- Look at the actual changes or "diffs" on the "Files Changed" tab. Even if you don't understand the code, you may be able to get a sense of if a lot was changed.
- Sometimes reviewing the "Commits" Tab will also inform you of changes made, capturing more of what it is you'll be looking to test.
- Review the linked issues to understand "what" you're focused on reviewing and what the expectations are.
- Try out the new features, bug fixes or changes locally on your own computer. You can do this by utilizing your own IDE with [CumulusCI](https://cumulusci.readthedocs.io/en/latest/get-started.html#work-on-an-existing-cumulusci-project) or if you're you're looking for a clicks, not code, type of experience, utilize [Metecho](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/project-info/Contributing-to-Summit-Events/metecho/). Follow the steps to "check out" the pull request which will allow you to test drive it. See if it works as expected.
- Consider how the changes might impact other parts of the project. If it changes one thing, what else could that affect? Try to think of possible side effects and test those scenerios as best you can.
- Ask someone technical to review the changes. They can do a code review and let you know if it looks okay from a technical standpoint.

The goal is to make sure there is an understanding of what was changed and manually test the changes to ensure nothing is broken or negatively impacts other aspect of the solution. If you are unsure, ask questions of the contributor or have a technical team member review it. The main branch should stay stable, so we will only merge pull requests we are confident in.
