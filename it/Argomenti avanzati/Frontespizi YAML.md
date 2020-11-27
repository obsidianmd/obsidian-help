---
aliases: front matter
---

I frontespizi YAML sono metadati a livello di file che risiedono in Obsidian.

Il frontespizio (front matter) è essenzialmente una sezione di attributi di testo semplice posizionata in cima al file. È stato reso popolare dai generatori di siti statici come Jekyll, Hugo e Gatsby. Si tratta di uno dei modi più popolari per inserire metadati nei file Markdown.

Il frontespizio ==deve essere sempre posizionato in cima alla nota== e può essere delimitato utilizzando **tre trattini** sia prima che dopo un blocco di testo YAML.

Per esempio:

```
---
parametro: valore
parametro2: valore2
multipli: [uno, due, tre]
multipli:
- uno
- due
- tre
---
```

A partire dalla versione 0.9.17, gli [[Aggiungere alias alle note|alias]] utilizzano il frontespizio. Lo renderemo gradualmente più accessibile agli sviluppatori dei plugin e più facile da usare.