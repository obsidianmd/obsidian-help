---
permalink: plugins/slides
aliases:
  - Plugins/Slides
---
Slides é um [[Plugins nativos|plugin nativo]] que permite criar apresentações a partir das suas notas. Para começar uma apresentação:

**Menu de arquivo:**

- Clique com o botão direito na aba de uma nota e clique em **Começar apresentação**.

**Paleta de comandos:**

1. Pressione `Ctrl+P` (ou `Cmd+P` no macOS) para abrir a [[Paleta de comandos]].
2. Pesquise pelo comando **Começar apresentação**.
3. Pressione `Enter` com o comando selecionado para começar uma apresentação usando a nota ativa.

Para navegar entre os slides, clique nas setas esquerda e direita no canto inferior direito, ou pressione as teclas de seta esquerda e direita no seu teclado.

Você também pode avançar para o próximo slide pressionando a barra de espaço.

Para parar a apresentação, pressione `Escape` ou clique no X no canto superior direito da apresentação.

Você pode usar qualquer arquivo Markdown válido como apresentação. Para separar os slides, insira `---` no início de uma linha cercada por linhas em branco.

```md
# Apresentações usando Slides

Uma demonstração de como criar apresentações usando Slides.

---

## Formatação

Você pode usar formatação Markdown comum, como texto em *itálico* e **negrito**.

---

## Slides

Use `---` para separar slides.
```
