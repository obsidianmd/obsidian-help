L'***Interpréteur*** est un outil du [[Introduction au Web Clipper d'Obsidian|Web clipper]] qui vous permet d'interagir avec les pages Web en utilisant du langage naturel. Il vous aide à capturer et modifier des données que vous voulez sauvegarder dans Obsidian.
Vous pouvez par exemple : 
- Extraire des fragments de texte ;
- Résumer ou expliquer des informations ; 
- Convertir du texte d'un format vers un autre ; 
- Traduire du texte d'un langage vers un autre, etc.

L'Interpréteur exploite des modèles IA de langages pour traiter les informations d'une page Web et fournir des résultats tout en s'adaptant aux variables que vous ajoutez à vos templates Web clipper. 

![[web-clipper-interpreter-demo.mp4]] 

### Exemples de prompts

Les prompts de l'Interpréteur utilisent la syntaxe de variable  `{{"votre prompt"}}`. Vous pouvez utiliser avec cette syntax n'importe quel langage naturel. 

Les sorties de vos prompts peuvent être manipulés en utilisant les filtres. Les filtres traitent l'information après que la réponse du prompt ait été reçue par le modèle.
	Par exemple : ``{{"a summary of the page"|blockquote}}`` donnera à la réponse la forme d'un bloc de citation.  

### Comment commencer ? 

