---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Flyt din Sync-boks til en anden region, udfør en krypteringsopgradering.'
---
Som standard bruger Obsidian Sync [[Obsidian Sync/Sikkerhed og privatliv#Kryptering|slut-til-slut kryptering]] til alle dine data. Dette garanterer, at ingen — ikke engang Obsidian-teamet — kan få adgang til dine noter.

Obsidian opgraderer lejlighedsvis Sync kryptering for at opretholde de højeste [[Obsidian Sync/Sikkerhed og privatliv|sikkerheds]]-standarder. Hvis en krypteringsopgradering er tilgængelig, vil du se en mulighed med titlen **Opgrader boks kryptering** i **Obsidian Indstillinger → Sync**. Denne proces giver dig også mulighed for at ændre din [[Sync regioner|Sync region]].

## Krypteringsversioner

Alle nye bokse bruger automatisk den nyeste kryptering. Eksisterende bokse kan opgraderes ved hjælp af migreringsassistenten. Bemærk, at alle enheder skal bruge en Obsidian-applikationsversion, der understøtter den Sync krypteringsversion, du migrerer til.

| Udgivelsesdato                                                          | Sync version | Minimum applikationsversion |
| ----------------------------------------------------------------------- | ------------ | --------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3            | 1.8.3                       |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0            | 0.9.21                      |

## Opgrader kryptering med migreringsassistenten

Før du fortsætter, skal du oprette en [[Sikkerhedskopiér dine Obsidian-filer|sikkerhedskopi]] af din boks for at forhindre potentielt datatab. Denne proces vil permanent slette alle data i din fjernboks med den gamle kryptering, inklusiv versionshistorikken.

> [!danger] Migreringer er destruktive
> 
> **[[Sikkerhedskopiér dine Obsidian-filer|Sikkerhedskopiér]] altid din boks, før du fortsætter med en migrering.**
> 
> Når du migrerer en fjernboks, vil dine data blive erstattet. Det betyder:
> 
> 1. Fjerndata vil blive fjernet fra Obsidians servere, og boksdata vil blive uploadet igen i stedet.
> 2. Al [[Versionshistorik|versionshistorik]] for boksen vil gå tabt.

1. Åbn **[[Indstillinger]]**.
2. Vælg **Sync** i sidebjælken.
3. Klik på **Opgrader boks**. Denne mulighed er kun synlig, hvis en opgradering er tilgængelig for din fjernboks.
4. Dobbelttjek dine sikkerhedskopier og klik på **Fortsæt**.
5. Indtast navnet på fjernboksen i **Boksnavn**.
6. Vælg din server-[[Opsæt Obsidian Sync#Regionale sync-servere|region]] for din fjernboks i **Region**.
7. Vælg en adgangskode til din boks i **Krypteringsadgangskode**. Dette opretter en slut-til-slut krypteret boks. Boksadgangskoden er adskilt fra din Obsidian-konto og kan være forskellig for hver af dine bokse. For mere information, se [[Sikkerhed og privatliv]].
8. Når du har uploadet dine data igen med den nye kryptering, skal du genoprette forbindelsen til den nye Sync-boks på dine andre enheder.
