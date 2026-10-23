---
permalink: plugins/canvas
mobile: true
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

Per mostrar només una part d'una nota en una targeta, fes clic dret a la targeta i selecciona **Redueix a l'encapçalament...** o **Redueix al bloc...**. Després, tria l'encapçalament o el bloc.

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

Per obrir la pàgina web al navegador, prem `Ctrl` (o `Cmd` a macOS) i selecciona l'etiqueta de la targeta. O bé, fes clic dret a la targeta i selecciona **Obre en el navegador**.

Fes clic dret a una targeta de pàgina web per veure més opcions.

- **Copia la URL** copia l'adreça de la pàgina web.
- **Canvia la URL...** canvia l'adreça que mostra la targeta.
- **Recarrega la pàgina** torna a carregar la pàgina web.

### Afegir targetes des de bases

Per mostrar una [[Introducció a Bases|base]] al teu llenç, arrossega el fitxer de base des de l'explorador de fitxers al llenç. La targeta mostra la base.

Una targeta de base mostra la vista per defecte de la base. Per mostrar una vista diferent:

1. Fes clic dret a la targeta i selecciona **Fixa la vista...**.
2. Selecciona la vista que vulguis.

Per tornar a la vista per defecte, selecciona **Fixa la vista...** de nou i després selecciona **Mostra la vista per defecte**.

### Afegir targetes des de carpetes

Arrossega una carpeta des de l'explorador de fitxers per afegir tots els fitxers d'aquella carpeta al llenç.

### Editar una targeta

Fes doble clic a una targeta de text o nota per començar a editar-la. Fes clic fora de la targeta per deixar d'editar-la. També pots prémer `Escape` per deixar d'editar una targeta.

