---
permalink: ribbon
publish: true
mobile: true
description: 'Lær hvordan du bruker båndet, et område for vanlige kommandoer i Obsidian, og tilpass det på datamaskin og mobil.'
---
Verktøylinjen fungerer som et sted for vanlige kommandoer i Obsidian.

På skrivebord er den plassert i [[Sidefelt#Åpne skjulte sidefelt|venstre sidefelt]] og forblir synlig selv når det venstre sidefeltet er lukket.

På mobil kan du få tilgang til [[Mobilapp#Verktøylinje-handlinger|verktøylinje-handlingene]] ved å trykke på **Menyvalget** ![[lucide-menu.svg#icon]] i nedre høyre hjørne av appen når du ikke redigerer et notat.

## Handlinger

Hver handling er representert av et ikon i verktøylinjen. Hold musepekeren over disse ikonene for å vise et verktøytips, mens du velger dem vil aktivere den tilknyttede handlingen. På mobil kan du trykke på disse ikonene for å aktivere dem.

1. Åpne **[[Administrer hvelv|Hvelvbytter]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Få tilgang til **hjelp** ![[lucide-help-circle.svg#icon]].
3. Åpne **[[Innstillinger]]** ![[lucide-settings.svg#icon]].

I mobilversjonen kan du konfigurere en hurtigtilgangshandling på verktøylinjen. For mer informasjon, se [[#Mobil|mobilseksjonen]] og [[Mobilapp]].

## Tilpass verktøylinjen

Ditt tilpassede verktøylinjeoppsett huskes mellom økter. Det synkroniseres med andre enheter og mobilappen når appinnstillinger (i filene `workspace.json` og `workspace-mobile.json`) synkroniseres.

### Skrivebord

På skrivebordsversjonen kan du tilpasse verktøylinjen som følger:

- Endre rekkefølgen på verktøylinjehandlinger ved å dra og slippe ikonene.
- For å skjule spesifikke handlinger, høyreklikk på et tomt område i verktøylinjen og fjern avmerkingen for handlingene du vil skjule.

#### Skjul verktøylinjen

Du kan skjule verktøylinjen på to måter:

- Høyreklikk på verktøylinjen og velg **Skjul verktøylinje**.
- Åpne **[[Innstillinger]]** → **Utseende**, rull ned til **Avansert**, og deaktiver **Vis verktøylinje**.

#### Vis verktøylinjen

Hvis du har skjult verktøylinjen og ønsker å vise den igjen:

1. Åpne **[[Innstillinger]]** → **Utseende**.
2. Rull ned til **Avansert**.
3. Aktiver **Vis verktøylinje**.
4. Verktøylinjen vil dukke opp igjen på venstre side av vinduet.

> [!tip] Tilpasset CSS
> Hvis du bruker et community-tema eller tilpasset CSS, sørg for at det ikke skjuler verktøylinjen gjennom egendefinerte stilregler.

### Mobil

I mobilversjonen av Obsidian kan du utføre hurtigtilgangshandlinger, omorganisere elementer og tilpasse verktøylinjemenyen. For å få tilgang til disse tilpasningene, følg disse trinnene:

1. Åpne Obsidians **[[Innstillinger]]** ![[lucide-cog.svg#icon]].
2. Naviger til seksjonen **Utseende**.
3. Rull ned til de **avanserte** alternativene.
4. Velg **Administrer**-knappen under **Ribbon Configuration**-elementet.

#### Hurtigtilgang

Som standard er hurtigtilgangsalternativet satt til «Åpne verktøylinje-meny» ved et *kort trykk*. Hvis du velger et annet alternativ som hurtigtilgang:

- Det valgte alternativet utløses med et *kort trykk*.
- Tilgangen til verktøylinjemenyen endres til et *langt trykk*.

> [!info] Hurtigtilgangsalternativer avhenger av Obsidian-innstillingene og kjerneutvidelsene du har aktivert.

#### Omorganisering og synlighet

For å endre rekkefølgen på elementer i verktøylinjemenyen, trykk og hold **dra-og-slipp**-knappen ![[lucide-menu.svg#icon]] og flytt det valgte elementet opp eller ned.

Du kan vise eller skjule elementer i verktøylinjemenyen ved å bruke den røde **fjern**-knappen ![[lucide-minus-circle.svg#icon]] eller den grønne **legg til**-knappen ![[lucide-plus-circle.svg#icon]] for å veksle synligheten.

![[ribbon-rearrange-visibility.jpeg#interface]]
