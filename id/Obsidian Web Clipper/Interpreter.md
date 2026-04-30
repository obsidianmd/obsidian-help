---
permalink: web-clipper/interpreter
aliases:
  - Interpretasi halaman web
---
Interpreter adalah fitur [[Pengantar Obsidian Web Clipper|Web Clipper]] yang memungkinkan Anda berinteraksi dengan halaman web menggunakan bahasa alami. Interpreter membantu Anda menangkap dan memodifikasi data yang ingin Anda simpan ke Obsidian. Contohnya:

- Mengekstrak fragmen teks tertentu.
- Merangkum atau menjelaskan informasi.
- Mengonversi teks dari satu format ke format lain.
- Menerjemahkan teks ke bahasa yang berbeda.

Interpreter memanfaatkan model bahasa untuk memproses informasi pada halaman web, dan mengembalikan hasil menggunakan [[Variabel]] yang dapat Anda tambahkan ke [[Obsidian Web Clipper/Template|Template Web Clipper]] Anda.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## Contoh prompt

Prompt menggunakan sintaksis [[Variabel|variabel]] `{{"prompt Anda"}}`. Anda dapat menggunakan sintaksis ini dengan kueri bahasa alami apa pun, misalnya

- `{{"a summary of the page"}}` untuk mengekstrak ringkasan halaman.
- `{{"a three bullet point summary, translated to French"}}` untuk mengekstrak poin-poin tentang halaman, dan menerjemahkannya ke bahasa Prancis.
- `{{"un resumé de la page en trois points"}}` untuk mengekstrak tiga poin menggunakan prompt dalam bahasa Prancis.

Output dari prompt Anda dapat dimanipulasi lebih lanjut menggunakan [[Filter]]. Filter diproses setelah respons prompt diterima dari model. Contoh: `{{"a summary of the page"|blockquote}}` akan mengubah respons menjadi kutipan blok.

## Memulai

Interpreter bekerja dengan hampir semua penyedia model bahasa, termasuk opsi yang berjalan secara privat di perangkat Anda. Untuk menyiapkan Interpreter:

