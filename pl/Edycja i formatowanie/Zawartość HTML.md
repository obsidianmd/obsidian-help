---
permalink: html
publish: true
mobile: true
description: 'Dowiedz się, jak używać HTML w Obsidian, w tym ograniczenia związane z renderowaniem Markdown oraz wymagania dotyczące bloków HTML.'
---
Obsidian obsługuje HTML, aby umożliwić wyświetlanie notatek w dowolny sposób, a nawet [[Osadzanie stron internetowych|osadzanie stron internetowych]]. Zezwolenie na HTML wewnątrz notatek wiąże się z ryzykiem. Aby zapobiec wyrządzaniu szkód przez złośliwy kod, Obsidian _sanityzuje_ każdy HTML w Twoich notatkach.

> [!example] 
> Element `<script>` normalnie pozwala na uruchomienie kodu JavaScript za każdym razem, gdy się ładuje. Gdyby Obsidian nie sanityzował HTML, atakujący mógłby nakłonić Cię do wklejenia tekstu zawierającego JavaScript, który wydobywa wrażliwe informacje z Twojego komputera i wysyła je z powrotem do atakującego.

Mimo to, ponieważ składnia Markdown nie obsługuje wszystkich form stylizacji, użycie sanityzowanego HTML może być jeszcze jednym sposobem na poprawę jakości Twoich notatek. Poniżej zamieściliśmy kilka najczęstszych zastosowań HTML.

## Ograniczenia HTML

Obsidian ma określone ograniczenia dotyczące używania HTML w notatkach:

### Brak Markdown wewnątrz HTML

Obsidian nie renderuje składni Markdown wewnątrz elementów HTML. Jest to celowa decyzja projektowa mająca na celu optymalizację wydajności i utrzymanie niskiej złożoności parsera przy zarządzaniu dużymi dokumentami.

Na przykład poniższy kod nie zadziała zgodnie z oczekiwaniami:

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### Bloki HTML muszą być samowystarczalne

Bloki HTML muszą być kompletne i nie mogą zawierać pustych linii. Puste linie przerwą blok HTML.

To zadziała:

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

To nie zadziała poprawnie:

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### Kiedy Markdown wydaje się działać w HTML

Niektóre inline'owe tagi HTML, takie jak `<span>` czy `<a>`, mają ograniczoną funkcjonalność i mogą wydawać się renderować Markdown, ale w rzeczywistości tak się nie dzieje. Markdown jest przetwarzany poza kontekstem HTML.

Więcej szczegółów na temat tego, jak Obsidian obsługuje Markdown, znajdziesz w [[Obsidian Flavored Markdown]].

## Typowe zastosowania HTML

> [!info] Więcej szczegółów na temat używania `<iframe>` znajdziesz w [[Osadzanie stron internetowych]].

### Komentarze

[[Podstawowa składnia formatowania#Komentarze|Komentarze Markdown]] są preferowanym sposobem dodawania ukrytych komentarzy w notatkach. Jednak niektóre metody konwersji notatek Markdown, takie jak [Pandoc](https://pandoc.org), mają ograniczone wsparcie dla komentarzy Markdown. W takich przypadkach możesz zamiast tego użyć `<!-- HTML Comment -->`!

### Podkreślenie

Jeśli potrzebujesz szybko podkreślić element w swoich notatkach, możesz użyć `<u>Przykład</u>`, aby utworzyć <u>podkreślony tekst</u>.

### Span/Div

Tagi span i div mogą być używane do stosowania niestandardowych klas z [[Snippety CSS|snippetu CSS]] lub niestandardowej stylizacji na wybranym fragmencie tekstu. Na przykład użycie `<span style="font-family: cursive">Twój tekst</span>` pozwala szybko <span style="font-family: cursive">zmienić czcionkę</span>.

## Przekreślenie

Potrzebujesz przekreślić <s>jakiś tekst</s>? Użyj `<s>tego</s>`, aby go przekreślić.
