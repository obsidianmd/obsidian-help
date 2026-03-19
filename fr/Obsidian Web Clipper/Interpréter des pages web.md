---
permalink: web-clipper/interpreter
aliases:
  - Plugins/Web Clipper/L'outil Interpréteur
localized: '2026-03-18'
---
Interpreter est une fonctionnalité de [[Introduction à Obsidian Web Clipper|Web Clipper]] qui vous permet d'interagir avec des pages web en utilisant le langage naturel. Interpreter vous aide à capturer et modifier les données que vous souhaitez enregistrer dans Obsidian. Par exemple :

- Extraire des fragments de texte spécifiques.
- Résumer ou expliquer des informations.
- Convertir du texte d'un format à un autre.
- Traduire du texte dans une autre langue.

Interpreter utilise des modèles de langage pour traiter les informations d'une page web et renvoyer des résultats en utilisant des [[Variables]] que vous pouvez ajouter à vos [[Obsidian Web Clipper/Modèles|modèles Web Clipper]].

![[web-clipper-interpreter-demo.mp4#interface]]

## Exemples de prompts

Les prompts utilisent la syntaxe des [[Variables|variables]] `{{"votre prompt"}}`. Vous pouvez utiliser cette syntaxe avec n'importe quelle requête en langage naturel, par exemple :

- `{{"a summary of the page"}}` pour extraire un résumé de la page.
- `{{"a three bullet point summary, translated to French"}}` pour extraire des points clés sur la page et les traduire en français.
- `{{"un résumé de la page en trois points"}}` pour extraire trois points clés en utilisant un prompt en français.

Le résultat de vos prompts peut être davantage manipulé à l'aide de [[Filtres]]. Les filtres sont traités après la réception de la réponse du modèle. Par exemple : `{{"a summary of the page"|blockquote}}` transformera la réponse en bloc de citation.

## Premiers pas

Interpreter fonctionne avec la plupart des fournisseurs de modèles de langage, y compris des options qui s'exécutent de manière privée sur votre appareil. Pour configurer Interpreter :

1. Accédez à la section **Interpreter** dans les paramètres de Web Clipper.
2. Activez **Enable Interpreter**.
3. Configurez votre fournisseur et votre modèle, voir la section [[Interpréter des pages web#Modèles|modèles]] ci-dessous.
4. Ajoutez des [[Variables|variables de prompt]] à vos [[Obsidian Web Clipper/Modèles|modèles]].
5. Si votre modèle contient des variables de prompt, la section Interpreter sera visible lorsque vous [[Capturer des pages web|capturez une page]]. Cliquez sur **interpret** pour traiter les variables de prompt.

## Comment ça fonctionne

Lorsque Interpreter est activé *et* que votre modèle contient des [[Variables#Variables d'invite|variables de prompt]], une nouvelle section Interpreter s'affiche dans la fenêtre de l'extension, au-dessus du bouton **Add to Obsidian**. Cette section vous permet de sélectionner un modèle et d'exécuter Interpreter pour la page actuelle.

Lorsque vous cliquez sur **interpret**, Interpreter envoie le contexte de la page à votre modèle sélectionné, accompagné de *tous* les prompts de votre modèle en une seule requête. Selon le fournisseur de modèle que vous choisissez, il peut s'agir d'un appel externe ou local à votre appareil. Le modèle évalue vos prompts par rapport au contexte de la page et renvoie ses réponses. Interpreter remplace ensuite les variables de prompt par les données de réponse.

L'ensemble du processus peut prendre quelques millisecondes ou plus de 30 secondes selon le modèle que vous utilisez et la quantité de données que vous traitez.

## Contexte

Le terme *contexte* fait référence aux données de la page qu'Interpreter utilise pour traiter les prompts. Plus le contexte est petit, plus Interpreter s'exécute rapidement.

Par défaut, Interpreter utilise l'intégralité du HTML de la page comme contexte, mais cela peut rendre les prompts plus lents et plus coûteux que nécessaire.

Vous pouvez remplacer le contexte par défaut dans les **paramètres avancés** d'Interpreter et définir un contexte par [[Obsidian Web Clipper/Modèles|modèle]].

Pour définir un contexte plus ciblé, utilisez des [[Variables#Variables de sélecteur|variables de sélecteur]] (ou d'autres types de variables) pour interpréter une section de la page. Par exemple, vous pourriez utiliser la variable de sélecteur suivante dans le contexte Interpreter de votre modèle :

```
{{selectorHtml:#main}}
```

Cela n'exécuterait Interpreter que sur l'élément `#main` d'une page web, s'il existe. Les [[Filtres#Traitement HTML|filtres de traitement HTML]] comme `remove_html`, `strip_tags` et `strip_attr` peuvent être utiles pour réduire davantage la longueur du contexte et accélérer le traitement.

## Modèles

> [!warning] Confidentialité
> En utilisant un fournisseur de modèle tiers, vous acceptez ses conditions et sa politique de confidentialité. Les requêtes Interpreter sont envoyées directement au fournisseur que vous choisissez. Obsidian ne collecte ni ne stocke aucune donnée concernant vos requêtes.

### Fournisseurs prédéfinis

Interpreter inclut plusieurs fournisseurs prédéfinis. Pour utiliser ces fournisseurs, vous avez besoin d'une clé API que vous pouvez obtenir en vous connectant à votre compte chez le fournisseur. Vous devrez également décider quel(s) modèle(s) utiliser.

| Fournisseur        | Clé&nbsp;API                                                | Modèles                                                                              |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [Clé&nbsp;API](https://console.anthropic.com/settings/keys) | [Modèles](https://docs.anthropic.com/en/docs/about-claude/models)                    |
| Azure&nbsp;OpenAI  | [Clé&nbsp;API](https://oai.azure.com/portal/)               | [Modèles](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [Clé API](https://platform.deepseek.com/api_keys)           | [Modèles](https://api-docs.deepseek.com/quick_start/pricing)                         |
| Google&nbsp;Gemini | [Clé&nbsp;API](https://aistudio.google.com/apikey)          | [Modèles](https://ai.google.dev/gemini-api/docs/models/gemini)                       |
| Hugging Face       | [Clé API](https://huggingface.co/settings/tokens)           | [Modèles](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)  |
| Meta               | [Clé API](https://llama.developer.meta.com)                 | [Modèles](https://llama.developer.meta.com/docs/models)                              |
| Ollama             | n/a                                                         | [Modèles](https://ollama.com/search)                                                 |
| OpenAI             | [Clé&nbsp;API](https://platform.openai.com/api-keys)        | [Modèles](https://platform.openai.com/docs/models)                                   |
| OpenRouter         | [Clé&nbsp;API](https://openrouter.ai/settings/keys)         | [Modèles](https://openrouter.ai/models)                                              |
| Perplexity         | [Clé API](https://www.perplexity.ai/settings/api)           | [Modèles](https://docs.perplexity.ai/guides/model-cards)                             |
| xAI Grok           | [Clé API](https://console.x.ai/team/default/api-keys)       | [Modèles](https://docs.x.ai/docs/models)                                             |

### Choisir un modèle

De manière générale, nous recommandons d'utiliser de petits modèles avec Web Clipper car ils sont plus rapides et offrent des performances assez précises pour cette tâche. Parmi les exemples de modèles plus petits, on trouve **Claude Haiku d'Anthropic**, **Google Gemini Flash**, **Llama** avec 3B ou 8B paramètres, ou la série de modèles **Mini d'OpenAI**.

### Fournisseurs et modèles personnalisés

Pour ajouter un fournisseur et/ou un modèle personnalisé, accédez aux **[[Paramètres]]** de Web Clipper → **Interpreter** :

- **Add provider** pour configurer des fournisseurs prédéfinis et personnalisés.
- **Add model** pour configurer des modèles prédéfinis et personnalisés.

Lors de l'ajout d'un fournisseur personnalisé, nous recommandons d'utiliser son point de terminaison de complétion de chat pour l'**URL de base** — elle se termine généralement par `/chat/completions`.

### Modèles locaux

Interpreter peut utiliser des modèles locaux qui offrent une meilleure confidentialité et une compatibilité hors ligne. Plusieurs options existent pour exécuter des modèles locaux. L'une des plus faciles à configurer est Ollama.

#### Ollama

[Ollama](https://ollama.com/) vous permet d'exécuter des modèles de langage localement et de manière privée sur votre appareil.

Une fois Ollama téléchargé et installé, ajoutez Ollama en utilisant **Add provider** dans les paramètres d'Interpreter. Ollama ne nécessite pas de clé API. Choisissez ensuite un modèle dans la [liste des modèles](https://ollama.com/search). Par exemple, si vous souhaitez utiliser [Llama 3.2](https://ollama.com/library/llama3.2), cliquez sur **Add model**, puis :

- **Provider :** Ollama
- **Display name :** Llama 3.2, cette valeur est personnalisable.
- **Model ID :** `llama3.2`, cela doit correspondre exactement à l'identifiant du modèle d'Ollama.

**Démarrer le serveur Ollama**

Pour permettre à une extension de navigateur d'interagir avec Ollama, vous devez [lui donner une instruction explicite](https://github.com/ollama/ollama/issues/2308) lors du démarrage du serveur, sinon vous verrez une erreur `403`.

Fermez l'application Ollama et exécutez la commande suivante dans votre terminal. Le protocole doit être modifié selon le protocole d'extension de votre navigateur si vous n'utilisez pas Chrome ou Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Puis exécutez votre modèle avec Ollama de la manière habituelle, par exemple :

```
ollama run llama3.2
```

**Longueur du contexte**

La fenêtre de contexte d'Ollama est par défaut de 2048 tokens. C'est le nombre maximum de tokens pour le message et la réponse. Lors de la capture d'une longue page web, vous pouvez facilement dépasser cette limite. Ollama échouera silencieusement et renverra des résultats non pertinents. Quelques options :

- Augmenter le paramètre `num_ctx` d'Ollama. Gardez à l'esprit qu'un contexte plus long nécessite plus de mémoire.
- Utilisez le champ [[#Contexte]] dans votre modèle pour fournir une section plus ciblée de la page, ou réduisez le contexte à l'aide d'un [[Filtres|filtre]], par exemple `{{content|slice:0,1000}}`.
