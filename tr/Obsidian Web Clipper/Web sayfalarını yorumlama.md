---
permalink: web-clipper/interpreter
---
Yorumlayıcı, doğal dil kullanarak web sayfalarıyla etkileşim kurmanızı sağlayan bir [[Obsidian Web Kırpıcı'ya giriş|Web Kırpıcı]] özelliğidir. Yorumlayıcı, Obsidian'a kaydetmek istediğiniz verileri yakalamanıza ve değiştirmenize yardımcı olur. Örneğin:

- Belirli metin parçalarını çıkarma.
- Bilgileri özetleme veya açıklama.
- Metni bir biçimden diğerine dönüştürme.
- Metni farklı bir dile çevirme.

Yorumlayıcı, bir web sayfasındaki bilgileri işlemek için dil modellerinden yararlanır ve [[Obsidian Web Clipper/Şablonlar|Web Kırpıcı Şablonları]]nıza ekleyebileceğiniz [[Değişkenler]] kullanarak sonuçları döndürür.

![[web-clipper-interpreter-demo.mp4#interface]]

## İstem örnekleri

İstemler `{{"isteminiz"}}` şeklindeki [[Değişkenler|değişken]] söz dizimini kullanır. Bu söz dizimini herhangi bir doğal dil sorgusuyla kullanabilirsiniz, örneğin:

- `{{"a summary of the page"}}` sayfanın bir özetini çıkarmak için.
- `{{"a three bullet point summary, translated to French"}}` sayfa hakkında madde işaretli noktalar çıkarmak ve bunları Fransızca'ya çevirmek için.
- `{{"un resumé de la page en trois points"}}` Fransızca bir istem kullanarak üç madde işaretli nokta çıkarmak için.

İstemlerinizin çıktısı [[Filtreler]] kullanılarak daha fazla işlenebilir. Filtreler, modelden istem yanıtı alındıktan sonra işlenir. Örneğin: `{{"a summary of the page"|blockquote}}` yanıtı bir blok alıntıya dönüştürür.

## Başlarken

Yorumlayıcı, cihazınızda özel olarak çalışan seçenekler dahil olmak üzere neredeyse tüm dil modeli sağlayıcılarıyla çalışır. Yorumlayıcıyı kurmak için:

1. Web Kırpıcı ayarlarında **Yorumlayıcı** bölümüne gidin.
2. **Yorumlayıcıyı etkinleştir** seçeneğini açın.
3. Sağlayıcınızı ve modelinizi yapılandırın, aşağıdaki [[Web sayfalarını yorumlama#Modeller|modeller]] bölümüne bakın.
4. [[Obsidian Web Clipper/Şablonlar|Şablonlarınıza]] [[Değişkenler|istem değişkenleri]] ekleyin.
5. Şablonunuz istem değişkenleri içeriyorsa, bir [[Web sayfalarını kırpma|sayfayı kırptığınızda]] Yorumlayıcı bölümü görünür olacaktır. İstem değişkenlerini işlemek için **yorumla** düğmesine tıklayın.

## Nasıl çalışır

Yorumlayıcı etkinleştirildiğinde *ve* şablonunuz [[Değişkenler#İstem değişkenleri|istem değişkenleri]] içerdiğinde, uzantı penceresinde **Obsidian'a ekle** düğmesinin üzerinde yeni bir Yorumlayıcı bölümü görüntülenir. Bu bölüm, bir model seçmenize ve mevcut sayfa için Yorumlayıcıyı çalıştırmanıza olanak tanır.

**Yorumla** düğmesine tıkladığınızda, Yorumlayıcı sayfa bağlamını seçtiğiniz modele, şablonunuzdaki *tüm* istemlerle birlikte tek bir istekte gönderir. Seçtiğiniz model sağlayıcısına bağlı olarak bu, harici bir çağrı veya cihazınıza yerel olabilir. Model, istemlerinizi sayfa bağlamına göre değerlendirir ve yanıtlarını döndürür. Yorumlayıcı daha sonra istem değişkenlerini yanıt verileriyle değiştirir.

Tüm süreç, kullandığınız modele ve işlediğiniz veri miktarına bağlı olarak milisaniyelerden 30 saniyeden fazlasına kadar sürebilir.

## Bağlam

*Bağlam* terimi, Yorumlayıcının istemleri işlemek için kullandığı sayfa verilerini ifade eder. Bağlam ne kadar küçükse, Yorumlayıcı o kadar hızlı çalışır.

Varsayılan olarak, Yorumlayıcı bağlamı olarak sayfanın tüm HTML'sini kullanır, ancak bu, istemleri gerekenden daha yavaş ve pahalı hale getirebilir.

Yorumlayıcı **Gelişmiş ayarlar**'da varsayılan bağlamı geçersiz kılabilir ve [[Obsidian Web Clipper/Şablonlar|şablon]] başına bağlam tanımlayabilirsiniz.

Daha hedefli bir bağlam tanımlamak için sayfanın bir bölümünü yorumlamak amacıyla [[Değişkenler#Seçici değişkenleri|seçici değişkenleri]] (veya diğer değişken türlerini) kullanın. Örneğin, şablonunuzun Yorumlayıcı bağlamında aşağıdaki seçici değişkeni kullanabilirsiniz:

```
{{selectorHtml:#main}}
```

Bu, varsa yalnızca bir web sayfasının `#main` öğesinde Yorumlayıcıyı çalıştırır. `remove_html`, `strip_tags` ve `strip_attr` gibi [[Filtreler#HTML işleme|HTML işleme filtreleri]], bağlam uzunluğunu daha da azaltmak ve işlemeyi hızlandırmak için faydalı olabilir.

## Modeller

> [!warning] Gizlilik
> Üçüncü taraf bir model sağlayıcısı kullanarak onların koşullarını ve gizlilik politikasını kabul etmiş olursunuz. Yorumlayıcı istekleri doğrudan seçtiğiniz sağlayıcıya gönderilir. Obsidian, istekleriniz hakkında herhangi bir veri toplamaz veya saklamaz.

### Ön ayar sağlayıcılar

Yorumlayıcı birkaç ön ayar sağlayıcı içerir. Bu sağlayıcıları kullanmak için sağlayıcınızın hesabına giriş yaparak alabileceğiniz bir API anahtarına ihtiyacınız vardır. Ayrıca hangi model(ler)i kullanacağınıza karar vermeniz gerekecektir.

| Sağlayıcı          | API&nbsp;anahtarı                                           | Modeller                                                                             |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic           | [API&nbsp;anahtarı](https://console.anthropic.com/settings/keys) | [Modeller](https://docs.anthropic.com/en/docs/about-claude/models)                   |
| Azure&nbsp;OpenAI   | [API&nbsp;anahtarı](https://oai.azure.com/portal/)          | [Modeller](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek            | [API anahtarı](https://platform.deepseek.com/api_keys)      | [Modeller](https://api-docs.deepseek.com/quick_start/pricing)                       |
| Google&nbsp;Gemini  | [API&nbsp;anahtarı](https://aistudio.google.com/apikey)     | [Modeller](https://ai.google.dev/gemini-api/docs/models/gemini)                     |
| Hugging Face        | [API anahtarı](https://huggingface.co/settings/tokens)      | [Modeller](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending) |
| Meta                | [API anahtarı](https://llama.developer.meta.com)            | [Modeller](https://llama.developer.meta.com/docs/models)                            |
| Ollama              | yok                                                         | [Modeller](https://ollama.com/search)                                                |
| OpenAI              | [API&nbsp;anahtarı](https://platform.openai.com/api-keys)   | [Modeller](https://platform.openai.com/docs/models)                                 |
| OpenRouter          | [API&nbsp;anahtarı](https://openrouter.ai/settings/keys)    | [Modeller](https://openrouter.ai/models)                                            |
| Perplexity          | [API anahtarı](https://www.perplexity.ai/settings/api)      | [Modeller](https://docs.perplexity.ai/guides/model-cards)                           |
| xAI Grok            | [API anahtarı](https://console.x.ai/team/default/api-keys)  | [Modeller](https://docs.x.ai/docs/models)                                           |

### Model seçimi

Genel olarak Web Kırpıcı ile küçük modeller kullanmanızı öneririz çünkü daha hızlıdırlar ve bu görev için oldukça doğru sonuçlar verirler. Küçük modellere örnek olarak **Anthropic'in Claude Haiku**, **Google Gemini Flash**, 3B veya 8B parametreli **Llama** veya **OpenAI'nin Mini** serisi modeller verilebilir.

### Özel sağlayıcılar ve modeller

Özel bir sağlayıcı ve/veya model eklemek için Web Kırpıcı **[[Ayarlar]]** → **Yorumlayıcı** bölümüne gidin:

- Ön ayar ve özel sağlayıcıları yapılandırmak için **Sağlayıcı ekle**.
- Ön ayar ve özel modelleri yapılandırmak için **Model ekle**.

Özel bir sağlayıcı eklerken, **Temel URL** için sohbet tamamlama uç noktasını kullanmanızı öneririz — bu genellikle `/chat/completions` ile biter.

### Yerel modeller

Yorumlayıcı, daha fazla gizlilik ve çevrimdışı uyumluluk sunan yerel modelleri kullanabilir. Yerel modelleri çalıştırmak için birçok seçenek mevcuttur. Yapılandırması en kolay olanlardan biri Ollama'dır.

#### Ollama

[Ollama](https://ollama.com/) dil modellerini cihazınızda yerel ve özel olarak çalıştırmanıza olanak tanır.

Ollama'yı indirip kurduktan sonra, Yorumlayıcı ayarlarında **Sağlayıcı ekle** seçeneğini kullanarak Ollama'yı ekleyin. Ollama bir API anahtarı gerektirmez. Ardından [model listesinden](https://ollama.com/search) bir model seçin. Örneğin [Llama 3.2](https://ollama.com/library/llama3.2) kullanmak istiyorsanız, **Model ekle**'ye tıklayın, ardından:

- **Sağlayıcı:** Ollama
- **Görünen ad:** Llama 3.2, bu değer özelleştirilebilir.
- **Model ID:** `llama3.2`, bu Ollama'daki model kimliğiyle tam olarak eşleşmelidir.

**Ollama sunucusunu başlatma**

Bir tarayıcı uzantısının Ollama ile etkileşim kurmasına izin vermek için sunucuyu çalıştırırken [açık talimat vermeniz](https://github.com/ollama/ollama/issues/2308) gerekir, aksi takdirde `403` hatası görürsünüz.

Ollama uygulamasını kapatın ve terminalinizde aşağıdaki komutu çalıştırın. Chrome veya Firefox kullanmıyorsanız protokol, tarayıcınızın uzantı protokolüne değiştirilmelidir.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Ardından modelinizi Ollama ile normal şekilde çalıştırın, örneğin:

```
ollama run llama3.2
```

**Bağlam uzunluğu**

Ollama'nın bağlam penceresi varsayılan olarak 2048 token'dır. Bu, mesaj ve yanıt için maksimum token sayısıdır. Uzun bir web sayfasını kırparken bu limiti kolayca aşabilirsiniz. Ollama sessizce başarısız olur ve ilgisiz sonuçlar döndürür. Bazı seçenekler:

- Ollama'nın `num_ctx` parametresini artırın. Daha uzun bağlamın daha fazla bellek gerektirdiğini unutmayın.
- Sayfanın daha hedefli bir bölümünü sağlamak için şablonunuzdaki [[#Bağlam]] alanını kullanın veya bir [[Filtreler|filtre]] kullanarak bağlamı kırpın, örneğin `{{content|slice:0,1000}}`.
