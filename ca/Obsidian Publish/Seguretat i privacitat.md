---
permalink: publish/security
---
Pots triar les notes que vols publicar a [[Introducció a Obsidian Publish|Obsidian Publish]]. La resta de les teves notes es mantenen segures a la teva cambra forta.

Només les notes que tries publicar s'envien als servidors d'Obsidian, i qualsevol nota que deixis de publicar s'elimina.

## Protecció amb contrasenya

Per millorar el control d'accés al teu lloc de publicació, aplica una contrasenya de lloc. Els visitants hauran d'introduir una contrasenya quan intentin accedir-hi. Si decideixes eliminar la contrasenya del lloc més endavant, tot el lloc tornarà a ser visible per al públic.

> [!warning] Actualment no es permet la protecció individual amb contrasenya per a notes publicades.

### Afegir una contrasenya de lloc

1. A la barra d'eines, a l'esquerra de la finestra de l'aplicació, fes clic a **Publica els canvis** ![[lucide-send.svg#icon]].
2. Al diàleg de **Publica els canvis**, fes clic a **Canvia les opcions del lloc** ![[lucide-cog.svg#icon]].
3. Sota **Altres configuracions del lloc**, al costat de **Contrasenyes**, fes clic a **Gestionar**.
4. Fes clic a **Nova contrasenya**.
5. A **Contrasenya**, introdueix una contrasenya per al teu lloc.
6. (Opcional) A **Sobrenom**, introdueix un sobrenom per a la contrasenya, per exemple, la persona a qui vols donar accés al lloc.
7. Fes clic a **Afegir aquesta contrasenya**.

### Eliminar una contrasenya de lloc

1. A la barra d'eines, a l'esquerra de la finestra de l'aplicació, fes clic a **Publica els canvis** ![[lucide-send.svg#icon]].
2. Al diàleg de **Publica els canvis**, fes clic a **Canvia les opcions del lloc** ![[lucide-cog.svg#icon]].
3. Sota **Altres configuracions del lloc**, al costat de **Contrasenyes**, fes clic a **Gestionar**.
5. Fes clic a la icona de creu al costat de la contrasenya que vols suprimir.

## Recollida de dades
### Dades dels visitants

Per defecte, Obsidian Publish **no** recull dades dels visitants, no emmagatzema cookies ni processa informació personal. No obstant això, pots implementar analítiques o registrar altres dades d'usuari [[Personalitza el teu lloc|personalitzant el teu lloc]].

Com a propietari del lloc, ets responsable de complir amb el RGPD i les regulacions de privacitat de la teva regió. Això inclou crear el teu propi bàner de notificació, que es pot implementar mitjançant publish.js, i afegir una pàgina de política de privacitat al teu lloc.

## Accés

Obsidian contracta amb [Cloudflare](https://www.cloudflare.com) per proporcionar allotjament per als nostres llocs de Publish. Els servidors estan allotjats a San Francisco, CA.

### Gestionar l'accés a Obsidian Publish a la teva xarxa

Per regular l'accés a Obsidian Publish a la teva xarxa, has de gestionar els dominis següents:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

A més, els serveis de backend utilitzen els subdominis següents: `publish-xx.obsidian.md`, on `xx` és un número que va de l'`1` al `100`.

> [!tip] Si el teu sistema de tallafocs ho permet, recomanem afegir a la llista blanca `publish-*.obsidian.md` per acomodar la nostra expansió contínua de subdominis.
