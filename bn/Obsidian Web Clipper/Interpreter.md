---
permalink: web-clipper/interpreter
---
Interpreter হলো [[Introduction to Obsidian Web Clipper|Web Clipper]]-এর একটি ফিচার যা আপনাকে প্রাকৃতিক ভাষা ব্যবহার করে ওয়েব পেজের সাথে ইন্টার‍্যাক্ট করতে দেয়। Interpreter আপনাকে Obsidian-এ সংরক্ষণ করতে চান এমন ডেটা ক্যাপচার এবং পরিবর্তন করতে সাহায্য করে। উদাহরণস্বরূপ:

- নির্দিষ্ট টেক্সট অংশ বের করুন।
- তথ্য সংক্ষিপ্ত করুন বা ব্যাখ্যা করুন।
- এক ফরম্যাট থেকে অন্য ফরম্যাটে টেক্সট রূপান্তর করুন।
- টেক্সট অন্য ভাষায় অনুবাদ করুন।

Interpreter একটি ওয়েব পেজের তথ্য প্রক্রিয়া করতে ভাষা মডেল ব্যবহার করে, এবং [[Variables]] ব্যবহার করে ফলাফল ফেরত দেয় যা আপনি আপনার [[Obsidian Web Clipper/Templates|Web Clipper টেমপ্লেটে]] যোগ করতে পারেন।

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## প্রম্পটের উদাহরণ

প্রম্পটগুলো `{{"your prompt"}}` [[Variables|ভেরিয়েবল]] সিনট্যাক্স ব্যবহার করে। আপনি যেকোনো প্রাকৃতিক ভাষার কোয়েরির সাথে এই সিনট্যাক্স ব্যবহার করতে পারেন, যেমন:

- `{{"a summary of the page"}}` পেজের একটি সারসংক্ষেপ বের করতে।
- `{{"a three bullet point summary, translated to French"}}` পেজ সম্পর্কে বুলেট পয়েন্ট বের করতে, এবং সেগুলো ফরাসি ভাষায় অনুবাদ করতে।
- `{{"un resumé de la page en trois points"}}` ফরাসি ভাষায় প্রম্পট ব্যবহার করে তিনটি বুলেট পয়েন্ট বের করতে।

আপনার প্রম্পটের আউটপুট [[Filters]] ব্যবহার করে আরও পরিবর্তন করা যায়। মডেল থেকে প্রম্পট রেসপন্স পাওয়ার পরে ফিল্টার প্রক্রিয়া করা হয়। উদাহরণস্বরূপ: `{{"a summary of the page"|blockquote}}` রেসপন্সটিকে একটি ব্লককোটে রূপান্তরিত করবে।

## শুরু করুন

Interpreter প্রায় সব ভাষা মডেল প্রোভাইডারের সাথে কাজ করে, এমনকি যেগুলো আপনার ডিভাইসে ব্যক্তিগতভাবে চলে সেগুলোসহ। Interpreter সেট আপ করতে:

