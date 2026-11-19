---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Flyt din Sync-boks til en anden region.
---
Når du opretter en [[Lokale og fjernbokse|fjernboks]] via [[Introduktion til Obsidian Sync|Obsidian Sync]], krypteres dine data og gemmes på en af Obsidians regionale Sync-servere. Denne guide forklarer, hvordan du flytter din Sync-boks til en anden regional server.

## Tilgængelige regioner

Følgende regioner er tilgængelige med Obsidian Sync. Vi anbefaler at bruge **Automatisk** eller vælge en placering tæt på dig for at reducere forsinkelse og gøre synkroniseringsprocessen hurtigere.

![[Obsidian Sync/Sikkerhed og privatliv#^sync-geo-regions]]

## Notér dine indstillinger

Når du forbinder en enhed til den nye fjernboks, kan Sync bruge de indstillinger, du har slået til på det pågældende tidspunkt. Hvis du har forskellige indstillinger på forskellige enheder, skal du notere dem, før du begynder. For eksempel synkroniserer du måske ikke store mediefiler til din telefon.

På hver enhed, der bruger fjernboksen, skal du åbne **[[Indstillinger]] → Sync** og notere disse indstillinger. Et skærmbillede fungerer fint.

- **Selektiv synkronisering**
- **Synkronisering af bokskonfiguration**
- **Ekskluderede mapper**
- Enhedsspecifikke indstillinger, såsom **Enhedsnavn** og **Konfliktløsning**

Se [[Sync-indstillinger og selektiv synkronisering]] for, hvad hver indstilling gør, og hvilke der er slået til som standard.

## Skift Sync region

For at skifte din fjernboks' region skal du genoprette din boks på en anden Sync-server. Bemærk, at du også kan skifte regioner ved at bruge [[Opgrader Sync kryptering]]-migreringsassistenten, hvis din fjernboks er på en ældre version.

> [!danger] Migreringer er destruktive
> 
> **[[Sikkerhedskopiér dine Obsidian-filer|Sikkerhedskopiér]] altid din boks, før du fortsætter med en migrering.**
> 
> Når du migrerer en fjernboks, vil dine data blive erstattet. Det betyder:
> 
> 1. Fjerndata vil blive fjernet fra Obsidians servere, og boksdata vil blive uploadet igen i stedet.
> 2. Al [[Versionshistorik|versionshistorik]] for boksen vil gå tabt.

![[Opsæt Obsidian Sync#Afbryd forbindelsen til en fjernboks]]

Hvis du er på [[Abonnementer og lagergrænser|Standardabonnementet]], skal du også [[Opsæt Obsidian Sync#Slet en fjernboks|slette din fjernboks]], før du fortsætter.

![[Opsæt Obsidian Sync#Opret en ny fjernboks]]

## Forbind dine andre enheder igen

Når den nye fjernboks er færdig med at synkronisere på din første enhed, skal du skifte alle andre enheder, der brugte den gamle fjernboks. Arbejd med én enhed ad gangen.

1. På enheden skal du [[Opsæt Obsidian Sync#Afbryd forbindelsen til en fjernboks|afbryde forbindelsen til den gamle fjernboks]].
2. [[Opsæt Obsidian Sync#Synkroniser en fjernboks på en anden enhed|Forbind til den nye fjernboks]]. Vælg ikke **Start synkronisering** endnu.
3. Indstil **Selektiv synkronisering**, **Synkronisering af bokskonfiguration** og **Ekskluderede mapper**, så de matcher de indstillinger, du noterede for denne enhed.
4. Genstart Obsidian. På mobil eller tablet skal du muligvis tvangslukke appen.
5. Vælg **Start synkronisering** eller **Fortsæt**, og vent, til Sync er færdig, før du går videre til den næste enhed.

Derudover kan du [[Opsæt Obsidian Sync#Slet en fjernboks|slette din gamle fjernboks]], når du har bekræftet overgangen til din nye fjernboks og dens region.
