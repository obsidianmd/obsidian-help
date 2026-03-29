---
permalink: sync/security
publish: true
mobile: false
description: Lär dig om säkerhets- och integritetsaspekterna för Obsidian Sync.
---
## Kryptering

För din säkerhet krypterar [[Introduktion till Obsidian Sync|Obsidian Sync]] ditt [[Lokala och fjärrvalv|fjärrvalv]] och all kommunikation med Obsidians servrar.

När du skapar ett nytt fjärrvalv har du två alternativ:

- **Slutpunkt-till-slutpunkt-kryptering (standard)** erbjuder den starkaste säkerheten men kräver att du förvarar ditt krypteringslösenord på ett säkert sätt. Detta garanterar att ingen — inte ens Obsidian-teamet — kan komma åt dina anteckningar.
- **Standardkryptering** använder en krypteringsnyckel som hanteras av Obsidian för att skydda dina data under överföring och på vår server.

Vi rekommenderar slutpunkt-till-slutpunkt-kryptering för alla användare eftersom det är det mest privata och säkra alternativet. Var dock medveten om att om du glömmer eller tappar bort ditt krypteringslösenord förblir dina data krypterade och oanvändbara för alltid. Vi kan inte återställa ditt lösenord eller några krypterade data åt dig.

Ditt val påverkar bara ditt fjärrvalv. Obsidian krypterar inte ditt lokala valv.

### Vad innebär slutpunkt-till-slutpunkt-kryptering?

Slutpunkt-till-slutpunkt-kryptering innebär att data krypteras från det ögonblick de lämnar din enhet och bara kan dekrypteras med din krypteringsnyckel när de är tillbaka på en av dina enheter.

Vi kan inte läsa dina data. Det kan inte heller potentiella avlyssnare, som din internetleverantör.

I det sällsynta fallet av ett fullständigt serverintrång förblir dina data krypterade — ingen kan dekryptera dina filer utan att känna till ditt lösenord.

### Vilka risker finns med att använda standardkryptering?

Standardkryptering är i grunden mindre säker än slutpunkt-till-slutpunkt-kryptering, men det kan vara ett praktiskt alternativ om du inte förväntar dig att data du synkroniserar ska vara helt privata. Till exempel, om ditt synkroniserade valv är [[Introduktion till Obsidian Publish|publicerat]] på en offentlig webbplats som denna hjälpwebbplats, är slutpunkt-till-slutpunkt-kryptering inte nödvändig.

Standardkryptering är samma krypteringsmetod som används av molnlagringsföretag och programvara-som-tjänst-plattformar, såsom Google Docs, Dropbox och iCloud (utan Advanced Data Protection). Din krypteringsnyckel genereras av appen och används för att skydda dina data under överföring och på servern. Eftersom krypteringsnyckeln lagras på företagets servrar kan den användas för att dekryptera dina data, t.ex. i ett fall där företaget är föremål för en husrannsakningsorder, eller i ett fall där du vill komma åt dina data via en webbläsare.

Slutpunkt-till-slutpunkt-kryptering garanterar att Obsidian aldrig kan komma åt dina data och bör alltid användas för att synkronisera data som du vill ska förbli helt privata och säkra.

### Vilken kryptering använder ni?

För datasäkerhet implementerar vi branschstandardiserade krypteringsprotokoll. Specifikt använder vi [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), den starkaste krypteringsstandarden, som används flitigt i sammanhang som internetbank. Krypteringsprocessen involverar följande tekniska detaljer:

