---
permalink: data-storage
publish: true
mobile: true
description: Denne siden forklarer hvordan Obsidian lagrer dataene sine på enheten din.
---
Obsidian lagrer notatene dine som [[Grunnleggende formateringssyntaks|Markdown-formaterte]] ren tekst-filer i et _hvelv_. Et hvelv er en mappe på ditt lokale filsystem, inkludert eventuelle undermapper.

Fordi notater er ren tekst-filer, kan du bruke andre tekstredigeringsprogrammer og filbehandlere til å redigere og administrere notater. Obsidian oppdaterer automatisk hvelvet ditt for å holde tritt med eventuelle eksterne endringer.

Du kan opprette et hvelv hvor som helst operativsystemet ditt tillater. Obsidian synkroniserer med [[Introduksjon til Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git og mange andre tredjepartstjenester.

Du kan åpne flere mapper som individuelle hvelv, for eksempel for å skille notater for jobb og skole.

> [!warning] Hvelv inni hvelv
> Fordi [[Interne lenker]] er lokale til et hvelv, anbefaler vi at du ikke oppretter hvelv inni hvelv. Lenker oppdateres kanskje ikke korrekt.

## Hvelvinnstillinger

Obsidian oppretter en `.obsidian` [[Konfigurasjonsmappe|konfigurasjonsmappe]] i rotmappen til hvelvet, som inneholder innstillinger spesifikke for det hvelvet, som [[Hurtigtaster|hurtigtaster]], [[Temaer|temaer]] og [[Community-utvidelser|community-utvidelser]].

Som standard skjuler de fleste operativsystemer mapper som starter med et punktum (`.`), så du må kanskje oppdatere innstillingene for filbehandleren din for å se den.

- **macOS**: I Finder, trykk `Cmd+Shift+.` (punktum) for å vise skjulte filer.
- **Windows**: [Vis skjulte filer](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** I de fleste filutforskere, trykk `Ctrl + h` for å vise skjulte filer.

> [!tip] Legge til `.obsidian` i Git
> Filene `.obsidian/workspace.json` og `.obsidian/workspaces.json` lagrer gjeldende arbeidsområdeoppsett og oppdateres hver gang du åpner en ny fil. Hvis du bruker [Git](https://git-scm.com) for å administrere hvelvet ditt, kan det være lurt å legge til disse filene i `.gitignore`.

## Globale innstillinger

Obsidian lagrer globale innstillinger i en systemmappe. Plasseringen av systemmappen avhenger av operativsystemet du bruker.

- **macOS**: `/Users/dittbrukernavn/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` eller `~/.config/obsidian/`

> [!warning] Ikke opprett et hvelv i systemmappen. Dette kan føre til ødelagte data eller datatap.

## IndexedDB

IndexedDB er en lavnivå database på klientsiden som Obsidian bruker til bakgrunnslagring. Den hjelper med å opprettholde tilstanden til [[Introduksjon til Obsidian Sync|Obsidian Sync]]-tilkoblinger, og bevarer [[#Metadatabuffer|metadatabufferen]] når applikasjonen lukkes.

> [!warning] Hvis Apples [Lockdown-modus](<https://support.apple.com/en-us/105120>) er aktivert og Obsidian ikke er unntatt, vil disse databasefilene ikke lagres, noe som krever reindeksering hver gang appen starter.

### Metadatabuffer

For å gi en rask opplevelse mens du bruker appen, opprettholder Obsidian en lokal oversikt over metadata om filene i hvelvet ditt kalt **metadatabufferen**. Denne metadataen driver mange funksjoner på tvers av appen, fra grafvisningen til disposisjonsvisningen.

Obsidian holder denne bufferen synkronisert med filene i hvelvet ditt, men det er mulig at dataene kommer ut av synk med de underliggende filene. Dersom dette skjer med hvelvet ditt, kan du bygge på nytt metadatabufferen fra appinnstillingene i *Files & Links*-seksjonen.
