---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Aprenda a criar links para notas, anexos e outros arquivos a partir das suas notas, usando links internos.'
---
Aprenda como criar ligações para notas, anexos e outros ficheiros a partir das suas notas, utilizando _ligações internas_. Ao ligar notas, pode criar uma rede de conhecimento. ^b15695

O Obsidian pode atualizar automaticamente as ligações internas no seu cofre quando renomeia um ficheiro. Se preferir ser questionado primeiro, pode desativar esta opção em:

**[[Definições]]** → **[[Definições#Ficheiros & Links|Ficheiros & Links]]** → **[[Definições#Atualizar sempre os links internos|Atualizar sempre os links internos]]**.

## Formatos suportados para ligações internas

O Obsidian suporta os seguintes formatos de ligação:

- Link wiki: `[[Three laws of motion]]` ou `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` ou `[Three laws of motion](Three%20laws%20of%20motion.md)`

Os exemplos acima são equivalentes, e aparecem da mesma forma no editor e apontam para a mesma nota.

> [!note] Nota
> Ao utilizar o formato Markdown, certifique-se de que [codifica o URL](https://en.wikipedia.org/wiki/Percent-encoding) do destino da ligação. Por exemplo, os espaços em branco tornam-se `%20`.

Por predefinição, devido ao seu formato mais compacto, o Obsidian gera ligações utilizando o formato de link wiki. Se a interoperabilidade for importante para si, pode desativar os links wiki e utilizar ligações Markdown em vez disso.

Para utilizar o formato Markdown:

1. Abra as **[[Definições]]**.
2. Em **Ficheiros & Links**, desative **Usar \[\[Wikilinks\]\]**.

Mesmo que desative o formato de link wiki, pode continuar a utilizar o preenchimento automático de ligações escrevendo dois parênteses retos `[[`. Quando selecionar um dos ficheiros sugeridos, o Obsidian gera uma ligação Markdown em vez disso.

> [!note] Caracteres inválidos
> Uma cadeia de texto que contenha os seguintes caracteres pode não funcionar como ligação: `# | ^ : %% [[ ]]`.
> 
> Recomendamos evitar a utilização desses caracteres e praticar [nomes de ficheiro seguros](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Criar ligação para um ficheiro

Para criar uma ligação enquanto está na vista de edição, utilize uma das seguintes formas:

- Escreva `[[` no editor e depois selecione o ficheiro para o qual deseja criar uma ligação.
- Selecione texto no editor e depois escreva `[[`.
- Abra a [[Paleta de comando]] e depois selecione Adicionar link interno.

![[Navegação rápida#^search-autocomplete-large]]

Embora possa criar ligações para qualquer um dos [[Formatos de ficheiro aceites]], as ligações para formatos de ficheiro que não sejam Markdown precisam de incluir a extensão do ficheiro, como `[[Figura 1.png]]`.

> [!tip] Prefixar uma ligação interna com um ponto de exclamação (!) permite-lhe incorporar o conteúdo ligado. Para mais detalhes, consulte [[Incorporar ficheiros]].

> [!info] Ficheiros excluídos
> Os ficheiros que correspondam aos seus padrões de [[Definições#Ficheiros excluídos|Ficheiros excluídos]] são despriorizados nas sugestões de ligação ao criar ligações internas.

## Criar ligação para um cabeçalho numa nota

Pode criar ligações para cabeçalhos específicos em notas, também conhecidas como _ligações âncora_.

**Criar ligação para um cabeçalho dentro da mesma nota**

Para criar uma ligação para um cabeçalho dentro da mesma nota, escreva `[[#` para obter uma lista dos cabeçalhos dentro da nota para os quais pode criar ligações.

Por exemplo, `[[#Pré-visualizar um ficheiro ligado]]` criará uma ligação para [[#Pré-visualizar um ficheiro ligado]].

**Criar ligação para um cabeçalho noutra nota**

Para criar uma ligação para um cabeçalho noutra nota, adicione um cardinal (`#`) no final do destino da ligação, seguido do texto do cabeçalho.

Por exemplo, `[[Sobre o Obsidian#As ligações são cidadãos de primeira classe]]` criará uma ligação para [[Sobre o Obsidian#As ligações são cidadãos de primeira classe]].

**Criar ligação para subcabeçalhos**

Pode adicionar múltiplos símbolos de cardinal para cada subcabeçalho.

Por exemplo, `[[Ajuda e suporte#Questions and advice#Report bugs and request features]]` criará uma ligação para [[Ajuda e suporte#Questions and advice#Report bugs and request features]].

**Pesquisar cabeçalhos em todo o cofre**

Para pesquisar cabeçalhos em todo o cofre, utilize a sintaxe `[[## cabeçalho]]`.

Por exemplo, `[[##` pesquisará genericamente em todo o cofre, enquanto `[[## team]]` pesquisará todos os cabeçalhos que contenham a palavra _team_.

> [!info]- Captura de ecrã da pesquisa de uma ligação de cabeçalho
>
> ![[internal-links-header.png#interface]]

## Criar ligação para um bloco numa nota

Um bloco é uma unidade de texto na sua nota, como um parágrafo, citação em bloco ou item de lista.

Pode criar uma ligação para um bloco adicionando `#^` no final do destino da sua ligação, seguido de um identificador de bloco único. Por exemplo: `[[2023-01-01#^37066d]]`. Felizmente, não precisa de encontrar o identificador manualmente — quando escrever o acento circunflexo (`^`), uma lista de sugestões aparecerá, permitindo-lhe selecionar o bloco correto.

Para *parágrafos simples*, coloque um espaço em branco seguido de um acento circunflexo `^` e o identificador do bloco no final da linha:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Para *blocos estruturados* (listas, citações, blocos de destaque, tabelas), o identificador do bloco deve estar numa linha separada, com uma linha em branco antes e depois:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Para *linhas específicas dentro de uma lista*, o identificador do bloco pode ser colocado diretamente num marcador:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Não suportamos ligações para partes específicas de citações, blocos de destaque e tabelas.

**Pesquisar blocos em todo o cofre**

Também pode pesquisar blocos para criar ligações em todo o seu cofre utilizando a sintaxe `[[^^bloco]]`. No entanto, mais itens se qualificam como blocos em comparação com [[#Criar ligação para um cabeçalho numa nota|ligações de cabeçalho]], pelo que esta lista será muito mais longa.

> [!info]- Captura de ecrã da pesquisa de uma ligação de bloco
> ![[link-block-heading.png#interface]]

Também pode criar identificadores de bloco legíveis adicionando um espaço em branco seguido de um acento circunflexo (`^`) e o identificador. Os identificadores de bloco podem consistir apenas em letras latinas, números e hífens.

Por exemplo, adicione `^quote-of-the-day` no final de um bloco:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Agora pode criar uma ligação para o bloco escrevendo `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilidade
> As referências de bloco são específicas do Obsidian e não fazem parte do formato padrão Markdown. As ligações que contêm referências de bloco não funcionarão fora do Obsidian.

## Alterar o texto de apresentação da ligação

Por predefinição, o Obsidian mostra o texto da ligação tal como aparece. Por exemplo:
- `[[Example]]` é apresentado como [[Example]]
- `[[Example#Details]]` é apresentado como [[Example#Details]]

Pode alterar a forma como uma ligação é apresentada personalizando o seu texto de apresentação:

**Formato de link wiki**:
Utilize uma barra vertical (`|`) para alterar o texto de apresentação.

- `[[Example|Nome personalizado]]` aparece como [[Example|Nome personalizado]]
- `[[Example#Details|Nome da secção]]` aparece como [[Example#Details|Nome da secção]]

**Formato Markdown**:
Utilize `[Texto de apresentação](URL da ligação)` para personalizar a forma como a ligação aparece.

- `[Nome personalizado](Example.md)` aparece como [Nome personalizado](Example.md)
- `[Nome da secção](Example.md#Details)` aparece como [Nome da secção](Example.md#Details)

Este método é útil para situações pontuais em que deseja alterar a aparência de uma ligação num contexto específico. Se quiser configurar um nome de ligação alternativo que possa reutilizar em todo o seu cofre, considere utilizar uma [[Alcunhas|alcunha]] em vez disso.

Por exemplo, se se refere regularmente a `[[Three laws of motion]]` como `[[The 3 laws]]`, adicionar "3 laws" como alcunha permite-lhe escrever apenas isso — sem necessidade de adicionar texto de apresentação personalizado de cada vez.

> [!tip] Dica
> Utilize [[#Alterar o texto de apresentação da ligação|texto de apresentação da ligação]] quando quiser personalizar a aparência de uma ligação *num local específico*.
> 
> Utilize [[Alcunhas|alcunhas]] quando quiser referir-se à mesma nota utilizando *nomes diferentes* em todo o seu cofre.
^callout-internal-links-link-text

## Pré-visualizar um ficheiro ligado

> [!note] Nota
> Para pré-visualizar ficheiros ligados, primeiro precisa de ativar a [[Pré-visualização de página]].

Para pré-visualizar um ficheiro ligado, passe o cursor sobre uma ligação interna. No modo de edição, pressione `Ctrl` (ou `Cmd` no macOS) enquanto passa o cursor sobre a ligação. Uma pré-visualização do conteúdo do ficheiro aparece junto ao cursor.
