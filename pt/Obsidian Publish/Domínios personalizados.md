---
permalink: publish/domains
mobile: true
description: Você pode configurar um domínio ou subdomínio personalizado para o seu site do Obsidian Publish.
---
Pode configurar um domínio ou subdomínio personalizado para o seu site [[Introdução ao Obsidian Publish|Obsidian Publish]].

> [!warning] Aviso
> De momento, apenas suportamos a configuração de domínios personalizados utilizando os seguintes métodos:
>
> - [[#Configurar usando o CloudFlare]] utilizando o [modo Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Configurar usando um proxy]]
> 
> Ainda não temos uma forma de provisionar um certificado SSL em seu nome.

## Configurar usando o CloudFlare

A forma mais fácil de configurar um domínio ou subdomínio personalizado é criar uma conta no [CloudFlare](https://cloudflare.com) e deixar o CloudFlare gerir o DNS do seu domínio.

Os passos seguintes utilizam o CloudFlare para configurar um domínio personalizado para o seu site Obsidian Publish, quer utilizando um domínio raiz (`meusite.com`) ou um subdomínio (`notas.meusite.com`).

> [!important] Importante
> O CloudFlare é o **único fornecedor oficialmente suportado** para configurar domínios personalizados. Usar as seguintes instruções com qualquer outro fornecedor provavelmente não funcionará.

**CloudFlare:**

1. Abra o Cloudflare no domínio onde pretende alojar o seu site Publish, como `meusite.com`, mesmo que queira um subdomínio como `notas.meusite.com`.
2. Vá a **DNS** e clique em **Add Record**.
3. Selecione **CNAME**.
4. Em **name**, introduza o seu domínio ou subdomínio, por exemplo `notas.meusite.com`.
5. Em **target**, introduza `publish-main.obsidian.md`. Não inclua o seu sub-URL pessoal neste valor. O Obsidian Publish trata disso a partir da sua configuração.
6. Certifique-se de que o **proxy status** está ativado. Deve estar ativado por predefinição.
7. Vá a **SSL/TLS** e defina o modo de encriptação SSL/TLS para "Full" para configurar o certificado SSL/TLS automaticamente.

> [!note] Nota
> Para redirecionar tanto `meusite.com` como `www.meusite.com` para o Obsidian Publish, precisa de criar uma [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) com as seguintes definições:
>
> - URL match: `www.meusite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://meusite.com/$1`
>
> Depois de criar a regra de página, crie um registo CNAME para `www.meusite.com` tal como fez para `meusite.com`.

**Obsidian:**

1. Abra o Obsidian no seu computador.
2. Na [[Barra de ferramentas]] à esquerda, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
3. Em **Publicar alterações**, selecione **Mudar configurações do site** ![[lucide-cog.svg#icon]].
4. Junto a **Domínio personalizado**, selecione **Configurar**.
5. Em **Endereço personalizado**, introduza o URL do seu domínio ou subdomínio. Certifique-se de não colocar `www.` na caixa de URL personalizado.

> [!note] Nota
> Se a configuração do seu domínio personalizado resultar num ciclo de redirecionamento, é provável que o modo de encriptação no CloudFlare tenha sido definido como "Flexible" em vez de "Full".

## Configurar usando um proxy

Também pode configurar SSL/TLS para o seu domínio personalizado utilizando o seu próprio servidor web.

Se já estiver a alojar um site no seu domínio ou subdomínio, também pode usar esta opção e configurar o seu site para carregar o seu site Obsidian Publish num caminho de URL específico, em vez de alojar o site completo.

Encaminhe todos os pedidos sob esse caminho de URL para `https://publish.obsidian.md/serve?url=meusite.com/minhas-notas/...` e configure as opções do site no Obsidian para o mesmo caminho de URL, definindo o **Endereço personalizado** como `meusite.com/minhas-notas`.

Também pode configurar o Obsidian Publish como um sub-URL de um site que possui. Por exemplo, `https://meusite.com/minhas-notas/`. Para conseguir isto, deve alojar o seu próprio servidor e encaminhar todos os pedidos para o nosso servidor em `https://publish.obsidian.md/`.

Os seguintes exemplos de configuração de proxy não são exaustivos, mas fornecem métodos comuns para esta implementação.

### NGINX

Na sua configuração NGINX, adicione o seguinte:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Alguns utilizadores reportaram que adicionar `$request_uri` ao proxy pass pode ser necessário:

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
> O `mod_rewrite` deve estar ativado, e também pode precisar de configurar o [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

No `netlify.toml`, [configure redirecionamentos](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

No `vercel.json`, [configure reescritas](https://vercel.com/docs/configuration#project/rewrites):

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

Este excerto de configuração mínima redireciona `mysite.com` para o Obsidian Publish.
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

Se o seu serviço de proxy não permitir caminhos de consulta, pode usar `https://publish.obsidian.md/` com um cabeçalho personalizado `x-obsidian-custom-domain` definido como o URL do seu site `meusite.com/meu-subcaminho`.

## Redirecionar site antigo para domínio personalizado

Se quiser redirecionar os seus visitantes do antigo site `publish.obsidian.md` para o seu novo domínio personalizado, ative a opção **Redirecionar para o seu endereço personalizado** ao configurar o seu domínio personalizado.

## Resolução de problemas

Depois de configurar o seu domínio personalizado, se tiver visitado o seu site a partir da sua ligação anterior `https://publish.obsidian.md/slug`, pode precisar de limpar a cache do navegador para que certas coisas (como fontes, grafos ou acesso por palavra-passe) funcionem corretamente. Isto deve-se às restrições de segurança entre domínios impostas pelos navegadores modernos. A boa notícia é que os leitores do seu site nunca deverão encontrar este problema se apenas permitir que os visitantes usem o seu domínio personalizado.
