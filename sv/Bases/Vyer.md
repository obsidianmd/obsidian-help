---
permalink: bases/views
---
Vyer låter dig organisera informationen i en [[Introduktion till baser|bas]] på flera sätt. En bas kan innehålla flera vyer, och varje vy kan ha en unik konfiguration för att visa, sortera och filtrera filer.

Till exempel kanske du vill skapa en bas som heter "Böcker" med separata vyer för "Läslista" och "Nyligen avslutade".

## Verktygsfält

Överst i en bas finns ett verktygsfält som låter dig interagera med vyer och deras resultat.

- ![[lucide-table.svg#icon]] **Vymeny** — skapa, redigera och växla vyer.
- **Resultat** — begränsa, kopiera och exportera filer.
- ![[lucide-arrow-up-down.svg#icon]] **Sortera** — sortera och gruppera filer.
- ![[lucide-list-filter.svg#icon]] **Filter** — filtrera filer.
- ![[lucide-list.svg#icon]] **Egenskaper** — välj egenskaper att visa och skapa [[Formler|formler]].
- ![[lucide-search.svg#icon]] **Sök** — sök efter objekt med deras visade egenskaper.
- ![[lucide-plus.svg#icon]] **Ny** — skapa en ny fil i den aktuella vyn.

## Lägg till och växla vyer

Det finns två sätt att lägga till en vy i en bas:

- Klicka på vynamnet uppe till vänster och välj ![[lucide-plus.svg#icon]] **Lägg till vy**.
- Använd [[Kommandopalett|kommandopaletten]] och välj **Baser: Lägg till vy**.

Den första vyn i din lista över vyer laddas som standard. Dra vyer via deras ikon för att ändra deras ordning.

## Vyinställningar

Varje vy har sina egna konfigurationsalternativ. För att redigera vyinställningar:

1. Klicka på vynamnet uppe till vänster.
2. Klicka på högerpilen bredvid den vy du vill konfigurera.

Alternativt kan du *högerklicka* på vynamnet i basens verktygsfält för att snabbt komma åt vyinställningarna.

## Layout

Vyer kan visas med olika layouter inklusive som ![[lucide-table.svg#icon]] **tabell**, ![[lucide-list.svg#icon]] **lista**, ![[lucide-layout-grid.svg#icon]] **kort** och ![[lucide-map.svg#icon]] **karta**. Ytterligare layouter kan läggas till av [[Gemenskapstillägg]]. Vissa layouter är fortfarande under utveckling och kräver [[Tidig åtkomst-versioner|tidig åtkomst-versioner]] av Obsidian.

| Layout                    | Beskrivning                                                                                                       | App&nbsp;version |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------- |
| [[Tabellvy\|Tabell]]      | Visa filer som rader i en tabell. Kolumner fylls i från [[Egenskaper|egenskaper]] i dina anteckningar.            | 1.9              |
| [[Kortvy\|Kort]]          | Visa filer som ett rutnät av kort. Låter dig skapa galleri-liknande vyer med bilder.                              | 1.9              |
| [[Listvy\|Lista]]         | Visa filer som en [[Grundläggande formateringssyntax#Listor\|lista]] med punkter eller numrerade markörer.        | 1.10             |
| [[Kartvy\|Karta]]         | Visa filer som nålar på en interaktiv karta. Kräver tillägget Maps.                                               | 1.10             |


## Filter

Öppna menyn ![[lucide-list-filter.svg#icon]] **Filter** överst i en bas för att lägga till filter.

En bas utan filter visar alla filer i ditt valv. Filter begränsar resultaten till att bara visa filer som uppfyller specifika kriterier. Till exempel kan du använda filter för att bara visa filer med en specifik [[Taggar|tagg]] eller inom en specifik mapp. Många filtertyper finns tillgängliga.

Filter kan tillämpas på alla vyer i en bas, eller bara en enskild vy genom att välja från de två sektionerna i menyn ![[lucide-list-filter.svg#icon]] **Filter**.

- **Alla vyer** tillämpar filter på alla vyer i basen.
- **Denna vy** tillämpar filter på den aktiva vyn.

#### Komponenter i ett filter

Filter har tre komponenter:

1. **Egenskap** — låter dig välja en [[Egenskaper|egenskap]] i ditt valv, inklusive [[Baser-syntax#Filegenskaper|filegenskaper]].
2. **Operator** — låter dig välja hur villkoren ska jämföras. Listan över tillgängliga operatorer beror på egenskapstypen (text, datum, nummer, etc.)
3. **Värde** — låter dig välja värdet du jämför med. Värden kan inkludera matematik och [[Funktioner|funktioner]].

#### Konjunktioner

- **Alla följande är sanna** är ett `och`-uttryck — resultat visas bara om *alla* villkor i filtergruppen uppfylls.
- **Något av följande är sant** är ett `eller`-uttryck — resultat visas om *något* av villkoren i filtergruppen uppfylls.
- **Inget av följande är sant** är ett `inte`-uttryck — resultat visas inte om *något* av villkoren i filtergruppen uppfylls.

#### Filtergrupper

Filtergrupper låter dig skapa mer komplex logik genom att skapa kombinationer av konjunktioner.

#### Avancerad filterredigerare

Klicka på kodknappen ![[lucide-code-xml.svg#icon]] för att använda den **avancerade filterredigeraren**. Denna visar den råa [[Baser-syntax|syntaxen]] för filtret och kan användas med mer komplexa [[Funktioner|funktioner]] som inte kan visas med peka-och-klicka-gränssnittet.

## Sortera och gruppera resultat

Öppna menyn ![[lucide-arrow-up-down.svg#icon]] **Sortera** för att sortera och gruppera resultaten i en vy.

Du kan ordna resultat efter en eller flera egenskaper i stigande eller fallande ordning. Detta gör det enkelt att lista anteckningar efter namn, senaste redigeringstid eller någon annan egenskap — inklusive formler.

Du kan också gruppera resultat efter en egenskap för att organisera liknande objekt i visuellt distinkta sektioner. För närvarande stöder Obsidian gruppering efter bara en egenskap.

### Lägg till en sortering

1. Öppna menyn ![[lucide-arrow-up-down.svg#icon]] **Sortera** överst i vyn.
2. Välj den egenskap du vill sortera (eller gruppera) efter.
3. Om du har flera sorteringar, dra dem upp eller ner med ![[lucide-grip-vertical.svg#icon]] grepphandtaget för att ändra deras prioritet.

Alternativen för att ordna resultat beror på egenskapstypen:

- **Text**: sortera *alfabetiskt* (A→Ö) eller i *omvänd alfabetisk ordning* (Ö→A).
- **Nummer**: sortera från *minst till störst* (0→1) eller *störst till minst* (1→0).
- **Datum och tid**: sortera efter *gammalt till nytt* eller *nytt till gammalt*.

### Ta bort en sortering

1. Öppna menyn ![[lucide-arrow-up-down.svg#icon]] **Sortera** överst i vyn.
2. Klicka på ![[lucide-trash-2.svg#icon]] papperskorgsknappen bredvid den sortering eller gruppering du vill ta bort.

## Begränsa, kopiera och exportera resultat

### Begränsa resultat

*Resultatmenyn* visar antalet resultat i vyn. Klicka på resultatknappen för att begränsa antalet resultat och komma åt ytterligare åtgärder.

### Kopiera till urklipp

Denna åtgärd kopierar vyn till ditt urklipp. Väl i urklippet kan du klistra in det i en Markdown-fil eller i andra dokumentappar inklusive kalkylblad som Google Sheets, Excel och Numbers.

### Exportera CSV

Denna åtgärd sparar en CSV av din aktuella vy.

## Bädda in en vy

Du kan bädda in basfiler i [[Bädda in filer|vilken annan fil som helst]] med syntaxen `![[Fil.base]]`. Den första vyn i listan kommer att användas. Du kan ändra ordningen genom att dra vyer i vymenyn.

För att ange standardvyn för en inbäddning använd `![[Fil.base#Vy]]`.
