Hvis du vil tilføje brugerdefinerede typografier eller temaer til din boks, er der to måder at gøre det på:

## Boks typografier

### Temaer

Temaer tillader dig at skifte udseendet af din boks via en rullemenu, når de er tilføjet til din temamappe i din boks.

Denne konfiguration kan findes i sektionen "Indstillinger -> Udseende -> Temaer" i dine boks indstillinger.

### Oprette et brugerdefineret tema

Hvis du vil oprette dit eget tema, kan du gøre det sådan:

1. Opret din tema CSS fil i boksens tema mappe `DIN_BOKS/.obsidian/themes/DIT_BRUGERDEFINEREDE_TEMA.css`
2. Aktiver dit tema i rullemenuen i sektionen "Indstillinger -> Udseende -> Temaer" i dine boks indstillinger.

Ønsker du mere information om at tilpasse grafens udseende, så kan du finde den her: [[Grafvisning]].

### Benyt 'obsidian.css'

> Dette er for nuværende markeret som en ældre indstilling

Denne konfiguration kan findes i dine boksindstillinger under "Indstillinger -> Udseende -> Anvend brugerdefineret CSS" og kan aktiveres eller deaktiveres .

## Obsidian Publish typografier

På nuværende tidspunkt er [[Obsidian Publish]] ikke i stand til automatisk at detektere din boks konfigurerede [[Tilføj brugerdefinerede temaer#Temaer|temaer]] og publicerede de respektive typer.

En løsning for denne begræsning er:

1. Gå ind i `DIN_BOKS/.obsidian/themes/NUVÆRENDE_TEMA_MAPPE`;
2. Kopier den primære CSS `NUVÆRENDE_TEMA.css` fil i mappen; 
3. Indsæt filen i din boks rodmappe (`DIN_BOKS`);
4. Omdøb CCS filen til  `publish.css`;
5. Upload `publish.css` filen med Obsidian Publish;
6. Hvis dit CSS ikke tager effekt i løbet af et par minutter, så prøv at opfriske din browsers cache, da den forældede CSS kan være cachet.
