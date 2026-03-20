---
permalink: plugins/web-viewer
---
Visualizador web é um [[Plugins nativos|plugin nativo]] que permite abrir links externos dentro do Obsidian no desktop. Isso permite ler o conteúdo de links sem sair do aplicativo e facilita a multitarefa em projetos de pesquisa na web.

Links externos abrem como uma [[Abas|aba]] que você pode reorganizar, dividir e abrir em uma [[Janelas destacáveis|janela destacável]]. Qualquer cartão de página web incorporado em arquivos [[canvas]] pode ser aberto como abas do visualizador web.

O visualizador web não é um substituto para seu navegador principal. O visualizador web oferece uma maneira rápida de acessar páginas web para pesquisa dentro do Obsidian. No entanto, ele não oferece a funcionalidade completa, os controles de segurança ou a extensibilidade de um navegador dedicado.

## Modo de leitura

Clique no ícone de óculos para visualizar uma versão em texto simples da página web. Este recurso funciona limpando o conteúdo usando a biblioteca Readability da Mozilla, desenvolvida para o Firefox.

## Salvar no cofre

Clique no ícone de mais ações para salvar uma página web no seu cofre. Você pode personalizar a destinação de salvamento da página acessando **[[Configurações]]** → **Visualizador web**.

## Bloqueio de anúncios

O visualizador web bloqueia anúncios por padrão. Você pode personalizar as regras de bloqueio de anúncios adicionando listas como [Easylist](https://easylist.to/).

## Segurança

Se você usa plugins de terceiros do Obsidian, recomendamos usar seu navegador principal para tarefas sensíveis e sites protegidos por senha em vez do visualizador web.

O visualizador web é baseado no mesmo recurso do [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) que permite incorporar páginas web no [[Canvas]]. O visualizador web foi [auditado independentemente](https://obsidian.md/blog/cure53-second-client-audit/) para verificar que foi implementado de forma segura.

Os plugins do Obsidian [[Segurança de plugins#Capacidades dos plugins|não são isolados em sandbox]] e têm controle profundo sobre o aplicativo. Esse design permite funcionalidades poderosas, mas também traz contrapartidas de segurança. Enquanto o Obsidian está em execução, plugins de terceiros têm acesso total aos cookies no visualizador web.
