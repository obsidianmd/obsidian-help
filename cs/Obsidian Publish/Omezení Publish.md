---
permalink: publish/limitations
---
> [!tip] Členové naší úžasné komunity vymysleli řešení pro některá z těchto omezení. Další informace najdete ve vláknu [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) na fóru Obsidian.

## Komunitní pluginy

Obsidian Publish má minimální podporu pro [[Komunitní pluginy]]. 

Pluginy, které vytvářejí výstup v surové Markdown syntaxi, jako například plugin Waypoint, jsou s Publish kompatibilní, protože nevyžadují aplikaci k vykreslení svých dat. 

Naproti tomu plugin, který vyžaduje blok kódu pluginu k vykreslení, jako Dataview nebo Fantasy Statblocks, nebude ve výchozím nastavení v Publish fungovat. 

## Graf

Publish nabízí základní přizpůsobení barev pro zobrazení grafu pomocí CSS. Barvy uzlů můžete upravit ve svém souboru `publish.css` pomocí [CSS proměnných zobrazení grafu](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Mějte na paměti, že publikovaný graf nepodporuje komplexní možnosti řazení a zobrazení dostupné v [[Graf|zobrazení grafu]] aplikace.

## Mediální soubory

Obsidian Publish není optimalizován pro streamování videa nebo velkých audio souborů. Některé osvědčené postupy pro práci s vašimi [[Mediální soubory|mediálními soubory]] uvádíme v těchto dokumentech. 

Pro zlepšení zážitku vašich návštěvníků doporučujeme místo toho použít službu pro hostování videa, jako je YouTube nebo Vimeo.

Na svou Publish stránku můžete nahrávat soubory o velikosti **až 50 MB**. ^publish-media-limit

## PDF

Na mobilních zařízeních, tabletech a počítačích s malými obrazovkami se můžete setkat s problémy, kdy se vložené PDF nenačte nebo se zobrazí pouze první stránka. To je způsobeno omezeními vykreslování PDF na mobilních zařízeních. 

Pro obsah určený mobilním uživatelům doporučujeme poskytovat odkazy na PDF hostované externě nebo uvádět interní odkazy, které uživatelům umožní stáhnout PDF přímo do jejich zařízení.

## Hledání

Publish má základní podporu pro vyhledávání prostého textu v publikovaném obsahu. Přednost ve výsledcích hledání je dávána:

- Názvům souborů
- Aliasům
- Názvům nadpisů

Po prohledání výše uvedeného jsou do výsledků hledání zahrnuty také texty publikovaných poznámek.

Pro zlepšení vyhledatelnosti vaší publikované stránky se doporučuje používat popisné názvy souborů, začlenit více aliasů a volit názvy nadpisů, které přesně odrážejí obsah.

Navíc Publish v současné době nepodporuje funkci [[Hledat#Vložení výsledků hledání do poznámky|vložených výsledků hledání]] aplikace.
