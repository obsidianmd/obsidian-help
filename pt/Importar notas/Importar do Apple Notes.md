---
permalink: import/apple-notes
cssclasses:
  - soft-embed
---
O Obsidian permite-lhe migrar facilmente as suas notas do Apple Notes usando o [[Importador|plugin Importador]]. Isto converte os seus dados do Apple Notes em ficheiros Markdown duráveis que pode usar com o Obsidian e muitas outras aplicações.

Atualmente, o Importador apenas suporta a migração do Apple Notes no macOS. Ainda não está disponível no iOS.

## Importar dados do Apple Notes para o Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação de ficheiro** escolha **Apple Notes**.
6. Selecione **Importar**.
7. Selecione **Abrir** na janela com o título `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Reveja o modelo gerado e pré-visualize exemplos das suas notas.
9. Selecione **Importar** e aguarde até que a importação termine.

## Personalizar notas importadas

Antes de a importação começar, o Importador mostra uma pré-visualização gerada a partir da sua seleção do Apple Notes. Pode editar o modelo gerado, as propriedades e o nome da nota, ou escolher um modelo Markdown do seu cofre. Consulte [[Modelos do Importador]].

## Conteúdo suportado

O plugin Importador do Obsidian suporta virtualmente todos os tipos de conteúdo do Apple Notes. Isto inclui tabelas, imagens, desenhos, digitalizações, PDFs e ligações introduzidas no iOS 17.

> [!Warning]
> As notas protegidas por palavra-passe são encriptadas pela Apple, pelo que devem ser desbloqueadas antes de as importar. Quaisquer notas bloqueadas serão ignoradas.

### Digitalizações

A Apple armazena digitalizações numa variedade de formatos dependendo de como foram criadas. Para preservar os dados originais, isto significa que serão exportadas de forma diferente.

* Digitalizações criadas ou visualizadas em versões mais antigas do macOS ou iOS serão exportadas como uma série de imagens não recortadas.
* Digitalizações criadas ou visualizadas em versões mais recentes do macOS ou iOS serão normalmente exportadas como imagens recortadas.
* Digitalizações que foram editadas usando as funcionalidades introduzidas no iOS 17 serão normalmente exportadas como PDFs.

## Modelos

Use [[Modelos do Importador|Modelos do Importador]] para configurar completamente como os seus dados do Apple Notes são importados.

![[Modelos do Importador#Variáveis]]

Adicionalmente, o Apple Notes fornece a seguinte variável.

| Variável       | Descrição                       |
| -------------- | ------------------------------- |
| `{{isPinned}}` | Se a nota está fixada ou não. |
