---
permalink: publish/limitations
---
> [!tip] Medlemmer af vores fantastiske fællesskab har fundet løsninger på nogle af disse begrænsninger. For mere information, besøg venligst vores [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) tråd på Obsidian-forummerne.

## Fællesskabsplugins

Obsidian Publish har minimal understøttelse af [[Fællesskabsplugins]].

Plugins, der udskriver rå Markdown, såsom Waypoint-pluginet, er kompatible med Publish, fordi de ikke kræver applikationen til at gengive deres data.

Hvorimod et plugin, der kræver en plugin-kodeblok for at gengive, såsom Dataview eller Fantasy Statblocks, ikke vil fungere som standard i Publish.

## Graf

Publish tilbyder grundlæggende farvetilpasning til sin grafvisning ved hjælp af CSS. Du kan ændre nodefarverne i din `publish.css`-fil ved at bruge [Graph View CSS-variabler](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Bemærk, at den udgivne graf ikke understøtter de omfattende sorterings- og visningsmuligheder, der er tilgængelige i applikationens [[Grafvisning]].

## Mediefiler

Obsidian Publish er ikke optimeret til streaming af video eller store lydfiler. Vi inkluderer nogle bedste praksisser for håndtering af dine [[Mediefiler|mediefiler]] i disse dokumenter.

For at forbedre oplevelsen for dine besøgende anbefaler vi, at du i stedet bruger en videohostingtjeneste, såsom YouTube eller Vimeo.

Du kan uploade filer **op til 50 mb** i størrelse til dit Publish-websted. ^publish-media-limit

## PDF'er

På mobile enheder, tablets og computere med små skærme kan du opleve problemer, hvor en indlejret PDF ikke indlæses, eller kun den første side vises. Dette skyldes begrænsninger med PDF-gengiveren på mobile enheder.

For indhold rettet mod mobilbrugere foreslår vi at levere links til PDF'er hostet eksternt eller inkludere interne links, der giver brugerne mulighed for at hente PDF'en direkte til deres enhed.

## Søgning

Publish har grundlæggende understøttelse af søgning i almindelig tekst i udgivet indhold. Præference for søgeresultater gives til:

- Filnavne
- Aliasser
- Overskriftsnavne

Efter at have søgt i ovenstående for matches vil søgningen derefter inkludere almindelig tekst fra de udgivne noter.

For at forbedre søgbarheden af dit udgivne websted anbefales det at bruge beskrivende filnavne, inkorporere flere aliasser og vælge overskriftsnavne, der nøjagtigt afspejler indholdet.

Derudover understøtter Publish i øjeblikket ikke applikationens [[Søg#Indlejr søgeresultater i en note|indlejrede søgeresultater]]-funktion.
