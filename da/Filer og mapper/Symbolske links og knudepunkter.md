---
permalink: symbolske-links
---


Du kan anvende [symbolske links](https://en.wikipedia.org/wiki/Symbolic_link) (symlinks) og [knudepunkter](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) i din boks for at gemme filer udenfor din boks og [[Hvordan Obsidian gemmer data#Globale indstillinger|system mappe]].

> [!danger] Brug af dem er på egen risiko
> Bemærk at der er mange faldgrupper, når man benytter symbolske links, og nogle af dem kan have seriøse konsekvenser, sådom datatab, fil beskadigelser, eller kan få Obsidian til at gå ned. Sørg for at du tager backup regelmæssigt af din boks og dens indstillinger.

Herunder er der nogle begrænsninger eller problemstillinger som du skal være opmærksom på:

- Symlink loops er ikke tilladt, for at forhindre Obsidian i at gå ned i en uendelig løkke.
- Symlink mål skal ligge fuldstændig usammenhængende fra rodmappen til boksen eller enhvert anden symlink mål. Usammenhængende betyder, at en mappe ikke må indholde en anden og omvendt. Obsidian vil ignorere enhver symlink til en overmappe til en boks. Det er en sikkerhed for at du ikke ender med duplikerede filer i den samme boks, hvilket kan få links til at blive tvetydige.
- Symlinks fungere ikke nødvendigvis godt med "Obsidian Sync", eller _enhver anden form for synkronisering_. Hvis målet for en symlink er en mappe, som er synkroniseret af en anden boks, kan du (potentielt) ende med synkroniserings konflikter eller datatab. Nogle synkroniseringsværktøjer (f.eks. git) følger ikke symlinks, men synkroniserer den _sti_ som et symlink peger på, hvilket kan give uønskede resultater, hvis du deler din boks med andre folk på den måde.
- Obsidians stifinder kan ikke flytte filer på tværs af enhedsgrænser, så hvis du har en symlink i din boks til en mappe på et andet drev, vil du ikke kunne trække filer mellem denne mappe og andre mapper med Obsidians stifinder. (Du bliver nødt til at benytte din operativsystems stifinder til dens slags flytninger, og Obsidian vil se flytningen, som en sletning og en oprettelse af en ny fil. Obsidian vil heller _ikke_ opdatere nogle links, som var afhængige af filens sti.)
- Fil symlinks (til forskel fra mappe symlinks) virker _muligvis_, men er ikke officielt understøttet på nuværende tidspunkt. Ændringer udført på boksens filer fra programmer udefra bliver der ikke holdt øje med, så hvis du ændrer filen direkte far et andet program, vil Obsidian ikke detektere ændringen og opdatere søgeindekser osv.
- Hvis du opretter symlinks i `.obsidian/` mappen for at dele indstillinger mellem bokse, så er der **en stor chance for, at du får ødelagt dine indstillinger**, med mindre du _virkelig virkelig_ ved hvad du foretager dig. Hvis du forsøger dig på det, så sørg i det mindste for løbende backup.
