---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Questa pagina elenca problemi non comuni che potresti riscontrare con Obsidian Sync e come risolverli.
aliases:
  - Troubleshoot Obsidian Sync
---
Questa pagina elenca problemi non comuni che potresti riscontrare con [[Introduzione a Obsidian Sync|Obsidian Sync]] e come risolverli. Prima di procedere, ti consigliamo di consultare le pagine [[Icona di stato e messaggi]] e [[Domande frequenti]].

## Generale

### Risoluzione dei conflitti

Un conflitto si verifica quando modifichi lo stesso file su due o più dispositivi prima che vengano sincronizzati. Ad esempio, modifichi una nota sul computer. Prima che la modifica venga caricata, modifichi anche la stessa nota sul telefono.

I conflitti si verificano più spesso quando lavori offline. Ci sono più modifiche e tempi più lunghi tra le sincronizzazioni, il che aumenta la probabilità di conflitti.

#### Come Obsidian Sync gestisce i conflitti

Quando Obsidian Sync trova un conflitto, il risultato dipende dal tipo di file:

- **File Markdown**: Obsidian Sync unisce le modifiche utilizzando l'algoritmo [diff-match-patch](https://github.com/google/diff-match-patch) di Google.
- **Altri tipi di file**: Per tutti gli altri file, inclusi i Canvas, Obsidian utilizza un approccio "vince l'ultima modifica". La versione modificata più di recente sostituisce le versioni precedenti.

Per i conflitti nelle impostazioni di Obsidian, come le impostazioni dei plugin, Obsidian Sync unisce i file JSON. Applica le chiavi dal JSON locale sopra il JSON remoto.

#### Opzioni di risoluzione dei conflitti

A partire da Obsidian 1.9.7, puoi scegliere come gestire i conflitti. Per configurare questa impostazione:

1. Apri **[[Impostazioni]]**.
2. Nella barra laterale, seleziona **Sync**.
3. Sotto **[[Impostazioni di Sync e sincronizzazione selettiva#Risoluzione dei conflitti|Risoluzione dei conflitti]]**, scegli l'opzione preferita:
   - **Unisci automaticamente** (predefinito): Obsidian Sync combina tutte le modifiche da diversi dispositivi in un unico file. Questo salva tutte le modifiche, ma a volte potrebbe creare testo duplicato o problemi di formattazione. Dovrai correggerli manualmente.
   - **Crea file di conflitto**: Quando Obsidian trova modifiche in conflitto, crea un file di conflitto separato invece di unire automaticamente. Puoi quindi rivedere entrambe le versioni e unirle manualmente. Questo ti dà il pieno controllo sul risultato finale.

> [!warning]+ Configura su tutti i dispositivi
> Le impostazioni di risoluzione dei conflitti sono specifiche per dispositivo. Devi configurare l'opzione preferita su ciascuno dei tuoi dispositivi. Questo garantisce lo stesso comportamento su tutti i tuoi dispositivi sincronizzati.

**Schema di denominazione dei file di conflitto**

Quando utilizzi l'opzione "Crea file di conflitto", Obsidian crea un nuovo file con questo schema di denominazione:

```
nome-nota-originale.sync-conflict-AAAAMMGG-HHMMSS.md
```

Ad esempio, se si verifica un conflitto in una nota chiamata `Note riunione.md`, il file di conflitto potrebbe chiamarsi:

```
Note riunione.sync-conflict-20241128-143022.md
```

Il file di conflitto contiene le modifiche dal dispositivo in cui è stato rilevato il conflitto. Il file originale mantiene la versione remota. Puoi confrontare entrambi i file e unire manualmente il contenuto.

> [!info]+ Controlla il Registro di Sync
> Per verificare quando si sono verificati conflitti, apri il [[Icona di stato e messaggi#Attività di Sync|Registro di Sync]]. Filtra per "Unisci conflitti" o cerca "Conflitto".

### Sync ha eliminato una nota che ho appena creato su due dispositivi

Obsidian Sync in genere cerca di [[#Risoluzione dei conflitti|risolvere i conflitti]] unendo le note in conflitto tra i dispositivi. Tuttavia, possono verificarsi problemi per gli utenti che creano o modificano automaticamente note all'avvio. Questo include le [[Note del giorno]] o quando si utilizza il plugin della community [Templater](https://github.com/SilentVoid13/Templater).

Se crei una nota localmente su un dispositivo e, entro un paio di minuti, Sync scarica una versione remota della stessa nota, Sync manterrà la versione remota senza unire le due. In questo caso, puoi recuperare la versione locale utilizzando [[Recupero file]].

### Sync non sincronizza gli aggiornamenti dei miei plugin e impostazioni

Obsidian [[Domande frequenti#Obsidian Sync ricarica in tempo reale le mie impostazioni?|non ricarica in tempo reale tutte le impostazioni]]. Dopo aver aggiornato le impostazioni o i plugin, devi riavviare Obsidian sugli altri dispositivi per vedere le modifiche. Sui dispositivi mobile, potrebbe essere necessario forzare la chiusura dell'app.

> [!example]- Cambiare un tema
> - Sul tuo dispositivo principale (solitamente un computer), cambi il tema tornando a quello predefinito da un tema personalizzato.
> - Il Registro di Sync conferma che i file aggiornati sono stati inviati al caveau remoto, ma il tuo dispositivo mobile mostra ancora il tema personalizzato.
> - Sul dispositivo mobile, controlla il Registro di Sync per confermare la ricezione del file `appearance.json` aggiornato.
> - Ricarica o riavvia Obsidian sul dispositivo mobile.
> - Dopo il ricaricamento o il riavvio, il dispositivo mobile dovrebbe mostrare lo stesso tema del tuo computer.

### I miei file continuano a scomparire da Sync non appena li ripristino

Questo problema è più comune su Windows. Windows Defender potrebbe mettere in quarantena i file con blocchi di codice, il che causa la scomparsa di alcune note.

Un'altra causa comune è la doppia sincronizzazione. Questo accade quando Obsidian Sync viene eseguito insieme a un altro servizio di sincronizzazione.

![[Passare a Obsidian Sync#Sposta la tua cassaforte fuori dal servizio di sincronizzazione di terze parti o dall'archiviazione cloud]]

---

Infine, questo può accadere quando ripristini un file su un dispositivo, ma poi viene rimosso da un dispositivo secondario. Questo succede quando il nome del file contiene [[Icona di stato e messaggi#Messaggi saltati|caratteri non validi]].

## Android

**Il mio dispositivo elimina gli allegati che ricevo tramite Sync**

Questo problema è probabilmente dovuto a Google o Android Foto che gestiscono i tuoi allegati. Per impedire al sistema di modificare i file ricevuti tramite Sync, aggiungi un [file `.nomedia` alla tua cassaforte](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) sul tuo dispositivo Android.

> [!tip]- Usa un plugin
> Il plugin della community [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) semplifica questa operazione. Installalo sul tuo telefono Android. Nota che i file `.nomedia` non vengono sincronizzati tra i dispositivi tramite Obsidian Sync.
