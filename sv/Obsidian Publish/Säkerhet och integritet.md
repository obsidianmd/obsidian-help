---
permalink: publish/security
---
Du kan välja vilka anteckningar du vill publicera till [[Introduktion till Obsidian Publish|Obsidian Publish]]. Resten av dina anteckningar förblir säkra i ditt valv.

Endast de anteckningar du väljer att publicera skickas till Obsidians servrar, och alla anteckningar du avpublicerar tas bort.

## Lösenordsskydd

För förbättrad åtkomstkontroll på din publiceringswebbplats kan du använda ett webbplatslösenord. Besökare kommer att uppmanas att ange ett lösenord när de försöker komma åt den. Om du senare väljer att ta bort webbplatslösenordet blir hela webbplatsen synlig för allmänheten igen.

> [!warning] Individuellt lösenordsskydd för publicerade anteckningar stöds för närvarande inte.

### Lägg till ett webbplatslösenord

1. I ribbon, till vänster om programfönstret, klicka på **Publicera ändringar** ![[lucide-send.svg#icon]].
2. I dialogrutan **Publicera ändringar**, klicka på **Ändra webbplatsalternativ** ![[lucide-cog.svg#icon]].
3. Under **Andra webbplatsinställningar**, bredvid **Lösenord**, klicka på **Hantera**.
4. Klicka på **Nytt lösenord**.
5. I **Lösenord**, ange ett lösenord för din webbplats.
6. (Valfritt) I **Smeknamn**, ange ett smeknamn för lösenordet, till exempel personen du vill ge webbplatsåtkomst till.
7. Klicka på **Lägg till detta lösenord**.

### Ta bort ett webbplatslösenord

1. I ribbon, till vänster om programfönstret, klicka på **Publicera ändringar** ![[lucide-send.svg#icon]].
2. I dialogrutan **Publicera ändringar**, klicka på **Ändra webbplatsalternativ** ![[lucide-cog.svg#icon]].
3. Under **Andra webbplatsinställningar**, bredvid **Lösenord**, klicka på **Hantera**.
5. Klicka på korsikonen bredvid lösenordet du vill radera.

## Datainsamling
### Besökardata

Som standard samlar Obsidian Publish **inte** in besökardata, lagrar cookies eller behandlar personuppgifter. Du kan dock implementera analys eller logga annan användardata genom att [[Anpassa din webbplats|anpassa din webbplats]].

Som webbplatsägare ansvarar du för att följa GDPR och integritetsregler i din region. Detta inkluderar att skapa en egen aviseringsbanner, som kan implementeras med publish.js, och att lägga till en integritetspolicysida på din webbplats.

## Åtkomst

Obsidian har avtal med [Cloudflare](https://www.cloudflare.com) för att tillhandahålla webbplatshosting för våra Publish-webbplatser. Servrarna finns i San Francisco, CA.

### Hantera åtkomst till Obsidian Publish i ditt nätverk

För att reglera åtkomst till Obsidian Publish i ditt nätverk behöver du hantera följande domäner:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Dessutom använder backend-tjänsterna följande underdomäner: `publish-xx.obsidian.md`, där `xx` är ett nummer från `1 - 100`.

> [!tip] Om ditt brandväggssystem stöder det rekommenderar vi att du vitlistar `publish-*.obsidian.md` för att anpassa till vår kontinuerliga expansion av underdomäner.
