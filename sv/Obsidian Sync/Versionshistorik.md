---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync sparar en historik över alla ändringar som gjorts i dina anteckningar och kontrollerar regelbundet efter uppdateringar samt skapar nya versioner av dina anteckningar.
---
[[Introduktion till Obsidian Sync|Obsidian Sync]] söker regelbundet efter uppdateringar av dina [[Synkroniseringsinställningar och selektiv synkronisering|synkroniserade filer]] och håller en logg över alla ändringar. Dessa lagras som nya poster i [[#Versionshistorik]]. Denna information kan nås på ett par sätt:

- [[#Sync-historik]]
- [[#Versionshistorik]]

Även om det inte är en del av Obsidian Sync finns det också en lokal versionshistorik tillgänglig på varje enhet om tillägget [[Filåterställning]] är aktiverat.

## Sync-historik

Funktionen Sync-historik (eller Sync-sidofältet), som introducerades i Obsidian version 1.7, låter dig snabbt se nyligen skapade eller ändrade anteckningar och bilagor som har synkroniserats. Du kan också tänka på det som en _redigerings_historik.

I sidofältet kan du välja ett objekt för att öppna dess fil i ditt aktiva fönster. Objekten har också kontextmenyer som låter dig utföra åtgärder som att flytta filen eller visa dess [[#Anteckningar och bilagor|versionshistorik]].

> [!compatibility] Funktion enbart för dator
> När du hovrar över en synkroniserad fil i sidofältet kan du se vem som senast redigerade filen. Detta är särskilt användbart om du [[Samarbeta i ett delat valv|samarbetar]] i ett delat valv.

> [!tip] 
> Inställningar och raderade objekt visas inte i Sync-historikens sidofält. Dessa finns istället i [[#Anteckningar och bilagor|versionshistoriken]].

### Visa Sync-historik

När du aktiverar kärntillägget [[Introduktion till Obsidian Sync|Sync]] aktiveras Sync-historiken automatiskt men visas inte i sidofältet som standard. Du behöver lägga till den manuellt med ett kommando eller en tangentbordsgenväg.

#### Aktivera via kommandopaletten

> [!info] Det här alternativet kräver att kärntillägget [[Kommandopalett]] är aktiverat.

**Dator/Surfplatta** ![[lucide-monitor-check.svg#icon]]

1. Öppna **kommandopaletten**. ![[lucide-terminal.svg#icon]]
2. Skriv "Sync".
3. Välj alternativet "Sync: Show Sync history".

Sync-historiken visas sedan i [[Sidofält|höger sidofält]].

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]

1. Öppna [[Ribbon]] ![[lucide-menu.svg#icon]].
2. Öppna **kommandopaletten**. ![[lucide-terminal.svg#icon]]
3. Skriv "Sync".
4. Välj alternativet "Sync: Show Sync history".

Sync-historiken visas sedan som ett rullgardinsalternativ i [[Sidofält|höger sidofält]].

#### Aktivera via tangentbordsgenväg

1. Öppna **[[Inställningar]]**.
2. Under kategorin **Inställningar**, välj **Snabbkommandon**.
3. I sökfältet för snabbkommandon, skriv "Sync".
4. Bredvid "Sync: Show Sync history," tilldela din önskade tangentbordsgenväg.

## Versionshistorik

Utöver [[#Sync-historik]] upprätthåller Obsidian även en versionshistorik för att återställa anteckningar och bilagor. Om du råkar radera en anteckning eller vill återgå till en tidigare version kan du återställa den från versionshistoriken.

Lagringsperioden för din versionshistorik beror på din [[Planer och lagringsgränser|Obsidian Sync-plan]]. Med Standard-planen behålls anteckningar i 1 månad, medan de med Plus-planen behålls i 12 månader. Efter denna period raderas äldre versioner av dina anteckningar.

För [[Bilagor|bilagor]] lagras äldre versioner i <u>två veckor</u>.

![[Samarbeta i ett delat valv#^version-history-image]]

### Anteckningar och bilagor

Processen för att återställa både anteckningar och bilagor är densamma.

#### Visa versionshistorik för en fil

**Dator/Surfplatta** ![[lucide-monitor-check.svg#icon]]
1. I **filutforskaren**, välj den anteckning du vill återställa.
2. Välj **Öppna versionshistorik**.
3. Välj den version av anteckningen du vill visa till vänster. Innehållet visas till höger.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. I **filutforskaren**, välj den anteckning du vill återställa.
2. Tryck länge för att visa kontextmenyn.
3. Välj **Öppna versionshistorik**.
4. I popup-menyn, välj den version av anteckningen du vill visa.
5. När den är vald blir anteckningens innehåll tillgängligt för granskning.

#### Visa versionshistorik för en raderad eller omdöpt fil

1. Öppna **[[Inställningar]]**.
2. I sidofältet, under **Kärntillägg**, välj **Sync**.
3. Bredvid **Raderade filer**, välj **Vy**.
4. Välj den anteckning du vill visa versionshistorik för.
5. I popup-fönstret för versionshistorik, välj den version av anteckningen du vill visa till vänster.

#### Återställ en tidigare version av en fil

**Dator/Surfplatta** ![[lucide-monitor-check.svg#icon]]
1. I **filutforskaren**, välj den anteckning du vill återställa.
2. Välj **Öppna versionshistorik**.
3. Välj den version av anteckningen du vill återställa till vänster. Innehållet visas till höger.
4. Välj knappen **Återställ**.
5. Anteckningens innehåll ersätts med den återställda versionen.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. I **filutforskaren**, välj den anteckning du vill återställa.
2. Tryck länge för att visa kontextmenyn.
3. Välj **Öppna versionshistorik**.
4. I popup-menyn, välj den version av anteckningen du vill återställa.
5. När den är vald blir anteckningens innehåll tillgängligt för granskning.
6. Välj knappen **Återställ**.
7. Anteckningens innehåll ersätts med den återställda versionen.

#### Återställ en raderad fil

1. Öppna **[[Inställningar]]**.
2. I sidofältet, under **Kärntillägg**, välj **Sync**.
3. Bredvid **Raderade filer**, välj **Vy**.
4. Välj den anteckning du vill återställa.
5. I listan med versioner till vänster, välj den version du vill återställa.
6. Välj knappen **Återställ** till höger.
7. Anteckningen återställs till sin ursprungliga plats i filsystemet.

> [!tip] Du kan välja flera anteckningar med **massåterställning** genom att markera kryssrutorna, eller använda `shift+klick`. Dessa filer kommer inte kunna granskas i den här menyn.

### Inställningshistorik

Obsidian Sync håller även koll på ändringar som gjorts i dina valvkonfigurationsinställningar.

#### Visa versionshistorik för en inställning

1. Öppna **[[Inställningar]]**.
2. I sidofältet, under **Kärntillägg**, välj **Sync**.
3. Navigera ned till **Valvkonfigurationssynkronisering**.
4. Välj knappen **Vy** bredvid **[[Inställningar]] versionshistorik**.
5. I popup-fönstret **[[Inställningar]]-fil**, välj en inställningsfil du vill visa.

#### Återställ en tidigare version av en inställning

1. Öppna **[[Inställningar]]**.
2. I sidofältet, under **Kärntillägg**, välj **Sync**.
3. Navigera ned till **Valvkonfigurationssynkronisering**.
4. Välj knappen **Vy** bredvid **[[Inställningar]] versionshistorik**.
5. I popup-fönstret **[[Inställningar]]-fil**, välj en inställningsfil du vill visa.
6. I ändringsfönstret, välj knappen **Återställ**.
7. Ladda om eller starta om Obsidian för att inställningen ska träda i kraft. För mer information, se instruktionerna i [[Konfigurera Obsidian Sync#Justera Obsidian Sync-inställningar|Justera Obsidian Sync-inställningar]].
