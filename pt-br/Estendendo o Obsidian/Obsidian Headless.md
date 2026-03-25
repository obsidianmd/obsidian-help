---
permalink: headless
description: Obsidian Headless é um cliente de linha de comando para serviços do Obsidian. Sincronize seus cofres sem o aplicativo desktop.
---
Obsidian Headless **(beta aberto)** é um cliente headless para serviços do Obsidian. Ele permite [[Sync sem interface|sincronizar cofres]] a partir da linha de comando sem o aplicativo desktop, com toda a velocidade, privacidade e benefícios de criptografia de ponta a ponta do [[Introdução ao Obsidian Sync|Obsidian Sync]].

Razões pelas quais você pode usar o Obsidian Headless:

- Automatizar backups remotos.
- Automatizar a publicação de um site.
- Dar a ferramentas agênticas acesso a um cofre sem acesso ao seu computador completo.
- Sincronizar um cofre compartilhado de equipe para um servidor que alimenta outras ferramentas.
- Executar automações agendadas, por exemplo, agregar notas diárias em resumos semanais, auto-etiquetar, etc.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] controla o aplicativo desktop do Obsidian a partir do seu terminal. Obsidian Headless é um cliente independente que funciona de forma autônoma, sem necessidade do aplicativo desktop.

## Instalar

Obsidian Headless **(beta aberto)** requer Node.js 22 ou posterior. Instale-o a partir do [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autenticação

### Entrar

```shell
ob login
```

Se já estiver conectado, `ob login` exibe as informações da sua conta. Para trocar de conta, passe `--email` e/ou `--password` para entrar novamente.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Todas as opções são interativas quando omitidas — e-mail e senha são solicitados, e a autenticação de dois fatores é requisitada automaticamente se estiver habilitada na conta.

Para sair e deletar as credenciais armazenadas:

```shell
ob logout
```

## Serviços

- [[Sync sem interface]]: use o [[Introdução ao Obsidian Sync|Obsidian Sync]] a partir da linha de comando sem o aplicativo desktop.
- [[Headless Publish]]: use o [[Introdução ao Obsidian Publish|Obsidian Publish]] a partir da linha de comando sem o aplicativo desktop.
