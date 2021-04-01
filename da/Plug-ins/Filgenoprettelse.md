Filgenoprettelse er et kerne plug-in som kan hjælpe dig med at genoprette dine data i tilfælde af alle mulige uheld - brugerfejl, strømsvigt, eller plug-ins og scripts som ikke opfører sig korrekt.

Filgenoprettelse er som standard aktiveret, fordi det er for sent at aktivere det, når du allerede har mistet data.

## Sådan virker det

### Snapshots

Så længe dette plugin er aktiveret bliver der taget fulde snapshots af det du arbejder på og det bliver gemt med bestemte intervaller (Du kan konfigurere intervallet).
Snapshops bliver slettet efter et bestemt stykke tid.

Denne proces er automatisk. Som standard bliver der lavet snapshots hver 5 mint, og de bliver gemt i 7 dage.

### Genoprettelse

Her kan du læse, hvordan du kan finde de gemte snapshots i tilfælde af datatab:

1. Åben "Instillinger";
2. Åben "Filgenoprettelse" fanen under "Plug-in indstillinger";
3. Klik på "Vis" knappen i "Snapshots" sektionen;
4. I søgefeltet til venstre skriver du navnet på den fil, som du vil genoprette. Hvis filnavnet ikke dukker op, betyder det at der ikke er oprettet et snapshot for den fil;
5. Når du vælger en fil i rullelisten, vil der dukke en liste med snapshots op til venstre. Vælg den version, som du vil genoprette;
6. Indholdet af det snapshot vil blive vist til højre.. Du kan klikke på "Kopier til udklipsholder" for at kopiere det hele, eller du kan vælge noget af indholdet, som du vil kopiere.

## Indstillinger

### Snapshot interval

Minimum antal minutter mellem to snapshots. 5 minutter er standard.

### Historik længde

Antal dage som et snapshot skal gemmes. 7 dage er standard.

### Ryd historik

Du kan også rydde hele historikken. ==Vær forsigtig med dette, da handlingen er irreversibel.==

## Datalager

Filgenoprettelses data er gemt i [[Hvordan Obsidian gemmer data#System mappen]] i tilfælde af, at der er fejl eller problemer med boksen.

Bemærk at bokse identificeres med deres aboslutte sti. Hvis du har flyttet en boks, bliver du nødt til at flytte den tilbage til dens tidligere position, for at genoprette snapshots fra dengang, hvor den lå der.
