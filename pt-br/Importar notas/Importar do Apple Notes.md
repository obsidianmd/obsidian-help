---
permalink: import/apple-notes
cssclasses:
  - soft-embed
---
O Obsidian permite que você migre facilmente suas notas do Apple Notes usando o [[Importador|plugin Importador]]. Isso converterá seus dados do Apple Notes em arquivos Markdown duráveis, que você pode usar com o Obsidian e muitos outros aplicativos.

Atualmente, o Importador só suporta a migração do Apple Notes no macOS. Ainda não está disponível no iOS.

## Importar dados do Apple Notes para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o Importador nas Configurações ou usando a [[Paleta de comandos]].
5. Em **Formato de arquivo** escolha **Apple Notes**.
6. Clique em **Importar**.
7. Clique em **Abrir** no popup que aparece com o título `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Revise o modelo gerado e visualize exemplos das suas notas.
9. Clique em **Importar** e aguarde até que a importação seja concluída.

## Personalizar notas importadas

Antes de a importação começar, o Importador mostra uma prévia gerada a partir da sua seleção do Apple Notes. Você pode editar o modelo gerado, as propriedades e o nome da nota, ou escolher um modelo Markdown do seu cofre. Veja [[Modelos do Importador]].

## Conteúdo suportado

O plugin Importador do Obsidian suporta virtualmente todos os tipos de conteúdo do Apple Notes. Isso inclui tabelas, imagens, desenhos, digitalizações, PDFs e links introduzidos no iOS 17.

> [!Warning]
> Notas protegidas por senha são criptografadas pela Apple, então devem ser desbloqueadas antes de importá-las. Quaisquer notas bloqueadas serão ignoradas.

### Digitalizações

A Apple armazena digitalizações em uma variedade de formatos dependendo de como foram criadas. Para preservar os dados originais, isso significa que serão exportadas de maneiras diferentes.

* Digitalizações criadas ou visualizadas em versões mais antigas do macOS ou iOS serão exportadas como uma série de imagens não recortadas.
* Digitalizações criadas ou visualizadas em versões mais recentes do macOS ou iOS geralmente serão exportadas como imagens recortadas.
* Digitalizações que foram editadas usando os recursos introduzidos no iOS 17 geralmente serão exportadas como PDFs.

## Modelos

Use [[Modelos do Importador|Modelos do Importador]] para configurar completamente como seus dados do Apple Notes são importados.

![[Modelos do importador#Variables]]

Adicionalmente, o Apple Notes fornece a seguinte variável.

| Variável       | Descrição                        |
| -------------- | -------------------------------- |
| `{{isPinned}}` | Se a nota está fixada ou não. |
