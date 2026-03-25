---
permalink: web-clipper/logic
description: 'Usa condizionali, cicli e assegnazione di variabili nei modelli di Web Clipper.'
aliases:
  - Logic
---
[[Introduzione a Obsidian Web Clipper|Web Clipper]] supporta la logica dei modelli per condizionali, cicli e assegnazione di variabili. Questa sintassi è ispirata ai linguaggi di templating [Twig](https://twig.symfony.com/) e [Liquid](https://shopify.github.io/liquid/).


> [!warning] Richiede l'ultima versione
> Le funzionalità di logica richiedono Obsidian Web Clipper 1.0.0 che non è ancora stato approvato su tutti gli store delle estensioni.

## Condizionali

Usa `{% if %}` per includere contenuto in modo condizionale in base a variabili o espressioni.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Usa `{% else %}` per fornire contenuto alternativo e `{% elseif %}` per concatenare più condizioni:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Operatori di confronto

Sono supportati i seguenti operatori di confronto:

| Operatore | Descrizione |
|-----------|-------------|
| `==` | Uguale a |
| `!=` | Diverso da |
| `>` | Maggiore di |
| `<` | Minore di |
| `>=` | Maggiore o uguale a |
| `<=` | Minore o uguale a |
| `contains` | Verifica se una stringa contiene una sottostringa o un array contiene un valore |

Esempi:
- `{% if title == "Home" %}` — uguaglianza di stringhe
- `{% if price >= 100 %}` — confronto numerico
- `{% if title contains "Review" %}` — verifica di sottostringa
- `{% if tags contains "important" %}` — appartenenza a un array

### Operatori logici

Combina condizioni usando operatori logici:

| Operatore | Alternativa | Descrizione                               |
| --------- | ----------- | ----------------------------------------- |
| `and`     | `&&`        | Entrambe le condizioni devono essere vere |
| `or`      | \|\|        | Almeno una condizione deve essere vera    |
| `not`     | `!`         | Nega una condizione                       |

Esempi:
- `{% if author and published %}` — entrambi devono esistere
- `{% if draft or archived %}` — una delle due condizioni
- `{% if not hidden %}` — negazione
- `{% if (premium or featured) and published %}` — condizioni raggruppate

### Veridicità

Quando una variabile viene usata senza un operatore di confronto, viene valutata per "veridicità":

- `false`, `null`, `undefined`, stringa vuota `""` e `0` sono considerati **falsi**.
- Array vuoti `[]` sono considerati **falsi**.
- Tutto il resto è **vero**.

```twig
{% if content %}
Has content
{% endif %}
```

## Assegnare una variabile

Usa `{% set %}` per creare o modificare variabili all'interno del tuo modello:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Le variabili possono essere impostate a:
- Altre variabili: `{% set name = author %}`
- Letterali: `{% set count = 5 %}` o `{% set label = "Draft" %}`
- Espressioni con filtri: `{% set excerpt = content|truncate:100 %}`
- Risultati di selettori: `{% set comments = selector:.comment %}`

Le variabili impostate con `{% set %}` possono essere usate nella logica successiva del modello e nell'output `{{variable}}`.

## Valori di riserva

Usa l'operatore `??` per fornire valori di riserva quando una variabile è vuota o non definita:

```twig
{{title ?? "Untitled"}}
```

Se `title` è vuoto, non definito o falso, verrà usato il valore di riserva `"Untitled"`.

Questa è una forma abbreviata dell'istruzione `if` equivalente:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Concatenare valori di riserva

Puoi concatenare più valori di riserva:

```twig
{{title ?? headline ?? "No title"}}
```

Questo utilizzerà `title` se disponibile, altrimenti `headline`, altrimenti la stringa `"No title"`.

### Con filtri

I filtri hanno una priorità maggiore rispetto a `??`, quindi i filtri vengono applicati prima del controllo del valore di riserva:

```twig
{{title|upper ?? "UNTITLED"}}
```

Questo applica `upper` a `title` prima, poi ricade su `"UNTITLED"` se il risultato è vuoto. Per applicare filtri al valore di riserva, usa le parentesi o espressioni separate:

```twig
{{title ?? "Untitled"|lower}}
```

Questo utilizzerà `title` se disponibile, altrimenti applicherà `lower` al valore di riserva, risultando in `"untitled"`.

## Cicli

Usa `{% for %}` per iterare sugli array:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Origini del ciclo

Puoi iterare su:
- Array di schema: `{% for item in schema:author %}`
- Risultati di selettori: `{% for comment in selector:.comment %}`
- Variabili impostate in precedenza: `{% set items = selector:.item %}{% for item in items %}`

### Variabili di ciclo

All'interno di un ciclo, hai accesso a un oggetto `loop` con le seguenti proprietà:

| Variabile | Descrizione |
|-----------|-------------|
| `loop.index` | Iterazione corrente (indice da 1) |
| `loop.index0` | Iterazione corrente (indice da 0) |
| `loop.first` | `true` se è la prima iterazione |
| `loop.last` | `true` se è l'ultima iterazione |
| `loop.length` | Numero totale di elementi |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Per compatibilità con le versioni precedenti, puoi anche usare `item_index` (dove `item` è il nome della tua variabile iteratore) per ottenere la posizione con indice da 0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Accesso agli elementi di un array tramite indice

Usa la notazione con parentesi quadre per accedere agli elementi di un array tramite indice:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Questo è utile quando devi accedere a elementi da più array in parallelo:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

La notazione con parentesi quadre funziona anche con le proprietà degli oggetti:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Cicli annidati

I cicli possono essere annidati per strutture dati complesse:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Combinare la logica

Condizionali e cicli possono essere combinati:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Ordine di valutazione

La logica del modello viene elaborata nel seguente ordine:

1. **Logica del modello** — `{% if %}`, `{% for %}`, `{% set %}` e `{{variables}}` vengono valutati per primi
2. **Variabili prompt** — Le [[Variabili#Variabili prompt|variabili prompt]] come `{{"summarize this"|prompt}}` vengono inviate all'Interprete dopo il completamento della logica del modello

Questo significa che puoi usare la logica del modello per costruire prompt in modo dinamico, ma i risultati dei prompt non sono disponibili per l'uso in condizionali o cicli.
