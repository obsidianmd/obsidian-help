Du kan opsætte dit eget domæne eller underdomæne for dit [[Introduktion til Obsidian Publish|Obsidian Publish]] websted.

Vi har endnu ikke en mulighed for at anskaffe SSL certifikater på dine vegne. Hvis du ønsker at aktivere HTTPS for dit eget domæne, skal du enten bruge din egen proxy eller oprette et websted på CloudFlare.

## Opsætning ved hjælp af CloudFlare

Den nemmeste måde at opsætte dit eget domæne eller underdomæne er at oprette en [CloudFlare](https://cloudflare.com) og lade CloudFlare håndtere dit domænes DNS.

Når du migrerer til CLoudFlare, vil du automatisk beholde alle dine eksisterende DNS opsætninger, inklusiv underdomæner, email services og hosting services, Ved at benytte CloudFlare kan du øge hastigheden på dit websted og tilføje SSL på dine websteder gratis.

Obsidian Publish brugere opsætter typisk deres indhold på et rod domæne (`mitwebsted.dk`) eller på et umiddelbart underdomæne (`noter.mitwebsted.dk`).

**VloudFlare:**

1. Åben ClouFlare p ådet domæne, som du vil tilføje til Obsidian Publish, såsom `mitwebsted.dk` uanset, om du vil have et underdomæne som `noter.mitwebsted.dk`
2. Gå til **DNS** og klik på **Add Record**
3. Vælg **CNAME**
4. I **name** skriver du dit domæne eller underdomæne, f.eks. `noter.mitwebsted.dk`
5. Skriv `publish-main.obsidian.md`i **target**. Du skal ikke skrive din personlige under URL her. Obsidian Publish håndterer dette fra din konfiguration
6. Gå til **SSL/TLS** og sæt SSL/TLS krypteringstilstanden til "Full" for at konfigurere SSL/TLS certifikatet automatisk

**Note:** For både at redirrigere `mitwebsted.dk` og `noter.mitwebsted.dk` til Obsidian Publish har du brug for at oprette en [side regel](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) med følgende indstillinger:

- URL match: `www.mitwebsted.dk/*`
- Forward URL - 301 Permanent Redirect
- Redirect URL: `https://mitwebsted.dk/$1`

Når du har oprettet side reglen, kan du derefter oprette en CNAME record for `www.mitwebsted.dk` som du gjorde for `mitwebsted.dk`.

**Obsidian:**

1. Klik på **Udgiv ændringer** (papirflyver ikonet) i båndmenuen
2. Klik på **Websteds indstillinger** (tandhjuls ikonet) i **Udgiv ændringer** dialogen
3. Klik på **Konfigurer** ved siden af **Brugerdefineret domæne**
4. Skriv URL'en til dit domæne eller underdomæne i tekstfeltet ved siden af **Brugerdefineret URL**

**Note:** Hvis din brugerdefinerede domæneopsætning ender i et redirrigerings loop, skyldes det højst sandsynligvis at krypteringstilstanden i CloudFlare er sat til "Flexible" i stedet for "Full".

## Opsætning ved brug af en proxy

Hvis du vil hoste din egen webserver og opsæte din egen SSL kryptering, kan du også gøre dette.

Hvis du allerede hoster et websted på dit eget domæne eller underdomæne, kan du også benytte denne mulighed, og opsætte dit websted. hvor Obsidian Publish håndterer dit websted med en specifik URL, i stedet for at hoste et helt websted.

Proxy alle anmodninger under denne URL sti til `https://publish.obsidian.md/serve?url=mitwebsted.dk/mine-noter/...` og **konfigurer webstedsindstillingerne  i Obsidian til den samme URL** ved at opsætte **Brugerdefineret domæne** til `mitwebsted.dk/mine-noter`.

Du kan også opsætte Obsidian Publish på et af dine underdomæner. F.eks. `https://mitwebsted.dk/my-notes/`. Du skal hoste din egen server og proxy alle requests til vores server på `https://publish.obsidian.md/` for at kunne gøre dette.

### NGINX

Tilføj følgende til din NGINX konfiguration:

```nginx
location /mine-noter {
  proxy_pass https://publish.obsidian.md/serve?url=mitwebsted.dk/mine-noter/;
  proxy_ssl_server_name on;
}
```

### Apache

Tilføj følgende til `.htaccess`:

```htaccess
RewriteEngine  on
RewriteRule    "^mine-noter/(.*)$"  "https://publish.obsidian.md/serve?url=mitwebsted.dk/mine-noter/$1"  [L,P]
```

**Note:**  `mod_rewrite` skal være aktiveret, og det kan også være nødvendigt at konfigurere [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache).

### Netlify

```
[[redirects]]
  from = "https://mitwebsted.dk/mine-noter/*"
  to = "https://publish.obsidian.md/serve?url=mitwebsted.dk/mine-noter/:splat"
  status = 200
  force = true
```

### Vercel

[Konfigurer rewrite](https://vercel.com/docs/configuration#project/rewrites) i `vercel.json`:

```json
{
  ...

  "rewrites": [
    {
      "source": "/mine-noter/",
      "destination": "https://publish.obsidian.md/serve?url=mitwebsted.dk/mine-noter"
    },
    {
      "source": "/mine-noter/:path*",
      "destination": "https://publish.obsidian.md/serve?url=mitwebsted.dk/mine-noter/:path*"
    }
  ]
}
```

### Caddy

```
mitwebsted.dk {
	encode zstd gzip
	handle /mine-noter* {
		reverse_proxy https://publish.obsidian.md {
			header_up Host {upstream_hostport}
		}
		rewrite * /serve?url=mitwebsted.dk{path}
	}
}
```

### Understøttede HTTP X-Headers

Hvis din proxy service ikke understøtter "query paths" kan du benytte `https://publish.obsidian.md/` med en brugerdefineret header `x-obsidian-custom-domain` sat til dit webseds URL `mitwebsted.dk/mine-noter`.

## Redirigering af et gammelt websted til eget domæne

Hvis du ønsker, at redirrigere din besøgende fra det gamle `publish.obsidian.md` websted til dit eget nye websted, skal du aktivere **Omdiriger til dit eget domæne**, når du konfigurerer dit eget domæne.

## Fejlsøgning

Når du har sat dit eget domæne op, og hvis dine besøgende har besøgt til websted fra den gamle internetadresse `https://publish.obsidian.md/slug`, kan det være nødvendigt at rydde din browser cache (såsom fonte, grafer, eller kodeord) for at kunne fungere ordentligt. Det skyldes sikkerhedsrestriktioner på tværs af domæner i moderne browsere. Den gode nyhed er, at dine besøgende ikke vil løbe ind i det problem, hvis du kun anvender dit weget domæne.
