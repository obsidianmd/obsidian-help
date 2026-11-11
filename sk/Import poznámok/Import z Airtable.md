---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian vám umožňuje migrovať dáta z Airtable pomocou [[Importér|pluginu Importer]]. Toto skonvertuje vaše Airtable bázy na odolné Markdown súbory, ktoré môžete používať offline v Obsidian a mnohých ďalších aplikáciách.

Každá tabuľka sa stane priečinkom poznámok s jednou poznámkou na záznam, plus súborom [[Úvod do Databáz|Databázy]], ktorý znovu vytvorí tabuľku a jej zobrazenia. Pretože sa používa Airtable API, import vyžaduje osobný prístupový token a internetové pripojenie.

## Vytvorenie osobného prístupového tokenu Airtable

Pre prístup k vašim dátam Airtable cez API potrebujete osobný prístupový token. Tento krok trvá približne dve minúty.

Token je dlhý reťazec čísiel a písmen, zvyčajne začínajúci na `pat...`, ktorý vám umožní stiahnuť vaše dáta z Airtable.

1. Prihláste sa do Airtable a prejdite na stránku [Osobné prístupové tokeny](https://airtable.com/create/tokens) v nastaveniach vášho účtu.
2. Vyberte **Create new token**.
3. Pomenujte váš token, napr. "Obsidian". Môžete použiť akýkoľvek názov.
4. V časti **Scopes** pridajte `data.records:read` a `schema.bases:read`.
5. V časti **Access** pridajte bázy, ktoré chcete importovať, alebo vyberte všetky bázy v pracovnom priestore.
6. Vyberte **Create token**, potom **Copy** na skopírovanie tokenu.
7. Uložte token na bezpečné miesto, napríklad do správcu hesiel.

Airtable zobrazí token iba raz. Ak ho stratíte, vytvorte nový.

## Import vašich dát z Airtable

Budete potrebovať oficiálny Obsidian plugin [[Importér]], ktorý môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importer](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importer.
4. Otvorte plugin **Importer** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. V časti **File format** vyberte **Airtable**.
6. V časti **Airtable Personal Access Token** kliknite na **Link...** pre pridanie nového tajomstva. Pre **ID** zadajte názov ako `airtable` a pre **Tajomstvo** prilepte váš osobný prístupový token.
7. Kliknite na **Načítať** pre prehľadávanie vašich báz a potom vyberte tabuľky, ktoré chcete importovať.
8. Skontrolujte a upravte možnosti importu.
9. Vyberte **Import** pre konfiguráciu toho, ako budú vaše polia konvertované na poznámky s [[Vlastnosti|vlastnosťami]].
10. Vyberte **Pokračovať** pre kontrolu vygenerovanej šablóny a náhľad príkladov z vašich záznamov.
11. Vyberte **Import** a počkajte, kým sa import dokončí.

## Možnosti importu

- **Convert formulas** — vyberte, či budú polia vzorcov, vyhľadávaní, súhrnov a počtov prepísané ako [[Vzorce|vzorce Databáz]], s použitím hodnoty vypočítanej Airtable, keď neexistuje ekvivalent, alebo importované iba ako statické hodnoty.
- **Stiahnuť prílohy** — uloží súbory príloh do vášho trezora pomocou nastavení priečinka príloh a formátu odkazov. Keď je táto možnosť vypnutá alebo keď sťahovanie zlyhá, poznámka odkazuje na URL súboru na Airtable.
- **View property name** — vlastnosť, ktorá zaznamenáva, do ktorých zobrazení Airtable záznam patrí. Každé zobrazenie v generovanej Databáze filtruje podľa tejto vlastnosti. Predvolená hodnota je `Views`.
- **Save Airtable record ID** — pridá vlastnosť `airtable-id`, aby budúce importy mohli rozpoznať záznamy po presunutí alebo premenovaní ich poznámok.

## Konfigurácia spôsobu importu polí z Airtable

V kroku konfigurácie polí si môžete vybrať, ako bude každé pole importované.

Predvolene sa každé pole Airtable stane vlastnosťou. Môžete premenovať alebo odstrániť vlastnosti a zmeniť ich hodnoty pred pokračovaním na náhľad šablóny.

Primárne pole každej tabuľky poskytuje predvolený názov poznámky. Šablónu názvu poznámky môžete upraviť v kroku náhľadu. Záznamy sú vždy umiestnené v priečinku pomenovanom podľa ich tabuľky.

Pozrite si [[Šablóny importéra]] pre prispôsobenie vygenerovaného Markdownu.

## Čo sa importuje

Pre bázu s názvom `Projects` s tabuľkou `Tasks` importér vytvorí:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Jednu poznámku na záznam, s primárnym poľom ako názvom poznámky a ostatnými poľami záznamu ako [[Vlastnosti|vlastnosťami]].
- Jeden súbor `.base` na tabuľku, kde každé zobrazenie Airtable je mapované na [[Zobrazenia|zobrazenie Databázy]]:
	- **Grid** sa stane [[Zobrazenie tabuľky|zobrazením tabuľky]].
	- **Gallery** sa stane [[Zobrazenie kariet|zobrazením kariet]].
	- **List** sa stane [[Zobrazenie zoznamu|zobrazením zoznamu]].
	- **Kanban** sa stane [[Zobrazenie kanban|zobrazením kanban]] v Obsidian 1.14 a novšom. Airtable neuvádza, podľa ktorého poľa je kanban zoskupený, takže po importe [[Zobrazenie kanban#Zoskupiť karty do stĺpcov|vyberte vlastnosť, podľa ktorej chcete zoskupovať]]. Opätovný import zachová vašu voľbu.
- Typy polí Airtable sa mapujú na typy vlastností Obsidian bez prepísania typov, ktoré ste už nastavili.
- Prepojené záznamy sa stanú odkazmi na zodpovedajúce poznámky.
- Prílohy sa stiahnu do vášho trezora pomocou nastavení vášho trezora.


## Obmedzenia

Kvôli limitom rýchlosti Airtable API môže import veľkých báz trvať značný čas. Prosím, buďte trpezliví.

Kvôli obmedzeniam Airtable API nie sú niektoré dáta dostupné alebo ich nemožno konvertovať:

- Hodnoty súhrnov (rollup) sa neimportujú. API neodhaľuje agregáciu použitú pre vypočítanú hodnotu súhrnu, takže sa zapíše iba názov vlastnosti spolu so vzorcom Databázy, ak schéma poľa obsahuje výraz.
- Vzorce používajúce funkcie, pre ktoré Obsidian nemá ekvivalent, ako napríklad `SWITCH`, `FIND`, `REGEX_EXTRACT` a `SQRT`, sa vrátia k statickej hodnote z Airtable.
- Importujú sa iba zobrazenia grid, gallery, list a kanban. Ostatné typy zobrazení, ako kalendár, časová os a Gantt, sa ignorujú.
- Odkazy na záznamy v tabuľkách, ktoré ste nevybrali, sa stanú obyčajným názvom záznamu namiesto odkazu.
- Dizajny rozhraní, automatizácie, komentáre a história revízií sa neimportujú.

## Riešenie problémov

Ak narazíte na problémy s konverziou, [odošlite hlásenie o chybe](https://github.com/obsidianmd/obsidian-importer/issues), aby sme ho mohli vylepšiť.
