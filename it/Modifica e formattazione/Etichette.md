---
permalink: tags
aliases:
  - Tags
---
Le etichette sono parole chiave o argomenti che ti aiutano a trovare rapidamente le note che cerchi.

## Aggiungere un'etichetta a una nota

Per creare un'etichetta, inserisci il simbolo cancelletto (`#`) nell'editor, seguito da una parola chiave. Ad esempio, `#meeting`.

Puoi anche aggiungere etichette utilizzando la [[Proprietà|proprietà]] `tags`. Le etichette in YAML devono essere sempre formattate come elenco:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Trovare note tramite etichette

Per trovare note utilizzando il plugin [[Search|Cerca]], usa l'[[Search#Operatori di ricerca|operatore di ricerca]] `tag` nel termine di ricerca, ad esempio `tag:#meeting`.

Puoi anche cercare le etichette facendo clic su di esse nelle tue note.

Per trovare note utilizzando il plugin [[Tags view|Pannello delle etichette]], seleziona **Tags: Mostra pannello etichette** nella [[Command palette|tavolozza dei comandi]], quindi seleziona l'etichetta che desideri cercare.

## Etichette nidificate

Le etichette nidificate definiscono gerarchie di etichette che rendono più facile trovare e filtrare le etichette correlate.

Crea etichette nidificate utilizzando le barre oblique (`/`) nel nome dell'etichetta, ad esempio `#inbox/to-read` e `#inbox/processing`.

- In [[Search|Cerca]], `tag:inbox` corrisponderà a `#inbox` così come a tutte le etichette nidificate come `#inbox/to-read`.
- Nel [[Tags view|Pannello delle etichette]], le etichette nidificate vengono mostrate come appartenenti alla loro etichetta genitore.
- In [[Introduction to Bases|Base]], le etichette nidificate sono riconosciute dalla funzione [[Functions#hasTag|`hasTag`]], quindi `file.hasTag("a")` corrisponderà sia a `#a` che a `#a/b`.

## Formato delle etichette

Puoi utilizzare qualsiasi dei seguenti caratteri nelle tue etichette:

- Lettere alfabetiche
- Numeri
- Trattino basso (`_`)
- Trattino (`-`)
- Barra obliqua (`/`) per le [[#Etichette nidificate]]

Le etichette devono contenere almeno un carattere non numerico. Ad esempio, #1984 non è un'etichetta valida, ma #y1984 lo è.

Le etichette non distinguono tra maiuscole e minuscole. Ad esempio, #tag e #TAG verranno trattate come identiche.

> [!note] 
> Le etichette verranno visualizzate con le maiuscole/minuscole con cui sono state create per la prima volta nel [[Tags view|Pannello delle etichette]]. 
> Ad esempio, creando #Tag e poi #TAG, verrà visualizzato #Tag per entrambe. 

Le etichette non possono contenere spazi vuoti. Per separare due o più parole, puoi invece utilizzare i seguenti formati:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case
