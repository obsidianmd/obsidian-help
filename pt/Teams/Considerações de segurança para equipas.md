---
permalink: teams/security
cssclasses:
  - soft-embed
---
A nossa página de [Segurança](https://obsidian.md/security) compila informações sobre como o Obsidian aborda a proteção dos seus dados. É também o local onde se encontram as auditorias de segurança realizadas por terceiros.

## Considerações

O Obsidian foi concebido para funcionar como uma aplicação offline e autónoma. O Obsidian também suporta plugins e temas personalizados. Adicionalmente, fornecemos suporte oficial e não oficial para vários serviços de sincronização de ficheiros.

Se não pretende utilizar plugins da comunidade ou temas, nem o [[Introdução ao Obsidian Sync|Obsidian Sync]] ou o [[Introdução ao Obsidian Publish|Obsidian Publish]], os seus procedimentos padrão para proteger aplicações serão aplicáveis. No entanto, se planeia utilizar qualquer uma destas funcionalidades, recomendamos que avalie cuidadosamente a sua adequação ao seu local de trabalho.

## Plugins da comunidade e temas

Por favor, reveja a página [[Segurança de plugins]] para além desta secção.

A equipa do Obsidian revê todos os plugins da comunidade e temas submetidos ao diretório oficial, através do nosso [repositório de lançamentos](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Não revemos itens da comunidade que não tenham sido submetidos ao diretório oficial.

Não temos uma loja comunitária para [[Fragmentos CSS]]. Estes ficheiros são tipicamente obtidos dentro da nossa [Comunidade Obsidian](https://obsidian.md/community) ou a partir de repositórios públicos do GitHub.

Exigimos o empacotamento de recursos em excertos CSS e temas. No entanto, fizemos uma exceção para o [Google Fonts](https://fonts.google.com/) para manter o desempenho em dispositivos móveis, onde o impacto do empacotamento de fontes é mais notório.

## Rede e acesso

Embora priorize a abordagem local-first da nossa aplicação, o Obsidian faz chamadas de rede com base nos serviços e funcionalidades que utiliza. Estas ligações de rede podem ser desativadas através de uma firewall de domínio ou bloqueio da aplicação.

O Obsidian faz estas ligações de rede através de HTTPS na porta 443.

Segue-se uma lista das ligações de rede que o Obsidian estabelece.

### Ligações originadas pelo Obsidian

- **Atualizações de acesso antecipado**: Utiliza `releases.obsidian.md`.
- **Gestão de conta e licença**: Ao aceder à sua conta Obsidian nas Definições e ao aplicar uma Licença Comercial, chamamos `api.obsidian.md`.
- **Obsidian Sync**: Utilizado para sincronizar as suas notas entre dispositivos.
	- `sync-xx.obsidian.md`, onde `xx` é um número entre 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` e `publish-xx.obsidian.md`, onde `xx` é um número.
    2. Frontend: `publish.obsidian.md`.

### Ligações originadas pelo GitHub

O Obsidian faz pedidos de rede tanto para `github.com` como para `raw.githubusercontent.com`.

- **Lançamentos públicos**: Se as atualizações automáticas estiverem ativadas, o Obsidian verifica o GitHub para lançamentos públicos.
- **Temas e plugins de terceiros**:
    - Uma verificação é realizada a cada 12 horas a partir do momento de arranque da aplicação para obter um ficheiro alojado no GitHub utilizado para "descontinuações de plugins." Este ficheiro ajuda a desativar remotamente versões específicas de plugins conhecidos por funcionarem incorretamente, causarem perda de dados, ou serem potencialmente vulneráveis ou maliciosos.
    - Plugins ativados podem gerar tráfego de rede fora do controlo do Obsidian e do GitHub.

### Outras ligações

- **Conteúdo online incorporado**: Ao abrir notas que incorporam conteúdo online, como uma imagem (`![gato](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Pedidos DNS**: Se um nome de anfitrião precisar de ser resolvido antes de estabelecer uma ligação, incluindo DNS sobre HTTPS. Consulte a [documentação do Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) para mais informações.

## Perguntas frequentes

### Segurança da conta

**O Obsidian suporta Single Sign-On (SSO)?**
O Obsidian não suporta SSO. Na maioria dos casos de utilização, o Obsidian não requer uma conta ou autenticação no seu local de trabalho, a menos que esteja a utilizar o [[Introdução ao Obsidian Publish|Obsidian Publish]] ou o [[Introdução ao Obsidian Sync|Obsidian Sync]].

**O Obsidian suporta Autenticação Multi-Fator (MFA)?**
O Obsidian suporta [[Autenticação de 2 fatores]] (2FA) para contas Obsidian, mas não suporta 2FA para abrir e utilizar a aplicação base. Os utilizadores do [[Introdução ao Obsidian Sync|Obsidian Sync]] e do [[Introdução ao Obsidian Publish|Obsidian Publish]] que tenham o 2FA ativado serão obrigados a confirmar a sua chave 2FA quando iniciarem sessão na aplicação pela primeira vez.

### Avaliações e certificações

**Aceitam avaliações de segurança da nossa empresa?**
Exigimos um montante mínimo de ordem de compra cotada antes de considerar a realização de uma avaliação de segurança. Estas avaliações são frequentemente demoradas e podem não ser aplicáveis a aplicações offline como o Obsidian, uma vez que são tipicamente orientadas para serviços baseados na nuvem.

No entanto, pode dispensar este montante de ordem de compra cotada concordando em pagar uma taxa de retenção. Por favor contacte o [[Ajuda e suporte#Contactar o suporte do Obsidian|suporte Obsidian]] para se informar sobre esta opção.

**Possuem certificações reconhecidas relacionadas com Segurança da Informação ou normas de qualidade, como ISO27001, NIST, COBIT, ou outras certificações ISO ou CSA?**
Não neste momento. Pode ser algo que exploremos no futuro, mas por agora, o nosso foco está nas nossas [auditorias de segurança](https://obsidian.md/security).
