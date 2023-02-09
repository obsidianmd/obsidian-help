Du kan benytte skabeloner til at indsætte foruddefineredet tekst ind i din aktive note.

## Indstil din skabelonmappe

1. Klik på **indstillinger** (tandhjulsikonet) nederst i båndmenuen til venstre
2. Under **Kerne plugins -> Skabeloner -> Placering af skabelonmappe** angiver du den mappe, som skal indeholde dine skabeloner

## Indsæt en skabelon i den aktive note

**Vigtigt:** For at indsætte en skabelon skal du først [[#Indstil din skabelonmappe|indstille din skabelonmappe]].




---

**Important:**  To insert a template, you need to first [[#Set your template folder]].

1. In the ribbon, click **Insert template**.
1. Select the template to insert at the cursor position in the active note.

If your template folder contains only one note, Templates inserts it directly into the active note.

## Template variables

You can add dynamic information to your templates, using _template variables_. When you insert a template containing a template variable, Templates replaces it with its corresponding value.

| Variable    | Description                                     |
|-------------|-------------------------------------------------|
| `{{title}}` | Title of the active note.                       |
| `{{date}}`  | Today's date. **Default format:** `YYYY-MM-DD`. |
| `{{time}}`  | Current time. **Default format:** `HH:mm`.      |

Both `{{date}}` and `{{time}}` allow you to change the default format using a _format string_.

To set a format string, add a colon (`:`) followed by a string of [Moment.js format tokens](https://momentjs.com/docs/#/displaying/format/), for example `{{date:YYYY-MM-DD}}`.

You can use `{{date}}` and `{{time}}` interchangeably with format strings, for example `{{time:YYYY-MM-DD}}`.

You can change the default date and time formats under **Settings > Templates > Date format** and **Settings > Templates > Time format**.

> [!tip]
> You can also use the `{{date}}` and `{{time}}` template variables in the [[Daily notes]] and [[Unique note creator]] plugins.


---
Skabelon plug-in'et giver dig mulighed for hurtigt at indsætte tekststykker i din nuværende note.

### Opsætning af skabelon mappe
Hver skabelon tekststykke er lige som en normal Markdown note, ligesom alle andre noter i Obsidian.

For at anvende teksbidder som skabeloner, skal de ligge i en mappe, og den skal angives i "Indstillinger -> Skabeloner -> Placering af skabelonmappe" efter at plug-in'et er aktiveret.

### Indsætte en skabelon

Når du har angivet en skabelonmappe kan du benytte "Indsæt skabelon" ikonet fra venstre menubjælke for at indsætte skabeloner. Som altid, kan du også angive en genvejstast til denne funktion, eller benytte kommandopaletten for at få adgang til funktionen.

Skabelon tekststykket vil blive indsat på markørens position i noten, og speciel tekst vil blive erstattet af deres faktiske indhold på det tidspunkt, hvor tekststykket indsættes (Se forneden).

### Indsæt titel
Hvis du vil indsætte notens titel, kan du gøre det i skabelonen med `{{title}}`.

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
