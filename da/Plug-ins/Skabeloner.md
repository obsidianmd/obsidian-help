Skabelon plug-in'et giver dig mulighed for hurtigt at indsætte tekststykker i din nuværende note.

### Opsætning af skabelon mappe
Hver skabelon tekststykke er lige som en normal Markdown note, ligesom alle andre noter i Obsidian.

For at anvende teksbidder som skabeloner, skal de ligge i en mappe, og den skal angives i "Indstillinger -> Skabeloner -> Placering af skabelonmappe" efter at plug-in'et er aktiveret.

### Indsætte en skabelon

Når du har angivet en skabelonmappe kan du benytte "Indsæt skabelon" ikonet fra venstre menubjælke for at indsætte skabeloner. Som altid, kan du også angive en genvejstast til denne funktion, eller benytte kommandopaletten for at få adgang til funktionen.

Skabelon tekststykket vil blive indsat på markørens position i noten, og speciel tekst vil blive erstattet af deres faktiske indhold på det tidspunkt, hvor tekststykket indsættes (Se forneden).

### Indsæt dato og tid
I indstillingerne for skabelon plug-in'et kan du også angive et datoformat og et tidsformat.

Når disse er sat, kan `{{date}}` og `{{time}}` anvendes i skabelon filerne og de erstattes af den nuværende dato og tidspunkt afhængig af det format, du har defineret in indstillingerne.

For en omfattende dokumentation af mulig formateringssyntax, [så se her](https://momentjs.com/docs/#/displaying/format/).

_Tip: Hvis du har brug for to forskelllige formaterede tidsformater i en skabelon, så kan du bare anvende `{{time}}` som den anden `{{date}}`, eller `{{date}}` som den anden `{{time}}`._

_Dansk tip: Hvis du vil anvende en fuld dansk dato som: "12. februar 2021", så benyt `{{date}}` = "DD. MMMM YYYY" _

_Dansk tip: Hvis du vil anvende dansk tid som: "14:23", så benyt `{{time}}` = "HH:mm" _

### Engangs dato formattering

Udover `{{date}}` og `{{time}}`, som virker i alle skabelonfiler, kan du også skrive `{{date:YYYY-MM-DD}}` for at indsætte en dato med et specifikt datoformat. Dette tilsidesætter `{{date}}` formateringen, som er angivet i instillingerne. Alt efter `:` betragtes som del af datoformatet.

`{{time:HH:mm}}` virker på samme måde.

### Benyttelse af brugerdefineret dato formater andre steder

I øjeblikket virker datoformater som `{{date:YYYY-MM-DD}}` og `{time:HH:mm}}` også i skabelonfiler for [[Daglige noter]] og [[Zettelkasten præfikser]] plug-in'erne. Mens `{{date}}` og `{{time}}` virker ikke endnu.
