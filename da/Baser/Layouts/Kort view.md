---
permalink: baser/views/kort
---
Kort er en [[Views|viewtype]], som du kan anvende i [[Introduktion til Baser|Baser]].

Vælg ![[lucide-layout-grid.svg#icon]] **Kort** fra viewmenuen for at vise filer, som et gallerilignende gitterlayout med valgfri omslagsbilleder.

## Indstillinger

Indstillingerne for kortviewet kan konfigureres i [[Views#View indstillinger|View indstillingerne]].

- Kort størrelse
- Billedegenskaber
- Billedtilpasning
- Billedformatforhold

### Kort størrelse

Definerer kortets bredde.

### Billedegenskaber

Kort understøtter et valgfrit omslagsbillede, som er en [[Egenskaber|egenskab]], som vises som et billede ovenpå kortet. Egenskaben kan være én af følgende:

- Et link til en lokal [[Vedhæftninger|vedhæftning]] `"[[link/til/vedhæftning.jpg]]"`
- Et eksternt link (URL)
- En hexadecimal farvekode (`#000000`)

### Billedtilpasning

Hvis du har konfigureret en billedegenskab, kan denne funktion beskrve  hvordan billedet skal vises på kortet.

- **Beskåret:** Billedet fylder kortets indholdsboks. Hvis det ikke passer, vil det blive beskåret
- **Skaleret:** Billedet bliver skaleret indtil det passer med kortets indholdboks. Billedet bliver ikke beskåret

### Billedformatforhold

Omslagsbilledets højde bestemmes af dets formatforhold. Standardformatforholdet er 1:1, hvilket betyder at alle dine billeder bliver firkantede. Du kan justere formatforholder her, så det bliver lavere eller højere.
