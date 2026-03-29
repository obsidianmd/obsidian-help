---
permalink: resources
publish: true
mobile: true
description: 'Encontre recursos de suporte, reporte violações de segurança ou da comunidade e saiba como contribuir para o Obsidian.'
---
Encontre recursos de suporte, reporte problemas de segurança ou violações comunitárias e saiba como contribuir para o Obsidian.

## Perguntas e conselhos

Se tem uma questão sobre como usar o Obsidian, ou quer conhecer outros utilizadores do Obsidian, pode juntar-se a um dos nossos canais comunitários:

- [[Vault de tests|Explorar o cofre sandbox]]
- [Junte-se ao nosso servidor Discord](https://discord.gg/obsidianmd)
- [Visite o fórum](https://forum.obsidian.md/)

### Reportar erros e pedir funcionalidades

> [!tip]- Verifique primeiro se já existe
> Antes de pedir uma nova funcionalidade ou reportar um erro, por favor consulte as outras publicações para se certificar de que alguém já não o submeteu.

Se quiser sugerir uma funcionalidade no Obsidian, dirija-se a [Pedidos de funcionalidades](https://forum.obsidian.md/c/feature-requests/8).

Se quiser reportar um erro no Obsidian, dirija-se a [Relatórios de erros](https://forum.obsidian.md/c/bug-reports/7). Os relatórios de erros são movidos para o [Cemitério de erros](https://forum.obsidian.md/c/bug-graveyard/12) assim que são resolvidos.

### Recolher informação de depuração

Quando encontrar um erro ou precisar de assistência do [[#Contactar o suporte do Obsidian|suporte do Obsidian]], fornecer informação de depuração pode ser muito útil. Eis como obtê-la:

1. Abra a [[Paleta de comando]].
2. Escreva **Mostrar Informação de Debug**.
3. Selecione a opção destacada **Mostrar Informação de Debug**.
4. Selecione **Copiar para a área de transferência**.
5. Cole a informação copiada no seu relatório de erro ou e-mail de suporte do Obsidian.

### Verificar o tempo de arranque

Pode verificar quanto tempo o Obsidian demora a iniciar usando a funcionalidade **Tempo de arranque**.

1. Abra **[[Definições]] → Geral → Avançadas**.
2. Junto a **Notificar se o arranque for mais lento do que o esperado**, selecione o **ícone do temporizador**.
3. Uma janela de **Tempo de arranque** aparecerá, mostrando informação detalhada de tempo:
   - **Arranque total da aplicação**: Tempo total de lançamento.
   - **Inicialização**: Tempo gasto a carregar a aplicação em si.
   - **Cofre**: Tempo para carregar os ficheiros do seu cofre.
   - **Área de trabalho**: Tempo para restaurar separadores e esquema.
   - **Plugins Base**: Tempo utilizado pelos plugins principais ativos.
4. Pode selecionar **Copiar para a área de transferência** para copiar o relatório para resolução de problemas ou partilha.

Adicionalmente, pode ativar **Notificar se o arranque for mais lento do que o esperado** para receber um aviso se o arranque for invulgarmente lento.

### Capturar registos da consola

Quando precisa de reportar um erro relacionado com um plugin do Obsidian ou quando solicitado pelo [[#Contactar o suporte do Obsidian|suporte do Obsidian]] para fornecer informação de registos, pode ser necessário aceder à consola do Obsidian a partir da aplicação Obsidian. Eis como fazê-lo consoante o seu sistema operativo:

- **Windows/Linux**: `Ctrl+Shift+I`
- **macOS**: `Command+Option+I`

> [!info]+ Método de acesso alternativo
> Se estiver a usar o estilo de moldura de janela **Moldura do Obsidian**, também pode aceder à consola do Obsidian através do menu do título.

Depois de abrir a consola de programador:

1. Selecione **console** no menu superior.
2. Escolha a opção do menu lateral **errors**. Quaisquer erros serão mostrados como `# errors`.
3. Selecione uma das mensagens de erro vermelhas.
4. Escolha a opção para **Guardar como...** Isto guardará todos os erros na consola.
5. Guarde o ficheiro de registo no seu dispositivo.
6. Anexe o ficheiro de registo ao seu relatório de erro ou e-mail de suporte do Obsidian.

![[help-support-console-menu.png#interface|600]]

> [!warning]+ Acesso à consola em dispositivos móveis
> Dispositivos móveis e tablets têm acesso limitado às suas consolas de programador. Para estes utilizadores, recomendamos usar o plugin da comunidade [Logstravaganza](https://obsidian.md/plugins?id=logstravaganza) para gerar automaticamente os dados de registo da consola numa nota markdown.

### Contactar o suporte do Obsidian

O Obsidian oferece suporte por e-mail apenas para questões sobre [[Licença comercial|licenças comerciais]], a sua conta, pagamentos e serviços adicionais ([[Introdução ao Obsidian Sync|Obsidian Sync]] e [[Introdução ao Obsidian Publish|Obsidian Publish]]). Se precisar de ajuda com algum destes tópicos, [envie um e-mail à equipa do Obsidian](mailto:support@obsidian.md).

## Reportar um problema de segurança

Se descobriu um problema de segurança no Obsidian, ou se suspeita que um plugin é malicioso, por favor [envie um e-mail à equipa do Obsidian](mailto:support@obsidian.md).

## Reportar uma violação do Código de Conduta

Quer seja vítima ou testemunha de uma violação do nosso [[Código de conduta da comunidade]], pode reportar o incidente à nossa equipa de moderadores.

Reporte o incidente num dos seguintes canais comunitários:

- [[Código de conduta da comunidade#Reportar no Discord|Reportar no Discord]]
- [[Código de conduta da comunidade#Reportar no fórum|Reportar no fórum]]

## Contribuir para o Obsidian

Interessado em aplicar algumas competências e tempo livre ao Obsidian? Eis onde a sua ajuda seria realmente útil:

- Ajude outros utilizadores do Obsidian respondendo a questões no nosso [servidor Discord](https://discord.gg/obsidianmd), no nosso [fórum](https://forum.obsidian.md/), ou no reddit [ObsidianMD](https://old.reddit.com/r/ObsidianMD/).
- [[Programadores]], a vossa ajuda seria muito útil para expandir a nossa [Documentação para Programadores do Obsidian](https://github.com/obsidianmd/obsidian-developer-docs).
- Sabe alguma língua escrita além do inglês? Considere ajudar com as nossas [[Traduções]] para outros idiomas.
- Há algo nestes documentos de ajuda que está desatualizado ou confuso? Consulte o [[Guia de estilo]] e submeta um [issue e pull request](https://github.com/obsidianmd/obsidian-help/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).
- Se possível, pode [[Contribuições financeiras|contribuir financeiramente]] utilizando um dos nossos serviços adicionais pagos.
