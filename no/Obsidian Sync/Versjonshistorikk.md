---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Obsidian Sync holder oversikt over alle endringer som gjøres i notatene dine, og sjekker jevnlig etter oppdateringer og oppretter nye versjoner av notatene dine.'
---
[[Introduksjon til Obsidian Sync|Obsidian Sync]] sjekker regelmessig etter oppdateringer til dine [[Synkroniseringsinnstillinger og selektiv synkronisering|synkroniserte filer]], og fører oversikt over eventuelle endringer. Disse lagres som nye oppføringer i [[#Versjonshistorikk]]. Denne informasjonen kan nås på flere måter:

- [[#Sync-historikk]]
- [[#Versjonshistorikk]]

Selv om det ikke er en del av Obsidian Sync, er en lokal versjonshistorikk også tilgjengelig på hver enhet hvis utvidelsen [[Filgjenoppretting]] er aktivert.

## Sync-historikk

Sync-historikk (eller Sync-sidefelt), introdusert i Obsidian versjon 1.7, lar deg raskt se nylig opprettede eller endrede notater og vedlegg som har blitt synkronisert. Du kan også tenke på det som en _redigerings_-historikk.

I sidefeltvet kan du velge et element for å åpne filen i det aktive vinduet. Elementene har også kontekstmenyer som lar deg utføre handlinger som å flytte filen eller vise dens [[#Notater og vedlegg|Versjonshistorikk]].

> [!compatibility] Kun for skrivebord
> Når du holder musepekeren over en synkronisert fil i sidefeltvet, kan du se hvem som sist redigerte filen. Dette er spesielt nyttig hvis du [[Samarbeid i et delt hvelv|samarbeider]] i et delt hvelv.

> [!tip] 
> Innstillinger og slettede elementer vises ikke i Sync-historikk-sidefeltvet. Disse kan i stedet finnes i [[#Notater og vedlegg|Versjonshistorikk]].

### Vis Sync-historikk

Når du aktiverer kjerneutvidelsen [[Introduksjon til Obsidian Sync|Sync]], aktiveres Sync-historikk automatisk, men vises ikke i sidefeltvet som standard. Du må legge den til manuelt ved hjelp av en kommando eller en hurtigtast.

#### Aktiver via kommandopaletten

> [!info] Dette alternativet krever at kjerneutvidelsen [[Kommandovelger]] er aktivert.

**Skrivebord/Nettbrett** ![[lucide-monitor-check.svg#icon]]

1. Åpne **kommandopaletten**. ![[lucide-terminal.svg#icon]]
2. Skriv «Sync».
3. Velg alternativet «Sync: Vis Sync-historikk».

Sync-historikk vil da vises i [[Sidefelt|høyre sidefelt]].

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]

1. Åpne [[Verktøylinje|verktøylinjen]] ![[lucide-menu.svg#icon]].
2. Åpne **kommandopaletten**. ![[lucide-terminal.svg#icon]]
3. Skriv «Sync».
4. Velg alternativet «Sync: Vis Sync-historikk».

Sync-historikk vil da vises som et nedtrekksvalg i [[Sidefelt|høyre sidefelt]].

#### Aktiver via hurtigtast

1. Åpne **[[Innstillinger]]**.
2. I kategorien **Alternativer** velger du **Hurtigtaster**.
3. I søkefeltet for hurtigtaster skriver du «Sync».
4. Ved siden av «Sync: Vis Sync-historikk» tilordner du din foretrukne hurtigtast.

## Versjonshistorikk

I tillegg til [[#Sync-historikk]] opprettholder Obsidian også en versjonshistorikk for gjenoppretting av notater og vedlegg. Hvis du ved et uhell sletter et notat eller ønsker å gå tilbake til en tidligere versjon, kan du gjenopprette det fra versjonshistorikken.

Oppbevaringsperioden for versjonshistorikken avhenger av din [[Planer og lagringsgrenser|Obsidian Sync-plan]]. På Standard-planen beholdes notater i 1 måned, mens de på Plus-planen beholdes i 12 måneder. Etter denne perioden slettes eldre versjoner av notatene dine.

For [[Vedlegg|vedlegg]] lagres eldre versjoner i <u>to uker</u>.

![[Samarbeid i et delt hvelv#^version-history-image]]

### Notater og vedlegg

Prosessen for å gjenopprette både notater og vedlegg er den samme.

#### Vis versjonshistorikk for en fil

**Skrivebord/Nettbrett** ![[lucide-monitor-check.svg#icon]]
1. I **Filutforskeren** velger du notatet du vil gjenopprette.
2. Velg **Åpne versjonshistorikk**.
3. Velg versjonen av notatet du vil vise til venstre. Innholdet vises til høyre.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. I **Filutforskeren** velger du notatet du vil gjenopprette.
2. Langt trykk for å åpne kontekstmenyen.
3. Velg **Åpne versjonshistorikk**.
4. I popup-menyen velger du versjonen av notatet du vil vise.
5. Når den er valgt, vil innholdet i notatet være tilgjengelig for gjennomgang.

#### Vis versjonshistorikk for en slettet eller omdøpt fil

1. Åpne **[[Innstillinger]]**.
2. I sidefeltvet, under **Kjerneutvidelser**, velger du **Sync**.
3. Ved siden av **Slettede filer** velger du **Vis**.
4. Velg notatet du vil se versjonshistorikken for.
5. I popup-vinduet for versjonshistorikk velger du versjonen av notatet du vil vise til venstre.

#### Gjenopprett en tidligere versjon av en fil

**Skrivebord/Nettbrett** ![[lucide-monitor-check.svg#icon]]
1. I **Filutforskeren** velger du notatet du vil gjenopprette.
2. Velg **Åpne versjonshistorikk**.
3. Velg versjonen av notatet du vil gjenopprette til venstre. Innholdet vises til høyre.
4. Velg **Gjenopprett**-knappen.
5. Notatinnholdet vil bli erstattet med den gjenopprettede versjonen.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. I **Filutforskeren** velger du notatet du vil gjenopprette.
2. Langt trykk for å åpne kontekstmenyen.
3. Velg **Åpne versjonshistorikk**.
4. I popup-menyen velger du versjonen av notatet du vil gjenopprette.
5. Når den er valgt, vil innholdet i notatet være tilgjengelig for gjennomgang.
6. Velg **Gjenopprett**-knappen.
7. Notatinnholdet vil bli erstattet med den gjenopprettede versjonen.

#### Gjenopprett en slettet fil

1. Åpne **[[Innstillinger]]**.
2. I sidefeltvet, under **Kjerneutvidelser**, velger du **Sync**.
3. Ved siden av **Slettede filer** velger du **Vis**.
4. Velg notatet du vil gjenopprette.
5. I listen over versjoner til venstre velger du versjonen du vil gjenopprette.
6. Velg **Gjenopprett**-knappen til høyre.
7. Notatet vil bli gjenopprettet til sin opprinnelige plassering i filsystemet.

> [!tip] Du kan velge flere notater med **Gjenopprett flere** ved å merke av i avkrysningsboksene, eller bruke `shift+klikk`. Disse filene vil ikke kunne gjennomgås i denne menyen.

### Innstillingshistorikk

Obsidian Sync holder også oversikt over endringer gjort i hvelvets konfigurasjonsinnstillinger.

#### Vis versjonshistorikk for en innstilling

1. Åpne **[[Innstillinger]]**.
2. I sidefeltvet, under **Kjerneutvidelser**, velger du **Sync**.
3. Naviger ned til **Synkronisering av hvelvkonfigurasjon**.
4. Velg **Vis**-knappen ved siden av **Versjonshistorikk for [[Innstillinger]]**.
5. I popup-vinduet **[[Innstillinger]]-fil** velger du en innstillingsfil du vil vise.

#### Gjenopprett en tidligere versjon av en innstilling

1. Åpne **[[Innstillinger]]**.
2. I sidefeltvet, under **Kjerneutvidelser**, velger du **Sync**.
3. Naviger ned til **Synkronisering av hvelvkonfigurasjon**.
4. Velg **Vis**-knappen ved siden av **Versjonshistorikk for [[Innstillinger]]**.
5. I popup-vinduet **[[Innstillinger]]-fil** velger du en innstillingsfil du vil vise.
6. I endringsvinduet velger du **Gjenopprett**-knappen.
7. Last inn på nytt eller start Obsidian på nytt for at innstillingen skal tre i kraft. For mer informasjon, se instruksjonene i [[Sett opp Obsidian Sync#Juster Obsidian Sync-innstillinger|Juster Obsidian Sync-innstillinger]].
