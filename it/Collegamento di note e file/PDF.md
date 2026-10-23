---
permalink: pdf
publish: true
mobile: true
description: 'Scopri come visualizzare, cercare e collegare i PDF in Obsidian e come esportare una nota in formato PDF.'
---
Obsidian apre i file PDF in un visualizzatore integrato. È anche possibile incorporare un PDF in una nota, collegare un passaggio al suo interno ed esportare qualsiasi nota come PDF. Per i tipi di file supportati da Obsidian, consulta [[Formati di file accettati]].

> [!info]+ Alcune funzionalità sono disponibili solo su desktop
> L'app Obsidian su mobile non può cercare all'interno di un PDF, copiare una citazione o un collegamento a una selezione, né esportare una nota in PDF.

## Aprire un PDF

Nell'[[Esplora file|Esplora file]], seleziona un PDF per aprirlo in una scheda.

> [!info]+ Le annotazioni non sono supportate
> Obsidian non supporta l'aggiunta di annotazioni o evidenziazioni a un PDF. Per annotare un PDF, usa un'altra app e poi apri il file aggiornato nel tuo vault.

Il visualizzatore ha una barra degli strumenti con questi controlli. L'app Obsidian su mobile ha la stessa barra degli strumenti.

- **Attiva/disattiva barra laterale** mostra o nasconde la barra laterale, e **Opzioni barra laterale** cambia ciò che la barra laterale visualizza.
- **Riduci zoom** e **Ingrandisci** cambiano la dimensione della pagina.
- **Opzioni visualizzazione** cambia la disposizione delle pagine.
- La casella pagina mostra la pagina corrente. Inserisci un numero di pagina per andare a quella pagina.

Per lavorare con il file PDF stesso, come rinominarlo o spostarlo, seleziona **Altre opzioni** ![[lucide-more-horizontal.svg#icon]]. Un PDF ha meno voci in questo menu rispetto a una nota. Vedi [[Menu Altre opzioni]].

## Navigare in un PDF

Seleziona **Opzioni barra laterale**, quindi scegli cosa mostrare.

- **Miniature** mostra una piccola anteprima di ogni pagina.
- **Indice** mostra la struttura del PDF, se ne ha una.
- **Visualizza pagina nell'indice** evidenzia la pagina corrente nell'indice.

Per collegare una pagina, fai clic destro sulla sua miniatura e seleziona **Copia collegamento alla pagina N**, dove N è il numero della pagina. Incolla il collegamento in una nota.

Per collegare una sezione, fai clic destro su una voce nell'indice e seleziona **Copia collegamento a "Titolo"**, dove Titolo è il nome della voce. Su mobile, tieni premuto sulla voce.

## Cambiare l'aspetto di un PDF

Seleziona **Opzioni visualizzazione** per cambiare il layout.

- **Adatta larghezza** e **Adatta altezza** ridimensionano la pagina al visualizzatore.
- **Una pagina** mostra una pagina alla volta.
- **Due pagine (pari)** mostra le pagine affiancate, iniziando con una pagina dispari a sinistra. Ad esempio, le pagine 1 e 2 vengono mostrate insieme, poi le pagine 3 e 4.
- **Due pagine (dispari)** mostra le pagine affiancate, iniziando con una pagina pari a sinistra. Ad esempio, la pagina 1 viene mostrata da sola, poi le pagine 2 e 3 vengono mostrate insieme.
- **Adatta al tema** scurisce i colori del PDF quando il tema di Obsidian è scuro.

## Cercare in un PDF

La ricerca all'interno di un PDF è disponibile solo su desktop. L'app Obsidian su mobile non dispone della ricerca nel visualizzatore PDF.

1. Premi `Ctrl+F` (Windows e Linux) o `Command+F` (macOS).
2. In **Digita per iniziare la ricerca...**, inserisci il testo che vuoi trovare.
3. Seleziona la freccia su o giù per spostarti tra le corrispondenze.

Per cambiare il funzionamento della ricerca, usa queste opzioni.

- **Maiuscole/minuscole** corrisponde esattamente a maiuscole e minuscole. È il pulsante **Aa** nel campo di ricerca.
- **Evidenzia tutto** evidenzia ogni corrispondenza. Seleziona il pulsante impostazioni accanto alle frecce per trovare questa opzione.
- **Diacritici** tratta le lettere con accenti come lettere diverse. Si trova nello stesso menu impostazioni.
- **Parole intere** trova solo parole intere. Si trova nello stesso menu impostazioni.

Seleziona il pulsante chiudi per uscire dalla ricerca.

## Copiare testo da un PDF

Su desktop, seleziona il testo nel PDF, quindi fai clic destro su di esso.

- **Copia** copia il testo.
- **Copia come citazione** copia il testo come citazione, seguito da un collegamento al passaggio.
- **Copia collegamento alla selezione** copia un collegamento a quel passaggio, così puoi incollarlo in una nota.

Una citazione appare così quando la incolli in una nota.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Un collegamento a una selezione ha lo stesso collegamento da solo.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Su mobile, selezionare il testo in un PDF mostra il menu di testo standard del dispositivo. **Copia come citazione** e **Copia collegamento alla selezione** non sono disponibili.

## Incorporare un PDF

Per mostrare un PDF all'interno di una nota, vedi come [[Incorporare file#Incorporare un PDF in una nota|incorporare un PDF in una nota]]. Un PDF incorporato ha la stessa barra degli strumenti del visualizzatore. Seleziona **Modifica blocco** per modificare il collegamento di incorporamento.

## Esportare una nota in PDF

Puoi esportare qualsiasi nota come PDF su desktop. L'esportazione in PDF non è disponibile nell'app Obsidian su mobile.

1. Apri la nota che vuoi esportare.
2. Apri il [[Riquadro comandi]] e seleziona **Esporta PDF**. Puoi anche selezionare **Altre opzioni** ![[lucide-more-horizontal.svg#icon]] nella nota, e poi selezionare **Esporta PDF**.
3. Scegli le impostazioni.
    - **Includi nome file come titolo** aggiunge il nome del file in cima al PDF.
    - **Dimensione pagina** imposta il formato della carta. Puoi scegliere A3, A4, A5, Legal, Letter o Tabloid.
    - **Orizzontale** ruota le pagine in orizzontale.
    - **Margine** imposta il margine della pagina su **Predefinito**, **Stretto** o **Nessuno**.
    - **Riduzione in percentuale** scala il contenuto di ogni pagina. A 100, il contenuto rimane a dimensione piena. Valori inferiori rendono il testo e le immagini più piccoli, così più contenuto entra in ogni pagina.
4. Seleziona **Esporta in PDF**.
5. Scegli dove salvare il file.

> [!tip]- Esportare una nota con un tema scuro
> Le esportazioni usano sempre lo stile chiaro, anche se il tema è scuro. Per cambiare l'aspetto di un'esportazione, puoi usare uno [[Snippet CSS|snippet CSS]]. Il forum di Obsidian contiene esempi di snippet per la stampa e l'esportazione.[^1]

[^1]: Vedi [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) e [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
