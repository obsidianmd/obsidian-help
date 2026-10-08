---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian umožňuje migrovat poznámky z Tomboy a Gnote pomocí oficiálního [[Importér|pluginu Importér]]. Importér čte přímo soubory `.note` těchto aplikací a převádí jejich XML obsah do Markdown.

## Vyhledání souborů s poznámkami

Tomboy a Gnote obvykle ukládají poznámky do těchto složek:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` nebo `~/.local/share/gnote`

Přesné umístění se může lišit, pokud jste přesunuli datovou složku nebo používáte jinou verzi aplikace.

## Import poznámek z Tomboy nebo Gnote

1. Otevřete **[[Nastavení]] → Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
2. Zapněte plugin Importér.
3. Otevřete **Importér** pomocí [[Paleta příkazů|palety příkazů]] nebo ikony na postranním panelu nástrojů.
4. V položce **Formát souboru** vyberte **Tomboy/Gnote (.note)**.
5. Vyberte jednotlivé soubory `.note` nebo složku, která je obsahuje.
6. Zkontrolujte možnosti importu, vygenerovanou šablonu a náhledy příkladů.
7. Klikněte na **Import** a počkejte, až import skončí.

## Šablony

Použijte [[Šablony importéru|šablony importéru]] pro úplnou konfiguraci způsobu importu vašich dat.

![[Šablony importéru#Proměnné]]
