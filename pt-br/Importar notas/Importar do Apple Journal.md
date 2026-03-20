---
permalink: import/apple-journal
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
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone no menu lateral.
5. Em **Formatar**, escolha **Apple Journal (HTML Export)**.
6. Em **Arquivos para importar**, selecione a pasta com os dados exportados, geralmente _AppleJournalEntries_, ou arquivos individuais de _Entries_.
7. Revise e edite as outras opções de importação.
8. Selecione Importar e aguarde até que a importação seja concluída.
9. Pronto!


## Conteúdo suportado

O plugin pode importar metadados do Journal como frontmatter, como _state-of-mind_, _contacts_, _location_ e _workout-route_.

> [!note] Nota
> O plugin não importa recursos. Anexos como fotos, vídeos e gravações de áudio são ignorados.
