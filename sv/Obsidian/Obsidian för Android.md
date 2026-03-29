---
permalink: android
---
Obsidian-mobilappen för Android ger kraftfulla anteckningsfunktioner till din Android-enhet. Du kan ladda ner den från [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) eller som en [APK-fil](https://obsidian.md/download).
Den stöder Android version 5.1 och högre.

Den här sidan täcker Android-specifika funktioner inklusive widgetar, integration med snabbinställningar och genvägar.

## Synkronisering

För att synkronisera dina anteckningar med Obsidian på Android, se [[Synkronisera dina anteckningar mellan enheter]].

## Valvplats

När du startar Obsidian på Android ombeds du välja var dina valvdata ska lagras. Du kan välja **enhetslagring** (rekommenderat) eller **applagring**.

### Enhetslagring

Med alternativet **enhetslagring** lagras dina data på en delad plats på din enhet. Detta gör att ditt Obsidian-valv kan nås av andra appar och tjänster, såsom [[Synkronisera dina anteckningar mellan enheter|synkverktyg]] från tredje part.

Detta är det rekommenderade alternativet eftersom det erbjuder bättre kompatibilitet med synkverktyg och säkerställer att dina data bevaras även om du avinstallerar appen. Dock kräver detta alternativ ytterligare behörigheter för att komma åt enhetens filer.

På grund av begränsningar i Android kommer Obsidian att begära åtkomst till "Alla filer" för att fungera tillförlitligt. Google rekommenderar detta för appar som Obsidian som anses vara "dokumenthanteringsappar". [Läs mer](https://developer.android.com/training/data-storage/manage-all-files).

Appen använder bara denna behörighet för att hjälpa dig komma åt dina data på din enhet. Dina data är aldrig tillgängliga för oss. För att läsa mer om hur vi skyddar dina data och säkerställer din integritet, besök vår [säkerhetssida](https://obsidian.md/security).

### Applagring

Med alternativet **applagring** lagras dina data i Obsidians privata applagringsyta. Detta håller dina data isolerade från andra appar för ökad integritet.

Detta är ett bra alternativ om du inte använder några externa synkverktyg och föredrar striktare sandboxning på appnivå för dina anteckningar.

Med detta alternativ kan du använda [[Introduktion till Obsidian Sync|Obsidian Sync]] och synktillägg från tredje part tillgängliga via [[Gemenskapstillägg]], men du kan inte använda verktyg som Syncthing som förlitar sig på delad lagring.

> [!warning] Avinstallation av Obsidian raderar dina lokala anteckningar om du använder applagring
> Om du använder alternativet **Applagring** kommer dina lokala valvdata att raderas om du avinstallerar appen. Dina Obsidian-valvdata på andra enheter kommer inte att raderas.

## Widgetar

Obsidian för Android erbjuder flera widgetalternativ för att snabbt komma åt dina valv och anteckningar från startskärmen. Tillgängliga widgetar inkluderar:

- **Öppna anteckning** — Öppna en specifik anteckning
- **Ny anteckning** — Skapa en ny anteckning
- **Sök** — Starta en sökfråga
- **Daglig anteckning** — Öppna din dagliga anteckning
- **Öppna Obsidian** — Starta appen

> [!note] Observera
> Dessa widgetar är statiska och visar inga förhandsvisningar av den valda anteckningen eller valvet.

Så här lägger du till widgetar på din startskärm:
1. Tryck och håll var som helst på din startskärm
2. Välj "Widgetar"
3. Hitta Obsidian och välj sedan en widget du vill använda.

> [!note] Observera
> Obsidian-widgetar kan ändra storlek. För att ändra storlek på en widget, tryck och håll den, och dra sedan i storlekshandtagen.

Du kan lägga till flera widgetar av samma typ för att öppna olika filer eller utlösa olika sökfrågor.

För att konfigurera en widget, tryck länge på den på din startskärm och hitta sedan alternativet "Redigera" eller "Konfigurera". Detta låter dig ange de specifika parametrar som krävs för widgetens tryckåtgärd, som fil eller sökväg, sökfråga och valvnamn.

Se denna [Google Support-artikel](https://support.google.com/android/answer/9450271?hl=en) för mer information om Android-widgetar.

## Paneler för snabbinställningar

Kräver Android 7.0 eller högre.

Lägg till en Obsidian-panel för snabbinställningar för snabb åtkomst till appen från din aviseringspanel. Fungerar på din startskärm och låsskärm.

> [!note] Observera
> Till skillnad från appwidgetar kan du bara lägga till en panel för snabbinställningar av samma typ.

Så här lägger du till en panel för snabbinställningar i din aviseringspanel:

1. Öppna din aviseringspanel, vanligtvis genom att svepa nedåt från statusfältet. Observera: du kan behöva svepa en gång till för att se fler alternativ.
2. Välj "Redigera" bland panelerna för snabbinställningar – detta är vanligtvis samma sektion där växlar som Wi-Fi, Bluetooth och orienteringslås finns.
3. Hitta och välj en Obsidian-panel för snabbinställningar och ordna den som du vill.
4. För att konfigurera en panel för snabbinställningar, tryck och håll den för att visa konfigurationsskärmen.

Se denna [Google Support-artikel](https://support.google.com/android/answer/9083864?hl=en) för mer information om snabbinställningar i Android.

## Genvägar

Kräver Android 7.1 eller högre.

Obsidian tillhandahåller appgenvägar som kan nås på flera sätt:

- Tryck länge på Obsidian-appikonen
- Dra genvägsikonen till din startskärm
- Åtkomst via sökfältet i din startprogram (tillgängligt hos de flesta enhetstillverkare)

Tillgängliga genvägar:

- **Öppna anteckning** — Öppna en specifik anteckning i ditt valv
- **Daglig anteckning** — Gå direkt till dagens dagliga anteckning

> [!note] Observera
> Genvägar i Obsidian 1.11 är inte konfigurerbara och kommer att omarbetas i senare versioner för att erbjuda mer dynamiska alternativ anpassade till dina specifika anteckningar.
