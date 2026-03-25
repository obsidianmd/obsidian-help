---
permalink: bases/views/table
---
Bảng là một loại [[Các chế độ xem|chế độ xem]] bạn có thể sử dụng trong [[Giới thiệu về Cơ sở|Cơ sở]].

Chọn ![[lucide-table.svg#icon]]  **Bảng** từ menu chế độ xem để hiển thị các tệp dưới dạng bảng với một hàng cho mỗi tệp và các cột cho [[Thuộc tính]] của tệp đó.

![Ví dụ về một cơ sở hiển thị chế độ xem bảng với danh sách sách](bases-noshadow.png#interface)

## Cài đặt

Cài đặt chế độ xem bảng có thể được cấu hình trong [[Các chế độ xem#Cài đặt chế độ xem|Cài đặt chế độ xem]].

### Chiều cao hàng

Chiều cao hàng cho phép bạn hiển thị nhiều thông tin hơn. Chọn giữa **Thấp**, **Vừa**, **Cao** và **Rất cao**.

## Tóm tắt

Bạn có thể thêm tóm tắt vào một cột bảng để nhanh chóng tính toán các giá trị như tổng, trung bình hoặc đếm cho các hàng hiện đang hiển thị trong chế độ xem.

Tóm tắt được gắn với chế độ xem, không phải cơ sở. Mỗi chế độ xem có thể hiển thị các tóm tắt khác nhau cho cùng một cột.

### Thêm tóm tắt

1. Nhấp chuột phải vào tiêu đề cột trong chế độ xem bảng.
2. Chọn ![[lucide-calculator.svg#icon]] **Tóm tắt…**.
3. Chọn một trong các hàm tóm tắt có sẵn, hoặc chọn ![[lucide-square-function.svg#icon]] **Thêm tóm tắt** để tự định nghĩa.

Tóm tắt xuất hiện ở cuối cột. Khi kết quả được [[Các chế độ xem#Sắp xếp và nhóm kết quả|nhóm]], tóm tắt cho mỗi nhóm được hiển thị ở đầu nhóm.

Khi thanh tóm tắt đã được thêm, bạn có thể thêm nhiều tóm tắt hơn cho các cột khác bằng cách nhấp vào ô tóm tắt. Thanh tóm tắt sẽ bị ẩn nếu tất cả tóm tắt bị xóa.

### Tóm tắt có sẵn

Các tóm tắt sau đây có sẵn theo mặc định. Các tùy chọn có thể khác nhau tùy thuộc vào loại thuộc tính.

#### Tất cả loại thuộc tính

- **Không có giá trị**: số hàng không có giá trị.
- **Đã điền**: số hàng có giá trị.
- **Duy nhất**: số giá trị riêng biệt.

#### Số

- **Trung bình**: trung bình của tất cả các giá trị số.
- **Lớn nhất**: giá trị lớn nhất.
- **Trung vị**: giá trị trung vị.
- **Nhỏ nhất**: giá trị nhỏ nhất.
- **Phạm vi**: chênh lệch giữa lớn nhất và nhỏ nhất.
- **Độ lệch chuẩn**: độ lệch chuẩn.
- **Tổng**: tổng của tất cả các giá trị.

#### Ngày

- **Sớm nhất**: ngày nhỏ nhất/cũ nhất.
- **Muộn nhất**: ngày lớn nhất/gần đây nhất.
- **Phạm vi**: chênh lệch giữa sớm nhất và muộn nhất.

#### Hộp kiểm

- **Đã chọn**: số hàng có hộp kiểm được bật.
- **Chưa chọn**: số hàng có hộp kiểm bị tắt.

### Tóm tắt tùy chỉnh

Bạn có thể tự định nghĩa tóm tắt bằng công thức:

1. Trong menu ![[lucide-calculator.svg#icon]] **Tóm tắt…**, chọn ![[lucide-square-function.svg#icon]] **Thêm tóm tắt**.
2. Đặt tên cho tóm tắt.
3. Nhập công thức. Công thức chạy trên danh sách các giá trị trong cột đó (ví dụ, sử dụng một [[Hàm|hàm]] như `values.reduce(...)`).
4. Lưu tóm tắt.

Tóm tắt tùy chỉnh hữu ích khi bạn cần một phép tính không được bao gồm trong các tùy chọn có sẵn.

## Phím tắt

Bạn có thể nhanh chóng di chuyển trong chế độ xem bảng bằng cách sử dụng chuột và [[Phím tắt chỉnh sửa|phím tắt bàn phím]] sau.

- Shift-nhấp để tạo vùng chọn ô.
- Nhấp chuột phải vào vùng chọn ô để truy cập các thao tác bổ sung cho các tệp đó.

| Hành động                                                                                                          | Phím tắt            | macOS              |
| ------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ |
| Sao chép các ô đã chọn                                                                                             | `Ctrl+C`            | `Cmd+C`            |
| Dán các ô đã chọn                                                                                                  | `Ctrl+V`            | `Cmd+V`            |
| Hoàn tác thay đổi thuộc tính                                                                                       | `Ctrl+Z`            | `Cmd+Z`            |
| Làm lại thay đổi thuộc tính                                                                                        | `Ctrl+Shift+Z`      | `Cmd+Shift+Z`      |
| Chọn tất cả ô trong nhóm hiện tại                                                                                  | `Ctrl+A`            | `Cmd+A`            |
| Chọn tất cả ô theo một hướng nhất định                                                                             | `Ctrl+Shift+Arrow`  | `Ctrl+Shift+Arrow` |
| Chọn cột                                                                                                           | `Ctrl+Space`        |                    |
| Chọn hàng                                                                                                          | `Shift+Space`       |                    |
| Tập trung vào ô hiện tại — với hộp kiểm, thao tác này bật/tắt hộp kiểm, với công thức, thao tác này mở trình chỉnh sửa công thức | `Enter`             |                    |
| Đi đến cột đầu tiên                                                                                                | `Home`              |                    |
| Đi đến cột cuối cùng                                                                                               | `End`               |                    |
| Di chuyển lên và xuống theo chiều cao trang                                                                         | `PageUp`,`PageDown` |                    |
| Xóa vùng chọn ô hiện tại                                                                                           | `Esc`               |                    |
| Xóa nội dung các ô hiện tại                                                                                        | `Backspace`         |                    |
| Đi đến ô tiếp theo                                                                                                 | `Tab`               |                    |
| Đi đến ô trước đó                                                                                                  | `Shift-Tab`         |                    |
