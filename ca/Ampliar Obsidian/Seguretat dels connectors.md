---
permalink: plugin-security
---
L'equip d'Obsidian pren la seguretat seriosament. Aquesta pàgina explica els riscos que implica instal·lar connectors de la comunitat, i què fa l'equip d'Obsidian per abordar-los.

## Mode restringit

Per defecte, Obsidian s'executa en mode restringit per prevenir l'execució de codi de tercers. Només desactiveu el mode restringit si confieu en els autors dels connectors que instal·leu.

Per desactivar el mode restringit:

1. Obriu **[[Configuració]]**.
2. Al menú lateral, seleccioneu **Connectors de la comunitat**.
3. Seleccioneu **Habilitar els connectors de la comunitat**.

Per activar el mode restringit:

1. Obriu **[[Configuració]]**.
2. Al menú lateral, seleccioneu **Connectors de la comunitat**.
3. Al costat de **Mode restringit**, seleccioneu **Activa**.

Els connectors instal·lats romanen a la vostra cambra forta fins i tot si activeu el mode restringit, però Obsidian els ignora.

## Capacitats dels connectors

A causa de limitacions tècniques, Obsidian no pot restringir de manera fiable els connectors a permisos o nivells d'accés específics. Això significa que els connectors heretaran els nivells d'accés d'Obsidian. Com a resultat, considereu els següents exemples del que poden fer els connectors de la comunitat:

- Els connectors de la comunitat poden accedir a fitxers del vostre ordinador.
- Els connectors de la comunitat poden connectar-se a internet.
- Els connectors de la comunitat poden instal·lar programes addicionals.

> [!tip] 
> Si treballeu amb dades sensibles i voleu instal·lar un connector de la comunitat, us recomanem que realitzeu una auditoria de seguretat independent del connector abans d'utilitzar-lo.

## Procés de revisió dels connectors

Els connectors de la comunitat passen per una revisió inicial quan s'envien a la botiga de connectors. Tots els connectors han de complir les [Polítiques per a desenvolupadors d'Obsidian](https://docs.obsidian.md/Developer+policies).

L'equip d'Obsidian és petit i no pot revisar manualment cada nova versió dels connectors de la comunitat. En canvi, comptem amb l'ajuda de la comunitat per identificar i informar de problemes amb els connectors.

- Si descobriu vulnerabilitats de seguretat menors en un connector de la comunitat, consulteu el fitxer `security.md` o `readme.md` de l'autor del connector per saber com informar-ne. Per a errors de categoria crítica, si us plau, informeu també del problema al [[Ajuda i suport#Contactar amb el suport d'Obsidian|suport d'Obsidian]].
- Si sospiteu que un connector de la comunitat és maliciós, informeu-ne al [[Ajuda i suport#Contactar amb el suport d'Obsidian|suport d'Obsidian]], o enviant un missatge directe als nostres moderadors.
