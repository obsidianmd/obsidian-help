---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian funciona com una aplicació local a cadascun dels dispositius dels membres del teu equip. Està dissenyat per treballar tant en línia com fora de línia, de manera segura i privada, i per donar-te control total sobre les dades del teu equip. Obsidian no està disponible com a aplicació web, per tant caldrà desplegar l'aplicació als membres del teu equip.

## Instal·lar i actualitzar Obsidian

El teu equip pot baixar Obsidian des de la nostra [pàgina de descàrrega](https://obsidian.md/download). Les versions també estan disponibles a la nostra [pàgina de versions de GitHub](https://github.com/obsidianmd/obsidian-releases/releases) que inclou enllaços al [registre de canvis](https://obsidian.md/changelog/).

> [!tip] Per als usuaris de Windows que necessiten un instal·lador de sistema, l'`.exe` Universal inclou l'opció d'instal·lar Obsidian per a tots els usuaris.

Si les actualitzacions automàtiques estan activades a l'aplicació, les futures versions s'instal·laran automàticament quan els usuaris reiniciïn Obsidian. A més, recomanem realitzar periòdicament [[Actualitza Obsidian#Actualitzacions de l'instal·lador|actualitzacions de l'instal·lador]] per rebre les últimes actualitzacions del marc Electron, incloent-hi correccions de seguretat.

Si busques com limitar l'accés de xarxa a Obsidian durant aquest procés, consulta [[Consideracions de seguretat per a equips#Xarxa i accés|xarxa i accés]].

## Personalitzar Obsidian

Obsidian és fàcil de modificar per adaptar-se a les necessitats del teu equip. Amb una API extensa i un gran ecosistema d'usuaris, Obsidian ofereix accés a nombrosos connectors, temes i eines complementàries.

Per a preguntes relacionades amb la seguretat sobre aquests temes, consulta [[Consideracions de seguretat per a equips]].

### Carpetes de configuració

La [[Carpeta de configuració]] és on una [[Glossari#Cambra forta|cambra forta]] d'Obsidian emmagatzema la seva configuració de l'aplicació. Per defecte, aquesta carpeta s'anomena `.obsidian`, però tens la flexibilitat de [[Carpeta de configuració#Canviar la carpeta de configuració|canviar la carpeta de configuració]] segons la teva preferència.

Recomanem crear una plantilla estandarditzada de la carpeta de configuració per desplegar-la als dispositius del teu equip.

### Connectors

Els [[Connectors principals]] són funcionalitats opcionals creades per l'equip d'Obsidian. Aquestes funcionalitats estan integrades al codi base de l'aplicació i es poden activar o desactivar.

Els [[Connectors de la comunitat]] són funcionalitats de tercers afegides a l'aplicació Obsidian, i es poden instal·lar a través del directori de la comunitat. Els connectors de tercers aprofiten l'[API d'Obsidian](https://github.com/obsidianmd/obsidian-api). Els connectors es troben a la carpeta `.obsidian/plugins` dins d'una cambra forta, i es poden instal·lar manualment en aquesta ubicació.

### Temes i fragments

Els [[Temes]] modifiquen visualment la interfície d'Obsidian. Com els connectors, els temes es poden baixar del nostre directori de la comunitat. Els temes es troben a la carpeta `.obsidian/themes` dins d'una cambra forta.

Els [[Pedaços de CSS|fragments]] són petits fitxers `.css` que modifiquen visualment aspectes de la interfície d'Obsidian. En alguns casos, també poden afegir millores funcionals. Els fragments es troben a la carpeta `.obsidian/snippets` dins d'una cambra forta.

## Preguntes freqüents

Per a preguntes sobre la gestió de comptes i seguretat, consulta [[Consideracions de seguretat per a equips#Seguretat del compte|seguretat del compte]].

### Desplegament

**Puc desplegar llicències a múltiples instal·lacions?**
Actualment, no oferim suport per desplegar llicències mitjançant un script de desplegament, com ara en un fitxer `.json`. Si estàs interessat en aquesta funcionalitat per al teu equip, envia una [sol·licitud de funcionalitat](https://forum.obsidian.md/c/feature-requests/8).

**Pot Obsidian bloquejar certes funcionalitats o configuracions mitjançant una opció o un indicador de l'aplicació?**
Actualment pots fer-ho bloquejant l'accés d'edició a la carpeta `.obsidian`, o a fitxers i carpetes específics dins d'ella, descrits anteriorment. Si estàs interessat en més controls d'accés per al teu equip, envia una [sol·licitud de funcionalitat](https://forum.obsidian.md/c/feature-requests/8).
