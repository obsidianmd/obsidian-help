---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian vám umožňuje migrovat vaše poznámky ze Samsung Notes pomocí [[Importér|pluginu Importér]]. Tento nástroj převede vaše poznámky do odolných Markdown souborů, které můžete používat s Obsidian a mnoha dalšími aplikacemi.

## Export poznámek ze Samsung Notes

Samsung Notes ukládá každou poznámku jako soubor Samsung Notes (`.sdocx`).

1. Otevřete Samsung Notes na svém telefonu nebo tabletu.
2. Dlouze podržte poznámku a poté vyberte všechny poznámky, které chcete exportovat.
3. Klepněte na **Uložit jako soubor** a poté zvolte **Samsung Notes file**.
4. Vyberte složku a klepněte na **Uložit**.
5. Přesuňte soubory `.sdocx` na zařízení, kde používáte Obsidian, například pomocí USB kabelu, Quick Share nebo cloudového úložiště.

Pokud máte mnoho souborů, můžete je vložit do souboru `.zip` a importovat ten. Samsung Notes nezahrnuje své složky do souborů, které ukládá, ale Importér zachovává složky uvnitř souboru `.zip`. Abyste si poznámky udrželi uspořádané, uložte poznámky z každé složky Samsung Notes do složky se stejným názvem, než je zazipujete.

## Import dat Samsung Notes do Obsidian

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V položce **Formát souborů** zvolte **Samsung Notes (.sdocx)**.
6. Vyberte své soubory `.sdocx` nebo soubor `.zip`, který je obsahuje.
7. Vyberte **Import** pro kontrolu vygenerované šablony a náhled příkladů z vašich poznámek.
8. Znovu vyberte **Import** a počkejte na dokončení importu.

## Omezení

- Ručně psaný text a kreslené tvary se importují jako SVG obrázek na konci poznámky. Tahy si zachovávají svůj tvar a barvu, ale ne proměnlivou šířku pera citlivého na tlak. Tvary a čáry se importují černě.
- Textová pole, obrázky umístěné na stránce a anotované PDF soubory zatím nejsou importovány.
- Položky kontrolního seznamu se importují jako nezaškrtnuté.
- Barvy textu, písma a velikosti písma se nezachovávají.
- Před exportem odemkněte zamčené poznámky v Samsung Notes.

## Šablony

Použijte [[Šablony importéru|Šablony importéru]] pro úplné nastavení způsobu importu vašich dat ze Samsung Notes.

![[Šablony importéru#Proměnné]]
