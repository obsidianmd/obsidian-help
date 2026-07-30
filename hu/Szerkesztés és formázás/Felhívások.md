---
permalink: callouts
publish: true
mobile: true
description: 'Ez az oldal részletezi, hogyan használhatsz kiemeléseket további tartalom beillesztéséhez anélkül, hogy megzavarnád a jegyzeteid folyamatosságát.'
---
Használjon felhívásokat további tartalom hozzáadásához anélkül, hogy megzavarná a jegyzetei folyamatát.

Felhívás létrehozásához adja hozzá a `[!info]` elemet egy blokkidézet első sorához, ahol az `info` a _típusazonosító_. A típusazonosító határozza meg a felhívás megjelenését és hangulatát. Az összes elérhető típus megtekintéséhez lásd: [[#Támogatott típusok]]. A felhívásokat az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] is natívan támogatja.

```markdown
> [!info] Íme egy felhívás címe
> Íme egy felhívás blokk.
> Támogatja a **Markdown**-t, a [[Belső hivatkozások|wikihivatkozásokat]] és a [[Fájlok beágyazása|beágyazásokat]]!
> ![[Engelbart.jpg]]
```

> [!info] Íme egy felhívás címe
> Íme egy felhívás blokk.
> Támogatja a **Markdown**-t, a [[Belső hivatkozások|wikihivatkozásokat]] és a [[Fájlok beágyazása|beágyazásokat]]!
> ![[Engelbart.jpg]]

Alapértelmezett `[!note]` felhívást szúrhat be a `Felhívás beszúrása` [[Parancspaletta|parancs]] segítségével. A kurzor automatikusan a felhívás név mezőjébe áll, így törölheti az alapértelmezett nevet, és újat írhat be, mielőtt a tartalmat szerkesztené.

Meglévő tartalom felhívásba csomagolásához jelölje ki a szöveget (beleértve a listákat, kódblokkokat stb.), és futtassa a `Felhívás beszúrása` parancsot. A kijelölt tartalom automatikusan be lesz zárva a felhívásba.

Az [[Nézetek és szerkesztési mód#Élő előnézet|élő előnézetben]] a felhívás nevére jobb egérgombbal kattintva is megváltoztathatja a felhívás típusát.


### Cím megváltoztatása

Alapértelmezés szerint a felhívás címe a típusazonosítója nagybetűs formában. Megváltoztathatja a típusazonosító után írt szöveggel:

```markdown
> [!tip] A felhívásoknak lehet egyéni címe
> Mint ez itt.
```

> [!tip] A felhívásoknak lehet egyéni címe
> Mint ez itt.

A törzset akár el is hagyhatja, hogy csak címből álló felhívásokat hozzon létre:

```markdown
> [!tip] Csak címből álló felhívás
```

> [!tip] Csak címből álló felhívás

### Összecsukható felhívások

A felhívást összecsukhatóvá teheti egy plusz (`+`) vagy mínusz (`-`) jel hozzáadásával közvetlenül a típusazonosító után.

A plusz jel alapértelmezés szerint kibontja a felhívást, a mínusz jel pedig összecsukja.

```markdown
> [!faq]- Összecsukhatók a felhívások?
> Igen! Egy összecsukható felhívásban a tartalom rejtett, amikor a felhívás össze van csukva.
```

> [!faq]- Összecsukhatók a felhívások?
> Igen! Egy összecsukható felhívásban a tartalom rejtett, amikor össze van csukva.

### Egymásba ágyazott felhívások

A felhívásokat több szinten is egymásba ágyazhatja.

```markdown
> [!question] Egymásba ágyazhatók a felhívások?
> > [!todo] Igen, lehetséges.
> > > [!example] Akár több szintű egymásba ágyazást is használhat.
```

> [!question] Egymásba ágyazhatók a felhívások?
> > [!todo] Igen, lehetséges.
> > > [!example] Akár több szintű egymásba ágyazást is használhat.

### Felhívások testreszabása

A [[CSS kódrészletek]] és a [[Közösségi bővítmények]] egyéni felhívásokat definiálhatnak, vagy akár felülírhatják az alapértelmezett konfigurációt.

Egyéni felhívás definiálásához hozza létre a következő CSS blokkot:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

A `data-callout` attribútum értéke a használni kívánt típusazonosító, például `[!custom-question-type]`.

- A `--callout-color` a háttérszínt határozza meg számokkal (0–255) a piros, zöld és kék értékekhez.
- A `--callout-icon` lehet egy ikon-azonosító a [lucide.dev](https://lucide.dev) oldalról, vagy egy SVG elem.

> [!warning] Megjegyzés a lucide ikonverziókról
> Az Obsidian időszakosan frissíti a Lucide ikonokat. A jelenleg tartalmazott verzió az alábbiakban látható; egyéni felhívásokban ezeket vagy korábbi ikonokat használjon.
> ![[Közreműködők#^lucide]]

> [!tip] SVG ikonok
> Lucide ikon helyett SVG elemet is használhat felhívás ikonként.
>
> ```css
> --callout-icon: '<svg>...egyéni svg...</svg>';
> ```

### Támogatott típusok

Számos felhívástípust és álnevet használhat. Minden típushoz más háttérszín és ikon tartozik.

Ezen alapértelmezett stílusok használatához cserélje le az `info` szót a példákban bármelyik típusra, például `[!tip]` vagy `[!warning]`. A felhívás típusát az élő előnézet módban a felhívásra jobb egérgombbal kattintva is megváltoztathatja.

Hacsak nem [[#Felhívások testreszabása|szabja testre a felhívásokat]], minden nem támogatott típus alapértelmezés szerint a `note` típust veszi fel. A típusazonosító nem különbözteti meg a kis- és nagybetűket.

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

Álnevek: `summary`, `tldr`

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

Álnevek: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Álnevek: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Álnevek: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Álnevek: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Álnevek: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Álnév: `error`

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

Álnév: `cite`
