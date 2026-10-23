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

## Zaznamenejte si svá nastavení

Když připojíte zařízení k novému vzdálenému trezoru, Sync může použít nastavení, která máte v daném okamžiku zapnutá. Pokud na různých zařízeních používáte různá nastavení, zaznamenejte si je předtím, než začnete. Například nemusíte synchronizovat velké mediální soubory do telefonu.

Na každém zařízení, které používá vzdálený trezor, otevřete **[[Nastavení]] → Sync** a zaznamenejte si tato nastavení. Snímek obrazovky poslouží dobře.

- **Selektivní synchronizace**
- **Synchronizovat nastavení trezoru**
- **Vyloučené složky**
- Nastavení specifická pro zařízení, jako **Název zařízení** a **Řešení konfliktů**

Podrobnosti o tom, co jednotlivá nastavení dělají a která jsou ve výchozím nastavení zapnutá, najdete v [[Nastavení Sync a selektivní synchronizace]].

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

## Znovu připojte svá další zařízení

Poté, co nový vzdálený trezor dokončí synchronizaci na vašem prvním zařízení, přepněte všechna ostatní zařízení, která používala starý vzdálený trezor. Pracujte vždy na jednom zařízení.

1. Na zařízení se [[Nastavení Obsidian Sync#Odpojení od vzdáleného trezoru|odpojte od starého vzdáleného trezoru]].
2. [[Nastavení Obsidian Sync#Synchronizace vzdáleného trezoru na jiném zařízení|Připojte se k novému vzdálenému trezoru]]. Zatím nevybírejte **Spustit synchronizaci**.
3. Nastavte **Selektivní synchronizace**, **Synchronizovat nastavení trezoru** a **Vyloučené složky** tak, aby odpovídaly nastavením, která jste si pro toto zařízení zaznamenali.
4. Restartujte Obsidian. Na mobilním zařízení nebo tabletu může být nutné aplikaci vynutit ukončení.
5. Vyberte **Spustit synchronizaci** nebo **Obnovit** a počkejte, dokud Sync nedokončí synchronizaci, než přejdete na další zařízení.

Dále můžete [[Nastavení Obsidian Sync#Smazání vzdáleného trezoru|smazat svůj starý vzdálený trezor]] poté, co potvrdíte přechod na nový vzdálený trezor a jeho oblast.
