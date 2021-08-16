Pokazuje graficzną reprezentację [[Link wewnętrzny|połączenia wewnętrzne]] pomiędzy Twoimi notatkami.

Notatki z większą ilością odnośników do nich pojawiają się jako większe wierzchołki na wykresie.

![[Wklejony obrazek 10.png]]

### Wskazówki dotyczące wizualizacji

- Możesz najechać kursorem na każdy wierzchołek, aby podświetlić jego połączenia, a wszystkie inne wierzchołki wygasić.
- Możesz przeciągać wierzchołki, aby zmienić układ wykresu. Może to być pomocne, jeśli niektóre wierzchołki nakładają się na inne.

### Wskazówki dotyczące nawigacji

- Do powiększania można użyć kółka myszy, a także klawiszy `+` i `-`.
- Aby przesuwać wokół, przeciągnij tło lub użyj klawiszy strzałek na klawiaturze.
- Przytrzymaj `Shift` podczas nawigacji za pomocą klawiatury, aby przyspieszyć działanie.

### Własny CSS

Ponieważ wykres jest renderowany przy użyciu `<canvas>` i WebGL, [[Dostosowywanie CSS|CSS]] nie jest w stanie wpłynąć na takie rzeczy jak wierzchołki i linki. Aby dostosować widok wykresu, udostępniliśmy sposób na konwersję kolorów CSS na komendy WebGL.

#### Obsługiwane są następujące klasy CSS:

```
.graph-view.color-fill
.graph-view.color-fill-tag (theme-dependent)
.graph-view.color-fill-attachment (theme-dependent)
.graph-view.color-arrow
.graph-view.color-circle
.graph-view.color-line
.graph-view.color-text
.graph-view.color-fill-highlight
.graph-view.color-line-highlight
.graph-view.color-fill-unresolved
```

\* theme-dependent (ang. zależny od motywu) oznacza, że musisz dodać `.theme-dark` lub `.theme-light` jeśli chcesz ostylować go do różnych wariantów. Zobacz [[#Własny CSS#Domyślne]] aby uzyskać wyjaśnienie.

#### Obsługiwane są następujące reguły CSS:

```css
 .graph-view.color-class {
	/* Obsługuje wszystkie dyrektywy kolorów CSS, takie jak #HEX, rgb i rgba */
	color:   #FFF;
	color:   #FFFFFF;
	color:   rgb(0, 0, 0);
	color:   rgba(0, 0, 0, 1);
	/* Krycie (podobne do rgba) sprawi, że kolor będzie przezroczysty */
	opacity: 0.5;
}
```

#### Domyślne

Te reguły CSS są tymi, których Obsidian używa domyślnie. Możesz zastąpić każdą z nich używając identycznej lub [bardziej szczegółowej](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) reguły CSS. Dotyczy to zwłaszcza `.color-fill-tag` i `.color-fill-attachment` W ostateczności, dodaj `!important` na końcu swojej reguły.

```css
.graph-view.color-fill,
.theme-dark .graph-view.color-fill-tag,
.theme-light .graph-view.color-fill-tag,
.theme-dark .graph-view.color-fill-attachment,
.theme-light .graph-view.color-fill-attachment,
.graph-view.color-arrow,
.graph-view.color-circle,
.graph-view.color-line,
.graph-view.color-text,
.graph-view.color-fill-highlight,
.graph-view.color-line-highlight,
.graph-view.color-fill-unresolved {}
```