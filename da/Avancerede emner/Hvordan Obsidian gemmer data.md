Vi tror på, at [[Obsidian#Hvordan vi adskiller os fra andre|dine data altid skal ejes af dig og være under din kontrol]]. Dine noter er gemt i markdown format, som er et åbent format baseret på almindelige tekst filer, og derfor vil være læsbare i fremtiden på en hvilken somhelst computer, der kan håndtere tekstfiler. Du kan frit redigere noter i anden software, selv når de er åbne i Obsidian.

### Data pr. boks
Der er dog noget data, som er nødvendig for at Obsidian kan fungere, som ikke er markdown. Obsidian opretter en mappe kaldet `.obsidian` og indholdet der er ikke gemt i markdown. Mappen indeholder din konfiguration, inklusiv genvejstaster og hvilke plug-ins, som er aktiveret. Enhver mappe som begynder med `.` er usynlige som standard på de fleste operativsystemer, så du vil sandsynligvis ikke se til at den er der. Hvis du sletter denne mappe, så vil den data ikke forsvinde, men du vil miste din brugerdefinerede indstillinger. Mappen `.obsidian` vil blive oprettet igen, hvis du åbner boksen igen i Obsidian.
Hvis du benytter `git`, er det nok bedst at sætte `.obsidian/workspace` filen til `ignore`, da den fil gemmer dine paneler og åbende filer, men vi har ikke observeret nogle problemer med at inkludere den.

### System mappen
Obsidian gemmer også noget information i system mappen. Den er forskellig afhængig af dit operativsystem;
- på Linux er det enten `$XDG_CONFIG_HOME/Obsidian/` eller `~/.config/Obsidian/`
- på Mac er det `/Users/yourusername/Library/Application Support/obsidian`
- på Windows er det `%APPDATA%\Obsidian\`

Det betyder, at vi fraråder dig til at lave en boks i denne mappe.

Bortset fra det, så kan du oprette en boks hvor som helst dit operativsystem tillader det. Obsidian filer kan fint synkroniseres med Dropbox, iCloud, OneDrive, git, og alle andre synkroniseringsværktøjer vi har prøvet indtil videre.

### Symbolske Links

Med version 0.11.1 kan Obsidian genkende symbolske links og knudepunkter. Vi anbefaler ikke officielt at benytte dem, men vi kan se, at der kan være gode grunde til at bruge dem i nogle scenarier. Brug dem på egen risiko.

Læg mærke til at der er mange faldgrupper, når man benytter symbolske links, og nogle af dem kan have seriøse konsekvenser, sådom datatab, fil beskadigelser, eller kan få Obsidian til at gå ned.

Herunder er der nogle begrænsninger eller problemstillinger som du skal være opmærksom på:

- Symlink loops er ikke tilladt, for at forhindre Obsidian i at gå ned i en uendelig løkke.
- Symlink mål skal ligge fuldstændig usammenhængende fra rodmappen til boksen eller enhvert anden symlink mål. Usammenhængende betyder, at en mappe ikke må indholde en anden og omvendt. Obsidian vil ignorere enhver symlink til en overmappe til en boks. Det er en sikkerhed for at du ikke ender med duplikerede filer i den samme boks, hvilket kan få links til at blive tvetydige.
- Symlinks fungere ikke nødvendigvis godt med "Obsidian Sync", eller _enhver anden form for synkronisering_. Hvis målet for en symlink er en mappe, som er synkroniseret af en anden boks, kan du (potentielt) ende med synkroniserings konflikter eller datatab. Nogle synkroniseringsværktøjer (f.eks. git) følger ikke symlinks, men synkroniserer den _sti_ som et symlink peger på, hvilket kan give uønskede resultater, hvis du deler din boks med andre folk på den måde.
- Obsidians stifinder kan ikke flytte filer på tværs af enhedsgrænser, så hvis du har en symlink i din boks til en mappe på et andet drev, vil du ikke kunne trække filer mellem denne mappe og andre mapper med Obsidians stifinder. (Du bliver nødt til at benytte din operativsystems stifinder til dens slags flytninger, og Obsidian vil se flytningen, som en sletning og en oprettelse af en ny fil. Obsidian vil heller _ikke_ opdatere nogle links, som var afhængige af filens sti.)
- Fil symlinks (til forskel fra mappe symlinks) virker _muligvis_, men er ikke officielt understøttet på nuværende tidspunkt. Ændringer udført på boksens filer fra programmer udefra bliver der ikke holdt øje med, så hvis du ændrer filen direkte far et andet program, vil Obsidian ikke detektere ændringen og opdatere søgeindekser osv.
- Hvis du opretter symlinks i `.obsidian/` mappen for at dele indstillinger mellem bokse, så er der **en stor chance for, at du får ødelagt dine indstillinger**, med mindre du _virkelig virkelig_ ved hvad du foretager dig. Hvis du forsøger dig på det, så sørg i det mindste for løbende backup.
