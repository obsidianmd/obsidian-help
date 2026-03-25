---
permalink: import/zettelkasten
---
Nếu bạn đã sử dụng phương pháp Zettelkasten để đặt tên và liên kết các ghi chú, bạn có thể cần chuyển đổi các liên kết từ `[[UID]]` sang `[[UID Tiêu đề ghi chú của tôi]]`.

Ví dụ, nếu bạn có một ghi chú với tên `202301011230 Tiêu đề ghi chú của tôi` và liên kết đến nó từ một ghi chú khác chỉ bằng UID, `[[202301011230]]`. Vì Obsidian sử dụng họ và tên đầy đủ của ghi chú để phân giải các liên kết nội bộ, các liên kết như thế này sẽ bị hỏng.

Để cập nhật tất cả các liên kết `[[UID]]` trong kho của bạn sử dụng tên đầy đủ của ghi chú, hãy sử dụng [[Bộ chuyển đổi định dạng Markdown]].

1. Mở **[[Cài đặt]]**.
2. Trong **Plugin cốt lõi**, kích hoạt **Bộ chuyển đổi định dạng Markdown** và đóng cửa sổ Cài đặt.
3. Trên thanh công cụ, ở phía bên trái của cửa sổ ứng dụng, chọn **Mở bộ chuyển đổi định dạng** ![[lucide-binary.svg#icon]].
4. Kích hoạt **Sửa lỗi liên kết Zettelkasten**.
5. Chọn **Bắt đầu Chuyển đổi**. Thao tác này sẽ chuyển đổi tất cả các ghi chú trong toàn bộ kho của bạn.

> [!tip] Sửa lỗi liên kết Zettelkasten
> [[Bộ chuyển đổi định dạng Markdown]] cũng có thể làm đẹp các liên kết của bạn bằng cách loại bỏ UID khỏi tên hiển thị. Ví dụ, `[[UID]]` chuyển đổi thành `[[UID Tiêu đề ghi chú của tôi|Tiêu đề ghi chú của tôi]]`.
>
> Để làm đẹp các liên kết Zettelkasten của bạn, hãy kích hoạt **Sửa lỗi liên kết Zettelkasten** trong cửa sổ bộ chuyển đổi định dạng.

Bạn cũng có thể sử dụng [[Tạo ghi chú duy nhất]] để tạo các ghi chú Zettelkasten trong Obsidian.
