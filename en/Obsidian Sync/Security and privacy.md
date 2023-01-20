For your safety, [[Introduction to Obsidian Sync|Obsidian Sync]] encrypts your [[Local and remote vaults|remote vault]] and all communication with Obsidian's servers. Before anyone can access your remote vault, they first need to decrypt it with an _encryption password_.

When you create a new remote vault, you have two options:

- **End-to-end encryption:** Obsidian encrypts the vault on your device with a custom encryption key before it's sent to Obsidian's servers. This guarantees that no one—not even the Obsidian team—can access your notes.
- **Managed encryption:** If you don't want to have to remember another password, you can let Obsidian manage the encryption password for you. While we store your encryption password on our servers, we only use it to offer a more convenient way to manage your vaults. Obsidian will never access your vault without your explicit consent.

If you forget or lose your custom encryption password, your data remains encrypted and unusable forever. We're not able to recover your password, or any encrypted data for you.

Your choice only affects your remote vault. Obsidian doesn't encrypt your local vault.

## What does end-to-end encryption mean?

End-to-end encryption means that the data is encrypted from the moment it leaves your device, and can only be decrypted using your encryption key once it's back on one of your devices.

We can't read your data. Neither can any potential eavesdroppers, such as your internet service provider.

In the rare case of a complete server breach, your data remains encrypted—no one can decrypt your files without knowing your password.

## What encryption do you use?

We use industry-standard AES-256 to encrypt your data. AES-256 is a military-grade encryption specification that's widely used in for example online banking.

Here are the technical details:

- Key derivation function used: scrypt with salt
- Encryption algorithm used: AES-256 using GCM

## What happens if I forget my encryption password?

If you ever lose or forget the encryption password, you won't be able to connect additional vaults to your remote vault. Since the encryption password isn't saved anywhere, it's forever lost.

Your data, however, are usually safely stored locally on each of your devices.

To continue using Obsidian Sync, we suggest doing a full re-setup to be able to add new devices to your Sync system:

1. Make a full vault backup on your primary device, just in case something goes wrong. This can be as simple as making a copy of the vault folder, or creating a zip file from the vault.
1. Disconnect the remote vault in each of your devices. This can be done by going to Settings > Sync > Pick remote vault > (x) Disconnect.
1. Create a new remote vault on your primary device from the same Settings page. Optionally, you can delete the previous remote vault since you don't have the password for it anyway. (You may have to delete the previous remote vault if you are at the vault limit)
1. Wait for your primary device to sync. Watch the sync indicator at the bottom right of the screen until it displays a green checkmark.
1. Connect each of your device to the same newly created remote vault. When connecting, you will be shown a warning about vault merging, this is expected and you can proceed. Wait for each device to fully sync before moving onto the next. This reduces the chances of issues.
1. Now all your devices should be connected to the new remote vault.
