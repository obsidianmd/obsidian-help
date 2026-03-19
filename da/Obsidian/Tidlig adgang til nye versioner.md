---
permalink: tidlig-adgang-til-versioner
---

Du kan modtage tidlige versioner af Obsidian ved at aktivere: _Modtag insiderversioner_. Denne funktion er kun tilgængelig for brugere med en [[Catalyst licens]].

> [!warning]
> Insiderversioner er beta udgaver af Obsidian. De inkluderer nye funktioner, men kan være mindre stabile. Slå ikke insiderversioner til, hvis du vil sikre dig en mere stabil oplevelse.
> 
> Bemærk at udviklere af fællesskabsplugins og fællesskabetemaer får tidlige vesioner på samme tid som alle andre. Så vær tålmodig med udviklere, som har brug for tid til at opdatere ders plugin eller tema, så de understøtter nye funktioner.

## Sådan aktiverer du insiderversioner på desktop enheder

For at modtage tidlige udgaver af Obsidian, så snart de er tilgængelige, så skal du:

1. Åbne **Indstillinger**.
2. Vælg **Om** i venstre sidebar
3. Under **Konto → Din konto** vælger du **Log in**.
4. Angiv din **email**
5. Angiv dit **kodeord**
6. Når du er logget ind, så gå ind i indstillingerne
7. Vælg **Om** i venstre sidebar
8. Aktiver **Modtage insiderversioner**
9. Klik på **Tjek for opdateringer** og derefter **Genstart**

## Sådan installerer du insiderversionber på mobilenheder

For at få instruktioner på, hvordan du installerer indsiderversioner på din mobilenhed, skal du følge disse trin:

1. Helt og installér [Discord](<https://discord.com>).
2. Tilslut dig [Obsidians Discord server](https://discord.gg/obsidianmd).
3. [[Catalyst license#Discord badge|Få dit Discord badge]], så du kan tilgå insiderkanaler
4. Du kan finde instruktioner i `#insider-welcome` kanalen om hvordan du får adgang til at hente insiderversioner til din enhedtype

## Rapportér problemer og andet feedback

Hvis du opdager et problem i en insiderversion, så overvej at rapportere det til Obsidian teamet. Før du rapporterer et problem, så søg i [forummet](https://forum.obsidian. eller på Discord for at se om andre har rapporteret problem i forvejen.

Du skal benytte en af følgende kanaler til at rapportere fejl:

- Rapportér problemet i den `#insider-release` kanal på Discord, som svarer til den enhed du benytter
- Opret et nyt emne i forummet under [Bug reports](https://forum.obsidian.md/c/bug-reports/7)

Når du rapportere et problem, så husk at inkludere versionsnummeret på den Obsidian uidgave du anvender og hvilket operativsystem du anvender.
Du kan finde Obsidians versionsnummer under ***Indstillinger → Om → Version**.

## Sådan skifter du tilbage til en officiel udgave af Obsidian på desktop

For at skifte tilbage til en officiel udgave (ikke en insiderversion), skal du:

1. Deaktivere funktionen til at modtage insiderversioner
   1. Åben **Indstillinger**
   2. Klik op **Om**
   3. Deaktiver **Modtage insiderversioner**.
2. Luk Obsidian.
3. Slet filen `obsidian-VERSION.asar`, hvor `VERSION` er Obsidian versionen
   - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Genstart Obsidian

## Sådan skifter du tilbage til en officiel udgave af Obsidian på en mobil enhed

For at skifte tilbage til en officiel udgave (ikke en insiderversion) på en mobil enhed, skal du:

1. Foretag en backup af din boksdata
2. Afinstaller Obsidian
3. Geninstaller Obsidian enten fra Play butikken eller Apple App butikken
4. Gendan dine boksdata fra din backup
5. Åben Obsidian
