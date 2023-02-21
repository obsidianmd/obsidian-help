I Obsidian version 0.9.5 eller nyere kan du også linke til blokke udover at [[Sådan gør du/Interne links#Links til overskrifter|linke til overskrifter]].

### Hvad er en blok

En "blok" kan være et afsnit, blokcitater, en liste osv. Generelt er alt, som har tomme linjer før og efter en blok. ^dcf64c

### Link til blokke

For at linke til en blok i en specifik fil, tast først  `[[filnavn` for at få en liste med matchende filer. Efter at have valgt en fil, tast `^`  og fortsæt med at taste for at finde den blok du vil linke til.

Når du trykker enter, vil der blive genereret et link i et format magen til `[[filnavn#^dcf64c]]`, hvor `dcf64c`  er det blok ID, som er genereret til dig.

Hvis du ikke ved hvilken fil, blokken er i, er en anden metode at taste `[[^^`  og søge efter blokke i alle filer. Dette vi lsøge gennem alle dine blokke i din boks, så forvent en smule forsinkelse, hvis din boks indeholder mange noter. ^368d4a

For eksempel [[Link til blokke#^368d4a]] er et link til blokken ovenfor.

### Indlejre blokke

På samme måde som at [[Indlejre filer|indlejre filer]] kan du benytte `!` foran et bloklink for at indlejre en blok.

Her er et eksempel:

![[Link til blokke#^dcf64c]]

### Manuelle blok ID'er

Hvis du vil have læsbare blok ID'er, kan du manuelt tilføje `^dit-id` efter en blok.
Sørg for at der er mindst et mellemrum, hvis du tilføjer ID'et i slutningen af linjen.

For at referere til komplekste blokke, som f.eks. tabeller, så tilføj blok ID'et efter blokken og sørg for at der er en tom linje før og efter blok ID'et.

Efter du har tilføjet dit blok ID manuelt, vil `dit-id` blive benyttet i stedet for et tilfældigt genereret ID, når du refererer til denne blok.

Bemærk at kun bogstaver, tal og bindestreger er tilladte i manuelle block ID'er.

### Kompabilitet

Vær opmærksom på, at blok referencer er ikke en del af standard Markdown syntaks, men en speciel Obsidian udgave af Markdown. Det betyder at disse links ikke vi lvirke udenfor Obsidian.

Du kan stadig finde refererede blokke ved at søge på blok ID'et, men det er en ret manuel proces. Forbindelsen bliver ikke afbrudt så længe du har software, der kan søge i en mappe på din computer.
