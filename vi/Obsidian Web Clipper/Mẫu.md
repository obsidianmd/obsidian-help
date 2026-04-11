---
permalink: web-clipper/templates
description: Tìm hiểu cách tạo các mẫu để thu thập và sắp xếp siêu dữ liệu trang web một cách tự động với Web Clipper.
aliases:
  - Plugin/Templates
---
[[Giới thiệu về Obsidian Web Clipper|Web Clipper]] cho phép bạn tạo các mẫu để tự động thu thập và tổ chức siêu dữ liệu từ các trang web. Các mẫu ví dụ có sẵn trong [kho clipper-templates](https://github.com/kepano/clipper-templates).

## Tạo mới hoặc chỉnh sửa một mẫu

Để **tạo mới** một mẫu, hãy vào cài đặt Web Clipper và nhấn nút **Mẫu mới** trong thanh bên. Bạn cũng có thể **nhân bản** một mẫu trong menu **Thêm** ở góc trên bên phải.

Để **chỉnh sửa** một mẫu, hãy chọn một mẫu từ thanh bên. Các thay đổi của bạn sẽ được lưu tự động.

Các mẫu sử dụng [[Biến]] và [[Bộ lọc]], cho phép bạn tùy chỉnh cách nội dung được lưu.

## Nhập và xuất mẫu Web Clipper

Để nhập một mẫu:

1. Mở tiện ích mở rộng và nhấn biểu tượng bánh răng **[[Cài đặt]]**.
2. Đi đến bất kỳ mẫu nào trong danh sách.
3. Nhấn **Nhập** ở góc trên bên phải hoặc kéo và thả (các) tệp mẫu `.json` của bạn vào bất kỳ đâu trong khu vực mẫu.

Để xuất một mẫu, nhấn **Xuất** ở góc trên bên phải. Thao tác này sẽ tải xuống tệp mẫu `.json`. Bạn cũng có thể sao chép dữ liệu mẫu vào bảng tạm qua menu **Thêm**.

## Cài đặt mẫu

### Hành vi

Xác định cách nội dung từ Web Clipper sẽ được thêm vào Obsidian:

- **Tạo một ghi chú mới**
- **Thêm vào ghi chú hiện có**, ở đầu hoặc cuối
- **Thêm vào ghi chú hàng ngày**, ở đầu hoặc cuối (yêu cầu plugin [[Ghi chú hàng ngày|ghi chú hàng ngày]] đang hoạt động)

### Tự động kích hoạt một mẫu

Bộ kích hoạt mẫu cho phép bạn tự động chọn một mẫu dựa trên URL của trang hiện tại hoặc dữ liệu [schema.org](https://schema.org/). Bạn có thể định nghĩa nhiều quy tắc cho mỗi mẫu, phân tách bằng dòng mới.

Kết quả khớp đầu tiên trong danh sách mẫu của bạn sẽ quyết định mẫu nào được sử dụng. Bạn có thể kéo các mẫu lên xuống trong cài đặt Web Clipper để thay đổi thứ tự khớp mẫu.

#### Khớp URL đơn giản

Khớp đơn giản kích hoạt một mẫu nếu URL của trang hiện tại *bắt đầu bằng* mẫu đã cho. Ví dụ:

- `https://obsidian.md` sẽ khớp với bất kỳ URL nào bắt đầu bằng đoạn văn bản này.

#### Khớp bằng biểu thức chính quy

Bạn có thể kích hoạt mẫu dựa trên các mẫu URL phức tạp hơn bằng biểu thức chính quy. Đặt mẫu biểu thức chính quy trong dấu gạch chéo (`/`). Hãy nhớ thoát các ký tự đặc biệt trong biểu thức chính quy (như `.` và `/`) bằng dấu gạch chéo ngược (`\`). Ví dụ:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` sẽ khớp với bất kỳ trang tham chiếu IMDB nào.

#### Khớp Schema.org

Bạn có thể kích hoạt mẫu dựa trên dữ liệu [schema.org](https://schema.org/) có trên trang. Sử dụng tiền tố `schema:` theo sau bởi khóa schema bạn muốn khớp. Bạn có thể tùy chọn chỉ định một giá trị mong đợi. Ví dụ:

- `schema:@Recipe` sẽ khớp với các trang có kiểu schema là "Recipe".
- `schema:@Recipe.name` sẽ khớp với các trang có `@Recipe.name` hiện diện.
- `schema:@Recipe.name=Cookie` sẽ khớp với các trang có `@Recipe.name` là "Cookie".

Các giá trị schema.org cũng có thể được sử dụng để [[Biến#Biến Schema.org|điền sẵn dữ liệu trong mẫu]].

### Ngữ cảnh thông dịch

Khi [[Thông dịch|Thông dịch]] được bật, bạn có thể sử dụng [[Biến#Biến gợi ý|biến prompt]] để trích xuất nội dung trang bằng ngôn ngữ tự nhiên. Cho mỗi mẫu, bạn có thể định nghĩa [[Thông dịch#Ngữ cảnh|ngữ cảnh]] mà Thông dịch có quyền truy cập.
