---
permalink: teams/security
cssclasses:
  - soft-embed
---
La nostra pàgina de [Seguretat](https://obsidian.md/security) recopila informació sobre com Obsidian aborda la protecció de les vostres dades. També és el lloc on es publiquen les auditories de seguretat completades per tercers.

## Consideracions

Obsidian està dissenyat per funcionar com una aplicació autònoma i sense connexió. Obsidian també admet connectors i temes personalitzats. A més, proporcionem suport tant oficial com no oficial per a diversos serveis de sincronització de fitxers.

Si no teniu intenció d'utilitzar connectors o temes de la comunitat, ni [[Introducció a Obsidian Sync|Obsidian Sync]] ni [[Introducció a Obsidian Publish|Obsidian Publish]], els vostres procediments estàndard per protegir aplicacions seran aplicables. No obstant això, si teniu previst utilitzar alguna d'aquestes funcionalitats, us recomanem avaluar-ne a fons la idoneïtat per al vostre lloc de treball.

## Connectors i temes de la comunitat

Si us plau, reviseu la pàgina [[Seguretat dels connectors]] a més d'aquesta secció.

L'equip d'Obsidian revisa tots els connectors i temes de la comunitat enviats al directori oficial, a través del nostre [repositori de versions](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). No revisem elements de la comunitat que no hagin estat enviats al directori oficial.

No disposem d'una botiga comunitària per a [[Pedaços de CSS]]. Aquests fitxers s'obtenen normalment des de la nostra [Comunitat Obsidian](https://obsidian.md/community) o des de repositoris públics de GitHub.

Requerim l'empaquetament de recursos en fragments CSS i temes. No obstant això, hem fet una excepció per a [Google Fonts](https://fonts.google.com/) per mantenir el rendiment en dispositius mòbils, on l'impacte de l'empaquetament de tipus de lletra és més notable.

## Xarxa i accés

Tot i prioritzar l'enfocament local-first de la nostra aplicació, Obsidian fa crides de xarxa segons els serveis i funcionalitats que utilitzeu. Aquestes connexions de xarxa es poden desactivar mitjançant un tallafocs de domini o un bloqueig de l'aplicació.

Obsidian fa aquestes connexions de xarxa a través del port HTTPS 443.

A continuació es mostra una llista de les connexions de xarxa que fa Obsidian.

### Connexions d'origen Obsidian

- **Actualitzacions d'accés anticipat**: Utilitza `releases.obsidian.md`.
- **Gestió de comptes i llicències**: Quan accediu al vostre compte d'Obsidian a la Configuració i apliqueu una Llicència Comercial, fem crides a `api.obsidian.md`.
- **Obsidian Sync**: S'utilitza per sincronitzar les vostres notes entre dispositius.
	- `sync-xx.obsidian.md`, on `xx` és un número entre 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` i `publish-xx.obsidian.md`, on `xx` és un número.
    2. Frontend: `publish.obsidian.md`.

### Connexions d'origen GitHub

Obsidian fa peticions de xarxa tant a `github.com` com a `raw.githubusercontent.com`.

- **Versions públiques**: Si les actualitzacions automàtiques estan activades, Obsidian consulta GitHub per a versions públiques.
- **Temes i connectors de tercers**:
    - Es fa una comprovació cada 12 hores des de l'hora d'inici de l'aplicació per obtenir un fitxer allotjat a GitHub utilitzat per a "obsolescència de connectors." Aquest fitxer ajuda a desactivar remotament versions específiques de connectors coneguts per funcionar malament, causar pèrdua de dades, o ser potencialment vulnerables o maliciosos.
    - Els connectors activats poden generar tràfic de xarxa fora del control d'Obsidian i GitHub.

### Altres connexions

- **Contingut en línia incrustat**: Quan obriu notes que incrusten contingut en línia, com ara una imatge (`![gat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Peticions DNS**: Si cal resoldre un nom d'amfitrió abans d'establir una connexió, incloent-hi DNS sobre HTTPS. Consulteu la [documentació de Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) per a més informació.

## Preguntes freqüents

### Seguretat del compte

**Obsidian admet Single Sign-On (SSO)?**
Obsidian no admet SSO. En la majoria de casos d'ús, Obsidian no requereix un compte ni inici de sessió al vostre lloc de treball, tret que utilitzeu [[Introducció a Obsidian Publish|Obsidian Publish]] o [[Introducció a Obsidian Sync|Obsidian Sync]].

**Obsidian admet l'autenticació multifactor (MFA)?**
Obsidian admet l'[[Autenticació de 2 factors|autenticació de 2 factors]] (2FA) per als comptes d'Obsidian, però no admet 2FA per obrir i utilitzar l'aplicació base. Els usuaris d'[[Introducció a Obsidian Sync|Obsidian Sync]] i [[Introducció a Obsidian Publish|Obsidian Publish]] que tinguin el 2FA activat hauran de confirmar la seva clau 2FA quan iniciïn sessió per primera vegada a l'aplicació.

### Avaluacions i certificacions

**Acceptareu avaluacions de seguretat de la nostra empresa?**
Requerim un import mínim de comanda de compra pressupostada abans de considerar completar una avaluació de seguretat. Aquestes avaluacions sovint consumeixen molt de temps i poden no ser aplicables a aplicacions fora de línia com Obsidian, ja que normalment estan orientades a serveis basats en el núvol.

No obstant això, podeu renunciar a aquest import de comanda de compra pressupostada acceptant pagar una tarifa de reserva. Si us plau, contacteu el [[Ajuda i suport#Contactar amb el suport d'Obsidian|suport d'Obsidian]] per informar-vos sobre aquesta opció.

**Disposeu d'alguna certificació reconeguda relacionada amb la seguretat de la informació o estàndards de qualitat, com ISO27001, NIST, COBIT o altres certificacions ISO o CSA?**
No en aquest moment. És quelcom que podríem explorar en el futur, però per ara, el nostre enfocament se centra en les nostres [auditories de seguretat](https://obsidian.md/security).
