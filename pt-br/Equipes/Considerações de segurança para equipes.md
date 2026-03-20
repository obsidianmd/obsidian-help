---
permalink: teams/security
cssclasses:
  - soft-embed
---
Nossa página de [Segurança](https://obsidian.md/security) compila informações sobre como o Obsidian aborda a proteção dos seus dados. Ela também é o local onde ficam as auditorias de segurança realizadas por terceiros.

## Considerações

O Obsidian é projetado para funcionar como um aplicativo offline e independente. O Obsidian também suporta plugins e temas personalizados. Além disso, oferecemos suporte oficial e não oficial para diversos serviços de sincronização de arquivos.

Se você não pretende usar plugins da comunidade ou temas, nem o [[Introdução ao Obsidian Sync|Obsidian Sync]] ou o [[Introdução ao Obsidian Publish|Obsidian Publish]], seus procedimentos padrão para proteger aplicativos serão aplicáveis. No entanto, se você planeja usar qualquer um desses recursos, recomendamos avaliar minuciosamente sua adequação ao seu ambiente de trabalho.

## Plugins da comunidade e temas

Por favor, revise a página [[Segurança de plugins]] além desta seção.

A equipe do Obsidian revisa todos os plugins da comunidade e temas enviados ao diretório oficial, por meio do nosso [repositório de lançamentos](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Não revisamos itens da comunidade que não foram enviados ao diretório oficial.

Não temos uma loja comunitária para [[Trechos CSS]]. Esses arquivos são normalmente obtidos dentro da nossa [Comunidade Obsidian](https://obsidian.md/community) ou de repositórios públicos no GitHub.

Exigimos o empacotamento de recursos em trechos CSS e temas. No entanto, fizemos uma exceção para o [Google Fonts](https://fonts.google.com/) para manter o desempenho em dispositivos móveis, onde o impacto do empacotamento de fontes é mais perceptível.

## Rede e acesso

Embora priorize a abordagem local-first do nosso aplicativo, o Obsidian faz chamadas de rede com base nos serviços e recursos que você utiliza. Essas conexões de rede podem ser desabilitadas por meio de um firewall de domínio ou bloqueio do aplicativo.

O Obsidian faz essas conexões de rede via HTTPS na porta 443.

A seguir está uma lista das conexões de rede que o Obsidian realiza.

### Conexões originadas pelo Obsidian

- **Atualizações de acesso antecipado**: Utiliza `releases.obsidian.md`.
- **Gerenciamento de conta e licença**: Ao acessar sua conta Obsidian nas Configurações e aplicar uma Licença comercial, chamamos `api.obsidian.md`.
- **Obsidian Sync**: Usado para sincronizar suas notas entre dispositivos.
	- `sync-xx.obsidian.md`, onde `xx` é um número entre 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` e `publish-xx.obsidian.md`, onde `xx` é um número.
    2. Frontend: `publish.obsidian.md`.

### Conexões originadas pelo GitHub

O Obsidian faz requisições de rede tanto para `github.com` quanto para `raw.githubusercontent.com`.

- **Lançamentos públicos**: Se as atualizações automáticas estiverem habilitadas, o Obsidian verifica no GitHub por lançamentos públicos.
- **Temas e plugins de terceiros**:
    - Uma verificação é realizada a cada 12 horas a partir do momento de inicialização do aplicativo para buscar um arquivo hospedado no GitHub usado para "descontinuação de plugins". Este arquivo ajuda a desabilitar remotamente versões específicas de plugins conhecidos por causar mau funcionamento, perda de dados, ou que possam ser potencialmente vulneráveis ou maliciosos.
    - Plugins habilitados podem gerar tráfego de rede fora do controle do Obsidian e do GitHub.

### Outras conexões

- **Conteúdo online incorporado**: Ao abrir notas que incorporam conteúdo online, como uma imagem (`![gato](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Requisições DNS**: Se um nome de host precisar ser resolvido antes de estabelecer uma conexão, incluindo DNS sobre HTTPS. Consulte a [documentação do Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) para mais informações.

## Perguntas frequentes

### Segurança da conta

**O Obsidian suporta Single Sign-On (SSO)?**
O Obsidian não suporta SSO. Na maioria dos casos de uso, o Obsidian não requer uma conta ou login no seu ambiente de trabalho, a menos que você esteja usando o [[Introdução ao Obsidian Publish|Obsidian Publish]] ou o [[Introdução ao Obsidian Sync|Obsidian Sync]].

**O Obsidian suporta Autenticação Multifator (MFA)?**
O Obsidian suporta [[Autenticação de 2 fatores]] (2FA) para contas Obsidian, mas não suporta 2FA para abrir e usar o aplicativo base. Usuários do [[Introdução ao Obsidian Sync|Obsidian Sync]] e do [[Introdução ao Obsidian Publish|Obsidian Publish]] que tenham 2FA habilitado serão obrigados a confirmar sua chave 2FA quando fizerem login pela primeira vez no aplicativo.

### Avaliações e certificações

**Vocês aceitam avaliações de segurança da nossa empresa?**
Exigimos um valor mínimo de ordem de compra cotada antes de considerar a realização de uma avaliação de segurança. Essas avaliações costumam ser demoradas e podem não ser aplicáveis a aplicativos offline como o Obsidian, pois são normalmente voltadas para serviços baseados em nuvem.

No entanto, você pode dispensar esse valor mínimo de ordem de compra cotada concordando em pagar uma taxa de retenção. Entre em contato com o [[Ajuda e suporte#Contatar o suporte do Obsidian|suporte do Obsidian]] para consultar sobre essa opção.

**Vocês possuem alguma certificação reconhecida relacionada à Segurança da Informação ou padrões de qualidade, como ISO27001, NIST, COBIT, ou outras certificações ISO ou CSA?**
Não no momento. É algo que podemos explorar no futuro, mas por enquanto, nosso foco está nas nossas [auditorias de segurança](https://obsidian.md/security).
