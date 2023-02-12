Note værktøjet lader dig flette to noter eller udtrække dele af en note til en ny note.

## Flette noter

Når du fletter to noter tilføjes den første note til den anden og den første note slettes. Note værktøjet opdaterer alle links, der refererer til den sammenflettede note.

Når du vælger en note, som du vi lflette ind i, kan du vælge mellem følgende metoder:

- `Retur`: Tilføjer kildenoten til _slutningen_ af destinationsnoten
- `Shift+Retur`: Tilføjer kildenoten til _starten_ af destinationsnoten
- `Ctrl+Retur` (eller `Cmd+Retur` på macOS): Opretter en ny note med indholdet af kildenoten

For at flette den aktive note med en anden note i din boks skal du:

I **Stifinderen**

1. Højreklikke på den note i stifinderen, som du vil flette
2. Klikke på **Flet hele filen med...**
3. Vælge den note du vil flette filen ind i
4. Klikke på **Flet** for at godkende fletningen

I **Kommandopaletten**

1. Åbne [[Kommandopalette|kommandopaletten]]
2. Vælge **Note værktøj: Flet nuværende fil med en anden fil...**
3. Vælge den note du vil flette filen ind i
4. Klikke på **Flet** for at godkende fletningen

> [!tip]
> Som standard spørger note værktøjet dig, som du vil godkende, når du fletter noter. Du kan deaktivere denne godkendelse, og hvis du fletter en note ved en fejl, kan du stadig genoprette den slettede note ved hjælp af [[Filgenoprettelse| Fil genoprettelses pluginnet]].

## Udtræk til note
Når du vælger den note, som du vil udtrække en markeret tekst til, kan du vælge mellem følgende metoder:

- `Retur`: Tilføjer kildenoten til _slutningen_ af destinationsnoten
- `Shift+Retur`: Tilføjer kildenoten til _starten_ af destinationsnoten
- `Ctrl+Retur` (eller `Cmd+Retur` på macOS): Opretter en ny note med indholdet af kildenoten

For at udtrække en teksten til en ny note skal du:

**I editoren**

1. I **redigeringstilstand** skal du markere den tekst, som du vil udtrække
2. Højreklikke på den markerede tekst
3. Klikke på **Udtræk nuværende markering...** i popup menuen
4. Vælge den note, som du til udtrække teksten til

**Kommandopaletten**

1. I **redigeringstilstand** skal du markere den tekst, som du vil udtrække
2. Åbne [[Kommandopalette|kommandopaletten]]
3. Vælge **Note værktøj: Udtræk nuværende markering...**
4. Vælge den note, som du til udtrække teksten til

> [!tip]
> Som standard erstatter note værktøjet den utrukne tekst med et link til destinationsnoten. Under indstillinger kan du ændre det til at teksten bliver [[Indlejre filer|indlejret]] i destinationsnoten, eller slet ikke at efterlade noget tekst i kildenoten.

## Skabeloner

Ved at oprette en skabelon kan du tilpasse indholdet før du tilføjer den til en ny note. For at anvende skabeloner skal du angive en **placering af skabelonmappe** under indstillingerne til note værktøjet.

Skabelonen kan indeholde følgende variabler:

| Variable          | Description                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Det inhold, som skal flettes ind, eller den udtrukne valgte tekst. Hvis du ikke inkluderer denne variabel, vil note værktøjet tilføje indholdet til slutningen af skabelonen. |
| `{{fromTitle}}`   | Navnet på kildenoten.                                                                                                                                 |
| `{{newTitle}}`    | Navnet på destinationsnoten. F.eks. kan du tilføje filnavnet som en overskrift i begyndelsen af noten.                                                     |
| `{{date:FORMAT}}` | Den nye notes oprettelsesdato. F.eks., `{{date:YYYY-MM-DD}}`.                                                                                       |
