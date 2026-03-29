---
permalink: import/notion
---
Obsidian vám umožňuje jednoducho migrovať vaše poznámky z Notion pomocou [[Importér|pluginu Importér]]. Toto prekonvertuje vaše dáta z Notion do odolných Markdown súborov, ktoré môžete používať offline s Obsidian a mnohými ďalšími aplikáciami.

Obsidian ponúka dva spôsoby importu vašich dát z Notion:

1. **Import cez API** zachová celý váš pracovný priestor vrátane databáz a vzorcov, ktoré sa skonvertujú na [[Úvod do Databáz|Databázy]], ale vyžaduje integračný token Notion a pripojenie na internet.
2. **Import zo súboru** nezachová databázy, ale nevyžaduje API token ani pripojenie na internet.

## Import cez API

### Vytvorenie integračného tokenu Notion API

Na prístup k vašim dátam z Notion cez API potrebujete integračný token. Tento krok trvá približne 2 minúty.

Token je dlhý reťazec čísel a písmen, zvyčajne začínajúci `ntn_...`, ktorý vám umožní stiahnuť vaše dáta z Notion.

1. Prihláste sa do vášho panela [Notion Integrations](https://www.notion.so/profile/integrations/internal).
2. Vyberte **New integration**.

![[notion-integration.png#interface]]

2. Pomenujte svoju integráciu, napr. „Personal". Môžete použiť akékoľvek meno.
3. Vyberte pracovný priestor, ktorý chcete exportovať.
4. Kliknite na **Save** a pokračujte na **Configure integration settings**.
5. Na karte **Configuration** je váš API token dostupný v poli **Internal Integration Secret**.
6. Vyberte **Show** a potom **Copy**.
7. Uložte token na bezpečné miesto, napríklad do správcu hesiel.

![[notion-token.png#interface]]

Ďalej dajte svojej integrácii prístup k stránkam a databázam Notion, ktoré chcete importovať.

1. Prejdite na kartu **Access** integrácie, ktorú ste práve vytvorili.
2. Kliknite na **Edit access**.
3. Pridajte stránky a databázy, ktoré chcete importovať.

Teraz môžete konvertovať vaše dáta pomocou Obsidian Importéra.

### Import vašich dát z Notion cez API

Budete potrebovať oficiálny plugin Obsidian [[Importér]], ktorý môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. V časti **File format** vyberte **Notion (API)**
6. V časti **API token** vložte váš **Internal Integration Secret** z Notion.
7. Kliknite na **Načítať** a vyberte databázy a stránky, ktoré chcete importovať.
8. Skontrolujte a upravte možnosti importu.
9. Vyberte **Import** a počkajte, kým sa import nedokončí
10. Hotovo!

### Obmedzenia

> [!info] Import cez API je nový
> Importér Notion API je nový. Kvôli zložitosti pracovných priestorov Notion niektoré okrajové prípady nemusia byť zohľadnené. Ak narazíte na problémy s konverziou, [nahláste chybu](https://github.com/obsidianmd/obsidian-importer/issues), aby sme ho mohli vylepšiť.

Kvôli limitom rýchlosti Notion API môže import veľkých pracovných priestorov trvať značný čas. Prosím, buďte trpezliví.

Kvôli obmedzeniam Notion API niektoré dáta nie sú dostupné alebo sa nedajú konvertovať:

- Importuje sa len primárne zobrazenie pre každú databázu.
- [Prepojené zdroje dát](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) sa neimportujú: *„Notion API momentálne nepodporuje prepojené zdroje dát. Pri zdieľaní databázy s vašou integráciou sa uistite, že obsahuje pôvodný zdroj dát!"*
- Funkcie `People`: `name()` a `email()`
- Funkcie `Text`: `style()` a `unstyle()`

Okrem toho Importér vykoná nasledujúce zmeny:

- Stránky bez podstránok alebo databáz sa importujú ako `[názov súboru].md` namiesto `[názov súboru]/[názov súboru].md`.
- Databázy sú vždy reprezentované ako priečinky s názvom `[názov databázy]` so súborom `[názov databázy].base` vnútri.

## Import zo súboru

Import zo súboru je alternatívny spôsob importu vašich dát z Notion. Táto metóda nezachová databázy, ale nevyžaduje API token ani pripojenie na internet.

### Export vašich dát z Notion

Na prípravu vašich dát na import budete musieť exportovať celý pracovný priestor pomocou formátu HTML exportu Notion. Odporúčame nepoužívať Markdown export Notion, pretože vynecháva dôležité dáta. Na export celého obsahu pracovného priestoru musíte mať administrátorský prístup k pracovnému priestoru Notion.

1. Prejdite na **[[Nastavenia]]** v hornej časti bočného panela Notion.
2. V časti **Workspace** vyberte **General**.
3. Nájdite a vyberte **Export all workspace content**.
4. V časti **Export format** vyberte **HTML**.
5. Vyberte **Include everything**.
6. Zapnite **Create folders for subpages**.
7. Súbor `.zip` dostanete e-mailom alebo priamo v prehliadači.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Import vášho .zip súboru z Notion

Budete potrebovať oficiálny plugin Obsidian [[Importér]], ktorý môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. V časti **File format** vyberte **Notion (.zip)**
6. Vyberte súbor `.zip` so súbormi z Notion, ktoré chcete importovať. *Odporúča sa importovať všetky vaše dáta z Notion naraz, aby sa interné odkazy mohli správne prepojiť.*
7. _Voliteľne_ vyberte priečinok pre import. Vaše stránky a databázy z Notion budú vnorené do tohto priečinka.
8. Zapnite **Save parent pages in subfolders**, aby sa zachovala štruktúra z Notion. *Všimnite si, že v Notion môžete písať obsah do priečinkov, čo v Obsidian nie je možné, a tieto stránky budú pridané ako podstránka pod priečinok.*
9. Vyberte **Import** a počkajte, kým sa import nedokončí
10. Hotovo!

### Riešenie problémov

Ak narazíte na problémy počas importu z Notion:

- Uistite sa, že v Notion používate **HTML** ako formát exportu, **nie Markdown**.
- Ak Obsidian počas importu zamrzne, vypnite komunitné pluginy a skúste to znova.

Narazili ste na niečo iné? Prehľadajte [repozitár Importéra](https://github.com/obsidianmd/obsidian-importer/issues), či rovnaký problém nezažili aj ostatní.

#### Import veľkých pracovných priestorov

Ak importujete pracovný priestor s viacerými gigabajtami dát, export z Notion môže obsahovať vnorené `.zip` súbory. V tomto prípade sa môže zobraziť chybová správa importu, ktorá vyzerá približne takto:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Ak sa vám zobrazí táto chyba, môžete rozbaliť súbor z Notion a potom importovať vnorené súbory `Export-{id}-Part-1.zip`.
