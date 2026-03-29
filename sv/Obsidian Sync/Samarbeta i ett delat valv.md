---
permalink: sync/collaborate
publish: true
mobile: true
description: Den här sidan beskriver hur du kan samarbeta med andra Obsidian Sync-användare.
---
Med [[Introduktion till Obsidian Sync|Obsidian Sync]] kan du samarbeta i ett delat valv med ditt team.

Alla medarbetare måste ha en aktiv Sync-prenumeration för att komma åt ett delat valv. Att gå med i ett delat valv räknas inte mot din [[Vanliga frågor#Hur många fjärrvalv kan jag ha?|valvgräns]].

Om fjärrvalvet är [[Obsidian Sync/Säkerhet och integritet|slutpunkt-till-slutpunkt-krypterat]] måste medarbetare ange krypteringslösenordet när de konfigurerar valvet.

## Hantera användare

### Lägg till användare

För att bjuda in en användare att dela ett fjärrvalv:

1. Öppna **[[Inställningar]]**.
2. I sidomenyn, välj **Sync**.
3. Bredvid **Fjärrvalv**, välj **Hantera**.
4. Bredvid det fjärrvalv du vill dela, välj **Hantera delning** ![[lucide-users.svg#icon]].
5. I **Bjud in användare**, ange e-postadressen till användaren du vill bjuda in.
6. Välj **Lägg till**.

### Ta bort användare

1. Öppna **[[Inställningar]]**.
2. I sidomenyn, välj **Sync**.
3. Bredvid **Fjärrvalv**, välj **Hantera**.
4. Bredvid användaren du vill ta bort åtkomst för, välj **Ta bort användare** ![[lucide-x.svg#icon]].

## Samarbeta med ditt team

### Behörigheter

Detaljerade behörigheter stöds inte ännu. Alla medarbetare får samma behörigheter som valvägaren, med ett undantag: bara valvägaren kan bjuda in medarbetare.

### Redigering i realtid

Delade valv gör det möjligt för team att arbeta tillsammans med en uppsättning filer, men Obsidian stöder ännu inte kollaborativ redigering i realtid av samma fil. Du kommer inte att se den andra användarens markör, och deras ändringar visas först när ändringarna har synkroniserats.

Om flera användare redigerar samma fil samtidigt kommer [[Felsök Obsidian Sync#Konfliktlösning|ändringarna att sammanfogas]] under synkroniseringsprocessen. Ändringar kan visas och återställas med hjälp av [[Versionshistorik]].

![[version-history-collaboration.png]]^version-history-image

## Begränsningar

Var medveten om att Obsidian Sync har [[Vanliga frågor|begränsningar]] som kan påverka ditt team:

- Det maximala antalet medarbetare i ett delat valv är 20 användare.
- Den maximala filstorleken för bilagor beror på [[Planer och lagringsgränser|planen]] för din fjärrvalvsvärd, med 5 MB för Standard-planen och 200 MB för Plus-planen.

Läs mer om [[Synkronisera för team]].
