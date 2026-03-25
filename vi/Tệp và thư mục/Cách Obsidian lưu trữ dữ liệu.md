---
permalink: data-storage
publish: true
mobile: true
description: This page explains how Obsidian stores its data on your device.
---
Obsidian lưu trữ ghi chú của bạn dưới dạng tệp văn bản thuần được [[Cú pháp định dạng cơ bản|định dạng Markdown]] trong một _kho_. Kho là một thư mục trên hệ thống tệp cục bộ của bạn, bao gồm cả các thư mục con.

Vì ghi chú là các tệp văn bản thuần, bạn có thể sử dụng các trình chỉnh sửa văn bản và trình quản lý tệp khác để chỉnh sửa và quản lý ghi chú. Obsidian tự động làm mới kho của bạn để cập nhật mọi thay đổi bên ngoài.

Bạn có thể tạo kho ở bất kỳ đâu mà hệ điều hành cho phép. Obsidian đồng bộ với [[Giới thiệu về Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git và nhiều dịch vụ bên thứ ba khác.

Bạn có thể mở nhiều thư mục dưới dạng các kho riêng biệt, ví dụ để phân tách ghi chú cho công việc và học tập.

> [!warning] Kho lồng trong kho
> Vì [[Liên kết nội bộ]] là cục bộ trong một kho, chúng tôi khuyên bạn không nên tạo kho lồng trong kho. Các liên kết có thể không được cập nhật chính xác.

## Cài đặt kho

Obsidian tạo một [[Thư mục cấu hình|thư mục cấu hình]] `.obsidian` trong thư mục gốc của kho, chứa các tùy chọn cụ thể cho kho đó, chẳng hạn như [[Phím tắt|phím tắt]], [[Chủ đề|chủ đề]] và [[Phần mở rộng từ cộng đồng|plugin cộng đồng]].

Theo mặc định, hầu hết các hệ điều hành ẩn các thư mục bắt đầu bằng dấu chấm (`.`), vì vậy bạn có thể cần cập nhật cài đặt cho trình quản lý tệp của mình để nhìn thấy nó.

- **macOS**: Trong Finder, nhấn `Cmd+Shift+.` (dấu chấm) để hiển thị các tệp ẩn.
- **Windows**: [Hiển thị tệp ẩn](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Trong hầu hết các trình khám phá tệp, nhấn `Ctrl + h` để hiển thị các tệp ẩn.

> [!tip] Thêm `.obsidian` vào Git
> Các tệp `.obsidian/workspace.json` và `.obsidian/workspaces.json` lưu trữ bố cục không gian làm việc hiện tại và được cập nhật mỗi khi bạn mở một tệp mới. Nếu bạn sử dụng [Git](https://git-scm.com) để quản lý kho của mình, bạn có thể muốn thêm các tệp này vào `.gitignore`.

## Cài đặt toàn cục

Obsidian lưu trữ cài đặt toàn cục trong một thư mục hệ thống. Vị trí của thư mục hệ thống phụ thuộc vào hệ điều hành bạn đang sử dụng.

- **macOS**: `/Users/yourusername/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` hoặc `~/.config/obsidian/`

> [!warning] Không tạo kho trong thư mục hệ thống. Điều này có thể dẫn đến dữ liệu bị hỏng hoặc mất dữ liệu.

## IndexedDB

IndexedDB là một cơ sở dữ liệu phía máy khách cấp thấp mà Obsidian sử dụng để lưu trữ backend. Nó giúp duy trì trạng thái các kết nối [[Giới thiệu về Obsidian Sync|Obsidian Sync]] và bảo toàn [[#Bộ nhớ đệm siêu dữ liệu]] khi ứng dụng được đóng.

> [!warning] Nếu [Chế độ Lockdown](<https://support.apple.com/en-us/105120>) của Apple được bật và Obsidian không được loại trừ, các tệp cơ sở dữ liệu này sẽ không được lưu, yêu cầu phải lập chỉ mục lại mỗi khi ứng dụng khởi động.

### Bộ nhớ đệm siêu dữ liệu

Để cung cấp trải nghiệm nhanh khi sử dụng ứng dụng, Obsidian duy trì một bản ghi cục bộ về siêu dữ liệu của các tệp trong kho của bạn gọi là **bộ nhớ đệm siêu dữ liệu**. Siêu dữ liệu này hỗ trợ nhiều tính năng trong ứng dụng, từ chế độ xem đồ thị đến dàn ý.

Obsidian giữ bộ nhớ đệm này đồng bộ với các tệp trong kho của bạn, nhưng có thể xảy ra trường hợp dữ liệu không đồng bộ với các tệp gốc. Trong trường hợp điều này xảy ra với kho của bạn, bạn có thể xây dựng lại bộ nhớ đệm siêu dữ liệu từ cài đặt ứng dụng trong phần *Tệp & Liên kết*.
