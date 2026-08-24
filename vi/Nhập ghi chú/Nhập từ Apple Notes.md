---
permalink: import/apple-notes
cssclasses:
  - soft-embed
---
Obsidian cho phép bạn dễ dàng di chuyển ghi chú từ Apple Notes bằng [[Trình nhập|plugin Importer]]. Công cụ này chuyển đổi dữ liệu Apple Notes của bạn thành các tệp Markdown bền vững mà bạn có thể sử dụng với Obsidian và nhiều ứng dụng khác.

Hiện tại, Importer chỉ hỗ trợ di chuyển từ Apple Notes trên macOS. Chức năng này chưa khả dụng trên iOS.

## Nhập dữ liệu Apple Notes vào Obsidian

Bạn sẽ cần plugin [[Trình nhập|Importer]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Đi tới **Phần mở rộng từ cộng đồng** và [cài đặt Importer](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Importer.
4. Mở plugin **Importer** bằng bảng lệnh hoặc biểu tượng trên thanh công cụ.
5. Trong mục **Định dạng tệp** chọn **Apple Notes**.
6. Chọn **Nhập**.
7. Chọn **Mở** trên popup có tiêu đề `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Xem lại mẫu được tạo và xem trước các ví dụ từ ghi chú của bạn.
9. Chọn **Nhập** và chờ cho quá trình nhập hoàn tất.

## Tùy chỉnh ghi chú đã nhập

Trước khi quá trình nhập bắt đầu, Importer hiển thị bản xem trước được tạo từ lựa chọn Apple Notes của bạn. Bạn có thể chỉnh sửa mẫu được tạo, thuộc tính và tên ghi chú, hoặc chọn một mẫu Markdown từ kho của bạn. Xem [[Mẫu Importer]].

## Nội dung được hỗ trợ

Plugin Obsidian Importer hỗ trợ hầu như tất cả các loại nội dung của Apple Notes. Bao gồm bảng, hình ảnh, bản vẽ, bản quét, PDF và liên kết được giới thiệu trong iOS 17.

> [!Warning]
> Các ghi chú được bảo vệ bằng mật khẩu được Apple mã hóa, vì vậy phải được mở khóa trước khi nhập. Bất kỳ ghi chú nào bị khóa sẽ bị bỏ qua.

### Bản quét

Apple lưu trữ bản quét ở nhiều định dạng khác nhau tùy thuộc vào cách chúng được tạo. Để bảo toàn dữ liệu gốc, điều này có nghĩa là chúng sẽ được xuất theo các cách khác nhau.

* Bản quét được tạo hoặc xem trên các phiên bản macOS hoặc iOS cũ hơn sẽ được xuất dưới dạng một chuỗi hình ảnh chưa được cắt.
* Bản quét được tạo hoặc xem trên các phiên bản macOS hoặc iOS mới hơn thường sẽ được xuất dưới dạng hình ảnh đã được cắt.
* Bản quét đã được chỉnh sửa bằng các tính năng giới thiệu trong iOS 17 thường sẽ được xuất dưới dạng PDF.

## Mẫu

Sử dụng [[Mẫu Importer|mẫu Importer]] để cấu hình đầy đủ cách dữ liệu Apple Notes của bạn được nhập.

![[Mẫu Importer#Biến]]

Ngoài ra, Apple Notes cung cấp biến sau.

| Biến           | Mô tả                            |
| -------------- | --------------------------------- |
| `{{isPinned}}` | Ghi chú có được ghim hay không. |
