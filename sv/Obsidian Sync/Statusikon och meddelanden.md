---
permalink: sync/messages
publish: true
mobile: true
description: Den här sidan förklarar statusikoner för Obsidian Sync och ger information om synkroniseringsaktivitetsloggen.
---
Obsidian Sync tillhandahåller flera element för att indikera synkroniseringsstatus, främst [[#Sync-statusikon]] och [[#Sync-aktivitetslogg]]. Detaljer om versionskontroll i Obsidian Sync finns på sidan [[Versionshistorik]].

## Sync-statusikon

Sync-statusikonen finns i [[Statusfält|statusfältet]] i skrivbordsversionen och i [[Sidofält#Öppna dolda sidofält|höger sidofält]] på mobil och surfplatta. Ikonen speglar olika synkroniseringstillstånd:

- ![[obsidian-icon-sync-synced.svg#icon]] **Synkroniserad**: Obsidian Sync har fullständigt synkroniserat dina filer. Denna ikon är vanligtvis grön.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synkroniserar**: Obsidian uppdaterar för närvarande fjärrvalvet. Denna ikon är vanligtvis lila.
- ![[obsidian-icon-sync-paused.svg#icon]] **Pausad**: Synkroniseringen har pausats, men Obsidian är fortfarande ansluten till fjärrvalvet. Ikonen är vanligtvis lila.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Frånkopplad**: Sync-kärntillägget är aktivt, men det [[Lokala och fjärrvalv|lokala valvet]] är inte anslutet till ett fjärrvalv. Denna ikon är vanligtvis röd.

Att klicka eller trycka på ikonen öppnar en kontextmeny med följande alternativ:
- ![[obsidian-icon-sync-paused.svg#icon]] Pausa (eller ![[lucide-circle-play.svg#icon]] Återuppta om pausad)
- ![[lucide-history.svg#icon]] [[Versionshistorik]] (Gråmarkerad om du inte visar en anteckning)
- ![[lucide-align-left.svg#icon]] Öppna [[#Sync-aktivitetslogg|Sync-logg]]
- ![[lucide-trash-2.svg#icon]] [[Versionshistorik#Återställ en raderad fil|Raderade filer]]
- ![[lucide-cog.svg#icon]] [[Synkroniseringsinställningar och selektiv synkronisering|Synkroniseringsinställningar]]

## Sync-aktivitetslogg

Obsidian Sync inkluderar en detaljerad synkroniseringslogg som spårar alla interaktioner mellan dina lokala filer och fjärrvalvet. Loggen visar uppladdningar, nedladdningar, raderingar och eventuella problem som sammanfogningskonflikter eller anslutningsproblem.

**Öppna aktivitetsloggen:**
- Klicka på sync-statusikonen i statusfältet
- Gå till **[[Inställningar]] → Sync → Sync-aktivitet**
- Använd **Kommandopalett → Sync: Öppna aktivitetslogg**

Loggen tillhandahåller tidsstämplar och detaljer för varje synkroniseringsoperation, vilket gör den användbar för felsökning av synkroniseringsproblem.

> [!warning] Sync-loggen sparas inte efter att Obsidian stängs. Om du stöter på ett problem, se till att kopiera loggen _innan_ du stänger appen.

Loggen kategoriserar meddelanden i följande typer:

- [[#Allmänna meddelanden]]
- [[#Felmeddelanden]]
- [[#Överhoppade meddelanden]]
- [[#Kontomeddelanden]]

Du kan filtrera Sync-loggen efter **Alla**, **Fel**, **Hoppade över** och **Sammanfogningskonflikter**. Dessutom kan du söka i Sync-loggen med sökrutan i Sync-fönstret.

> [!summary] Vi har inkluderat några av de troligaste meddelandena du kan ha stött på nedan. Listan är inte uttömmande. Om du upplever ett problem och har ett sync-loggmeddelande som du är osäker på, [[Hjälp och support#Kontakta Obsidians support|kontakta Obsidians support]].

### Allmänna meddelanden

Dessa är vanliga dagliga meddelanden du kan stöta på.

**Connecting to server**
Obsidian försöker ansluta till ditt fjärrvalvs [[Obsidian Sync/Säkerhet och integritet#Var kan jag hitta min nuvarande Sync-server och var finns den?|Sync-server]].

**Connected to server. Detecting changes...**
Obsidian har upprättat en anslutning och jämför det lokala valvet med fjärrvalvet för att avgöra om ändringar behövs.

> [!info] Detta meddelande kan också indikera andra potentiella Sync-problem. Om du ser det upprepade gånger och tror att det fortfarande finns objekt att synkronisera, [[Hjälp och support#Kontakta Obsidians support|kontakta Obsidians support]].

**Fully synced**
- Det lokala valvet och fjärrvalvet är fullständigt synkroniserade.

**Merging conflicted file**
En konflikt upptäcktes under synkroniseringen, och filen sammanfogades istället för att skrivas över. Se [[Felsök Obsidian Sync#Konfliktlösning|konfliktlösning]] för mer information. Om sammanfogningen är oönskad kan du återställa tidigare versioner via [[Versionshistorik]] eller [[Filåterställning]].

**Rejected server change**
Ändringarna på fjärrvalvet är äldre än versionen på din lokala enhet, så den lokala versionen behålls och fjärrändringen ignoreras.

### Felmeddelanden

Dessa är meddelanden som beskriver ett fel vid synkronisering av en fil.

**Out of memory**
Detta problem uppstår vanligtvis på mobila enheter när det inte finns tillräckligt med lagringsutrymme eller minne för att ladda ner en fil. Det är vanligast med stora filer, som videor.

### Överhoppade meddelanden

Dessa är meddelanden som beskriver vad som hoppades över, och potentiellt varför.

**Unable to download file with illegal name**

Filen innehåller ett [specialtecken eller en namnkonvention](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) som inte är tillåten på det mottagande operativsystemet. För enkelhetens skull kan du byta namn på filen på källenheten för att ta bort alla specialtecken utom `-` och `_`.

Observera att detta även inkluderar filer med flera punkter `.` i sitt namn på Android-enheter.

### Kontomeddelanden

Dessa är meddelanden relaterade till en ändring i din prenumeration eller ditt konto.

**Vault limit exceeded**
Ditt konto har överskridit den [[Vanliga frågor#Hur stort kan varje fjärrvalv vara|maximala lagringsstorleken]]. Bilagor och versionshistorik bidrar till denna storlek. Även om ditt valv verkar mindre än gränsen kan äldre versioner och filer driva det över.

För att minska valvstorleken:
1. Öppna **[[Inställningar]] → Sync**.
2. Använd alternativen under **Valvstorlek över gränsen** för att ta bort stora filer.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Detta fel kan uppstå i dessa fall:

1. Valvet raderades från en annan enhet.
2. Sync-prenumerationen var inaktiv i över 30 dagar, vilket gjorde att fjärrvalvet togs bort.
3. Prenumerationen avbröts eller återbetalades, vilket resulterade i att fjärrvalvet raderades.

I dessa fall behöver du [[Konfigurera Obsidian Sync#Koppla från ett fjärrvalv|koppla från fjärrvalvet]] och [[Konfigurera Obsidian Sync#Skapa ett nytt fjärrvalv|skapa ett nytt fjärrvalv]], och se till att din lokala data bevaras.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
Ditt konto är nu i ett fullständigt utgånget tillstånd eftersom vi inte kunde behandla betalningen som finns registrerad.

För att fortsätta använda Obsidian Sync behöver du prenumerera igen inom [ditt konto](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync har upptäckt att du för närvarande inte är inloggad. Du behöver logga in igen i appen i avsnittet [[Inställningar#Allmänt#Konto|Konto]] i **[[Inställningar]]**.

I vissa fall kan ett gemenskapstillägg även förhindra Obsidian Sync från att bekräfta ditt kontos inloggningsstatus. Gå in i **[[Tilläggssäkerhet#Begränsat läge|Begränsat läge]]** och försök igen.

### Nätverksmeddelanden

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync har kopplats från Sync-servern av okänd anledning. Sync kommer att försöka återansluta till servern regelbundet.

På iOS visas detta meddelande som följande fel:
`Null is not an object (evaluating 'this.socket.send')`

Det betyder exakt samma sak som meddelandet `Unable to connect to server`, och är inte på något sätt en indikation på att något annat är fel.
