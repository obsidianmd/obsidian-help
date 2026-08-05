---
permalink: import/airtable
---
Obsidian lar deg migrere dataene dine fra Airtable ved hjelp av [[Importer|Importer-tillegget]]. Dette konverterer Airtable-basene dine til varige Markdown-filer som du kan bruke frakoblet med Obsidian og mange andre apper.

Hver tabell blir til en mappe med notater der hvert notat tilsvarer én post, pluss en [[Introduksjon til Bases|Base]]-fil som gjenskaper tabellen og dens visninger. Fordi den bruker Airtable API, krever import et personlig tilgangstoken og internettilkobling.

## Opprett et personlig tilgangstoken for Airtable

For å få tilgang til Airtable-dataene dine via API-et trenger du et personlig tilgangstoken. Dette steget tar omtrent 1 minutt å fullføre.

Tokenet er en lang streng med tall og bokstaver som vanligvis starter med `pat...` og som lar deg laste ned dataene dine fra Airtable.

1. Logg inn på Airtable og gå til [Personal access tokens](https://airtable.com/create/tokens)-siden i kontoinnstillingene dine.
2. Velg **Create new token**.
3. Gi tokenet ditt et navn, f.eks. «Obsidian». Hvilket som helst navn kan brukes.
4. Under **Scopes**, legg til `data.records:read` og `schema.bases:read`.
5. Under **Access**, legg til basene du vil importere, eller velg alle baser i et arbeidsområde.
6. Velg **Create token**, deretter **Copy** for å kopiere tokenet.
7. Lagre tokenet på et trygt sted, for eksempel i passordbehandleren din.

Airtable viser tokenet bare én gang. Hvis du mister det, opprett et nytt.

## Importer Airtable-dataene dine

Du trenger det offisielle Obsidian [[Importer]]-tillegget, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-tillegget.
4. Åpne **Importer**-tillegget ved hjelp av kommandopaletten eller verktøylinjeikonet.
5. Under **File format** velg **Airtable**.
6. Under **Airtable Personal Access Token**, klikk **Koble...** for å legge til en ny hemmelighet. For **ID**, gi den et navn som `airtable`, og for **Hemmelighet** lim inn ditt personlige tilgangstoken.
7. Klikk **Last inn** for å bla gjennom basene dine, og velg deretter tabellene du vil importere.
8. Gjennomgå og rediger importalternativene.
9. Velg **Import** for å konfigurere hvordan feltene dine konverteres til notater med [[Egenskaper|egenskaper]].
10. Klikk **Fortsett** og vent til importen er fullført.
11. Du er ferdig!

### Importalternativer

- **Convert formulas** — velg om formel-, oppslags-, opprullings- og tellefelt skrives om som [[Formler|Bases-formler]], med tilbakefall til verdien Airtable beregnet når det ikke finnes noe tilsvarende, eller importeres kun som statiske verdier.
- **Last ned vedlegg** — lagre vedleggsfiler i hvelvet ditt ved å bruke innstillingene dine for vedleggsmappe og lenkeformat. Når dette er deaktivert, eller når en nedlasting mislykkes, lenker notatet til filens URL på Airtable i stedet.
- **View property name** — egenskapen som registrerer hvilke Airtable-visninger en post tilhører. Hver visning i den genererte basen filtrerer på denne egenskapen. Standard er `base`.
- **Incremental import** — legger til en `airtable-id`-egenskap på hvert notat slik at en senere import kan hoppe over poster som allerede er importert. Ved en full import fjernes denne egenskapen igjen.

## Konfigurer hvordan Airtable-felt importeres

I det andre steget av importen kan du velge hvordan hvert felt importeres.

Hvert felt i tabellene dine tildeles en variabel kalt `{{field_name}}`. Som standard blir hvert felt en egenskap, og du kan bruke disse variablene til å gi egenskaper nytt navn, endre verdiene deres, eller skrive innhold i brødteksten til hvert notat.

Hvert tabells primærfelt brukes alltid som notattittel, og poster plasseres alltid i en mappe oppkalt etter tabellen deres, så disse alternativene kan ikke konfigureres.

## Hva som blir importert

For en base kalt `Projects` med en `Tasks`-tabell, oppretter importøren:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Ett notat per post, med primærfeltet som notattittel, og postens andre felt som [[Egenskaper|egenskaper]].
- En `.base`-fil per tabell, der hver Airtable-visning tilordnes en [[Visninger|Bases-visning]]:
	- **Grid** blir en [[Tabell-visning]].
	- **Gallery** blir [[Kort-visning]].
	- **List** blir en [[Liste-visning]].
	- Alle andre visningstyper konverteres til tabellvisning.
- Airtable-felttyper tilordnes Obsidian-egenskapstyper, uten å overstyre typer du allerede har angitt.
- Lenkede poster blir lenker til de tilsvarende notatene.
- Vedlegg lastes ned til hvelvet ditt i henhold til hvelvinnstillingene dine.

## Begrensninger

> [!info] Airtable-import er nytt
> Airtable-importøren er ny. Hvis du støter på problemer med konverteringen, [send inn en feilrapport](https://github.com/obsidianmd/obsidian-importer/issues) slik at vi kan forbedre den.

På grunn av Airtable API-hastighetsbegrensninger kan import av store baser ta betydelig tid. Vær tålmodig.

På grunn av begrensninger i Airtable API er noen data ikke tilgjengelige eller kan ikke konverteres:

- Opprullingsverdier importeres ikke. API-et eksponerer ikke aggregeringen som brukes for en opprullings beregnede verdi, så bare egenskapsnavnet skrives, sammen med en Bases-formel der feltets skjema eksponerer et uttrykk.
- Formler som bruker funksjoner Obsidian ikke har noe tilsvarende for, som `SWITCH`, `FIND`, `REGEX_EXTRACT` og `SQRT`, faller tilbake til den statiske verdien fra Airtable.
- Bare grid-, galleri- og listevisninger importeres. Andre visningstyper, som kalender, kanban, tidslinje og Gantt, ignoreres.
- Lenker til poster i tabeller du ikke valgte, blir postens rene tittel i stedet for en lenke.
- Grensesnittdesign, automatiseringer, kommentarer og revisjonshistorikk importeres ikke.
