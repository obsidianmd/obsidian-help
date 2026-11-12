---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian cho phép bạn di chuyển ghi chú từ Samsung Notes bằng [[Trình nhập|plugin Importer]]. Quá trình này chuyển đổi ghi chú của bạn thành các tệp Markdown bền vững mà bạn có thể sử dụng với Obsidian và nhiều ứng dụng khác.

## Xuất ghi chú từ Samsung Notes

Samsung Notes lưu mỗi ghi chú dưới dạng tệp Samsung Notes (`.sdocx`).

1. Mở Samsung Notes trên điện thoại hoặc máy tính bảng của bạn.
2. Chạm và giữ một ghi chú, sau đó chọn tất cả các ghi chú bạn muốn xuất.
3. Nhấn **Lưu dưới dạng tệp**, sau đó chọn **Samsung Notes file**.
4. Chọn một thư mục và nhấn **Lưu**.
5. Di chuyển các tệp `.sdocx` đến thiết bị nơi bạn sử dụng Obsidian, ví dụ bằng cáp USB, Quick Share hoặc ổ đĩa đám mây.

Nếu bạn có nhiều tệp, bạn có thể đặt chúng vào tệp `.zip` và nhập tệp đó thay thế. Samsung Notes không bao gồm thư mục của nó trong các tệp được lưu, nhưng Importer giữ nguyên các thư mục bên trong tệp `.zip`. Để giữ ghi chú được sắp xếp gọn gàng, hãy lưu ghi chú của mỗi thư mục Samsung Notes vào một thư mục cùng tên trước khi bạn nén chúng.

## Nhập dữ liệu Samsung Notes vào Obsidian

Bạn sẽ cần plugin [[Trình nhập|Importer]] chính thức của Obsidian, bạn có thể [cài đặt tại đây](obsidian://show-plugin?id=obsidian-importer).

1. Mở **[[Cài đặt]]**.
2. Vào **Phần mở rộng từ cộng đồng** và [cài đặt Importer](obsidian://show-plugin?id=obsidian-importer).
3. Kích hoạt plugin Importer.
4. Mở plugin **Importer** bằng bảng lệnh hoặc biểu tượng trên thanh công cụ.
5. Trong **Định dạng tệp**, chọn **Samsung Notes (.sdocx)**.
6. Chọn các tệp `.sdocx` của bạn, hoặc tệp `.zip` chứa chúng.
7. Chọn **Import** để xem lại mẫu được tạo và xem trước các ví dụ từ ghi chú của bạn.
8. Chọn **Import** lần nữa và đợi quá trình nhập hoàn tất.

## Hạn chế

- Chữ viết tay và hình vẽ được nhập dưới dạng hình ảnh SVG ở cuối ghi chú. Các nét vẽ giữ nguyên hình dạng và màu sắc, nhưng không giữ được độ rộng thay đổi của bút cảm ứng lực. Các hình khối và đường thẳng được nhập bằng màu đen.
- Hộp văn bản, hình ảnh được đặt trên trang và tệp PDF có chú thích chưa được hỗ trợ nhập.
- Các mục danh sách kiểm tra được nhập ở trạng thái chưa đánh dấu.
- Màu chữ, phông chữ và cỡ chữ không được giữ lại.
- Mở khóa các ghi chú đã khóa trong Samsung Notes trước khi xuất.

## Mẫu

Sử dụng [[Mẫu trình nhập|mẫu Importer]] để cấu hình đầy đủ cách dữ liệu Samsung Notes của bạn được nhập.

![[Mẫu trình nhập#Biến]]
