---
permalink: import/onenote
---
O Obsidian permite-lhe migrar facilmente as suas notas do Microsoft OneNote utilizando o [[Importador|plugin Importador]]. Isto irá converter os seus dados do OneNote em ficheiros Markdown duráveis, que pode utilizar com o Obsidian e muitas outras aplicações.

O Obsidian oferece duas formas de importar os seus dados do OneNote:

1. **Conta Microsoft** inicia sessão na sua conta Microsoft e importa os blocos de notas que estão sincronizados com o OneDrive. Requer ligação à internet.
2. **Importação de ficheiros** utiliza os ficheiros de exportação do OneNote (`.onepkg` e `.one`). Não requer conta nem ligação à internet, e funciona para blocos de notas que nunca foram sincronizados.

## Importar da sua conta Microsoft

> [!Warning]
> Apenas blocos de notas pertencentes à sua conta podem ser importados. Blocos de notas que outras pessoas partilharam consigo não são suportados, e uma conta de trabalho ou escolar pode necessitar que a sua organização aprove o acesso.

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
10. Clique em **Importar** e aguarde até que a importação esteja concluída.
11. Está feito!

Se os seus blocos de notas pertencem a uma conta de trabalho ou escolar, o OneNote pode recusar o acesso do plugin a eles após iniciar sessão. Quando isso acontece, um botão **Usar acesso de trabalho ou escola** aparece ao lado de **Terminar sessão**. Utilize-o para iniciar sessão novamente com a permissão mais ampla que essas contas necessitam. A sua organização poderá ter de aprovar essa permissão antes de funcionar.

### Resolução de problemas

#### Não aparecem secções nem blocos de notas

Certifique-se de que os blocos de notas que está a tentar importar estão sincronizados com o OneDrive e visíveis no OneNote Web. Devem pertencer a si (blocos de notas partilhados escritos por outros não são suportados).

Se uma secção específica estiver em falta, certifique-se de que não é uma secção bloqueada, pois essas são invisíveis sem remover o bloqueio primeiro.

Se for um bloco de notas de trabalho ou escolar, consulte a nota sobre **Usar acesso de trabalho ou escola** acima.

#### Notas importadas estão vazias ou com conteúdo em falta

Este problema pode ocorrer em blocos de notas que utiliza raramente. Para resolver o problema, siga estes passos:

1. Abra o [OneNote Web](https://onenote.com/notebooks) no seu navegador.
2. **Clique com o botão direito** nos Blocos de Notas que têm conteúdo em falta.
3. Selecione **Exportar Bloco de Notas** no menu.
4. **Descompacte** o ficheiro que acabou de transferir para uma pasta.
5. Carregue os seus blocos de notas do OneNote [aqui](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Abra o **Importador do Obsidian** e tente importar novamente.

Se seguiu estas dicas e o seu problema continua por resolver, é possível que haja um problema temporário com os servidores da Microsoft. Se for esse o caso, aguarde alguns minutos e tente novamente. Se o problema persistir, por favor abra um problema no [repositório GitHub do Importador do Obsidian](https://github.com/obsidianmd/obsidian-importer/issues).

## Importar ficheiros do OneNote (.one, .onepkg)

A importação de ficheiros é uma forma alternativa de importar os seus dados do OneNote. Lê os ficheiros de exportação que o próprio OneNote cria, por isso não precisa de conta Microsoft nem de ligação à internet. Utilize-a para blocos de notas armazenados apenas no seu computador, blocos de notas que a sua conta não consegue alcançar, ou quando prefere não iniciar sessão.

### Exportar os seus blocos de notas do OneNote

Recomendamos exportar cada bloco de notas como um **Pacote OneNote** (`.onepkg`). Um pacote contém todas as secções do bloco de notas, permitindo exportar e importar um bloco de notas num único passo, e o Importador listará as suas secções para poder escolher.

A exportação está disponível apenas no **OneNote para Windows**, a aplicação de ambiente de trabalho que vem com o Microsoft 365. A aplicação OneNote para Mac e a antiga aplicação OneNote para Windows 10 não conseguem exportar para estes formatos.

1. Abra o bloco de notas que deseja exportar no OneNote para Windows.
2. Vá a **Ficheiro → Exportar**.
3. Em **Exportar atual** escolha **Bloco de Notas**.
4. Em **Selecionar formato** escolha **Pacote OneNote (\*.onepkg)**.
5. Clique em **Exportar** e escolha onde guardar o ficheiro.
6. Repita para cada bloco de notas que deseja importar.

Para exportar uma única secção, escolha **Secção** no passo 3 e **Secção OneNote 2010-2016 (\*.one)** no passo 4.

Também pode importar os ficheiros de secção que o OneNote já mantém no disco, sem exportar nada:

- Blocos de notas armazenados no seu computador estão em `Documentos\OneNote Notebooks`, um ficheiro `.one` por secção.
- Cópias de segurança de blocos de notas sincronizados estão em `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importar os seus ficheiros do OneNote

Irá precisar do plugin oficial [[Importador]] do Obsidian, que pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Definições]]**.
2. Vá a **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** utilizando a paleta de comandos ou o ícone na barra de ferramentas.
5. Em **Formatação de ficheiro** escolha **Microsoft OneNote (.one, .onepkg)**.
6. Escolha os ficheiros `.onepkg` e `.one` que deseja importar. Pode selecionar mais do que um ficheiro de cada vez, para que todos os seus blocos de notas possam ser importados juntos.
7. Em **Secções a importar** são listadas as secções encontradas nesses ficheiros, com tudo selecionado. Desmarque o que não quiser.
8. Opcionalmente, escolha uma **Pasta de destino** para a importação, onde os anexos devem ser guardados, e o que deve acontecer com **Notas existentes** se importar o mesmo bloco de notas novamente.
9. Clique em **Importar** e aguarde até que a importação esteja concluída.
10. Está feito!

Cada secção torna-se uma pasta, e cada página dentro dela torna-se uma nota. Uma subpágina é guardada numa pasta com o nome da página acima dela, o que mantém a estrutura que o OneNote mostrava e evita que duas subpáginas com o mesmo nome colidam. As páginas no caixote da reciclagem do bloco de notas não são importadas.

### Limitações

- Secções protegidas por palavra-passe são armazenadas encriptadas, e as suas páginas são ignoradas. Remova a palavra-passe no OneNote e exporte novamente para as importar.
- Ficheiros protegidos por direitos só podem ser abertos por uma conta que a política permita, e não podem ser lidos pelo Importador.

## Privacidade

Se optar por importar utilizando a sua Conta Microsoft, o plugin Importador do Obsidian utiliza [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) para autenticar e importar os seus blocos de notas do OneNote. Isto concede um token de acesso de curta duração à sua conta que é utilizado apenas a partir do seu computador e nunca é armazenado. Após a importação ser concluída, pode opcionalmente revogar o token na [página de aplicações e serviços da Microsoft](https://account.live.com/consent/Manage).

A importação de ficheiros nunca se liga à Microsoft: os ficheiros que escolhe são lidos no seu computador, sem qualquer ligação de rede.
