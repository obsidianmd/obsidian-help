---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Zistite, ako prejsť z vášho súčasného riešenia synchronizácie na Obsidian Sync.'
---
Naučte sa, ako prejsť z vašej aktuálnej synchronizačnej služby na Obsidian Sync.

> [!warning] Vyhnite sa používaniu viacerých riešení na synchronizáciu rovnakých súborov
> [[Často kladené otázky#Môžem používať synchronizáciu treťou stranou spolu s Obsidian Sync?|Neodporúčame]] používať Obsidian Sync spoločne s cloudovými úložiskami (napr. iCloud, Dropbox, OneDrive, Google Drive), pretože to môže spôsobiť konflikty. Cloudové úložiská však môžu zohrávať úlohu vo vašej stratégii [[Zálohovanie súborov Obsidian|zálohovania]].

## Presuňte váš trezor mimo synchronizačnú službu tretej strany alebo cloudové úložisko

Ak je váš trezor uložený na niektorom z nasledujúcich umiestnení, pravdepodobne ho synchronizuje služba tretej strany:

- **Windows**: `C:\Users\Username\Desktop` alebo `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` alebo `/users/username/Documents`
- **iOS**: Priečinok **iCloud** v aplikácii Súbory
- **Iné**: Akýkoľvek priečinok v rámci synchronizačnej služby, ako napríklad `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` atď.

Hoci Android a Linux majú s tým zvyčajne menej problémov, stále sa oplatí skontrolovať umiestnenie trezora na týchto zariadeniach.

> [!tip] Ak je váš aktuálny lokálny trezor pripojený k vzdialenému trezoru, Obsidian sa pokúsi zistiť, či sa trezor nachádza v synchronizačnej službe. Ak áno, v nastaveniach Obsidian Sync uvidíte správu v hornej časti.

Aby ste sa vyhli konfliktom so synchronizačnými službami, odporúčame ukladať vaše Obsidian trezory na nasledujúcich miestach:

- **Windows**: Odporúčané umiestnenia v poradí:
    1. `D:\` alebo akýkoľvek iný disk, ktorý nie je C: ani sieťový disk na vašom zariadení
    2. `C:\Vaults` (ak máte oprávnenia na používanie disku C:\)
    3. `C:\Users\Username\Vaults` (ak musíte mať trezor v rámci C:\Users\Username, uistite sa, že OneDrive je nastavený tak, aby neodstraňoval súbory. OneDrive je zvyčajne menej agresívny mimo priečinkov `Desktop` a `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Žiadne konkrétne odporúčanie kvôli rozmanitosti súborových systémov. Len sa uistite, že Obsidian má plný prístup na čítanie/zápis a že žiadna synchronizačná služba nespravuje daný priečinok.
- **iOS/iPadOS**: Uložte trezor **Na mojom iPhone** alebo **Na zariadení**.
- **Android**: Použite priečinok `Documents/` na vašom zariadení.

## Presunutie trezora pomocou Obsidian na počítači

![[Spravovať trezory#Presunutie trezora do iného priečinka]]

## Presunutie trezora na mobile

Na mobilných zariadeniach Obsidian funguje v sandboxovanom prostredí, čo znamená, že trezory nemôžete presúvať v rámci aplikácie tak ako na počítači.

### Android

Súborové systémy Androidu sa výrazne líšia podľa zariadenia, ale vo všeobecnosti postupujte rovnako ako pri manuálnom presúvaní trezora a uistite sa, že je odstránený z akejkoľvek synchronizačnej služby na vašom zariadení.

### iOS a iPadOS

Ak chcete presunúť existujúci iCloud trezor na vaše zariadenie, postupujte podľa týchto krokov:

> [!note] Ak už máte dáta na inom zariadení a máte nastavený Obsidian Sync, odporúčame namiesto toho [[Nastavenie Obsidian Sync#Synchronizácia vzdialeného trezora na inom zariadení|nastaviť nový lokálny trezor zo Sync]].

- [[Zálohovanie súborov Obsidian|Zálohujte]] váš trezor.
- Vytvorte nový trezor na vašom zariadení a uistite sa, že možnosť **Uložiť na iCloud Drive** je vypnutá.
- Vynútene ukončite aplikáciu Obsidian na všetkých zariadeniach, aby sa pozastavil Sync.
- Otvorte aplikáciu **Súbory** na vašom iOS/iPadOS zariadení.
- Dlho podržte priečinok trezora v časti **iCloud Drive → Obsidian** a vyberte **Presunúť**.
- Presuňte trezor do **Na mojom iPhone/Zariadení → Obsidian** a potvrďte, že je teraz viditeľný.
- Klepnite na **Kopírovať**.
- Vráťte sa do **iCloud Drive → Obsidian** a odstráňte starý priečinok trezora.

Po opätovnom otvorení Obsidian by mal trezor zobrazovať ikonu trezora namiesto ikony cloudu, čo potvrdzuje, že sa už nenachádza na iCloud Drive. Obsidian Sync tiež už nebude zobrazovať varovnú správu v nastaveniach.

## Ďalšie kroky

- Chcete začať s Obsidian Sync? [[Nastavenie Obsidian Sync]]
- Stále potrebujete pomoc? Pozrite si [[Riešenie problémov s Obsidian Sync]]
