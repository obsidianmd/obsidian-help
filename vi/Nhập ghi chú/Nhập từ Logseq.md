---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian cho phép bạn di chuyển ghi chú từ đồ thị Logseq dựa trên tệp (hiện được gọi là "Logseq OG") bằng [[Trình nhập|plugin Trình nhập]] chính thức. Trình nhập đọc trực tiếp các tệp Markdown của Logseq và chuyển đổi định dạng đặc thù của Logseq thành các tệp bền vững mà bạn có thể sử dụng ngoại tuyến với Obsidian và các ứng dụng khác.

## Trước khi bắt đầu

- Sao lưu đồ thị Logseq và kho Obsidian của bạn.
- Xác định thư mục gốc của đồ thị Logseq. Thư mục này thường chứa các thư mục con có tên `pages`, `journals`, `assets` và `logseq`.
- Đảm bảo bạn đang sử dụng đồ thị Logseq dựa trên tệp. Đồ thị cơ sở dữ liệu Logseq chưa được hỗ trợ.

## Nhập đồ thị Logseq của bạn

Bạn cần plugin [[Trình nhập]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]] → Phần mở rộng từ cộng đồng** và [cài đặt Trình nhập](obsidian://show-plugin?id=obsidian-importer).
2. Kích hoạt plugin Trình nhập.
3. Mở **Trình nhập** bằng [[Khay lệnh]] hoặc biểu tượng trên thanh công cụ.
4. Trong **Định dạng tệp**, chọn **Logseq**.
5. Trong **Chọn thư mục**, chọn thư mục gốc của đồ thị. Chọn thư mục chứa `pages` và `journals`, không phải từng thư mục riêng lẻ.
6. Xem lại các thư mục được phát hiện và loại trừ những thư mục bạn không muốn nhập.
7. Chọn thư mục đầu ra và nơi lưu trữ tệp đính kèm được nhập.
8. Xem lại các tùy chọn nhập và xem trước ví dụ về các ghi chú đã chuyển đổi.
9. Chọn **Nhập** và đợi quá trình nhập hoàn tất.

## Hạn chế

- Bảng trắng không được nhập.
- Truy vấn được giữ nguyên dưới dạng khối mã nếu bạn chọn giữ chúng.
- Các macro mẫu động của Logseq vẫn giữ nguyên dưới dạng văn bản thuần.
- Lịch trình flashcard, chú thích PDF và các dữ liệu đặc thù khác của Logseq không được di chuyển.

## Cài đặt

Trình nhập chuyển đổi các quy ước phổ biến của Logseq, bao gồm:

- Thuộc tính trang thành [[Thuộc tính]] của Obsidian.
- Bí danh trang, thẻ, không gian tên và liên kết.
- Trạng thái quy trình làm việc thành dấu đánh dấu danh sách hộp kiểm, với mức ưu tiên và ngày được giữ nguyên dưới dạng văn bản dễ đọc.
- ID khối, tham chiếu khối và nhúng khối thành liên kết và nhúng của Obsidian.
- Tên tệp nhật ký và liên kết ngày.
- Tô sáng, danh sách đánh số, khối Org, nhúng phương tiện và các tệp liên kết từ thư mục `assets` của đồ thị.

### Nhật ký

Theo mặc định, **Sử dụng cài đặt ghi chú hằng ngày** được bật. Nhật ký được nhập sẽ sử dụng thư mục và định dạng ngày được cấu hình bởi plugin cốt lõi [[Ghi chú hàng ngày]]. Điều này có thể đặt nhật ký bên ngoài thư mục đầu ra đã chọn trong Trình nhập.

Nếu bạn tắt tùy chọn này, nhật ký sẽ được ghi vào thư mục `Journals` bên trong thư mục đầu ra đã chọn và sử dụng định dạng tên ghi chú `YYYY-MM-DD`.

### Làm phẳng dàn ý

Logseq sử dụng dấu đầu dòng lồng nhau làm cấu trúc của một trang. Theo mặc định, Trình nhập giữ nguyên cấu trúc dàn ý này. Bật **Làm phẳng dàn ý** để chuyển đổi các khối dàn ý thành sự kết hợp của đoạn văn, tiêu đề và danh sách thông thường. Các tác vụ và nhóm mục giống danh sách vẫn là mục danh sách, nhưng quá trình chuyển đổi mang tính chất heuristic. Xem lại nhiều ví dụ trong bản xem trước trước khi nhập một đồ thị lớn.

### Giữ nguyên dữ liệu không tương thích

Truy vấn, flashcard và mục theo dõi thời gian của Logseq không có tương đương trực tiếp trong Obsidian. Các tùy chọn nhập cho phép bạn chọn có giữ từng loại nội dung hay không. Khi được giữ, nội dung vẫn ở dạng văn bản thuần.

- **Giữ truy vấn** giữ nguyên truy vấn dưới dạng khối mã có rào hoặc mã nội dòng.
- **Giữ flashcard** giữ nguyên dấu đánh dấu `#card` và trình bao bọc cloze dưới dạng văn bản thuần.
- **Giữ theo dõi thời gian** giữ nguyên các mục `LOGBOOK` và `CLOCK` dưới dạng văn bản thuần.

## Mẫu

Sử dụng [[Mẫu trình nhập|Mẫu trình nhập]] để cấu hình đầy đủ cách dữ liệu Logseq của bạn được nhập.

![[Mẫu trình nhập#Biến]]

## Khắc phục sự cố

Nếu Trình nhập không tìm thấy ghi chú nào, hãy đảm bảo bạn đã chọn thư mục gốc của đồ thị và các thư mục trang hoặc nhật ký đã cấu hình chứa tệp Markdown.

Nếu tệp đính kèm được báo là thiếu, hãy xác nhận rằng tệp được tham chiếu vẫn tồn tại trong thư mục `assets` của đồ thị.

Đối với các vấn đề khác, hãy tìm kiếm trên [trình theo dõi lỗi của Trình nhập](https://github.com/obsidianmd/obsidian-importer/issues) hoặc gửi báo cáo lỗi kèm theo một đồ thị ví dụ nhỏ.
