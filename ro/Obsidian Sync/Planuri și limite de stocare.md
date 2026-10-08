---
permalink: sync/plans
publish: true
mobile: true
description: Află mai multe despre opțiunile de planuri disponibile pentru Obsidian Sync.
aliases:
  - Plans and storage limits
---

## Planuri

Pentru a-ți sincroniza notele cu [[Introducere în Obsidian Sync|Obsidian Sync]] ai nevoie de un plan de abonament. Poți achiziționa un plan Sync autentificându-te în [contul tău](https://obsidian.md/account/sync). Consultă [pagina Sync](https://obsidian.md/sync) pentru prețuri.

Mai jos este o comparație între planul Standard și planul Plus:

|                                                  | Sync Standard | Sync Plus       |
| ------------------------------------------------ | ------------- | --------------- |
| Seifuri sincronizate                                    | 1             | 10              |
| Dimensiune maximă fișier                                | 5 MB          | 200 MB          |
| Stocare totală                                    | 1 GB          | 10 GB până la 100 GB |
| [[Istoricul versiunilor\|Istoricul versiunilor]]                              | 1 lună       | 12 luni       |
| Dispozitive                                          | Nelimitat     | Nelimitat       |
| [[Colaborează într-un seif partajat\|Seifuri partajate]] | Da           | Da             |

## Limite de stocare

Cantitatea de date pe care le poți stoca folosind [[Introducere în Obsidian Sync|Obsidian Sync]] depinde de planul tău de abonament. Pe planul Sync Plus poți achiziționa stocare suplimentară de până la 100 GB prin [panoul de control al contului tău](https://obsidian.md/account/sync). Consultă [[Întrebări frecvente]] pentru mai multe detalii.

Există o limită de stocare unică la nivel de cont pentru toate notele de pe seifurile tale. [[Istoricul versiunilor|Istoricul versiunilor]] și [[Atașamente|atașamentele]] se contorizează, de asemenea, în limita de stocare a contului tău.

Când atingi limita de stocare a contului tău, modulul Sync va opri sincronizarea fișierelor, iar tu vei fi solicitat să reduci dimensiunea seifului tău la distanță.

### Identifică și șterge fișierele mari

Pentru a identifica și șterge fișierele mari din seif:

1. Deschide **[[Setări]] → Sync**.
2. Selectează **Vezi cele mai mari fișiere** lângă **Dimensiunea seifului depășește limita**.
	1. Dacă nu vezi **Dimensiunea seifului depășește limita**, înseamnă că ==nu ai atins încă limita de dimensiune==.
3. Închide fereastra modală **Vezi cele mai mari fișiere**.
4. Șterge unele dintre fișierele mari de care nu mai ai nevoie.
5. Așteaptă ca Obsidian Sync să termine sarcina. Acest lucru poate dura ceva timp.
6. Deschide **[[Setări]] → Sync**.
7. Selectează **Curăță** lângă **Dimensiunea seifului depășește limita**. Acest lucru va elimina fișierele șterse din seiful la distanță pentru a elibera spațiu.

După ce operațiunea de curățare se sincronizează cu serverul, Obsidian Sync ar trebui să reia funcționarea.

### Creează un nou seif la distanță

Poți **crea un nou seif la distanță** pentru a exclude fișierele mari înainte de sincronizare. Istoricul versiunilor pentru fișierele tale va fi resetat dacă creezi un nou seif la distanță. Asigură-te că nu ai nevoie de istoricul versiunilor pentru fișierele mai vechi înainte de a continua.

Pentru a sincroniza cu un nou seif la distanță, urmează acești pași:

1. Deschide **[[Setări]] → Sync**.
2. Selectează **Gestionează** lângă **Seif la distanță**.
3. Alege **Creează seif nou** și urmează pașii pentru a-l crea. Dacă ai epuizat numărul de seifuri disponibile, s-ar putea să fie nevoie să te [[Configurează Obsidian Sync#Deconectează-te de la un seif la distanță|deconectezi]] mai întâi de la seiful la distanță curent și să-l [[Configurează Obsidian Sync#Șterge un seif la distanță|ștergi]].
4. Configurează fișierele excluse înainte de a începe sincronizarea cu noul seif la distanță.
5. Repornește Obsidian pentru a aplica modificările.
6. Deschide **[[Setări]] → Sync**.
7. Selectează reia pentru a începe sincronizarea cu noul seif la distanță.

Noul seif la distanță ar trebui să fie mai mic decât cel anterior, datorită absenței istoricului versiunilor și a fișierelor excluse.

## Fă upgrade la planul tău

Poți face upgrade la planul tău autentificându-te în [panoul de control al contului tău](https://obsidian.md/account/sync). De acolo vei putea face upgrade de la Sync Standard la Sync Plus și poți crește stocarea până la 100 GB.

## Fă downgrade la planul tău

Dacă dorești să faci downgrade la planul tău Sync, dar utilizarea stocării depășește limita noului plan, va trebui să eliberezi spațiu în seiful tău la distanță. În prezent, nu există o metodă directă pentru a elimina rapid anumite fișiere dintr-un seif la distanță existent. Acest lucru se întâmplă deoarece atașamentele sunt păstrate în istoricul versiunilor timp de până la două săptămâni, iar istoricul versiunilor se contorizează în limita ta de stocare.

Cea mai rapidă modalitate de a reduce utilizarea stocării Sync este să creezi un nou seif la distanță cu atașamentele dezactivate, apoi să ștergi vechiul seif la distanță care depășește limitele de stocare. Reține că vei pierde istoricul versiunilor procedând astfel.

Dacă faci downgrade de la Sync Plus la Sync Standard, va trebui, de asemenea, să reduci numărul de seifuri existente la unul singur înainte ca downgrade-ul să fie permis.

### Păstrează istoricul versiunilor

Atașamentele sunt păstrate în [[Istoricul versiunilor|istoricul versiunilor]] timp de până la două săptămâni. Dacă intenționezi să faci downgrade în viitorul apropiat, poți începe prin a elimina atașamentele din seiful tău local.

După două săptămâni, acestea vor fi eliminate definitiv din seiful la distanță și nu se vor mai contoriza în limita ta de stocare. În acest moment vei putea face downgrade la planul tău, păstrând în același timp istoricul versiunilor pentru celelalte tipuri de fișiere, precum fișierele Markdown.
