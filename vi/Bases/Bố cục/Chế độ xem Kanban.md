---
permalink: bases/views/kanban
---
Kanban là một loại [[Các chế độ xem|chế độ xem]] bạn có thể sử dụng trong [[Giới thiệu về Cơ sở|Cơ sở]].

Chọn ![[lucide-kanban-square.svg#icon]] **Kanban** từ menu chế độ xem để hiển thị tệp dưới dạng thẻ được tổ chức thành các cột. Mỗi cột đại diện cho một giá trị của thuộc tính được sử dụng để nhóm kết quả.


> [!note] Yêu cầu Obsidian 1.14+
> Chế độ xem Kanban có sẵn trong Obsidian 1.14 trở lên.


## Nhóm thẻ thành các cột

Chế độ xem Kanban yêu cầu một thuộc tính để nhóm kết quả.

1. Chọn **Nhóm** trong thanh công cụ. Trên điện thoại, chọn **Hiển thị → Nhóm**.
2. Trong **Nhóm theo**, chọn một thuộc tính.

Các tệp không có giá trị cho thuộc tính đã chọn sẽ xuất hiện trong cột **Không có giá trị**.

> [!info] 
> Nếu bạn nhóm theo công thức hoặc thuộc tính tệp khác ngoài `file.folder`, bạn không thể di chuyển thẻ hoặc cột, hoặc tạo ghi chú từ các cột. Bạn vẫn có thể [[Các chế độ xem#Sắp xếp lại, ẩn và thêm nhóm|quản lý thứ tự và khả năng hiển thị nhóm]] trong menu **Nhóm**.

## Làm việc với thẻ và cột

- Kéo thẻ sang cột khác để cập nhật thuộc tính được nhóm trong ghi chú đó. Chỉ các ghi chú Markdown mới có thể được di chuyển giữa các cột, trừ khi nhóm theo `file.folder`, trong trường hợp đó việc di chuyển thẻ sẽ di chuyển tệp vào thư mục đó.
- Chọn biểu tượng dấu cộng trong tiêu đề cột hoặc ![[lucide-plus.svg#icon]] **Mới** ở cuối cột để tạo ghi chú với giá trị của cột đó.
- Kéo tiêu đề cột để thay đổi thứ tự cột. Để khôi phục thứ tự tự động, mở **Nhóm** và chọn thứ tự sắp xếp tự động thay vì **Thủ công**.
- Sử dụng **Nhóm** để [[Các chế độ xem#Sắp xếp lại, ẩn và thêm nhóm|sắp xếp lại, ẩn hoặc thêm cột]].
- Sử dụng menu ![[lucide-list.svg#icon]] **Thuộc tính** để chọn các thuộc tính hiển thị trên mỗi thẻ. Thuộc tính đầu tiên được hiển thị làm tiêu đề thẻ.

## Cài đặt

Cài đặt chế độ xem Kanban có thể được cấu hình trong [[Các chế độ xem#Cài đặt chế độ xem|Cài đặt chế độ xem]].

- Ẩn cột trống
- Chiều rộng cột
- Thuộc tính hình ảnh
- Vừa khung hình ảnh
- Tỷ lệ khung hình

### Ẩn cột trống

Ẩn các cột không chứa thẻ nào.

### Chiều rộng cột

Xác định chiều rộng của mỗi cột và các thẻ trong đó.

### Thuộc tính hình ảnh

Thẻ Kanban hỗ trợ hình ảnh bìa tùy chọn được hiển thị ở đầu thẻ. Các giá trị thuộc tính được hỗ trợ giống như [[Chế độ xem thẻ#Thuộc tính hình ảnh|thuộc tính hình ảnh trong chế độ xem Thẻ]].

### Vừa khung hình ảnh

Nếu bạn đã cấu hình thuộc tính hình ảnh, tùy chọn này xác định cách hình ảnh được hiển thị trong thẻ.

- **Phủ kín:** Hình ảnh lấp đầy vùng nội dung của thẻ. Nếu không vừa, hình ảnh sẽ bị cắt xén.
- **Chứa trong:** Hình ảnh được thu nhỏ cho đến khi vừa với vùng nội dung của thẻ. Hình ảnh không bị cắt xén.

### Tỷ lệ khung hình

Chiều cao của hình ảnh bìa được xác định bởi tỷ lệ khung hình. Điều chỉnh tùy chọn này để làm hình ảnh thấp hơn hoặc cao hơn.
