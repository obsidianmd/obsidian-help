---
permalink: web-clipper/interpreter
aliases:
  - Interpretar páginas web
---
Interpreter é uma funcionalidade do [[Introdução ao Obsidian Web Clipper|Web Clipper]] que lhe permite interagir com páginas web usando linguagem natural. O Interpreter ajuda-o a capturar e modificar dados que pretende guardar no Obsidian. Por exemplo:

- Extrair fragmentos de texto específicos.
- Resumir ou explicar informações.
- Converter texto de um formato para outro.
- Traduzir texto para um idioma diferente.

O Interpreter utiliza modelos de linguagem para processar informações numa página web e devolver resultados usando [[Variáveis]] que pode adicionar aos seus [[Obsidian Web Clipper/Modelos|Modelos do Web Clipper]].

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## Exemplos de prompts

Os prompts utilizam a sintaxe de [[Variáveis|variáveis]] `{{"o seu prompt"}}`. Pode usar esta sintaxe com qualquer consulta em linguagem natural, por exemplo:

- `{{"a summary of the page"}}` para extrair um resumo da página.
- `{{"a three bullet point summary, translated to French"}}` para extrair marcadores sobre a página e traduzi-los para francês.
- `{{"un resumé de la page en trois points"}}` para extrair três marcadores usando um prompt em francês.

A saída dos seus prompts pode ser manipulada adicionalmente usando [[Filtros]]. Os filtros são processados após a resposta do prompt ser recebida do modelo. Por exemplo: `{{"a summary of the page"|blockquote}}` transformará a resposta numa citação em bloco.

## Começar

O Interpreter funciona com quase qualquer fornecedor de modelos de linguagem, incluindo opções que funcionam de forma privada no seu dispositivo. Para configurar o Interpreter:

