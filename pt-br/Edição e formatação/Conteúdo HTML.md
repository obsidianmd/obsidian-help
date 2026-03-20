---
permalink: html
publish: true
mobile: true
description: >-
  Aprenda como usar HTML no Obsidian, incluindo limitações com a renderização
  Markdown, e requisitos de blocos HTML.
---
O Obsidian suporta HTML para permitir que você exiba suas notas da maneira que quiser, ou até mesmo [[Incorporar páginas web|incorporar páginas web]]. Permitir HTML dentro das suas notas traz riscos. Para impedir que código malicioso cause danos, o Obsidian _sanitiza_ qualquer HTML nas suas notas.

> [!example]
> O elemento `<script>` normalmente permite executar JavaScript sempre que é carregado. Se o Obsidian não sanitizasse o HTML, um invasor poderia convencê-lo a colar um texto contendo JavaScript que extrai informações sensíveis do seu computador e as envia de volta para ele.

Dito isso, como a sintaxe Markdown não suporta todas as formas de estilização, usar HTML sanitizado pode ser mais uma maneira de melhorar a qualidade das suas notas. Incluímos alguns dos usos mais comuns de HTML.

## Limitações do HTML

O Obsidian possui limitações específicas ao usar HTML nas suas notas:

### Sem Markdown dentro do HTML

O Obsidian não renderiza sintaxe Markdown dentro de elementos HTML. Essa é uma escolha de design intencional para otimização de desempenho e para manter a complexidade do parser baixa ao gerenciar documentos grandes.

Por exemplo, isso não funcionará como esperado:

```md
<div>
Isso **não ficará** em negrito e isso `não será` código.
</div>
```

### Blocos HTML devem ser autocontidos

Blocos HTML devem ser completos e não podem conter linhas em branco dentro deles. Linhas em branco quebrarão o bloco HTML.

Isso funcionará:

```md
<table>
<tr>
<td>Conteúdo aqui</td>
</tr>
</table>
```

Isso não funcionará corretamente:

```md
<table>

<tr>

<td>Conteúdo aqui</td>

</tr>

</table>
```

### Quando o Markdown parece funcionar dentro do HTML

Algumas tags HTML inline como `<span>` ou `<a>` têm funcionalidade limitada e podem parecer renderizar Markdown, mas isso não é realmente o que está acontecendo. O Markdown está sendo processado fora do contexto HTML.

Para mais detalhes sobre como o Obsidian lida com Markdown, veja [[Obsidian Flavored Markdown]].

## Uso comum de HTML

> [!info] Mais detalhes sobre o uso de `<iframe>` podem ser encontrados em [[Incorporar páginas web]].

### Comentários

[[Sintaxe de formatação básica#Comentários|Comentários Markdown]] são a forma preferida de adicionar comentários ocultos dentro das suas notas. No entanto, alguns métodos de conversão de notas Markdown, como o [Pandoc](https://pandoc.org), têm suporte limitado a comentários Markdown. Nesses casos, você pode usar um `<!-- Comentário HTML -->` como alternativa!

### Sublinhado

Se você precisa sublinhar rapidamente um item nas suas notas, pode usar `<u>Exemplo</u>` para criar <u>seu texto sublinhado</u>.

### Span/Div

As tags span e div podem ser usadas para aplicar classes personalizadas de um [[Trechos CSS|trecho CSS]], ou estilização personalizada definida, em uma área selecionada de texto. Por exemplo, usar `<span style="font-family: cursive">seu texto</span>` pode permitir que você rapidamente <span style="font-family: cursive">mude sua fonte</span>.

## Taxado

Precisa riscar <s>algum texto</s>? Use `<s>isso</s>` para riscá-lo.
