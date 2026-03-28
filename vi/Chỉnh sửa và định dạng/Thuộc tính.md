---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Thuộc tính cho phép bạn tổ chức thông tin về một ghi chú. Thuộc tính chứa dữ liệu có cấu trúc như văn bản, liên kết, ngày tháng, hộp kiểm và số.'
---
Thuộc tính cho phép bạn tổ chức thông tin về một ghi chú. Thuộc tính chứa dữ liệu có cấu trúc như chữ, liên kết, ngày, hộp kiểm và số. Thuộc tính cũng có thể được sử dụng kết hợp với [[Phần mở rộng từ cộng đồng]] có thể thực hiện những việc hữu ích với dữ liệu có cấu trúc của bạn.

## Thêm thuộc tính vào ghi chú

Có nhiều cách để thêm thuộc tính vào ghi chú:

- Sử dụng [[Khay lệnh|lệnh]] **Thêm thuộc tính tệp**.
- Sử dụng [[Phím tắt|phím tắt]] **`Cmd/Ctrl+;`**.
- Chọn **Thêm thuộc tính tệp** từ menu **Thêm hành động** (được mở bằng biểu tượng ba chấm hoặc bằng cách nhấp chuột phải vào thẻ).
- Nhập `---` ở đầu tệp.

Sau khi bạn thêm thuộc tính, một hàng sẽ xuất hiện ở đầu tệp với hai ô nhập: _tên_ thuộc tính và _giá trị_ thuộc tính.

Đối với tên, bạn có thể chọn bất kỳ tên nào bạn muốn. Obsidian cung cấp một số thuộc tính mặc định: `tags`, `cssclasses` và `aliases`.

Sau khi bạn chọn tên thuộc tính, bạn có thể gán giá trị cho nó.

### Loại thuộc tính

Ngoài tên và giá trị, thuộc tính còn có một _loại_. Loại của thuộc tính xác định loại giá trị nào nó có thể lưu trữ và cách Obsidian xử lý chúng. Để thay đổi loại của thuộc tính, nhấp vào biểu tượng loại bên cạnh tên thuộc tính và chọn tùy chọn khác. Bạn cũng có thể quản lý loại thuộc tính bằng plugin cốt lõi [[Xem thuộc tính]].

Obsidian hỗ trợ các loại thuộc tính sau:

