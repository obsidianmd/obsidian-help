---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Přesuňte svůj synchronizační trezor do jiného regionu.
---
Když vytvoříte [[Místní a vzdálené trezory|vzdálený trezor]] prostřednictvím [[Úvod do Obsidian Sync|Obsidian Sync]], vaše data jsou šifrována a uložena na jednom z regionálních Sync serverů Obsidian. Tento průvodce vysvětluje, jak přesunout váš Sync trezor na jiný regionální server.

## Dostupné oblasti

S Obsidian Sync jsou dostupné následující oblasti. Doporučujeme použít **Automaticky** nebo zvolit umístění blízko vás, abyste snížili latenci a zrychlili proces synchronizace.

![[Obsidian Sync/Zabezpečení a soukromí#^sync-geo-regions]]

## Změna oblasti Sync

Pro změnu oblasti vašeho vzdáleného trezoru budete muset trezor znovu vytvořit na jiném Sync serveru. Upozorňujeme, že oblasti můžete změnit také pomocí průvodce migrací [[Upgradovat šifrování Sync]], pokud je váš vzdálený trezor na starší verzi.

> [!danger] Migrace jsou destruktivní
> 
> **Vždy si [[Zálohování souborů Obsidian|zálohujte]] trezor, než budete pokračovat v migraci.**
> 
> Při migraci vzdáleného trezoru budou vaše data nahrazena. To znamená:
> 
> 1. Vzdálená data budou odstraněna ze serverů Obsidian a na jejich místo budou znovu nahrána data trezoru.
> 2. Veškerá [[Historie verzí|historie verzí]] trezoru bude ztracena.

![[Nastavení Obsidian Sync#Odpojení od vzdáleného trezoru]]

Pokud máte [[Plány a limity úložiště|Standardní plán]], budete také muset [[Nastavení Obsidian Sync#Smazání vzdáleného trezoru|smazat svůj vzdálený trezor]] před pokračováním.

![[Nastavení Obsidian Sync#Vytvoření nového vzdáleného trezoru]]

Dále můžete [[Nastavení Obsidian Sync#Smazání vzdáleného trezoru|smazat svůj starý vzdálený trezor]] poté, co potvrdíte přechod na nový vzdálený trezor a jeho oblast.
