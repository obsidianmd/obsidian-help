---
permalink: teams/security
cssclasses:
  - soft-embed
---
Pagina noastră [Security](https://obsidian.md/security) compilează informații despre modul în care Obsidian abordează protecția datelor dumneavoastră. Aceasta este, de asemenea, locul unde sunt publicate auditurile de securitate realizate de terți.

## Considerații

Obsidian este conceput să funcționeze ca aplicație offline și autonomă. Obsidian susține, de asemenea, module și teme personalizate. În plus, oferim asistență atât oficială, cât și neoficială pentru diverse servicii de sincronizare a fișierelor.

Dacă nu intenționați să folosiți module comunitare sau teme, ori [[Introduction to Obsidian Sync|Obsidian Sync]] sau [[Introduction to Obsidian Publish|Obsidian Publish]], procedurile dumneavoastră standard de securizare a aplicațiilor se vor aplica. Totuși, dacă intenționați să folosiți oricare dintre aceste funcționalități, vă recomandăm să evaluați temeinic gradul lor de adecvare pentru locul dumneavoastră de muncă.

## Module comunitare și teme

Vă rugăm să consultați pagina [[Plugin security|Securitatea modulelor]] pe lângă această secțiune.

Obsidian scanează automat fiecare versiune a unui modul comunitar sau a unei teme din [directorul oficial](https://obsidian.md/plugins) pentru vulnerabilități de securitate, probleme de calitate a codului și programe malițioase. Pagina de director a fiecărui proiect afișează rezultatele sub forma unui punctaj de siguranță. Revizuirile manuale continuă pentru elementele populare, promovate și semnalate. Nu revizuim elementele comunitare care nu au fost trimise către directorul oficial.

Nu avem un magazin comunitar pentru [[CSS snippets|fragmentele CSS]]. Aceste fișiere sunt de obicei obținute din cadrul [comunității noastre Obsidian](https://obsidian.md/community) sau din depozite GitHub publice.

Solicităm gruparea resurselor în fragmentele CSS și teme. Totuși, am făcut o excepție pentru [Google Fonts](https://fonts.google.com/) pentru a menține performanța pe dispozitivele mobile, unde impactul grupării fonturilor este mai vizibil.

## Rețea și acces

Deși prioritizăm abordarea „local-first" a aplicației noastre, Obsidian efectuează apeluri de rețea în funcție de serviciile și funcționalitățile pe care le folosiți. Aceste conexiuni de rețea pot fi dezactivate printr-un firewall pentru domenii sau prin blocarea aplicației.

Obsidian realizează aceste conexiuni de rețea pe portul HTTPS 443.

Mai jos este o listă a conexiunilor de rețea pe care le realizează Obsidian.

### Conexiuni provenite de la Obsidian

- **Actualizări cu acces timpuriu**: Folosește `releases.obsidian.md`.
- **Gestionarea contului și a licenței**: Când accesați contul dumneavoastră Obsidian în Setări și aplicați o licență comercială, apelăm `api.obsidian.md`.
- **Obsidian Sync**: Folosit pentru sincronizarea notițelor dumneavoastră între dispozitive.
	- `sync-xx.obsidian.md`, unde `xx` este un număr între 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` și `publish-xx.obsidian.md`, unde `xx` este un număr.
    2. Frontend: `publish.obsidian.md`.

### Conexiuni provenite de la GitHub

Obsidian realizează solicitări de rețea atât către `github.com`, cât și către `raw.githubusercontent.com`.

- **Versiuni publice**: Dacă actualizările automate sunt activate, Obsidian verifică GitHub pentru versiuni publice.
- **Teme și module terțe**:
    - O verificare este efectuată o dată la 12 ore de la pornirea aplicației pentru a prelua un fișier găzduit pe GitHub, folosit pentru „dezactivări de module." Acest fișier ajută la dezactivarea de la distanță a anumitor versiuni de module cunoscute ca funcționând defectuos, cauzând pierderi de date sau fiind potențial vulnerabile ori malițioase.
    - Modulele activate pot genera trafic de rețea în afara controlului Obsidian și GitHub.

### Alte conexiuni

- **Conținut online încorporat**: La deschiderea notițelor care încorporează conținut online, cum ar fi o imagine (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Solicitări DNS**: Dacă un nume de gazdă trebuie rezolvat înainte de stabilirea unei conexiuni, inclusiv DNS prin HTTPS. Consultați [documentația Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) pentru mai multe informații.

## Întrebări frecvente

### Securitatea contului

**Obsidian susține Single Sign-On (SSO)?**
Obsidian nu susține SSO. În majoritatea cazurilor de utilizare, Obsidian nu necesită un cont sau o autentificare la locul dumneavoastră de muncă, cu excepția cazului în care folosiți [[Introduction to Obsidian Publish|Obsidian Publish]] sau [[Introduction to Obsidian Sync|Obsidian Sync]].

**Obsidian susține autentificarea cu mai mulți factori (MFA)?**
Obsidian susține [[2-factor authentication|autentificarea în doi pași]] (2FA) pentru conturile Obsidian, dar nu susține 2FA pentru deschiderea și utilizarea aplicației de bază. Utilizatorii [[Introduction to Obsidian Sync|Obsidian Sync]] și [[Introduction to Obsidian Publish|Obsidian Publish]] care au 2FA activat vor trebui să confirme cheia lor 2FA la prima autentificare în aplicație.

### Evaluări și certificări

**Acceptați evaluări de securitate din partea companiei noastre?**
Solicităm o sumă minimă cotată prin comandă de achiziție înainte de a lua în considerare realizarea unei evaluări de securitate. Aceste evaluări consumă adesea mult timp și pot să nu fie aplicabile aplicațiilor offline precum Obsidian, deoarece sunt de obicei orientate spre serviciile bazate pe cloud.

Totuși, puteți renunța la această sumă cotată prin comandă de achiziție acceptând să plătiți un avans. Vă rugăm să [[Help and support#Contact Obsidian support|contactați asistența Obsidian]] pentru a afla mai multe despre această opțiune.

**Aveți certificări recunoscute legate de securitatea informației sau standarde de calitate, precum ISO27001, NIST, COBIT sau alte certificări ISO sau CSA?**
Nu, deocamdată. Ar putea fi ceva ce vom explora în viitor, dar în prezent, ne concentrăm pe [auditurile noastre de securitate](https://obsidian.md/security).
