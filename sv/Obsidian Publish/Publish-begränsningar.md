---
permalink: publish/limitations
---
> [!tip] Medlemmar i vår fantastiska gemenskap har tagit fram lösningar för några av dessa begränsningar. För mer information, vänligen besök vår [Publish-resurser](https://forum.obsidian.md/t/obsidian-publish-resources/74582)-tråd på Obsidians forum.

## Gemenskapstillägg

Obsidian Publish har minimalt stöd för [[Gemenskapstillägg]].

Tillägg som producerar rå Markdown, som till exempel Waypoint-tillägget, är kompatibla med Publish eftersom de inte kräver appen för att rendera sin data.

Däremot kommer tillägg som kräver ett kodblock för att rendera, som Dataview eller Fantasy Statblocks, inte att fungera som standard i Publish.

## Graf

Publish erbjuder grundläggande färganpassning för sin grafvy med CSS. Du kan ändra nodfärgerna i din `publish.css`-fil genom att använda [CSS-variablerna för grafvy](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Observera att den publicerade grafen inte stöder de omfattande sorterings- och visningsalternativ som finns tillgängliga i appens [[Grafvy]].

## Mediefiler

Obsidian Publish är inte optimerat för strömning av video eller stora ljudfiler. Vi inkluderar några bästa praxis för hantering av dina [[Mediefiler|mediefiler]] i dessa dokument.

För att förbättra upplevelsen för dina besökare rekommenderar vi att du istället använder en videovärdtjänst, som YouTube eller Vimeo.

Du kan ladda upp filer **upp till 50 mb** i storlek till din Publish-webbplats. ^publish-media-limit

## PDF:er

På mobila enheter, surfplattor och datorer med små skärmar kan du stöta på problem där en inbäddad PDF inte laddas eller bara den första sidan visas. Detta beror på begränsningar med PDF-renderaren på mobila enheter.

För innehåll riktat till mobilanvändare föreslår vi att du tillhandahåller länkar till externt värdade PDF:er eller inkluderar interna länkar som låter användare ladda ner PDF:en direkt till sin enhet.

## Sök

Publish har grundläggande stöd för att söka i oformaterad text i publicerat innehåll. Sökresultaten prioriteras efter:

- Filnamn
- Aliaser
- Rubriknamn

Efter att ha sökt igenom ovanstående efter träffar inkluderar sökningen sedan oformaterad text i de publicerade anteckningarna.

För att förbättra sökbarheten på din publicerade webbplats rekommenderas det att använda beskrivande filnamn, inkorporera flera aliaser och välja rubriknamn som korrekt återspeglar innehållet.

Dessutom stöder Publish för närvarande inte appens funktion för [[Sök#Bädda in sökresultat i en anteckning|inbäddade sökresultat]].
