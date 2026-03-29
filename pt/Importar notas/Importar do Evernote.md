---
permalink: import/evernote
---
O Obsidian permite-lhe migrar facilmente as suas notas do Evernote usando o [[Importador|plugin Importador]]. Isto irá converter os seus dados do Evernote para ficheiros Markdown duráveis, que pode usar com o Obsidian e muitas outras aplicações.

## Exportar os seus dados do Evernote

O Obsidian utiliza o formato de exportação do Evernote, ficheiros `.enex`.

Pode encontrar as instruções do Evernote para exportar os seus dados [no site do Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Este método permite exportar cadernos inteiros no cliente de ambiente de trabalho.

1. Vá ao ecrã de Cadernos.
2. Clique em **Mais ações** ( `•••` ) e escolha **Exportar Caderno...**
3. Selecione **ENEX** como formato de ficheiro.
3. Escolha uma localização para o seu ficheiro `.enex` exportado.

## Importar os seus dados do Evernote para o Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone da barra de ferramentas.
5. Em **Formato de ficheiro** escolha **Evernote (.enex)**.
6. Selecione a localização do seu ficheiro de cópia de segurança do Evernote.
7. Clique em **Importar** e aguarde até a importação estar concluída.
8. Está feito!

## Opções de importação avançadas

### Manter a hierarquia de etiquetas

A exportação do Evernote não mantém a hierarquia de etiquetas. Para manter a hierarquia de etiquetas, pode "aplanar" as etiquetas separadas por "/". Por exemplo, assumindo que tem a seguinte estrutura de etiquetas:

```
EtiquetaPai
    EtiquetaFilha
```

O que precisa de fazer para manter as etiquetas relacionadas no Obsidian é:

1. Clique com o botão direito na EtiquetaFilha.
2. Selecione "Renomear."
3. Renomeie-a como `EtiquetaPai/EtiquetaFilha`.

### Lidar com pilhas de cadernos

Uma vez que o processo de exportação está limitado a cadernos individuais, o ficheiro de exportação predefinido não contém informação sobre pilhas de cadernos. No entanto, o importador consegue reconhecer padrões no nome do ficheiro enex para recriar pilhas de cadernos como pastas.

Assumindo que tem um caderno chamado ```CadernoA``` numa pilha chamada ```Pilha1```, pode recriar uma pilha de cadernos renomeando o ficheiro enex para ```Pilha1@@@CadernoA```.

Isto resulta nas notas convertidas serem geradas dentro da pasta Pilha1/CadernoA.

### Mais opções

Para opções de importação mais avançadas do Evernote, pode também experimentar [importar via Yarle](https://github.com/akosbalasko/yarle).
