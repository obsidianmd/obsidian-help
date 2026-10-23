---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Mova seu cofre do Sync para uma região diferente.
---
Quando cria um [[Cofres locais e remotos|cofre remoto]] através do [[Introdução ao Obsidian Sync|Obsidian Sync]], os seus dados são encriptados e armazenados num dos servidores regionais do Sync da Obsidian. Este guia explica como mover o seu cofre do Sync para um servidor regional diferente.

## Regiões disponíveis

As seguintes regiões estão disponíveis com o Obsidian Sync. Recomendamos utilizar **Automático** ou escolher uma localização próxima de si para reduzir a latência e tornar o processo de sincronização mais rápido.

![[Obsidian Sync/Segurança e privacidade#^sync-geo-regions]]

## Registar as suas definições

Quando liga um dispositivo ao novo cofre remoto, o Sync pode utilizar as definições que tem ativadas nesse momento. Se mantiver definições diferentes em dispositivos diferentes, registe-as antes de começar. Por exemplo, pode não sincronizar ficheiros multimédia grandes para o seu telemóvel.

Em cada dispositivo que utiliza o cofre remoto, abra **[[Definições]] → Sync** e registe estas definições. Uma captura de ecrã funciona bem.

- **Sincronização seletiva**
- **Sincronizar configurações do vault**
- **Pastas excluídas**
- Definições específicas do dispositivo, como **Nome do dispositivo** e **Resolução de conflitos**

Consulte [[Definições do Sync e sincronização seletiva]] para saber o que cada definição faz e quais estão ativadas por predefinição.

## Mudar a região do Sync

Para mudar a região do seu cofre remoto, terá de recriar o seu cofre num servidor do Sync diferente. Note que também pode mudar de região utilizando o assistente de migração [[Atualizar encriptação do Sync]], se o seu cofre remoto estiver numa versão mais antiga.

> [!danger] As migrações são destrutivas
> 
> **Faça sempre uma [[Fazer cópia de segurança dos ficheiros do Obsidian|cópia de segurança]] do seu cofre antes de continuar com uma migração.**
> 
> Quando migra um cofre remoto, os seus dados serão substituídos. Isto significa:
> 
> 1. Os dados remotos serão removidos dos servidores da Obsidian, e os dados do cofre serão carregados novamente no seu lugar.
> 2. Toda a [[História de versionamento|história de versionamento]] do cofre será perdida.

![[Configurar o Obsidian Sync#Desconectar de um cofre remoto]]

Se estiver no [[Planos e limites de armazenamento|Plano Standard]], também terá de [[Configurar o Obsidian Sync#Eliminar um cofre remoto|eliminar o seu cofre remoto]] antes de continuar.

![[Configurar o Obsidian Sync#Criar um novo cofre remoto]]

## Reconectar os seus outros dispositivos

Depois de o novo cofre remoto terminar a sincronização no seu primeiro dispositivo, mude todos os outros dispositivos que utilizavam o cofre remoto antigo. Trabalhe num dispositivo de cada vez.

1. No dispositivo, [[Configurar o Obsidian Sync#Desconectar de um cofre remoto|desconecte do cofre remoto antigo]].
2. [[Configurar o Obsidian Sync#Sincronizar um cofre remoto noutro dispositivo|Ligue ao novo cofre remoto]]. Não selecione **Iniciar sincronização** ainda.
3. Defina **Sincronização seletiva**, **Sincronizar configurações do vault** e **Pastas excluídas** para corresponder às definições que registou para este dispositivo.
4. Reinicie o Obsidian. No móvel ou tablet, pode precisar de forçar o encerramento da aplicação.
5. Selecione **Iniciar sincronização** ou **Retomar**, e aguarde até o Sync terminar antes de passar ao próximo dispositivo.

Além disso, pode [[Configurar o Obsidian Sync#Eliminar um cofre remoto|eliminar o seu cofre remoto antigo]] assim que tiver confirmado a transição para o seu novo cofre remoto e respetiva região.
