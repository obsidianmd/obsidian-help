---
aliases: front matter
---

YAML front matter to sposób w jaki metadane na poziomie pliku żyją w Obsidianie.

Front matter jest zasadniczo sekcją atrybutów zwykłego tekstu umieszczoną na samej górze pliku. Front matter został spopularyzowany przez statyczne generatory takie jak Jekyll, Hugo i Gatsby. Jest to jeden z najpopularniejszych sposobów na umieszczenie metadanych w pliku Markdown.

Front matter to blok YAML z **potrójnymi myślnikami** przed i po. ==Musi być także umieszczony na samej górze pliku.==

Na przykład:

```
---
klucz: wartość
klucz2: wartość2
klucz3: [jeden, dwa, trzy]
klucz4:
- cztery
- pięć
- sześć
---
```

Od wersji 0.9.17, [[Dodawanie aliasów do notatek|alias]] używa front matter. Stopniowo będziemy czynić front matter bardziej przystępnym dla twórców pluginów i bardziej przyjaznym dla użytkownika.

Obecnie natywnie obsługiwane są trzy klucze: `tags` (tagi), `aliases` (aliasy) oraz `cssclass` (klasa CSS).