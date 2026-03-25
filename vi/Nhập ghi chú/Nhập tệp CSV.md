---
permalink: import/csv
---
Obsidian cho phép bạn nhập dữ liệu từ tệp CSV bằng [[Trình nhập|plugin Trình nhập]] chính thức. Điều này hữu ích nếu bạn có dữ liệu dạng bảng được lưu trữ trong các ứng dụng như Excel, Google Sheets, Numbers, Notion hoặc Airtable.

Nhập CSV tạo ra các tệp Markdown cho mỗi hàng và một tệp [[Giới thiệu về Cơ sở|Cơ sở]] hiển thị tất cả các tệp đã nhập dưới dạng bảng.

Nếu bạn đang nhập ghi chú từ một ứng dụng cụ thể, bạn có thể muốn xem trước danh sách các ứng dụng được hỗ trợ bởi [[Trình nhập|plugin Trình nhập]] để kiểm tra xem có bộ chuyển đổi cụ thể nào giúp bảo toàn dữ liệu bạn đang di chuyển tốt hơn hay không.

## Tạo ghi chú từ dữ liệu CSV trong Obsidian

Bạn sẽ cần plugin chính thức Obsidian [[Trình nhập]], bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi tới **Phần mở rộng từ cộng đồng** và [cài đặt Trình nhập](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Trình nhập.
4. Mở plugin **Trình nhập** bằng bảng lệnh hoặc biểu tượng thanh công cụ.
5. Trong **Định dạng tệp** chọn **CSV (.csv).**
6. Chọn vị trí tệp CSV của bạn.
7. Nhấp **Nhập** để cấu hình cách dữ liệu trong tệp CSV của bạn sẽ được chuyển đổi thành ghi chú với [[Thuộc tính]].
8. Nhấp **Tiếp tục** và đợi cho đến khi quá trình nhập hoàn tất.
9. Hoàn thành!

## Cấu hình cách các trường CSV được nhập

Ở bước thứ hai của quá trình nhập CSV, bạn có thể chọn cách dữ liệu được nhập bằng mẫu.

Mỗi cột trong tệp CSV của bạn được gán một biến gọi là `{{column_name}}` đại diện cho tên tiêu đề trong tệp của bạn. Bạn có thể sử dụng biến này để định nghĩa tiêu đề, vị trí, nội dung và [[Thuộc tính|thuộc tính]] của ghi chú.
