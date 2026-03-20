---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Scopri come effettuare la transizione dalla tua soluzione di sincronizzazione attuale a Obsidian Sync.
aliases:
  - Switch to Obsidian Sync
---
Scopri come effettuare la transizione dalla tua soluzione di sincronizzazione attuale a Obsidian Sync.

> [!warning] Evitare l'uso di più soluzioni per sincronizzare gli stessi file
> [[Frequently asked questions#Posso usare un sync di terze parti con Obsidian Sync?|Non raccomandiamo]] l'uso di Obsidian Sync insieme a servizi di archiviazione cloud (ad es. iCloud, Dropbox, OneDrive, Google Drive) poiché ciò può causare conflitti. Tuttavia, i servizi di archiviazione cloud possono avere un ruolo nella tua strategia di [[Back up your Obsidian files|backup]].

## Spostare la cassaforte fuori dal servizio di sincronizzazione di terze parti o dall'archiviazione cloud

Se la cassaforte è archiviata in una delle seguenti posizioni, è probabile che venga sincronizzata da un servizio di terze parti:

- **Windows**: `C:\Users\Username\Desktop` o `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` o `/users/username/Documents`
- **iOS**: La cartella **iCloud** all'interno dell'app File
- **Altro**: Qualsiasi cartella sotto un servizio di sincronizzazione, come `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, ecc.

Sebbene Android e Linux tendano ad avere meno problemi con questo, vale comunque la pena verificare la posizione della cassaforte su questi dispositivi.

> [!tip] Se la cassaforte locale attuale è connessa a un caveau remoto, Obsidian tenterà di rilevare se la cassaforte si trova in un servizio di sincronizzazione. In tal caso, vedrai un messaggio nella parte superiore delle impostazioni di Obsidian Sync.

Per evitare conflitti con i servizi di sincronizzazione, raccomandiamo di archiviare le casseforti Obsidian nelle seguenti posizioni:

- **Windows**: Posizioni consigliate in ordine:
    1. `D:\` o qualsiasi altra unità non-C e non di rete sul dispositivo
    2. `C:\Vaults` (se si dispone dei permessi per utilizzare l'unità C:\)
    3. `C:\Users\Username\Vaults` (se è necessario mantenere la cassaforte all'interno di C:\Users\Username, assicurarsi che OneDrive sia impostato per non rimuovere i file. OneDrive è generalmente meno aggressivo al di fuori delle cartelle `Desktop` e `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Nessuna raccomandazione specifica a causa della varietà di filesystem. Assicurarsi solo che Obsidian abbia accesso completo in lettura/scrittura e che nessun servizio di sincronizzazione gestisca la cartella.
- **iOS/iPadOS**: Archiviare la cassaforte **Sul mio iPhone** o **Sul dispositivo**.
- **Android**: Utilizzare la cartella `Documents/` sul dispositivo.

## Spostare la cassaforte usando Obsidian su desktop

![[Manage vaults#Spostare la cassaforte in una cartella diversa]]

## Spostare la cassaforte su mobile

Sui dispositivi mobile, Obsidian opera in un ambiente sandbox, il che significa che non è possibile spostare le casseforti all'interno dell'app come si può fare su desktop.

### Android

I filesystem Android variano molto da dispositivo a dispositivo, ma in generale, seguire gli stessi passaggi che si seguirebbero per spostare manualmente la cassaforte, assicurandosi che venga rimossa da qualsiasi servizio di sincronizzazione sul dispositivo.

### iOS e iPadOS

Per spostare una cassaforte iCloud esistente sul dispositivo, seguire questi passaggi:

> [!note] Se i dati sono già presenti su un altro dispositivo ed è stato configurato Obsidian Sync, si consiglia di [[Set up Obsidian Sync#Sincronizzare un caveau remoto su un altro dispositivo|configurare una nuova cassaforte locale da Sync]].

- Eseguire il [[Back up your Obsidian files|backup]] della cassaforte.
- Creare una nuova cassaforte sul dispositivo, assicurandosi che **Salva in iCloud Drive** sia disabilitato.
- Forzare la chiusura dell'app Obsidian su tutti i dispositivi per mettere in pausa Sync.
- Aprire l'app **File** sul dispositivo iOS/iPadOS.
- Tenere premuto a lungo sulla cartella della cassaforte sotto **iCloud Drive → Obsidian**, quindi selezionare **Sposta**.
- Spostare la cassaforte in **Sul mio iPhone/Dispositivo → Obsidian** e confermare che sia ora visibile.
- Toccare **Copia**.
- Tornare a **iCloud Drive → Obsidian** ed eliminare la vecchia cartella della cassaforte.

Una volta riaperto Obsidian, la cassaforte dovrebbe mostrare un'icona di cassaforte invece di un'icona cloud, confermando che non si trova più in iCloud Drive. Obsidian Sync inoltre non mostrerà più il messaggio di avviso nelle sue impostazioni.

## Passaggi successivi

- Vuoi iniziare con Obsidian Sync? [[Set up Obsidian Sync]]
- Hai ancora bisogno di assistenza? Consulta [[Troubleshoot Obsidian Sync]]
