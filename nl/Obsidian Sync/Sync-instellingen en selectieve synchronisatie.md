---
permalink: sync/settings
publish: true
mobile: true
description: Deze pagina legt de Sync-instellingen uit en helpt je bij het selecteren welke bestanden je wilt synchroniseren.
---
Wanneer je [[Abonnementen en opslaglimieten#Een nieuwe externe kluis aanmaken|een externe kluis aanmaakt]] en [[Obsidian Sync instellen#Verbinding maken met een externe kluis|er verbinding mee maakt]], wordt de Sync-kernplug-in de plek om je externe kluis te beheren.

## Sync-instellingen

**Externe kluis**
Dit gedeelte toont je momenteel verbonden externe kluis. Het bevat een **Verbinding verbreken**-knop om de verbinding met de externe kluis te verbreken en een **Beheren**-knop om alle externe kluizen te bekijken waartoe je account toegang heeft (inclusief gedeelde kluizen via [[Samenwerken aan een gedeelde kluis|samenwerking]]).

> [!warning]+ Externe kluis in synchronisatieservice van derden
> Als je externe kluis zich in een synchronisatieservice van derden bevindt, zie je een rode foutmelding. Volg de stappen in [[Overstappen naar Obsidian Sync]] om dit op te lossen.

**Synchronisatiestatus**
Toont de huidige synchronisatiestatus van de externe kluis. Dit gedeelte bevat een **Pauzeren**- of **Hervatten**-knop, afhankelijk van de status.

**Apparaatnaam**
Wijs een unieke naam toe aan het apparaat dat momenteel synchroniseert. Dit helpt bij het volgen van activiteit in het [[Statuspictogram en berichten#Synchronisatieactiviteitenlogboek|synchronisatieverslag]]. Deze instelling is apparaatspecifiek, net als [[#Selectieve synchronisatie]].

**[[#Conflictoplossing]]**
Kies hoe conflicten worden opgelost wanneer je een bestand op meerdere apparaten wijzigt. Deze instelling is apparaatspecifiek, net als [[#Selectieve synchronisatie]].

**Verwijderde bestanden**
Bevat een knop om verwijderde bestanden te **Bekijken** of te **Herstellen**. Zie [[Versiegeschiedenis]] voor meer details.

**Kluisgrootte**
Toont een voortgangsbalk die laat zien hoeveel van je synchronisatieopslag is gebruikt.

> [!tip]- Serververwerkingstijd
> Het kan tot 30 minuten duren voordat het huidige gebruik is bijgewerkt vanwege serververwerking.

**Neem contact op met de klantenservice**
Geeft instructies over hoe je [[Hulp en ondersteuning#Contact opnemen met Obsidian-ondersteuning|contact opneemt met Obsidian-ondersteuning]], inclusief opties om **Debuginformatie te kopiëren** en **E-mailondersteuning**.

### Conflictoplossing

Kies hoe conflicten worden opgelost wanneer je een bestand op meerdere apparaten wijzigt voordat je synchroniseert. Je kunt wijzigingen automatisch samenvoegen of afzonderlijke conflictbestanden aanmaken voor handmatige beoordeling. Zie [[Problemen oplossen met Obsidian Sync#Conflictoplossing|Conflictoplossing]] voor details over hoe conflicten werken en hoe je deze instelling configureert.

> [!warning]+ Configureer op elk apparaat
> Deze instelling moet op elk apparaat afzonderlijk worden geconfigureerd.

---

Je kunt ook kiezen wat je synchroniseert in de instellingen van de Sync-kernplug-in. Dit gedeelte behandelt **selectieve synchronisatie** en **kluisconfiguratiesynchronisatie**, samen met de bijbehorende aandachtspunten.

## Selectieve synchronisatie

Bestanden die naar je [[Lokale en externe kluizen|externe kluis]] worden gesynchroniseerd, tellen mee voor je [[Veelgestelde vragen#Hoe groot kan elke externe kluis zijn|opslaglimiet]]. Standaard activeert Obsidian Sync **selectieve synchronisatie** voor de volgende bestandstypen:
- Afbeeldingen
- Audio
- Video's
- PDF's

Om extra bestandstypen te synchroniseren, schakel je de optie `Alle andere typen synchroniseren` in.

De standaard **kluisconfiguratiesynchronisatie**-instellingen omvatten:
- Andere bestandstypen
- Hoofdinstellingen
- Uiterlijk
- Thema's en fragmenten
- Sneltoetsen
- Actieve kernplug-in-lijst
- Kernplug-in-instellingen

Om communityplug-ins te synchroniseren, schakel je handmatig **Actieve communityplug-in-lijst** en **Geïnstalleerde communityplug-in-lijst** in.

### De bestandstypen wijzigen die je wilt synchroniseren

1. Open **[[Instellingen]] → Sync**.
2. Schakel onder **Selectieve synchronisatie** de bestandstypen in die je wilt synchroniseren.
3. Start de applicatie opnieuw op om de nieuwe instellingen toe te passen. Op mobiel of tablet kan een geforceerde afsluiting nodig zijn.

Houd er rekening mee dat je [[Abonnementen en opslaglimieten|Sync-abonnement]] de maximale bestandsgrootte bepaalt die je kunt synchroniseren. Het Standaard-abonnement staat synchronisatie toe van bestanden tot 5 MB, terwijl het Plus-abonnement bestanden tot 200 MB ondersteunt.

> [!info]+ Uitgesloten bestanden blijven in de externe kluis
> Het toevoegen van een bestand aan de lijst **Uitgesloten bestanden** verwijdert het niet uit de externe kluis als het al is gesynchroniseerd. Configureer je Sync-instellingen voordat je synchroniseert om onnodig opslaggebruik te voorkomen.

### Een map uitsluiten van synchronisatie

Standaard synchroniseert Obsidian alle bestanden en mappen in je kluis. Om een specifieke map uit te sluiten van synchronisatie:
1. Open **[[Instellingen]] → Sync**.
2. Selecteer naast **Uitgesloten mappen** de optie **Beheren**.
3. Selecteer de map die je wilt uitsluiten uit de lijst.
4. Selecteer **Klaar**.

Om een map van de uitsluitingslijst te verwijderen, selecteer je de ![[lucide-x.svg#icon]]-knop naast de mapnaam.

#### Altijd uitgesloten van synchronisatie

##### Momentopnames van bestandsherstel

De momentopnames in de [[Bestanden herstellen]]-plug-in worden niet gesynchroniseerd via Obsidian Sync, omdat momentopnames worden bewaard in de [[Hoe Obsidian gegevens opslaat#Globale instellingen|Globale instellingen]].

##### Verborgen bestanden en mappen

Bestanden en mappen die beginnen met een `.` worden als verborgen behandeld en uitgesloten van synchronisatie. De enige uitzondering is de [[Configuratiemap|configuratiemap]] van de kluis (`.obsidian`), die wel wordt gesynchroniseerd.

Veelvoorkomende voorbeelden van verborgen bestanden en mappen die niet worden gesynchroniseerd:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Sync-instellingen

Sync-instellingen worden niet gesynchroniseerd tussen apparaten. Je moet ze op elk apparaat afzonderlijk configureren als dat nodig is.

## Je gesynchroniseerde kluisinstellingen bijwerken

Volg deze stappen om sync-instellingen op meerdere apparaten te wijzigen:

> [!tip]- Primaire en secundaire apparaten
> De termen "primair" en "secundair" apparaat zijn alleen ter verduidelijking. Sync maakt geen onderscheid tussen apparaten.

### Primair apparaat

Het primaire apparaat fungeert als de bron van waarheid. Wijzigingen die hier worden aangebracht, worden gesynchroniseerd naar alle andere apparaten.

1. Ga naar **[[Instellingen]] → Sync**.
2. Activeer de gewenste instellingen onder **Kluisconfiguratiesynchronisatie**.
3. Herlaad of herstart Obsidian. Op mobiel of tablet kan een geforceerde afsluiting nodig zijn.
4. Wacht tot de instellingen zijn gesynchroniseerd met je externe kluis.

### Secundair(e) apparaat(en)

Secundaire apparaten (zoals je telefoon) ontvangen updates van het primaire apparaat.

1. Ga naar **[[Instellingen]] → Sync**.
2. Schakel de benodigde instellingen in onder **Kluisconfiguratiesynchronisatie**.
3. Wacht tot de wijzigingen zijn gedownload van de externe kluis.
4. Herlaad of herstart de app om de gesynchroniseerde instellingen toe te passen. Op mobiel of tablet kan een geforceerde afsluiting nodig zijn.

### Herladen van instellingen

Bepaalde instellingen kunnen direct worden herladen, terwijl andere een herstart vereisen:

- **Direct herlaadbaar**: De meeste Obsidian-configuraties, inclusief sneltoetsen en eigenschappen, uiterlijke instellingen en configuraties voor al ingeschakelde kernplug-ins.
- **Vereist herladen**: CSS-wijzigingen (bijv. [[CSS-fragmenten]], [[Thema's]]), grafiekweergaveconfiguraties en kernplug-instatussen (bijv. Dagnotities in-/uitschakelen).

Communityplug-ins ondersteunen doorgaans geen direct herladen en vereisen een herstart wanneer nieuwe instellingen worden toegepast.

> [!info]+ Voor plug-inontwikkelaars
> Leer hoe je [hot-reload-functionaliteit integreert met Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Instellingenprofielen

Obsidian Sync kan meerdere [[Configuratiemap|configuratiemappen]] naar dezelfde externe kluis synchroniseren, waardoor je afzonderlijke profielen kunt aanmaken (bijv. één voor mobiel, een ander voor je laptop).

### Een instellingenprofiel aanmaken

Om een nieuw instellingenprofiel aan te maken:

1. Open **[[Instellingen]] → Bestanden & Links**.
2. Voer onder **Configuratiemap overschrijven** een naam in voor je profiel, beginnend met een punt (`.`), bijv. `.obsidian-mobile`.
3. Herstart Obsidian om de wijzigingen toe te passen.

> [!info]+ Voorkom het opnieuw downloaden van plug-ins en thema's
> Het wijzigen van het instellingenprofiel vereist dat je je sync-instellingen opnieuw configureert. Om het opnieuw downloaden van plug-ins en thema's te voorkomen, kopieer je je bestaande `.obsidian`-map en hernoem je deze naar de naam van je nieuwe profiel (bijv. `.obsidian-mobile`) voordat je wijzigingen aanbrengt.
