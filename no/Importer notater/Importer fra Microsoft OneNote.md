---
permalink: import/onenote
---
Obsidian lar deg enkelt migrere notatene dine fra Microsoft OneNote ved hjelp av [[Markdown-importør|Importer-tillegget]]. Dette vil konvertere OneNote-dataene dine til varige Markdown-filer som du kan bruke med Obsidian og mange andre apper.

Obsidian tilbyr to måter å importere OneNote-dataene dine på:

1. **Microsoft-konto** logger inn på Microsoft-kontoen din og importerer notatbøkene som er synkronisert til OneDrive. Krever internettforbindelse.
2. **Filimport** bruker OneNotes eksportfiler (`.onepkg` og `.one`). Krever ingen konto eller internettforbindelse, og fungerer for notatbøker som aldri ble synkronisert.

## Importer fra Microsoft-kontoen din

> [!Warning]
> Bare notatbøker som eies av kontoen din kan importeres. Notatbøker som andre har delt med deg støttes ikke, og en jobb- eller skolekonto kan kreve at organisasjonen din godkjenner tilgang.

Du trenger det offisielle Obsidian [[Markdown-importør]]-tillegget, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-tillegget.
4. Åpne **Importer**-tillegget ved hjelp av kommandopaletten eller verktøylinjeikonet.
5. Under **Filformat** velg **Microsoft OneNote**.
6. Klikk **Logg inn** for å åpne nettleseren din til Microsofts påloggingsside. Skriv inn legitimasjonen for Microsoft-kontoen din som inneholder OneNote-notatbøkene dine. Mer informasjon om Microsofts påloggingsprosess er tilgjengelig nedenfor.
7. Klikk **Godta** for å gi Obsidian tillatelse til å se OneNote-notatbøkene dine.
8. Klikk **Åpne lenke** for å la nettleseren omdirigere deg til Obsidian-appen.
9. I Obsidian-appen vil Importer-dialogen nå vise at du er logget inn og liste opp OneNote-notatbøkene og -seksjonene dine. Merk av seksjonene du ønsker å importere.
10. Klikk **Importer** og vent til importen er fullført.
11. Du er ferdig!

Hvis notatbøkene dine tilhører en jobb- eller skolekonto, kan OneNote nekte tillegget tilgang til dem etter at du logger inn. Når det skjer, vises en **Bruk jobb- eller skoletilgang**-knapp ved siden av **Logg ut**. Bruk den til å logge inn igjen med den utvidede tillatelsen disse kontoene trenger. Organisasjonen din må kanskje godkjenne den tillatelsen før den fungerer.

### Feilsøking

#### Ingen seksjoner eller notatbøker vises

Sørg for at notatbøkene du prøver å importere er synkronisert til OneDrive og synlige i OneNote Web. De må eies av deg (delte notatbøker skrevet av andre støttes ikke).

Hvis en bestemt seksjon mangler, sørg for at den ikke er en låst seksjon, da disse er usynlige uten å fjerne låsen først.

Hvis det er en jobb- eller skolenotatbok, se merknaden om **Bruk jobb- eller skoletilgang** ovenfor.

#### Importerte notater er tomme eller mangler innhold

Dette problemet kan oppstå med notatbøker du sjelden bruker. For å løse problemet, følg disse trinnene:

