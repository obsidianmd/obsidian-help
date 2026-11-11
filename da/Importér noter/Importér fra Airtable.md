---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian lader dig migrere dine data fra Airtable ved hjælp af [[Importér|Importér-pluginet]]. Dette vil konvertere dine Airtable-baser til holdbare Markdown-filer, som du kan bruge offline med Obsidian og mange andre applikationer.

Hver tabel bliver til en mappe med noter med én note per post, plus en [[Introduktion til Baser|Base]]-fil der genskaber tabellen og dens visninger. Fordi det bruger Airtable API'et, kræver import et personligt adgangstoken og en internetforbindelse.

## Opret et personligt Airtable-adgangstoken

For at få adgang til dine Airtable-data via API'et har du brug for et personligt adgangstoken. Dette trin tager cirka to minutter at gennemføre.

Tokenet er en lang streng af tal og bogstaver, der typisk starter med `pat...`, som giver dig mulighed for at hente dine data fra Airtable.

1. Log ind på Airtable og gå til siden [Personal access tokens](https://airtable.com/create/tokens) i dine kontoindstillinger.
2. Vælg **Create new token**.
3. Giv dit token et navn, f.eks. "Obsidian". Ethvert navn kan bruges.
4. Under **Scopes**, tilføj `data.records:read` og `schema.bases:read`.
5. Under **Access**, tilføj de baser du vil importere, eller vælg alle baser i et arbejdsområde.
6. Vælg **Create token**, derefter **Copy** tokenet.
7. Gem tokenet et sikkert sted som din adgangskodeadministrator.

Airtable viser kun tokenet én gang. Hvis du mister det, skal du oprette et nyt.

## Importér dine Airtable-data

Du skal bruge det officielle Obsidian [[Importér]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installer Importér](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importér-pluginet.
4. Åbn **Importér**-pluginet ved hjælp af kommandopaletten eller værktøjslinjeikonet.
5. Under **Filformat** vælg **Airtable**.
6. Under **Airtable Personal Access Token**, klik **Link...** for at tilføje en ny hemmelighed. For **ID** giv den et navn som `airtable`, og for **Hemmelighed** indsæt dit personlige adgangstoken.
7. Klik **Indlæs** for at gennemse dine baser, og vælg derefter de tabeller du vil importere.
8. Gennemse og rediger importindstillingerne.
9. Vælg **Importér** for at konfigurere, hvordan dine felter konverteres til noter med [[Egenskaber|egenskaber]].
10. Vælg **Fortsæt** for at gennemse den genererede skabelon og forhåndsvise eksempler fra dine poster.
11. Vælg **Importér** og vent til importen er fuldført.

## Importindstillinger

- **Konverter formler** — vælg om formel-, opslags-, rollup- og tællefelter omskrives som [[Formler|Baser-formler]], med tilbagefald til den værdi Airtable beregnede, når der ikke er noget tilsvarende, eller importeres som kun statiske værdier.
- **Hent vedhæftninger** — gem vedhæftningsfiler i din boks ved hjælp af dine indstillinger for vedhæftningsmappe og linkformat. Når det er deaktiveret, eller når en hentning fejler, linker noten til filens URL på Airtable i stedet.
- **Visningsegenskabsnavn** — egenskaben der registrerer, hvilke Airtable-visninger en post tilhører. Hver visning i den genererede base filtrerer på denne egenskab. Standard er `Views`.
- **Gem Airtable-post-ID** — tilføjer en `airtable-id`-egenskab, så fremtidige importer kan genkende poster, efter at deres noter er flyttet eller omdøbt.

## Konfigurer hvordan Airtable-felter importeres

I feltkonfigurationstrinnet kan du vælge, hvordan hvert felt importeres.

Som standard bliver hvert Airtable-felt en egenskab. Du kan omdøbe eller fjerne egenskaber og ændre deres værdier, før du fortsætter til skabelonforhåndsvisningen.

Hver tabels primære felt leverer standardnotenavnet. Du kan redigere notenavn-skabelonen fra forhåndsvisningstrinnet. Poster placeres altid i en mappe opkaldt efter deres tabel.

Se [[Importør-skabeloner]] for at tilpasse den genererede Markdown.

## Hvad der importeres

For en base ved navn `Projects` med en `Tasks`-tabel opretter importøren:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Én note per post, med det primære felt som notetitel og postens øvrige felter som [[Egenskaber|egenskaber]].
- En `.base`-fil per tabel, med hver Airtable-visning afbildet til en [[Visninger|Baser-visning]]:
	- **Grid** bliver en [[Tabelvisning]].
	- **Gallery** bliver [[Galleri]].
	- **List** bliver en [[Listevisning]].
	- **Kanban** bliver en [[Kanban-visning]] i Obsidian 1.14 og senere. Airtable oplyser ikke, hvilket felt en kanban er grupperet efter, så [[Kanban-visning#Gruppér kort i kolonner|vælg en egenskab at gruppere efter]] efter importen. En ny import bevarer dit valg.
- Airtable-felttyper afbildes til Obsidian-egenskabstyper uden at overskrive typer, du allerede har angivet.
- Linkede poster bliver til links til de tilsvarende noter.
- Vedhæftninger hentes ind i din boks ved hjælp af dine boksindstillinger.


## Begrænsninger

På grund af Airtable API-hastighedsgrænser kan import af store baser tage betydelig tid. Vær venligst tålmodig.

På grund af begrænsninger i Airtable API'et er nogle data ikke tilgængelige eller kan ikke konverteres:

- Rollup-værdier importeres ikke. API'et eksponerer ikke den aggregering, der bruges til en rollups beregnede værdi, så kun egenskabsnavnet skrives, sammen med en Baser-formel, hvor feltets skema eksponerer et udtryk.
- Formler der bruger funktioner, som Obsidian ikke har noget tilsvarende til, såsom `SWITCH`, `FIND`, `REGEX_EXTRACT` og `SQRT`, falder tilbage til den statiske værdi fra Airtable.
- Kun grid-, galleri-, liste- og kanban-visninger importeres. Andre visningstyper, såsom kalender, tidslinje og Gantt, ignoreres.
- Links til poster i tabeller, du ikke valgte, bliver postens almindelige titel i stedet for et link.
- Interface-designs, automatiseringer, kommentarer og revisionshistorik importeres ikke.

## Fejlfinding

Hvis du støder på problemer med konverteringen, [indsend en fejlrapport](https://github.com/obsidianmd/obsidian-importer/issues), så vi kan forbedre den.
