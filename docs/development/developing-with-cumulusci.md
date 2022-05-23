---
title: Using CumulusCI
parent: Developers Wanted
---

# Developing the Summit Events App with CumulusCI

The Summit Events App is developed using the tooling provided by Salesforce.org. 
Specifically [CumulusCI](https://cumulusci.readthedocs.io/en/latest/intro.html#why-is-it-called-cumulusci). 
The following recording is an overview of how CumulusCI is used in the development 
of the Summit Events App and was recorded during the [May 2022 Open Source Commons Community Sprint](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/getting-involved/sprints/9-may-2022-sprint/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/GTOr5l3uZG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Learn about CumulusCI

The best way to get up to speed about CumulusCI is to complete their convenient [Trailhead](https://trailhead.salesforce.com/en/content/learn/trails/build-applications-with-cumulusci).


## Contributing development using CumulusCI

1. Install CumulusCI and its requirements.
    * https://cumulusci.readthedocs.io/en/latest/get_started.html
2. Clone or fork and clone [https://github.com/SFDO-Community/Summit-Events-App.git](https://github.com/SFDO-Community/Summit-Events-App.git)
    * Clone if you have attended an OSC Sprint
    * Fork and clone your fork if you are an outside community contributor
3. Create and checkout in a new branch
    * git checkout -b thad_test_branch
    * All contributions need to be in branches that eventually turn into pull requests
    * Branch name should be issue number if there is one and then description of anticipated change
        * 245-fix-checkbox-input-value
        * 245-fix_checkbox_input_value
4. Connect your dev hub org
    ```
    sfdx auth:web:login -d -a EDA-PROD-DEV-HUB -r https://yourdomain.my.salesforce.com
    ```
5. Default your dev org. This is optional but if you are developing it allows you to stop referencing your org target in commands (--org org_target)
    ```
    cci org default dev
    ```
6. Spinning up your scratch org
    ```
    cci flow run dev_org
    ```
7. Open your scratch org
    ```
    cci org browser 
    ```
8. Listing changes that have happened in your org since creation
    ```
    cci task run list_changes
    ```
   It is sometimes important to exlude some changed metadata.
    ```
    cci task run list_changes –exclude Profile
    ```
9. Retrieving changes that have happened since last your retrieved from the org or created the org.
    ```
    cci task run retrieve_changes
    ```
   It is sometimes important to exlude some changed metadata.
    ```
    cci task run retrieve_changes –exclude Profile
    ```
10. Pushing code changes to your scratch org.
    ```
    cci task run dx_push
    ```
11. Create a pull request of your working changes on github
    * Add as much detail to the pull request as you can and follow the template provided. These comments will be added to the release when that happens.
    * Wait for another member of the team to approve the pull request and merge it into the main branch.
