---
permalink: sync/security
publish: true
mobile: false
description: Zjistěte více o bezpečnostních aspektech a ochraně soukromí služby Obsidian Sync.
---
## Šifrování

Pro vaši bezpečnost [[Úvod do Obsidian Sync|Obsidian Sync]] šifruje váš [[Místní a vzdálené trezory|vzdálený trezor]] a veškerou komunikaci se servery Obsidian.

Při vytváření nového vzdáleného trezoru máte dvě možnosti:

- **End-to-end šifrování (výchozí)** nabízí nejsilnější zabezpečení, ale vyžaduje, abyste si bezpečně uložili své šifrovací heslo. To zaručuje, že nikdo — ani tým Obsidian — nemůže přistupovat k vašim poznámkám.
- **Standardní šifrování** používá šifrovací klíč spravovaný Obsidianem k ochraně vašich dat během přenosu a na našem serveru.

Doporučujeme end-to-end šifrování pro všechny uživatele, protože je to nejsoukromější a nejbezpečnější možnost. Mějte však na paměti, že pokud zapomenete nebo ztratíte své šifrovací heslo, vaše data zůstanou zašifrovaná a navždy nepoužitelná. Nemůžeme obnovit vaše heslo ani žádná zašifrovaná data za vás.

Vaše volba se týká pouze vzdáleného trezoru. Obsidian nešifruje váš lokální trezor.

### Co znamená end-to-end šifrování?

End-to-end šifrování znamená, že data jsou zašifrována od okamžiku, kdy opustí vaše zařízení, a mohou být dešifrována pouze pomocí vašeho šifrovacího klíče, jakmile jsou zpět na jednom z vašich zařízení.

Nemůžeme číst vaše data. Stejně tak je nemohou číst ani případní odposlouchávači, jako je váš poskytovatel internetových služeb.

Ve výjimečném případě kompletního prolomení serveru zůstanou vaše data zašifrovaná — nikdo nemůže dešifrovat vaše soubory bez znalosti vašeho hesla.

### Jaká jsou rizika používání standardního šifrování?

Standardní šifrování je zásadně méně bezpečné než end-to-end šifrování, ale může být pohodlnou volbou, pokud neočekáváte, že data, která synchronizujete, budou zcela soukromá. Například pokud je váš synchronizovaný trezor [[Úvod do Obsidian Publish|publikován]] na veřejné webové stránce, jako je tato stránka nápovědy, end-to-end šifrování není nutné.

Standardní šifrování je stejná metoda šifrování, jakou používají společnosti poskytující cloudové úložiště a platformy typu software-as-a-service, jako jsou Google Docs, Dropbox a iCloud (bez Pokročilé ochrany dat). Váš šifrovací klíč je generován aplikací a používán k ochraně vašich dat během přenosu a na serveru. Protože je šifrovací klíč uložen na serverech společnosti, může být použit k dešifrování vašich dat, např. v případě, kdy je společnost předmětem soudního příkazu k prohlídce, nebo v případě, kdy chcete přistupovat ke svým datům prostřednictvím webového prohlížeče.

End-to-end šifrování zaručuje, že Obsidian nikdy nemůže přistupovat k vašim datům, a mělo by být vždy použito pro synchronizaci dat, která si přejete udržet zcela soukromá a bezpečná.

### Jaké šifrování používáte?

Pro zabezpečení dat implementujeme průmyslově standardní šifrovací protokoly. Konkrétně používáme [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), nejsilnější šifrovací standard, široce využívaný v kontextech jako je online bankovnictví. Proces šifrování zahrnuje následující technické detaily:

