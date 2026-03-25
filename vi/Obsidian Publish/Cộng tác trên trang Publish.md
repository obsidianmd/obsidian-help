---
permalink: publish/collaborate
publish: true
mobile: true
description: Tìm hiểu cách cộng tác với những người dùng Obsidian khác trên trang Obsidian Publish của bạn.
---
Tìm hiểu cách cộng tác trên trang [[Giới thiệu về Obsidian Publish|Obsidian Publish]] của bạn với những người dùng Obsidian khác. Bằng cách thêm bạn bè và đồng nghiệp làm cộng tác viên, họ có thể xuất bản các thay đổi lên trang web của bạn.

Chỉ chủ sở hữu trang web cần có đăng ký hoạt động cho Obsidian Publish. Cộng tác viên chỉ cần một [tài khoản Obsidian](https://obsidian.md/account).

> [!warning] Trước khi xuất bản các thay đổi lên trang web được chia sẻ, hãy đảm bảo [[#Đồng bộ hóa thay đổi giữa các cộng tác viên|đồng bộ hóa thay đổi giữa các cộng tác viên]]. Nếu không, bạn có nguy cơ ghi đè các thay đổi từ các cộng tác viên khác.

## Thêm cộng tác viên vào trang web

1. Trong [[Thanh công cụ]], chọn **Xuất bản các thay đổi...** ![[lucide-send.svg#icon]] hoặc mở [[Khay lệnh]] và nhập **Publish: Publish changes...**
2. Trong hộp thoại **Xuất bản các thay đổi...**, nhấp **Thay đổi cài đặt trang web** ![[lucide-cog.svg#icon]].
3. Bên cạnh **Hợp tác trang web**, chọn **Quản lý**.
4. Trong **Mời người dùng**, nhập email của cộng tác viên.
5. Chọn **Thêm**.

## Xóa cộng tác viên khỏi trang web

1. Trong [[Thanh công cụ]], chọn **Xuất bản các thay đổi...** ![[lucide-send.svg#icon]] hoặc mở [[Khay lệnh]] và nhập **Publish: Publish changes...**
2. Trong hộp thoại **Xuất bản các thay đổi...**, nhấp **Thay đổi cài đặt trang web** ![[lucide-cog.svg#icon]].
3. Bên cạnh **Hợp tác trang web**, chọn **Quản lý**.
4. Bên cạnh cộng tác viên bạn muốn xóa, chọn **Xóa người dùng** ![[lucide-x.svg#icon]].

## Đồng bộ hóa thay đổi giữa các cộng tác viên

Obsidian Publish không tự động đồng bộ hóa các thay đổi đã xuất bản giữa các kho lưu trữ cục bộ. Thay vào đó, các cộng tác viên cần đồng bộ hóa thủ công các thay đổi từ các cộng tác viên khác.

Để cập nhật ghi chú cục bộ với các thay đổi từ trang web trực tiếp:

1. Trong [[Thanh công cụ]], chọn **Xuất bản các thay đổi...** ![[lucide-send.svg#icon]] hoặc mở [[Khay lệnh]] và nhập **Publish: Publish changes...**
2. Nhấp chuột phải hoặc nhấn giữ vào thay đổi bạn muốn đồng bộ hóa, sau đó chọn **Sử dụng phiên bản trực tiếp**. **Điều này sẽ ghi đè ghi chú trong kho lưu trữ cục bộ của bạn.**

> [!tip] Chúng tôi khuyến nghị bạn sử dụng một công cụ khác để đồng bộ hóa các thay đổi giữa các kho, chẳng hạn như [[Giới thiệu về Obsidian Sync|Obsidian Sync]] hoặc [git](https://git-scm.com/).

## Quyền hạn

Bảng sau liệt kê các quyền hạn trang web có sẵn cho chủ sở hữu và cộng tác viên:

| Hành động                                      | Cộng tác viên | Chủ sở hữu |
|------------------------------------------------|:-------------:|:-----------:|
| Xuất bản trang mới                              | ✓             | ✓           |
| Xuất bản thay đổi cho các trang đã xuất bản     | ✓             | ✓           |
| Hủy xuất bản trang                              | ✓             | ✓           |
| Cấu hình cài đặt trang web                      |               | ✓           |
| Quản lý quyền hạn                               |               | ✓           |
