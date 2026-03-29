---
permalink: snippets
publish: true
mobile: true
description: Lær hvordan du kan endre deler av utseendet til Obsidian-appen uten å lage et fullstendig tema.
---
Lær hvordan du kan endre aspekter ved Obsidian-applikasjonens utseende uten å måtte [bygge et tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Hvis du ser etter veiledning om håndtering av CSS for [[Introduksjon til Obsidian Publish|Obsidian Publish]], bør du lese [[Tilpass nettstedet ditt]].

CSS er et språk som styrer hvordan HTML ser ut. Ved å legge til CSS-utdrag kan du endre deler av Obsidians brukergrensesnitt, som størrelsen og fargen på overskrifter. Obsidian har [CSS-variabler](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) som hjelper deg med å tilpasse grensesnittet enkelt.

Obsidian ser etter CSS-utdrag i hvelvets [[Konfigurasjonsmappe|konfigurasjonsmappe]].

## Legge til et utdrag

For å legge til et CSS-utdrag på **Skrivebord** ![[lucide-monitor-check.svg#icon]], følg disse trinnene:

1. Åpne **[[Innstillinger]]** ![[lucide-settings.svg#icon]].
2. Under **Utseende → CSS-utdrag**, velg **Åpne utdragsmappe** ![[lucide-folder-open.svg#icon]].
3. I utdragsmappen, opprett en CSS-fil som inneholder utdraget ditt.
4. I Obsidian, under **Utseende → CSS-utdrag**, velg **Last utdrag på nytt** ![[lucide-refresh-cw.svg#icon]] for å se utdraget i listen.
5. Aktiver utdraget ved å klikke på bryteren.

For å legge til et CSS-utdrag på **Mobil/Nettbrett** ![[obsidian-icon-smartphone.svg#icon]], kan du følge disse trinnene:

1. Åpne en filbehandler og finn hvelvet ditt. Du kan sjekke hvelvets plassering i _Administrer hvelv…_ ved å trykke på hvelvet ditt og se på banen.
2. Åpne [[Konfigurasjonsmappe|konfigurasjonsmappe]] og opprett en mappe kalt `snippets` hvis den ikke finnes.
3. Legg til CSS-utdraget ditt i denne mappen.
4. Åpne Obsidians **[[Innstillinger]]** ![[lucide-settings.svg#icon]].
5. Velg **Utseende** til venstre.
6. Rull ned til **CSS-utdrag**-seksjonen.
7. Trykk på **Last utdrag på nytt** ![[lucide-refresh-cw.svg#icon]] for å oppdatere listen.
8. Trykk på bryteren for å aktivere utdraget.

Alternativt kan du
- [[Synkroniser notatene dine på tvers av enheter|Synkronisere]] eventuelle endringer med synkroniseringstjenesten din.
- Bruke en community-utvidelse for å opprette et utdrag fra Obsidian.

Når det er aktivert, vil Obsidian automatisk oppdage endringer i CSS-utdrag og anvende dem når du lagrer filen.

> [!tip] Du trenger ikke starte Obsidian på nytt for at endringer skal tre i kraft. Du kan imidlertid trenge å bruke [[Kommandovelger|kommandopaletten]] for å laste inn Obsidian på nytt uten å lagre for å se endringer i gjeldende tema eller notat.

## Skrive CSS for Obsidian

Obsidian tilbyr flere metoder som gjør det enklere og mer kraftfullt å skrive CSS.

Det har en rekke [CSS-variabler](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) for enkelt å endre deler av Obsidian, og en innebygd [[Egenskaper#Egenskapstyper|egenskapstype]] for å endre utseendet til ett eller flere notater.

> [!example] Variabler
> Opprett en fil kalt `headers.css` med følgende innhold for å endre fargene på de seks [[Grunnleggende formateringssyntaks#Overskrifter|overskriftsnivåene]] til en regnbue:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS-klasser
> Tilordne navnet på en egendefinert CSS-klasse (eller en liste med CSS-klasser) til en forhåndsdefinert [[Egenskaper|egenskap]] `cssclasses` for å få ett eller flere notater til å se annerledes ut enn andre.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Egenskaper**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> I hvert notat som inneholder verdien `red-border` i `cssclasses`-egenskapen, vises bilder med en rød ramme.

For å sikre at CSS-filen er gyldig og riktig formatert, anbefaler vi å validere den med et verktøy som [CSS Validation Service](https://jigsaw.w3.org/css-validator/), ettersom ugyldig CSS ikke vil fungere.

## Les mer

- Hvis du er ny med CSS, sjekk ut [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) fra Mozilla.
- For mer informasjon om å style Obsidian, se:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
