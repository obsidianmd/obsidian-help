---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Flytta ditt Sync-valv till en annan region.
---
När du skapar ett [[Lokala och fjärrvalv|fjärrvalv]] genom [[Introduktion till Obsidian Sync|Obsidian Sync]] krypteras och lagras dina data på en av Obsidians regionala Sync-servrar. Den här guiden förklarar hur du flyttar ditt Sync-valv till en annan regional server.

## Tillgängliga regioner

Följande regioner är tillgängliga med Obsidian Sync. Vi rekommenderar att du använder **Automatisk** eller väljer en plats nära dig för att minska latens och göra synkroniseringsprocessen snabbare.

![[Obsidian Sync/Säkerhet och integritet#^sync-geo-regions]]

## Ändra Sync-region

För att ändra ditt fjärrvalvs region behöver du återskapa ditt valv på en annan Sync-server. Observera att du också kan ändra regioner genom att använda migreringsassistenten [[Uppgradera synkroniseringskryptering]], om ditt fjärrvalv använder en äldre version.

> [!danger] Migreringar är destruktiva
> 
> **[[Säkerhetskopiera dina Obsidian-filer|Säkerhetskopiera]] alltid ditt valv innan du fortsätter med en migrering.**
> 
> När du migrerar ett fjärrvalv kommer dina data att ersättas. Det innebär:
> 
> 1. Fjärrdata kommer att tas bort från Obsidians servrar, och valvdata kommer att laddas upp på nytt i dess ställe.
> 2. All [[Versionshistorik|versionshistorik]] för valvet kommer att gå förlorad.

![[Konfigurera Obsidian Sync#Koppla från ett fjärrvalv]]

Om du har [[Planer och lagringsgränser|Standardplanen]] behöver du också [[Konfigurera Obsidian Sync#Radera ett fjärrvalv|radera ditt fjärrvalv]] innan du fortsätter.

![[Konfigurera Obsidian Sync#Skapa ett nytt fjärrvalv]]

Dessutom kan du [[Konfigurera Obsidian Sync#Radera ett fjärrvalv|radera ditt gamla fjärrvalv]] när du har bekräftat övergången till ditt nya fjärrvalv och dess region.
