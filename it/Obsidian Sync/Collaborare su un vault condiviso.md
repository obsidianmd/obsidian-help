---
permalink: sync/collaborate
publish: true
mobile: true
description: Questa pagina descrive come collaborare con altri utenti di Obsidian Sync.
aliases:
  - Collaborate on a shared vault
---
Con [[Introduzione a Obsidian Sync|Obsidian Sync]] puoi collaborare su una cassaforte condivisa con il tuo team.

Tutti i collaboratori devono avere un abbonamento Sync attivo per accedere a una cassaforte condivisa. Unirsi a una cassaforte condivisa non conta ai fini del [[Domande frequenti#Quanti caveau remoti posso avere?|limite di cassaforti]].

Se il caveau remoto è [[Obsidian Sync/Sicurezza e privacy|crittografato end-to-end]], i collaboratori devono inserire la password di crittografia quando configurano la cassaforte.

## Gestire gli utenti

### Aggiungere utenti

Per invitare un utente a condividere un caveau remoto:

1. Apri le **[[Impostazioni]]**.
2. Nel menu laterale, seleziona **Sync**.
3. Accanto a **Caveau remoto**, seleziona **Gestisci**.
4. Accanto al caveau remoto che desideri condividere, seleziona **Gestisci condivisione** ( ![[lucide-users.svg#icon]] ).
5. In **Invita utente**, inserisci l'email dell'utente che desideri invitare.
6. Seleziona **Aggiungi**.

### Rimuovere utenti

1. Apri le **[[Impostazioni]]**.
2. Nel menu laterale, seleziona **Sync**.
3. Accanto a **Caveau remoto**, seleziona **Gestisci**.
4. Accanto all'utente a cui desideri rimuovere l'accesso, seleziona **Rimuovi utente** ( ![[lucide-x.svg#icon]] ).

## Collaborare con il tuo team

### Permessi

I permessi granulari non sono ancora supportati. Tutti i collaboratori ricevono gli stessi permessi del proprietario della cassaforte, con un'eccezione: solo il proprietario della cassaforte può invitare collaboratori.

### Modifica in tempo reale

Le cassaforti condivise consentono ai team di lavorare insieme su un insieme di file, tuttavia Obsidian non supporta ancora la modifica collaborativa in tempo reale sullo stesso file. Non vedrai il cursore dell'altro utente e le sue modifiche appariranno solo dopo la sincronizzazione.

Se più utenti stanno modificando lo stesso file contemporaneamente, le [[Risoluzione dei problemi di Obsidian Sync#Risoluzione dei conflitti|modifiche verranno unite]] durante il processo di sincronizzazione. Le modifiche possono essere visualizzate e ripristinate utilizzando la [[Cronologia versioni]].

![[version-history-collaboration.png]]^version-history-image

## Limitazioni

Tieni presente che Obsidian Sync ha delle [[Domande frequenti|limitazioni]] che potrebbero influire sul tuo team:

- Il numero massimo di collaboratori su una cassaforte condivisa è di 20 utenti.
- La dimensione massima dei file per gli allegati dipende dal [[Piani e limiti di archiviazione|piano]] dell'host del tuo caveau remoto, con 5 MB per il Piano Standard e 200 MB per il Piano Plus.

Scopri di più sulla [[Sincronizzazione per i team]].
