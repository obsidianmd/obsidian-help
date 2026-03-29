---
permalink: sync/plans
publish: true
mobile: true
description: Lär dig om de olika prenumerationsalternativ vi erbjuder för Obsidian Sync.
---
## Planer

För att synkronisera dina anteckningar med [[Introduktion till Obsidian Sync|Obsidian Sync]] behöver du en prenumerationsplan. Du kan köpa en Sync-plan genom att logga in på [ditt konto](https://obsidian.md/account/sync). Se [Syncs landningssida](https://obsidian.md/sync) för prissättning.

Nedan finns en jämförelse mellan Standard-planen och Plus-planen:

|                                                        | Sync Standard | Sync Plus       |
| ------------------------------------------------------ | ------------- | --------------- |
| Synkroniserade valv                                    | 1             | 10              |
| Maximal filstorlek                                     | 5 MB          | 200 MB          |
| Total lagring                                          | 1 GB          | 10 GB till 100 GB |
| [[Versionshistorik]]                                   | 1 månad       | 12 månader      |
| Enheter                                                | Obegränsat    | Obegränsat      |
| [[Samarbeta i ett delat valv\|Delade valv]]            | Ja            | Ja              |

## Lagringsgränser

Mängden data du kan lagra med [[Introduktion till Obsidian Sync|Obsidian Sync]] beror på din prenumerationsplan. Med Sync Plus-planen kan du köpa ytterligare lagring upp till 100 GB via [ditt kontos kontrollpanel](https://obsidian.md/account/sync). Se [[Vanliga frågor]] för mer information.

Det finns en enda kontoövergripande lagringsgräns för alla anteckningar i alla dina valv. [[Versionshistorik]] och [[Bilagor|bilagor]] räknas också mot ditt kontos lagringsgräns.

När du når ditt kontos lagringsgräns kommer Sync-tillägget att sluta synkronisera filer, och du kommer att uppmanas att rensa ditt/dina fjärrvalv.

### Identifiera och radera stora filer

För att identifiera och radera stora filer från valvet:

1. Öppna **[[Inställningar]] → Sync**.
2. Välj **Visa största filer** bredvid **Valvstorlek över gränsen**.
	1. Om du inte ser **Valvstorlek över gränsen** betyder det att ==du inte har nått storleksgränsen== ännu.
3. Stäng modalen **Visa största filer**.
4. Radera några av de stora filerna du inte längre behöver.
5. Vänta tills Obsidian Sync har slutfört uppgiften. Detta kan ta en stund.
6. Öppna **[[Inställningar]] → Sync**.
7. Välj **Rensa** bredvid **Valvstorlek över gränsen**. Detta tar bort de raderade filerna från fjärrvalvet för att frigöra utrymme.

Efter att rensningen synkroniserats till servern bör Obsidian Sync återuppta funktionen.

### Skapa ett nytt fjärrvalv

Du kan **skapa ett nytt fjärrvalv** för att exkludera stora filer innan synkronisering. Versionshistoriken för dina filer kommer att återställas om du skapar ett nytt fjärrvalv. Se till att du inte behöver versionshistorik för äldre filer innan du fortsätter.

För att synkronisera till ett nytt fjärrvalv, följ dessa steg:

1. Öppna **[[Inställningar]] → Sync**.
2. Välj **Hantera** bredvid **Fjärrvalv**.
3. Välj **Skapa nytt valv** och följ stegen för att skapa det. Om du har slut på valv kan du behöva [[Konfigurera Obsidian Sync#Koppla från ett fjärrvalv|koppla från]] det nuvarande fjärrvalvet och [[Konfigurera Obsidian Sync#Radera ett fjärrvalv|radera]] det först.
4. Ställ in exkluderade filer innan du börjar synkronisera till det nya fjärrvalvet.
5. Starta om Obsidian för att tillämpa dina ändringar.
6. Öppna **[[Inställningar]] → Sync**.
7. Välj Återuppta för att börja synkronisera till det nya fjärrvalvet.

Det nya fjärrvalvet bör vara mindre än det föregående valvet, på grund av avsaknaden av versionshistorik och exkluderade filer.

## Uppgradera din plan

Du kan uppgradera din plan genom att logga in på [ditt kontos kontrollpanel](https://obsidian.md/account/sync). Därifrån kan du uppgradera din plan från Sync Standard till Sync Plus, och öka lagringen upp till 100 GB.

## Nedgradera din plan

Om du vill nedgradera din Sync-plan men din lagringsanvändning överstiger den nya planens gräns, behöver du frigöra utrymme i ditt fjärrvalv. För närvarande finns det ingen direkt metod för att snabbt ta bort specifika filer från ett befintligt fjärrvalv. Detta beror på att bilagor behålls i versionshistoriken i upp till två veckor, och versionshistorik räknas mot din lagringsgräns.

Det snabbaste sättet att minska din Sync-lagringsanvändning är att skapa ett nytt fjärrvalv med bilagor inaktiverade och sedan radera det gamla fjärrvalvet som överstiger lagringsgränserna. Var medveten om att du förlorar versionshistoriken genom att göra detta.

Om du nedgraderar från Sync Plus till Sync Standard måste du också minska antalet befintliga valv till ett innan nedgraderingen tillåts.

### Bevara versionshistorik

Bilagor behålls i din [[Versionshistorik|versionshistorik]] i upp till två veckor. Om du planerar att nedgradera inom en snar framtid kan du börja med att ta bort bilagor från ditt lokala valv.

Efter två veckor kommer dessa att rensas från fjärrvalvet och räknas inte längre mot din lagringsgräns. Vid den tidpunkten kan du nedgradera din plan och samtidigt bevara versionshistoriken för andra filtyper, såsom Markdown-filer.
