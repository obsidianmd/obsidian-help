---
permalink: import/logseq
cssclasses:
  - soft-embed
---
O Obsidian permite migrar notas de um grafo Logseq baseado em arquivos (agora chamado "Logseq OG") usando o [[Importador|plugin Importador]] oficial. O Importador lê os arquivos Markdown do Logseq diretamente e converte a formatação específica do Logseq em arquivos duráveis que você pode usar offline com o Obsidian e outros aplicativos.

## Antes de começar

- Faça backup do seu grafo Logseq e do seu cofre Obsidian.
- Localize a pasta raiz do seu grafo Logseq. Ela normalmente contém pastas chamadas `pages`, `journals`, `assets` e `logseq`.
- Certifique-se de que está usando um grafo Logseq baseado em arquivos. Grafos de banco de dados do Logseq ainda não são suportados.

## Importar seu grafo Logseq

Você precisa do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra **[[Configurações]] → Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
2. Ative o plugin Importador.
3. Abra o **Importador** usando a [[Paleta de comandos]] ou o ícone na faixa de opções.
4. Em **Formato de arquivo**, selecione **Logseq**.
5. Em **Escolher pastas**, selecione a pasta raiz do seu grafo. Selecione a pasta que contém `pages` e `journals`, não qualquer uma dessas pastas individualmente.
6. Revise as pastas detectadas e exclua quaisquer que você não queira importar.
7. Escolha uma pasta de saída e onde os anexos importados devem ser armazenados.
8. Revise as opções de importação e visualize exemplos das notas convertidas.
9. Selecione **Importar** e aguarde a importação terminar.

## Limitações

- Quadros brancos não são importados.
- Consultas são preservadas como blocos de código se você optar por mantê-las.
- Macros de modelo dinâmico do Logseq permanecem como texto literal.
- Agendamento de flashcards, anotações em PDF e outros dados específicos do aplicativo Logseq não são migrados.

## Configurações

O Importador converte convenções comuns do Logseq, incluindo:

- Propriedades de página em [[Propriedades]] do Obsidian.
- Aliases de página, tags, namespaces e links.
- Estados de fluxo de trabalho em marcadores de lista com caixas de seleção, com prioridades e datas preservadas como texto legível.
- IDs de bloco, referências de bloco e incorporações de bloco em links e incorporações do Obsidian.
- Nomes de arquivo de diário e links de data.
- Destaques, listas numeradas, blocos Org, incorporações de mídia e arquivos vinculados da pasta `assets` do grafo.

### Diários

Por padrão, **Usar configurações de notas diárias** está ativado. Os diários importados usam a pasta e o formato de data configurados pelo plugin nativo [[Notas diárias]]. Isso pode colocar os diários fora da pasta de saída selecionada no Importador.

Se você desativar esta opção, os diários são gravados em uma pasta `Journals` dentro da pasta de saída selecionada e usam o formato de nome de nota `YYYY-MM-DD`.

### Achatar estruturas de tópicos

O Logseq usa marcadores aninhados como estrutura de uma página. Por padrão, o Importador preserva essa estrutura de tópicos. Ative **Achatar estruturas de tópicos** para converter blocos de tópicos em uma combinação de parágrafos, cabeçalhos e listas convencionais. Tarefas e grupos de itens semelhantes a listas permanecem como itens de lista, mas a conversão é heurística. Revise vários exemplos na pré-visualização antes de importar um grafo grande.

### Preservar dados incompatíveis

Consultas, flashcards e entradas de controle de tempo do Logseq não têm equivalentes diretos no Obsidian. As opções de importação permitem escolher se cada tipo de conteúdo deve ser mantido. Quando mantido, ele permanece como texto simples.

- **Manter consultas** preserva consultas como blocos de código cercados ou código inline.
- **Manter flashcards** preserva marcadores `#card` e wrappers cloze como texto simples.
- **Manter controle de tempo** preserva entradas `LOGBOOK` e `CLOCK` como texto simples.

## Modelos

Use [[Modelos do importador|Modelos do importador]] para configurar completamente como seus dados do Logseq são importados.

![[Modelos do importador#Variáveis]]

## Solução de problemas

Se o Importador não encontrar nenhuma nota, certifique-se de que selecionou a pasta raiz do grafo e que as pastas de páginas ou diários configuradas contêm arquivos Markdown.

Se um anexo for reportado como ausente, confirme que o arquivo referenciado ainda existe na pasta `assets` do grafo.

Para outros problemas, pesquise no [rastreador de problemas do Importador](https://github.com/obsidianmd/obsidian-importer/issues) ou envie um relatório de bug com um grafo de exemplo pequeno.
