For your safety, [[Introduction to Obsidian Sync|Obsidian Sync]] encrypts your [[Local and remote vaults|remote vault]] and all communication with Obsidian's servers. Before anyone can access your remote vault, they first need to decrypt it with an _encryption password_.

When you create a new remote vault, you have two options:

- **End-to-end encryption:** Obsidian encrypts the vault on your device with a custom encryption key before it's sent to Obsidian's servers. This guarantees that no one—not even the Obsidian team—can access your notes.
- **Managed encryption:** If you don't want to have to remember another password, you can let Obsidian manage the encryption password for you. While we store your encryption password on our servers, we only use it to offer a more convenient way to manage your vaults. Obsidian will never access your vault without your explicit consent.

If you forget or lose your custom encryption password, your data remains encrypted and unusable forever. We're not able to recover your password, or any encrypted data for you.

Your choice only affects your remote vault. Obsidian does not encrypt your local vault.

## What does end-to-end encryption mean?

End-to-end encryption means that the data is encrypted from the moment it leaves your device, and can only be decrypted using your encryption key once it's back on one of your devices.

We can't read your data. Neither can any potential eavesdroppers, such as your internet service provider.

In the rare case of a complete server breach, your data remains encrypted—no one can decrypt your files without knowing your password.

## What encryption do you use?

We use industry-standard AES-256 to encrypt your data. AES-256 is a military-grade encryption specification that's widely used in for example online banking.

Here are the technical details:

- Key derivation function used: scrypt with salt
- Encryption algorithm used: AES-256 using GCM
