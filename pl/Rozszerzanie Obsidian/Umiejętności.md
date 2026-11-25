---
permalink: skills
cssclasses: null
description: 'Obsidian Skills uczą agentów AI, jak pracować z Twoim sejfem i formatami plików Obsidian.'
---
Obsidian Skills to instrukcje, które uczą agentów AI, jak pracować z Obsidian. Są zgodne z otwartym formatem [Agent Skills](https://agentskills.io/specification), więc działają z każdym agentem obsługującym umiejętności, w tym Claude Code, Claude, ChatGPT, Cursor, Gemini CLI, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode i [wieloma innymi](https://agentskills.io/clients).

Dzięki Obsidian Skills agent może:

- Pisać notatki w [[Obsidian Flavored Markdown]], z [[Łącza wewnętrzne|Wikilinkami]], osadzeniami, blokami wyróżnienia i [[Atrybuty|atrybutami]].
- Tworzyć i edytować pliki [[Wprowadzenie do baz danych|Baz danych]] i [[Tablica|Tablicy]].
- Wyszukiwać, odczytywać i zarządzać notatkami w działającej aplikacji za pomocą [[Obsidian CLI]].
- Synchronizować i publikować sejfy bez aplikacji desktopowej za pomocą [[Obsidian Headless]].

Umiejętności są otwarte źródłowo na [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Instalacja

Obsidian jest oficjalną wtyczką dla Claude, ChatGPT, Codex, Cursor, Grok Bot i Hermes Agent. Inne agenty instalują umiejętności z GitHuba.

### ChatGPT i Codex

Dodaj [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) z katalogu wtyczek ChatGPT. Wtyczka działa zarówno w ChatGPT, jak i Codex.

### Cursor

Zainstaluj [Obsidian](https://cursor.com/marketplace/obsidian) z Cursor Marketplace.

### Grok Bot

Otwórz [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) i wybierz **Add to Grok Bot**.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Aby później pobrać nowe umiejętności, uruchom `claude plugin update obsidian@obsidian-skills`.

### Claude

Dodaj [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) z katalogu wtyczek Claude.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode i inne agenty

Zainstaluj za pomocą [npx skills](https://github.com/vercel-labs/skills), który zapyta, do których agentów zainstalować:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Aby zainstalować ręcznie, skopiuj foldery z `plugins/obsidian/skills/` do folderu umiejętności swojego agenta, np. `~/.copilot/skills/` dla GitHub Copilot.

## Dołączone umiejętności

| Umiejętność         | Co robi                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Tworzenie i edycja notatek w formacie [[Obsidian Flavored Markdown]].                                                         |
| `obsidian-bases`    | Tworzenie i edycja [[Składnia baz danych\|Baz danych]] z podglądami, filtrami, wzorami i podsumowaniami.                      |
| `json-canvas`       | Tworzenie i edycja plików [[Tablica|Tablicy]] w formacie [JSON Canvas](https://jsoncanvas.org/).                              |
| `obsidian-cli`      | Interakcja z sejfem przez [[Obsidian CLI]], w tym tworzenie wtyczek i motywów.                                                |
| `obsidian-headless` | Synchronizacja i publikowanie sejfów z wiersza poleceń za pomocą [[Obsidian Headless]].                                       |
| `defuddle`          | Wyodrębnianie czystego Markdown ze stron internetowych za pomocą [Defuddle](https://github.com/kepano/defuddle).               |
| `knap`              | Renderowanie szablonów Markdown z danych JSON lub CSV za pomocą [Knap](https://github.com/obsidianmd/knap).                   |

## Wymagania

Umiejętność `obsidian-cli` wymaga działającej aplikacji desktopowej Obsidian z [[Obsidian CLI#Instalacja Obsidian CLI|włączonym Obsidian CLI]] oraz agenta, który może uruchamiać polecenia na Twoim komputerze.

Umiejętności Markdown, Baz danych i Tablicy opisują jedynie formaty plików, więc działają w każdym agencie, który może odczytywać i zapisywać pliki w Twoim sejfie.

Defuddle, Knap i Obsidian Headless to oddzielne narzędzia, które nie są dołączone do umiejętności. Gdy któregoś brakuje, umiejętność zapyta przed zainstalowaniem go z npm.

## Prywatność

Obsidian Skills same z siebie niczego nie wysyłają. Gdy agent z nich korzysta, odczytane notatki stają się częścią konwersacji i są przetwarzane przez używany model AI. Zapoznaj się z polityką prywatności swojego agenta, zanim skierujesz go na sejf z wrażliwymi notatkami.
