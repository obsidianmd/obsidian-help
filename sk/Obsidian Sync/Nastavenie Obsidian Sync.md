---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Zakúpili ste si Obsidian Sync a ste pripravení začať. Táto príručka vám pomôže nastaviť a prispôsobiť nastavenia Obsidian Sync pre každodenné používanie.
---
Zakúpili ste si Obsidian Sync a ste pripravení začať. Tento sprievodca vám pomôže nastaviť a upraviť nastavenia Obsidian Sync pre každodenné používanie.

- **Ste nový v Obsidian Sync?** Pozrite: [[#Prvé nastavenie Obsidian Sync]]
- **Pripájate druhé zariadenie?** Pozrite: [[#Synchronizácia vzdialeného trezoru na inom zariadení]]
- **Potrebujete vykonať zmeny?** Pozrite: [[#Správa vzdialených trezorov]]

## Prvé nastavenie Obsidian Sync

V tejto časti vytvoríte nový [[Lokálne a vzdialené trezory|vzdialený trezor]] a prepojíte ho s existujúcim lokálnym trezorom. Na tento účel nemusíte vytvárať nový, prázdny lokálny trezor.

> [!info] Je váš aktuálny trezor v priečinku iCloud, OneDrive, Dropbox alebo inej synchronizačnej služby? Ak **áno**, alebo si **nie ste istí**, prečítajte si prosím [[Často kladené otázky#Môžem používať synchronizáciu treťou stranou spolu s Obsidian Sync?|toto]] a [[Prechod na Obsidian Sync]] pred pokračovaním.

**Predpoklady**

- Účet Obsidian. Ak ho nemáte, [zaregistrujte sa](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Aktívne [[Plány a limity úložiska|predplatné]] Obsidian Sync. Ak ho nemáte, predplaťte si ho z [panelu vášho účtu](https://obsidian.md/account/sync).
- **Odporúčané**: Zavedený [[Zálohovanie súborov Obsidian|zálohovací systém]] pre vaše súbory Obsidian. Synchronizačná služba nie je záloha.

### Prihlásenie s účtom Obsidian

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli vyberte **Všeobecné**.
3. V časti **Účet → Váš účet** vyberte **Prihlásiť**.
4. Do poľa **E-mail** zadajte váš e-mail.
5. Do poľa **Heslo** zadajte vaše heslo.
6. Vyberte **Prihlásiť**.

### Povolenie Obsidian Sync

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli v časti **Možnosti** vyberte **Vstavané pluginy**.
3. Zapnite **Sync**.

### Vytvorenie nového vzdialeného trezoru

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli vyberte **Synchronizácia**.
3. Vedľa položky **Vzdialený trezor** vyberte **Vybrať**.
4. Vyberte **Vytvoriť nový trezor**.
5. Do poľa **Názov trezoru** zadajte názov vzdialeného trezoru.
6. V časti **Oblasť** vyberte [[Nastavenie Obsidian Sync#Regionálne synchronizačné servery|oblasť]] servera pre váš vzdialený trezor.
7. Do poľa **Šifrovacie heslo** zadajte heslo pre váš trezor. Tým vytvoríte trezor so šifrovaním end-to-end. Heslo trezoru je oddelené od vášho účtu Obsidian a môže byť rôzne pre každý z vašich trezorov. Ďalšie informácie nájdete v časti [[Bezpečnosť a súkromie]].
8. Vyberte **Vytvoriť**.

### Pripojenie k vzdialenému trezoru

1. Vyberte **Pripojiť** vedľa vášho novo vytvoreného trezoru.
2. Zadajte heslo, ktoré ste nakonfigurovali pre trezor, do poľa **Šifrovacie heslo**, ak ste sa rozhodli pre [[Obsidian Sync/Bezpečnosť a súkromie#Čo znamená šifrovanie end-to-end?|šifrovanie end-to-end]].
3. Vyberte **Odomknúť trezor**.
4. **Zatiaľ nespúšťajte synchronizáciu.** Skontrolujte nastavenia synchronizácie v časti [[#Úprava nastavení Obsidian Sync|úprava nastavení Obsidian Sync]].
    - Ak chcete začať synchronizáciu okamžite, prejdite na [[#Spustenie synchronizácie s Obsidian Sync|spustenie synchronizácie s Obsidian Sync]].
5. Ak ste tak ešte neurobili, zatvorte alebo zamietnite vyskakovacie okno s výzvou na **Vylúčiť priečinky** a **Spustiť synchronizáciu**. Pokračujte na ďalší krok.

#### Úprava nastavení Obsidian Sync

1. V prípade potreby prejdite na **[[Nastavenia]]** → **Synchronizácia**.
2. Ak názov zariadenia nebol pridaný, pridajte ho, aby sa vaše záznamy synchronizácie ľahšie čítali!
3. Prepnite nastavenia v časti **Selektívna synchronizácia** a **Synchronizácia konfigurácie trezoru**, aby ste určili, ktoré položky sa majú synchronizovať so vzdialeným trezorom a z neho.
    - **Poznámka**: Ak ste sa nedávno odpojili od vzdialeného trezoru a znovu sa pripájate bez reštartu aplikácie, niektoré nastavenia môžu byť už zapnuté.
4. Ak vykonáte zmeny v akýchkoľvek nastaveniach, úplne reštartujte Obsidian.
5. Po reštarte Obsidian sa vráťte na **[[Nastavenia]]** → **Synchronizácia**.

#### Spustenie synchronizácie s Obsidian Sync

Ak spúšťate synchronizáciu po pripojení k vzdialenému trezoru, uvidíte tlačidlo **Spustiť synchronizáciu**. Vyberte toto tlačidlo na spustenie synchronizácie.

Ak spúšťate synchronizáciu po úprave nastavení Obsidian Sync a reštarte aplikácie, uvidíte tlačidlo **Pokračovať** v nastaveniach Sync. Vyberte toto tlačidlo na spustenie synchronizácie.

> [!done] Stav synchronizácie
> Po dokončení Obsidian Sync sa v pravom dolnom rohu (desktop) alebo v pravom bočnom paneli (mobil) zobrazí zelený kruh s fajkou ![[obsidian-icon-sync-synced.svg#icon]]. V zázname synchronizácie sa tiež zobrazí „Fully Synced" ako jedna z posledných správ.
>
> Ďalšie podrobnosti o stavoch synchronizácie nájdete v časti [[Ikona stavu a správy]].
^obsidian-sync-status

Ak chcete pripojiť ďalšie zariadenia k vášmu novo vytvorenému a synchronizovanému vzdialenému trezoru, prejdite na [[Nastavenie Obsidian Sync#Synchronizácia vzdialeného trezoru na inom zariadení|Synchronizácia vzdialeného trezoru na inom zariadení]].

Ak sa chcete dozvedieť viac o nastaveniach a súboroch, prejdite na [[Nastavenia Sync a selektívna synchronizácia]].

## Synchronizácia vzdialeného trezoru na inom zariadení

V tejto časti ste už vytvorili vzdialený trezor a nahrali doň dáta. Teraz ho chcete pripojiť k ďalším zariadeniam.

**Predpoklady**
- Účet Obsidian. Ak ho nemáte, [zaregistrujte sa](https://obsidian.md/account#mode=signup).
- Aktívne predplatné Obsidian Sync. Ak ho nemáte, predplaťte si ho z [panelu vášho účtu](https://obsidian.md/account).
- Sync povolený v nastaveniach [[Vstavané pluginy|Vstavané pluginy]].
- Aktívny vzdialený trezor. Ak ste ešte žiadny nevytvorili, najprv vytvorte [[Nastavenie Obsidian Sync#Vytvorenie nového vzdialeného trezoru|vzdialený trezor]].
- **Odporúčané**: Zavedený [[Zálohovanie súborov Obsidian|zálohovací systém]] pre vaše súbory Obsidian na vašom najpoužívanejšom zariadení. Synchronizačná služba nie je záloha.

### Synchronizácia trezoru z prepínača trezorov

Ak ste čerstvo nainštalovali Obsidian, po otvorení programu sa vám zobrazí [[Spravovať trezory|Prepínač trezorov]]. Na vytvorenie nového lokálneho trezoru z obsahu vzdialeného trezoru vykonajte nasledujúce kroky.

1. Otvorte Obsidian (za predpokladu, že ho otvárate prvýkrát)
2. Vyberte jednu z možností v závislosti od vašej inštalácie:
	1. **Desktop**: V časti, ktorá hovorí Pripojiť k Obsidian Sync, vyberte **Nastavenia**
	2. **Mobil/Tablet**: **Nastaviť Obsidian Sync**
3. Prihláste sa pomocou svojho používateľského účtu Obsidian
	1. Ak je nastavená [[Dvojfaktorová autentifikácia|2FA]], zadajte váš 2FA kód.
4. Budete vyzvaní na výber vzdialeného trezoru, ktorý chcete synchronizovať s týmto zariadením. Vyberte **Pripojiť**.
5. Budete vyzvaní na výber názvu lokálneho trezoru, ktorý bude vytvorený na zariadení na uloženie týchto dát. Zadajte názov podľa vašej voľby.
	1. Ak používate [[Obsidian URI]], budete chcieť použiť rovnaký názov ako lokálny trezor na vašom inom zariadení.
6. Vyberte **Vytvoriť**.
7. Na chvíľu sa zobrazí okno vzdialených trezorov, kým sa Obsidian Sync pripojí k vášmu serveru a overí predplatné. Potom sa zobrazí okno *Nastaviť pripojenie*.
	1. Dôrazne sa odporúča toto okno zatvoriť alebo potiahnuť nadol a najprv [[#Úprava nastavení Obsidian Sync|upraviť nastavenia Obsidian Sync]].
	2. Ak zmeníte akékoľvek nastavenia Sync, prosím znovu načítajte alebo reštartujte Obsidian.

### Synchronizácia trezoru z nastavení Obsidian

Ak ste na tomto zariadení už vytvorili lokálny trezor a chcete ho prepojiť so vzdialeným trezorom, postup je veľmi podobný časti [[#Prvé nastavenie Obsidian Sync]].

![[Nastavenie Obsidian Sync#Prihlásenie s účtom Obsidian]]

![[Nastavenie Obsidian Sync#Povolenie Obsidian Sync]]

#### Pripojenie k vzdialenému trezoru

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli vyberte **Synchronizácia**.
3. Vedľa položky **Vybrať vzdialený trezor** kliknite na **Vybrať**.
4. Kliknite na **Pripojiť** vedľa vzdialeného trezoru, ku ktorému sa chcete pripojiť.
5. Do poľa **Šifrovacie heslo** zadajte heslo pre váš trezor, ak ho máte.
6. Budete vyzvaní na spustenie synchronizácie. Odporúča sa počkať a najprv upraviť nastavenia synchronizácie. Ak chcete synchronizovať celý trezor so zariadením tak ako je, môžete **Spustiť synchronizáciu**.

> [!warning] Ak trezor na vašom zariadení už obsahuje nejaké poznámky (neodporúča sa), pred pokračovaním budete upozornení, že tieto poznámky budú zlúčené. Konflikty budú vyriešené prostredníctvom [[Riešenie problémov s Obsidian Sync#Riešenie konfliktov|riešenia konfliktov Sync]].

![[Nastavenie Obsidian Sync#Úprava nastavení Obsidian Sync]]

![[Nastavenie Obsidian Sync#Spustenie synchronizácie s Obsidian Sync]]

## Správa vzdialených trezorov

Vytvorili ste a pripojili sa k vzdialenému trezoru. Možno ste tento vzdialený trezor synchronizovali aj s viacerými zariadeniami. Táto časť popisuje niektoré ďalšie bežné postupy, ktoré môžete potrebovať pri správe tohto vzdialeného trezoru.

### Odpojenie od vzdialeného trezoru

1. Otvorte **[[Nastavenia]]** Obsidian.
2. V bočnom paneli vyberte **Synchronizácia**.
3. Kliknite na tlačidlo **Odpojiť** vedľa položky Vzdialené trezory.

Teraz ste odpojení od vzdialeného trezoru a na tomto zariadení sa už nesynchronizujete.

### Odstránenie vzdialeného trezoru

> [!tip] Odstránenie vzdialeného trezoru neodstráni vaše lokálne dáta na vašom zariadení.

1. Otvorte **[[Nastavenia]]**.
2. V bočnom paneli vyberte **Synchronizácia**.
3. Vyberte **Spravovať** vedľa položky Vzdialené trezory. Otvorí sa okno so zoznamom vašich vzdialených trezorov.
4. Vyberte ikonu koša ![[lucide-trash-2.svg#icon]] vedľa vzdialeného trezoru, ktorý chcete odstrániť.
5. Potvrďte odstránenie výberom červeného tlačidla **Odstrániť**.
6. Váš vzdialený trezor bol odstránený.

> [!info] Ak ikona koša nie je viditeľná, možno sa budete musieť najprv odpojiť od vzdialeného trezoru. Po odpojení vyberte tlačidlo **Vybrať** na otvorenie zoznamu vzdialených trezorov.

### Regionálne synchronizačné servery

Obsidian Sync vám umožňuje vybrať miesto hostovania pre váš vzdialený trezor. Ak používate verziu `1.4.16` alebo staršiu Obsidian, miesto bude vybrané automaticky.

Ak si nie ste istí, kde sa nachádza oblasť vášho aktuálneho trezoru, pozrite si [[Obsidian Sync/Bezpečnosť a súkromie#Kde nájdem svoj aktuálny server Sync a kde je hosťovaný?|Kde nájdem svoj aktuálny Sync server a kde je hostovaný?]] pre návod.

![[sync-regional-sync-servers.png#interface|300]]

Po výbere miesta **nie je možné** presunúť vaše dátové centrum na iný server bez opätovného nahratia dát. Na zmenu oblastí postupujte podľa [[Oblasti Sync|sprievodcu oblasťami Sync trezorov]].

![[Obsidian Sync/Bezpečnosť a súkromie#^sync-geo-regions]]

## Ďalšie kroky

Tu sú niektoré odporúčané dokumenty na ďalšie čítanie.

- Preskúmajte viac o [[Nastavenia Sync a selektívna synchronizácia|výbere súborov a nastavení na synchronizáciu]].
- Zistite, čo sa stane, keď sa váš vzdialený trezor [[História verzií|zaplní]].
- [[Spolupráca na zdieľanom trezore]] s ďalším používateľom Obsidian Sync.
- Pozrite si [[Často kladené otázky|FAQ Sync]] pre odpovede na bežné otázky.
