---
permalink: plugins/note-composer
---
[[Notatkomponist]] er en [[Kjerneutvidelser|kjerneutvidelse]] som lar deg slå sammen to notater eller trekke ut deler av et notat til et nytt notat.

## Slå sammen notater

Sammenslåing av notater legger et notat til et annet og fjerner det første. Notatkomponist oppdaterer alle lenker slik at de refererer til det sammenslåtte notatet.

Når du velger notatet du vil slå sammen med, kan du velge mellom følgende metoder:

- `Enter`: Legger kildenotatet til på _slutten_ av målnotatet.
- `Shift+Enter`: Legger kildenotatet til i _starten_ av målnotatet.
- `Ctrl+Enter` (eller `Cmd+Enter` på macOS): Oppretter et nytt notat med innholdet fra kildenotatet.

For å slå sammen det aktive notatet med et annet notat i hvelvet ditt:

**Filutforsker**

1. I filutforskeren, høyreklikk på notatet du vil slå sammen.
2. Klikk på **Slå sammen hele filen med...**.
3. Velg notatet du vil slå sammen med.
4. Klikk på **Slå sammen** for å bekrefte.

**Kommandopalett**

1. Åpne [[Kommandovelger|kommandopaletten]].
2. Velg **Notatkomponist: Slå sammen gjeldende fil med en annen fil...**.
3. Velg notatet du vil slå sammen med.
4. Klikk på **Slå sammen** for å bekrefte.

> [!tip] Tips
> Som standard ber Notatkomponist deg om å bekrefte ved sammenslåing av notater. Hvis du deaktiverer bekreftelsen og slår sammen et notat ved en feil, kan du fortsatt gjenopprette det med [[Filgjenoppretting]]-utvidelsen.

## Trekk ut notat

Når du velger notatet du vil trekke ut utvalget til, kan du velge mellom følgende metoder:

- `Enter`: Legger den valgte teksten til på _slutten_ av målnotatet.
- `Shift+Enter`: Legger den valgte teksten til i _starten_ av målnotatet.
- `Ctrl+Enter` (eller `Cmd+Enter` på macOS): Oppretter et nytt notat med den valgte teksten.

For å trekke ut tekst til et nytt notat:

**Editor**

1. I **redigeringsvisningen**, velg teksten du vil trekke ut.
2. Høyreklikk på den valgte teksten.
3. Klikk på **Trekk ut gjeldende utvalg...**.
4. Velg notatet du vil trekke ut til.

**Kommandopalett**

1. I **redigeringsvisningen**, velg teksten du vil trekke ut.
2. Åpne [[Kommandovelger|kommandopaletten]].
3. Velg **Notatkomponist: Trekk ut gjeldende utvalg...**.
4. Velg notatet du vil trekke ut til.

> [!tip] Tips
> Som standard erstatter Notatkomponist den uttrukne teksten med en lenke til målnotatet. Under innstillinger kan du også endre dette til å i stedet [[Bygge inn filer|bygge inn]] målnotatet, eller å ikke etterlate noe.

## Malfil

Ved å konfigurere en mal kan du tilpasse innholdet før du legger det til i det nye notatet. For å aktivere en mal, angi en **Plassering for malfil** i utvidelsesinnstillingene.

Malen kan inneholde følgende variabler:

| Variabel          | Beskrivelse                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Innholdet som skal slås sammen, eller det uttrukne tekstutvalget. Hvis du ikke inkluderer denne variabelen, legger Notatkomponist innholdet til nederst i malen. |
| `{{fromTitle}}`   | Navn på kildenotatet.                                                                                                                                    |
| `{{newTitle}}`    | Navn på målnotatet. For eksempel for å legge til filnavnet som en overskrift øverst i filen.                                                             |
| `{{date:FORMAT}}` | Opprettelsesdato for det nye notatet. For eksempel `{{date:YYYY-MM-DD}}`.                                                                                |
