---
permalink: publish/publish
publish: true
mobile: true
description: Lär dig hur du publicerar ditt innehåll med Obsidian Publish.
---
Denna sida förklarar hur du hanterar ditt publicerade innehåll. För att lära dig hur du anpassar din webbplats stil, se [[Anpassa din webbplats]].

## Förutsättningar

- Ett Obsidian-konto. Om du inte har ett, [registrera dig nu](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- En aktiv Obsidian Publish-prenumeration. Om du inte har en, prenumerera från [din kontopanel](https://obsidian.md/account/publish).
- Kärntillägget **Publish** är [[Konfigurera Obsidian Publish#Aktivera Obsidian Publish|aktiverat]].
- En [[Hantera webbplatser#Skapa en ny webbplats|Publish-webbplats]] har skapats.

## Publicera anteckningar

1. I **Ribbon**, välj **Publicera ändringar** ![[lucide-send.svg#icon]].
2. I dialogrutan **Publicera ändringar**, välj **NY** för att visa alla opublicerade anteckningar.
3. Välj de anteckningar du vill publicera.
4. Välj **Publicera**.

## Avpublicera anteckningar

Anteckningar finns kvar i ditt lokala valv även efter att du avpublicerar dem.

1. I **Ribbon**, välj **Publicera ändringar** ![[lucide-send.svg#icon]].
2. I dialogrutan **Publicera ändringar**, välj **OFÖRÄNDRADE** för att visa alla publicerade anteckningar.
3. Välj de anteckningar du vill avpublicera.
4. Välj **Publicera**.

## Uppdatera en publicerad anteckning

1. I **Ribbon**, välj **Publicera ändringar** ![[lucide-send.svg#icon]].
2. I dialogrutan **Publicera ändringar**, välj **ÄNDRINGAR** för att visa alla modifierade anteckningar sedan senaste publiceringen.
3. Välj de anteckningar du vill uppdatera.
4. Välj **Publicera**.

> [!hint] Radering av omdöpta eller borttagna anteckningar och bilder från Publish sker i detta steg. Du måste manuellt markera kryssrutan för att radera dessa data, eftersom den inte väljs automatiskt av säkerhetsskäl.

## Publicera länkade data

När du publicerar anteckningar som innehåller länkar till andra anteckningar eller inbäddade bilder kan trasiga länkar uppstå om inte de länkade anteckningarna också publiceras. **Obsidian Publish** hjälper till att förhindra detta genom att automatiskt välja media som länkas från de anteckningar du redan har valt.

För att inkludera alla länkade anteckningar, välj **Lägg till länkade** i dialogrutan **Publicera ändringar**.

Innan du publicerar, granska det uppdaterade urvalet för att säkerställa att det inte inkluderar data som du inte är redo att publicera.

> [!tip] Funktionen **Lägg till länkade** respekterar alla undantag definierade i [[#Ignorera data]].

## Välj data att publicera automatiskt

Ange `publish: true` i [[Egenskaper]] för en anteckning för att automatiskt inkludera den för publicering som antingen en ny eller ändrad anteckning.

Du kan också automatiskt välja anteckningar och länkade bilder i specifika mappar genom att lägga till dem som **Inkluderade** mappar:

1. I **Ribbon**, välj **Publicera ändringar** ![[lucide-send.svg#icon]] eller öppna [[Kommandopalett|kommandopaletten]] och skriv **Publish: Publicera ändringar...**.
2. Välj ikonen **Hantera publiceringsfilter** ![[lucide-filter.svg#icon]].
3. I avsnittet **Inkluderade mappar**, välj **Hantera**.
4. Välj de mappar du vill inkludera från förslagslistan.
5. Mappen läggs till i den inkluderade listan.
6. Välj **Klar** när du är färdig.

### Ignorera data

För att ignorera en anteckning i Obsidian Publish, ange `publish: false` i [[Egenskaper]] för anteckningen. Anteckningen visas inte längre i listan över anteckningar att publicera.

Du kan också automatiskt ignorera anteckningar och bilder i specifika mappar genom att lägga till dem som **Exkluderade** mappar:

1. I **Ribbon**, välj **Publicera ändringar** ![[lucide-send.svg#icon]] eller öppna [[Kommandopalett|kommandopaletten]] och skriv **Publish: Publicera ändringar...**.
2. Välj ikonen **Hantera publiceringsfilter** ![[lucide-filter.svg#icon]].
3. I avsnittet **Exkluderade mappar**, välj **Hantera**.
4. Välj de mappar du vill exkludera från förslagslistan.
5. Mappen läggs till i den exkluderade listan.
6. Välj **Klar** när du är färdig.

> [!note] `publish: true` åsidosätter exkluderade mappar
> Om en fil har `publish: true` kommer den fortfarande att publiceras även om den finns i en mapp eller ett filter som är exkluderat. Detta beror på att `publish: true` ger mer specifik kontroll.
