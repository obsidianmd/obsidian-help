---
permalink: 2fa
---
Si tens un [compte d'Obsidian](https://obsidian.md/account) pots habilitar l'autenticació de dos factors (2FA) per protegir el teu compte amb un segon pas de verificació.

## Habilitar 2FA

- Inicia sessió al [teu compte d'Obsidian](https://obsidian.md/account/profile) des del navegador web.
- A la secció **Perfil**, ves a **Autenticació de 2 factors** i selecciona **Habilitar**.
- Apareixerà una finestra emergent que et demanarà que connectis una aplicació d'autenticació amb un **codi QR** o una **clau de configuració**.

> [!hint]- Aplicacions d'autenticació populars
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Un cop connectada, la teva aplicació d'autenticació et proporcionarà un codi de sis dígits. Introdueix aquest codi a sota de la secció del **codi QR/clau de configuració**, al pas 3.
- Finalment, introdueix la teva contrasenya actual.
- Selecciona **Completar configuració**.
- La finestra emergent serà substituïda per una finestra de confirmació amb els teus codis de recuperació. Si us plau, baixa els teus codis de recuperació, ja que els necessitaràs per desbloquejar el teu compte.

La teva 2FA ja està configurada.

> [!warning]- Còpies de seguretat del codi QR/clau de configuració
> Si decideixes guardar una còpia de seguretat del teu **codi QR** o **clau de configuració** a més dels teus codis de recuperació, et recomanem encaridament que els guardis en un sistema xifrat amb contrasenya.

## Generar codis de recuperació

Si vas habilitar la 2FA abans que els codis de recuperació estiguessin disponibles, o si vols actualitzar els teus codis de recuperació, segueix aquests passos:

- Inicia sessió al [teu compte d'Obsidian](https://obsidian.md/account/profile) des del navegador web.
- Al costat d'Autenticació de 2 factors, selecciona **Actualitzar codis de recuperació**.
- A la finestra emergent, introdueix la teva **contrasenya** i el **codi de 6 dígits de l'autenticador**.
- Una finestra de confirmació mostrarà els teus codis de recuperació. Tens dues opcions:
    - **Copiar codis de recuperació**: Copia els codis per enganxar-los en un altre lloc.
    - **Baixar codis de recuperació**: Baixa un fitxer `obsidian-recovery-codes.txt` que conté els teus codis.
- Selecciona **Entès** per tancar la finestra emergent.

Pots utilitzar un codi de recuperació **una sola vegada** en lloc del teu **codi de 6 dígits de l'autenticador**. També pots actualitzar els teus codis de recuperació en qualsevol moment.

## Desactivar 2FA

- Inicia sessió al [teu compte d'Obsidian](https://obsidian.md/account/profile) des del navegador web.
- A la secció **Perfil**, ves a **Autenticació de 2 factors** i selecciona **Desactivar**.
- Introdueix la teva contrasenya d'Obsidian.
- Introdueix el codi actual de sis dígits de la teva aplicació d'autenticació.
- Selecciona **Desactivar 2FA**.
- Tornaràs a la pantalla de gestió del compte.

La configuració d'**Autenticació de 2 factors** mostrarà novament un botó **Habilitar**, indicant que la 2FA s'ha desactivat.

## PMF

**He habilitat la 2FA. Se'm tancarà la sessió als meus dispositius actuals d'Obsidian?**
No. Habilitar la 2FA no tanca la sessió a tots els llocs per comoditat. Si ho necessites, pots fer-ho manualment des de la pàgina del teu compte, i posteriorment iniciar sessió de nou a cadascun dels teus dispositius.

**He habilitat i després desactivat la 2FA. Voldria configurar-la de nou. Puc utilitzar el codi QR o la clau de configuració originals?**
No. Se't proporcionarà un nou **codi QR** i una nova **clau de configuració** cada vegada que iniciïs una nova configuració de 2FA.

**He habilitat la 2FA. Encara no m'han demanat el codi després de diversos intents de tancar i iniciar sessió. Funciona?**
La memòria cau del teu navegador pot estar permetent que sembli que estàs fent canvis a la pàgina (com iniciar o tancar sessió) quan en realitat estàs accedint a les dades emmagatzemades. Prova d'utilitzar una finestra de navegació privada per iniciar sessió i confirmar que la 2FA funciona.

Si continues experimentant aquest comportament, si us plau [envia un informe d'error](https://forum.obsidian.md/c/bug-reports/7).

**He perdut els meus codis de recuperació, l'autenticador i tot el necessari per iniciar sessió al meu compte. Què faig?**

Si has perdut els teus codis de recuperació i l'autenticador, si us plau envia un correu electrònic a [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) per rebre assistència per recuperar l'accés al teu compte.
