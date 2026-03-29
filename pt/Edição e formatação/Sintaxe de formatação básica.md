---
permalink: syntax
publish: true
mobile: true
description: 'Aprenda a aplicar formatação básica às suas notas no Obsidian, usando Markdown.'
---
Aprenda a aplicar formatação básica às suas notas, utilizando [Markdown](https://daringfireball.net/projects/markdown/). Para sintaxe de formatação mais avançada, consulte [[Sintaxe de formatação avançada]].

## Parágrafos

Para criar parágrafos em Markdown, utilize uma **linha em branco** para separar blocos de texto. Cada bloco de texto separado por uma linha em branco é tratado como um parágrafo distinto.

```md
Isto é um parágrafo.

Isto é outro parágrafo.
```

Isto é um parágrafo.

Isto é outro parágrafo.

Uma linha em branco entre linhas de texto cria parágrafos separados. Este é o comportamento predefinido em Markdown.

> [!tip]- Múltiplos espaços em branco
> Múltiplos espaços em branco adjacentes dentro e entre parágrafos são reduzidos a um único espaço quando apresentados na [[Vistas e modo de edição#Vista de leitura|vista de leitura]] ou em sites do [[Introdução ao Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Múltiplos          espaços          adjacentes
> 
> 
> 
> e múltiplas linhas novas entre parágrafos.
> ```
> 
> > Múltiplos          espaços          adjacentes
> > 
> > 
> > 
> > e múltiplas linhas novas entre parágrafos.
> 
> Se quiser evitar que os espaços sejam reduzidos ou adicionar múltiplos espaços em branco, pode utilizar as tags HTML `&nbsp;` (espaço não separável) ou `<br>` (quebra de linha).

### Quebras de linha

Por predefinição no Obsidian, pressionar `Enter` uma vez cria uma nova linha na sua nota, mas isto é tratado como uma *continuação* do mesmo parágrafo na saída renderizada, seguindo o comportamento típico do Markdown. Para inserir uma quebra de linha *dentro* de um parágrafo sem iniciar um novo parágrafo, pode:

- Adicionar **dois espaços** no final de uma linha antes de pressionar `Enter`, ou
- Utilizar o atalho `Shift+Enter` para inserir diretamente uma quebra de linha.

> [!question]- Porque é que pressionar `Enter` várias vezes não cria mais quebras de linha na vista de leitura?
> Em Markdown, um único `Enter` é ignorado, e múltiplos `Enter` consecutivos resultam apenas num novo parágrafo. Este comportamento alinha-se com a regra de quebra suave do Markdown, onde linhas em branco extra não geram quebras de linha ou parágrafos adicionais — são reduzidas a uma única quebra de parágrafo. É assim que o Markdown trata o texto por predefinição, garantindo que os parágrafos fluem naturalmente sem quebras inesperadas.

O Obsidian inclui uma definição de **[[Definições#Quebra de linha estrita|Quebra de linha estrita]]**, que faz o Obsidian seguir a especificação padrão do Markdown para quebras de linha.

Para ativar esta funcionalidade:

1. Abra as **[[Definições]]**.
2. Aceda ao separador **Editor**.
3. Ative **Quebra de linha estrita**.

Quando a **Quebra de linha estrita** está ativada no Obsidian, as quebras de linha têm três comportamentos distintos dependendo de como as linhas são separadas:

**Retorno simples sem espaços**: Um único `Enter` sem espaços finais combinará as duas linhas separadas numa única linha quando renderizado.

```md
linha um
linha dois
```

Renderiza como:

linha um linha dois

**Retorno simples com dois ou mais espaços finais**: Se adicionar dois ou mais espaços no final da primeira linha antes de pressionar `Enter`, as duas linhas permanecem parte do mesmo parágrafo, mas são separadas por uma quebra de linha (elemento HTML `<br>`). Usaremos dois underscores para representar os espaços neste exemplo.

```md
linha três__  
linha quatro
```

Renderiza como:

linha três<br>
linha quatro

**Retorno duplo (com ou sem espaços finais)**: Pressionar `Enter` duas vezes (ou mais) separa as linhas em dois parágrafos distintos (elementos HTML `<p>`), independentemente de adicionar espaços no final da primeira linha.

```md
linha cinco

linha seis
```

Renderiza como:

<p>linha cinco</p>
<p>linha seis</p>

## Cabeçalhos

Para criar um cabeçalho, adicione até seis símbolos `#` antes do texto do cabeçalho. O número de símbolos `#` define o nível do cabeçalho (conforme mostrado no [[Índice]]).

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

## Negrito, itálico, realces

A formatação de texto também pode ser aplicada utilizando [[Atalhos de edição]].

| Estilo | Sintaxe | Exemplo | Resultado |
|-|-|-|-|
| Negrito | `** **` ou `__ __` | `**Texto em negrito**` | **Texto em negrito** |
| Itálico | `* *` ou `_ _`  | `*Texto em itálico*` | *Texto em itálico* |
| Rasurado | `~~ ~~` |  `~~Texto rasurado~~` | ~~Texto rasurado~~ |
| Realce | `== ==` |  `==Texto realçado==` | ==Texto realçado== |
| Negrito e itálico aninhado | `** **` e `_ _`  | `**Texto em negrito e _itálico aninhado_**` | **Texto em negrito e _itálico aninhado_** |
| Negrito e itálico | `*** ***` ou `___ ___` |  `***Texto em negrito e itálico***` | ***Texto em negrito e itálico*** |

A formatação pode ser forçada a aparecer em texto simples adicionando uma barra invertida `\` à frente.

\*\*Esta linha não ficará em negrito\*\*

```markdown
\*\*Esta linha não ficará em negrito\*\*
```

\**Esta linha ficará em itálico e mostrará os asteriscos*\*

```markdown
\**Esta linha ficará em itálico e mostrará os asteriscos*\*
```

## Ligações internas

O Obsidian suporta dois formatos para [[Ligações internas|ligações internas]] entre notas:

- Link wiki: `[[Três leis do movimento]]`
- Markdown: `[Três leis do movimento](Três%20leis%20do%20movimento.md)`

## Ligações externas

Se quiser ligar a um URL externo, pode criar uma ligação em linha envolvendo o texto da ligação entre parênteses retos (`[ ]`) e depois o URL entre parênteses (`( )`).

```md
[Ajuda do Obsidian](https://help.obsidian.md)
```

[Ajuda do Obsidian](https://help.obsidian.md)

Também pode criar ligações externas para ficheiros noutros cofres, ligando a um [[Obsidian URI|URI do Obsidian]].

```md
[Nota](obsidian://open?vault=MainVault&file=Note.md)
```

### Escapar espaços em branco nas ligações

Se o seu URL contiver espaços em branco, deve escapá-los substituindo-os por `%20`.

```md
[A Minha Nota](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Também pode escapar o URL envolvendo-o com parênteses angulares (`< >`).

```md
[A Minha Nota](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Imagens externas

Pode adicionar imagens com URLs externos, adicionando um símbolo `!` antes de uma [[#Ligações externas|ligação externa]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Pode alterar as dimensões da imagem adicionando `|640x480` ao destino da ligação, onde 640 é a largura e 480 é a altura.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Se especificar apenas a largura, a imagem é redimensionada de acordo com a sua proporção original. Por exemplo:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Dica
> Se quiser adicionar uma imagem de dentro do seu cofre, também pode [[Incorporar ficheiros#Incorporar uma imagem numa nota|incorporar uma imagem numa nota]].

## Citações

Pode citar texto adicionando um símbolo `>` antes do texto.

```md
> Os seres humanos enfrentam problemas cada vez mais complexos e urgentes, e a sua eficácia em lidar com estes problemas é uma questão crítica para a estabilidade e o progresso contínuo da sociedade.

\- Doug Engelbart, 1961
```

> Os seres humanos enfrentam problemas cada vez mais complexos e urgentes, e a sua eficácia em lidar com estes problemas é uma questão crítica para a estabilidade e o progresso contínuo da sociedade.

\- Doug Engelbart, 1961

> [!tip]- Dica
> Pode transformar a sua citação num [[Chamamentos|bloco de destaque]] adicionando `[!info]` como a primeira linha numa citação.

## Listas

Pode criar uma lista não ordenada adicionando um `-`, `*` ou `+` antes do texto.

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

Pode utilizar `Shift+Enter` para inserir uma [[#Quebras de linha|quebra de linha]] dentro de uma lista ordenada sem alterar a numeração.

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

Pode alternar uma tarefa na vista de leitura selecionando a caixa de seleção.

> [!tip]- Dica
> Pode utilizar qualquer carácter dentro dos parênteses retos para marcá-la como concluída.
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

### Aninhar listas

Pode aninhar qualquer tipo de lista — ordenada, não ordenada ou de tarefas — dentro de qualquer outro tipo de lista.

Para criar uma lista aninhada, recue um ou mais itens da lista. Pode misturar tipos de lista dentro de uma estrutura aninhada:

```md
1. Primeiro item da lista
   1. Item aninhado de lista ordenada
2. Segundo item da lista
   - Item aninhado de lista não ordenada
```

1. Primeiro item da lista
   1. Item aninhado de lista ordenada
2. Segundo item da lista
   - Item aninhado de lista não ordenada

Da mesma forma, pode criar uma lista de tarefas aninhada recuando um ou mais itens da lista:

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

Utilize `Tab` ou `Shift+Tab` para recuar ou diminuir o avanço dos itens de lista selecionados para os organizar facilmente.

## Regra horizontal

Pode utilizar três ou mais asteriscos `***`, hífens `---` ou underscores `___` numa linha própria para adicionar uma barra horizontal. Também pode separar os símbolos com espaços.

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

Pode formatar código tanto em linha dentro de uma frase, como no seu próprio bloco.

### Código em linha

Pode formatar código dentro de uma frase utilizando acentos graves simples.

```md
Texto dentro de `acentos graves` numa linha será formatado como código.
```

Texto dentro de `acentos graves` numa linha será formatado como código.

Se quiser colocar acentos graves num bloco de código em linha, envolva-o com acentos graves duplos desta forma: código em linha ``com um acento grave ` dentro``.

### Blocos de código

Para formatar código como um bloco, envolva-o com três ou mais acentos graves ou três ou mais tils.

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

Também pode criar um bloco de código recuando o texto utilizando `Tab` ou 4 espaços em branco.
`````md
    cd ~/Desktop
`````

Pode adicionar realce de sintaxe a um bloco de código, adicionando um código de linguagem após o primeiro conjunto de acentos graves.

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

O Obsidian utiliza o Prism para realce de sintaxe. Para mais informações, consulte [Linguagens suportadas](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS e vistas de edição
> O [[Vistas e modo de edição#Modo de origem|Modo de origem]] e a [[Vistas e modo de edição#Pré-visualização em direto|Pré-visualização em direto]] não suportam PrismJS e podem renderizar o realce de sintaxe de forma diferente.

#### Aninhar blocos de código

Quando precisa de incluir um bloco de código dentro de outro bloco de código (por exemplo, ao documentar como utilizar blocos de código), pode utilizar mais de três acentos graves ou tils para o bloco de código exterior.

Para aninhar blocos de código, utilize quatro ou mais acentos graves (ou tils) para o bloco exterior, enquanto o bloco interior utiliza três:
`````md
````md
Eis como criar um bloco de código:
```js
console.log("Hello world")
```
````
`````

Também pode misturar acentos graves e tils. Isto é particularmente útil quando se trabalha com código que gera outros blocos de código:
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

O princípio chave é que o bloco de código exterior deve utilizar **mais** caracteres de delimitação (acentos graves ou tils) do que qualquer bloco de código interior, ou utilizar um tipo diferente de carácter de delimitação.

## Notas de rodapé

Pode adicionar notas de rodapé[^footnote] às suas notas utilizando a seguinte sintaxe:

[^footnote]: Esta é uma nota de rodapé.

```md
Esta é uma nota de rodapé simples[^1].

[^1]: Este é o texto referenciado.
[^2]: Adicione 2 espaços no início de cada nova linha.
  Isto permite-lhe escrever notas de rodapé que abrangem múltiplas linhas.
[^note]: Notas de rodapé nomeadas ainda aparecem como números, mas podem facilitar a identificação e ligação de referências.
```

Também pode inserir notas de rodapé em linha numa frase. Note que o acento circunflexo fica fora dos parênteses retos.

```md
Também pode utilizar notas de rodapé em linha. ^[Esta é uma nota de rodapé em linha.]
```

> [!note] Nota
> As notas de rodapé em linha apenas funcionam na vista de leitura, não na Pré-visualização em direto.

## Comentários

Pode adicionar comentários envolvendo texto com `%%`. Os comentários só são visíveis na vista de edição.

```md
Este é um %%em linha%% comentário.

%%
Este é um comentário em bloco.

Comentários em bloco podem abranger múltiplas linhas.
%%
```

## Escapar sintaxe Markdown

Em alguns casos, pode precisar de apresentar caracteres especiais em Markdown, como `*`, `_` ou `#`, sem acionar a sua formatação. Para apresentar estes caracteres literalmente, coloque uma barra invertida (`\`) antes deles.

> [!example] Caracteres comuns a escapar
> 
> - Asterisco: `\*`
> - Underscore: `\_`
> - Cardinal: `\#`
> - Acento grave: `` \` ``
> - Barra vertical (usada em tabelas): `\|`
> - Til: `\~`

```md
\*Este texto não ficará em itálico\*.
```

\*Este texto não ficará em itálico\*.

Ao trabalhar com listas numeradas, pode precisar de escapar o ponto após o número para evitar a formatação automática de lista. Coloque a barra invertida (`\`) antes do ponto, **não** antes do número.

```md
1\. Isto não será um item de lista.
```

1\. Isto não será um item de lista.

## Saber mais

Para aprender mais sobre sintaxe de formatação avançada, como tabelas, diagramas e expressões matemáticas, consulte [[Sintaxe de formatação avançada]].

Para saber mais sobre como o Obsidian analisa Markdown, consulte [[Obsidian Flavored Markdown]].
