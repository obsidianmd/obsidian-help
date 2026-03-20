---
permalink: publish/security
---
Você pode escolher as notas que deseja publicar no [[Introdução ao Obsidian Publish|Obsidian Publish]]. O restante das suas notas permanece seguro no seu cofre.

Apenas as notas que você escolher publicar são enviadas aos servidores do Obsidian, e quaisquer notas que você despublicar são removidas.

## Proteção por senha

Para um controle de acesso aprimorado no seu site Publish, aplique uma senha ao site. Os visitantes serão solicitados a inserir uma senha ao tentar acessá-lo. Se você decidir remover a senha do site posteriormente, todo o site se tornará visível ao público novamente.

> [!warning] A proteção individual por senha para notas publicadas não é suportada atualmente.

### Adicionar uma senha ao site

1. No menu lateral, à esquerda da janela do aplicativo, clique em **Publicar alterações** ( ![[lucide-send.svg#icon]] ).
2. Na caixa de diálogo **Publicar alterações**, clique em **Alterar configurações do site** ( ![[lucide-cog.svg#icon]] ).
3. Em **Outras configurações do site**, ao lado de **Senhas**, clique em **Administrar**.
4. Clique em **Nova senha**.
5. Em **Senha**, insira uma senha para o seu site.
6. (Opcional) Em **Apelido**, insira um apelido para a senha, por exemplo, a pessoa a quem você deseja conceder acesso ao site.
7. Clique em **Adicionar esta senha**.

### Remover uma senha do site

1. No menu lateral, à esquerda da janela do aplicativo, clique em **Publicar alterações** ( ![[lucide-send.svg#icon]] ).
2. Na caixa de diálogo **Publicar alterações**, clique em **Alterar configurações do site** ( ![[lucide-cog.svg#icon]] ).
3. Em **Outras configurações do site**, ao lado de **Senhas**, clique em **Administrar**.
5. Clique no ícone de cruz ao lado da senha que deseja excluir.

## Coleta de dados
### Dados de visitantes

Por padrão, o Obsidian Publish **não** coleta dados de visitantes, armazena cookies nem processa informações pessoais. No entanto, você pode implementar análises ou registrar outros dados de usuário ao [[Personalizar seu site|personalizar seu site]].

Como proprietário do site, você é responsável por cumprir o GDPR e as regulamentações de privacidade na sua região. Isso inclui criar seu próprio banner de notificação, que pode ser implementado usando publish.js, e adicionar uma página de política de privacidade ao seu site.

## Acesso

O Obsidian contrata a [Cloudflare](https://www.cloudflare.com) para fornecer hospedagem para nossos sites Publish. Os servidores estão hospedados em San Francisco, CA.

### Gerenciando o acesso ao Obsidian Publish na sua rede

Para regular o acesso ao Obsidian Publish na sua rede, você precisa gerenciar os seguintes domínios:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Além disso, os serviços de backend utilizam os seguintes subdomínios: `publish-xx.obsidian.md`, onde `xx` é um número variando de `1 - 100`.

> [!tip] Se o seu sistema de firewall suportar, recomendamos adicionar `publish-*.obsidian.md` à lista de permissões para acomodar nossa expansão contínua de subdomínios.
