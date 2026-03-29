---
permalink: import/zettelkasten
---
Hvis du har brukt Zettelkasten-metoden til å navngi og lenke notatene dine, kan det hende du må konvertere lenker fra `[[UID]]` til `[[UID Mitt notattittel]]`.

For eksempel, hvis du har et notat med navnet `202301011230 Mitt notattittel` og lenker til det fra et annet notat ved å bare bruke UID-en, `[[202301011230]]`. Siden Obsidian bruker det fulle navnet på notatet for å løse interne lenker, vil slike lenker slutte å fungere.

For å oppdatere alle `[[UID]]`-lenker i hvelvet ditt til å bruke det fulle navnet på notatet i stedet, bruk [[Markdown-importør|Markdown-importøren]].

1. Åpne **[[Innstillinger]]**.
2. Under **Kjerneutvidelser**, aktiver **Markdown-importør** og lukk Innstillinger-vinduet.
3. I verktøylinjen, på venstre side av appvinduet, velg **Åpne Markdown-importør** ![[lucide-binary.svg#icon]].
4. Aktiver **Fiks Zettelkasten-lenker**.
5. Velg **Start konvertering**. Dette vil konvertere alle notatene i hele hvelvet ditt.

> [!tip] Endre til vakre Zettelkasten-lenker
> [[Markdown-importør]] kan også forskjønne lenkene dine ved å fjerne UID-en fra visningsnavnet. For eksempel konverteres `[[UID]]` til `[[UID Mitt notattittel|Mitt notattittel]]`.
>
> For å forskjønne Zettelkasten-lenkene dine, aktiver **Endre til vakre Zettelkasten-lenker** i Markdown-importør-vinduet.

Du kan også bruke [[Unik notatoppretter]] til å opprette Zettelkasten-notater i Obsidian.
