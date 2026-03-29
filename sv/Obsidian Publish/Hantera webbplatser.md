---
permalink: publish/sites
---
Denna sida förklarar hur du hanterar [[Introduktion till Obsidian Publish|Obsidian Publish]]-webbplatser.

En webbplats är en samling anteckningar som hostas av Obsidian Publish och är tillgänglig online, antingen via en Obsidian Publish-adress eller en [[Anpassade domäner|anpassad domän]].

## Skapa en ny webbplats

> [!note] Antalet webbplatser du kan ha samtidigt bestäms av din Obsidian Publish-prenumeration. Innan du skapar en ny webbplats, se till att din prenumeration tillåter det.

1. I ribbon, till vänster om appfönstret, klicka på **Publicera ändringar** ![[lucide-send.svg#icon]].
2. Om du redan har en befintlig webbplats, klicka på **Byt webbplats** ![[lucide-repeat.svg#icon]].
3. I **Webbplats-ID**, ange sökvägen du vill ha för din webbplats. Till exempel, en webbplats med ID:t `my-amazing-site` är tillgänglig från publish.obsidian.md/my-amazing-site.
4. Klicka på **Skapa**.

## Radera en befintlig webbplats

> [!note] Anteckningar finns kvar i ditt valv även efter att du raderar en webbplats.

1. I ribbon, till vänster om appfönstret, klicka på **Publicera ändringar** ![[lucide-send.svg#icon]].
2. Klicka på **Byt webbplats** ![[lucide-repeat.svg#icon]].
3. Klicka på **Radera webbplats** ![[lucide-x.svg#icon]] till höger om webbplatsen du vill radera.
4. Klicka på **Radera** för att bekräfta.

## Växla mellan webbplatser

1. I ribbon, till vänster om appfönstret, klicka på **Publicera ändringar** ![[lucide-send.svg#icon]].
2. Klicka på **Byt webbplats** ![[lucide-repeat.svg#icon]].
3. Klicka på **Välj** till höger om webbplatsen du vill växla till.

## Ändra webbplats-ID

1. I ribbon, till vänster om appfönstret, klicka på **Publicera ändringar** ![[lucide-send.svg#icon]].
2. Klicka på **Byt webbplats** ![[lucide-repeat.svg#icon]].
3. Klicka på **Redigera webbplats-ID** ![[lucide-edit-3.svg#icon]] till höger om webbplatsen du vill redigera.
4. I **Webbplats-ID**, ange det nya ID:t för din webbplats.
5. Klicka på **Ändra**.

## Visa webbplatsalternativ

1. I ribbon, till vänster om appfönstret, klicka på **Publicera ändringar** ![[lucide-send.svg#icon]].
2. I dialogrutan **Publicera ändringar**, klicka på **Ändra webbplatsalternativ** ![[lucide-cog.svg#icon]].

## Webbplatsalternativ

### Allmänt

| Alternativ                             | Typ    | Beskrivning                                                                                                                        |
| -------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Webbplatsnamn                          | Indata | Det publika namnet och titeln på din Obsidian Publish-webbplats.                                                                   |
| Startsida fil                          | Indata | Platsen för Markdown-filen du vill använda som din landningssida.                                                                  |
| Logotyp                                | Indata | Bilden du vill använda som din webbplatsbanner. Bilden måste [[Publicera ditt innehåll#Publicera anteckningar\|vara publicerad]]. |
| Webbplats samarbete                    | Knapp  | Ange andra användare du vill ge åtkomst att redigera dina publicerade anteckningar. Användare måste ha ett Obsidian-konto.         |
| Anpassad domän                         | Knapp  | [[Anpassade domäner]]                                                                                                              |
| Tillåt inte sökmotorindexering         | Växel  | Förhindra respektfulla sökmotorer från att crawla din webbplats genom att lägga till en `robots.txt`-fil.                          |

### Utseende

| Alternativ         | Typ      | Beskrivning                                                                                         |
|--------------------|----------|-----------------------------------------------------------------------------------------------------|
| Tema               | Rullgardinsmeny | Välj hur ditt tema visas på din webbplats; **Ljus**, **Mörk** eller **Anpassa till system**. |
| Ljus/mörk växling  | Växel    | Tillåt användare att växla mellan **Ljus**/**Mörk**-läge med en växlingsknapp på din webbplats.     |

## Läsupplevelse

| Alternativ                      | Typ    | Beskrivning                                                                                                |
|--------------------------------|--------|------------------------------------------------------------------------------------------------------------|
| Visa förhandsvisning vid hovring | Växel  | Aktivera eller inaktivera sidförhandsvisning vid hovring över en aktiv, intern länk.                       |
| Dölj sidtitel                  | Växel  | Aktivera eller inaktivera visning av den inbäddade rubriken för en publicerad anteckning.                  |
| Läsbar radlängd               | Växel  | Aktivera eller inaktivera läsbar radlängd på din webbplats.                                                |
| Stränga radbyten              | Växel  | Aktivera eller inaktivera visning av enkla radbyten på din webbplats.                                      |
| Använd glidande fönster       | Växel  | Aktivera eller inaktivera [[Flikar#Stapla flikgrupper\|Staplade flikar]] på din webbplats.  |

### Komponenter

| Alternativ                | Typ    | Beskrivning                                                                                                                                           |
|--------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Visa navigering          | Växel  | Aktivera eller inaktivera [[Filutforskare]]-vyn på din publicerade webbplats.                                                                         |
| Anpassa navigering       | Knapp  | [[Anpassa din webbplats#Anpassa navigering\|Anpassa]] ordningen som dina filer listas i om **Visa navigering** är aktiverad.                          |
| Visa sökfält             | Växel  | Aktivera eller inaktivera ett sökfält på din webbplats.                                                                                               |
| Visa grafvy              | Växel  | Aktivera eller inaktivera grafvyn i det högra sidofältet på din webbplats.                                                                            |
| Visa innehållsförteckning | Växel  | Aktivera eller inaktivera [[Disposition\|Innehållsförteckning]]-vyn på din webbplats.                                                                |
| Visa bakåtlänkar         | Växel  | Aktivera eller inaktivera [[Bakåtlänkar]] på din webbplats.                                                                                          |

### Andra webbplatsinställningar

| Alternativ                          | Typ    | Beskrivning                                                                                                                          |
| ----------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Lösenord                            | Knapp  | [[Obsidian Publish/Säkerhet och integritet#Lägg till ett webbplatslösenord\|Ange ett lösenord]] för att begränsa åtkomsten till hela din webbplats. |
| Google Analytics spårningskod       | Indata | **Endast anpassad domän-URL**. Placera din Google Analytics-spårningskod för webbplatsen här.                                        |
