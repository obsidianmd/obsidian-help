---
permalink: publish/security
---
Bạn có thể chọn các ghi chú muốn xuất bản lên [[Giới thiệu về Obsidian Publish|Obsidian Publish]]. Các ghi chú còn lại vẫn được bảo mật trong kho của bạn.

Chỉ những ghi chú bạn chọn xuất bản mới được gửi đến máy chủ của Obsidian, và bất kỳ ghi chú nào bạn hủy xuất bản đều sẽ bị xóa.

## Bảo vệ bằng mật khẩu

Để cải thiện kiểm soát truy cập trên trang xuất bản của bạn, hãy áp dụng mật khẩu trang web. Khách truy cập sẽ được yêu cầu nhập mật khẩu khi cố gắng truy cập trang. Nếu bạn quyết định xóa mật khẩu trang web sau này, toàn bộ trang sẽ trở nên hiển thị công khai trở lại.

> [!warning] Hiện tại chưa hỗ trợ bảo vệ bằng mật khẩu riêng cho từng ghi chú đã xuất bản.

### Thêm mật khẩu trang web

1. Trên thanh công cụ, ở bên trái cửa sổ ứng dụng, nhấp **Xuất bản thay đổi** ![[lucide-send.svg#icon]].
2. Trong hộp thoại **Xuất bản thay đổi**, nhấp **Thay đổi cài đặt trang web** ![[lucide-cog.svg#icon]].
3. Trong mục **Các cài đặt khác của trang web**, bên cạnh **Mật khẩu trang web**, nhấp **Quản lý**.
4. Nhấp **Mật khẩu mới**.
5. Trong **Mật khẩu**, nhập mật khẩu cho trang web của bạn.
6. (Tùy chọn) Trong **Biệt danh**, nhập biệt danh cho mật khẩu, ví dụ, người bạn muốn cấp quyền truy cập trang web.
7. Nhấp **Thêm mật khẩu này**.

### Xóa mật khẩu trang web

1. Trên thanh công cụ, ở bên trái cửa sổ ứng dụng, nhấp **Xuất bản thay đổi** ![[lucide-send.svg#icon]].
2. Trong hộp thoại **Xuất bản thay đổi**, nhấp **Thay đổi cài đặt trang web** ![[lucide-cog.svg#icon]].
3. Trong mục **Các cài đặt khác của trang web**, bên cạnh **Mật khẩu trang web**, nhấp **Quản lý**.
5. Nhấp biểu tượng dấu X bên cạnh mật khẩu bạn muốn xóa.

## Thu thập dữ liệu
### Dữ liệu khách truy cập

Theo mặc định, Obsidian Publish **không** thu thập dữ liệu khách truy cập, lưu trữ cookie, hoặc xử lý thông tin cá nhân. Tuy nhiên, bạn có thể triển khai phân tích hoặc ghi nhật ký dữ liệu người dùng khác bằng cách [[Tùy chỉnh trang web của bạn|tùy chỉnh trang web của bạn]].

Với tư cách là chủ sở hữu trang web, bạn có trách nhiệm tuân thủ GDPR và các quy định về quyền riêng tư trong khu vực của bạn. Điều này bao gồm việc tạo banner thông báo riêng, có thể được triển khai bằng publish.js, và thêm trang chính sách quyền riêng tư vào trang web của bạn.

## Truy cập

Obsidian ký hợp đồng với [Cloudflare](https://www.cloudflare.com) để cung cấp dịch vụ lưu trữ cho các trang Publish. Các máy chủ được đặt tại San Francisco, CA.

### Quản lý truy cập Obsidian Publish trên mạng của bạn

Để điều chỉnh quyền truy cập Obsidian Publish trên mạng của bạn, bạn cần quản lý các tên miền sau:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Ngoài ra, các dịch vụ backend sử dụng các tên miền phụ sau: `publish-xx.obsidian.md`, trong đó `xx` là một số nằm trong khoảng từ `1 - 100`.

> [!tip] Nếu hệ thống tường lửa của bạn hỗ trợ, chúng tôi khuyến nghị thêm `publish-*.obsidian.md` vào danh sách cho phép để phù hợp với việc mở rộng liên tục các tên miền phụ của chúng tôi.
