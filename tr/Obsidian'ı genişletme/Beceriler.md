---
permalink: skills
cssclasses: null
description: 'Obsidian Skills, yapay zeka ajanlarına kasanızla ve Obsidian dosya biçimleriyle nasıl çalışacaklarını öğretir.'
---
Obsidian Skills, yapay zeka ajanlarına Obsidian ile nasıl çalışacaklarını öğreten talimatlardır. Açık [Agent Skills](https://agentskills.io/specification) formatını takip ederler, bu nedenle becerileri destekleyen Claude Code, Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode ve [daha birçoğu](https://agentskills.io/clients) dahil olmak üzere herhangi bir ajanla çalışırlar.

Obsidian Skills ile bir ajan şunları yapabilir:

- [[Obsidian Flavored Markdown]] ile [[Dahili bağlantılar|wiki bağlantıları]], gömüler, vurgulu bloklar ve [[Özellikler|özellikler]] içeren notlar yazma.
- [[Tabanlara giriş|Tabanlar]] ve [[Tuval|Canvas]] dosyaları oluşturma ve düzenleme.
- [[Obsidian CLI]] ile çalışan uygulamada notları arama, okuma ve yönetme.
- [[Obsidian Headless]] ile masaüstü uygulaması olmadan kasaları senkronize etme ve yayınlama.

Beceriler [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) adresinde açık kaynaktır.

## Kurulum

Obsidian, Claude, ChatGPT, Dots, Cursor, Grok Bot ve Hermes için resmi bir eklentidir. Diğer ajanların çoğu becerileri GitHub'dan yükleyebilir.

### Claude

Resmi Claude eklenti dizininden [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) ekleyin.

Claude Code CLI için şunu kullanın:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Daha sonra yeni beceriler almak için `claude plugin update obsidian@obsidian-skills` komutunu çalıştırın.

### ChatGPT

ChatGPT eklenti dizininden [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) ekleyin. Eklenti ChatGPT, Codex ve Dots'ta çalışır.

### Antigravity

Antigravity CLI'da şunu çalıştırın:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

[Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) sayfasını açın ve **Add to Grok Bot** seçeneğini tıklayın.

### Cursor

Cursor Marketplace'ten [Obsidian](https://cursor.com/marketplace/obsidian) yükleyin.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### GitHub Copilot, OpenCode ve diğer ajanlar

Hangi ajanlara yükleneceğini soran [npx skills](https://github.com/vercel-labs/skills) ile yükleyin:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Manuel olarak yüklemek için `plugins/obsidian/skills/` içindeki klasörleri ajanınızın beceriler klasörüne kopyalayın, örn. GitHub Copilot için `~/.copilot/skills/`.

## Dahil edilen beceriler

| Beceri              | Ne yapar                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | [[Obsidian Flavored Markdown]] notları oluşturma ve düzenleme.                                                                |
| `obsidian-bases`    | Görünümler, filtreler, formüller ve özetlerle [[Tabanlar söz dizimi|Tabanlar]] oluşturma ve düzenleme.                        |
| `json-canvas`       | [JSON Canvas](https://jsoncanvas.org/) formatını kullanarak [[Tuval|Canvas]] dosyaları oluşturma ve düzenleme.                |
| `obsidian-cli`      | Eklenti ve tema geliştirme dahil olmak üzere [[Obsidian CLI]] aracılığıyla kasanızla etkileşim kurma.                        |
| `obsidian-headless` | [[Obsidian Headless]] ile komut satırından kasaları senkronize etme ve yayınlama.                                             |
| `defuddle`          | [Defuddle](https://github.com/kepano/defuddle) kullanarak web sayfalarından temiz Markdown çıkarma.                          |
| `knap`              | [Knap](https://github.com/obsidianmd/knap) kullanarak JSON veya CSV verilerinden Markdown şablonları oluşturma.              |

## Gereksinimler

`obsidian-cli` becerisi, [[Obsidian CLI#Obsidian CLI'yi Yükleme|Obsidian CLI'nin açık]] olduğu Obsidian masaüstü uygulamasının çalışıyor olmasını ve bilgisayarınızda komut çalıştırabilen bir ajan gerektirir.

Markdown, Tabanlar ve Canvas becerileri yalnızca dosya formatlarını tanımlar, bu nedenle kasanızdaki dosyaları okuyup yazabilen herhangi bir ajanda çalışırlar.

Defuddle, Knap ve Obsidian Headless, becerilerle birlikte paketlenmeyen ayrı araçlardır. Biri eksik olduğunda, beceri npm'den yüklemeden önce izin ister.

## Gizlilik

Obsidian Skills kendi başlarına hiçbir şey göndermez. Bir ajan bunları kullandığında, okuduğu notlar konuşmanın bir parçası olur ve kullandığınız yapay zeka modeli tarafından işlenir. Hassas notlar içeren bir kasaya yönlendirmeden önce ajanınızın gizlilik politikasını inceleyin.
