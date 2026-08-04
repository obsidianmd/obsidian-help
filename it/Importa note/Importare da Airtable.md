---
permalink: import/airtable
---
Obsidian permette di migrare i dati da Airtable utilizzando il [[Importatore|plugin Importatore]]. Questo convertirà le basi Airtable in file Markdown durevoli che possono essere utilizzati offline con Obsidian e molte altre app.

Ogni tabella diventa una cartella di note con una nota per record, più un file [[Introduzione a Base|Base]] che ricrea la tabella e le sue viste. Poiché utilizza l'API di Airtable, l'importazione richiede un token di accesso personale e una connessione internet.

## Creare un token di accesso personale Airtable

Per accedere ai dati Airtable tramite l'API è necessario un token di accesso personale. Questo passaggio richiede circa 1 minuto per essere completato.

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
4. Aprire il plugin **Importatore** utilizzando il riquadro comandi o l'icona nella barra multifunzione.
5. Sotto **Formattazione file** selezionare **Airtable (API)**.
6. Sotto **Airtable Personal Access Token**, incollare il token creato.
7. Fare clic su **Carica** per sfogliare le basi, quindi selezionare le tabelle che si desidera importare.
8. Rivedere e modificare le opzioni di importazione.
9. Selezionare **Importa** per configurare come i campi verranno convertiti in note con [[Proprietà|proprietà]].
10. Fare clic su **Continua** e attendere il completamento dell'importazione.
11. Fatto!

### Opzioni di importazione

- **Converti formule** — scegliere se i campi formula, lookup, rollup e conteggio vengono riscritti come [[Formule|formule Base]], ricadendo sul valore calcolato da Airtable quando non esiste un equivalente, oppure importati solo come valori statici.
- **Scarica allegati** — salvare i file allegati nel vault, utilizzando le impostazioni della cartella allegati e del formato dei collegamenti. Quando disabilitato, o quando un download non riesce, la nota collega all'URL del file su Airtable.
- **Nome proprietà vista** — la proprietà che registra a quali viste Airtable appartiene un record. Ogni vista nella Base generata filtra su questa proprietà. Il valore predefinito è `base`.
- **Importazione incrementale** — aggiunge una proprietà `airtable-id` a ogni nota in modo che un'importazione successiva possa saltare i record già importati. In un'importazione completa questa proprietà viene nuovamente rimossa.

## Configurare come vengono importati i campi Airtable

Nel secondo passaggio dell'importazione, è possibile scegliere come ogni campo viene importato.

Ogni campo nelle tabelle è attribuito a una variabile chiamata `{{nome_campo}}`. Per impostazione predefinita ogni campo diventa una proprietà, ed è possibile utilizzare queste variabili per rinominare le proprietà, modificarne i valori o scrivere contenuto nel corpo di ogni nota.

Il campo primario di ogni tabella viene sempre utilizzato come titolo della nota, e i record vengono sempre posizionati in una cartella con il nome della tabella, quindi queste opzioni non sono configurabili.

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
	- Tutti gli altri tipi di vista vengono convertiti in vista tabella.
- I tipi di campo Airtable vengono mappati ai tipi di proprietà di Obsidian, senza sovrascrivere i tipi già impostati.
- I record collegati diventano collegamenti alle note corrispondenti.
- Gli allegati vengono scaricati nel vault utilizzando le impostazioni del vault.

## Limitazioni

> [!info] L'importazione da Airtable è nuova
> L'importatore Airtable è nuovo. In caso di problemi con la conversione, [inviare una segnalazione di bug](https://github.com/obsidianmd/obsidian-importer/issues) per permetterci di migliorarlo.

A causa dei limiti di frequenza dell'API di Airtable, l'importazione di basi grandi potrebbe richiedere un tempo considerevole. Si prega di essere pazienti.

A causa delle limitazioni nell'API di Airtable, alcuni dati non sono disponibili o non possono essere convertiti:

- I valori di rollup non vengono importati. L'API non espone l'aggregazione utilizzata per il valore calcolato di un rollup, quindi viene scritto solo il nome della proprietà, insieme a una formula Base dove lo schema del campo espone un'espressione.
- Le formule che utilizzano funzioni per le quali Obsidian non ha un equivalente, come `SWITCH`, `FIND`, `REGEX_EXTRACT` e `SQRT`, ricadono sul valore statico di Airtable.
- Vengono importate solo le viste grid, gallery e list. Gli altri tipi di vista, come calendario, kanban, timeline e Gantt, vengono ignorati.
- I collegamenti a record in tabelle non selezionate diventano il titolo semplice del record anziché un collegamento.
- I design dell'interfaccia, le automazioni, i commenti e la cronologia delle revisioni non vengono importati.
