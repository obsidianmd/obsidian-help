---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Aprenda como criar links para notas, anexos e outros arquivos a partir das suas notas, usando links internos.
aliases:
  - Vinculando notas e arquivos/Links internos
---
Aprenda como criar links para notas, anexos e outros arquivos a partir das suas notas, usando _links internos_. Ao vincular notas, você pode criar uma rede de conhecimento. ^b15695

O Obsidian pode atualizar automaticamente os links internos no seu cofre quando você renomeia um arquivo. Se preferir ser consultado antes, você pode desativar essa opção em:

**[[Configurações]]** → **[[Configurações#Arquivos e Links|Arquivos & Links]]** → **[[Configurações#Sempre atualizar os links internos|Sempre atualizar os links internos]]**.

## Formatos suportados para links internos

O Obsidian suporta os seguintes formatos de link:

- Link wiki: `[[Three laws of motion]]` ou `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` ou `[Three laws of motion](Three%20laws%20of%20motion.md)`

Os exemplos acima são equivalentes, e aparecem da mesma forma no editor e direcionam para a mesma nota.

> [!note] Nota
> Ao usar o formato Markdown, certifique-se de [codificar a URL](https://en.wikipedia.org/wiki/Percent-encoding) do destino do link. Por exemplo, espaços em branco se tornam `%20`.

Por padrão, devido ao seu formato mais compacto, o Obsidian gera links usando o formato de Link wiki. Se a interoperabilidade é importante para você, pode desativar os Wikilinks e usar links Markdown no lugar.

Para usar o formato Markdown:

1. Abra as **[[Configurações]]**.
2. Em **Arquivos & Links**, desative **Usar \[\[Wikilinks\]\]**.

Mesmo se você desativar o formato de Link wiki, ainda pode autocompletar links digitando dois colchetes `[[`. Quando você selecionar um dos arquivos sugeridos, o Obsidian gerará um link Markdown.

> [!note] Caracteres inválidos
> Uma string que contenha os seguintes caracteres pode não funcionar como link: `# | ^ : %% [[ ]]`.
> 
> Recomendamos evitar o uso desses caracteres e praticar [boas práticas para nomes de arquivo](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Vincular a um arquivo

Para criar um link enquanto estiver no Editor, use qualquer uma das seguintes formas:

- Digite `[[` no editor e então selecione o arquivo ao qual deseja criar um link.
- Selecione um texto no editor e então digite `[[`.
- Abra a [[Paleta de comandos]] e então selecione Adicionar link interno.

![[Alternador rápido#^search-autocomplete-large]]

Embora você possa vincular a qualquer um dos [[Formatos de arquivo aceitos]], links para formatos de arquivo diferentes de Markdown precisam incluir a extensão do arquivo, como `[[Figura 1.png]]`.

> [!tip] Prefixar um link interno com um ponto de exclamação (!) permite incorporar o conteúdo vinculado. Para mais detalhes, veja [[Incorporar arquivos]].

> [!info] Arquivos excluídos
> Arquivos que correspondem aos seus padrões de [[Configurações#Arquivos excluídos|Arquivos excluídos]] são despriorizados nas sugestões de link ao criar links internos.

## Vincular a um cabeçalho em uma nota

Você pode vincular a cabeçalhos específicos em notas, também conhecidos como _links âncora_.

**Vinculando a um cabeçalho dentro da mesma nota**

Para vincular a um cabeçalho dentro da mesma nota, digite `[[#` para obter uma lista de cabeçalhos da nota aos quais vincular.

Por exemplo, `[[#Pré-visualizar um arquivo vinculado]]` criará um link para [[#Pré-visualizar um arquivo vinculado]].

**Vinculando a um cabeçalho em outra nota**

Para vincular a um cabeçalho em outra nota, adicione uma cerquilha (`#`) ao final do destino do link, seguida pelo texto do cabeçalho.

Por exemplo, `[[Sobre o Obsidian#Links são cidadãos de primeira classe]]` criará um link para [[Sobre o Obsidian#Links são cidadãos de primeira classe]].

**Vinculando a subcabeçalhos**

Você pode adicionar múltiplos símbolos de cerquilha para cada subcabeçalho.

Por exemplo, `[[Ajuda e suporte#Perguntas e conselhos#Reportar bugs e solicitar funcionalidades]]` criará um link para [[Ajuda e suporte#Perguntas e conselhos#Reportar bugs e solicitar funcionalidades]].

**Pesquisando cabeçalhos em todo o cofre**

Para pesquisar cabeçalhos em todo o cofre, use a sintaxe `[[## cabeçalho]]`.

Por exemplo, `[[##` pesquisará genericamente em todo o cofre, enquanto `[[## equipe]]` pesquisará todos os cabeçalhos que contenham a palavra _equipe_.

> [!info]- Captura de tela da pesquisa por um link de cabeçalho
>
> ![[internal-links-header.png#interface]]

## Vincular a um bloco em uma nota

Um bloco é uma unidade de texto na sua nota, como um parágrafo, citação em bloco ou item de lista.

Você pode vincular a um bloco adicionando `#^` ao final do destino do seu link, seguido por um identificador de bloco único. Por exemplo: `[[2023-01-01#^37066d]]`. Felizmente, você não precisa encontrar manualmente o identificador — quando você digitar o acento circunflexo (`^`), uma lista de sugestões aparecerá, permitindo selecionar o bloco correto.

Para *parágrafos simples*, coloque um espaço em branco seguido de um acento circunflexo `^` e o identificador do bloco ao final da linha:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Para *blocos estruturados* (listas, citações, frases de destaque, tabelas), o identificador do bloco deve estar em uma linha separada, com uma linha em branco antes e depois:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Para *linhas específicas dentro de uma lista*, o identificador do bloco pode ser colocado diretamente em um item de marcador:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Não suportamos links para partes específicas de citações, frases de destaque e tabelas.

**Pesquisando blocos em todo o cofre**

Você também pode pesquisar blocos para vincular em todo o seu cofre usando a sintaxe `[[^^bloco]]`. No entanto, mais itens se qualificam como blocos em comparação com [[#Vincular a um cabeçalho em uma nota|links de cabeçalho]], então esta lista será muito mais longa.

> [!info]- Captura de tela da pesquisa por um link de bloco
> ![[link-block-heading.png#interface]]

Você também pode criar identificadores de bloco legíveis adicionando um espaço em branco seguido de um acento circunflexo (`^`) e o identificador. Identificadores de bloco podem conter apenas letras latinas, números e hifens.

Por exemplo, adicione `^quote-of-the-day` ao final de um bloco:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Agora você pode vincular ao bloco digitando `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilidade
> Referências de bloco são específicas do Obsidian e não fazem parte do formato Markdown padrão. Links contendo referências de bloco não funcionarão fora do Obsidian.

## Alterar o texto de exibição do link

Por padrão, o Obsidian mostrará o texto do link como ele aparece. Por exemplo:
- `[[Example]]` é exibido como [[Example]]
- `[[Example#Details]]` é exibido como [[Example#Details]]

Você pode alterar como um link é exibido personalizando seu texto de exibição:

**Formato de Link wiki**:
Use uma barra vertical (`|`) para alterar o texto de exibição.

- `[[Example|Nome personalizado]]` aparece como [[Example|Nome personalizado]]
- `[[Example#Details|Nome da seção]]` aparece como [[Example#Details|Nome da seção]]

**Formato Markdown**:
Use `[Texto de exibição](URL do Link)` para personalizar como o link aparece.

- `[Nome personalizado](Example.md)` aparece como [Nome personalizado](Example.md)
- `[Nome da seção](Example.md#Details)` aparece como [Nome da seção](Example.md#Details)

Este método é útil para situações pontuais em que você deseja alterar a aparência de um link em um contexto específico. Se quiser configurar um nome alternativo de link que possa reutilizar em todo o cofre, considere usar um [[Apelidos|apelido]].

Por exemplo, se você se refere regularmente a `[[Three laws of motion]]` como `[[The 3 laws]]`, adicionar "3 laws" como apelido permite que você digite apenas isso — sem necessidade de adicionar texto de exibição personalizado a cada vez.

> [!tip] Dica
> Use [[#Alterar o texto de exibição do link|texto de exibição do link]] quando quiser personalizar como um link aparece *em um lugar específico*.
> 
> Use [[Apelidos|apelidos]] quando quiser se referir à mesma nota usando *nomes diferentes* em todo o seu cofre.
^callout-internal-links-link-text

## Pré-visualizar um arquivo vinculado

> [!note] Nota
> Para pré-visualizar arquivos vinculados, você primeiro precisa ativar a [[Pré-visualização de página]].

Para pré-visualizar um arquivo vinculado, passe o cursor sobre um link interno. Enquanto estiver no modo de edição, pressione `Ctrl` (ou `Cmd` no macOS) enquanto passa o cursor sobre o link. Uma pré-visualização do conteúdo do arquivo aparecerá ao lado do cursor.
