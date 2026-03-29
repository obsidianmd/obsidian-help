---
permalink: plugins/command-palette
---
[[Kommandopalett|Tillägget]] Kommandopalett låter dig köra vilket kommando som helst direkt från tangentbordet. Det låter dig också utforska alla tillgängliga kommandon och deras [[Snabbkommandon|tangentbordsgenvägar]].

För att köra ett kommando från kommandopaletten:

1. Tryck på `Ctrl+P` (eller `Cmd+P` på macOS) för att öppna kommandopaletten. Du kan också öppna den från [[Ribbon]] med kommandopalettikonen ![[lucide-terminal.svg#icon]].
2. Skriv namnet på kommandot du vill köra.
3. Navigera till kommandot med piltangenterna.
4. Tryck på `Enter`.

> [!tip] Tips
> Kommandopaletten stöder _fuzzy matching_, vilket gör att du kan söka efter kommandon även om du inte vet deras exakta namn. Till exempel kommer "scf" att hitta kommandot **S**ave **c**urrent **f**ile (Spara aktuell fil).

Från och med **version 1.8.3** visas nyligen använda kommandon överst i kommandopaletten. Dessa nyligen använda kommandon omfattas dock fortfarande av _fuzzy matching_-algoritmen. När du börjar filtrera prioriteras kortare kommandon framför nyligen använda.

## Fästa kommandon

Du kan fästa ofta använda kommandon överst i kommandopaletten för att snabbt komma åt dem utan att behöva skriva deras namn.

> [!tip] Tips
> Om du snabbt vill köra ofta använda kommandon kan du också [[Snabbkommandon#Ange en tangentbordsgenväg|ange tangentbordsgenvägar]] för dem.

### Fäst ett kommando

1. Öppna **[[Inställningar]]**.
2. Klicka på **Kommandopalett** under **Tilläggsinställningar** i sidofältet.
3. Bredvid **Nytt fäst kommando**, klicka på **Välj ett kommando**.
4. Välj kommandot du vill fästa från listan.
5. Tryck på `Enter`.

### Lossa ett kommando

1. Öppna **[[Inställningar]]**.
2. Klicka på **Kommandopalett** under **Tilläggsinställningar** i sidofältet.
3. Under **Fästa kommandon**, klicka på kryssikonen bredvid kommandot du vill lossa.
