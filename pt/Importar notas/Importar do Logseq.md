---
permalink: import/logseq
cssclasses:
  - soft-embed
---
O Obsidian permite-lhe migrar notas de um grafo Logseq baseado em ficheiros (agora chamado "Logseq OG") usando o [[Importador|plugin Importador]] oficial. O Importador lê os ficheiros Markdown do Logseq diretamente e converte a formatação específica do Logseq em ficheiros duradouros que pode usar offline com o Obsidian e outras aplicações.

## Antes de começar

- Faça cópia de segurança do seu grafo Logseq e do cofre Obsidian.
- Localize a pasta raiz do seu grafo Logseq. Normalmente contém pastas chamadas `pages`, `journals`, `assets` e `logseq`.
- Certifique-se de que está a usar um grafo Logseq baseado em ficheiros. Os grafos de base de dados do Logseq ainda não são suportados.

## Importar o seu grafo Logseq

Precisa do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra **[[Definições]] → Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
2. Ative o plugin Importador.
3. Abra o **Importador** usando a [[Paleta de comando]] ou o ícone na barra de ferramentas.
4. Em **Formatação do ficheiro**, selecione **Logseq**.
5. Em **Escolher pastas**, selecione a pasta raiz do seu grafo. Selecione a pasta que contém `pages` e `journals`, não qualquer uma dessas pastas individualmente.
6. Reveja as pastas detetadas e exclua as que não pretende importar.
7. Escolha uma pasta de destino e onde os anexos importados devem ser armazenados.
8. Reveja as opções de importação e pré-visualize exemplos das notas convertidas.
9. Selecione **Importar** e aguarde que a importação termine.

## Limitações

- Os quadros brancos não são importados.
- As consultas são preservadas como blocos de código se optar por mantê-las.
- As macros de modelo dinâmico do Logseq permanecem como texto literal.
- O agendamento de cartões de memória, anotações de PDF e outros dados específicos da aplicação do Logseq não são migrados.

## Definições

O Importador converte convenções comuns do Logseq, incluindo:

- Propriedades de página em [[Propriedades]] do Obsidian.
- Alcunhas de página, etiquetas, espaços de nomes e ligações.
- Estados de fluxo de trabalho em marcadores de lista com caixa de seleção, com prioridades e datas preservadas como texto legível.
- IDs de bloco, referências de bloco e incorporações de bloco em ligações e incorporações do Obsidian.
- Nomes de ficheiro de diário e ligações de data.
- Realces, listas numeradas, blocos Org, incorporações de multimédia e ficheiros ligados da pasta `assets` do grafo.

### Diários

Por predefinição, **Usar definições de notas diárias** está ativado. Os diários importados usam a pasta e o formato de data configurados pelo plugin principal [[Notas diárias]]. Isto pode colocar os diários fora da pasta de destino selecionada no Importador.

Se desativar esta opção, os diários são escritos numa pasta `Journals` dentro da pasta de destino selecionada e usam o formato de nome de nota `YYYY-MM-DD`.

### Aplanar esquemas

O Logseq usa marcadores aninhados como estrutura de uma página. Por predefinição, o Importador preserva esta estrutura de esquema. Ative **Aplanar esquemas** para converter blocos de esquema numa combinação de parágrafos, cabeçalhos e listas convencionais. Tarefas e grupos de itens semelhantes a listas permanecem como itens de lista, mas a conversão é heurística. Reveja vários exemplos na pré-visualização antes de importar um grafo grande.

### Preservar dados incompatíveis

As consultas, cartões de memória e entradas de registo de tempo do Logseq não têm equivalentes diretos no Obsidian. As opções de importação permitem-lhe escolher se pretende manter cada tipo de conteúdo. Quando mantido, permanece como texto simples.

- **Manter consultas** preserva as consultas como blocos de código delimitados ou código em linha.
- **Manter cartões de memória** preserva marcadores `#card` e invólucros cloze como texto simples.
- **Manter registo de tempo** preserva entradas `LOGBOOK` e `CLOCK` como texto simples.

## Modelos

Use [[Modelos do Importador|Modelos do Importador]] para configurar completamente como os seus dados do Logseq são importados.

![[Modelos do Importador#Variáveis]]

## Resolução de problemas

Se o Importador não encontrar notas, certifique-se de que selecionou a pasta raiz do grafo e que as pastas de páginas ou diários configuradas contêm ficheiros Markdown.

Se um anexo for reportado como ausente, confirme que o ficheiro referenciado ainda existe na pasta `assets` do grafo.

Para outros problemas, pesquise no [rastreador de problemas do Importador](https://github.com/obsidianmd/obsidian-importer/issues) ou submeta um relatório de erro com um pequeno grafo de exemplo.
