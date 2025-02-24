---
aliases:
  - Local vaults
  - remote vaults
  - remote vault
  - local vault
description: This page describes the differences between local and remote vaults.
mobile: true
permalink: sync/vault-types
publish: true
---
Obsidian saves your notes in a **local vault** on your computer or device. A local vault is simply a folder that holds your notes.

> [!example] `C:\Users\Obsidian\Vaults\Help` is the folder location for a local vault called `Help`.

If you want to use your notes on different devices, you need to [[Sync your notes across devices|share]] your local vault with those devices. 

**Obsidian Sync** is one solution that helps you do this by connecting your local vault to a **remote vault**. A remote vault is a copy of your vault stored on Obsidian's servers.

> [!example] Through [[Set up Obsidian Sync#Create a new remote vault|creating a new remote vault]], I create a remote vault named `Docs`.

You can connect one or more **local vaults** on your devices to a **remote vault**. When you make changes to a local vault, the changes are saved to the remote vault. Then, the updated content is synced to all other local vaults connected to the same remote vault.

> [!example] Understanding local versus remote in practice
> A remote vault helps you share and sync your notes between different devices.
> 
> - I have a local vault named `Help` stored at `C:\Users\Obsidian\Vaults\Help`.
> - I created a remote vault called `Docs` and connected my `Help` vault to it.
> - Later, I created another local vault called `Help-two`, stored at `C:\Users\Obsidian\Vaults\Help-two`.
> - I connected this `Help-two` vault to the same remote vault `Docs`.  
>     Now, any changes I make in either `Help` or `Help-two` will sync through the remote vault `Docs`.
