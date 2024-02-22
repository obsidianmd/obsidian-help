---
aliases:
  - 2FA
---

Obsidian offers users who create a [https://obsidian.md/account](https://obsidian.md/account "https://obsidian.md/account") the option to enable 2-factor authentication (2FA).


## Enable 2FA

Log into your Obsidian account from your web browser at [https://obsidian.md/account](https://obsidian.md/account "https://obsidian.md/account")

- Under the **Account** section, locate the item `2-factor authentication` and select the **Enable** button. 
- A popup window will appear to prompt you to connect an authenticator app.

> [!hint]- Popular authentication applications
> - [Authy](https://authy.com "https://authy.com")
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2 "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2")
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app "https://www.microsoft.com/en-us/security/mobile-authenticator-app")
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios "https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios")

- Once connected, your authenticator app will provide you a six digit code. Enter that code below the **QR code/setup key**. 
- Finally, enter your current password.
- Select **Complete set up**.
- The popup window will be replaced with a confirmation window. 

Your 2FA is now set up.

> [!warning]- QR code/setup key backups
> If you decide to keep a backup of your **QR code** or **Setup key**, we strongly recommend keeping it in a password encrypted system.

## Disable 2FA

Log into your Obsidian account from your web browser at [https://obsidian.md/account](https://obsidian.md/account "https://obsidian.md/account")

- Under the **Account** section, locate the item `2-factor authentication` and select the **Disable** button. 
- Enter your Obsidian Password
- Enter the current six digit code from your authentication app.
- Select **Disable 2FA**
- You will be brought back to the Account management screen

The `2-factor authentication` section will once again show an **Enable** button.

## FAQ

**I have enabled 2FA. Will I be logged out of my current Obsidian devices?**
No. Enabling 2FA does not log you out everywhere for your convenience. If you need to, you can manually do that from your account page, and subsequently login again on each of your devices.

**I enabled, then disabled 2FA. I would like to set it up again. Can I use the original QR code or setup key?**
No. You will be provided a new **QR code** and new **Setup key** every time you initiate a new setup of 2FA.

**have enabled 2FA. I have yet to be asked for it after several log-out/log-in attempts. Is this working?**
Your browser cache may be allowing you to appear as if you are making changes to the page (such as logging in or out) when in actuality you are accessing the stored data. Try using a private browsing window to log-in to confirm 2FA is working.

If you continue to experience this behavior, please [submit a bug report](https://forum.obsidian.md/c/bug-reports/7).
