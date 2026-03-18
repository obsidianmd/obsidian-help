---
permalink: publish/media
cssclasses:
  - soft-embed
localized: null
aliases:
  - Media files
---
[[Introduction à Obsidian Publish|Obsidian Publish]] lets you host notes and various media types, including images and video clips, with a limit of 4 GB per site. For more details, please refer to our [[Formats de fichiers acceptés|accepted file formats]].

![[Limitations de Publish#^publish-media-limit]]

This page provides tips to help you optimize your media files hosted on Publish.

## Images

When uploading images directly to Publish, it's best to use `.svg`, `.webp`, and `.png` formats. We also recommend optimizing all images to reduce their file size while preserving visual quality.

![[Guide de style#Optimization]]

If you're using an external service to host an image, we still recommend sizing the image as needed according to our [[Incorporer des fichiers#Embed an image in a note|embedding instructions]].

## PDFs

PDFs come in various sizes and complexities. To optimize the performance of embedded PDFs in Publish, we recommend [compressing the files](https://www.adobe.com/acrobat/hub/how-to-make-pdfs-smaller.html) and removing any unnecessary images. Most PDF editors offer these capabilities.

## Videos and audio

Publish is not optimized for hosting large videos, GIFs, or audio files. Embedding internally hosted and linked videos is not recommended if you plan to host numerous files of these types.

For hosting a limited number of files, we recommend using the following formats:

**Video**
- `.mp4`
- `.webm`
- `.hevc` or `.av1` _(Note: Not widely supported)_

Audio
- `.aac`
- `.mp3`
- `.opus`
