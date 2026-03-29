---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Mova seu cofre do Sync para uma região diferente, realize uma atualização de criptografia.'
---
Por predefinição, o Obsidian Sync utiliza [[Segurança e privacidade#Encriptação|encriptação ponto a ponto]] para todos os seus dados. Isto garante que ninguém — nem mesmo a equipa do Obsidian — pode aceder às suas notas.

O Obsidian atualiza ocasionalmente a encriptação do Sync para manter os mais elevados padrões de [[Segurança e privacidade|segurança]]. Se uma atualização de encriptação estiver disponível, verá uma opção intitulada **Atualizar encriptação do cofre** em **Definições do Obsidian → Sync**. Este processo também permite alterar a sua [[Regiões do Sync|região do Sync]].

## Versões de encriptação

Todos os novos cofres utilizam automaticamente a encriptação mais recente. Os cofres existentes podem ser atualizados através do assistente de migração. Note que todos os dispositivos devem estar a utilizar uma versão da aplicação Obsidian que suporte a versão de encriptação do Sync para a qual está a migrar.

| Data de lançamento                                                      | Versão do Sync | Versão mínima da aplicação |
| ----------------------------------------------------------------------- | -------------- | -------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3              | 1.8.3                      |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0              | 0.9.21                     |

## Atualizar a encriptação com o assistente de migração

Antes de continuar, crie uma [[Fazer cópia de segurança dos ficheiros do Obsidian|cópia de segurança]] do seu cofre para prevenir qualquer potencial perda de dados. Este processo eliminará permanentemente todos os dados no seu cofre remoto com a encriptação antiga, incluindo a história de versionamento.

> [!danger] As migrações são destrutivas
> 
> **Faça sempre uma [[Fazer cópia de segurança dos ficheiros do Obsidian|cópia de segurança]] do seu cofre antes de prosseguir com uma migração.**
> 
> Quando migra um cofre remoto, os seus dados serão substituídos. Isto significa:
> 
> 1. Os dados remotos serão removidos dos servidores do Obsidian, e os dados do cofre serão re-enviados em seu lugar.
> 2. Toda a [[História de versionamento|história de versionamento]] do cofre será perdida.

1. Abra as **[[Definições]]**.
2. Na barra lateral, selecione **Sync**.
3. Clique em **Atualizar cofre**. Esta opção só será visível se uma atualização estiver disponível para o seu cofre remoto.
4. Verifique novamente as suas cópias de segurança e clique em **Continuar**.
5. Em **Nome do vault**, introduza o nome do cofre remoto.
6. Em **Região**, escolha a [[Configurar o Obsidian Sync#Servidores de sincronização regionais|região]] do servidor para o seu cofre remoto.
7. Em **Chave de encriptação**, escolha uma palavra-passe para o seu cofre. Isto cria um cofre com encriptação ponto a ponto. A palavra-passe do cofre é separada da sua conta Obsidian e pode ser diferente para cada um dos seus cofres. Para mais informações, consulte [[Segurança e privacidade]].
8. Depois de re-enviar os seus dados com a nova encriptação, volte a conectar-se ao novo cofre do Sync nos seus outros dispositivos.
