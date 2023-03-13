Lær hvordan du kan samarbejde om dit [[Introduktion til Obsidian Publish|Obsidian Publish]] websted med andre Obsidina brugere. Ved at tilføje dine venner og kollegaer som samrbejdspartnere, kan de udgive ændringer på dit websted.

Kun ejeren af webstedet har brug for et aktivt abonnement på Obsidian Publish. Samrbejdspartnere har kun brug for en [Obsidian konto](https://obsidian.md/account).

> [!warning]
> Vær sikker på, at du har [[#Synkroniser ændringer mellem samarbejdspartnere|synlroniseret alle ændringer fra andre samarbejdspartnere]], før du udgiver ændringer på et delt websted. Ellers risikerer du at overskrive ændringer fra andre samarbejdspartnere.

## Tilføj en samarbejdspartner til et websted

1. Klik på **Udgiv ændringer** (papir flyver ikonet) i båndmenuen i venstre sidepanel
2. Klik på **Websteds indstillinger** (tandhjuls ikonet) i **Udgiv ændringer** dialogen
3. Klik på **Administrer** ved siden af **Webstedssamarbejde**
4. Skriv email på den nye samarbejdsparter i **Inviter bruger**
5. Klik på **Tilføj**

## Fjern en samarbejdspartner fra et websted

1. Klik på **Udgiv ændringer** (papir flyver ikonet) i båndmenuen i venstre sidepanel
2. Klik på **Websteds indstillinger** (tandhjuls ikonet) i **Udgiv ændringer** dialogen
3. Klik på **Administrer** ved siden af **Webstedssamarbejde**
4. Klik på **Fjern bruger** (kryds ikonet) ved siden af den samarbejdspartner, du vil fjerne

## Synkroniser ændringer mellem samarbejdspartnere

Obsidian Publish synkroniserer ikke automatisk udgivne ændringer mellem lokale bokse. Samarbejdspartnere bliver nødt til at synkronisere ændringer fra andre samarbejdspartnere manuelt.

Sådan opdaterer du en lokal note med ændringer fra et publiceret websted:

1. Klik på **Udgiv ændringer** (papir flyver ikonet) i båndmenuen i venstre sidepanel
2. Højreklik på den ændring du vil synkronisere, og vælg derefter **Benyt live version**. **Dette vil overskrive noten i din lokale boks.**

> [!tip]
> Vi anbefaler, at du anvender et andet værktøj til at synkronisere ændringer mellem bokse, f.eks. [[Introduktion til Obsidian Sync|Obsidian Sync|Obsidian Sync]] eller [git](https://git-scm.com/).

## Tilladelser

Nedenstående tabel viser de tilgængelige tilladelser for ejere og samarbejdspartnere:

| Aktion                             | Samarbejdspartner | Ejer |
|------------------------------------|:------------:|:-----:|
| Udgiv nye sider                  | ✓            | ✓     |
| Udgiv ændringer for udgivne sider | ✓            | ✓     |
| Fjerne udgivne sider                    | ✓            | ✓     |
| Konfigurere websteds indstillinger             |              | ✓     |
| Administrere tilladelser                 |              | ✓     |
