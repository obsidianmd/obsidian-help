---
permalink: plugins/canvas
---
Canvas és un [[Connectors principals|connector principal]] per a la presa de notes visual. Et proporciona un espai infinit per disposar notes i connectar-les amb altres notes, adjunts i pàgines web.

La presa de notes visual t'ajuda a donar sentit a les teves notes organitzant-les en un espai 2D. Connecta notes amb línies i agrupa notes relacionades per comprendre millor la relació entre elles.

Les dades de Canvas que crees a Obsidian es desen com a fitxers `.canvas` utilitzant el format de fitxer obert [JSON Canvas](https://jsoncanvas.org/).

## Crear un nou llenç

Per començar a utilitzar Canvas, primer necessites crear un fitxer per contenir el teu llenç. Pots crear un nou llenç amb els mètodes següents.

**Paleta d'ordres:**

1. Obre la [[Paleta d'ordres]].
2. Selecciona **Canvas: Crea un llenç nou** per crear un llenç a la mateixa carpeta que el fitxer actiu.

**Explorador de fitxers:**

- A l'[[Explorador de fitxers]], fes clic dret a la carpeta on vulguis crear el llenç.
- Selecciona **Nou llenç**.

**Cinta:**

- Al menú vertical de la cinta, selecciona **Crea un llenç nou** ![[lucide-layout-dashboard.svg#icon]] per crear un llenç a la mateixa carpeta que el fitxer actiu.

> [!note] L'extensió de fitxer .canvas
> Obsidian emmagatzema les dades del teu llenç com a fitxers `.canvas` utilitzant un format de fitxer obert anomenat [JSON Canvas](https://jsoncanvas.org/).

## Afegir targetes

Pots arrossegar fitxers al teu llenç des d'Obsidian o des d'altres aplicacions. Per exemple, fitxers Markdown, imatges, àudio, PDFs o fins i tot tipus de fitxer no reconeguts.

### Afegir targetes de text

Pots afegir targetes de només text que no facin referència a cap fitxer. Pots utilitzar Markdown, enllaços i blocs de codi igual que en una nota.

Per afegir una nova targeta de text al teu llenç:

- Selecciona o arrossega la icona de fitxer buit a la part inferior del llenç.

També pots afegir targetes de text fent doble clic al llenç.

Per convertir una targeta de text a un fitxer:

1. Fes clic dret a la targeta de text i selecciona **Converteix a fitxer...**.
2. Introdueix el nom de la nota i selecciona **Desa**.

> [!note] Nota
> Les targetes de només text no apareixen als [[Retroenllaços]]. Per fer-les aparèixer, necessites convertir-les a un fitxer.

### Afegir targetes des de notes

Per afegir una nota de la teva cambra forta al llenç:

1. Selecciona o arrossega la icona de document a la part inferior del llenç.
2. Selecciona la nota que vulguis afegir.

També pots afegir notes des del menú contextual del llenç:

1. Fes clic dret al llenç i selecciona **Afegeix nota de l'arca**.
2. Selecciona la nota que vulguis afegir.

O bé, pots afegir-les al llenç arrossegant el fitxer des de l'[[Explorador de fitxers]].

### Afegir targetes des de mitjans

Per afegir mitjans de la teva cambra forta al llenç:

1. Selecciona o arrossega la icona de fitxer d'imatge a la part inferior del llenç.
2. Selecciona el fitxer multimèdia que vulguis afegir.

També pots afegir mitjans des del menú contextual del llenç:

1. Fes clic dret al llenç i selecciona **Afegeix mitjans de l'arca**.
2. Selecciona el fitxer multimèdia que vulguis afegir.

O bé, pots afegir-los al llenç arrossegant el fitxer des de l'[[Explorador de fitxers]].

### Afegir targetes des de pàgines web

Per incrustar una pàgina web al teu llenç:

1. Fes clic dret al llenç i selecciona **Afegeix pàgina web**.
2. Introdueix l'URL de la pàgina web i selecciona **Desa**.

També pots seleccionar un URL al teu navegador i arrossegar-lo al llenç per incrustar-lo en una targeta.

Per obrir la pàgina web al navegador, prem `Ctrl` (o `Cmd` a macOS) i selecciona l'etiqueta de la targeta. O bé, fes clic dret a la targeta i selecciona **Obre al navegador**.

### Afegir targetes des de carpetes

Arrossega una carpeta des de l'explorador de fitxers per afegir tots els fitxers d'aquella carpeta al llenç.

### Editar una targeta

Fes doble clic a una targeta de text o nota per començar a editar-la. Fes clic fora de la targeta per deixar d'editar-la. També pots prémer `Escape` per deixar d'editar una targeta.

També pots editar una targeta fent-hi clic dret i seleccionant **Edita**.

### Suprimir una targeta

Elimina les targetes seleccionades fent clic dret a qualsevol d'elles i seleccionant **Suprimeix**. O bé, prem `Retrocés` (o `Suprimir` a macOS).

També pots seleccionar **Elimina** ![[lucide-trash-2.svg#icon]] als controls de selecció sobre la teva selecció.

### Intercanviar targetes

Pots intercanviar una targeta de nota o multimèdia per una altra targeta del mateix tipus.

Per intercanviar una targeta de nota:

1. Fes clic dret a la targeta que vulguis substituir.
2. Selecciona **Intercanvia fitxer**.
3. Selecciona la nota amb la qual vulguis substituir-la.

## Seleccionar targetes

Selecciona targetes al llenç fent-hi clic. Pots seleccionar múltiples targetes arrossegant una selecció al seu voltant.

També pots afegir i treure targetes d'una selecció existent prement `Shift` i seleccionant-les.

Prem `Ctrl+a` (o `Cmd+a` a macOS) per seleccionar totes les targetes del llenç.

Per desplaçar el contingut d'una targeta, primer l'has de seleccionar.

### Disposar targetes

Arrossega una targeta seleccionada per moure-la.

Prem `Alt` (o `Option` a macOS) i arrossega per duplicar la selecció.

Pots prémer `Shift` mentre arrossegues per moure en una sola direcció.

Prem `Espai` mentre mous una selecció per desactivar l'ajustament.

Seleccionar una targeta la mou al davant.

### Redimensionar una targeta

Arrossega qualsevol vora d'una targeta per redimensionar-la.

Pots prémer `Espai` mentre redimensiones per desactivar l'ajustament.

Per mantenir la relació d'aspecte mentre redimensiones, prem `Shift` mentre redimensiones.

## Connectar targetes

Dibuixa línies entre targetes per crear relacions entre elles. Utilitza colors i etiquetes per descriure com es relacionen entre si.

### Connectar dues targetes

Per connectar dues targetes amb una línia dirigida:

1. Passa el cursor per sobre d'una de les vores d'una targeta fins que vegis un cercle ple.
2. Arrossega el cercle fins a la vora d'una targeta diferent per connectar-les.

> [!tip] Consell
> Si arrossegues la línia sense connectar-la a una altra targeta, pots afegir la targeta a la qual vulguis connectar-la.

### Desconnectar dues targetes

Per eliminar la connexió entre dues targetes:

1. Passa el cursor per sobre d'una línia de connexió fins que apareguin dos petits cercles a la línia.
2. Arrossega un dels cercles fora de la targeta sense connectar-lo a una altra.

També pots desconnectar dues targetes fent clic dret a la línia entre elles i seleccionant **Elimina**. O bé, seleccionant la línia i prement `Retrocés` (o `Suprimir` a macOS).

### Connectar una targeta a una targeta diferent

Per moure un dels extrems d'una línia de connexió:

1. Passa el cursor per sobre d'una línia de connexió fins que apareguin dos petits cercles a la línia.
2. Arrossega el cercle de l'extrem que vulguis reconnectar cap a una altra targeta.

### Navegar una connexió

Si dues targetes connectades estan lluny l'una de l'altra, pots navegar a l'origen o la destinació de la connexió fent clic dret a la línia i seleccionant **Vés a la destinació** o **Vés a l'origen**.

### Afegir una etiqueta a una connexió

Pots afegir una etiqueta a una línia per descriure la relació entre dues targetes.

Per etiquetar una connexió:

1. Fes doble clic a la línia.
2. Introdueix l'etiqueta i prem `Escape` o fes clic a qualsevol lloc del llenç.

També pots etiquetar una connexió seleccionant-la i seleccionant **Edita l'etiqueta** als controls de selecció.

Per editar l'etiqueta d'una connexió, fes doble clic a la línia o fes clic dret a la línia i selecciona **Edita l'etiqueta**.

### Canviar el color d'una targeta o connexió

1. Selecciona les targetes o connexions que vulguis acolorir.
2. Als controls de selecció, selecciona **Estableix el color** ![[lucide-palette.svg#icon]].
3. Selecciona un color.

## Agrupar targetes

### Agrupar targetes seleccionades

Per crear un grup buit:

- Fes clic dret al llenç i selecciona **Crea grup**.

Per agrupar targetes relacionades:

1. Selecciona les targetes.
2. Fes clic dret a qualsevol de les targetes seleccionades i selecciona **Crea grup**.

**Canvia el nom del grup:** Fes doble clic al nom del grup per editar-lo i prem `Enter` per desar.

## Navegar pel llenç

A mesura que comencis a afegir més targetes al teu llenç, voldràs entendre com pots navegar pel llenç per veure'n una part. Aprèn a arrossegar i ampliar per moure't pel llenç amb facilitat.

### Arrossegar el llenç

Per moure el llenç vertical i horitzontalment, també conegut com a _arrossegament panoràmic_, pots utilitzar qualsevol dels enfocaments següents:

- Prem `Espai` i arrossega el llenç.
- Arrossega el llenç amb el botó central del ratolí.
- Desplaça el ratolí per arrossegar verticalment, i prem `Shift` mentre desplaces per arrossegar horitzontalment.

### Ampliar el llenç

Per ampliar el llenç, prem `Espai` o `Ctrl` (o `Cmd` a macOS) i desplaça amb la roda del ratolí. O bé, selecciona **Apropar** ![[lucide-plus.svg#icon]] i **Allunyar** ![[lucide-minus.svg#icon]] als controls de zoom a la cantonada superior dreta.

#### Ajustar al zoom

Per ampliar el llenç de manera que cada element sigui visible, selecciona **Ajusta al zoom** ![[lucide-maximize.svg#icon]]. O bé, utilitza la drecera de teclat `Shift+1`.

#### Ajustar a la selecció

Per ampliar el llenç de manera que tots els elements seleccionats siguin visibles, fes clic dret a una targeta seleccionada i selecciona **Ajusta a la selecció**. O bé, utilitza una drecera de teclat prement `Shift+2`.

#### Restablir el zoom

Per canviar el nivell de zoom al valor per defecte, selecciona **Restableix el zoom** als controls de zoom a la cantonada superior dreta.

## Consells avançats

Hem creat alguns vídeos ràpids per demostrar alguns usos avançats de Canvas.

Pots [consultar els 72 consells aquí](https://obsidian.md/canvas#protips). Tingues en compte que els vídeos de consells només són visibles a l'escriptori.
