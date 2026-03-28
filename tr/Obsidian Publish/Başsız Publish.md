---
permalink: publish/headless
cssclasses:
  - reference
description: 'Obsidian Publish, masaüstü uygulamasını kullanmadan kasaları yayımlamak için başsız bir istemci sunar. CI süreçleri ve otomatik iş akışları için kullanışlıdır.'
---
[[Obsidian Publish'e giriş|Obsidian Publish]], masaüstü uygulamasını kullanmadan kasaları yayınlamak için başsız bir istemci sunar. CI işlem hatları ve otomatik iş akışları için kullanışlıdır. En son değişikliklerinizi bir zamanlama dahilinde veya bir derleme işlem hattının parçası olarak yayınlayın.

Obsidian masaüstü uygulaması olmadan komut satırından [[Obsidian Publish'e giriş|Obsidian Publish]] ile etkileşim kurmak için [[Başsız Publish|Obsidian Headless]] **(açık beta)** yükleyin.

## Hızlı başlangıç

[[Başsız Publish|Obsidian Headless]] **(açık beta)** yükleyin:

```shell
npm install -g obsidian-headless
```

Aktif bir [[Obsidian Publish'e giriş|Obsidian Publish aboneliğiniz]] olmalıdır.

```shell
# Giriş yap
ob login

# Publish sitelerinizi listeleyin
ob publish-list-sites

# Yerel bir kasayı bir publish sitesine bağlayın
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Yayınlamadan değişiklikleri önizleyin
ob publish --dry-run

# Değişiklikleri yayınlayın
ob publish
```

## Komutlar

### `ob publish-list-sites`

Hesabınızda kullanılabilir tüm Publish sitelerini listeler.

### `ob publish-create-site`

Yeni bir Publish sitesi oluşturur.

```
ob publish-create-site --slug <slug>
```

| Seçenek | Açıklama |
| --- | --- |
| `--slug` | Siteniz için URL tanımlayıcısı (ör. `my-notes`, `publish.obsidian.md/my-notes` oluşturur) |

### `ob publish-setup`

Yerel bir kasayı bir Publish sitesine bağlar.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Seçenek | Açıklama |
| --- | --- |
| `--site` | Site kimliği veya slug |
| `--path` | Yerel kasa yolu (varsayılan: geçerli dizin) |

### `ob publish`

Kasa değişikliklerini sitenize yayınlar. Varsayılan olarak, yalnızca başlangıç meta verilerinde `publish: true` bulunan dosyalar dahil edilir.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Seçenek | Açıklama |
| --- | --- |
| `--path` | Yerel kasa yolu (varsayılan: geçerli dizin) |
| `--all` | Yalnızca yayınlama bayrağı olanlar değil, tüm dosyaları dahil et |
| `--dry-run` | Yayınlamadan değişiklikleri göster |
| `--yes` | Onay istemeden yayınla |

### `ob publish-config`

Bir kasa için dahil etme/hariç tutma klasör ayarlarını görüntüler veya değiştirir. Geçerli yapılandırmayı görüntülemek için seçenek belirtmeden çalıştırın.

```
ob publish-config [--path <local-path>] [options]
```

| Seçenek | Açıklama |
| --- | --- |
| `--path` | Yerel kasa yolu (varsayılan: geçerli dizin) |
| `--includes` | Dahil edilecek klasörler, virgülle ayrılmış (temizlemek için boş dize) |
| `--excludes` | Hariç tutulacak klasörler, virgülle ayrılmış (temizlemek için boş dize) |

### `ob publish-site-options`

Site genelinde görüntüleme ve navigasyon ayarlarını görüntüler veya günceller. Geçerli ayarları görüntülemek için seçenek belirtmeden çalıştırın.

```
ob publish-site-options [--path <local-path>] [options]
```

| Seçenek | Açıklama |
| --- | --- |
| `--path` | Yerel kasa yolu (varsayılan: geçerli dizin) |
| `--site-name` | Site adı |
| `--index-file` | Ana sayfa dosya yolu |
| `--logo` | Logo dosya yolu (temizlemek için boş dize) |
| `--show-navigation` | Navigasyon kenar çubuğunu göster |
| `--show-graph` | Grafik görünümünü göster |
| `--show-outline` | İçerik tablosunu göster |
| `--show-search` | Aramayı göster |
| `--show-backlinks` | Geri bağlantıları göster |
| `--show-hover-preview` | Fareyle üzerine gelindiğinde önizlemesini göster |
| `--show-theme-toggle` | Tema geçişini göster |
| `--default-theme` | Varsayılan tema: `light` veya `dark` |
| `--readable-line-length` | Okunabilir satır uzunluğu |
| `--strict-line-breaks` | Katı kurallı yeni satırlar |
| `--hide-title` | Satır içi başlığı gizle |
| `--sliding-window` | Kayan pencere modu |
| `--nav-order` | Navigasyon sırası, virgülle ayrılmış yollar (temizlemek için boş dize) |
| `--nav-hidden` | Gizli navigasyon öğeleri, virgülle ayrılmış yollar (temizlemek için boş dize) |

### `ob publish-unlink`

Bir kasanın Publish sitesiyle bağlantısını keser.

```
ob publish-unlink [--path <local-path>]
```
