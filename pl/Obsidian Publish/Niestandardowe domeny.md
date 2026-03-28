---
permalink: publish/domains
mobile: true
description: Możesz skonfigurować własną domenę lub subdomenę dla swojej strony Obsidian Publish.
---
Możesz skonfigurować niestandardową domenę lub subdomenę dla swojej strony [[Wprowadzenie do Obsidian Publish|Obsidian Publish]].

> [!warning] Ostrzeżenie
> W tej chwili obsługujemy konfigurację niestandardowych domen wyłącznie za pomocą następujących metod:
>
> - [[#Konfiguracja za pomocą CloudFlare]] przy użyciu [trybu Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Konfiguracja za pomocą proxy]]
> 
> Nie mamy jeszcze możliwości wystawienia certyfikatu SSL w Twoim imieniu.

## Konfiguracja za pomocą CloudFlare

Najłatwiejszym sposobem skonfigurowania niestandardowej domeny lub subdomeny jest utworzenie konta [CloudFlare](https://cloudflare.com) i pozwolenie CloudFlare na zarządzanie DNS Twojej domeny.

Poniższe kroki opisują użycie CloudFlare do konfiguracji niestandardowej domeny dla Twojej strony Obsidian Publish, zarówno z użyciem domeny głównej (`mysite.com`), jak i subdomeny (`notes.mysite.com`).

> [!important] Ważne
> CloudFlare jest **jedynym oficjalnie obsługiwanym operatorem** do konfiguracji niestandardowych domen. Zastosowanie poniższych instrukcji z innymi operatorami prawdopodobnie nie zadziała.

**CloudFlare:**

1. Otwórz Cloudflare dla domeny, na której chcesz hostować swoją stronę Publish, np. `mysite.com`, nawet jeśli chcesz użyć subdomeny takiej jak `notes.mysite.com`.
2. Przejdź do **DNS** i kliknij **Add Record**.
3. Wybierz **CNAME**.
4. W polu **name** wpisz swoją domenę lub subdomenę, na przykład `notes.mysite.com`.
5. W polu **target** wpisz `publish-main.obsidian.md`. Nie dołączaj w tej wartości swojego osobistego sub-URL. Obsidian Publish obsługuje to na podstawie Twojej konfiguracji.
6. Upewnij się, że **proxy status** jest włączony. Powinien być włączony domyślnie.
7. Przejdź do **SSL/TLS** i ustaw tryb szyfrowania SSL/TLS na "Full", aby automatycznie skonfigurować certyfikat SSL/TLS.

> [!note] Uwaga
> Aby przekierować zarówno `mysite.com`, jak i `www.mysite.com` do Obsidian Publish, musisz utworzyć [regułę strony (Page Rule)](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) z następującymi ustawieniami:
>
> - Dopasowanie URL: `www.mysite.com/*`
> - Przekierowanie URL - 301 Permanent Redirect
> - URL przekierowania: `https://mysite.com/$1`
>
> Po utworzeniu reguły strony utwórz rekord CNAME dla `www.mysite.com` tak samo, jak zrobiłeś to dla `mysite.com`.

**Obsidian:**

1. Otwórz Obsidian na swoim komputerze.
2. Na [[Menu wstążkowe|wstążce]] po lewej stronie kliknij **Opublikuj zmiany** ![[lucide-send.svg#icon]].
3. W sekcji **Opublikuj zmiany** wybierz **Zmień ustawienia strony** ![[lucide-cog.svg#icon]].
4. Obok **Niestandardowa domena** wybierz **Ustaw**.
5. W polu **Niestandardowy URL** wpisz adres URL swojej domeny lub subdomeny. Upewnij się, że nie wpisujesz `www.` w polu niestandardowego URL.

> [!note] Uwaga
> Jeśli konfiguracja niestandardowej domeny kończy się pętlą przekierowań, prawdopodobnie tryb szyfrowania w CloudFlare został ustawiony na "Flexible" zamiast "Full".

## Konfiguracja za pomocą proxy

Możesz również skonfigurować SSL/TLS dla swojej niestandardowej domeny, używając własnego serwera WWW.

Jeśli już hostujesz stronę internetową pod swoją domeną lub subdomeną, możesz również użyć tej opcji i skonfigurować swoją stronę tak, aby ładowała stronę Obsidian Publish pod określoną ścieżką URL, zamiast hostować pełną stronę.

Przekieruj (proxy) wszystkie żądania pod tą ścieżką URL do `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` i skonfiguruj opcje strony w Obsidian na tę samą ścieżkę URL, ustawiając **Niestandardowy URL** na `mysite.com/my-notes`.

Możesz również skonfigurować Obsidian Publish jako sub-URL strony, którą posiadasz. Na przykład `https://mysite.com/my-notes/`. Aby to osiągnąć, musisz hostować własny serwer i przekierować (proxy) wszystkie żądania do naszego serwera pod adresem `https://publish.obsidian.md/`.

Poniższe przykłady konfiguracji proxy nie są wyczerpujące, ale przedstawiają popularne metody tej implementacji.

### NGINX

W konfiguracji NGINX dodaj następujący fragment:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Niektórzy użytkownicy zgłaszali, że dodanie `$request_uri` do proxy pass może być wymagane:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

W pliku `.htaccess` dodaj następujący fragment:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Uwaga
> Moduł `mod_rewrite` musi być włączony. Może być również konieczne skonfigurowanie [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

W pliku `netlify.toml` [skonfiguruj przekierowania](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

W pliku `vercel.json` [skonfiguruj przepisywanie](https://vercel.com/docs/configuration#project/rewrites):

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

Ten minimalny fragment konfiguracji przekierowuje `mysite.com` do Obsidian Publish.
Zobacz [dokumentację Traefik](https://doc.traefik.io/traefik/routing/overview/)
po pełny przykład.

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

### Obsługiwane nagłówki HTTP X-Headers

Jeśli Twoja usługa proxy nie pozwala na ścieżki zapytań, możesz użyć `https://publish.obsidian.md/` z niestandardowym nagłówkiem `x-obsidian-custom-domain` ustawionym na adres URL Twojej strony `mysite.com/my-subpath`.

## Przekierowanie starej strony na niestandardową domenę

Jeśli chcesz przekierować odwiedzających ze starej strony `publish.obsidian.md` na nową niestandardową domenę, włącz opcję **Przekieruj do swojej domeny niestandardowej** podczas konfigurowania niestandardowej domeny.

## Rozwiązywanie problemów

Po skonfigurowaniu niestandardowej domeny, jeśli wcześniej odwiedzałeś swoją stronę za pomocą linku `https://publish.obsidian.md/slug`, może być konieczne wyczyszczenie pamięci podręcznej przeglądarki, aby niektóre elementy (takie jak czcionki, grafy lub dostęp chroniony hasłem) działały poprawnie. Jest to spowodowane ograniczeniami bezpieczeństwa między domenami narzucanymi przez nowoczesne przeglądarki. Dobra wiadomość jest taka, że czytelnicy Twojej strony nie powinni nigdy napotkać tego problemu, jeśli pozwolisz odwiedzającym korzystać wyłącznie z Twojej niestandardowej domeny.
