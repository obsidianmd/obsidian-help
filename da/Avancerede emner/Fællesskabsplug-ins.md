Obsidian tillader udviklere at skrive tredjeparts plug-ins til at udvide Obsidian's funktionalitet.

Lige nu, er plug-in API'et i en alfa status. Det betyder at dele af API'et ikke er stabilt og kan blive ændret i fremtidige versioner.

### For udviklere

Instruktioner til at udvikle nye plug-ins kan fås ved at studere [vores eksempel plug-in](https://github.com/obsidianmd/obsidian-sample-plugin).

Dokumentationen af API'et kan læses ved at tjekke [vores plug-in API repository på GitHub](https://github.com/obsidianmd/obsidian-api).

Når du har udviklet dit plug-in, kan du tilføje det vores fællesskabs plug-in markedsplads ved at oprette et "pull request" i [vores release repository på GitHub](https://github.com/obsidianmd/obsidian-releases). Læs information i vores eksemple plug-in om, hvordan du frigiver opdateringer til dit plug-in.

### For brugere

#### Sikker tilstand

Obsidia har som standard "Sikker tilstand" aktiveret for at beskytte dig mod potentiel skade fra tredjepartskode. I "Sikker tilstand" vil ingen tredjepartsplug-ins kunne anvendes.

Bemærk at tredjeparts plug-ins kan tilgå filer på din computer, forbinde til internettet, og endda installere yderligere programmer. Du kan læse mere om plug-in sikkerhed [[Fællesskabsplug-ins#Plugin sikkerhed|her]].

For at kunne installere tredjeparts plug-ins skabt af fællesskabet skal du deaktivere "Sikker tilstand" i "Indstillinger -> Tredjeparts plug-ins -> Sikker tilstand".

#### Opdage og installere fællesskabs plug-ins

Når "Sikker tilstand" er deaktiveret kan du finde tredjeparts plug-ins skabt af fællesskabet i "Indstillinger -> Tredjeparts plug-ins -> Gennemse".

På denne side kan du gennemse plug-ins ud fra popularitet, eller søge efter specifikke plug-ins. klik på et plug-in for at se dets detaljer og instruktioner fra udvikleren. På detaljesiden kan du klikke på "Installer" for at installere et plug-in.

Efter installering af et plug-in kan du finde det under "Indstillinger -> Tredjeparts plug-ins". Det skal aktiveres for at fungere. Du kan også afinstallere et plugin her.

### Plugin sikkerhed

Tak fordi du har tillid til at lade Obsidian håndtere dine data! Det betyder meget for os og vi tager sikkerhed meget seriøst. Det inkluderer også tredjeparts plug-ins.

Grundet tekniske årsager med vores platform, kan vi ikke begrænse plug-ins til at have bestemte tilladelser eller adgangsniveauer. Da vi tilbyder Obsidian gratis, kan vi ikke på nuværende tidspunkt manuelt gennemteste hvert plug-in.

Den gode nyhed er, at Obsidian har et fantastisk og passioneret fællesskab, så vi stoler på, at fællesskabet sikrer sikkerheden for tredjeparts plug-ins.

Du burde generelt kunne stole på de fleste populære plug-ins fra vores fællesskab. Vi kræver, at alle fællesskabs tredjeparts plug-ins er open source og ligger offentligt på GitHub. **Hvis du arbejder med sensitive data, anbefaler vi at du inspicerer sourcekoden til et plugin før du installerer det, så du kan sikre dig, at dine sikkerhedsbehov bliver opfyldt**. Du kan finde et link til et plug-ins sourcekode på GitHub på dets detaljeside.

Hvis du finder sikkerhedsbrister i tredjeparts plug-ins, så kontakt plug-in udvikleren på GitHub. hvis du mener at et plug-in er skadeligt eller ondsindet, så kontakt os, så vi kan undersøge plug-in'et og fjerne det, hvis det er.
