---
permalink: import/onenote
---
Obsidian låter dig enkelt migrera dina anteckningar från Microsoft OneNote med hjälp av [[Importerare|Importerare-tillägget]]. Detta konverterar dina OneNote-data till hållbara Markdown-filer som du kan använda med Obsidian och många andra appar.

> [!Warning]
> Endast anteckningsböcker som ägs av ditt personliga konto kan importeras. Delade anteckningar, eller konton från arbets- och skolkonton stöds inte.

## Importera dina OneNote-data till Obsidian

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget via kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **Microsoft OneNote**.
6. Klicka på **Logga in** för att öppna din webbläsare till Microsofts inloggningssida. Ange autentiseringsuppgifterna för ditt Microsoft-konto som innehåller dina OneNote-anteckningsböcker. Mer information om Microsofts inloggningsprocess finns nedan.
7. Klicka på **Acceptera** för att ge Obsidian behörighet att visa dina OneNote-anteckningsböcker.
8. Klicka på **Öppna länk** för att låta din webbläsare omdirigera dig till Obsidian-appen.
9. I Obsidian-appen visar Importerare-dialogen nu att du är inloggad och listar dina OneNote-anteckningsböcker och sektioner. Markera de sektioner du vill importera.

![[OneNote-Importer-Select-Sections.png]]

10. Klicka på **Importera** och vänta tills importen är klar.
11. Du är klar!

## Felsökning

### Inga sektioner eller anteckningsböcker visas

Se till att anteckningsböckerna du försöker importera är synkroniserade till OneDrive och synliga i OneNote Web. De måste ägas av dig (delade anteckningsböcker skrivna av andra stöds inte).

Om en specifik sektion saknas, se till att det inte är en låst sektion — dessa är osynliga utan att först ta bort låset.

### Importerade anteckningar är tomma eller saknar innehåll

Detta problem kan uppstå med anteckningsböcker som du sällan använder. Följ dessa steg för att lösa problemet:

1. Öppna [OneNote Web](https://onenote.com/notebooks) i din webbläsare.
2. **Högerklicka** på anteckningsböckerna som saknar innehåll.
3. Välj **Exportera anteckningsbok** från menyn.
4. **Packa upp** filen du just laddade ner till en mapp.
5. Ladda upp dina OneNote-anteckningsböcker [här](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Öppna **Obsidian Importerare** och försök importera igen.

Om du har följt dessa tips och ditt problem fortfarande är olöst, är det möjligt att det finns ett tillfälligt problem med Microsofts servrar. Om så är fallet, vänta några minuter och försök igen. Om problemet kvarstår, vänligen öppna ett ärende på [Obsidian Importerare GitHub-arkivet](https://github.com/obsidianmd/obsidian-importer/issues).

## Integritet

Obsidian Importerare-tillägget använder [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) för att autentisera med ditt Microsoft-konto och importera dina OneNote-anteckningsböcker. Detta ger en kortvarig åtkomsttoken till ditt konto som endast används från din dator och aldrig lagras. Efter att importen är klar kan du valfritt återkalla token från [Microsofts appar och tjänster-sida](https://account.live.com/consent/Manage).
