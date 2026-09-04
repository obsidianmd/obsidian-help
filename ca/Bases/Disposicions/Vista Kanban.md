---
permalink: bases/views/kanban
---
Kanban és un tipus de [[Vistes|vista]] que pots utilitzar a [[Introducció a Bases|Bases]].

Selecciona ![[lucide-kanban-square.svg#icon]] **Kanban** des del menú de vistes per mostrar fitxers com a targetes organitzades en columnes. Cada columna representa un valor de la propietat utilitzada per agrupar els resultats.


> [!warning] Requereix Obsidian 1.14+
> Les vistes Kanban requereixen Obsidian 1.14, que actualment es troba en [[Versions d'accés anticipat|accés anticipat]].


## Agrupar targetes en columnes

Una vista Kanban requereix una propietat per agrupar els resultats.

1. Selecciona ![[lucide-arrow-up-down.svg#icon]] **Ordena** a la barra d'eines.
2. Sota **Agrupa per**, selecciona **Propietat** i escull una propietat.

Els fitxers sense un valor per a la propietat seleccionada apareixen a la columna **Cap**.

> [!info] 
> Si agrupes per una fórmula o propietat de fitxer, no pots moure targetes ni columnes, ni crear notes des de les columnes. Aquestes propietats no es poden editar movent una targeta.

## Treballar amb targetes i columnes

- Arrossega una targeta a una altra columna per actualitzar la propietat agrupada en aquella nota. Només les notes Markdown es poden moure entre columnes.
- Selecciona la icona de més a l'encapçalament d'una columna o ![[lucide-plus.svg#icon]] **Nou** a la part inferior d'una columna per crear una nota amb el valor d'aquella columna.
- Arrossega l'encapçalament d'una columna per canviar l'ordre de les columnes. Per restaurar l'ordre original, fes clic dret en una columna i selecciona **Restableix l'ordre**.
- Utilitza el menú ![[lucide-list.svg#icon]] **Propietats** per escollir les propietats que es mostren a cada targeta. La primera propietat es mostra com a títol de la targeta.

## Configuració

La configuració de la vista Kanban es pot configurar a [[Vistes#Configuració de la vista|Configuració de la vista]].

- Amagar columnes buides
- Amplada de columna
- Propietat d'imatge
- Ajust de la imatge
- Relació d'aspecte de la imatge

### Amagar columnes buides

Amaga les columnes que no contenen cap targeta.

### Amplada de columna

Defineix l'amplada de cada columna i les seves targetes.

### Propietat d'imatge

Les targetes Kanban admeten una imatge de portada opcional que es mostra a la part superior de la targeta. Els valors de propietat admesos són els mateixos que per a la [[Vista de targetes#Propietat d'imatge|propietat d'imatge a la Vista de targetes]].

### Ajust de la imatge

Si tens una propietat d'imatge configurada, aquesta opció determina com es mostra la imatge a la targeta.

- **Cobrir:** La imatge omple la caixa de contingut de la targeta. Si no hi cap, la imatge es retalla.
- **Contenir:** La imatge s'escala fins que cap dins la caixa de contingut de la targeta. La imatge no es retalla.

### Relació d'aspecte de la imatge

L'alçada de la imatge de portada ve determinada per la seva relació d'aspecte. Ajusta aquesta opció per fer la imatge més baixa o més alta.
