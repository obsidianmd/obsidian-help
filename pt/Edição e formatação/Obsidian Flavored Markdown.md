---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Aprenda sobre o Markdown com Sabor Obsidian, incluindo extensões suportadas e como o Markdown interage com elementos HTML.'
---
O Obsidian procura oferecer a máxima capacidade sem quebrar formatos existentes. Como resultado, utilizamos uma combinação de variantes de [[Sintaxe de formatação básica|Markdown]].

O Obsidian suporta [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) e [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown dentro de HTML
> O Obsidian não processa sintaxe Markdown dentro de elementos HTML. Esta é uma escolha de design intencional para otimização de desempenho e para manter a complexidade do analisador baixa ao gerir documentos grandes.
>
> Por exemplo, formatação Markdown como `**negrito**` ou `` `código` `` não será processada dentro de `<div>`, `<span>`, `<table>` ou quaisquer outras etiquetas HTML.
>
> ```md
> <div>
> Isto **não ficará** em negrito.
> </div>
> ```

### Extensões Markdown suportadas

| Sintaxe         | Descrição                                                                      |
| --------------- | ------------------------------------------------------------------------------ |
| `[[Ligação]]`   | [[Ligações internas]]                                                          |
| `![[Ligação]]`  | [[Incorporar ficheiros]]                                                       |
| `![[Ligação#^id]]` | [[Ligações internas#Ligar a um bloco numa nota\|Referências de bloco]]     |
| `^id`           | [[Ligações internas#Ligar a um bloco numa nota\|Definir um bloco]]             |
| `[^id]`         | [[Sintaxe de formatação básica#Notas de rodapé\|Notas de rodapé]]              |
| `%%Texto%%`     | [[Sintaxe de formatação básica#Comentários\|Comentários]]                      |
| `~~Texto~~`     | [[Sintaxe de formatação básica#Negrito, itálico, realces\|Rasurado]]           |
| `==Texto==`     | [[Sintaxe de formatação básica#Negrito, itálico, realces\|Realces]]            |
| `` ``` ``       | [[Sintaxe de formatação básica#Blocos de código\|Blocos de código]]            |
| `- [ ]`         | [[Sintaxe de formatação básica#Listas de tarefas\|Tarefa incompleta]]          |
| `- [x]`         | [[Sintaxe de formatação básica#Listas de tarefas\|Tarefa concluída]]           |
| `> [!note]`     | [[Chamamentos]]                                                                |
| (ver ligação)   | [[Sintaxe de formatação avançada#Tabelas\|Tabelas]]                            |
