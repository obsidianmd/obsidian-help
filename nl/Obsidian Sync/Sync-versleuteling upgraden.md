---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Verplaats je Sync-kluis naar een andere regio en voer een versleutelingsupgrade uit.
---
Standaard gebruikt Obsidian Sync [[Obsidian Sync/Beveiliging en privacy#Versleuteling|end-to-end-encryptie]] voor al je gegevens. Dit garandeert dat niemand — ook niet het Obsidian-team — toegang heeft tot je notities.

Obsidian upgradet Sync-versleuteling af en toe om de hoogste [[Obsidian Sync/Beveiliging en privacy|beveiligings]]normen te handhaven. Als er een versleutelingsupgrade beschikbaar is, zie je een optie met de titel **Versleuteling van kluis upgraden** in **Obsidian Instellingen → Sync**. Dit proces stelt je ook in staat om je [[Sync-regio's|Sync-regio]] te wijzigen.

## Versleutelingsversies

Alle nieuwe kluizen gebruiken automatisch de nieuwste versleuteling. Bestaande kluizen kunnen worden geüpgraded met behulp van de migratieassistent. Let op dat alle apparaten een Obsidian app-versie moeten gebruiken die de Sync-versleutelingsversie ondersteunt waarnaar je migreert.

| Releasedatum                                                            | Sync-versie | Minimale app-versie |
| ----------------------------------------------------------------------- | ----------- | ------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3           | 1.8.3               |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0           | 0.9.21              |

## Versleuteling upgraden met de migratieassistent

Voordat je verdergaat, maak een [[Back-up maken van je Obsidian-bestanden|back-up]] van je kluis om mogelijk gegevensverlies te voorkomen. Dit proces zal alle gegevens in je externe kluis met de oude versleuteling permanent verwijderen, inclusief de versiegeschiedenis.

> [!danger] Migraties zijn destructief
> 
> **Maak altijd een [[Back-up maken van je Obsidian-bestanden|back-up]] van je kluis voordat je verdergaat met een migratie.**
> 
> Wanneer je een externe kluis migreert, worden je gegevens vervangen. Dit betekent:
> 
> 1. Externe gegevens worden verwijderd van Obsidian-servers en kluisgegevens worden opnieuw geüpload ter vervanging.
> 2. Alle [[Versiegeschiedenis|versiegeschiedenis]] van de kluis gaat verloren.

1. Open **[[Instellingen]]**.
2. Selecteer in de zijbalk **Sync**.
3. Klik op **Kluis upgraden**. Deze optie is alleen zichtbaar als er een upgrade beschikbaar is voor je externe kluis.
4. Controleer je back-ups nogmaals en klik op **Doorgaan**.
5. Voer bij **Kluisnaam** de naam in van de externe kluis.
6. Kies bij **Regio** je server[[Obsidian Sync instellen#Regionale sync-servers|regio]] voor je externe kluis.
7. Kies bij **Wachtwoord voor versleuteling** een wachtwoord voor je kluis. Dit maakt een end-to-end versleutelde kluis aan. Het kluiswachtwoord staat los van je Obsidian-account en kan voor elk van je kluizen verschillend zijn. Zie [[Beveiliging en privacy]] voor meer informatie.
8. Nadat je je gegevens opnieuw hebt geüpload met de nieuwe versleuteling, maak je opnieuw verbinding met de nieuwe Sync-kluis op je andere apparaten.
