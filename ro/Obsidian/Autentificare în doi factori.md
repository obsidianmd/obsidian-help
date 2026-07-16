---
permalink: 2fa
aliases:
  - 2-factor authentication
---
Dacă ai un [cont Obsidian](https://obsidian.md/account) poți activa autentificarea în doi factori (2FA) pentru a-ți proteja contul cu un al doilea pas de verificare.

## Activează 2FA

- Autentifică-te în [contul tău Obsidian](https://obsidian.md/account/profile) din browserul web.
- În secțiunea **Profil**, mergi la **Autentificare în doi factori** și selectează **Activează**.
- Va apărea o fereastră pop-up care te va invita să conectezi o aplicație de autentificare fie cu un **cod QR**, fie cu o **cheie de configurare**.

> [!hint]- Aplicații populare de autentificare
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Odată conectată, aplicația ta de autentificare îți va oferi un cod din șase cifre. Introdu acest cod sub secțiunea **Cod QR/cheie de configurare**, la pasul 3.
- În final, introdu parola curentă.
- Selectează **Finalizează configurarea**.
- Fereastra pop-up va fi înlocuită cu o fereastră de confirmare și codurile tale de recuperare. Te rugăm să descarci codurile de recuperare, deoarece vei avea nevoie de ele pentru a-ți debloca contul.

Autentificarea în doi factori este acum configurată.

> [!warning]- Copii de rezervă pentru codul QR/cheia de configurare
> Dacă decizi să păstrezi o copie de rezervă a **codului QR** sau a **cheii de configurare** pe lângă codurile de recuperare, îți recomandăm insistent să o păstrezi într-un sistem protejat prin parolă și criptat.

## Generează coduri de recuperare

Dacă ai activat 2FA înainte ca acele coduri de recuperare să fie disponibile, sau dacă vrei să-ți reînnoiești codurile de recuperare, urmează acești pași:

- Autentifică-te în [contul tău Obsidian](https://obsidian.md/account/profile) din browserul web.
- Lângă autentificarea în doi factori, selectează **Reînnoiește codurile de recuperare**.
- În fereastra pop-up, introdu **parola** și **codul de autentificare din 6 cifre**.
- O fereastră de confirmare îți va afișa codurile de recuperare. Ai două opțiuni:
    - **Copiază codurile de recuperare**: Copiază codurile pentru a le lipi altundeva.
    - **Descarcă codurile de recuperare**: Descarcă un fișier `obsidian-recovery-codes.txt` care conține codurile tale.
- Selectează **Am înțeles** pentru a închide fereastra pop-up.

Poți folosi un cod de recuperare **o singură dată** în locul **codului de autentificare din 6 cifre**. De asemenea, poți reînnoi codurile de recuperare oricând.

## Dezactivează 2FA

- Autentifică-te în [contul tău Obsidian](https://obsidian.md/account/profile) din browserul web.
- În secțiunea **Profil**, mergi la **Autentificare în doi factori** și selectează **Dezactivează**.
- Introdu parola ta Obsidian.
- Introdu codul curent din șase cifre din aplicația ta de autentificare.
- Selectează **Dezactivează 2FA**.
- Vei fi adus înapoi la ecranul de gestionare a contului.

Setarea **Autentificare în doi factori** va afișa din nou un buton **Activează**, indicând faptul că 2FA a fost dezactivată.

## Întrebări frecvente

**Am activat 2FA. Voi fi deconectat de pe dispozitivele mele Obsidian curente?**
Nu. Activarea 2FA nu te deconectează peste tot, pentru confortul tău. Dacă este nevoie, poți face acest lucru manual din pagina contului tău, iar apoi te poți autentifica din nou pe fiecare dintre dispozitivele tale.

**Am activat, apoi am dezactivat 2FA. Aș vrea să o configurez din nou. Pot folosi codul QR sau cheia de configurare originale?**
Nu. Vei primi un **cod QR** nou și o **cheie de configurare** nouă de fiecare dată când inițiezi o nouă configurare 2FA.

**Am activat 2FA. Nu mi s-a cerut încă după mai multe încercări de deconectare/autentificare. Funcționează corect?**
Este posibil ca memoria cache a browserului să te facă să pari că faci modificări pe pagină (cum ar fi autentificarea sau deconectarea), când, de fapt, accesezi datele stocate. Încearcă să folosești o fereastră de navigare privată pentru autentificare, pentru a confirma că 2FA funcționează.

Dacă această situație persistă, te rugăm să [trimiți un raport de eroare](https://forum.obsidian.md/c/bug-reports/7).

**Mi-am pierdut codurile de recuperare, autentificatorul și tot ce am nevoie pentru a mă autentifica în cont. Ce fac?**

Dacă ți-ai pierdut codurile de recuperare și autentificatorul, te rugăm să trimiți un e-mail la [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) pentru asistență în recuperarea accesului la contul tău.
