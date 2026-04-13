---
permalink: web-clipper/interpreter
aliases:
  - Interpretar páginas web
---
Interpreter é um recurso do [[Introdução ao Obsidian Web Clipper|Web Clipper]] que permite interagir com páginas web usando linguagem natural. O Interpreter ajuda você a capturar e modificar dados que deseja salvar no Obsidian. Por exemplo:

- Extrair fragmentos de texto específicos.
- Resumir ou explicar informações.
- Converter texto de um formato para outro.
- Traduzir texto para um idioma diferente.

O Interpreter utiliza modelos de linguagem para processar informações em uma página web e retornar resultados usando [[Variáveis]] que você pode adicionar aos seus [[Obsidian Web Clipper/Modelos|Modelos do Web Clipper]].

![[web-clipper-interpreter-demo.mp4#interface]]

## Exemplos de prompts

Os prompts usam a sintaxe de [[Variáveis|variável]] `{{"seu prompt"}}`. Você pode usar essa sintaxe com qualquer consulta em linguagem natural, por exemplo:

- `{{"a summary of the page"}}` para extrair um resumo da página.
- `{{"a three bullet point summary, translated to French"}}` para extrair pontos-chave sobre a página e traduzi-los para o francês.
- `{{"un resumé de la page en trois points"}}` para extrair três pontos-chave usando um prompt em francês.

A saída dos seus prompts pode ser manipulada posteriormente usando [[Filtros]]. Os filtros são processados após a resposta do prompt ser recebida do modelo. Por exemplo: `{{"a summary of the page"|blockquote}}` transformará a resposta em uma citação em bloco.

## Primeiros passos

O Interpreter funciona com quase qualquer provedor de modelo de linguagem, incluindo opções que rodam de forma privada no seu dispositivo. Para configurar o Interpreter:

1. Vá para a seção **Interpreter** nas configurações do Web Clipper.
2. Ative **Ativar Interpreter**.
3. Configure seu provedor e modelo, veja a seção [[Interpretar páginas web#Modelos|modelos]] abaixo.
4. Adicione [[Variáveis|variáveis de prompt]] aos seus [[Obsidian Web Clipper/Modelos|modelos]].
5. Se seu modelo incluir variáveis de prompt, a seção Interpreter ficará visível quando você [[Capturar páginas web|capturar uma página]]. Clique em **interpret** para processar as variáveis de prompt.

## Como funciona

Quando o Interpreter está ativado *e* seu modelo contém [[Variáveis#Variáveis de prompt|variáveis de prompt]], uma nova seção Interpreter é exibida na janela da extensão, acima do botão **Adicionar ao Obsidian**. Esta seção permite selecionar um modelo e executar o Interpreter para a página atual.

Quando você clica em **interpret**, o Interpreter envia o contexto da página para o modelo selecionado, junto com *todos* os prompts do seu modelo em uma única requisição. Dependendo do provedor de modelo escolhido, isso pode ser uma chamada externa ou local no seu dispositivo. O modelo avalia seus prompts em relação ao contexto da página e retorna suas respostas. O Interpreter então substitui as variáveis de prompt pelos dados da resposta.

Todo o processo pode levar milissegundos ou mais de 30 segundos, dependendo do modelo que você usa e da quantidade de dados que está processando.

## Contexto

O termo *contexto* refere-se aos dados da página que o Interpreter usa para processar prompts. Quanto menor o contexto, mais rápido o Interpreter executa.

Por padrão, o Interpreter usa o HTML inteiro da página como contexto, porém isso pode tornar os prompts mais lentos e mais caros do que o necessário.

Você pode substituir o contexto padrão nas **Configurações avançadas** do Interpreter e definir o contexto por [[Obsidian Web Clipper/Modelos|modelo]].

Para definir um contexto mais direcionado, use [[Variáveis#Variáveis de seletor|variáveis de seletor]] (ou outros tipos de variáveis) para interpretar uma seção da página. Por exemplo, você poderia usar a seguinte variável de seletor no contexto do Interpreter do seu modelo:

```
{{selectorHtml:#main}}
```

Isso executaria o Interpreter apenas no elemento `#main` de uma página web, se ele existir. [[Filtros#Processamento HTML|Filtros de processamento HTML]] como `remove_html`, `strip_tags` e `strip_attr` podem ser úteis para reduzir ainda mais o tamanho do contexto e acelerar o processamento.

## Modelos

> [!warning] Privacidade
> Ao usar um provedor de modelo de terceiros, você concorda com seus termos e política de privacidade. As requisições do Interpreter são enviadas diretamente ao provedor que você escolher. O Obsidian não coleta nem armazena nenhum dado sobre suas requisições.

### Provedores predefinidos

O Interpreter inclui vários provedores predefinidos. Para usar esses provedores, você precisa de uma chave de API que pode ser obtida fazendo login na conta do seu provedor. Você também precisará decidir qual(is) modelo(s) usar.

| Provedor           | Chave&nbsp;de&nbsp;API                                      | Modelos                                                                              |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [Chave&nbsp;de&nbsp;API](https://console.anthropic.com/settings/keys) | [Modelos](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [Chave&nbsp;de&nbsp;API](https://oai.azure.com/portal/)               | [Modelos](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [Chave de API](https://platform.deepseek.com/api_keys)           | [Modelos](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [Chave&nbsp;de&nbsp;API](https://aistudio.google.com/apikey)          | [Modelos](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [Chave de API](https://huggingface.co/settings/tokens)           | [Modelos](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [Chave de API](https://llama.developer.meta.com)                 | [Modelos](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | n/a                                                         | [Modelos](https://ollama.com/search)                                                  |
| OpenAI             | [Chave&nbsp;de&nbsp;API](https://platform.openai.com/api-keys)        | [Modelos](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [Chave&nbsp;de&nbsp;API](https://openrouter.ai/settings/keys)         | [Modelos](https://openrouter.ai/models)                                               |
| Perplexity         | [Chave de API](https://www.perplexity.ai/settings/api)           | [Modelos](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [Chave de API](https://console.x.ai/team/default/api-keys)       | [Modelos](https://docs.x.ai/docs/models)                                              |

### Escolhendo um modelo

Em geral, recomendamos usar modelos pequenos com o Web Clipper porque são mais rápidos e apresentam desempenho razoavelmente preciso para esta tarefa. Exemplos de modelos menores incluem **Claude Haiku da Anthropic**, **Google Gemini Flash**, **Llama** com parâmetros 3B ou 8B, ou a série de modelos **Mini da OpenAI**.

### Provedores e modelos personalizados

Para adicionar um provedor e/ou modelo personalizado, vá em **[[Configurações]]** do Web Clipper → **Interpreter**:

- **Adicionar provedor** para configurar provedores predefinidos e personalizados.
- **Adicionar modelo** para configurar modelos predefinidos e personalizados.

Ao adicionar um provedor personalizado, recomendamos que você use o endpoint de chat completions para a **URL Base** — ele normalmente termina com `/chat/completions`.

### Modelos locais

O Interpreter pode usar modelos locais que oferecem maior privacidade e compatibilidade offline. Existem várias opções para executar modelos locais. Uma das mais fáceis de configurar é o Ollama.

#### Ollama

O [Ollama](https://ollama.com/) permite executar modelos de linguagem localmente e de forma privada no seu dispositivo.

Depois de baixar e instalar o Ollama, adicione o Ollama usando **Adicionar provedor** nas configurações do Interpreter. O Ollama não requer uma chave de API. Em seguida, escolha um modelo na [lista de modelos](https://ollama.com/search). Por exemplo, se você quiser usar o [Llama 3.2](https://ollama.com/library/llama3.2), clique em **Adicionar modelo**, então:

- **Provedor:** Ollama
- **Nome de exibição:** Llama 3.2, este valor é personalizável.
- **ID do Modelo:** `llama3.2`, deve corresponder exatamente ao ID do modelo do Ollama.

**Iniciar o servidor Ollama**

Para permitir que uma extensão de navegador interaja com o Ollama, você deve [dar instrução explícita](https://github.com/ollama/ollama/issues/2308) ao executar o servidor, caso contrário você verá um erro `403`.

Feche o aplicativo Ollama e execute o seguinte comando no seu terminal. O protocolo deve ser alterado para o protocolo de extensão do seu navegador se você não usar Chrome ou Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Em seguida, execute seu modelo com o Ollama da forma normal, por exemplo:

```
ollama run llama3.2
```

**Tamanho do contexto**

A janela de contexto do Ollama é padrão de 2048 tokens. Este é o número máximo de tokens para a mensagem e resposta. Ao capturar uma página web longa, você pode facilmente exceder esse limite. O Ollama falhará silenciosamente e retornará resultados irrelevantes. Algumas opções:

- Aumentar o parâmetro `num_ctx` do Ollama. Tenha em mente que contextos mais longos requerem mais memória.
- Use o campo [[#Contexto]] no seu modelo para fornecer uma seção mais direcionada da página, ou reduza o contexto usando um [[Filtros|filtro]], por exemplo `{{content|slice:0,1000}}`.
