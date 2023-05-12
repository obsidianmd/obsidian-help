---
aliases:
   - matéria de frente
   - Tópicos avançados/início do YAML
---

Enquanto a maior parte do texto em uma nota deve ser lida por um ser humano, _metadados_ é um texto que deve ser facilmente lido por um programa, por exemplo um [[Plugins da comunidade|plugin da comunidade]] ou o próprio Obsidian.

Você pode adicionar metadados às suas notas adicionando um bloco na primeira linha da sua nota. O bloco deve começar e terminar com três hífens (`---`).

Por exemplo, a nota a seguir contém dois metadados, `tag` e `publish`:

```yaml
---
tag: diário
publish: false
---

# Nota diária

Hoje eu aprendi sobre matéria de frente.
```

> [!dica]
> Por padrão, os metadados só são visíveis na [[Editando e visualizando Markdown#Editor views|editing view]].
>
> Para exibir metadados na exibição de leitura:
>
> 1. Abra **Configurações**.
> 2. Em **Editor**, habilite **Mostrar frontmatter**.

## Formato de metadados

[YAML](https://yaml.org/) é um formato de configuração amplamente usado que pode ser lido por humanos e máquinas. Cada parte dos metadados consiste em uma _chave_ e um _valor_ correspondente.

As chaves são separadas de seus valores por dois pontos seguidos por um espaço:

```yaml
---
chave: valor
---
```

Embora a ordem de cada par chave-valor não importe, cada chave deve ser única dentro de uma nota. Por exemplo, você não pode ter mais de uma chave `tag`.

Os valores podem ser texto, números, verdadeiro ou falso, ou até mesmo coleções de valores (arrays).

```yaml
---
titulo: Uma Nova Esperança
ano: 1977
favorito: true
elenco:
   - Mark Hamil
   - Harrison Ford
   - Carrie Fischer
---
```

> [!tip] metadados JSON
> Embora recomendemos o uso de YAML para definir metadados, você também pode definir metadados usando [JSON](https://www.json.org/):
>
> ```md
> ---
> {
> "etiqueta": "diário",
> "publicar": falso
> }
> ---
> ```

## Metadados predefinidos

Obsidian vem com um conjunto de chaves predefinidas:

| Chave | Descrição |
|-|-|
| `tag` | Ver [[Tags]]. |
| `tags` | Alias para `tag`. |
| `alias` | Veja [[Apelidos]]. |
| `aliases` | Alias para `alias`. |
| `cssclass` | Permite estilizar notas individuais usando [[Trechos de CSS]]. |

### Metadata para Obsidian Publish

As seguintes chaves de metadados são usadas por [[Introdução ao Obsidian Publish|Obsidian Publish]]:

| Chave | Descrição |
|-|-|
| `publicar` | Veja [[Publicar e cancelar a publicação de notas#Automatically select notes to publish]]. |
| `permalink` | Consulte [[Publicar e cancelar a publicação de notas#Permalinks]]. |
| `descrição` | Veja [[Visualizações de links de mídia social#Description]]. |
| `imagem` | Veja [[Visualizações de links de mídia social#Image]]. |
| `capa` | Veja [[Visualizações de links de mídia social#Image]]. |
