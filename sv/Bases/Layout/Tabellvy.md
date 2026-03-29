---
permalink: bases/views/table
---
Tabell är en typ av [[Vyer|vy]] du kan använda i [[Introduktion till baser|Baser]].

Välj ![[lucide-table.svg#icon]]  **Tabell** från vymenyn för att visa filer som en tabell med en rad för varje fil och kolumner för [[Egenskaper]] för den filen.

![Exempel på en bas som visar en tabellvy med en lista över böcker](bases-noshadow.png#interface)

## Inställningar

Tabellvyns inställningar kan konfigureras i [[Vyer#Vyinställningar|Vyinställningar]].

### Radhöjd

Radhöjd låter dig visa mer information. Välj mellan **kort**, **mellan**, **hög** och **extra hög**.

## Sammanfattningar

Du kan lägga till sammanfattningar i en tabellkolumn för att snabbt beräkna värden som summor, medelvärden eller antal för de rader som för närvarande visas i vyn.

Sammanfattningar är kopplade till vyn, inte till basen. Varje vy kan visa olika sammanfattningar för samma kolumn.

### Lägg till en sammanfattning

1. Högerklicka på kolumnrubriken i en tabellvy.
2. Välj ![[lucide-calculator.svg#icon]] **Sammanfatta…**.
3. Välj en av de inbyggda sammanfattningsfunktionerna, eller välj ![[lucide-square-function.svg#icon]] **Lägg till sammanfattning** för att definiera din egen.

Sammanfattningen visas längst ned i kolumnen. När resultat är [[Vyer#Sortera och gruppera resultat|grupperade]] visas sammanfattningen för varje grupp högst upp i gruppen.

När sammanfattningsfältet har lagts till kan du lägga till fler sammanfattningar för andra kolumner genom att klicka på sammanfattningscellen. Sammanfattningsfältet döljs om alla sammanfattningar tas bort.

### Inbyggda sammanfattningar

Följande sammanfattningar är tillgängliga som standard. Alternativen kan variera beroende på egenskapstyp.

#### Alla egenskapstyper

- **Inget värde**: antal rader utan värde.
- **Ifylld**: antal rader med ett värde.
- **Unik**: antal distinkta värden.

#### Nummer

- **Medelvärde**: medelvärde av alla numeriska värden.
- **Max**: största värde.
- **Median**: medianvärde.
- **Min**: minsta värde.
- **Omfång**: skillnad mellan max och min.
- **Stdavv**: standardavvikelse.
- **Summa**: summa av alla värden.

#### Datum

- **Tidigast**: det minsta/äldsta datumet.
- **Senast**: det största/senaste datumet.
- **Omfång**: skillnad mellan tidigast och senast.

#### Kryssruta

- **Ikryssad**: antal rader där kryssrutan är på.
- **Ej ikryssad**: antal rader där kryssrutan är av.

### Anpassade sammanfattningar

Du kan definiera din egen sammanfattning med en formel:

1. I menyn ![[lucide-calculator.svg#icon]] **Sammanfatta…**, välj ![[lucide-square-function.svg#icon]] **Lägg till sammanfattning**.
2. Ge sammanfattningen ett namn.
3. Ange en formel. Formeln körs över listan med värden i den kolumnen (till exempel med en [[Funktioner|funktion]] som `values.reduce(...)`).
4. Spara sammanfattningen.

Anpassade sammanfattningar är användbara när du behöver en beräkning som inte täcks av de inbyggda alternativen.

## Genvägar

Du kan snabbt navigera i en tabellvy med följande mus- och [[Redigeringsgenvägar|tangentbordsgenvägar]].

- Skift-klick skapar ett cellurval.
- Högerklicka på ett cellurval för att komma åt ytterligare åtgärder för dessa filer.

| Åtgärd                                                                                                                    | Genväg              | macOS               |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| Kopiera de markerade cellerna                                                                                              | `Ctrl+C`             | `Cmd+C`             |
| Klistra in de markerade cellerna                                                                                           | `Ctrl+V`             | `Cmd+V`             |
| Ångra ändringar i egenskaper                                                                                               | `Ctrl+Z`             | `Cmd+Z`             |
| Gör om ändringar i egenskaper                                                                                              | `Ctrl+Shift+Z`      | `Cmd+Shift+Z`       |
| Markera alla celler i den aktuella gruppen                                                                                 | `Ctrl+A`             | `Cmd+A`             |
| Markera alla celler i en given riktning                                                                                    | `Ctrl+Shift+Arrow`   | `Ctrl+Shift+Arrow`  |
| Markera kolumnen                                                                                                           | `Ctrl+Space`         |                     |
| Markera raden                                                                                                              | `Shift+Space`        |                     |
| Fokusera den aktuella cellen — för kryssrutor växlar detta kryssrutan, för formler öppnas formelredigeraren                | `Enter`              |                     |
| Gå till den första kolumnen                                                                                                | `Home`               |                     |
| Gå till den sista kolumnen                                                                                                 | `End`                |                     |
| Navigera upp och ned med sidhöjd                                                                                           | `PageUp`,`PageDown`  |                     |
| Rensa det aktuella cellurvalet                                                                                             | `Esc`                |                     |
| Rensa de aktuella cellerna                                                                                                 | `Backspace`          |                     |
| Gå till nästa cell                                                                                                         | `Tab`                |                     |
| Gå till föregående cell                                                                                                    | `Shift-Tab`          |                     |
