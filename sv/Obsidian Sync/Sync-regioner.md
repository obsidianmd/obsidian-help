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

## Anteckna dina inställningar

När du ansluter en enhet till det nya fjärrvalvet kan Sync använda de inställningar du har aktiverade vid det tillfället. Om du har olika inställningar på olika enheter, anteckna dem innan du börjar. Du kanske till exempel inte synkroniserar stora mediefiler till din telefon.

På varje enhet som använder fjärrvalvet, öppna **[[Inställningar]] → Sync** och anteckna dessa inställningar. En skärmbild fungerar bra.

- **Selektiv synkronisering**
- **Valvkonfigurationssynkronisering**
- **Exkluderade mappar**
- Enhetsspecifika inställningar, som **Enhetsnamn** och **Konfliktlösning**

Se [[Synkroniseringsinställningar och selektiv synkronisering]] för vad varje inställning gör och vilka som är aktiverade som standard.

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

## Återanslut dina andra enheter

När det nya fjärrvalvet har synkroniserats färdigt på din första enhet, byt över varje annan enhet som använde det gamla fjärrvalvet. Arbeta med en enhet i taget.

1. På enheten, [[Konfigurera Obsidian Sync#Koppla från ett fjärrvalv|koppla från det gamla fjärrvalvet]].
2. [[Konfigurera Obsidian Sync#Synkronisera ett fjärrvalv på en annan enhet|Anslut till det nya fjärrvalvet]]. Välj inte **Börja synkronisera** ännu.
3. Ställ in **Selektiv synkronisering**, **Valvkonfigurationssynkronisering** och **Exkluderade mappar** så att de matchar inställningarna du antecknade för den här enheten.
4. Starta om Obsidian. På mobil eller surfplatta kan du behöva tvångsstänga appen.
5. Välj **Börja synkronisera** eller **Återuppta**, och vänta tills Sync har slutförts innan du går vidare till nästa enhet.

Dessutom kan du [[Konfigurera Obsidian Sync#Radera ett fjärrvalv|radera ditt gamla fjärrvalv]] när du har bekräftat övergången till ditt nya fjärrvalv och dess region.
