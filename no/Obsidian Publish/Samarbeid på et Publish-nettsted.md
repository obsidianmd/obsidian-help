---
permalink: publish/collaborate
publish: true
mobile: true
description: Lær hvordan du kan samarbeide med andre Obsidian-brukere på Obsidian Publish-nettstedet ditt.
---
Lær hvordan du kan samarbeide på [[Introduksjon til Obsidian Publish|Obsidian Publish]]-nettstedet ditt med andre Obsidian-brukere. Ved å legge til venner og kolleger som samarbeidspartnere, kan de publisere endringer på nettstedet ditt.

Bare nettstedseieren trenger et aktivt abonnement på Obsidian Publish. Samarbeidspartnere trenger bare en [Obsidian-konto](https://obsidian.md/account).

> [!warning] Før du publiserer endringer på et delt nettsted, sørg for å [[#Synkroniser endringer mellom samarbeidspartnere|synkronisere endringer mellom samarbeidspartnere]]. Ellers risikerer du å overskrive endringer fra andre samarbeidspartnere.

## Legg til en samarbeidspartner på et nettsted

1. I [[Verktøylinje|verktøylinjen]], velg **Publish changes** ![[lucide-send.svg#icon]] eller åpne [[Kommandovelger|kommandovelgeren]] og skriv **Publish: Publish changes...**
2. I dialogboksen **Publish changes**, klikk på **Endre nettstedsalternativer** ![[lucide-cog.svg#icon]].
3. Ved siden av **Samarbeid på nettsted**, velg **Administrer**.
4. I **Inviter bruker**, skriv inn e-posten til samarbeidspartneren.
5. Velg **Legg til**.

## Fjern en samarbeidspartner fra et nettsted

1. I [[Verktøylinje|verktøylinjen]], velg **Publish changes** ![[lucide-send.svg#icon]] eller åpne [[Kommandovelger|kommandovelgeren]] og skriv **Publish: Publish changes...**
2. I dialogboksen **Publish changes**, klikk på **Endre nettstedsalternativer** ![[lucide-cog.svg#icon]].
3. Ved siden av **Samarbeid på nettsted**, velg **Administrer**.
4. Ved siden av samarbeidspartneren du vil fjerne, velg **Fjern bruker** ![[lucide-x.svg#icon]].

## Synkroniser endringer mellom samarbeidspartnere

Obsidian Publish synkroniserer ikke publiserte endringer mellom lokale hvelv automatisk. I stedet må samarbeidspartnere manuelt synkronisere endringer fra andre samarbeidspartnere.

For å oppdatere et lokalt notat med endringer fra det aktive nettstedet:

1. I [[Verktøylinje|verktøylinjen]], velg **Publish changes** ![[lucide-send.svg#icon]] eller åpne [[Kommandovelger|kommandovelgeren]] og skriv **Publish: Publish changes...**
2. Høyreklikk eller trykk og hold på endringen du vil synkronisere, og velg deretter **Bruk live-versjon**. **Dette vil overskrive notatet i ditt lokale hvelv.**

> [!tip] Vi anbefaler at du bruker et annet verktøy for å synkronisere endringer mellom hvelv, for eksempel [[Introduksjon til Obsidian Sync|Obsidian Sync]] eller [git](https://git-scm.com/).

## Tillatelser

Følgende tabell viser de tilgjengelige nettstedstillatelsene for eiere og samarbeidspartnere:

| Handling                                    | Samarbeidspartner | Eier |
|---------------------------------------------|:-----------------:|:----:|
| Publisere nye sider                         | ✓                 | ✓    |
| Publisere endringer på publiserte sider     | ✓                 | ✓    |
| Avpublisere sider                           | ✓                 | ✓    |
| Konfigurere nettstedsalternativer           |                   | ✓    |
| Administrere tillatelser                    |                   | ✓    |
