Note værktøjet gør dig i stand til nemt at flette to filer eller udtrække dele af en note over sin egen note.

## Fletning
Når du har en fil åben, kan du vælge "Flet nuværende fil med en anden fil..." i "Flere muligheder" menuen.

Alternativt kan du åbne [[Kommandopalette|Kommandopaletten]] og benytte kommandoen "Note værktøj:Flet nuværende fil med en anden fil...".

Der vil blive vist en menu, hvor du kan vælge den fil, som du vil flette med. Når du har accepteret fletningen, vil alle links til den nuværende note blive opdateret til filen, der er flettet til.

Den nuværende note vil som standard blive flettet ind i slutningen; du kan benytte `Shift-Enter` i stedet for `Enter` for at flette til toppen.  

## Udtrækning
Når du har markeret en tekst kan du enten højreklikke på den og vælge "Udtræk nuværende markering..." i menuen, eller benytte [[Kommandopalette|Kommandopaletten]] for at finde kommandoen: "Note værktøj: Udtræk nuværende markering...".
  
På samme måde som fletning vises en menu hvor du kan vælge en fil, du kan udtrække indholdet til. Hvis ikke der findes en fil vil der blive oprettet en ny note. Hvis du vil oprette en ny note i stedet for at udtrække til en eksisterende, så tryk `Ctrl-Enter` (eller `Cmd-Enter` på macOS).

## Indstillinger
Note værktøjet har nogle enkelte indstillinger.

### Teksten efter flytning
Når du har udtrukket noget markeret tekst, er det ofte en god idé at efterlade et link til den nye fil. Som standard bliver der oprettet et link. Men du kan ogs ændre en indstilling til, at den lave en indlejret note i stedet, eller slet ikke indsætter noget.

### Skabelon fil
Du kan også benytte en skabelon, når du fletter og udtrækker i stedet for bare at flytte indholdet. 

Skabelon filen kan indeholde følgende variabler:

- `{{content}}`: Her vil indholdet blive placeret. Hvis du ikke inkluderer denne variabel vil indholdet automatisk blive placeret i bunden af skabelonen.

- `{{fromTitle}}`: navnet på den note, hvor den nye note kommer fra.

- `{{newTitle}}`: titlen på den nye fil. Det er praktisk hvis du vil have at overskriften i toppen af filen skal være det samme som filnavnet.

- `{{date:FORMAT}}`: du kan tilføje flere datoer i det datoformat du ønsker.  F.eks. kan du skrive `{{date:YYYY-MM-DD}}` og det vil blve erstattet af den dato, hvor filen blev oprettet.  

### Bekræfte fil fletning
Når du fletter filer vil kildefilen blive slettet, så som standard beder vi om din bekræftelse. Hvis du ønsker det kan du skippe denne bekræftelse.

Hvid du ved et uheld har flettet noget og vil have kildefilen tilbage, så overvej at benytte [[Filgenoprettelse]] plug-in'et for at genoprette den.
