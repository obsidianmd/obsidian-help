អ្នកអាចរៀបចំដែន(Domain) ផ្ទាល់ខ្លួន ឬដែនរង(Subdomain) សម្រាប់គេហទំព័រ [[km/Obsidian Publish/Introduction to Obsidian Publish|Obsidian Publish]] របស់អ្នក។

យើងមិនទាន់មានវិធីផ្តល់វិញ្ញាបនបត្រ SSL ជំនួសអ្នកទេ។ ប្រសិនបើអ្នកចង់បើក HTTPS សម្រាប់ដែន(Domain) ផ្ទាល់ខ្លួន អ្នកត្រូវប្រើប្រូកស៊ី(Proxy) ផ្ទាល់ខ្លួនរបស់អ្នក ឬបង្កើតគេហទំព័រនៅលើ CloudFlare។

## រៀបចំដោយប្រើ CloudFlare

មធ្យោបាយងាយស្រួលបំផុតក្នុងការដំឡើងដែនផ្ទាល់ខ្លួន ឬដែនរងគឺបង្កើតគណនី [CloudFlare](https://cloudflare.com) ហើយអនុញ្ញាតឱ្យ CloudFlare គ្រប់គ្រង DNS របស់ដែនរបស់អ្នក។

នៅពេលអ្នកប្តូរទៅ CloudFlare អ្នករក្សាការដំឡើង DNS ដែលមានស្រាប់របស់អ្នកដោយស្វ័យប្រវត្តិ រួមទាំងដែនរង សេវាកម្មអ៊ីមែល និងសេវាកម្មក្នុងការបង្ហោះ(Hosting Service) របស់អ្នក។ ការប្រើប្រាស់ CloudFlare អាចបង្កើនល្បឿនគេហទំព័ររបស់អ្នក និងបន្ថែម SSL ទៅកាន់គេហទំព័ររបស់អ្នកដោយឥតគិតថ្លៃ។

ជាធម្មតា អ្នកប្រើប្រាស់បង្ហោះមាតិកា Obsidian Publish របស់ពួកគេនៅលើដែនដើម(root domain) (`mysite.com`) ឬ ដែនរង(Subdomain) (`notes.mysite.com`)។

**CloudFlare:**

1. បើក Cloudflare សម្រាប់ដែនដែលអ្នកចង់ដាក់ Publish ទៅ, ដូចជា `mysite.com`, ទោះបីជាអ្នកចង់បានដែនរង(Subdomain) ដូច `notes.mysite.com`.
2. ទៅ **DNS** ហើយចុច **Add Record**។
3. ជ្រើសរើសយក **CNAME**
4. នៅក្នុង **name** បញ្ចូលដែន(Domain) ឬដែនរង(Subdomain)របស់អ្នក ឧទាហរណ៍ `notes.mysite.com`។
5. នៅក្នុង **target** បញ្ជុល `publish-main.obsidian.md`។ កុំបញ្ចូល URL រងផ្ទាល់ខ្លួនរបស់អ្នកនៅក្នុងនេះ។ Obsidian Publish ដោះស្រាយវាពីការកំណត់របស់អ្នក។
6. ទៅ **SSL/TLS** ហើយដាក់របៀបអ៊ិនគ្រីប(encryption mode) របស់ SSL/TLS ទៅ "Full" ដើម្បីកំណត់រចនាសម្ព័ន្ធវិញ្ញាបនបត្រ SSL/TLS ដោយស្វ័យប្រវត្តិ។

**ចំណាំ:** ដើម្បីផ្ទេរទាំង `mysite.com` និង `www.mysite.com` ទៅ Obsidian Publish, អ្នកត្រូវបង្កើត [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) ជាមួយនឹងការកំណត់ដូចខាងក្រោមៈ

- សម្រាប់​ URL match: `www.mysite.com/*`
- សម្រាប់​ Forward URL - 301 Permanent Redirect
- សម្រាប់ Redirect URL: `https://mysite.com/$1`

នៅពេលដែលអ្នកបង្កើតច្បាប់សម្រាប់គេហទំព័រ អ្នកក៏គួរតែបង្កើតកំណត់ត្រា CNAME សម្រាប់ `www.mysite.com` ដូចគ្នានឹងពេលអ្នកបង្កើត `mysite.com`​ ដែរ។

**Obsidian:**

1. នៅក្នុង ribbon នៅខាងឆ្វេងនៃកម្មវិធី ចុច **Publish changes** (រូបសញ្ញាយន្តហោះក្រដាស)។
2. នៅក្នុងប្រអប់ **Publish changes** ចុច **Change site options** (រូបសញ្ញាខ្ចៅ)។
3. នៅជិត **Custom domain** ចុច **Configure**។
4. នៅក្នុង **Custom URL** បញ្ចូល URL ទៅដែន(domain) ឬដែនរង(Subdomain) របស់អ្នក។

**ចំណាំ:**: ប្រសិនបើការដំឡើងដែនផ្ទាល់ខ្លួនរបស់អ្នកបញ្ចប់នៅក្នុងរង្វិលជុំនៃការប្តូរទិស(redirect loop) វាទំនងជាកំណត់របៀបអ៊ិនគ្រីប(Encryption) នៅក្នុង CloudFlare ត្រូវបានកំណត់ទៅជា "Flexible" ជំនួសឱ្យ "Full"។

## ដំឡើងដោយប្រើប្រូកស៊ី(Proxy)

ប្រសិនបើអ្នកចង់បង្ហោះម៉ាស៊ីនមេនៃគេហទំព័រផ្ទាល់ខ្លួនរបស់អ្នក និងរៀបចំការអ៊ិនគ្រីប SSL ផ្ទាល់ខ្លួនរបស់អ្នក អ្នកអាចជ្រើសរើសជម្រើសនេះ។

ប្រសិនបើអ្នកកំពុងបង្ហោះគេហទំព័រនៅក្រោមដែន(Domain) ឬដែនរង(Subdomain) របស់អ្នករួចហើយ អ្នកក៏អាចប្រើជម្រើសនេះ និងរៀបចំគេហទំព័ររបស់អ្នកដើម្បីផ្ទុកគេហទំព័រ Obsidian Publish របស់អ្នកនៅ​ path URL ជាក់លាក់មួយ ជំនួសឱ្យការបង្ហោះគេហទំព័រពេញលេញ។

ប្រូកស៊ីសំណើទាំងអស់នៅ path URL នោះទៅ `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` និង **configure the site options in Obsidian to the same URL path** ដោយកំណត់ **Custom URL** ទៅជា `mysite.com/my-notes`។

អ្នកក៏អាចដំឡើង Obsidian Publish ជា URL រងនៃគេហទំព័រដែលជារបស់អ្នកដែរ។   
ឧទាហរណ៍ `https://mysite.com/my-notes/`. To achieve this, you must host your own server and proxy all requests to our server at `https://publish.obsidian.md/`.

### NGINX

នៅក្នុងការកំណត់ NGINX របស់អ្នក សូមបន្ថែមដូចខាងក្រោម៖

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
}
```

### Apache

នៅក្នុង `.htaccess` សូមបន្ថែមដូចខាងក្រោម៖

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

**ចំណាំ:** `mod_rewrite` ត្រូវតែបើក ហើយអ្នកប្រហែលជាត្រូវកំណត់រចនាសម្ព័ន្ធផង [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)​ ដែរ។

### Netlify

```
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

