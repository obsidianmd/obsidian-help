---
permalink: bases/views/map
---
Peta adalah jenis [[Tampilan|tampilan]] yang dapat Anda gunakan di [[Pengenalan Basis|Basis]]. Ini memerlukan pemasangan [plugin Maps](obsidian://show-plugin?id=maps).

Pilih ![[lucide-map.svg#icon]]  **Map** dari menu tampilan untuk menampilkan file sebagai peta interaktif dengan penanda untuk setiap file, dan pratinjau yang menampilkan properti file tersebut.

![[bases-map-places.png#interface]]

## Memasang plugin Maps

Tampilan peta memerlukan Obsidian 1.10. [Plugin Maps](obsidian://show-plugin?id=maps) adalah [[Plugin komunitas|plugin komunitas]] resmi yang dapat Anda unduh secara terpisah.

1. Ikuti petunjuk di [[Plugin komunitas#Memasang plugin komunitas]]
2. Unduh dan aktifkan [Maps](obsidian://show-plugin?id=maps) dari daftar

## Contoh

Untuk memulai, coba buat catatan bernama **Eiffel Tower** dan salin properti berikut ke dalamnya:

```yaml
---
coordinates:
  - "48.85837"
  - "2.294481"
icon: "landmark"
color: "red"
tags:
  - places
---
```

Berikut arti dari kode di atas:

| Properti      | Nilai                    |                                                                                                                                                                |
| ------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Koordinat disimpan sebagai `latitude, longitude`. Anda bisa mendapatkan koordinat dengan mengklik kanan lokasi di peta dan memilih **Copy coordinates**. |
| `icon`        | `landmark`               | Nama ikon dari [pustaka Lucide](https://lucide.dev/).                                                                                                          |
| `color`       | `red`                    | Nilai CSS yang valid: hex, RGB, named color, dll.                                                                                                              |
| `tags`        | `places`                 | Tag yang akan kita gunakan untuk menemukan penanda peta di basis kita.                                                                                         |
Sekarang buat tampilan peta dengan filter untuk tag `places` dan atur koordinat penanda, ikon, dan warna menggunakan properti yang tercantum di atas.

Anda juga dapat membuka [file contoh](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) ini di Obsidian untuk melihat tampilan peta yang berfungsi dengan penanda, ikon, dan warna yang sudah dikonfigurasi.

## Pengaturan

Pengaturan tampilan peta dapat dikonfigurasi di [[Tampilan#Pengaturan tampilan|Pengaturan tampilan]].

- Tinggi tersemat
- Koordinat pusat
- Batasan zoom
- Koordinat penanda, warna, dan ikon
- Latar belakang

### Penanda

#### Koordinat

Untuk menampilkan pin di peta, buka [[Tampilan#Pengaturan tampilan|pengaturan tampilan]] dan pilih properti **marker coordinates**. Properti tersebut harus berisi koordinat latitude dan longitude. Format berikut diterima:

```yaml
# Properti teks
coordinates: "lat, lng"

# Properti daftar
coordinates:
  - "lat"
  - "lng"
```

Jika Anda menyimpan koordinat sebagai properti `latitude` dan `longitude` terpisah, Anda dapat menggabungkannya dengan properti [[Sintaksis Basis#Rumus|rumus]] dengan mendefinisikannya sebagai array koordinat menggunakan rumus berikut: `[latitude, longitude]`.

#### Ikon

Tambahkan ikon ke penanda dengan mendefinisikan properti **marker icons**. Misalnya, Anda dapat menambahkan properti bernama `icon` ke catatan Anda dan memberikan nilai seperti `landmark` atau `utensils` dari [pustaka Lucide](https://lucide.dev/icons/) bawaan Obsidian.

##### Menggunakan rumus untuk mendefinisikan ikon

Katakanlah Anda ingin semua restoran memiliki ikon yang sama di peta:

1. Buat catatan bernama **Restaurants** dan tambahkan properti bernama `icon` dengan nilai `utensils`.
2. Berikan catatan restoran properti bernama `type` yang menautkan ke catatan `[[Restaurants]]`.
3. Tambahkan properti rumus bernama `Type icon` ke basis Anda dengan kode berikut:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Pilih `Type icon` sebagai ikon penanda Anda di pengaturan tampilan.

Voilà! Sekarang peta Anda akan menampilkan ikon dari *tipe* tempat, bukan dari tempat itu sendiri.

#### Warna

Atur warna penanda. Menerima nilai sebagai RGB `rgb(0,0,0)`, HEX `#000`, atau variabel CSS seperti `var(--color-blue)`. Seperti pada contoh ikon di atas, Anda dapat menggunakan properti rumus untuk mendefinisikan warna secara dinamis.

### Latar belakang

#### Tile peta

Tile peta adalah cara standar untuk menampilkan peta digital. Ada beberapa layanan yang dapat Anda gunakan untuk menyesuaikan peta dengan gaya, warna, dan font unik. Maps mendukung tile raster dan vektor, dan menerima sebagian besar URL tile, termasuk URL TileJSON.

[OpenFreeMap](https://openfreemap.org/) menawarkan beberapa gaya yang dapat Anda gunakan secara gratis. Coba gunakan salah satu URL berikut di pengaturan **Map tiles**:

| Nama     | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Tautan berguna

- [Maputnik](https://maputnik.github.io/) untuk menyesuaikan tile peta.
- [Protomaps](https://protomaps.com/) untuk hosting mandiri tile peta.
- Layanan hosting lain dengan tier gratis termasuk [MapTiler](https://www.maptiler.com/) dan [Mapbox](https://www.mapbox.com/).


## Tips

Anda dapat menautkan ke layanan pemetaan populer menggunakan [[Rumus]]. Misalnya pin Anda dapat menampilkan tautan ke Google Maps menggunakan rumus berikut:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Pemecahan masalah

Jika peta tampak kosong saat Anda pertama kali memuat plugin Maps, coba [[Perbarui Obsidian|perbarui versi penginstal Obsidian]].

[Plugin Maps](https://github.com/obsidianmd/obsidian-maps) bersifat sumber terbuka. Anda dapat membantu dengan memberikan laporan bug, permintaan fitur, dan pull request.
