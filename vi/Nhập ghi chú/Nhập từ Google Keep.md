---
permalink: import/google-keep
---
Obsidian cho phép bạn dễ dàng di chuyển ghi chú từ Google Keep bằng [[Trình nhập|plugin Importer]]. Công cụ này sẽ chuyển đổi dữ liệu Google Keep của bạn thành các tệp Markdown bền vững, mà bạn có thể sử dụng với Obsidian và nhiều ứng dụng khác.

## Xuất dữ liệu từ Google Keep

1. Truy cập [Google Takeout](https://takeout.google.com/settings/takeout) và đăng nhập vào tài khoản Google của bạn.
2. Nhấp **Bỏ chọn tất cả** ở góc trên bên phải.
3. Cuộn xuống và chọn **Keep** từ danh sách.
4. Cuộn xuống cuối trang và nhấp **Bước tiếp theo**.
5. Trên màn hình tiếp theo, nhấp nút **Tạo bản xuất**.
6. Tải xuống tệp `.zip` khi nó sẵn sàng.

## Nhập dữ liệu Google Keep vào Obsidian

Bạn sẽ cần plugin [[Trình nhập]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Vào **Phần mở rộng từ cộng đồng** và [cài đặt Importer](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Importer.
4. Mở plugin **Importer** bằng bảng lệnh hoặc biểu tượng thanh công cụ.
5. Trong mục **Định dạng tệp** chọn **Google Keep (.zip).**
6. Chọn vị trí tệp `.zip` của bạn.
7. Nhấp **Nhập** và đợi cho đến khi quá trình nhập hoàn tất.
8. Hoàn thành!

### Các tính năng được hỗ trợ

- Tất cả danh sách kiểm tra sẽ được nhập dưới dạng mục cấp cao nhất vì Google Keep không xuất thông tin thụt lề.
- Lời nhắc và phân công người dùng trên ghi chú sẽ không được nhập vì các tính năng này không được Obsidian hỗ trợ.
- Tất cả thông tin khác sẽ được nhập dưới dạng kết hợp nội dung và thẻ.
