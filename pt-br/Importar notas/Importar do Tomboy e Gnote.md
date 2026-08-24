---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
O Obsidian permite migrar notas do Tomboy e Gnote usando o [[Importador|plugin Importador]] oficial. O Importador lê os arquivos `.note` dos aplicativos diretamente e converte seu conteúdo XML em Markdown.

## Localizar seus arquivos de notas

O Tomboy e o Gnote normalmente armazenam notas nestas pastas:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` ou `~/.local/share/gnote`

A localização exata pode ser diferente se você moveu a pasta de dados ou usa uma versão diferente do aplicativo.

## Importar suas notas do Tomboy ou Gnote

1. Abra **[[Configurações]] → Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
2. Ative o plugin Importador.
3. Abra o **Importador** usando a [[Paleta de comandos]] ou o ícone na [[Faixa de opções|faixa de opções]].
4. Em **Formato de arquivo**, selecione **Tomboy/Gnote (.note)**.
5. Escolha arquivos `.note` individuais ou a pasta que os contém.
6. Revise as opções de importação, o modelo gerado e os exemplos de pré-visualização.
7. Selecione **Importar** e aguarde a importação terminar.

## Modelos

Use [[Modelos do importador|Modelos do importador]] para configurar completamente como seus dados são importados.

![[Modelos do importador#Variáveis]]
