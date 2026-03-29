---
permalink: sync/plans
publish: true
mobile: true
description: 'Zistite viac o rôznych možnostiach predplatného, ktoré sú k dispozícii pre Obsidian Sync.'
---
## Plány

Na synchronizáciu vašich poznámok pomocou [[Úvod do Obsidian Sync|Obsidian Sync]] potrebujete predplatný plán. Plán Sync si môžete zakúpiť prihlásením sa do [vášho účtu](https://obsidian.md/account/sync). Ceny nájdete na [stránke Sync](https://obsidian.md/sync).

Nižšie je porovnanie medzi plánom Standard a plánom Plus:

|                                                         | Sync Standard | Sync Plus       |
| ------------------------------------------------------- | ------------- | --------------- |
| Synchronizované trezory                                 | 1             | 10              |
| Maximálna veľkosť súboru                                | 5 MB          | 200 MB          |
| Celkové úložisko                                        | 1 GB          | 10 GB až 100 GB |
| [[História verzií]]                                     | 1 mesiac      | 12 mesiacov     |
| Zariadenia                                              | Neobmedzené   | Neobmedzené     |
| [[Spolupráca na zdieľanom trezore\|Zdieľané trezory]]   | Áno           | Áno             |

## Limity úložiska

Množstvo dát, ktoré môžete ukladať pomocou [[Úvod do Obsidian Sync|Obsidian Sync]], závisí od vášho predplatného plánu. V pláne Sync Plus si môžete dokúpiť ďalšie úložisko až do 100 GB cez [panel vášho účtu](https://obsidian.md/account/sync). Viac podrobností nájdete v [[Často kladené otázky]].

Pre všetky poznámky vo všetkých vašich trezoroch existuje jediný limit úložiska na úrovni účtu. [[História verzií]] a [[Prílohy|prílohy]] sa tiež započítavajú do limitu úložiska vášho účtu.

Keď dosiahnete limit úložiska vášho účtu, plugin Sync prestane synchronizovať súbory a budete vyzvaní na vyčistenie vášho vzdialenéko trezoru (trezory).

### Identifikácia a odstránenie veľkých súborov

Na identifikáciu a odstránenie veľkých súborov z trezoru:

1. Otvorte **[[Nastavenia]] → Sync**.
2. Vyberte **Zobraziť najväčší súbor** vedľa **Veľkosť trezoru je nad limit**.
	1. Ak nevidíte **Veľkosť trezoru je nad limit**, znamená to, že ==ste ešte nedosiahli limit veľkosti==.
3. Zatvorte modálne okno **Zobraziť najväčší súbor**.
4. Odstráňte niektoré veľké súbory, ktoré už nepotrebujete.
5. Počkajte, kým Obsidian Sync dokončí úlohu. Môže to chvíľu trvať.
6. Otvorte **[[Nastavenia]] → Sync**.
7. Vyberte **Vyčistiť** vedľa **Veľkosť trezoru je nad limit**. Tým sa odstránia vymazané súbory zo vzdialeného trezoru a uvoľní sa miesto.

Po synchronizácii vyčistenia na server by mal Obsidian Sync opäť fungovať.

### Vytvorenie nového vzdialeného trezoru

Môžete **vytvoriť nový vzdialený trezor** na vylúčenie veľkých súborov pred synchronizáciou. História verzií vašich súborov sa resetuje, ak vytvoríte nový vzdialený trezor. Pred pokračovaním sa uistite, že nepotrebujete históriu verzií pre staršie súbory.

Na synchronizáciu do nového vzdialeného trezoru postupujte podľa týchto krokov:

1. Otvorte **[[Nastavenia]] → Sync**.
2. Vyberte **Spravovať** vedľa **Vzdialený trezor**.
3. Vyberte **Vytvoriť nový trezor** a postupujte podľa krokov na jeho vytvorenie. Ak vám dôjdu trezory, možno budete musieť najprv [[Nastavenie Obsidian Sync#Odpojenie od vzdialeného trezoru|odpojiť]] aktuálny vzdialený trezor a [[Nastavenie Obsidian Sync#Odstránenie vzdialeného trezoru|odstrániť]] ho.
4. Nastavte vylúčené súbory pred spustením synchronizácie do nového vzdialeného trezoru.
5. Reštartujte Obsidian na aplikovanie vašich zmien.
6. Otvorte **[[Nastavenia]] → Sync**.
7. Vyberte Pokračovať na spustenie synchronizácie do nového vzdialeného trezoru.

Nový vzdialený trezor by mal byť menší ako predchádzajúci trezor, pretože neobsahuje históriu verzií a vylúčené súbory.

## Inovácia plánu

Plán môžete inovovať prihlásením sa do [panelu vášho účtu](https://obsidian.md/account/sync). Odtiaľ budete môcť inovovať váš plán zo Sync Standard na Sync Plus a zvýšiť úložisko až na 100 GB.

## Zníženie plánu

Ak chcete znížiť váš plán Sync, ale vaše využitie úložiska presahuje limit nového plánu, budete musieť uvoľniť miesto vo vašom vzdialenom trezore. V súčasnosti neexistuje priamy spôsob na rýchle odstránenie konkrétnych súborov z existujúceho vzdialeného trezoru. Je to preto, že prílohy sú uchovávané v histórii verzií až dva týždne a história verzií sa započítava do vášho limitu úložiska.

Najrýchlejší spôsob, ako znížiť využitie úložiska Sync, je vytvoriť nový vzdialený trezor s vypnutými prílohami a potom odstrániť starý vzdialený trezor, ktorý presahuje limity úložiska. Uvedomte si, že týmto stratíte históriu verzií.

Ak znižujete zo Sync Plus na Sync Standard, budete tiež musieť znížiť počet prítomných trezory na jeden, kým bude zníženie povolené.

### Zachovanie histórie verzií

Prílohy sú uchovávané vo vašej [[História verzií|histórii verzií]] až dva týždne. Ak plánujete v blízkej budúcnosti znížiť plán, môžete začať odstránením príloh z vášho lokálneho trezoru.

Po dvoch týždňoch budú vyčistené zo vzdialeného trezoru a nebudú sa viac započítavať do vášho limitu úložiska. V tomto bode budete môcť znížiť váš plán a zachovať históriu verzií pre ostatné typy súborov, ako napríklad Markdown súbory.
