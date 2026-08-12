---
permalink: import/onenote
aliases:
  - Import fra Microsoft OneNote
  - Import af noter/Import fra Microsoft OneNote
---
Obsidian giver dig mulighed for nemt at migrere dine noter fra Microsoft OneNote ved hjælp af [[Importér|Importer-plugin'et]]. Dette vil konvertere dine OneNote-data til holdbare Markdown-filer, som du kan bruge med Obsidian og mange andre applikationer.

Obsidian tilbyder to måder at importere dine OneNote-data på:

1. **Microsoft-konto** logger ind på din Microsoft-konto og importerer de notesbøger, der er synkroniseret til OneDrive. Kræver en internetforbindelse.
2. **Filimport** bruger OneNotes eksportfiler (`.onepkg` og `.one`). Kræver ingen konto eller internetforbindelse og fungerer for notesbøger, der aldrig blev synkroniseret.

## Importér fra din Microsoft-konto

> [!Warning]
> Kun notesbøger, der ejes af din konto, kan importeres. Notesbøger, som andre har delt med dig, understøttes ikke, og en arbejds- eller skolekonto kan kræve, at din organisation godkender adgangen.

Du skal bruge det officielle Obsidian [[Importér]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-plugin'et.
4. Åbn **Importer**-plugin'et ved hjælp af kommandopaletten eller ikonet på værktøjslinjen.
5. Under **Filformat** vælg **Microsoft OneNote**.
6. Klik på **Log ind** for at åbne din webbrowser på Microsofts login-side. Indtast legitimationsoplysningerne for din Microsoft-konto, som indeholder dine OneNote-notesbøger. Mere information om Microsofts login-proces er tilgængelig nedenfor.
7. Klik på **Acceptér** for at give Obsidian tilladelse til at se dine OneNote-notesbøger.
8. Klik på **Åbn link** for at tillade din browser at omdirigere dig til Obsidian-applikationen.
9. I Obsidian-applikationen vil Importer-dialogen nu vise, at du er logget ind, og liste dine OneNote-notesbøger og sektioner. Markér de sektioner, du ønsker at importere.
10. Klik på **Importér** og vent, indtil importen er fuldført.
11. Du er færdig!

Hvis dine notesbøger tilhører en arbejds- eller skolekonto, kan OneNote nægte plugin'et adgang til dem, efter du logger ind. Når det sker, vises en **Brug arbejds- eller skoleadgang**-knap ved siden af **Log ud**. Brug den til at logge ind igen med den bredere tilladelse, disse konti kræver. Din organisation skal muligvis godkende tilladelsen, før den virker.

### Fejlfinding

#### Ingen sektioner eller notesbøger vises

Sørg for, at de notesbøger, du forsøger at importere, er synkroniseret til OneDrive og synlige i OneNote Web. De skal ejes af dig (delte notesbøger skrevet af andre understøttes ikke).

Hvis en bestemt sektion mangler, skal du sikre dig, at det ikke er en låst sektion, da disse er usynlige, medmindre låsen først fjernes.

Hvis det er en arbejds- eller skolenotesbog, se bemærkningen om **Brug arbejds- eller skoleadgang** ovenfor.

#### Importerede noter er tomme eller mangler indhold

Dette problem kan opstå med notesbøger, du sjældent bruger. For at løse problemet skal du følge disse trin:

1. Åbn [OneNote Web](https://onenote.com/notebooks) i din browser.
2. **Højreklik** på de notesbøger, som mangler indhold.
3. Vælg **Eksportér notesbog** fra menuen.
4. **Pak** den fil, du lige har hentet, ud i en mappe.
5. Upload dine OneNote-notesbøger [her](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Åbn **Obsidian Importer** og prøv at importere igen.

Hvis du har fulgt disse tips, og dit problem stadig ikke er løst, er det muligt, at der er et midlertidigt problem med Microsofts servere. Hvis det er tilfældet, vent et par minutter og prøv igen. Hvis problemet fortsætter, skal du oprette en fejlrapport på [Obsidian Importer GitHub-repositoriet](https://github.com/obsidianmd/obsidian-importer/issues).

## Importér OneNote-filer (.one, .onepkg)

Filimport er en alternativ måde at importere dine OneNote-data på. Den læser de eksportfiler, som OneNote selv skriver, så den kræver ingen Microsoft-konto og ingen internetforbindelse. Brug den til notesbøger, der kun er gemt på din computer, notesbøger din konto ikke kan nå, eller når du foretrækker ikke at logge ind.

### Eksportér dine notesbøger fra OneNote

Vi anbefaler at eksportere hver notesbog som en **OneNote-pakke** (`.onepkg`). Én pakke indeholder alle sektioner i notesbogen, så du kan eksportere og importere en notesbog i ét trin, og Importer viser sektionerne, så du kan vælge imellem dem.

Eksport er kun tilgængelig i **OneNote til Windows**, desktop-appen der følger med Microsoft 365. OneNote-appen til Mac og den ældre OneNote til Windows 10-app kan ikke eksportere til disse formater.

1. Åbn den notesbog, du vil eksportere, i OneNote til Windows.
2. Gå til **Filer → Eksportér**.
3. Under **Eksportér aktuel** vælg **Notesbog**.
4. Under **Vælg format** vælg **OneNote-pakke (\*.onepkg)**.
5. Klik på **Eksportér** og vælg, hvor filen skal gemmes.
6. Gentag for hver notesbog, du vil importere.

For at eksportere en enkelt sektion i stedet, vælg **Sektion** i trin 3 og **OneNote 2010-2016 sektion (\*.one)** i trin 4.

Du kan også importere de sektionsfiler, som OneNote allerede gemmer på disken, uden at eksportere noget:

- Notesbøger gemt på din computer ligger i `Documents\OneNote Notebooks`, én `.one`-fil pr. sektion.
- Sikkerhedskopier af synkroniserede notesbøger ligger i `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importér dine OneNote-filer

Du skal bruge det officielle Obsidian [[Importér]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-plugin'et.
4. Åbn **Importer**-plugin'et ved hjælp af kommandopaletten eller ikonet på værktøjslinjen.
5. Under **Filformat** vælg **Microsoft OneNote (.one, .onepkg)**.
6. Vælg de `.onepkg`- og `.one`-filer, du vil importere. Du kan vælge mere end én fil ad gangen, så alle dine notesbøger kan importeres samlet.
7. Under **Sektioner til import** vises de sektioner, der er fundet i filerne, med alt markeret. Fjern markeringen af det, du ikke ønsker.
8. Valgfrit kan du vælge en **Outputmappe** til importen, hvor vedhæftninger skal gemmes, og hvad der skal ske med **Eksisterende noter**, hvis du importerer den samme notesbog igen.
9. Klik på **Importér** og vent, indtil importen er fuldført.
10. Du er færdig!

Hver sektion bliver til en mappe, og hver side i den bliver til en note. En underside gemmes i en mappe opkaldt efter siden over den, hvilket bevarer den struktur, OneNote viste, og forhindrer to undersider med samme navn i at kollidere. Sider i notesbøgens papirkurv importeres ikke.

### Begrænsninger

- Adgangskodebeskyttede sektioner er gemt krypteret, og deres sider springes over. Fjern adgangskoden i OneNote og eksportér igen for at importere dem.
- Rettighedsbeskyttede filer kan kun åbnes af en konto, som politikken tillader, og kan ikke læses af Importer.

## Privatliv

Hvis du vælger at importere via din Microsoft-konto, bruger Obsidian Importer-plugin'et [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) til at godkende og importere dine OneNote-notesbøger. Dette giver et kortvarigt adgangstoken til din konto, som kun bruges fra din computer og aldrig gemmes. Når importen er fuldført, kan du valgfrit tilbagekalde tokenet fra [Microsofts apps og tjenester-side](https://account.live.com/consent/Manage).

Filimport opretter aldrig forbindelse til Microsoft: de filer, du vælger, læses på din computer uden nogen netværksforbindelse.
