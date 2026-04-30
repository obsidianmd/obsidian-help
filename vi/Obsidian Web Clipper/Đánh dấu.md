---
permalink: web-clipper/highlight
aliases:
  - Tô Màu trang web
---
[[Giới thiệu về Obsidian Web Clipper|Web Clipper]] cho phép bạn tô sáng văn bản trên các trang web và chọn các phần tử bạn muốn lưu vào Obsidian. Các phần tô sáng được lưu lại để bạn có thể xem chúng khi quay lại trang.

Các phần tô sáng có thể được lưu vào Obsidian bằng tiện ích mở rộng. Bạn có thể thiết lập các tùy chọn đánh dấu trong cài đặt tiện ích mở rộng.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Sử dụng trình đánh dấu

Trình đánh dấu có thể được sử dụng trên các trang web trực tiếp hoặc [[Đọc]]. Trong chế độ xem Reader, việc tạo vùng chọn văn bản sẽ cho bạn tùy chọn tô sáng nó.

Bạn cũng có thể tự động thêm các vùng chọn vào phần tô sáng bằng cách kích hoạt trình đánh dấu:

- ![[lucide-highlighter.svg#icon]] **Biểu tượng đánh dấu** trong bảng điều khiển tiện ích mở rộng hoặc thanh công cụ Reader.
- **Phím tắt** có thể tùy chỉnh trong cài đặt tiện ích mở rộng.
- **Menu ngữ cảnh** bằng cách nhấp chuột phải vào trang web bạn đang truy cập.

Sau khi bật trình đánh dấu, bất kỳ văn bản, hình ảnh và phần tử nào được chọn sẽ được thêm vào phần tô sáng của bạn. Tất cả các phương pháp trên cũng cho phép bạn thoát khỏi trình đánh dấu.

## Thêm phần tô sáng vào ghi chú

Có ba tùy chọn cho cách các phần tô sáng được chèn vào ghi chú đã cắt:

- **Đánh dấu nội dung trang** — thêm phần tô sáng trực tiếp vào văn bản với [[Obsidian Flavored Markdown|cú pháp]] `==highlight==`.
- **Thay thế nội dung trang** — trả về danh sách các phần tô sáng, không bao gồm nội dung trang.
- **Không làm gì** — trả về nội dung gốc không có phần tô sáng.
 
Các tùy chọn này thay đổi [[Biến|biến]] `{{content}}` trong mẫu của bạn. Bạn cũng có thể thêm phần tô sáng trực tiếp vào mẫu của mình bằng biến `{{highlights}}`, ví dụ:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Xem và tìm kiếm phần tô sáng

Tất cả các phần tô sáng bạn tạo có thể được xem trong trang Highlights. Bạn có thể mở trang này bằng cách vào **Cài đặt** → **Highlighter**.

## Xuất phần tô sáng

Các phần tô sáng có thể được xuất sang tệp `.json`, trong trang Cài đặt hoặc trong trang Highlights.
