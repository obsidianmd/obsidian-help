---
permalink: callouts
publish: true
mobile: true
description: 'Tato stránka popisuje, jak používat popisky k zahrnutí dalšího obsahu, aniž by byl narušen tok vašich poznámek.'
---
Použijte zvýrazněné bloky pro zahrnutí doplňujícího obsahu, aniž byste narušili tok svých poznámek.

Pro vytvoření zvýrazněného bloku přidejte `[!info]` na první řádek blokové citace, kde `info` je _identifikátor typu_. Identifikátor typu určuje vzhled a chování zvýrazněného bloku. Pro zobrazení všech dostupných typů se podívejte na [[#Podporované typy]]. Zvýrazněné bloky jsou nativně podporovány také na [[Úvod do Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Zde je název zvýrazněného bloku
> Zde je zvýrazněný blok.
> Podporuje **Markdown**, [[Interní odkazy|wiki odkazy]] a [[Vkládání souborů|embedy]]!
> ![[Engelbart.jpg]]
```

> [!info] Zde je název zvýrazněného bloku
> Zde je zvýrazněný blok.
> Podporuje **Markdown**, [[Interní odkazy|wiki odkazy]] a [[Vkládání souborů|embedy]]!
> ![[Engelbart.jpg]]

Výchozí zvýrazněný blok `[!note]` můžete vložit pomocí [[Paleta příkazů|příkazu]] `Vložit zvýrazněný blok`. Kurzor se automaticky umístí do pole názvu zvýrazněného bloku, takže můžete smazat výchozí název a zadat nový před úpravou obsahu.

Pro zabalení existujícího obsahu do zvýrazněného bloku vyberte text (včetně seznamů, bloků kódu atd.) a spusťte příkaz `Vložit zvýrazněný blok`. Vybraný obsah bude automaticky uzavřen do zvýrazněného bloku.

V [[Zobrazení a režim úprav#Živý náhled|živém náhledu]] můžete také kliknout pravým tlačítkem na název zvýrazněného bloku a změnit typ zvýrazněného bloku.


### Změna názvu

Ve výchozím nastavení je název zvýrazněného bloku jeho identifikátor typu s velkým počátečním písmenem. Můžete jej změnit přidáním textu za identifikátor typu:

```markdown
> [!tip] Zvýrazněné bloky mohou mít vlastní názvy
> Jako tento.
```

> [!tip] Zvýrazněné bloky mohou mít vlastní názvy
> Jako tento.

Můžete dokonce vynechat tělo a vytvořit zvýrazněné bloky obsahující pouze název:

```markdown
> [!tip] Zvýrazněný blok pouze s názvem
```

> [!tip] Zvýrazněný blok pouze s názvem

### Sbalitelné zvýrazněné bloky

Zvýrazněný blok můžete učinit sbalitelným přidáním znaménka plus (`+`) nebo minus (`-`) přímo za identifikátor typu.

Znaménko plus ve výchozím stavu zvýrazněný blok rozbalí, znaménko minus jej naopak sbalí.

```markdown
> [!faq]- Jsou zvýrazněné bloky sbalitelné?
> Ano! Ve sbalitelném zvýrazněném bloku je obsah skryt, když je zvýrazněný blok sbalený.
```

> [!faq]- Jsou zvýrazněné bloky sbalitelné?
> Ano! Ve sbalitelném zvýrazněném bloku je obsah skryt, když je sbalený.

### Vnořené zvýrazněné bloky

Zvýrazněné bloky můžete vnořovat do více úrovní.

```markdown
> [!question] Mohou být zvýrazněné bloky vnořené?
> > [!todo] Ano!, mohou.
> > > [!example] Můžete dokonce použít více úrovní vnoření.
```

> [!question] Mohou být zvýrazněné bloky vnořené?
> > [!todo] Ano!, mohou.
> > > [!example] Můžete dokonce použít více úrovní vnoření.

### Přizpůsobení zvýrazněných bloků

[[CSS úryvky]] a [[Komunitní pluginy]] mohou definovat vlastní zvýrazněné bloky nebo dokonce přepsat výchozí konfiguraci.

Pro definici vlastního zvýrazněného bloku vytvořte následující CSS blok:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Hodnota atributu `data-callout` je identifikátor typu, který chcete použít, například `[!custom-question-type]`.

- `--callout-color` definuje barvu pozadí pomocí čísel (0–255) pro červenou, zelenou a modrou.
- `--callout-icon` může být ID ikony z [lucide.dev](https://lucide.dev) nebo SVG element.

> [!warning] Poznámka k verzím ikon lucide
> Obsidian pravidelně aktualizuje ikony Lucide. Aktuálně zahrnutá verze je uvedena níže; v vlastních zvýrazněných blocích používejte tyto nebo starší ikony.
> ![[Zásluhy#^lucide]]

> [!tip] SVG ikony
> Místo ikony Lucide můžete také použít SVG element jako ikonu zvýrazněného bloku.
>
> ```css
> --callout-icon: '<svg>...vlastní svg...</svg>';
> ```

### Podporované typy

Můžete použít několik typů zvýrazněných bloků a aliasů. Každý typ má jinou barvu pozadí a ikonu.

Pro použití těchto výchozích stylů nahraďte `info` v příkladech kterýmkoli z těchto typů, například `[!tip]` nebo `[!warning]`. Typy zvýrazněných bloků lze také změnit kliknutím pravým tlačítkem na zvýrazněný blok v režimu živého náhledu.

Pokud [[#Přizpůsobení zvýrazněných bloků|nepřizpůsobíte zvýrazněné bloky]], jakýkoli nepodporovaný typ se ve výchozím nastavení změní na typ `note`. Identifikátor typu nerozlišuje velká a malá písmena.

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
