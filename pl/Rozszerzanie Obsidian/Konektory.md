---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: 'Połącz Obsidian z agentami AI, aby mogli pracować z Twoim sejfem i formatami plików Obsidian.'
---
Konektory umożliwiają łatwe udostępnienie agentom dostępu do Obsidian, zachowując pełną własność nad swoimi danymi. Konektory Obsidian są dostępne dla aplikacji takich jak Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode i [wielu innych](https://agentskills.io/clients).

Oznacza to, że Twoi agenci mogą nauczyć się:

- Pisać notatki w [[Obsidian Flavored Markdown]], z [[Łącza wewnętrzne|wikilinkami]], osadzeniami, blokami informacyjnymi i [[Atrybuty|atrybutami]].
- Tworzyć i edytować pliki [[Wprowadzenie do baz danych|Bazy danych]] i [[Tablica|Canvas]].
- Wyszukiwać, odczytywać i zarządzać notatkami w uruchomionej aplikacji za pomocą [[Obsidian CLI]].
- Synchronizować i publikować sejfy bez aplikacji desktopowej za pomocą [[Obsidian Headless]].

Konektory Obsidian i umiejętności o otwartym kodzie są dostępne na [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalacja

Konektory Obsidian można znaleźć, wyszukując w marketplace lub katalogu wtyczek w aplikacji swojego agenta. Możesz też wysłać agentowi link do tej strony.

### Claude

Dodaj [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) z oficjalnego katalogu wtyczek Claude.

Dla CLI Claude Code użyj:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Aby później uzyskać nowe umiejętności, uruchom `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Dodaj [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) z katalogu wtyczek ChatGPT. Wtyczka działa w ChatGPT, Codex i Dots.

### Antigravity

W CLI Antigravity uruchom:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Otwórz [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) i wybierz **Add to Grok Bot**.

### Muse

Poproś Muse o zainstalowanie umiejętności z https://github.com/obsidianmd/obsidian-skills.

Muse działa w chmurze Meta, więc umiejętność `obsidian-cli` tam nie działa. Jeśli używasz Obsidian Headless w Muse, logujesz się i synchronizujesz swój sejf w chmurze Meta.

### Cursor

Zainstaluj [Obsidian](https://cursor.com/marketplace/obsidian) z Cursor Marketplace.

### Hermes Agent

Zainstaluj [Obsidian](https://hermes-agent.nousresearch.com/marketplace/obsidian) z Hermes Marketplace lub uruchom:

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode i inni agenci

Zainstaluj za pomocą [npx skills](https://github.com/vercel-labs/skills), który zapyta, do których agentów zainstalować:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Aby zainstalować ręcznie, skopiuj foldery z `plugins/obsidian/skills/` do folderu umiejętności swojego agenta, np. `~/.copilot/skills/` dla GitHub Copilot.

## Dołączone umiejętności

| Umiejętność         | Co robi                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Tworzenie i edycja notatek w [[Obsidian Flavored Markdown]].                                                                  |
| `obsidian-bases`    | Tworzenie i edycja [[Składnia baz danych|Baz danych]] z widokami, filtrami, wzorami i podsumowaniami.                         |
| `json-canvas`       | Tworzenie i edycja plików [[Tablica|Canvas]] w formacie [JSON Canvas](https://jsoncanvas.org/).                               |
| `obsidian-cli`      | Interakcja z sejfem przez [[Obsidian CLI]], w tym tworzenie wtyczek i motywów.                                                |
| `obsidian-headless` | Synchronizacja i publikowanie sejfów z wiersza poleceń za pomocą [[Obsidian Headless]].                                       |
| `defuddle`          | Wyodrębnianie czystego Markdown ze stron internetowych za pomocą [Defuddle](https://github.com/kepano/defuddle).              |
| `knap`              | Renderowanie szablonów Markdown z danych JSON lub CSV za pomocą [Knap](https://github.com/obsidianmd/knap).                   |

## Wymagania

Umiejętność `obsidian-cli` wymaga uruchomionej aplikacji desktopowej Obsidian z [[Obsidian CLI#Instalacja Obsidian CLI|włączonym Obsidian CLI]] oraz agenta, który może uruchamiać polecenia na Twoim komputerze.

Umiejętności Markdown, Bazy danych i Canvas opisują jedynie formaty plików, więc działają w każdym agencie, który może odczytywać i zapisywać pliki w Twoim sejfie.

Defuddle, Knap i Obsidian Headless to osobne narzędzia, które nie są dołączone do umiejętności. Gdy któregoś brakuje, umiejętność pyta przed zainstalowaniem go z npm.

## Prywatność

Konektory Obsidian same z siebie niczego nie wysyłają. Gdy agent z nich korzysta, odczytane notatki stają się częścią konwersacji i są przetwarzane przez używany model AI. Zapoznaj się z polityką prywatności swojego agenta, zanim skierujesz go na sejf z wrażliwymi notatkami.
