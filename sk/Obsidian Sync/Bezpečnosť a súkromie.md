---
permalink: sync/security
publish: true
mobile: false
description: Zistite viac o aspektoch zabezpečenia a ochrany súkromia služby Obsidian Sync.
---
## Šifrovanie

Pre vašu bezpečnosť [[Úvod do Obsidian Sync|Obsidian Sync]] šifruje váš [[Lokálne a vzdialené trezory|vzdialený trezor]] a všetku komunikáciu so servermi Obsidian.

Keď vytvoríte nový vzdialený trezor, máte dve možnosti:

- **Šifrovanie end-to-end (predvolené)** ponúka najsilnejšie zabezpečenie, ale vyžaduje, aby ste si bezpečne uložili svoje šifrovacie heslo. Toto zaručuje, že nikto — ani tím Obsidian — nemôže pristupovať k vašim poznámkam.
- **Štandardné šifrovanie** používa šifrovací kľúč spravovaný Obsidianom na ochranu vašich dát počas prenosu a na našom serveri.

Odporúčame šifrovanie end-to-end pre všetkých používateľov, pretože je to najsúkromnejšia a najbezpečnejšia možnosť. Avšak majte na pamäti, že ak zabudnete alebo stratíte svoje šifrovacie heslo, vaše dáta zostanú zašifrované a navždy nepoužiteľné. Nie sme schopní obnoviť vaše heslo ani žiadne zašifrované dáta za vás.

Váš výber ovplyvňuje iba vzdialený trezor. Obsidian nešifruje váš lokálny trezor.

### Čo znamená šifrovanie end-to-end?

Šifrovanie end-to-end znamená, že dáta sú zašifrované od okamihu, keď opustia vaše zariadenie, a môžu byť dešifrované iba pomocou vášho šifrovacieho kľúča, keď sa vrátia na niektoré z vašich zariadení.

My nemôžeme čítať vaše dáta. Rovnako ani žiadni potenciálni odpočúvajúci, ako napríklad váš poskytovateľ internetových služieb.

V zriedkavom prípade úplného narušenia servera vaše dáta zostávajú zašifrované — nikto nemôže dešifrovať vaše súbory bez znalosti vášho hesla.

### Aké sú riziká používania štandardného šifrovania?

Štandardné šifrovanie je v zásade menej bezpečné ako šifrovanie end-to-end, ale môže byť pohodlnou voľbou, ak neočakávate, že dáta, ktoré synchronizujete, budú úplne súkromné. Napríklad, ak je váš synchronizovaný trezor [[Úvod do Obsidian Publish|publikovaný]] na verejnej webovej stránke, ako je táto stránka pomocníka, šifrovanie end-to-end nie je potrebné.

Štandardné šifrovanie je rovnaká metóda šifrovania, akú používajú spoločnosti poskytujúce cloudové úložisko a platformy softvéru ako služby, ako napríklad Google Docs, Dropbox a iCloud (bez Rozšírenej ochrany dát). Váš šifrovací kľúč je vygenerovaný aplikáciou a používa sa na ochranu vašich dát počas prenosu a na serveri. Keďže šifrovací kľúč je uložený na serveroch spoločnosti, môže byť použitý na dešifrovanie vašich dát, napr. v prípade, keď je spoločnosť predmetom príkazu na prehliadku, alebo v prípade, keď chcete pristupovať k svojim dátam cez webový prehliadač.

Šifrovanie end-to-end zaručuje, že Obsidian nikdy nemôže pristupovať k vašim dátam a malo by sa vždy používať na synchronizáciu dát, ktoré chcete, aby zostali úplne súkromné a bezpečné.

### Aké šifrovanie používate?

Pre bezpečnosť dát implementujeme štandardné šifrovacie protokoly. Konkrétne používame [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), najsilnejší šifrovací štandard, široko používaný v kontextoch ako je online bankovníctvo. Proces šifrovania zahŕňa nasledujúce technické detaily:

