---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
O Obsidian permite que você migre facilmente suas entradas de diário do Apple Journal usando o [[Importador|plugin Importador]].
Isso converterá seus diários em arquivos Markdown duráveis, que você pode usar com o Obsidian e muitos outros aplicativos.

## Exporte seus dados do Apple Journal

### No iPhone
Siga as instruções para [Imprimir e exportar entradas no Journal no iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Acesse o aplicativo Journal no seu iPhone.
2. Escolha um diário ou toque em Todas as Entradas.
3. Toque no botão Mais na parte superior da tela.
4. Toque em Exportar, depois escolha Exportar.
5. Escolha uma destinação, depois toque no botão Selecionado.

### No Mac (Tahoe)
Siga as instruções para [Imprimir e exportar entradas no Journal no Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Acesse o aplicativo Journal no seu Mac.
2. Vá em Arquivo > Exportar, depois escolha Exportar.

## Importe dados do Apple Journal para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá em **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o Importador nas Configurações ou usando a [[Paleta de comandos]].
5. Em **Formatar**, escolha **Apple Journal (HTML Export)**.
6. Em **Arquivos para importar**, selecione a pasta com os dados exportados, geralmente _AppleJournalEntries_, ou arquivos individuais de _Entries_.
7. Revise e edite as outras opções de importação.
8. Selecione **Importar** para revisar o modelo gerado e visualizar exemplos das suas entradas.
9. Selecione **Importar** novamente e aguarde até que a importação seja concluída.

## Modelos

Use [[Modelos do importador|modelos do Importador]] para configurar completamente como seus dados do Apple Journal são importados.

![[Modelos do importador#Variables]]

Quando **Adicionar metadados como frontmatter** está ativado, os metadados do Apple Journal são convertidos em [[Propriedades|propriedades]]. Dependendo da entrada, estes podem incluir `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media` e `workout-route`.

Use a variável `properties` para acessar esses metadados. Por exemplo, use `{{properties.location}}` para uma localização ou `{{properties["state-of-mind"]}}` para um estado de espírito.
