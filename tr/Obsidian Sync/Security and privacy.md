---
aliases:
  - Security/privacy for Obsidian Sync
  - Access control for Obsidian Sync
---

## Encryption

For your safety, [[Introduction to Obsidian Sync|Obsidian Sync]] encrypts your [[Local and remote vaults|remote vault]] and all communication with Obsidian's servers. Before anyone can access your remote vault, they first need to decrypt it with an _encryption password_.

When you create a new remote vault, you have two options:

- **End-to-end encryption:** Obsidian encrypts the vault on your device with a custom encryption key before it's sent to Obsidian's servers. This guarantees that no one—not even the Obsidian team—can access your notes.
- **Managed encryption:** If you don't want to have to remember another password, you can let Obsidian manage the encryption password for you. While we store your encryption password on our servers, we only use it to offer a more convenient way to manage your vaults.

If you forget or lose your custom encryption password, your data remains encrypted and unusable forever. We're not able to recover your password, or any encrypted data for you.

Your choice only affects your remote vault. Obsidian doesn't encrypt your local vault.
### What does end-to-end encryption mean?

End-to-end encryption means that the data is encrypted from the moment it leaves your device, and can only be decrypted using your encryption key once it's back on one of your devices.

We can't read your data. Neither can any potential eavesdroppers, such as your internet service provider.

In the rare case of a complete server breach, your data remains encrypted—no one can decrypt your files without knowing your password.

### What encryption do you use?

For data security, we implement industry-standard encryption protocols. Specifically, we use [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), a military-grade encryption specification widely employed in contexts such as online banking. The encryption process involves the following technical details:

- Key Derivation Function: scrypt with salt
- Encryption Algorithm: AES-256 using GCM

### What happens if I forget my encryption password?

If you ever lose or forget the encryption password, you won't be able to connect additional vaults to your remote vault. Since the encryption password isn't saved anywhere, it's forever lost.

Your data, however, are usually safely stored locally on each of your devices.

To continue using Obsidian Sync, we suggest doing a full re-setup to be able to add new devices to your Sync system:

1. Make a full vault backup on your primary device, just in case something goes wrong. This can be as simple as making a copy of the vault folder, or creating a zip file from the vault.
2. Disconnect the remote vault in each of your devices. This can be done by going to **Settings → Sync → Pick remote vault → Disconnect**.
3. Create a new remote vault on your primary device from the same Settings page. Optionally, you can delete the previous remote vault since you don't have the password for it anyway. (You may have to delete the previous remote vault if you are at the vault limit)
4. Wait for your primary device to sync. Watch the sync indicator at the bottom right of the screen until it displays a green checkmark.
5. Connect each of your device to the same newly created remote vault. When connecting, you will be shown a warning about vault merging, this is expected and you can proceed. Wait for each device to fully sync before moving onto the next. This reduces the chances of issues.
6. Now all your devices should be connected to the new remote vault.

## Hosting
### Where do you host the servers for Obsidian Sync?

Our data centers, powered by [DigitalOcean](https://www.digitalocean.com), provide geo-regional remote vault hosting options in the following locations:

> [!info] Sync geo-regions
> **Automatic**: Your data center is chosen based off your IP location.
> **North America**: San Francisco, USA 
> **Europe**: Frankfurt, Germany
^sync-geo-regions
### I have sync-x as my server. Where is it hosted?

The list below corresponds the Sync servers to their respective data centers. 

**San Francisco**
- `sync-01` to `sync-12`
- `sync-14`

**Frankfurt**
- `sync-13`

## Network and access

### Managing access to Obsidian Sync on your network

To regulate access to Obsidian Sync on your network, you need to manage the following domains:

`sync-xx.obsidian.md`

The `xx` in this case represents a number ranging from `1 - 100`.

> [!tip] If your firewall system supports it, we recommend whitelisting `sync-*.obsidian.md` to account for the continuous growth in subdomain numbers.

