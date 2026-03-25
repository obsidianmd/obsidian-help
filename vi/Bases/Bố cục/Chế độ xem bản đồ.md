---
permalink: bases/views/map
---
Bản đồ là một loại [[Các chế độ xem|chế độ xem]] bạn có thể sử dụng trong [[Giới thiệu về Cơ sở|Cơ sở]]. Nó yêu cầu cài đặt [plugin Maps](obsidian://show-plugin?id=maps).

Chọn ![[lucide-map.svg#icon]]  **Map** từ menu chế độ xem để hiển thị các tệp dưới dạng bản đồ tương tác với các dấu đánh dấu cho mỗi tệp, và bản xem trước hiển thị các thuộc tính của tệp đó.

![[bases-map-places.png#interface]]

## Cài đặt plugin Maps

Chế độ xem bản đồ yêu cầu Obsidian 1.10. [Plugin Maps](obsidian://show-plugin?id=maps) là một [[Phần mở rộng từ cộng đồng|plugin cộng đồng]] chính thức mà bạn có thể tải xuống riêng.

1. Làm theo hướng dẫn trong [[Phần mở rộng từ cộng đồng#Cài đặt một plugin cộng đồng]]
2. Tải xuống và kích hoạt [Maps](obsidian://show-plugin?id=maps) từ danh sách

## Ví dụ

Để bắt đầu, hãy thử tạo một ghi chú có tên **Eiffel Tower** và sao chép các thuộc tính sau vào đó:

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

Đây là ý nghĩa của đoạn mã trên:

| Thuộc tính    | Giá trị                  |                                                                                                                                                                     |
| ------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Tọa độ được lưu dưới dạng `vĩ độ, kinh độ`. Bạn có thể lấy tọa độ bằng cách nhấp chuột phải vào một vị trí trên bản đồ và chọn **Copy coordinates**. |
| `icon`        | `landmark`               | Tên của một biểu tượng từ [thư viện Lucide](https://lucide.dev/).                                                                                                   |
| `color`       | `red`                    | Một giá trị CSS hợp lệ: hex, RGB, tên màu, v.v.                                                                                                                    |
| `tags`        | `places`                 | Thẻ mà chúng ta sẽ sử dụng để tìm các dấu đánh dấu trên bản đồ trong cơ sở.                                                                                       |
Bây giờ hãy tạo một chế độ xem bản đồ với bộ lọc cho thẻ `places` và đặt tọa độ dấu đánh dấu, biểu tượng và màu sắc bằng các thuộc tính được liệt kê ở trên.

Bạn cũng có thể mở các [tệp ví dụ](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) này trong Obsidian để xem các chế độ xem bản đồ hoạt động với các dấu đánh dấu, biểu tượng và màu sắc đã được cấu hình sẵn.

## Cài đặt

Cài đặt chế độ xem bản đồ có thể được cấu hình trong [[Các chế độ xem#Cài đặt chế độ xem|Cài đặt chế độ xem]].

- Chiều cao nhúng
- Tọa độ trung tâm
- Giới hạn phóng to
- Tọa độ, màu sắc và biểu tượng dấu đánh dấu
- Nền

### Dấu đánh dấu

#### Tọa độ

Để hiển thị ghim trên bản đồ, hãy vào [[Các chế độ xem#Cài đặt chế độ xem|cài đặt chế độ xem]] và chọn thuộc tính **marker coordinates**. Thuộc tính phải chứa tọa độ vĩ độ và kinh độ. Các định dạng sau được chấp nhận:

```yaml
# Thuộc tính văn bản
coordinates: "lat, lng"

# Thuộc tính danh sách
coordinates:
  - "lat"
  - "lng"
```

Nếu bạn lưu tọa độ dưới dạng các thuộc tính `latitude` và `longitude` riêng biệt, bạn có thể kết hợp chúng bằng thuộc tính [[Cú pháp Cơ sở#Công thức|công thức]] bằng cách định nghĩa nó như một mảng tọa độ sử dụng công thức sau: `[latitude, longitude]`.

#### Biểu tượng

Thêm biểu tượng vào dấu đánh dấu bằng cách định nghĩa thuộc tính **marker icons**. Ví dụ, bạn có thể thêm thuộc tính có tên `icon` vào ghi chú của mình và đặt giá trị như `landmark` hoặc `utensils` từ [thư viện Lucide](https://lucide.dev/icons/) tích hợp sẵn trong Obsidian.

##### Sử dụng công thức để định nghĩa biểu tượng

Giả sử bạn muốn tất cả nhà hàng có cùng một biểu tượng trên bản đồ:

1. Tạo một ghi chú có tên **Restaurants** và thêm thuộc tính có tên `icon` với giá trị `utensils`.
2. Đặt cho các ghi chú nhà hàng một thuộc tính có tên `type` liên kết đến ghi chú `[[Restaurants]]`.
3. Thêm thuộc tính công thức có tên `Type icon` vào cơ sở của bạn với mã sau:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Chọn `Type icon` làm biểu tượng dấu đánh dấu trong cài đặt chế độ xem.

Voilà! Bây giờ bản đồ của bạn sẽ hiển thị biểu tượng từ *loại* của địa điểm, không phải từ bản thân địa điểm.

#### Màu sắc

Đặt màu của dấu đánh dấu. Chấp nhận giá trị dạng RGB `rgb(0,0,0)`, HEX `#000`, hoặc biến CSS như `var(--color-blue)`. Giống như trong ví dụ biểu tượng ở trên, bạn có thể sử dụng thuộc tính công thức để định nghĩa màu sắc một cách động.

### Nền

#### Ô bản đồ

Ô bản đồ (map tiles) là cách tiêu chuẩn để hiển thị bản đồ kỹ thuật số. Có một số dịch vụ bạn có thể sử dụng để tùy chỉnh bản đồ với các kiểu dáng, màu sắc và phông chữ riêng. Maps hỗ trợ cả ô raster và vector, và chấp nhận hầu hết các URL ô, bao gồm cả URL TileJSON.

[OpenFreeMap](https://openfreemap.org/) cung cấp một vài kiểu bạn có thể sử dụng miễn phí. Hãy thử sử dụng một trong các URL sau trong cài đặt **Map tiles**:

| Tên      | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Liên kết hữu ích

- [Maputnik](https://maputnik.github.io/) để tùy chỉnh ô bản đồ.
- [Protomaps](https://protomaps.com/) để tự lưu trữ ô bản đồ.
- Các dịch vụ lưu trữ khác có gói miễn phí bao gồm [MapTiler](https://www.maptiler.com/) và [Mapbox](https://www.mapbox.com/).


## Mẹo

Bạn có thể liên kết đến các dịch vụ bản đồ phổ biến bằng [[Công thức]]. Ví dụ, ghim của bạn có thể hiển thị liên kết đến Google Maps bằng công thức sau:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Khắc phục sự cố

Nếu bản đồ hiển thị trống khi bạn tải plugin Maps lần đầu, hãy thử [[Cập nhật Obsidian|cập nhật phiên bản trình cài đặt Obsidian]].

[Plugin Maps](https://github.com/obsidianmd/obsidian-maps) là mã nguồn mở. Bạn có thể giúp đỡ bằng cách đóng góp báo cáo lỗi, yêu cầu tính năng và pull request.
