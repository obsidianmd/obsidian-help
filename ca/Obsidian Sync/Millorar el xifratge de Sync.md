---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Moveu la vostra caixa forta de Sync a una regió diferent, realitzeu una actualització del xifratge.'
---
Per defecte, Obsidian Sync utilitza [[Seguretat i privacitat#Xifratge|xifratge d'extrem a extrem]] per a totes les teves dades. Això garanteix que ningú — ni tan sols l'equip d'Obsidian — pot accedir a les teves notes.

Obsidian actualitza ocasionalment el xifratge de Sync per mantenir els estàndards de [[Seguretat i privacitat|seguretat]] més alts. Si una actualització de xifratge està disponible, veuràs una opció titulada **Actualitza el xifratge de la cambra forta** a **Configuració d'Obsidian → Sync**. Aquest procés també et permet canviar la teva [[Regions de Sync|Regió de Sync]].

## Versions de xifratge

Totes les cambres fortes noves utilitzen automàticament el darrer xifratge. Les cambres fortes existents es poden actualitzar mitjançant l'assistent de migració. Tingues en compte que tots els dispositius han d'utilitzar una versió de l'aplicació Obsidian que admeti la versió de xifratge de Sync a la qual estàs migrant.

| Data de llançament                                                      | Versió de Sync | Versió mínima de l'aplicació |
| ----------------------------------------------------------------------- | -------------- | ---------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3              | 1.8.3                        |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0              | 0.9.21                       |

## Actualitza el xifratge amb l'assistent de migració

Abans de continuar, crea una [[Fes còpia de seguretat dels fitxers d'Obsidian|còpia de seguretat]] de la teva cambra forta per prevenir qualsevol pèrdua potencial de dades. Aquest procés eliminarà permanentment totes les dades de la teva cambra remota amb el xifratge antic, inclòs l'historial de versions.

> [!danger] Les migracions són destructives
> 
> **Fes sempre una [[Fes còpia de seguretat dels fitxers d'Obsidian|còpia de seguretat]] de la teva cambra forta abans de continuar amb una migració.**
> 
> Quan migres una cambra remota, les teves dades seran substituïdes. Això significa:
> 
> 1. Les dades remotes seran eliminades dels servidors d'Obsidian, i les dades de la cambra forta es tornaran a pujar en el seu lloc.
> 2. Tot l'[[Historial de versions|historial de versions]] de la cambra forta es perdrà.

1. Obre **[[Configuració]]**.
2. A la barra lateral, selecciona **Sync**.
3. Fes clic a **Actualitza la cambra forta**. Aquesta opció només serà visible si hi ha una actualització disponible per a la teva cambra remota.
4. Comprova les teves còpies de seguretat i fes clic a **Continua**.
5. A **Nom de l'arca**, introdueix el nom de la cambra remota.
6. A **Regió**, escull la teva [[Configurar Obsidian Sync#Servidors de sincronització regionals|regió]] del servidor per a la teva cambra remota.
7. A **Contrasenya d'encriptació**, escull una contrasenya per a la teva cambra forta. Això crea una cambra forta amb xifratge d'extrem a extrem. La contrasenya de la cambra forta és independent del teu compte d'Obsidian i pot ser diferent per a cadascuna de les teves cambres fortes. Per a més informació, consulta [[Seguretat i privacitat]].
8. Un cop hagis tornat a pujar les teves dades amb el nou xifratge, reconnecta't a la nova cambra forta de Sync als teus altres dispositius.
