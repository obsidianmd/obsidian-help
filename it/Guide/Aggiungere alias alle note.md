---
aliases: alias, aliases
---

A volte si potrebbe voler fare riferimento allo stesso file con più nomi in contesti diversi. Questi nomi alternativi sono ciò che chiamiamo "alias".

Per esempio, ci si potrebbe riferire al proprio partner con il suo nome completo, con il nome di battesimo o con un nickname. Oppure riferirsi a "Intelligenza Artificiale" usando l'abbreviazione "IA". Se si conoscono più lingue, ci si potrebbe riferire allo stesso concetto in una lingua differente da quella in cui è stata scritta la nota.

### Impostare gli alias

A partire dalla versione 0.9.16, si può utilizzare la proprietà "aliases" nei [[Frontespizi YAML]] delle note, in questo modo:

```
---
aliases: [IA, Intelligenza Artificiale]
---
```

Per avere effetto, questa sezione deve essere collocata in cima alla nota.

In futuro, prenderemo in considerazione modi più intuitivi per gestire gli alias piuttosto che scriverli manualmente nel frontespizio.

### Collegamenti con alias

Dopo aver impostato gli alias per un file, è possibile scrivere `[[alias]]` per collegarsi alla pagina originale. Un'icona di reindirizzamento verrà visualizzata nell'elenco di completamento automatico, in questo modo:

![[Insert alises.png]]

Verrà inserito un collegamento interno con testo personalizzato:  `[[Aggiungere alias alle note|alias]]`.

Nota: il collegamento all'alias **NON** verrà inserito come `[[alias]]` per motivi di Interoperabilità, in modo tale che anche altri software possano riconoscerlo.

### Trovare menzioni scollegate

Dopo aver impostato gli alias per una nota, sarà possibile trovare menzioni scollegate sia per il suo nome che per i suoi alias.

Ad esempio, dopo aver impostato "IA" come alias per "Intelligenza artificiale", nella sezione [[Riferimenti]] degli altri file, saranno visibili le menzioni all'acronimo "IA" .

Se si deciderà di collegare quella menzione, verrà creato un collegamento con il testo personalizzato impostato sull'alias. Seguendo l'esempio sopra, dopo aver cliccato sul pulsante "Collega", `IA` diventerà `[[Intelligenza artificiale | IA]]`.