---
permalink: publish/limitations
---
> [!tip] Medlemmer av vårt fantastiske fellesskap har funnet løsninger for noen av disse begrensningene. For mer informasjon, Besøk vår [Publish-ressurser](https://forum.obsidian.md/t/obsidian-publish-resources/74582)-tråd på Obsidian-forumet.

## Community-utvidelser

Obsidian Publish har Minimal støtte for [[Community-utvidelser]].

Utvidelser som gir utdata i rå Markdown, som Waypoint-utvidelsen, er kompatible med Publish fordi de ikke krever at applikasjonen rendrer dataene deres.

Derimot vil en utvidelse som krever en utvidelseskodeblokk for å rendres, som Dataview eller Fantasy Statblocks, ikke fungere som standard i Publish.

## Graf

Publish tilbyr grunnleggende fargetilpasning for grafvisningen ved hjelp av CSS. Du kan endre nodefargene i `publish.css`-filen din ved å bruke [CSS-variabler for grafvisning](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Merk at den publiserte grafen ikke støtter de omfattende sorterings- og visningsalternativene som er tilgjengelige i applikasjonens [[Grafvisnining|grafvisning]].

## Mediefiler

Obsidian Publish er ikke optimalisert for strømming av video eller store lydfiler. Vi inkluderer noen beste praksiser for håndtering av [[Mediefiler|mediefilene]] dine i disse dokumentene.

For å forbedre opplevelsen for besøkende anbefaler vi at du i stedet bruker en videovertingstjeneste, som YouTube eller Vimeo.

Du kan laste opp filer **opptil 50 mb** i størrelse til Publish-nettstedet ditt. ^publish-media-limit

## PDF-er

På mobile enheter, nettbrett og datamaskiner med små skjermer kan du oppleve problemer der en innebygd PDF ikke lastes inn eller bare den første siden vises. Dette skyldes begrensninger med PDF-gjengiveren på mobile enheter.

For innhold rettet mot mobilbrukere anbefaler vi å tilby lenker til PDF-er som er lagret eksternt, eller inkludere interne lenker som lar brukere laste ned PDF-en direkte til enheten sin.

## Søk

Publish har grunnleggende støtte for å søke i ren tekst i publisert innhold. Preferanse for søkeresultater gis til:

- Filnavn
- Aliaser
- Overskriftsnavn

Etter å ha søkt gjennom de ovennevnte etter treff, vil søket deretter inkludere ren tekst fra de publiserte notatene.

For å forbedre søkbarheten til det publiserte nettstedet ditt, anbefales det å bruke beskrivende filnavn, inkorporere flere aliaser og velge overskriftsnavn som nøyaktig gjenspeiler innholdet.

I tillegg støtter Publish for øyeblikket ikke applikasjonens [[Søk#Bygg inn søkeresultater i et notat|innebygde søkeresultater]]-funksjon.
