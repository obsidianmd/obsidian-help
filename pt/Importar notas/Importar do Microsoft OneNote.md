---
permalink: import/onenote
---
O Obsidian permite-lhe migrar facilmente as suas notas do Microsoft OneNote utilizando o [[Importador|plugin Importador]]. Isto irá converter os seus dados do OneNote em ficheiros Markdown duráveis, que pode utilizar com o Obsidian e muitas outras aplicações.

> [!Warning]
> Apenas blocos de notas pertencentes à sua conta pessoal podem ser importados. Notas partilhadas ou contas de trabalho e escolares não são suportadas.

## Importar os seus dados do OneNote para o Obsidian

Irá precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** utilizando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação de ficheiro** escolha **Microsoft OneNote**.
6. Clique em **Iniciar sessão** para abrir o seu navegador web na página de início de sessão da Microsoft. Introduza as credenciais da sua conta Microsoft que contém os seus Blocos de Notas do OneNote. Mais informações sobre o processo de início de sessão da Microsoft estão disponíveis abaixo.
7. Clique em **Aceitar** para conceder permissão ao Obsidian para visualizar os seus Blocos de Notas do OneNote.
8. Clique em **Abrir ligação** para permitir que o seu navegador o redirecione para a aplicação Obsidian.
9. Na aplicação Obsidian, o diálogo do Importador irá agora mostrar que tem sessão iniciada e listar os seus Blocos de Notas e Secções do OneNote. Selecione as secções que deseja importar.

![[OneNote-Importer-Select-Sections.png]]

10. Clique em **Importar** e aguarde até que a importação esteja concluída.
11. Está feito!

## Resolução de problemas

### Não aparecem secções nem blocos de notas

Certifique-se de que os blocos de notas que está a tentar importar estão sincronizados com o OneDrive e visíveis no OneNote Web. Devem pertencer a si (blocos de notas partilhados escritos por outros não são suportados).

Se uma secção específica estiver em falta, certifique-se de que não é uma secção bloqueada — essas são invisíveis sem remover o bloqueio primeiro.

### Notas importadas estão vazias ou com conteúdo em falta

Este problema pode ocorrer em blocos de notas que utiliza raramente. Para resolver o problema, siga estes passos:

1. Abra o [OneNote Web](https://onenote.com/notebooks) no seu navegador.
2. **Clique com o botão direito** nos Blocos de Notas que têm conteúdo em falta.
3. Selecione **Exportar Bloco de Notas** no menu.
4. **Descompacte** o ficheiro que acabou de transferir para uma pasta.
5. Carregue os seus blocos de notas do OneNote [aqui](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Abra o **Importador do Obsidian** e tente importar novamente.

Se seguiu estas dicas e o seu problema continua por resolver, é possível que haja um problema temporário com os servidores da Microsoft. Se for esse o caso, aguarde alguns minutos e tente novamente. Se o problema persistir, por favor abra um problema no [repositório GitHub do Importador do Obsidian](https://github.com/obsidianmd/obsidian-importer/issues).

## Privacidade

O plugin Importador do Obsidian utiliza [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) para autenticar com a sua conta Microsoft e importar os seus blocos de notas do OneNote. Isto concede um token de acesso de curta duração à sua conta que é utilizado apenas a partir do seu computador e nunca é armazenado. Após a importação ser concluída, pode opcionalmente revogar o token na [página de aplicações e serviços da Microsoft](https://account.live.com/consent/Manage).
