---
permalink: formulas
description: 'Formulas allow you to create calculated properties using data from other properties. You can perform calculations, manipulate text, work with dates, and more.'
---
Công thức cho phép bạn tạo các thuộc tính được tính toán trong [[Giới thiệu về Cơ sở|Cơ sở]] sử dụng dữ liệu từ các [[Thuộc tính|thuộc tính]] khác. Bạn có thể thực hiện các phép tính, thao tác với văn bản, làm việc với ngày tháng và nhiều hơn nữa.

## Công thức có thể làm gì

Công thức có thể giúp bạn:

- **Tính toán giá trị**, cộng giá, tính tổng, hoặc thực hiện các phép toán.
- **Thao tác với văn bản**, kết hợp chuỗi, thay đổi kiểu chữ, hoặc trích xuất chuỗi con.
- **Làm việc với ngày tháng**, tính chênh lệch thời gian, định dạng ngày, hoặc xác định thời hạn.
- **Áp dụng logic**, sử dụng câu lệnh điều kiện để hiển thị các giá trị khác nhau.
- **Xử lý danh sách**, lọc, sắp xếp, ánh xạ, hoặc tổng hợp dữ liệu danh sách.

## Tạo thuộc tính công thức

Để tạo thuộc tính công thức:

1. Trong cơ sở của bạn, nhấp **Thuộc tính** trên thanh công cụ.
2. Nhấp **Thêm công thức** ở cuối menu.
3. Nhập tên cho thuộc tính công thức của bạn.
4. Nhập công thức của bạn vào trường **Công thức**.
5. Đóng hộp thoại.

Trình chỉnh sửa công thức sẽ tự động hoàn tất tên [[Hàm|hàm]] và thuộc tính khi bạn nhập để xác thực cú pháp công thức của bạn. Dấu kiểm xanh xuất hiện khi công thức của bạn hợp lệ.

Sau khi tạo, bạn có thể sử dụng thuộc tính công thức như bất kỳ thuộc tính nào khác trong cơ sở của bạn. Thêm nó vào [[Các chế độ xem|các chế độ xem]], sử dụng trong bộ lọc, sắp xếp theo nó và nhiều hơn nữa.

## Viết công thức

Trong trình chỉnh sửa công thức, nhập một biểu thức sử dụng các thuộc tính, toán tử và hàm.

### Tham chiếu thuộc tính

Bạn có thể tham chiếu các loại thuộc tính khác nhau trong công thức của mình:

- **Thuộc tính ghi chú** — Thuộc tính từ [[Thuộc tính|siêu dữ liệu đầu tệp]] của ghi chú.
- **Thuộc tính tệp** — Thuộc tính tích hợp sẵn như `file.name`, `file.size`, hoặc `file.mtime`.
- **Thuộc tính công thức** — Các công thức khác sử dụng `formula.formula_name`.

**Ví dụ:**

- `price * quantity` — nhân hai thuộc tính ghi chú
- `file.name + " - " + description` — kết hợp tên tệp với thuộc tính ghi chú
- `formula.price_per_unit * 1.1` — sử dụng thuộc tính công thức khác

### Sử dụng toán tử

**Toán tử số học** thực hiện phép toán trên số:

- `price + tax` — cộng
- `price - discount` — trừ
- `price * quantity` — nhân
- `price / quantity` — chia
- `(part / whole) * 100` — sử dụng dấu ngoặc để xác định thứ tự phép toán

**Toán tử so sánh** so sánh các giá trị:

- `price > 100` — lớn hơn
- `age < 18` — nhỏ hơn
- `status == "Done"` — bằng
- `status != "Done"` — không bằng
- `file.mtime > now() - '7d'` — so sánh ngày tháng

**Toán tử boolean** kết hợp các điều kiện logic:

- `!completed` — phủ định
- `price > 0 && quantity > 0` — và
- `urgent || important` — hoặc

Tìm hiểu thêm trong [[Cú pháp Cơ sở#Toán tử|Cú pháp Cơ sở]].

### Sử dụng hàm

Hàm thực hiện các thao tác trên giá trị. Các hàm có sẵn phụ thuộc vào loại giá trị bạn đang làm việc. Xem danh sách đầy đủ các [[Hàm]].

**Các danh mục hàm phổ biến:**

- **Hàm toàn cục** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Hàm chuỗi** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Hàm số** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Hàm ngày tháng** — `format()`, `relative()`, `date()`, `time()`
- **Hàm danh sách** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Ví dụ:**

- `if(price, "$" + price.toFixed(2), "")` để định nghĩa điều kiện với định dạng số.
- `file.name.lower()` để chuyển sang chữ thường.
- `tags.contains("urgent")` để kiểm tra xem danh sách thẻ có chứa một giá trị hay không.
- `due_date.format("YYYY-MM-DD")` để định dạng ngày.

## Ví dụ công thức

### Tính thời hạn

Đặt ngày đến hạn của dự án là 2 tuần sau ngày bắt đầu:

```js
start_date + "2w"
```

### Hiển thị trạng thái quá hạn

Hiển thị "Overdue" nếu ngày đến hạn đã qua và trạng thái không phải "Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Định dạng tiền tệ

Hiển thị giá với 2 chữ số thập phân và ký hiệu tiền tệ:

```js
if(price, "$" + price.toFixed(2), "")
```

### Đếm mục trong danh sách

Đếm số mục trong thuộc tính danh sách:

```js
tasks.length
```

### Tính điểm ưu tiên

Kết hợp nhiều yếu tố thành điểm ưu tiên:

```js
(impact * urgency) / effort
```

### Kết hợp các trường văn bản

Tạo họ và tên đầy đủ từ họ và tên riêng:

```js
first_name + " " + last_name
```

### Tính tổng chi phí

Nhân chi phí hàng tháng với số tháng sở hữu:

```js
monthlyUses * formula.Owned.round()
```

## Kiểu dữ liệu

Công thức làm việc với các kiểu dữ liệu khác nhau:

- **Chuỗi** — Văn bản được đặt trong dấu ngoặc kép: `"hello"` hoặc `'world'`
- **Số** — Giá trị số: `42`, `3.14`, `(2 + 2)`
- **Boolean** — Đúng hoặc sai: `true`, `false`
- **Ngày tháng** — Được tạo bằng `date()`, `today()`, hoặc `now()`
- **Danh sách** — Tập hợp các giá trị: `[1, 2, 3]`
- **Đối tượng** — Cặp khóa-giá trị: `{"name": "value"}`

Kiểu đầu ra của công thức được xác định bởi dữ liệu và các hàm được sử dụng.

## Tham chiếu công thức khác

Công thức có thể tham chiếu các công thức khác, tạo ra các phép tính phái sinh. Ví dụ, nếu bạn có một công thức tên `price_per_unit`:

```js
price / quantity
```

Bạn có thể tham chiếu nó trong công thức khác:

```js
formula.price_per_unit * 1.1
```

> [!warning] Tránh tham chiếu vòng
> Một công thức không thể tham chiếu chính nó trực tiếp hoặc gián tiếp thông qua các công thức khác.
