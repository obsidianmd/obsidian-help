---
permalink: plugins/daglige-noter
---
Daglige noter åbner en note baseret på dagens dato, eller opretter den, hvis den ikke findes. Brug daglige noter til at oprette journaler, to-do lister eller daglige logs for ting du har opdaget i løbet af en dag.

Du kan åbne dagens note enten ved at:

- Klikke på **Åben dagens note** (Kalender med afkrydsningsikon) i [[Båndmenu|båndmenuen]]
- Køre **Åben dagens note** fra [[Kommandopaletten|kommandopaletten]]
- Benytte en [[Brugerdefinerede genvejstaster|genvejstast]]

Som standard vil Obsidian oprette en ny tom note med datoformatet "YYYY-MM-DD" (ISO format).

> [!tip]
> Hvis du foretrækker at have dine daglige noter i en separat mappe, kan du angive mappenavnet i **Placering af nye filer** i plugin indstillingerne.

## Opret en daglig note fra en skabelon

Hvis dine noter skal have den samme struktur kan du anvende [[Skabeloner|skabeloner]] til at tilføje prædefinderet indhold til dine daglige noter, når du opretter dem.

1. Opret en ny note med navnet "Daglig note skabelon" med den følgende tekst (eller hvad der giver mening for dig):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Opgaver

   - [ ]
   ```
   
2. Open **Indstillinger**
3. Klik på **Daglige noter** i sidepanelet under **Kerne plugins**
4. Angiv **Daglig note skabelon** i tekstfeltet til højre for **"Placering af nye noter"**

Obsidian vil derefter benytte denne skabelon næste gang du opretter en ny daglig note.

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date
