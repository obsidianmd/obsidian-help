---
permalink: headless
description: Az Obsidian Headless egy parancssori kliens az Obsidian szolgáltatásaihoz. Szinkronizálja széfjeit az asztali alkalmazás nélkül.
---
Az Obsidian Headless **(nyílt béta)** egy fej nélküli kliens az Obsidian szolgáltatásokhoz. Lehetővé teszi a [[Fej nélküli Sync|széfek szinkronizálását]] a parancssorból az asztali alkalmazás nélkül, az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] összes sebességi, adatvédelmi és végpontok közötti titkosítási előnyével.

Okok, amiért érdemes lehet az Obsidian Headless-t használni:

- Távoli biztonsági mentések automatizálása.
- Webhely publikálásának automatizálása.
- Ágenseszközök hozzáférésének biztosítása egy széfhez anélkül, hogy hozzáférnének a teljes számítógépéhez.
- Megosztott csapatszeéf szinkronizálása egy szerverrel, amely más eszközöket táplál.
- Ütemezett automatizálások futtatása, pl. napi jegyzetek összesítése heti összefoglalókba, automatikus címkézés stb.

> [!info] Obsidian Headless vs Obsidian CLI
> Az [[Obsidian CLI]] az Obsidian asztali alkalmazást vezérli a terminálból. Az Obsidian Headless egy önálló kliens, amely függetlenül fut, asztali alkalmazás nélkül.

## Telepítés

Az Obsidian Headless **(nyílt béta)** Node.js 22-es vagy újabb verziót igényel. Telepítse az [npm](https://www.npmjs.com/package/obsidian-headless)-ről:

```shell
npm install -g obsidian-headless
```

## Hitelesítés

### Bejelentkezés

```shell
ob login
```

Ha már be van jelentkezve, az `ob login` megjeleníti a fiókadatait. Fiókok közötti váltáshoz adja meg az `--email` és/vagy `--password` paramétereket az újbóli bejelentkezéshez.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Minden beállítás interaktív, ha nincs megadva — a rendszer kéri az e-mail-címet és a jelszót, és a kétfaktoros hitelesítést automatikusan kéri, ha engedélyezve van a fiókon.

A kijelentkezéshez és a tárolt hitelesítő adatok törléséhez:

```shell
ob logout
```

## Szolgáltatások

- [[Fej nélküli Sync]]: az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] használata a parancssorból az asztali alkalmazás nélkül.
- [[Headless Publish]]: az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] használata a parancssorból az asztali alkalmazás nélkül.
