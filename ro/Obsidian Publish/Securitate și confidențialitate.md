---
permalink: publish/security
aliases:
  - Security and privacy
---
Poți alege notele pe care vrei să le publici pe [[Introducere în Obsidian Publish|Obsidian Publish]]. Restul notelor tale rămân în siguranță în seiful tău.

Doar notele pe care alegi să le publici sunt trimise pe serverele Obsidian, iar orice notă a cărei publicare o anulezi este eliminată.

## Protecție prin parolă

Pentru un control de acces îmbunătățit pe site-ul tău Publish, aplică o parolă pentru site. Vizitatorii vor fi întrebați de o parolă atunci când încearcă să-l acceseze. Dacă decizi să elimini ulterior parola site-ului, întregul site va deveni din nou vizibil publicului.

> [!warning] Protecția prin parolă individuală pentru notele publicate nu este momentan suportată.

### Adaugă o parolă pentru site

1. În panglică, în partea stângă a ferestrei aplicației, apasă pe **Publică schimbările** ![[lucide-send.svg#icon]].
2. În fereastra de dialog **Publică schimbările**, apasă pe **Schimbă opțiunile siteului** ![[lucide-cog.svg#icon]].
3. Sub **Alte setări ale site-ului**, lângă **Parole**, apasă pe **Gestionează**.
4. Apasă pe **Parolă nouă**.
5. La **Parolă**, introdu o parolă pentru site-ul tău.
6. (Opțional) La **Pseudonim**, introdu un pseudonim pentru parolă, de exemplu, persoana căreia vrei să-i acorzi acces la site.
7. Apasă pe **Adaugă această parolă**.

### Elimină o parolă de pe site

1. În panglică, în partea stângă a ferestrei aplicației, apasă pe **Publică schimbările** ![[lucide-send.svg#icon]].
2. În fereastra de dialog **Publică schimbările**, apasă pe **Schimbă opțiunile siteului** ![[lucide-cog.svg#icon]].
3. Sub **Alte setări ale site-ului**, lângă **Parole**, apasă pe **Gestionează**.
5. Apasă pe pictograma X de lângă parola pe care vrei să o ștergi.

## Colectarea datelor
### Datele vizitatorilor

Implicit, Obsidian Publish **nu** colectează date despre vizitatori, nu stochează cookie-uri și nu procesează informații personale. Totuși, poți implementa analitice sau înregistra alte date ale utilizatorilor prin [[Personalizează-ți site-ul|personalizarea site-ului tău]].

Ca proprietar al site-ului, ești responsabil pentru respectarea GDPR și a reglementărilor de confidențialitate din regiunea ta. Aceasta include crearea propriului tău banner de notificare, care poate fi implementat folosind publish.js, precum și adăugarea unei pagini de politică de confidențialitate pe site-ul tău.

## Acces

Obsidian colaborează cu [Cloudflare](https://www.cloudflare.com) pentru a oferi găzduire pentru siteurile noastre Publish. Serverele sunt găzduite în San Francisco, CA.

### Administrarea accesului la Obsidian Publish în rețeaua ta

Pentru a reglementa accesul la Obsidian Publish în rețeaua ta, trebuie să administrezi următoarele domenii:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

În plus, serviciile de backend folosesc următoarele subdomenii: `publish-xx.obsidian.md`, unde `xx` este un număr cuprins între `1 - 100`.

> [!tip] Dacă sistemul tău de firewall suportă acest lucru, îți recomandăm să adaugi pe lista albă `publish-*.obsidian.md` pentru a ține cont de extinderea continuă a subdomeniilor noastre.
