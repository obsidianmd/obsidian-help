---
permalink: publish/customize
publish: true
description: Apreneu a personalitzar l'aparença i l'estil del vostre lloc d'Obsidian Publish.
---
Aquesta pàgina explica com podeu personalitzar l'aparença i la sensació del vostre lloc d'[[Introducció a Obsidian Publish|Obsidian Publish]].

## Recursos estàtics

Podeu personalitzar el vostre lloc [[Publica el teu contingut#Publicar notes|publicant]] els fitxers següents al vostre lloc:

- `publish.css` per afegir CSS personalitzat
- `publish.js` per afegir JavaScript personalitzat
- `favicon-32x32.png` per definir la icona de favorit

**Notes:**

- Les [variables CSS per a Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) es poden trobar al nostre lloc de documentació.
- Com que Obsidian no admet fitxers CSS o JavaScript, necessiteu una altra aplicació per crear-los i editar-los.
- Tant `publish.css` com `publish.js` han d'estar ubicats al directori arrel (`/`) de la vostra cambra forta.
- Per defecte, `publish.css` i `publish.js` no apareixen a l'explorador de fitxers, però els podeu publicar des del diàleg **Publica els canvis**.
- Per utilitzar JavaScript personalitzat amb `publish.js`, necessiteu [[Dominis personalitzats]].

Per a les icones de favorit, Obsidian Publish admet les convencions de noms següents, on `32` representa les dimensions de la icona en píxels:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Recomanem que proporcioneu una o més de les dimensions següents:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Teniu flexibilitat per col·locar les icones de favorit a qualsevol lloc dins de la cambra forta, sempre que es publiquin al vostre lloc.

## Utilitzar un tema de la comunitat

Per utilitzar un dels temes de la comunitat per al vostre lloc:

1. Obriu la vostra cambra forta a l'explorador de fitxers per defecte del vostre sistema operatiu.
2. Aneu a la carpeta de configuració de la cambra forta (per defecte: `.obsidian`).
3. Obriu la carpeta `themes`.
4. Copieu el fitxer CSS del tema que voleu utilitzar per al vostre lloc.
5. Enganxeu el fitxer a la carpeta arrel de la vostra cambra forta.
6. Canvieu el nom del fitxer CSS a `publish.css`.
7. [[Publica el teu contingut#Publicar notes|Publiqueu]] `publish.css`.

**Notes:**

- Si l'estil no s'actualitza en uns minuts, proveu de buidar la memòria cau del navegador.
- Podeu canviar entre mode clar i fosc a les [[Gestionar llocs#Veure les opcions del lloc|opcions del lloc]].
- Molts temes de la comunitat utilitzen **Style Settings** per a estils personalitzats, però aquesta configuració no funciona a Obsidian Publish.

> [!tip] Desenvolupar temes
> No trobeu el tema que busqueu? Apreneu com [crear un tema de Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) vosaltres mateixos.

## Activar funcions de la interfície

Podeu activar o desactivar diverses funcions de la interfície per al vostre lloc, com la vista de gràfic o un índex.

Exploreu les funcions de la interfície disponibles a les seccions **Experiència de lectura** i **Components** a les [[Gestionar llocs#Veure les opcions del lloc|opcions del lloc]].

### Personalitzar la navegació

Dins d'Obsidian Publish, teniu la possibilitat de personalitzar l'ordre de navegació i la visualització de fitxers i carpetes dins de l'[[Explorador de fitxers]] de Publish. Els elements de navegació es llisten per ordre de publicació per defecte. Les notes no publicades no apareixeran en aquest panell.

#### Accedir a les opcions de personalització de la navegació

1. A la [[Cinta]], seleccioneu **Publica els canvis** ![[lucide-send.svg#icon]] o obriu la [[Paleta d'ordres]] i escriviu **Publish: Publica els canvis...**
2. Al diàleg **Publica els canvis**, seleccioneu **Canvia les opcions del lloc** ![[lucide-cog.svg#icon]].
3. A **Configuració de components**, al costat de **Personalitza la navegació**, seleccioneu el botó **Gestionar**.

Apareixerà una nova finestra emergent titulada **Navegació** sobre la finestra de **Canvia les opcions del lloc**.

#### Ajustar els elements de navegació

A la secció etiquetada **Previsualització de navegació**, podeu ajustar l'ordre de visualització del vostre contingut publicat.

1. Seleccioneu la carpeta o nota que voleu ajustar.
2. Arrossegueu la nota o carpeta amunt o avall fins que estigui al lloc desitjat.
3. A la part inferior dreta de la finestra de **Navegació**, seleccioneu **Fet**.

Publish enviarà els canvis de navegació al vostre lloc.

#### Amagar i mostrar elements de navegació

Si hi ha notes o carpetes que heu publicat però no voleu que siguin visibles a la navegació, podeu optar per amagar aquests elements.

1. Seleccioneu la carpeta o nota que voleu ajustar.
2. Feu clic dret i seleccioneu **Amagar a la navegació**. L'element hauria de desaparèixer de la **Previsualització de navegació**.
3. A la part inferior dreta de la finestra de **Navegació**, seleccioneu **Fet**.

Publish enviarà els canvis de navegació al vostre lloc.

> [!tip] Podeu **Mostrar amagades** seleccionant la casella de selecció a la dreta del títol **Previsualització de navegació**

## Preguntes freqüents

**Puc moure fitxers d'una carpeta a una altra dins de la Navegació?**

No. L'estructura de navegació de fitxers per a les notes dins de les carpetes s'ha de mantenir. Podeu ajustar l'ordre de les notes dins de les carpetes (incloent-hi l'arrel de la cambra forta) i l'ordre de les carpetes dins d'altres carpetes.

**Puc editar l'ordre de múltiples notes i carpetes abans de seleccionar Fet?**

Sí.

**Com puc revertir aquests canvis?**

- **Ordre de visualització**: Seleccioneu la icona **Restaurar la configuració predeterminada** (fletxa de rotació en sentit antihorari) al costat d'**Ordre de visualització dels elements de navegació**. Això restaurarà els elements de navegació a l'ordre alfabètic.
- **Estat amagat**: Seleccioneu la icona **Restaurar la configuració predeterminada** (fletxa de rotació en sentit antihorari) al costat d'**Amagar pàgines o carpetes de la navegació**. Això restaurarà els elements de navegació amagats a un estat visible.
