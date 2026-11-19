---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Mova seu cofre do Sync para uma região diferente.
---
Quando você cria um [[Cofres locais e remotos|cofre remoto]] através do [[Introdução ao Obsidian Sync|Obsidian Sync]], seus dados são criptografados e armazenados em um dos servidores regionais do Sync da Obsidian. Este guia explica como mover seu cofre do Sync para um servidor regional diferente.

## Regiões disponíveis

As seguintes regiões estão disponíveis com o Obsidian Sync. Recomendamos usar **Automático** ou escolher uma destinação próxima a você para reduzir a latência e tornar o processo de sincronização mais rápido.

![[Obsidian Sync/Segurança e privacidade#^sync-geo-regions]]

## Registre suas configurações

Quando você conecta um dispositivo ao novo cofre remoto, o Sync pode usar as configurações que você tem ativadas naquele momento. Se você mantém configurações diferentes em dispositivos diferentes, registre-as antes de começar. Por exemplo, você pode não sincronizar arquivos de mídia grandes para o seu celular.

Em cada dispositivo que usa o cofre remoto, abra **[[Configurações]] → Sync** e registre estas configurações. Uma captura de tela funciona bem.

- **Sincronização seletiva**
- **Sincronização de configuração do cofre**
- **Pastas excluídas**
- Configurações específicas do dispositivo, como **Nome do dispositivo** e **Resolução de conflitos**

Consulte [[Configurações do Sync e sincronização seletiva]] para saber o que cada configuração faz e quais estão ativadas por padrão.

## Mudar a região do Sync

Para mudar a região do seu cofre remoto, você precisará recriar seu cofre em um servidor do Sync diferente. Note que você também pode mudar de região usando o assistente de migração [[Atualizar criptografia do Sync]], se seu cofre remoto estiver em uma versão mais antiga.

> [!danger] Migrações são destrutivas
> 
> **Sempre faça [[Fazer backup dos seus arquivos do Obsidian|backup]] do seu cofre antes de continuar com uma migração.**
> 
> Quando você migra um cofre remoto, seus dados serão substituídos. Isso significa:
> 
> 1. Os dados remotos serão removidos dos servidores da Obsidian, e os dados do cofre serão reenviados em seu lugar.
> 2. Todo o [[Histórico de versões|histórico de versões]] do cofre será perdido.

![[Configurar o Obsidian Sync#Desconectar de um cofre remoto]]

Se você está no [[Planos e limites de armazenamento|Plano Standard]], você também precisará [[#Excluir um cofre remoto|excluir seu cofre remoto]] antes de continuar.

![[Configurar o Obsidian Sync#Criar um novo cofre remoto]]

## Reconectar seus outros dispositivos

Depois que o novo cofre remoto terminar de sincronizar no seu primeiro dispositivo, alterne cada outro dispositivo que usava o cofre remoto antigo. Trabalhe em um dispositivo por vez.

1. No dispositivo, [[Configurar o Obsidian Sync#Desconectar de um cofre remoto|desconecte do cofre remoto antigo]].
2. [[Configurar o Obsidian Sync#Sincronizar um cofre remoto em outro dispositivo|Conecte ao novo cofre remoto]]. Não selecione **Iniciar sincronização** ainda.
3. Defina **Sincronização seletiva**, **Sincronização de configuração do cofre** e **Pastas excluídas** para corresponder às configurações que você registrou para este dispositivo.
4. Reinicie o Obsidian. No celular ou tablet, pode ser necessário forçar o fechamento do aplicativo.
5. Selecione **Iniciar sincronização** ou **Retomar**, e aguarde até que o Sync termine antes de passar para o próximo dispositivo.

Além disso, você pode [[#Excluir um cofre remoto|excluir seu cofre remoto antigo]] depois de confirmar a transição para seu novo cofre remoto e sua região.
