---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Ako synchronizovať vaše poznámky v Obsidiane medzi zariadeniami a platformami.
---
Obsidian ukladá poznámky lokálne na vašom zariadení, takže k nim máte vždy prístup, aj offline. Na prístup k poznámkam z viacerých zariadení si musíte nastaviť metódu synchronizácie.

Táto príručka pokrýva bežné metódy synchronizácie vrátane tipov na predchádzanie strate dát a zabezpečenie hladkého fungovania.

Odporúčame tiež prečítať si našu [[Zálohovanie súborov Obsidian|príručku zálohovania]] na ochranu vašich dát.

## Metódy synchronizácie

V Obsidian sú vaše dáta jednoducho uložené ako súbory v priečinku nazývanom [[Lokálne a vzdialené trezory|trezor]]. To znamená, že existuje mnoho spôsobov, ako synchronizovať vaše dáta.

Tu je niekoľko bežne používaných metód synchronizácie, ktoré uvádzajú členovia [komunity Obsidian](https://obsidian.md/community):

1. **Vlastná synchronizácia**: [[#Obsidian Sync]]
2. **Cloudová synchronizácia tretích strán**: [[#iCloud]], [[#OneDrive]] a [[#Google Drive]]
3. **Lokálna synchronizácia**: [[#Syncthing]]
4. **Správa verzií**: [[#Git]] a [[#Working Copy]]

## Obsidian Sync

**Odporúčané systémy**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Najjednoduchšia a oficiálne podporovaná metóda synchronizácie je naše vlastné riešenie: [[Úvod do Obsidian Sync|Obsidian Sync]].

Obsidian Sync udržuje vaše trezory synchronizované na všetkých zariadeniach pomocou vzdialeného trezora uloženého mimo zariadenie, ktorý vytvára kópie vašich dát. Lokálna kópia zostáva na vašich zariadeniach vždy.

Postupujte podľa [[Nastavenie Obsidian Sync|príručky nastavenia]] na konfiguráciu Obsidian Sync.

## iCloud

**Odporúčané systémy**: `macOS`, `iOS`, `iPadOS`

iCloud sa dá použiť na synchronizáciu trezorov medzi iOS a macOS. Avšak **iCloud Drive na Windows** môže viesť k duplikácii alebo poškodeniu súborov.

**Ako vytvoriť a uložiť trezor v iCloud Drive**:

- **Zapnúť iCloud Drive**:
    - Na macOS: Prejdite do **Systémové nastavenia → Apple ID → iCloud → iCloud Drive**.
    - Na iOS: Prejdite do **Nastavenia → [Vaše meno] → iCloud → iCloud Drive**.
- **Vytvoriť nový trezor v iCloud**:
    - Na macOS:
        1. Otvorte **Obsidian** a vyberte **Vytvoriť nový trezor**.
        2. V dialógu výberu súboru prejdite na **iCloud Drive → Obsidian**.
        3. Vytvorte priečinok pre váš trezor a pomenujte ho.
        4. Vyberte **Vytvoriť** pre dokončenie.
    - Na iOS:
        1. Otvorte **Obsidian** a ťuknite na **Vytvoriť nový trezor**.
        2. Zadajte názov pre váš trezor.
        3. Prepnite na **Uložiť v iCloud**.
        4. Ťuknite na **Vytvoriť**.
- **Otvoriť trezor na inom zariadení Apple**:
    - Na inom zariadení macOS alebo iOS otvorte **Obsidian**, prejdite do [[Spravovať trezory|Prepínača trezorov]] a vyberte **Použiť priečinok ako trezor**. Prejdite na **iCloud Drive → Obsidian**.

> [!warning]+ Umiestnenie priečinka na iOS a iPadOS
> Pri používaní iCloud na mobilných zariadeniach sa uistite, že váš trezor je uložený na správnom mieste: `iCloud Drive/Obsidian/[Názov vášho trezoru]`.
> 
> Trezory by mali byť v priečinku **Obsidian** v rámci iCloud Drive. Priečinok napravo s ikonou Obsidian je správny. Nepoužívajte obyčajný priečinok bez ikony aplikácie.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Na overenie umiestnenia trezoru otvorte aplikáciu **Súbory**, ťuknite na **Prehľadávať**, vyberte **iCloud Drive** pod **Umiestnenia** a potvrďte, že váš trezor je v priečinku **Obsidian**. Ak je váš trezor na inom mieste, môžete mať problémy so synchronizáciou.

> [!tip] Osvedčené postupy
> - Pre **macOS 14 (Sonoma) a starší**: Vypnite **Optimalizovať úložisko Macu** v nastaveniach iCloud, aby sa zabránilo presúvaniu súborov mimo zariadenie. Toto nastavenie ovplyvňuje celé úložisko iCloud na zariadení, nielen Obsidian.
> - Pre **macOS 15 (Sequoia)**: Kliknite pravým tlačidlom na priečinok **Obsidian** v iCloud Drive a vyberte **Ponechať stiahnuté**.

## OneDrive

**Odporúčané systémy**: `Windows`, `macOS` (obmedzená funkčnosť na Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) je populárna možnosť cloudového úložiska pre používateľov Windows a macOS. Má však obmedzenia na Android a nie je oficiálne podporovaný na synchronizáciu trezorov Obsidian na iOS.

> [!info] Ponechať súbory dostupné offline
> Pred použitím OneDrive na synchronizáciu sa uistite, že priečinok vášho trezoru je označený ako **Vždy ponechať na tomto zariadení**. Tým sa zabráni, aby OneDrive presunul súbory mimo zariadenie a Obsidian si myslel, že chýbajú.

**Ako vytvoriť a uložiť trezor v OneDrive**:

1. **Nastaviť OneDrive**:
   - Na Windows: Prihláste sa cez aplikáciu OneDrive alebo svoj účet Microsoft.
   - Na macOS: Stiahnite si aplikáciu OneDrive a prihláste sa.
2. **Vytvoriť nový trezor v OneDrive**:
   - Na Windows/macOS:
     1. Otvorte **Prieskumník súborov** (Windows) alebo **Finder** (macOS) a prejdite na **OneDrive → Documents**.
     2. Vytvorte nový priečinok (napr. \"Obsidian Vault\").
     3. Otvorte **Obsidian**, vyberte **Vytvoriť nový trezor** a vyberte priečinok OneDrive.
3. **Otvoriť trezor na inom zariadení**:
   - Na inom zariadení otvorte **Obsidian**, prejdite do [[Spravovať trezory|Prepínača trezorov]] a vyberte **Použiť priečinok ako trezor**. Prejdite na **OneDrive → Documents**.

> [!info] Synchronizácia na Android
> OneDrive nemusí dobre fungovať na synchronizáciu na Android. Zvážte použitie aplikácií ako [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) alebo [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Osvedčené postupy
> - Vždy majte súbory trezoru **Dostupné offline** kliknutím pravým tlačidlom na priečinok a výberom **Vždy ponechať na tomto zariadení**.
> - Vyhnite sa používaniu funkcie **Súbory na požiadanie** OneDrive pre trezory, aby ste predišli problémom so synchronizáciou.

## Google Drive

**Odporúčané systémy**: `Windows`, `macOS`, `Android` (obmedzená funkčnosť na iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) je ďalšie populárne riešenie cloudového úložiska. Hoci nie je oficiálne podporované na synchronizáciu trezorov Obsidian, môžete použiť aplikácie a pluginy tretích strán na synchronizáciu medzi zariadeniami.

> [!info] Podpora iOS
> Google Drive nie je oficiálne podporovaný na synchronizáciu trezorov Obsidian na iOS. Zvážte použitie riešenia tretej strany alebo pluginu na synchronizáciu na iOS.

**Ako vytvoriť a uložiť trezor v Google Drive**:

1. **Nastaviť Google Drive**:
    - Na Windows alebo macOS: Stiahnite si aplikáciu Google Drive a prihláste sa.
    - Na Android: Uistite sa, že Google Drive je zapnutý a prihlásený.
2. **Vytvoriť nový trezor v Google Drive**:
    - Na Windows/macOS:
        1. Otvorte **Prieskumník súborov** (Windows) alebo **Finder** (macOS) a prejdite na **Google Drive**.
        2. Vytvorte nový priečinok (napr. \"Obsidian Vault\").
        3. Otvorte **Obsidian**, vyberte **Vytvoriť nový trezor** a vyberte priečinok Google Drive.
3. **Otvoriť trezor na inom zariadení**:
    - Na inom zariadení otvorte **Obsidian**, prejdite do [[Spravovať trezory|Prepínača trezorov]] a vyberte **Použiť priečinok ako trezor**. Prejdite do priečinka Google Drive.

> [!tip] Osvedčené postupy
> - Nastavte súbory trezoru na **Dostupné offline** v Google Drive, aby ste predišli problémom so synchronizáciou spôsobeným presúvaním súborov mimo zariadenie.
> - Pre iOS zvážte alternatívne metódy ako [[Úvod do Obsidian Sync|Obsidian Sync]], [[#iCloud]] alebo použite plugin **Remotely Save**.

## Syncthing

**Odporúčané systémy**: `Windows`, `macOS`, `Linux`

Syncthing je decentralizovaný nástroj na synchronizáciu súborov, ktorý sa nespolieha na cloudové úložisko. Synchronizuje váš trezor priamo medzi zariadeniami cez sieť alebo internet.

> [!info]+ Podpora Android
> Oficiálna aplikácia Syncthing pre Android sa už neudržiava. Avšak komunitný fork s názvom [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) pokračuje v aktívnom vývoji a dá sa použiť na zariadeniach Android.

**Ako vytvoriť a uložiť trezor pomocou Syncthing**:

1. **Nastaviť Syncthing**:
   - Nainštalujte Syncthing na každom zariadení. Pozrite si [webovú stránku Syncthing](https://syncthing.net/) pre návody na inštaláciu.
   - Na Android nainštalujte [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) z GitHub vydaní alebo F-Droid.
2. **Vytvoriť a nakonfigurovať zdieľaný priečinok**:
   - Na všetkých zariadeniach:
     1. Otvorte Syncthing a vytvorte zdieľaný priečinok. Nastavte cestu priečinka na váš trezor Obsidian.
     2. Uistite sa, že rovnaký priečinok je vybraný na všetkých zariadeniach.
     3. Nakonfigurujte preferencie synchronizácie priečinka (napr. **Odosielať a prijímať** pre obojsmernú synchronizáciu).
3. **Otvoriť trezor v Obsidian**:
   - Keď je priečinok synchronizovaný na všetkých zariadeniach, otvorte **Obsidian**, prejdite do [[Spravovať trezory|Prepínača trezorov]] a vyberte **Použiť priečinok ako trezor**.

> [!info] Dostupnosť zariadení
> Syncthing funguje najlepšie, keď je aspoň jedno zariadenie vždy zapnuté, čo zabezpečuje nepretržitú synchronizáciu.

> [!tip] Osvedčené postupy
> - Pre lokálnu synchronizáciu sa uistite, že všetky zariadenia sú pripojené k rovnakej sieti.
> - Vylúčte `.obsidian` zo synchronizácie, ak chcete mať na každom zariadení samostatné nastavenia.
> - Použite vzory ignorovania, aby ste sa vyhli synchronizácii dočasných alebo záložných súborov.

## Git

**Odporúčané systémy**: `Windows`, `macOS`, `Linux`

**Git** je systém správy verzií, ktorý vám umožňuje sledovať zmeny, spolupracovať s ostatnými a synchronizovať vaše trezory prostredníctvom repozitárov ako GitHub, GitLab alebo vlastný server.

**Ako synchronizovať trezor pomocou Git**:

1. **Nastaviť vzdialený repozitár**:
    - Vytvorte repozitár na platforme hosťujúcej Git (napr. GitHub, GitLab alebo vlastný server).
2. **Synchronizovať trezor**:
    1. Otvorte terminál alebo Git GUI (napr. GitKraken, Sourcetree).
    2. Inicializujte Git repozitár v priečinku vášho trezoru pomocou `git init`.
    3. Pridajte vzdialený repozitár: `git remote add origin [URL]`.
    4. Potvrďte zmeny: `git add .` a `git commit -m "Vaša správa"`.
    5. Odošlite zmeny: `git push origin main`.
3. **Stiahnuť zmeny na iných zariadeniach**:
    - Naklonujte repozitár na inom zariadení a stiahnite zmeny pomocou `git pull origin main`.

> [!info] Vyžaduje sa manuálna synchronizácia
> Git poskytuje silnú správu verzií, ale synchronizácia nie je automatická. Musíte manuálne odosielať a sťahovať zmeny.

## Synchronizácia iPhone a iPad

**Odporúčané možnosti**:
- [[Úvod do Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Vyhnite sa miešaniu synchronizačných služieb
> Vyhnite sa synchronizácii rovnakého trezoru cez viacero služieb (napr. používanie Obsidian Sync aj iCloud súčasne), aby ste predišli konfliktom dát alebo ich poškodeniu.

**Nepodporované možnosti**:
Nasledujúce služby nie sú oficiálne podporované na iOS, ale používatelia našli alternatívne riešenia pomocou nástrojov alebo pluginov tretích strán:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Niektorí používatelia úspešne použili pluginy ako **Remotely Save** alebo **LiveSync** na synchronizáciu trezorov na iOS. Tieto metódy však nie sú oficiálne podporované a výsledky sa môžu líšiť.

### Working Copy

**Odporúčané systémy**: `iOS`
**Vyžaduje**: [[#Git]]

**Working Copy** je Git klient pre iOS, ktorý vám umožňuje klonovať, potvrdzovať a odosielať zmeny do Git repozitára. Dobre funguje na synchronizáciu trezorov Obsidian cez Git, hoci niektoré funkcie vyžadujú platený nákup v aplikácii.

**Ako synchronizovať trezor pomocou Working Copy**:

1. **Nainštalovať Working Copy**:
    - Stiahnite si aplikáciu **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** na váš iPhone alebo iPad.
2. **Naklonovať Git repozitár**:
    - Otvorte Working Copy, ťuknite na **Add Repository** a zadajte URL vášho repozitára (napr. GitHub, GitLab).
3. **Prepojiť repozitár s Obsidian**:
    - Prepojte naklonovaný priečinok repozitára s prázdnym trezorom v **Obsidian**.
4. **Potvrdiť a odoslať zmeny**:
    - Po úprave poznámok v Obsidian použite Working Copy na **Commit** a **Push** zmien do vzdialeného repozitára.
    - Na iných zariadeniach stiahnite zmeny pomocou Git na synchronizáciu trezoru.

> [!info] Používanie komunitou
> Hoci Working Copy nie je oficiálne podporovaný, mnoho používateľov ho úspešne používa na synchronizáciu trezorov s Git.

## Často kladené otázky

**Prečo moja preferovaná synchronizačná služba nie je oficiálne podporovaná?**

Na rozdiel od niektorých aplikácií na poznámky, ktoré pristupujú k jednému súboru naraz, Obsidian vyžaduje prístup k celému trezoru kvôli svojim funkciám (napr. aktualizácia odkazov pri premenovaní súboru). To sťažuje niektorým službám spoľahlivo fungovať s Obsidian.

**Prečo musím mať súbory „Dostupné offline"?**

Ak služby ako OneDrive alebo iCloud presunú súbory mimo zariadenie (napr. pomocou **Súborov na požiadanie** alebo **Optimalizácie úložiska Macu**), Obsidian k nim nemá prístup, čo spôsobuje problémy so synchronizáciou. Označte priečinok trezoru ako **Vždy ponechať na tomto zariadení** (OneDrive) alebo sa uistite, že je zapnuté **Ponechať stiahnuté** (iCloud).

**Ako spravujem rôzne konfigurácie pre moje trezory?**

Obsidian vám umožňuje prispôsobiť konfiguračný priečinok pre každé zariadenie pomocou funkcie [[Konfiguračný priečinok|Konfiguračné priečinky]].
