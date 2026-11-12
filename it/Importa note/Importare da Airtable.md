---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian permette di migrare i dati da Airtable utilizzando il [[Importatore|plugin Importatore]]. Questo convertirà le basi Airtable in file Markdown durevoli che possono essere utilizzati offline con Obsidian e molte altre app.

Ogni tabella diventa una cartella di note con una nota per record, più un file [[Introduzione a Base|Base]] che ricrea la tabella e le sue viste. Poiché utilizza l'API di Airtable, l'importazione richiede un token di accesso personale e una connessione internet.

## Creare un token di accesso personale Airtable

Per accedere ai dati Airtable tramite l'API è necessario un token di accesso personale. Questo passaggio richiede circa due minuti per essere completato.

Il token è una lunga stringa di numeri e lettere che tipicamente inizia con `pat...` e che permetterà di scaricare i dati da Airtable.

1. Accedere ad Airtable e andare alla pagina [Personal access tokens](https://airtable.com/create/tokens) nelle impostazioni dell'account.
2. Scegliere **Create new token**.
3. Assegnare un nome al token, ad es. "Obsidian". Qualsiasi nome può essere utilizzato.
4. Sotto **Scopes**, aggiungere `data.records:read` e `schema.bases:read`.
5. Sotto **Access**, aggiungere le basi che si desidera importare, oppure scegliere tutte le basi in un'area di lavoro.
6. Scegliere **Create token**, quindi **Copy** per copiare il token.
7. Salvare il token in un luogo sicuro come il proprio gestore di password.

Airtable mostra il token una sola volta. Se lo si perde, crearne uno nuovo.

## Importare i dati da Airtable

È necessario il plugin ufficiale Obsidian [[Importatore]], che può essere [installato qui](obsidian://show-plugin?id=obsidian-importer).

1. Aprire **[[Impostazioni]]**.
2. Andare in **Plugin della comunità** e [installare Importatore](obsidian://show-plugin?id=obsidian-importer).
3. Abilitare il plugin Importatore.
4. Aprire Importatore nelle Impostazioni o utilizzando il [[Riquadro comandi]].
5. Sotto **Formattazione file** selezionare **Airtable**.
6. Sotto **Airtable Personal Access Token**, fare clic su **Collega...** per aggiungere un nuovo segreto. Per l'**ID**, assegnare un nome come `airtable`, e per il **Segreto** incollare il token di accesso personale.
7. Fare clic su **Carica** per sfogliare le basi, quindi selezionare le tabelle che si desidera importare.
8. Rivedere e modificare le opzioni di importazione.
9. Selezionare **Importa** per configurare come i campi verranno convertiti in note con [[Proprietà|proprietà]].
10. Selezionare **Continua** per rivedere il modello generato e visualizzare esempi di anteprima dai record.
11. Selezionare **Importa** e attendere il completamento dell'importazione.

## Opzioni di importazione

- **Converti formule** — scegliere se i campi formula, lookup, rollup e conteggio vengono riscritti come [[Formule|formule Base]], ricadendo sul valore calcolato da Airtable quando non esiste un equivalente, oppure importati solo come valori statici.
- **Scarica allegati** — salvare i file allegati nel vault, utilizzando le impostazioni della cartella allegati e del formato dei collegamenti. Quando disabilitato, o quando un download non riesce, la nota collega all'URL del file su Airtable.
- **Nome proprietà vista** — la proprietà che registra a quali viste Airtable appartiene un record. Ogni vista nella Base generata filtra su questa proprietà. Il valore predefinito è `Views`.
- **Salva ID record Airtable** — aggiunge una proprietà `airtable-id` in modo che le importazioni future possano riconoscere i record dopo che le note sono state spostate o rinominate.

## Configurare come vengono importati i campi Airtable

Nel passaggio di configurazione dei campi, è possibile scegliere come ogni campo viene importato.

Per impostazione predefinita, ogni campo Airtable diventa una proprietà. È possibile rinominare o rimuovere le proprietà e modificarne i valori prima di procedere all'anteprima del modello.

Il campo primario di ogni tabella fornisce il nome predefinito della nota. È possibile modificare il modello del nome della nota dal passaggio di anteprima. I record vengono sempre posizionati in una cartella con il nome della tabella.

Consultare [[Modelli importatore]] per personalizzare il Markdown generato.

## Cosa viene importato

Per una base chiamata `Projects` con una tabella `Tasks`, l'importatore crea:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Una nota per record, con il campo primario come titolo della nota e gli altri campi del record come [[Proprietà|proprietà]].
- Un file `.base` per tabella, con ogni vista Airtable mappata a una [[Viste|vista Base]]:
	- **Grid** diventa una [[Vista tabella]].
	- **Gallery** diventa una [[Vista schede]].
	- **List** diventa una [[Vista lista]].
	- **Kanban** diventa una [[Vista kanban]] in Obsidian 1.14 e versioni successive. Airtable non indica in base a quale campo è raggruppato un kanban, quindi [[Vista kanban#Raggruppa le schede in colonne|scegliere una proprietà in base alla quale raggruppare]] dopo l'importazione. Importando nuovamente, la scelta viene mantenuta.
- I tipi di campo Airtable vengono mappati ai tipi di proprietà di Obsidian, senza sovrascrivere i tipi già impostati.
- I record collegati diventano collegamenti alle note corrispondenti.
- Gli allegati vengono scaricati nel vault utilizzando le impostazioni del vault.


## Limitazioni

A causa dei limiti di frequenza dell'API di Airtable, l'importazione di basi grandi potrebbe richiedere un tempo considerevole. Si prega di essere pazienti.

A causa delle limitazioni nell'API di Airtable, alcuni dati non sono disponibili o non possono essere convertiti:

- I valori di rollup non vengono importati. L'API non espone l'aggregazione utilizzata per il valore calcolato di un rollup, quindi viene scritto solo il nome della proprietà, insieme a una formula Base dove lo schema del campo espone un'espressione.
- Le formule che utilizzano funzioni per le quali Obsidian non ha un equivalente, come `SWITCH`, `FIND`, `REGEX_EXTRACT` e `SQRT`, ricadono sul valore statico di Airtable.
- Vengono importate solo le viste grid, gallery, list e kanban. Gli altri tipi di vista, come calendario, timeline e Gantt, vengono ignorati.
- I collegamenti a record in tabelle non selezionate diventano il titolo semplice del record anziché un collegamento.
- I design dell'interfaccia, le automazioni, i commenti e la cronologia delle revisioni non vengono importati.

## Risoluzione dei problemi

In caso di problemi con la conversione, [inviare una segnalazione di bug](https://github.com/obsidianmd/obsidian-importer/issues) per permetterci di migliorarlo.
