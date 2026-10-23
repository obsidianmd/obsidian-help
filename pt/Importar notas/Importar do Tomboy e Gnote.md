---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
O Obsidian permite-lhe migrar notas do Tomboy e Gnote utilizando o [[Importador|plugin Importador]] oficial. O Importador lê diretamente os ficheiros `.note` das aplicações e converte o seu conteúdo XML em Markdown.

## Localizar os seus ficheiros de notas

O Tomboy e o Gnote normalmente armazenam notas nestas pastas:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` ou `~/.local/share/gnote`

A localização exata pode diferir se moveu a pasta de dados ou utiliza uma versão diferente da aplicação.

## Importar as suas notas do Tomboy ou Gnote

1. Abra **[[Definições]] → Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
2. Ative o plugin Importador.
3. Abra o **Importador** utilizando a [[Paleta de comando]] ou o ícone da barra de ferramentas.
4. Em **Formatação do ficheiro**, selecione **Tomboy/Gnote (.note)**.
5. Escolha ficheiros `.note` individuais ou a pasta que os contém.
6. Reveja as opções de importação, o modelo gerado e os exemplos de visualização.
7. Selecione **Importar** e aguarde que a importação termine.

## Modelos

Utilize os [[Modelos do Importador|Modelos do Importador]] para configurar completamente como os seus dados são importados.

![[Modelos do Importador#Variáveis]]
