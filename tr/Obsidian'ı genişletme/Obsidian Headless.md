---
permalink: headless
description: 'Obsidian Headless, Obsidian hizmetleri için bir komut satırı istemcisidir. Kasalarınızı masaüstü uygulaması olmadan senkronize edin.'
---
Obsidian Headless **(açık beta)**, Obsidian hizmetleri için başsız (headless) bir istemcidir. [[Obsidian Sync'e giriş|Obsidian Sync]]'in tüm hız, gizlilik ve uçtan uca şifreleme avantajlarıyla birlikte, masaüstü uygulaması olmadan komut satırından [[Başsız Sync|kasaları senkronize etmenizi]] sağlar.

Obsidian Headless'ı kullanmanız için nedenler:

- Uzak yedeklemeleri otomatikleştirme.
- Web sitesi yayınlamayı otomatikleştirme.
- Aracı araçlara bilgisayarınızın tamamına erişim vermeden bir kasaya erişim sağlama.
- Paylaşılan bir ekip kasasını diğer araçları besleyen bir sunucuya senkronize etme.
- Zamanlanmış otomasyonlar çalıştırma; örneğin günlük notları haftalık özetlere dönüştürme, otomatik etiketleme vb.

> [!info] Obsidian Headless ve Obsidian CLI karşılaştırması
> [[Obsidian CLI]], Obsidian masaüstü uygulamasını terminalinizden kontrol eder. Obsidian Headless ise bağımsız çalışan bir istemcidir — masaüstü uygulaması gerekmez.

## Kurulum

Obsidian Headless **(açık beta)** Node.js 22 veya üstünü gerektirir. [npm](https://www.npmjs.com/package/obsidian-headless) üzerinden kurun:

```shell
npm install -g obsidian-headless
```

## Kimlik Doğrulama

### Giriş yap

```shell
ob login
```

Zaten giriş yapılmışsa, `ob login` hesap bilgilerinizi görüntüler. Hesap değiştirmek için `--email` ve/veya `--password` parametrelerini geçerek tekrar giriş yapın.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Belirtilmediğinde tüm seçenekler etkileşimlidir — e-posta ve parola sorulur, hesapta etkinleştirilmişse 2FA otomatik olarak istenir.

Çıkış yapmak ve kayıtlı kimlik bilgilerini temizlemek için:

```shell
ob logout
```

## Hizmetler

- [[Başsız Sync]]: Masaüstü uygulaması olmadan komut satırından [[Obsidian Sync'e giriş|Obsidian Sync]] kullanın.
- [[Başsız Publish]]: Masaüstü uygulaması olmadan komut satırından [[Obsidian Publish'e giriş|Obsidian Publish]] kullanın.
