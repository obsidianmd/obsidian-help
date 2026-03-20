---
permalink: import/evernote
---
O Obsidian permite que você migre facilmente suas notas do Evernote usando o [[Importador|plugin Importador]]. Isso converterá seus dados do Evernote em arquivos Markdown duráveis, que você pode usar com o Obsidian e muitos outros aplicativos.

## Exportar seus dados do Evernote

O Obsidian utiliza o formato de exportação do Evernote, arquivos `.enex`.

Você pode encontrar as instruções do Evernote para exportar seus dados [no site do Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Este método permite exportar cadernos inteiros no cliente de desktop.

1. Vá para a tela de Cadernos.
2. Clique em **Mais ações** ( `•••` ) e escolha **Exportar Caderno...**
3. Selecione **ENEX** como o formato de arquivo.
3. Escolha uma destinação para o arquivo `.enex` exportado.

## Importar seus dados do Evernote para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone no menu lateral.
5. Em **Formato de arquivo** escolha **Evernote (.enex)**.
6. Selecione a destinação do seu arquivo de backup do Evernote.
7. Clique em **Importar** e aguarde até que a importação seja concluída.
8. Pronto!

## Opções avançadas de importação

### Manter a hierarquia de etiquetas

A exportação do Evernote não mantém a hierarquia de etiquetas. Para manter sua hierarquia de etiquetas, você pode "achatar" as etiquetas separadas por "/". Por exemplo, supondo que você tenha a seguinte estrutura de etiquetas:

```
EtiquetaPai
    EtiquetaFilha
```

O que você precisa fazer para manter as etiquetas relacionadas no Obsidian é:

1. Clique com o botão direito na EtiquetaFilha.
2. Selecione "Renomear."
3. Renomeie para `EtiquetaPai/EtiquetaFilha`.

### Lidando com pilhas de cadernos

Como o processo de exportação é limitado a cadernos individuais, o arquivo de exportação padrão não possui informações sobre pilhas de cadernos. No entanto, o importador pode reconhecer padrões no nome do arquivo enex para recriar pilhas de cadernos como pastas.

Supondo que você tenha um caderno chamado ```CadernoA``` em uma pilha chamada ```Pilha1```, você pode recriar uma pilha de cadernos renomeando o arquivo enex para ```Pilha1@@@CadernoA```.

Isso resulta nas notas convertidas sendo geradas dentro da pasta Pilha1/CadernoA.

### Mais opções

Para opções de importação mais avançadas do Evernote, você também pode tentar [importar via Yarle](https://github.com/akosbalasko/yarle).
