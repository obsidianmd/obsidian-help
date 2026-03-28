---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Le proprietà permettono di organizzare le informazioni su una nota. Le proprietà contengono dati strutturati come testo, collegamenti, date, caselle di controllo e numeri.'
aliases:
  - Properties
---
Le proprietà permettono di organizzare le informazioni su una nota. Le proprietà contengono dati strutturati come testo, collegamenti, date, caselle di controllo e numeri. Le proprietà possono anche essere utilizzate in combinazione con i [[Plugin della comunità]] che possono fare cose utili con i dati strutturati.

## Aggiungere proprietà a una nota

Esistono diversi modi per aggiungere una proprietà a una nota:


- Usare il [[Riquadro comandi|comando]] **Aggiungi proprietà al file**.
- Usare la [[Tasti di scelta rapida|scorciatoia da tastiera]] **`Cmd/Ctrl+;`**.
- Scegliere **Aggiungi proprietà al file** dal menu **Altre opzioni** (accessibile tramite l'icona dei tre punti o facendo clic destro sulla scheda).
- Digitare `---` all'inizio del file.

Una volta aggiunta una proprietà, apparirà una riga nella parte superiore del file con due campi: il _nome_ della proprietà e il _valore_ della proprietà.

Per il nome, è possibile scegliere qualsiasi cosa. Obsidian fornisce diverse proprietà predefinite: `tags`, `cssclasses` e `aliases`.

Una volta scelto il nome della proprietà, è possibile assegnarle un valore.

### Tipi di proprietà

Oltre a un nome e un valore, le proprietà hanno anche un _tipo_. Il tipo di una proprietà determina quale genere di valori può contenere e come Obsidian li gestisce. Per cambiare il tipo di una proprietà, fare clic sull'icona del tipo accanto al nome della proprietà e selezionare un'opzione diversa. È anche possibile gestire i tipi di proprietà usando il plugin principale [[Vista proprietà]].

Obsidian supporta i seguenti tipi di proprietà:

- **[[#Testo]]**
- **[[#Elenco]]**
- **[[#Numero]]**
- **[[#Casella di controllo]]**
- **[[#Data]]**
- **[[#Data e ora]]**
- **[[#Etichette]]**

Una volta che un tipo di proprietà viene assegnato a un nome di proprietà, tutte le proprietà con quel nome nell'intera cassaforte utilizzeranno lo stesso tipo.

## Usi avanzati

### Cercare nelle proprietà

Le proprietà hanno una propria [[Cerca|sintassi di ricerca]] che può essere utilizzata insieme ad altri termini di ricerca e operatori. [[Cerca#Cercare nelle proprietà|Vedi la sintassi di ricerca per le proprietà]].

### Modelli

È possibile aggiungere proprietà ai [[Plugin/Modelli|Modelli]].

Quando si inserisce un modello nella nota attiva, tutte le proprietà del modello verranno aggiunte alla nota. Obsidian unirà anche tutte le proprietà esistenti nella nota con le proprietà del modello. ^templates-properties

### Rinominare le proprietà

È possibile rinominare una proprietà facendo clic destro su di essa nella [[Vista proprietà|vista Tutte le proprietà]].

### Modalità di visualizzazione

È possibile cambiare il modo in cui le proprietà vengono visualizzate nella nota andando in **[[Impostazioni]] → Editor → Proprietà nel documento**. Le opzioni sono:

- **Visibili** (predefinito) – mostra le proprietà nella parte superiore della nota, se presenti.
- **Nascoste** – nasconde le proprietà, che possono comunque essere visualizzate nella barra laterale tramite [[Vista proprietà]].
- **Codice** – mostra le proprietà in formato YAML come testo normale.

### Snippet CSS

È possibile usare gli [[Snippet CSS]] per modificare l'aspetto di note specifiche.

### Funzionalità non supportate

Alcune funzionalità non sono attualmente supportate in Obsidian:

- **Proprietà annidate**: per visualizzare le proprietà annidate, si consiglia di usare la [[Viste e modalità di modifica#Modalità sorgente|modalità sorgente]].
- **Modifica in blocco delle proprietà**: per una modifica in blocco approfondita al di fuori della [[Vista proprietà]], si consiglia di utilizzare strumenti di modifica in blocco come VSCode, script e plugin della community.
- **Markdown nelle proprietà**: questa è una limitazione intenzionale poiché le proprietà sono pensate per piccoli frammenti di informazione atomici leggibili sia da persone che da macchine.

## Scorciatoie da tastiera

### Aggiungere una proprietà

| Azione | Scorciatoia da tastiera |
|---|---|
|Aggiungi nuova proprietà|`Cmd + ;`|

### Navigare tra le proprietà

Quando una proprietà è attiva

| Azione | Scorciatoia da tastiera |
|---|---|
|Proprietà successiva|`Freccia giù` o `Tab`|
|Proprietà precedente|`Freccia su` o `Shift+Tab`|
|Vai all'editor|`Alt+Freccia giù`|

### Selezionare le proprietà

| Azione | Scorciatoia da tastiera |
|---|---|
|Estendi selezione verso l'alto|`Shift+Freccia su`|
|Estendi selezione verso il basso|`Shift+Freccia giù`|
|Seleziona tutto|`Cmd+A`|

### Modificare le proprietà

| Azione | Scorciatoia da tastiera |
|---|---|
|Modifica nome proprietà|`Freccia sinistra`|
|Modifica valore proprietà|`Freccia destra`|
|Attiva proprietà|`Escape`|
|Elimina proprietà|`Cmd+Backspace`<br><br>se sono selezionate delle proprietà, verrà eliminata la selezione.|
|Annulla|`Cmd+Z`|
|Ripeti|`Cmd+Shift+Z`|

### Vim (avanzato)

| Azione | Scorciatoia da tastiera |
|---|---|
|Sposta giù|`j`|
|Sposta su|`k`|
|Attiva chiave|`h`|
|Attiva valore|`l`|
|Attiva valore (cursore alla fine)|`A`|
|Attiva valore (cursore all'inizio)|`i`|
|Crea nuova proprietà|`o`|

## Formato delle proprietà

Le proprietà sono memorizzate in formato [YAML](https://yaml.org/) nella parte superiore del file. YAML è un formato popolare facile da leggere sia per le persone che per i computer.

I nomi delle proprietà sono separati dai loro valori da due punti seguiti da uno spazio:

```yaml
---
name: value
---
```

Sebbene l'ordine di ciascuna coppia nome-valore non sia rilevante, ogni nome deve essere univoco all'interno di una nota. Ad esempio, non è possibile avere più di una proprietà `tags`.

I valori possono essere [[#Testo|testo]], [[#Numero|numeri]], [[#Casella di controllo|caselle di controllo]], [[#Data|date]], [[#Data e ora|date e ore]] o [[#Elenco|elenchi]].

### Testo

Le proprietà di tipo testo contengono una singola riga di testo. La formattazione Markdown non viene renderizzata nelle proprietà di testo. Gli hashtag non creano etichette quando usati nelle proprietà di testo.

Le proprietà di testo possono contenere URL e [[Collegamenti interni]] usando la sintassi `[[Collegamento]]`. I [[Collegamenti interni]] nelle proprietà di testo devono essere racchiusi tra virgolette. Obsidian le aggiungerà automaticamente se si inseriscono manualmente collegamenti interni nelle proprietà, ma è importante ricordarsi di aggiungerle quando si utilizzano plugin per i modelli.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Elenco

Le proprietà di tipo elenco contengono più valori. Ogni valore in un elenco appare sulla propria riga, preceduto da un trattino (-) e uno spazio.

I valori dell'elenco possono contenere testo, numeri e [[Collegamenti interni]]. Quando si usano [[Collegamenti interni]] nelle proprietà di tipo elenco, racchiuderli tra virgolette.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Numero

Le proprietà di tipo numero devono sempre essere un numero letterale, non un'espressione con operatori. Sono consentiti sia numeri interi che decimali.

```yaml
---
year: 1977
pie: 3.14
---
```

### Casella di controllo

Le proprietà di tipo casella di controllo sono `true` o `false`. In anteprima dal vivo, vengono visualizzate come una casella di controllo.

```yaml
---
favorite: true
reply: false
last: # Valore indeterminato; spesso trattato come false
```

### Data

Le proprietà di tipo data sono memorizzate nel seguente formato:

```yaml
---
date: 2020-08-21
---
```

Il selettore di data segue il formato predefinito di data e ora del sistema operativo. È possibile cambiarlo nelle preferenze di sistema:

> [!info]- Windows
> **[[Impostazioni]] → Data/ora e lingua → Lingua e area geografica → Formato regionale → Modifica formati**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Preferenze di Sistema → Lingua e zona → Formato data**
> 
> ![[Mac-OS-DateTime.png|450]]

Con il plugin [[Note del giorno]] abilitato, la proprietà data funzionerà inoltre come collegamento interno alla nota quotidiana corrispondente a quella data.

![[Note del giorno#^daily-notes-date]]

### Data e ora

Le proprietà di tipo data e ora includono sia una data che un'ora specifica, memorizzate nel seguente formato:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Come le proprietà di tipo [[#Data|data]], il selettore di data e ora segue il formato predefinito del sistema operativo. È possibile cambiarlo nelle preferenze di sistema.

### Etichette

Le proprietà di tipo etichette sono un tipo di proprietà speciale utilizzato esclusivamente dalla proprietà `tags`. Questo tipo di proprietà non può essere assegnato ad altre proprietà.

Le proprietà di tipo etichette sono formattate come un elenco, con ogni etichetta sulla propria riga preceduta da un trattino (-) e uno spazio.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

La proprietà `tags` è una delle [[#Proprietà predefinite]] di Obsidian. Vedi [[Etichette]] per maggiori informazioni sull'uso delle etichette in Obsidian.

### Proprietà JSON

Sebbene sia consigliato usare YAML per definire le proprietà, è anche possibile definirle usando [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Nota che il blocco JSON verrà letto, interpretato e salvato come YAML.

## Proprietà predefinite

Obsidian include un set di proprietà predefinite:

| Proprietà    | Tipo   | Descrizione                                                      |
| ------------ | ------ | ---------------------------------------------------------------- |
| `tags`       | Elenco | Vedi [[Etichette\|Etichette]].                 |
| `aliases`    | Elenco | Vedi [[Alias]].                                                  |
| `cssclasses` | Elenco | Permette di personalizzare l'aspetto di singole note usando gli [[Snippet CSS]]. |

### Proprietà per Obsidian Publish

Le seguenti proprietà predefinite possono essere usate con [[Introduzione a Obsidian Publish|Obsidian Publish]]:

| Proprietà     | Descrizione                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Vedi [[Pubblicare i contenuti#Automatically select data to publish\|Selezionare automaticamente i dati da pubblicare]]. |
| `permalink`   | Vedi [[Permalinks\|Permalink]].                                                                            |
| `description` | Vedi [[Anteprime link per social media#Description\|Descrizione]].                                              |
| `image`       | Vedi [[Anteprime link per social media#Image\|Immagine]].                                                       |
| `cover`       | Vedi [[Anteprime link per social media#Image\|Immagine]].                                                       |

### Proprietà deprecate

Queste proprietà sono state deprecate in Obsidian 1.4 e dovrebbero essere sostituite con i loro equivalenti moderni. Il supporto come [[#Proprietà predefinite]] è stato rimosso in Obsidian 1.9.

| Proprietà | Descrizione |
|-|-|
| `tag` | Alias deprecato per `tags`. |
| `alias` | Alias deprecato per `aliases`. |
| `cssclass` | Alias deprecato per `cssclasses`. |

> [!tip] Se è necessario convertire i file nella cassaforte nel formato delle [[#Proprietà predefinite]], è possibile usare lo [[Strumento importazione Markdown]] per modificare l'intera cassaforte in blocco.
