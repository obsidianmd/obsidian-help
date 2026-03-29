---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian beží ako lokálna aplikácia na zariadení každého člena vášho tímu. Je navrhnutý tak, aby fungoval online aj offline, bezpečne a súkromne, a dáva vám úplnú kontrolu nad dátami vášho tímu. Obsidian nie je dostupný ako webová aplikácia, preto budete musieť nasadiť aplikáciu pre členov vášho tímu.

## Inštalácia a aktualizácia Obsidian

Váš tím si môže stiahnuť Obsidian z našej [stránky na stiahnutie](https://obsidian.md/download). Vydania sú tiež dostupné na našej [stránke vydaní na GitHube](https://github.com/obsidianmd/obsidian-releases/releases), ktorá obsahuje odkazy na [zoznam zmien](https://obsidian.md/changelog/).

> [!tip] Pre používateľov Windows, ktorí potrebujú systémový inštalátor, univerzálny `.exe` obsahuje možnosť nainštalovať Obsidian pre všetkých používateľov.

Ak sú v aplikácii povolené automatické aktualizácie, budúce verzie sa nainštalujú automaticky, keď používatelia reštartujú Obsidian. Okrem toho odporúčame pravidelne vykonávať [[Aktualizovať Obsidian#Aktualizácie inštalátora|aktualizácie inštalátora]], aby ste dostali najnovšie aktualizácie frameworku Electron, vrátane bezpečnostných opráv.

Ak hľadáte spôsob, ako obmedziť sieťový prístup k Obsidian počas tohto procesu, pozrite si [[Bezpečnostné aspekty pre tímy#Sieť a prístup|sieť a prístup]].

## Prispôsobenie Obsidian

Obsidian sa dá ľahko upraviť podľa potrieb vášho tímu. S rozsiahlym API a veľkým ekosystémom používateľov ponúka Obsidian prístup k množstvu pluginov, tém a doplnkových nástrojov.

Pre otázky súvisiace s bezpečnosťou týkajúce sa týchto tém si pozrite [[Bezpečnostné aspekty pre tímy]].

### Konfiguračné priečinky

[[Konfiguračný priečinok]] je miesto, kde [[Slovník pojmov#Trezor|trezor]] Obsidian ukladá nastavenia aplikácie. Štandardne sa tento priečinok nazýva `.obsidian`, ale máte flexibilitu [[Konfiguračný priečinok#Zmena konfiguračného priečinka|zmeniť konfiguračný priečinok]] podľa svojich preferencií.

Odporúčame vytvoriť štandardizovanú šablónu konfiguračného priečinka, ktorá sa nasadí na zariadenia vášho tímu.

### Pluginy

[[Vstavané pluginy]] sú voliteľné funkcie vytvorené tímom Obsidian. Tieto funkcie sú integrované v jadre aplikácie a je možné ich zapnúť alebo vypnúť.

[[Komunitné pluginy]] sú funkcie tretích strán pridané do aplikácie Obsidian a je možné ich nainštalovať prostredníctvom komunitného adresára. Pluginy tretích strán využívajú [Obsidian API](https://github.com/obsidianmd/obsidian-api). Pluginy sa nachádzajú v priečinku `.obsidian/plugins` v rámci trezora a je možné ich na toto miesto nainštalovať manuálne.

### Témy a snippety

[[Témy]] vizuálne menia rozhranie Obsidian. Podobne ako pluginy, témy je možné stiahnuť z nášho komunitného adresára. Témy sa nachádzajú v priečinku `.obsidian/themes` v rámci trezora.

[[CSS snippety|Snippety]] sú malé `.css` súbory, ktoré vizuálne upravujú aspekty rozhrania Obsidian. V niektorých prípadoch môžu tiež pridať funkčné vylepšenia. Snippety sa nachádzajú v priečinku `.obsidian/snippets` v rámci trezora.

## Často kladené otázky

Pre otázky o správe účtov a bezpečnosti si pozrite [[Bezpečnostné aspekty pre tímy#Bezpečnosť účtu|bezpečnosť účtu]].

### Nasadenie

**Môžem nasadiť licencie na viacero inštalácií?**
V súčasnosti nepodporujeme nasadenie licencií prostredníctvom nasadzovacieho skriptu, napríklad v súbore `.json`. Ak máte záujem o túto funkciu pre váš tím, odošlite [požiadavku na funkciu](https://forum.obsidian.md/c/feature-requests/8).

**Môže Obsidian uzamknúť určité funkcie alebo konfigurácie prostredníctvom nastavenia alebo príznaku aplikácie?**
V súčasnosti to môžete urobiť zablokovaním prístupu na úpravu priečinka `.obsidian` alebo konkrétnych súborov a priečinkov v ňom, ako je popísané vyššie. Ak máte záujem o viac prístupových kontrol pre váš tím, odošlite [požiadavku na funkciu](https://forum.obsidian.md/c/feature-requests/8).
