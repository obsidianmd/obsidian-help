---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Mută-ți seiful Sync într-o altă regiune.
aliases:
  - Sync regions
---
Când creezi un [[Seifuri locale și la distanță|seif la distanță]] prin [[Introducere în Obsidian Sync|Obsidian Sync]], datele tale sunt criptate și stocate pe unul dintre serverele regionale Sync ale Obsidian. Acest ghid explică modul în care poți muta seiful tău Sync pe un alt server regional.

## Regiuni disponibile

Următoarele regiuni sunt disponibile cu Obsidian Sync. Recomandăm să folosești **Automat** sau să alegi o locație apropiată de tine pentru a reduce latența și a face procesul de sincronizare mai rapid.

![[Obsidian Sync/Securitate și confidențialitate#^sync-geo-regions]]

## Notează-ți setările

Când conectezi un dispozitiv la noul seif la distanță, Sync poate folosi setările pe care le ai activate în acel moment. Dacă păstrezi setări diferite pe dispozitive diferite, notează-le înainte de a începe. De exemplu, s-ar putea să nu sincronizezi fișiere media mari pe telefonul tău.

Pe fiecare dispozitiv care folosește seiful la distanță, deschide **[[Setări]] → Sync** și notează aceste setări. O captură de ecran funcționează bine.

- **Sincronizare selectivă**
- **Sincronizare configurare seif**
- **Directoare excluse**
- Setări specifice dispozitivului, cum ar fi **Numele dispozitivului** și **Rezolvarea conflictelor**

Consultă [[Setări Sync și sincronizare selectivă]] pentru a afla ce face fiecare setare și care sunt activate implicit.

## Schimbă regiunea Sync

Pentru a schimba regiunea seifului tău la distanță, va trebui să-ți recreezi seiful pe un alt server Sync. Reține că poți schimba și regiunile folosind asistentul de migrare [[Actualizează criptarea Sync]], dacă seiful tău la distanță se află pe o versiune mai veche.

> [!danger] Migrările sunt distructive
> 
> **Fă întotdeauna o [[Fă copii de rezervă ale fișierelor Obsidian|copie de rezervă]] a seifului tău înainte de a continua cu o migrare.**
> 
> Când migrezi un seif la distanță, datele tale vor fi înlocuite. Aceasta înseamnă că:
> 
> 1. Datele de la distanță vor fi eliminate de pe serverele Obsidian, iar datele seifului vor fi reîncărcate în locul lor.
> 2. Tot [[Istoricul versiunilor|istoricul versiunilor]] pentru seif va fi pierdut.

![[Configurează Obsidian Sync#Deconectează-te de la un seif la distanță]]

Dacă folosești [[Planuri și limite de stocare|planul Standard]], va trebui, de asemenea, să [[Configurează Obsidian Sync#Șterge un seif la distanță|ștergi seiful tău la distanță]] înainte de a continua.

![[Configurează Obsidian Sync#Creează un nou seif la distanță]]

## Reconectează celelalte dispozitive

După ce noul seif la distanță termină sincronizarea pe primul tău dispozitiv, comută fiecare alt dispozitiv care folosea vechiul seif la distanță. Lucrează pe câte un dispozitiv pe rând.

1. Pe dispozitiv, [[Configurează Obsidian Sync#Deconectează-te de la un seif la distanță|deconectează-te de la vechiul seif la distanță]].
2. [[Configurează Obsidian Sync#Sincronizează un seif la distanță pe alt dispozitiv|Conectează-te la noul seif la distanță]]. Nu selecta încă **Începeți sincronizarea**.
3. Setează **Sincronizare selectivă**, **Sincronizare configurare seif** și **Directoare excluse** pentru a corespunde setărilor pe care le-ai notat pentru acest dispozitiv.
4. Repornește Obsidian. Pe mobil sau tabletă, s-ar putea să fie nevoie să forțezi închiderea aplicației.
5. Selectează **Începeți sincronizarea** sau **Reia**, și așteaptă până când Sync termină înainte de a trece la următorul dispozitiv.

În plus, poți [[Configurează Obsidian Sync#Șterge un seif la distanță|șterge vechiul tău seif la distanță]] odată ce ai confirmat trecerea la noul tău seif la distanță și la regiunea lui.