1. Åpne [OneNote Web](https://onenote.com/notebooks) i nettleseren din.
2. **Høyreklikk** på notatbøkene som mangler innhold.
3. Velg **Eksporter notatbok** fra menyen.
4. **Pakk ut** filen du nettopp lastet ned til en mappe.
5. Last opp OneNote-notatbøkene dine [her](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Åpne **Obsidian Importer** og prøv å importere på nytt.

Hvis du har fulgt disse tipsene og problemet ditt fortsatt ikke er løst, er det mulig at det er et midlertidig problem med Microsofts servere. Hvis det er tilfellet, vent noen minutter og prøv igjen. Hvis problemet vedvarer, vennligst opprett en sak på [Obsidian Importer GitHub-repositoriet](https://github.com/obsidianmd/obsidian-importer/issues).

## Importer OneNote-filer (.one, .onepkg)

Filimport er en alternativ måte å importere OneNote-dataene dine på. Den leser eksportfilene som OneNote selv skriver, så den trenger ingen Microsoft-konto og ingen internettforbindelse. Bruk den for notatbøker som bare er lagret på datamaskinen din, notatbøker kontoen din ikke kan nå, eller når du foretrekker å ikke logge inn.

### Eksporter notatbøkene dine fra OneNote

Vi anbefaler å eksportere hver notatbok som en **OneNote-pakke** (`.onepkg`). Én pakke inneholder alle seksjoner i notatboken, slik at du kan eksportere og importere en notatbok i ett enkelt trinn, og Importer vil liste opp seksjonene slik at du kan velge blant dem.

Eksport er bare tilgjengelig i **OneNote for Windows**, skrivebordsappen som følger med Microsoft 365. OneNote-appen for Mac og den eldre OneNote for Windows 10-appen kan ikke eksportere til disse formatene.

1. Åpne notatboken du vil eksportere i OneNote for Windows.
2. Gå til **Fil → Eksporter**.
3. Under **Eksporter gjeldende** velg **Notatbok**.
4. Under **Velg format** velg **OneNote-pakke (\*.onepkg)**.
5. Klikk **Eksporter** og velg hvor filen skal lagres.
6. Gjenta for hver notatbok du vil importere.

For å eksportere en enkelt seksjon i stedet, velg **Seksjon** i trinn 3 og **OneNote 2010-2016-seksjon (\*.one)** i trinn 4.

Du kan også importere seksjonsfilene som OneNote allerede har på disken, uten å eksportere noe:

- Notatbøker lagret på datamaskinen din er i `Documents\OneNote Notebooks`, én `.one`-fil per seksjon.
- Sikkerhetskopier av synkroniserte notatbøker er i `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importer OneNote-filene dine

Du trenger det offisielle Obsidian [[Markdown-importør]]-tillegget, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åpne **[[Innstillinger]]**.
2. Gå til **Community-utvidelser** og [installer Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktiver Importer-tillegget.
4. Åpne **Importer**-tillegget ved hjelp av kommandopaletten eller verktøylinjeikonet.
5. Under **Filformat** velg **Microsoft OneNote (.one, .onepkg)**.
6. Velg `.onepkg`- og `.one`-filene du vil importere. Du kan velge mer enn én fil om gangen, slik at alle notatbøkene dine kan importeres sammen.
7. Under **Seksjoner å importere** listes seksjonene som finnes i disse filene, med alt avmerket. Fjern avmerkingen for alt du ikke ønsker.
8. Velg eventuelt en **Utdatamappe** for importen, hvor vedleggene skal lagres, og hva som skal skje med **Eksisterende notater** hvis du importerer samme notatbok igjen.
9. Klikk **Importer** og vent til importen er fullført.
10. Du er ferdig!

Hver seksjon blir en mappe, og hver side i den blir et notat. En underside lagres i en mappe oppkalt etter siden over den, noe som beholder strukturen OneNote viste og hindrer at to undersider med samme navn kolliderer. Sider i notatbokens papirkurv importeres ikke.

### Begrensninger

- Passordbeskyttede seksjoner er lagret kryptert, og sidene deres hoppes over. Fjern passordet i OneNote og eksporter på nytt for å importere dem.
- Rettighetsbeskyttede filer kan bare åpnes av en konto som policyen tillater, og kan ikke leses av Importer.

## Personvern

Hvis du velger å importere ved hjelp av Microsoft-kontoen din, bruker Obsidian Importer-tillegget [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) for å autentisere og importere OneNote-notatbøkene dine. Dette gir et korttids tilgangstoken til kontoen din som bare brukes fra datamaskinen din og aldri lagres. Etter at importen er fullført kan du valgfritt tilbakekalle tokenet fra [Microsofts apper og tjenester-siden](https://account.live.com/consent/Manage).

Filimport kobler aldri til Microsoft: filene du velger leses på datamaskinen din, uten noen nettverksforbindelse.
