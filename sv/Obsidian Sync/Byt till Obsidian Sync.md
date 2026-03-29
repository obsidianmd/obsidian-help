---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Lär dig hur du övergår från din nuvarande synkroniseringslösning till Obsidian Sync.
---
Lär dig hur du övergår från din nuvarande synkroniseringslösning till Obsidian Sync.

> [!warning] Undvik att använda flera lösningar för att synkronisera samma filer
> Vi [[Vanliga frågor#Kan jag använda synk från tredje part med Obsidian Sync?|rekommenderar inte]] att använda Obsidian Sync tillsammans med molnlagringstjänster (t.ex. iCloud, Dropbox, OneDrive, Google Drive) eftersom detta kan orsaka konflikter. Molnlagringstjänster kan dock spela en roll i din [[Säkerhetskopiera dina Obsidian-filer|säkerhetskopierings]]-strategi.

## Flytta ditt valv bort från din synktjänst eller molnlagring från tredje part

Om ditt valv lagras på någon av följande platser synkroniseras det troligen av en tredjepartstjänst:

- **Windows**: `C:\Users\Username\Desktop` eller `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` eller `/users/username/Documents`
- **iOS**: Mappen **iCloud** i appen Filer
- **Övrigt**: Vilken mapp som helst under en synktjänst, till exempel `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` osv.

Även om Android och Linux tenderar att ha färre problem med detta är det ändå värt att kontrollera din valvplats på dessa enheter.

> [!tip] Om ditt nuvarande lokala valv är anslutet till ett fjärrvalv kommer Obsidian att försöka identifiera om valvet ligger i en synktjänst. Om så är fallet kommer du att se ett meddelande högst upp i Obsidian Syncs inställningar.

För att undvika konflikter med synktjänster rekommenderar vi att du lagrar dina Obsidian-valv på följande platser:

- **Windows**: Rekommenderade platser i ordning:
    1. `D:\` eller någon annan enhet som inte är C: och inte en nätverksenhet
    2. `C:\Vaults` (om du har behörighet att använda C:\-enheten)
    3. `C:\Users\Username\Vaults` (om du måste ha ditt valv inom C:\Users\Username, se till att OneDrive inte är inställt att ta bort filer. OneDrive är generellt mindre aggressivt utanför mapparna `Desktop` och `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: Ingen specifik rekommendation på grund av variationen i filsystem. Se bara till att Obsidian har fullständig läs-/skrivåtkomst och att ingen synktjänst hanterar mappen.
- **iOS/iPadOS**: Lagra valvet **På min iPhone** eller **På enheten**.
- **Android**: Använd mappen `Documents/` på din enhet.

## Flytta ditt valv med Obsidian på datorn

![[Hantera valv#Flytta valv till en annan mapp]]

## Flytta ditt valv på mobil

På mobila enheter körs Obsidian i en isolerad miljö, vilket innebär att du inte kan flytta valv i appen som du kan på datorn.

### Android

Androids filsystem varierar mycket mellan enheter, men generellt sett, följ samma steg som du skulle använda för att flytta ditt valv manuellt och se till att det tas bort från alla synktjänster på din enhet.

### iOS och iPadOS

Följ dessa steg för att flytta ett befintligt iCloud-valv till din enhet:

> [!note] Om du redan har datan på en annan enhet och har konfigurerat Obsidian Sync rekommenderas det att [[Konfigurera Obsidian Sync#Synkronisera ett fjärrvalv på en annan enhet|konfigurera ett nytt lokalt valv från Sync]] istället.

- [[Säkerhetskopiera dina Obsidian-filer|Säkerhetskopiera]] ditt valv.
- Skapa ett nytt valv på din enhet och se till att **Spara i iCloud Drive** är inaktiverat.
- Tvångsavsluta Obsidian-appen på alla enheter för att pausa Sync.
- Öppna appen **Filer** på din iOS/iPadOS-enhet.
- Tryck länge på valvmappen under **iCloud Drive → Obsidian** och välj sedan **Flytta**.
- Flytta valvet till **På min iPhone/Enhet → Obsidian** och bekräfta att det nu är synligt.
- Tryck på **Kopiera**.
- Gå tillbaka till **iCloud Drive → Obsidian** och radera den gamla valvmappen.

När du öppnar Obsidian igen bör valvet visa en valvikon istället för en molnikon, vilket bekräftar att det inte längre ligger i iCloud Drive. Obsidian Sync kommer inte heller längre att visa varningsmeddelandet i sina inställningar.

## Nästa steg

- Vill du komma igång med Obsidian Sync? [[Konfigurera Obsidian Sync]]
- Behöver du fortfarande hjälp? Kolla in [[Felsök Obsidian Sync]]
