---
permalink: plugins/graph
publish: true
mobile: true
description: Grafvy är ett kärntillägg som låter dig visualisera relationerna mellan anteckningarna i ditt valv.
---
Grafvy är ett [[Kärntillägg|kärntillägg]] som låter dig visualisera relationerna mellan anteckningarna i ditt valv.

För att öppna grafvyn, klicka på **Öppna grafvy** i [[Ribbon]].

- Cirklar representerar anteckningar, eller _noder_.
- Linjer representerar [[Interna länkar]] mellan två noder.

Ju fler noder som refererar till en given nod, desto större blir den.

För att interagera med anteckningar i grafen:

- Hovra över varje cirkel för att markera den anteckningens kopplingar.
- Klicka på en anteckning i grafen för att öppna den anteckningen.
- Högerklicka på en anteckning för att öppna en snabbmeny med tillgängliga åtgärder för den anteckningen.

För att navigera runt i grafen:

- Zooma in och ut med hjälp av scrollhjulet på din mus, eller med tangenterna `+` och `-`.
- Flytta grafen genom att dra den med muspekaren, eller med piltangenterna.

Du kan hålla ned Shift medan du använder tangentbordet för att snabba upp rörelserna.

## Inställningar

För att öppna grafinställningarna, klicka på kugghjulsikonen i det övre högra hörnet av grafvyn.

Klicka på **Återställ standardinställningar** i det övre högra hörnet av inställningsrutan för att återställa eventuella ändringar du gjort.

### Filter

Det här avsnittet styr vilka noder som visas i grafen.

- **Sök filer** låter dig filtrera anteckningar baserat på ett sökord. För att lära dig hur du kan skriva mer avancerade söktermer, se [[Sök]].
- **Taggar** växlar om taggar ska visas i grafen.
- **Bilagor** växlar om bilagor ska visas i grafen.
- **Endast befintliga filer** växlar om anteckningar som finns i ditt valv ska visas. Eftersom en anteckning inte behöver existera för att länka till den, kan detta hjälpa till att begränsa din graf till anteckningar som du faktiskt har i ditt valv.
- **Föräldralösa** växlar om anteckningar utan några länkar ska visas.

> [!info] Exkluderade filer
> Filer som matchar dina [[Inställningar#Exkluderade filer|Exkluderade filer]]-mönster kommer inte att visas i grafvyn.

### Grupper

Skapa grupper av anteckningar för att skilja dem från varandra med hjälp av färg.

För att skapa en ny grupp:

1. Klicka på **Ny bokmärkesgrupp**.
2. I sökrutan, skriv ett sökord för anteckningarna du vill lägga till i gruppen.
3. Klicka på den färgade cirkeln för att ge gruppen en färg.

För att lära dig hur du kan skriva mer avancerade söktermer, se [[Sök]].

### Visa

Det här avsnittet styr hur noder och länkar visualiseras i grafen.

- **Pilar** växlar om riktningen för varje länk ska visas.
- **Textblekningströskel** styr textens transparens för namnet på varje anteckning.
- **Nodstorlek** styr storleken på cirkeln som representerar varje anteckning.
- **Länkens tjocklek** styr linjens bredd för varje länk.
- **Animera** startar en [[#Starta en tidsförloppsanimation|tidsförloppsanimation]].

### Krafter

Det här avsnittet styr krafterna som verkar på varje nod i grafen.

- **Centralkraft** styr hur kompakt grafen är. Ett högre värde skapar en mer cirkulär graf.
- **Repulsionskraft** styr hur mycket en nod skjuter andra noder bort från sig.
- **Länkens kraft** styr dragningen på varje länk. Om länken vore ett gummiband, styr länkens kraft hur stramt eller löst bandet är.
- **Länkens avstånd** styr längden på linjerna mellan varje anteckning.

## Starta en tidsförloppsanimation

Anteckningar och bilagor visas i kronologisk ordning baserat på deras skapelsetid.

![[obsidian-graph-view.png#interface]]

## Lokal graf

För att öppna en lokal grafvy, använd kommandot **Öppna lokal graf**. Medan grafvyn visar alla anteckningar i ditt valv, visar en lokal grafvy anteckningar kopplade till den aktiva anteckningen.

Den lokala grafvyn kan använda alla [[#Inställningar]] som är tillgängliga för den globala grafvyn. Dessutom kan du ändra djupet på den lokala grafen. Varje nivå av djup kommer att visa anteckningar kopplade till de anteckningar som avslöjades vid föregående djup. För att styra den lokala grafens djup, använd reglaget högst upp i den lokala grafens filterpanel.
