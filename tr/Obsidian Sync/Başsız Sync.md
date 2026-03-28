---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync, masaüstü uygulamasını kullanmadan kasaları senkronize etmek için başsız (headless) bir istemci sunar. CI iş akışları, ajanlar ve otomatik iş akışları için kullanışlıdır. En son değişiklikleri senkronize edin veya dosyaları sürekli güncel tutun.'
---
[[Obsidian Sync'e giriş|Obsidian Sync]], masaüstü uygulamasını kullanmadan kasaları senkronize etmek için başsız bir istemci sunar. CI iş hatları, ajanlar ve otomatik iş akışları için kullanışlıdır. En son değişiklikleri senkronize edin veya dosyaları sürekli güncel tutun.

[[Obsidian Headless]] **(açık beta)** kurarak Obsidian masaüstü uygulaması olmadan komut satırından [[Obsidian Sync'e giriş|Obsidian Sync]] ile etkileşime geçin. Başsız Sync, uçtan uca şifreleme dahil olmak üzere masaüstü uygulamasıyla aynı [[Güvenlik ve gizlilik|şifreleme ve gizlilik korumalarını]] kullanır.

## Hızlı başlangıç

> [!error] Başlamadan önce verilerinizi yedekleyin
> 1. Beklenmedik bir duruma karşı başlamadan önce verilerinizi her zaman yedekleyin.
> 2. Aynı cihazda masaüstü uygulaması Sync ve Başsız Sync'i *birlikte* kullanmayın, bu veri çakışmalarına neden olabilir. Cihaz başına yalnızca bir senkronizasyon yöntemi kullanın.

[[Obsidian Headless|Obsidian Headless]] **(açık beta)** kurulumu:

```shell
npm install -g obsidian-headless
```

Aktif bir [[Planlar ve depolama limitleri|Obsidian Sync aboneliğiniz]] olmalıdır.

```shell
# Giriş yap
ob login

# Uzak kasalarınızı listeleyin
ob sync-list-remote

# Senkronizasyon için bir kasa ayarlayın
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Tek seferlik senkronizasyon çalıştırın
ob sync

# Sürekli senkronizasyon çalıştırın (değişiklikleri izler)
ob sync --continuous
```

## Komutlar

### `ob sync-list-remote`

Paylaşılan kasalar dahil olmak üzere hesabınızda bulunan tüm uzak kasaları listeler.

### `ob sync-list-local`

Yerel olarak yapılandırılmış kasaları ve yollarını listeler.

### `ob sync-create-remote`

Yeni bir uzak kasa oluşturur.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Seçenek | Açıklama |
| --- | --- |
| `--name` | Kasa adı (zorunlu) |
| `--encryption` | Yönetilen şifreleme için `standard`, uçtan uca şifreleme için `e2ee` |
| `--password` | Uçtan uca şifreleme parolası (belirtilmezse sorulur) |
| `--region` | Sunucu [[Sync bölgeleri\|bölgesi]] (belirtilmezse otomatik) |

### `ob sync-setup`

Yerel bir kasa ile uzak bir kasa arasında senkronizasyon ayarlar.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Seçenek | Açıklama |
| --- | --- |
| `--vault` | Uzak kasa kimliği veya adı (zorunlu) |
| `--path` | Yerel dizin (varsayılan: geçerli dizin) |
| `--password` | Uçtan uca şifreleme parolası (belirtilmezse sorulur) |
| `--device-name` | [[Sürüm geçmişi\|Sync sürüm geçmişinde]] gösterilen cihaz adı |
| `--config-dir` | [[Yapılandırma klasörü\|Yapılandırma dizini]] adı (varsayılan: `.obsidian`) |

### `ob sync`

Yapılandırılmış bir kasa için senkronizasyon çalıştırır.

```
ob sync [--path <local-path>] [--continuous]
```

| Seçenek | Açıklama |
| --- | --- |
| `--path` | Yerel kasa yolu (varsayılan: geçerli dizin) |
| `--continuous` | Sürekli çalışarak değişiklikleri izler |

### `ob sync-config`

Bir kasanın [[Sync ayarları ve seçici senkronizasyon|sync ayarlarını]] görüntüler veya değiştirir. Geçerli yapılandırmayı görmek için seçenek belirtmeden çalıştırın.

```
ob sync-config [--path <local-path>] [options]
```

| Seçenek                | Açıklama                                                                                                                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Yerel kasa yolu (varsayılan: geçerli dizin)                                                                                                                                                                    |
| `--mode`              | Sync modu: `bidirectional` (varsayılan), `pull-only` (yalnızca indir, yerel değişiklikleri yoksay) veya `mirror-remote` (yalnızca indir, yerel değişiklikleri geri al)                                          |
| `--conflict-strategy` | `merge` veya `conflict`                                                                                                                                                                                         |
| `--file-types`        | Senkronize edilecek ek türleri: `image`, `audio`, `video`, `pdf`, `unsupported` (virgülle ayrılmış, temizlemek için boş bırakın)                                                                                |
| `--configs`           | Senkronize edilecek yapılandırma kategorileri: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (virgülle ayrılmış, yapılandırma senkronizasyonunu devre dışı bırakmak için boş bırakın) |
| `--excluded-folders`  | Hariç tutulacak klasörler (virgülle ayrılmış, temizlemek için boş bırakın)                                                                                                                                      |
| `--device-name`       | Bu istemciyi sync sürüm geçmişinde tanımlayacak cihaz adı                                                                                                                                                      |
| `--config-dir`        | Yapılandırma dizini adı (varsayılan: `.obsidian`)                                                                                                                                                               |

### `ob sync-status`

Bir kasanın senkronizasyon durumunu ve yapılandırmasını gösterir.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Bir kasanın sync bağlantısını keser ve saklanan kimlik bilgilerini kaldırır.

```
ob sync-unlink [--path <local-path>]
```

## Yerel modüller

Obsidian Headless, Windows ve macOS'ta dosya oluşturma zamanını (birthtime) ayarlamak için önceden derlenmiş bir yerel eklenti içerir. Bu, sunucudan dosya indirirken orijinal oluşturma zaman damgalarını korur.

Eklenti N-API sürüm 3'ü hedefler, bu nedenle derlenmiş ikili dosyalar ABI-kararlıdır ve yeniden derleme gerektirmeden Node.js sürümleri arasında çalışır.

Linux'ta birthtime desteklenmez — eklenti dahil değildir ve senkronizasyon onsuz normal şekilde çalışır.

Önceden derlenmiş ikili dosyalar şunlar için dahildir:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`
