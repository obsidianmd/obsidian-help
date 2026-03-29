---
permalink: import/csv
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
7. Kliknite na **Import** na konfiguráciu toho, ako budú dáta vo vašom CSV súbore konvertované na poznámky s [[Vlastnosti|vlastnosťami]].
8. Kliknite na **Pokračovať** a počkajte, kým sa import dokončí.
9. Hotovo!

## Konfigurácia spôsobu importu CSV polí

V druhom kroku importu CSV si môžete vybrať, ako sa dáta importujú pomocou šablóny.

Každému stĺpcu vo vašom CSV súbore je priradená premenná nazývaná `{{column_name}}`, ktorá predstavuje názov hlavičky vo vašom súbore. Túto premennú môžete použiť na definovanie nadpisu poznámky, umiestnenia, obsahu a [[Vlastnosti|vlastností]].
