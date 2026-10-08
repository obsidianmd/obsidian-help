---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian vám umožňuje snadno importovat jednotlivé HTML soubory i celé složky HTML souborů pomocí oficiálního [[Importér|pluginu Importér]]. To je užitečné, pokud chcete uložit celé webové stránky do formátu [[Obsidian Flavored Markdown|Markdown]], nebo pokud chcete importovat data z nástroje, který exportuje do HTML.

Pokud importujete poznámky z konkrétní aplikace, možná budete chtít nejprve prohlédnout seznam aplikací podporovaných [[Importér|pluginem Importér]] a ověřit, zda existuje specifický konvertor, který lépe zachová data, která migrujete.

## Import HTML dat do Obsidian

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V části **Formát** zvolte **HTML (.html).**
6. Vyberte umístění vašich HTML souborů nebo složek.
7. Klikněte na **Importovat** pro kontrolu vygenerované šablony a náhled příkladů z vašich souborů.
8. Klikněte znovu na **Importovat** a počkejte, dokud nebude import dokončen.

### Nastavení importu

- **Limit velikosti příloh**: Přeskočí import příloh větších než zadaná velikost.
- **Minimální velikost obrázku**: Přeskočí import obrázků menších než zadaná velikost v kterémkoli rozměru. Lze použít k přeskočení ikon a log.

## Šablony

Použijte [[Šablony importéru|šablony Importéru]] pro úplnou konfiguraci způsobu importu vašich dat.

![[Šablony importéru#Variables]]

Kromě toho importy HTML poskytují mnoho stejných proměnných jako [[Úvod do Obsidian Web Clipper|Web Clipper]]:

| Proměnná | Popis |
| --- | --- |
| `{{author}}` | Autor stránky. |
| `{{contentHtml}}` | Extrahovaný obsah stránky ve formátu HTML. |
| `{{description}}` | Popis nebo výňatek stránky. |
| `{{domain}}` | Doména stránky. |
| `{{favicon}}` | URL faviconu. |
| `{{fullHtml}}` | Nezpracované HTML celé stránky. |
| `{{image}}` | URL obrázku pro sdílení na sociálních sítích. |
| `{{language}}` | Jazyk stránky. |
| `{{published}}` | Datum publikování, které lze formátovat pomocí filtru `date`. |
| `{{site}}` | Název webu nebo vydavatele. |
| `{{url}}` | Zdrojová URL nalezená v importovaném dokumentu, pokud je k dispozici. |
| `{{words}}` | Počet slov. |