1. Web Clipper সেটিংসে **Interpreter** বিভাগে যান।
2. **Enable Interpreter** টগল অন করুন।
3. আপনার প্রোভাইডার এবং মডেল কনফিগার করুন, নিচের [[Interpreter#মডেল|মডেল]] বিভাগ দেখুন।
4. আপনার [[Obsidian Web Clipper/Templates|টেমপ্লেটে]] [[Variables|প্রম্পট ভেরিয়েবল]] যোগ করুন।
5. আপনার টেমপ্লেটে প্রম্পট ভেরিয়েবল থাকলে, আপনি যখন [[Clip web pages|একটি পেজ ক্লিপ করবেন]] তখন Interpreter বিভাগটি দেখা যাবে। প্রম্পট ভেরিয়েবল প্রক্রিয়া করতে **interpret**-এ ক্লিক করুন।

## এটি কীভাবে কাজ করে

Interpreter সক্রিয় *এবং* আপনার টেমপ্লেটে [[Variables#প্রম্পট ভেরিয়েবল|প্রম্পট ভেরিয়েবল]] থাকলে, **Add to Obsidian** বাটনের উপরে এক্সটেনশন উইন্ডোতে একটি নতুন Interpreter বিভাগ প্রদর্শিত হয়। এই বিভাগ থেকে আপনি একটি মডেল নির্বাচন করতে পারেন এবং বর্তমান পেজের জন্য Interpreter চালাতে পারেন।

আপনি **interpret**-এ ক্লিক করলে, Interpreter পেজের কনটেক্সট, আপনার টেমপ্লেটের *সব* প্রম্পটসহ, একটি রিকোয়েস্টে আপনার নির্বাচিত মডেলে পাঠায়। আপনার বেছে নেওয়া মডেল প্রোভাইডারের উপর নির্ভর করে, এটি একটি বাহ্যিক কল বা আপনার ডিভাইসে স্থানীয়ভাবে সম্পন্ন হতে পারে। মডেলটি পেজের কনটেক্সটের বিপরীতে আপনার প্রম্পটগুলো মূল্যায়ন করে, এবং তার রেসপন্স ফেরত দেয়। এরপর Interpreter প্রম্পট ভেরিয়েবলগুলোকে রেসপন্স ডেটা দিয়ে প্রতিস্থাপন করে।

আপনি যে মডেল ব্যবহার করছেন এবং প্রক্রিয়া করা ডেটার পরিমাণের উপর নির্ভর করে পুরো প্রক্রিয়াটি মিলিসেকেন্ড বা ৩০ সেকেন্ডের বেশি সময় নিতে পারে।

## কনটেক্সট

*কনটেক্সট* শব্দটি সেই পেজের ডেটা বোঝায় যা Interpreter প্রম্পট প্রক্রিয়া করতে ব্যবহার করে। কনটেক্সট যত ছোট, Interpreter তত দ্রুত চলে।

ডিফল্টভাবে, Interpreter তার কনটেক্সট হিসেবে পুরো পেজের HTML ব্যবহার করে, তবে এতে প্রম্পট প্রয়োজনের চেয়ে বেশি ধীর এবং ব্যয়বহুল হতে পারে।

আপনি Interpreter-এর **Advanced settings**-এ ডিফল্ট কনটেক্সট পরিবর্তন করতে পারেন এবং প্রতিটি [[Obsidian Web Clipper/Templates|টেমপ্লেটের]] জন্য কনটেক্সট নির্ধারণ করতে পারেন।

পেজের একটি অংশ ব্যাখ্যা করতে আরও নির্দিষ্ট কনটেক্সট নির্ধারণ করতে [[Variables#সিলেক্টর ভেরিয়েবল|সিলেক্টর ভেরিয়েবল]] (বা অন্যান্য ভেরিয়েবল ধরন) ব্যবহার করুন। উদাহরণস্বরূপ, আপনি আপনার টেমপ্লেটের Interpreter কনটেক্সটে নিচের সিলেক্টর ভেরিয়েবল ব্যবহার করতে পারেন:

```
{{selectorHtml:#main}}
```

 এটি শুধুমাত্র একটি ওয়েব পেজের `#main` এলিমেন্টে Interpreter চালাবে, যদি এটি বিদ্যমান থাকে। কনটেক্সটের দৈর্ঘ্য আরও কমাতে এবং প্রক্রিয়াকরণ দ্রুত করতে `remove_html`, `strip_tags` এবং `strip_attr`-এর মতো [[Filters#HTML প্রসেসিং|HTML প্রসেসিং ফিল্টার]] কার্যকর হতে পারে।

## মডেল

> [!warning] গোপনীয়তা
> একটি তৃতীয় পক্ষের মডেল প্রোভাইডার ব্যবহার করে আপনি তাদের শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত হচ্ছেন। Interpreter রিকোয়েস্টগুলো সরাসরি আপনার বেছে নেওয়া প্রোভাইডারের কাছে পাঠানো হয়। Obsidian আপনার রিকোয়েস্ট সম্পর্কে কোনো ডেটা সংগ্রহ বা সংরক্ষণ করে না।

### প্রিসেট প্রোভাইডার

Interpreter-এ বেশ কিছু প্রিসেট প্রোভাইডার অন্তর্ভুক্ত আছে। এই প্রোভাইডারগুলো ব্যবহার করতে আপনার একটি API কি প্রয়োজন যা আপনি আপনার প্রোভাইডারের অ্যাকাউন্টে লগইন করে পেতে পারেন। আপনাকে কোন মডেল(গুলো) ব্যবহার করবেন তাও ঠিক করতে হবে।

| প্রোভাইডার           | API&nbsp;কি                                                | মডেল                                                                               |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [API&nbsp;কি](https://console.anthropic.com/settings/keys) | [মডেল](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [API&nbsp;কি](https://oai.azure.com/portal/)               | [মডেল](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [API কি](https://platform.deepseek.com/api_keys)           | [মডেল](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [API&nbsp;কি](https://aistudio.google.com/apikey)          | [মডেল](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [API কি](https://huggingface.co/settings/tokens)           | [মডেল](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [API কি](https://llama.developer.meta.com)                 | [মডেল](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | প্রযোজ্য নয়                                                         | [মডেল](https://ollama.com/search)                                                  |
| OpenAI             | [API&nbsp;কি](https://platform.openai.com/api-keys)        | [মডেল](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [API&nbsp;কি](https://openrouter.ai/settings/keys)         | [মডেল](https://openrouter.ai/models)                                               |
| Perplexity         | [API কি](https://www.perplexity.ai/settings/api)           | [মডেল](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [API কি](https://console.x.ai/team/default/api-keys)       | [মডেল](https://docs.x.ai/docs/models)                                              |

### একটি মডেল বেছে নেওয়া

সাধারণভাবে আমরা Web Clipper-এর সাথে ছোট মডেল ব্যবহারের পরামর্শ দিই কারণ সেগুলো দ্রুত কাজ করে এবং এই কাজের জন্য মোটামুটি সঠিকভাবে পারফর্ম করে। ছোট মডেলের উদাহরণের মধ্যে রয়েছে **Anthropic-এর Claude Haiku**, **Google Gemini Flash**, ৩B বা ৮B প্যারামিটারযুক্ত **Llama**, অথবা **OpenAI-এর Mini** সিরিজের মডেল।

### কাস্টম প্রোভাইডার এবং মডেল

একটি কাস্টম প্রোভাইডার এবং/অথবা মডেল যোগ করতে Web Clipper **[[Settings]]** → **Interpreter**-এ যান:

- প্রিসেট এবং কাস্টম প্রোভাইডার কনফিগার করতে **Add provider**।
- প্রিসেট এবং কাস্টম মডেল কনফিগার করতে **Add model**।

একটি কাস্টম প্রোভাইডার যোগ করার সময়, আমরা পরামর্শ দিই যে আপনি **Base URL**-এর জন্য তাদের চ্যাট কমপ্লিশন এন্ডপয়েন্ট ব্যবহার করুন — এটি সাধারণত `/chat/completions` দিয়ে শেষ হয়।

### স্থানীয় মডেল

Interpreter স্থানীয় মডেল ব্যবহার করতে পারে যা আরও বেশি গোপনীয়তা এবং অফলাইন সামঞ্জস্য প্রদান করে। স্থানীয় মডেল চালানোর জন্য বেশ কিছু বিকল্প রয়েছে। কনফিগার করা সবচেয়ে সহজগুলোর একটি হলো Ollama।

#### Ollama

[Ollama](https://ollama.com/) আপনাকে আপনার ডিভাইসে স্থানীয়ভাবে এবং ব্যক্তিগতভাবে ভাষা মডেল চালাতে দেয়।

আপনি Ollama ডাউনলোড ও ইনস্টল করার পর, Interpreter সেটিংসে **Add provider** ব্যবহার করে Ollama যোগ করুন। Ollama-এর কোনো API কি প্রয়োজন নেই। এরপর [মডেল তালিকা](https://ollama.com/search) থেকে একটি মডেল বেছে নিন। উদাহরণস্বরূপ আপনি [Llama 3.2](https://ollama.com/library/llama3.2) ব্যবহার করতে চাইলে, **Add model**-এ ক্লিক করুন, তারপর:

- **Provider:** Ollama
- **Display name:** Llama 3.2, এই মানটি কাস্টমাইজযোগ্য।
- **Model ID:** `llama3.2`, এটি অবশ্যই Ollama-এর মডেল ID-এর সাথে হুবহু মিলতে হবে।

**Ollama সার্ভার চালু করুন**

একটি ব্রাউজার এক্সটেনশনকে Ollama-এর সাথে ইন্টার‍্যাক্ট করার অনুমতি দিতে সার্ভার চালানোর সময় আপনাকে অবশ্যই [স্পষ্ট নির্দেশনা দিতে হবে](https://github.com/ollama/ollama/issues/2308), নাহলে আপনি একটি `403` এরর দেখবেন।

Ollama অ্যাপটি বন্ধ করুন, এবং আপনার টার্মিনালে নিচের কমান্ডটি চালান। আপনি Chrome বা Firefox ব্যবহার না করলে প্রোটোকলটি আপনার ব্রাউজারের এক্সটেনশন প্রোটোকলে পরিবর্তন করতে হবে।

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

এরপর স্বাভাবিক উপায়ে Ollama দিয়ে আপনার মডেল চালান, যেমন:

```
ollama run llama3.2
```

**কনটেক্সটের দৈর্ঘ্য**

Ollama-এর কনটেক্সট উইন্ডো ডিফল্টভাবে ২০৪৮ টোকেন। এটি মেসেজ এবং রেসপন্সের জন্য সর্বোচ্চ টোকেন সংখ্যা। একটি দীর্ঘ ওয়েব পেজ ক্লিপ করার সময় আপনি সহজেই এই সীমা অতিক্রম করতে পারেন। Ollama নীরবে ব্যর্থ হবে এবং অপ্রাসঙ্গিক ফলাফল ফেরত দেবে। কিছু বিকল্প:

- Ollama-এর `num_ctx` প্যারামিটার বাড়ান। মনে রাখবেন দীর্ঘ কনটেক্সটের জন্য আরও বেশি মেমরি প্রয়োজন।
- পেজের আরও নির্দিষ্ট অংশ দিতে আপনার টেমপ্লেটে [[#কনটেক্সট]] ফিল্ড ব্যবহার করুন, অথবা একটি [[Filters|ফিল্টার]] ব্যবহার করে কনটেক্সট ছোট করুন, যেমন `{{content|slice:0,1000}}`।
