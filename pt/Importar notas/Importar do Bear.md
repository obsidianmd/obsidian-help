---
permalink: import/bear
cssclasses:
  - soft-embed
---
O Obsidian permite-lhe migrar facilmente as suas notas do Bear usando o [[Importador|plugin Importador]]. Isto converte os seus dados do Bear em ficheiros Markdown duráveis que pode usar com o Obsidian e muitas outras aplicações.

## Exportar os seus dados do Bear

O Obsidian pode usar os formatos de cópia de segurança do Bear `.bear2bk` ou `ApplicationData.zip`.

### iOS

1. Abra o Bear.
2. Vá a **Settings** → **Advanced** → **Share Application Data**.
3. Escolha uma localização para o seu ficheiro de cópia de segurança.
4. Deverá agora ter um ficheiro `ApplicationData.zip` que contém todas as suas notas.

### macOS

1. Abra o Bear.
2. Vá a **File** → **Backup notes**.
3. Escolha uma localização para o seu ficheiro de cópia de segurança.
4. Clique em **Export notes**.
5. Deverá agora ter um ficheiro `.bear2bk` que contém todas as suas notas.

## Importar os seus dados do Bear para o Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação de ficheiro** escolha **Bear (.bear2bk, .zip)**.
6. Selecione a localização do seu ficheiro de cópia de segurança do Bear.
7. Selecione **Importar** para rever o modelo gerado e pré-visualizar exemplos das suas notas.
8. Selecione **Importar** novamente e aguarde até a importação terminar.

## Modelos

Use [[Modelos do Importador|modelos do Importador]] para configurar completamente como os seus dados do Bear são importados.

![[Modelos do Importador#Variables]]
