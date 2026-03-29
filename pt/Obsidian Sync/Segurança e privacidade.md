---
permalink: sync/security
publish: true
mobile: false
description: Saiba mais sobre as considerações de segurança e privacidade do Obsidian Sync.
---
## Encriptação

Para sua segurança, o [[Introdução ao Obsidian Sync|Obsidian Sync]] encripta o seu [[Cofres locais e remotos|cofre remoto]] e todas as comunicações com os servidores do Obsidian.

Quando cria um novo cofre remoto, tem duas opções:

- **Encriptação ponto a ponto (predefinida)** Oferece a segurança mais forte, mas requer que armazene em segurança a sua palavra-passe de encriptação. Isto garante que ninguém — nem mesmo a equipa do Obsidian — pode aceder às suas notas.
- **Encriptação padrão** utiliza uma chave de encriptação gerida pelo Obsidian para proteger os seus dados em trânsito e no nosso servidor.

Recomendamos a encriptação ponto a ponto para todos os utilizadores, pois é a opção mais privada e segura. No entanto, tenha em atenção que se esquecer ou perder a sua palavra-passe de encriptação, os seus dados permanecem encriptados e inutilizáveis para sempre. Não nos é possível recuperar a sua palavra-passe, nem quaisquer dados encriptados por si.

A sua escolha afeta apenas o cofre remoto. O Obsidian não encripta o seu cofre local.

### O que significa encriptação ponto a ponto?

Encriptação ponto a ponto significa que os dados são encriptados a partir do momento em que saem do seu dispositivo, e só podem ser desencriptados usando a sua chave de encriptação quando estiverem de volta num dos seus dispositivos.

Nós não conseguimos ler os seus dados. Nem quaisquer potenciais bisbilhoteiros, como o seu fornecedor de serviços de internet.

No caso raro de uma violação completa do servidor, os seus dados permanecem encriptados — ninguém pode desencriptar os seus ficheiros sem saber a sua palavra-passe.

### Quais são os riscos de usar encriptação padrão?

A encriptação padrão é fundamentalmente menos segura do que a encriptação ponto a ponto, mas pode ser uma opção conveniente se não espera que os dados que está a sincronizar sejam completamente privados. Por exemplo, se o seu cofre sincronizado está [[Introdução ao Obsidian Publish|publicado]] num site público como este site de Ajuda, então a encriptação ponto a ponto não é necessária.

A encriptação padrão é o mesmo método de encriptação utilizado por empresas de armazenamento na nuvem e plataformas de software como serviço, como o Google Docs, Dropbox e iCloud (sem Proteção Avançada de Dados). A sua chave de encriptação é gerada pela aplicação e utilizada para proteger os seus dados em trânsito e no servidor. Porque a chave de encriptação está armazenada nos servidores da empresa, pode ser utilizada para desencriptar os seus dados, por exemplo, num caso em que a empresa esteja sujeita a um mandado de busca, ou num caso em que queira aceder aos seus dados através de um navegador web.

A encriptação ponto a ponto garante que o Obsidian nunca pode aceder aos seus dados e deve ser sempre utilizada para sincronizar dados que deseja que permaneçam completamente privados e seguros.

### Que encriptação utilizam?

Para segurança dos dados, implementamos protocolos de encriptação padrão da indústria. Especificamente, utilizamos [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), o padrão de encriptação mais forte, amplamente empregue em contextos como a banca online. O processo de encriptação envolve os seguintes detalhes técnicos:

