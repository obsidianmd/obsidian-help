---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Presuňte svoj synchronizačný trezor do iného regiónu.
---
Keď vytvoríte [[Lokálne a vzdialené trezory|vzdialený trezor]] prostredníctvom [[Úvod do Obsidian Sync|Obsidian Sync]], vaše dáta sú šifrované a uložené na jednom z regionálnych Sync serverov Obsidian. Táto príručka vysvetľuje, ako presunúť váš Sync trezor na iný regionálny server.

## Dostupné oblasti

S Obsidian Sync sú dostupné nasledujúce oblasti. Odporúčame použiť **Automatická** alebo zvoliť umiestnenie blízko vás na zníženie latencie a zrýchlenie procesu synchronizácie.

![[Obsidian Sync/Bezpečnosť a súkromie#^sync-geo-regions]]

## Zaznamenajte si nastavenia

Keď pripojíte zariadenie k novému vzdialenému trezoru, Sync môže použiť nastavenia, ktoré máte v danom momente zapnuté. Ak máte na rôznych zariadeniach rôzne nastavenia, zaznamenajte si ich pred začatím. Napríklad, na telefóne možno nesynchronizujete veľké mediálne súbory.

Na každom zariadení, ktoré používa vzdialený trezor, otvorte **[[Nastavenia]] → Sync** a zaznamenajte si tieto nastavenia. Snímka obrazovky funguje dobre.

- **Selektívna synchronizácia**
- **Synchronizácia konfigurácie trezoru**
- **Vylúčené priečinky**
- Nastavenia špecifické pre zariadenie, ako **Názov zariadenia** a **Riešenie konfliktov**

Pozrite si [[Nastavenia Sync a selektívna synchronizácia]] pre vysvetlenie jednotlivých nastavení a ktoré sú predvolene zapnuté.

## Zmena oblasti Sync

Na zmenu oblasti vášho vzdialeného trezora budete musieť znovu vytvoriť trezor na inom Sync serveri. Všimnite si, že oblasti môžete zmeniť aj pomocou asistenta migrácie [[Vylepšiť šifrovanie Sync]], ak je váš vzdialený trezor na staršej verzii.

> [!danger] Migrácie sú deštruktívne
> 
> **Vždy si [[Zálohovanie súborov Obsidian|zálohujte]] trezor pred pokračovaním v migrácii.**
> 
> Pri migrácii vzdialeného trezora budú vaše dáta nahradené. To znamená:
> 
> 1. Vzdialené dáta budú odstránené zo serverov Obsidian a dáta trezora budú nahrané na ich miesto.
> 2. Celá [[História verzií|história verzií]] trezora bude stratená.

![[Nastavenie Obsidian Sync#Odpojenie od vzdialeného trezora]]

Ak máte [[Plány a limity úložiska|Štandardný plán]], budete tiež musieť [[Nastavenie Obsidian Sync#Odstránenie vzdialeného trezora|odstrániť svoj vzdialený trezor]] pred pokračovaním.

![[Nastavenie Obsidian Sync#Vytvorenie nového vzdialeného trezora]]

## Opätovné pripojenie ostatných zariadení

Po dokončení synchronizácie nového vzdialeného trezora na vašom prvom zariadení prepnite každé ďalšie zariadenie, ktoré používalo starý vzdialený trezor. Pracujte na jednom zariadení naraz.

1. Na zariadení sa [[Nastavenie Obsidian Sync#Odpojenie od vzdialeného trezora|odpojte od starého vzdialeného trezora]].
2. [[Nastavenie Obsidian Sync#Synchronizácia vzdialeného trezora na inom zariadení|Pripojte sa k novému vzdialenému trezoru]]. Zatiaľ nevyberajte **Spustiť synchronizáciu**.
3. Nastavte **Selektívnu synchronizáciu**, **Synchronizáciu konfigurácie trezoru** a **Vylúčené priečinky** tak, aby zodpovedali nastaveniam, ktoré ste si zaznamenali pre toto zariadenie.
4. Reštartujte Obsidian. Na mobilnom zariadení alebo tablete možno budete musieť aplikáciu vynútene ukončiť.
5. Vyberte **Spustiť synchronizáciu** alebo **Pokračovať** a počkajte, kým sa Sync dokončí, predtým než prejdete na ďalšie zariadenie.

Okrem toho môžete [[Nastavenie Obsidian Sync#Odstránenie vzdialeného trezora|odstrániť svoj starý vzdialený trezor]] po potvrdení prechodu na váš nový vzdialený trezor a jeho oblasť.
