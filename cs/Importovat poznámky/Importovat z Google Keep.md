---
permalink: import/google-keep
---
Obsidian vám umožňuje snadno migrovat poznámky z Google Keep pomocí [[Importér|pluginu Importér]]. Ten převede vaše data z Google Keep do trvanlivých souborů Markdown, které můžete používat s Obsidian a mnoha dalšími aplikacemi.

## Export dat z Google Keep

1. Přejděte na [Google Takeout](https://takeout.google.com/settings/takeout) a přihlaste se ke svému účtu Google.
2. Klikněte na **Odznačit vše** v pravém horním rohu.
3. Přejděte dolů a ze seznamu vyberte **Keep**.
4. Přejděte na konec stránky a klikněte na **Následující krok**.
5. Na další obrazovce klikněte na tlačítko **Vytvořit export**.
6. Stáhněte soubor `.zip`, jakmile bude k dispozici.

## Import dat z Google Keep do Obsidian

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V poli **Formát** zvolte **Google Keep (.zip).**
6. Vyberte umístění vašeho souboru `.zip`.
7. Klikněte na **Importovat** a počkejte, až bude import dokončen.
8. A je to!

### Podporované funkce

- Všechny kontrolní seznamy budou importovány jako položky nejvyšší úrovně, protože Google Keep neexportuje informace o odsazení.
- Připomínky a přiřazení uživatelů k poznámkám nebudou importovány, protože tyto funkce Obsidian nepodporuje.
- Všechny ostatní informace by měly být importovány jako kombinace obsahu a štítků.
