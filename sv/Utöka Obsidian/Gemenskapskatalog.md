---
permalink: community-directory
description: Vad ett tilläggs eller temas offentliga listsida på Obsidians gemenskapskatalog visar.
---
Varje tillägg och tema har en offentlig listningssida i [Obsidians gemenskapskatalog](https://community.obsidian.md). Välj ett tillägg från [[Gemenskapstillägg#Bläddra bland gemenskapstillägg|Bläddra]], eller ett tema från [[Teman#Bläddra bland teman|Bläddra]], i Obsidian, eller bläddra direkt på [community.obsidian.md](https://community.obsidian.md) för att öppna dess listningssida.

Den här sidan hjälper dig förstå vad varje avsnitt gör, ur en Obsidian-användares perspektiv.

> [!tip]- Är du tilläggs- eller temautvecklare?
> Lär dig hur du skickar in och hanterar dina egna tillägg och teman i [dokumentationen för gemenskapskatalogen](https://docs.obsidian.md/community-directory).

## Sidhuvud

Sidhuvudet visar postens ikon och namn, med en **Officiell**-märkning om den skapades av tilläggets eller temats ursprungliga skapare, tillsammans med författarens ikon och namn samt postens totala antal nedladdningar.

Välj **Lägg till i Obsidian** för att öppna posten direkt i Obsidian och installera den.

## Översikt

Fliken **Översikt** visar postens skärmbilder, dess utförliga beskrivning, ett utdrag ur dess README-fil och ett rutnät med relaterade tillägg eller teman i samma kategori.

## Resultatrapport

Fliken **Resultatrapport** visar automatiserade hälso- och granskningsmetrik för posten.

Ett övergripande hälsobetyg, som Utmärkt, bryts ned i hygien (om README, licens, bidragsguide och beskrivning finns), underhåll (senaste commit- och releaseaktivitet), responsivitet (hur många ärenden som har stängts och hur många bidragsgivare som varit aktiva nyligen) och adoption (installations- och stjärnantal).

Granskningsavsnittet visar resultatet av den senaste automatiserade genomsökningen, till exempel Godkänd, grupperat i godkända kontroller (till exempel inga kända sårbara beroenden, ingen obfuskerad kod, verifierade GitHub-artefaktattesteringar och vilka Obsidian-API:er posten använder, som Vault Read eller Vault Write), upplysningar (saker som posten gör som inte nödvändigtvis är problem men som du bör vara medveten om, som åtkomst till ditt urklipp eller förfrågningar till externa domäner) och övriga noteringar (som användning av webbläsarlagring istället för Obsidians tilläggsdataAPI:er).

> [!info]+ Tolka ett lägre betyg
> Ett tillägg eller tema med lägre hälso- eller granskningsbetyg är inte nödvändigtvis osäkert, men det är värt att titta närmare på dess upplysningar innan du installerar. Tänk på det som ett trafikljus:
> - 🟢 Få eller inga upplysningar innebär låg risk
> - 🟡 En handfull upplysningar, värt att kontrollera saker som urklipps- eller nätverksåtkomst
> - 🔴 Flera upplysningar eller varningar innebär att du bör noggrant granska vad posten gör innan du installerar den.

## Uppdateringar

Fliken **Uppdateringar** listar postens releasehistorik, med varje releases version och datum. Välj **Visa alla releaser på GitHub** för att se den fullständiga historiken i postens arkiv.

## Sidofält

Bredvid flikarna visar sidofältet sammanfattningar av hälsa och granskning som matchar fliken Resultatrapport, postens utförliga beskrivning och detaljer som dess aktuella version, när den senast uppdaterades och skapades, antal uppdateringar och nedladdningar, kompatibel Obsidian-version, plattformar som stöds och licens. Om posten inte är Gratis förklarar en Betalningssektion hur prissättningen fungerar, till exempel betalda nivåer eller användningsgränser. Om författaren har lagt till finansieringslänkar visas en Stöd-länk här också, tillsammans med författarens eller organisationens ikon, namn och länkar till deras andra profiler.

## Vanliga frågor

**Vad är skillnaden mellan Gratis, Valfri betalning och Betald på en listning?**
Gratis innebär att inga betalningar är involverade. Valfri betalning innebär att posten förlitar sig på en betald tredjepartstjänst, eller låser vissa funktioner bakom betalning, men fortfarande är användbar gratis. Betald innebär att posten bara är tillgänglig med betalning.

Kontrollera listningens Betalningssektion i sidofältet för detaljer om hur en specifik posts prissättning fungerar.

**Varför kan jag inte hitta eller installera ett tillägg eller tema som jag sett nämnas på annat håll?**
Författaren kan ha arkiverat det. Arkivering tar bort en post från gemenskapskatalogen och förhindrar nya installationer.

**Vad är skillnaden mellan Hälso- och Granskningsbetyg på en listning?**
Hälsa återspeglar postens löpande hygien och underhåll, som senaste commits och responsivitet på ärenden. Granskning återspeglar resultatet av den senaste automatiserade genomsökningen av en release.
