---
permalink: pdf
publish: true
mobile: true
description: 'Apreneu a visualitzar, cercar i enllaçar PDF a Obsidian, i com exportar una nota com a PDF.'
---
Obsidian obre fitxers PDF en un visor integrat. També podeu incrustar un PDF en una nota, enllaçar un passatge i exportar qualsevol nota com a PDF. Per als tipus de fitxer que Obsidian admet, vegeu [[Formats de fitxer acceptats]].

> [!info]+ Algunes funcions són només per a escriptori
> L'aplicació d'Obsidian en mòbil no pot cercar dins d'un PDF, copiar una cita o un enllaç a una selecció, ni exportar una nota a PDF.

## Obrir un PDF

A l'[[Explorador de fitxers]], seleccioneu un PDF per obrir-lo en una pestanya.

> [!info]+ Les anotacions no estan suportades
> Obsidian no permet afegir anotacions ni ressaltats a un PDF. Per marcar un PDF, utilitzeu una altra aplicació i després obriu el fitxer actualitzat a la vostra cambra forta.

El visor té una barra d'eines amb aquests controls. L'aplicació d'Obsidian en mòbil té la mateixa barra d'eines.

- **Commutar la barra lateral** mostra o amaga la barra lateral, i **Opcions de la barra lateral** canvia el que mostra la barra lateral.
- **Allunyar** i **Apropar** canvien la mida de la pàgina.
- **Opcions de visualització** canvia com es distribueixen les pàgines.
- La casella de pàgina mostra la pàgina actual. Introduïu un número de pàgina per anar-hi.

Per treballar amb el fitxer PDF en si, com canviar-li el nom o moure'l, seleccioneu **Més opcions** ![[lucide-more-horizontal.svg#icon]]. Un PDF té menys elements en aquest menú que una nota. Vegeu [[Menú de més opcions]].

## Navegar per un PDF

Seleccioneu **Opcions de la barra lateral** i després trieu què mostrar.

- **Miniatures** mostra una previsualització petita de cada pàgina.
- **Índex** mostra l'esquema del PDF, si en té un.
- **Revelar pàgina a l'índex** ressalta la pàgina actual a l'índex.

Per enllaçar a una pàgina, feu clic dret a la seva miniatura i seleccioneu **Copiar enllaç a la pàgina N**, on N és el número de pàgina. Enganxeu l'enllaç en una nota.

Per enllaçar a una secció, feu clic dret a una entrada de l'índex i seleccioneu **Copiar enllaç a "Títol"**, on Títol és el nom de l'entrada. En mòbil, mantingueu premuda l'entrada.

## Canviar l'aspecte d'un PDF

Seleccioneu **Opcions de visualització** per canviar la disposició.

- **Ajustar a l'amplada** i **Ajustar a l'alçada** ajusten la pàgina al visor.
- **Pàgina única** mostra una pàgina a la vegada.
- **Dues pàgines (imparell)** mostra les pàgines una al costat de l'altra, començant amb una pàgina imparell a l'esquerra. Per exemple, les pàgines 1 i 2 es mostren juntes, i després les pàgines 3 i 4.
- **Dues pàgines (parell)** mostra les pàgines una al costat de l'altra, començant amb una pàgina parell a l'esquerra. Per exemple, la pàgina 1 es mostra sola, i després les pàgines 2 i 3 es mostren juntes.
- **Adaptar al tema** enfosqueix els colors del PDF quan el vostre tema d'Obsidian és fosc.

## Cercar en un PDF

La cerca dins d'un PDF només està disponible a l'escriptori. L'aplicació d'Obsidian en mòbil no té cerca al visor de PDF.

1. Premeu `Ctrl+F` (Windows i Linux) o `Command+F` (macOS).
2. A **Escriu per començar la cerca...**, introduïu el text que voleu trobar.
3. Seleccioneu la fletxa amunt o avall per moure-us entre les coincidències.

Per canviar com funciona la cerca, utilitzeu aquestes opcions.

- **Coincidència de majúscules i minúscules** fa coincidir exactament les majúscules i minúscules. És el botó **Aa** al camp de cerca.
- **Ressaltar-ho tot** ressalta totes les coincidències. Seleccioneu el botó de configuració al costat de les fletxes per trobar aquesta opció.
- **Coincidir amb diacrítics** tracta les lletres amb accents com a lletres diferents. Es troba al mateix menú de configuració.
- **Paraules completes** cerca només paraules completes. Es troba al mateix menú de configuració.

Seleccioneu el botó de tancar per sortir de la cerca.

## Copiar text d'un PDF

A l'escriptori, seleccioneu text al PDF i feu clic dret.

- **Copia** copia el text.
- **Copiar com a cita** copia el text com una cita, seguit d'un enllaç al passatge.
- **Copiar enllaç a la selecció** copia un enllaç a aquell passatge, per poder-lo enganxar en una nota.

Una cita té aquest aspecte quan l'enganxeu en una nota.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Un enllaç a una selecció té el mateix enllaç sol.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

En mòbil, seleccionar text en un PDF mostra el menú de text estàndard del vostre dispositiu. **Copiar com a cita** i **Copiar enllaç a la selecció** no estan disponibles.

## Incrustar un PDF

Per mostrar un PDF dins d'una nota, vegeu com [[Incrustar fitxers#Incrustar un PDF en una nota|incrustar un PDF en una nota]]. Un PDF incrustat té la mateixa barra d'eines que el visor. Seleccioneu **Edita aquest bloc** per canviar l'enllaç d'incrustació.

## Exportar una nota a PDF

Podeu exportar qualsevol nota com a PDF a l'escriptori. L'exportació a PDF no està disponible a l'aplicació d'Obsidian en mòbil.

1. Obriu la nota que voleu exportar.
2. Obriu la [[Paleta d'ordres]] i seleccioneu **Exporta a PDF...**. També podeu seleccionar **Més opcions** ![[lucide-more-horizontal.svg#icon]] a la nota, i després seleccionar **Exporta a PDF...**.
3. Trieu la vostra configuració.
    - **Inclou el nom del fitxer com a títol** afegeix el nom del fitxer a la part superior del PDF.
    - **Mida de pàgina** estableix la mida del paper. Podeu triar A3, A4, A5, Legal, Letter o Tabloid.
    - **Horitzontal** gira les pàgines de costat.
    - **Marge** estableix el marge de la pàgina a **Per defecte**, **Mínim** o **Cap**.
    - **Redueix la mida en percentatge** escala el contingut de cada pàgina. A 100, el contingut manté la mida completa. Valors més baixos fan el text i les imatges més petits, de manera que cap més contingut a cada pàgina.
4. Seleccioneu **Exporta a PDF**.
5. Trieu on desar el fitxer.

> [!tip]- Exportar una nota amb un tema fosc
> Les exportacions sempre utilitzen estils clars, fins i tot si el vostre tema és fosc. Per canviar l'aspecte d'una exportació, podeu utilitzar un [[Pedaços de CSS|fragment de CSS]]. El fòrum d'Obsidian té exemples de fragments per a impressió i exportació.[^1]

[^1]: Vegeu [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) i [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
