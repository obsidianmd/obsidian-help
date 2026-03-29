---
permalink: plugins/note-composer
---
[[Anteckningskompositör]] är ett [[Kärntillägg|kärntillägg]] som låter dig sammanfoga två anteckningar eller extrahera en del av en anteckning till en ny anteckning.

## Sammanfoga anteckningar

Att sammanfoga anteckningar lägger till en anteckning i en annan och tar bort den första. Anteckningskompositör uppdaterar alla länkar så att de refererar till den sammanfogade anteckningen.

När du väljer anteckningen att sammanfoga in i kan du välja mellan följande metoder:

- `Enter`: Lägger till källanteckningen i _slutet_ av målanteckningen.
- `Shift+Enter`: Lägger till källanteckningen i _början_ av målanteckningen.
- `Ctrl+Enter` (eller `Cmd+Enter` på macOS): Skapar en ny anteckning med innehållet från källanteckningen.

Så här sammanfogar du den aktiva anteckningen med en annan anteckning i ditt valv:

**Filutforskare**

1. Högerklicka på anteckningen du vill sammanfoga i filutforskaren.
2. Klicka på **Slå samman hela filen med...**.
3. Välj anteckningen du vill sammanfoga in i.
4. Klicka på **Sammanfoga** för att bekräfta.

**Kommandopalett**

1. Öppna [[Kommandopalett|kommandopaletten]].
2. Välj **Anteckningskompositör: Slå samman aktuell fil med en annan fil...**.
3. Välj anteckningen du vill sammanfoga in i.
4. Klicka på **Sammanfoga** för att bekräfta.

> [!tip] Tips
> Som standard ber Anteckningskompositör dig bekräfta vid sammanfogning av anteckningar. Om du inaktiverar bekräftelsen och sammanfogar en anteckning av misstag kan du fortfarande återställa den med tillägget [[Filåterställning]].

## Extrahera anteckning

När du väljer anteckningen att extrahera markeringen till kan du välja mellan följande metoder:

- `Enter`: Lägger till den markerade texten i _slutet_ av målanteckningen.
- `Shift+Enter`: Lägger till den markerade texten i _början_ av målanteckningen.
- `Ctrl+Enter` (eller `Cmd+Enter` på macOS): Skapar en ny anteckning med den markerade texten.

Så här extraherar du text till en ny anteckning:

**Redigerare**

1. I **Redigerare** markerar du texten du vill extrahera.
2. Högerklicka på den markerade texten.
3. Klicka på **Extrahera aktuell markering...**.
4. Välj anteckningen du vill extrahera till.

**Kommandopalett**

1. I **Redigerare** markerar du texten du vill extrahera.
2. Öppna [[Kommandopalett|kommandopaletten]].
3. Välj **Anteckningskompositör: Extrahera aktuell markering...**.
4. Välj anteckningen du vill extrahera till.

> [!tip] Tips
> Som standard ersätter Anteckningskompositör den extraherade texten med en länk till målanteckningen. I inställningarna kan du även ändra till att istället [[Bädda in filer|bädda in]] målanteckningen, eller att inte lämna något kvar.

## Mallfil

Genom att konfigurera en mall kan du anpassa innehållet innan du lägger till det i den nya anteckningen. För att använda en mall, ange en **Mallfilplats** i tilläggsinställningarna.

Mallen kan innehålla följande variabler:

| Variabel          | Beskrivning                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Innehållet att sammanfoga, eller den extraherade textmarkeringen. Om du inte inkluderar denna variabel lägger Anteckningskompositör till innehållet längst ner i mallen. |
| `{{fromTitle}}`   | Namn på källanteckningen.                                                                                                                                 |
| `{{newTitle}}`    | Namn på målanteckningen. Till exempel för att lägga till filnamnet som en rubrik högst upp i filen.                                                     |
| `{{date:FORMAT}}` | Skapelsedatum för den nya anteckningen. Till exempel `{{date:YYYY-MM-DD}}`.                                                                                       |
