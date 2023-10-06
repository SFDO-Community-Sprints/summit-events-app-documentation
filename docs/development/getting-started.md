---
title: Developers Wanted
nav_order: 7
has_children: true
---

# 💻 Developers Wanted! 💻

Are you a developer? Great! How about lending a hand on the Summit Events App (SEA) as many hands make light work! But how, as a developer, can you begin to contribute?

Your first goal is to get SEA running in your own scratch org. Scratch orgs are a great place to learn how SEA works and to play around with its code without affecting the whole SEA project.

## Initial Learning

SEA uses tooling developed by Salesforce.org called CumulusCI. With this tooling we can build a scratch org, install our project code, set up the org, and install sample data. To learn more about CumulusCI and start your journey to contribute to SEA:

1. Complete the [CumulusCI Trail on Trailhead](https://cumulusci.readthedocs.io/en/latest/index.html) before you begin.

2. Follow the [CumulusCI Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F9300000009M9ZCAU).

## Create a Scratch Org With SEA Installed

As stated earlier getting SEA into a scratch org is essential. A causal video of some of this process [was added to our documentation](https://sfdo-community-sprints.github.io/summit-events-app-documentation/docs/development/developing-with-cumulusci/), but here are the steps to doing creating a scratch org with SEA installed:

1. Fork the [SEA repository](https://github.com/SFDO-Community/Summit-Events-App) onto your computer. [Some instructions on Forking from GitHub](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

2. Install the [Salesforce Command Line Interface (Salesforce CLI)](https://developer.salesforce.com/tools/salesforcecli)

3. [Install CumulusCI](https://cumulusci.readthedocs.io/en/latest/get-started.html) on your computer (involves installing Python and some other computer setup)

4. [Connect your SEA project to a Salesforce devhub org](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm). Make sure to use ``--setdefaultdevhubusername`` as part of your command for CumulusCI to work properly.

5. Typing one line into a terminal while in the directory of you SEA forked project: ``cci flow run dev_org``

## Contributing to the Project

Did you land on some really great code in your forked repository? Great, now is the time to contribute it back to the SEA community. You can do this by [creating an upstream pull request of your fork to the SEA main repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

Pull requests sent to the SEA repository will then be evaluated to give feedback and determine when/if the changes will be introduced to the main branch of the repository. Pull requests requirer two approvers from the SEA community.

## Another Path to Contribution

If you are coming from outside the main SEA community you will always need to create a fork of the repository. There is a path to becoming a trusted contributor with more direct access to the repository. Here are some paths to being one of those trusted contributors:

1. Attend a Salesforce.org Commons Sprint. These are held multiple times in the year. Some are virtual and some are in person were we travel to a location and meet as a group. You can watch the for these events on the [Salesforce.org Commons Sprints & Sprint Events Trailblazer community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000GwVKSA0).

2. Contribute consistently to the SEA repository through forked pull requests.

3. Use SEA prominently in your Salesforce org.

4. Contribute consistently to the [SEA Trailblazer Community](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000kHi2SAE).

A trusted contributor will be invited to the main SEA repository as a user, be added to the SEA Slack channel, and invited to monthly team meetings.
