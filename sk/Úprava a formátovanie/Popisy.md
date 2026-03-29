---
permalink: callouts
publish: true
mobile: true
description: 'Táto stránka popisuje, ako používať bubliny na zahrnutie doplnkového obsahu bez narušenia toku vašich poznámok.'
---
Použite zvýraznené bloky na pridanie doplnkového obsahu bez narušenia toku vašich poznámok.

Ak chcete vytvoriť zvýraznený blok, pridajte `[!info]` na prvý riadok blokovej citácie, kde `info` je _identifikátor typu_. Identifikátor typu určuje, ako zvýraznený blok vyzerá a pôsobí. Ak chcete vidieť všetky dostupné typy, pozrite si [[#Podporované typy]]. Zvýraznené bloky sú natívne podporované aj na [[Úvod do Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Toto je názov zvýrazneného bloku
> Toto je zvýraznený blok.
> Podporuje **Markdown**, [[Interné odkazy|Wiki odkazy]] a [[Vkladanie súborov|vloženia]]!
> ![[Engelbart.jpg]]
```

> [!info] Toto je názov zvýrazneného bloku
> Toto je zvýraznený blok.
> Podporuje **Markdown**, [[Interné odkazy|Wiki odkazy]] a [[Vkladanie súborov|vloženia]]!
> ![[Engelbart.jpg]]

Predvolený zvýraznený blok `[!note]` môžete vložiť pomocou [[Paleta príkazov|príkazu]] `Vložiť popis`. Kurzor sa automaticky umiestni do poľa názvu zvýrazneného bloku, čo vám umožní vymazať predvolený názov a napísať nový pred úpravou obsahu.

Ak chcete existujúci obsah zabaliť do zvýrazneného bloku, vyberte text (vrátane zoznamov, blokov kódu atď.) a spustite príkaz `Vložiť popis`. Vybraný obsah bude automaticky uzavretý v zvýraznenom bloku.

V [[Zobrazenia a režim úprav#Živý náhľad|živom náhľade]] môžete tiež kliknúť pravým tlačidlom myši na názov zvýrazneného bloku a zmeniť jeho typ.


### Zmena názvu

Predvolene je názov zvýrazneného bloku jeho identifikátor typu s veľkým začiatočným písmenom. Môžete ho zmeniť pridaním textu za identifikátor typu:

```markdown
> [!tip] Zvýraznené bloky môžu mať vlastné názvy
> Ako tento.
```

> [!tip] Zvýraznené bloky môžu mať vlastné názvy
> Ako tento.

Môžete dokonca vynechať telo a vytvoriť zvýraznené bloky len s názvom:

```markdown
> [!tip] Zvýraznený blok len s názvom
```

> [!tip] Zvýraznený blok len s názvom

### Zbaliteľné zvýraznené bloky

Zvýraznený blok môžete urobiť zbaliteľným pridaním znamienka plus (`+`) alebo mínus (`-`) priamo za identifikátor typu.

Znamienko plus predvolene rozbalí zvýraznený blok a znamienko mínus ho naopak zbalí.

```markdown
> [!faq]- Sú zvýraznené bloky zbaliteľné?
> Áno! V zbaliteľnom zvýraznenom bloku je obsah skrytý, keď je zvýraznený blok zbalený.
```

> [!faq]- Sú zvýraznené bloky zbaliteľné?
> Áno! V zbaliteľnom zvýraznenom bloku je obsah skrytý, keď je zbalený.

### Vnorené zvýraznené bloky

Zvýraznené bloky môžete vnárať do viacerých úrovní.

```markdown
> [!question] Môžu byť zvýraznené bloky vnorené?
> > [!todo] Áno!, môžu.
> > > [!example] Môžete dokonca použiť viacero úrovní vnorenia.
```

> [!question] Môžu byť zvýraznené bloky vnorené?
> > [!todo] Áno!, môžu.
> > > [!example] Môžete dokonca použiť viacero úrovní vnorenia.

### Prispôsobenie zvýraznených blokov

[[CSS snippety]] a [[Komunitné pluginy]] môžu definovať vlastné zvýraznené bloky alebo dokonca prepísať predvolenú konfiguráciu.

Na definovanie vlastného zvýrazneného bloku vytvorte nasledujúci CSS blok:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Hodnota atribútu `data-callout` je identifikátor typu, ktorý chcete použiť, napríklad `[!custom-question-type]`.

- `--callout-color` definuje farbu pozadia pomocou čísel (0–255) pre červenú, zelenú a modrú.
- `--callout-icon` môže byť ID ikony z [lucide.dev](https://lucide.dev), alebo SVG element.

> [!warning] Poznámka o verziách ikon lucide
> Obsidian pravidelne aktualizuje ikony Lucide. Aktuálne zahrnutá verzia je zobrazená nižšie; vo vlastných zvýraznených blokoch používajte tieto alebo staršie ikony.
> ![[Zásluhy#^lucide]]

> [!tip] SVG ikony
> Namiesto ikony Lucide môžete ako ikonu zvýrazneného bloku použiť aj SVG element.
>
> ```css
> --callout-icon: '<svg>...vlastné svg...</svg>';
> ```

### Podporované typy

Môžete použiť niekoľko typov zvýraznených blokov a aliasov. Každý typ má inú farbu pozadia a ikonu.

Na použitie týchto predvolených štýlov nahraďte `info` v príkladoch akýmkoľvek z týchto typov, napríklad `[!tip]` alebo `[!warning]`. Typy zvýraznených blokov je možné zmeniť aj kliknutím pravým tlačidlom myši na zvýraznený blok v režime živého náhľadu.

Pokiaľ si [[#Prispôsobenie zvýraznených blokov|neprispôsobíte zvýraznené bloky]], akýkoľvek nepodporovaný typ sa predvolene zmení na typ `note`. Identifikátor typu nerozlišuje veľké a malé písmená.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Aliasy: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`
