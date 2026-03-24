---
permalink: publish/security
aliases:
  - Security and privacy
---
Puoi scegliere le note che desideri pubblicare su [[Introduzione a Obsidian Publish|Obsidian Publish]]. Il resto delle tue note rimane al sicuro nella tua cassaforte.

Solo le note che scegli di pubblicare vengono inviate ai server di Obsidian, e qualsiasi nota che annulli dalla pubblicazione viene rimossa.

## Protezione con password

Per un migliore controllo degli accessi al tuo sito Publish, applica una password del sito. Ai visitatori verrà richiesta una password quando tenteranno di accedervi. Se decidi di rimuovere la password del sito in seguito, l'intero sito tornerà visibile al pubblico.

> [!warning] La protezione con password individuale per le note pubblicate non è attualmente supportata.

### Aggiungere una password del sito

1. Nella barra degli strumenti, a sinistra della finestra dell'applicazione, fai clic su **Pubblica modifiche** ![[lucide-send.svg#icon]].
2. Nella finestra di dialogo **Pubblica modifiche**, fai clic su **Modifica le opzioni del sito** ![[lucide-cog.svg#icon]].
3. Sotto **Altre impostazioni**, accanto a **Password**, fai clic su **Gestisci**.
4. Fai clic su **Nuova password**.
5. In **Password**, inserisci una password per il tuo sito.
6. (Opzionale) In **Soprannome**, inserisci un soprannome per la password, ad esempio la persona a cui vuoi dare accesso al sito.
7. Fai clic su **Aggiungi questa password**.

### Rimuovere una password del sito

1. Nella barra degli strumenti, a sinistra della finestra dell'applicazione, fai clic su **Pubblica modifiche** ![[lucide-send.svg#icon]].
2. Nella finestra di dialogo **Pubblica modifiche**, fai clic su **Modifica le opzioni del sito** ![[lucide-cog.svg#icon]].
3. Sotto **Altre impostazioni**, accanto a **Password**, fai clic su **Gestisci**.
5. Fai clic sull'icona a croce accanto alla password che desideri eliminare.

## Raccolta dati
### Dati dei visitatori

Per impostazione predefinita, Obsidian Publish **non** raccoglie dati dei visitatori, non memorizza cookie e non elabora informazioni personali. Tuttavia puoi implementare analisi o registrare altri dati degli utenti [[Personalizzare il sito|personalizzando il tuo sito]].

In qualità di proprietario del sito, sei responsabile del rispetto del GDPR e delle normative sulla privacy nella tua regione. Questo include la creazione di un banner di notifica personalizzato, che può essere implementato tramite publish.js, e l'aggiunta di una pagina di informativa sulla privacy al tuo sito.

## Accesso

Obsidian ha un contratto con [Cloudflare](https://www.cloudflare.com) per fornire l'hosting dei siti Publish. I server sono ospitati a San Francisco, CA.

### Gestire l'accesso a Obsidian Publish sulla tua rete

Per regolare l'accesso a Obsidian Publish sulla tua rete, devi gestire i seguenti domini:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Inoltre, i servizi backend impiegano i seguenti sottodomini: `publish-xx.obsidian.md`, dove `xx` è un numero compreso tra `1 - 100`.

> [!tip] Se il tuo sistema firewall lo supporta, ti consigliamo di inserire nella whitelist `publish-*.obsidian.md` per adattarsi alla nostra continua espansione dei sottodomini.
