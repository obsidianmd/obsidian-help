---
permalink: publish/sites
aliases:
  - Manage sites
---
Questa pagina spiega come gestire i siti [[Introduction to Obsidian Publish|Obsidian Publish]].

Un sito è una raccolta di note ospitata da Obsidian Publish e disponibile online, tramite un indirizzo Obsidian Publish o un [[Custom domains|dominio personalizzato]].

## Creare un nuovo sito

> [!note] Il numero di siti che puoi avere contemporaneamente è determinato dal tuo abbonamento a Obsidian Publish. Prima di creare un nuovo sito, assicurati che il tuo abbonamento lo consenta.

1. Nella barra degli strumenti, a sinistra della finestra dell'applicazione, fai clic su **Pubblica modifiche** ( ![[lucide-send.svg#icon]] ).
2. Se hai già un sito esistente, fai clic su **Cambia sito** ( ![[lucide-repeat.svg#icon]] ).
3. In **ID sito**, inserisci il percorso desiderato per il tuo sito. Ad esempio, un sito con l'ID `my-amazing-site` è disponibile all'indirizzo publish.obsidian.md/my-amazing-site.
4. Fai clic su **Crea**.

## Eliminare un sito esistente

> [!note] Le note rimangono nella tua cassaforte anche dopo aver eliminato un sito.

1. Nella barra degli strumenti, a sinistra della finestra dell'applicazione, fai clic su **Pubblica modifiche** ( ![[lucide-send.svg#icon]] ).
2. Fai clic su **Cambia sito** ( ![[lucide-repeat.svg#icon]] ).
3. Fai clic su **Elimina sito** ( ![[lucide-x.svg#icon]] ) a destra del sito che desideri eliminare.
4. Fai clic su **Elimina** per confermare.

## Passare da un sito all'altro

1. Nella barra degli strumenti, a sinistra della finestra dell'applicazione, fai clic su **Pubblica modifiche** ( ![[lucide-send.svg#icon]] ).
2. Fai clic su **Cambia sito** ( ![[lucide-repeat.svg#icon]] ).
3. Fai clic su **Scegli** a destra del sito a cui desideri passare.

## Modificare l'ID del sito

1. Nella barra degli strumenti, a sinistra della finestra dell'applicazione, fai clic su **Pubblica modifiche** ( ![[lucide-send.svg#icon]] ).
2. Fai clic su **Cambia sito** ( ![[lucide-repeat.svg#icon]] ).
3. Fai clic su **Modifica l'ID del sito** ( ![[lucide-edit-3.svg#icon]] ) a destra del sito che desideri modificare.
4. In **ID sito**, inserisci il nuovo ID per il tuo sito.
5. Fai clic su **Modifica**.

## Visualizzare le opzioni del sito

1. Nella barra degli strumenti, a sinistra della finestra dell'applicazione, fai clic su **Pubblica modifiche** ( ![[lucide-send.svg#icon]] ).
2. Nella finestra di dialogo **Pubblica modifiche**, fai clic su **Modifica le opzioni del sito** ( ![[lucide-cog.svg#icon]] ).

## Opzioni sito

### Generale

| Opzione                                             | Tipo    | Descrizione                                                                                                                           |
| --------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Nome sito                                           | Input   | Il nome pubblico e il titolo del tuo sito Obsidian Publish.                                                                           |
| File homepage                                       | Input   | La posizione del file Markdown che desideri utilizzare come pagina di destinazione.                                                   |
| Logo                                                | Input   | L'immagine che desideri utilizzare come banner del sito. L'immagine deve [[Publish your content#Publish notes\|essere pubblicata]].   |
| Collaboratori sito                                  | Pulsante| Dichiara altri utenti a cui vuoi concedere l'accesso per modificare le note pubblicate. Gli utenti devono avere un account Obsidian.  |
| Dominio personalizzato                              | Pulsante| [[Custom domains]]                                                                                                                    |
| Non consentire l'indicizzazione nei motore di ricerca | Toggle  | Impedisce ai motori di ricerca rispettosi di indicizzare il tuo sito aggiungendo un file `robots.txt`.                                |

### Aspetto

| Opzione              | Tipo       | Descrizione                                                                                                |
|----------------------|------------|------------------------------------------------------------------------------------------------------------|
| Tema                 | Menu a tendina | Scegli come il tema viene presentato sul tuo sito: **Chiaro**, **Scuro** o **Adatta al sistema**. |
| Selettore chiaro/scuro | Toggle   | Consenti agli utenti di alternare tra modalità **Chiaro**/**Scuro** con un pulsante di commutazione sul tuo sito. |

## Esperienza di lettura

| Opzione                                  | Tipo   | Descrizione                                                                                                         |
|------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------|
| Mostra anteprima al passaggio del mouse  | Toggle | Abilita o disabilita l'anteprima della pagina al passaggio del mouse su un collegamento interno attivo.             |
| Nascondi titolo della pagina             | Toggle | Abilita o disabilita la visualizzazione del titolo in linea di una nota pubblicata.                                 |
| Migliora leggibilità delle righe         | Toggle | Abilita o disabilita la leggibilità delle righe all'interno del tuo sito.                                          |
| Non mostrare interruzioni di riga singole | Toggle | Abilita o disabilita la visualizzazione delle interruzioni di riga singole sul tuo sito.                           |
| Usa finestre scorrevoli                  | Toggle | Abilita o disabilita le [[Tabs#Stack tab groups\|schede impilate]] sul tuo sito.                                    |

### Componenti

| Opzione                   | Tipo     | Descrizione                                                                                                                                        |
|---------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Mostra navigazione        | Toggle   | Abilita o disabilita la vista [[File explorer]] sul tuo sito Publish.                                                                              |
| Personalizza navigazione  | Pulsante | [[Customize your site#Customize navigation\|Personalizza]] l'ordine in cui i file vengono elencati se **Mostra navigazione** è attivato.           |
| Mostra barra di ricerca   | Toggle   | Abilita o disabilita una barra di ricerca sul tuo sito.                                                                                           |
| Mostra grafo              | Toggle   | Abilita o disabilita la vista grafo nella barra laterale destra del tuo sito.                                                                     |
| Mostra indice             | Toggle   | Abilita o disabilita la vista [[Outline\|Indice]] sul tuo sito.                                                                                   |
| Mostra riferimenti        | Toggle   | Abilita o disabilita i [[Backlinks]] sul tuo sito.                                                                                                |

### Altre impostazioni

| Opzione                                    | Tipo     | Descrizione                                                                                                            |
| ------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| Password                                   | Pulsante | [[Obsidian Publish/Sicurezza e privacy#Add a site password\|Imposta una password]] per limitare l'accesso all'intero sito. |
| Codice di monitoraggio Google Analytics    | Input    | **Solo per URL con dominio personalizzato**. Inserisci qui il codice di monitoraggio Google Analytics del tuo sito.    |
