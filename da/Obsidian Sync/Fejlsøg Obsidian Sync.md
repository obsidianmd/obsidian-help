Denne side gennemgår de mest almindelige problemer, du kan komme ud for, og hvordan du kan addressere dem.

## Konfliktløsninger

En konfliktløsning opstår, når du har lavet ændringer i den samme fil på to eller flere enheder imellem synkroniseringer. F. eks. kan du have foretaget ændringer i en fil på din computer, og før denne ændring når at blive uploaded, har du også ændret den samme fil på din mobil.

Konfliker opstår oftere, hvis du arbejder offline, da der er flere ændringer og længere perioder mellem synkroniseringer.

Når Obsidian Sync downloader en ny version af en fil, og finder ud af at der er konflikter med en lokal version, vil ændringer blive flettet ved hjælp af Googles diff-match-patch-algoritme.

> [!tip]
> For at finde ud af, hvornår konflikterne opstod, kan du vælge **Indstillinger** → **Synkroniser** → **Synkroniserinsaktivitet** → **Vis**. Tryk på "Kopier synkroniseingslog" og indsæt loggen fra udklipsholderen i en tom note. Derefter søger du efter "Merging conflicted file".

# Obsidian Sync slette en note, som jeg netop havde oprettet på to enheder

Obsidian Sync prøver generelt at håndtere [[#Konfliktløsninger|konflikter]] mellem enheder ved at flette indholdet mellem de konfliktende noter.

Desværre kan fletning af konfliktende noter skabe problemer for brugere, som åbner automatisk genererede daglige noter ved Obsidians opstart. Obsidian addresserer dette ved at lave en undtagelse, når to noter oprettes på forskellige enheder med få minutters mellemrum.

Obsidian Sync vil i et sådant tilfælde beholde den første note uden at flette med den anden. Du kan stadig gendanne den anden note ved hjælp af [[Filgenoprettelse]].

## Hvad betyder fejlen `vault limit exceeded`?

Din boks overstiger [[Begrænsninger#Hvor stor kan hver fjernboks blive?|maksimumstørrelsen på 10 GB]] .

Da vedhæftninger og versionshistorik bidrager til din boks totale størrelse, kan din boks overstige maksimumsstørrelsen selvom den faktiske størrelse af din boks er mindre end grænsen.

Sådan identificerer og fjerner du store filer fra boksen:

1. Åben **Indstillinger** → **Sync**
2. Undersøg mulighederne for, hvordan du kan reducere størrelsen af din boks under **Boks størrelsen har overskredet grænsen**
