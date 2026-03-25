---
permalink: glossary
aliases:
  - Glossary
---
Questo glossario include la terminologia comune di Obsidian.

## Alias

Un **alias** è un tipo di [[#Proprietà|proprietà]] che definisce nomi alternativi per una [[#Nota|nota]].

## Allegato

Un **allegato** è un [[Formati di file accettati|formato di file accettato]] che è stato creato al di fuori della cassaforte e aggiunto successivamente.

## Comando

Un **comando** è un'azione che può essere eseguita selezionandola dalla [[Riquadro comandi|Tavolozza dei comandi]] o assegnandola a una [[#Scorciatoia da tastiera|scorciatoia da tastiera]].

## Incorporamento

**Incorporare** significa sostituire un riferimento a un contenuto esterno con il contenuto stesso, ad esempio per includere un'immagine nella propria nota. Vedi anche [[Incorporare file|Incorporare file]].

## Metadati iniziali

I metadati iniziali sono un modo per definire le [[#Proprietà|proprietà]] aggiungendo [YAML](https://yaml.org/) o [JSON](https://www.json.org/) all'inizio della nota. Vedi anche [[Proprietà#Formato delle proprietà|Formato delle proprietà]].

## Grafo

Un **grafo** è una visualizzazione che evidenzia le connessioni tra le [[#Nota|note]]. Vedi anche [[Vista grafo|Vista grafo]].

## Scorciatoia da tastiera

Una **scorciatoia da tastiera** è una combinazione di tasti per un [[#Comando|comando]]. Vedi anche [[Tasti di scelta rapida|Scorciatoie da tastiera]] e [[Tasti di scelta rapida|Come usare le scorciatoie da tastiera]].

## Collegamento

Un **collegamento** fa riferimento a un'altra nota o file. Un [[Collegamenti interni|collegamento interno]] punta a un file situato nella cassaforte corrente. Un [[Sintassi di formattazione di base#Collegamenti esterni|collegamento esterno]] punta a una posizione al di fuori della cassaforte, tipicamente una pagina web.

## Area principale

L'**area principale** è l'area centrale dell'app Obsidian, dove si modificano principalmente le [[#Nota|note]].

## Markdown

Markdown è un linguaggio di markup per la formattazione del testo e il formato di file principale utilizzato per le note in Obsidian, i file `.md`. Vedi anche [[Sintassi di formattazione di base|Sintassi di formattazione di base]].

## Nota

Una **nota** è un file Markdown all'interno di una [[#Cassaforte|cassaforte]].

## Plugin

Un **plugin** estende Obsidian con funzionalità aggiuntive.

- I [[Plugin principali|Plugin principali]] sono scritti dal team di Obsidian e inclusi per impostazione predefinita.
- I [[Plugin della comunità|Plugin della community]] sono scritti da sviluppatori di plugin di terze parti e devono essere [[Plugin della comunità#Installa un plugin della community|installati]] prima di poterli utilizzare.

È possibile [creare il proprio plugin](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin).

## Finestra pop-out

Per impostazione predefinita, tutte le note all'interno di una cassaforte si aprono nella stessa finestra dell'app. Una **finestra pop-out** consente di aprire note dalla stessa cassaforte in finestre separate, ad esempio per visualizzarle su un secondo schermo.

Vedi anche [[Finestre pop-out|Finestre pop-out]].

## Proprietà

Le [[Proprietà|Proprietà]] definiscono informazioni aggiuntive su una nota, come una data di scadenza o un autore.

## Barra degli strumenti

La **barra degli strumenti** funge da contenitore per le icone delle azioni utilizzate più frequentemente.

Nella versione desktop, è l'area verticale situata all'estrema sinistra.

Nella versione mobile, è rappresentata da un pulsante menu ![[lucide-menu.svg#icon]] nella [[#Barra di stato|barra di stato]].

## Barra laterale

Un'area che contiene [[#Vista|viste]] di supporto organizzate come [[#Scheda|schede]]. Una barra laterale può essere suddivisa in più [[#Gruppo di schede|gruppi di schede]].

Obsidian desktop ha due barre laterali, una su ciascun lato dell'[[#Area principale|area principale]]. Entrambe le barre laterali sono accessibili tramite le icone nell'angolo superiore sinistro e superiore destro dell'app Obsidian, oltre che scorrendo a sinistra o a destra. L'icona in alto a destra deve essere tenuta premuta per aprire la finestra.

## Frammento

Un **frammento**, o [[Snippet CSS|frammento CSS]], modifica l'aspetto di Obsidian, proprio come un [[#Tema|tema]]. A differenza dei temi, è possibile applicare più frammenti contemporaneamente.

## Barra di stato

La **barra di stato** nell'applicazione Obsidian mostra statistiche e stati essenziali. Nella versione desktop, si trova nell'angolo in basso a destra, mentre sui dispositivi mobile è posizionata lungo la parte inferiore dell'app.


## Scheda

Una **scheda** contiene una [[#Vista|vista]]. Le schede possono essere riposizionate all'interno dell'[[#Area principale|area principale]] e delle [[#Barra laterale|barre laterali]]. Vedi anche [[Schede|Schede]].

## Gruppo di schede

Un **gruppo di schede** è una raccolta di [[#Scheda|schede]] nell'[[#Area principale|area principale]]. Le schede in un gruppo di schede possono essere impilate.

## Etichetta

Un'**etichetta** è una parola che inizia con un cancelletto (`#`), ad esempio `#libro`. Le etichette sono utilizzate principalmente per trovare [[#Nota|note]] correlate.

## Tema

Un **tema** modifica l'aspetto dell'app Obsidian utilizzando [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). È possibile sovrascrivere parti di un tema utilizzando i [[#Frammento|frammenti]].

## Cassaforte

`Aliases: cassaforte locale, dati locali`

Una **cassaforte** è una cartella nel file system che contiene [[#Nota|note]] e una cartella `.obsidian` con la configurazione specifica di Obsidian. Vedi anche [[Come Obsidian archivia i dati|Come Obsidian archivia i dati]].

### Caveau remoto

`Aliases: Dati remoti`

Un [[Vault locali e remoti|caveau remoto]] è una copia della cassaforte locale mantenuta con [[Introduzione a Obsidian Sync|Obsidian Sync]]. I dati del caveau remoto vengono aggiornati in base alle modifiche ai dati locali.

## Vista

Una **vista** visualizza informazioni, ad esempio la [[Cerca|vista Cerca]].
