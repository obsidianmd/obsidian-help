---
permalink: plugins/file-explorer
publish: true
mobile: true
description: Explorador de fitxers és un connector bàsic que us permet gestionar fitxers i carpetes dins del vostre calaix.
---
L'explorador de fitxers és un [[Connectors principals|connector principal]] que et permet gestionar fitxers i carpetes dins de la teva cambra forta. Pots navegar per les notes i altres [[Formats de fitxer acceptats]] de la teva cambra forta i realitzar moltes operacions comunes amb fitxers:

- Crear, suprimir i canviar el nom de fitxers i carpetes.
- Moure fitxers i carpetes amb arrossegar i deixar anar.
- Utilitzar el [[#Utilitzar el menú contextual|menú contextual]] per accedir a totes les operacions disponibles.

> [!tip]- Arrossegar i deixar anar fitxers
> Pots arrossegar un fitxer de l'explorador de fitxers cap a la teva nota per crear un enllaç, o arrossegar un fitxer cap a una carpeta de l'explorador de fitxers per copiar-lo.

## Crear una nota nova

Per crear una nota nova a la ubicació predeterminada de les notes noves:

1. Selecciona **Nota nova** ![[lucide-pen-line.svg#icon]] a la part superior de l'explorador de fitxers.
2. Escriu el nom de la nota i prem `Enter`.

> [!tip]- Canviar la ubicació predeterminada
> Pots canviar la ubicació predeterminada de les notes noves a **[[Configuració]] → [[Configuració#Fitxers i Enllaços|Fitxers i Enllaços]] → [[Configuració#Ubicació predeterminada de les notes noves|Ubicació predeterminada de les notes noves]]**.

Per crear una nota nova en una carpeta específica:

1. Fes clic dret a la carpeta i després selecciona **Nota nova**.
2. Escriu el nom de la nota i prem `Enter`.

## Crear una carpeta nova

Per crear una carpeta nova a l'arrel de la teva cambra forta:

1. Selecciona **Carpeta nova** ![[lucide-folder-plus.svg#icon]] a la part superior de l'explorador de fitxers.
2. Escriu el nom de la carpeta i prem `Enter`.

Per crear una subcarpeta:

1. Fes clic dret a la carpeta on vols crear la subcarpeta i després selecciona **Carpeta nova**.
2. Escriu el nom de la carpeta i prem `Enter`.

## Canviar l'ordre de classificació

Per canviar l'ordre de classificació dels teus fitxers:

1.  Selecciona **Canvia l'ordre de classificació** ![[lucide-arrow-up-narrow-wide.svg#icon]] a la part superior de l'explorador de fitxers.
2. Tria com vols ordenar els teus fitxers. Pots ordenar de manera ascendent o descendent per nom de fitxer, hora de modificació o hora de creació.

## Revelar automàticament el fitxer actiu

Quan obres una nota, l'explorador de fitxers pot desplaçar-se automàticament i ressaltar aquella nota a l'arbre de carpetes. Això t'ajuda a saber on es troba la teva nota activa dins de la cambra forta.

Per activar o desactivar la revelació automàtica:

- Selecciona **Revelar automàticament el fitxer actiu** ![[lucide-gallery-vertical.svg#icon]] a la part superior de l'explorador de fitxers.

Quan està activat, l'explorador de fitxers seguirà i revelarà automàticament la nota activa.

## Expandir o contraure totes les carpetes

Pots expandir o contraure totes les carpetes de l'explorador de fitxers alhora.

Per expandir totes les carpetes:

- Selecciona **Expandeix-ho tot** ![[lucide-chevrons-up-down.svg#icon]] a la part superior de l'explorador de fitxers.

Per contraure totes les carpetes:

- Selecciona **Redueix-ho tot** ![[lucide-chevrons-down-up.svg#icon]] a la part superior de l'explorador de fitxers.

## Suprimir un fitxer o carpeta

1. Fes clic dret al fitxer que vols suprimir i després selecciona **Suprimeix**.
2. Si se't demana confirmar que vols suprimir el fitxer, selecciona **Suprimeix**.

Per a més informació, consulta [[Gestionar notes#Suprimir una nota|Suprimir una nota]].

## Canviar el nom d'un fitxer o carpeta

1. Fes clic dret al fitxer al qual vols canviar el nom i després selecciona **Canvia el nom**.
2. Escriu el nom nou i prem `Enter`.

Per a més informació, consulta [[Gestionar notes#Canviar el nom d'una nota|Canviar el nom d'una nota]].

## Moure un fitxer o carpeta

Per moure un fitxer o carpeta, pots utilitzar arrossegar i deixar anar o el menú contextual.

**Arrossegar i deixar anar:**

- Arrossega un fitxer o carpeta cap a la carpeta on el vols moure.
- Amb `Alt-Clic` (Windows/Linux) o `Opt-Clic` (macOS) pots seleccionar múltiples fitxers individuals i arrossegar-los a una altra carpeta. Si estan tots seguits, pots utilitzar `Maj-Clic`.

**Menú contextual:**

1. Fes clic dret a un fitxer i després selecciona **Mou el fitxer a...**.
2. Cerca el nom de la carpeta on vols moure el fitxer i després selecciona-la de la llista.

## Utilitzar el menú contextual

El menú contextual llista les accions disponibles per a un fitxer o carpeta. Molts dels elements de fitxer també apareixen al [[Menú Més opcions]].

### Escriptori

Fes clic dret a un fitxer o carpeta a l'explorador de fitxers.

**Fitxers**

- **Obre en una nova pestanya** i **Obre cap a la dreta** obren el fitxer en una nova pestanya o en un panell a la dreta.
- **Obre en una finestra nova** obre el fitxer a la seva pròpia finestra. Consulta [[Finestres emergents]].
- **Duplicar** fa una còpia del fitxer.
- **Mou el fitxer a...** mou el fitxer a una altra carpeta. Consulta [[#Moure un fitxer o carpeta]].
- **Marca...** afegeix el fitxer als teus marcadors. Necessita el connector Marcadors. Consulta [[Marcadors#Afegir un marcador]].
- **Fusiona tot el fitxer amb...** combina la nota amb una altra. Necessita el connector Compositor de notes. Consulta [[Compositor de notes#Fusionar notes]].
- **Publica el fitxer actual** publica la nota al teu lloc. Necessita Obsidian Publish. Consulta [[Introducció a Obsidian Publish|Publish]].
- **Copia el camí** copia la ubicació del fitxer com a URL d'Obsidian, des de la carpeta de la cambra forta o des de l'arrel del sistema.
- **Obre l'historial de versions** mostra versions anteriors del fitxer. Necessita una subscripció activa d'Obsidian Sync. Consulta [[Historial de versions]].
- **Obre-ho en l'aplicació predeterminada** obre el fitxer amb l'aplicació que el teu ordinador utilitza per a aquell tipus de fitxer.
- **Mostra al sistema de fitxers** mostra el fitxer al gestor de fitxers. A macOS, l'element diu **Mostra al Finder**. A Windows i Linux, diu **Mostra a l'explorador del sistema**.
- **Canvia el nom...** canvia el nom del fitxer. Consulta [[#Canviar el nom d'un fitxer o carpeta]].
- **Suprimeix** suprimeix el fitxer. Consulta [[#Suprimir un fitxer o carpeta]].

**Carpetes**

- **Nota nova** i **Carpeta nova** creen una nota o una carpeta dins de la carpeta. Consulta [[#Crear una nota nova]] i [[#Crear una carpeta nova]].
- **Nou llenç** crea un llenç a la carpeta. Consulta [[Canvas]].
- **Nova base** crea una base a la carpeta. Consulta [[Introducció a Bases]].
- **Duplicar** fa una còpia de la carpeta.
- **Mou la carpeta a...** mou la carpeta dins d'una altra carpeta.
- **Cerca a la carpeta** cerca només els fitxers de la carpeta. Consulta [[Cerca]].
- **Marca...** afegeix la carpeta als teus marcadors.
- **Copia el camí** copia la ubicació de la carpeta des de la carpeta de la cambra forta o des de l'arrel del sistema.
- **Mostra al sistema de fitxers** mostra la carpeta al gestor de fitxers, i es llegeix igual que per als fitxers.
- **Canvia el nom...** i **Suprimeix** canvien el nom de la carpeta o la suprimeixen.

### Mòbil

Mantén premut una carpeta a l'explorador de fitxers. El menú té els mateixos elements que el menú de carpetes d'escriptori, excepte **Marca...** i **Mostra al sistema de fitxers**.
