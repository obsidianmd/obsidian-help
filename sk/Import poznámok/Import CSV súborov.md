---
permalink: import/csv
cssclasses:
  - soft-embed
---
Obsidian vám umožňuje importovať dáta z CSV súborov pomocou oficiálneho [[Importér|pluginu Importér]]. Je to užitočné, ak máte tabuľkové dáta uložené v aplikáciách ako Excel, Google Sheets, Numbers, Notion alebo Airtable.

Import CSV generuje Markdown súbory pre každý riadok a súbor [[Úvod do Databáz|Databázy]], ktorý zobrazí všetky importované súbory ako tabuľku.

Ak importujete poznámky z konkrétnej aplikácie, možno budete chcieť najprv skontrolovať zoznam aplikácií podporovaných [[Importér|pluginom Importér]], aby ste zistili, či existuje špecifický konvertor, ktorý lepšie zachová dáta, ktoré migrujete.

## Vytvorenie poznámok z CSV dát v Obsidian

Budete potrebovať oficiálny plugin Obsidian [[Importér]], ktorý si môžete [nainštalovať tu](obsidian://show-plugin?id=obsidian-importer).

1. Otvorte **[[Nastavenia]]**.
2. Prejdite na **Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapnite plugin Importér.
4. Otvorte plugin **Importér** pomocou palety príkazov alebo ikony na paneli nástrojov.
5. Pod **Formátovať súbor** vyberte **CSV (.csv).**
6. Vyberte umiestnenie vášho CSV súboru.
7. Vyberte **Import** na konfiguráciu toho, ako budú dáta vo vašom CSV súbore konvertované na poznámky s [[Vlastnosti|vlastnosťami]].
8. Vyberte **Pokračovať** na kontrolu vygenerovanej šablóny a náhľad príkladov z vašich riadkov.
9. Vyberte **Import** a počkajte, kým sa import dokončí.

## Konfigurácia spôsobu importu CSV polí

V kroku konfigurácie polí si môžete vybrať, ako sa dáta importujú. Importér vygeneruje šablónu z hlavičiek CSV, použije prvý stĺpec pre počiatočný názov poznámky a vytvorí vlastnosť pre každý stĺpec.

## Šablóny

Použite [[Šablóny importéra|Šablóny importéra]] na úplnú konfiguráciu spôsobu importu vašich dát.

Každý stĺpec CSV je dostupný pomocou jeho hlavičky. Ak stĺpec nemá hlavičku, Importér použije jeho vygenerovaný názov stĺpca.

Použite zátvorkovú notáciu, aby sa medzery a interpunkcia spracovali bezpečne:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Šablóny importéra#Premenné]]
