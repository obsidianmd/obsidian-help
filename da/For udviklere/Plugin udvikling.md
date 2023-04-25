Lær hvordan du kan udvide Obsidian med flere funktioner ved at udvikle dine egne plugins og dele dem med fællesskabet.

## Kom hurtigt i gang

Den nemmeste måde at komme i gang med Obsidian plugin udvikling er ved at tage udgangspunkt i [Obsidian eksempel pluginnet](https://github.com/obsidianmd/obsidian-sample-plugin).

> [!danger] Før du begynder
> Lad være med at udvikle plugins i din hovedboks, hvor du måske har værdifuld information. Når du udvikler plugins kan en fejl føre til uhensigtsmæssige ændringer af din boks. Du kan også risikere at din boks bliver slettet permanent ved en fejl.

1. Start med at klone eksempel pluginnet:
   
   ```bash
   git clone https://github.com/obsidianmd/obsidian-sample-plugin.git
   mv obsidian-sample-plugin your-plugin-id
   cd your-plugin-id
   ```

2. Installer de afhængigheder, som NPM eller Yarn benytter:

   ```bash
   # Using NPM
   npm install

   # Using Yarn
   yarn install
   ```
   
3. Byg pluginnet, hver gang du har redigeret i sourcekoden:

   ```bash
   # Using NPM
   npm run dev

   # Using Yarn
   yarn run dev
   ```
   
4. Installer pluginnet i din udviklingsboks:
   
   ```bash
   mkdir $YOUR_VAULT_PATH/.obsidian/plugins/your-plugin-id
   mv main.js styles.css manifest.json $VAULT_PATH/.obsidian/plugins/your-plugin-id
   ```

5. Genstart Obsidian

Har du brug for mere hjælp til at udvikle Obsidian plugins, kan du læse mere i de følgende ressourcer:

- API reference dokumentation findes her: [Obsidian API](https://github.com/obsidianmd/obsidian-api).
- Hvis du har brug for en mere dybdegående guide til at komme i gang med plugin udvikling, så læs: [Obsidian Plugin Developer Docs](https://marcus.se.net/obsidian-plugin-docs) af [Marcus Olsson](https://marcus.se.net).
- Du kan også finde en video gennemgang af hvoirdan du udvikler plugins; Find vores YouTube playliste her: [Build you first Obsidian plugin](https://www.youtube.com/playlist?list=PLIDCb22ZUTBnMCbJa-st4PD5T3Olep078).

## Udgiv dit plugin

Når dit plugin er færdigt, kan du dele dit plugin med Obsidian fællesskabet ved at udgive det.

Du kan læse en detaljeret guide om, hvordan du udgiver dit plugin her: [How to add your plugin to the community plugin list](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/How+to+add+your+plugin+to+the+community+plugin+list)

## Fællesskabet og support

Hvis du går i stå, eller har brug for feedback, så [tilmeld dig fællesskabet](https://obsidian.md/community).

- `#plugin-dev` kanalen på Discord
- [Developers & API](https://forum.obsidian.md/c/developers-api/14) og [Share & showcase](https://forum.obsidian.md/c/share-showcase/9) på vores forum