L'Interpréteur fonctionne avec presque tous les modèles de langage, incluant des options qui tournent sur votre appareil de façon confidentielle. 
Pour paramétrer l'Interpréteur : 
1. Allez dans la section **"Interpréteur"** des paramètres du Web clipper ; 
2. Mettez sur "on" le paramètre "**Activer l'interpréteur" ;
3. Ajoutez un fournisseur et un modèle langage plus bas sur la même page et configurez-les (à cette étape, il vous faudra renseigner une [[L'outil Interpréteur#Fournisseurs prédéfinis|clé API]] pour chaque modèle) ;
4. Ajoutez des variables de prompts à vos templates ;
5. Si vos templates incluent des variables de prompts, la section de l'Interpréteur sera visible quand vous enregistrez une page. Cliquez sur **interpréter** pour mettre en route les variables de prompt. 

### Comment cela fonctionne-t-il ? 

Quand l'Interpréteur est activé *et* que vous avez des variables de prompts dans vos templates, vous verrez s'afficher dans la fenêtre de l'extension une nouvelle section pour l'interpréteur, au-dessus du bouton **Ajouter à Obsidian**. Cette section vous permet de sélectionner un modèle de langage et de mettre en route l'Interpréteur pour la page que vous consultez. 

Quand vous cliquer sur **interpréter**, l'Interpréteur envoie le contexte de la page à votre modèle de langage, ainsi que tous les prompts de votre template, cela en une seule requête. Selon le fournisseur de modèle que vous avez choisi, la requête peut être envoyée sur internet ou localement sur votre ordinateur. Le modèle compte votre prompt à la page de contexte, et vous envoie une réponse en retour. L'Interpréteur remplace ensuite les variables du prompt par les données correspondant à la réponse. 

Tout ce processus peut prendre de quelque millisecondes à plus de 30 secondes selon le modèle que vous utilisez et la quantité de données que vous lui demandez de traiter. 

### Le contexte

Le terme *contexte* fait référence aux données de la page que l'Interpréteur utilise pour traiter les prompts. Plus le contexte est simple et petit, plus l'Interpréteur fonctionnera rapidement. 

Par défaut, l'Interpréteur utilise toute la page HTML comme contexte, cependant cela peut rendre les prompts plus lents et nécessiter plus de ressources. Vous pouvez passer outre le contexte par défaut dans les **Paramètres avancés** de l'Interpréteur et le remplacer par un contexte que vous aurez définit vous-même avec une template. 

Pour définir un contexte plus ciblé, utilisez les variables de sélecteur (ou d'autres types de variables) pour interpréter une partie de la page. Par exemple, vous pouvez utiliser la variable de sélecteur suivantes dans vos templates de contexte : ``{{selectorHtml:#main}}``. 
Cela va mettre en route l'Interpréteur seulement sur l'élément désigner par ``#main``, s'il existe. Les filtres de traitement HTML tels que  `remove_html`, `strip_tags` et `strip_attr` peuvent être utilisés pour réduire le contexte et accélérer la vitesse de traitement. 

### Les modèles

> [!warning] Confidentialité de vos données
> En utilisant un fournisseur de modèle tiers, vous acceptez ses conditions d'utilisation et sa politique de confidentialité. Les requêtes de l'Interpréteur sont envoyées directement au fournisseur que vous avez choisis. Obsidian ne collecte ni ne traite aucune donnée concernant votre requête. 

### Fournisseurs prédéfinis

L'interpréteur inclue plusieurs fournisseurs prédéfinis. Pour les utiliser, il vous faut une clé API. Vous pouvez la récupérer en vous connectant à votre compte personnel que vous aurez créé sur le site du fournisseur. 
Voici la liste des fournisseurs avec leurs clés API et leurs modèles pour vous aider à en choisir un : 

| **Fournisseur** | **Clé API**                                            | **Modèle**                                                                           |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Anthropic       | [API key](https://console.anthropic.com/settings/keys) | [Models](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure OpenAI    | [API key](https://oai.azure.com/portal/)               | [Models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek        | [API key](https://platform.deepseek.com/api_keys)      | [Models](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google Gemini   | [API key](https://aistudio.google.com/apikey)          | [Models](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face    | [API key](https://huggingface.co/settings/tokens)      | [Models](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta            | [API key](https://llama.developer.meta.com/)           | [Models](https://llama.developer.meta.com/docs/models)                               |
| Ollama          | n/d                                                    | [Models](https://ollama.com/search)                                                  |
| OpenAI          | [API key](https://platform.openai.com/api-keys)        | [Models](https://platform.openai.com/docs/models)                                    |
| OpenRouter      | [API key](https://openrouter.ai/settings/keys)         | [Models](https://openrouter.ai/models)                                               |
| Perplexity      | [API key](https://console.x.ai/team/default/api-keys)  | [Models](https://docs.perplexity.ai/guides/model-cards)                              |

### Choisir un modèle

En général, nous recommandant d'utiliser un modèle peut gourmand avec le Web clipper parce qu'ils sont plus rapides et plus performants pour ce genre de tâche. 
	Quelques exemples de modèle peu gourmands :  **Anthropic's Claude Haiku** ; **Google Gemini Flash** ; **Llama** avec les paramètres 3B ou 8B ; les séries de modèles **OpenAI's Mini**.

### Ajouter d'autres fournisseurs et modèles 

Pour ajouter des fournisseurs et modèles qui ne font pas partie de ceux que nous avons prédéfinis, allez dans les **Paramètres du Web clipper** → **Interpréteur** :
- Cliquez sur **Ajouter un fournisseur** pour ajouter et configurer un nouveau fournisseur.
- Cliquez sur **Ajouter un modèle** pour ajouter et configurer un nouveau modèle.
 Lors de l'ajout d'un nouveau fournisseur, nous recommandons d'utiliser leur point de terminaison de complétions de chat pour l'URL de base — il se termine généralement par `/chat/completions`. 

### Modèles locaux

L'Interpréteur peut aussi utiliser des modèles locaux. Leur avantage est qu'ils vous offrirons une meilleure confidentialité et la possibilité de fonctionner hors-ligne. Il y existe plusieurs options de modèles fonctionnant en local. L'un des plus faciles à utiliser est Ollama. 

#### Ollama

[Ollama](https://ollama.com/) vous permet de faire fonctionner des modèles de langage localement sur votre machine, en toute confidentialité.
Une fois que vous avez téléchargé et installé Ollama, ajoutez Ollama en cliquant sur  **Ajouter un fournisseur** dans les **Paramètres de l'Interpréteur** (un autre avantage d'Ollama est qu'il ne recquiert pas de clé API). Choisissez ensuite un modèle à partir de leur [liste de modèles](https://ollama.com/search). Par exemple, si vous voulez utiliser Llama 3.2, cliquez sur Ajouter un modèle, puis :
- **Fournisseur :** Ollama ;
- **Nom d'affichage :** Llama 3.2 (personnalisable) ;
- **ID du modèle :** `llama3.2` (cela doit correspondre exactement à l'ID de modèle tel que renseigné sur le site de Ollama). 

##### Démarrer le serveur Ollama.

Pour autoriser une extension de navigateur à interagir avec Ollama, vous devez lui [donner des instructions explicites](https://github.com/ollama/ollama/issues/2308) quand le serveur est en route, sans quoi vous verrez un message d'erreur 403.

Fermez l'application Ollama, et entrez la commande suivante dans votre terminal (Le protocole doit être remplacé par le protocole d'extension de votre navigateur si vous n'utilisez pas Chrome ou Firefox) :
``OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve`` 
Ensuite, mettez votre modèle en route avec Ollama. 
``ollama run llama3.2``

##### Largeur du contexte

La fenêtre de contexte d'Ollama est par défaut de 2048 tokens. C'est le nombre maximum de tokens pour les messages et les réponses. Quand vous enregistrez une longue page Web, vous pouvez facilement dépasser cette limite. Cela causera un échec de la requête que vous remarquerez par une réponse impertinente. 
Pour remédier à cela, voici les options qui s'offrent à vous : 
- Augmenter les paramètres d'Ollama avec  `num_ctx` (n'oubliez pas que plus de contexte recquiert plus de mémoire).
- Utiliser le champs "Contexte" de votre template pour mieux cibler la partie de la page que vous souhaitez enregistrer ou raccourcissez le contexte avec un filtre (exemple : `{{content|slice:0,1000}}`). 