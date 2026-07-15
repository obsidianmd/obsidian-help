---
permalink: web-clipper/highlight
---
[[Introduction to Obsidian Web Clipper|Web Clipper]] îți permite să evidențiezi text pe paginile web și să selectezi elementele pe care vrei să le salvezi în Obsidian. Evidențierile sunt salvate astfel încât să le poți vedea când revii la o pagină.

Evidențierile pot fi salvate în Obsidian folosind extensia. Poți defini opțiunile pentru evidențiere în setările extensiei.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Folosește evidențierea

Evidențierea poate fi folosită pe pagini web live sau în [[Reader]]. În vizualizarea Reader, crearea unei selecții de text îți oferă opțiunea de a o evidenția.

Poți de asemenea adăuga automat selecțiile la evidențierile tale, activând evidențierea:

- ![[lucide-highlighter.svg#icon]] **Pictograma de evidențiere** din panoul extensiei sau bara de instrumente Reader.
- **Scurtătură de tastatură**, personalizabilă în setările extensiei.
- **Meniul contextual**, prin clic dreapta pe pagina web pe care o vizitezi.

După ce evidențierea este activată, orice text, imagine sau element selectat va fi adăugat la evidențierile tale. Toate metodele de mai sus îți permit de asemenea să ieși din modul de evidențiere.

## Adaugă evidențieri în note

Există trei opțiuni pentru modul în care evidențierile pot fi introduse în notele tale salvate:

- **Evidențiază conținutul paginii** — adaugă evidențierile direct în text folosind [[Obsidian Flavored Markdown|sintaxa]] `==evidențiere==`.
- **Înlocuiește conținutul paginii** — returnează o listă de evidențieri, fără niciun conținut al paginii.
- **Nu face nimic** — returnează conținutul original fără evidențieri.
 
Aceste opțiuni schimbă [[Variables|variabila]] `{{content}}` din șablonul tău. Poți de asemenea adăuga evidențieri direct în șablonul tău folosind variabila `{{highlights}}`, de exemplu:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Vizualizează și caută evidențieri

Toate evidențierile create de tine pot fi vizualizate în pagina ta de evidențieri. Poți deschide această pagină accesând **Setări** → **Evidențiere**.

## Exportă evidențieri

Evidențierile pot fi exportate într-un fișier `.json`, fie din pagina de setări, fie din pagina de evidențieri.
