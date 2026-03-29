---
permalink: plugins/graph
publish: true
mobile: true
description: Grafvisning er et innebygd programtillegg som lar deg visualisere relasjonene mellom notatene i hvelvet ditt.
---
Grafvisning er en [[Kjerneutvidelser|kjerneutvidelse]] som lar deg visualisere relasjonene mellom notatene i hvelvet ditt.

For å åpne grafvisningen, klikk **Åpne grafvisning** i [[Verktøylinje|verktøylinjen]].

- Sirkler representerer notater, eller _noder_.
- Linjer representerer [[Interne lenker]] mellom to noder.

Jo flere noder som refererer til en gitt node, desto større blir den.

For å samhandle med notater i grafen:

- Hold musepekeren over hver sirkel for å utheve notatets forbindelser.
- Klikk på et notat i grafen for å åpne det notatet.
- Høyreklikk på et notat for å åpne en kontekstmeny med tilgjengelige handlinger for det notatet.

For å navigere rundt i grafen:

- Zoom inn og ut med musehjulet, eller bruk `+` og `-` tastene.
- Flytt grafen ved å dra den med musepekeren, eller bruk piltastene.

Du kan holde Shift mens du bruker tastaturet for å øke hastigheten på bevegelsene.

## Innstillinger

For å åpne grafinnstillingene, klikk på tannhjulikonet øverst til høyre i grafvisningen.

Klikk **Gjenopprett standardinnstillinger** øverst til høyre i innstillingsboksen for å tilbakestille eventuelle endringer du har gjort.

### Filtre

Denne delen kontrollerer hvilke noder som vises i grafen.

- **Søk i filer** lar deg filtrere notater basert på et søkeord. For å lære mer om hvordan du kan skrive mer avanserte søkeord, se [[Søk]].
- **Tagger** slår av og på om tagger skal vises i grafen.
- **Vedlegg** slår av og på om vedlegg skal vises i grafen.
- **Bare eksisterende filer** slår av og på om bare notater som finnes i hvelvet ditt skal vises. Siden et notat ikke trenger å eksistere for å lenke til det, kan dette hjelpe med å begrense grafen til notater du faktisk har i hvelvet ditt.
- **Foreldreløse** slår av og på om notater uten noen lenker skal vises.

> [!info] Ekskluderte filer
> Filer som samsvarer med mønstrene i [[Innstillinger#Ekskluderte filer|Ekskluderte filer]] vil ikke vises i grafvisningen.

### Grupper

Opprett grupper av notater for å skille dem fra hverandre ved hjelp av farge.

For å opprette en ny gruppe:

1. Klikk **Ny gruppe**.
2. I søkeboksen, skriv inn et søkeord for notatene du vil legge til i gruppen.
3. Klikk på den fargede sirkelen for å gi gruppen en farge.

For å lære mer om hvordan du kan skrive mer avanserte søkeord, se [[Søk]].

### Visning

Denne delen kontrollerer hvordan noder og lenker visualiseres i grafen.

- **Piler** slår av og på om retningen på hver lenke skal vises.
- **Terskel for tekstutfasing** kontrollerer tekstgjennomsiktigheten for navnet på hvert notat.
- **Nodestørrelse** kontrollerer størrelsen på sirkelen som representerer hvert notat.
- **Lenketykkelse** kontrollerer linjebredden for hver lenke.
- **Animer** starter en [[#Start en tidsforløpsanimasjon|tidsforløpsanimasjon]].

### Krefter

Denne delen kontrollerer kreftene som virker på hver node i grafen.

- **Sentreringskraft** kontrollerer hvor kompakt grafen er. En høyere verdi gir en mer sirkulær graf.
- **Frastøtningskraft** kontrollerer hvor mye en node skyver andre noder bort fra seg.
- **Lenkekraft** kontrollerer trekkraften på hver lenke. Hvis lenken var et gummibånd, kontrollerer lenkekraften hvor stramt eller løst båndet er.
- **Lenkeavstand** kontrollerer lengden på linjene mellom hvert notat.

## Start en tidsforløpsanimasjon

Notater og vedlegg vises i kronologisk rekkefølge basert på opprettelsestidspunktet.

![[obsidian-graph-view.png#interface]]

## Lokal graf

For å åpne en lokal grafvisning, bruk kommandoen **Åpne lokal graf**. Mens grafvisningen viser alle notater i hvelvet ditt, viser en lokal grafvisning deg notater som er koblet til det aktive notatet.

Den lokale grafvisningen kan bruke alle [[#Innstillinger]] som er tilgjengelige for den globale grafvisningen. I tillegg kan du endre dybden på den lokale grafen. Hvert dybdenivå vil vise notater som er koblet til notatene som ble avdekket på forrige dybde. For å kontrollere dybden på den lokale grafen, bruk glidebryteren øverst i filterinnstillingspanelet for den lokale grafen.
