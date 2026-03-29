---
permalink: plugins/note-composer
---
[[Kompozitor poznámek]] je [[Základní pluginy|základní plugin]], který umožňuje sloučit dvě poznámky nebo extrahovat část poznámky do nové poznámky.

## Sloučení poznámek

Sloučení poznámek přidá jednu poznámku k druhé a první odstraní. Kompozitor poznámek aktualizuje všechny odkazy tak, aby odkazovaly na sloučenou poznámku.

Při výběru poznámky, do které chcete sloučit, si můžete vybrat z následujících metod:

- `Enter`: Přidá zdrojovou poznámku na _konec_ cílové poznámky.
- `Shift+Enter`: Přidá zdrojovou poznámku na _začátek_ cílové poznámky.
- `Ctrl+Enter` (nebo `Cmd+Enter` na macOS): Vytvoří novou poznámku s obsahem zdrojové poznámky.

Sloučení aktivní poznámky s jinou poznámkou v trezoru:

**Průzkumník souborů**

1. V Průzkumníku souborů klikněte pravým tlačítkem na poznámku, kterou chcete sloučit.
2. Klikněte na **Sloučit celý soubor s…**.
3. Vyberte poznámku, do které chcete sloučit.
4. Klikněte na **Sloučit** pro potvrzení.

**Paleta příkazů**

1. Otevřete [[Paleta příkazů|paletu příkazů]].
2. Vyberte **Kompozitor poznámek: Sloučit aktuální soubor s jiným souborem…**.
3. Vyberte poznámku, do které chcete sloučit.
4. Klikněte na **Sloučit** pro potvrzení.

> [!tip] Tip
> Ve výchozím nastavení vás Kompozitor poznámek požádá o potvrzení při slučování poznámek. Pokud potvrzení vypnete a sloučíte poznámku omylem, stále ji můžete obnovit pomocí pluginu [[Obnovení souborů]].

## Extrahování poznámky

Při výběru poznámky, do které chcete extrahovat výběr, si můžete vybrat z následujících metod:

- `Enter`: Přidá vybraný text na _konec_ cílové poznámky.
- `Shift+Enter`: Přidá vybraný text na _začátek_ cílové poznámky.
- `Ctrl+Enter` (nebo `Cmd+Enter` na macOS): Vytvoří novou poznámku s vybraným textem.

Extrahování textu do nové poznámky:

**Editor**

1. V **Editoru** vyberte text, který chcete extrahovat.
2. Klikněte pravým tlačítkem na vybraný text.
3. Klikněte na **Extrahovat aktuální výběr...**.
4. Vyberte poznámku, do které chcete extrahovat.

**Paleta příkazů**

1. V **Editoru** vyberte text, který chcete extrahovat.
2. Otevřete [[Paleta příkazů|paletu příkazů]].
3. Vyberte **Kompozitor poznámek: Extrahovat aktuální výběr...**.
4. Vyberte poznámku, do které chcete extrahovat.

> [!tip] Tip
> Ve výchozím nastavení Kompozitor poznámek nahradí extrahovaný text odkazem na cílovou poznámku. V nastavení můžete také změnit chování tak, aby místo toho do cílové poznámky vložil [[Vkládání souborů|embed]], nebo aby na místě nezůstalo nic.

## Soubor šablony

Konfigurací šablony můžete přizpůsobit obsah před jeho přidáním do nové poznámky. Pro použití šablony zadejte **Umístění souboru šablony** v nastavení pluginu.

Šablona může obsahovat následující proměnné:

| Proměnná          | Popis                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Obsah pro sloučení nebo extrahovaný vybraný text. Pokud tuto proměnnou nezahrnete, Kompozitor poznámek přidá obsah na konec šablony. |
| `{{fromTitle}}`   | Název zdrojové poznámky.                                                                                                                                 |
| `{{newTitle}}`    | Název cílové poznámky. Například pro přidání názvu souboru jako nadpisu na začátek souboru.                                                     |
| `{{date:FORMAT}}` | Datum vytvoření nové poznámky. Například `{{date:YYYY-MM-DD}}`.                                                                                       |
