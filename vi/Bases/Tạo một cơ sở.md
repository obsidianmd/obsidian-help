---
permalink: bases/create-base
---
[[Giới thiệu về Cơ sở|Cơ sở]] cho phép bạn tạo các chế độ xem dạng cơ sở dữ liệu cho ghi chú của mình. Dưới đây là cách bạn có thể tạo một cơ sở và nhúng nó vào ghi chú. Mỗi cơ sở có thể có một hoặc nhiều [[Các chế độ xem|chế độ xem]] để hiển thị thông tin theo các cách khác nhau.

## Tạo cơ sở mới

**Bảng lệnh:**

1. Mở **Bảng lệnh**.
2. Chọn
	- **Cơ sở: Tạo cơ sở mới** để tạo một cơ sở trong cùng thư mục với tệp đang hoạt động.
	- **Cơ sở: Chèn cơ sở mới** để tạo một cơ sở và nhúng nó vào tệp hiện tại.

**Trình khám phá tệp:**

1. Trong Trình khám phá tệp, nhấp chuột phải vào thư mục bạn muốn tạo cơ sở.
2. Chọn **Cơ sở mới**.

**Thanh công cụ:**

- Trong thanh công cụ dọc, chọn **Tạo cơ sở mới** để tạo một cơ sở trong cùng thư mục với tệp đang hoạt động.

## Nhúng một cơ sở

### Nhúng tệp cơ sở

Bạn có thể nhúng tệp cơ sở vào [[Nhúng tệp|bất kỳ tệp nào khác]] bằng cú pháp `![[File.base]]`. Để chỉ định chế độ xem mặc định, sử dụng `![[File.base#View]]`.

### Nhúng cơ sở dưới dạng khối mã

Cơ sở cũng có thể được nhúng trực tiếp vào ghi chú bằng khối mã `base` và [[Cú pháp Cơ sở|cú pháp cơ sở]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~
