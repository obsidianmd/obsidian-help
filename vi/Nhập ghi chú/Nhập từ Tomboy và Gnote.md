---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian cho phép bạn di chuyển ghi chú từ Tomboy và Gnote bằng [[Trình nhập|plugin Trình nhập]] chính thức. Trình nhập đọc trực tiếp các tệp `.note` của ứng dụng và chuyển đổi nội dung XML thành Markdown.

## Xác định vị trí tệp ghi chú của bạn

Tomboy và Gnote thường lưu trữ ghi chú trong các thư mục sau:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` hoặc `~/.local/share/gnote`

Vị trí chính xác có thể khác nếu bạn đã di chuyển thư mục dữ liệu hoặc sử dụng phiên bản khác của ứng dụng.

## Nhập ghi chú Tomboy hoặc Gnote của bạn

1. Mở **[[Cài đặt]] → Phần mở rộng từ cộng đồng** và [cài đặt Trình nhập](obsidian://show-plugin?id=obsidian-importer).
2. Kích hoạt plugin Trình nhập.
3. Mở **Trình nhập** bằng [[Khay lệnh]] hoặc biểu tượng trên thanh công cụ.
4. Trong **Định dạng tệp**, chọn **Tomboy/Gnote (.note)**.
5. Chọn các tệp `.note` riêng lẻ hoặc thư mục chứa chúng.
6. Xem lại các tùy chọn nhập, mẫu được tạo và các ví dụ xem trước.
7. Chọn **Nhập** và đợi quá trình nhập hoàn tất.

## Mẫu

Sử dụng [[Mẫu trình nhập|Mẫu trình nhập]] để cấu hình đầy đủ cách dữ liệu của bạn được nhập.

![[Mẫu trình nhập#Biến]]
