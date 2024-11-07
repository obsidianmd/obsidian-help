---
permalink: web-clipper/troubleshoot
---
If you encounter issues with [[Introduction to Obsidian Web Clipper|Web Clipper]] you can get help via the [official Discord channel](https://discord.com/channels/686053708261228577/1285652864089198672). You can also report bugs on the [GitHub repo](https://github.com/obsidianmd/obsidian-clipper).

## Linux

If you do not see content in Obsidian when clipping a page try the following steps:

1. Make sure the [[Obsidian URI]] protocol [[Obsidian URI#Register Obsidian URI|is registered]].
2. If you are using Flatpak consider trying an [officially supported Obsidian version](https://obsidian.md/download) — Flatpak apps have stricter sandboxing which may not allow data to be passed between your browser and Obsidian via the clipboard.
3. Open the Obsidian [[Help and support#Capture console logs|developer console]] and check for any errors.
4. Try switching to **Legacy mode** in Web Clipper → General settings. This will bypass the clipboard and save content directly via URI. Note that this may limit the number of characters that can be clipped depending on your browser and Linux distribution.