---
permalink: web-clipper/interpreter
aliases:
  - បកស្រាយទំព័របណ្តាញ
---
Interpreter គឺជាមុខងារ [[ការណែនាំអំពី Obsidian Web Clipper|Web Clipper]] ដែលអនុញ្ញាតឱ្យអ្នកធ្វើអន្តរកម្មជាមួយទំព័របណ្តាញដោយប្រើភាសាធម្មជាតិ។ Interpreter ជួយអ្នកចាប់យក និងកែប្រែទិន្នន័យដែលអ្នកចង់រក្សាទុកទៅ Obsidian។ ឧទាហរណ៍៖

- ដកស្រង់អត្ថបទជាក់លាក់។
- សង្ខេប ឬពន្យល់ព័ត៌មាន។
- បម្លែងអត្ថបទពីទម្រង់មួយទៅទម្រង់ផ្សេង។
- បកប្រែអត្ថបទទៅភាសាផ្សេង។

Interpreter ប្រើប្រាស់គំរូភាសាដើម្បីដំណើរការព័ត៌មានលើទំព័របណ្តាញ និងផ្តល់លទ្ធផលដោយប្រើ [[អថេរ]] ដែលអ្នកអាចបន្ថែមទៅ [[Obsidian Web Clipper/ពុម្ព|ពុម្ព Web Clipper]] របស់អ្នក។

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## ឧទាហរណ៍នៃ prompts

Prompts ប្រើ[[អថេរ|វាក្យសម្ពន្ធអថេរ]] `{{"your prompt"}}`។ អ្នកអាចប្រើវាក្យសម្ពន្ធនេះជាមួយសំណួរភាសាធម្មជាតិណាមួយ ឧ.

- `{{"a summary of the page"}}` ដើម្បីដកស្រង់សេចក្តីសង្ខេបរបស់ទំព័រ។
- `{{"a three bullet point summary, translated to French"}}` ដើម្បីដកស្រង់ចំណុចសំខាន់ៗអំពីទំព័រ និងបកប្រែវាទៅជាភាសាបារាំង។
- `{{"un resumé de la page en trois points"}}` ដើម្បីដកស្រង់ចំណុចបីដោយប្រើ prompt ជាភាសាបារាំង។

លទ្ធផលនៃ prompts របស់អ្នកអាចត្រូវបានរៀបចំបន្ថែមដោយប្រើ [[តម្រង]]។ តម្រងត្រូវបានដំណើរការបន្ទាប់ពីការឆ្លើយតប prompt ត្រូវបានទទួលពីគំរូ។ ឧទាហរណ៍៖ `{{"a summary of the page"|blockquote}}` នឹងបម្លែងការឆ្លើយតបទៅជា blockquote។

## ចាប់ផ្តើម

Interpreter ដំណើរការជាមួយអ្នកផ្តល់គំរូភាសាស្ទើរតែទាំងអស់ រួមទាំងជម្រើសដែលដំណើរការជាឯកជនលើឧបករណ៍របស់អ្នក។ ដើម្បីរៀបចំ Interpreter៖

