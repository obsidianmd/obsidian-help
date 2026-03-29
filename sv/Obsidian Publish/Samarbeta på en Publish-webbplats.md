---
permalink: publish/collaborate
publish: true
mobile: true
description: Lär dig hur du samarbetar med andra Obsidian-användare på din Obsidian Publish-webbplats.
---
Lär dig hur du samarbetar på din [[Introduktion till Obsidian Publish|Obsidian Publish]]-webbplats med andra Obsidian-användare. Genom att lägga till dina vänner och kollegor som medarbetare kan de publicera ändringar på din webbplats.

Endast webbplatsägaren behöver en aktiv prenumeration för Obsidian Publish. Medarbetare behöver bara ett [Obsidian-konto](https://obsidian.md/account).

> [!warning] Innan du publicerar ändringar på en delad webbplats, se till att [[#Synkronisera ändringar mellan medarbetare|synkronisera ändringar mellan medarbetare]]. Annars riskerar du att skriva över ändringar från andra medarbetare.

## Lägg till en medarbetare på en webbplats

1. I [[Ribbon]], välj **Publicera ändringar** ![[lucide-send.svg#icon]] eller öppna [[Kommandopalett|kommandopaletten]] och skriv **Publish: Publicera ändringar...**
2. I dialogrutan **Publicera ändringar**, klicka på **Ändra webbplatsalternativ** ![[lucide-cog.svg#icon]].
3. Bredvid **Webbplats samarbete**, välj **Hantera**.
4. I **Bjud in användare**, ange medarbetarens e-post.
5. Välj **Lägg till**.

## Ta bort en medarbetare från en webbplats

1. I [[Ribbon]], välj **Publicera ändringar** ![[lucide-send.svg#icon]] eller öppna [[Kommandopalett|kommandopaletten]] och skriv **Publish: Publicera ändringar...**
2. I dialogrutan **Publicera ändringar**, klicka på **Ändra webbplatsalternativ** ![[lucide-cog.svg#icon]].
3. Bredvid **Webbplats samarbete**, välj **Hantera**.
4. Bredvid medarbetaren du vill ta bort, välj **Ta bort användare** ![[lucide-x.svg#icon]].

## Synkronisera ändringar mellan medarbetare

Obsidian Publish synkroniserar inte publicerade ändringar mellan lokala valv automatiskt. Istället behöver medarbetare manuellt synkronisera ändringar från andra medarbetare.

För att uppdatera en lokal anteckning med ändringar från den aktiva webbplatsen:

1. I [[Ribbon]], välj **Publicera ändringar** ![[lucide-send.svg#icon]] eller öppna [[Kommandopalett|kommandopaletten]] och skriv **Publish: Publicera ändringar...**
2. Högerklicka eller tryck länge på ändringen du vill synkronisera och välj sedan **Använd liveversionen**. **Detta kommer att skriva över anteckningen i ditt lokala valv.**

> [!tip] Vi rekommenderar att du använder ett annat verktyg för att synkronisera ändringar mellan valv, såsom [[Introduktion till Obsidian Sync|Obsidian Sync]] eller [git](https://git-scm.com/).

## Behörigheter

Följande tabell listar de tillgängliga webbplatsbehörigheterna för ägare och medarbetare:

| Åtgärd                                    | Medarbetare | Ägare |
|--------------------------------------------|:-----------:|:-----:|
| Publicera nya sidor                        | ✓           | ✓     |
| Publicera ändringar på publicerade sidor   | ✓           | ✓     |
| Avpublicera sidor                          | ✓           | ✓     |
| Konfigurera webbplatsalternativ            |             | ✓     |
| Hantera behörigheter                       |             | ✓     |
