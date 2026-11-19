---
permalink: skills
cssclasses: null
description: Obsidian Skills mengajarkan agen AI cara bekerja dengan vault Anda dan format file Obsidian.
---
Obsidian Skills adalah instruksi yang mengajarkan agen AI cara bekerja dengan Obsidian. Skills ini mengikuti format terbuka [Agent Skills](https://agentskills.io/specification), sehingga dapat bekerja dengan agen mana pun yang mendukung skills, termasuk Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, OpenCode, dan [banyak lagi](https://agentskills.io/clients).

Dengan Obsidian Skills, sebuah agen dapat:

- Menulis catatan dalam [[Obsidian Flavored Markdown]], dengan [[Tautan internal|tautan wiki]], sematan, callout, dan [[Properti|properti]].
- Membuat dan mengedit file [[Pengenalan Basis|Basis]] dan [[Canvas]].
- Mencari, membaca, dan mengelola catatan di aplikasi yang berjalan dengan [[Obsidian CLI]].
- Menyinkronkan dan mempublikasikan brankas tanpa aplikasi desktop menggunakan [[Obsidian Headless]].

Skills ini bersumber terbuka di [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Pasang

Obsidian adalah plugin resmi untuk ChatGPT, Codex, Cursor, dan Grok Bot. Agen lain memasang skills dari GitHub.

### ChatGPT dan Codex

Tambahkan [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) dari direktori plugin ChatGPT. Plugin ini berfungsi di ChatGPT maupun Codex.

### Cursor

Pasang [Obsidian](https://cursor.com/marketplace/obsidian) dari Cursor Marketplace.

### Grok Bot

Buka [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) dan pilih **Add to Grok Bot**.

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Untuk mendapatkan skills baru nanti, jalankan `claude plugin update obsidian@obsidian-skills`.

### Claude

Claude mengunggah setiap skill sebagai file ZIP, jadi tambahkan hanya skills yang Anda butuhkan:

1. Unduh [obsidian-skills](https://github.com/obsidianmd/obsidian-skills/archive/refs/heads/main.zip) dan ekstrak.
2. Di `plugins/obsidian/skills/`, kompres folder setiap skill yang Anda inginkan menjadi file ZIP, misalnya `obsidian-markdown.zip`.
3. Di Claude, buka **Customize** → **Skills**, pilih **+** → **Create skill** → **Upload a skill**, dan pilih file ZIP tersebut.

Lihat [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) untuk paket yang mendukung skills.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode, dan agen lainnya

Pasang dengan [npx skills](https://github.com/vercel-labs/skills), yang akan menanyakan agen mana yang akan dipasangi:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Untuk memasang secara manual, salin folder di `plugins/obsidian/skills/` ke folder skills agen Anda, misalnya `~/.copilot/skills/` untuk GitHub Copilot.

## Skills yang disertakan

| Skill               | Fungsinya                                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Membuat dan mengedit catatan [[Obsidian Flavored Markdown]].                                                                  |
| `obsidian-bases`    | Membuat dan mengedit [[Sintaksis Basis\|Basis]] dengan tampilan, filter, rumus, dan ringkasan.                                |
| `json-canvas`       | Membuat dan mengedit file [[Canvas]] menggunakan format [JSON Canvas](https://jsoncanvas.org/).                                |
| `obsidian-cli`      | Berinteraksi dengan brankas Anda melalui [[Obsidian CLI]], termasuk pengembangan plugin dan tema.                             |
| `obsidian-headless` | Menyinkronkan dan mempublikasikan brankas dari baris perintah dengan [[Obsidian Headless]].                                   |
| `defuddle`          | Mengekstrak Markdown bersih dari halaman web menggunakan [Defuddle](https://github.com/kepano/defuddle).                      |
| `knap`              | Merender templat Markdown dari data JSON atau CSV menggunakan [Knap](https://github.com/obsidianmd/knap).                     |

## Persyaratan

Skill `obsidian-cli` membutuhkan aplikasi desktop Obsidian yang berjalan dengan [[Obsidian CLI#Pasang Obsidian CLI|Obsidian CLI diaktifkan]], dan agen yang dapat menjalankan perintah di komputer Anda.

Skill Markdown, Basis, dan Canvas hanya mendeskripsikan format file, sehingga berfungsi di agen mana pun yang dapat membaca dan menulis file di brankas Anda.

Defuddle, Knap, dan Obsidian Headless adalah alat terpisah yang tidak disertakan bersama skills. Ketika salah satunya tidak ada, skill akan bertanya sebelum memasangnya dari npm.

## Privasi

Obsidian Skills tidak mengirim apa pun dengan sendirinya. Ketika sebuah agen menggunakannya, catatan yang dibacanya menjadi bagian dari percakapan dan diproses oleh model AI yang Anda gunakan. Tinjau kebijakan privasi agen Anda sebelum mengarahkannya ke brankas yang berisi catatan sensitif.
