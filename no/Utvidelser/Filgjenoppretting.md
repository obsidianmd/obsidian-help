---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Filgjenoppretting bidrar til å beskytte arbeidet ditt mot utilsiktet datatap ved å automatisk lagre øyeblikksbilder av notatene dine med jevne mellomrom.
---
Filgjenoppretting er en [[Kjerneutvidelser|kjerneutvidelse]] som beskytter arbeidet ditt mot utilsiktede slettinger, filkorrupsjon eller uønskede endringer ved å automatisk lagre komplette øyeblikksbilder av notatene dine med jevne mellomrom. Filgjenoppretting er ikke en komplett sikkerhetskopieringsløsning, og vi anbefaler også å [[Sikkerhetskopier Obsidian-filene dine|sikkerhetskopiere]] Obsidian-filene dine separat.

For å unngå å ta opp [[#Lagring og ytelse|for mye plass]] beholder Obsidian øyeblikksbilder i et visst antall dager før de slettes. Øyeblikksbilder fanger hele innholdet i filene dine, ikke bare endringer, slik at du kan gjenopprette en hvilken som helst tidligere versjon.

> [!info]+ Info
> Som standard lagres øyeblikksbilder minimum 5 minutter fra hverandre, og beholdes i 7 dager. Du kan konfigurere begge intervallene under **[[Innstillinger]] → Kjerneutvidelser → Filgjenoppretting**.

Øyeblikksbilder lagres i [[Hvordan Obsidian lagrer data#Globale innstillinger|Globale innstillinger]], utenfor hvelvet, for å ta høyde for hvelvrelatert datatap. Dette betyr at øyeblikksbilder lagres med den absolutte banen til notatet. Hvis du nylig har flyttet hvelvet ditt, kan det hende du må flytte det tilbake til plasseringen der det var da øyeblikksbildet ble tatt.

> [!tip] Hvis du bruker [[Introduksjon til Obsidian Sync|Obsidian Sync]] eller [[Synkroniser notatene dine på tvers av enheter|andre synkroniseringstjenester]], vil øyeblikksbilder fra filgjenoppretting ikke synkroniseres mellom enheter. Øyeblikksbilder er enhetsspesifikke og forblir lokale på hver enhet.

## Gjenopprett et øyeblikksbilde

1. Åpne **[[Innstillinger]]**.
2. Velg **Filgjenoppretting** under **Kjerneutvidelser** i sidefeltet.
3. Under **Øyeblikksbilder**, velg **Visning**.
4. I filnavnfeltet begynner du å skrive navnet på filen du ønsker å gjenopprette, og du vil se en forslagsliste.
5. Velg filen, trykk Enter, og du vil se en liste over tilgjengelige øyeblikksbilder.
6. Velg øyeblikksbildet du ønsker å gjenopprette.
    1. Hvis du ønsker å kopiere og lime inn i et nytt notat, velg **Kopier**-knappen.
    2. Hvis du ønsker å gjenopprette filen fullstendig, velg **Gjenopprett**-knappen.
7. Du kan valgfritt vise forskjellene mellom øyeblikksbilder ved å slå på **Show diff**. Dette viser hvilket innhold som ble lagt til, fjernet eller endret mellom øyeblikksbildeversjoner.

## Tøm øyeblikksbildehistorikk

> [!danger] Tømming av øyeblikksbildehistorikken sletter irreversibelt alle øyeblikksbilder i hvelvet ditt.

1. Åpne **[[Innstillinger]]**.
2. Velg **Filgjenoppretting** under **Kjerneutvidelser** i sidefeltet.
3. Under **Tøm historikk**, velg **Tøm**.
4. Bekreft at du vil slette alle øyeblikksbilder ved å klikke **Tøm**.

## Lagring og ytelse

Øyeblikksbilder fra filgjenoppretting bruker vanligvis minimal diskplass, ettersom de kun lagrer endrede filer. Imidlertid kan øyeblikksbilder akkumuleres over tid i hvelv med mange store filer eller hyppige redigeringer. Overvåk lagringsbruken din og juster oppbevaringsperioden om nødvendig.

## Begrensninger

- **Apple-låsemodus**: Denne funksjonen er utilgjengelig på Apple-enheter med [låsemodus](https://support.apple.com/en-us/105120) aktivert, med mindre Obsidian er unntatt.
- **Filtyper**: Kun `.md`- og `.canvas`-filer kan gjenopprettes ved hjelp av filgjenoppretting.
- **Hvelvplassering**: Hvis du flytter hvelvet til en annen plassering uten å bruke [[Administrer hvelv#Flytt hvelv til en annen mappe|hvelvbytteren]], kan det hende at eksisterende øyeblikksbilder ikke er tilgjengelige.
