---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: Aprenda sobre o Markdown com sabor Obsidian, incluindo extensões suportadas e como o Markdown interage com elementos HTML.
---
O Obsidian busca a máxima capacidade sem quebrar nenhum formato existente. Como resultado, utilizamos uma combinação de variantes de [[Sintaxe de formatação básica|Markdown]].

O Obsidian suporta [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) e [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown dentro de HTML
> O Obsidian não renderiza sintaxe Markdown dentro de elementos HTML. Esta é uma escolha de design intencional para otimização de desempenho e para manter a complexidade do parser baixa ao gerenciar documentos grandes.
>
> Por exemplo, formatação Markdown como `**negrito**` ou `` `código` `` não será processada dentro de `<div>`, `<span>`, `<table>` ou qualquer outra tag HTML.
>
> ```md
> <div>
> Isto **não ficará** em negrito.
> </div>
> ```

### Extensões Markdown suportadas

| Sintaxe         | Descrição                                                             |
| --------------- | --------------------------------------------------------------------- |
| `[[Link]]`      | [[Links internos]]                                                    |
| `![[Link]]`     | [[Incorporar arquivos]]                                               |
| `![[Link#^id]]` | [[Links internos#Link para um bloco em uma nota\|Referências de bloco]]   |
| `^id`           | [[Links internos#Link para um bloco em uma nota\|Definindo um bloco]]     |
| `[^id]`         | [[Sintaxe de formatação básica#Notas de rodapé\|Notas de rodapé]]     |
| `%%Texto%%`     | [[Sintaxe de formatação básica#Comentários\|Comentários]]             |
| `~~Texto~~`     | [[Sintaxe de formatação básica#Negrito, itálico, destaques\|Taxado]]  |
| `==Texto==`     | [[Sintaxe de formatação básica#Negrito, itálico, destaques\|Destaques]] |
| `` ``` ``       | [[Sintaxe de formatação básica#Blocos de código\|Blocos de código]]   |
| `- [ ]`         | [[Sintaxe de formatação básica#Listas de tarefas\|Tarefa incompleta]] |
| `- [x]`         | [[Sintaxe de formatação básica#Listas de tarefas\|Tarefa concluída]]  |
| `> [!note]`     | [[Callouts]]                                                          |
| (ver link)      | [[Sintaxe de formatação avançada#Tabelas\|Tabelas]]                   |
