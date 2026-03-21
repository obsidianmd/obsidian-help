---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Mova seu cofre Sync para uma região diferente, realize uma atualização de criptografia.
---
Por padrão, o Obsidian Sync utiliza [[Segurança e privacidade#Criptografia|criptografia de ponta a ponta]] para todos os seus dados. Isso garante que ninguém — nem mesmo a equipe do Obsidian — possa acessar suas notas.

O Obsidian ocasionalmente atualiza a criptografia do Sync para manter os mais altos padrões de [[Segurança e privacidade|segurança]]. Se uma atualização de criptografia estiver disponível, você verá uma opção intitulada **Atualizar criptografia do cofre** em **Configurações do Obsidian → Sync**. Este processo também permite que você altere sua [[Regiões do Sync|região do Sync]].

## Versões de criptografia

Todos os novos cofres utilizam automaticamente a criptografia mais recente. Cofres existentes podem ser atualizados usando o assistente de migração. Note que todos os dispositivos devem estar usando uma versão do aplicativo Obsidian que suporte a versão de criptografia do Sync para a qual você está migrando.

| Data de lançamento                                                      | Versão do Sync | Versão mínima do aplicativo |
| ----------------------------------------------------------------------- | -------------- | --------------------------- |
| [2025-08-22](https://obsidian.md/pt-BR/changelog/2025-08-22-sync/)            | 3              | 1.8.3                       |
| [2020-12-07](https://obsidian.md/pt-BR/changelog/2020-12-07-desktop-v0.9.21/) | 0              | 0.9.21                      |

## Atualizar criptografia com o assistente de migração

Antes de continuar, crie um [[Fazer backup dos seus arquivos do Obsidian|backup]] do seu cofre para evitar qualquer potencial perda de dados. Este processo irá excluir permanentemente todos os dados no seu cofre remoto com a criptografia antiga, incluindo o histórico de versões.

> [!danger] Migrações são destrutivas
> 
> **Sempre faça [[Fazer backup dos seus arquivos do Obsidian|backup]] do seu cofre antes de continuar com uma migração.**
> 
> Quando você migra um cofre remoto, seus dados serão substituídos. Isso significa:
> 
> 1. Os dados remotos serão removidos dos servidores do Obsidian, e os dados do cofre serão reenviados em seu lugar.
> 2. Todo o [[Histórico de versões|histórico de versões]] do cofre será perdido.

1. Abra as **[[Configurações]]**.
2. Na barra lateral, selecione **Sync**.
3. Clique em **Atualizar cofre**. Esta opção só será visível se uma atualização estiver disponível para o seu cofre remoto.
4. Verifique novamente seus backups e clique em **Continuar**.
5. Em **Nome do cofre**, insira o nome do cofre remoto.
6. Em **Região**, escolha a [[#Servidores regionais de sincronização|região]] do servidor para o seu cofre remoto.
7. Em **Senha de criptografia**, escolha uma senha para o seu cofre. Isso cria um cofre com criptografia de ponta a ponta. A senha do cofre é separada da sua conta Obsidian e pode ser diferente para cada um dos seus cofres. Para mais informações, consulte [[Segurança e privacidade]].
8. Depois de reenviar seus dados com a nova criptografia, reconecte-se ao novo cofre Sync nos seus outros dispositivos.