També pots editar una targeta fent-hi clic dret i seleccionant **Edita**. O bé, selecciona la targeta i després selecciona **Edita** ![[lucide-square-pen.svg#icon]] als controls de selecció.

### Suprimir una targeta

Elimina les targetes seleccionades fent clic dret a qualsevol d'elles i seleccionant **Elimina**. O bé, prem `Retrocés` (o `Suprimir` a macOS).

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

### Alinear i disposar targetes

Per alinear diverses targetes, selecciona dues o més targetes. Als controls de selecció, selecciona **Alinea** i després tria una opció.

- **Alinea a l'esquerra**, **Alinea al centre** i **Alinea a la dreta** alineen les targetes en una línia vertical.
- **Alinea a dalt**, **Alinea al mig** i **Alinea a baix** alineen les targetes en una línia horitzontal.
- **Organitza en fila**, **Organitza en columna** i **Organitza en graella** mouen les targetes a aquella disposició.
- **Distribueix l'espai horitzontal** i **Distribueix l'espai vertical** espàcien les targetes uniformement.
- **Justifica horitzontalment** i **Justifica verticalment** redimensionen cada targeta perquè coincideixi amb l'amplada o alçada total de la selecció.

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

Si dues targetes connectades estan lluny l'una de l'altra, pots saltar a la targeta de l'altre extrem de la connexió. Fes clic dret a la línia a prop d'un extrem i selecciona **Segueix la connexió**. El llenç es mou a la targeta de l'extrem oposat.

### Afegir una etiqueta a una connexió

Pots afegir una etiqueta a una línia per descriure la relació entre dues targetes.

Per etiquetar una connexió:

1. Fes doble clic a la línia.
2. Introdueix l'etiqueta i prem `Escape` o fes clic a qualsevol lloc del llenç.

També pots etiquetar una connexió seleccionant-la i seleccionant **Edita l'etiqueta** als controls de selecció.

Per editar l'etiqueta d'una connexió, fes doble clic a la línia o fes clic dret a la línia i selecciona **Edita l'etiqueta**.

Per eliminar una etiqueta, selecciona la connexió i després selecciona **Elimina l'etiqueta** als controls de selecció.

### Canviar la direcció d'una connexió

Per defecte, una connexió té una fletxa a l'extrem que apunta a la segona targeta. Per canviar-ho:

1. Selecciona la connexió.
2. Als controls de selecció, selecciona **Direcció de la línia**.
3. Tria **No direccional**, **Unidireccional** o **Bidireccional**.

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

### Afegir un fons a un grup

Pots mostrar una imatge darrere les targetes d'un grup.

1. Selecciona el grup.
2. Als controls de selecció, selecciona **Estableix el fons**.
3. Tria una imatge de la teva cambra forta.

Per canviar el fons, selecciona el grup i després selecciona **Edita el fons**.

- **Canvia el fons** tria una imatge diferent.
- **Elimina el fons** elimina la imatge.
- **Cobertura** fa que la imatge ompli el grup.
- **Mantén la proporció** manté les proporcions de la imatge.
- **Repeteix** repeteix la imatge a tot el grup.

## Navegar pel llenç

Utilitza l'arrossegament panoràmic i el zoom per moure't pel llenç.

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

### Saltar a un grup

Per anar directament a un grup en un llenç gran, obre la paleta d'ordres i selecciona **Canvas: Salta al grup**. Apareix una llista dels grups del teu llenç. Selecciona el grup al qual vulguis anar, i el llenç es mou per centrar-s'hi.

## Configuració del llenç

Selecciona **Configuració del llenç** ![[lucide-settings.svg#icon]] sobre els controls del llenç per canviar el comportament del teu llenç.

- **Ajusta a la graella** ajusta les targetes a la graella de fons quan les mous i les redimensiones.
- **Ajusta als objectes** ajusta les targetes als objectes propers quan les mous i les redimensiones.
- **Només lectura** impedeix canvis al llenç.

## Exportar un llenç com a imatge

Pots exportar un llenç com a imatge PNG a l'escriptori. L'exportació d'imatges no està disponible a l'aplicació Obsidian per a mòbil.

1. Obre el llenç que vulguis exportar.
2. Obre la paleta d'ordres i selecciona **Canvas: Exporta com a imatge**.
3. Tria la configuració.
    - **Vista** estableix què exportar. Selecciona **Llenç complet** per a tot el llenç, o **Només la vista** per a la part que pots veure ara.
    - **Zoom** estableix la qualitat de la imatge. Un zoom més alt genera una imatge més gran i nítida. El diàleg mostra la mida estimada de la imatge.
    - **Mostra el logotip** afegeix un logotip d'Obsidian a la part inferior esquerra. Està activat per defecte.
    - **Mode de privacitat** amaga tot el text del teu llenç. Està desactivat per defecte.
4. Selecciona **Desa**.
5. Tria on desar el fitxer. El nom del fitxer és per defecte el nom del teu llenç, amb l'extensió `.png`.

No pots exportar un llenç buit.

## Desfer i refer

Per desfer l'últim canvi, selecciona **Desfés** als controls del llenç al costat dret del llenç. O bé, prem `Ctrl+Z` (Windows i Linux) o `Command+Z` (macOS).

Per refer un canvi, selecciona **Refés**. O bé, prem `Ctrl+Y` o `Ctrl+Shift+Z` (Windows i Linux), o `Command+Y` o `Command+Shift+Z` (macOS).

## Ajuda del llenç

A l'escriptori, selecciona **Ajuda del llenç** ![[lucide-help-circle.svg#icon]] sota els controls del llenç per veure una llista de les dreceres per a l'arrossegament panoràmic, el zoom, la selecció i el moviment de targetes.

## Incrustar un llenç

Pots incrustar un llenç en una nota utilitzant la sintaxi d'incrustació estàndard. Per a més informació, consulta [[Incrustar fitxers#Embed a canvas in a note|Incrustar un llenç en una nota]].

## Utilitzar Canvas al mòbil

Quan obres un llenç en un telèfon o tauleta, Obsidian mostra tres indicacions.

- **Arrossega per moure**
- **Pinça per fer zoom**
- **Toca i mantén per afegir / moure / seleccionar**

### Obrir el menú del llenç

Toca i mantén una àrea buida del llenç. El menú té els elements següents.

- **Afegeix targeta** afegeix una targeta de text.
- **Afegeix nota de l'arca** afegeix una nota de la teva cambra forta.
- **Afegeix mitjans de l'arca** afegeix mitjans de la teva cambra forta.
- **Afegeix pàgina web** incrusta una pàgina web.
- **Crea grup** crea un grup buit.
- **Ajusta a la graella**, **Ajusta als objectes** i **Només lectura** són les mateixes opcions que a la **Configuració del llenç**.

### Afegir targetes

Pots afegir targetes des del menú del llenç. També pots seleccionar una icona a la part inferior del llenç.

- La icona de fitxer buit afegeix una targeta de text.
- La icona de document afegeix una nota de la teva cambra forta.
- La icona d'imatge afegeix mitjans de la teva cambra forta.

### Treballar amb una targeta seleccionada

Toca una targeta per seleccionar-la. Apareix una barra d'eines sobre la targeta.

- **Elimina** ![[lucide-trash-2.svg#icon]] suprimeix la targeta.
- **Estableix el color** ![[lucide-palette.svg#icon]] canvia el color de la targeta.
- **Ajusta a la selecció** fa zoom al llenç fins a la targeta.
- **Edita** ![[lucide-square-pen.svg#icon]] edita la targeta.

### Moure una targeta

1. Toca la targeta per seleccionar-la.
2. Toca i mantén la targeta seleccionada, i després arrossega-la a una nova posició.

### Redimensionar una targeta

1. Toca la targeta per seleccionar-la.
2. Arrossega els costats de la targeta per fer-la més gran o més petita.

### Obrir el menú de la targeta

Toca i mantén una targeta. El menú té els elements següents.

- **Ajusta a la selecció** fa zoom al llenç fins a la targeta.
- **Edita** edita la targeta.
- **Converteix a fitxer...** converteix una targeta de text a una nota.
- **Duplicar** fa una còpia de la targeta.
- **Elimina** suprimeix la targeta.

### Editar una targeta

Per editar una targeta de text o una targeta de nota, utilitza qualsevol dels dos mètodes.

- Toca la targeta per seleccionar-la, i després fes doble toc. S'obre el teclat.
- Toca la targeta per seleccionar-la, i després selecciona **Edita** ![[lucide-square-pen.svg#icon]] a la barra d'eines sobre la targeta.

### Etiquetar una connexió

1. Toca la línia per seleccionar-la.
2. A la barra d'eines, selecciona **Edita l'etiqueta** ![[lucide-square-pen.svg#icon]]. S'obre el teclat.
3. Introdueix l'etiqueta.

Per eliminar una etiqueta, toca la línia i després selecciona **Elimina l'etiqueta** a la barra d'eines.

### Canviar la direcció d'una connexió

1. Toca la línia per seleccionar-la.
2. A la barra d'eines, selecciona **Direcció de la línia**.
3. Tria **No direccional**, **Unidireccional** o **Bidireccional**.

### Obrir el menú de la línia

Toca i mantén una línia que connecta dues targetes. El menú té els elements següents.

- **Edita l'etiqueta** afegeix o canvia l'etiqueta de la línia.
- **Segueix la connexió** mou el llenç a la targeta de l'extrem oposat de la línia.
- **Elimina** suprimeix la connexió.

### Connectar targetes

1. Toca una targeta per seleccionar-la.
2. Arrossega un dels cercles de les seves vores cap a una altra targeta.

Si arrossegues la línia i la deixes anar en una àrea buida, s'obre un menú amb **Afegeix targeta** i **Afegeix nota de l'arca**. Selecciona'n una per afegir una targeta al final de la línia.

### Desconnectar targetes

Per eliminar una connexió, utilitza qualsevol dels dos mètodes.

- Toca la línia i després selecciona **Elimina** ![[lucide-trash-2.svg#icon]].
- Arrossega l'extrem de la fletxa de la línia cap a la targeta d'on partia. La línia desapareix.

### Agrupar targetes

Per crear un grup:

1. Toca i mantén una àrea buida del llenç.
2. Selecciona **Crea grup**.
3. Arrossega les vores del grup per canviar-ne la mida.

Per afegir targetes a un grup, arrossega-les dins l'àrea del grup. Quan moguis el grup, les targetes de dins es mouran també.

Per canviar el nom d'un grup, fes doble toc al seu nom. S'obre el teclat. Introdueix el nou nom.

### Controls del llenç

Els controls al costat dret del llenç canvien la vista i la configuració.

- **Apropar** i **Allunyar** canvien el nivell de zoom.
- **Restableix el zoom** torna el llenç al nivell de zoom per defecte.
- **Ajusta al zoom** mostra totes les targetes del llenç.
- **Desfés** i **Refés** reverteixen o repeteixen l'últim canvi.
- **Configuració del llenç** té les opcions **Ajusta a la graella**, **Ajusta als objectes** i **Només lectura**.

## Consells avançats

Hem creat alguns vídeos ràpids per demostrar alguns usos avançats de Canvas.

Pots [consultar els 72 consells aquí](https://obsidian.md/canvas#protips). Tingues en compte que els vídeos de consells només són visibles a l'escriptori.
