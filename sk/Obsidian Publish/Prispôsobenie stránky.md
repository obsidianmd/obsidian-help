---
permalink: publish/customize
publish: true
description: 'Zistite, ako prispôsobiť vzhľad a štýl vašej stránky Obsidian Publish.'
---
Táto stránka vysvetľuje, ako si môžete prispôsobiť vzhľad a štýl vašej stránky [[Úvod do Obsidian Publish|Obsidian Publish]].

## Statické súbory

Svoju stránku si môžete prispôsobiť [[Publikovanie obsahu#Publikovanie poznámok|publikovaním]] nasledujúcich súborov na vašu stránku:

- `publish.css` na pridanie vlastného CSS
- `publish.js` na pridanie vlastného JavaScriptu
- `favicon-32x32.png` na nastavenie faviconu

**Poznámky:**

- [CSS premenné pre Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) nájdete na našej dokumentačnej stránke.
- Keďže Obsidian nepodporuje CSS ani JavaScript súbory, na ich vytváranie a úpravu musíte použiť inú aplikáciu.
- `publish.css` aj `publish.js` musia byť umiestnené v koreňovom adresári (`/`) vášho trezora.
- Predvolene sa `publish.css` a `publish.js` nezobrazujú v prieskumníkovi súborov, ale stále ich môžete publikovať z dialógového okna **Publikovať zmeny**.
- Na použitie vlastného JavaScriptu s `publish.js` potrebujete [[Vlastné domény]].

Pre favicony Obsidian Publish podporuje nasledujúce konvencie pomenovania, kde `32` predstavuje rozmery ikony v pixeloch:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Odporúčame poskytnúť jeden alebo viac z nasledujúcich rozmerov:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Favicony môžete umiestniť kdekoľvek v trezore, pokiaľ sú publikované na vašu stránku.

## Použitie komunitnej témy

Na použitie jednej z komunitných tém pre vašu stránku:

1. Otvorte váš trezor v predvolenom prieskumníkovi súborov vášho operačného systému.
2. Prejdite do priečinka nastavení trezora (predvolene: `.obsidian`).
3. Otvorte priečinok `themes`.
4. Skopírujte CSS súbor témy, ktorú chcete použiť pre vašu stránku.
5. Vložte súbor do koreňového priečinka vášho trezora.
6. Premenujte CSS súbor na `publish.css`.
7. [[Publikovanie obsahu#Publikovanie poznámok|Publikujte]] `publish.css`.

**Poznámky:**

- Ak sa štýl neaktualizuje do niekoľkých minút, skúste obnoviť vyrovnávaciu pamäť prehliadača.
- Medzi svetlým a tmavým režimom môžete prepínať v [[Spravovať stránky#Zobrazenie nastavení stránky|nastaveniach stránky]].
- Mnohé komunitné témy používajú **Style Settings** na vlastné štýlovanie, ale tieto nastavenia nefungujú na Obsidian Publish.

> [!tip] Vývoj tém
> Nenašli ste tému pre vás? Naučte sa, ako [vytvoriť Publish tému](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) sami.

## Zapnutie funkcií používateľského rozhrania

Pre svoju stránku môžete prepínať niekoľko funkcií používateľského rozhrania, ako napríklad zobrazenie grafu alebo obsah.

Dostupné funkcie používateľského rozhrania nájdete v sekciách **Zážitok z čítania** a **Komponenty** v [[Spravovať stránky#Zobrazenie nastavení stránky|nastaveniach stránky]].

### Prispôsobenie navigácie

V rámci Obsidian Publish máte možnosť prispôsobiť poradie navigácie a zobrazenie súborov a priečinkov v [[Prieskumník súborov|prieskumníkovi súborov]] Publish. Položky navigácie sú predvolene zoradené v poradí publikovania. Nepublikované poznámky sa v tomto paneli nezobrazia.

#### Prístup k možnostiam prispôsobenia navigácie

1. Na [[Panel nástrojov|paneli nástrojov]] vyberte **Publikovať zmeny** ![[lucide-send.svg#icon]] alebo otvorte [[Paleta príkazov|paletu príkazov]] a napíšte **Publish: Publish changes...**
2. V dialógovom okne **Publikovať zmeny** vyberte **Zmeniť možnosti stránky** ![[lucide-cog.svg#icon]].
3. V časti **Nastavenia komponentov** vedľa **Prispôsobiť navigáciu** vyberte tlačidlo **Spravovať**.

Nad oknom **Zmeniť možnosti stránky** sa zobrazí nové vyskakovacie okno s názvom **Navigácia**.

#### Úprava položiek navigácie

V sekcii označenej **Náhľad navigácie** môžete upraviť poradie zobrazenia vášho publikovaného obsahu.

1. Vyberte priečinok alebo poznámku, ktorú chcete upraviť.
2. Presuňte poznámku alebo priečinok nahor alebo nadol, kým nebude na požadovanom mieste.
3. V pravom dolnom rohu okna **Navigácia** vyberte **Hotovo**.

Publish odošle vaše zmeny navigácie na vašu stránku.

#### Skrytie a zobrazenie položiek navigácie

Ak máte publikované poznámky alebo priečinky, ktoré nechcete mať viditeľné v navigácii, môžete tieto položky skryť.

1. Vyberte priečinok alebo poznámku, ktorú chcete upraviť.
2. Kliknite pravým tlačidlom a vyberte **Skryť v navigácií**. Položka by teraz mala zmiznúť z **Náhľadu navigácie**.
3. V pravom dolnom rohu okna **Navigácia** vyberte **Hotovo**.

Publish odošle vaše zmeny navigácie na vašu stránku.

> [!tip] Skryté súbory môžete **Zobraziť skryté** zaškrtnutím políčka napravo od nadpisu **Náhľad navigácie**

## Často kladené otázky

**Môžem presúvať súbory z jedného priečinka do druhého v rámci navigácie?**

Nie. Štruktúra navigácie súborov pre poznámky v priečinkoch musí byť zachovaná. Môžete upraviť poradie poznámok v priečinkoch (vrátane koreňového priečinka trezora) a poradie priečinkov v iných priečinkoch.

**Môžem upraviť poradie viacerých poznámok a priečinkov pred výberom Hotovo?**

Áno.

**Ako môžem vrátiť tieto zmeny?**

- **Poradie zobrazenia**: Vyberte ikonu **Obnoviť predvolené** (šípka rotujúca proti smeru hodinových ručičiek) vedľa **Poradie zobrazenia položky navigácie**. Tým sa obnoví abecedné poradie vašich položiek navigácie.
- **Stav skrytia**: Vyberte ikonu **Obnoviť predvolené** (šípka rotujúca proti smeru hodinových ručičiek) vedľa **Skryť stránky alebo priečinky z navigácie**. Tým sa obnovia vaše skryté položky navigácie do viditeľného stavu.