1. Vá à secção **Interpreter** nas definições do Web Clipper.
2. Ative **Ativar Interpreter**.
3. Configure o seu fornecedor e modelo, consulte a secção [[Interpretar páginas web#Modelos|modelos]] abaixo.
4. Adicione [[Variáveis|variáveis de prompt]] aos seus [[Obsidian Web Clipper/Modelos|modelos]].
5. Se o seu modelo incluir variáveis de prompt, a secção do Interpreter ficará visível quando [[Recortar páginas web|recortar uma página]]. Clique em **interpret** para processar as variáveis de prompt.

## Como funciona

Quando o Interpreter está ativado *e* o seu modelo contém [[Variáveis#Variáveis de prompt|variáveis de prompt]], uma nova secção do Interpreter é apresentada na janela da extensão, acima do botão **Adicionar ao Obsidian**. Esta secção permite-lhe selecionar um modelo e executar o Interpreter para a página atual.

Quando clica em **interpret**, o Interpreter envia o contexto da página para o modelo selecionado, juntamente com *todos* os prompts no seu modelo num único pedido. Dependendo do fornecedor de modelo que escolher, isto pode ser uma chamada externa ou local para o seu dispositivo. O modelo avalia os seus prompts em relação ao contexto da página e devolve as suas respostas. O Interpreter substitui então as variáveis de prompt pelos dados da resposta.

Todo o processo pode demorar milissegundos ou mais de 30 segundos, dependendo do modelo que utiliza e da quantidade de dados que está a processar.

## Contexto

O termo *contexto* refere-se aos dados da página que o Interpreter utiliza para processar prompts. Quanto menor o contexto, mais rápido o Interpreter executa.

Por predefinição, o Interpreter utiliza todo o HTML da página como contexto, no entanto isto pode tornar os prompts mais lentos e mais dispendiosos do que o necessário.

Pode substituir o contexto predefinido nas **Definições avançadas** do Interpreter e definir o contexto por [[Obsidian Web Clipper/Modelos|modelo]].

Para definir um contexto mais direcionado, use [[Variáveis#Variáveis de seletor|variáveis de seletor]] (ou outros tipos de variáveis) para interpretar uma secção da página. Por exemplo, poderia usar a seguinte variável de seletor no contexto do Interpreter do seu modelo:

```
{{selectorHtml:#main}}
```

Isto executaria o Interpreter apenas no elemento `#main` de uma página web, se existir. [[Filtros#Processamento HTML|Filtros de processamento HTML]] como `remove_html`, `strip_tags` e `strip_attr` podem ser úteis para reduzir ainda mais o comprimento do contexto e acelerar o processamento.

## Modelos

> [!warning] Privacidade
> Ao utilizar um fornecedor de modelos de terceiros, concorda com os seus termos e política de privacidade. Os pedidos do Interpreter são enviados diretamente ao fornecedor que escolher. O Obsidian não recolhe nem armazena quaisquer dados sobre os seus pedidos.

### Fornecedores predefinidos

O Interpreter inclui vários fornecedores predefinidos. Para utilizar estes fornecedores, precisa de uma chave API que pode obter iniciando sessão na sua conta do fornecedor. Também precisará de decidir qual(ais) modelo(s) utilizar.

| Fornecedor         | Chave&nbsp;API                                              | Modelos                                                                              |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [Chave&nbsp;API](https://console.anthropic.com/settings/keys) | [Modelos](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [Chave&nbsp;API](https://oai.azure.com/portal/)               | [Modelos](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [Chave API](https://platform.deepseek.com/api_keys)           | [Modelos](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [Chave&nbsp;API](https://aistudio.google.com/apikey)          | [Modelos](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [Chave API](https://huggingface.co/settings/tokens)           | [Modelos](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [Chave API](https://llama.developer.meta.com)                 | [Modelos](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | n/a                                                         | [Modelos](https://ollama.com/search)                                                  |
| OpenAI             | [Chave&nbsp;API](https://platform.openai.com/api-keys)        | [Modelos](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [Chave&nbsp;API](https://openrouter.ai/settings/keys)         | [Modelos](https://openrouter.ai/models)                                               |
| Perplexity         | [Chave API](https://www.perplexity.ai/settings/api)           | [Modelos](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [Chave API](https://console.x.ai/team/default/api-keys)       | [Modelos](https://docs.x.ai/docs/models)                                              |

### Escolher um modelo

Em geral, recomendamos a utilização de modelos pequenos com o Web Clipper porque são mais rápidos e funcionam com bastante precisão para esta tarefa. Exemplos de modelos mais pequenos incluem o **Claude Haiku da Anthropic**, o **Google Gemini Flash**, o **Llama** com 3B ou 8B parâmetros, ou a série de modelos **Mini da OpenAI**.

### Fornecedores e modelos personalizados

Para adicionar um fornecedor e/ou modelo personalizado, vá a **[[Definições]]** do Web Clipper → **Interpreter**:

- **Adicionar fornecedor** para configurar fornecedores predefinidos e personalizados.
- **Adicionar modelo** para configurar modelos predefinidos e personalizados.

Ao adicionar um fornecedor personalizado, recomendamos que utilize o endpoint de conclusões de chat para o **URL Base** — tipicamente termina com `/chat/completions`.

### Modelos locais

O Interpreter pode utilizar modelos locais que oferecem maior privacidade e compatibilidade offline. Existem várias opções para executar modelos locais. Uma das mais fáceis de configurar é o Ollama.

#### Ollama

O [Ollama](https://ollama.com/) permite-lhe executar modelos de linguagem localmente e de forma privada no seu dispositivo.

Depois de ter transferido e instalado o Ollama, adicione o Ollama usando **Adicionar fornecedor** nas definições do Interpreter. O Ollama não requer uma chave API. Depois escolha um modelo da [lista de modelos](https://ollama.com/search). Por exemplo, se quiser usar o [Llama 3.2](https://ollama.com/library/llama3.2), clique em **Adicionar modelo**, depois:

- **Fornecedor:** Ollama
- **Nome a apresentar:** Llama 3.2, este valor é personalizável.
- **ID do Modelo:** `llama3.2`, deve corresponder exatamente ao ID do modelo do Ollama.

**Iniciar o servidor Ollama**

Para permitir que uma extensão de browser interaja com o Ollama, deve [dar-lhe instruções explícitas](https://github.com/ollama/ollama/issues/2308) ao executar o servidor, caso contrário verá um erro `403`.

Feche a aplicação Ollama e execute o seguinte comando no seu terminal. O protocolo deve ser alterado para o protocolo de extensão do seu browser se não utilizar Chrome ou Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Depois execute o seu modelo com o Ollama da forma habitual, por exemplo:

```
ollama run llama3.2
```

**Comprimento do contexto**

A janela de contexto do Ollama tem como predefinição 2048 tokens. Este é o número máximo de tokens para a mensagem e resposta. Ao recortar uma página web longa, pode facilmente exceder este limite. O Ollama falhará silenciosamente e devolverá resultados irrelevantes. Algumas opções:

- Aumente o parâmetro `num_ctx` do Ollama. Tenha em atenção que um contexto mais longo requer mais memória.
- Utilize o campo [[#Contexto]] no seu modelo para fornecer uma secção mais direcionada da página, ou reduza o contexto usando um [[Filtros|filtro]], por exemplo `{{content|slice:0,1000}}`.
