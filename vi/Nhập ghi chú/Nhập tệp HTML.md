---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian cho phép bạn dễ dàng nhập các tệp HTML riêng lẻ và toàn bộ thư mục chứa tệp HTML bằng [[Trình nhập|plugin Trình nhập]] chính thức. Điều này hữu ích nếu bạn muốn lưu toàn bộ trang web sang định dạng [[Obsidian Flavored Markdown|Markdown]], hoặc nếu bạn muốn nhập dữ liệu từ một công cụ xuất ra HTML.

Nếu bạn đang nhập ghi chú từ một ứng dụng cụ thể, bạn có thể muốn xem trước danh sách các ứng dụng được hỗ trợ bởi [[Trình nhập|plugin Trình nhập]] để kiểm tra xem có bộ chuyển đổi cụ thể nào giúp bảo toàn dữ liệu bạn đang di chuyển tốt hơn không.

## Nhập dữ liệu HTML vào Obsidian

Bạn sẽ cần plugin [[Trình nhập]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi tới **Phần mở rộng từ cộng đồng** và [cài đặt Trình nhập](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Trình nhập.
4. Mở plugin **Trình nhập** bằng bảng lệnh hoặc biểu tượng trên thanh công cụ.
5. Trong phần **Định dạng tệp** chọn **HTML (.html).**
6. Chọn vị trí của các tệp hoặc thư mục HTML của bạn.
7. Chọn **Nhập** để xem lại mẫu được tạo và xem trước các ví dụ từ tệp của bạn.
8. Chọn **Nhập** lần nữa và đợi cho đến khi quá trình nhập hoàn tất.

### Nhập cài đặt

- **Giới hạn kích thước tệp đính kèm**: Bỏ qua việc nhập tệp đính kèm lớn hơn kích thước được chỉ định.
- **Kích thước hình ảnh tối thiểu**: Bỏ qua việc nhập hình ảnh nhỏ hơn kích thước được chỉ định ở bất kỳ chiều nào. Có thể được sử dụng để bỏ qua biểu tượng và logo.

## Mẫu

Sử dụng [[Mẫu trình nhập|mẫu Trình nhập]] để cấu hình đầy đủ cách dữ liệu của bạn được nhập.

![[Mẫu trình nhập#Variables]]

Ngoài ra, việc nhập HTML cung cấp nhiều biến tương tự như [[Giới thiệu về Obsidian Web Clipper|Web Clipper]]:

| Biến | Mô tả |
| --- | --- |
| `{{author}}` | Tác giả của trang. |
| `{{contentHtml}}` | Nội dung trang được trích xuất ở định dạng HTML. |
| `{{description}}` | Mô tả hoặc trích đoạn của trang. |
| `{{domain}}` | Tên miền của trang. |
| `{{favicon}}` | URL favicon. |
| `{{fullHtml}}` | HTML chưa xử lý của toàn bộ trang. |
| `{{image}}` | URL hình ảnh chia sẻ mạng xã hội. |
| `{{language}}` | Ngôn ngữ trang. |
| `{{published}}` | Ngày xuất bản, có thể được định dạng bằng bộ lọc `date`. |
| `{{site}}` | Tên trang web hoặc nhà xuất bản. |
| `{{url}}` | URL nguồn được tìm thấy trong tài liệu đã nhập, khi có sẵn. |
| `{{words}}` | Số từ. |
