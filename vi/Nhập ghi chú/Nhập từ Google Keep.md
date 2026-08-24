---
permalink: import/google-keep
cssclasses:
  - soft-embed
---
Obsidian cho phép bạn dễ dàng di chuyển ghi chú từ Google Keep bằng [[Trình nhập|plugin Importer]]. Công cụ này chuyển đổi dữ liệu Google Keep của bạn thành các tệp Markdown bền vững mà bạn có thể sử dụng với Obsidian và nhiều ứng dụng khác.

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
7. Chọn **Nhập** để xem lại mẫu được tạo và xem trước các ví dụ từ ghi chú của bạn.
8. Chọn **Nhập** lần nữa và đợi cho quá trình nhập hoàn tất.

## Hạn chế

- Tất cả danh sách kiểm tra sẽ được nhập dưới dạng mục cấp cao nhất vì Google Keep không xuất thông tin thụt lề.
- Lời nhắc và phân công người dùng trên ghi chú sẽ không được nhập vì các tính năng này không được Obsidian hỗ trợ.


## Mẫu

Sử dụng [[Mẫu trình nhập|mẫu Importer]] để cấu hình đầy đủ cách dữ liệu Google Keep của bạn được nhập.

![[Mẫu trình nhập#Variables]]

Ngoài ra, Google Keep cung cấp các biến cho văn bản gốc, danh sách, nhãn, tệp đính kèm, màu sắc, dữ liệu chia sẻ, nhiệm vụ, chú thích và trạng thái ghi chú.

| Biến              | Mô tả                                             |
| ----------------- | -------------------------------------------------- |
| `{{isArchived}}`  | Ghi chú có được lưu trữ hay không.                |
| `{{isPinned}}`    | Ghi chú có được ghim hay không.                    |
| `{{isTrashed}}`   | Ghi chú có trong thùng rác hay không.              |
| `{{color}}`       | Tên màu Google Keep.                               |
| `{{labels}}`      | Mảng các bản ghi nhãn.                             |
| `{{sharees}}`     | Mảng những người được chia sẻ ghi chú.             |
| `{{annotations}}` | Mảng các bản ghi chú thích liên kết.               |

Tiêu đề Google Keep gốc có sẵn dưới dạng `{{source.title}}`. Biến `{{title}}` dùng chung chứa tiêu đề ghi chú đã nhập.
