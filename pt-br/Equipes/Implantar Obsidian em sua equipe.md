---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
O Obsidian funciona como um aplicativo local no dispositivo de cada membro da sua equipe. Ele foi projetado para funcionar tanto online quanto offline, de forma segura e privada, dando a você total controle sobre os dados da sua equipe. O Obsidian não está disponível como um aplicativo baseado na web, portanto você precisará implantar o aplicativo para os membros da sua equipe.

## Instalar e atualizar o Obsidian

Sua equipe pode baixar o Obsidian na nossa [página de Download](https://obsidian.md/pt-BR/download). As versões também estão disponíveis na nossa [página de releases no GitHub](https://github.com/obsidianmd/obsidian-releases/releases), que inclui links para [o changelog](https://obsidian.md/pt-BR/changelog/).

> [!tip] Para usuários do Windows que precisam de um instalador de sistema, o `.exe` Universal inclui a opção de instalar o Obsidian para todos os usuários.

Se as atualizações automáticas estiverem ativadas no aplicativo, versões futuras serão instaladas automaticamente quando os usuários reiniciarem o Obsidian. Além disso, recomendamos realizar periodicamente [[Atualizar o Obsidian#Atualizações do instalador|atualizações do instalador]] para receber as últimas atualizações do framework Electron, incluindo correções de segurança.

Se você está procurando como limitar o acesso à rede do Obsidian durante esse processo, consulte [[Considerações de segurança para equipes#Rede e acesso|rede e acesso]].

## Personalizando o Obsidian

O Obsidian é fácil de modificar para atender às necessidades da sua equipe. Com uma API extensa e um grande ecossistema de usuários, o Obsidian oferece acesso a inúmeros plugins, temas e ferramentas complementares.

Para questões relacionadas à segurança sobre esses tópicos, consulte [[Considerações de segurança para equipes]].

### Pastas de configuração

A [[Pasta de configuração]] é onde um [[Glossário#Cofre|cofre]] do Obsidian armazena suas configurações do aplicativo. Por padrão, esta pasta é chamada `.obsidian`, mas você tem a flexibilidade de [[Pasta de configuração#Alterando sua pasta de configuração|alterar a pasta de configuração]] de acordo com sua preferência.

Recomendamos criar um modelo padronizado da pasta de configuração para ser implantado nos dispositivos da sua equipe.

### Plugins

[[Plugins nativos]] são recursos opcionais criados pela equipe do Obsidian. Esses recursos são integrados no código base do aplicativo principal e podem ser ativados ou desativados.

[[Plugins da comunidade]] são recursos de terceiros adicionados ao aplicativo Obsidian e podem ser instalados pelo diretório da comunidade. Plugins de terceiros utilizam a [API do Obsidian](https://github.com/obsidianmd/obsidian-api). Os plugins estão localizados na pasta `.obsidian/plugins` dentro de um cofre e podem ser instalados manualmente nesse local.

### Temas e fragmentos

[[Temas]] alteram visualmente a interface do Obsidian. Assim como os plugins, os temas podem ser baixados do nosso diretório da comunidade. Os temas estão localizados na pasta `.obsidian/themes` dentro de um cofre.

[[Trechos CSS|Fragmentos]] são pequenos arquivos `.css` que modificam visualmente aspectos da interface do Obsidian. Em alguns casos, também podem adicionar melhorias funcionais. Os fragmentos estão localizados na pasta `.obsidian/snippets` dentro de um cofre.

## Perguntas frequentes

Para questões sobre gerenciamento de contas e segurança, consulte [[Considerações de segurança para equipes#Segurança da conta|segurança da conta]].

### Implantação

**Posso implantar licenças em múltiplas instalações?**
Atualmente, não oferecemos suporte à implantação de licenças por meio de um script de implantação, como em um arquivo `.json`. Se você tem interesse nesse recurso para sua equipe, envie uma [solicitação de recurso](https://forum.obsidian.md/c/feature-requests/8).

**O Obsidian pode bloquear certos recursos ou configurações por meio de uma configuração ou flag do aplicativo?**
Atualmente, você pode fazer isso bloqueando o acesso de edição à pasta `.obsidian`, ou a arquivos e pastas específicos dentro dela, conforme descrito acima. Se você tem interesse em mais controles de acesso para sua equipe, envie uma [solicitação de recurso](https://forum.obsidian.md/c/feature-requests/8).
