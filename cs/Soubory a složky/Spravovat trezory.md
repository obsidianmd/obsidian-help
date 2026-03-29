---
permalink: manage-vaults
---
**Trezor** je složka ve vašem souborovém systému, která obsahuje vaše poznámky, [[Přílohy|přílohy]] a [[Konfigurační složka|konfigurační složku]] s nastaveními specifickými pro Obsidian. Další informace o trezorech naleznete v článku [[Jak Obsidian ukládá data]].

Trezory můžete spravovat pomocí **Přepínače trezorů**. *Profil trezoru* se otevře při prvním spuštění Obsidian.

Chcete-li otevřít přepínač trezorů z existujícího trezoru, vyberte **Profil trezoru** ![[lucide-chevrons-up-down.svg#icon]] v dolní části [[Postranní panel|levého postranního panelu]]. Případně vyberte **Otevřít jiný trezor** z [[Paleta příkazů|palety příkazů]].

## Vytvoření nového trezoru

1. Na počítači otevřete Obsidian.
2. Vlevo dole vyberte **Profil trezoru** ![[lucide-chevrons-up-down.svg#icon]].
3. Zobrazí se kontextová nabídka. Vyberte **Spravovat trezory…**.
3. Napravo od **Vytvořit nový trezor** vyberte **Vytvořit**.
4. Do pole **Název trezoru** zadejte název svého trezoru.
5. Klikněte na **Procházet** a vyberte, kde bude nový trezor vytvořen.
6. Klikněte na **Vytvořit**.

## Vytvoření trezoru z existující složky

1. Na počítači otevřete Obsidian.
2. Vlevo dole vyberte **Profil trezoru** ![[lucide-chevrons-up-down.svg#icon]].
3. Zobrazí se kontextová nabídka. Vyberte **Spravovat trezory…**.
3. Napravo od **Použít složku jako trezor** klikněte na **Otevřít**.
4. V prohlížeči souborů vyberte složku, kterou chcete použít jako trezor.
5. Klikněte na **Otevřít**.

> [!tip] Otevření trezoru z Obsidian Sync
> Pokud chcete otevřít vzdálený trezor pomocí Obsidian Sync, podívejte se na [[Nastavení Obsidian Sync]].

## Přejmenování trezoru

Protože název trezoru a příslušné složky jsou totožné, přejmenování trezoru přejmenuje i složku.

1. Na počítači otevřete Obsidian.
2. Vlevo dole vyberte **Profil trezoru** ![[lucide-chevrons-up-down.svg#icon]].
3. Zobrazí se kontextová nabídka. Vyberte **Spravovat trezory…**.
4. V seznamu trezorů vyberte **Více možností** ![[lucide-more-horizontal.svg#icon]] vedle trezoru, který chcete přejmenovat.
5. Vyberte **Přejmenovat trezor**.
6. Zadejte nový název trezoru a stiskněte `Enter`.

## Přesunutí trezoru do jiné složky

1. Na počítači otevřete Obsidian.
2. Vlevo dole vyberte **Profil trezoru** ![[lucide-chevrons-up-down.svg#icon]].
3. Zobrazí se kontextová nabídka. Vyberte **Spravovat trezory…**.
4. Zavřete okno aktuálního trezoru, ale ponechte okno **Spravovat trezory** otevřené.
5. V seznamu trezorů vyberte **Více možností** ![[lucide-more-horizontal.svg#icon]] vedle trezoru, který chcete přesunout.
6. Vyberte **Přesunout trezor** a poté zvolte nové umístění.

Některé operační systémy neumožňují přesunout trezor pomocí Přepínače trezorů. V těchto případech budete muset trezor přesunout ručně:

1. Zavřete Obsidian.
2. Přesuňte složku trezoru na nové místo, vyhněte se složkám synchronizovaným jinými službami.
3. Znovu otevřete Obsidian.
4. Klikněte na ikonu **Profil trezoru** vlevo dole ![[lucide-chevrons-up-down.svg#icon]].
5. Z vyskakovací nabídky vyberte **Spravovat trezory…**.
6. Vedle **Použít složku jako trezor** klikněte na **Otevřít**.
7. Přejděte na novou složku trezoru a vyberte ji.
8. Klikněte na **Otevřít**.
9. Ověřte, že obsah trezoru zůstal nezměněný. V případě potřeby znovu zapněte komunitní pluginy přechodem na **[[Nastavení]] → Komunitní pluginy → Vypnout omezený režim**.

## Odstranění trezoru

Odstranění trezoru jej pouze odebere ze seznamu trezorů.

1. Na počítači otevřete Obsidian.
2. Vlevo dole vyberte **Profil trezoru** ![[lucide-chevrons-up-down.svg#icon]].
3. Zobrazí se kontextová nabídka. Vyberte **Spravovat trezory…**.
4. V seznamu trezorů vyberte **Více možností** ![[lucide-more-horizontal.svg#icon]] vedle trezoru, který chcete odstranit.
5. Vyberte **Odstranit ze seznamu**.

## Přenesení nastavení do jiného trezoru

Chcete-li použít stejná nastavení pro jiný trezor, pomocí preferovaného správce souborů (nebo terminálu) zkopírujte složku `.obsidian` z kořene zdrojového trezoru do kořene cílového trezoru.

Pro uplatnění změn může být nutné restartovat Obsidian.

> [!note] Kde najdu složku `.obsidian`?
> Ve výchozím nastavení většina operačních systémů skrývá složky začínající tečkou (`.`). Další informace o složce `.obsidian` a o tom, jak k ní přistupovat, naleznete v článcích [[Jak Obsidian ukládá data#Nastavení trezoru|nastavení trezoru]] a [[Konfigurační složka|konfigurační složky]].