- **Nyckelderiveringsfunktion:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) med salt
- **Krypteringsalgoritm:** AES-256 med [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Kan jag verifiera att mina data är slutpunkt-till-slutpunkt-krypterade?

Ja. Se vår guide, [hur du verifierar Obsidian Syncs slutpunkt-till-slutpunkt-kryptering](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Denna guide ger steg-för-steg-instruktioner för att tillitslöst verifiera slutpunkt-till-slutpunkt-krypteringen av dina data när de skickas och tas emot via Sync-servrar.

### Har Obsidian genomgått en tredjepartssäkerhetsgranskning?

Ja. Obsidian har granskats oberoende. Besök vår [säkerhetssida](https://obsidian.md/security) för att se granskningsrapporter. Regelbundna granskningar av tredjepartssäkerhetsföretag säkerställer att Obsidians kod och rutiner uppfyller de högsta säkerhetsstandarderna.

### Vad händer om jag glömmer mitt krypteringslösenord?

Om du någonsin tappar bort eller glömmer krypteringslösenordet kommer du inte att kunna ansluta ytterligare valv till ditt fjärrvalv. Eftersom krypteringslösenordet inte sparas någonstans är det för alltid förlorat.

Dina data är dock vanligtvis säkert lagrade lokalt på var och en av dina enheter.

För att fortsätta använda Obsidian Sync rekommenderar vi att göra en fullständig ominstallation för att kunna lägga till nya enheter i ditt Sync-system:

1. Gör en fullständig valvsäkerhetskopiering på din primära enhet, ifall något går fel. Det kan vara så enkelt som att göra en kopia av valvmappen eller skapa en zip-fil från valvet.
2. Koppla från fjärrvalvet på var och en av dina enheter. Detta kan göras genom att gå till **[[Inställningar]] → Sync → Välj fjärrvalv → Koppla från**.
3. [[Konfigurera Obsidian Sync#Skapa ett nytt fjärrvalv|Skapa ett nytt fjärrvalv]] på din primära enhet från samma inställningssida. Valfritt kan du radera det tidigare fjärrvalvet eftersom du ändå inte har lösenordet till det. (Du kan behöva radera det tidigare fjärrvalvet om du har nått [[Vanliga frågor#Hur många fjärrvalv kan jag ha?|valvgränsen]])
4. Vänta tills din primära enhet synkroniseras. Titta på synkroniseringsindikatorn längst ner till höger på skärmen tills den visar en grön bockmarkering.
5. Anslut var och en av dina enheter till samma nyskapade fjärrvalv. Vid anslutning kommer du att se en varning om valvsammanslagning — detta är förväntat och du kan fortsätta. Vänta tills varje enhet är helt synkroniserad innan du går vidare till nästa. Detta minskar risken för problem.
6. Nu bör alla dina enheter vara anslutna till det nya fjärrvalvet.

## Värdtjänst

### Var driftar ni servrarna för Obsidian Sync?

Våra datacenter, drivna av [DigitalOcean](https://www.digitalocean.com), erbjuder georegionala värdtjänstalternativ för fjärrvalv på följande platser:

> [!abstract] Sync-regioner
> **Automatisk**: Ditt datacenter väljs baserat på din IP-plats vid tidpunkten då du först konfigurerar det.
> 
> **Asien**: Singapore
> **Europa**: Frankfurt, Tyskland
> **Nordamerika**: San Francisco, USA
> **Oceanien**: Sydney, Australien
^sync-geo-regions

### Var hittar jag min nuvarande Sync-server och var är den värd?

För att hitta din Obsidian Sync-server, följ dessa steg:
1. Gå till **[[Inställningar]]** → **Sync** → **Kopiera felsökningsinformation**.
2. Klistra in den kopierade informationen i en anteckning eller fil.
3. Leta efter en rad som liknar denna: `Host server: wss://sync-xx.obsidian.md`

Denna rad visar servern där ditt fjärrvalv är värd. För mer information om serverns platser och drifttid, besök vår [statussida](https://status.obsidian.md/).

## Nätverk och åtkomst

### Hantera åtkomst till Obsidian Sync på ditt nätverk

För att reglera åtkomst till Obsidian Sync på ditt nätverk behöver du hantera följande domäner:

`sync-xx.obsidian.md`

`xx` i detta fall representerar ett nummer från `1 - 100`.

> [!tip] Om ditt brandväggssystem stödjer det rekommenderar vi att vitlista `sync-*.obsidian.md` för att ta hänsyn till den kontinuerliga tillväxten av subdomännummer.

## Begränsningar

Obsidian Sync är utformat för att hålla dina anteckningar privata och säkra. För att leverera snabb, pålitlig synkronisering och effektiv lagring mellan enheter gör vi några medvetna avvägningar i hur kryptering tillämpas.

### Deterministisk filhash-kryptering

Vi krypterar filhashar deterministiskt: samma filinnehåll, med samma krypteringsnyckel och salt, producerar alltid samma krypterade hash på servern. Detta hjälper Sync att upptäcka dubbletter och undvika att ladda upp eller lagra identisk data på nytt, vilket sparar bandbredd och fjärrlagring, särskilt i versionshistorik eller när stora filer upprepas.

Om en angripare dock komprometterar en Sync-server, och de har ett separat sätt att tvinga en användare att ladda upp filer efter eget val, kan angriparen tvinga användaren att ladda upp specifika filer och avgöra om filen matchar en fil som användaren tidigare har laddat upp.

### Ingen kryptografisk bindning mellan sökväg och innehåll

Viss metadata är inte slutpunkt-till-slutpunkt-krypterad: vilken enhet som laddade upp eller raderade en fil, när den laddades upp, och *mappningen* mellan krypterade filsökvägar och krypterat innehåll. Denna data är läsbar av servern så att den kan dirigera ändringar, fastställa versionshistoriken för en fil och hålla enheter synkroniserade.

Om en Sync-server komprometterades kunde en angripare manipulera den mappningen, vilket får innehållet i en krypterad fil att levereras under en annan filsökväg. Detta avslöjar inte din klartextdata — den förblir krypterad.
