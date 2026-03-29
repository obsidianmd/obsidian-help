---
permalink: plugins/note-composer
---
[[Notitiesamensteller]] is een [[Ingebouwde plug-ins|kernplug-in]] waarmee je twee notities kunt samenvoegen of een deel van een notitie kunt extraheren naar een nieuwe notitie.

## Notities samenvoegen

Het samenvoegen van notities voegt een notitie toe aan een andere en verwijdert de eerste. Notitiesamensteller werkt alle koppelingen bij om naar de samengevoegde notitie te verwijzen.

Wanneer je de notitie selecteert om mee samen te voegen, kun je kiezen uit de volgende methoden:

- `Enter`: Voegt de bronnotitie toe aan het _einde_ van de doelnotitie.
- `Shift+Enter`: Voegt de bronnotitie toe aan het _begin_ van de doelnotitie.
- `Ctrl+Enter` (of `Cmd+Enter` op macOS): Maakt een nieuwe notitie aan met de inhoud van de bronnotitie.

Om de actieve notitie samen te voegen met een andere notitie in je kluis:

**Verkenner**

1. Klik in de Verkenner met de rechtermuisknop op de notitie die je wilt samenvoegen.
2. Klik op **Volledig bestand samenvoegen met...**.
3. Selecteer de notitie waarmee je wilt samenvoegen.
4. Klik op **Voeg samen** om te bevestigen.

**Opdrachtenpalet**

1. Open het [[Opdrachtenpaneel|opdrachtenpalet]].
2. Selecteer **Notitiesamensteller: Huidige bestand met een ander bestand samenvoegen...**.
3. Selecteer de notitie waarmee je wilt samenvoegen.
4. Klik op **Voeg samen** om te bevestigen.

> [!tip] Tip
> Standaard vraagt Notitiesamensteller je om bevestiging bij het samenvoegen van notities. Als je de bevestiging uitschakelt en je per ongeluk een notitie samenvoegt, kun je deze nog steeds herstellen met de [[Bestanden herstellen]]-plug-in.

## Notitie extraheren

Wanneer je de notitie selecteert om de selectie naartoe te extraheren, kun je kiezen uit de volgende methoden:

- `Enter`: Voegt de geselecteerde tekst toe aan het _einde_ van de doelnotitie.
- `Shift+Enter`: Voegt de geselecteerde tekst toe aan het _begin_ van de doelnotitie.
- `Ctrl+Enter` (of `Cmd+Enter` op macOS): Maakt een nieuwe notitie aan met de geselecteerde tekst.

Om tekst te extraheren naar een nieuwe notitie:

**Editor**

1. Selecteer in de **Editor** de tekst die je wilt extraheren.
2. Klik met de rechtermuisknop op de geselecteerde tekst.
3. Klik op **Huidige selectie extraheren...**.
4. Selecteer de notitie waarnaar je wilt extraheren.

**Opdrachtenpalet**

1. Selecteer in de **Editor** de tekst die je wilt extraheren.
2. Open het [[Opdrachtenpaneel|opdrachtenpalet]].
3. Selecteer **Notitiesamensteller: Huidige selectie extraheren...**.
4. Selecteer de notitie waarnaar je wilt extraheren.

> [!tip] Tip
> Standaard vervangt Notitiesamensteller de geëxtraheerde tekst door een koppeling naar de doelnotitie. In de instellingen kun je ook instellen om in plaats daarvan de doelnotitie [[Bestanden insluiten|in te sluiten]], of om niets achter te laten.

## Sjabloonbestand

Door een sjabloon te configureren kun je de inhoud aanpassen voordat je deze aan de nieuwe notitie toevoegt. Om een sjabloon te gebruiken, voer je een **Sjabloonbestandslocatie** in de plug-ininstellingen in.

Het sjabloon kan de volgende variabelen bevatten:

| Variabele         | Beschrijving                                                                                                                                                     |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | De inhoud om samen te voegen, of de geëxtraheerde tekstselectie. Als je deze variabele niet opneemt, voegt Notitiesamensteller de inhoud onderaan het sjabloon toe. |
| `{{fromTitle}}`   | Naam van de bronnotitie.                                                                                                                                         |
| `{{newTitle}}`    | Naam van de doelnotitie. Bijvoorbeeld om de bestandsnaam als kop bovenaan het bestand toe te voegen.                                                              |
| `{{date:FORMAT}}` | Aanmaakdatum van de nieuwe notitie. Bijvoorbeeld `{{date:YYYY-MM-DD}}`.                                                                                          |
