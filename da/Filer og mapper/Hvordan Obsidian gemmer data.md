---
description: Denne side forklarer hvordan Obsidian gemmer data på din enhed.
mobile: true
permalink: dataformat
publish: true
---
Obsidian gemmer dine noter som [[Grundlæggende formaterings syntaks|Markdown formatterede]] tekstfiler i en _boks_. En boks er en mappe, inklusiv undermapper, i dit lokale filsystem.

Fordi noterne er almindelige tekstfiler, kan du anvende andre tekstredigeringsprogrammer og filhåndteringsværktøjer til at redigere og håndtere dine noter.

Du kan oprette en boks hvor somhelst, så længe dit operativsystem tillader det. Obsidian kan synkrtonisere data med [[Introduktion til Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git og mange andre tredjepartservices.

Du kan åbne flere mapper som individuelle bokse, fx. for at adskille noter til skole og noter til arbejde.

> [!warning] Bokse i bokse
> Da [[Interne links|interne links]] er lokale i forhold til boksen, anbefaler vi, at du **ikke** oprette bokse indeni bokse. Link bliver muligvis ikke opdateret korrekt.

## Boksindstillinger

Obsidian opretter en `.obsidian` [[Konfigurationsmappen|konfigurationsmappe]] i boksens rodmappe, og som indeholder indstillinger som er specifikke for denne boks, såsom [[Brugergrænseflade/Genvejstaster|genvejstaster]], [[Temaer|temaer]] og [[Fællesskabsplugins|fællesskabsplugins]].

De fleste operativsystemer skjuler mapper, der begynder med et punktum (`.`) som standard, så du skal muligvis opdatere indstillingerne i din stifinder for at se den.

- **macOS**: I Finder, tryk `Cmd+Shift+.` (mellemrum) for at vise skjulte filer
- **Windows**: [Vis skjulte filer](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Tryk `Ctrl + h` i de fleste stifindere for at vise skjulte filer

> [!tip] Tilføj `.obsidian` til Git
> Filerne `.obsidian/workspace.json` og `.obsidian/workspaces.json` gemmer det nuværende applikationslayout og opdateres hvergang du åbner en ny fil. Hvis du anvender [Git](https://git-scm.com) til at synkronisere din boks, vil du måske gerne tilføje disse filer til `.gitignore`.

## Globale indstillinger

Obsidian gemmer globale indstillinger i en systemmappe. Systemmappens placering afhænger af det operativsystem du anvender.

- **macOS**: `/Users/yourusername/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` eller `~/.config/obsidian/`

> [!warning] Opret ikke en boks i systemmappen. Det kan føre til ødelagte filer og datatab.

## IndexedDB
Obsidian anvender en simpel lokal database _IndexedDB_ til at gemme lokal administrationsdata i. Den holder styr på status for [[Introduktion til Obsidian Sync|Obsidian Sync]] forbindelserne og gemmer metainformation, når applikationen lukker.

> [!warning] Hvis Apples [_Lockdown Mode_](<https://support.apple.com/en-us/105120>) er aktiveret og Obsidian ikke er ekskluderet, vil disse databasefiler ikke blive gemt, hvilket bevirker at hele boksens indhold skal reindekseres hver gang Obsidian startes.

### Metadata cache

Obsidian opretholder en lokalt cache af metadata, for at kunne fungere optimalt og hurtigt. Disse metadata benyttes flere steder i applikationen fra grafvisning til overskkriftsvisning.

Obsidian sørger for at holde denne cache synkroniseret med filerne i din boks, men det er muligt at data kommer ud af synkronisering me de underliggende filer. Hvis det sker i din boks, kan du genopbygge metedata cashen manuelt via Obsidians indstillinger i **Filer & links** sektionen.
