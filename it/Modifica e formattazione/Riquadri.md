---
permalink: callouts
publish: true
mobile: true
description: Questa pagina descrive come utilizzare i riquadri per includere contenuti aggiuntivi senza interrompere il flusso delle note.
aliases:
  - Callouts
---
Usa i riquadri per includere contenuti aggiuntivi senza interrompere il flusso delle note.

Per creare un riquadro, aggiungi `[!info]` alla prima riga di una citazione in blocco, dove `info` è l'_identificatore di tipo_. L'identificatore di tipo determina l'aspetto e il comportamento del riquadro. Per visualizzare tutti i tipi disponibili, consulta [[#Tipi supportati]]. I riquadri sono supportati nativamente anche su [[Introduzione a Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Ecco un titolo del riquadro
> Ecco un blocco riquadro.
> Supporta **Markdown**, [[Internal link|collegamenti wiki]] e [[Incorporare file|incorporamenti]]!
> ![[Engelbart.jpg]]
```

> [!info] Ecco un titolo del riquadro
> Ecco un blocco riquadro.
> Supporta **Markdown**, [[Collegamenti interni|collegamenti wiki]] e [[Incorporare file|incorporamenti]]!
> ![[Engelbart.jpg]]

Puoi inserire un riquadro `[!note]` predefinito usando il [[Riquadro comandi|comando]] `Inserisci callout`. Il cursore si posiziona automaticamente nel campo del nome del riquadro, permettendoti di eliminare il nome predefinito e digitarne uno nuovo prima di modificare il contenuto.

Per racchiudere contenuti esistenti in un riquadro, seleziona il testo (inclusi elenchi, blocchi di codice, ecc.) ed esegui il comando `Inserisci callout`. Il contenuto selezionato verrà automaticamente racchiuso nel riquadro.

In [[Viste e modalità di modifica#Anteprima dal vivo|Anteprima dal vivo]], puoi anche fare clic destro sul nome del riquadro per cambiare il tipo di riquadro.


### Cambiare il titolo

Per impostazione predefinita, il titolo del riquadro è il suo identificatore di tipo con l'iniziale maiuscola. Puoi cambiarlo aggiungendo del testo dopo l'identificatore di tipo:

```markdown
> [!tip] I riquadri possono avere titoli personalizzati
> Come questo.
```

> [!tip] I riquadri possono avere titoli personalizzati
> Come questo.

Puoi anche omettere il corpo per creare riquadri con solo il titolo:

```markdown
> [!tip] Riquadro con solo titolo
```

> [!tip] Riquadro con solo titolo

### Riquadri riducibili

Puoi rendere un riquadro riducibile aggiungendo un segno più (`+`) o un segno meno (`-`) direttamente dopo l'identificatore di tipo.

Un segno più espande il riquadro per impostazione predefinita, mentre un segno meno lo comprime.

```markdown
> [!faq]- I riquadri sono riducibili?
> Sì! In un riquadro riducibile, i contenuti sono nascosti quando il riquadro è compresso.
```

> [!faq]- I riquadri sono riducibili?
> Sì! In un riquadro riducibile, i contenuti sono nascosti quando è compresso.

### Riquadri annidati

Puoi annidare i riquadri su più livelli.

```markdown
> [!question] I riquadri possono essere annidati?
> > [!todo] Sì!, possono esserlo.
> > > [!example] Puoi anche usare più livelli di annidamento.
```

> [!question] I riquadri possono essere annidati?
> > [!todo] Sì!, possono esserlo.
> > > [!example] Puoi anche usare più livelli di annidamento.

### Personalizzare i riquadri

[[Snippet CSS|Snippet CSS]] e [[Plugin della comunità|Plugin della comunità]] possono definire riquadri personalizzati o anche sovrascrivere la configurazione predefinita.

Per definire un riquadro personalizzato, crea il seguente blocco CSS:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Il valore dell'attributo `data-callout` è l'identificatore di tipo che desideri utilizzare, ad esempio `[!custom-question-type]`.

- `--callout-color` definisce il colore di sfondo usando numeri (0–255) per rosso, verde e blu.
- `--callout-icon` può essere un ID icona da [lucide.dev](https://lucide.dev) o un elemento SVG.

> [!warning] Nota sulle versioni delle icone lucide
> Obsidian aggiorna periodicamente le icone Lucide. La versione attuale inclusa è mostrata di seguito; usa queste o icone precedenti nei riquadri personalizzati.
> ![[Crediti#^lucide]]

> [!tip] Icone SVG
> Invece di usare un'icona Lucide, puoi anche usare un elemento SVG come icona del riquadro.
>
> ```css
> --callout-icon: '<svg>...svg personalizzato...</svg>';
> ```

### Tipi supportati

Puoi usare diversi tipi di riquadri e alias. Ogni tipo ha un colore di sfondo e un'icona differenti.

Per usare questi stili predefiniti, sostituisci `info` negli esempi con uno qualsiasi di questi tipi, come `[!tip]` o `[!warning]`. I tipi di riquadro possono anche essere cambiati facendo clic destro su un riquadro in modalità Anteprima dal vivo.

A meno che tu non [[#Personalizzare i riquadri|personalizzi i riquadri]], qualsiasi tipo non supportato verrà visualizzato come tipo `note`. L'identificatore di tipo non distingue tra maiuscole e minuscole.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Alias: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Alias: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Alias: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Alias: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Alias: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Alias: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`
