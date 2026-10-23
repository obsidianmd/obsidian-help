---
permalink: import/onenote
cssclasses:
  - soft-embed
---
Obsidian låter dig enkelt migrera dina anteckningar från Microsoft OneNote med hjälp av [[Importerare|Importerare-tillägget]]. Detta konverterar dina OneNote-data till hållbara Markdown-filer som du kan använda med Obsidian och många andra appar.

Obsidian erbjuder två sätt att importera dina OneNote-data:

1. **Microsoft-konto** loggar in på ditt Microsoft-konto och importerar anteckningsböckerna som är synkroniserade till OneDrive. Kräver internetanslutning.
2. **Filimport** använder OneNotes exportfiler (`.onepkg` och `.one`). Kräver inget konto eller internetanslutning, och fungerar för anteckningsböcker som aldrig har synkroniserats.

## Importera från ditt Microsoft-konto

> [!Warning]
> Endast anteckningsböcker som ägs av ditt konto kan importeras. Anteckningsböcker som andra personer har delat med dig stöds inte, och ett arbets- eller skolkonto kan kräva att din organisation godkänner åtkomst.

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
10. Klicka på **Importera** och vänta tills importen är klar.
11. Du är klar!

Om dina anteckningsböcker tillhör ett arbets- eller skolkonto kan OneNote neka tillägget åtkomst till dem efter att du loggar in. När det händer visas en knapp **Använd arbets- eller skolåtkomst** bredvid **Logga ut**. Använd den för att logga in igen med den bredare behörighet som dessa konton kräver. Din organisation kan behöva godkänna den behörigheten innan den fungerar.

### Felsökning

#### Inga sektioner eller anteckningsböcker visas

Se till att anteckningsböckerna du försöker importera är synkroniserade till OneDrive och synliga i OneNote Web. De måste ägas av dig (delade anteckningsböcker skrivna av andra stöds inte).

Om en specifik sektion saknas, se till att det inte är en låst sektion, eftersom dessa är osynliga utan att först ta bort låset.

Om det är en arbets- eller skolanteckningsbok, se noten om **Använd arbets- eller skolåtkomst** ovan.

#### Importerade anteckningar är tomma eller saknar innehåll

Detta problem kan uppstå med anteckningsböcker som du sällan använder. Följ dessa steg för att lösa problemet:

1. Öppna [OneNote Web](https://onenote.com/notebooks) i din webbläsare.
2. **Högerklicka** på anteckningsböckerna som saknar innehåll.
3. Välj **Exportera anteckningsbok** från menyn.
4. **Packa upp** filen du just laddade ner till en mapp.
5. Ladda upp dina OneNote-anteckningsböcker [här](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Öppna **Obsidian Importerare** och försök importera igen.

Om du har följt dessa tips och ditt problem fortfarande är olöst, är det möjligt att det finns ett tillfälligt problem med Microsofts servrar. Om så är fallet, vänta några minuter och försök igen. Om problemet kvarstår, vänligen öppna ett ärende på [Obsidian Importerare GitHub-arkivet](https://github.com/obsidianmd/obsidian-importer/issues).

## Importera OneNote-filer (.one, .onepkg)

Filimport är ett alternativt sätt att importera dina OneNote-data. Det läser exportfilerna som OneNote själv skriver, så det behövs inget Microsoft-konto och ingen internetanslutning. Använd det för anteckningsböcker som bara finns på din dator, anteckningsböcker som ditt konto inte kan nå, eller när du hellre inte vill logga in.

### Exportera dina anteckningsböcker från OneNote

Vi rekommenderar att exportera varje anteckningsbok som ett **OneNote-paket** (`.onepkg`). Ett paket innehåller varje sektion i anteckningsboken, så du kan exportera och importera en anteckningsbok i ett enda steg, och Importerare listar dess sektioner som du kan välja bland.

Export är bara tillgängligt i **OneNote för Windows**, skrivbordsappen som ingår i Microsoft 365. OneNote-appen för Mac och den äldre OneNote för Windows 10-appen kan inte exportera till dessa format.

1. Öppna anteckningsboken du vill exportera i OneNote för Windows.
2. Gå till **Arkiv → Exportera**.
3. Under **Exportera aktuellt** välj **Anteckningsbok**.
4. Under **Välj format** välj **OneNote-paket (\*.onepkg)**.
5. Klicka på **Exportera** och välj var filen ska sparas.
6. Upprepa för varje anteckningsbok du vill importera.

För att exportera en enskild sektion istället, välj **Sektion** i steg 3 och **OneNote 2010-2016-sektion (\*.one)** i steg 4.

Du kan också importera sektionsfilerna som OneNote redan har på disk, utan att exportera något:

- Anteckningsböcker som lagras på din dator finns i `Documents\OneNote Notebooks`, en `.one`-fil per sektion.
- Säkerhetskopior av synkroniserade anteckningsböcker finns i `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importera dina OneNote-filer

Du behöver det officiella Obsidian-tillägget [[Importerare]], som du kan [installera här](obsidian://show-plugin?id=obsidian-importer).

1. Öppna **[[Inställningar]]**.
2. Gå till **Gemenskapstillägg** och [installera Importerare](obsidian://show-plugin?id=obsidian-importer).
3. Aktivera Importerare-tillägget.
4. Öppna **Importerare**-tillägget via kommandopaletten eller ribbon-ikonen.
5. Under **Filformat** välj **Microsoft OneNote (.one, .onepkg)**.
6. Välj de `.onepkg`- och `.one`-filer du vill importera. Du kan välja mer än en fil åt gången, så alla dina anteckningsböcker kan importeras tillsammans.
7. Under **Sektioner att importera** listas sektionerna som hittats i dessa filer, med allt markerat. Avmarkera det du inte vill ha.
8. Valfritt, välj en **Utdatamapp** för importen, var bilagorna ska sparas, och vad som ska hända med **Befintliga anteckningar** om du importerar samma anteckningsbok igen.
9. Klicka på **Importera** och vänta tills importen är klar.
10. Du är klar!

Varje sektion blir en mapp, och varje sida i den blir en anteckning. En undersida sparas i en mapp som är uppkallad efter sidan ovanför, vilket bevarar strukturen som OneNote visade och förhindrar att två undersidor med samma namn kolliderar. Sidor i anteckningsbokens papperskorg importeras inte.

### Begränsningar

- Lösenordsskyddade sektioner lagras krypterade, och deras sidor hoppas över. Ta bort lösenordet i OneNote och exportera igen för att importera dem.
- Rättighetsskyddade filer kan bara öppnas av ett konto som policyn tillåter, och kan inte läsas av Importerare.

## Integritet

Om du väljer att importera med ditt Microsoft-konto använder Obsidian Importerare-tillägget [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) för att autentisera och importera dina OneNote-anteckningsböcker. Detta ger en kortvarig åtkomsttoken till ditt konto som endast används från din dator och aldrig lagras. Efter att importen är klar kan du valfritt återkalla token från [Microsofts appar och tjänster-sida](https://account.live.com/consent/Manage).

Filimport ansluter aldrig till Microsoft: filerna du väljer läses på din dator, utan någon nätverksanslutning.
