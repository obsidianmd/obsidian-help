---
alias: Como/formatar suas notas
---

Aprenda como aplicar a formatação básica às suas notas, usando [Markdown](https://daringfireball.net/projects/markdown/). Para sintaxe de formatação mais avançada, consulte [[Sintaxe de formatação avançada]].

## Títulos

Para criar um título, adicione até seis símbolos `#` antes do texto do título. O número de símbolos `#` determina o tamanho do título.

```md
# Este é um cabeçalho 1
## Este é um título 2
### Este é um título 3
#### Este é um título 4
##### Este é um título 5
###### Este é um título 6
```

%% Estes cabeçalhos usam HTML para evitar confusão no Esboço/Índice %%
<h1>Este é um título 1</h1>
<h2>Este é um título 2</h2>
<h3>Este é um título 3</h3>
<h4>Este é um título 4</h4>
<h5>Este é um título 5</h5>
<h6>Este é um título 6</h6>

## Texto de estilo

| Estilo | Sintaxe | Exemplo | Saída |
|-|-|-|-|
| Negrito | `** **` ou `__ __` | `**Texto em negrito**` | **Texto em negrito** |
| Itálico | `* *` ou `_ _` | `*Texto em itálico*` | *Texto em itálico* |
| Tachado | `~~ ~~` | `~~Texto riscado~~` | ~~Texto riscado~~ |
| Destaque | `== ==` | `==Texto realçado==` | ==Texto destacado== |
| Negrito e itálico aninhado | `** **` e `_ _` | `**Texto em negrito e _texto em itálico_ aninhado_**` | **Texto em negrito e _texto em itálico aninhado_** |
| Negrito e itálico | `*** ***` ou `___ ___` | `***Texto em negrito e itálico***` | ***Texto em negrito e itálico*** |

## Citações

Você pode citar o texto adicionando símbolos `>` antes do texto.

```md
> Os seres humanos enfrentam problemas cada vez mais complexos e urgentes, e sua eficácia em lidar com esses problemas é uma questão crítica para a estabilidade e progresso contínuo da sociedade.

\- Doug Engelbart, 1961
```

> Os seres humanos enfrentam problemas cada vez mais complexos e urgentes, e sua eficácia em lidar com esses problemas é uma questão crítica para a estabilidade e progresso contínuo da sociedade.

\- Doug Engelbart, 1961

> [!dica]
> Você pode transformar sua citação em um [[Textos explicativos|chamada]] adicionando `[!info]` como a primeira linha de uma citação.

## Código

Você pode formatar o código em linha dentro de uma frase ou em seu próprio bloco.

### Código embutido

Você pode formatar o código dentro de uma frase usando acentos graves simples.

```md
O texto dentro de `backticks` em uma linha será formatado como código.
```

O texto dentro de `backticks` em uma linha será formatado como código.

### Blocos de código

Para formatar um bloco de código, coloque o código entre crases triplos.

~~~
```
cd ~/área de trabalho
```
~~~

```md
cd ~/área de trabalho
```

Você pode adicionar realce de sintaxe a um bloco de código, adicionando um código de idioma após o primeiro conjunto de acentos graves.

~~~md
```js
função fantasiaAlert(arg) {
   if(arg) {
     $.facebox({div:'#foo'})
   }
}
```
~~~

```js
função fantasiaAlert(arg) {
   if(arg) {
     $.facebox({div:'#foo'})
   }
}
```

Obsidian usa Prism para destaque de sintaxe. Para obter mais informações, consulte [Idiomas suportados](https://prismjs.com/#supported-languages).

> [!nota]
> [[Atualização de visualização ao vivo|Modo Live Preview]] não suporta PrismJS e pode renderizar realce de sintaxe de forma diferente.

## Links externos

Se você deseja vincular a um URL externo, pode criar um link embutido colocando o texto do link entre colchetes (`[ ]`) e, em seguida, o URL entre parênteses (`( )`).

```md
[Ajuda Obsidian](https://help.obsidian.md)
```

[Ajuda Obsidian](https://help.obsidian.md)

> [!dica]
> Se você quiser criar um link para um arquivo dentro do seu cofre, considere usar um [[Links internos|link interno]].

Você também pode criar links externos para arquivos em outros cofres, vinculando a um [[Usando Obsidian URI|Obsidian URI]].

```md
[Nota](obsidian://open?vault=MainVault&file=Note.md)
```

### Fuja de espaços em branco nos links

Se sua URL contiver espaços em branco, você precisará escapá-los substituindo-os por `%20`.

```md
[Minha Nota](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Você também pode escapar da URL envolvendo-a com colchetes angulares (`< >`).

```md
[Minha nota](<obsidian://open?vault=MainVault&file=Minha nota.md>)
```

## Imagens externas

Você pode adicionar imagens com URLs externas, adicionando um símbolo `!` antes de um [[#Links externos|link externo]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Você pode alterar as dimensões da imagem adicionando `|640x480` ao destino do link, onde 640 é a largura e 480 é a altura.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Se você especificar apenas a largura, a imagem será dimensionada de acordo com sua proporção original. Por exemplo, `![[Engelbart.jpg|100]]`.

> [!dica]
> Se quiser adicionar uma imagem de dentro do seu cofre, você também pode [[Incorporando arquivos#Embed an image in a note|incorporar uma imagem em uma nota]].

## Listas

Você pode criar uma lista não ordenada adicionando `-`, `*` ou `+` antes do texto.

```md
- Primeiro item da lista
- Segundo item da lista
- Terceiro item da lista
```

- Primeiro item da lista
- Segundo item da lista
- Terceiro listá-lo