---
permalink: sync/messages
publish: true
mobile: true
description: Táto stránka vysvetľuje stavové ikony Obsidian Sync a poskytuje podrobnosti o protokole synchronizačnej aktivity.
---
Obsidian Sync poskytuje niekoľko prvkov na indikáciu stavu synchronizácie, hlavne [[#Ikona stavu synchronizácie]] a [[#Záznam aktivity synchronizácie]]. Podrobnosti o správe verzií v Obsidian Sync sú popísané na stránke [[História verzií]].

## Ikona stavu synchronizácie

Ikona stavu synchronizácie sa nachádza v [[Stavový riadok|stavovom riadku]] na desktopovej verzii a v [[Bočný panel#Otvorenie skrytých bočných panelov|pravom bočnom paneli]] na mobile a tablete. Ikona zobrazuje rôzne stavy synchronizácie:

- ![[obsidian-icon-sync-synced.svg#icon]] **Synchronizované**: Obsidian Sync plne synchronizoval vaše súbory. Táto ikona je zvyčajne zelená.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synchronizuje sa**: Obsidian práve aktualizuje vzdialený trezor. Táto ikona je zvyčajne fialová.
- ![[obsidian-icon-sync-paused.svg#icon]] **Pozastavené**: Synchronizácia bola pozastavená, ale Obsidian je stále pripojený k vzdialenému trezoru. Ikona je zvyčajne fialová.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Odpojené**: Základný plugin Sync je aktívny, ale [[Lokálne a vzdialené trezory|lokálny trezor]] nie je pripojený k vzdialenému trezoru. Táto ikona je zvyčajne červená.

Kliknutím alebo ťuknutím na ikonu sa otvorí kontextové menu s nasledujúcimi možnosťami:
- ![[obsidian-icon-sync-paused.svg#icon]] Pozastaviť (alebo ![[lucide-circle-play.svg#icon]] Pokračovať, ak je pozastavené)
- ![[lucide-history.svg#icon]] [[História verzií]] (Neaktívne, ak sa nezobrazuje poznámka)
- ![[lucide-align-left.svg#icon]] Otvoriť [[#Záznam aktivity synchronizácie|Záznam synchronizácií]]
- ![[lucide-trash-2.svg#icon]] [[História verzií#Obnovenie odstráneného súboru|Odstránené súbory]]
- ![[lucide-cog.svg#icon]] [[Nastavenia Sync a selektívna synchronizácia|Nastavenia Sync]]

## Záznam aktivity synchronizácie

Obsidian Sync obsahuje podrobný záznam synchronizácie, ktorý sleduje všetky interakcie medzi vašimi lokálnymi súbormi a vzdialeným trezorom. Záznam zobrazuje nahrávanie, sťahovanie, odstraňovanie a akékoľvek problémy ako konflikty pri zlúčení alebo problémy s pripojením.

**Prístup k záznamu aktivity:**
- Kliknite na ikonu stavu synchronizácie v stavovom riadku
- Prejdite do **[[Nastavenia]] → Sync → Záznam aktivity**
- Použite **Paleta príkazov → Sync: Otvoriť záznam o činnosti**

Záznam poskytuje časové značky a podrobnosti pre každú operáciu synchronizácie, čo je užitočné pri riešení problémov so synchronizáciou.

> [!warning] Záznam synchronizácie sa neuchováva po zatvorení Obsidian. Ak narazíte na problém, uistite sa, že záznam skopírujete _pred_ zatvorením aplikácie.

Záznam kategorizuje správy do nasledujúcich typov:

- [[#Všeobecné správy]]
- [[#Chybové správy]]
- [[#Preskočené správy]]
- [[#Správy o účte]]

Záznam synchronizácie môžete filtrovať podľa **Všetko**, **Chyby**, **Preskočené** a **Konflikty pri zlúčení**. Okrem toho môžete prehľadávať záznam synchronizácie pomocou vyhľadávacieho poľa v okne Sync.

> [!summary] Nižšie sme zahrnuli niektoré z pravdepodobných správ, na ktoré ste narazili. Zoznam nie je vyčerpávajúci. Ak máte problém a máte správu zo záznamu synchronizácie, ktorej si nie ste istí, [[Nápoveda a podpora#Kontaktovanie podpory Obsidian|kontaktujte podporu Obsidian]].

### Všeobecné správy

Toto sú bežné každodenné správy, na ktoré môžete naraziť.

**Pripájanie k serveru**  
Obsidian sa pokúša pripojiť k [[Obsidian Sync/Bezpečnosť a súkromie#Kde nájdem svoj aktuálny server Sync a kde je hostovaný?|serveru Sync]] vášho vzdialeného trezora.

**Pripojené k serveru. Zisťovanie zmien...**  
Obsidian nadviazal spojenie a porovnáva lokálny trezor so vzdialeným trezorom, aby zistil, či sú potrebné zmeny.

> [!info] Táto správa môže tiež naznačovať iné potenciálne problémy so synchronizáciou. Ak ju vidíte opakovane a veríte, že stále existujú položky na synchronizáciu, [[Nápoveda a podpora#Kontaktovanie podpory Obsidian|kontaktujte podporu Obsidian]].

**Plne synchronizované**  
- Lokálny a vzdialený trezor sú plne synchronizované.

**Zlučovanie konfliktného súboru**  
Počas synchronizácie bol zistený konflikt a súbor bol zlúčený namiesto prepísania. Pozrite si [[Riešenie problémov s Obsidian Sync#Riešenie konfliktov|riešenie konfliktov]] pre viac informácií. Ak je zlúčenie nežiaduce, môžete obnoviť predchádzajúce verzie cez [[História verzií]] alebo [[Obnova súboru]].

**Odmietnutá zmena servera**  
Zmeny vo vzdialenom trezore sú staršie ako verzia na vašom lokálnom zariadení, takže sa zachová lokálna verzia a vzdialená zmena sa ignoruje.

### Chybové správy

Toto sú správy popisujúce chybu pri synchronizácii súboru.

**Nedostatok pamäte**  
Tento problém sa zvyčajne vyskytuje na mobilných zariadeniach, keď nie je dostatok úložného priestoru alebo pamäte na stiahnutie súboru. Je to najbežnejšie pri veľkých súboroch, ako sú videá.

### Preskočené správy

Toto sú správy popisujúce, čo bolo preskočené a prípadne prečo.

**Nie je možné stiahnuť súbor s neplatným názvom**

Súbor obsahuje [špeciálny znak alebo pomenovaciu konvenciu](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names), ktorá nie je povolená na prijímajúcom operačnom systéme. Pre zjednodušenie môžete súbor na zdrojovom zariadení premenovať a odstrániť všetky špeciálne znaky okrem `-` a `_`.

Všimnite si, že to zahŕňa aj súbory s viacerými bodkami `.` v názve na zariadeniach s Androidom.

### Správy o účte

Toto sú správy súvisiace so zmenou vášho predplatného alebo účtu.

**Prekročený limit trezora**  
Váš účet prekročil [[Často kladené otázky#Aká veľká môže byť každý vzdialený trezor|maximálnu veľkosť úložiska]]. Prílohy a história verzií prispievajú k tejto veľkosti. Aj keď sa váš trezor zdá menší ako limit, staršie verzie a súbory ho môžu prekročiť.

Na zníženie veľkosti trezora:
1. Otvorte **[[Nastavenia]] → Sync**.
2. Použite možnosti pod **Veľkosť trezoru je nad limit** na odstránenie veľkých súborov.

**Trezor nenájdený**  
`{"res":"err","msg":"Vault not found."}`

Táto chyba sa môže vyskytnúť v týchto prípadoch:

1. Trezor bol odstránený z iného zariadenia.
2. Predplatné synchronizácie bolo neaktívne viac ako 30 dní, čo spôsobilo odstránenie vzdialeného trezora.
3. Predplatné bolo zrušené alebo vrátené, čo malo za následok odstránenie vzdialeného trezora.

V týchto prípadoch budete musieť [[Nastavenie Obsidian Sync#Odpojenie od vzdialeného trezora|odpojiť sa od vzdialeného trezora]] a [[Nastavenie Obsidian Sync#Vytvorenie nového vzdialeného trezora|vytvoriť nový vzdialený trezor]], pričom zabezpečíte zachovanie vašich lokálnych dát.

**Neúspešná autentifikácia: Vaše predplatné Obsidian Sync vypršalo**  
Váš účet je teraz v stave úplného vypršania, pretože sa nám nepodarilo spracovať platbu na súbore.

Na pokračovanie používania Obsidian Sync budete musieť obnoviť predplatné vo [vašom účte](https://obsidian.md/account/sync).

**Neúspešná autentifikácia: Neprihlásený**

Obsidian Sync zistil, že momentálne nie ste prihlásený. Budete sa musieť prihlásiť späť v aplikácii v sekcii [[Nastavenia#Všeobecné#Účet|Účet]] v **[[Nastavenia|Nastaveniach]]**.

V niektorých prípadoch môže komunitný plugin tiež zabrániť Obsidian Sync v overení stavu prihlásenia vášho účtu. Prosím, vstúpte do **[[Bezpečnosť pluginov#Obmedzený režim|obmedzeného režimu]]** a skúste to znova.

### Sieťové správy

**Odpojené od servera**
`Unable to connect to server`

Obsidian Sync sa odpojil od servera Sync z neznámeho dôvodu. Sync sa bude pravidelne pokúšať znova pripojiť k serveru.

Na iOS sa táto správa zobrazuje ako nasledujúca chyba:
`Null is not an object (evaluating 'this.socket.send')`

Znamená presne to isté ako správa `Unable to connect to server` a v žiadnom prípade nenaznačuje, že je niečo iné v neporiadku.
