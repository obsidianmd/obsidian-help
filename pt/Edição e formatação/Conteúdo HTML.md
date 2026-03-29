---
permalink: html
publish: true
mobile: true
description: 'Aprenda a usar HTML no Obsidian, incluindo limitações com a renderização de Markdown e requisitos de blocos HTML.'
---
O Obsidian suporta HTML para lhe permitir exibir as suas notas da forma que desejar, ou até [[Incorporar páginas web|incorporar páginas web]]. Permitir HTML dentro das suas notas acarreta riscos. Para evitar que código malicioso cause danos, o Obsidian _sanitiza_ qualquer HTML nas suas notas.

> [!example] 
> O elemento `<script>` normalmente permite executar JavaScript sempre que é carregado. Se o Obsidian não sanitizasse o HTML, um atacante poderia convencê-lo a colar um texto contendo JavaScript que extrai informações sensíveis do seu computador e as envia de volta para ele.

Dito isto, uma vez que a sintaxe Markdown não suporta todas as formas de estilização, usar HTML sanitizado pode ser mais uma forma de melhorar a qualidade das suas notas. Incluímos algumas das utilizações mais comuns de HTML.

## Limitações do HTML

O Obsidian tem limitações específicas ao usar HTML nas suas notas:

### Sem Markdown dentro de HTML

O Obsidian não renderiza sintaxe Markdown dentro de elementos HTML. Esta é uma escolha de design intencional para otimização de desempenho e para manter a complexidade do analisador baixa ao gerir documentos grandes.

Por exemplo, isto não funcionará como esperado:

```md
<div>
Isto **não ficará** a negrito e isto `não ficará` como código.
</div>
```

### Blocos HTML devem ser autocontidos

Os blocos HTML devem estar completos e não podem conter linhas em branco dentro deles. Linhas em branco irão quebrar o bloco HTML.

Isto funcionará:

```md
<table>
<tr>
<td>Conteúdo aqui</td>
</tr>
</table>
```

Isto não funcionará corretamente:

```md
<table>

<tr>

<td>Conteúdo aqui</td>

</tr>

</table>
```

### Quando o Markdown parece funcionar em HTML

Algumas etiquetas HTML inline como `<span>` ou `<a>` têm funcionalidade limitada e podem parecer renderizar Markdown, mas isto não é realmente o que está a acontecer. O Markdown está a ser processado fora do contexto HTML.

Para mais detalhes sobre como o Obsidian lida com Markdown, consulte [[Obsidian Flavored Markdown]].

## Utilização comum de HTML

> [!info] Mais detalhes sobre o uso de `<iframe>` podem ser encontrados em [[Incorporar páginas web]].

### Comentários

[[Sintaxe de formatação básica#Comentários|Comentários Markdown]] são a forma preferida de adicionar comentários ocultos nas suas notas. No entanto, alguns métodos de conversão de notas Markdown, como o [Pandoc](https://pandoc.org), têm suporte limitado para comentários Markdown. Nesses casos, pode usar `<!-- Comentário HTML -->` em alternativa!

### Sublinhado

Se precisar de sublinhar rapidamente um item nas suas notas, pode usar `<u>Exemplo</u>` para criar <u>o seu texto sublinhado</u>.

### Span/Div

As etiquetas span e div podem ser usadas para aplicar classes personalizadas de um [[Fragmentos CSS|excerto CSS]], ou estilos personalizados definidos, numa área selecionada de texto. Por exemplo, usar `<span style="font-family: cursive">o seu texto</span>` pode permitir-lhe rapidamente <span style="font-family: cursive">mudar a sua fonte</span>.

## Rasurado

Precisa de rasurar <s>algum texto</s>? Use `<s>isto</s>` para o rasurar.
