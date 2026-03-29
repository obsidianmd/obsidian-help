---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish tilbyr en hodeløs klient for å publisere hvelv uten å bruke skrivebordsappen. Nyttig for CI-pipelines og automatiserte arbeidsflyter.
---
[[Introduksjon til Obsidian Publish|Obsidian Publish]] tilbyr en hodeløs klient for å publisere hvelv uten å bruke skrivebordsappen. Nyttig for CI-pipelines og automatiserte arbeidsflyter. Publiser de nyeste endringene dine etter en tidsplan eller som del av en byggepipeline.

Installer [[Obsidian Headless]] **(åpen beta)** for å samhandle med [[Introduksjon til Obsidian Publish|Obsidian Publish]] fra kommandolinjen uten Obsidian-skrivebordsappen.

## Hurtigstart

Installer [[Obsidian Headless|Obsidian Headless]] **(åpen beta)**:

```shell
npm install -g obsidian-headless
```

Du må ha et aktivt [[Introduksjon til Obsidian Publish|Obsidian Publish-abonnement]].

```shell
# Logg inn
ob login

# List opp dine Publish-nettsteder
ob publish-list-sites

# Koble et lokalt hvelv til et Publish-nettsted
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Forhåndsvis endringer uten å publisere
ob publish --dry-run

# Publiser endringer
ob publish
```

## Kommandoer

### `ob publish-list-sites`

List opp alle Publish-nettsteder tilgjengelig for kontoen din.

### `ob publish-create-site`

Opprett et nytt Publish-nettsted.

```
ob publish-create-site --slug <slug>
```

| Alternativ | Beskrivelse |
| --- | --- |
| `--slug` | URL-identifikator for nettstedet ditt (f.eks. `my-notes` oppretter `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Koble et lokalt hvelv til et Publish-nettsted.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Alternativ | Beskrivelse |
| --- | --- |
| `--site` | Nettsted-ID eller slug |
| `--path` | Lokal hvelvsti (standard: gjeldende mappe) |

### `ob publish`

Publiser hvelvets endringer til nettstedet ditt. Som standard inkluderes kun filer med `publish: true` i startmetadataen.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Alternativ | Beskrivelse |
| --- | --- |
| `--path` | Lokal hvelvsti (standard: gjeldende mappe) |
| `--all` | Inkluder alle filer, ikke bare de med publiseringsflagg |
| `--dry-run` | Vis endringer uten å publisere |
| `--yes` | Publiser uten å be om bekreftelse |

### `ob publish-config`

Vis eller endre inkluder/ekskluder-mappeinnstillinger for et hvelv. Kjør uten alternativer for å vise gjeldende konfigurasjon.

```
ob publish-config [--path <local-path>] [options]
```

| Alternativ | Beskrivelse |
| --- | --- |
| `--path` | Lokal hvelvsti (standard: gjeldende mappe) |
| `--includes` | Mapper å inkludere, kommaseparert (tom streng for å tømme) |
| `--excludes` | Mapper å ekskludere, kommaseparert (tom streng for å tømme) |

### `ob publish-site-options`

Vis eller oppdater nettstedsbrede visnings- og navigasjonsinnstillinger. Kjør uten alternativer for å vise gjeldende innstillinger.

```
ob publish-site-options [--path <local-path>] [options]
```

| Alternativ | Beskrivelse |
| --- | --- |
| `--path` | Lokal hvelvsti (standard: gjeldende mappe) |
| `--site-name` | Nettstedsnavn |
| `--index-file` | Filsti for hjemmeside |
| `--logo` | Filsti for logo (tom streng for å tømme) |
| `--show-navigation` | Vis navigasjonssidefelt |
| `--show-graph` | Vis grafvisning |
| `--show-outline` | Vis innholdsfortegnelse |
| `--show-search` | Vis søk |
| `--show-backlinks` | Vis tilbakelenker |
| `--show-hover-preview` | Vis hover-forhåndsvisning |
| `--show-theme-toggle` | Vis temabryter |
| `--default-theme` | Standardtema: `light` eller `dark` |
| `--readable-line-length` | Lesbar linjelengde |
| `--strict-line-breaks` | Nøye linjeskift |
| `--hide-title` | Skjul innebygd tittel |
| `--sliding-window` | Glidende vindu-modus |
| `--nav-order` | Navigasjonsrekkefølge, kommaseparerte stier (tom streng for å tømme) |
| `--nav-hidden` | Skjulte navigasjonselementer, kommaseparerte stier (tom streng for å tømme) |

### `ob publish-unlink`

Koble et hvelv fra et Publish-nettsted.

```
ob publish-unlink [--path <local-path>]
```
