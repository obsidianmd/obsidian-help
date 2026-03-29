---
permalink: symlinks
---
Du kan bruke [symbolske lenker](https://en.wikipedia.org/wiki/Symbolic_link) (symlenker) og [koblinger](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) i hvelvet ditt for å lagre filer utenfor hvelvet og [[Hvordan Obsidian lagrer data#Globale innstillinger|systemmappen]].

> [!danger] Bruk på egen risiko
> Vi fraråder sterkt bruk av symbolske lenker. Ved å bruke symbolske lenker og koblinger i hvelvet ditt risikerer du å miste eller ødelegge dataene dine, eller at Obsidian krasjer. Sørg for å ta regelmessige sikkerhetskopier av hvelvet og innstillingene dine.

Nedenfor er noen begrensninger eller problemer vi er klar over, som du bør ha i bakhodet:

- Symlenke-løkker er ikke tillatt, for å forhindre at Obsidian krasjer på grunn av en uendelig løkke.
- Symlenke-mål må være fullstendig adskilt fra hvelvroten eller andre symlenke-mål. Adskilt betyr at én mappe ikke inneholder en annen, eller omvendt. Obsidian ignorerer alle symlenker til en overordnet mappe av hvelvet, eller fra én mappe i hvelvet til en annen mappe i det samme hvelvet. Det er en sikkerhetsfunksjon for å sikre at du ikke ender opp med dupliserte filer i hvelvet ditt, noe som kan gjøre lenker tvetydige.
- Symlenker fungerer ikke nødvendigvis godt med Obsidian Sync, eller _noen annen type synkronisering_. Hvis målet for en symlenke selv er en mappe som synkroniseres av et annet Obsidian-hvelv, kan du (potensielt) ende opp med synkroniseringskonflikter eller datatap. Noen synkroniseringsverktøy, som Git, følger ikke symlenker, men synkroniserer _banen_ symlenken peker til, noe som kan gi uønskede resultater hvis du deler hvelvet ditt med andre mennesker på den måten.
- Obsidians filbehandler kan ikke flytte filer på tvers av enhetsgrenser, så hvis du symlenker til en mappe på en annen stasjon enn hvelvet ditt, vil du ikke kunne dra filer mellom den mappen og andre mapper ved hjelp av Obsidians filutforsker. (Du må bruke operativsystemets utforsker for slike flyttinger, og Obsidian vil se flyttingen som en sletting og opprettelse av en ny fil. Den vil heller _ikke_ oppdatere noen lenker som var avhengige av filens bane.)
- Fil-symlenker (i motsetning til mappe-symlenker) _kan_ fungere, men er ikke offisielt støttet for øyeblikket. Endringer utført utenfor Obsidian overvåkes ikke, så hvis du endrer filen direkte, vil ikke Obsidian oppdage endringen, oppdatere søkeindekser osv.
- Symlinking av ting under `.obsidian/`-mappen for å dele dem mellom hvelv **har stor sjanse for å ødelegge innstillingene dine**, med mindre du _virkelig_ vet hva du gjør. Hvis du velger å gjøre dette, ha i det minste sikkerhetskopier.
