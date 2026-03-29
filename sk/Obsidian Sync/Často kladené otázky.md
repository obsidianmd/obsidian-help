---
permalink: sync/faq
publish: true
mobile: true
description: Táto stránka uvádza niektoré bežné otázky súvisiace s otázkami a obmedzeniami služby Obsidian Sync.
---
Táto stránka uvádza niektoré z bežných otázok súvisiacich s otázkami a obmedzeniami pre [[Úvod do Obsidian Sync|Obsidian Sync]].

## Všeobecné

### Aké operačné systémy Obsidian Sync podporuje?

Obsidian Sync podporuje každú platformu, na ktorej môže Obsidian bežať. V súčasnosti to znamená Windows, macOS, Linux, Android a iOS.

### Funguje Obsidian s režimom uzamknutia (Lockdown Mode) od Apple?

Obsidian je možné používať v [režime uzamknutia](https://support.apple.com/en-us/105120) za predpokladu, že Obsidian je pridaný ako výnimka.

### Aký typ dát sa synchronizuje?

Predvolene sa synchronizujú vaše poznámky Obsidian, obrázky a váš [[Konfiguračný priečinok]].

Môžete pridať ďalšie možnosti synchronizácie pre PDF, zvukové súbory, video súbory a ďalšie súbory, keď [[Nastavenia Sync a selektívna synchronizácia|Synchronizujete nastavenia a selektívnu synchronizáciu]].

### Koľko úložiska mám k dispozícii?

Limit úložiska závisí od vášho [[Plány a limity úložiska#Plány|plánu Sync]] Obsidian. Maximálna veľkosť úložiska je 100 GB. Tento limit úložiska zahŕňa [[História verzií|históriu verzií]].

Môžete zobraziť **Veľkosť trezoru** v aplikácii Obsidian prejdením na **[[Nastavenia]] → Sync**.

### Koľko vzdialených trezorov môžem mať?

Počet vzdialených trezorov, ktoré môžete mať, je určený na základe vášho [[Plány a limity úložiska#Plány|plánu Sync]]. Štandardný plán zahŕňa 1 trezor, plán Plus zahŕňa 10 trezorov. Trezory zdieľané s vami sa nezapočítavajú do vášho limitu trezorov.

### Aký veľký môže byť každý vzdialený trezor?

Neexistuje žiadny limit na jeden trezor. Limit úložiska je viazaný na váš používaný účet a môže byť aplikovaný naprieč všetkými vašimi trezormi.

### S koľkými ľuďmi môžem zdieľať vzdialený trezor?

Môžete [[Spolupráca na zdieľanom trezore|zdieľať vzdialený trezor]] s až 20 ľuďmi.

### Aký veľký môže byť každý súbor?

Maximálna veľkosť súboru závisí od vášho [[Plány a limity úložiska|plánu Obsidian Sync]]. Pre Štandardný plán je limit 5 MB. Pre plán Plus je limit 200 MB na súbor.

### Synchronizujú sa moje dáta na pozadí?

Nie, súbory sa synchronizujú iba keď je Obsidian spustený.

### Načítava Obsidian Sync moje nastavenia v reálnom čase?

Obsidian Sync môže automaticky znovu načítať určité nastavenia, ale existujú niektoré obmedzenia. Viac podrobností nájdete v časti [[Nastavenia Sync a selektívna synchronizácia#Opätovné načítanie nastavení|Opätovné načítanie nastavení]].

### Môžem používať synchronizáciu treťou stranou s Obsidian Sync?

Neodporúčame používať službu synchronizácie treťou stranou spolu s Obsidian Sync. Používanie služby tretej strany a Obsidian Sync na viacerých zariadeniach môže viesť ku konfliktom, čo má za následok duplicitné alebo poškodené súbory.

Služby cloudového úložiska ako OneDrive a Dropbox ponúkajú funkcie „Súbory na požiadanie" alebo „Iba online súbory", ktoré sťahujú súbory iba v prípade potreby a odstraňujú ich lokálne na úsporu miesta. Keďže však tieto súbory nie sú vždy dostupné lokálne, Obsidian Sync ich interpretuje ako odstránené, čo vedie k ich vymazaniu z vášho vzdialeného trezoru.

Aby ste sa vyhli týmto problémom, vypnite sťahovanie na požiadanie pri používaní Obsidian Sync so službami ako OneDrive alebo Dropbox. Budete musieť zabezpečiť, aby boli nastavenia služby tretej strany nakonfigurované tak, aby súbory boli vždy uložené na zariadení.

## Uchovávanie dát

Toto sú bežne kladené otázky o uchovávaní dát v Obsidian. Pre podrobnejšie odpovede si pozrite [[Bezpečnosť a súkromie|Bezpečnosť a súkromie]].

### Ako dlho uchovávate históriu verzií?

[[História verzií]] závisí od vášho [[Plány a limity úložiska|plánu Obsidian Sync]]. Pri Štandardnom pláne sa vaše poznámky uchovávajú 1 mesiac. Pri pláne Plus sa vaše poznámky uchovávajú 12 mesiacov. Po uplynutí tohto obdobia sa staršie verzie odstránia.

Staršie verzie [[Prílohy|príloh]] sa uchovávajú dva týždne.

### Ako dlho uchovávate moje dáta po vypršaní predplatného?

Uchovávame dáta vo vašich vzdialených trezoroch, vrátane histórie verzií, jeden mesiac po vypršaní vášho predplatného. Akékoľvek lokálne trezory na vašich zariadeniach nie sú ovplyvnené.

Pokiaľ obnovíte predplatné do jedného mesiaca, nemalo by to mať vplyv na vaše používanie. Ak obnovíte po mesiaci, keď boli vaše vzdialené trezory odstránené, môžete [[Nastavenie Obsidian Sync|vytvoriť nový vzdialený trezor]] a pripojiť váš lokálny trezor.

### Uchovávate moje dáta, ak požiadam o vrátenie peňazí za predplatné?

Nie. Dáta sú okamžite odstránené zo serverov Obsidian Sync. Dáta vo vašom [[Lokálne a vzdialené trezory|lokálnom trezore]] nie sú ovplyvnené.
