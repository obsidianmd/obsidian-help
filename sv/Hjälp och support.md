---
permalink: resources
publish: true
mobile: true
description: 'Hitta supportresurser, rapportera säkerhets- eller communityöverträdelser och lär dig hur du kan bidra till Obsidian.'
---
Hitta supportresurser, rapportera säkerhets- eller gemenskapsöverträdelser och lär dig hur du kan bidra till Obsidian.

## Frågor och råd

Om du har en fråga om hur du använder Obsidian, eller vill lära känna andra Obsidian-användare, kan du gå med i en av våra gemenskapskanaler:

- [[Sandlådevvalv|Utforska sandlådevalvet]]
- [Gå med på vår Discord-server](https://discord.gg/obsidianmd)
- [Besök forumet](https://forum.obsidian.md/)

### Rapportera buggar och begär funktioner

> [!tip]- Kontrollera efter dubbletter först
> Innan du begär en ny funktion eller rapporterar en bugg, vänligen titta igenom de andra inläggen för att se till att ingen annan redan har skickat in den.

Om du vill föreslå en funktion i Obsidian, gå till [Funktionsförfrågningar](https://forum.obsidian.md/c/feature-requests/8).

Om du vill rapportera en bugg i Obsidian, gå till [Buggrapporter](https://forum.obsidian.md/c/bug-reports/7). Buggrapporter flyttas till [Buggkyrkogården](https://forum.obsidian.md/c/bug-graveyard/12) när de är lösta.

### Samla felsökningsinformation

När du stöter på en bugg eller behöver hjälp från [[#Kontakta Obsidian-support|Obsidian-support]] kan det vara mycket användbart att tillhandahålla felsökningsinformation. Så här får du fram den:

1. Öppna [[Kommandopalett|kommandopaletten]].
2. Skriv **Visa felsökningsinformation**.
3. Välj det markerade alternativet **Visa felsökningsinformation**.
4. Välj **Kopiera till urklipp**.
5. Klistra in den kopierade informationen i din buggrapport eller e-post till Obsidian-support.

### Kontrollera uppstartstid

Du kan kontrollera hur lång tid det tar för Obsidian att starta genom att använda funktionen **Uppstartstid**.

1. Öppna **[[Inställningar]] → Allmänt → Avancerat**.
2. Bredvid **Meddela om uppstarten tar längre tid än väntat**, välj **timer-ikonen**.
3. Ett fönster med **Uppstartstid** visas med detaljerad tidsinformation:
   - **Total appuppstart**: Övergripande starttid.
   - **Initialisering**: Tid som spenderats på att ladda själva appen.
   - **Valv**: Tid för att ladda dina valvfiler.
   - **Arbetsyta**: Tid för att återställa flikar och layout.
   - **Kärntillägg**: Tid som använts av aktiva kärntillägg.
4. Du kan välja **Kopiera till urklipp** för att kopiera rapporten för felsökning eller delning.

Dessutom kan du slå på/av **Meddela om uppstarten tar längre tid än väntat** för att få en varning om uppstarten är ovanligt långsam.

### Fånga konsolloggar

När du behöver rapportera en bugg relaterad till ett Obsidian-tillägg eller när [[#Kontakta Obsidian-support|Obsidian-support]] ber dig att tillhandahålla logginformation, kan du behöva komma åt Obsidian-konsolen inifrån Obsidian-appen. Så här gör du beroende på ditt operativsystem:

- **Windows/Linux**: `Ctrl+Shift+I`
- **macOS**: `Command+Option+I`

> [!info]+ Alternativ åtkomstmetod
> Om du använder fönsterramens stil **Obsidian-ram** kan du också komma åt Obsidian-konsolen via titelmenyn.

När du har öppnat utvecklarkonsolen:

1. Välj **console** i toppmenyn.
2. Välj sidmenyalternativet **errors**. Eventuella fel visas som `# errors`.
3. Välj ett av de röda felmeddelandena.
4. Välj alternativet **Save as...** Detta sparar alla fel i konsolen.
5. Spara loggfilen till din enhet.
6. Bifoga loggfilen till din buggrapport eller e-post till Obsidian-support.

![[help-support-console-menu.png#interface|600]]

> [!warning]+ Konsolåtkomst på mobil
> Mobila enheter och surfplattor har begränsad åtkomst till sina utvecklarkonsoler. För dessa användare rekommenderar vi att använda gemenskapstillägget [Logstravaganza](https://obsidian.md/plugins?id=logstravaganza) för att automatiskt generera konsolloggdata i en markdown-anteckning.

### Kontakta Obsidian-support

Obsidian erbjuder e-postsupport endast för förfrågningar om [[Kommersiell licens|kommersiella licenser]], ditt konto, betalning och tilläggstjänster ([[Introduktion till Obsidian Sync|Obsidian Sync]] och [[Introduktion till Obsidian Publish|Obsidian Publish]]). Om du behöver hjälp med något av dessa ämnen, [e-posta Obsidian-teamet](mailto:support@obsidian.md).

## Rapportera ett säkerhetsproblem

Om du har upptäckt ett säkerhetsproblem i Obsidian, eller om du misstänker att ett tillägg är skadligt, vänligen [e-posta Obsidian-teamet](mailto:support@obsidian.md).

## Rapportera en överträdelse av uppförandekoden

Oavsett om du är offer för eller vittne till en överträdelse av vår [[Gemenskapens uppförandekod]], kan du rapportera incidenten till vårt moderatorteam.

Rapportera incidenten på en av följande gemenskapskanaler:

- [[Gemenskapens uppförandekod#Rapportera på Discord|Rapportera på Discord]]
- [[Gemenskapens uppförandekod#Rapportera på forumet|Rapportera på forumet]]

## Bidra till Obsidian

Intresserad av att lägga lite kompetens och fritid på Obsidian? Här är där vi verkligen kan behöva din hjälp:

- Hjälp dina medanvändare av Obsidian genom att svara på frågor på vår [Discord-server](https://discord.gg/obsidianmd), vårt [forum](https://forum.obsidian.md/), eller [ObsidianMD](https://old.reddit.com/r/ObsidianMD/) på reddit.
- [[Utvecklare]], vi kan verkligen behöva din hjälp med att utöka vår [Obsidian-utvecklardokumentation](https://github.com/obsidianmd/obsidian-developer-docs).
- Kan du något skriftspråk förutom engelska? Överväg att hjälpa till med våra [[Översättningar]] till andra språk.
- Finns det något i dessa hjälpdokument som är föråldrat eller förvirrande? Ta tag i [[Stilguide|stilguiden]] och skicka in ett [ärende och pull request](https://github.com/obsidianmd/obsidian-help/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).
- Om du har möjlighet kan du [[Ekonomiska bidrag|bidra ekonomiskt]] genom att använda en av våra betaltillägg.
