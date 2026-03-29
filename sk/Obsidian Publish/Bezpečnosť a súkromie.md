---
permalink: publish/security
---
Môžete si vybrať poznámky, ktoré chcete publikovať na [[Úvod do Obsidian Publish|Obsidian Publish]]. Ostatné poznámky zostanú bezpečne vo vašom trezore.

Na servery Obsidian sa odosielajú iba poznámky, ktoré si vyberiete na publikovanie, a všetky poznámky, ktoré odpublikujete, sa odstránia.

## Ochrana heslom

Pre lepšiu kontrolu prístupu k vašej publikovanej stránke nastavte heslo stránky. Návštevníci budú pri pokuse o prístup vyzvaní na zadanie hesla. Ak sa neskôr rozhodnete heslo stránky odstrániť, celá stránka bude opäť verejne viditeľná.

> [!warning] Individuálna ochrana heslom pre jednotlivé publikované poznámky momentálne nie je podporovaná.

### Pridanie hesla stránky

1. Na paneli nástrojov, naľavo od okna aplikácie, kliknite na **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. V dialógovom okne **Publikovať zmeny** kliknite na **Zmeniť možnosti stránky** ![[lucide-cog.svg#icon]].
3. V časti **Iné nastavenia stránky**, vedľa **Heslá**, kliknite na **Spravovať**.
4. Kliknite na **Nové heslo**.
5. Do poľa **Heslo** zadajte heslo pre vašu stránku.
6. (Voliteľné) Do poľa **Prezývka** zadajte prezývku pre heslo, napríklad meno osoby, ktorej chcete poskytnúť prístup k stránke.
7. Kliknite na **Pridať toto heslo**.

### Odstránenie hesla stránky

1. Na paneli nástrojov, naľavo od okna aplikácie, kliknite na **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. V dialógovom okne **Publikovať zmeny** kliknite na **Zmeniť možnosti stránky** ![[lucide-cog.svg#icon]].
3. V časti **Iné nastavenia stránky**, vedľa **Heslá**, kliknite na **Spravovať**.
5. Kliknite na ikonu krížika vedľa hesla, ktoré chcete odstrániť.

## Zhromažďovanie údajov
### Údaje návštevníkov

V predvolenom nastavení Obsidian Publish **nezhromažďuje** údaje návštevníkov, neukladá cookies ani nespracúva osobné informácie. Môžete však implementovať analytiku alebo zaznamenávať iné údaje používateľov prostredníctvom [[Prispôsobenie stránky|prispôsobenia vašej stránky]].

Ako vlastník stránky ste zodpovední za dodržiavanie GDPR a predpisov o ochrane súkromia vo vašom regióne. To zahŕňa vytvorenie vlastného oznamovacieho bannera, ktorý je možné implementovať pomocou publish.js, a pridanie stránky so zásadami ochrany osobných údajov na vašu stránku.

## Prístup

Obsidian má zmluvu so spoločnosťou [Cloudflare](https://www.cloudflare.com) na poskytovanie hostingu pre naše Publish stránky. Servery sú umiestnené v San Franciscu, Kalifornia.

### Správa prístupu k Obsidian Publish vo vašej sieti

Na reguláciu prístupu k Obsidian Publish vo vašej sieti je potrebné spravovať nasledujúce domény:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Okrem toho backendové služby využívajú nasledujúce subdomény: `publish-xx.obsidian.md`, kde `xx` je číslo v rozsahu od `1 - 100`.

> [!tip] Ak to váš firewallový systém podporuje, odporúčame pridať na whitelist `publish-*.obsidian.md`, aby sa zohľadnilo naše priebežné rozširovanie subdomén.
