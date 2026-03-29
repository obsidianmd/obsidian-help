---
permalink: publish/sites
---
Táto stránka vysvetľuje, ako spravovať stránky [[Úvod do Obsidian Publish|Obsidian Publish]].

Stránka je kolekcia poznámok, ktorá je hostovaná službou Obsidian Publish a dostupná online, buď prostredníctvom adresy Obsidian Publish alebo [[Vlastné domény|vlastnej domény]].

## Vytvorenie novej stránky

> [!note] Počet stránok, ktoré môžete mať súčasne, je určený vaším predplatným Obsidian Publish. Pred vytvorením novej stránky sa uistite, že vám to vaše predplatné umožňuje.

1. Na paneli nástrojov, naľavo od okna aplikácie, kliknite na **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. Ak už máte existujúcu stránku, kliknite na **Prepnúť stránku** ![[lucide-repeat.svg#icon]].
3. Do poľa **ID stránky** zadajte cestu, ktorú chcete pre svoju stránku. Napríklad stránka s ID `my-amazing-site` je dostupná na publish.obsidian.md/my-amazing-site.
4. Kliknite na **Vytvoriť**.

## Odstránenie existujúcej stránky

> [!note] Poznámky zostanú vo vašom trezore aj po odstránení stránky.

1. Na paneli nástrojov, naľavo od okna aplikácie, kliknite na **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. Kliknite na **Prepnúť stránku** ![[lucide-repeat.svg#icon]].
3. Kliknite na **Odstrániť stránku** ![[lucide-x.svg#icon]] napravo od stránky, ktorú chcete odstrániť.
4. Kliknite na **Odstrániť** pre potvrdenie.

## Prepínanie medzi stránkami

1. Na paneli nástrojov, naľavo od okna aplikácie, kliknite na **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. Kliknite na **Prepnúť stránku** ![[lucide-repeat.svg#icon]].
3. Kliknite na **Vybrať** napravo od stránky, na ktorú chcete prepnúť.

## Zmena ID stránky

1. Na paneli nástrojov, naľavo od okna aplikácie, kliknite na **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. Kliknite na **Prepnúť stránku** ![[lucide-repeat.svg#icon]].
3. Kliknite na **Zmeniť ID stránky** ![[lucide-edit-3.svg#icon]] napravo od stránky, ktorú chcete upraviť.
4. Do poľa **ID stránky** zadajte nové ID pre svoju stránku.
5. Kliknite na **Zmeny**.

## Zobrazenie nastavení stránky

1. Na paneli nástrojov, naľavo od okna aplikácie, kliknite na **Publikovať zmeny** ![[lucide-send.svg#icon]].
2. V dialógovom okne **Publikovať zmeny** kliknite na **Zmeniť možnosti stránky** ![[lucide-cog.svg#icon]].

## Nastavenie stránky

### Všeobecné

| Možnosť                                    | Typ        | Popis                                                                                                                              |
| ------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Meno stránky                                | Vstup      | Verejný názov a nadpis vašej stránky Obsidian Publish.                                                                             |
| Súbor domovskej stránky                     | Vstup      | Umiestnenie markdown súboru, ktorý chcete použiť ako úvodnú stránku.                                                              |
| Logo                                        | Vstup      | Obrázok, ktorý chcete použiť ako banner stránky. Obrázok musí [[Publikovanie obsahu#Publikovanie poznámok\|byť publikovaný]].    |
| Spolupracovníci stránky                     | Tlačidlo   | Určite ďalších používateľov, ktorým chcete umožniť prístup na úpravu vašich publikovaných poznámok. Používatelia musia mať účet Obsidian. |
| Vlastná doména                              | Tlačidlo   | [[Vlastné domény]]                                                                                                                 |
| Zakázať indexovanie vyhľadávacieho nástroja | Prepínač   | Zabráňte vyhľadávacím nástrojom v prehľadávaní vašej stránky pridaním súboru `robots.txt`.                                        |

### Vzhľad

| Možnosť              | Typ           | Popis                                                                                               |
|----------------------|---------------|-----------------------------------------------------------------------------------------------------|
| Téma                 | Rozbaľovací   | Vyberte, ako sa téma zobrazí na vašej stránke; **Svetlá**, **Tmavá** alebo **Prispôsobiť systému**. |
| Svetlá/tmavá téma   | Prepínač      | Umožnite používateľom prepínať režim **Svetlá**/**Tmavá** pomocou prepínacieho tlačidla na vašej stránke. |

## Zážitok z čítania

| Možnosť                      | Typ      | Popis                                                                                                   |
|-------------------------------|----------|---------------------------------------------------------------------------------------------------------|
| Zobrazovať náhľad pri podržaní kurzorom | Prepínač | Zapnúť alebo vypnúť náhľad stránky pri podržaní kurzora nad aktívnym interným odkazom.                |
| Skryť názov stránky          | Prepínač | Zapnúť alebo vypnúť zobrazenie vloženého názvu publikovanej poznámky.                                  |
| Čitateľná dĺžka riadku       | Prepínač | Zapnúť alebo vypnúť čitateľnú dĺžku riadku na vašej stránke.                                         |
| Prísne zalomenia riadkov      | Prepínač | Zapnúť alebo vypnúť zobrazenie jednoduchých zalomení riadkov na vašej stránke.                        |
| Použiť posuvné okná           | Prepínač | Zapnúť alebo vypnúť [[Karty#Skupiny kariet v zásobníku\|posuvné karty]] na vašej stránke.             |

### Komponenty

| Možnosť                  | Typ      | Popis                                                                                                                                        |
|--------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Zobraziť navigáciu       | Prepínač | Zapnúť alebo vypnúť zobrazenie [[Prieskumník súborov|prieskumníka súborov]] na vašej publish stránke.                                       |
| Prispôsobiť navigáciu    | Tlačidlo | [[Prispôsobenie stránky#Prispôsobenie navigácie\|Prispôsobte]] poradie zobrazenia súborov, ak je zapnutá možnosť **Zobraziť navigáciu**.    |
| Zobraziť vyhľadávacie pole | Prepínač | Zapnúť alebo vypnúť vyhľadávacie pole na vašej stránke.                                                                                   |
| Zobraziť graf            | Prepínač | Zapnúť alebo vypnúť zobrazenie grafu v pravom bočnom paneli vašej stránky.                                                                  |
| Zobraziť tabuľku obsahu  | Prepínač | Zapnúť alebo vypnúť zobrazenie [[Prehľad|tabuľky obsahu]] na vašej stránke.                                                                |
| Zobraziť spätné odkazy   | Prepínač | Zapnúť alebo vypnúť [[Spätné odkazy]] na vašej stránke.                                                                                    |

### Iné nastavenia stránky

| Možnosť                                  | Typ      | Popis                                                                                                                                      |
| ----------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Heslá                                     | Tlačidlo | [[Obsidian Publish/Bezpečnosť a súkromie#Add a site password\|Nastavte heslo]] na obmedzenie prístupu k celej vašej stránke.                |
| Sledovací kód Google Analytics            | Vstup    | **Iba pre vlastnú doménu**. Sem vložte sledovací kód Google Analytics pre vašu stránku.                                                   |
