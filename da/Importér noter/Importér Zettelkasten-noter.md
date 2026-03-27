---
permalink: import/zettelkasten
aliases:
  - Import af Zettelkasten noter
  - Import af noter/Import af Zettelkasten noter
---
Hvis du har brugt Zettelkasten-metoden til at navngive og linke dine noter, kan du have behov for at konvertere links fra `[[UID]]` til `[[UID Min notetitel]]`.

For eksempel, hvis du har en note med navnet `202301011230 Min notetitel` og linker til den fra en anden note ved kun at bruge UID'et, `[[202301011230]]`. Da Obsidian bruger det fulde navn på noten til at opløse interne links, vil links som disse ikke fungere.

For at opdatere alle `[[UID]]`-links i din boks til at bruge det fulde navn på noten i stedet, kan du bruge [[Formatkonvertering]].

1. Åbn **[[Indstillinger]]**.
2. Under **Kerneplugins**, aktivér **Formatkonvertering** og luk indstillingsvinduet.
3. I værktøjslinjen i venstre side af applikationsvinduet, vælg **Open format convert** ![[lucide-binary.svg#icon]].
4. Aktivér **Konvertér Zettelkasten links**.
5. Vælg **Start konvertering**. Dette vil konvertere alle noter i hele din boks.

> [!tip] Zettelkasten link forskønner
> [[Formatkonvertering]] kan også forskønne dine links ved at fjerne UID'et fra visningsnavnet. For eksempel konverteres `[[UID]]` til `[[UID Min notetitel|Min notetitel]]`.
>
> For at forskønne dine Zettelkasten-links, aktivér **Zettelkasten link forskønner** i formatkonverteringsvinduet.

Du kan også bruge [[Unik noteopretter]] til at oprette Zettelkasten-noter i Obsidian.
