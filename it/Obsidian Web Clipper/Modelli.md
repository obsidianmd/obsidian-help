---
permalink: web-clipper/templates
description: Impara a creare modelli che catturano e organizzano automaticamente i metadati delle pagine web con Web Clipper.
aliases:
  - Templates
---
[[Introduzione a Obsidian Web Clipper|Web Clipper]] ti permette di creare modelli che catturano e organizzano automaticamente i metadati dalle pagine web. Modelli di esempio sono disponibili nel [repository clipper-templates](https://github.com/kepano/clipper-templates).

## Crea o modifica un modello

Per **creare** un modello vai nelle impostazioni di Web Clipper e clicca il pulsante **Nuovo modello** nella barra laterale. Puoi anche **duplicare** un modello dal menu **Più** azioni nell'angolo in alto a destra.

Per **modificare** un modello scegli un modello dalla barra laterale. Le tue modifiche verranno salvate automaticamente.

I modelli utilizzano [[Variabili|Variabili]] e [[Filtri|Filtri]], che ti permettono di personalizzare come il contenuto verrà salvato.

## Importa ed esporta modelli di Web Clipper

Per importare un modello:

1. Apri l'estensione e clicca l'icona ingranaggio delle **[[Impostazioni|Impostazioni]]**.
2. Vai a qualsiasi modello nell'elenco.
3. Clicca **Importa** in alto a destra oppure trascina e rilascia i tuoi file `.json` del modello in qualsiasi punto dell'area del modello.

Per esportare un modello clicca **Esporta** in alto a destra. Questo scaricherà il file `.json` del modello. Puoi anche copiare i dati del modello negli appunti tramite il menu **Più**.

## Impostazioni del modello

### Comportamento

Definisci come il contenuto di Web Clipper verrà aggiunto a Obsidian:

- **Crea una nuova nota**
- **Aggiungi a una nota esistente**, in cima o in fondo
- **Aggiungi alla nota quotidiana**, in cima o in fondo (richiede che il plugin [[Note del giorno|note del giorno]] sia attivo)

### Attivare automaticamente un modello

I trigger del modello ti permettono di selezionare automaticamente un modello in base all'URL della pagina corrente o ai dati [schema.org](https://schema.org/). Puoi definire più regole per ogni modello, separate da una nuova riga.

La prima corrispondenza nell'elenco dei modelli determina quale modello viene utilizzato. Puoi trascinare i modelli su e giù nelle impostazioni di Web Clipper per cambiare l'ordine in cui i modelli vengono confrontati.

#### Corrispondenza URL semplice

La corrispondenza semplice attiva un modello se l'URL della pagina corrente *inizia con* il pattern indicato. Per esempio:

- `https://obsidian.md` corrisponderà a qualsiasi URL che inizia con questo testo.

#### Corrispondenza con espressione regolare

Puoi attivare modelli basandoti su pattern URL più complessi usando espressioni regolari. Racchiudi il pattern regex tra barre (`/`). Ricorda di proteggere i caratteri speciali nei pattern regex (come `.` e `/`) con una barra rovesciata (`\`). Per esempio:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` corrisponderà a qualsiasi pagina di riferimento IMDB.

#### Corrispondenza schema.org

Puoi attivare modelli basandoti sui dati [schema.org](https://schema.org/) presenti nella pagina. Usa il prefisso `schema:` seguito dalla chiave schema che vuoi confrontare. Puoi opzionalmente specificare un valore atteso. Per esempio:

- `schema:@Recipe` corrisponderà alle pagine dove il tipo di schema è "Recipe".
- `schema:@Recipe.name` corrisponderà alle pagine dove `@Recipe.name` è presente.
- `schema:@Recipe.name=Cookie` corrisponderà alle pagine dove `@Recipe.name` è "Cookie".

I valori schema.org possono anche essere usati per [[Variabili#Variabili Schema.org|pre-popolare i dati nei modelli]].

### Contesto dell'interprete

Quando l'[[Interpretare pagine web|Interprete]] è abilitato, puoi usare le [[Variabili#Variabili prompt|variabili prompt]] per estrarre il contenuto della pagina con linguaggio naturale. Per ogni modello puoi definire il [[Interpretare pagine web#Contesto|contesto]] a cui l'Interprete ha accesso.
