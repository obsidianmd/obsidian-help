---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian lar deg migrere dataene dine fra Airtable ved hjelp av [[Importer|Importer-tillegget]]. Dette konverterer Airtable-basene dine til varige Markdown-filer som du kan bruke frakoblet med Obsidian og mange andre apper.

Hver tabell blir til en mappe med notater der hvert notat tilsvarer én post, pluss en [[Introduksjon til Bases|Base]]-fil som gjenskaper tabellen og dens visninger. Fordi den bruker Airtable API, krever import et personlig tilgangstoken og internettilkobling.

## Opprett et personlig tilgangstoken for Airtable

For å få tilgang til Airtable-dataene dine via API-et trenger du et personlig tilgangstoken. Dette steget tar omtrent to minutter å fullføre.

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
10. Velg **Fortsett** for å gjennomgå den genererte malen og forhåndsvise eksempler fra postene dine.
11. Velg **Import** og vent til importen er fullført.

## Importalternativer

- **Convert formulas** — velg om formel-, oppslags-, opprullings- og tellefelt skrives om som [[Formler|Bases-formler]], med tilbakefall til verdien Airtable beregnet når det ikke finnes noe tilsvarende, eller importeres kun som statiske verdier.
- **Last ned vedlegg** — lagre vedleggsfiler i hvelvet ditt ved å bruke innstillingene dine for vedleggsmappe og lenkeformat. Når dette er deaktivert, eller når en nedlasting mislykkes, lenker notatet til filens URL på Airtable i stedet.
- **View property name** — egenskapen som registrerer hvilke Airtable-visninger en post tilhører. Hver visning i den genererte basen filtrerer på denne egenskapen. Standard er `Views`.
- **Save Airtable record ID** — legger til en `airtable-id`-egenskap slik at fremtidige importer kan gjenkjenne poster etter at notatene deres er flyttet eller gitt nytt navn.

## Konfigurer hvordan Airtable-felt importeres

I feltkonfigurasjonssteget kan du velge hvordan hvert felt importeres.

Som standard blir hvert Airtable-felt en egenskap. Du kan gi egenskaper nytt navn, fjerne dem og endre verdiene deres før du fortsetter til malforhåndsvisningen.

Hvert tabells primærfelt brukes som standard notatnavn. Du kan redigere notatnavnmalen fra forhåndsvisningssteget. Poster plasseres alltid i en mappe oppkalt etter tabellen deres.

Se [[Importer-maler]] for å tilpasse den genererte Markdown-en.

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
	- **Kanban** blir en [[Kanban-visning]] i Obsidian 1.14 og senere. Airtable oppgir ikke hvilket felt en kanban er gruppert etter, så [[Kanban-visning#Grupper kort i kolonner|velg en egenskap å gruppere etter]] etter import. Ny import beholder valget ditt.
- Airtable-felttyper tilordnes Obsidian-egenskapstyper, uten å overstyre typer du allerede har angitt.
- Lenkede poster blir lenker til de tilsvarende notatene.
- Vedlegg lastes ned til hvelvet ditt i henhold til hvelvinnstillingene dine.


## Begrensninger

På grunn av Airtable API-hastighetsbegrensninger kan import av store baser ta betydelig tid. Vær tålmodig.

På grunn av begrensninger i Airtable API er noen data ikke tilgjengelige eller kan ikke konverteres:

- Opprullingsverdier importeres ikke. API-et eksponerer ikke aggregeringen som brukes for en opprullings beregnede verdi, så bare egenskapsnavnet skrives, sammen med en Bases-formel der feltets skjema eksponerer et uttrykk.
- Formler som bruker funksjoner Obsidian ikke har noe tilsvarende for, som `SWITCH`, `FIND`, `REGEX_EXTRACT` og `SQRT`, faller tilbake til den statiske verdien fra Airtable.
- Bare grid-, galleri-, liste- og kanban-visninger importeres. Andre visningstyper, som kalender, tidslinje og Gantt, ignoreres.
- Lenker til poster i tabeller du ikke valgte, blir postens rene tittel i stedet for en lenke.
- Grensesnittdesign, automatiseringer, kommentarer og revisjonshistorikk importeres ikke.

## Feilsøking

Hvis du støter på problemer med konverteringen, [send inn en feilrapport](https://github.com/obsidianmd/obsidian-importer/issues) slik at vi kan forbedre den.
