---
permalink: import/apple-notes
---
Obsidian cho phép bạn dễ dàng di chuyển ghi chú từ Apple Notes bằng [[Trình nhập|plugin Importer]]. Công cụ này sẽ chuyển đổi dữ liệu Apple Notes của bạn thành các tệp Markdown bền vững, mà bạn có thể sử dụng với Obsidian và nhiều ứng dụng khác.

Hiện tại, Importer chỉ hỗ trợ di chuyển từ Apple Notes trên macOS. Chức năng này chưa khả dụng trên iOS.

## Nhập dữ liệu Apple Notes vào Obsidian

Bạn sẽ cần plugin [[Trình nhập|Importer]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi tới **Phần mở rộng từ cộng đồng** và [cài đặt Importer](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Importer.
4. Mở plugin **Importer** bằng bảng lệnh hoặc biểu tượng trên thanh công cụ.
5. Trong mục **Định dạng tệp** chọn **Apple Notes**.
6. Nhấn **Nhập**.
7. Nhấn **Mở** trên popup xuất hiện với tiêu đề `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Chờ cho đến khi quá trình nhập hoàn tất.
9. Vậy là xong!

## Nội dung được hỗ trợ

Plugin Obsidian Importer hỗ trợ hầu như tất cả các loại nội dung của Apple Notes. Bao gồm bảng, hình ảnh, bản vẽ, bản quét, PDF và liên kết được giới thiệu trong iOS 17.

> [!Warning]
> Các ghi chú được bảo vệ bằng mật khẩu được Apple mã hóa, vì vậy phải được mở khóa trước khi nhập. Bất kỳ ghi chú nào bị khóa sẽ bị bỏ qua.

### Bản quét

Apple lưu trữ bản quét ở nhiều định dạng khác nhau tùy thuộc vào cách chúng được tạo. Để bảo toàn dữ liệu gốc, điều này có nghĩa là chúng sẽ được xuất theo các cách khác nhau.

* Bản quét được tạo hoặc xem trên các phiên bản macOS hoặc iOS cũ hơn sẽ được xuất dưới dạng một chuỗi hình ảnh chưa được cắt.
* Bản quét được tạo hoặc xem trên các phiên bản macOS hoặc iOS mới hơn thường sẽ được xuất dưới dạng hình ảnh đã được cắt.
* Bản quét đã được chỉnh sửa bằng các tính năng giới thiệu trong iOS 17 thường sẽ được xuất dưới dạng PDF.

## Phương pháp xuất thay thế

Apple không cung cấp tùy chọn gốc để xuất ghi chú của bạn. Tuy nhiên, một số công cụ của bên thứ ba tồn tại như [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) của Chintan Ghate. Xin lưu ý rằng hầu hết các công cụ bị giới hạn về loại dữ liệu chúng có thể xuất từ Apple Notes và có thể không cung cấp dữ liệu đầu ra tương thích nhất. Các công cụ này hoạt động tốt nhất nếu Apple Notes của bạn chủ yếu chỉ chứa văn bản, và có ít tệp đính kèm hoặc tính năng đặc biệt như bản vẽ và bản quét.

Tùy thuộc vào công cụ bạn sử dụng, bản xuất có thể ở định dạng Markdown hoặc định dạng HTML. Làm theo hướng dẫn dựa trên định dạng tệp bạn đã xuất:

- [[Nhập tệp HTML]]
- [[Nhập tệp Markdown]]
