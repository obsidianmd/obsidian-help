---
permalink: android
aliases:
  - Obsidian for Android
---
L'app mobile Obsidian per Android porta potenti funzionalità di presa appunti sul tuo dispositivo Android. Puoi scaricarla da [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) o come [file APK](https://obsidian.md/it/download).
Supporta le versioni Android 5.1 e successive.

Questa pagina tratta le funzionalità specifiche di Android, inclusi widget, integrazione con le Impostazioni rapide e scorciatoie.

## Sync

Per sincronizzare le tue note con Obsidian su Android consulta [[Sync your notes across devices|Sincronizzare le note tra dispositivi]].

## Posizione del vault

Quando avvii Obsidian su Android, ti verrà chiesto di scegliere dove archiviare i dati della tua cassaforte. Puoi scegliere **archiviazione del dispositivo** (consigliato) o **archiviazione dell'app**.

### Archiviazione del dispositivo

Con l'opzione **archiviazione del dispositivo**, i tuoi dati vengono archiviati in una posizione condivisa sul tuo dispositivo. Questo permette alla tua cassaforte Obsidian di essere accessibile da altre app e servizi, come strumenti di [[Sync your notes across devices|sync]] di terze parti.

Questa è l'opzione consigliata perché offre una migliore compatibilità con gli strumenti di sincronizzazione e garantisce che i tuoi dati persistano anche se disinstalli l'app. Tuttavia, questa opzione richiede permessi aggiuntivi per accedere ai file del tuo dispositivo.

A causa delle limitazioni di Android, Obsidian richiederà l'accesso "Tutti i file" per funzionare in modo affidabile. Google lo raccomanda per app come Obsidian che sono considerate "app di gestione documenti". [Scopri di più](https://developer.android.com/training/data-storage/manage-all-files).

L'app utilizza questo permesso solo per aiutarti ad accedere ai tuoi dati sul tuo dispositivo. I tuoi dati non sono mai accessibili a noi. Per saperne di più su come proteggiamo i tuoi dati e garantiamo la tua privacy, visita la nostra [pagina Sicurezza](https://obsidian.md/it/security).

### Archiviazione dell'app

Con l'opzione **archiviazione dell'app**, i tuoi dati vengono archiviati nell'archiviazione privata dell'app Obsidian. Questo mantiene i tuoi dati isolati dalle altre app per una maggiore privacy.

Questa è una buona opzione se non stai utilizzando strumenti di sincronizzazione esterni e preferisci un sandboxing più stretto a livello di app per le tue note.

Con questa opzione puoi utilizzare [[Introduction to Obsidian Sync|Obsidian Sync]] e plugin di sincronizzazione di terze parti disponibili tramite i [[Community plugins|Plugin della comunità]], ma non puoi utilizzare strumenti come Syncthing che si basano sull'archiviazione condivisa.

> [!warning] Disinstallare Obsidian eliminerà le tue note locali se stai utilizzando l'archiviazione dell'app
> Se utilizzi l'opzione **Archiviazione dell'app** i dati locali della tua cassaforte verranno eliminati se disinstalli l'app. I dati della tua cassaforte Obsidian su altri dispositivi non verranno eliminati.

## Widget

Obsidian per Android offre diverse opzioni di widget per accedere rapidamente alle tue cassaforti e note dalla schermata iniziale. I widget disponibili includono:

- **Apri nota** — Apri una nota specifica
- **Nuova nota** — Crea una nuova nota
- **Cerca** — Avvia una query di ricerca
- **Nota quotidiana** — Apri la tua nota quotidiana
- **Apri Obsidian** — Avvia l'app

> [!note] Nota
> Questi widget sono statici e non mostrano anteprime della nota o della cassaforte selezionata.

Per aggiungere widget alla schermata iniziale:
1. Tocca e tieni premuto in qualsiasi punto della schermata iniziale
2. Seleziona "Widget"
3. Trova Obsidian, quindi seleziona un widget che vuoi utilizzare.

> [!note] Nota
> I widget di Obsidian possono essere ridimensionati. Per ridimensionare un widget, toccalo e tienilo premuto, quindi trascina le maniglie di ridimensionamento.

Puoi aggiungere più widget dello stesso tipo per aprire file diversi o attivare query di ricerca diverse.

Per configurare un widget, tieni premuto a lungo sulla schermata iniziale, quindi trova un'opzione "Modifica" o "Configura". Questo ti permetterà di specificare i parametri specifici richiesti per il funzionamento dell'azione al tocco di quel widget, come File o Percorso, Query di ricerca e Nome vault.

Consulta questo [articolo del supporto Google](https://support.google.com/android/answer/9450271?hl=en) per maggiori informazioni sui widget Android.

## Riquadri Impostazioni rapide

Richiede Android 7.0 o successivo.

Aggiungi un riquadro Impostazioni rapide di Obsidian per un accesso veloce all'app dal pannello delle notifiche. Funziona sulla schermata iniziale e sulla schermata di blocco.

> [!note] Nota
> A differenza dei widget dell'app, puoi aggiungere solo un riquadro Impostazioni rapide dello stesso tipo.

Per aggiungere un riquadro Impostazioni rapide al pannello delle notifiche:

1. Accedi al pannello delle notifiche, tipicamente scorrendo verso il basso dalla barra di stato. Nota: potrebbe essere necessario scorrere un'altra volta per vedere più opzioni.
2. Nei riquadri Impostazioni rapide, seleziona "Modifica" - questa è solitamente la stessa sezione dove si trovano i toggle come Wi-Fi, Bluetooth e Blocco orientamento.
3. Trova e seleziona un riquadro Impostazioni rapide di Obsidian, quindi riorganizzalo a tuo piacimento.
4. Per configurare un riquadro Impostazioni rapide, toccalo e tienilo premuto per aprire la schermata di configurazione.

Consulta questo [articolo del supporto Google](https://support.google.com/android/answer/9083864?hl=en) per maggiori informazioni sulle Impostazioni rapide di Android.

## Scorciatoie

Richiede Android 7.1 o successivo.

Obsidian fornisce scorciatoie dell'app che possono essere accessibili in diversi modi:

- Premi a lungo l'icona dell'app Obsidian
- Trascina l'icona della scorciatoia sulla schermata iniziale
- Accedi tramite la barra di ricerca del tuo launcher (disponibile sulla maggior parte dei produttori di dispositivi)

Scorciatoie disponibili:

- **Apri nota** — Apri una nota specifica nella tua cassaforte
- **Nota quotidiana** — Vai direttamente alla nota quotidiana di oggi

> [!note] Nota
> Le scorciatoie in Obsidian 1.11 non sono configurabili e verranno rinnovate nelle versioni successive per offrire opzioni più dinamiche personalizzate per le tue note specifiche.
