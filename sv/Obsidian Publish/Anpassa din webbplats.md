---
permalink: publish/customize
publish: true
description: Lär dig hur du anpassar utseendet och stilen på din Obsidian Publish-webbplats.
---
Den här sidan förklarar hur du kan anpassa utseendet och känslan av din [[Introduktion till Obsidian Publish|Obsidian Publish]]-webbplats.

## Statiska tillgångar

Du kan anpassa din webbplats genom att [[Publicera ditt innehåll#Publicera anteckningar|publicera]] följande filer till din webbplats:

- `publish.css` för att lägga till anpassad CSS
- `publish.js` för att lägga till anpassat JavaScript
- `favicon-32x32.png` för att ange favicon

**Noteringar:**

- [CSS-variabler för Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) finns på vår dokumentationswebbplats.
- Eftersom Obsidian inte stöder CSS- eller JavaScript-filer behöver du använda en annan applikation för att skapa och redigera dem.
- Både `publish.css` och `publish.js` måste finnas i rotkatalogen (`/`) i ditt valv.
- Som standard visas inte `publish.css` och `publish.js` i filutforskaren, men du kan fortfarande publicera dem från dialogen **Publicera ändringar**.
- För att använda anpassat JavaScript med `publish.js` behöver du [[Anpassade domäner]].

För favicons stöder Obsidian Publish följande namnkonventioner, där `32` representerar ikonens dimensioner i pixlar:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Vi rekommenderar att du tillhandahåller en eller flera av följande dimensioner:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Du har flexibilitet att placera favicons var som helst i valvet, så länge de publiceras till din webbplats.

## Använda ett community-tema

För att använda ett av community-temana för din webbplats:

1. Öppna ditt valv i standardfilutforskaren för ditt operativsystem.
2. Gå till valvets inställningsmapp (standard: `.obsidian`).
3. Öppna mappen `themes`.
4. Kopiera CSS-filen för det tema du vill använda för din webbplats.
5. Klistra in filen i rotmappen i ditt valv.
6. Byt namn på CSS-filen till `publish.css`.
7. [[Publicera ditt innehåll#Publicera anteckningar|Publicera]] `publish.css`.

**Noteringar:**

- Om stilen inte uppdateras inom några minuter, försök att rensa webbläsarens cache.
- Du kan växla mellan ljust och mörkt läge i [[Hantera webbplatser#Visa webbplatsalternativ|webbplatsalternativen]].
- Många community-teman använder **Style Settings** för anpassad styling, men dessa inställningar fungerar inte på Obsidian Publish.

> [!tip] Utveckla teman
> Hittar du inte rätt tema? Lär dig hur du [bygger ett Publish-tema](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) själv.

## Aktivera UI-funktioner

Du kan växla flera UI-funktioner för din webbplats, såsom grafvy eller en innehållsförteckning.

Bläddra bland de tillgängliga UI-funktionerna under avsnitten **Läsupplevelse** och **Komponenter** i [[Hantera webbplatser#Visa webbplatsalternativ|webbplatsalternativen]].

### Anpassa navigering

Inom Obsidian Publish har du möjlighet att anpassa navigeringsordningen och visningen av filer och mappar inom Publish [[Filutforskare|filutforskaren]]. Navigeringsobjekt listas i publiceringsordning som standard. Anteckningar som inte är publicerade kommer inte att visas i detta fönster.

#### Åtkomst till navigeringsanpassningsalternativ

1. I [[Ribbon]], välj **Publicera ändringar** ![[lucide-send.svg#icon]] eller öppna [[Kommandopalett|kommandopaletten]] och skriv **Publish: Publish changes...**
2. I dialogen **Publicera ändringar**, välj **Ändra webbplatsalternativ** ![[lucide-cog.svg#icon]].
3. Under **Komponentinställningar**, bredvid **Anpassa navigering**, välj knappen **Hantera**.

Ett nytt popup-fönster med titeln **Navigering** visas ovanför fönstret **Ändra webbplatsalternativ**.

#### Justera navigeringsobjekt

I avsnittet märkt **Navigeringsförhandsvisning** kan du justera visningsordningen för ditt publicerade innehåll.

1. Välj den mapp eller anteckning du vill justera.
2. Dra anteckningen eller mappen uppåt eller nedåt tills den är på önskad plats.
3. I det nedre högra hörnet av fönstret **Navigering**, välj **Klar**.

Publish skickar dina navigeringsändringar till din webbplats.

#### Dölj och visa navigeringsobjekt

Om det finns anteckningar eller mappar du har publicerat, men inte vill att de ska vara synliga i din navigering, kan du välja att dölja dessa objekt istället.

1. Välj den mapp eller anteckning du vill justera.
2. Högerklicka och välj **Dölj i navigering**. Objektet bör nu försvinna från **Navigeringsförhandsvisning**.
3. I det nedre högra hörnet av fönstret **Navigering**, välj **Klar**.

Publish skickar dina navigeringsändringar till din webbplats.

> [!tip] Du kan **Visa dolda** filer genom att markera kryssrutan till höger om titeln **Navigeringsförhandsvisning**

## Vanliga frågor

**Kan jag flytta filer från en mapp till en annan inom navigeringen?**

Nej. Filnavigeringsstrukturen för anteckningar inom mappar måste bibehållas. Du kan justera anteckningsordningen inom mappar (inklusive valvroten) och mappordningen inom andra mappar.

**Kan jag redigera ordningen på flera anteckningar och mappar innan jag väljer Klar?**

Ja.

**Hur återställer jag dessa ändringar?**

- **Visningsordning**: Välj ikonen **Återställ standard** (moturs roterande pil) bredvid **Navigeringsobjektens visningsordning**. Detta återställer dina navigeringsobjekt till alfabetisk ordning.
- **Dold status**: Välj ikonen **Återställ standard** (moturs roterande pil) bredvid **Dölj sidor eller mappar från navigering**. Detta återställer dina dolda navigeringsobjekt till ett synligt tillstånd.
