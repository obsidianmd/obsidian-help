---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Flytta ditt Sync-valv till en annan region, utför en krypteringsuppgradering.'
---
Som standard använder Obsidian Sync [[Obsidian Sync/Säkerhet och integritet#Kryptering|slutpunkt-till-slutpunkt-kryptering]] för all din data. Detta garanterar att ingen — inte ens Obsidian-teamet — kan komma åt dina anteckningar.

Obsidian uppgraderar ibland Sync-krypteringen för att upprätthålla de högsta [[Obsidian Sync/Säkerhet och integritet|säkerhets]]-standarderna. Om en krypteringsuppgradering finns tillgänglig ser du ett alternativ med titeln **Uppgradera valvkryptering** i **Obsidian-inställningar → Sync**. Denna process låter dig även ändra din [[Sync-regioner|Sync-region]].

## Krypteringsversioner

Alla nya valv använder automatiskt den senaste krypteringen. Befintliga valv kan uppgraderas med hjälp av migreringsassistenten. Observera att alla enheter måste använda en version av Obsidian-appen som stöder den Sync-krypteringsversion du migrerar till.

| Publiceringsdatum                                                       | Sync-version | Minsta appversion |
| ----------------------------------------------------------------------- | ------------ | ----------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3            | 1.8.3             |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0            | 0.9.21            |

## Uppgradera kryptering med migreringsassistenten

Innan du fortsätter, skapa en [[Säkerhetskopiera dina Obsidian-filer|säkerhetskopia]] av ditt valv för att förhindra eventuell dataförlust. Denna process kommer permanent att radera all data i ditt fjärrvalv med den gamla krypteringen, inklusive versionshistoriken.

> [!danger] Migreringar är destruktiva
> 
> **[[Säkerhetskopiera dina Obsidian-filer|Säkerhetskopiera]] alltid ditt valv innan du fortsätter med en migrering.**
> 
> När du migrerar ett fjärrvalv kommer din data att ersättas. Detta innebär:
> 
> 1. Fjärrdata kommer att tas bort från Obsidians servrar, och valvdata kommer att laddas upp igen i dess ställe.
> 2. All [[Versionshistorik|versionshistorik]] för valvet kommer att gå förlorad.

1. Öppna **[[Inställningar]]**.
2. I sidofältet, välj **Sync**.
3. Klicka på **Uppgradera valv**. Detta alternativ visas bara om en uppgradering är tillgänglig för ditt fjärrvalv.
4. Dubbelkolla dina säkerhetskopior och klicka på **Fortsätt**.
5. I **Valvnamn**, ange namnet på fjärrvalvet.
6. I **Region**, välj din server-[[Konfigurera Obsidian Sync#Regionala synkroniseringsservrar|region]] för ditt fjärrvalv.
7. I **Krypteringslösenord**, välj ett lösenord för ditt valv. Detta skapar ett slutpunkt-till-slutpunkt-krypterat valv. Valvlösenordet är separat från ditt Obsidian-konto och kan vara olika för vart och ett av dina valv. För mer information, se [[Säkerhet och integritet]].
8. När du har laddat upp din data igen med den nya krypteringen, återanslut till det nya Sync-valvet på dina andra enheter.
