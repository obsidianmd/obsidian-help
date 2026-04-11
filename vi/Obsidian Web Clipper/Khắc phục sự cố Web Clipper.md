---
permalink: web-clipper/troubleshoot
---
Nếu bạn gặp sự cố với [[Giới thiệu về Obsidian Web Clipper|Web Clipper]], bạn có thể nhận trợ giúp qua [kênh Discord chính thức](https://discord.com/channels/686053708261228577/1285652864089198672). Bạn cũng có thể báo lỗi trên [kho GitHub](https://github.com/obsidianmd/obsidian-clipper).

## Chung

### Một số nội dung bị thiếu

Theo mặc định, Web Clipper cố gắng thu thập nội dung từ trang một cách thông minh. Tuy nhiên, nó có thể không thành công trên tất cả các trang web.

Web Clipper sử dụng [Defuddle](https://github.com/kepano/defuddle) để chỉ thu thập nội dung chính của trang. Điều này loại trừ header, footer và các phần tử khác, nhưng đôi khi nó có thể quá thận trọng và loại bỏ nội dung mà bạn muốn giữ lại. Bạn có thể [báo lỗi](https://github.com/kepano/defuddle) cho Defuddle.

Để bỏ qua Defuddle trong Web Clipper, hãy sử dụng các phương pháp sau:

- Chọn văn bản, hoặc sử dụng `Cmd/Ctrl+A` để chọn tất cả văn bản.
- [[Highlighter|Tô sáng nội dung]] để chọn chính xác những gì bạn muốn thu thập.
- Sử dụng [[Obsidian Web Clipper/Mẫu|mẫu tùy chỉnh]] cho trang web.

### Không có nội dung xuất hiện trong Obsidian

Nếu bạn không thấy nội dung nào trong Obsidian khi bạn nhấp **Thêm vào Obsidian**:

- Kiểm tra lỗi trong [[Trợ giúp và hỗ trợ#Ghi lại nhật ký bảng điều khiển|bảng điều khiển nhà phát triển]] của Obsidian.
- Kiểm tra rằng tên kho trong cài đặt Web Clipper khớp chính xác với *tên kho* trong Obsidian chứ *không phải đường dẫn kho*.
- Kiểm tra rằng tên thư mục được định dạng chính xác.

## Linux

#### Obsidian không mở được

- Đảm bảo rằng giao thức [[Obsidian URI]] đã [[Obsidian URI#Đăng ký Obsidian URI|được đăng ký]].
- Nếu bạn đang sử dụng Firefox, bạn có thể cần [đăng ký nó trong cài đặt trình duyệt](https://kb.mozillazine.org/Register_protocol).

#### Obsidian mở nhưng chỉ lưu tên tệp

Có khả năng Obsidian không thể truy cập bảng tạm của bạn. Quyền truy cập bảng tạm là cần thiết để truyền dữ liệu từ trình duyệt sang Obsidian. Cấu hình của bạn có thể ảnh hưởng đến cách các ứng dụng được sandbox hóa và quyền truy cập bảng tạm.

Nếu bạn sử dụng Wayland, hãy đảm bảo rằng Obsidian có quyền đọc bảng tạm khi ứng dụng không được lấy nét. Tùy chọn này có thể nằm trong trình quản lý cửa sổ xếp lớp của bạn, ví dụ Hyprland hoặc Sway.

Nếu bạn sử dụng Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Nếu bạn sử dụng Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Nếu bạn sử dụng Flatpak, hãy thử [phiên bản Obsidian được hỗ trợ chính thức](https://obsidian.md/download).
- Nếu bạn sử dụng KDE, vào **System Settings** → **Window Management** → **Window Rules** và cho phép Obsidian lấy quyền lấy nét, [[web-clipper-kde.png|xem ảnh chụp màn hình]].
- Như phương án dự phòng, hãy thử chuyển sang **Chế độ cũ** trong **Cài đặt Web Clipper** → **Chung**. Điều này sẽ bỏ qua bảng tạm và lưu nội dung trực tiếp qua URI. Lưu ý rằng điều này sẽ giới hạn số ký tự có thể cắt được tùy thuộc vào trình duyệt và bản phân phối Linux của bạn.

## iOS và iPadOS

Để bật tiện ích mở rộng Web Clipper cho Safari:

1. Mở Safari, nhấn vào nút ngoài cùng bên trái trong thanh URL của trình duyệt, nó trông giống hình chữ nhật với các đường bên dưới.
2. Nhấn **Manage Extensions**.
3. Bật **Obsidian Web Clipper** trong danh sách Extensions.
4. Thoát menu.
5. Để sử dụng tiện ích mở rộng, **nhấn vào biểu tượng mảnh ghép** trong thanh URL.

Để cho phép Web Clipper chạy trên tất cả các trang web:

1. Vào **[[Cài đặt]]** iOS → **Apps** → **Safari** → **Extensions**.
2. Trong phần **Permissions**, cho phép nó chạy trên tất cả các trang web.

Để cho phép Obsidian luôn nhận nội dung từ Web Clipper:

1. Vào **[[Cài đặt]]** iOS → **Apps** → **Obsidian**.
2. Đặt **Paste from other apps** thành **Allow**.
