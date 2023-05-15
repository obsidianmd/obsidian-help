---
aliases:
- Como fazer/Link interno
- Como fazer/Link para blocos
---

Aprenda como criar links para notas, anexos e outros arquivos de suas notas, usando _links internos_. Ao vincular notas, você pode criar uma rede de conhecimento. ^b15695

O Obsidian pode atualizar automaticamente os links internos em seu cofre quando você renomeia um arquivo. Se você quiser ser avisado, pode desativá-lo em **Configurações** > **Arquivos e links** > **Atualizar links internos automaticamente**.

## Formatos suportados para links internos

Obsidian suporta os seguintes formatos de link:

- Wikilink: `[[Três leis do movimento]]`
- Remarcação: `[Três leis do movimento](Três%20leis%20of%20movimento.md)`

Os exemplos acima são equivalentes - eles aparecem da mesma forma no editor e têm links para a mesma nota.

> [!nota]
> Ao usar o formato Markdown, certifique-se de [codificar URL](https://en.wikipedia.org/wiki/Percent-encoding) o destino do link. Por exemplo, os espaços em branco se tornam `%20`.

Por padrão, devido ao seu formato mais compacto, o Obsidian gera links usando o formato Wikilink. Se a interoperabilidade for importante para você, você pode desativar os Wikilinks e usar os links Markdown.

Para usar o formato Markdown:

1. Abra **Configurações**.
2. Em **Arquivos e links**, desative **Usar \[\[Wikilink\]\]**.

Mesmo se você desabilitar o formato Wikilink, você ainda pode completar automaticamente os links digitando dois colchetes `[[`. Quando você seleciona um dos arquivos sugeridos, o Obsidian gera um link Markdown.

## Link para um arquivo

Para criar um link no modo de exibição de edição, use uma das seguintes maneiras:

- Digite `[[` no editor e selecione o arquivo para o qual deseja criar um link.
- Selecione o texto no editor e digite `[[`.
- Abra a [[paleta de comandos]] e selecione **Adicionar link interno**.

Embora você possa vincular a qualquer um dos [[Formatos de arquivos aceitos]], os links para formatos de arquivo diferentes do Markdown precisam incluir uma extensão de arquivo, como `[[Figura 1.png]]`.

## Link para um título em uma nota

Você pode criar links para cabeçalhos específicos em notas, também conhecidos como _links âncora_.

Para vincular a um cabeçalho, adicione uma hashtag (`#`) no final do destino do link, seguida do texto do cabeçalho.

Por exemplo, `[[Três leis do movimento#Segunda lei]]`.

Você pode adicionar várias hashtags para cada subtítulo.

Por exemplo, `[[Minha nota#Título 1#Título 2]]`.

## Link para um bloco em uma nota

Um bloco é uma unidade de texto em sua nota, por exemplo, um parágrafo, citação em bloco ou até mesmo um item de lista.

Você pode vincular a um bloco adicionando `#^` no final do destino do link, seguido por um identificador de bloco exclusivo, por exemplo, `[[2023-01-01#^37066d]]`.

Felizmente, você não precisa saber o identificador. Ao digitar o cursor (`^`), você pode selecionar o bloco de uma lista de sugestões para inserir o identificador correto.

Você também pode criar identificadores de bloco legíveis por humanos adicionando ` ^quote-of-the-day` no final de um bloco. Observe o espaço em branco antes do cursor. Agora você pode criar um link para o bloco digitando `[[2023-01-01#^quote-of-the-day]]`.

Os identificadores de bloco podem consistir apenas em letras, números e hífens.

> [!aviso] Interoperabilidade
> As referências de bloco são específicas para Obsidian e não fazem parte do formato Markdown padrão. Links contendo referências de bloco não funcionarão fora do Obsidian.

## Altere o texto de exibição do link

Você pode alterar o texto usado para exibir um link. Isso pode ser útil quando você deseja inserir um link em uma frase sem usar o nome do arquivo.

**Formato Wikilink:**

Você pode usar a barra vertical (`|`) para alterar o texto usado para exibir um link.

Por exemplo, `[[Links internos|texto de exibição personalizado]]` aparece como [[Links internos|texto de exibição personalizado]].

**Formato de marcação:**

Digite o texto de exibição entre os colchetes (`[]`).

Por exemplo, `[texto de exibição personalizado](Internal%20links.md)` aparece como [texto de exibição personalizado](Links%20internos.md).

## Visualizar um arquivo vinculado

> [!nota]
> Para visualizar arquivos vinculados, primeiro você precisa habilitar [[Visualização da página]].

Para visualizar um arquivo vinculado, pressione `Ctrl` (ou `Cmd` no macOS) enquanto passa o cursor sobre o link. Uma visualização do conteúdo do arquivo aparece ao lado do cursor.