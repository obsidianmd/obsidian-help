---
permalink: import/csv
cssclasses:
  - soft-embed
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
7. Chọn **Nhập** để cấu hình cách dữ liệu trong tệp CSV của bạn sẽ được chuyển đổi thành ghi chú với [[Thuộc tính]].
8. Chọn **Tiếp tục** để xem lại mẫu đã tạo và xem trước các ví dụ từ các hàng của bạn.
9. Chọn **Nhập** và đợi quá trình nhập hoàn tất.

## Cấu hình cách các trường CSV được nhập

Ở bước cấu hình trường, bạn có thể chọn cách dữ liệu được nhập. Trình nhập tạo một mẫu từ các tiêu đề CSV, sử dụng cột đầu tiên cho tên ghi chú ban đầu và tạo một thuộc tính cho mỗi cột.

## Mẫu

Sử dụng [[Mẫu trình nhập|mẫu Trình nhập]] để cấu hình đầy đủ cách dữ liệu của bạn được nhập.

Mỗi cột CSV đều có thể sử dụng được thông qua tiêu đề của nó. Nếu một cột không có tiêu đề, Trình nhập sẽ sử dụng tên cột được tạo tự động.

Sử dụng ký pháp ngoặc vuông để xử lý an toàn khoảng trắng và dấu câu:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Mẫu trình nhập#Variables]]
