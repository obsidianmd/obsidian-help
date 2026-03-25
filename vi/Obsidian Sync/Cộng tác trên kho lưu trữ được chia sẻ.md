---
permalink: sync/collaborate
publish: true
mobile: true
description: Trang này trình bày chi tiết cách bạn có thể cộng tác với những người dùng Obsidian Sync khác.
---
Với [[Giới thiệu về Obsidian Sync|Obsidian Sync]], bạn có thể cộng tác trên một kho được chia sẻ với nhóm của mình.

Tất cả cộng tác viên phải có đăng ký Sync đang hoạt động để truy cập kho được chia sẻ. Tham gia một kho được chia sẻ không tính vào [[Câu hỏi thường gặp#Tôi có thể có bao nhiêu kho từ xa?|giới hạn kho]].

Nếu kho từ xa được [[Obsidian Sync/Bảo mật và quyền riêng tư|mã hóa đầu cuối]], cộng tác viên phải nhập mật khẩu mã hóa khi thiết lập kho.

## Quản lý người dùng

### Thêm người dùng

Để mời một người dùng chia sẻ kho từ xa:

1. Mở **[[Cài đặt]]**.
2. Trong menu bên, chọn **Sync**.
3. Bên cạnh **Kho từ xa**, chọn **Quản lý**.
4. Bên cạnh kho từ xa bạn muốn chia sẻ, chọn **Quản lý chia sẻ** ![[lucide-users.svg#icon]].
5. Trong **Mời người dùng**, nhập email của người dùng bạn muốn mời.
6. Chọn **Thêm**.

### Xóa người dùng

1. Mở **[[Cài đặt]]**.
2. Trong menu bên, chọn **Sync**.
3. Bên cạnh **Kho từ xa**, chọn **Quản lý**.
4. Bên cạnh người dùng bạn muốn xóa quyền truy cập, chọn **Xóa người dùng** ![[lucide-x.svg#icon]].

## Cộng tác với nhóm của bạn

### Quyền hạn

Quyền hạn chi tiết chưa được hỗ trợ. Tất cả cộng tác viên nhận được cùng quyền hạn như chủ kho, với một ngoại lệ: chỉ chủ kho mới có thể mời cộng tác viên.

### Chỉnh sửa trực tiếp

Kho được chia sẻ cho phép các nhóm cùng làm việc trên một tập hợp tệp, tuy nhiên Obsidian chưa hỗ trợ chỉnh sửa trực tiếp cộng tác trên cùng một tệp. Bạn sẽ không thấy con trỏ của người dùng khác, và các chỉnh sửa của họ chỉ xuất hiện khi các thay đổi được đồng bộ.

Nếu nhiều người dùng đang chỉnh sửa cùng một tệp cùng lúc, [[Khắc phục sự cố Obsidian Sync#Giải quyết xung đột|các thay đổi sẽ được hợp nhất]] trong quá trình đồng bộ hóa. Các thay đổi có thể được xem và khôi phục bằng [[Lịch sử phiên bản]].

![[version-history-collaboration.png]]^version-history-image

## Giới hạn

Lưu ý rằng Obsidian Sync có [[Câu hỏi thường gặp|Giới hạn]] có thể ảnh hưởng đến nhóm của bạn:

- Số lượng cộng tác viên tối đa trên một kho được chia sẻ là 20 người dùng.
- Kích thước tệp tối đa cho tệp đính kèm phụ thuộc vào [[Gói và giới hạn lưu trữ|gói]] của máy chủ kho từ xa, với 5 MB cho Gói Tiêu chuẩn và 200 MB cho Gói Plus.

Tìm hiểu thêm về [[Đồng bộ hóa cho nhóm]].
