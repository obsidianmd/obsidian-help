---
permalink: manage-vaults
---
Ett **valv** är en mapp i ditt filsystem som innehåller dina anteckningar, [[Bilagor|bilagor]] och [[Konfigurationsmapp|konfigurationsmappen]] med Obsidian-specifika inställningar. Mer information om valv hittar du i [[Hur Obsidian lagrar data]].

Du kan hantera dina valv med **Valvväxlaren**. *Valvprofilen* öppnas första gången du öppnar Obsidian.

För att öppna valvväxlaren från ett befintligt valv, välj **Valvprofil** ![[lucide-chevrons-up-down.svg#icon]] längst ner i [[Sidofält|vänster sidofält]]. Eller välj **Öppna ett annat valv** från [[Kommandopalett|kommandopaletten]].

## Skapa nytt valv

1. Öppna Obsidian på din dator.
2. Längst ner till vänster, välj **Valvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontextmeny visas. Välj **Hantera valv...**.
3. Till höger om **Skapa nytt valv**, välj **Skapa**.
4. I **Valvnamn**, ange namnet på ditt valv.
5. Klicka på **Bläddra** för att välja var ditt nya valv ska skapas.
6. Klicka på **Skapa**.

## Skapa valv från en befintlig mapp

1. Öppna Obsidian på din dator.
2. Längst ner till vänster, välj **Valvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontextmeny visas. Välj **Hantera valv...**.
3. Till höger om **Öppna mapp som valv**, klicka på **Öppna**.
4. I filbläddraren, välj den mapp du vill använda som ditt valv.
5. Klicka på **Öppna**.

> [!tip] Öppna valv från Obsidian Sync
> Om du vill öppna ett fjärrvalv med Obsidian Sync, se [[Konfigurera Obsidian Sync]].

## Byta namn på valv

Eftersom namnet på ett valv och den underliggande mappen är desamma, innebär namnbyte av ett valv också att mappen byter namn.

1. Öppna Obsidian på din dator.
2. Längst ner till vänster, välj **Valvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontextmeny visas. Välj **Hantera valv...**.
4. I valvlistan, välj **Fler alternativ** ![[lucide-more-horizontal.svg#icon]] bredvid det valv du vill byta namn på.
5. Välj **Byt namn på valv**.
6. Ange det nya namnet för valvet och tryck `Enter`.

## Flytta valv till en annan mapp

1. Öppna Obsidian på din dator.
2. Längst ner till vänster, välj **Valvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontextmeny visas. Välj **Hantera valv...**.
4. Stäng det aktuella valvfönstret, men lämna fönstret **Hantera valv** öppet.
5. I valvlistan, välj **Fler alternativ** ![[lucide-more-horizontal.svg#icon]] bredvid det valv du vill flytta.
6. Välj **Flytta valv** och välj sedan den nya platsen.

Vissa operativsystem tillåter inte att valvet flyttas med valvväxlaren. I dessa fall behöver du flytta valvet manuellt:

1. Stäng Obsidian.
2. Flytta din valvmapp till en ny plats och undvik mappar som synkroniseras av andra tjänster.
3. Öppna Obsidian igen.
4. Klicka på ikonen **Valvprofil** längst ner till vänster ![[lucide-chevrons-up-down.svg#icon]].
5. Från popup-menyn, välj **Hantera valv...**.
6. Bredvid **Öppna mapp som valv**, klicka på **Öppna**.
7. Navigera till och välj din nya valvmapp.
8. Klicka på **Öppna**.
9. Kontrollera att valvets innehåll är oförändrat. Vid behov, återaktivera gemenskapstillägg genom att navigera till **[[Inställningar]] → Gemenskapstillägg → Stäng av begränsat läge**.

## Ta bort valv

Att ta bort ett valv tar bara bort det från valvlistan.

1. Öppna Obsidian på din dator.
2. Längst ner till vänster, välj **Valvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontextmeny visas. Välj **Hantera valv...**.
4. I valvlistan, välj **Fler alternativ** ![[lucide-more-horizontal.svg#icon]] bredvid det valv du vill ta bort.
5. Välj **Ta bort från listan**.

## Överföra inställningar till ett annat valv

För att använda samma inställningar för ett annat valv, använd din föredragna filhanterare (eller terminal) för att kopiera mappen `.obsidian` från roten av källvalvet till roten av målvalvet.

Du kan behöva starta om Obsidian för att ändringarna ska tillämpas.

> [!note] Var hittar jag mappen `.obsidian`?
> Som standard döljer de flesta operativsystem mappar som börjar med en punkt (`.`). Mer information om mappen `.obsidian` och hur du kommer åt den hittar du i [[Hur Obsidian lagrar data#Valvinställningar|valvinställningar]] och [[Konfigurationsmapp|konfigurationsmappar]].
