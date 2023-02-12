Obsidian tillader udviklere at skrive tredjeparts plugins til at udvide Obsidian's funktionalitet.

Lige nu, er plugin API'et i en alfa status. Det betyder at dele af API'et ikke er stabilt og kan blive ændret i fremtidige versioner.

### For udviklere

Instruktioner til at udvikle nye plugins kan fås ved at studere [vores eksempel plug-in](https://github.com/obsidianmd/obsidian-sample-plugin).

Dokumentationen af API'et kan læses ved at tjekke [vores plug-in API repository på GitHub](https://github.com/obsidianmd/obsidian-api).

Når du har udviklet dit plugin, kan du tilføje det vores fællesskabsplugin markedsplads ved at oprette et "pull request" i [vores release repository på GitHub](https://github.com/obsidianmd/obsidian-releases). Læs information i vores eksempel plugin om, hvordan du frigiver opdateringer til dit plugin.

### For brugere

#### Begrænset tilstand

Obsidia har som standard "Begrænset tilstand" aktiveret for at beskytte dig mod potentiel skade fra tredjeparts kode. I "Begrænset tilstand" vil ingen tredjeparts plugins kunne anvendes.

Bemærk at tredjeparts plugins kan tilgå filer på din computer, forbinde til internettet, og endda installere yderligere programmer. Du kan læse mere om plugin sikkerhed [[Tredjeparts plugins#Plugin sikkerhed|her]].

For at kunne installere tredjeparts plugins skabt af fællesskabet skal du deaktivere "Begrænset tilstand" i "Indstillinger -> Tredjeparts plugins -> Begrænset tilstand".

#### Opdage og installere fællesskabsplugins

Når "Begrænset tilstand" er deaktiveret kan du finde tredjepartplugins skabt af fællesskabet i "Indstillinger -> Tredjeparts plugins -> Gennemse".

På denne side kan du gennemse plugins ud fra popularitet, eller søge efter specifikke plugins. klik på et plugin for at se dets detaljer og instruktioner fra udvikleren. På detaljesiden kan du klikke på "Installer" for at installere et plugin.

Efter installering af et plugin kan du finde det under "Indstillinger -> Tredjeparts plugins". Det skal aktiveres for at fungere. Du kan også afinstallere et plugin her.

### Plugin sikkerhed

Tak fordi du har tillid til at lade Obsidian håndtere dine data! Det betyder meget for os og vi tager sikkerhed meget seriøst. Det inkluderer også tredjeparts plugins.

Grundet tekniske årsager med vores platform, kan vi ikke begrænse plugins til at have bestemte tilladelser eller adgangsniveauer. Da vi tilbyder Obsidian gratis, kan vi ikke på nuværende tidspunkt manuelt gennemteste hvert plugin.

Den gode nyhed er, at Obsidian har et fantastisk og passioneret fællesskab, så vi stoler på, at fællesskabet sikrer sikkerheden for tredjeparts plugins.

Du burde generelt kunne stole på de fleste populære plugins fra vores fællesskab. Vi kræver, at alle fællesskabs tredjeparts plugins er open source og ligger offentligt på GitHub. **Hvis du arbejder med sensitive data, anbefaler vi at du inspicerer sourcekoden til et plugin før du installerer det, så du kan sikre dig, at dine sikkerhedsbehov bliver opfyldt**. Du kan finde et link til et plugins sourcekode på GitHub på dets detaljeside.

Hvis du finder sikkerhedsbrister i tredjeparts plugins, så kontakt plugin udvikleren på GitHub. Hvis du mener at et plugin er skadeligt eller ondsindet, så kontakt os, så vi kan undersøge plugin'et og fjerne det, hvis det er.
