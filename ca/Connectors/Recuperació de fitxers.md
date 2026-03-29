---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Recuperació de fitxers ajuda a protegir el vostre treball de la pèrdua involuntària de dades desant automàticament instantànies de les vostres notes a intervals regulars.
---
La recuperació de fitxers és un [[Connectors principals|connector principal]] que protegeix la teva feina de supressions accidentals, corrupció de fitxers o canvis no desitjats, desant automàticament instantànies completes de les teves notes a intervals regulars. La recuperació de fitxers no és una solució completa de còpia de seguretat, i recomanem també [[Fes còpia de seguretat dels fitxers d'Obsidian|fer còpia de seguretat]] dels teus fitxers d'Obsidian per separat.

Per evitar ocupar [[#Emmagatzematge i rendiment|massa espai]], Obsidian conserva les instantànies durant un nombre determinat de dies abans de suprimir-les. Les instantànies capturen el contingut complet dels teus fitxers, no només els canvis, permetent-te restaurar qualsevol versió anterior.

> [!info]+ Informació
> Per defecte, les instantànies es desen amb un mínim de 5 minuts entre cadascuna, i es conserven durant 7 dies. Pots configurar ambdós intervals a **[[Configuració]] → Connectors principals → Recuperació de fitxers**.

Les instantànies es conserven a la [[Com Obsidian emmagatzema les dades#Configuració global|Configuració global]], fora de la cambra forta, per preveure pèrdues de dades relacionades amb la cambra forta. Això vol dir que les instantànies s'emmagatzemen amb la ruta absoluta de la nota. Si has mogut la teva cambra forta recentment, pot ser que necessitis tornar-la a la ubicació on era quan es va fer la instantània.

> [!tip] Si estàs utilitzant [[Introducció a Obsidian Sync|Obsidian Sync]] o [[Sincronitza les teves notes entre dispositius|altres serveis de sincronització]], les instantànies de recuperació de fitxers no se sincronitzaran entre dispositius. Les instantànies són específiques de cada dispositiu i romanen locals a cadascun.

## Recuperar una instantània

1. Obre **[[Configuració]]**.
2. A la barra lateral, selecciona **Recuperació de fitxers** sota **Connectors principals**.
3. Sota **Instantànies**, selecciona **Vista**.
4. Al camp de nom de fitxer, comença a escriure el nom del fitxer que vols recuperar, i veuràs una llista de suggeriments.
5. Selecciona el fitxer, prem Enter, i veuràs una llista d'instantànies disponibles.
6. Selecciona la instantània que vols recuperar.
    1. Si vols copiar i enganxar en una nota nova, selecciona el botó **Copia**.
    2. Si vols restaurar el fitxer completament, selecciona el botó **Restaura**.
7. Opcionalment pots mostrar les diferències entre instantànies activant **Mostra la diferència**. Això mostra quin contingut s'ha afegit, eliminat o modificat entre versions d'instantànies.

## Esborrar l'historial d'instantànies

> [!danger] Esborrar l'historial d'instantànies elimina irreversiblement totes les instantànies de la teva cambra forta.

1. Obre **[[Configuració]]**.
2. A la barra lateral, selecciona **Recuperació de fitxers** sota **Connectors principals**.
3. Sota **Esborra l'historial**, selecciona **Esborra**.
4. Confirma que vols suprimir totes les instantànies fent clic a **Esborra**.

## Emmagatzematge i rendiment

Les instantànies de recuperació de fitxers normalment utilitzen un espai de disc mínim, ja que només emmagatzemen fitxers que han canviat. No obstant, en cambres fortes amb molts fitxers grans o edicions freqüents, les instantànies poden acumular-se amb el temps. Supervisa l'ús d'emmagatzematge i ajusta el període de retenció si cal.

## Limitacions

- **Mode de bloqueig d'Apple**: Aquesta funció no està disponible en dispositius Apple amb el [mode de bloqueig](https://support.apple.com/en-us/105120) activat, tret que Obsidian estigui exempt.
- **Tipus de fitxer**: Només es poden restaurar fitxers `.md` i `.canvas` mitjançant la recuperació de fitxers.
- **Ubicació de la cambra forta**: Si mous la teva cambra forta a una ubicació diferent sense utilitzar el [[Gestiona les cambres fortes#Moure la cambra forta a una carpeta diferent|commutador de cambres fortes]], les instantànies existents poden no ser accessibles.
