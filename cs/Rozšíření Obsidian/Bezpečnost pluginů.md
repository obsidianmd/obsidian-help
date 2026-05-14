---
permalink: plugin-security
---
Tým Obsidian bere bezpečnost vážně. Tato stránka vysvětluje rizika spojená s instalací komunitních pluginů a to, co tým Obsidian dělá pro jejich řešení.

## Omezený režim

Ve výchozím nastavení Obsidian běží v omezeném režimu, aby zabránil spuštění kódu třetích stran. Omezený režim vypněte pouze v případě, že důvěřujete autorům pluginů, které instalujete.

Vypnutí omezeného režimu:

1. Otevřete **[[Nastavení]]**.
2. V postranním menu vyberte **Komunitní pluginy**.
3. Vyberte **Zapnout komunitní pluginy**.

Zapnutí omezeného režimu:

1. Otevřete **[[Nastavení]]**.
2. V postranním menu vyberte **Komunitní pluginy**.
3. Vedle položky **Omezený režim** vyberte **Zapnout**.

Nainstalované pluginy zůstanou ve vašem trezoru, i když zapnete omezený režim, ale Obsidian je bude ignorovat.

## Schopnosti pluginů

Z technických důvodů nemůže Obsidian spolehlivě omezit pluginy na konkrétní oprávnění nebo úrovně přístupu. To znamená, že pluginy zdědí úrovně přístupu Obsidian. V důsledku toho zvažte následující příklady toho, co komunitní pluginy mohou dělat:

- Komunitní pluginy mohou přistupovat k souborům na vašem počítači.
- Komunitní pluginy se mohou připojit k internetu.
- Komunitní pluginy mohou instalovat další programy.

> [!tip] 
> Pokud pracujete s citlivými daty a chcete nainstalovat komunitní plugin, doporučujeme provést nezávislý bezpečnostní audit pluginu před jeho použitím.

## Proces kontroly pluginů

Všechny komunitní pluginy musí dodržovat [Zásady pro vývojáře Obsidian](https://docs.obsidian.md/Developer+policies). Obsidian automaticky skenuje každou verzi pluginu na bezpečnostní zranitelnosti, problémy s kvalitou kódu a malware. Stránka každého pluginu v [adresáři pluginů](https://community.obsidian.md) zobrazuje výsledky jako bezpečnostní přehled.

Ruční kontroly pokračují u populárních, doporučených a označených pluginů.

- Pokud objevíte bezpečnostní zranitelnost v komunitním pluginu, podívejte se do souboru `security.md` nebo `readme.md` autora pluginu, kde najdete informace o tom, jak ji nahlásit. V případě kritických chyb nahlaste problém také [[Nápověda a podpora#Kontaktování podpory Obsidian|podpoře Obsidian]].
- Pokud máte podezření, že komunitní plugin je škodlivý, můžete jej nahlásit přímo ze stránky v adresáři pluginů, nahlásit to [[Nápověda a podpora#Kontaktování podpory Obsidian|podpoře Obsidian]] nebo poslat přímou zprávu našim moderátorům.
