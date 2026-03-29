---
permalink: android
---
Mobilná aplikácia Obsidian pre Android prináša výkonné možnosti zapisovania poznámok na vaše zariadenie s Androidom. Môžete si ju stiahnuť z [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) alebo ako [APK súbor](https://obsidian.md/download).
Podporuje Android verzie 5.1 a vyššie.

Táto stránka pokrýva funkcie špecifické pre Android, vrátane widgetov, integrácie s Rýchlymi nastaveniami a skratiek.

## Synchronizácia

Na synchronizáciu poznámok s Obsidian na Androide si pozrite [[Synchronizácia poznámok medzi zariadeniami]].

## Umiestnenie trezora

Po spustení Obsidian na Androide budete vyzvaní, aby ste si vybrali, kde sa majú ukladať dáta vášho trezora. Môžete si vybrať **úložisko zariadenia** (odporúčané) alebo **úložisko aplikácie**.

### Úložisko zariadenia

Pri možnosti **úložisko zariadenia** sa vaše dáta ukladajú na zdieľanom mieste vo vašom zariadení. To umožňuje prístup k vášmu trezoru Obsidian aj iným aplikáciám a službám, napríklad nástrojom na [[Synchronizácia poznámok medzi zariadeniami|synchronizáciu]] tretích strán.

Toto je odporúčaná možnosť, pretože ponúka lepšiu kompatibilitu s nástrojmi na synchronizáciu a zabezpečuje, že vaše dáta zostanú zachované aj po odinštalovaní aplikácie. Táto možnosť však vyžaduje dodatočné povolenia na prístup k súborom vášho zariadenia.

Kvôli obmedzeniam Androidu bude Obsidian požadovať prístup „Všetky súbory", aby mohol spoľahlivo fungovať. Google to odporúča pre aplikácie ako Obsidian, ktoré sa považujú za „aplikácie na správu dokumentov". [Viac informácií](https://developer.android.com/training/data-storage/manage-all-files).

Aplikácia toto povolenie používa iba na to, aby vám pomohla pristupovať k vašim dátam na zariadení. Vaše dáta nám nikdy nie sú prístupné. Ak sa chcete dozvedieť viac o tom, ako chránime vaše dáta a zabezpečujeme vaše súkromie, navštívte našu [stránku o bezpečnosti](https://obsidian.md/security).

### Úložisko aplikácie

Pri možnosti **úložisko aplikácie** sa vaše dáta ukladajú v súkromnom úložisku aplikácie Obsidian. To udržiava vaše dáta izolované od iných aplikácií pre väčšie súkromie.

Toto je dobrá možnosť, ak nepoužívate žiadne externé nástroje na synchronizáciu a uprednostňujete prísnejšie sandboxovanie na úrovni aplikácie pre vaše poznámky.

S touto možnosťou môžete používať [[Úvod do Obsidian Sync|Obsidian Sync]] a pluginy na synchronizáciu tretích strán dostupné cez [[Komunitné pluginy]], ale nemôžete používať nástroje ako Syncthing, ktoré sa spoliehajú na zdieľané úložisko.

> [!warning] Odinštalovanie Obsidian odstráni vaše lokálne poznámky, ak používate úložisko aplikácie
> Ak používate možnosť **Úložisko aplikácie**, vaše lokálne dáta trezora sa odstránia pri odinštalovaní aplikácie. Vaše dáta trezora Obsidian na iných zariadeniach sa neodstránia.

## Widgety

Obsidian pre Android ponúka niekoľko možností widgetov na rýchly prístup k vašim trezorom a poznámkam z domovskej obrazovky. Dostupné widgety zahŕňajú:

- **Otvoriť poznámku** — Otvorí konkrétnu poznámku
- **Nová poznámka** — Vytvorí novú poznámku
- **Hľadať** — Spustí vyhľadávací dopyt
- **Denná poznámka** — Otvorí vašu dennú poznámku
- **Otvoriť Obsidian** — Spustí aplikáciu

> [!note] Poznámka
> Tieto widgety sú statické a nezobrazujú žiadne náhľady vybranej poznámky alebo trezora.

Pridanie widgetov na domovskú obrazovku:
1. Ťuknite a podržte kdekoľvek na domovskej obrazovke
2. Vyberte „Widgety"
3. Nájdite Obsidian a vyberte widget, ktorý chcete použiť.

> [!note] Poznámka
> Widgety Obsidian je možné meniť veľkosť. Na zmenu veľkosti widgetu ťuknite a podržte ho, potom potiahnite úchyty na zmenu veľkosti.

Môžete pridať viacero widgetov rovnakého typu na otváranie rôznych súborov alebo spúšťanie rôznych vyhľadávacích dopytov.

Na konfiguráciu widgetu dlho stlačte widget na domovskej obrazovke a nájdite možnosť „Upraviť" alebo „Konfigurovať". To vám umožní zadať konkrétne parametre potrebné pre akciu widgetu pri ťuknutí, ako súbor alebo cesta, vyhľadávací dopyt a názov trezoru.

Viac informácií o widgetoch Androidu nájdete v tomto [článku podpory Google](https://support.google.com/android/answer/9450271?hl=en).

## Dlaždice Rýchlych nastavení

Vyžaduje Android 7.0 alebo vyšší.

Pridajte dlaždicu Rýchlych nastavení Obsidian pre rýchly prístup k aplikácii z panela upozornení. Funguje na domovskej obrazovke aj na zamknutej obrazovke.

> [!note] Poznámka
> Na rozdiel od widgetov aplikácie môžete pridať iba jednu dlaždicu Rýchlych nastavení rovnakého typu.

Pridanie dlaždice rýchlych nastavení do panela upozornení:

1. Otvorte panel upozornení, zvyčajne potiahnutím nadol zo stavového riadku. Poznámka: možno budete musieť potiahnuť ešte raz, aby ste videli viac možností.
2. V dlaždiciach Rýchlych nastavení vyberte „Upraviť" – zvyčajne sa nachádza v rovnakej sekcii, kde sú prepínače ako Wi-Fi, Bluetooth a Zámok orientácie.
3. Nájdite a vyberte dlaždicu Rýchlych nastavení Obsidian a usporiadajte ju podľa svojich preferencií.
4. Na konfiguráciu dlaždice Rýchlych nastavení ťuknite a podržte ju, čím sa zobrazí konfiguračná obrazovka.

Viac informácií o Rýchlych nastaveniach Androidu nájdete v tomto [článku podpory Google](https://support.google.com/android/answer/9083864?hl=en).

## Skratky

Vyžaduje Android 7.1 alebo vyšší.

Obsidian poskytuje skratky aplikácie, ku ktorým je možné pristupovať niekoľkými spôsobmi:

- Dlhým stlačením ikony aplikácie Obsidian
- Pretiahnutím ikony skratky na domovskú obrazovku
- Prístupom cez vyhľadávací panel vo vašom launcheri (dostupné u väčšiny výrobcov zariadení)

Dostupné skratky:

- **Otvoriť poznámku** — Otvorí konkrétnu poznámku vo vašom trezore
- **Denná poznámka** — Prejde priamo na dnešnú dennú poznámku

> [!note] Poznámka
> Skratky v Obsidian 1.11 nie sú konfigurovateľné a budú prepracované v neskorších verziách, aby ponúkali viac dynamických možností prispôsobených vašim konkrétnym poznámkam.
