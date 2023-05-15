Você pode configurar um domínio ou subdomínio customizado para o seu site [[Introdução ao Obsidian Publish|Obsidian Publish]].

Ainda não temos como fornecer um certificado SSL em seu nome. Se você deseja habilitar HTTPS para um domínio personalizado, você precisa usar seu próprio proxy ou criar um site no CloudFlare.

## Configure usando CloudFlare

A maneira mais fácil de configurar um domínio ou subdomínio personalizado é criar uma conta [CloudFlare](https://cloudflare.com) e deixar CloudFlare gerenciar o DNS do seu domínio.

Ao migrar para CloudFlare, você mantém automaticamente toda a sua configuração de DNS existente, incluindo seus subdomínios, serviço de e-mail e serviços de hospedagem. O uso do CloudFlare pode acelerar seus sites e adicionar SSL aos seus sites gratuitamente.

Normalmente, os usuários hospedam seu conteúdo do Obsidian Publish em um domínio raiz (`mysite.com`) ou um subdomínio imediato (`notes.mysite.com`).

**CloudFlare:**

1. Abra o Cloudflare no domínio ao qual deseja adicionar o Publish, como `mysite.com`, mesmo se desejar um subdomínio como `notes.mysite.com`.
2. Acesse **DNS** e clique em **Adicionar registro**.
3. Selecione **CNAME**
4. Em **nome**, insira seu domínio ou subdomínio, por exemplo `notes.meusite.com`.
5. Em **target**, digite `publish-main.obsidian.md`. Não inclua seu sub-URL pessoal neste valor. Obsidian Publish lida com isso a partir de sua configuração.
6. Vá para **SSL/TLS** e defina o modo de criptografia SSL/TLS como "Full" para configurar o certificado SSL/TLS automaticamente.

**Observação:** Para redirecionar `mysite.com` e `www.mysite.com` para a Obsidian Publish, você precisa criar uma [Page Rule](https://support.cloudflare.com/hc/en- us/articles/200172336-Creating-Page-Rules) com as seguintes configurações:

- Correspondência de URL: `www.mysite.com/*`
- URL de encaminhamento - Redirecionamento permanente 301
- URL de redirecionamento: `https://mysite.com/$1`

Depois de criar a regra de página, você também deve criar um registro CNAME para `www.mysite.com` assim como você criou para `mysite.com`

**Obsidiana:**

1. Na faixa de opções, à esquerda da janela do aplicativo, clique em **Publicar alterações** (ícone de avião de papel).
2. Na caixa de diálogo **Publicar alterações**, clique em **Alterar opções do site** (ícone de engrenagem).
3. Ao lado de **Domínio personalizado**, clique em **Configurar**.
4. Em **Custom URL**, digite o URL do seu domínio ou subdomínio.

**Observação:**: Se a configuração de seu domínio personalizado terminar em um loop de redirecionamento, é provável que o modo de criptografia no CloudFlare tenha sido definido como "Flexível" em vez de "Completo".

## Configurar usando um proxy

Se você deseja hospedar seu próprio servidor da Web e configurar sua própria criptografia SSL, pode escolher esta opção.

Se você já está hospedando um site em seu domínio ou subdomínio, também pode usar esta opção e configurar seu site para carregar o site da Obsidian Publish em um caminho de URL específico, em vez de hospedar o site completo.

Faça proxy de todas as solicitações nesse caminho de URL para `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` e **configurar as opções do site no Obsidian para o mesmo caminho de URL* * definindo **Custom URL** como `mysite.com/my-notes`.

Você também pode configurar o Obsidian Publish como um sub-URL de um site de sua propriedade. Por exemplo, `https://mysite.com/my-notes/`. Para conseguir isso, você deve hospedar seu próprio servidor e fazer proxy de todas as solicitações para nosso servidor em `https://publish.obsidian.md/`.

### NGINX

Na configuração do NGINX, adicione o seguinte:

```nginx
localização /minhas-notas {
   proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
   proxy_ssl_server_name ativado;
}
```

### Apache

Em `.htaccess`, adicione o seguinte:

```htaccess
Motor de reescrita ligado
RewriteRule "^my-notes/(.*)$" "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1" [L,P]
```

**Observação:** `mod_rewrite` deve estar ativado e você também pode precisar configurar [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

```
[[redireciona]]
   from = "https://mysite.com/my-notes/*"
   to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
   estado = 200
   força = verdadeiro
```

### Vercel

Em `vercel.json`, [configurar reescritas](https://vercel.com/docs/configuration#project/rewrites):

```json
{
   ...

   "reescreve": [
     {
       "fonte": "/minhas-notas/",
       "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes"
     },
     {
       "fonte": "/minhas-notas/:caminho*",
       "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:path*"
     }
   ]
}
```

### Caddie

```
meusite.com {
codificar zstd gzip
handle /minhas-notas* {
reverse_proxy https://publish.obsidian.md {
header_up Host {upstream_hostport}
}
reescrever * /serve?url=mysite.com{path}
}
}
```

### Cabeçalhos X HTTP suportados

Se o seu serviço de proxy não permite caminhos de consulta, você pode usar `https://publish.obsidian.md/` com um cabeçalho personalizado `x-obsidian-custom-domain` definido para o URL do seu site `mysite.com/my -subcaminho`.

## Redirecionar site antigo para domínio personalizado

Se você deseja redirecionar seus visitantes do antigo site `publish.obsidian.md` para seu novo domínio personalizado, ative a opção **Redirecionar para seu domínio personalizado** ao configurar seu domínio personalizado.

## Solução de problemas

Depois de configurar seu domínio personalizado, se você visitou seu site a partir do link `https://publish.obsidian.md/slug` anterior, talvez seja necessário limpar o cache do navegador para determinadas coisas (como fontes, gráficos, ou senha de acesso) para funcionar corretamente. Isso ocorre devido às restrições de segurança entre domínios impostas pelos navegadores modernos. A boa notícia é que os leitores do seu site nunca devem ter esse problema se você permitir que os visitantes usem seu domínio personalizado.