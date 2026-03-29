---
permalink: headless
description: O Obsidian Headless é um cliente de linha de comando para os serviços do Obsidian. Sincronize seus cofres sem o aplicativo de desktop.
---
Obsidian Headless **(beta aberta)** é um cliente sem interface para os serviços do Obsidian. Permite [[Sync sem interface|sincronizar cofres]] a partir da linha de comandos sem a aplicação de ambiente de trabalho, com toda a velocidade, privacidade e benefícios de [[Introdução ao Obsidian Sync|encriptação ponto a ponto]] do Obsidian Sync.

Razões pelas quais poderá usar o Obsidian Headless:

- Automatizar cópias de segurança remotas.
- Automatizar a publicação de um site.
- Dar a ferramentas agênticas acesso a um cofre sem acesso ao seu computador completo.
- Sincronizar um cofre de equipa partilhado para um servidor que alimenta outras ferramentas.
- Executar automatizações agendadas, por exemplo, agregar notas diárias em resumos semanais, etiquetar automaticamente, etc.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] controla a aplicação de ambiente de trabalho do Obsidian a partir do seu terminal. O Obsidian Headless é um cliente autónomo que funciona de forma independente, sem necessidade da aplicação de ambiente de trabalho.

## Instalar

Obsidian Headless **(beta aberta)** requer Node.js 22 ou posterior. Instale-o a partir do [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autenticação

### Iniciar sessão

```shell
ob login
```

Se já tiver sessão iniciada, `ob login` apresenta as informações da sua conta. Para trocar de conta, passe `--email` e/ou `--password` para iniciar sessão novamente.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Todas as opções são interativas quando omitidas — o e-mail e a palavra-passe são solicitados, e a autenticação de dois fatores é pedida automaticamente se estiver ativada na conta.

Para terminar sessão e apagar as credenciais armazenadas:

```shell
ob logout
```

## Serviços

- [[Sync sem interface]]: use o [[Introdução ao Obsidian Sync|Obsidian Sync]] a partir da linha de comandos sem a aplicação de ambiente de trabalho.
- [[Publish sem interface]]: use o [[Introdução ao Obsidian Publish|Obsidian Publish]] a partir da linha de comandos sem a aplicação de ambiente de trabalho.
