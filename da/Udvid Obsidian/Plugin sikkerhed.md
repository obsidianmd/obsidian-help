---
permalink: plugin-sikkerhed
---
Obsidian teamet tager sikkerhed meget seriøst. Denne side forklarer de risici, der er involveret ved at installere fællesskabsplugins, og hvad Obsidian teamet gør, for at addressere dem.

## Begrænset tilstand

Obsidian kører i **Begrænset tilstand** som standard for at forhindre kørsel af tredjepartskode. Deaktiver kun begrænset tilstand, hvis du stoler på udviklerne af de plugins, som du installerer.

Sådan deaktiverer du begrænset tilstand:

1. Åbn **Indstillnger**
2. Vælg **Fællesskabsplugins** i venstre fanemenu
3. Vælg **Aktiver fællesskabsplugins**

Sådan aktiverer du begrænset tilstand:

1. Åbn **Indstillinger**
2. Vælg **Fællesskabsplugins** i venstre fanemenu
3. Vælg **Slå til** ved siden af **Begrænset tilstand**

Selom du slår besgrænset tilstand til, vil installerede plugins forblive i din boks, men Obsidian vil ignorere dem.

## Om plugin begræsninger

Obsidian kan ikke på en pålidelig måde begrænse pluins til specifikke tilladelser eller adgangsniveauer, grundet tekniske begræsninger. Det betyder, at plugins arver Obsidians tilladelser og adgangsniveauer. Som et resultat deraf, så vær opmærksom på hvad et plugin kan gøre i de følgende eksempler:

- Fællesskabsplugins kan tilgå filer på din computer
- Fællesskabsplugins kan forbinde til internettet
- Fællesskabsplugins kan installere yderligere programmer

> [!tip] 
> Vi anbefaler, at du udfører et uafhængigt sikkerhedsreview af et fællesskabsplugin, før du anvender det, hvis du arbejder med sensitiv data.

## Plugin review processen

Fællesskabssplugins gennemgår et indledende review, når de indsendes til plugin arkivet. Alle plugins skal overholde [Obsidians udviklingspolitikker](https://docs.obsidian.md/Developer+policies).

Da Obsidian teamet er lille, har de ikke mulighed for at reviewe enhver ny udgave af et fællesskabsplugin. Teamet stoler på, at fællesskabet hjælper til med at identificere og rapportere problemer med plugins.

- Hvis du oplever den mindste sårbarhed i relation til sikkerhed i et fællesskabsplugin, så læs pluginudviklerens `security.md` eller `readme.md`, om hvrodan du rapporterer dem. Kritiske fejl skal også rapporteres til [[Hjælp og support#Kontakt Obsidian support|Obsidian supporten]]. 
- Hvis du mistænker, at et fællesskabsplugin er skadeligt, så rapporter det til [[Hjælp og support#Kontakt Obsidian support|Obsidian supporten]], eller sende en besked direkte til en af vores moderatorer.
