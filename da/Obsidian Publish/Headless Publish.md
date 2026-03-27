---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish tilbyder en hovedløs klient til at publicere bokse uden at bruge desktop-appen. Nyttig til CI-pipelines og automatiserede arbejdsgange.
---
[[Introduktion til Obsidian Publish|Obsidian Publish]] tilbyder en hovedløs klient til at udgive bokse uden at bruge desktop-applikationen. Nyttigt til CI-pipelines og automatiserede arbejdsgange. Udgiv dine seneste ændringer efter en tidsplan eller som del af en build-pipeline.

Installér [[Obsidian Headless]] **(åben beta)** for at interagere med [[Introduktion til Obsidian Publish|Obsidian Publish]] fra kommandolinjen uden Obsidian desktop-applikationen.

## Hurtig start

Installér [[Obsidian Headless|Obsidian Headless]] **(åben beta)**:

```shell
npm install -g obsidian-headless
```

Du skal have et aktivt [[Introduktion til Obsidian Publish|Obsidian Publish-abonnement]].

```shell
# Log ind
ob login

# List dine publish-sider
ob publish-list-sites

# Forbind en lokal boks til en publish-side
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Forhåndsvis ændringer uden at udgive
ob publish --dry-run

# Udgiv ændringer
ob publish
```

## Kommandoer

### `ob publish-list-sites`

List alle Publish-sider tilgængelige for din konto.

### `ob publish-create-site`

Opret en ny Publish-side.

```
ob publish-create-site --slug <slug>
```

| Indstilling | Beskrivelse |
| --- | --- |
| `--slug` | URL-identifikator for din side (f.eks. `my-notes` opretter `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Forbind en lokal boks til en Publish-side.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Indstilling | Beskrivelse |
| --- | --- |
| `--site` | Side-ID eller slug |
| `--path` | Lokal bokssti (standard: nuværende mappe) |

### `ob publish`

Udgiv boksændringer til din side. Som standard inkluderes kun filer med `publish: true` i deres metadata.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Indstilling | Beskrivelse |
| --- | --- |
| `--path` | Lokal bokssti (standard: nuværende mappe) |
| `--all` | Inkludér alle filer, ikke kun dem med et publish-flag |
| `--dry-run` | Vis ændringer uden at udgive |
| `--yes` | Udgiv uden at bede om bekræftelse |

### `ob publish-config`

Vis eller ændre indstillinger for inkluderede/ekskluderede mapper for en boks. Kør uden indstillinger for at vise den nuværende konfiguration.

```
ob publish-config [--path <local-path>] [options]
```

| Indstilling | Beskrivelse |
| --- | --- |
| `--path` | Lokal bokssti (standard: nuværende mappe) |
| `--includes` | Mapper der skal inkluderes, kommasepareret (tom streng for at rydde) |
| `--excludes` | Mapper der skal ekskluderes, kommasepareret (tom streng for at rydde) |

### `ob publish-site-options`

Vis eller opdatér sideomfattende visnings- og navigationsindstillinger. Kør uden indstillinger for at vise de nuværende indstillinger.

```
ob publish-site-options [--path <local-path>] [options]
```

| Indstilling | Beskrivelse |
| --- | --- |
| `--path` | Lokal bokssti (standard: nuværende mappe) |
| `--site-name` | Sidenavn |
| `--index-file` | Sti til startsidenfil |
| `--logo` | Sti til logofil (tom streng for at rydde) |
| `--show-navigation` | Vis navigationssidebjælke |
| `--show-graph` | Vis grafvisning |
| `--show-outline` | Vis indholdsfortegnelse |
| `--show-search` | Vis søgning |
| `--show-backlinks` | Vis tilbagelinks |
| `--show-hover-preview` | Vis hover-forhåndsvisning |
| `--show-theme-toggle` | Vis temaskifter |
| `--default-theme` | Standardtema: `light` eller `dark` |
| `--readable-line-length` | Læsbar linjelængde |
| `--strict-line-breaks` | Strikse linjeskift |
| `--hide-title` | Skjul indlejret titel |
| `--sliding-window` | Glidende vinduestilstand |
| `--nav-order` | Navigationsrækkefølge, kommaseparerede stier (tom streng for at rydde) |
| `--nav-hidden` | Skjulte navigationselementer, kommaseparerede stier (tom streng for at rydde) |

### `ob publish-unlink`

Afbryd forbindelsen mellem en boks og en Publish-side.

```
ob publish-unlink [--path <local-path>]
```
