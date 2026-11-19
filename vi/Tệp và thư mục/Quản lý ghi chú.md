---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Bạn có thể quản lý tệp và thư mục bằng nhiều cách, sử dụng [[Phím tắt]], [[Khay lệnh|lệnh]], hoặc [[Trình quản lý tệp]].

## Tạo ghi chú mới

Để tạo một tệp mới:

1. Nhấn `Ctrl+N` (hoặc `Cmd+N` trên macOS).
2. Nhập tên ghi chú rồi nhấn `Enter` để bắt đầu chỉnh sửa ghi chú.

Bạn cũng có thể tạo ghi chú bằng [[Trình quản lý tệp#Tạo ghi chú mới|Trình quản lý tệp]], hoặc bằng cách chọn **Tạo ghi chú mới** từ [[Khay lệnh]].

> [!hint] Giới hạn ký tự của hệ thống
> Obsidian sẽ tuân thủ các giới hạn tên tệp của hệ điều hành mà bạn tạo ghi chú. Nếu bạn dự định [[Đồng bộ hóa ghi chú giữa các thiết bị|đồng bộ ghi chú giữa các thiết bị]], hãy đảm bảo tên tệp của bạn [an toàn cho các hệ điều hành khác](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Mở tệp bên ngoài kho của bạn

Trên máy tính, bạn có thể mở và chỉnh sửa các tệp Markdown riêng lẻ bên ngoài kho của bạn. Các tệp mở trong cửa sổ hiện tại và giữ nguyên vị trí ban đầu.

> [!note] Yêu cầu Obsidian 1.14 và trình cài đặt mới nhất
> [[Cập nhật Obsidian#Cập nhật trình cài đặt|Cập nhật trình cài đặt của bạn]] bằng cách tải Obsidian từ [obsidian.md/download](https://obsidian.md/download) và cài đặt lại ứng dụng.

Để mở tệp Markdown:

1. Mở [[Khay lệnh]].
2. Chọn **Mở tệp từ bên ngoài kho...**.
3. Chọn một tệp Markdown trên máy tính của bạn.

Bạn cũng có thể sử dụng menu **Mở bằng** của hệ điều hành và chọn **Obsidian**. Để mở tệp Markdown trong Obsidian theo mặc định, hãy đặt nó làm ứng dụng mặc định cho tệp `.md`.

Các hình ảnh nhúng và liên kết đến các tệp cục bộ khác được giải quyết tương đối so với thư mục của tệp Markdown. Sử dụng [[Dàn ý]] để điều hướng các tiêu đề và [[Liên kết đi ra]] để duyệt các tệp được liên kết.

### Xem trước tệp với Quick Look

Trên macOS, chọn một tệp Markdown trong Finder và nhấn `Space` để xem trước bằng **Quick Look**. Xem trước Quick Look hoạt động ngay cả khi Obsidian đã đóng.

## Đổi tên ghi chú

Để đổi tên ghi chú đang hoạt động:

1. Chọn tên ghi chú ở đầu trình chỉnh sửa (hoặc nhấn `F2`).
2. Nhập tên mới rồi nhấn `Enter`.

Khi bạn đổi tên một tệp, Obsidian tự động cập nhật tất cả các liên kết đến tệp đó.

Bạn có thể đổi tên ghi chú hoặc thư mục mà không cần mở nó, bằng cách sử dụng [[Trình quản lý tệp#Đổi tên tệp hoặc thư mục|Trình quản lý tệp]]

## Xóa ghi chú

Để xóa ghi chú, chọn **Tùy chọn khác → Xóa tệp** ở góc trên bên phải của ghi chú đang hoạt động.

Hoặc, chọn **Xóa tệp hiện tại** từ [[Khay lệnh]].

Bạn cũng có thể xóa ghi chú hoặc thư mục bằng [[Trình quản lý tệp#Xóa tệp hoặc thư mục|Trình quản lý tệp]].

> [!note] Điều gì xảy ra với tệp sau khi tôi xóa chúng?
> Để thay đổi điều xảy ra với các tệp đã xóa, chọn một trong các tùy chọn sau trong **[[Cài đặt]] → Tệp & Liên kết**:
>
> - **Thùng rác hệ thống**: Theo mặc định, các tệp đã xóa sẽ được chuyển vào thùng rác hệ thống của hệ điều hành. Để khôi phục tệp, hãy sử dụng trình quản lý tệp ưa thích của bạn.
> - **Thùng rác Obsidian**: Bạn có thể gửi các tệp đã xóa vào thư mục `.trash` trong kho của bạn.
> - **Xóa vĩnh viễn**: Các tệp sẽ bị xóa ngay lập tức mà không có cách nào khôi phục.
