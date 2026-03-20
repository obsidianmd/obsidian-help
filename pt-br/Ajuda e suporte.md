---
permalink: resources
publish: true
mobile: true
description: >-
  Encontre recursos de suporte, reporte violações de segurança ou da comunidade
  e saiba como contribuir para o Obsidian.
aliases:
  - Ajuda e suporte
---
Encontre recursos de suporte, reporte violações de segurança ou da comunidade e saiba como contribuir para o Obsidian.

## Perguntas e conselhos

Se você tem uma pergunta sobre como usar o Obsidian, ou quer conhecer outros usuários do Obsidian, você pode participar de um dos nossos canais da comunidade:

- [[Cofre sandbox|Explorar o Cofre sandbox]]
- [Entrar no nosso servidor Discord](https://discord.gg/obsidianmd)
- [Visitar o fórum](https://forum.obsidian.md/)

### Reportar bugs e solicitar funcionalidades

> [!tip]- Verifique duplicatas primeiro
> Antes de solicitar uma nova funcionalidade ou reportar um bug, por favor procure entre as outras publicações para ter certeza de que alguém já não tenha enviado a mesma solicitação.

Se você quiser sugerir uma funcionalidade no Obsidian, acesse [Solicitações de funcionalidades](https://forum.obsidian.md/c/feature-requests/8).

Se você quiser reportar um bug no Obsidian, acesse [Relatórios de bugs](https://forum.obsidian.md/c/bug-reports/7). Os relatórios de bugs são movidos para o [Cemitério de bugs](https://forum.obsidian.md/c/bug-graveyard/12) depois de resolvidos.

### Coletar informações de depuração

Quando você encontrar um bug ou precisar de assistência do [[#Contatar o suporte do Obsidian|suporte do Obsidian]], fornecer informações de depuração pode ser muito útil. Veja como obtê-las:

1. Abra a [[Paleta de comandos]].
2. Digite **Mostrar Informações de Depuração**.
3. Selecione a opção destacada **Mostrar Informações de Depuração**.
4. Selecione **Copiar para a área de transferência**.
5. Cole as informações copiadas no seu relatório de bug ou e-mail para o suporte do Obsidian.

### Verificar o tempo de inicialização

Você pode verificar quanto tempo o Obsidian leva para iniciar usando o recurso **Tempo de inicialização**.

1. Abra **[[Configurações]] → Geral → Avançado**.
2. Ao lado de **Notifique se a inicialização demorar mais do que o esperado**, selecione o **ícone de cronômetro**.
3. Uma janela de **Tempo de inicialização** aparecerá, mostrando informações detalhadas de tempo:
   - **Tempo total de inicialização do aplicativo**: Tempo total de carregamento.
   - **Inicialização**: Tempo gasto carregando o aplicativo em si.
   - **Cofre**: Tempo para carregar os arquivos do seu cofre.
   - **Área de trabalho**: Tempo para restaurar abas e leiaute.
   - **Plugins nativos**: Tempo usado pelos plugins nativos ativos.
4. Você pode selecionar **Copiar para a área de transferência** para copiar o relatório para solução de problemas ou compartilhamento.

Além disso, você pode ativar **Notifique se a inicialização demorar mais do que o esperado** para receber um aviso se a inicialização estiver incomumente lenta.

### Capturar logs do console

Quando você precisar reportar um bug relacionado a um plugin do Obsidian ou quando solicitado pelo [[#Contatar o suporte do Obsidian|suporte do Obsidian]] para fornecer informações de log, talvez precise acessar o console do Obsidian de dentro do aplicativo. Veja como fazer isso com base no seu sistema operacional:

- **Windows/Linux**: `Ctrl+Shift+I`
- **macOS**: `Command+Option+I`

> [!info]+ Método de acesso alternativo
> Se estiver usando o Estilo da janela **Estilo do Obsidian**, você também pode acessar o console do Obsidian pelo menu do título.

Depois de abrir o console de desenvolvedor:

1. Selecione **console** no menu superior.
2. Escolha a opção do menu lateral **erros**. Quaisquer erros serão exibidos como `# erros`.
3. Selecione uma das mensagens de erro em vermelho.
4. Escolha a opção **Salvar como...** Isso salvará todos os erros no console.
5. Salve o arquivo de log no seu dispositivo.
6. Anexe o arquivo de log ao seu relatório de bug ou e-mail para o suporte do Obsidian.

![[help-support-console-menu.png#interface|600]]

> [!warning]+ Acesso ao console em dispositivos móveis
> Dispositivos móveis e tablets têm acesso limitado aos seus consoles de desenvolvedor. Para esses usuários, recomendamos usar o plugin da comunidade [Logstravaganza](https://obsidian.md/plugins?id=logstravaganza) para gerar automaticamente os dados de log do console em uma nota markdown.

### Contatar o suporte do Obsidian

O Obsidian oferece suporte por e-mail apenas para consultas sobre [[Licença comercial|licenças comerciais]], sua conta, pagamento e serviços adicionais ([[Introdução ao Obsidian Sync|Obsidian Sync]] e [[Introdução ao Obsidian Publish|Obsidian Publish]]). Se você precisar de ajuda com qualquer um desses tópicos, [envie um e-mail para a equipe do Obsidian](mailto:support@obsidian.md).

## Reportar um problema de segurança

Se você descobriu um problema de segurança no Obsidian, ou se suspeita que um plugin é malicioso, por favor [envie um e-mail para a equipe do Obsidian](mailto:support@obsidian.md).

## Reportar uma violação do Código de Conduta

Seja você vítima ou testemunha de uma violação do nosso [[Código de conduta da comunidade]], você pode reportar o incidente à nossa equipe de moderadores.

Reporte o incidente em um dos seguintes canais da comunidade:

- [[Código de conduta da comunidade#Reportar no Discord|Reportar no Discord]]
- [[Código de conduta da comunidade#Reportar no fórum|Reportar no fórum]]

## Contribuindo para o Obsidian

Interessado em aplicar algumas habilidades e tempo livre ao Obsidian? Aqui é onde realmente precisamos da sua ajuda:

- Ajude outros usuários do Obsidian respondendo perguntas no nosso [servidor Discord](https://discord.gg/obsidianmd), no nosso [fórum](https://forum.obsidian.md/), ou no reddit [ObsidianMD](https://old.reddit.com/r/ObsidianMD/).
- [[Desenvolvedores]], precisamos muito da sua ajuda para expandir nossa [Documentação para Desenvolvedores do Obsidian](https://github.com/obsidianmd/obsidian-developer-docs).
- Você conhece algum idioma escrito além do inglês? Considere ajudar com nossas [[Traduções]] para outros idiomas.
- Há algo nesta documentação de ajuda que está desatualizado ou confuso? Consulte o [[Guia de estilo]] e envie uma [issue e pull request](https://github.com/obsidianmd/obsidian-help/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).
- Se possível, você pode [[Contribuições financeiras|contribuir financeiramente]] utilizando um dos nossos serviços adicionais pagos.
