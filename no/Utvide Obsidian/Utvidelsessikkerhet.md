---
permalink: plugin-security
---
Obsidian-teamet tar sikkerhet på alvor. Denne siden forklarer risikoene knyttet til installasjon av community-utvidelser, og hva Obsidian-teamet gjør for å håndtere dem.

## Begrenset modus

Som standard kjører Obsidian i begrenset modus for å forhindre kjøring av tredjepartskode. Deaktiver kun begrenset modus hvis du stoler på forfatterne av utvidelsene du installerer.

For å slå av begrenset modus:

1. Åpne **[[Innstillinger]]**.
2. I sidemenyen velger du **Community-utvidelser**.
3. Velg **Slå på community-utvidelser**.

For å slå på begrenset modus:

1. Åpne **[[Innstillinger]]**.
2. I sidemenyen velger du **Community-utvidelser**.
3. Ved siden av **Begrenset modus** velger du **Slå på**.

Installerte utvidelser forblir i hvelvet ditt selv om du slår på begrenset modus, men ignoreres av Obsidian.

## Utvidelsenes muligheter

På grunn av tekniske begrensninger kan ikke Obsidian pålitelig begrense utvidelser til spesifikke tillatelser eller tilgangsnivåer. Dette betyr at utvidelser arver Obsidians tilgangsnivåer. Vurder derfor følgende eksempler på hva community-utvidelser kan gjøre:

- Community-utvidelser kan få tilgang til filer på datamaskinen din.
- Community-utvidelser kan koble til internett.
- Community-utvidelser kan installere ytterligere programmer.

> [!tip] 
> Hvis du arbeider med sensitive data og ønsker å installere en community-utvidelse, anbefaler vi at du utfører en uavhengig sikkerhetsgjennomgang av utvidelsen før du bruker den.

## Gjennomgangsprosess for utvidelser

Community-utvidelser gjennomgår en innledende vurdering når de sendes inn til utvidelsesbutikken. Alle utvidelser må overholde [Obsidians utviklerpolicyer](https://docs.obsidian.md/Developer+policies).

Obsidian-teamet er lite og kan ikke manuelt gjennomgå hver nye utgivelse av community-utvidelser. I stedet er vi avhengige av hjelp fra fellesskapet til å identifisere og rapportere problemer med utvidelser.

- Hvis du oppdager mindre sikkerhetssårbarheter i en community-utvidelse, se utvidelsesforfatternes `security.md` eller `readme.md` for hvordan du rapporterer disse. For kritiske feil, vennligst rapporter problemet til [[Hjelp og støtte#Contact Obsidian support|Obsidian-støtte]] også.
- Hvis du mistenker at en community-utvidelse er ondsinnet, rapporter det til [[Hjelp og støtte#Contact Obsidian support|Obsidian-støtte]], eller ved å sende en direktemelding til våre moderatorer.
