---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian vám umožňuje migrovať poznámky z Tomboy a Gnote pomocou oficiálneho [[Importér|pluginu Importér]]. Importér číta súbory `.note` priamo z aplikácií a konvertuje ich XML obsah do Markdown.

## Nájdite svoje súbory poznámok

Tomboy a Gnote štandardne ukladajú poznámky v týchto priečinkoch:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` alebo `~/.local/share/gnote`

Presné umiestnenie sa môže líšiť, ak ste presunuli dátový priečinok alebo používate inú verziu aplikácie.

## Importujte svoje poznámky z Tomboy alebo Gnote

1. Otvorte **[[Nastavenia]] → Komunitné pluginy** a [nainštalujte Importér](obsidian://show-plugin?id=obsidian-importer).
2. Zapnite plugin Importér.
3. Otvorte **Importér** pomocou [[Paleta príkazov|palety príkazov]] alebo ikony na paneli nástrojov.
4. V časti **Formát súboru** vyberte **Tomboy/Gnote (.note)**.
5. Vyberte jednotlivé súbory `.note` alebo priečinok, ktorý ich obsahuje.
6. Skontrolujte možnosti importu, vygenerovanú šablónu a ukážky náhľadov.
7. Vyberte **Importovať** a počkajte na dokončenie importu.

## Šablóny

Použite [[Šablóny importéra|šablóny importéra]] na úplnú konfiguráciu spôsobu importu vašich dát.

![[Šablóny importéra#Premenné]]
