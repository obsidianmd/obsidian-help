---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
O Obsidian permite-lhe migrar facilmente as suas entradas de diário do Apple Journal usando o [[Importador|plugin Importador]]. Isto converte os seus diários em ficheiros Markdown duráveis que pode usar com o Obsidian e muitas outras aplicações.

## Exportar os seus dados do Apple Journal

### No iPhone
Siga as instruções para [Imprimir e exportar entradas no Journal no iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Abra a aplicação Journal no seu iPhone.
2. Escolha um diário ou toque em Todas as Entradas.
3. Toque no botão Mais no topo do ecrã.
4. Toque em Exportar e depois escolha Exportar.
5. Escolha uma localização e depois toque no botão Selecionado.

### No Mac (Tahoe)
Siga as instruções para [Imprimir e exportar entradas no Journal no Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Abra a aplicação Journal no seu Mac.
2. Vá a Ficheiro > Exportar e depois escolha Exportar.

## Importar dados do Apple Journal para o Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formato de ficheiro**, escolha **Apple Journal (HTML Export)**.
6. Em **Ficheiros a importar**, selecione a pasta com os dados exportados, normalmente _AppleJournalEntries_, ou ficheiros individuais de _Entries_.
7. Reveja e edite as outras opções de importação.
8. Selecione **Importar** para rever o modelo gerado e pré-visualizar exemplos das suas entradas.
9. Selecione **Importar** novamente e aguarde até que a importação termine.

## Modelos

Use [[Modelos do Importador|Modelos do Importador]] para configurar totalmente como os seus dados do Apple Journal são importados.

![[Modelos do Importador#Variables]]

Quando **Adicionar metadados como metadados iniciais** está ativado, os metadados do Apple Journal são convertidos em [[Propriedades|propriedades]]. Dependendo da entrada, estes podem incluir `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media` e `workout-route`.

Use a variável `properties` para aceder a estes metadados. Por exemplo, use `{{properties.location}}` para uma localização ou `{{properties["state-of-mind"]}}` para um estado de espírito.
