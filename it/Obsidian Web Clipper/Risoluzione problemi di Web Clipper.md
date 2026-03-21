---
permalink: web-clipper/troubleshoot
aliases:
  - Troubleshoot Web Clipper
---
Se riscontri problemi con [[Introduction to Obsidian Web Clipper|Web Clipper]] puoi ottenere aiuto tramite il [canale Discord ufficiale](https://discord.com/channels/686053708261228577/1285652864089198672). Puoi anche segnalare bug nel [repository GitHub](https://github.com/obsidianmd/obsidian-clipper).

## Generale

### Alcuni contenuti mancano

Per impostazione predefinita, Web Clipper cerca di catturare in modo intelligente i contenuti dalla pagina. Tuttavia potrebbe non riuscirci su tutti i siti web.

Web Clipper utilizza [Defuddle](https://github.com/kepano/defuddle) per catturare solo il contenuto principale della pagina. Questo esclude intestazione, piè di pagina e altri elementi, ma a volte può essere eccessivamente conservativo e rimuovere contenuti che desideri mantenere. Puoi [segnalare bug](https://github.com/kepano/defuddle) a Defuddle.

Per bypassare Defuddle in Web Clipper usa i seguenti metodi:

- Seleziona il testo, o usa `Cmd/Ctrl+A` per selezionare tutto il testo.
- [[Highlight web pages|Evidenzia i contenuti]] per scegliere esattamente cosa vuoi catturare.
- Usa un [[Modelli|modello personalizzato]] per il sito.

### Nessun contenuto appare in Obsidian

Se non vedi alcun contenuto in Obsidian quando clicchi **Aggiungi a Obsidian**:

- Controlla gli errori nella [[Help and support#Catturare i log della console|console per sviluppatori]] di Obsidian.
- Verifica che il nome della cassaforte nelle impostazioni di Web Clipper corrisponda esattamente al *nome della cassaforte* in Obsidian, *non al percorso della cassaforte*.
- Verifica che il nome della cartella sia formattato correttamente.

## Linux

#### Obsidian non si apre

- Assicurati che il protocollo [[Obsidian URI]] [[Obsidian URI#Registrare l'URI di Obsidian|sia registrato]].
- Se usi Firefox potresti dover [registrarlo nelle impostazioni del browser](https://kb.mozillazine.org/Register_protocol).

#### Obsidian si apre ma viene salvato solo il nome del file

È probabile che Obsidian non possa accedere ai tuoi appunti. L'accesso agli appunti è necessario per passare i dati dal browser a Obsidian. La tua configurazione può influenzare il sandboxing delle app e i permessi degli appunti.

Se usi Wayland, assicurati che Obsidian abbia i permessi per leggere gli appunti quando l'app non è in primo piano. Questa preferenza potrebbe trovarsi nel tuo tiling window manager, ad es. Hyprland o Sway.

Se usi Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Se usi Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Se usi Flatpak prova una [versione di Obsidian ufficialmente supportata](https://obsidian.md/download).
- Se usi KDE vai in **Impostazioni di sistema** → **Gestione finestre** → **Regole finestre** e consenti a Obsidian di prendere il focus, [[web-clipper-kde.png|vedi screenshot]].
- Come soluzione alternativa, prova a passare alla **Modalità legacy** in **Impostazioni Web Clipper** → **Generale**. Questo bypassa gli appunti e salva il contenuto direttamente tramite URI. Nota che questo limiterà il numero di caratteri che possono essere catturati a seconda del tuo browser e della distribuzione Linux.

## iOS e iPadOS

Per abilitare l'estensione Web Clipper per Safari:

1. Vai in Safari, tocca il pulsante più a sinistra nella barra URL del browser, ha l'aspetto di un rettangolo con delle linee sotto.
2. Tocca **Gestisci estensioni**.
3. Abilita **Obsidian Web Clipper** nell'elenco delle estensioni.
4. Esci dal menu.
5. Per usare l'estensione **tocca l'icona del puzzle** nella barra URL.

Per consentire a Web Clipper di funzionare su tutti i siti web:

1. Vai nelle **[[Settings|Impostazioni]]** di iOS → **App** → **Safari** → **Estensioni**.
2. Sotto **Permessi** consenti l'esecuzione su tutti i siti web.

Per consentire a Obsidian di ricevere sempre i contenuti di Web Clipper:

1. Vai nelle **[[Settings|Impostazioni]]** di iOS → **App** → **Obsidian**.
2. Imposta **Incolla da altre app** su **Consenti**.
