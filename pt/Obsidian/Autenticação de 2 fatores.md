---
permalink: 2fa
---
Se tem uma [conta Obsidian](https://obsidian.md/account) pode ativar a autenticação de dois fatores (2FA) para proteger a sua conta com um segundo passo de verificação.

## Ativar 2FA

- Entre na [sua conta Obsidian](https://obsidian.md/account/profile) a partir do seu navegador web.
- Na secção **Perfil**, vá a **2-factor authentication** e selecione **Ativar**.
- Aparecerá uma janela pop-up a solicitar que conecte uma aplicação de autenticação com um **código QR** ou uma **chave de configuração**.

> [!hint]- Aplicações de autenticação populares
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Uma vez conectada, a sua aplicação de autenticação fornecerá um código de seis dígitos. Introduza esse código abaixo da secção do **código QR/chave de configuração**, no passo 3.
- Por fim, introduza a sua palavra-passe atual.
- Selecione **Complete set up**.
- A janela pop-up será substituída por uma janela de confirmação e os seus códigos de recuperação. Por favor transfira os seus códigos de recuperação, pois precisará deles para desbloquear a sua conta.

A sua 2FA está agora configurada.

> [!warning]- Cópias de segurança do código QR/chave de configuração
> Se decidir manter uma cópia de segurança do seu **código QR** ou **chave de configuração** além dos seus códigos de recuperação, recomendamos fortemente que os guarde num sistema encriptado com palavra-passe.

## Gerar códigos de recuperação

Se ativou a 2FA antes de os códigos de recuperação estarem disponíveis, ou se pretende renovar os seus códigos de recuperação, siga estes passos:

- Entre na [sua conta Obsidian](https://obsidian.md/account/profile) a partir do seu navegador web.
- Junto a 2-factor authentication, selecione **Refresh recovery codes**.
- Na janela pop-up, introduza a sua **palavra-passe** e o **código de 6 dígitos do autenticador**.
- Uma janela de confirmação apresentará os seus códigos de recuperação. Tem duas opções:
    - **Copy recovery codes**: Copiar os códigos para colar noutro local.
    - **Download recovery codes**: Transferir um ficheiro `obsidian-recovery-codes.txt` contendo os seus códigos.
- Selecione **Got it** para fechar a janela pop-up.

Pode usar um código de recuperação **uma vez** em vez do seu **código de 6 dígitos do autenticador**. Também pode renovar os seus códigos de recuperação a qualquer momento.

## Desativar 2FA

- Entre na [sua conta Obsidian](https://obsidian.md/account/profile) a partir do seu navegador web.
- Na secção **Perfil**, vá a **2-factor authentication** e selecione **Desativar**.
- Introduza a sua palavra-passe do Obsidian.
- Introduza o código atual de seis dígitos da sua aplicação de autenticação.
- Selecione **Disable 2FA**.
- Será redirecionado para o ecrã de gestão de conta.

A definição **2-factor authentication** voltará a mostrar um botão **Ativar**, indicando que a 2FA foi desativada.

## FAQ

**Ativei a 2FA. Serei desconectado dos meus dispositivos Obsidian atuais?**
Não. Ativar a 2FA não o desconecta de todos os locais, por conveniência. Se precisar, pode fazê-lo manualmente a partir da sua página de conta e, em seguida, iniciar sessão novamente em cada um dos seus dispositivos.

**Ativei e depois desativei a 2FA. Gostaria de configurá-la novamente. Posso usar o código QR ou a chave de configuração originais?**
Não. Será fornecido um novo **código QR** e uma nova **chave de configuração** cada vez que iniciar uma nova configuração de 2FA.

**Ativei a 2FA. Ainda não me foi solicitada após várias tentativas de terminar/iniciar sessão. Está a funcionar?**
A cache do seu navegador pode estar a permitir que pareça que está a fazer alterações na página (como iniciar ou terminar sessão) quando na realidade está a aceder aos dados armazenados. Tente usar uma janela de navegação privada para iniciar sessão e confirmar que a 2FA está a funcionar.

Se continuar a experienciar este comportamento, por favor [submeta um relatório de erro](https://forum.obsidian.md/c/bug-reports/7).

**Perdi os meus códigos de recuperação, autenticador e tudo o que é necessário para entrar na minha conta. O que faço?**

Se perdeu os seus códigos de recuperação e autenticador, por favor envie um e-mail para [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) para obter assistência na recuperação do acesso à sua conta.
