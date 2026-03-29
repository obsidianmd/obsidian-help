---
permalink: publish/customize
publish: true
description: 'Zjistěte, jak přizpůsobit vzhled a styl svého webu Obsidian Publish.'
---
Tato stránka vysvětluje, jak můžete přizpůsobit vzhled a chování vaší stránky [[Úvod do Obsidian Publish|Obsidian Publish]].

## Statické soubory

Svou stránku můžete přizpůsobit [[Publikování obsahu#Publikování poznámek|publikováním]] následujících souborů na vaši stránku:

- `publish.css` pro přidání vlastního CSS
- `publish.js` pro přidání vlastního JavaScriptu
- `favicon-32x32.png` pro nastavení favicon

**Poznámky:**

- [CSS proměnné pro Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) naleznete na naší dokumentační stránce.
- Protože Obsidian nepodporuje CSS ani JavaScript soubory, k jejich vytvoření a úpravě musíte použít jinou aplikaci.
- Soubory `publish.css` i `publish.js` musí být umístěny v kořenovém adresáři (`/`) vašeho trezoru.
- Ve výchozím nastavení se `publish.css` a `publish.js` nezobrazují v průzkumníku souborů, ale stále je můžete publikovat z dialogu **Publish changes**.
- Pro použití vlastního JavaScriptu pomocí `publish.js` potřebujete [[Vlastní domény|vlastní doménu]].

Pro favicony podporuje Obsidian Publish následující konvence pojmenování, kde `32` představuje rozměry ikony v pixelech:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Doporučujeme poskytnout jeden nebo více z následujících rozměrů:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Favicony můžete umístit kamkoli v trezoru, pokud jsou publikovány na vaši stránku.

## Použití komunitního motivu

Pro použití jednoho z komunitních motivů na vaší stránce:

1. Otevřete trezor ve výchozím průzkumníku souborů vašeho operačního systému.
2. Přejděte do složky nastavení trezoru (výchozí: `.obsidian`).
3. Otevřete složku `themes`.
4. Zkopírujte CSS soubor motivu, který chcete na své stránce použít.
5. Vložte soubor do kořenové složky vašeho trezoru.
6. Přejmenujte CSS soubor na `publish.css`.
7. [[Publikování obsahu#Publikování poznámek|Publikujte]] `publish.css`.

**Poznámky:**

- Pokud se styl neaktualizuje během několika minut, zkuste vymazat mezipaměť prohlížeče.
- Mezi světlým a tmavým režimem můžete přepínat v [[Správa stránek#Zobrazení nastavení stránky|nastavení stránky]].
- Mnoho komunitních motivů používá **Style Settings** pro vlastní stylování, ale tato nastavení nefungují na Obsidian Publish.

> [!tip] Vývoj motivů
> Nemůžete najít motiv, který by vám vyhovoval? Naučte se, jak sami [vytvořit Publish motiv](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme).

## Zapnutí funkcí uživatelského rozhraní

Na své stránce můžete přepínat několik funkcí uživatelského rozhraní, jako je zobrazení grafu nebo obsah.

Dostupné funkce uživatelského rozhraní procházejte v sekcích **Zážitek ze čtení** a **Komponenty** v [[Správa stránek#Zobrazení nastavení stránky|nastavení stránky]].

### Přizpůsobení navigace

V rámci Obsidian Publish máte možnost přizpůsobit pořadí navigace a zobrazení souborů a složek v [[Průzkumník souborů|průzkumníku souborů]] Publish. Navigační položky jsou ve výchozím nastavení řazeny v pořadí publikování. Nepublikované poznámky se v tomto panelu nezobrazí.

#### Přístup k možnostem přizpůsobení navigace

1. V [[Postranní panel nástrojů|postranním panelu nástrojů]] vyberte **Publish changes** ![[lucide-send.svg#icon]] nebo otevřete [[Paleta příkazů|paletu příkazů]] a napište **Publish: Publish changes...**
2. V dialogu **Publish changes** vyberte **Změna nastavení stránky** ![[lucide-cog.svg#icon]].
3. V části **Nastavení komponent** vedle **Přizpůsobit navigaci** vyberte tlačítko **Spravovat**.

Nad oknem **Změna nastavení stránky** se zobrazí nové vyskakovací okno s názvem **Navigace**.

#### Úprava navigačních položek

V sekci označené **Náhled navigace** můžete upravit pořadí zobrazení vašeho publikovaného obsahu.

1. Vyberte složku nebo poznámku, kterou chcete upravit.
2. Přetáhněte poznámku nebo složku nahoru nebo dolů na požadované místo.
3. V pravém dolním rohu okna **Navigace** vyberte **Hotovo**.

Publish odešle změny navigace na vaši stránku.

#### Skrytí a zobrazení navigačních položek

Pokud máte publikované poznámky nebo složky, které nechcete zobrazovat v navigaci, můžete je místo toho skrýt.

1. Vyberte složku nebo poznámku, kterou chcete upravit.
2. Klikněte pravým tlačítkem a vyberte **Skrýt v navigaci**. Položka by nyní měla zmizet z **Náhledu navigace**.
3. V pravém dolním rohu okna **Navigace** vyberte **Hotovo**.

Publish odešle změny navigace na vaši stránku.

> [!tip] Skryté soubory můžete **zobrazit** zaškrtnutím políčka napravo od nadpisu **Náhled navigace**.

## Časté dotazy

**Mohu přesouvat soubory z jedné složky do druhé v rámci navigace?**

Ne. Struktura navigace souborů pro poznámky ve složkách musí být zachována. Můžete upravit pořadí poznámek ve složkách (včetně kořenového adresáře trezoru) a pořadí složek v rámci jiných složek.

**Mohu upravit pořadí více poznámek a složek před výběrem Hotovo?**

Ano.

**Jak tyto změny vrátím zpět?**

- **Pořadí zobrazení**: Vyberte ikonu **Vrátit výchozí nastavení** (šipka otáčení proti směru hodinových ručiček) vedle **Pořadí zobrazení navigačních položek**. Tím se vaše navigační položky vrátí do abecedního pořadí.
- **Stav skrytí**: Vyberte ikonu **Vrátit výchozí nastavení** (šipka otáčení proti směru hodinových ručiček) vedle **Skrýt stránky nebo složky z navigace**. Tím se vaše skryté navigační položky vrátí do viditelného stavu.
