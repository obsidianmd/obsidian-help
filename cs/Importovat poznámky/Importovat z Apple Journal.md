---
permalink: import/apple-journal
---
Obsidian vám umožňuje snadno migrovat záznamy z deníku Apple Journal pomocí [[Importér|pluginu Importér]].
Tím se vaše deníkové záznamy převedou na trvalé Markdown soubory, které můžete používat s Obsidian a mnoha dalšími aplikacemi.

## Export dat z Apple Journal

### Na iPhonu
Postupujte podle pokynů pro [Tisk a export záznamů v Deníku na iPhonu](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Přejděte do aplikace Deník na svém iPhonu.
2. Vyberte deník nebo klepněte na Všechny záznamy.
3. Klepněte na tlačítko Více v horní části obrazovky.
4. Klepněte na Exportovat a poté vyberte Exportovat.
5. Vyberte umístění a klepněte na tlačítko Vybráno.

### Na Macu (Tahoe)
Postupujte podle pokynů pro [Tisk a export záznamů v Deníku na Macu](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Přejděte do aplikace Deník na svém Macu.
2. Přejděte na Soubor > Exportovat a poté vyberte Exportovat.

## Import dat Apple Journal do Obsidian

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V poli **Formát souboru** vyberte **Apple Journal (HTML Export)**.
6. V poli **Soubory k importu** vyberte složku s exportovanými daty, obvykle _AppleJournalEntries_, nebo jednotlivé soubory ze složky _Entries_.
7. Zkontrolujte a upravte ostatní možnosti importu.
8. Vyberte Importovat a počkejte, až se import dokončí.
9. Hotovo!


## Podporovaný obsah

Plugin dokáže importovat metadata deníku jako úvodní metadata, například _state-of-mind_, _contacts_, _location_ a _workout-route_.

> [!note] Poznámka
> Plugin neimportuje prostředky. Přílohy jako fotografie, videa a zvukové nahrávky jsou ignorovány.
