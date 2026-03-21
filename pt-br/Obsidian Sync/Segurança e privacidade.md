---
permalink: sync/security
publish: true
mobile: false
description: Saiba sobre as considerações de segurança e privacidade para o Obsidian Sync.
---
## Criptografia

Para sua segurança, o [[Introdução ao Obsidian Sync|Obsidian Sync]] criptografa seu [[Cofres locais e remotos|cofre remoto]] e toda comunicação com os servidores da Obsidian.

Quando você cria um novo cofre remoto, você tem duas opções:

- **Criptografia de ponta a ponta (padrão)** oferece a segurança mais forte, mas exige que você armazene com segurança sua senha de criptografia. Isso garante que ninguém — nem mesmo a equipe da Obsidian — possa acessar suas notas.
- **Criptografia padrão** usa uma chave de criptografia gerenciada pela Obsidian para proteger seus dados em trânsito e em nosso servidor.

Recomendamos a criptografia de ponta a ponta para todos os usuários, pois é a opção mais privada e segura. No entanto, esteja ciente de que se você esquecer ou perder sua senha de criptografia, seus dados permanecerão criptografados e inutilizáveis para sempre. Não somos capazes de recuperar sua senha, nem quaisquer dados criptografados para você.

Sua escolha afeta apenas seu cofre remoto. O Obsidian não criptografa seu cofre local.

### O que significa criptografia de ponta a ponta?

Criptografia de ponta a ponta significa que os dados são criptografados a partir do momento em que saem do seu dispositivo, e só podem ser descriptografados usando sua chave de criptografia quando estiverem de volta em um dos seus dispositivos.

Não podemos ler seus dados. Nem quaisquer potenciais interceptadores, como seu provedor de serviços de internet.

No raro caso de uma violação completa do servidor, seus dados permanecem criptografados — ninguém pode descriptografar seus arquivos sem conhecer sua senha.

### Quais são os riscos de usar criptografia padrão?

A criptografia padrão é fundamentalmente menos segura do que a criptografia de ponta a ponta, mas pode ser uma opção conveniente se você não espera que os dados que está sincronizando sejam completamente privados. Por exemplo, se seu cofre sincronizado é [[Introdução ao Obsidian Publish|publicado]] em um site público como este site de Ajuda, então a criptografia de ponta a ponta não é necessária.

A criptografia padrão é o mesmo método de criptografia usado por empresas de armazenamento em nuvem e plataformas de software como serviço, como Google Docs, Dropbox e iCloud (sem Proteção Avançada de Dados). Sua chave de criptografia é gerada pelo aplicativo e usada para proteger seus dados em trânsito e no servidor. Como a chave de criptografia é armazenada nos servidores da empresa, ela pode ser usada para descriptografar seus dados, por exemplo, em um caso onde a empresa está sujeita a um mandado de busca, ou em um caso onde você deseja acessar seus dados por meio de um navegador web.

A criptografia de ponta a ponta garante que a Obsidian nunca possa acessar seus dados e deve sempre ser usada para sincronizar dados que você deseja manter completamente privados e seguros.

### Qual criptografia vocês usam?

Para segurança de dados, implementamos protocolos de criptografia padrão da indústria. Especificamente, usamos [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), o padrão de criptografia mais forte, amplamente empregado em contextos como banco online. O processo de criptografia envolve os seguintes detalhes técnicos:

