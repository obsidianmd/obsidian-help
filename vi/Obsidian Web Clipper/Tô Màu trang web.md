---
permalink: web-clipper/highlight
---
[[Giới thiệu về Obsidian Web Clipper|Web Clipper]] cho phép bạn tô sáng văn bản trên các trang web và chọn các phần tử bạn muốn lưu vào Obsidian. Các phần tô sáng của bạn được lưu lại, để bạn có thể xem lại chúng khi quay lại trang.

Các phần tô sáng có thể được [[Cắt trang web|thu thập]] và lưu vào Obsidian khi bạn mở tiện ích mở rộng.

## Bật đánh dấu

Bạn có thể bật tính năng đánh dấu theo nhiều cách, tùy thuộc vào trình duyệt của bạn:

- Biểu tượng đánh dấu trong bảng điều khiển tiện ích mở rộng.
- Phím tắt, để kích hoạt tiện ích mở rộng từ bàn phím.
- Menu ngữ cảnh, bằng cách nhấp chuột phải vào trang web bạn đang truy cập.

Sau khi bật đánh dấu, bạn có thể chọn văn bản, hình ảnh và các phần tử bạn muốn tô sáng.

## Cài đặt đánh dấu

Bạn có thể thay đổi hành vi đánh dấu bằng cách vào cài đặt Web Clipper. Tại đây bạn cũng có thể xuất các phần tô sáng sang tệp `.json`.

Có ba tùy chọn cho các phần tô sáng được chèn vào ghi chú đã cắt thông qua [[Biến|biến]] `{{content}}`:

- **Đánh dấu nội dung trang** — thêm phần tô sáng trực tiếp vào văn bản với [[Obsidian Flavored Markdown|cú pháp]] `==highlight==`.
- **Thay thế nội dung trang** — trả về danh sách các phần tô sáng, không bao gồm nội dung trang.
- **Không làm gì** — trả về nội dung gốc không có phần tô sáng.

Bạn có thể thêm phần tô sáng trực tiếp vào mẫu của mình bằng biến `{{highlights}}`, ví dụ:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```
