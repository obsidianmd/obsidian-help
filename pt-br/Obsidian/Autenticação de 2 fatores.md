---
permalink: 2fa
---
Se você tem uma [conta Obsidian](https://obsidian.md/account), pode ativar a autenticação de dois fatores (2FA) para proteger sua conta com uma segunda etapa de verificação.

## Ativar 2FA

- Entre na [sua conta Obsidian](https://obsidian.md/account/profile) pelo seu navegador web.
- Na seção **Perfil**, vá até **Autenticação de 2 fatores** e selecione **Ativar**.
- Uma janela pop-up aparecerá solicitando que você conecte um aplicativo autenticador com um **código QR** ou uma **chave de configuração**.

> [!hint]- Aplicativos de autenticação populares
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [Chaveiro iCloud](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Uma vez conectado, seu aplicativo autenticador fornecerá um código de seis dígitos. Insira esse código abaixo da seção do **código QR/chave de configuração**, no passo 3.
- Por fim, insira sua senha atual.
- Selecione **Concluir configuração**.
- A janela pop-up será substituída por uma janela de confirmação com seus códigos de recuperação. Por favor, baixe seus códigos de recuperação, pois você precisará deles para desbloquear sua conta.

Seu 2FA está agora configurado.

> [!warning]- Backups do código QR/chave de configuração
> Se você decidir manter um backup do seu **código QR** ou **chave de configuração** além dos seus códigos de recuperação, recomendamos fortemente mantê-lo em um sistema protegido por senha.

## Gerar códigos de recuperação

Se você ativou o 2FA antes dos códigos de recuperação estarem disponíveis, ou se deseja atualizar seus códigos de recuperação, siga estes passos:

- Entre na [sua conta Obsidian](https://obsidian.md/account/profile) pelo seu navegador web.
- Ao lado de Autenticação de 2 fatores, selecione **Atualizar códigos de recuperação**.
- Na janela pop-up, insira sua **senha** e o **código de 6 dígitos do autenticador**.
- Uma janela de confirmação exibirá seus códigos de recuperação. Você tem duas opções:
    - **Copiar códigos de recuperação**: Copie os códigos para colar em outro lugar.
    - **Baixar códigos de recuperação**: Baixe um arquivo `obsidian-recovery-codes.txt` contendo seus códigos.
- Selecione **Entendi** para fechar a janela pop-up.

Você pode usar um código de recuperação **uma única vez** no lugar do **código de 6 dígitos do autenticador**. Você também pode atualizar seus códigos de recuperação a qualquer momento.

## Desativar 2FA

- Entre na [sua conta Obsidian](https://obsidian.md/account/profile) pelo seu navegador web.
- Na seção **Perfil**, vá até **Autenticação de 2 fatores** e selecione **Desativar**.
- Insira sua senha do Obsidian.
- Insira o código atual de seis dígitos do seu aplicativo de autenticação.
- Selecione **Desativar 2FA**.
- Você será levado de volta à tela de gerenciamento da conta.

A configuração de **Autenticação de 2 fatores** mostrará novamente um botão **Ativar**, indicando que o 2FA foi desativado.

## Perguntas frequentes

**Ativei o 2FA. Serei desconectado dos meus dispositivos Obsidian atuais?**
Não. Ativar o 2FA não desconecta você de todos os lugares, por conveniência. Se precisar, você pode fazer isso manualmente pela página da sua conta e, em seguida, entrar novamente em cada um dos seus dispositivos.

**Ativei e depois desativei o 2FA. Gostaria de configurá-lo novamente. Posso usar o código QR ou a chave de configuração original?**
Não. Você receberá um novo **código QR** e uma nova **chave de configuração** toda vez que iniciar uma nova configuração do 2FA.

**Ativei o 2FA. Ainda não me foi solicitado após várias tentativas de logout/login. Está funcionando?**
O cache do seu navegador pode estar permitindo que você pareça estar fazendo alterações na página (como entrar ou sair) quando na verdade está acessando os dados armazenados. Tente usar uma janela de navegação privada para entrar e confirmar que o 2FA está funcionando.

Se continuar enfrentando esse comportamento, por favor [envie um relatório de bug](https://forum.obsidian.md/c/bug-reports/7).

**Perdi meus códigos de recuperação, autenticador e tudo o que é necessário para entrar na minha conta. O que faço?**

Se você perdeu seus códigos de recuperação e autenticador, por favor envie um e-mail para [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) para obter assistência na recuperação do acesso à sua conta.
