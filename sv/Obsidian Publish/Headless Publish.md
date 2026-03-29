---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish erbjuder en huvudlös klient för att publicera valv utan att använda skrivbordsappen. Användbart för CI-pipelines och automatiserade arbetsflöden.
---
[[Introduktion till Obsidian Publish|Obsidian Publish]] erbjuder en headless-klient för att publicera valv utan att använda skrivbordsappen. Användbar för CI-pipelines och automatiserade arbetsflöden. Publicera dina senaste ändringar enligt ett schema eller som en del av en bygg-pipeline.

Installera [[Obsidian Headless]] **(öppen beta)** för att interagera med [[Introduktion till Obsidian Publish|Obsidian Publish]] från kommandoraden utan Obsidians skrivbordsapp.

## Snabbstart

Installera [[Obsidian Headless|Obsidian Headless]] **(öppen beta)**:

```shell
npm install -g obsidian-headless
```

Du måste ha en aktiv [[Introduktion till Obsidian Publish|Obsidian Publish-prenumeration]].

```shell
# Logga in
ob login

# Lista dina publish-webbplatser
ob publish-list-sites

# Anslut ett lokalt valv till en publish-webbplats
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Förhandsgranska ändringar utan att publicera
ob publish --dry-run

# Publicera ändringar
ob publish
```

## Kommandon

### `ob publish-list-sites`

Lista alla Publish-webbplatser som är tillgängliga för ditt konto.

### `ob publish-create-site`

Skapa en ny Publish-webbplats.

```
ob publish-create-site --slug <slug>
```

| Alternativ | Beskrivning |
| --- | --- |
| `--slug` | URL-identifierare för din webbplats (t.ex. `my-notes` skapar `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Anslut ett lokalt valv till en Publish-webbplats.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Alternativ | Beskrivning |
| --- | --- |
| `--site` | Webbplats-ID eller slug |
| `--path` | Lokal valvsökväg (standard: aktuell katalog) |

### `ob publish`

Publicera valvändringar till din webbplats. Som standard inkluderas bara filer med `publish: true` i sitt frontmatter.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Alternativ | Beskrivning |
| --- | --- |
| `--path` | Lokal valvsökväg (standard: aktuell katalog) |
| `--all` | Inkludera alla filer, inte bara de med en publish-flagga |
| `--dry-run` | Visa ändringar utan att publicera |
| `--yes` | Publicera utan att be om bekräftelse |

### `ob publish-config`

Visa eller ändra inställningar för inkludering/exkludering av mappar för ett valv. Kör utan alternativ för att visa aktuell konfiguration.

```
ob publish-config [--path <local-path>] [options]
```

| Alternativ | Beskrivning |
| --- | --- |
| `--path` | Lokal valvsökväg (standard: aktuell katalog) |
| `--includes` | Mappar att inkludera, kommaseparerade (tom sträng för att rensa) |
| `--excludes` | Mappar att exkludera, kommaseparerade (tom sträng för att rensa) |

### `ob publish-site-options`

Visa eller uppdatera webbplatsövergripande visnings- och navigeringsinställningar. Kör utan alternativ för att visa aktuella inställningar.

```
ob publish-site-options [--path <local-path>] [options]
```

| Alternativ | Beskrivning |
| --- | --- |
| `--path` | Lokal valvsökväg (standard: aktuell katalog) |
| `--site-name` | Webbplatsnamn |
| `--index-file` | Filsökväg för startsida |
| `--logo` | Filsökväg för logotyp (tom sträng för att rensa) |
| `--show-navigation` | Visa navigeringssidofält |
| `--show-graph` | Visa grafvy |
| `--show-outline` | Visa innehållsförteckning |
| `--show-search` | Visa sök |
| `--show-backlinks` | Visa bakåtlänkar |
| `--show-hover-preview` | Visa förhandsvisning vid hovring |
| `--show-theme-toggle` | Visa temaväxlare |
| `--default-theme` | Standardtema: `light` eller `dark` |
| `--readable-line-length` | Läsbar radlängd |
| `--strict-line-breaks` | Stränga radbyten |
| `--hide-title` | Dölj inbäddad rubrik |
| `--sliding-window` | Glidande fönsterläge |
| `--nav-order` | Navigeringsordning, kommaseparerade sökvägar (tom sträng för att rensa) |
| `--nav-hidden` | Dolda navigeringsobjekt, kommaseparerade sökvägar (tom sträng för att rensa) |

### `ob publish-unlink`

Koppla från ett valv från en Publish-webbplats.

```
ob publish-unlink [--path <local-path>]
```
