---
aliases:
  - 2FA
  - Recovery codes
---
If you have an [Obsidian account](https://obsidian.md/account) you can enable two-factor authentication (2FA) to protect your account with a second verification step.

## Enable 2FA

- Log into [your Obsidian account](https://obsidian.md/account/profile) from your web browser.
- In the **Profile** section, go to **2-factor authentication** and select **Enable**.
- A popup window will appear to prompt you to connect an authenticator app with either a **QR code** or a **setup key**.

> [!hint]- Popular authentication applications
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Once connected, your authenticator app will provide you a six digit code. Enter that code below the **QR code/setup key** section, in step 3.
- Finally, enter your current password.
- Select **Complete set up**.
- The popup window will be replaced with a confirmation window and your recovery codes. Please download your recovery codes, as you will need these to unlock your account.

Your 2FA is now set up.

> [!warning]- QR code/setup key backups
> If you decide to keep a backup of your **QR code** or **Setup key** in addition to your recovery codes, we strongly recommend keeping it in a password encrypted system.

## Generate recovery codes

If you enabled 2FA before recovery codes were available, or if you want to refresh your recovery codes, follow these steps:

- Log into [your Obsidian account](https://obsidian.md/account/profile) from your web browser.
- Next to 2-factor authentication, select **Refresh recovery codes**.
- In the popup window, enter your **password** and **6-digit authenticator code**.
- A confirmation window will display your recovery codes. You have two options:
    - **Copy recovery codes**: Copy the codes to paste elsewhere.
    - **Download recovery codes**: Download a `obsidian-recovery-codes.txt` file containing your codes.
- Select **Got it** to close the popup window.

You can use a recovery code **once** instead of your **6-digit authenticator code**. You can also refresh your recovery codes at any time.

## Disable 2FA

- Log into [your Obsidian account](https://obsidian.md/account/profile) from your web browser.
- In the **Profile** section, go to **2-factor authentication** and select **Disable**.
- Enter your Obsidian Password.
- Enter the current six digit code from your authentication app.
- Select **Disable 2FA**.
- You will be brought back to the Account management screen.

The **2-factor authentication** setting will once again show an **Enable** button, indicating that 2FA has been disabled.

## FAQ

**I have enabled 2FA. Will I be logged out of my current Obsidian devices?**
No. Enabling 2FA does not log you out everywhere for your convenience. If you need to, you can manually do that from your account page, and subsequently login again on each of your devices.

**I enabled, then disabled 2FA. I would like to set it up again. Can I use the original QR code or setup key?**
No. You will be provided a new **QR code** and new **Setup key** every time you initiate a new setup of 2FA.

**I have enabled 2FA. I have yet to be asked for it after several log-out/log-in attempts. Is this working?**
Your browser cache may be allowing you to appear as if you are making changes to the page (such as logging in or out) when in actuality you are accessing the stored data. Try using a private browsing window to log-in to confirm 2FA is working.

If you continue to experience this behavior, please [submit a bug report](https://forum.obsidian.md/c/bug-reports/7).

**I lost my recovery codes, authenticator, and everything needed to log into my account. What do I do?**

If you've lost your recovery codes and authenticator, please email [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) for assistance in regaining access to your account.
