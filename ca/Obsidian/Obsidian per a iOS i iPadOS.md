---
permalink: ios
---
L'aplicació mòbil d'Obsidian per a iOS i iPadOS porta funcionalitats potents de presa de notes al teu iPhone i iPad. La pots baixar de l'[Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Aquesta pàgina cobreix funcionalitats específiques d'iOS, inclosos els widgets, la integració amb Siri i les Dreceres.

## Sincronització

Per obtenir informació sobre la sincronització de notes entre dispositius, consulta [[Sincronitza les teves notes entre dispositius]].

## Widgets

Obsidian per a iOS ofereix diversos widgets per fer accions ràpides a la teva cambra forta.

> [!note] Nota
> Els widgets estan disponibles a iOS i iPadOS 18 i versions posteriors.
> Els widgets no estan disponibles quan s'utilitza "Requerir Face ID" per desbloquejar l'aplicació.


### Widgets de la pantalla de bloqueig i del Centre de control

Els widgets de la pantalla de bloqueig i del Centre de control et permeten:
- Crear una nota nova
- Obrir una nota específica
- Obrir la nota diària
- Obrir la cerca
- Obrir Obsidian

### Widgets de la pantalla d'inici

Els widgets de la pantalla d'inici et permeten:
- Crear una nota
- Veure una nota
- Obrir la teva nota diària

### Personalitzar widgets

Pots personalitzar els widgets per adaptar-los al teu flux de treball, com ara escollir quina cambra forta utilitzar o especificar una nota concreta per obrir.

- **Widgets de la pantalla d'inici:** Toca i mantén premut el widget, després selecciona **Edita el Widget**.
- **Widgets de la pantalla de bloqueig:** Toca i mantén premuda la pantalla de bloqueig, toca **Personalitza**, selecciona la pantalla de bloqueig i després toca el widget que vols personalitzar.
- **Widgets del Centre de control:** Obre el Centre de control, toca el botó **+** a la part superior esquerra per començar a editar, i després toca el widget que vols personalitzar.

Opcions de configuració del widget **Nota nova**:

![[ios-new-note-configuration.png|400]]

Opcions de configuració del widget **Veure nota**:

![[ios-view-note-configuration.png|400]]

## Dreceres

Obsidian s'integra amb l'aplicació Dreceres d'Apple, permetent-te crear automatitzacions potents. Les dreceres disponibles inclouen:

- **Obrir una nota** — Obre una nota específica a la teva cambra forta
- **Crear una nota nova** — Crea una nota nova a la teva cambra forta
- **Obrir la nota diària** — Salta directament a la nota diària d'avui
- **Capturar a la nota diària** — Afegeix o antepon text a la nota diària sense obrir l'aplicació Obsidian
- **Capturar al marcador** — Afegeix o antepon text a una nota marcada sense obrir l'aplicació Obsidian

Les dreceres de captura són especialment útils per a la presa ràpida de notes, ja que et permeten afegir contingut a una nota en segon pla.

## Full de compartir

El full de compartir d'Obsidian et permet capturar contingut de pàgines web. També funciona amb aplicacions com YouTube i altres xarxes socials.

> [!note]
> - El full de compartir natiu està disponible a iOS i iPadOS 18 i versions posteriors.
> - Les funcionalitats del full de compartir descrites en aquesta secció requereixen Obsidian 1.13.0 o posterior.

Utilitza el full de compartir per enviar ràpidament contingut d'una altra aplicació a Obsidian:
1. En una altra aplicació, toca el botó **Compartir**.
2. Selecciona **Obsidian**.
3. Escull una ubicació.
4. Revisa o edita el contingut capturat.
5. Toca **Desa**.

![[ios-share-sheet-extension.png|400]]

### Ubicacions

Les ubicacions et permeten decidir on ha d'anar el contingut compartit abans de desar-lo.

Les ubicacions poden capturar a:
- **Nota nova** — Crea una nota nova en una cambra forta o carpeta.
- **Nota diària** — Afegeix o antepon contingut a la nota diària d'avui.
- **Nota marcada** — Afegeix o antepon contingut a una nota marcada.
- **Nota** — Escull una nota existent a la teva cambra forta.
- **Marcador nou** — Desa una URL compartida als marcadors d'Obsidian.

![[ios-share-sheet-locations.png|400]]

### Personalitzar ubicacions

Pots crear ubicacions per a fluxos de treball habituals, com ara desar articles a una safata d'entrada, afegir cites a la teva nota diària o afegir enllaços als marcadors.

Per personalitzar les ubicacions:

1. Obre Obsidian des del full de compartir d'iOS.
2. Toca la ubicació actual a la barra d'eines.
3. Toca el botó **+** per crear una ubicació nova, o selecciona una ubicació existent per editar-la.
4. Escull la cambra forta, el comportament i les opcions opcionals.

Depenent del tipus de `Comportament`, pots configurar opcions com ara:
- Carpeta
- Plantilla
- Grup de marcadors
- Posició d'afegir o anteposar
- Si els enllaços compartits capturen el **Text complet** o només la **URL**

![[ios-share-sheet-add-location.png|400]]

### Utilitzar una plantilla en compartir

Pots utilitzar una plantilla quan comparteixes contingut des del full de compartir. Les plantilles et permeten formatar el contingut web capturat amb detalls com el títol de la pàgina, l'autor, el lloc web d'origen i la data de publicació.

Per configurar una ubicació amb una plantilla:

1. Obre Obsidian des del full de compartir d'iOS.
2. Toca la ubicació actual a la barra d'eines.
3. Toca el botó **+** per crear una ubicació nova.
4. Introdueix un nom per a la ubicació.
5. Selecciona una cambra forta.
6. Estableix el **Comportament** a **Nota nova**.
7. A la secció **Opcional**, toca **Plantilla**.
8. Selecciona una nota de la teva cambra forta per utilitzar-la com a plantilla.
9. Toca **Desa** per desar la ubicació.

![[ios-share-sheet-set-template.png|400]]

Quan comparteixes un enllaç utilitzant aquesta ubicació, Obsidian aplica primer la plantilla i després afegeix el contingut compartit.

Marcadors de posició de plantilla compatibles:

| Marcador de posició | Descripció |
| --- | --- |
| `{{author}}` | Autor de l'article |
| `{{description}}` | Descripció o resum de l'article |
| `{{domain}}` | Nom de domini del lloc web |
| `{{favicon}}` | URL de la icona del lloc web |
| `{{image}}` | URL de la imatge principal de l'article |
| `{{published}}` | Data de publicació de l'article, utilitzant el format de data per defecte |
| `{{published: YYYY-MM-DD}}` | Data de publicació utilitzant un format de data personalitzat |
| `{{site}}` | Nom del lloc web |
| `{{title}}` | Títol de l'article |
| `{{wordCount}}` | Nombre total de paraules del contingut extret |

També pots utilitzar els marcadors de posició estàndard de data i hora de les plantilles:

| Marcador de posició | Descripció |
| --- | --- |
| `{{date}}` | Data actual |
| `{{date: YYYY-MM-DD}}` | Data actual amb un format personalitzat |
| `{{time}}` | Hora actual |
| `{{time: HH:mm}}` | Hora actual amb un format personalitzat |

## Integració amb Siri

Pots utilitzar ordres de veu de Siri per interactuar amb Obsidian:

- "Captura amb Obsidian"
- "Captura a Obsidian"
- "Obre la meva nota diària a Obsidian"
- "Cerca a Obsidian"

## Integració amb Spotlight

Quan cerques "Obsidian" al Spotlight d'iOS, veuràs accions ràpides:
- Nota nova
- Cerca
- Nota diària
