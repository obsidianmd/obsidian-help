---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
O Obsidian funciona como uma aplicação local em cada um dos dispositivos dos membros da sua equipa. Foi concebido para funcionar tanto online como offline, de forma segura e privada, e para lhe dar total controlo sobre os dados da sua equipa. O Obsidian não está disponível como aplicação baseada na web, pelo que terá de implementar a aplicação nos dispositivos dos membros da sua equipa.

## Instalar e atualizar o Obsidian

A sua equipa pode transferir o Obsidian a partir da nossa [página de Transferências](https://obsidian.md/download). Os lançamentos também estão disponíveis na nossa [página de lançamentos no GitHub](https://github.com/obsidianmd/obsidian-releases/releases), que inclui ligações para [o registo de alterações](https://obsidian.md/changelog/).

> [!tip] Para utilizadores de Windows que necessitem de um instalador de sistema, o `.exe` Universal inclui a opção de instalar o Obsidian para todos os utilizadores.

Se as atualizações automáticas estiverem ativadas na aplicação, as versões futuras serão instaladas automaticamente quando os utilizadores reiniciarem o Obsidian. Além disso, recomendamos que realize periodicamente [[Atualizar Obsidian#Atualizações do instalador|atualizações do instalador]] para receber as últimas atualizações do framework Electron, incluindo correções de segurança.

Se pretende saber como limitar o acesso à rede do Obsidian durante este processo, consulte [[Considerações de segurança para equipas#Rede e acesso|rede e acesso]].

## Personalizar o Obsidian

O Obsidian é fácil de modificar para se adequar às necessidades da sua equipa. Com uma API extensiva e um grande ecossistema de utilizadores, o Obsidian oferece acesso a inúmeros plugins, temas e ferramentas complementares.

Para questões relacionadas com a segurança sobre estes tópicos, consulte [[Considerações de segurança para equipas]].

### Pastas de configuração

A [[Pasta de configuração]] é onde um [[Glossário#Cofre|cofre]] do Obsidian armazena as suas definições da aplicação. Por predefinição, esta pasta chama-se `.obsidian`, mas tem a flexibilidade de [[Pasta de configuração#Alterar a sua pasta de configuração|alterar a pasta de configuração]] de acordo com a sua preferência.

Recomendamos criar um modelo padronizado da pasta de configuração para ser implementado nos dispositivos da sua equipa.

### Plugins

Os [[Plugins Base]] são funcionalidades opcionais criadas pela equipa do Obsidian. Estas funcionalidades estão integradas no código-fonte da aplicação principal e podem ser ativadas ou desativadas.

Os [[Plugins da comunidade]] são funcionalidades de terceiros adicionadas à aplicação Obsidian, e podem ser instalados através do diretório da comunidade. Os plugins de terceiros utilizam a [API do Obsidian](https://github.com/obsidianmd/obsidian-api). Os plugins estão localizados na pasta `.obsidian/plugins` dentro de um cofre, e podem ser instalados manualmente nesta localização.

### Temas e excertos

Os [[Temas]] alteram visualmente a interface do Obsidian. Tal como os plugins, os temas podem ser transferidos a partir do nosso diretório da comunidade. Os temas estão localizados na pasta `.obsidian/themes` dentro de um cofre.

Os [[Fragmentos CSS|Excertos]] são pequenos ficheiros `.css` que modificam visualmente aspetos da interface do Obsidian. Em alguns casos, podem também adicionar melhorias funcionais. Os excertos estão localizados na pasta `.obsidian/snippets` dentro de um cofre.

## Perguntas frequentes

Para questões sobre gestão de contas e segurança, consulte [[Considerações de segurança para equipas#Segurança da conta|segurança da conta]].

### Implementação

**Posso implementar licenças em múltiplas instalações?**
Atualmente, não suportamos a implementação de licenças através de um script de implementação, como num ficheiro `.json`. Se está interessado nesta funcionalidade para a sua equipa, por favor submeta um [pedido de funcionalidade](https://forum.obsidian.md/c/feature-requests/8).

**O Obsidian pode bloquear certas funcionalidades ou configurações através de uma definição ou flag da aplicação?**
Atualmente, pode fazê-lo bloqueando o acesso de edição à pasta `.obsidian`, ou a ficheiros e pastas específicos dentro dela, descritos acima. Se está interessado em mais controlos de acesso para a sua equipa, por favor submeta um [pedido de funcionalidade](https://forum.obsidian.md/c/feature-requests/8).
