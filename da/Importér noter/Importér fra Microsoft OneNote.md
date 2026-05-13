---
permalink: import/onenote
aliases:
  - Import fra Microsoft OneNote
  - Import af noter/Import fra Microsoft OneNote
---
Obsidian giver dig mulighed for nemt at migrere dine noter fra Microsoft OneNote ved hjælp af [[Importer|Importer-plugin'et]]. Dette vil konvertere dine OneNote-data til holdbare Markdown-filer, som du kan bruge med Obsidian og mange andre applikationer.

> [!Warning]
> Kun notesbøger, der ejes af din personlige konto, kan importeres. Delte noter eller konti fra arbejds- og skolekonti understøttes ikke.

## Importér dine OneNote-data til Obsidian

Du skal bruge det officielle Obsidian [[Importer]]-plugin, som du kan [installere her](obsidian://show-plugin?id=obsidian-importer).

1. Åbn **[[Indstillinger]]**.
2. Gå til **Fællesskabsplugins** og [installér Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktivér Importer-plugin'et.
4. Åbn **Importer**-plugin'et ved hjælp af kommandopaletten eller ikonet på værktøjslinjen.
5. Under **Filformat** vælg **Microsoft OneNote**.
6. Klik på **Log ind** for at åbne din webbrowser på Microsofts login-side. Indtast legitimationsoplysningerne for din Microsoft-konto, som indeholder dine OneNote-notesbøger. Mere information om Microsofts login-proces er tilgængelig nedenfor.
7. Klik på **Acceptér** for at give Obsidian tilladelse til at se dine OneNote-notesbøger.
8. Klik på **Åbn link** for at tillade din browser at omdirigere dig til Obsidian-applikationen.
9. I Obsidian-applikationen vil Importer-dialogen nu vise, at du er logget ind, og liste dine OneNote-notesbøger og sektioner. Markér de sektioner, du ønsker at importere.

![[OneNote-Importer-Select-Sections.png]]

10. Klik på **Importér** og vent, indtil importen er fuldført.
11. Du er færdig!

## Fejlfinding

### Ingen sektioner eller notesbøger vises

Sørg for, at de notesbøger, du forsøger at importere, er synkroniseret til OneDrive og synlige i OneNote Web. De skal ejes af dig (delte notesbøger skrevet af andre understøttes ikke).

Hvis en bestemt sektion mangler, skal du sikre dig, at det ikke er en låst sektion — disse er usynlige, medmindre låsen først fjernes.

### Importerede noter er tomme eller mangler indhold

Dette problem kan opstå med notesbøger, du sjældent bruger. For at løse problemet skal du følge disse trin:

1. Åbn [OneNote Web](https://onenote.com/notebooks) i din browser.
2. **Højreklik** på de notesbøger, som mangler indhold.
3. Vælg **Eksportér notesbog** fra menuen.
4. **Pak** den fil, du lige har hentet, ud i en mappe.
5. Upload dine OneNote-notesbøger [her](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Åbn **Obsidian Importer** og prøv at importere igen.

Hvis du har fulgt disse tips, og dit problem stadig ikke er løst, er det muligt, at der er et midlertidigt problem med Microsofts servere. Hvis det er tilfældet, vent et par minutter og prøv igen. Hvis problemet fortsætter, skal du oprette en fejlrapport på [Obsidian Importer GitHub-repositoriet](https://github.com/obsidianmd/obsidian-importer/issues).

## Privatliv

Obsidian Importer-plugin'et bruger [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) til at godkende med din Microsoft-konto og importere dine OneNote-notesbøger. Dette giver et kortvarigt adgangstoken til din konto, som kun bruges fra din computer og aldrig gemmes. Når importen er fuldført, kan du valgfrit tilbagekalde tokenet fra [Microsofts apps og tjenester-side](https://account.live.com/consent/Manage).
