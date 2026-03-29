---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Du har köpt Obsidian Sync och är redo att komma igång. Den här guiden hjälper dig att konfigurera och justera dina Obsidian Sync-inställningar för daglig användning.
---
Du har köpt Obsidian Sync och är redo att komma igång. Den här guiden hjälper dig att konfigurera och justera dina Obsidian Sync-inställningar för dagligt bruk.

- **Ny på Obsidian Sync?** Se: [[#Konfigurera Obsidian Sync för första gången]]
- **Ansluter du en andra enhet?** Se: [[#Synkronisera ett fjärrvalv på en annan enhet]]
- **Behöver du göra ändringar?** Se: [[#Hantera dina fjärrvalv]]

## Konfigurera Obsidian Sync för första gången

I det här avsnittet skapar du ett nytt [[Lokala och fjärrvalv|fjärrvalv]] och ansluter det till ett befintligt lokalt valv. Du behöver inte skapa ett nytt, tomt lokalt valv för att använda Obsidian Sync för detta ändamål.

> [!info] Ligger ditt nuvarande valv i en iCloud-, OneDrive-, Dropbox- eller annan synkroniseringsmapp? Om **ja**, eller om du är **osäker**, vänligen läs [[Vanliga frågor#Kan jag använda synk från tredje part med Obsidian Sync?|detta]] och [[Byt till Obsidian Sync]] innan du fortsätter.

**Förutsättningar**

- Ett Obsidian-konto. Om du inte har ett, [registrera dig nu](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- En aktiv Obsidian Sync-[[Planer och lagringsgränser|prenumeration]]. Om du inte har en, prenumerera från [din kontopanel](https://obsidian.md/account/sync).
- **Rekommenderat**: Ett [[Säkerhetskopiera dina Obsidian-filer|säkerhetskopieringssystem]] på plats för dina Obsidian-filer. En synkroniseringstjänst är inte en säkerhetskopia.

### Logga in med ditt Obsidian-konto

1. Öppna **[[Inställningar]]**.
2. I sidofältet, välj **Allmänt**.
3. Under **Konto → Ditt konto**, välj **Logga in**.
4. I **E-post**, ange din e-post.
5. I **Lösenord**, ange ditt lösenord.
6. Välj **Logga in**.

### Aktivera Obsidian Sync

1. Öppna **[[Inställningar]]**.
2. I sidofältet under **Inställningar**, välj **Kärntillägg**.
3. Aktivera **Sync**.

### Skapa ett nytt fjärrvalv

1. Öppna **[[Inställningar]]**.
2. I sidofältet, välj **Sync**.
3. Bredvid **Fjärrvalv**, välj **Välj**.
4. Välj **Skapa nytt valv**.
5. I **Valvnamn**, ange namnet på fjärrvalvet.
6. I **Region**, välj din server-[[Konfigurera Obsidian Sync#Regionala synkroniseringsservrar|region]] för ditt fjärrvalv.
7. I **Krypteringslösenord**, välj ett lösenord för ditt valv. Detta skapar ett slutpunkt-till-slutpunkt-krypterat valv. Valvlösenordet är separat från ditt Obsidian-konto och kan vara olika för vart och ett av dina valv. För mer information, se [[Säkerhet och integritet]].
8. Välj **Skapa**.

### Anslut till ett fjärrvalv

1. Välj **Anslut** bredvid ditt nyligen skapade valv.
2. Ange lösenordet du konfigurerade för valvet i fältet **Krypteringslösenord** om du valde [[Obsidian Sync/Säkerhet och integritet#Vad innebär slutpunkt-till-slutpunkt-kryptering?|slutpunkt-till-slutpunkt-kryptering]].
3. Välj **Lås upp valv**.
4. **Börja inte synkronisera ännu.** Kontrollera dina synkroniseringsinställningar i [[#Justera Obsidian Sync-inställningar|justera Obsidian Sync-inställningar]].
    - Om du vill börja synkronisera omedelbart, gå vidare till [[#Börja synkronisera med Obsidian Sync|börja synkronisera med Obsidian Sync]].
5. Om du inte redan gjort det, stäng eller avfärda popup-fönstret som uppmanar dig att **Exkludera mappar** och **Börja synkronisera**. Fortsätt till nästa steg.

#### Justera Obsidian Sync-inställningar

1. Navigera till **[[Inställningar]]** → **Sync** vid behov.
2. Om ett enhetsnamn inte har lagts till, lägg till ett för att göra det enklare att läsa dina Sync-loggar!
3. Aktivera inställningarna under **Selektiv synkronisering** och **Valvkonfigurationssynkronisering** för att ange vilka objekt som ska synkroniseras till och från fjärrvalvet.
    - **Obs**: Om du nyligen kopplat från ett fjärrvalv och återansluter utan att starta om appen, kan vissa inställningar redan vara aktiverade.
4. Om du ändrar några inställningar, starta om Obsidian helt.
5. När Obsidian har startats om, återgå till **[[Inställningar]]** → **Sync**.

#### Börja synkronisera med Obsidian Sync

Om du börjar synkronisera efter att ha anslutit till ett fjärrvalv, kommer du att se en **Börja synkronisera**-knapp. Välj denna knapp för att börja synkronisera.

Om du börjar synkronisera efter att ha justerat Obsidian Syncs inställningar och startat om appen, kommer du att se en **Återuppta**-knapp i Syncs inställningar. Välj denna knapp för att börja synkronisera.

> [!done] Synkroniseringsstatus
> När Obsidian Sync är klar visas en grön cirkel med en bockmarkering ![[obsidian-icon-sync-synced.svg#icon]] i det nedre högra hörnet (dator) eller i det högra sidofältet (mobil). Sync-loggen kommer också att visa "Fully Synced" som ett av sina senaste meddelanden.
>
> För mer information om synkroniseringsstatusar, se [[Statusikon och meddelanden]].
^obsidian-sync-status

För att ansluta andra enheter till ditt nyligen skapade och synkroniserade fjärrvalv, gå vidare till [[Konfigurera Obsidian Sync#Synkronisera ett fjärrvalv på en annan enhet|Synkronisera ett fjärrvalv på en annan enhet]].

För att läsa mer om inställningar och filer, gå vidare till [[Synkroniseringsinställningar och selektiv synkronisering]].

## Synkronisera ett fjärrvalv på en annan enhet

I det här avsnittet har du redan skapat ett fjärrvalv och laddat upp data till det. Nu vill du ansluta dina andra enheter till det.

**Förutsättningar**
- Ett Obsidian-konto. Om du inte har ett, [registrera dig nu](https://obsidian.md/account#mode=signup).
- En aktiv Obsidian Sync-prenumeration. Om du inte har en, prenumerera från [din kontopanel](https://obsidian.md/account).
- Sync aktiverad i [[Kärntillägg]]-inställningarna.
- Ett aktivt fjärrvalv. Om du inte har skapat ett ännu, vänligen skapa ett [[Konfigurera Obsidian Sync#Skapa ett nytt fjärrvalv|fjärrvalv]] först.
- **Rekommenderat**: Ett [[Säkerhetskopiera dina Obsidian-filer|säkerhetskopieringssystem]] på plats för dina Obsidian-filer på din mest använda enhet. En synkroniseringstjänst är inte en säkerhetskopia.

### Synkronisera ditt valv från valvväxlaren

Om du nyligen har installerat Obsidian kommer du att presenteras med [[Hantera valv|Valvväxlaren]] när du öppnar programmet. För att skapa ett nytt lokalt valv från innehållet i ett fjärrvalv behöver du utföra följande steg.

1. Öppna Obsidian (förutsatt att detta är första gången du öppnar det)
2. Välj ett av alternativen beroende på din installation:
	1. **Dator**: I avsnittet som säger Anslut till Obsidian Sync, välj **Ställ in**
	2. **Mobil/Surfplatta**: **Ställ in Obsidian Sync**
3. Logga in med ditt Obsidian-användarkonto
	1. Om [[Tvåfaktorsautentisering|2FA]] är konfigurerat, ange din 2FA-kod.
4. Du kommer att bli ombedd att välja vilket fjärrvalv du vill synkronisera till denna enhet. Välj **Anslut**.
5. Du kommer att bli ombedd att välja ett namn för det lokala valvet som kommer att skapas på enheten för att lagra dessa data. Ange det namn du önskar.
	1. Om du använder [[Obsidian URI]]s bör du använda samma namn som det lokala valvet på din andra enhet.
6. Välj **Skapa**.
7. Fönstret för fjärrvalv kommer att dyka upp tillfälligt medan Obsidian Sync ansluter till din server och validerar prenumerationen. Det kommer sedan att visa ett *Ställ in anslutning*-fönster.
	1. Det rekommenderas starkt att du stänger eller sveper ned från detta fönster och [[#Justera Obsidian Sync-inställningar|justerar Obsidian Sync-inställningar]] först.
	2. Om du ändrar några Sync-inställningar, ladda om eller starta om Obsidian.

### Synkronisera ditt valv från Obsidian-inställningar

Om du redan har skapat ett lokalt valv på denna enhet och vill ansluta detta lokala valv till ett fjärrvalv, är instruktionerna mycket lika [[#Konfigurera Obsidian Sync för första gången]].

![[Konfigurera Obsidian Sync#Logga in med ditt Obsidian-konto]]

![[Konfigurera Obsidian Sync#Aktivera Obsidian Sync]]

#### Anslut till ett fjärrvalv

1. Öppna **[[Inställningar]]**.
2. I sidofältet, välj **Sync**.
3. Bredvid **Välj fjärrvalv**, klicka **Välj**.
4. Klicka **Anslut** bredvid det fjärrvalv du vill ansluta till.
5. I **Krypteringslösenord**, ange lösenordet för ditt valv, om du har ett.
6. Du kommer att uppmanas att börja synkronisera. Det rekommenderas att vänta och justera dina synkroniseringsinställningar först. Om du vill synkronisera hela valvet till enheten som det är, kan du **Börja synkronisera**.

> [!warning] Om valvet på din enhet redan innehåller vissa anteckningar (rekommenderas inte), kommer du att varnas om att dessa anteckningar kommer att sammanfogas innan du fortsätter. Konflikter kommer att lösas genom [[Felsök Obsidian Sync#Konfliktlösning|Syncs konfliktlösning]].

![[Konfigurera Obsidian Sync#Justera Obsidian Sync-inställningar]]

![[Konfigurera Obsidian Sync#Börja synkronisera med Obsidian Sync]]

## Hantera dina fjärrvalv

Du har skapat och anslutit till ett fjärrvalv. Du kan också ha synkroniserat detta fjärrvalv till flera enheter. Det här avsnittet går igenom några av de andra vanliga instruktionerna du kan behöva för att hantera detta fjärrvalv.

### Koppla från ett fjärrvalv

1. Öppna Obsidians **[[Inställningar]]**.
2. Välj **Sync** i sidofältet.
3. Klicka på knappen **Koppla från** bredvid Fjärrvalv.

Du är nu frånkopplad från fjärrvalvet och synkroniserar inte längre på denna enhet.

### Radera ett fjärrvalv

> [!tip] Att radera ett fjärrvalv kommer inte att radera dina lokala data på din enhet.

1. Öppna **[[Inställningar]]**.
2. I sidofältet, välj **Sync**.
3. Välj **Hantera** bredvid Fjärrvalv. Ett fönster öppnas med din lista över fjärrvalv.
4. Välj papperskorgsikonen ![[lucide-trash-2.svg#icon]] bredvid det fjärrvalv du vill radera.
5. Bekräfta raderingen genom att välja den röda **Radera**-knappen.
6. Ditt fjärrvalv har raderats.

> [!info] Om det inte finns någon synlig papperskorgsikon kan du behöva först koppla från fjärrvalvet. När du har kopplat från, välj knappen **Välj** för att öppna listan över fjärrvalv.

### Regionala synkroniseringsservrar

Obsidian Sync låter dig välja värdplats för ditt fjärrvalv. Om du använder version `1.4.16` eller äldre av Obsidian kommer platsen att väljas automatiskt åt dig.

Om du är osäker på var din nuvarande valvregion finns, kolla [[Obsidian Sync/Säkerhet och integritet#Var hittar jag min nuvarande Sync-server och var är den värd?|Var kan jag hitta min nuvarande Sync-server och var finns den?]] för vägledning.

![[sync-regional-sync-servers.png#interface|300]]

Efter att du valt en plats **kan** ditt datacenter inte flyttas till en annan server utan att ladda upp dina data på nytt. För att byta region, följ [[Sync-regioner|guiden för Sync-regioner för valv]].

![[Obsidian Sync/Säkerhet och integritet#^sync-geo-regions]]

## Nästa steg

Här är några föreslagna dokument att läsa härnäst.

- Utforska mer om [[Synkroniseringsinställningar och selektiv synkronisering|att välja filer och inställningar att synkronisera]].
- Lär dig vad som händer om ditt fjärrvalv [[Versionshistorik|fylls upp]].
- [[Samarbeta i ett delat valv]] med en annan Obsidian Sync-användare.
- Kolla in [[Vanliga frågor|Sync-vanliga frågor]] för svar på vanliga frågor.
