Der er nogle få forskelle mellem den måde de forskellige PKM- og notetagningssystemer fungerer på, hvilket betyder at det kan være lidt kompliceret at flytte data rundt mellem dem. Overordnet så vil alt, som kan konverteres til markdown virke fint i Obsidian. Men nogel ting, som f.eks. links, kan drille lidt.

På vores forum er der [et indlæg, som samler metoder til at importere data, som andre mennesker har lavet](https://forum.obsidian.md/t/meta-post-migration-workflows/768). Lige nu inkluderer det:

- [Import fra Notion](https://forum.obsidian.md/t/import-from-notion/636)
- [Import fra Notion (automatiseret)](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728)
- [Import fra Evernote](https://forum.obsidian.md/t/import-from-evernote/108)
- [Import fra OneNote](https://forum.obsidian.md/t/new-tool-for-migration-from-onenote-updated-and-improved-version/3055)
- [Import fra Apple Noter](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
- [Import fra Bear](https://forum.obsidian.md/t/import-from-bear-app/2284)
- [Import fra Zkn3](https://forum.obsidian.md/t/migrating-from-zkn3-to-obsidian-without-losing-your-tags-and-internal-links-documentation/7457)
- [Import fra TiddlyWiki 5](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)

Hvis du ikke kan se dit system på listen, så tjek efter i forum indlægget, om nogen har løst dit problem siden denne side blev skrevet.

Det skal også bemærkes, at udviklerne af nvUltra, en anden markdown baseret notetagnings applikation, har en liste på deres hjemmeside med [metoder til at eksportere til nvUltra](https://nvultra.com/help/importing). I mange tilfælde, vil disse metoder være de samme som for Obsidian, eller et godt sted at starte.

## Indbyggede værktøjer

### Fra Roam Research

Hvis du har data i Roam, er det nemt at eksportere det og flytte det rundt i Obsidian.

> 1. Vælg "Export all" i menuen i Roam:
> ![[Pasted image.png]]

> 2. Klik på den blå "Export all" knap:
> ![[Pasted image 1.png]]

> 3. Udpak "Roam-Export-xxxxxxxxxxxxx.zip" arkivet i en mappe på din computer.

> 4. Klik på boks (Værktøjstip siger "Åben en anden boks") iconet i nederste venstre hjørne i Obsidian, og vælg "Åben mappe som boks".
> Vælg den mappe du udpakkede dit Roam arkiv i.

> 5. Benyt det interne Obsidian plug-in [[Konverter Markdown filer]] til at konvertere Roam Researchs Markdown format til Obsidians format.
> Man kan konvertere `#tag` til Obsidian `[[links]]`.
> Den kan også konvertere `^^fremhævet^^` til `==fremhævet==`.

### Fra Bear

Hvis du importerer fra Bear kan du benytte det interne Obsidian [[Konverter Markdown filer]] plugins mulighed for at konvertere `::fremhævet::` to `==fremhævet==`.

### Benytte Zettelkasten

Hvis du benytter Zettelkasten metoden til at strukturere dine noter, så er her noget information, som du måske bør vide:

Links i Obsidian kræver en fuld match til navnet på noten. Dette betyder at `[[202001010000]]` ikke vil linke korrekt til  `[[202001010000 My Note]]`.

For at løse det, kan du benytte vores [[Konverter Markdown filer]] plugin til at konvertere dine Zettelkasten links til enten `[[202001010000 Min Note]]` or `[[202001010000 Min Note|Min Note]]`.

Du vil måske også være interesseret i vores [[Unik note opretter]] plugin.

