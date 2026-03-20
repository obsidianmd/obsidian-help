---
permalink: import/onenote
---
O Obsidian permite que você migre facilmente suas notas do Microsoft OneNote usando o [[Importador|plugin Importador]]. Isso converterá seus dados do OneNote em arquivos Markdown duráveis, que você pode usar com o Obsidian e muitos outros aplicativos.

> [!Warning]
> Apenas cadernos pertencentes à sua conta pessoal podem ser importados. Notas compartilhadas ou contas de trabalho e escolares não são suportadas.

## Importe seus dados do OneNote para o Obsidian

Você precisará do plugin oficial [[Importador]] do Obsidian, que você pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone do menu lateral.
5. Em **Formatar arquivo** escolha **Microsoft OneNote**.
6. Clique em **Entrar** para abrir seu navegador web na página de login da Microsoft. Insira as credenciais da sua conta Microsoft que contém seus Cadernos do OneNote. Mais informações sobre o processo de login da Microsoft estão disponíveis abaixo.
7. Clique em **Aceitar** para conceder ao Obsidian permissão para visualizar seus Cadernos do OneNote.
8. Clique em **Abrir link** para permitir que seu navegador redirecione você para o aplicativo Obsidian.
9. No aplicativo Obsidian, a caixa de diálogo do Importador agora exibirá que você está conectado e listará seus Cadernos e Seções do OneNote. Marque as seções que deseja importar.

![[OneNote-Importer-Select-Sections.png]]

10. Clique em **Importar** e aguarde até que a importação seja concluída.
11. Pronto!

## Solução de problemas

### Nenhuma seção ou caderno aparece

Certifique-se de que os cadernos que você está tentando importar estão sincronizados com o OneDrive e visíveis no OneNote Web. Eles devem pertencer a você (cadernos compartilhados escritos por outras pessoas não são suportados).

Se uma seção específica estiver faltando, certifique-se de que não é uma seção bloqueada — essas ficam invisíveis sem remover o bloqueio primeiro.

### Notas importadas estão vazias ou com conteúdo faltando

Este problema pode ocorrer em cadernos que você raramente usa. Para resolver o problema, siga estas etapas:

1. Abra o [OneNote Web](https://onenote.com/notebooks) no seu navegador.
2. **Clique com o botão direito** nos Cadernos que estão com conteúdo faltando.
3. Selecione **Exportar Caderno** no menu.
4. **Descompacte** o arquivo que você acabou de baixar em uma pasta.
5. Faça upload dos seus cadernos do OneNote [aqui](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Abra o **Importador do Obsidian** e tente importar novamente.

Se você seguiu essas dicas e seu problema continua sem solução, é possível que haja um problema temporário com os servidores da Microsoft. Se for esse o caso, aguarde alguns minutos e tente novamente. Se o problema persistir, abra uma issue no [repositório GitHub do Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Privacidade

O plugin Importador do Obsidian usa [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) para autenticar com sua conta Microsoft e importar seus cadernos do OneNote. Isso concede um token de acesso de curto prazo à sua conta, que é usado apenas a partir do seu computador e nunca é armazenado. Após a importação ser concluída, você pode opcionalmente revogar o token na [página de aplicativos e serviços da Microsoft](https://account.live.com/consent/Manage).
