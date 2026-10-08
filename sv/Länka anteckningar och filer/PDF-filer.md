---
permalink: pdf
publish: true
mobile: true
description: 'Lär dig hur du visar, söker i och länkar till PDF-filer i Obsidian, samt hur du exporterar en anteckning som PDF.'
---
Obsidian öppnar PDF-filer i en inbyggd visare. Du kan också bädda in en PDF i en anteckning, länka till ett avsnitt i den och exportera vilken anteckning som helst som en PDF. För de filtyper Obsidian stöder, se [[Accepterade filformat]].

> [!info]+ Vissa funktioner finns bara på skrivbordet
> Obsidians mobilapp kan inte söka inuti en PDF, kopiera ett citat eller en länk till en markering, eller exportera en anteckning till PDF.

## Öppna en PDF

I [[Filutforskare|Filutforskaren]] väljer du en PDF för att öppna den i en flik.

> [!info]+ Anteckningar stöds inte
> Obsidian stöder inte att lägga till anteckningar eller markeringar i en PDF. För att markera i en PDF, använd en annan app och öppna sedan den uppdaterade filen i ditt valv.

Visaren har ett verktygsfält med dessa kontroller. Obsidians mobilapp har samma verktygsfält.

- **Växla sidofält** visar eller döljer sidofältet, och **Alternativ för sidofält** ändrar vad sidofältet visar.
- **Zooma ut** och **Zooma in** ändrar storleken på sidan.
- **Visningsalternativ** ändrar hur sidor läggs ut.
- Sidrutan visar den aktuella sidan. Ange ett sidnummer för att gå till den sidan.

För att arbeta med själva PDF-filen, till exempel byta namn på eller flytta den, välj **Fler alternativ** ![[lucide-more-horizontal.svg#icon]]. En PDF har färre objekt i denna meny än en anteckning. Se [[Fler alternativ-menyn]].

## Navigera i en PDF

Välj **Alternativ för sidofält** och välj sedan vad som ska visas.

- **Miniatyrbilder** visar en liten förhandsvisning av varje sida.
- **Innehållsförteckning** visar PDF:ens disposition, om den har en.
- **Visa sidan i innehållsförteckningen** markerar den aktuella sidan i innehållsförteckningen.

För att länka till en sida, högerklicka på dess miniatyrbild och välj **Kopiera länk till sida N**, där N är sidnumret. Klistra in länken i en anteckning.

För att länka till ett avsnitt, högerklicka på en post i innehållsförteckningen och välj **Kopiera länk till "Titel"**, där Titel är namnet på posten. På mobil, tryck och håll på posten.

## Ändra hur en PDF ser ut

Välj **Visningsalternativ** för att ändra layouten.

- **Anpassa till bredd** och **Anpassa till höjd** anpassar sidan till visaren.
- **Ensidigt** visar en sida åt gången.
- **Tvåsidigt (odd)** visar sidor sida vid sida, med start på en udda sida till vänster. Till exempel visas sidorna 1 och 2 tillsammans, och sedan sidorna 3 och 4.
- **Tvåsidigt (even)** visar sidor sida vid sida, med start på en jämn sida till vänster. Till exempel visas sida 1 ensam, och sedan visas sidorna 2 och 3 tillsammans.
- **Anpassa till tema** gör PDF:ens färger mörkare när ditt Obsidian-tema är mörkt.

## Söka i en PDF

Sökning inuti en PDF är tillgänglig bara på skrivbordet. Obsidians mobilapp har inte sökfunktion i PDF-visaren.

1. Tryck `Ctrl+F` (Windows och Linux) eller `Command+F` (macOS).
2. I **Skriv för att börja söka...** anger du texten du vill hitta.
3. Välj uppåt- eller nedåtpilen för att flytta mellan träffar.

För att ändra hur sökningen fungerar, använd dessa alternativ.

- **Matcha skiftläge** matchar stora och små bokstäver exakt. Det är **Aa**-knappen i sökfältet.
- **Markera allt** markerar varje träff. Välj inställningsknappen bredvid pilarna för att hitta detta alternativ.
- **Matcha diakritiska tecken** behandlar bokstäver med accenter som olika bokstäver. Det finns i samma inställningsmeny.
- **Hela ord** hittar bara hela ord. Det finns i samma inställningsmeny.

Välj stäng-knappen för att lämna sökningen.

## Kopiera text från en PDF

På skrivbordet, markera text i PDF:en och högerklicka sedan på den.

- **Kopiera** kopierar texten.
- **Kopiera som citat** kopierar texten som ett citat, följt av en länk till avsnittet.
- **Kopiera länk till markering** kopierar en länk till det avsnittet, så att du kan klistra in den i en anteckning.

Ett citat ser ut så här när du klistrar in det i en anteckning.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

En länk till en markering har samma länk på egen hand.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

På mobil visar markering av text i en PDF din enhets standardtextmeny. **Kopiera som citat** och **Kopiera länk till markering** är inte tillgängliga.

## Bädda in en PDF

För att visa en PDF inuti en anteckning, se hur du [[Bädda in filer#Bädda in en PDF i en anteckning|bäddar in en PDF i en anteckning]]. En inbäddad PDF har samma verktygsfält som visaren. Välj **Redigera detta block** för att ändra inbäddningslänken.

## Exportera en anteckning till PDF

Du kan exportera vilken anteckning som helst som en PDF på skrivbordet. Export till PDF är inte tillgänglig i Obsidians mobilapp.

1. Öppna anteckningen du vill exportera.
2. Öppna [[Kommandopalett|Kommandopaletten]] och välj **Exportera PDF**. Du kan också välja **Fler alternativ** ![[lucide-more-horizontal.svg#icon]] i anteckningen och sedan välja **Exportera PDF**.
3. Välj dina inställningar.
    - **Inkludera filnamn som titel** lägger till filnamnet överst i PDF:en.
    - **Sidstorlek** anger pappersstorleken. Du kan välja A3, A4, A5, Legal, Letter eller Tabloid.
    - **Liggande** vänder sidorna på tvären.
    - **Marginal** ställer in sidmarginalen till **Standard**, **Minimal** eller **Ingen**.
    - **Nedskalningsprocent** skalar innehållet på varje sida. Vid 100 behåller innehållet full storlek. Lägre värden gör texten och bilderna mindre, så att mer ryms på varje sida.
4. Välj **Exportera till PDF**.
5. Välj var filen ska sparas.

> [!tip]- Exportera en anteckning med ett mörkt tema
> Exporter använder alltid ljus stil, även om ditt tema är mörkt. För att ändra hur en export ser ut kan du använda ett [[CSS-instick]]. Obsidians forum har exempel på instick för utskrift och export.[^1]

[^1]: Se [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) och [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
