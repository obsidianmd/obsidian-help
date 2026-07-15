---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Mută-ți seiful Sync într-o altă regiune, efectuează un upgrade de criptare.'
---
Implicit, Obsidian Sync folosește [[Obsidian Sync/Security and privacy#Criptare|criptare integrală]] pentru toate datele tale. Aceasta garantează că nimeni — nici măcar echipa Obsidian — nu îți poate accesa notele.

Obsidian face ocazional upgrade la criptarea Sync pentru a menține cele mai înalte standarde de [[Obsidian Sync/Security and privacy|securitate]]. Dacă este disponibil un upgrade de criptare, vei vedea o opțiune intitulată **Fă upgrade la criptarea seifului** în **Setări Obsidian → Sync**. Acest proces îți permite, de asemenea, să-ți schimbi [[Sync regions|regiunea Sync]].

## Versiuni de criptare

Toate seifurile noi folosesc automat cea mai recentă criptare. Seifurile existente pot fi actualizate folosind asistentul de migrare. Reține că toate dispozitivele trebuie să folosească o versiune a aplicației Obsidian care acceptă versiunea de criptare Sync la care migrezi.

| Data lansării                                                            | Versiune Sync | Versiune minimă aplicație |
| ----------------------------------------------------------------------- | ------------ | ------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3            | 1.8.3               |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0            | 0.9.21              |

## Fă upgrade la criptare cu asistentul de migrare

Înainte de a continua, creează o [[Back up your Obsidian files|copie de rezervă]] a seifului tău pentru a preveni orice pierdere potențială de date. Acest proces va șterge definitiv toate datele din seiful tău la distanță cu criptarea veche, inclusiv istoricul versiunilor.

> [!danger] Migrările sunt distructive
> 
> **Fă întotdeauna o [[Back up your Obsidian files|copie de rezervă]] a seifului tău înainte de a continua cu o migrare.**
> 
> Când migrezi un seif la distanță, datele tale vor fi înlocuite. Aceasta înseamnă că:
> 
> 1. Datele de la distanță vor fi eliminate de pe serverele Obsidian, iar datele seifului vor fi reîncărcate în locul lor.
> 2. Tot [[Version history|istoricul versiunilor]] pentru seif va fi pierdut.

1. Deschide **[[Settings]]**.
2. În bara laterală, selectează **Sync**.
3. Clic pe **Fă upgrade la seif**. Această opțiune va fi vizibilă doar dacă este disponibil un upgrade pentru seiful tău la distanță.
4. Verifică din nou copiile tale de rezervă și clic pe **Continuă**.
5. La **Numele seifului**, introdu numele seifului la distanță.
6. La **Regiune**, alege [[Set up Obsidian Sync#Servere de sincronizare regionale|regiunea]] serverului pentru seiful tău la distanță.
7. La **Parolă de criptare**, alege o parolă pentru seiful tău. Aceasta creează un seif criptat integral. Parola seifului este separată de contul tău Obsidian și poate fi diferită pentru fiecare dintre seifurile tale. Pentru mai multe informații, consultă [[Security and privacy]].
8. Odată ce ai reîncărcat datele cu noua criptare, reconectează-te la noul seif Sync pe celelalte dispozitive ale tale.
