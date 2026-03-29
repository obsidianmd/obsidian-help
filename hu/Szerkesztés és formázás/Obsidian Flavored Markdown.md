---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Ismerje meg az Obsidian ízesítésű Markdownt, beleértve a támogatott bővítményeket és a Markdown HTML-elemekkel való együttműködését.'
---
Az Obsidian a maximális képességekre törekszik anélkül, hogy bármely meglévő formátumot megsértené. Ennek eredményeként a [[Alapvető formázási szintaxis|Markdown]] különböző változatainak kombinációját használjuk.

Az Obsidian támogatja a [CommonMark](https://commonmark.org/), a [GitHub Flavored Markdown](https://github.github.com/gfm/) és a [LaTeX](https://www.latex-project.org/) formátumokat.

> [!tip]- Markdown HTML-en belül
> Az Obsidian nem rendereli a Markdown szintaxist HTML elemeken belül. Ez egy tudatos tervezési döntés a teljesítmény optimalizálása és az elemző bonyolultságának alacsonyan tartása érdekében nagy dokumentumok kezelésekor.
>
> Például a Markdown formázások, mint a `**félkövér**` vagy a `` `kód` ``, nem kerülnek feldolgozásra `<div>`, `<span>`, `<table>` vagy bármely más HTML címkén belül.
>
> ```md
> <div>
> Ez **nem lesz** félkövér.
> </div>
> ```

### Támogatott Markdown kiterjesztések

| Szintaxis       | Leírás                                                                         |
| --------------- | ------------------------------------------------------------------------------ |
| `[[Hivatkozás]]`      | [[Belső hivatkozások]]                                                  |
| `![[Hivatkozás]]`     | [[Fájlok beágyazása]]                                                  |
| `![[Hivatkozás#^id]]` | [[Belső hivatkozások#Hivatkozás egy jegyzet blokkjára\|Blokkhivatkozások]]   |
| `^id`           | [[Belső hivatkozások#Hivatkozás egy jegyzet blokkjára\|Blokk meghatározása]] |
| `[^id]`         | [[Alapvető formázási szintaxis#Lábjegyzetek\|Lábjegyzetek]]             |
| `%%Szöveg%%`    | [[Alapvető formázási szintaxis#Megjegyzések\|Megjegyzések]]             |
| `~~Szöveg~~`    | [[Alapvető formázási szintaxis#Félkövér, dőlt, kiemelések\|Áthúzás]]   |
| `==Szöveg==`    | [[Alapvető formázási szintaxis#Félkövér, dőlt, kiemelések\|Kiemelések]] |
| `` ``` ``       | [[Alapvető formázási szintaxis#Kódblokkok\|Kódblokkok]]                 |
| `- [ ]`         | [[Alapvető formázási szintaxis#Teendőlisták\|Befejezetlen feladat]]     |
| `- [x]`         | [[Alapvető formázási szintaxis#Teendőlisták\|Befejezett feladat]]       |
| `> [!note]`     | [[Felhívások]]                                                          |
| (lásd a hivatkozást) | [[Haladó formázási szintaxis#Táblázatok\|Táblázatok]]              |
