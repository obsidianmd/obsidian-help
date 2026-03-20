---
permalink: syntax
publish: true
mobile: true
description: >-
  Aprenda como aplicar formatação básica às suas notas no Obsidian, usando
  Markdown.
---
Aprenda como aplicar formatação básica às suas notas, usando [Markdown](https://daringfireball.net/projects/markdown/). Para sintaxe de formatação mais avançada, consulte [[Sintaxe de formatação avançada]].

## Parágrafos

Para criar parágrafos em Markdown, use uma **linha em branco** para separar blocos de texto. Cada bloco de texto separado por uma linha em branco é tratado como um parágrafo distinto.

```md
Isto é um parágrafo.

Isto é outro parágrafo.
```

Isto é um parágrafo.

Isto é outro parágrafo.

Uma linha em branco entre linhas de texto cria parágrafos separados. Este é o funcionamento padrão no Markdown.

> [!tip]- Múltiplos espaços em branco
> Múltiplos espaços em branco adjacentes dentro e entre parágrafos são colapsados em um único espaço quando exibidos na [[Visualizações e modo de edição#Visualizar|visualização de Leitura]] ou em sites do [[Introdução ao Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Múltiplos          espaços          adjacentes
> 
> 
> 
> e múltiplas novas linhas entre parágrafos.
> ```
> 
> > Múltiplos          espaços          adjacentes
> > 
> > 
> > 
> > e múltiplas novas linhas entre parágrafos.
> 
> Se você quiser evitar que os espaços sejam colapsados ou adicionar múltiplos espaços em branco, pode usar as tags HTML `&nbsp;` (espaço não quebrável) ou `<br>` (quebra de linha).

### Quebras de linha

Por padrão no Obsidian, pressionar `Enter` uma vez criará uma nova linha na sua nota, mas isso é tratado como uma *continuação* do mesmo parágrafo na saída renderizada, seguindo o comportamento típico do Markdown. Para inserir uma quebra de linha *dentro* de um parágrafo sem iniciar um novo parágrafo, você pode:

- Adicionar **dois espaços** no final de uma linha antes de pressionar `Enter`, ou
- Usar o atalho `Shift+Enter` para inserir diretamente uma quebra de linha.

> [!question]- Por que múltiplos `Enter` não criam mais quebras de linha na visualização de leitura?
> No Markdown, um único `Enter` é ignorado, e múltiplos `Enter` consecutivos resultam em apenas um novo parágrafo. Este comportamento está alinhado com a regra de quebra suave do Markdown, onde linhas em branco extras não geram quebras de linha ou parágrafos adicionais — elas são colapsadas em uma única quebra de parágrafo. É assim que o Markdown lida com texto por padrão, garantindo que os parágrafos fluam naturalmente sem quebras inesperadas.

O Obsidian inclui uma configuração de **[[Configurações#Quebra de linha estrita|Quebra de linha estrita]]**, que faz o Obsidian seguir a especificação padrão do Markdown para quebras de linha.

Para ativar este recurso:

1. Abra as **[[Configurações]]**.
2. Vá para a aba **Editor**.
3. Ative **Quebra de linha estrita**.

Quando a **Quebra de linha estrita** está ativada no Obsidian, as quebras de linha têm três comportamentos distintos dependendo de como as linhas são separadas:

**Retorno simples sem espaços**: Um único `Enter` sem espaços finais combinará as duas linhas separadas em uma única linha quando renderizado.

```md
linha um
linha dois
```

Renderiza como:

linha um linha dois

**Retorno simples com dois ou mais espaços finais**: Se você adicionar dois ou mais espaços no final da primeira linha antes de pressionar `Enter`, as duas linhas permanecem parte do mesmo parágrafo, mas são separadas por uma quebra de linha (elemento HTML `<br>`). Usaremos dois sublinhados para representar os espaços neste exemplo.

```md
linha três__  
linha quatro
```

Renderiza como:

linha três<br>
linha quatro

**Retorno duplo (com ou sem espaços finais)**: Pressionar `Enter` duas vezes (ou mais) separa as linhas em dois parágrafos distintos (elementos HTML `<p>`), independentemente de você adicionar espaços no final da primeira linha.

```md
linha cinco

linha seis
```

Renderiza como:

<p>linha cinco</p>
<p>linha seis</p>

## Cabeçalhos

Para criar um cabeçalho, adicione até seis símbolos `#` antes do texto do seu cabeçalho. O número de símbolos `#` define o nível do cabeçalho (como mostrado no [[Sumário]]).

```md
# Isto é um cabeçalho 1
## Isto é um cabeçalho 2
### Isto é um cabeçalho 3
#### Isto é um cabeçalho 4
##### Isto é um cabeçalho 5
###### Isto é um cabeçalho 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Isto é um cabeçalho 1</h1>
<h2>Isto é um cabeçalho 2</h2>
<h3>Isto é um cabeçalho 3</h3>
<h4>Isto é um cabeçalho 4</h4>
<h5>Isto é um cabeçalho 5</h5>
<h6>Isto é um cabeçalho 6</h6>

## Negrito, itálico, destaques

A formatação de texto também pode ser aplicada usando [[Atalhos de edição]].

| Estilo | Sintaxe | Exemplo | Resultado |
|-|-|-|-|
| Negrito | `** **` ou `__ __` | `**Texto em negrito**` | **Texto em negrito** |
| Itálico | `* *` ou `_ _`  | `*Texto em itálico*` | *Texto em itálico* |
| Taxado | `~~ ~~` |  `~~Texto taxado~~` | ~~Texto taxado~~ |
| Destaque | `== ==` |  `==Texto destacado==` | ==Texto destacado== |
| Negrito e itálico aninhado | `** **` e `_ _`  | `**Texto em negrito e _itálico aninhado_**` | **Texto em negrito e _itálico aninhado_** |
| Negrito e itálico | `*** ***` ou `___ ___` |  `***Texto em negrito e itálico***` | ***Texto em negrito e itálico*** |

A formatação pode ser forçada a ser exibida como texto simples adicionando uma barra invertida `\` na frente dela.

\*\*Esta linha não ficará em negrito\*\*

```markdown
\*\*Esta linha não ficará em negrito\*\*
```

\**Esta linha ficará em itálico e mostrará os asteriscos*\*

```markdown
\**Esta linha ficará em itálico e mostrará os asteriscos*\*
```

## Links internos

O Obsidian suporta dois formatos para [[Links internos|links internos]] entre notas:

- Link wiki: `[[Três leis do movimento]]`
- Markdown: `[Três leis do movimento](Três%20leis%20do%20movimento.md)`

## Links externos

Se você quiser criar um link para uma URL externa, pode criar um link inline envolvendo o texto do link em colchetes (`[ ]`), e depois a URL em parênteses (`( )`).

```md
[Ajuda do Obsidian](https://help.obsidian.md)
```

[Ajuda do Obsidian](https://help.obsidian.md)

Você também pode criar links externos para arquivos em outros cofres, usando um link para uma [[Obsidian URI|URI do Obsidian]].

```md
[Nota](obsidian://open?vault=MainVault&file=Note.md)
```

### Escapar espaços em branco em links

Se sua URL contém espaços em branco, você deve escapá-los substituindo-os por `%20`.

```md
[Minha Nota](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Você também pode escapar a URL envolvendo-a com colchetes angulares (`< >`).

```md
[Minha Nota](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Imagens externas

Você pode adicionar imagens com URLs externas, adicionando um símbolo `!` antes de um [[#Links externos|link externo]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Você pode alterar as dimensões da imagem, adicionando `|640x480` ao destino do link, onde 640 é a largura e 480 é a altura.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Se você especificar apenas a largura, a imagem será redimensionada de acordo com sua proporção original. Por exemplo:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Dica
> Se você quiser adicionar uma imagem de dentro do seu cofre, também pode [[Incorporar arquivos#Incorporar uma imagem em uma nota|incorporar uma imagem em uma nota]].

## Citações

Você pode citar texto adicionando um símbolo `>` antes do texto.

```md
> Os seres humanos enfrentam problemas cada vez mais complexos e urgentes, e sua eficácia em lidar com esses problemas é uma questão crítica para a estabilidade e o progresso contínuo da sociedade.

\- Doug Engelbart, 1961
```

> Os seres humanos enfrentam problemas cada vez mais complexos e urgentes, e sua eficácia em lidar com esses problemas é uma questão crítica para a estabilidade e o progresso contínuo da sociedade.

\- Doug Engelbart, 1961

> [!tip]- Dica
> Você pode transformar sua citação em uma [[Callouts|frase de destaque]] adicionando `[!info]` como a primeira linha em uma citação.

## Listas

Você pode criar uma lista não ordenada adicionando um `-`, `*` ou `+` antes do texto.

```md
- Primeiro item da lista
- Segundo item da lista
- Terceiro item da lista
```

- Primeiro item da lista
- Segundo item da lista
- Terceiro item da lista

Para criar uma lista ordenada, comece cada linha com um número seguido de um símbolo `.` ou `)`.

```md
1. Primeiro item da lista
2. Segundo item da lista
3. Terceiro item da lista
```

1. Primeiro item da lista
2. Segundo item da lista
3. Terceiro item da lista

```md
1) Primeiro item da lista
2) Segundo item da lista
3) Terceiro item da lista
```

1) Primeiro item da lista
2) Segundo item da lista
3) Terceiro item da lista

Você pode usar `Shift+Enter` para inserir uma [[#Quebras de linha|quebra de linha]] dentro de uma lista ordenada sem alterar a numeração.

```md
1. Primeiro item da lista
   
2. Segundo item da lista
3. Terceiro item da lista
   
4. Quarto item da lista
5. Quinto item da lista
6. Sexto item da lista
```

### Listas de tarefas

Para criar uma lista de tarefas, comece cada item da lista com um hífen e espaço seguido de `[ ]`.

```md
- [x] Esta é uma tarefa concluída.
- [ ] Esta é uma tarefa incompleta.
```

- [x] Esta é uma tarefa concluída.
- [ ] Esta é uma tarefa incompleta.

Você pode alternar uma tarefa na visualização de Leitura selecionando a caixa de seleção.

> [!tip]- Dica
> Você pode usar qualquer caractere dentro dos colchetes para marcá-la como concluída.
>
> ```md
> - [x] Leite
> - [?] Ovos
> - [-] Ovos
> ```
>
> - [x] Leite
> - [?] Ovos
> - [-] Ovos

### Aninhando listas

Você pode aninhar qualquer tipo de lista — ordenada, não ordenada ou de tarefas — dentro de qualquer outro tipo de lista.

Para criar uma lista aninhada, indente um ou mais itens da lista. Você pode misturar tipos de lista dentro de uma estrutura aninhada:

```md
1. Primeiro item da lista
   1. Item aninhado ordenado
2. Segundo item da lista
   - Item aninhado não ordenado
```

1. Primeiro item da lista
   1. Item aninhado ordenado
2. Segundo item da lista
   - Item aninhado não ordenado

Da mesma forma, você pode criar uma lista de tarefas aninhada indentando um ou mais itens da lista:

```md
- [ ] Item de tarefa 1
	- [ ] Subtarefa 1
- [ ] Item de tarefa 2
	- [ ] Subtarefa 1
```

- [ ] Item de tarefa 1
	- [ ] Subtarefa 1
- [ ] Item de tarefa 2
	- [ ] Subtarefa 1

Use `Tab` ou `Shift+Tab` para indentar ou desindentar itens selecionados da lista para organizá-los facilmente.

## Régua horizontal

Você pode usar três ou mais estrelas `***`, hífens `---` ou sublinhados `___` em sua própria linha para adicionar uma barra horizontal. Você também pode separar os símbolos usando espaços.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Código

Você pode formatar código tanto inline dentro de uma frase, quanto em seu próprio bloco.

### Código inline

Você pode formatar código dentro de uma frase usando crases simples.

```md
Texto dentro de `crases` em uma linha será formatado como código.
```

Texto dentro de `crases` em uma linha será formatado como código.

Se você quiser colocar crases em um bloco de código inline, envolva-o com crases duplas assim: inline ``código com uma crase ` dentro``.

### Blocos de código

Para formatar código como um bloco, envolva-o com três crases ou três tils.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Você também pode criar um bloco de código indentando o texto usando `Tab` ou 4 espaços em branco.
`````md
    cd ~/Desktop
`````

Você pode adicionar destaque de sintaxe a um bloco de código, adicionando um código de linguagem após o primeiro conjunto de crases.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

O Obsidian usa Prism para destaque de sintaxe. Para mais informações, consulte [Linguagens suportadas](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS e visualizações de edição
> O [[Visualizações e modo de edição#Modo de origem|Modo de origem]] e a [[Visualizações e modo de edição#Visualização ao vivo|Visualização ao vivo]] não suportam PrismJS, e podem renderizar o destaque de sintaxe de forma diferente.

#### Aninhando blocos de código

Quando você precisa incluir um bloco de código dentro de outro bloco de código (por exemplo, ao documentar como usar blocos de código), pode usar mais de três crases ou tils para o bloco de código externo.

Para aninhar blocos de código, use quatro ou mais crases (ou tils) para o bloco externo, enquanto o bloco interno usa três:
`````md
````md
Veja como criar um bloco de código:
```js
console.log("Hello world")
```
````
`````

Você também pode misturar crases e tils. Isso é particularmente útil ao trabalhar com código que gera outros blocos de código:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

O princípio fundamental é que o bloco de código externo deve usar **mais** caracteres de cerca (crases ou tils) do que qualquer bloco de código interno, ou usar um tipo diferente de caractere de cerca.

## Notas de rodapé

Você pode adicionar notas de rodapé[^footnote] às suas notas usando a seguinte sintaxe:

[^footnote]: Isto é uma nota de rodapé.

```md
Esta é uma nota de rodapé simples[^1].

[^1]: Este é o texto referenciado.
[^2]: Adicione 2 espaços no início de cada nova linha.
  Isso permite escrever notas de rodapé que abrangem múltiplas linhas.
[^note]: Notas de rodapé nomeadas ainda aparecem como números, mas podem facilitar a identificação e vinculação de referências.
```

Você também pode inserir notas de rodapé inline em uma frase. Note que o acento circunflexo fica fora dos colchetes.

```md
Você também pode usar notas de rodapé inline. ^[Esta é uma nota de rodapé inline.]
```

> [!note] Nota
> Notas de rodapé inline funcionam apenas na visualização de leitura, não na Visualização ao vivo.

## Comentários

Você pode adicionar comentários envolvendo o texto com `%%`. Os comentários são visíveis apenas na visualização de edição.

```md
Este é um comentário %%inline%%.

%%
Este é um comentário de bloco.

Comentários de bloco podem abranger múltiplas linhas.
%%
```

## Escapando Sintaxe Markdown

Em alguns casos, você pode precisar exibir caracteres especiais no Markdown, como `*`, `_` ou `#`, sem acionar sua formatação. Para exibir esses caracteres literalmente, coloque uma barra invertida (`\`) antes deles.

> [!example] Caracteres comuns para escapar
> 
> - Asterisco: `\*`
> - Sublinhado: `\_`
> - Hashtag: `\#`
> - Crase: `` \` ``
> - Barra vertical (usada em tabelas): `\|`
> - Til: `\~`

```md
\*Este texto não ficará em itálico\*.
```

\*Este texto não ficará em itálico\*.

Ao trabalhar com listas numeradas, você pode precisar escapar o ponto após o número para evitar a formatação automática de lista. Coloque a barra invertida (`\`) antes do ponto, **não** antes do número.

```md
1\. Isto não será um item de lista.
```

1\. Isto não será um item de lista.

## Saiba mais

Para aprender mais sobre sintaxe de formatação avançada, como tabelas, diagramas e expressões matemáticas, consulte [[Sintaxe de formatação avançada]].

Para aprender mais sobre como o Obsidian processa Markdown, consulte [[Obsidian Flavored Markdown]].
