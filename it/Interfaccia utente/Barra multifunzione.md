---
permalink: ribbon
publish: true
mobile: true
description: >-
  Scopri come usare la barra degli strumenti, uno spazio per i comandi comuni in
  Obsidian, e come personalizzarla su desktop e mobile.
aliases:
  - Ribbon
---
La barra degli strumenti funziona come spazio per i comandi comuni all'interno di Obsidian.

Su desktop, si trova nella [[Barra laterale#Aprire le barre laterali nascoste|barra laterale sinistra]] e rimane visibile anche quando la barra laterale sinistra è chiusa.

Su mobile, è possibile accedere alle [[App mobile#Azioni della barra degli strumenti|azioni della barra degli strumenti]] toccando l'**opzione Menu** ( ![[lucide-menu.svg#icon]] ) nell'angolo in basso a destra dell'app quando non si sta modificando una nota.

## Azioni

Ogni azione è rappresentata da un'icona nella barra degli strumenti. Passando il mouse su queste icone verrà visualizzato un suggerimento, mentre selezionandole si attiverà l'azione associata. Su mobile, è possibile toccare queste icone per attivarle.

1. Apri il **[[Gestire le casseforti|Selettore cassaforte]]** ( ![[obsidian-icon-vault-switcher.svg#icon]] ).
2. Accedi all'**aiuto** ( ![[lucide-help-circle.svg#icon]] ).
3. Apri le **[[Impostazioni]]** ( ![[lucide-settings.svg#icon]] ).

Nella versione mobile, è possibile configurare un'azione di accesso rapido sulla barra degli strumenti. Per ulteriori informazioni, consulta la [[#Mobile|sezione mobile]] e [[App mobile]].

## Personalizzare la barra degli strumenti

La disposizione personalizzata della barra degli strumenti viene memorizzata tra le sessioni. Si sincronizza con altri dispositivi e l'app mobile quando le impostazioni dell'app (nei file `workspace.json` e `workspace-mobile.json`) vengono sincronizzate.

### Desktop

Nella versione desktop, è possibile personalizzare la barra degli strumenti come segue:

- Riordinare le azioni della barra degli strumenti trascinando e rilasciando le icone.
- Per nascondere azioni specifiche, fare clic con il tasto destro su uno spazio vuoto all'interno della barra degli strumenti e deselezionare le azioni che si desidera nascondere.

#### Nascondere la barra degli strumenti

È possibile nascondere la barra degli strumenti in due modi:

- Fare clic con il tasto destro sulla barra degli strumenti e selezionare **Nascondi barra multifunzione**.
- Aprire **[[Impostazioni]]** → **Aspetto**, scorrere verso il basso fino ad **Avanzate** e disabilitare **Mostra barra multifunzione**.

#### Mostrare la barra degli strumenti

Se la barra degli strumenti è stata nascosta e si desidera visualizzarla nuovamente:

1. Aprire **[[Impostazioni]]** → **Aspetto**.
2. Scorrere verso il basso fino ad **Avanzate**.
3. Abilitare **Mostra barra multifunzione**.
4. La barra degli strumenti apparirà nuovamente sul lato sinistro della finestra.

> [!tip] CSS personalizzato
> Se si utilizza un tema della community o CSS personalizzato, assicurarsi che non nasconda la barra degli strumenti tramite regole di stile personalizzate.

### Mobile

Nella versione mobile di Obsidian, è possibile eseguire azioni di accesso rapido, riordinare gli elementi e personalizzare il menu della barra degli strumenti. Per accedere a queste personalizzazioni, seguire questi passaggi:

1. Aprire le **[[Impostazioni]]** di Obsidian ( ![[lucide-cog.svg#icon]] ).
2. Navigare alla sezione **Aspetto**.
3. Scorrere verso il basso fino alle opzioni **Avanzate**.
4. Selezionare il pulsante **Gestisci** sotto la voce **Configurazione barra multifunzione**.

#### Accesso rapido

Per impostazione predefinita, l'opzione di accesso rapido è impostata su "Apri barra multifunzione" con una *pressione breve*. Se si sceglie un'altra opzione come accesso rapido:

- L'opzione selezionata verrà attivata con una *pressione breve*.
- L'accesso al menu della barra degli strumenti cambierà in una *pressione prolungata*.

> [!info] Le opzioni di accesso rapido dipendono dalle impostazioni di Obsidian e dai plugin principali abilitati.

#### Riordinamento e visibilità

Per cambiare l'ordine degli elementi nel menu della barra degli strumenti, tenere premuto il pulsante **trascina e rilascia** ( ![[lucide-menu.svg#icon]] ) e spostare l'elemento selezionato verso l'alto o verso il basso.

È possibile mostrare o nascondere gli elementi nel menu della barra degli strumenti utilizzando i pulsanti rosso **rimuovi** ( ![[lucide-minus-circle.svg#icon]] ) o verde **aggiungi** ( ![[lucide-plus-circle.svg#icon]] ) per alternarne la visibilità.
 
 ![[ribbon-rearrange-visibility.jpeg#interface]]
