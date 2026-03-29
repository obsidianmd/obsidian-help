---
permalink: import/apple-notes
---
Obsidian vám umožňuje snadno migrovat vaše poznámky z Apple Notes pomocí [[Importér|pluginu Importér]]. Ten převede vaše data z Apple Notes na trvanlivé Markdown soubory, které můžete používat s Obsidian a mnoha dalšími aplikacemi.

V současné době Importér podporuje migraci z Apple Notes pouze na macOS. Na iOS zatím není k dispozici.

## Importování dat z Apple Notes do Obsidian

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V části **Formát** vyberte **Apple Notes**.
6. Klikněte na **Importovat**.
7. Klikněte na **Otevřít** ve vyskakovacím okně s názvem `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Počkejte, dokud nebude import dokončen.
9. Hotovo!

## Podporovaný obsah

Plugin Obsidian Importér podporuje prakticky všechny typy obsahu Apple Notes. To zahrnuje tabulky, obrázky, kresby, skeny, PDF a odkazy zavedené v iOS 17.

> [!Warning]
> Poznámky chráněné heslem jsou šifrovány společností Apple, takže je před importem nutné je odemknout. Všechny zamknuté poznámky budou přeskočeny.

### Skeny

Apple ukládá skeny v různých formátech v závislosti na tom, jak byly vytvořeny. Pro zachování původních dat to znamená, že budou exportovány odlišně.

* Skeny vytvořené nebo zobrazené na starších verzích macOS nebo iOS budou exportovány jako série neoříznutých obrázků.
* Skeny vytvořené nebo zobrazené na novějších verzích macOS nebo iOS budou obvykle exportovány jako oříznuté obrázky.
* Skeny, které byly upraveny pomocí funkcí zavedených v iOS 17, budou obvykle exportovány jako PDF.

## Alternativní metody exportu

Apple neposkytuje nativní možnost exportu poznámek. Existuje však několik nástrojů třetích stran, jako je [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) od Chintana Ghateho. Mějte na paměti, že většina nástrojů je omezena v tom, jaká data z Apple Notes exportuje, a nemusí poskytovat nejkompatibilnější výstupní data. Tyto nástroje fungují nejlépe, pokud vaše poznámky v Apple Notes obsahují převážně text a mají málo příloh nebo speciálních funkcí, jako jsou kresby a skeny.

V závislosti na použitém nástroji může být export ve formátu Markdown nebo HTML. Postupujte podle pokynů na základě formátu souboru, do kterého jste exportovali:

- [[Importovat soubory HTML]]
- [[Importovat soubory Markdown]]
