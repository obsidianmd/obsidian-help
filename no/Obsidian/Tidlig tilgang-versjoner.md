---
permalink: early-access
---
Få tidlig tilgang til kommende utgivelser ved å aktivere _tidlig tilgang-versjoner_. Tidlig tilgang-versjoner er kun tilgjengelige for brukere med en [[Catalyst-lisens]].

> [!warning] Advarsel
> Tidlig tilgang-versjoner er betautgivelser. De inkluderer nye funksjoner, men kan være mindre stabile. Ikke aktiver tidlig tilgang-versjoner hvis du foretrekker en mer pålitelig opplevelse.
> 
> Vær oppmerksom på at utviklere av community-utvidelser og temaer mottar tidlig tilgang-versjoner samtidig som alle andre. Vær tålmodig med utviklere som trenger å gjøre oppdateringer for å støtte nye funksjoner.

## Aktiver tidlig tilgang-versjoner for skrivebord

For å motta tidlig tilgang-versjoner så snart de er tilgjengelige, følg disse trinnene:

1. Åpne **[[Innstillinger]]**.
2. I sidefeltet, velg **Generelt**.
3. Under **Konto → Kontoen din**, velg **Logg inn**.
4. I **E-post**, skriv inn e-posten din.
5. I **Passord**, skriv inn passordet ditt.
6. Når du er logget inn, gå tilbake til **[[Innstillinger]]**.
7. I sidefeltet, velg **Generelt**.
8. Under **App**, aktiver **Få Insider-versjoner**.
9. Klikk **Se etter oppdateringer** og deretter **Start på nytt**.

## Installer tidlig tilgang-versjoner på mobile enheter

For å finne instruksjoner om hvordan du installerer tidlig tilgang-versjoner på mobilenheten din, følg disse trinnene:

1. Last ned og installer [Discord](<https://discord.com>).
2. Bli med i [Obsidian Discord-serveren](https://discord.gg/obsidianmd).
3. [[Catalyst-lisens#Få Discord-merket ditt|Få Discord-merket ditt]] for å få tilgang til insider-kanaler.
4. I `#insider-welcome`-kanalen finner du instruksjoner for å få tilgang til nedlastingen basert på enhetstypen din.

## Rapporter problemer og annen tilbakemelding

Hvis du oppdager et problem i en tidlig tilgang-versjon, vurder å rapportere det til Obsidian-teamet. Før du rapporterer et problem, søk i [forumet](https://forum.obsidian.md/) eller Discord for å se om noen allerede har rapportert det.

For å rapportere et problem, bruk en av følgende kanaler:

- På Discord, rapporter problemet i den respektive `#insider-release`-kanalen.
- I forumet, opprett et nytt emne under [Bug reports](https://forum.obsidian.md/c/bug-reports/7).

Når du rapporterer et problem, inkluder byggversjonen og operativsystemet du kjører det på. Du finner byggversjonen under **[[Innstillinger]] → Om → App → Gjeldende versjon**.

## Bytt tilbake til offentlige versjoner på skrivebord

For å bytte tilbake til offentlige versjoner (ikke tidlig tilgang) på skrivebord:

1. Deaktiver tidlig tilgang-versjoner.
   1. Åpne **[[Innstillinger]]**.
   2. I sidefeltet, velg **Generelt**.
   3. Under **App**, deaktiver **Få Insider-versjoner**.
2. Lukk Obsidian.
3. Slett filen `obsidian-VERSION.asar`, der `VERSION` er Obsidian-versjonen.
   - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Start Obsidian på nytt.

## Bytt tilbake til offentlige versjoner på mobil

For å bytte tilbake til offentlige versjoner (ikke tidlig tilgang) på mobil:

1. Sikkerhetskopier hvelvdataene dine
2. Avinstaller Obsidian
3. Installer Obsidian på nytt enten fra Play Store eller Apple App Store
4. Gjenopprett hvelvdataene dine fra sikkerhetskopiene
5. Åpne Obsidian
