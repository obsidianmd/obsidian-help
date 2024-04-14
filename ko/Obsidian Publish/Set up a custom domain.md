You can set up a custom domain or subdomain for your [[Introduction to Obsidian Publish|Obsidian Publish]] site.

> [!warning]
> 현재, 우리는 다음 두 가지 방법을 사용하여 사용자 정의 도메인을 구성하는 것만 지원합니다:
>
> - [[#Set up using CloudFlare|CloudFlare를 사용한 설정]] ([Full 모드](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full)를 사용하여).
> - [[#Set up using a proxy|Proxy를 사용한 설정]]
> 
> 당사는 현재 사용자를 대신하여 SSL 인증서를 생성하는 방법이 없습니다.

## Set up using CloudFlare

사용자 정의 도메인 또는 서브 도메인을 설정하는 가장 쉬운 방법은 [CloudFlare](https://cloudflare.com/) 계정을 만들고 CloudFlare가 도메인의 DNS를 관리하도록 하는 것입니다.

다음 단계는 CloudFlare를 사용하여 Obsidian Publish 사이트를 루트 도메인(`mysite.com`) 또는 서브 도메인(`notes.mysite.com`)으로 구성하는 방법을 설명합니다.

> [!important]
> CloudFlare는 사용자 정의 도메인 설정을 **공식으로 지원하는 유일한 공급업체**입니다. 이러한 지침을 다른 공급업체와 함께 사용하면 작동하지 않을 가능성이 높습니다.

**CloudFlare:**

1. Publish 사이트를 호스팅하려는 도메인(예: `mysite.com`)에 대한 Cloudflare를 엽니다. 서브 도메인의 경우 `notes.mysite.com`과 같은 서브 도메인을 사용하려면 기본 도메인(예: `mysite.com`)을 열면 됩니다.
2. **DNS**로 이동하고 **Add Record**를 클릭합니다.
3. **CNAME**을 선택합니다.
4. **name**에 도메인 또는 서브 도메인을 입력하십시오(예: `notes.mysite.com`).
5. **target**에 `publish-main.obsidian.md`를 입력하십시오. 이 값에는 개인 서브-URL을 포함하지 마십시오. Obsidian Publish가 이 구성을 처리합니다.
6. **proxy status**가 활성화되어 있는지 확인하십시오. 기본적으로 활성화되어 있어야 합니다.
7. **SSL/TLS**로 이동하여 SSL/TLS 암호화 모드를 "Full"로 설정하여 SSL/TLS 인증서를 자동으로 구성합니다.

> [!note]
> `mysite.com` 및 `www.mysite.com`을 Obsidian Publish로 리디렉션하려면 다음 설정을 사용하여 [페이지 규칙](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules)을 만들어야 합니다:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> 페이지 규칙을 생성한 후 `mysite.com`과 마찬가지로 `www.mysite.com`을 위해 CNAME 레코드를 만듭니다.

**Obsidian:**

1. 컴퓨터에서 Obsidian을 엽니다.
2. 왼쪽에 있는 [[리본|리본]]에서 **변경 사항 출판** (종이 비행기 아이콘)를 클릭합니다.
3. **변경 사항 출판** 대화 상자에서 **사이트 옵션 변경** (톱니바퀴 아이콘)을 선택합니다.
4. **사용자 지정 도메인** 옆의 **설정**를 선택합니다.
5. **사용자 지정 URL**에 도메인 또는 서브 도메인의 URL을 입력합니다.

> [!note]
> 사용자 정의 도메인 설정이 리디렉션 루프로 이어질 경우, CloudFlare의 암호화 모드가 "Flexible" 대신 "Full"로 설정되어 있을 가능성이 있습니다.

## Set up using a proxy

자체 웹 서버를 사용하여 사용자 정의 도메인에 대한 SSL/TLS를 설정할 수도 있습니다.

이미 도메인 또는 서브 도메인 아래에서 웹 사이트를 호스팅하고 있다면 전체 사이트를 호스팅하는 대신 특정 URL 경로에서 Obsidian Publish 사이트를 로드하도록 웹 사이트를 설정할 수도 있습니다.

그 URL 경로 아래의 모든 요청을 `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...`로 프록시하고 Obsidian에서도 동일한 URL 경로로 사이트 옵션을 구성하려면 **사용자 지정 URL**을 `mysite.com/my-notes`로 설정하십시오.

또한 자신의 사이트의 하위 URL로 Obsidian Publish를 설정할 수도 있습니다. 예를 들어, `https://mysite.com/my-notes/`와 같이. 이를 달성하려면 자신의 서버를 호스팅하고 모든 요청을 `https://publish.obsidian.md/`의 서버로 프록시해야 합니다.

### NGINX

NGINX 설정에서 다음을 추가하십시오:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

`.htaccess`에 다음을 추가하십시오:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note]
> `mod_rewrite`가 활성화되어 있어야 하며 [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)를 설정해야 할 수도 있습니다.

### Netlify

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

`vercel.json`에서 [리라이트 설정](https://vercel.com/docs/configuration#project/rewrites)을 구성하십시오:

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

### Supported HTTP X-Headers

당신의 프록시 서비스가 쿼리 경로를 허용하지 않는 경우, `https://publish.obsidian.md/`를 사용하여 사이트 URL을 나타내는 사용자 지정 헤더 `x-obsidian-custom-domain`을 설정할 수 있습니다.

## Redirect old site to custom domain

이전 `publish.obsidian.md` 사이트에서 방문자를 새 사용자 정의 도메인으로 리디렉션하려면 사용자 지정 도메인을 구성할 때 **사용자 지정 도메인으로 리디렉션** 옵션을 활성화하십시오.

## Troubleshoot

사용자 지정 도메인을 설정한 후 이전의 `https://publish.obsidian.md/slug` 링크에서 사이트를 방문한 경우, 일부 요소(글꼴, 그래프 또는 암호 액세스와 같은)가 올바르게 작동하려면 브라우저 캐시를 지워야 할 수도 있습니다. 이는 현대 브라우저에서 적용되는 교차 도메인 보안 제한 때문입니다. 좋은 소식은 사용자 지정 도메인을 허용하기만 하면 여러분의 사이트를 방문하는 독자가 이러한 문제에 직면하지 않을 것입니다.
