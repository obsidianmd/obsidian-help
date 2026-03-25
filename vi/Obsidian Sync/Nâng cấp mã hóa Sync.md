---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Move your Sync vault to a different region, perform and encryption upgrade.'
---
Theo mặc định, Obsidian Sync sử dụng [[Obsidian Sync/Bảo mật và quyền riêng tư#Mã hóa|mã hóa đầu cuối]] cho tất cả dữ liệu của bạn. Điều này đảm bảo rằng không ai — kể cả đội ngũ Obsidian — có thể truy cập ghi chú của bạn.

Obsidian thỉnh thoảng nâng cấp mã hóa Sync để duy trì các tiêu chuẩn [[Obsidian Sync/Bảo mật và quyền riêng tư|bảo mật]] cao nhất. Nếu có bản nâng cấp mã hóa khả dụng, bạn sẽ thấy tùy chọn có tiêu đề **Nâng cấp mã hóa kho** trong **Cài đặt Obsidian → Sync**. Quá trình này cũng cho phép bạn thay đổi [[Khu vực Sync|khu vực Sync]] của mình.

## Các phiên bản mã hóa

Tất cả các kho mới tự động sử dụng mã hóa mới nhất. Các kho hiện có có thể được nâng cấp bằng trợ lý di chuyển. Lưu ý rằng tất cả thiết bị phải sử dụng phiên bản ứng dụng Obsidian hỗ trợ phiên bản mã hóa Sync mà bạn đang di chuyển đến.

| Ngày phát hành                                                          | Phiên bản Sync | Phiên bản ứng dụng tối thiểu |
| ----------------------------------------------------------------------- | -------------- | ----------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3              | 1.8.3                         |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0              | 0.9.21                        |

## Nâng cấp mã hóa với trợ lý di chuyển

Trước khi tiếp tục, hãy tạo một bản [[Sao lưu tệp Obsidian của bạn|sao lưu]] kho của bạn để tránh mất dữ liệu tiềm ẩn. Quá trình này sẽ xóa vĩnh viễn tất cả dữ liệu trong kho từ xa của bạn với mã hóa cũ, bao gồm cả lịch sử phiên bản.

> [!danger] Di chuyển mang tính phá hủy
> 
> **Luôn [[Sao lưu tệp Obsidian của bạn|sao lưu]] kho của bạn trước khi tiến hành di chuyển.**
> 
> Khi bạn di chuyển một kho từ xa, dữ liệu của bạn sẽ bị thay thế. Điều này có nghĩa là:
> 
> 1. Dữ liệu từ xa sẽ bị xóa khỏi máy chủ Obsidian, và dữ liệu kho sẽ được tải lên lại thay thế.
> 2. Tất cả [[Lịch sử phiên bản|lịch sử phiên bản]] của kho sẽ bị mất.

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, chọn **Sync**.
3. Nhấp **Nâng cấp kho**. Tùy chọn này chỉ hiển thị khi có bản nâng cấp khả dụng cho kho từ xa của bạn.
4. Kiểm tra lại các bản sao lưu của bạn và nhấp **Tiếp tục**.
5. Trong **Tên hòm lưu trữ**, nhập tên của kho từ xa.
6. Trong **Khu vực**, chọn [[Thiết lập Obsidian Sync#Máy chủ đồng bộ theo khu vực|khu vực]] máy chủ cho kho từ xa của bạn.
7. Trong **Mật khẩu mã hóa**, chọn mật khẩu cho kho của bạn. Điều này tạo ra một kho được mã hóa đầu cuối. Mật khẩu kho tách biệt với tài khoản Obsidian của bạn và có thể khác nhau cho mỗi kho. Để biết thêm thông tin, tham khảo [[Bảo mật và quyền riêng tư]].
8. Sau khi bạn tải lên lại dữ liệu với mã hóa mới, hãy kết nối lại với kho Sync mới trên các thiết bị khác của bạn.
