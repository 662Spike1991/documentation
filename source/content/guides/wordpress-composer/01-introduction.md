---
title: WordPress with Composer on Pantheon
subtitle: Introduction
description: Learn more about how WordPress with Composer works on Pantheon.
categories: [develop]
tags: [wordpress]
contributors: [whitneymeredith]
layout: guide
showtoc: true
permalink: docs/guides/wordpress-composer
anchorid: wordpress-composer
---

[Composer](https://getcomposer.org/) is a widely-used PHP dependency and package manager that provides an alternative, more modern way to manage the external (non-core) code used by a WordPress or Drupal site.

At the most basic level, Composer requires:

- A list of dependencies
- A place to put the dependencies

There are different cases for using Composer to manage dependencies in WordPress, including:

- Manage dependencies for themes and plugins you’re currently developing

- Manage your site's themes and plugins used site

- Total site dependency management, including custom code


## First Steps

Complete the steps below before using this guide to create or manage updates on your Composer-managed WordPress site.

<Alert title="Note for Existing Composer-based WordPress Sites"  type="info" >

Please reach out to our [Professional Services](https://pantheon.io/professional-services) team for information on site migration services if you have need help migrating an existing WordPress Composer-based site (or any site) to Pantheon.

</Alert>

1. Review [Composer's own documentation](https://getcomposer.org/doc/) to understand how Composer can be used independently of WordPress.

1. Review [Composer Fundamentals Dependencies](/guides/composer#dependencies).

1. Review [Managing Core as Project Dependency](/guides/composer#managing-core-as-a-project-dependency).

1. Review [Custom Upstream Workflow](/guides/composer#custom-upstream-workflow).

## See Also

- [Composer Fundamentals and WebOps Workflows](/guides/composer)

- [Convert a Standard Drupal 8 Site to a Composer-Managed Site](/guides/composer-convert)