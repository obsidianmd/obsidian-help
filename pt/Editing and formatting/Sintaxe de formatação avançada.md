Saiba como adicionar sintaxe de formatação avançada às suas notas.

## Tabelas

Você pode criar tabelas usando barras verticais (`|`) e hífens (`-`). As barras verticais separam as colunas e os hífens definem o cabeçalho da coluna.

```md
| Primeiro nome | Sobrenome |
| ---------- | ---------- |
| máx | Plano |
| Maria | curie |
```

| Primeiro nome | Sobrenome |
| ---------- | ---------- |
| máx | Plano |
| Maria | curie |

As barras verticais ou qualquer um dos lados da mesa são opcionais.

As células não precisam estar perfeitamente alinhadas com as colunas. Cada linha de cabeçalho deve ter pelo menos dois hífens.

```md
Primeiro nome | Sobrenome
-- | --
máx | Planck
Maria | curie
```

### Formatar conteúdo dentro de uma tabela

Você pode usar [[Sintaxe de formatação básica]] para estilizar o conteúdo dentro de uma tabela.

Primeira coluna | Segunda coluna
-- | --
[[Links internos]] | Link para um arquivo _dentro_ do seu **cofre**.
[[Incorporando arquivos]] | ![[og-image.png\|200]]

> [!note] Barras verticais em tabelas
> Se você quiser usar [[Apelidos]], ou [[Sintaxe de formatação básica#External images|resize an image]] em sua tabela, você precisa adicionar um `\` antes da barra vertical.
>
> ```md
> Primeira coluna | Segunda coluna
> -- | --
> [[Sintaxe de formatação básica\|Sintaxe de Markdown]] | ![[og-image.png\|200]]
> ```
>
> Primeira coluna | Segunda coluna
> -- | --
> [[Sintaxe de formatação básica|Sintaxe Markdown]] | ![[og-image.png\|200]]

Você pode alinhar o texto à esquerda, à direita ou ao centro de uma coluna adicionando dois pontos (`:`) à linha do cabeçalho.

```md
Texto alinhado à esquerda | Texto alinhado ao centro | Texto alinhado à direita
:-- | :--: | --:
Conteúdo | Conteúdo | Contente
```

Texto alinhado à esquerda | Texto alinhado ao centro | Texto alinhado à direita
:-- | :--: | --:
Conteúdo | Conteúdo | Contente

## Diagrama

Você pode adicionar diagramas e gráficos às suas anotações, usando [Mermaid](https://mermaid-js.github.io/). O Mermaid suporta uma variedade de diagramas, como [fluxogramas](https://mermaid.js.org/syntax/flowchart.html), [diagramas de sequência](https://mermaid.js.org/syntax/sequenceDiagram. html) e [linhas do tempo](https://mermaid.js.org/syntax/timeline.html).

> [!dica]
> Você também pode experimentar o [Live Editor] da Mermaid (https://mermaid-js.github.io/mermaid-live-editor) para ajudá-lo a criar diagramas antes de incluí-los em suas anotações.

Para adicionar um diagrama de sereia, crie uma `sereia` [[Sintaxe de formatação básica#Code blocks|code block]].

````md
```sereia
diagrama de sequência
     Alice->>+John: Olá John, tudo bem?
     Alice->>+John: John, você pode me ouvir?
     John->>-Alice: Oi Alice, estou te ouvindo!
     John-->>-Alice: Eu me sinto ótimo!
```
````

```sereia
diagrama de sequência
     Alice->>+John: Olá John, tudo bem?
     Alice->>+John: John, você pode me ouvir?
     John->>-Alice: Oi Alice, estou te ouvindo!
     John-->>-Alice: Eu me sinto ótimo!
```

````md
```sereia
gráfico TD

Biologia --> Química
```
````

```sereia
gráfico TD

Biologia --> Química
```

### Vinculando arquivos em um diagrama

Você pode criar [[Links internos]] em seus diagramas anexando a [classe](https://mermaid.js.org/syntax/flowchart.html#classes) `internal-link` aos seus nós.

````md
```sereia
gráfico TD

Biologia --> Química

classe Biologia, Química link interno;
```
````

```sereia
gráfico TD

Biologia --> Química

classe Biologia, Química link interno;
```

> [!nota]
> Os links internos dos diagramas não aparecem na [[Visualização do gráfico]].

Se você tiver muitos nós em seus diagramas, poderá usar o trecho a seguir.

````md
```sereia
gráfico TD

A[Biologia]
B[Química]

A --> B

classe A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y ,Z link interno;
```
````

Dessa forma, cada nó de letra se torna um link interno, com o [texto do nó](https://mermaid.js.org/syntax/flowchart.html#a-node-with-text) como o texto do link.

> [!nota]
> Se você usar caracteres especiais em seus nomes de nota, você precisa colocar o nome da nota entre aspas duplas.
>
> ```
> class "⨳ caractere especial" link interno
> ```
>
> Ou, `A["⨳ caractere especial"]`.

Para obter mais informações sobre como criar diagramas, consulte os [documentos oficiais da Mermaid](https://mermaid.js.org/intro/).

## Matemática

Você pode adicionar expressões matemáticas às suas anotações usando [MathJax](http://docs.mathjax.org/en/latest/basic/mathjax.html) e a notação LaTeX.

Para adicionar uma expressão MathJax à sua nota, coloque-a entre cifrões duplos (`$$`).

```md
$$
\begin{vmatrix}a & b\\
cd
\end{vmatrix}=ad-bc
$$
```

$$
\begin{vmatrix}a & b\\
cd
\end{vmatrix}=ad-bc
$$

Você também pode incorporar expressões matemáticas envolvendo-as em símbolos `$`.

```md
Esta é uma expressão matemática em linha $e^{2i\pi} = 1$.
```

Esta é uma expressão matemática em linha $e^{2i\pi} = 1$.

Para obter mais informações sobre a sintaxe, consulte [Tutorial básico e referência rápida do MathJax](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).

Para obter uma lista de pacotes MathJax suportados, consulte [The TeX/LaTeX Extension List](http://docs.mathjax.org/en/latest/input/tex/extensions/index.html).