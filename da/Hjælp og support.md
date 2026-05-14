---
permalink: resources
publish: true
mobile: true
aliases:
  - Hjælp og support
---
Lær hvordan du kan få hjælp og support, når du bruger Obsidian eller en af vores betalingsløsninger.

## Spørgsmål og råd

Hvis du har et spørgsmål om, hvordan man benytter Obsidian, eller vil lære andre Obsidian brugere at kende, så kan du tilmelde dig vores fællesskabs kanaler:

- [[Sandkasseboks|Udforsk sandkasseboksen]]
- [Tilmeld dig vores Discord server](https://discord.gg/obsidianmd)
- [Besøg vores forum](https://forum.obsidian.md/)

### Fejlrapportering og funktionsanmodninger

> [!tip]- Tjek for duplikater først
> Før du anmoder om en ny funktion eller rapporterer en fejl, så se grundigt efter om andre ikke allerede har gjort det.

Hvis du har foreslag til en ny funktion i Obsidian, så finder du [funktionsanmodninger her](https://forum.obsidian.md/c/feature-requests/8).

Hvis du vil rapportere en fejl, så find [fejlrapporter her](https://forum.obsidian.md/c/bug-reports/7). Du kan finde fejlrapporter, der er løst [her](https://forum.obsidian.md/c/bug-graveyard/12).

### Indsaml fejlfindingsinfo

Når du støder på en fejl eller har brug for hjælp fra [[#Kontakt Obsidian support|Obsidian support]], kan det være meget nyttigt at vedlægge fejlfindingsinfo. Sådan finder du den:

1. Åbn [[Kommandopalet|kommandopaletten]].
2. Skriv **Vis fejlfindingsinfo**.
3. Vælg den fremhævede **Vis fejlfindingsinfo** mulighed.
4. Vælg **Kopiér til udklipsholder**.
5. Indsæt den kopierede information i din fejlrapport eller e-mail til Obsidian support.

### Tjek opstartstid

Du kan tjekke, hvor lang tid Obsidian er om at starte, ved at bruge funktionen **Opstartstid**.

1. Åbn **[[Indstillinger]] → Generelt → Avanceret**.
2. Ud for **Notificér hvis opstarten tager længere tid end forventet**, vælg **timer-ikonet**.
3. Et **Opstartstid**-vindue vises med detaljerede tidsoplysninger:
   - **Samlet appopstart**: Samlet starttid.
   - **Initialisering**: Tid brugt på at indlæse selve appen.
   - **Boks**: Tid til at indlæse dine boksfiler.
   - **Arbejdsområde**: Tid til at gendanne faner og layout.
   - **Kerneplugins**: Tid brugt af aktive kerneplugins.
4. Du kan vælge **Kopiér til udklipsholder** for at kopiere rapporten til fejlfinding eller deling.

Derudover kan du slå **Notificér hvis opstarten tager længere tid end forventet** til for at modtage en advarsel, hvis opstarten er usædvanligt langsom.

### Indfang konsollogfiler

Når du skal rapportere en fejl relateret til et Obsidian plugin, eller når [[#Kontakt Obsidian support|Obsidian support]] beder dig om logoplysninger, kan det være nødvendigt at tilgå Obsidians konsol inde fra Obsidian-applikationen. Sådan gør du afhængigt af dit operativsystem:

- **Windows/Linux**: `Ctrl+Shift+I`
- **macOS**: `Command+Option+I`

> [!info]+ Alternativ adgangsmetode
> Hvis du bruger vinduesrammestilen **Obsidian stil**, kan du også tilgå Obsidians konsol via titelmenuen.

Når du har åbnet udviklerkonsollen:

1. Vælg **console** i topmenuen.
2. Vælg **errors** i sidemenuen. Eventuelle fejl vises som `# errors`.
3. Vælg en af de røde fejlmeddelelser.
4. Vælg muligheden **Save as...** Dette gemmer alle fejlene i konsollen.
5. Gem logfilen på din enhed.
6. Vedhæft logfilen til din fejlrapport eller e-mail til Obsidian support.

![[help-support-console-menu.png#interface|600]]

> [!warning]+ Konsoladgang på mobil
> Mobilenheder og tablets har begrænset adgang til deres udviklerkonsoller. For disse brugere anbefaler vi at bruge fællesskabsplugin'et [Logstravaganza](https://community.obsidian.md/plugins/logstravaganza) til automatisk at generere konsollogdata i en markdown-note.

### Kontakt Obsidian support

Obsidian tilbyder e-mail-support kun for henvendelser vedrørende [[Kommerciel licens|kommercielle licenser]], din konto, betaling og tillægstjenester ([[Introduktion til Obsidian Sync|Obsidian Sync]] og [[Introduktion til Obsidian Publish|Obsidian Publish]]). Hvis du har brug for hjælp til et af disse emner, [send en e-mail til Obsidian teamet](mailto:support@obsidian.md).

## Rapportering af sikkerhedsproblemer

Hvis du har opdsaget et sikkerhedsproblem i Obsidian, eller hvis du har en formodning om, at et plugin udgør en sikerhedsrisiko, så skriv en [email til Obsidian teamet](mailto:support@obsidian.md).

## Rapportering af overtrædelser af fællesskabets adfærdskodeks

Uanset om det er offer for, eller vidne til en overtrædelse af Obsidian [[Fællesskabets adfærdskodeks]], så kan du rappotere hændelsen til moderator teamet.

Rapporter hændelsen i et af de følgende fællesskabs kanaler:

- [[Fællesskabets adfærdskodeks#Rapporter overtrædelser på Discord]]
- [[Fællesskabets adfærdskodeks#Rapporter overtrædelser i vores forum]]

## Bidrag til Obsidian

Er du interesseret i at bruge dine evner og fritid på Obsidian? Her er, hvor vi virkelig kan bruge din hjælp:

- Hjælp andre Obsidian-brugere ved at besvare spørgsmål på vores [Discord server](https://discord.gg/obsidianmd), vores [forum](https://forum.obsidian.md/) eller [ObsidianMD](https://old.reddit.com/r/ObsidianMD/) subreddit.
- [[Udviklere|Udviklere]], vi kan virkelig bruge jeres hjælp til at udvide vores [Obsidian Developer Documentation](https://github.com/obsidianmd/obsidian-developer-docs).
- Kan du et andet skriftsprog end engelsk? Overvej at hjælpe med vores [[Oversættelser|oversættelser]] til andre sprog.
- Er der noget i disse hjælpedokumenter, der er forældet eller forvirrende? Tag fat i [[Stilguide|stilguiden]] og indsend et [issue og pull request](https://github.com/obsidianmd/obsidian-help/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).
- Hvis du har mulighed for det, kan du [[Økonomiske bidrag|bidrage økonomisk]] ved at benytte en af vores betalte tillægstjenester.
