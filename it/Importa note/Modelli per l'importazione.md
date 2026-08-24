---
permalink: import/templates
description: 'Personalizza il nome della nota, le proprietà e il contenuto creati da Importer.'
---
[[Importatore]] permette di definire modelli che controllano come le note vengono importate da altre app. Questo significa che è possibile modificare il titolo, le proprietà e il contenuto delle note importate.

## Modificare il modello di importazione

Selezionare **Modifica** sopra l'anteprima per modificare il modello predefinito. È possibile modificare:

- Il nome della nota mostrato come titolo in linea.
- Le proprietà all'inizio della nota.
- Il contenuto Markdown della nota.

Selezionare **Salva** per tornare all'anteprima. L'importatore ricorda un modello in linea modificato per le importazioni future che utilizzano lo stesso formato.

In alternativa è possibile caricare un modello da un file Markdown nel vault corrente.

## Anteprima dei risultati

L'anteprima mostra fino a dieci campioni dai dati selezionati. Utilizzare i pulsanti freccia per spostarsi tra i campioni. Le modifiche alle impostazioni di importazione e al modello aggiornano l'anteprima prima che qualsiasi cosa venga aggiunta al vault.

Alcuni allegati, elementi remoti e riferimenti incrociati tra note non possono essere completamente risolti fino all'esecuzione dell'importazione. In questi casi, l'anteprima potrebbe mantenere il collegamento sorgente o mostrare un segnaposto.

## Sintassi dei modelli

I modelli dell'importatore utilizzano una sintassi composta da variabili, [[Filtri]] e [[Logica]]. Utilizzano la stessa sintassi [Knap](https://github.com/obsidianmd/knap) di [[Introduzione a Obsidian Web Clipper|Web Clipper]].

Inserire le variabili con doppie parentesi graffe, come `{{title}}`, `{{content}}` o `{{date}}`. Le variabili possono essere utilizzate nel nome della nota, nelle proprietà e nel contenuto.

È possibile modificare le variabili utilizzando i [[Filtri]]. Ad esempio, per cambiare il formato della data usando `{{date|date:"YYYY-MM-DD"}}`. Utilizzare la [[Logica]] per condizionali, cicli e assegnazione di variabili più avanzati.

## Variabili

Le seguenti variabili sono disponibili per l'uso in qualsiasi modello dell'importatore:

| Variabile        | Descrizione                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Corpo Markdown senza proprietà (nessun frontmatter).                                                           |
| `{{content}}`    | Markdown completo prima dell'applicazione del modello selezionato.                                             |
| `{{ctime}}`      | Data di creazione della sorgente come timestamp ISO 8601; vuoto quando non disponibile.                        |
| `{{date}}`       | Data e ora correnti al momento del rendering del modello, come timestamp ISO 8601.                             |
| `{{importer}}`   | ID dell'importatore, come `keep`, `html` o `notion-api`.                                                       |
| `{{folder}}`     | Cartella padre finale relativa al vault. Vuoto quando la nota è nella radice del vault.                        |
| `{{mtime}}`      | Data di modifica della sorgente come timestamp ISO 8601; vuoto quando non disponibile.                         |
| `{{noteName}}`   | Nome finale risolto della nota, dopo la rimozione dei caratteri non validi e l'aggiunta di suffissi per i duplicati. |
| `{{path}}`       | Percorso finale relativo al vault, inclusa l'estensione `.md`.                                                 |
| `{{properties}}` | Oggetto contenente le proprietà del frontmatter.                                                               |
| `{{source}}`     | Oggetto contenente le proprietà generate e i valori specifici della sorgente.                                  |
| `{{sourceId}}`   | Identificatore stabile della sorgente quando l'importatore ne fornisce uno; altrimenti vuoto.                  |
| `{{time}}`       | Alias per `{{date}}`.                                                                                          |
| `{{title}}`      | Titolo originale della nota prima della sanitizzazione e deduplicazione.                                       |

## Valori sorgente per le proprietà

Per i formati di importazione che supportano le [[Proprietà]], i valori sorgente sono disponibili anche come variabili di primo livello per comodità.

Se un valore sorgente ha lo stesso nome di una variabile condivisa, accedervi tramite `{{source}}`. Ad esempio, se la sorgente di importazione ha una proprietà chiamata `content`, è disponibile come `{{source.content}}`, mentre `{{content}}` rimane la variabile predefinita dell'importatore.

Utilizzare la notazione con parentesi quadre quando il nome di un campo contiene spazi, punteggiatura o altri caratteri speciali:

```twig
{{source["Project: status"]}}
```

## Modello di esempio

Ecco un esempio di modello che utilizza variabili e [[Filtri|filtri]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

È possibile aggiungere dati in una nota in modo condizionale utilizzando la [[Logica]]:

```twig
{% if tags %}
## Etichette
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```
