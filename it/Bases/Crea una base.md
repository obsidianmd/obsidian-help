---
permalink: bases/create-base
aliases:
  - Create a base
---
[[Introduzione a Base|Base]] consente di creare viste simili a database delle proprie note. Ecco come creare una base e incorporarla in una nota. Ogni base può avere una o più [[Viste|viste]] per visualizzare le informazioni in modi diversi.

## Crea una nuova Base

**Tavolozza dei comandi:**

1. Aprire la **tavolozza dei comandi**.
2. Selezionare
	- **Base: Crea nuova Base** per creare una base nella stessa cartella del file attivo.
	- **Base: Inserisci nuova Base** per creare una base e incorporarla nel file corrente.

**Esplora file:**

1. Nell'esplora file, fare clic con il pulsante destro sulla cartella in cui si desidera creare la base.
2. Selezionare **Nuova Base**.

**Barra degli strumenti:**

- Nella barra degli strumenti verticale, selezionare **Crea nuova Base** per creare una base nella stessa cartella del file attivo.

## Incorporare una base

### Incorporare un file base

È possibile incorporare file base in [[Incorporare file|qualsiasi altro file]] utilizzando la sintassi `![[File.base]]`. Per specificare la vista predefinita utilizzare `![[File.base#Vista]]`.

### Incorporare una base come blocco di codice

Le basi possono anche essere incorporate direttamente in una nota utilizzando un blocco di codice `base` e la [[Sintassi di Base|sintassi delle basi]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~