- **Função de derivação de chaves:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) com salt
- **Algoritmo de encriptação:** AES-256 usando [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Posso verificar que os meus dados estão encriptados ponto a ponto?

Sim. Consulte o nosso guia, [como verificar a encriptação ponto a ponto do Obsidian Sync](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Este guia fornece instruções passo a passo para verificar de forma independente a encriptação ponto a ponto dos seus dados quando são enviados e recebidos através dos servidores do Sync.

### O Obsidian completou uma auditoria de segurança por terceiros?

Sim. O Obsidian foi auditado de forma independente. Visite a nossa [página de Segurança](https://obsidian.md/security) para consultar os relatórios de auditoria. Auditorias regulares por empresas de segurança terceiras garantem que o código e os procedimentos do Obsidian cumprem os mais elevados padrões de segurança.

### O que acontece se eu esquecer a minha palavra-passe de encriptação?

Se alguma vez perder ou esquecer a palavra-passe de encriptação, não poderá ligar cofres adicionais ao seu cofre remoto. Uma vez que a palavra-passe de encriptação não é guardada em lado nenhum, está perdida para sempre.

Os seus dados, no entanto, estão normalmente guardados em segurança localmente em cada um dos seus dispositivos.

Para continuar a usar o Obsidian Sync, sugerimos fazer uma reconfiguração completa para poder adicionar novos dispositivos ao seu sistema Sync:

1. Faça uma cópia de segurança completa do cofre no seu dispositivo principal, para o caso de algo correr mal. Isto pode ser tão simples como fazer uma cópia da pasta do cofre, ou criar um ficheiro zip a partir do cofre.
2. Desligue o cofre remoto em cada um dos seus dispositivos. Isto pode ser feito indo a **[[Definições]] → Sync → Escolher cofre remoto → Desconectar**.
3. [[Configurar o Obsidian Sync#Criar um novo cofre remoto|Crie um novo cofre remoto]] no seu dispositivo principal a partir da mesma página de Definições. Opcionalmente, pode eliminar o cofre remoto anterior, já que não tem a palavra-passe de qualquer forma. (Pode ter de eliminar o cofre remoto anterior se estiver no [[Perguntas frequentes#Quantos cofres remotos posso ter?|limite de cofres]])
4. Aguarde que o seu dispositivo principal sincronize. Observe o indicador de sincronização no canto inferior direito do ecrã até que apresente uma marca de verificação verde.
5. Ligue cada um dos seus dispositivos ao mesmo cofre remoto recém-criado. Ao ligar, será apresentado um aviso sobre a mesclagem de cofres — isto é esperado e pode continuar. Aguarde que cada dispositivo sincronize completamente antes de passar ao seguinte. Isto reduz as hipóteses de problemas.
6. Agora todos os seus dispositivos devem estar ligados ao novo cofre remoto.

## Alojamento

### Onde alojam os servidores do Obsidian Sync?

Os nossos centros de dados, alimentados pela [DigitalOcean](https://www.digitalocean.com), fornecem opções de alojamento de cofres remotos por região geográfica nas seguintes localizações:

> [!abstract] Regiões do Sync
> **Automático**: O seu centro de dados é escolhido com base na localização do seu IP, no momento em que o configura pela primeira vez.
> 
> **Ásia**: Singapura
> **Europa**: Frankfurt, Alemanha
> **América do Norte**: São Francisco, EUA
> **Oceânia**: Sydney, Austrália
^sync-geo-regions

### Onde posso encontrar o meu servidor Sync atual e onde está alojado?

Para localizar o seu servidor Obsidian Sync, siga estes passos:
1. Vá a **[[Definições]]** → **Sync** → **Copiar informações de depuração**.
2. Cole as informações copiadas numa nota ou ficheiro.
3. Procure uma linha semelhante a esta: `Host server: wss://sync-xx.obsidian.md`

Esta linha indica o servidor onde o seu cofre remoto está alojado. Para mais detalhes sobre as localizações e o tempo de atividade do servidor, visite a nossa [página de estado](https://status.obsidian.md/).

## Rede e acesso

### Gerir o acesso ao Obsidian Sync na sua rede

Para regular o acesso ao Obsidian Sync na sua rede, precisa de gerir os seguintes domínios:

`sync-xx.obsidian.md`

O `xx` neste caso representa um número que varia de `1 - 100`.

> [!tip] Se o seu sistema de firewall o suportar, recomendamos adicionar à lista de permissões `sync-*.obsidian.md` para acomodar o crescimento contínuo no número de subdomínios.

## Limitações

O Obsidian Sync foi concebido para manter as suas notas privadas e seguras. Para fornecer uma sincronização rápida e fiável e um armazenamento eficiente entre dispositivos, fazemos algumas concessões deliberadas na forma como a encriptação é aplicada.

### Encriptação determinística de hash de ficheiros

Encriptamos os hashes de ficheiros de forma determinística: o mesmo conteúdo de ficheiro, usando a mesma chave de encriptação e salt, produz sempre o mesmo hash encriptado no servidor. Isto ajuda o Sync a detetar duplicados e evitar o reenvio ou re-armazenamento de dados idênticos, o que poupa largura de banda e armazenamento remoto, especialmente na história de versionamento ou quando ficheiros grandes se repetem.

No entanto, se um atacante comprometer um servidor do Sync, e tiver uma forma separada de forçar um utilizador a enviar ficheiros à sua escolha, então o atacante poderia forçar o utilizador a enviar ficheiros específicos e determinar se o ficheiro corresponde a um ficheiro que o utilizador enviou anteriormente.

### Sem ligação criptográfica entre caminho e conteúdo

Alguns metadados não são encriptados ponto a ponto: qual dispositivo enviou ou eliminou um ficheiro, quando foi enviado, e o *mapeamento* entre caminhos de ficheiros encriptados e conteúdo encriptado. Estes dados são legíveis pelo servidor para que possa encaminhar alterações, determinar a história de versionamento de um ficheiro e manter os dispositivos sincronizados.

Se um servidor do Sync fosse comprometido, um atacante poderia adulterar esse mapeamento, fazendo com que o conteúdo de um ficheiro encriptado fosse entregue sob um caminho de ficheiro diferente. Isto não revela os seus dados em texto simples — permanecem encriptados.
