---
permalink: 2fa
aliases:
  - 2-factor authentication
---
Se disponi di un [account Obsidian](https://obsidian.md/account) puoi abilitare l'autenticazione a due fattori (2FA) per proteggere il tuo account con un ulteriore passaggio di verifica.

## Abilitare la 2FA

- Accedi al [tuo account Obsidian](https://obsidian.md/account/profile) dal browser web.
- Nella sezione **Profilo**, vai su **2-factor authentication** e seleziona **Abilita**.
- Apparirà una finestra popup che ti chiederà di collegare un'app di autenticazione tramite un **codice QR** o una **chiave di configurazione**.

> [!hint]- App di autenticazione più diffuse
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [Portachiavi iCloud](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Una volta collegata, l'app di autenticazione ti fornirà un codice a sei cifre. Inserisci quel codice sotto la sezione del **codice QR/chiave di configurazione**, al passaggio 3.
- Infine, inserisci la tua password attuale.
- Seleziona **Complete set up**.
- La finestra popup verrà sostituita da una finestra di conferma con i tuoi codici di recupero. Scarica i codici di recupero, poiché saranno necessari per sbloccare il tuo account.

La tua 2FA è ora configurata.

> [!warning]- Backup del codice QR/chiave di configurazione
> Se decidi di conservare un backup del **codice QR** o della **chiave di configurazione** oltre ai codici di recupero, ti consigliamo vivamente di conservarli in un sistema protetto da password.

## Generare codici di recupero

Se hai abilitato la 2FA prima che i codici di recupero fossero disponibili, o se desideri aggiornare i tuoi codici di recupero, segui questi passaggi:

- Accedi al [tuo account Obsidian](https://obsidian.md/account/profile) dal browser web.
- Accanto a 2-factor authentication, seleziona **Aggiorna codici di recupero**.
- Nella finestra popup, inserisci la tua **password** e il **codice a 6 cifre dell'autenticatore**.
- Una finestra di conferma mostrerà i tuoi codici di recupero. Hai due opzioni:
    - **Copia codici di recupero**: copia i codici per incollarli altrove.
    - **Scarica codici di recupero**: scarica un file `obsidian-recovery-codes.txt` contenente i tuoi codici.
- Seleziona **Got it** per chiudere la finestra popup.

Puoi utilizzare un codice di recupero **una sola volta** al posto del **codice a 6 cifre dell'autenticatore**. Puoi anche aggiornare i tuoi codici di recupero in qualsiasi momento.

## Disabilitare la 2FA

- Accedi al [tuo account Obsidian](https://obsidian.md/account/profile) dal browser web.
- Nella sezione **Profilo**, vai su **2-factor authentication** e seleziona **Disabilita**.
- Inserisci la tua password di Obsidian.
- Inserisci il codice a sei cifre attuale dalla tua app di autenticazione.
- Seleziona **Disable 2FA**.
- Verrai riportato alla schermata di gestione dell'account.

L'impostazione **2-factor authentication** mostrerà nuovamente un pulsante **Abilita**, a indicare che la 2FA è stata disabilitata.

## FAQ

**Ho abilitato la 2FA. Verrò disconnesso dai miei dispositivi Obsidian attuali?**
No. L'abilitazione della 2FA non ti disconnette ovunque, per tua comodità. Se necessario, puoi farlo manualmente dalla pagina del tuo account e successivamente accedere di nuovo su ciascuno dei tuoi dispositivi.

**Ho abilitato e poi disabilitato la 2FA. Vorrei configurarla di nuovo. Posso utilizzare il codice QR o la chiave di configurazione originali?**
No. Ti verrà fornito un nuovo **codice QR** e una nuova **chiave di configurazione** ogni volta che avvii una nuova configurazione della 2FA.

**Ho abilitato la 2FA. Non mi è ancora stata richiesta dopo diversi tentativi di disconnessione/accesso. Funziona?**
La cache del browser potrebbe farti sembrare che stai apportando modifiche alla pagina (come accedere o disconnetterti) quando in realtà stai accedendo ai dati memorizzati. Prova a utilizzare una finestra di navigazione privata per accedere e confermare che la 2FA funzioni.

Se continui a riscontrare questo comportamento, [invia una segnalazione di bug](https://forum.obsidian.md/c/bug-reports/7).

**Ho perso i miei codici di recupero, l'autenticatore e tutto il necessario per accedere al mio account. Cosa faccio?**

Se hai perso i codici di recupero e l'autenticatore, scrivi a [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) per ricevere assistenza nel riottenere l'accesso al tuo account.
