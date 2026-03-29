---
permalink: publish/sites
---
Denne siden forklarer hvordan du administrerer [[Introduksjon til Obsidian Publish|Obsidian Publish]]-nettsteder.

Et nettsted er en samling notater som er vert for Obsidian Publish og tilgjengelig på nettet, enten gjennom en Obsidian Publish-adresse eller et [[Egendefinerte domener|egendefinert domene]].

## Opprett et nytt nettsted

> [!note] Antall nettsteder du kan ha samtidig bestemmes av Obsidian Publish-abonnementet ditt. Før du oppretter et nytt nettsted, sørg for at abonnementet ditt tillater det.

1. I verktøylinjen, til venstre i programvinduet, klikk **Publiser endringer** ![[lucide-send.svg#icon]].
2. Hvis du allerede har et eksisterende nettsted, klikk **Bytt nettsted** ![[lucide-repeat.svg#icon]].
3. I **Nettsted-ID**, skriv inn banen du ønsker for nettstedet ditt. For eksempel, et nettsted med ID-en `my-amazing-site` er tilgjengelig fra publish.obsidian.md/my-amazing-site.
4. Klikk **Opprett**.

## Slett et eksisterende nettsted

> [!note] Notater forblir i hvelvet ditt selv etter at du sletter et nettsted.

1. I verktøylinjen, til venstre i programvinduet, klikk **Publiser endringer** ![[lucide-send.svg#icon]].
2. Klikk **Bytt nettsted** ![[lucide-repeat.svg#icon]].
3. Klikk **Slett nettsted** ![[lucide-x.svg#icon]] til høyre for nettstedet du vil slette.
4. Klikk **Slett** for å bekrefte.

## Bytt mellom nettsteder

1. I verktøylinjen, til venstre i programvinduet, klikk **Publiser endringer** ![[lucide-send.svg#icon]].
2. Klikk **Bytt nettsted** ![[lucide-repeat.svg#icon]].
3. Klikk **Velg** til høyre for nettstedet du vil bytte til.

## Endre nettsted-ID

1. I verktøylinjen, til venstre i programvinduet, klikk **Publiser endringer** ![[lucide-send.svg#icon]].
2. Klikk **Bytt nettsted** ![[lucide-repeat.svg#icon]].
3. Klikk **Rediger nettsted-ID** ![[lucide-edit-3.svg#icon]] til høyre for nettstedet du vil redigere.
4. I **Nettsted-ID**, skriv inn den nye ID-en for nettstedet ditt.
5. Klikk **Endre**.

## Vis nettstedsalternativer

1. I verktøylinjen, til venstre i programvinduet, klikk **Publiser endringer** ![[lucide-send.svg#icon]].
2. I dialogboksen **Publiser endringer**, klikk **Endre nettstedsalternativer** ![[lucide-cog.svg#icon]].

## Nettstedsalternativer

### Generelt

| Alternativ                              | Type    | Beskrivelse                                                                                                                         |
| --------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Nettstedsnavn                           | Inndata | Det offentlige navnet og tittelen på Obsidian Publish-nettstedet ditt.                                                              |
| Hjemmesidefil                           | Inndata | Plasseringen av Markdown-filen du vil bruke som landingsside.                                                                       |
| Logo                                    | Inndata | Bildet du vil bruke som nettstedsbanner. Bildet må [[Publiser innholdet ditt#Publiser notater\|være publisert]].                    |
| Samarbeid på nettsted                   | Knapp   | Angi andre brukere du vil gi tilgang til å redigere de publiserte notatene dine. Brukere må ha en Obsidian-konto.                   |
| Egendefinert domene                     | Knapp   | [[Egendefinerte domener]]                                                                                                           |
| Ikke tillat indeksering av søkemotorer  | Bryter  | Hindre respektfulle søkemotorer fra å gjennomgå nettstedet ditt ved å legge til en `robots.txt`-fil.                                |

### Utseende

| Alternativ         | Type         | Beskrivelse                                                                                                  |
|--------------------|--------------|--------------------------------------------------------------------------------------------------------------|
| Tema               | Rullegardin  | Velg hvordan temaet vises på nettstedet ditt; **Lys**, **Mørk**, eller **Tilpass til systemet**.             |
| Bytt lys/mørk      | Bryter       | Tillat brukere å veksle mellom **Lys**/**Mørk** modus med en veksleknapp på nettstedet ditt.                |

## Leseopplevelse

| Alternativ              | Type   | Beskrivelse                                                                                                          |
|-------------------------|--------|----------------------------------------------------------------------------------------------------------------------|
| Vis hover-forhåndsvisning | Bryter | Aktiver eller deaktiver forhåndsvisning av notat når du holder musepekeren over en aktiv, intern lenke.              |
| Skjul sidetittel         | Bryter | Aktiver eller deaktiver visning av den innebygde tittelen til et publisert notat.                                    |
| Lesbar linjelengde       | Bryter | Aktiver eller deaktiver lesbar linjelengde på nettstedet ditt.                                                       |
| Nøye linjeskift          | Bryter | Aktiver eller deaktiver visning av enkle linjeskift på nettstedet ditt.                                              |
| Use sliding windows      | Bryter | Aktiver eller deaktiver [[Faner#Stable fanegrupper\|Stablede faner]] på nettstedet ditt.                            |

### Komponenter

| Alternativ              | Type   | Beskrivelse                                                                                                                                            |
|-------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Vis navigasjon          | Bryter | Aktiver eller deaktiver [[Filutforsker]]-visningen på publiseringsnettstedet ditt.                                                                     |
| Tilpass navigasjon      | Knapp  | [[Tilpass nettstedet ditt#Tilpass navigasjon\|Tilpass]] rekkefølgen på filene dine hvis **Vis navigasjon** er aktivert.                                 |
| Vis søkefelt            | Bryter | Aktiver eller deaktiver et søkefelt på nettstedet ditt.                                                                                                |
| Vis grafvisning         | Bryter | Aktiver eller deaktiver grafvisningen i høyre sidefelt på nettstedet ditt.                                                                             |
| Vis innholdsfortegnelse | Bryter | Aktiver eller deaktiver [[Disposisjon\|Innholdsfortegnelse]]-visningen på nettstedet ditt.                                                             |
| Vis tilbakelenker       | Bryter | Aktiver eller deaktiver [[Lenker tilbake]] på nettstedet ditt.                                                                                         |

### Andre nettstedsinnstillinger

| Alternativ                         | Type   | Beskrivelse                                                                                                                         |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Passord                            | Knapp  | [[Obsidian Publish/Sikkerhet og personvern#Legg til et nettstedspassord\|Angi et passord]] for å begrense tilgangen til hele nettstedet ditt. |
| Google Analytics-sporingskode      | Inndata | **Kun egendefinert domene-URL**. Plasser Google Analytics-sporingskoden for nettstedet ditt her.                                    |