- **Funkce pro derivaci klíče:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) se solí
- **Šifrovací algoritmus:** AES-256 s použitím [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Mohu ověřit, že jsou moje data end-to-end šifrovaná?

Ano. Podívejte se na náš průvodce [jak ověřit end-to-end šifrování Obsidian Sync](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Tento průvodce poskytuje podrobné pokyny, jak bezdůvěrně ověřit end-to-end šifrování vašich dat při odesílání a přijímání přes servery Sync.

### Prošel Obsidian nezávislým bezpečnostním auditem?

Ano. Obsidian byl nezávisle auditován. Navštivte naši [stránku o zabezpečení](https://obsidian.md/security) pro zobrazení zpráv z auditů. Pravidelné audity nezávislými bezpečnostními firmami zajišťují, že kód a postupy Obsidian splňují nejvyšší bezpečnostní standardy.

### Co se stane, když zapomenu své šifrovací heslo?

Pokud někdy ztratíte nebo zapomenete šifrovací heslo, nebudete moci připojit další trezory ke svému vzdálenému trezoru. Vzhledem k tomu, že šifrovací heslo není nikde uloženo, je navždy ztraceno.

Vaše data jsou však obvykle bezpečně uložena lokálně na každém z vašich zařízení.

Pro pokračování v používání Obsidian Sync doporučujeme provést kompletní nové nastavení, abyste mohli přidávat nová zařízení do vašeho systému Sync:

1. Vytvořte si kompletní zálohu trezoru na vašem primárním zařízení, pro případ, že by se něco pokazilo. Může to být jednoduše vytvoření kopie složky trezoru nebo vytvoření zip souboru z trezoru.
2. Odpojte vzdálený trezor na každém z vašich zařízení. To lze provést přechodem na **[[Nastavení]] → Sync → Vybrat vzdálený trezor → Odpojit**.
3. [[Nastavení Obsidian Sync#Vytvoření nového vzdáleného trezoru|Vytvořte nový vzdálený trezor]] na vašem primárním zařízení ze stejné stránky Nastavení. Volitelně můžete smazat předchozí vzdálený trezor, protože k němu stejně nemáte heslo. (Možná budete muset smazat předchozí vzdálený trezor, pokud jste na [[Často kladené otázky#Kolik vzdálených trezorů mohu mít?|limitu trezorů]])
4. Počkejte, až se váš primární zařízení synchronizuje. Sledujte indikátor synchronizace v pravém dolním rohu obrazovky, dokud se nezobrazí zelené zaškrtnutí.
5. Připojte každé vaše zařízení ke stejnému nově vytvořenému vzdálenému trezoru. Při připojování se zobrazí varování o sloučení trezoru, to je očekávané a můžete pokračovat. Počkejte, až se každé zařízení plně synchronizuje, než přejdete na další. Tím se snižuje pravděpodobnost problémů.
6. Nyní by měla být všechna vaše zařízení připojena k novému vzdálenému trezoru.

## Hosting

### Kde hostujete servery pro Obsidian Sync?

Naše datová centra, poháněná [DigitalOcean](https://www.digitalocean.com), poskytují možnosti geo-regionálního hostingu vzdáleného trezoru v následujících lokalitách:

> [!abstract] Oblasti Sync
> **Automaticky**: Vaše datové centrum je vybráno na základě vaší IP lokace v okamžiku, kdy jej poprvé nastavíte.
> 
> **Asie**: Singapur
> **Evropa**: Frankfurt, Německo
> **Severní Amerika**: San Francisco, USA
> **Oceánie**: Sydney, Austrálie
^sync-geo-regions

### Kde najdu svůj aktuální server Sync a kde je hostován?

Pro nalezení vašeho serveru Obsidian Sync postupujte takto:
1. Přejděte na **[[Nastavení]]** → **Sync** → **Kopírovat debug informace**.
2. Vložte zkopírované informace do poznámky nebo souboru.
3. Vyhledejte řádek podobný tomuto: `Host server: wss://sync-xx.obsidian.md`

Tento řádek označuje server, kde je váš vzdálený trezor hostován. Pro více informací o umístění serveru a jeho dostupnosti navštivte naši [stránku stavu](https://status.obsidian.md/).

## Síť a přístup

### Správa přístupu k Obsidian Sync ve vaší síti

Pro regulaci přístupu k Obsidian Sync ve vaší síti je třeba spravovat následující domény:

`sync-xx.obsidian.md`

`xx` v tomto případě představuje číslo v rozsahu od `1 - 100`.

> [!tip] Pokud váš systém firewallu to podporuje, doporučujeme přidat na whitelist `sync-*.obsidian.md`, aby se zohlednil průběžný nárůst počtu subdomén.

## Omezení

Obsidian Sync je navržen tak, aby udržoval vaše poznámky soukromé a bezpečné. Abychom zajistili rychlou, spolehlivou synchronizaci a efektivní úložiště napříč zařízeními, provádíme záměrné kompromisy v tom, jak je šifrování aplikováno.

### Deterministické šifrování hashů souborů

Šifrujeme hashe souborů deterministicky: stejný obsah souboru se stejným šifrovacím klíčem a solí vždy vytvoří na serveru stejný zašifrovaný hash. To pomáhá Sync detekovat duplikáty a vyhnout se opětovnému nahrávání nebo ukládání identických dat, což šetří šířku pásma a vzdálené úložiště, zejména v historii verzí nebo když se velké soubory opakují.

Pokud by však útočník kompromitoval server Sync a měl by samostatný způsob, jak donutit uživatele nahrát soubory dle vlastního výběru, mohl by útočník donutit uživatele nahrát konkrétní soubory a zjistit, zda soubor odpovídá souboru, který uživatel dříve nahrál.

### Žádná kryptografická vazba mezi cestou a obsahem

Některá metadata nejsou end-to-end šifrovaná: které zařízení nahrálo nebo smazalo soubor, kdy byl nahrán, a *mapování* mezi zašifrovanými cestami souborů a zašifrovaným obsahem. Tato data jsou čitelná serverem, aby mohl směrovat změny, určovat historii verzí souboru a udržovat zařízení synchronizovaná.

Pokud by byl server Sync kompromitován, útočník by mohl manipulovat s tímto mapováním a způsobit, že obsah jednoho zašifrovaného souboru bude doručen pod jinou cestou souboru. To neodhalí vaše data v prostém textu — zůstanou zašifrovaná.
