---
permalink: sync/settings
publish: true
mobile: true
description: Táto stránka vysvetľuje nastavenia synchronizácie a pomôže vám pri výbere súborov na synchronizáciu.
---
Keď [[Plány a limity úložiska#Vytvorenie nového vzdialeného trezora|vytvoríte vzdialený trezor]] a [[Nastavenie Obsidian Sync#Pripojenie k vzdialenému trezoru|pripojíte sa k nemu]], základný plugin Sync sa stane miestom na správu vášho vzdialeného trezora.

## Nastavenia Sync

**Vzdialený trezor**
Táto sekcia zobrazuje váš aktuálne pripojený vzdialený trezor. Obsahuje tlačidlo **Odpojiť** na odpojenie od vzdialeného trezora a tlačidlo **Spravovať** na zobrazenie všetkých vzdialených trezorov, ku ktorým má váš účet prístup (vrátane zdieľaných trezorov prostredníctvom [[Spolupráca na zdieľanom trezore|spolupráce]]).

> [!warning]+ Vzdialený trezor v synchronizačnej službe tretej strany
> Ak sa váš vzdialený trezor nachádza v synchronizačnej službe tretej strany, zobrazí sa červená chybová správa. Postupujte podľa krokov v [[Prechod na Obsidian Sync]], aby ste to vyriešili.

**Stav synchronizácie**
Zobrazuje aktuálny stav synchronizácie vzdialeného trezora. Táto sekcia obsahuje buď tlačidlo **Pozastaviť** alebo **Pokračovať**, v závislosti od stavu.

**Názov zariadenia**
Priraďte jedinečný názov zariadeniu, ktoré sa práve synchronizuje. Pomáha to sledovať aktivitu v [[Ikona stavu a správy#Záznam aktivity synchronizácie|zázname synchronizácie]]. Toto nastavenie je špecifické pre zariadenie, rovnako ako [[#Selektívna synchronizácia]].

**[[#Riešenie konfliktov]]**
Vyberte, ako riešiť konflikty, keď upravíte súbor na viacerých zariadeniach. Toto nastavenie je špecifické pre zariadenie, rovnako ako [[#Selektívna synchronizácia]].

**Odstránené súbory**
Obsahuje tlačidlo na **Zobrazenie** alebo **Obnovenie** odstránených súborov. Ďalšie podrobnosti nájdete v [[História verzií]].

**Veľkosť trezoru**
Zobrazuje ukazovateľ priebehu, koľko úložného priestoru synchronizácie sa využíva.

> [!tip]- Čas spracovania na serveri
> Aktualizácia aktuálneho využitia môže trvať až 30 minút kvôli spracovaniu na strane servera.

**Kontaktovať podporu**
Poskytuje pokyny, ako [[Nápoveda a podpora#Kontaktovanie podpory Obsidian|kontaktovať podporu Obsidian]], vrátane možností **Kopírovať ladiace informácie** a **Emailová podpora**.

### Riešenie konfliktov

Vyberte, ako riešiť konflikty, keď upravíte súbor na viacerých zariadeniach pred synchronizáciou. Môžete automaticky zlúčiť zmeny alebo vytvoriť samostatné konfliktné súbory na manuálne posúdenie. Pozrite si [[Riešenie problémov s Obsidian Sync#Riešenie konfliktov|Riešenie konfliktov]] pre podrobnosti o tom, ako konflikty fungujú a ako nakonfigurovať toto nastavenie.

> [!warning]+ Konfigurácia na každom zariadení
> Toto nastavenie musí byť nakonfigurované zvlášť na každom zariadení.

---

V nastaveniach základného pluginu Sync si môžete tiež vybrať, čo chcete synchronizovať. Táto sekcia pokrýva **selektívnu synchronizáciu** a **synchronizáciu konfigurácie trezora** spolu s ich príslušnými upozorneniami.

## Selektívna synchronizácia

Súbory synchronizované do vášho [[Lokálne a vzdialené trezory|vzdialeného trezora]] prispievajú k vášmu [[Často kladené otázky#Aký veľký môže byť každý vzdialený trezor|limitu úložiska]]. Predvolene Obsidian Sync aktivuje **selektívnu synchronizáciu** pre nasledujúce typy súborov:
- Obrázky
- Audio
- Videá
- PDF

Na synchronizáciu ďalších typov súborov prepnite možnosť `Synchronizovať ostatné typy súborov`.

Predvolené nastavenia **synchronizácie konfigurácie trezora** zahŕňajú:
- Ostatné typy súborov
- Hlavné nastavenia
- Vzhľad
- Témy a snippety
- Klávesové skratky
- Zoznam aktívnych vstavaných pluginov
- Nastavenia vstavaných pluginov

Na synchronizáciu komunitných pluginov manuálne zapnite **Zoznam aktívnych komunitných pluginov** a **Zoznam nainštalovaných komunitných pluginov**.

### Zmena typov súborov na synchronizáciu

1. Otvorte **[[Nastavenia]] → Sync**.
2. V časti **Selektívna synchronizácia** zapnite typy súborov, ktoré chcete synchronizovať.
3. Reštartujte aplikáciu, aby sa nové nastavenia uplatnili. Na mobile alebo tablete môže byť potrebné vynútené ukončenie.

Upozorňujeme, že váš [[Plány a limity úložiska|plán Sync]] definuje maximálnu veľkosť súboru, ktorú môžete synchronizovať. Plán Standard umožňuje synchronizáciu súborov do 5 MB, zatiaľ čo plán Plus podporuje súbory do 200 MB.

> [!info]+ Vylúčené súbory zostávajú vo vzdialenom trezore
> Pridanie súboru do zoznamu **Vylúčené súbory** ho neodstráni zo vzdialeného trezora, ak už bol synchronizovaný. Nakonfigurujte nastavenia Sync pred synchronizáciou, aby ste sa vyhli zbytočnému využívaniu úložiska.

### Vylúčenie priečinka zo synchronizácie

Predvolene Obsidian synchronizuje všetky súbory a priečinky vo vašom trezore. Na vylúčenie konkrétneho priečinka zo synchronizácie:
1. Otvorte **[[Nastavenia]] → Sync**.
2. Vedľa **Vylúčené priečinky** vyberte **Spravovať**.
3. Vyberte priečinok, ktorý chcete vylúčiť zo zoznamu.
4. Vyberte **Hotovo**.

Na odstránenie priečinka zo zoznamu vylúčení vyberte tlačidlo ![[lucide-x.svg#icon]] vedľa názvu priečinka.

#### Vždy vylúčené zo synchronizácie

##### Snímky obnovy súborov

Snímky v plugine [[Obnova súboru]] sa nesynchronizujú cez Obsidian Sync, pretože snímky sa uchovávajú v [[Ako Obsidian ukladá dáta#Globálne nastavenia|Globálnych nastaveniach]].

##### Skryté súbory a priečinky

Súbory a priečinky začínajúce bodkou `.` sú považované za skryté a vylúčené zo synchronizácie. Jedinou výnimkou je [[Konfiguračný priečinok|konfiguračný priečinok]] trezora (`.obsidian`), ktorý sa synchronizuje.

Bežné príklady skrytých súborov a priečinkov, ktoré sa nesynchronizujú:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Nastavenia Sync

Nastavenia Sync sa nesynchronizujú medzi zariadeniami. Musíte ich nakonfigurovať zvlášť na každom zariadení podľa potreby.

## Aktualizácia nastavení synchronizovaného trezora

Na úpravu nastavení synchronizácie na viacerých zariadeniach postupujte podľa týchto krokov:

> [!tip]- Primárne a sekundárne zariadenia
> Pojmy „primárne" a „sekundárne" zariadenia slúžia len na prehľadnosť. Sync medzi nimi nerozlišuje.

### Primárne zariadenie

Primárne zariadenie slúži ako zdroj pravdy. Zmeny vykonané tu sa synchronizujú na všetky ostatné zariadenia.

1. Prejdite na **[[Nastavenia]] → Sync**.
2. Aktivujte požadované nastavenia v časti **Synchronizácia konfigurácie trezora**.
3. Znovu načítajte alebo reštartujte Obsidian. Na mobile alebo tablete môže byť potrebné vynútené ukončenie.
4. Počkajte, kým sa nastavenia synchronizujú s vaším vzdialeným trezorom.

### Sekundárne zariadenie(-a)

Sekundárne zariadenia (napríklad váš telefón) prijímajú aktualizácie z primárneho zariadenia.

1. Prejdite na **[[Nastavenia]] → Sync**.
2. Zapnite potrebné nastavenia v časti **Synchronizácia konfigurácie trezora**.
3. Počkajte, kým sa zmeny stiahnu zo vzdialeného trezora.
4. Znovu načítajte alebo reštartujte aplikáciu, aby sa synchronizované nastavenia uplatnili. Na mobile alebo tablete môže byť potrebné vynútené ukončenie.

### Opätovné načítanie nastavení

Niektoré nastavenia je možné načítať za behu, zatiaľ čo iné vyžadujú reštart:

- **Načítateľné za behu**: Väčšina konfigurácií Obsidian, vrátane klávesových skratiek a vlastností, nastavení vzhľadu a konfigurácií pre už povolené základné pluginy.
- **Vyžaduje reštart**: Zmeny CSS (napr. [[CSS snippety]], [[Témy]]), konfigurácie zobrazenia grafu a stavy základných pluginov (napr. zapnutie/vypnutie Každodenných poznámok).

Komunitné pluginy zvyčajne nepodporujú načítanie za behu a vyžadujú reštart pri aplikovaní nových nastavení.

> [!info]+ Pre vývojárov pluginov
> Naučte sa, ako [integrovať funkcionalitu opätovného načítania za behu s Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Profily nastavení

Obsidian Sync dokáže synchronizovať viacero [[Konfiguračný priečinok|konfiguračných priečinkov]] do rovnakého vzdialeného trezora, čo vám umožňuje vytvoriť samostatné profily (napr. jeden pre mobil, ďalší pre notebook).

### Vytvorenie profilu nastavení

Na vytvorenie nového profilu nastavení:

1. Otvorte **[[Nastavenia]] → Súbory a odkazy**.
2. V časti **Prepísanie priečinka konfigurácie** zadajte názov pre váš profil, začínajúci bodkou (`.`), napr. `.obsidian-mobile`.
3. Reštartujte Obsidian, aby sa zmeny uplatnili.

> [!info]+ Vyhnite sa opätovnému sťahovaniu pluginov a tém
> Zmena profilu nastavení bude vyžadovať prekonfigurovanie nastavení synchronizácie. Aby ste sa vyhli opätovnému sťahovaniu pluginov a tém, skopírujte existujúci priečinok `.obsidian` a premenujte ho tak, aby zodpovedal vášmu novému profilu (napr. `.obsidian-mobile`), predtým než vykonáte zmeny.
