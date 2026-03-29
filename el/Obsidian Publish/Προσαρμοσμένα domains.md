---
permalink: publish/domains
mobile: true
description: Μπορείτε να ρυθμίσετε έναν προσαρμοσμένο τομέα ή υποτομέα για τον ιστότοπό σας στο Obsidian Publish.
---
Μπορείτε να ρυθμίσετε ένα προσαρμοσμένο domain ή υποτομέα για την ιστοσελίδα σας στο [[Εισαγωγή στο Obsidian Publish|Obsidian Publish]].

> [!warning] Προειδοποίηση
> Προς το παρόν, υποστηρίζουμε μόνο τη ρύθμιση προσαρμοσμένων domains χρησιμοποιώντας τις ακόλουθες μεθόδους:
>
> - [[#Ρύθμιση με χρήση CloudFlare]] χρησιμοποιώντας [λειτουργία Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Ρύθμιση με χρήση proxy]]
> 
> Δεν έχουμε ακόμη τρόπο να εκδώσουμε πιστοποιητικό SSL για λογαριασμό σας.

## Ρύθμιση με χρήση CloudFlare

Ο ευκολότερος τρόπος για να ρυθμίσετε ένα προσαρμοσμένο domain ή υποτομέα είναι να δημιουργήσετε έναν λογαριασμό στο [CloudFlare](https://cloudflare.com) και να αφήσετε το CloudFlare να διαχειρίζεται τα DNS του domain σας.

Τα ακόλουθα βήματα χρησιμοποιούν το CloudFlare για να ρυθμίσετε ένα προσαρμοσμένο domain για την ιστοσελίδα σας στο Obsidian Publish, είτε χρησιμοποιώντας ένα ριζικό domain (`mysite.com`) είτε έναν υποτομέα (`notes.mysite.com`).

> [!important] Σημαντικό
> Το CloudFlare είναι ο **μόνος επίσημα υποστηριζόμενος πάροχος** για τη ρύθμιση προσαρμοσμένων domains. Η χρήση των ακόλουθων οδηγιών με οποιονδήποτε άλλο πάροχο πιθανότατα δεν θα λειτουργήσει.

**CloudFlare:**

1. Ανοίξτε το Cloudflare στο domain όπου θέλετε να φιλοξενήσετε την ιστοσελίδα Publish, όπως `mysite.com`, ακόμα κι αν θέλετε έναν υποτομέα όπως `notes.mysite.com`.
2. Μεταβείτε στο **DNS** και κάντε κλικ στο **Add Record**.
3. Επιλέξτε **CNAME**.
4. Στο **name**, εισαγάγετε το domain ή τον υποτομέα σας, για παράδειγμα `notes.mysite.com`.
5. Στο **target**, εισαγάγετε `publish-main.obsidian.md`. Μην συμπεριλάβετε το προσωπικό σας sub-URL σε αυτή την τιμή. Το Obsidian Publish το χειρίζεται από τις ρυθμίσεις σας.
6. Βεβαιωθείτε ότι η **proxy status** είναι ενεργοποιημένη. Θα πρέπει να είναι ενεργοποιημένη από προεπιλογή.
7. Μεταβείτε στο **SSL/TLS** και ορίστε τη λειτουργία κρυπτογράφησης SSL/TLS σε "Full" για αυτόματη ρύθμιση του πιστοποιητικού SSL/TLS.

> [!note] Σημείωση
> Για ανακατεύθυνση τόσο του `mysite.com` όσο και του `www.mysite.com` στο Obsidian Publish, πρέπει να δημιουργήσετε έναν [Κανόνα Σελίδας](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) με τις ακόλουθες ρυθμίσεις:
>
> - URL match: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://mysite.com/$1`
>
> Αφού δημιουργήσετε τον κανόνα σελίδας, δημιουργήστε μια εγγραφή CNAME για `www.mysite.com` όπως κάνατε για `mysite.com`.

**Obsidian:**

1. Ανοίξτε το Obsidian στον υπολογιστή σας.
2. Στην [[Κορδέλα]] στα αριστερά, κάντε κλικ στο **Δημοσίευση αλλαγών** ![[lucide-send.svg#icon]].
3. Στο **Δημοσίευση αλλαγών**, επιλέξτε **Αλλάξτε ρυθμίσεις ιστοσελίδας** ![[lucide-cog.svg#icon]].
4. Δίπλα στο **Προσαρμοσμένο domain**, επιλέξτε **Τροποποίηση**.
5. Στο **Προσαρμοσμένο URL**, εισαγάγετε το URL του domain ή υποτομέα σας. Βεβαιωθείτε ότι δεν βάζετε `www.` στο πεδίο προσαρμοσμένου URL.

> [!note] Σημείωση
> Εάν η ρύθμιση του προσαρμοσμένου domain σας καταλήξει σε βρόχο ανακατεύθυνσης, είναι πιθανό η λειτουργία κρυπτογράφησης στο CloudFlare να έχει οριστεί σε "Flexible" αντί για "Full".

## Ρύθμιση με χρήση proxy

Μπορείτε επίσης να ρυθμίσετε SSL/TLS για το προσαρμοσμένο domain σας χρησιμοποιώντας τον δικό σας διακομιστή ιστού.

Εάν ήδη φιλοξενείτε μια ιστοσελίδα στο domain ή τον υποτομέα σας, μπορείτε επίσης να χρησιμοποιήσετε αυτή την επιλογή και να ρυθμίσετε την ιστοσελίδα σας ώστε να φορτώνει την ιστοσελίδα Obsidian Publish σας σε μια συγκεκριμένη διαδρομή URL, αντί να φιλοξενεί ολόκληρη την ιστοσελίδα.

Προωθήστε μέσω proxy όλα τα αιτήματα κάτω από αυτή τη διαδρομή URL στο `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` και ρυθμίστε τις επιλογές ιστοσελίδας στο Obsidian στην ίδια διαδρομή URL, ορίζοντας το **Προσαρμοσμένο URL** σε `mysite.com/my-notes`.

Μπορείτε επίσης να ρυθμίσετε το Obsidian Publish ως sub-URL μιας ιστοσελίδας που σας ανήκει. Για παράδειγμα, `https://mysite.com/my-notes/`. Για να το επιτύχετε αυτό, πρέπει να φιλοξενείτε τον δικό σας διακομιστή και να προωθείτε μέσω proxy όλα τα αιτήματα στον διακομιστή μας στη διεύθυνση `https://publish.obsidian.md/`.

Τα ακόλουθα παραδείγματα ρύθμισης proxy δεν είναι εξαντλητικά, αλλά παρέχουν κοινές μεθόδους για αυτή την υλοποίηση.

### NGINX

Στη ρύθμιση NGINX, προσθέστε τα ακόλουθα:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Ορισμένοι χρήστες ανέφεραν ότι μπορεί να απαιτείται η προσθήκη `$request_uri` στο proxy pass:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

Στο `.htaccess`, προσθέστε τα ακόλουθα:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Σημείωση
> Το `mod_rewrite` πρέπει να είναι ενεργοποιημένο και μπορεί επίσης να χρειαστεί να ρυθμίσετε το [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

Στο `netlify.toml`, [ρυθμίστε ανακατευθύνσεις](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

Στο `vercel.json`, [ρυθμίστε rewrites](https://vercel.com/docs/configuration#project/rewrites):

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

Αυτό το ελάχιστο απόσπασμα ρύθμισης ανακατευθύνει το `mysite.com` στο Obsidian Publish.
Δείτε την [τεκμηρίωση του Traefik](https://doc.traefik.io/traefik/routing/overview/)
για ένα πλήρες παράδειγμα.

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

### Υποστηριζόμενα HTTP X-Headers

Εάν η υπηρεσία proxy σας δεν επιτρέπει διαδρομές ερωτήματος, μπορείτε να χρησιμοποιήσετε `https://publish.obsidian.md/` με μια προσαρμοσμένη κεφαλίδα `x-obsidian-custom-domain` ορισμένη στο URL της ιστοσελίδας σας `mysite.com/my-subpath`.

## Ανακατεύθυνση παλιάς ιστοσελίδας σε προσαρμοσμένο domain

Εάν θέλετε να ανακατευθύνετε τους επισκέπτες σας από την παλιά ιστοσελίδα `publish.obsidian.md` στο νέο προσαρμοσμένο domain σας, ενεργοποιήστε την επιλογή **Ανακατεύθηνση του προσαρμοσμένου domain** κατά τη ρύθμιση του προσαρμοσμένου domain σας.

## Αντιμετώπιση προβλημάτων

Αφού ρυθμίσετε το προσαρμοσμένο domain σας, εάν έχετε επισκεφτεί την ιστοσελίδα σας από τον προηγούμενο σύνδεσμο `https://publish.obsidian.md/slug`, μπορεί να χρειαστεί να εκκαθαρίσετε την προσωρινή μνήμη του προγράμματος περιήγησής σας ώστε ορισμένα πράγματα (όπως γραμματοσειρές, γράφοι ή πρόσβαση με κωδικό πρόσβασης) να λειτουργήσουν σωστά. Αυτό οφείλεται στους περιορισμούς ασφαλείας μεταξύ domains που επιβάλλονται από τα σύγχρονα προγράμματα περιήγησης. Τα καλά νέα είναι ότι οι αναγνώστες της ιστοσελίδας σας δεν θα αντιμετωπίσουν ποτέ αυτό το πρόβλημα εάν τους αφήνετε να χρησιμοποιούν μόνο το προσαρμοσμένο domain σας.
