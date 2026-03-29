---
permalink: plugins/note-composer
---
A [[Alap bővítmények|Jegyzet-szerkesztő]] egy [[Alap bővítmények|alap bővítmény]], amely lehetővé teszi két jegyzet összevonását vagy egy jegyzet egy részének kiszervezését egy új jegyzetbe.

## Jegyzetek összevonása

A jegyzetek összevonása egy jegyzetet hozzáad egy másikhoz, és törli az elsőt. A Jegyzet-szerkesztő frissíti az összes hivatkozást, hogy az összevont jegyzetre mutassanak.

Amikor kiválasztja a célként szolgáló jegyzetet, a következő módszerek közül választhat:

- `Enter`: A forrásjegyzetet a céljegyzet _végéhez_ adja.
- `Shift+Enter`: A forrásjegyzetet a céljegyzet _elejéhez_ adja.
- `Ctrl+Enter` (vagy `Cmd+Enter` macOS-en): Új jegyzetet hoz létre a forrásjegyzet tartalmával.

Az aktív jegyzet összevonása egy másik jegyzettel a széfben:

**Fájlkezelő**

1. A Fájlkezelőben kattintson jobb gombbal az összevonni kívánt jegyzetre.
2. Kattintson a **Teljes fájl egyesítése...** lehetőségre.
3. Válassza ki a céljegyzetet, amellyel össze szeretné vonni.
4. Kattintson az **Összevonás** gombra a megerősítéshez.

**Parancspaletta**

1. Nyissa meg a [[Parancspaletta|parancspalettát]].
2. Válassza a **Jegyzet-szerkesztő: Jelenlegi fájl egyesítése egy másik fájllal...** lehetőséget.
3. Válassza ki a céljegyzetet, amellyel össze szeretné vonni.
4. Kattintson az **Összevonás** gombra a megerősítéshez.

> [!tip] Tipp
> Alapértelmezés szerint a Jegyzet-szerkesztő megerősítést kér az összevonás előtt. Ha letiltja a megerősítést, és véletlenül von össze egy jegyzetet, a [[Fájl-visszaállítás]] bővítménnyel még visszaállíthatja azt.

## Jegyzet kiszervezése

Amikor kiválasztja a céljegyzetet a kijelölés kiszervezéséhez, a következő módszerek közül választhat:

- `Enter`: A kijelölt szöveget a céljegyzet _végéhez_ adja.
- `Shift+Enter`: A kijelölt szöveget a céljegyzet _elejéhez_ adja.
- `Ctrl+Enter` (vagy `Cmd+Enter` macOS-en): Új jegyzetet hoz létre a kijelölt szöveggel.

Szöveg kiszervezése új jegyzetbe:

**Szerkesztő**

1. A **Szerkesztési nézetben** jelölje ki a kiszervezni kívánt szöveget.
2. Kattintson jobb gombbal a kijelölt szövegre.
3. Kattintson **A kiválasztott szövegrész kiszervezése...** lehetőségre.
4. Válassza ki a céljegyzetet, amelybe ki szeretné szervezni.

**Parancspaletta**

1. A **Szerkesztési nézetben** jelölje ki a kiszervezni kívánt szöveget.
2. Nyissa meg a [[Parancspaletta|parancspalettát]].
3. Válassza a **Jegyzet-szerkesztő: A kiválasztott szövegrész kiszervezése...** lehetőséget.
4. Válassza ki a céljegyzetet, amelybe ki szeretné szervezni.

> [!tip] Tipp
> Alapértelmezés szerint a Jegyzet-szerkesztő a kiszervezett szöveget a céljegyzetre mutató hivatkozással helyettesíti. A beállításokban módosíthatja úgy is, hogy a céljegyzet [[Fájlok beágyazása|beágyazásra]] kerüljön, vagy hogy semmi ne maradjon a helyén.

## Sablonfájl

Sablon beállításával testre szabhatja a tartalmat, mielőtt az új jegyzethez adná. Sablon használatához adja meg a **Sablonfájl helye** értékét a bővítmény beállításaiban.

A sablon a következő változókat tartalmazhatja:

| Változó           | Leírás                                                                                                                                                    |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Az összevonandó tartalom vagy a kiszervezett szöveg. Ha nem tartalmazza ezt a változót, a Jegyzet-szerkesztő a tartalmat a sablon aljára helyezi.          |
| `{{fromTitle}}`   | A forrásjegyzet neve.                                                                                                                                     |
| `{{newTitle}}`    | A céljegyzet neve. Például a fájlnév fejlécként való hozzáadásához a fájl tetejére.                                                                      |
| `{{date:FORMAT}}` | Az új jegyzet létrehozási dátuma. Például: `{{date:YYYY-MM-DD}}`.                                                                                         |