1. Buka bagian **Interpreter** di pengaturan Web Clipper.
2. Aktifkan **Aktifkan interpreter**.
3. Konfigurasi penyedia dan model Anda, lihat bagian [[Interpretasi halaman web#Model|model]] di bawah.
4. Tambahkan [[Variabel|variabel prompt]] ke [[Obsidian Web Clipper/Template|template]] Anda.
5. Jika template Anda menyertakan variabel prompt, bagian Interpreter akan terlihat saat Anda [[Kliping halaman web|mengkliping halaman]]. Klik **interpretasi** untuk memproses variabel prompt.

## Cara kerjanya

Ketika Interpreter diaktifkan *dan* template Anda berisi [[Variabel#Variabel prompt|variabel prompt]], bagian Interpreter baru akan ditampilkan di jendela ekstensi, di atas tombol **Tambah ke Obsidian**. Bagian ini memungkinkan Anda memilih model dan menjalankan Interpreter untuk halaman saat ini.

Ketika Anda mengklik **interpretasi**, Interpreter mengirimkan konteks halaman ke model yang Anda pilih, bersama dengan *semua* prompt di template Anda dalam satu permintaan. Tergantung pada penyedia model yang Anda pilih, ini bisa berupa panggilan eksternal atau lokal di perangkat Anda. Model mengevaluasi prompt Anda terhadap konteks halaman, dan mengembalikan responsnya. Interpreter kemudian mengganti variabel prompt dengan data respons.

Seluruh proses dapat memakan waktu milidetik atau lebih dari 30 detik tergantung pada model yang Anda gunakan dan jumlah data yang Anda proses.

## Konteks

Istilah *konteks* mengacu pada data halaman yang digunakan Interpreter untuk memproses prompt. Semakin kecil konteksnya, semakin cepat Interpreter berjalan.

Secara bawaan, Interpreter menggunakan seluruh HTML halaman sebagai konteksnya, namun ini dapat membuat prompt lebih lambat dan lebih mahal dari yang diperlukan.

Anda dapat menimpa konteks bawaan di **Pengaturan lanjutan** Interpreter dan mendefinisikan konteks per [[Obsidian Web Clipper/Template|template]].

Untuk mendefinisikan konteks yang lebih terarah, gunakan [[Variabel#Variabel selektor|variabel selektor]] (atau jenis variabel lain) untuk menginterpretasi bagian tertentu dari halaman. Misalnya, Anda dapat menggunakan variabel selektor berikut dalam konteks Interpreter template Anda:

```
{{selectorHtml:#main}}
```

Ini hanya akan menjalankan Interpreter pada elemen `#main` dari halaman web, jika ada. [[Filter#Pemrosesan HTML|Filter pemrosesan HTML]] seperti `remove_html`, `strip_tags` dan `strip_attr` dapat berguna untuk lebih mengurangi panjang konteks dan mempercepat pemrosesan.

## Model

> [!warning] Privasi
> Dengan menggunakan penyedia model pihak ketiga, Anda menyetujui ketentuan dan kebijakan privasi mereka. Permintaan Interpreter dikirim langsung ke penyedia yang Anda pilih. Obsidian tidak mengumpulkan atau menyimpan data apa pun tentang permintaan Anda.

### Penyedia preset

Interpreter menyertakan beberapa penyedia preset. Untuk menggunakan penyedia ini, Anda memerlukan kunci API yang bisa Anda dapatkan dengan masuk ke akun penyedia Anda. Anda juga perlu memutuskan model mana yang akan digunakan.

| Penyedia           | Kunci&nbsp;API                                              | Model                                                                                |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic          | [Kunci&nbsp;API](https://console.anthropic.com/settings/keys) | [Model](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI  | [Kunci&nbsp;API](https://oai.azure.com/portal/)               | [Model](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek           | [Kunci API](https://platform.deepseek.com/api_keys)           | [Model](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini | [Kunci&nbsp;API](https://aistudio.google.com/apikey)          | [Model](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face       | [Kunci API](https://huggingface.co/settings/tokens)           | [Model](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta               | [Kunci API](https://llama.developer.meta.com)                 | [Model](https://llama.developer.meta.com/docs/models)                               |
| Ollama             | n/a                                                         | [Model](https://ollama.com/search)                                                  |
| OpenAI             | [Kunci&nbsp;API](https://platform.openai.com/api-keys)        | [Model](https://platform.openai.com/docs/models)                                    |
| OpenRouter         | [Kunci&nbsp;API](https://openrouter.ai/settings/keys)         | [Model](https://openrouter.ai/models)                                               |
| Perplexity         | [Kunci API](https://www.perplexity.ai/settings/api)           | [Model](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok           | [Kunci API](https://console.x.ai/team/default/api-keys)       | [Model](https://docs.x.ai/docs/models)                                              |

### Memilih model

Secara umum kami merekomendasikan penggunaan model kecil dengan Web Clipper karena lebih cepat dan cukup akurat untuk tugas ini. Contoh model yang lebih kecil meliputi **Claude Haiku dari Anthropic**, **Google Gemini Flash**, **Llama** dengan parameter 3B atau 8B, atau seri model **Mini dari OpenAI**.

### Penyedia dan model kustom

Untuk menambahkan penyedia dan/atau model kustom, buka **[[Pengaturan]]** Web Clipper → **Interpreter**:

- **Tambah penyedia** untuk mengkonfigurasi penyedia preset dan kustom.
- **Tambah model** untuk mengkonfigurasi model preset dan kustom.

Saat menambahkan penyedia kustom, kami merekomendasikan Anda menggunakan endpoint chat completions mereka untuk **URL Dasar** — biasanya diakhiri dengan `/chat/completions`.

### Model lokal

Interpreter dapat menggunakan model lokal yang menawarkan privasi lebih besar dan kompatibilitas offline. Beberapa opsi untuk menjalankan model lokal tersedia. Salah satu yang paling mudah dikonfigurasi adalah Ollama.

#### Ollama

[Ollama](https://ollama.com/) memungkinkan Anda menjalankan model bahasa secara lokal dan privat di perangkat Anda.

Setelah Anda mengunduh dan menginstal Ollama, tambahkan Ollama menggunakan **Tambah penyedia** di pengaturan Interpreter. Ollama tidak memerlukan kunci API. Kemudian pilih model dari [daftar model](https://ollama.com/search). Misalnya jika Anda ingin menggunakan [Llama 3.2](https://ollama.com/library/llama3.2), klik **Tambah model**, lalu:

- **Penyedia:** Ollama
- **Nama tampilan:** Llama 3.2, nilai ini dapat disesuaikan.
- **ID model:** `llama3.2`, ini harus sama persis dengan ID model dari Ollama.

**Memulai server Ollama**

Untuk memungkinkan ekstensi browser berinteraksi dengan Ollama, Anda harus [memberikan instruksi eksplisit](https://github.com/ollama/ollama/issues/2308) saat menjalankan server, atau Anda akan melihat kesalahan `403`.

Tutup aplikasi Ollama, dan jalankan perintah berikut di terminal Anda. Protokol harus diubah ke protokol ekstensi browser Anda jika Anda tidak menggunakan Chrome atau Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Kemudian jalankan model Anda dengan Ollama seperti biasa, misalnya

```
ollama run llama3.2
```

**Panjang konteks**

Jendela konteks Ollama secara bawaan adalah 2048 token. Ini adalah jumlah maksimum token untuk pesan dan respons. Saat mengkliping halaman web yang panjang, Anda dapat dengan mudah melebihi batas ini. Ollama akan gagal secara diam-diam dan mengembalikan hasil yang tidak relevan. Beberapa opsi:

- Tingkatkan parameter `num_ctx` Ollama. Perhatikan bahwa konteks yang lebih panjang memerlukan lebih banyak memori.
- Gunakan bidang [[#Konteks]] di template Anda untuk menyediakan bagian halaman yang lebih terarah, atau pangkas konteks menggunakan [[Filter|filter]] misalnya `{{content|slice:0,1000}}`.
