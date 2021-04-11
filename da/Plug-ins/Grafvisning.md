Viser en grafrepræsentation af de [[Interne links|interne links]] mellem dine noter.

Noter, som har flest noter referende til sig, vil optræde som større knudpunkter på grafen.

![[Pasted image 10.png]]

### Visualiserings tips

- Du kan føre musemarkøren over hver knudepunkt for at fremhæve dets forbindelser, og andre vil blive udtonet.
- Du kan trække knudepunkter rundt for at omarrangere grafen. Det kan være praktisk hvis nogle knudepunkter overlapper andre.

### Navigations tips

- For at zoome grafen kan du benytte musens hjul, såvel som `+` og `-` tasterne.
- For at panorere rundt på grafen, så træk baggrunden med musen eller benyt tastaturets piletaster.
- Hvis du holder `Shift` inde, når du navigere via tastaturet, så øges hastigheden.

### Brugerdefineret CSS
Da grafen er gengivet ved hjælp af `<canvas>` og WebGL, vil [[Tilpas med CSS|CSS]] ikke kunne ændre på knudepunkter og links. For at tilpasse grafvisningen har vi stillet en måde til rådighed, så CSS farver kan konverteres til WebGK kommandoer.

#### Følgende CSS klasser er understøttet:

```
.graph-view.color-fill
.graph-view.color-fill-tag (tema-afhængigt)
.graph-view.color-fill-attachment (tema-afhængigt)
.graph-view.color-arrow
.graph-view.color-circle
.graph-view.color-line
.graph-view.color-text
.graph-view.color-fill-highlight
.graph-view.color-line-highlight
.graph-view.color-fill-unresolved
```

\* tema-afhængigt betyder at du muligvis bliver nødt til at tilføje `.theme-dark` eller `.theme-light` for at tilpasse dem til forskellige temaer. Se [[Grafvisning#Brugerdefineret CSS#Standard]] for en forklaring.

#### De følgende CSS regler er understøttet:

```css
 .graph-view.color-class {
	/* Understøtter alle CSS farve direktiver, såsom #HEX, rgb and rgba */
	color:   #FFF;
	color:   #FFFFFF;
	color:   rgb(0, 0, 0);
	color:   rgba(0, 0, 0, 1);
	/* Gennemsigtighed (Ligesom rgba) vil gøre farven transparent */
	opacity: 0.5;
}
```

#### Standard:
Disse CSS regler er dem, som Obsidian benytter som standard. Du kan overstyre dem alle ved at benyte en identisk eller en [mere specifik](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) CSS regel. Dette gælder især for `.color-fill-tag` og `.color-fill-attachment`. Som en sidste mulighed, tilføj `!important` i slutningen af din regel.

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