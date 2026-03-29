---
permalink: publish/security
---
Pode escolher as notas que pretende publicar no [[Introdução ao Obsidian Publish|Obsidian Publish]]. O resto das suas notas permanece seguro no seu cofre.

Apenas as notas que escolher publicar são enviadas para os servidores do Obsidian, e quaisquer notas que deixe de publicar são removidas.

## Proteção por palavra-passe

Para um controlo de acesso melhorado no seu site publish, aplique uma palavra-passe ao site. Os visitantes serão solicitados a introduzir uma palavra-passe ao tentar aceder ao mesmo. Se decidir remover a palavra-passe do site mais tarde, todo o site voltará a ficar visível para o público.

> [!warning] A proteção individual por palavra-passe para notas publicadas não é atualmente suportada.

### Adicionar uma palavra-passe ao site

1. Na barra de ferramentas, à esquerda da janela da aplicação, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
2. Na caixa de diálogo **Publicar alterações**, clique em **Mudar configurações do site** ![[lucide-cog.svg#icon]].
3. Em **Outras definições do site**, junto a **Palavras-passe**, clique em **Gerir**.
4. Clique em **Nova palavra-passe**.
5. Em **Palavra-passe**, introduza uma palavra-passe para o seu site.
6. (Opcional) Em **Alcunha**, introduza uma alcunha para a palavra-passe, por exemplo, a pessoa a quem pretende dar acesso ao site.
7. Clique em **Adicionar esta palavra-passe**.

### Remover uma palavra-passe do site

1. Na barra de ferramentas, à esquerda da janela da aplicação, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
2. Na caixa de diálogo **Publicar alterações**, clique em **Mudar configurações do site** ![[lucide-cog.svg#icon]].
3. Em **Outras definições do site**, junto a **Palavras-passe**, clique em **Gerir**.
5. Clique no ícone de cruz junto à palavra-passe que pretende eliminar.

## Recolha de dados
### Dados dos visitantes

Por predefinição, o Obsidian Publish **não** recolhe dados dos visitantes, armazena cookies nem processa informações pessoais. No entanto, pode implementar analítica ou registar outros dados de utilizadores ao [[Personalizar o seu site|personalizar o seu site]].

Como proprietário do site, é responsável por cumprir o RGPD e as regulamentações de privacidade na sua região. Isto inclui criar o seu próprio banner de notificação, que pode ser implementado usando publish.js, e adicionar uma página de política de privacidade ao seu site.

## Acesso

O Obsidian contrata a [Cloudflare](https://www.cloudflare.com) para fornecer alojamento de sites para os nossos sites Publish. Os servidores estão alojados em São Francisco, CA.

### Gerir o acesso ao Obsidian Publish na sua rede

Para regular o acesso ao Obsidian Publish na sua rede, precisa de gerir os seguintes domínios:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Adicionalmente, os serviços de backend utilizam os seguintes subdomínios: `publish-xx.obsidian.md`, onde `xx` é um número entre `1 - 100`.

> [!tip] Se o seu sistema de firewall o suportar, recomendamos adicionar à lista de permissões `publish-*.obsidian.md` para acomodar a nossa expansão contínua de subdomínios.
