---
permalink: import/onenote
cssclasses:
  - soft-embed
---
O Obsidian permite que você migre facilmente suas notas do Microsoft OneNote usando o [[Importador|plugin Importador]]. Isso converterá seus dados do OneNote em arquivos Markdown duráveis, que você pode usar com o Obsidian e muitos outros aplicativos.

O Obsidian oferece duas maneiras de importar seus dados do OneNote:

1. **Conta Microsoft** faz login na sua conta Microsoft e importa os cadernos que estão sincronizados com o OneDrive. Requer conexão com a internet.
2. **Importação de arquivo** usa os arquivos de exportação do OneNote (`.onepkg` e `.one`). Não requer conta ou conexão com a internet, e funciona para cadernos que nunca foram sincronizados.

## Importar da sua conta Microsoft

> [!Warning]
> Apenas cadernos pertencentes à sua conta podem ser importados. Cadernos que outras pessoas compartilharam com você não são suportados, e uma conta de trabalho ou escolar pode precisar da aprovação da sua organização para conceder acesso.

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
10. Clique em **Importar** e aguarde até que a importação seja concluída.
11. Pronto!

Se seus cadernos pertencem a uma conta de trabalho ou escolar, o OneNote pode recusar o acesso do plugin a eles após o login. Quando isso acontecer, um botão **Usar acesso de trabalho ou escola** aparecerá ao lado de **Sair**. Use-o para fazer login novamente com a permissão mais ampla que essas contas precisam. Sua organização pode precisar aprovar essa permissão antes que funcione.

### Solução de problemas

#### Nenhuma seção ou caderno aparece

Certifique-se de que os cadernos que você está tentando importar estão sincronizados com o OneDrive e visíveis no OneNote Web. Eles devem pertencer a você (cadernos compartilhados escritos por outras pessoas não são suportados).

Se uma seção específica estiver faltando, certifique-se de que não é uma seção bloqueada, pois essas ficam invisíveis sem remover o bloqueio primeiro.

Se for um caderno de trabalho ou escola, veja a nota sobre **Usar acesso de trabalho ou escola** acima.

#### Notas importadas estão vazias ou com conteúdo faltando

Este problema pode ocorrer em cadernos que você raramente usa. Para resolver o problema, siga estas etapas:

1. Abra o [OneNote Web](https://onenote.com/notebooks) no seu navegador.
2. **Clique com o botão direito** nos Cadernos que estão com conteúdo faltando.
3. Selecione **Exportar Caderno** no menu.
4. **Descompacte** o arquivo que você acabou de baixar em uma pasta.
5. Faça upload dos seus cadernos do OneNote [aqui](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Abra o **Importador do Obsidian** e tente importar novamente.

Se você seguiu essas dicas e seu problema continua sem solução, é possível que haja um problema temporário com os servidores da Microsoft. Se for esse o caso, aguarde alguns minutos e tente novamente. Se o problema persistir, abra uma issue no [repositório GitHub do Obsidian Importer](https://github.com/obsidianmd/obsidian-importer/issues).

## Importar arquivos do OneNote (.one, .onepkg)

A importação de arquivo é uma maneira alternativa de importar seus dados do OneNote. Ela lê os arquivos de exportação que o próprio OneNote gera, então não precisa de conta Microsoft nem de conexão com a internet. Use-a para cadernos armazenados apenas no seu computador, cadernos que sua conta não consegue acessar, ou quando você prefere não fazer login.

### Exportar seus cadernos do OneNote

Recomendamos exportar cada caderno como um **Pacote do OneNote** (`.onepkg`). Um pacote contém todas as seções do caderno, então você pode exportar e importar um caderno em uma única etapa, e o Importador listará suas seções para você escolher.

A exportação está disponível apenas no **OneNote para Windows**, o aplicativo de desktop que vem com o Microsoft 365. O aplicativo OneNote para Mac e o antigo aplicativo OneNote para Windows 10 não podem exportar nesses formatos.

1. Abra o caderno que deseja exportar no OneNote para Windows.
2. Vá para **Arquivo → Exportar**.
3. Em **Exportar atual** escolha **Caderno**.
4. Em **Selecionar formato** escolha **Pacote do OneNote (\*.onepkg)**.
5. Clique em **Exportar** e escolha onde salvar o arquivo.
6. Repita para cada caderno que deseja importar.

Para exportar uma única seção, escolha **Seção** na etapa 3 e **Seção do OneNote 2010-2016 (\*.one)** na etapa 4.

Você também pode importar os arquivos de seção que o OneNote já mantém no disco, sem exportar nada:

- Cadernos armazenados no seu computador estão em `Documentos\Blocos de Anotações do OneNote`, um arquivo `.one` por seção.
- Backups de cadernos sincronizados estão em `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importar seus arquivos do OneNote

Você precisará do plugin oficial [[Importador]] do Obsidian, que você pode [instalar aqui](obsidian://show-plugin?id=obsidian-importer).

1. Abra as **[[Configurações]]**.
2. Vá para **Plugins da comunidade** e [instale o Importador](obsidian://show-plugin?id=obsidian-importer).
3. Ative o plugin Importador.
4. Abra o plugin **Importador** usando a paleta de comandos ou o ícone do menu lateral.
5. Em **Formatar arquivo** escolha **Microsoft OneNote (.one, .onepkg)**.
6. Escolha os arquivos `.onepkg` e `.one` que deseja importar. Você pode selecionar mais de um arquivo por vez, assim todos os seus cadernos podem ser importados juntos.
7. Em **Seções para importar** as seções encontradas nesses arquivos são listadas, com tudo marcado. Desmarque o que não quiser.
8. Opcionalmente, escolha uma **Pasta de saída** para a importação, onde os anexos devem ser salvos e o que deve acontecer com **Notas existentes** se você importar o mesmo caderno novamente.
9. Clique em **Importar** e aguarde até que a importação seja concluída.
10. Pronto!

Cada seção se torna uma pasta, e cada página nela se torna uma nota. Uma subpágina é salva em uma pasta com o nome da página acima dela, o que mantém a estrutura que o OneNote mostrava e evita que duas subpáginas com o mesmo nome colidam. Páginas na lixeira do caderno não são importadas.

### Limitações

- Seções protegidas por senha são armazenadas criptografadas, e suas páginas são ignoradas. Remova a senha no OneNote e exporte novamente para importá-las.
- Arquivos protegidos por direitos só podem ser abertos por uma conta que a política permita, e não podem ser lidos pelo Importador.

## Privacidade

Se você optar por importar usando sua Conta Microsoft, o plugin Importador do Obsidian usa [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) para autenticar e importar seus cadernos do OneNote. Isso concede um token de acesso de curto prazo à sua conta, que é usado apenas a partir do seu computador e nunca é armazenado. Após a importação ser concluída, você pode opcionalmente revogar o token na [página de aplicativos e serviços da Microsoft](https://account.live.com/consent/Manage).

A importação de arquivo nunca se conecta à Microsoft: os arquivos que você seleciona são lidos no seu computador, sem nenhuma conexão de rede.
