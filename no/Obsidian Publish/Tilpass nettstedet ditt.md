---
permalink: publish/customize
publish: true
description: Lær hvordan du tilpasser utseendet og stilen til Obsidian Publish-nettstedet ditt.
---
Denne siden forklarer hvordan du kan tilpasse utseendet og opplevelsen av [[Introduksjon til Obsidian Publish|Obsidian Publish]]-nettstedet ditt.

## Statiske ressurser

Du kan tilpasse nettstedet ditt ved å [[Publiser innholdet ditt#Publiser notater|publisere]] følgende filer til nettstedet ditt:

- `publish.css` for å legge til egendefinert CSS
- `publish.js` for å legge til egendefinert JavaScript
- `favicon-32x32.png` for å sette faviconet

**Merknader:**

- [CSS-variabler for Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) finnes på dokumentasjonssiden vår.
- Siden Obsidian ikke støtter CSS- eller JavaScript-filer, må du bruke en annen applikasjon for å opprette og redigere dem.
- Både `publish.css` og `publish.js` må ligge i rotmappen (`/`) til hvelvet ditt.
- Som standard vises ikke `publish.css` og `publish.js` i filutforskeren, men du kan likevel publisere dem fra **Publish changes**-dialogen.
- For å bruke egendefinert JavaScript med `publish.js`, må du ha [[Egendefinerte domener]].

For faviconer støtter Obsidian Publish følgende navnekonvensjoner, der `32` representerer ikonets dimensjoner i piksler:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Vi anbefaler at du oppgir én eller flere av følgende dimensjoner:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Du har fleksibilitet til å plassere faviconer hvor som helst i hvelvet, så lenge de er publisert til nettstedet ditt.

## Bruk et community-tema

For å bruke et av community-temaene for nettstedet ditt:

1. Åpne hvelvet ditt i standard filutforsker for operativsystemet ditt.
2. Gå til hvelvets innstillingsmappe (standard: `.obsidian`).
3. Åpne `themes`-mappen.
4. Kopier CSS-filen for temaet du vil bruke for nettstedet ditt.
5. Lim inn filen i rotmappen til hvelvet ditt.
6. Gi CSS-filen nytt navn til `publish.css`.
7. [[Publiser innholdet ditt#Publiser notater|Publiser]] `publish.css`.

**Merknader:**

- Hvis stilen ikke oppdateres innen noen minutter, prøv å tømme nettleserens hurtigbuffer.
- Du kan veksle mellom lyst og mørkt modus i [[Administrer nettsteder#Vis nettstedsalternativer|nettstedsalternativene]].
- Mange community-temaer bruker **Style Settings** for egendefinert styling, men disse innstillingene fungerer ikke på Obsidian Publish.

> [!tip] Utvikle temaer
> Finner du ikke temaet for deg? Lær hvordan du [bygger et Publish-tema](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) selv.

## Aktiver UI-funksjoner

Du kan slå av og på flere UI-funksjoner for nettstedet ditt, som grafvisning eller en innholdsfortegnelse.

Bla gjennom tilgjengelige UI-funksjoner under seksjonene **Leseopplevelse** og **Komponenter** i [[Administrer nettsteder#Vis nettstedsalternativer|nettstedsalternativene]].

### Tilpass navigasjon

I Obsidian Publish har du muligheten til å tilpasse navigasjonsrekkefølgen og visningen av filer og mapper i Publish-[[Filutforsker|filutforskeren]]. Navigasjonselementer er oppført i publisert rekkefølge som standard. Notater som ikke er publisert vil ikke vises i dette panelet.

#### Tilgang til alternativer for tilpasset navigasjon

1. I [[Verktøylinje|verktøylinjen]], velg **Publish changes** ![[lucide-send.svg#icon]] eller åpne [[Kommandovelger|kommandopaletten]] og skriv **Publish: Publish changes...**
2. I **Publish changes**-dialogen, velg **Endre nettstedsalternativer** ![[lucide-cog.svg#icon]].
3. Under **Komponentinnstillinger**, ved siden av **Tilpass navigasjon**, velg **Administrer**-knappen.

Et nytt popup-vindu med tittelen **Navigasjon** vil vises over vinduet **Endre nettstedsalternativer**.

#### Juster navigasjonselementer

I seksjonen merket **Forhåndsvisning av navigasjon** kan du justere visningsrekkefølgen til det publiserte innholdet ditt.

1. Velg mappen eller notatet du vil justere.
2. Dra notatet eller mappen opp eller ned til det er på ønsket plass.
3. Nederst til høyre i **Navigasjon**-vinduet, velg **Ferdig**.

Publish vil sende navigasjonsendringene dine til nettstedet ditt.

#### Skjul og vis navigasjonselementer

Hvis det er notater eller mapper du har publisert, men som du ikke ønsker skal være synlige i navigasjonen din, kan du velge å skjule disse elementene i stedet.

1. Velg mappen eller notatet du vil justere.
2. Høyreklikk og velg **Skjul i navigasjon**. Elementet skal nå forsvinne fra **Forhåndsvisning av navigasjon**.
3. Nederst til høyre i **Navigasjon**-vinduet, velg **Ferdig**.

Publish vil sende navigasjonsendringene dine til nettstedet ditt.

> [!tip] Du kan **Vis skjulte** filer ved å velge avkrysningsboksen til høyre for tittelen **Forhåndsvisning av navigasjon**

## Ofte stilte spørsmål

**Kan jeg flytte filer fra en mappe til en annen innenfor navigasjonen?**

Nei. Filnavigasjonsstrukturen for notater innenfor mapper må opprettholdes. Du kan justere notatrekkefølge innenfor mapper (inkludert hvelvroten), og mapperekkefølge innenfor andre mapper.

**Kan jeg redigere rekkefølgen til flere notater og mapper før jeg velger Ferdig?**

Ja.

**Hvordan tilbakestiller jeg disse endringene?**

- **Visningsrekkefølge**: Velg **Tilbake til standard**-ikonet (pil som roterer mot klokken) ved siden av **Visningsrekkefølge for navigasjonselementer**. Dette vil gjenopprette navigasjonselementene dine til alfabetisk rekkefølge.
- **Skjult status**: Velg **Tilbake til standard**-ikonet (pil som roterer mot klokken) ved siden av **Skjul sider eller mapper fra navigasjon**. Dette vil gjenopprette de skjulte navigasjonselementene dine til en synlig tilstand.
