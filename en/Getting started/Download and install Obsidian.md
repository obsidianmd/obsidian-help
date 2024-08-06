This page lists all supported ways to download and install Obsidian.

## Install Obsidian on Windows

1. Open your browser and go to [Download Obsidian](https://obsidian.md/download).
2. Under **Windows**, click **Universal** to download the installation file.
3. Open the installation file and follow the instructions.
4. Open Obsidian the same way you would open any other application.

## Install Obsidian on macOS

1. Open your browser and go to [Download Obsidian](https://obsidian.md/download).
2. Under **macOS**, click **Universal** to download the installation file.
3. Open the installation file.
4. In the window that opens, drag Obsidian to the Applications folder.
5. Open Obsidian the same way you would open any other application.

## Install Obsidian on Linux

If you use Linux, you can install Obsidian in several ways. Follow the instructions for the packaging system that you're using.

### Install Obsidian using Snap

1. Open your browser and go to [Download Obsidian](https://obsidian.md/download).
2. Under **Linux**, click **Snap** to download the installation file.
3. Open a terminal and navigate to the folder where you downloaded the installation file.
4. In the terminal, run the following command to install the Snap package: (the `--dangerous` flag is required because Canonical, the company who created Snap, didn't review our package, the `--classic` flag allows Obsidian to access outside of the sandbox, where your notes are stored)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Open Obsidian the same way you would open any other application.

### Install Obsidian using AppImage

1. Open your browser and go to [Download Obsidian](https://obsidian.md/download).
2. Under **Linux**, click **AppImage** to download the installation file.
3. Open a terminal and navigate to the folder where you downloaded the installation file.
4. In the terminal, run the following command to open Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage
   ```

### Install Obsidian using Flatpak

1. In your terminal, run the following command to install Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Open Obsidian by running the following command:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Install Obsidian on Android

1. Find Obsidian on the [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Tap **Install** to download the app.
3. Open Obsidian the same way you would open any other app.

You can optionally download the APK for Android from the [Download Obsidian](https://obsidian.md/download) page.

## Install Obsidian on iPhone and iPad

1. Find Obsidian on the [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Tap **Get** to download the app.
3. Open Obsidian the same way you would open any other app.
