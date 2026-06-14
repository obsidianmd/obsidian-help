---
permalink: ios
---
Mobilná aplikácia Obsidian pre iOS a iPadOS prináša výkonné možnosti tvorby poznámok na váš iPhone a iPad. Môžete si ju stiahnuť z [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Táto stránka pokrýva funkcie špecifické pre iOS vrátane widgetov, integrácie so Siri a Skratiek.

## Synchronizácia

Informácie o synchronizácii poznámok medzi zariadeniami nájdete v časti [[Synchronizácia poznámok medzi zariadeniami]].

## Widgety

Obsidian pre iOS ponúka niekoľko widgetov na rýchle akcie s vaším trezorom.

> [!note] Poznámka
> Widgety sú dostupné na iOS a iPadOS 18 a vyšších verziách.
> Widgety nie sú dostupné pri použití funkcie „Vyžadovať Face ID" na odomknutie aplikácie.

### Widgety na zamykacej obrazovke a v Centre ovládania

Widgety na zamykacej obrazovke a v Centre ovládania umožňujú:
- Vytvoriť novú poznámku
- Otvoriť konkrétnu poznámku
- Otvoriť dennú poznámku
- Otvoriť hľadanie
- Otvoriť Obsidian

### Widgety na domovskej obrazovke

Widgety na domovskej obrazovke umožňujú:
- Vytvoriť poznámku
- Zobraziť poznámku
- Otvoriť dennú poznámku

### Prispôsobenie widgetov

Widgety si môžete prispôsobiť podľa vášho pracovného postupu, napríklad vybrať, ktorý trezor sa má použiť, alebo určiť konkrétnu poznámku na otvorenie.

- **Widgety na domovskej obrazovke:** Ťuknite a podržte widget, potom vyberte **Upraviť widget**.
- **Widgety na zamykacej obrazovke:** Dotknite sa a podržte zamykaciu obrazovku, ťuknite na **Prispôsobiť**, vyberte zamykaciu obrazovku a potom ťuknite na widget, ktorý chcete prispôsobiť.
- **Widgety v Centre ovládania:** Otvorte Centrum ovládania, ťuknite na tlačidlo **+** vľavo hore pre začatie úprav a potom ťuknite na widget, ktorý chcete prispôsobiť.

Možnosti konfigurácie widgetu **Nová poznámka**:

![[ios-new-note-configuration.png|400]]

Možnosti konfigurácie widgetu **Zobraziť poznámku**:

![[ios-view-note-configuration.png|400]]

## Skratky

Obsidian sa integruje s aplikáciou Skratky od Apple, čo vám umožňuje vytvárať výkonné automatizácie. Dostupné skratky zahŕňajú:

- **Otvoriť poznámku** — Otvorí konkrétnu poznámku vo vašom trezore
- **Vytvoriť novú poznámku** — Vytvorí novú poznámku vo vašom trezore
- **Otvoriť dennú poznámku** — Prejde priamo na dnešnú dennú poznámku
- **Zachytiť do dennej poznámky** — Pripojí alebo predradí text do dennej poznámky bez otvorenia aplikácie Obsidian
- **Zachytiť do záložky** — Pripojí alebo predradí text do poznámky uloženej ako záložka bez otvorenia aplikácie Obsidian

Skratky na zachytávanie sú obzvlášť užitočné na rýchle zapisovanie poznámok, pretože umožňujú pridať obsah do poznámky na pozadí.

## Rozhranie zdieľania

Rozhranie zdieľania Obsidian vám umožňuje zachytávať obsah z webových stránok. Funguje aj s aplikáciami ako YouTube a ďalšími sociálnymi sieťami.

> [!note]
> - Natívne rozhranie zdieľania je dostupné na iOS a iPadOS 18 a vyšších verziách.
> - Funkcie rozhrania zdieľania popísané v tejto sekcii vyžadujú Obsidian 1.13.0 alebo novší.

Použite rozhranie zdieľania na rýchle odoslanie obsahu z inej aplikácie do Obsidian:
1. V inej aplikácii ťuknite na tlačidlo **Zdieľať**.
2. Vyberte **Obsidian**.
3. Zvoľte umiestnenie.
4. Skontrolujte alebo upravte zachytený obsah.
5. Ťuknite na **Uložiť**.

![[ios-share-sheet-extension.png|400]]

### Umiestnenia

Umiestnenia vám umožňujú rozhodnúť, kam má zdieľaný obsah smerovať pred jeho uložením.

Umiestnenia môžu zachytávať do:
- **Nová poznámka** — Vytvoriť novú poznámku v trezore alebo priečinku.
- **Denná poznámka** — Pripojiť alebo predradiť obsah do dnešnej dennej poznámky.
- **Poznámka uložená ako záložka** — Pripojiť alebo predradiť obsah do poznámky uloženej ako záložka.
- **Poznámka** — Vybrať existujúcu poznámku vo vašom trezore.
- **Nová záložka** — Uložiť zdieľanú URL do záložiek Obsidian.

![[ios-share-sheet-locations.png|400]]

### Prispôsobenie umiestnení

Môžete vytvárať umiestnenia pre bežné pracovné postupy, ako napríklad ukladanie článkov do priečinka prijatých, pripájanie citátov do dennej poznámky alebo pridávanie odkazov do záložiek.

Prispôsobenie umiestnení:

1. Otvorte Obsidian z rozhrania zdieľania iOS.
2. Ťuknite na aktuálne umiestnenie v paneli nástrojov.
3. Ťuknite na tlačidlo **+** pre vytvorenie nového umiestnenia, alebo vyberte existujúce umiestnenie na úpravu.
4. Vyberte trezor, správanie a voliteľné nastavenia.

V závislosti od typu `Správanie` môžete konfigurovať možnosti ako:
- Priečinok
- Šablóna
- Skupina záložiek
- Pozícia pripojenia alebo predradenia
- Či zdieľané odkazy zachytávajú **Celý text** alebo iba **URL**

![[ios-share-sheet-add-location.png|400]]

### Použitie šablóny pri zdieľaní

Pri zdieľaní obsahu z rozhrania zdieľania môžete použiť šablónu. Šablóny vám umožňujú formátovať zachytený webový obsah s detailmi ako názov stránky, autor, zdrojová webová stránka a dátum publikácie.

Nastavenie umiestnenia so šablónou:

1. Otvorte Obsidian z rozhrania zdieľania iOS.
2. Ťuknite na aktuálne umiestnenie v paneli nástrojov.
3. Ťuknite na tlačidlo **+** pre vytvorenie nového umiestnenia.
4. Zadajte názov umiestnenia.
5. Vyberte trezor.
6. Nastavte **Správanie** na **Nová poznámka**.
7. V sekcii **Voliteľné** ťuknite na **Šablóna**.
8. Vyberte poznámku z vášho trezoru, ktorá sa použije ako šablóna.
9. Ťuknite na **Uložiť** pre uloženie umiestnenia.

![[ios-share-sheet-set-template.png|400]]

Keď zdieľate odkaz pomocou tohto umiestnenia, Obsidian najprv aplikuje šablónu a potom pridá zdieľaný obsah.

Podporované zástupné symboly šablóny:

| Zástupný symbol | Popis |
| --- | --- |
| `{{author}}` | Autor článku |
| `{{description}}` | Popis alebo zhrnutie článku |
| `{{domain}}` | Názov domény webovej stránky |
| `{{favicon}}` | URL ikony webovej stránky |
| `{{image}}` | URL hlavného obrázku článku |
| `{{published}}` | Dátum publikácie článku v predvolenom formáte dátumu |
| `{{published: YYYY-MM-DD}}` | Dátum publikácie vo vlastnom formáte dátumu |
| `{{site}}` | Názov webovej stránky |
| `{{title}}` | Názov článku |
| `{{wordCount}}` | Celkový počet slov v extrahovanom obsahu |

Môžete tiež použiť štandardné zástupné symboly šablóny pre dátum a čas:

| Zástupný symbol | Popis |
| --- | --- |
| `{{date}}` | Aktuálny dátum |
| `{{date: YYYY-MM-DD}}` | Aktuálny dátum vo vlastnom formáte |
| `{{time}}` | Aktuálny čas |
| `{{time: HH:mm}}` | Aktuálny čas vo vlastnom formáte |

## Integrácia so Siri

Na interakciu s Obsidian môžete použiť hlasové príkazy Siri:

- „Capture using Obsidian"
- „Capture to Obsidian"
- „Open my daily note in Obsidian"
- „Search in Obsidian"

## Integrácia so Spotlight

Keď vyhľadáte „Obsidian" v iOS Spotlight, zobrazia sa rýchle akcie:
- Nová poznámka
- Hľadať
- Denná poznámka
