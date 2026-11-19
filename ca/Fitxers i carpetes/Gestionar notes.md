---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Podeu gestionar fitxers i carpetes de diverses maneres, utilitzant les [[Tecles d'accés ràpid]], les [[Paleta d'ordres|ordres]] o l'[[Explorador de fitxers]].

## Crear una nota nova

Per crear un fitxer nou:

1. Premeu `Ctrl+N` (o `Cmd+N` a macOS).
2. Introduïu el nom de la nota i després premeu `Enter` per començar a editar-la.

També podeu crear notes utilitzant l'[[Explorador de fitxers#Crear una nota nova|Explorador de fitxers]], o seleccionant **Crea una nota nova** des de la [[Paleta d'ordres]].

> [!hint] Limitació de caràcters del sistema
> Obsidian respectarà les limitacions de noms de fitxer del sistema operatiu on creeu la nota. Si teniu previst [[Sincronitza les teves notes entre dispositius|sincronitzar les vostres notes entre dispositius]], assegureu-vos que els noms dels fitxers siguin [segurs per a altres sistemes operatius](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Obrir fitxers fora de la cambra forta

A l'escriptori, podeu obrir i editar fitxers Markdown individuals fora de la vostra cambra forta. Els fitxers s'obren a la finestra actual i es mantenen a la seva ubicació original.

> [!note] Requereix Obsidian 1.14 i l'últim instal·lador
> [[Actualitza Obsidian#Actualitzacions de l'instal·lador|Actualitzeu el vostre instal·lador]] descarregant Obsidian des d'[obsidian.md/download](https://obsidian.md/download) i reinstal·lant l'aplicació.

Per obrir un fitxer Markdown:

1. Obriu la [[Paleta d'ordres]].
2. Seleccioneu **Obre un fitxer de fora de la cambra forta...**.
3. Trieu un fitxer Markdown al vostre ordinador.

També podeu utilitzar el menú **Obre amb** del vostre sistema operatiu i seleccionar **Obsidian**. Per obrir fitxers Markdown a Obsidian per defecte, establiu-lo com a aplicació predeterminada per als fitxers `.md`.

Les incrustacions d'imatges i els enllaços a altres fitxers locals es resolen de manera relativa a la carpeta del fitxer Markdown. Utilitzeu l'[[Esquema]] per navegar pels encapçalaments i els [[Enllaços sortints]] per explorar els fitxers enllaçats.

### Previsualitzar fitxers amb Vista Ràpida

A macOS, seleccioneu un fitxer Markdown al Finder i premeu `Espai` per previsualitzar-lo amb **Vista Ràpida**. Les previsualitzacions de Vista Ràpida funcionen fins i tot quan Obsidian està tancat.

## Canviar el nom d'una nota

Per canviar el nom d'una nota activa:

1. Seleccioneu el nom de la nota a la part superior de l'editor (o premeu `F2`).
2. Introduïu el nou nom i després premeu `Enter`.

Quan canvieu el nom d'un fitxer, Obsidian actualitza automàticament tots els enllaços a aquell fitxer.

Podeu canviar el nom d'una nota o carpeta sense obrir-la, utilitzant l'[[Explorador de fitxers#Canviar el nom d'un fitxer o carpeta|Explorador de fitxers]].

## Suprimir una nota

Per suprimir una nota, seleccioneu **Més opcions → Suprimeix l'arxiu** a la part superior dreta d'una nota activa.

O seleccioneu **Esborra l'arxiu actual** des de la [[Paleta d'ordres]].

També podeu suprimir una nota o carpeta utilitzant l'[[Explorador de fitxers#Suprimir un fitxer o carpeta|Explorador de fitxers]].

> [!note] Què passa amb els fitxers després de suprimir-los?
> Per canviar què passa amb els fitxers suprimits, seleccioneu una de les opcions següents a **[[Configuració]] → Fitxers i enllaços**:
>
> - **Paperera del sistema**: Per defecte, els fitxers suprimits van a la paperera del sistema del vostre sistema operatiu. Per restaurar un fitxer, utilitzeu el vostre gestor de fitxers preferit.
> - **Paperera d'Obsidian**: Podeu enviar els fitxers suprimits a una carpeta `.trash` dins de la vostra cambra forta.
> - **Eliminar permanentment**: Els fitxers se suprimeixen immediatament sense cap forma de restaurar-los.
