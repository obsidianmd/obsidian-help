---
permalink: web-clipper/capture
---
Sau khi cài đặt tiện ích mở rộng trình duyệt [[Giới thiệu về Obsidian Web Clipper|Web Clipper]], bạn có thể truy cập nó theo nhiều cách, tùy thuộc vào trình duyệt của bạn:

1. Biểu tượng Obsidian trên thanh công cụ trình duyệt.
2. Phím tắt, để kích hoạt tiện ích mở rộng từ bàn phím.
3. Menu ngữ cảnh, bằng cách nhấp chuột phải vào trang web bạn đang truy cập.

Để lưu trang vào Obsidian, nhấp nút **Thêm vào Obsidian**.

## Chụp một trang

Khi bạn mở tiện ích mở rộng, Web Clipper trích xuất dữ liệu từ trang web hiện tại theo cài đặt trong [[Obsidian Web Clipper/Mẫu|mẫu]] của bạn. Bạn có thể tạo mẫu riêng và tùy chỉnh đầu ra bằng [[Biến|biến]] và [[Bộ lọc|bộ lọc]].

Theo mặc định, Web Clipper cố gắng trích xuất thông minh chỉ nội dung bài viết chính, loại trừ các phần tử khác trên trang. Tuy nhiên, bạn có thể ghi đè hành vi này theo các cách sau:

- Nếu có mẫu tùy chỉnh, nó sử dụng mẫu của bạn.
- Nếu có vùng chọn, nó sử dụng vùng chọn. Bạn có thể sử dụng `Ctrl/Cmd+A` để chọn toàn bộ trang.
- Nếu có bất kỳ [[Bút tô sáng|phần tô sáng]] nào, nó sử dụng các phần tô sáng.

## Tải xuống hình ảnh

Hình ảnh không được tải xuống tự động khi bạn sử dụng Web Clipper. Thay vào đó, hình ảnh liên kết đến URL trên web. Điều này tiết kiệm dung lượng trong kho của bạn nhưng có nghĩa là hình ảnh sẽ không truy cập được ngoại tuyến, hoặc nếu URL ngừng hoạt động.

Bạn có thể tải xuống hình ảnh cho bất kỳ tệp nào trong Obsidian bằng [[Khay lệnh|lệnh]] có tên **Tải xuống tệp đính kèm cho tệp hiện tại**. Lệnh này cũng có thể được gán phím tắt trong Obsidian.

## Phím tắt

Web Clipper bao gồm các phím tắt bạn có thể sử dụng để tăng tốc quy trình làm việc. Để thay đổi ánh xạ phím, vào **Cài đặt Web Clipper** → **Chung** và làm theo hướng dẫn cho trình duyệt của bạn. Ánh xạ có thể thay đổi cho tất cả trình duyệt ngoại trừ Safari vì Safari không hỗ trợ chỉnh sửa phím tắt.

| Hành động              | macOS         | Windows/Linux  |
| ---------------------- | ------------- | -------------- |
| Mở clipper             | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Lưu nhanh             | `Opt+Shift+O` | `Alt+Shift+O`  |
| Bật/tắt bút tô sáng   | `Opt+Shift+H` | `Alt+Shift+H`  |
| Bật/tắt chế độ đọc    | `Opt+Shift+R` | `Alt+Shift+R`  |

## Chức năng giao diện

Giao diện Web Clipper được chia thành bốn phần:

1. **Tiêu đề** nơi bạn có thể chuyển đổi mẫu, bật [[Bút tô sáng|tô sáng]], [[Đọc|chế độ đọc]], và truy cập cài đặt.
2. **Thuộc tính** hiển thị [[Thuộc tính|siêu dữ liệu]] được trích xuất từ trang sẽ được lưu dưới dạng [[Thuộc tính]] trong Obsidian.
3. **Nội dung ghi chú** sẽ được lưu vào Obsidian.
4. **Chân trang** cho phép bạn chọn kho và thư mục, và thêm vào Obsidian.

Chức năng tiêu đề bao gồm:

- ![[lucide-chevrons-up-down.svg#icon]] Bộ chuyển **Mẫu** để sử dụng các [[Obsidian Web Clipper/Mẫu|mẫu]] đã lưu được thêm trong cài đặt tiện ích mở rộng.
- ![[lucide-more-horizontal.svg#icon]] Nút **Thêm** để hiển thị biến trang bạn có thể sử dụng trong mẫu.
- ![[lucide-highlighter.svg#icon]] Nút **Bút tô sáng** để bật [[Bút tô sáng|tô sáng]].
- ![[lucide-book-icon.svg#icon]] Nút **Đọc** để bật [[Đọc|chế độ đọc]].
- ![[lucide-picture-in-picture-2.svg#icon]] Nút **Nhúng** để chuyển Web Clipper từ cửa sổ bật lên vào trang.
- ![[lucide-settings.svg#icon]] Nút **Cài đặt** để mở cài đặt tiện ích mở rộng.

Chức năng chân trang bao gồm:

- Nút **Thêm vào Obsidian** để lưu dữ liệu vào Obsidian.
- Danh sách thả xuống **Kho** để chuyển đổi giữa các kho đã lưu được thêm trong cài đặt Web Clipper.
- Trường **Thư mục** để xác định thư mục lưu trữ.
- **Thông dịch** để chạy [[Thông dịch|lời nhắc ngôn ngữ tự nhiên]] trên trang.
