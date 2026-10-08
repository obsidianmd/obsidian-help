---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
Obsidian cho phép bạn dễ dàng di chuyển các mục nhật ký từ Apple Journal bằng [[Trình nhập|plugin Trình nhập]]. Điều này sẽ chuyển đổi nhật ký của bạn sang các tệp Markdown bền vững mà bạn có thể sử dụng với Obsidian và nhiều ứng dụng khác.

## Xuất dữ liệu từ Apple Journal

### Trên iPhone
Làm theo hướng dẫn [In và xuất các mục trong Journal trên iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Mở ứng dụng Journal trên iPhone của bạn.
2. Chọn một nhật ký hoặc nhấn Tất cả.
3. Nhấn nút Thêm ở đầu màn hình.
4. Nhấn Xuất, sau đó chọn Xuất.
5. Chọn một vị trí, sau đó nhấn nút Đã chọn.

### Trên Mac (Tahoe)
Làm theo hướng dẫn [In và xuất các mục trong Journal trên Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Mở ứng dụng Journal trên Mac của bạn.
2. Vào File > Xuất, sau đó chọn Xuất.

## Nhập dữ liệu Apple Journal vào Obsidian

Bạn sẽ cần plugin chính thức Obsidian [[Trình nhập]], bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Vào **Phần mở rộng từ cộng đồng** và [cài đặt Trình nhập](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Trình nhập.
4. Mở plugin **Trình nhập** bằng bảng lệnh hoặc biểu tượng trên thanh công cụ.
5. Trong **Định dạng tệp**, chọn **Apple Journal (HTML Export)**.
6. Trong **Tệp cần nhập**, chọn thư mục chứa dữ liệu đã xuất, thường là _AppleJournalEntries_, hoặc các tệp riêng lẻ từ _Entries_.
7. Xem lại và chỉnh sửa các tùy chọn nhập khác.
8. Chọn **Nhập** để xem lại mẫu được tạo và xem trước các ví dụ từ các mục nhật ký của bạn.
9. Chọn **Nhập** lần nữa và đợi cho quá trình nhập hoàn tất.

## Mẫu

Sử dụng [[Mẫu trình nhập|mẫu Trình nhập]] để cấu hình đầy đủ cách dữ liệu Apple Journal của bạn được nhập.

![[Mẫu trình nhập#Variables]]

Khi **Thêm siêu dữ liệu dưới dạng siêu dữ liệu đầu tệp** được bật, siêu dữ liệu Apple Journal sẽ được chuyển đổi thành [[Thuộc tính|thuộc tính]]. Tùy thuộc vào mục nhật ký, chúng có thể bao gồm `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media`, và `workout-route`.

Sử dụng biến `properties` để truy cập siêu dữ liệu này. Ví dụ, sử dụng `{{properties.location}}` cho vị trí hoặc `{{properties["state-of-mind"]}}` cho trạng thái tâm trí.