- **Função de derivação de chave:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) com salt
- **Algoritmo de criptografia:** AES-256 usando [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Posso verificar se meus dados estão criptografados de ponta a ponta?

Sim. Veja nosso guia, [como verificar a criptografia de ponta a ponta do Obsidian Sync](https://obsidian.md/pt-BR/blog/verify-obsidian-sync-encryption/). Este guia fornece instruções passo a passo para você verificar de forma independente a criptografia de ponta a ponta dos seus dados quando são enviados e recebidos pelos servidores do Sync.

### A Obsidian completou uma auditoria de segurança de terceiros?

Sim. A Obsidian foi auditada de forma independente. Visite nossa [página de Segurança](https://obsidian.md/pt-BR/security) para ver os relatórios de auditoria. Auditorias regulares por empresas de segurança terceirizadas garantem que o código e os procedimentos da Obsidian atendam aos mais altos padrões de segurança.

### O que acontece se eu esquecer minha senha de criptografia?

Se você perder ou esquecer a senha de criptografia, não será possível conectar cofres adicionais ao seu cofre remoto. Como a senha de criptografia não é salva em nenhum lugar, ela está perdida para sempre.

Seus dados, no entanto, geralmente estão armazenados com segurança localmente em cada um dos seus dispositivos.

Para continuar usando o Obsidian Sync, sugerimos fazer uma reconfiguração completa para poder adicionar novos dispositivos ao seu sistema Sync:

1. Faça um backup completo do cofre no seu dispositivo principal, por precaução caso algo dê errado. Isso pode ser tão simples quanto fazer uma cópia da pasta do cofre ou criar um arquivo zip do cofre.
2. Desconecte o cofre remoto em cada um dos seus dispositivos. Isso pode ser feito indo em **[[Configurações]] → Sincronização → Escolher cofre remoto → Desconectar**.
3. [[Configurar o Obsidian Sync#Criar um novo cofre remoto|Crie um novo cofre remoto]] no seu dispositivo principal a partir da mesma página de Configurações. Opcionalmente, você pode excluir o cofre remoto anterior, já que você não tem a senha dele de qualquer forma. (Pode ser necessário excluir o cofre remoto anterior se você estiver no [[Perguntas frequentes#Quantos cofres remotos posso ter?|limite de cofres]])
4. Aguarde seu dispositivo principal sincronizar. Observe o indicador de sincronização no canto inferior direito da tela até que ele exiba uma marca de verificação verde.
5. Conecte cada um dos seus dispositivos ao mesmo cofre remoto recém-criado. Ao conectar, será exibido um aviso sobre mesclagem de cofres, isso é esperado e você pode continuar. Aguarde cada dispositivo sincronizar completamente antes de passar para o próximo. Isso reduz as chances de problemas.
6. Agora todos os seus dispositivos devem estar conectados ao novo cofre remoto.

## Hospedagem

### Onde vocês hospedam os servidores do Obsidian Sync?

Nossos centros de dados, alimentados pela [DigitalOcean](https://www.digitalocean.com), oferecem opções de hospedagem de cofre remoto geo-regional nos seguintes locais:

> [!abstract] Regiões do Sync
> **Automático**: Seu centro de dados é escolhido com base na localização do seu IP, no momento em que você o configura pela primeira vez.
> 
> **Ásia**: Singapura
> **Europa**: Frankfurt, Alemanha
> **América do Norte**: São Francisco, EUA
> **Oceania**: Sydney, Austrália
^sync-geo-regions

### Onde posso encontrar meu servidor Sync atual e onde ele está hospedado?

Para localizar seu servidor do Obsidian Sync, siga estes passos:
1. Vá em **[[Configurações]]** → **Sincronização** → **Copiar informações de depuração**.
2. Cole as informações copiadas em uma nota ou arquivo.
3. Procure uma linha semelhante a esta: `Host server: wss://sync-xx.obsidian.md`

Esta linha indica o servidor onde seu cofre remoto está hospedado. Para mais detalhes sobre os locais e disponibilidade do servidor, visite nossa [página de status](https://status.obsidian.md/).

## Rede e acesso

### Gerenciando o acesso ao Obsidian Sync na sua rede

Para regular o acesso ao Obsidian Sync na sua rede, você precisa gerenciar os seguintes domínios:

`sync-xx.obsidian.md`

O `xx` neste caso representa um número variando de `1 - 100`.

> [!tip] Se seu sistema de firewall suportar, recomendamos adicionar à lista de permissões `sync-*.obsidian.md` para contemplar o crescimento contínuo nos números de subdomínios.

## Limitações

O Obsidian Sync é projetado para manter suas notas privadas e seguras. Para oferecer sincronização rápida e confiável e armazenamento eficiente entre dispositivos, fazemos algumas concessões deliberadas em como a criptografia é aplicada.

### Criptografia determinística de hash de arquivos

Criptografamos hashes de arquivos de forma determinística: o mesmo conteúdo de arquivo, usando a mesma chave de criptografia e salt, sempre produz o mesmo hash criptografado no servidor. Isso ajuda o Sync a detectar duplicatas e evitar o reenvio ou rearmazenamento de dados idênticos, o que economiza largura de banda e armazenamento remoto, especialmente no histórico de versões ou quando arquivos grandes se repetem.

No entanto, se um atacante comprometer um servidor Sync, e tiver uma forma separada de forçar um usuário a enviar arquivos de sua escolha, então o atacante poderia forçar o usuário a enviar arquivos específicos e determinar se o arquivo corresponde a um arquivo que o usuário já enviou anteriormente.

### Sem vínculo criptográfico entre caminho e conteúdo

Alguns metadados não são criptografados de ponta a ponta: qual dispositivo enviou ou excluiu um arquivo, quando foi enviado e o *mapeamento* entre caminhos de arquivo criptografados e conteúdo criptografado. Esses dados são legíveis pelo servidor para que ele possa rotear alterações, determinar o histórico de versões de um arquivo e manter os dispositivos sincronizados.

Se um servidor Sync fosse comprometido, um atacante poderia adulterar esse mapeamento, fazendo com que o conteúdo de um arquivo criptografado fosse entregue sob um caminho de arquivo diferente. Isso não revela seus dados em texto simples, eles permanecem criptografados.
