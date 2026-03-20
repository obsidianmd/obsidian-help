---
permalink: aliases
cssclasses:
  - soft-embed
aliases:
  - Aliases
---
Se vuoi fare riferimento a un file utilizzando nomi diversi, considera l'aggiunta di _alias_ alla nota. Un alias è un nome alternativo per una nota.

Usa gli alias per cose come acronimi, soprannomi o per fare riferimento a una nota in una lingua diversa.

Se stai solo cercando di cambiare l'aspetto di un collegamento in un punto specifico, consulta invece come [[Collegamenti interni#Modificare il testo visualizzato del collegamento|Modificare il testo visualizzato del collegamento]].

![[Collegamenti interni#^callout-internal-links-link-text]]

## Aggiungere un alias a una nota

Per aggiungere un alias a una nota, aggiungi la proprietà `aliases` nelle [[Proprietà]] della nota. Gli alias devono sempre essere formattati come elenco in YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Collegare una nota usando un alias

Per collegare una nota usando un alias:

1. Inizia a digitare l'alias in un [[Collegamenti interni|collegamento interno]]. Qualsiasi alias apparirà nell'elenco dei suggerimenti, con un'icona a freccia curva accanto.
2. Premi `Invio` per selezionare l'alias.

Obsidian crea il collegamento con l'alias come testo visualizzato personalizzato, ad esempio `[[Artificial Intelligence|AI]]`.

> [!note] Nota
> Invece di usare semplicemente l'alias come destinazione del collegamento (`[[AI]]`), Obsidian utilizza il formato di collegamento `[[Artificial Intelligence|AI]]` per garantire l'interoperabilità con altre applicazioni che utilizzano il formato dei collegamenti wiki.

## Trovare menzioni scollegate per un alias

Utilizzando i [[Backlink]], è possibile trovare menzioni scollegate degli alias.

Ad esempio, dopo aver impostato "AI" come alias per "Artificial intelligence", è possibile vedere le menzioni di "AI" in altre note.

Se si collega una menzione scollegata a un alias, Obsidian trasforma la menzione in un [[Collegamenti interni|collegamento interno]] con l'alias come testo visualizzato.
