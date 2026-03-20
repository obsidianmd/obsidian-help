---
permalink: publish/domains
mobile: true
description: >-
  Você pode configurar um domínio ou subdomínio personalizado para o seu site
  Obsidian Publish.
---
Você pode configurar um domínio ou subdomínio personalizado para o seu site [[Introdução ao Obsidian Publish|Obsidian Publish]].

> [!warning] Aviso
> No momento, só oferecemos suporte à configuração de domínios personalizados usando os seguintes métodos:
>
> - [[#Configurar usando CloudFlare]] usando o [modo Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Configurar usando um proxy]]
> 
> Ainda não temos uma forma de provisionar um certificado SSL em seu nome.

## Configurar usando CloudFlare

A maneira mais fácil de configurar um domínio ou subdomínio personalizado é criar uma conta no [CloudFlare](https://cloudflare.com) e deixar o CloudFlare gerenciar o DNS do seu domínio.

Os passos a seguir usam o CloudFlare para configurar um domínio personalizado para o seu site Obsidian Publish, seja usando um domínio raiz (`meusite.com`) ou um subdomínio (`notas.meusite.com`).

> [!important] Importante
> O CloudFlare é o **único provedor oficialmente suportado** para configurar domínios personalizados. Usar as instruções a seguir com qualquer outro provedor provavelmente não funcionará.

**CloudFlare:**

1. Abra o Cloudflare no domínio onde você deseja hospedar seu site Publish, como `meusite.com`, mesmo que queira um subdomínio como `notas.meusite.com`.
2. Vá para **DNS** e clique em **Add Record**.
3. Selecione **CNAME**.
4. Em **name**, insira seu domínio ou subdomínio, por exemplo `notas.meusite.com`.
5. Em **target**, insira `publish-main.obsidian.md`. Não inclua sua sub-URL pessoal neste valor. O Obsidian Publish lida com isso a partir da sua configuração.
6. Certifique-se de que o **proxy status** esteja habilitado. Ele deve estar habilitado por padrão.
7. Vá para **SSL/TLS** e defina o modo de criptografia SSL/TLS como "Full" para configurar o certificado SSL/TLS automaticamente.

> [!note] Nota
> Para redirecionar tanto `meusite.com` quanto `www.meusite.com` para o Obsidian Publish, você precisa criar uma [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) com as seguintes configurações:
>
> - URL match: `www.meusite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://meusite.com/$1`
>
> Após criar a regra de página, crie um registro CNAME para `www.meusite.com` da mesma forma que fez para `meusite.com`.

**Obsidian:**

1. Abra o Obsidian no seu computador.
2. No [[Faixa de opções|Menu lateral]] à esquerda, clique em **Publicar alterações** ( ![[lucide-send.svg#icon]] ).
3. Em **Publicar alterações**, selecione **Alterar configurações do site** ( ![[lucide-cog.svg#icon]] ).
4. Ao lado de **Domínio personalizado**, selecione **Configurar**.
5. Em **URL personalizada**, insira a URL do seu domínio ou subdomínio. Certifique-se de não colocar `www.` na caixa de URL personalizada.

> [!note] Nota
> Se a configuração do seu domínio personalizado resultar em um loop de redirecionamento, é provável que o modo de criptografia no CloudFlare tenha sido definido como "Flexible" em vez de "Full".

## Configurar usando um proxy

Você também pode configurar SSL/TLS para seu domínio personalizado usando seu próprio servidor web.

Se você já está hospedando um site sob seu domínio ou subdomínio, também pode usar esta opção e configurar seu site para carregar o site Obsidian Publish sob um caminho de URL específico, em vez de hospedar o site completo.

Encaminhe todas as requisições sob esse caminho de URL para `https://publish.obsidian.md/serve?url=meusite.com/minhas-notas/...` e configure as opções do site no Obsidian para o mesmo caminho de URL, definindo a **URL personalizada** como `meusite.com/minhas-notas`.

Você também pode configurar o Obsidian Publish como uma sub-URL de um site que você possui. Por exemplo, `https://meusite.com/minhas-notas/`. Para isso, você deve hospedar seu próprio servidor e encaminhar todas as requisições para nosso servidor em `https://publish.obsidian.md/`.

Os exemplos de configuração de proxy a seguir não são exaustivos, mas fornecem métodos comuns para esta implementação.

### NGINX

Na configuração do seu NGINX, adicione o seguinte:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Alguns usuários relataram que adicionar `$request_uri` ao proxy pass pode ser necessário:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

No `.htaccess`, adicione o seguinte:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Nota
> O `mod_rewrite` deve estar habilitado, e você também pode precisar configurar o [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

No `netlify.toml`, [configure os redirecionamentos](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

No `vercel.json`, [configure as reescritas](https://vercel.com/docs/configuration#project/rewrites):

```json
{
  ...

  "rewrites": [
    {
      "source": "/my-notes/",
      "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes"
    },
    {
      "source": "/my-notes/:path*",
      "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:path*"
    }
  ]
}
```

### Caddy

```plain
mysite.com {
  encode zstd gzip
  handle /my-notes* {
    reverse_proxy https://publish.obsidian.md {
      header_up Host {upstream_hostport}
    }
    rewrite * /serve?url=mysite.com{path}
  }
}
```

### Traefik

Este trecho mínimo de configuração redireciona `mysite.com` para o Obsidian Publish.
Consulte a [documentação do Traefik](https://doc.traefik.io/traefik/routing/overview/)
para um exemplo completo.

```yaml
http:
  routers:
    mysite:
      rule: Host(`mysite.com`)
      service: obsidian-publish
      middlewares:
        - "publish-headers"
  services:
    obsidian-publish:
      loadBalancer:
        servers:
          - url: https://publish.obsidian.md
  middlewares:
    publish-headers:
      headers:
        customRequestHeaders:
          Host: "publish.obsidian.md"
          x-obsidian-custom-domain: "mysite.com"
```

### Cabeçalhos HTTP X suportados

Se o seu serviço de proxy não permitir caminhos de consulta, você pode usar `https://publish.obsidian.md/` com um cabeçalho personalizado `x-obsidian-custom-domain` definido como a URL do seu site `meusite.com/meu-subcaminho`.

## Redirecionar site antigo para domínio personalizado

Se você deseja redirecionar seus visitantes do antigo site `publish.obsidian.md` para seu novo domínio personalizado, habilite a opção **Redirecionar para o seu domínio personalizado** ao configurar seu domínio personalizado.

## Solução de problemas

Após configurar seu domínio personalizado, se você visitou seu site a partir do link anterior `https://publish.obsidian.md/slug`, pode ser necessário limpar o cache do navegador para que certas coisas (como fontes, grafos ou acesso por senha) funcionem corretamente. Isso ocorre devido às restrições de segurança entre domínios impostas pelos navegadores modernos. A boa notícia é que os leitores do seu site nunca devem encontrar esse problema se você permitir que os visitantes usem apenas seu domínio personalizado.
