---
permalink: web-clipper/interpreter
aliases:
  - Interpretar páginas web
---
Interpreter es una función de [[Introducción a Obsidian Web Clipper|Web Clipper]] que te permite interactuar con páginas web usando lenguaje natural. Interpreter te ayuda a capturar y modificar datos que quieres guardar en Obsidian. Por ejemplo:

- Extraer fragmentos de texto específicos.
- Resumir o explicar información.
- Convertir texto de un formato a otro.
- Traducir texto a un idioma diferente.

Interpreter aprovecha modelos de lenguaje para procesar información en una página web y devolver resultados usando [[Variables]] que puedes añadir a tus [[Obsidian Web Clipper/Plantillas|Plantillas de Web Clipper]].

![[web-clipper-interpreter-demo.mp4#interface]]

## Ejemplos de prompts

Los prompts usan la sintaxis de [[Variables|variable]] `{{"tu prompt"}}`. Puedes usar esta sintaxis con cualquier consulta en lenguaje natural, por ejemplo:

- `{{"a summary of the page"}}` para extraer un resumen de la página.
- `{{"a three bullet point summary, translated to French"}}` para extraer viñetas sobre la página y traducirlas al francés.
- `{{"un resumé de la page en trois points"}}` para extraer tres viñetas usando un prompt en francés.

La salida de tus prompts puede manipularse adicionalmente usando [[Filtros]]. Los filtros se procesan después de que la respuesta del prompt se recibe del modelo. Por ejemplo: `{{"a summary of the page"|blockquote}}` convertirá la respuesta en una cita en bloque.

## Primeros pasos

Interpreter funciona con casi cualquier proveedor de modelos de lenguaje, incluyendo opciones que se ejecutan de forma privada en tu dispositivo. Para configurar Interpreter:

1. Ve a la sección **Interpreter** en los ajustes de Web Clipper.
2. Activa **Enable Interpreter**.
3. Configura tu proveedor y modelo, consulta la sección de [[Interpretar páginas web#Modelos|modelos]] a continuación.
4. Añade [[Variables|variables de prompt]] a tus [[Obsidian Web Clipper/Plantillas|plantillas]].
5. Si tu plantilla incluye variables de prompt, la sección de Interpreter será visible cuando [[Recortar páginas web|recortes una página]]. Haz clic en **interpret** para procesar las variables de prompt.

## Cómo funciona

Cuando Interpreter está habilitado *y* tu plantilla contiene [[Variables#Variables de prompt|variables de prompt]], se muestra una nueva sección de Interpreter en la ventana de la extensión, encima del botón **Add to Obsidian**. Esta sección te permite seleccionar un modelo y ejecutar Interpreter para la página actual.

Cuando haces clic en **interpret**, Interpreter envía el contexto de la página a tu modelo seleccionado, junto con *todos* los prompts en tu plantilla en una sola solicitud. Dependiendo del proveedor de modelo que elijas, esto puede ser una llamada externa o local a tu dispositivo. El modelo evalúa tus prompts contra el contexto de la página y devuelve sus respuestas. Interpreter entonces reemplaza las variables de prompt con los datos de respuesta.

Todo el proceso puede tomar milisegundos o más de 30 segundos dependiendo del modelo que uses y la cantidad de datos que estés procesando.

## Contexto

El término *contexto* se refiere a los datos de la página que Interpreter usa para procesar los prompts. Cuanto menor sea el contexto, más rápido se ejecuta Interpreter.

Por defecto, Interpreter usa el HTML completo de la página como contexto, sin embargo esto puede hacer que los prompts sean más lentos y costosos de lo necesario.

Puedes anular el contexto predeterminado en los **Ajustes avanzados** de Interpreter y definir el contexto por [[Obsidian Web Clipper/Plantillas|plantilla]].

Para definir un contexto más específico usa [[Variables#Variables de selector|variables de selector]] (u otros tipos de variables) para interpretar una sección de la página. Por ejemplo, podrías usar la siguiente variable de selector en el contexto de Interpreter de tu plantilla:

```
{{selectorHtml:#main}}
```

Esto solo ejecutaría Interpreter en el elemento `#main` de una página web, si existe. Los [[Filtros#Procesamiento HTML|filtros de procesamiento HTML]] como `remove_html`, `strip_tags` y `strip_attr` pueden ser útiles para reducir aún más la longitud del contexto y acelerar el procesamiento.

## Modelos

> [!warning] Privacidad
> Al usar un proveedor de modelos de terceros aceptas sus términos y política de privacidad. Las solicitudes de Interpreter se envían directamente al proveedor que elijas. Obsidian no recopila ni almacena ningún dato sobre tus solicitudes.

### Proveedores preconfigurados

Interpreter incluye varios proveedores preconfigurados. Para usar estos proveedores necesitas una clave API que puedes obtener iniciando sesión en la cuenta de tu proveedor. También necesitarás decidir qué modelo(s) usar.

| Proveedor          | Clave&nbsp;API                                              | Modelos                                                                              |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [Clave&nbsp;API](https://console.anthropic.com/settings/keys) | [Modelos](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [Clave&nbsp;API](https://oai.azure.com/portal/)               | [Modelos](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [Clave API](https://platform.deepseek.com/api_keys)           | [Modelos](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [Clave&nbsp;API](https://aistudio.google.com/apikey)          | [Modelos](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [Clave API](https://huggingface.co/settings/tokens)           | [Modelos](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [Clave API](https://llama.developer.meta.com)                 | [Modelos](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | n/a                                                         | [Modelos](https://ollama.com/search)                                                  |
| OpenAI             | [Clave&nbsp;API](https://platform.openai.com/api-keys)        | [Modelos](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [Clave&nbsp;API](https://openrouter.ai/settings/keys)         | [Modelos](https://openrouter.ai/models)                                               |
| Perplexity         | [Clave API](https://www.perplexity.ai/settings/api)           | [Modelos](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [Clave API](https://console.x.ai/team/default/api-keys)       | [Modelos](https://docs.x.ai/docs/models)                                              |

### Elegir un modelo

En general recomendamos usar modelos pequeños con Web Clipper porque son más rápidos y funcionan con bastante precisión para esta tarea. Ejemplos de modelos más pequeños incluyen **Claude Haiku de Anthropic**, **Google Gemini Flash**, **Llama** con parámetros 3B u 8B, o la serie de modelos **Mini de OpenAI**.

### Proveedores y modelos personalizados

Para añadir un proveedor y/o modelo personalizado ve a **[[Configuración]]** de Web Clipper → **Interpreter**:

- **Add provider** para configurar proveedores preconfigurados y personalizados.
- **Add model** para configurar modelos preconfigurados y personalizados.

Al añadir un proveedor personalizado, recomendamos que uses su endpoint de chat completions para la **Base URL** — normalmente termina con `/chat/completions`.

### Modelos locales

Interpreter puede usar modelos locales que ofrecen mayor privacidad y compatibilidad sin conexión. Existen varias opciones para ejecutar modelos locales. Una de las más fáciles de configurar es Ollama.

#### Ollama

[Ollama](https://ollama.com/) te permite ejecutar modelos de lenguaje de forma local y privada en tu dispositivo.

Una vez que hayas descargado e instalado Ollama, añade Ollama usando **Add provider** en los ajustes de Interpreter. Ollama no requiere una clave API. Luego elige un modelo de la [lista de modelos](https://ollama.com/search). Por ejemplo, si quieres usar [Llama 3.2](https://ollama.com/library/llama3.2), haz clic en **Add model**, luego:

- **Provider:** Ollama
- **Display name:** Llama 3.2, este valor es personalizable.
- **Model ID:** `llama3.2`, debe coincidir exactamente con el ID del modelo de Ollama.

**Iniciar el servidor de Ollama**

Para permitir que una extensión del navegador interactúe con Ollama debes [darle instrucciones explícitas](https://github.com/ollama/ollama/issues/2308) al ejecutar el servidor, o de lo contrario verás un error `403`.

Cierra la aplicación de Ollama y ejecuta el siguiente comando en tu terminal. El protocolo debe cambiarse al protocolo de extensión de tu navegador si no usas Chrome o Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Luego ejecuta tu modelo con Ollama de la manera habitual, por ejemplo:

```
ollama run llama3.2
```

**Longitud de contexto**

La ventana de contexto de Ollama tiene un valor predeterminado de 2048 tokens. Este es el número máximo de tokens para el mensaje y la respuesta. Al recortar una página web larga puedes exceder fácilmente este límite. Ollama fallará silenciosamente y devolverá resultados irrelevantes. Algunas opciones:

- Aumentar el parámetro `num_ctx` de Ollama. Ten en cuenta que un contexto más largo requiere más memoria.
- Usa el campo de [[#Contexto]] en tu plantilla para proporcionar una sección más específica de la página, o recorta el contexto usando un [[Filtros|filtro]], por ejemplo `{{content|slice:0,1000}}`.
