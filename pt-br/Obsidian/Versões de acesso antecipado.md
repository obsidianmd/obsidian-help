---
permalink: early-access
---
Obtenha acesso antecipado às próximas versões ativando _versões de acesso antecipado_. As versões de acesso antecipado estão disponíveis apenas para usuários com uma [[Licença Catalyst]].

> [!warning] Aviso
> As versões de acesso antecipado são versões beta. Elas incluem novos recursos, mas podem ser menos estáveis. Não ative as versões de acesso antecipado se você preferir uma experiência mais confiável.
> 
> Esteja ciente de que os desenvolvedores de plugins da comunidade e temas recebem as versões de acesso antecipado ao mesmo tempo que todos os outros. Tenha paciência com os desenvolvedores que precisam fazer atualizações para dar suporte a novos recursos.

## Ativar versões de acesso antecipado para desktop

Para receber versões de acesso antecipado assim que estiverem disponíveis, siga estes passos:

1. Abra **[[Configurações]]**.
2. Na barra lateral, selecione **Geral**.
3. Em **Conta → Sua conta**, selecione **Entrar**.
4. Em **E-mail**, digite seu e-mail.
5. Em **Senha**, digite sua senha.
6. Após entrar, retorne a **[[Configurações]]**.
7. Na barra lateral, selecione **Geral**.
8. Em **Aplicativo**, ative **Receber compilações internas**.
9. Clique em **Verificar por atualizações** e depois em **Reiniciar**.

## Instalar versões de acesso antecipado em dispositivos móveis

Para encontrar instruções sobre como instalar versões de acesso antecipado no seu dispositivo móvel, siga estes passos:

1. Baixe e instale o [Discord](<https://discord.com>).
2. Entre no [servidor do Obsidian no Discord](https://discord.gg/obsidianmd).
3. [[Licença Catalyst#Obtenha seu selo do Discord|Obtenha seu selo do Discord]] para acessar os canais internos.
4. No canal `#insider-welcome`, você encontrará instruções para acessar seu download com base no tipo do seu dispositivo.

## Relatar problemas e outras avaliações

Se você descobrir um problema em uma versão de acesso antecipado, considere relatá-lo à equipe do Obsidian. Antes de relatar um problema, pesquise no [fórum](https://forum.obsidian.md/) ou no Discord para ver se alguém já o relatou.

Para relatar um problema, use um dos seguintes canais:

- No Discord, relate o problema no respectivo canal `#insider-release`.
- No fórum, crie um novo tópico em [Bug reports](https://forum.obsidian.md/c/bug-reports/7).

Ao relatar um problema, inclua a versão da compilação e o sistema operacional em que está executando. Você pode encontrar a versão da compilação em **[[Configurações]] → Sobre → Aplicativo → Versão atual**.

## Voltar para versões públicas no desktop

Para voltar a usar versões públicas (não de acesso antecipado) no desktop:

1. Desative as versões de acesso antecipado.
   1. Abra **[[Configurações]]**.
   2. Na barra lateral, selecione **Geral**.
   3. Em **Aplicativo**, desative **Receber compilações internas**.
2. Feche o Obsidian.
3. Exclua o arquivo `obsidian-VERSION.asar`, onde `VERSION` é a versão do Obsidian.
   - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Reinicie o Obsidian.

## Voltar para versões públicas no celular

Para voltar a usar versões públicas (não de acesso antecipado) no celular:

1. Faça backup dos dados do seu cofre
2. Desinstale o Obsidian
3. Reinstale o Obsidian pela Play Store ou Apple App Store
4. Restaure os dados do seu cofre a partir dos seus backups
5. Abra o Obsidian
