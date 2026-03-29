---
permalink: import/zettelkasten
---
Om du har använt Zettelkasten-metoden för att namnge och länka dina anteckningar kan du behöva konvertera länkar från `[[UID]]` till `[[UID Min anteckningstitel]]`.

Till exempel, om du har en anteckning med namnet `202301011230 Min anteckningstitel` och länkar till den från en annan anteckning med bara UID:t, `[[202301011230]]`. Eftersom Obsidian använder filens fullständiga namn för att lösa interna länkar kommer sådana länkar att sluta fungera.

För att uppdatera alla `[[UID]]`-länkar i ditt valv till att använda anteckningens fullständiga namn istället, använd [[Markdown-formatimportör|Markdown-formatimportören]].

1. Öppna **[[Inställningar]]**.
2. Under **Kärntillägg**, aktivera **Markdown-formatimportör** och stäng inställningsfönstret.
3. I ribbon, på vänster sida av appfönstret, välj **Open format convert** ![[lucide-binary.svg#icon]].
4. Aktivera **Zettelkasten länkfixare**.
5. Välj **Starta konvertering**. Detta konverterar alla anteckningar i hela ditt valv.

> [!tip] Zettelkasten länkförskönare
> [[Markdown-formatimportör]] kan även förskönare dina länkar genom att ta bort UID:t från visningsnamnet. Till exempel konverteras `[[UID]]` till `[[UID Min anteckningstitel|Min anteckningstitel]]`.
>
> För att förskönare dina Zettelkasten-länkar, aktivera **Zettelkasten länkförskönare** i Markdown-formatimportörens fönster.

Du kan även använda [[Unik anteckningsskapare]] för att skapa Zettelkasten-anteckningar i Obsidian.