- **[[#Chữ]]**
- **[[#Danh sách]]**
- **[[#Số]]**
- **[[#Hộp kiểm]]**
- **[[#Ngày]]**
- **[[#Ngày tháng]]**
- **[[#Thẻ]]**

Khi một loại thuộc tính được gán cho một tên thuộc tính, tất cả thuộc tính có tên đó trong kho của bạn sẽ sử dụng cùng loại.

## Sử dụng nâng cao

### Tìm kiếm thuộc tính

Thuộc tính có [[Tìm kiếm|cú pháp tìm kiếm]] riêng mà bạn có thể sử dụng cùng với các cụm từ và toán tử tìm kiếm khác. [[Tìm kiếm#Tìm kiếm thuộc tính|Xem cú pháp tìm kiếm cho thuộc tính]].

### Mẫu

Bạn có thể thêm thuộc tính vào [[Plugin/Mẫu|Mẫu]].

Khi bạn chèn một mẫu vào ghi chú đang hoạt động, tất cả thuộc tính từ mẫu sẽ được thêm vào ghi chú. Obsidian cũng sẽ hợp nhất bất kỳ thuộc tính nào đã tồn tại trong ghi chú của bạn với các thuộc tính trong mẫu. ^templates-properties

### Đổi tên thuộc tính

Bạn có thể đổi tên thuộc tính bằng cách nhấp chuột phải vào nó trong [[Xem thuộc tính|chế độ xem Tất cả thuộc tính]].

### Chế độ hiển thị

Bạn có thể thay đổi cách thuộc tính được hiển thị trong ghi chú của bạn bằng cách vào **[[Cài đặt]] → Trình chỉnh sửa → Thuộc tính trong tài liệu**. Các tùy chọn là:

- **Hiển thị** (mặc định) – hiển thị thuộc tính ở đầu ghi chú, nếu có.
- **Ẩn** – ẩn thuộc tính, vẫn có thể hiển thị trong thanh bên thông qua [[Xem thuộc tính]].
- **Nguồn** – hiển thị thuộc tính ở định dạng YAML văn bản thuần.

### Mẩu CSS

Bạn có thể sử dụng [[Mẩu CSS]] để thay đổi giao diện của các ghi chú cụ thể.

### Chưa được hỗ trợ

Một số tính năng hiện chưa được hỗ trợ trong Obsidian:

- **Thuộc tính lồng nhau**: Để xem thuộc tính lồng nhau, chúng tôi khuyến nghị sử dụng [[Các chế độ xem và chế độ chỉnh sửa#Chế độ nguồn|chế độ nguồn]].
- **Chỉnh sửa hàng loạt thuộc tính**: Để chỉnh sửa hàng loạt chuyên sâu ngoài [[Xem thuộc tính]], chúng tôi khuyến nghị sử dụng các công cụ chỉnh sửa hàng loạt như VSCode, scripts và plugin cộng đồng.
- **Markdown trong thuộc tính**: Đây là giới hạn có chủ đích vì thuộc tính được thiết kế cho các mẩu thông tin nhỏ, nguyên tử, dễ đọc cho cả con người và máy tính.

## Phím tắt

### Thêm thuộc tính

| Hành động | Phím tắt |
|---|---|
|Thêm thuộc tính mới|`Cmd + ;`|

### Di chuyển giữa các thuộc tính

Khi thuộc tính đang được chọn

| Hành động | Phím tắt |
|---|---|
|Chọn thuộc tính tiếp theo|`Down arrow` hoặc `Tab`|
|Chọn thuộc tính trước đó|`Up arrow` hoặc `Shift+Tab`|
|Nhảy đến trình chỉnh sửa|`Alt+Down arrow`|

### Chọn thuộc tính

| Hành động | Phím tắt |
|---|---|
|Mở rộng vùng chọn lên trên|`Shift+Up arrow`|
|Mở rộng vùng chọn xuống dưới|`Shift+Down arrow`|
|Chọn tất cả|`Cmd+A`|

### Chỉnh sửa thuộc tính

| Hành động | Phím tắt |
|---|---|
|Chỉnh sửa tên thuộc tính|`Left arrow`|
|Chỉnh sửa giá trị thuộc tính|`Right arrow`|
|Chọn thuộc tính|`Escape`|
|Xóa thuộc tính|`Cmd+Backspace`<br><br>nếu có thuộc tính nào đang được chọn, nó sẽ xóa vùng chọn thay thế.|
|Hoàn tác|`Cmd+Z`|
|Làm lại|`Cmd+Shift+Z`|

### Vim (nâng cao)

| Hành động | Phím tắt |
|---|---|
|Di chuyển xuống|`j`|
|Di chuyển lên|`k`|
|Chọn tên|`h`|
|Chọn giá trị|`l`|
|Chọn giá trị (Con trỏ ở cuối)|`A`|
|Chọn giá trị (Con trỏ ở đầu)|`i`|
|Tạo thuộc tính mới|`o`|

## Định dạng thuộc tính

Thuộc tính được lưu trữ ở định dạng [YAML](https://yaml.org/) ở đầu tệp. YAML là một định dạng phổ biến dễ đọc cho cả con người và máy tính.

Tên thuộc tính được phân tách khỏi giá trị bằng dấu hai chấm theo sau bởi một dấu cách:

```yaml
---
name: value
---
```

Mặc dù thứ tự của mỗi cặp tên-giá trị không quan trọng, nhưng mỗi tên phải là duy nhất trong một ghi chú. Ví dụ, bạn không thể có nhiều hơn một thuộc tính `tags`.

Giá trị có thể là [[#Chữ|chữ]], [[#Số|số]], [[#Hộp kiểm|hộp kiểm]], [[#Ngày|ngày]], [[#Ngày tháng|ngày và giờ]], hoặc [[#Danh sách|danh sách]].

### Chữ

Thuộc tính chữ chứa một dòng văn bản đơn. Định dạng Markdown không được hiển thị trong thuộc tính chữ. Ký hiệu hashtag không tạo thẻ khi được sử dụng trong thuộc tính chữ.

Thuộc tính chữ có thể chứa URL và [[Liên kết nội bộ]] sử dụng cú pháp `[[Liên kết]]`. [[Liên kết nội bộ]] trong thuộc tính chữ phải được bao quanh bằng dấu ngoặc kép. Obsidian sẽ tự động thêm chúng nếu bạn nhập liên kết nội bộ vào thuộc tính theo cách thủ công, nhưng hãy cẩn thận thêm chúng khi sử dụng plugin mẫu.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Danh sách

Thuộc tính danh sách chứa nhiều giá trị. Mỗi giá trị trong danh sách xuất hiện trên dòng riêng, có dấu gạch ngang (-) và dấu cách đứng trước.

Giá trị danh sách có thể chứa chữ, số và [[Liên kết nội bộ]]. Khi sử dụng [[Liên kết nội bộ]] trong thuộc tính danh sách, hãy bao quanh chúng bằng dấu ngoặc kép.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Số

Thuộc tính loại số phải luôn là một số nguyên văn, không phải biểu thức có toán tử. Cả số nguyên và số thập phân đều được chấp nhận.

```yaml
---
year: 1977
pie: 3.14
---
```

### Hộp kiểm

Thuộc tính hộp kiểm có giá trị `true` hoặc `false`. Trong chế độ Xem trước trực tiếp, điều này hiển thị dưới dạng hộp kiểm.

```yaml
---
favorite: true
reply: false
last: # Giá trị không xác định; thường được xử lý là false
```

### Ngày

Thuộc tính ngày được lưu trữ theo định dạng sau:

```yaml
---
date: 2020-08-21
---
```

Bộ chọn ngày tuân theo định dạng ngày và giờ mặc định của hệ điều hành. Bạn có thể thay đổi nó trong tùy chọn hệ thống:

> [!info]- Windows
> **[[Cài đặt]] → Time & Language → Language & Region → Regional Format → Change Formats**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **System Preferences → Language and Region → Date format**
> 
> ![[Mac-OS-DateTime.png|450]]

Với plugin [[Ghi chú hàng ngày]] được bật, thuộc tính ngày sẽ hoạt động thêm như một liên kết nội bộ đến ghi chú hằng ngày tương ứng cho ngày đó.

![[Ghi chú hàng ngày#^daily-notes-date]]

### Ngày tháng

Thuộc tính ngày tháng bao gồm cả ngày và thời gian cụ thể, được lưu trữ theo định dạng sau:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Giống như [[#Ngày|thuộc tính ngày]], bộ chọn ngày và giờ tuân theo định dạng mặc định của hệ điều hành. Bạn có thể thay đổi nó trong tùy chọn hệ thống.

### Thẻ

Thuộc tính thẻ là một loại thuộc tính đặc biệt được sử dụng riêng cho thuộc tính `tags`. Loại thuộc tính này không thể được gán cho các thuộc tính khác.

Thuộc tính thẻ được định dạng dưới dạng danh sách, với mỗi thẻ trên dòng riêng có dấu gạch ngang (-) và dấu cách đứng trước.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

Thuộc tính `tags` là một trong các [[#Thuộc tính mặc định]] của Obsidian. Xem [[Thẻ]] để biết thêm thông tin về cách sử dụng thẻ trong Obsidian.

### Thuộc tính JSON

Mặc dù chúng tôi khuyến nghị sử dụng YAML để định nghĩa thuộc tính, bạn cũng có thể định nghĩa thuộc tính bằng [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Lưu ý rằng khối JSON sẽ được đọc, thông dịch và lưu dưới dạng YAML.

## Thuộc tính mặc định

Obsidian đi kèm với một bộ thuộc tính mặc định:

| Thuộc tính   | Loại | Mô tả                                                       |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | Danh sách | Xem [[Chỉnh sửa và định dạng/Thẻ\|Thẻ]].                   |
| `aliases`    | Danh sách | Xem [[Bí danh]].                                            |
| `cssclasses` | Danh sách | Cho phép bạn tạo kiểu cho từng ghi chú riêng lẻ bằng [[Mẩu CSS]]. |

### Thuộc tính cho Obsidian Publish

Các thuộc tính mặc định sau có thể được sử dụng với [[Giới thiệu về Obsidian Publish|Obsidian Publish]]:

| Thuộc tính    | Mô tả                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Xem [[Xuất bản nội dung của bạn#Tự động chọn dữ liệu để xuất bản\|Tự động chọn dữ liệu để xuất bản]]. |
| `permalink`   | Xem [[Liên kết cố định\|Liên kết cố định]].                                                               |
| `description` | Xem [[Xem trước liên kết mạng xã hội#Mô tả\|Mô tả]].                                                    |
| `image`       | Xem [[Xem trước liên kết mạng xã hội#Hình ảnh\|Hình ảnh]].                                               |
| `cover`       | Xem [[Xem trước liên kết mạng xã hội#Hình ảnh\|Hình ảnh]].                                               |

### Thuộc tính không còn được dùng

Các thuộc tính này đã không còn được dùng từ Obsidian 1.4 và nên được thay thế bằng các tương đương hiện đại. Hỗ trợ cho chúng như [[#Thuộc tính mặc định]] đã bị loại bỏ trong Obsidian 1.9.

| Thuộc tính | Mô tả |
|-|-|
| `tag` | Bí danh không còn được dùng của `tags`. |
| `alias` | Bí danh không còn được dùng của `aliases`. |
| `cssclass` | Bí danh không còn được dùng của `cssclasses`. |

> [!tip] Nếu bạn cần chuyển đổi các tệp trong kho của bạn sang định dạng [[#Thuộc tính mặc định]], bạn có thể sử dụng [[Bộ chuyển đổi định dạng Markdown]] để thay đổi toàn bộ kho của bạn.
