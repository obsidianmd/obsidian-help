---
permalink: sync/faq
publish: true
mobile: true
description: Den här sidan listar några av de vanliga frågorna relaterade till frågor och begränsningar för Obsidian Sync.
---
Den här sidan listar några av de vanliga frågorna relaterade till frågor och begränsningar för [[Introduktion till Obsidian Sync|Obsidian Sync]].

## Allmänt

### Vilka operativsystem stöder Obsidian Sync?

Obsidian Sync stöder alla plattformar som Obsidian kan köras på. För närvarande innebär det Windows, macOS, Linux, Android och iOS.

### Fungerar Obsidian med Apples låst läge?

Obsidian kan användas i [låst läge](https://support.apple.com/en-us/105120) så länge Obsidian läggs till som ett undantag.

### Vilken typ av data synkroniseras?

Som standard synkroniseras dina Obsidian-anteckningar, bilder och din [[Konfigurationsmapp]].

Du kan lägga till ytterligare synkroniseringsalternativ för PDF:er, ljudfiler, videofiler och andra filer när du [[Synkroniseringsinställningar och selektiv synkronisering|konfigurerar synkroniseringsinställningar och selektiv synkronisering]].

### Hur mycket lagringsutrymme har jag?

Lagringsgränsen beror på din Obsidian [[Planer och lagringsgränser#Planer|Sync-plan]]. Den maximala lagringsmängden är 100 GB. Denna lagringsgräns inkluderar [[Versionshistorik|versionshistorik]].

Du kan visa **Valvstorlek** i Obsidian-appen genom att gå till **[[Inställningar]] → Sync**.

### Hur många fjärrvalv kan jag ha?

Antalet fjärrvalv du kan ha bestäms utifrån din [[Planer och lagringsgränser#Planer|Sync-plan]]. Standard-planen inkluderar 1 valv, Plus-planen inkluderar 10 valv. Valv delade med dig räknas inte mot din valvgräns.

### Hur stort kan varje fjärrvalv vara?

Det finns ingen gräns per valv. Lagringsgränsen är knuten till ditt använda konto och kan tillämpas över alla dina valv.

### Hur många personer kan jag dela ett fjärrvalv med?

Du kan [[Samarbeta i ett delat valv|dela ett fjärrvalv]] med upp till 20 personer.

### Hur stor kan varje fil vara?

Den maximala filstorleken beror på din [[Planer och lagringsgränser|Obsidian Sync-plan]]. För Standard-planen är gränsen 5 MB. För Plus-planen är gränsen 200 MB per fil.

### Synkroniseras mina data i bakgrunden?

Nej, filer synkroniseras bara när Obsidian körs.

### Laddar Obsidian Sync om mina inställningar i realtid?

Obsidian Sync kan automatiskt ladda om vissa inställningar, men det finns vissa begränsningar. För mer information, se [[Synkroniseringsinställningar och selektiv synkronisering#Omladdning av inställningar|Omladdning av inställningar]].

### Kan jag använda synk från tredje part med Obsidian Sync?

Vi rekommenderar inte att använda en synkroniseringstjänst från tredje part tillsammans med Obsidian Sync. Att använda en tredjepartstjänst och Obsidian Sync på flera enheter kan leda till konflikter, vilket resulterar i duplicerade eller skadade filer.

Molnlagringstjänster som OneDrive och Dropbox erbjuder funktioner som "Filer på begäran" eller "Enbart online-filer", som bara laddar ner filer vid behov och tar bort dem lokalt för att spara utrymme. Eftersom dessa filer inte alltid är tillgängliga lokalt kommer Obsidian Sync att tolka dem som raderade, vilket leder till att de tas bort från ditt fjärrvalv.

För att undvika dessa problem, inaktivera nedladdning på begäran när du använder Obsidian Sync med tjänster som OneDrive eller Dropbox. Du behöver säkerställa att tredjepartstjänstens inställningar är konfigurerade att alltid behålla filer på enheten.

## Datalagring

Dessa är vanligt förekommande frågor om Obsidians datalagring. För mer djupgående svar, se [[Obsidian Sync/Säkerhet och integritet|Säkerhet och integritet]].

### Hur länge behåller ni versionshistoriken?

[[Versionshistorik]] beror på din [[Planer och lagringsgränser|Obsidian Sync-plan]]. På Standard-planen behålls dina anteckningar i 1 månad. På Plus-planen behålls dina anteckningar i 12 månader. Efter denna tidsperiod raderas de äldre versionerna.

Äldre versioner av [[Bilagor|bilagor]] lagras i två veckor.

### Hur länge behåller ni mina data efter att min prenumeration löper ut?

Vi behåller data i dina fjärrvalv, inklusive versionshistorik, i en månad efter att din prenumeration löper ut. Eventuella lokala valv på dina enheter påverkas inte.

Så länge du förnyar inom en månad bör det inte påverka din användning. Om du förnyar efter en månad, när dina fjärrvalv har tagits bort, kan du [[Konfigurera Obsidian Sync|skapa ett nytt fjärrvalv]] och ansluta ditt lokala valv.

### Behåller ni mina data om jag begär återbetalning av min prenumerationstjänst?

Nej. Datan raderas omedelbart från Obsidian Sync-servrar. Data i ditt [[Lokala och fjärrvalv|lokala valv]] påverkas inte.
