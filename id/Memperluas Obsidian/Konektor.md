---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: Hubungkan Obsidian ke agen AI agar mereka dapat bekerja dengan vault Anda dan format file Obsidian.
---
Konektor memungkinkan Anda dengan mudah memberikan akses agen ke Obsidian, sambil tetap memiliki kepemilikan penuh atas data Anda. Konektor Obsidian tersedia untuk aplikasi termasuk Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode, dan [banyak lagi](https://agentskills.io/clients).

Ini berarti agen Anda dapat mempelajari cara:

- Menulis catatan dalam [[Obsidian Flavored Markdown]], dengan [[Tautan internal|tautan wiki]], sematan, callout, dan [[Properti|properti]].
- Membuat dan mengedit file [[Pengenalan Basis|Basis]] dan [[Canvas|Canvas]].
- Mencari, membaca, dan mengelola catatan di aplikasi yang berjalan dengan [[Obsidian CLI]].
- Menyinkronkan dan mempublikasikan brankas tanpa aplikasi desktop menggunakan [[Obsidian Headless]].

Konektor Obsidian dan skill sumber terbuka tersedia di [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Pasang

Anda dapat menemukan Konektor Obsidian dengan mencari di marketplace atau direktori plugin di aplikasi agen Anda. Anda juga dapat mengirimkan tautan ke halaman ini kepada agen Anda.

### Claude

Tambahkan [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) dari direktori plugin resmi Claude.

Untuk CLI Claude Code gunakan:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Untuk mendapatkan skill baru nanti, jalankan `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Tambahkan [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) dari direktori plugin ChatGPT. Plugin ini bekerja di ChatGPT, Codex, dan Dots.

### Antigravity

Di CLI Antigravity, jalankan:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Buka [Obsidian untuk Grok Bot](https://x.ai/bot/plugin/88871845) dan pilih **Add to Grok Bot**.

### Muse

Minta Muse untuk memasang skill dari https://github.com/obsidianmd/obsidian-skills.

Muse berjalan di cloud Meta, jadi skill `obsidian-cli` tidak berfungsi di sana. Jika Anda menggunakan Obsidian Headless di Muse, Anda masuk dan menyinkronkan brankas Anda di cloud Meta.

### Cursor

Pasang [Obsidian](https://cursor.com/marketplace/obsidian) dari Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode, dan agen lainnya

Pasang dengan [npx skills](https://github.com/vercel-labs/skills), yang akan menanyakan agen mana yang akan dipasangi:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Untuk memasang secara manual, salin folder di `plugins/obsidian/skills/` ke folder skill agen Anda, misalnya `~/.copilot/skills/` untuk GitHub Copilot.

## Skill yang disertakan

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

Skill `obsidian-cli` memerlukan aplikasi desktop Obsidian yang berjalan dengan [[Obsidian CLI#Pasang Obsidian CLI|Obsidian CLI diaktifkan]], dan agen yang dapat menjalankan perintah di komputer Anda.

Skill Markdown, Basis, dan Canvas hanya mendeskripsikan format file, sehingga berfungsi di agen apa pun yang dapat membaca dan menulis file di brankas Anda.

Defuddle, Knap, dan Obsidian Headless adalah alat terpisah yang tidak disertakan bersama skill. Ketika salah satunya tidak tersedia, skill akan bertanya sebelum memasangnya dari npm.

## Privasi

Konektor Obsidian tidak mengirim apa pun dengan sendirinya. Ketika agen menggunakannya, catatan yang dibacanya menjadi bagian dari percakapan dan diproses oleh model AI yang Anda gunakan. Tinjau kebijakan privasi agen Anda sebelum mengarahkannya ke brankas yang berisi catatan sensitif.
