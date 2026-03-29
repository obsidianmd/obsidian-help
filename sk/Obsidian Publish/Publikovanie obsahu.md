---
permalink: publish/publish
publish: true
mobile: true
description: 'Zistite, ako publikovať svoj obsah pomocou Obsidian Publish.'
---
Táto stránka vysvetľuje, ako spravovať váš publikovaný obsah. Ak sa chcete dozvedieť, ako prispôsobiť štýl vašej stránky, pozrite si [[Prispôsobenie stránky]].

## Predpoklady

- Účet Obsidian. Ak ho nemáte, [zaregistrujte sa](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Aktívne predplatné Obsidian Publish. Ak ho nemáte, predplaťte si ho z [panela vášho účtu](https://obsidian.md/account/publish).
- Základný plugin **Publish** je [[Nastavenie Obsidian Publish#Zapnúť Obsidian Publish|zapnutý]].
- Je vytvorená [[Spravovať stránky#Vytvoriť novú stránku|Publish stránka]].

## Publikovanie poznámok

1. V **Paneli nástrojov** vyberte **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. V dialógu **Publikovať zmeny** vyberte **NOVÝ** na zobrazenie všetkých nepublikovaných poznámok.
3. Vyberte poznámky, ktoré chcete publikovať.
4. Vyberte **Publikovať**.

## Zrušenie publikovania poznámok

Poznámky zostanú vo vašom lokálnom trezore aj po zrušení ich publikovania.

1. V **Paneli nástrojov** vyberte **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. V dialógu **Publikovať zmeny** vyberte **NEZMENENÉ** na zobrazenie všetkých publikovaných poznámok.
3. Vyberte poznámky, ktorých publikovanie chcete zrušiť.
4. Vyberte **Publikovať**.

## Aktualizácia publikovanej poznámky

1. V **Paneli nástrojov** vyberte **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. V dialógu **Publikovať zmeny** vyberte **ZMENY** na zobrazenie všetkých upravených poznámok od posledného publikovania.
3. Vyberte poznámky, ktoré chcete aktualizovať.
4. Vyberte **Publikovať**.

> [!hint] Odstránenie premenovaných alebo odobratých poznámok a obrázkov z Publish sa vykonáva v tomto kroku. Musíte manuálne zaškrtnúť začiarkavacie políčko na odstránenie týchto dát, pretože z bezpečnostných dôvodov nie je automaticky zaškrtnuté.

## Publikovanie prepojených dát

Pri publikovaní poznámok obsahujúcich odkazy na iné poznámky alebo vložené obrázky môže dôjsť k nefunkčným odkazom, ak nie sú prepojené poznámky tiež publikované. **Obsidian Publish** tomu pomáha predchádzať automatickým výberom médií prepojených z poznámok, ktoré ste už vybrali.

Na zahrnutie všetkých prepojených poznámok vyberte **Pridať odkaz** v dialógu **Publikovať zmeny**.

Pred publikovaním skontrolujte aktualizovaný výber, aby ste sa uistili, že neobsahuje dáta, ktoré ešte nie ste pripravení publikovať.

> [!tip] Funkcia **Pridať odkaz** rešpektuje všetky vylúčenia definované v [[#Ignorovanie dát]].

## Automatický výber dát na publikovanie

Nastavte `publish: true` vo [[Vlastnosti|Vlastnostiach]] poznámky, aby bola automaticky zahrnutá na publikovanie ako nová alebo zmenená poznámka.

Môžete tiež automaticky vybrať poznámky a prepojené obrázky v konkrétnych priečinkoch ich pridaním ako **Zahrnuté** priečinky:

1. V **Paneli nástrojov** vyberte **Publikovať zmeny** ![[lucide-send.svg#icon]] alebo otvorte [[Paleta príkazov|Paletu príkazov]] a napíšte **Publish: Publikovať zmeny...**.
2. Vyberte ikonu **Správa publikačných filtrov** ![[lucide-filter.svg#icon]].
3. V sekcii **Zahrnuté priečinky** vyberte **Spravovať**.
4. Vyberte priečinky, ktoré chcete zahrnúť, z návrhov.
5. Priečinok je pridaný do zoznamu zahrnutých.
6. Po dokončení vyberte **Hotovo**.

### Ignorovanie dát

Na ignorovanie poznámky v Obsidian Publish nastavte `publish: false` vo [[Vlastnosti|Vlastnostiach]] poznámky. Poznámka sa už nezobrazí v zozname poznámok na publikovanie.

Môžete tiež automaticky ignorovať poznámky a obrázky v konkrétnych priečinkoch ich pridaním ako **Vylúčené** priečinky:

1. V **Paneli nástrojov** vyberte **Publikovať zmeny** ![[lucide-send.svg#icon]] alebo otvorte [[Paleta príkazov|Paletu príkazov]] a napíšte **Publish: Publikovať zmeny...**.
2. Vyberte ikonu **Správa publikačných filtrov** ![[lucide-filter.svg#icon]].
3. V sekcii **Vylúčené priečinky** vyberte **Spravovať**.
4. Vyberte priečinky, ktoré chcete vylúčiť, z návrhov.
5. Priečinok je pridaný do zoznamu vylúčených.
6. Po dokončení vyberte **Hotovo**.

> [!note] `publish: true` prepíše vylúčené priečinky
> Ak má súbor nastavené `publish: true`, bude stále publikovaný, aj keď sa nachádza v priečinku alebo filtri, ktorý je vylúčený. Je to preto, že `publish: true` poskytuje konkrétnejšie ovládanie.
