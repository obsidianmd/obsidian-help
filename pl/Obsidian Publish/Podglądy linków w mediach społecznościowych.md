---
permalink: publish/social-share
---
Wiele sieci społecznościowych wyświetla bogaty podgląd Twojej strony internetowej, gdy użytkownik udostępnia do niej link. Używając [[Atrybuty|Atrybutów]], możesz dostosować sposób, w jaki Twoje notatki wyglądają w podglądzie.

> [!warning] Ostrzeżenie
> Tagi nadpisane w tej sekcji są widoczne **tylko** dla robotów indeksujących. Zwykłe przeglądarki internetowe otrzymują niezmodyfikowaną stronę ze względu na wydajność.

## Opis

Obsidian automatycznie generuje opis na podstawie treści notatki, ale możesz podać własny, używając `description`.

```yaml
---
description: Wprowadzenie do naszego układu słonecznego.
---
```

> [!note] Znaczniki meta
> `description` nadpisuje automatycznie wygenerowany opis w `<meta name="description" content="...">` oraz odpowiedniki dla `og:description` i `twitter:description`.

## Obraz

Możesz użyć niestandardowego obrazu do podglądu linku, dodając `image` lub `cover` ze ścieżką do obrazu. Obraz musi być przesłany do Publish.

Ścieżka może być ścieżką bezwzględną od katalogu głównego Twojego sejfu:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Ścieżka do obrazu uwzględnia wielkość liter. W naszym poprzednim przykładzie mamy ścieżkę do obrazu o nazwie `Cover image.png`. Poniższa ścieżka nie zadziała, ponieważ używa nieprawidłowej wielkości liter.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Zamiast ścieżki bezwzględnej w sejfie możesz również użyć zewnętrznego adresu URL:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` i `cover` są identyczne. Używaj tylko jednego z nich.

> [!note] Znaczniki meta
> `image` i `cover` nadpisują automatycznie wygenerowany obraz w `<meta property="og:image" content="...">`.
