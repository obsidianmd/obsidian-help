---
description: This page details some common problems that you may run into when using Obsidian Publish
mobile: true
publish: true
permalink: publish/troubleshoot
---
This page lists common issues you might encounter with [[Introduction to Obsidian Publish|Obsidian Publish]] and how to address them.

Be sure to review [[Media files]] and [[Publish limitations|Publish limitations]] first.

## General

### Publishing notes

**I am receiving a hash error when trying to publish a note.**

Are you using a [[Community plugins|community plugin]] that edits the file's modified time upon update? If so, this plugin may be conflicting with Publish. Please issue a bug report to the plugin developer to resolve the issue.

**I am receiving an odd network error, and I have a very large Publish site.**

It is likely we need to examine your database. Please [[Help and support#Contact Obsidian support|contact Obsidian support]] for assistance.

## CSS and themes

**My CSS in my [[Configuration folder]] does not work on Publish. Why?**

Publish does not read from the configuration folder. Instead, you'll need to create a `publish.css` file in the top-level directory of your publishing vault. You can learn more about this in [[Customize your site]].

**My CSS does not look the same on Publish as it does in the app. Why?**

Obsidian Publish's CSS is not exactly the same as in the application. We recommend [developing any CSS and themes](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes)specifically for Publish from the ground up.

In _general_, what works for [[Views and editing mode#Reading view|Reading view]] has a strong likelihood of working on Publish.