1. ទៅផ្នែក **Interpreter** នៅក្នុងការកំណត់ Web Clipper។
2. បើក **Enable Interpreter**។
3. កំណត់រចនាសម្ព័ន្ធអ្នកផ្តល់ និងគំរូរបស់អ្នក សូមមើលផ្នែក [[បកស្រាយទំព័របណ្តាញ#គំរូ|គំរូ]] ខាងក្រោម។
4. បន្ថែម [[អថេរ|អថេរ prompt]] ទៅ [[Obsidian Web Clipper/ពុម្ព|ពុម្ព]] របស់អ្នក។
5. ប្រសិនបើពុម្ពរបស់អ្នករួមបញ្ចូលអថេរ prompt នោះផ្នែក Interpreter នឹងអាចមើលឃើញនៅពេលអ្នក [[ចាប់យកទំព័របណ្តាញ|ចាប់យកទំព័រ]]។ ចុច **interpret** ដើម្បីដំណើរការអថេរ prompt។

## របៀបដំណើរការ

នៅពេល Interpreter ត្រូវបានបើក *និង* ពុម្ពរបស់អ្នកមាន [[អថេរ#Prompt variables|អថេរ prompt]] ផ្នែក Interpreter ថ្មីមួយត្រូវបានបង្ហាញនៅក្នុងបង្អួចផ្នែកបន្ថែម ពីលើប៊ូតុង **Add to Obsidian**។ ផ្នែកនេះអនុញ្ញាតឱ្យអ្នកជ្រើសរើសគំរូ និងដំណើរការ Interpreter សម្រាប់ទំព័របច្ចុប្បន្ន។

នៅពេលអ្នកចុច **interpret**, Interpreter ផ្ញើបរិបទទំព័រទៅគំរូដែលអ្នកបានជ្រើសរើស រួមជាមួយ *ទាំងអស់* prompts នៅក្នុងពុម្ពរបស់អ្នកក្នុងសំណើមួយ។ អាស្រ័យលើអ្នកផ្តល់គំរូដែលអ្នកជ្រើសរើស នេះអាចជាការហៅខាងក្រៅ ឬមូលដ្ឋានលើឧបករណ៍របស់អ្នក។ គំរូវាយតម្លៃ prompts របស់អ្នកប្រឈមនឹងបរិបទទំព័រ និងផ្តល់ការឆ្លើយតបរបស់វា។ បន្ទាប់មក Interpreter ជំនួសអថេរ prompt ជាមួយទិន្នន័យឆ្លើយតប។

ដំណើរការទាំងមូលអាចចំណាយពេលមិលីវិនាទី ឬច្រើនជាង 30 វិនាទីអាស្រ័យលើគំរូដែលអ្នកប្រើ និងបរិមាណទិន្នន័យដែលអ្នកកំពុងដំណើរការ។

## បរិបទ

ពាក្យ *បរិបទ* សំដៅលើទិន្នន័យទំព័រដែល Interpreter ប្រើដើម្បីដំណើរការ prompts។ បរិបទតូចជាង Interpreter ដំណើរការលឿនជាង។

តាមលំនាំដើម Interpreter ប្រើ HTML ទំព័រទាំងមូលជាបរិបទរបស់វា ប៉ុន្តែនេះអាចធ្វើឱ្យ prompts យឺត និងថ្លៃជាងចាំបាច់។

អ្នកអាចបដិសេធបរិបទលំនាំដើមនៅក្នុង **ការកំណត់កម្រិតខ្ពស់** របស់ Interpreter និងកំណត់បរិបទសម្រាប់ [[Obsidian Web Clipper/ពុម្ព|ពុម្ព]] នីមួយៗ។

ដើម្បីកំណត់បរិបទដែលមានគោលដៅជាង សូមប្រើ [[អថេរ#Selector variables|អថេរ selector]] (ឬប្រភេទអថេរផ្សេងទៀត) ដើម្បីបកស្រាយផ្នែកមួយនៃទំព័រ។ ឧទាហរណ៍ អ្នកអាចប្រើអថេរ selector ខាងក្រោមនៅក្នុងបរិបទ Interpreter របស់ពុម្ព៖

```
{{selectorHtml:#main}}
```

នេះនឹងដំណើរការ Interpreter តែលើធាតុ `#main` នៃទំព័របណ្តាញ ប្រសិនបើវាមាន។ [[តម្រង#`round`|តម្រងដំណើរការ HTML]] ដូចជា `remove_html`, `strip_tags` និង `strip_attr` អាចមានប្រយោជន៍ដើម្បីកាត់បន្ថយប្រវែងបរិបទ និងបង្កើនល្បឿនដំណើរការ។

## គំរូ

> [!warning] ឯកជនភាព
> ដោយការប្រើអ្នកផ្តល់គំរូភាគីទីបី អ្នកយល់ព្រមតាមលក្ខខណ្ឌ និងគោលការណ៍ឯកជនភាពរបស់ពួកគេ។ សំណើ Interpreter ត្រូវបានផ្ញើដោយផ្ទាល់ទៅអ្នកផ្តល់ដែលអ្នកជ្រើសរើស។ Obsidian មិនប្រមូល ឬរក្សាទុកទិន្នន័យណាមួយអំពីសំណើរបស់អ្នកទេ។

### អ្នកផ្តល់ដែលបានកំណត់រួច

Interpreter រួមបញ្ចូលអ្នកផ្តល់ដែលបានកំណត់រួចជាច្រើន។ ដើម្បីប្រើអ្នកផ្តល់ទាំងនេះ អ្នកត្រូវការសោ API ដែលអ្នកអាចទទួលបានដោយចូលគណនីអ្នកផ្តល់របស់អ្នក។ អ្នកក៏នឹងត្រូវសម្រេចថាគំរូណាមួយដែលត្រូវប្រើ។

| អ្នកផ្តល់           | សោ&nbsp;API                                                | គំរូ                                                                               |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [សោ&nbsp;API](https://console.anthropic.com/settings/keys) | [គំរូ](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [សោ&nbsp;API](https://oai.azure.com/portal/)               | [គំរូ](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [សោ API](https://platform.deepseek.com/api_keys)           | [គំរូ](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [សោ&nbsp;API](https://aistudio.google.com/apikey)          | [គំរូ](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [សោ API](https://huggingface.co/settings/tokens)           | [គំរូ](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [សោ API](https://llama.developer.meta.com)                 | [គំរូ](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | គ្មាន                                                         | [គំរូ](https://ollama.com/search)                                                  |
| OpenAI             | [សោ&nbsp;API](https://platform.openai.com/api-keys)        | [គំរូ](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [សោ&nbsp;API](https://openrouter.ai/settings/keys)         | [គំរូ](https://openrouter.ai/models)                                               |
| Perplexity         | [សោ API](https://www.perplexity.ai/settings/api)           | [គំរូ](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [សោ API](https://console.x.ai/team/default/api-keys)       | [គំរូ](https://docs.x.ai/docs/models)                                              |

### ការជ្រើសរើសគំរូ

ជាទូទៅយើងណែនាំឱ្យប្រើគំរូតូចជាមួយ Web Clipper ពីព្រោះវាលឿនជាង និងដំណើរការបានត្រឹមត្រូវគួរសមសម្រាប់កិច្ចការនេះ។ ឧទាហរណ៍នៃគំរូតូចរួមបញ្ចូល **Claude Haiku របស់ Anthropic**, **Google Gemini Flash**, **Llama** ជាមួយប៉ារ៉ាម៉ែត្រ 3B ឬ 8B, ឬស៊េរីគំរូ **Mini របស់ OpenAI**។

### អ្នកផ្តល់ និងគំរូផ្ទាល់ខ្លួន

ដើម្បីបន្ថែមអ្នកផ្តល់ និង/ឬគំរូផ្ទាល់ខ្លួន សូមទៅ **[[ការកំណត់]]** Web Clipper → **Interpreter**៖

- **Add provider** ដើម្បីកំណត់រចនាសម្ព័ន្ធអ្នកផ្តល់ដែលបានកំណត់រួច និងផ្ទាល់ខ្លួន។
- **Add model** ដើម្បីកំណត់រចនាសម្ព័ន្ធគំរូដែលបានកំណត់រួច និងផ្ទាល់ខ្លួន។

នៅពេលបន្ថែមអ្នកផ្តល់ផ្ទាល់ខ្លួន យើងណែនាំឱ្យអ្នកប្រើ chat completions endpoint របស់ពួកគេសម្រាប់ **Base URL** — វាជាធម្មតាបញ្ចប់ដោយ `/chat/completions`។

### គំរូមូលដ្ឋាន

Interpreter អាចប្រើគំរូមូលដ្ឋានដែលផ្តល់ឯកជនភាពកាន់តែច្រើន និងភាពឆបគ្នាក្រៅបណ្តាញ។ ជម្រើសជាច្រើនសម្រាប់ដំណើរការគំរូមូលដ្ឋានមាន។ មួយក្នុងចំណោមជម្រើសងាយស្រួលបំផុតក្នុងការកំណត់រចនាសម្ព័ន្ធគឺ Ollama។

#### Ollama

[Ollama](https://ollama.com/) អនុញ្ញាតឱ្យអ្នកដំណើរការគំរូភាសាជាមូលដ្ឋាន និងជាឯកជនលើឧបករណ៍របស់អ្នក។

នៅពេលអ្នកបានទាញយក និងដំឡើង Ollama រួចហើយ សូមបន្ថែម Ollama ដោយប្រើ **Add provider** នៅក្នុងការកំណត់ Interpreter។ Ollama មិនត្រូវការសោ API ទេ។ បន្ទាប់មកជ្រើសរើសគំរូពី [បញ្ជីគំរូ](https://ollama.com/search)។ ឧទាហរណ៍ ប្រសិនបើអ្នកចង់ប្រើ [Llama 3.2](https://ollama.com/library/llama3.2) ចុច **Add model** បន្ទាប់មក៖

- **Provider:** Ollama
- **Display name:** Llama 3.2, តម្លៃនេះអាចប្ដូរបាន។
- **Model ID:** `llama3.2`, នេះត្រូវតែត្រូវគ្នាពិតប្រាកដជាមួយ model ID ពី Ollama។

**ចាប់ផ្តើម Ollama server**

ដើម្បីអនុញ្ញាតឱ្យផ្នែកបន្ថែមកម្មវិធីរុករកធ្វើអន្តរកម្មជាមួយ Ollama អ្នកត្រូវតែ [ផ្តល់ការណែនាំជាក់លាក់](https://github.com/ollama/ollama/issues/2308) នៅពេលដំណើរការ server បើមិនដូច្នេះទេអ្នកនឹងឃើញកំហុស `403`។

បិដកម្មវិធី Ollama និងដំណើរការពាក្យបញ្ជាខាងក្រោមនៅក្នុង terminal របស់អ្នក។ ពិធីការគួរត្រូវបានផ្លាស់ប្តូរទៅជាពិធីការផ្នែកបន្ថែមកម្មវិធីរុករករបស់អ្នក ប្រសិនបើអ្នកមិនប្រើ Chrome ឬ Firefox។

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

បន្ទាប់មកដំណើរការគំរូរបស់អ្នកជាមួយ Ollama ដូចធម្មតា ឧ.

```
ollama run llama3.2
```

**ប្រវែងបរិបទ**

បង្អួចបរិបទរបស់ Ollama មានលំនាំដើម 2048 tokens។ នេះគឺជាចំនួន tokens អតិបរមាសម្រាប់សារ និងការឆ្លើយតប។ នៅពេលចាប់យកទំព័របណ្តាញវែង អ្នកអាចលើសពីដែនកំណត់នេះបានយ៉ាងងាយ។ Ollama នឹងបរាជ័យដោយស្ងៀមស្ងាត់ និងផ្តល់លទ្ធផលមិនពាក់ព័ន្ធ។ ជម្រើសមួយចំនួន៖

- បង្កើនប៉ារ៉ាម៉ែត្រ `num_ctx` របស់ Ollama។ សូមប្រុងប្រយ័ត្នថាបរិបទវែងជាងត្រូវការអង្គចងចាំច្រើនជាង។
- ប្រើវាល [[#បរិបទ]] នៅក្នុងពុម្ពរបស់អ្នកដើម្បីផ្តល់ផ្នែកគោលដៅជាងនៃទំព័រ ឬកាត់បន្ថយបរិបទដោយប្រើ [[តម្រង|តម្រង]] ឧ. `{{content|slice:0,1000}}`។
