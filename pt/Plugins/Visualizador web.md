---
permalink: plugins/web-viewer
---
O Visualizador web é um [[Plugins Base|plugin principal]] que permite abrir ligações externas dentro do Obsidian no computador. Isto permite ler o conteúdo das ligações sem sair da aplicação e facilita a multitarefa em projetos de pesquisa na web.

As ligações externas abrem como um [[Separadores|separador]] que pode reorganizar, dividir e abrir numa [[Janelas flutuantes|janela flutuante]]. Quaisquer cartões de páginas web incorporados em ficheiros [[Canvas]] podem ser abertos como separadores do visualizador web.

O Visualizador web não substitui o seu navegador principal. O Visualizador web oferece uma forma rápida de aceder a páginas web para pesquisa dentro do Obsidian. No entanto, não oferece a funcionalidade completa, os controlos de segurança ou a extensibilidade de um navegador dedicado.

## Vista de leitura

Clique no ícone dos óculos para ver uma versão em texto simples da página web. Esta funcionalidade funciona limpando o conteúdo utilizando a biblioteca Readability da Mozilla, desenvolvida para o Firefox.

## Guardar no cofre

Clique no ícone de mais ações para guardar uma página web no seu cofre. Pode personalizar a localização de gravação da página acedendo a **[[Definições]]** → **Visualizador web**.

## Bloqueio de anúncios

O Visualizador web bloqueia anúncios por predefinição. Pode personalizar as regras de bloqueio de anúncios adicionando listas como a [Easylist](https://easylist.to/).

## Segurança

Se utilizar plugins do Obsidian de terceiros, recomendamos que use o seu navegador principal para tarefas sensíveis e sites protegidos por palavra-passe em vez do Visualizador web.

O Visualizador web é baseado na mesma funcionalidade do [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) que permite incorporar páginas web no [[Canvas]]. O Visualizador web foi [auditado de forma independente](https://obsidian.md/blog/cure53-second-client-audit/) para verificar que foi implementado de forma segura.

Os plugins do Obsidian [[Segurança de plugins#Capacidades dos plugins|não são isolados em sandbox]] e têm controlo profundo sobre a aplicação. Este design permite funcionalidades poderosas, mas também implica compromissos de segurança. Enquanto o Obsidian está em execução, os plugins de terceiros têm acesso total aos cookies no Visualizador web.
