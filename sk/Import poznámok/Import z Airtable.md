---
permalink: import/airtable
---
Obsidian vám umožňuje migrovať dáta z Airtable pomocou [[Importér|pluginu Importer]]. Toto skonvertuje vaše Airtable bázy na odolné Markdown súbory, ktoré môžete používať offline v Obsidian a mnohých ďalších aplikáciách.

Každá tabuľka sa stane priečinkom poznámok s jednou poznámkou na záznam, plus súborom [[Úvod do Databáz|Databázy]], ktorý znovu vytvorí tabuľku a jej zobrazenia. Pretože sa používa Airtable API, import vyžaduje osobný prístupový token a internetové pripojenie.

## Vytvorenie osobného prístupového tokenu Airtable

Pre prístup k vašim dátam Airtable cez API potrebujete osobný prístupový token. Tento krok trvá približne 1 minútu.

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
5. V časti **File format** vyberte **Airtable (API)**.
6. V časti **Airtable Personal Access Token** prilepte token, ktorý ste vytvorili.
7. Kliknite na **Načítať** pre prehľadávanie vašich báz a potom vyberte tabuľky, ktoré chcete importovať.
8. Skontrolujte a upravte možnosti importu.
9. Vyberte **Import** pre konfiguráciu toho, ako budú vaše polia konvertované na poznámky s [[Vlastnosti|vlastnosťami]].
10. Kliknite na **Pokračovať** a počkajte, kým sa import dokončí.
11. Hotovo!

### Možnosti importu

- **Convert formulas** — vyberte, či budú polia vzorcov, vyhľadávaní, súhrnov a počtov prepísané ako [[Vzorce|vzorce Databáz]], s použitím hodnoty vypočítanej Airtable, keď neexistuje ekvivalent, alebo importované iba ako statické hodnoty.
- **Stiahnuť prílohy** — uloží súbory príloh do vášho trezora pomocou nastavení priečinka príloh a formátu odkazov. Keď je táto možnosť vypnutá alebo keď sťahovanie zlyhá, poznámka odkazuje na URL súboru na Airtable.
- **View property name** — vlastnosť, ktorá zaznamenáva, do ktorých zobrazení Airtable záznam patrí. Každé zobrazenie v generovanej Databáze filtruje podľa tejto vlastnosti. Predvolená hodnota je `base`.
- **Incremental import** — pridá vlastnosť `airtable-id` ku každej poznámke, aby neskorší import mohol preskočiť záznamy, ktoré už boli importované. Pri úplnom importe sa táto vlastnosť opäť odstráni.

## Konfigurácia spôsobu importu polí z Airtable

V druhom kroku importu si môžete vybrať, ako bude každé pole importované.

Každé pole vo vašich tabuľkách má priradenú premennú s názvom `{{field_name}}`. Predvolene sa každé pole stane vlastnosťou a tieto premenné môžete použiť na premenovanie vlastností, zmenu ich hodnôt alebo zápis obsahu do tela každej poznámky.

Primárne pole každej tabuľky sa vždy používa ako názov poznámky a záznamy sú vždy umiestnené v priečinku pomenovanom podľa ich tabuľky, takže tieto možnosti nie sú konfigurovateľné.

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
	- Všetky ostatné typy zobrazení sa konvertujú na zobrazenie tabuľky.
- Typy polí Airtable sa mapujú na typy vlastností Obsidian bez prepísania typov, ktoré ste už nastavili.
- Prepojené záznamy sa stanú odkazmi na zodpovedajúce poznámky.
- Prílohy sa stiahnu do vášho trezora pomocou nastavení vášho trezora.

## Obmedzenia

> [!info] Import z Airtable je nový
> Importér Airtable je nový. Ak narazíte na problémy s konverziou, [odošlite hlásenie o chybe](https://github.com/obsidianmd/obsidian-importer/issues), aby sme ho mohli vylepšiť.

Kvôli limitom rýchlosti Airtable API môže import veľkých báz trvať značný čas. Prosím, buďte trpezliví.

Kvôli obmedzeniam Airtable API nie sú niektoré dáta dostupné alebo ich nemožno konvertovať:

- Hodnoty súhrnov (rollup) sa neimportujú. API neodhaľuje agregáciu použitú pre vypočítanú hodnotu súhrnu, takže sa zapíše iba názov vlastnosti spolu so vzorcom Databázy, ak schéma poľa obsahuje výraz.
- Vzorce používajúce funkcie, pre ktoré Obsidian nemá ekvivalent, ako napríklad `SWITCH`, `FIND`, `REGEX_EXTRACT` a `SQRT`, sa vrátia k statickej hodnote z Airtable.
- Importujú sa iba zobrazenia grid, gallery a list. Ostatné typy zobrazení, ako kalendár, kanban, časová os a Gantt, sa ignorujú.
- Odkazy na záznamy v tabuľkách, ktoré ste nevybrali, sa stanú obyčajným názvom záznamu namiesto odkazu.
- Dizajny rozhraní, automatizácie, komentáre a história revízií sa neimportujú.