នៅក្នុង `vercel.json`, [configure rewrites](https://vercel.com/docs/configuration#project/rewrites):

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

```
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

្រសិនបើសេវាប្រូកស៊ី(Proxy service) របស់អ្នកមិនអនុញ្ញាត​អោយប្រើ query paths អ្នកអាចប្រើ `https://publish.obsidian.md/` ជាមួយនឹងចំណងជើងផ្ទាល់ខ្លួន `x-obsidian-custom-domain` កំណត់ទៅ URL គេហទំព័ររបស់អ្នក `mysite.com/my-subpath`។

## ប្តូរទិសគេហទំព័រចាស់ទៅដែនផ្ទាល់ខ្លួន

ប្រសិនបើអ្នកចង់នាំអ្នកទស្សនារបស់អ្នកពីគេហទំព័រ `publish.obsidian.md` ចាស់   
ទៅកាន់ដែនផ្ទាល់ខ្លួនថ្មីរបស់អ្នក ត្រូវបើកដំណើរការ **Redirect to your custom domain**   
នៅពេលកំណត់រចនាសម្ព័ន្ធដែនផ្ទាល់ខ្លួនរបស់អ្នក។

## ក្នុងការដោះស្រាយបញ្ហា

នៅពេលដែលអ្នករៀបចំដែនផ្ទាល់ខ្លួនរបស់អ្នក ប្រសិនបើអ្នកបានចូលមើលគេហទំព័រ`https://publish.obsidian.md/slug`​ របស់អ្នកពីតំណរមុនរបស់អ្នក, អ្នកប្រហែលជាត្រូវសម្អាត browser cache របស់អ្នកសម្រាប់រឿងមួយចំនួន (ដូចជាពុម្ពអក្សរ ក្រាហ្វ ឬការចូលប្រើពាក្យសម្ងាត់) ដើម្បីអោយដំណើរការត្រឹមត្រូវ។ នេះគឺដោយសារតែការរឹតបន្តឹងសុវត្ថិភាពឆ្លងដែន(cross-domain) ដែលត្រូវបានដាក់ដោយកម្មវិធី​ browser ទំនើប។ ដំណឹងល្អគឺថាអ្នកអានគេហទំព័ររបស់អ្នកមិនគួរជួបបញ្ហានេះទេ ប្រសិនបើអ្នកគ្រាន់តែអនុញ្ញាតឱ្យអ្នកទស្សនាប្រើដែន(Domain) ផ្ទាល់ខ្លួនរបស់អ្នក។