- **Funkcia odvodenia kľúča:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) so soľou
- **Šifrovací algoritmus:** AES-256 s použitím [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Môžem overiť, že moje dáta sú šifrované end-to-end?

Áno. Pozrite si nášho sprievodcu [ako overiť šifrovanie end-to-end v Obsidian Sync](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Tento sprievodca poskytuje podrobné pokyny na overenie šifrovania end-to-end vašich dát bez nutnosti dôvery, keď sú odosielané a prijímané cez servery Sync.

### Prešiel Obsidian nezávislým bezpečnostným auditom?

Áno. Obsidian bol nezávisle auditovaný. Navštívte našu [stránku Bezpečnosť](https://obsidian.md/security) pre zobrazenie správ z auditu. Pravidelné audity od externých bezpečnostných firiem zabezpečujú, že kód a postupy Obsidian spĺňajú najvyššie bezpečnostné štandardy.

### Čo sa stane, ak zabudnem svoje šifrovacie heslo?

Ak niekedy stratíte alebo zabudnete šifrovacie heslo, nebudete môcť pripojiť ďalšie trezory k vášmu vzdialenému trezoru. Keďže šifrovacie heslo nie je nikde uložené, je navždy stratené.

Vaše dáta sú však zvyčajne bezpečne uložené lokálne na každom z vašich zariadení.

Na pokračovanie používania Obsidian Sync odporúčame vykonať úplné opätovné nastavenie, aby ste mohli pridať nové zariadenia do vášho systému Sync:

1. Vytvorte úplnú zálohu trezoru na vašom primárnom zariadení, pre prípad, že sa niečo pokazí. Môže to byť jednoduché ako vytvorenie kópie priečinka trezoru alebo vytvorenie zip súboru z trezoru.
2. Odpojte vzdialený trezor na každom z vašich zariadení. Toto je možné vykonať cez **[[Nastavenia]] → Sync → Vybrať vzdialený trezor → Odpojiť**.
3. [[Nastavenie Obsidian Sync#Vytvorenie nového vzdialeného trezoru|Vytvorte nový vzdialený trezor]] na vašom primárnom zariadení z rovnakej stránky nastavení. Voliteľne môžete odstrániť predchádzajúci vzdialený trezor, keďže k nemu aj tak nemáte heslo. (Možno budete musieť odstrániť predchádzajúci vzdialený trezor, ak ste na [[Často kladené otázky#Koľko vzdialených trezorov môžem mať?|limite trezorov]])
4. Počkajte, kým sa váš primárny zariadenie synchronizuje. Sledujte indikátor synchronizácie v pravom dolnom rohu obrazovky, kým nezobrazí zelené zaškrtnutie.
5. Pripojte každé z vašich zariadení k rovnakému novo vytvorenému vzdialenému trezoru. Pri pripájaní sa zobrazí upozornenie o zlúčení trezoru, toto je očakávané a môžete pokračovať. Počkajte, kým sa každé zariadenie úplne synchronizuje, predtým než prejdete na ďalšie. Toto znižuje pravdepodobnosť problémov.
6. Teraz by mali byť všetky vaše zariadenia pripojené k novému vzdialenému trezoru.

## Hosting

### Kde hosťujete servery pre Obsidian Sync?

Naše dátové centrá, poháňané [DigitalOcean](https://www.digitalocean.com), poskytujú geo-regionálne možnosti hostingu vzdialených trezorov na nasledujúcich miestach:

> [!abstract] Oblasti Sync
> **Automatická**: Vaše dátové centrum je vybrané na základe vašej IP polohy v čase, keď ho prvýkrát nastavíte.
> 
> **Ázia**: Singapur
> **Európa**: Frankfurt, Nemecko
> **Severná Amerika**: San Francisco, USA
> **Oceánia**: Sydney, Austrália
^sync-geo-regions

### Kde nájdem svoj aktuálny server Sync a kde je hosťovaný?

Na nájdenie vášho servera Obsidian Sync postupujte podľa týchto krokov:
1. Prejdite na **[[Nastavenia]]** → **Sync** → **Kopírovať ladiace informácie**.
2. Prilepte skopírované informácie do poznámky alebo súboru.
3. Hľadajte riadok podobný tomuto: `Host server: wss://sync-xx.obsidian.md`

Tento riadok označuje server, kde je hosťovaný váš vzdialený trezor. Pre viac detailov o umiestneniach serverov a ich dostupnosti navštívte našu [stránku stavu](https://status.obsidian.md/).

## Sieť a prístup

### Správa prístupu k Obsidian Sync vo vašej sieti

Na reguláciu prístupu k Obsidian Sync vo vašej sieti musíte spravovať nasledujúce domény:

`sync-xx.obsidian.md`

`xx` v tomto prípade predstavuje číslo v rozsahu od `1 - 100`.

> [!tip] Ak váš firewallový systém to podporuje, odporúčame pridať na whitelist `sync-*.obsidian.md`, aby ste zohľadnili neustály rast počtu subdomén.

## Obmedzenia

Obsidian Sync je navrhnutý tak, aby vaše poznámky zostali súkromné a bezpečné. Na zabezpečenie rýchlej, spoľahlivej synchronizácie a efektívneho úložiska naprieč zariadeniami robíme niektoré zámerné kompromisy v tom, ako sa šifrovanie aplikuje.

### Deterministické šifrovanie hash súborov

Hash súborov šifrujeme deterministicky: rovnaký obsah súboru s použitím rovnakého šifrovacieho kľúča a soli vždy vytvorí rovnaký zašifrovaný hash na serveri. Toto pomáha Sync detekovať duplikáty a vyhnúť sa opätovnému nahrávaniu alebo opätovnému ukladaniu identických dát, čo šetrí šírku pásma a vzdialené úložisko, najmä v histórii verzií alebo keď sa veľké súbory opakujú.

Avšak ak útočník kompromituje server Sync a má samostatný spôsob, ako prinútiť používateľa nahrať súbory podľa svojho výberu, potom by útočník mohol prinútiť používateľa nahrať konkrétne súbory a zistiť, či sa súbor zhoduje so súborom, ktorý používateľ predtým nahral.

### Žiadna kryptografická väzba medzi cestou a obsahom

Niektoré metadáta nie sú šifrované end-to-end: ktoré zariadenie nahralo alebo odstránilo súbor, kedy bol nahraný a *mapovanie* medzi zašifrovanými cestami súborov a zašifrovaným obsahom. Tieto dáta sú čitateľné serverom, aby mohol smerovať zmeny, určiť históriu verzií súboru a udržiavať zariadenia synchronizované.

Ak by bol server Sync kompromitovaný, útočník by mohol manipulovať s týmto mapovaním, čím by spôsobil, že obsah jedného zašifrovaného súboru by bol doručený pod inou cestou súboru. Toto neodhaľuje vaše dáta v obyčajnom texte, tie zostávajú zašifrované.
