---
permalink: import/bear
cssclasses:
  - soft-embed
---
O Obsidian permite que você migre facilmente suas notas do Bear usando o [[Importador|plugin Importador]]. Isso converterá seus dados do Bear em arquivos Markdown duráveis, que você pode usar com o Obsidian e muitos outros aplicativos.

## Exporte seus dados do Bear

O Obsidian usa os formatos de backup do Bear `.bear2bk` ou `ApplicationData.zip`.

### iOS

1. Abra o Bear.
2. Vá para **Settings** → **Advanced** → **Share Application Data**.
3. Escolha uma destinação para o seu arquivo de backup.
4. Você agora deve ter um arquivo `ApplicationData.zip` que contém todas as suas notas.

### macOS

1. Abra o Bear.
2. Vá para **File** → **Backup notes**.
3. Escolha uma destinação para o seu arquivo de backup.
4. Clique em **Export notes**.
5. Você agora deve ter um arquivo `.bear2bk` que contém todas as suas notas.

## Importe seus dados do Bear para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que você pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o Importador nas Configurações ou usando a [[Paleta de comandos]].
5. Em **Formatar arquivo** escolha **Bear (.bear2bk, .zip)**.
6. Selecione a destinação do seu arquivo de backup do Bear.
7. Clique em **Importar** para revisar o template gerado e visualizar exemplos das suas notas.
8. Clique em **Importar** novamente e aguarde até que a importação seja concluída.

## Templates

Use [[Modelos do importador|templates do Importador]] para configurar completamente como seus dados do Bear são importados.

![[Modelos do importador#Variables]]
