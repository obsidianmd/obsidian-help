---
permalink: import/apple-notes
---
O Obsidian permite que você migre facilmente suas notas do Apple Notes usando o [[Importador|plugin Importador]]. Isso converterá seus dados do Apple Notes em arquivos Markdown duráveis, que você pode usar com o Obsidian e muitos outros aplicativos.

Atualmente, o Importador só suporta a migração do Apple Notes no macOS. Ainda não está disponível no iOS.

## Importar dados do Apple Notes para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que pode ser [instalado aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone do menu lateral.
5. Em **Formato de arquivo** escolha **Apple Notes**.
6. Clique em **Importar**.
7. Clique em **Abrir** no popup que aparece com o título `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Aguarde até que a importação seja concluída.
9. Pronto!

## Conteúdo suportado

O plugin Importador do Obsidian suporta virtualmente todos os tipos de conteúdo do Apple Notes. Isso inclui tabelas, imagens, desenhos, digitalizações, PDFs e links introduzidos no iOS 17.

> [!Warning]
> Notas protegidas por senha são criptografadas pela Apple, então devem ser desbloqueadas antes de importá-las. Quaisquer notas bloqueadas serão ignoradas.

### Digitalizações

A Apple armazena digitalizações em uma variedade de formatos dependendo de como foram criadas. Para preservar os dados originais, isso significa que serão exportadas de maneiras diferentes.

* Digitalizações criadas ou visualizadas em versões mais antigas do macOS ou iOS serão exportadas como uma série de imagens não recortadas.
* Digitalizações criadas ou visualizadas em versões mais recentes do macOS ou iOS geralmente serão exportadas como imagens recortadas.
* Digitalizações que foram editadas usando os recursos introduzidos no iOS 17 geralmente serão exportadas como PDFs.

## Métodos alternativos de exportação

A Apple não fornece uma opção nativa para exportar suas notas. No entanto, existem várias ferramentas de terceiros, como o [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) de Chintan Ghate. Esteja ciente de que a maioria das ferramentas é limitada nos dados que exportam do Apple Notes e pode não fornecer os dados de saída mais compatíveis. Essas ferramentas funcionam melhor se suas notas do Apple Notes forem principalmente apenas texto, com poucos anexos ou recursos especiais como desenhos e digitalizações.

Dependendo da ferramenta que você usou, a exportação pode estar em formato Markdown ou formato HTML. Siga as instruções com base no formato de arquivo para o qual você exportou:

- [[Importar arquivos HTML]]
- [[Importar arquivos Markdown]]
