---
permalink: bases/views
---
Vyer låter dig organisera informationen i en [[Introduktion till baser|bas]] på flera sätt. En bas kan innehålla flera vyer, och varje vy kan ha en unik konfiguration för att visa, sortera och filtrera filer.

Till exempel kanske du vill skapa en bas som heter "Böcker" med separata vyer för "Läslista" och "Nyligen avslutade".

## Verktygsfält

Överst i en bas finns ett verktygsfält som låter dig interagera med vyer och deras resultat.

- ![[lucide-table.svg#icon]] **Vymeny** — skapa, redigera och växla vyer.
- **Resultat** — begränsa, kopiera och exportera filer.
- ![[lucide-arrow-up-down.svg#icon]] **Sortera** — sortera filer.
- ![[lucide-stretch-horizontal.svg#icon]] **Gruppera** — gruppera filer och hantera gruppordning och synlighet.
- ![[lucide-list-filter.svg#icon]] **Filter** — filtrera filer.
- ![[lucide-list.svg#icon]] **Egenskaper** — välj egenskaper att visa och skapa [[Formler|formler]].
- ![[lucide-search.svg#icon]] **Sök** — sök efter objekt med deras visade egenskaper.
- ![[lucide-plus.svg#icon]] **Ny** — skapa en ny fil i den aktuella vyn.

På telefoner finns **Resultat**, **Sortera**, ![[lucide-stretch-horizontal.svg#icon]] **Gruppera** och **Egenskaper** inuti menyn ![[lucide-sliders-horizontal.svg#icon]] **Skärm**.

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

Vyer kan visas med olika layouter inklusive som ![[lucide-table.svg#icon]] **tabell**, ![[lucide-list.svg#icon]] **lista**, ![[lucide-layout-grid.svg#icon]] **kort**, ![[lucide-kanban-square.svg#icon]] **Kanban** och ![[lucide-map.svg#icon]] **karta**. Ytterligare layouter kan läggas till av [[Gemenskapstillägg]].

| Layout                    | Beskrivning                                                                                                       | App&nbsp;version |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------- |
| [[Tabellvy\|Tabell]]      | Visa filer som rader i en tabell. Kolumner fylls i från [[Egenskaper|egenskaper]] i dina anteckningar.            | 1.9              |
| [[Kortvy\|Kort]]          | Visa filer som ett rutnät av kort. Låter dig skapa galleri-liknande vyer med bilder.                              | 1.9              |
| [[Listvy\|Lista]]         | Visa filer som en [[Grundläggande formateringssyntax#Listor\|lista]] med punkter eller numrerade markörer.        | 1.10             |
| [[Kanbanvy\|Kanban]]      | Visa filer som kort organiserade i kolumner baserat på en grupperad egenskap.                                     | 1.14             |
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

Använd menyn ![[lucide-arrow-up-down.svg#icon]] **Sortera** för att ordna resultat, och menyn ![[lucide-stretch-horizontal.svg#icon]] **Gruppera** för att organisera liknande objekt i sektioner.

Du kan ordna resultat efter en eller flera egenskaper i stigande eller fallande ordning. Detta gör det enkelt att lista anteckningar efter namn, senaste redigeringstid eller någon annan egenskap — inklusive formler.

Varje vy kan ha flera sorteringar, men kan bara gruppera resultat efter en egenskap.

### Lägg till en sortering

1. Öppna menyn ![[lucide-arrow-up-down.svg#icon]] **Sortera** överst i vyn.
2. Välj **Lägg till sortering** och välj sedan den egenskap du vill sortera efter.
3. Om du har flera sorteringar, dra dem upp eller ner med ![[lucide-grip-vertical.svg#icon]] grepphandtaget för att ändra deras prioritet.

Alternativen för att ordna resultat beror på egenskapstypen:

- **Text**: sortera *alfabetiskt* (A→Ö) eller i *omvänd alfabetisk ordning* (Ö→A).
- **Nummer**: sortera från *minst till störst* (0→1) eller *störst till minst* (1→0).
- **Datum och tid**: sortera efter *gammalt till nytt* eller *nytt till gammalt*.

### Ta bort en sortering

1. Öppna menyn ![[lucide-arrow-up-down.svg#icon]] **Sortera** överst i vyn.
2. Välj ![[lucide-trash-2.svg#icon]] papperskorgsknappen bredvid den sortering du vill ta bort.

### Gruppera resultat

1. Öppna menyn ![[lucide-stretch-horizontal.svg#icon]] **Gruppera** överst i vyn. På telefoner, öppna **Skärm → Gruppera**.
2. Under **Gruppera efter**, välj en egenskap.
3. Välj en automatisk sorteringsordning, eller välj **Manuell** för att ordna grupper själv.

För att sluta gruppera resultat, välj ![[lucide-trash-2.svg#icon]] papperskorgsknappen bredvid grupperingsegenskapen.

### Ordna om, dölja och lägga till grupper

I menyn ![[lucide-stretch-horizontal.svg#icon]] **Gruppera**, välj **Manuell** från sorteringsordningsmenyn för att hantera vilka grupper som visas och i vilken ordning.

- Markera en grupp för att visa den, eller avmarkera den för att dölja den. Välj **Visa alla** eller **Dölj alla** för att ändra synligheten för alla grupper.
- Dra ![[lucide-grip-vertical.svg#icon]] grepphandtaget bredvid en grupp för att ändra dess position.
- Välj **Lägg till grupp** och ange ett värde för att visa en ny, tom grupp. Detta skapar inte en anteckning och ändrar inte befintliga anteckningar.

För att återställa automatisk gruppordning och visa alla grupper, välj en automatisk sorteringsordning istället för **Manuell**.

### Kollapsa grupper

I layouterna [[Tabellvy|tabell]], [[Kortvy|kort]] och [[Listvy|lista]], välj en grupprubriker för att kollapsa eller expandera den gruppen. Att kollapsa en grupp döljer tillfälligt dess objekt utan att ändra deras egenskaper.

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
