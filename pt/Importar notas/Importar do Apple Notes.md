---
permalink: import/apple-notes
---
O Obsidian permite-lhe migrar facilmente as suas notas do Apple Notes usando o [[Importador|plugin Importador]]. Isto irá converter os seus dados do Apple Notes em ficheiros Markdown duráveis, que pode usar com o Obsidian e muitas outras aplicações.

Atualmente, o Importador apenas suporta a migração do Apple Notes no macOS. Ainda não está disponível no iOS.

## Importar dados do Apple Notes para o Obsidian

Vai precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação de ficheiro** escolha **Apple Notes**.
6. Clique em **Importar**.
7. Clique em **Abrir** na janela que aparece com o título `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Aguarde até que a importação esteja concluída.
9. Está feito!

## Conteúdo suportado

O plugin Importador do Obsidian suporta virtualmente todos os tipos de conteúdo do Apple Notes. Isto inclui tabelas, imagens, desenhos, digitalizações, PDFs e ligações introduzidas no iOS 17.

> [!Warning]
> As notas protegidas por palavra-passe são encriptadas pela Apple, pelo que devem ser desbloqueadas antes de as importar. Quaisquer notas bloqueadas serão ignoradas.

### Digitalizações

A Apple armazena digitalizações numa variedade de formatos dependendo de como foram criadas. Para preservar os dados originais, isto significa que serão exportadas de forma diferente.

* Digitalizações criadas ou visualizadas em versões mais antigas do macOS ou iOS serão exportadas como uma série de imagens não recortadas.
* Digitalizações criadas ou visualizadas em versões mais recentes do macOS ou iOS serão normalmente exportadas como imagens recortadas.
* Digitalizações que foram editadas usando as funcionalidades introduzidas no iOS 17 serão normalmente exportadas como PDFs.

## Métodos alternativos de exportação

A Apple não fornece uma opção nativa para exportar as suas notas. No entanto, existem várias ferramentas de terceiros, como o [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) de Chintan Ghate. Tenha em atenção que a maioria das ferramentas são limitadas nos dados que exportam do Apple Notes e podem não fornecer os dados de saída mais compatíveis. Estas ferramentas funcionam melhor se as suas notas do Apple Notes forem principalmente de texto, e tiverem poucos anexos ou funcionalidades especiais como desenhos e digitalizações.

Dependendo da ferramenta que utilizou, a exportação pode estar em formato Markdown ou formato HTML. Siga as instruções com base no formato de ficheiro para o qual exportou:

- [[Importar ficheiros HTML]]
- [[Importar ficheiros Markdown]]
