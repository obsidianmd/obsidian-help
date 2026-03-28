---
permalink: plugins/web-viewer
---
Trình xem web là một [[Plugin cốt lõi|plugin cốt lõi]] cho phép bạn mở liên kết bên ngoài ngay trong Obsidian trên máy tính. Điều này cho phép bạn đọc nội dung liên kết mà không cần rời khỏi ứng dụng và giúp việc đa nhiệm trong các dự án nghiên cứu trên web trở nên dễ dàng hơn.

Các liên kết bên ngoài mở dưới dạng [[Thẻ|thẻ]] mà bạn có thể sắp xếp lại, chia nhỏ và mở trong [[Cửa sổ bật ra|cửa sổ bật ra]]. Bất kỳ thẻ trang web nào được nhúng trong tệp [[Canvas]] đều có thể được mở dưới dạng thẻ trình xem web.

Trình xem web không phải là sự thay thế cho trình duyệt chính của bạn. Trình xem web cung cấp cách nhanh chóng để truy cập các trang web phục vụ nghiên cứu trong Obsidian. Tuy nhiên, nó không cung cấp đầy đủ chức năng, kiểm soát bảo mật hoặc khả năng mở rộng của một trình duyệt chuyên dụng.

## Chế độ đọc

Nhấp vào biểu tượng kính để xem phiên bản văn bản thuần của trang web. Tính năng này hoạt động bằng cách làm sạch nội dung sử dụng thư viện Readability của Mozilla được phát triển cho Firefox.

## Lưu vào kho

Nhấp vào biểu tượng thêm hành động để lưu trang web vào kho của bạn. Bạn có thể tùy chỉnh vị trí lưu trang bằng cách vào **[[Cài đặt]]** → **Trình xem web**.

## Chặn quảng cáo

Trình xem web chặn quảng cáo theo mặc định. Bạn có thể tùy chỉnh quy tắc chặn quảng cáo bằng cách thêm các danh sách như [Easylist](https://easylist.to/).

## Bảo mật

Nếu bạn sử dụng plugin Obsidian của bên thứ ba, chúng tôi khuyến nghị sử dụng trình duyệt chính của bạn cho các tác vụ nhạy cảm và các trang web được bảo vệ bằng mật khẩu thay vì Trình xem web.

Trình xem web dựa trên cùng tính năng [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) cho phép bạn nhúng trang web trong [[Canvas]]. Trình xem web đã được [kiểm toán độc lập](https://obsidian.md/blog/cure53-second-client-audit/) để xác minh rằng nó đã được triển khai an toàn.

Các plugin Obsidian [[Bảo mật plugin#Khả năng của plugin|không được sandbox hóa]] và có quyền kiểm soát sâu đối với ứng dụng. Thiết kế này cho phép chức năng mạnh mẽ nhưng cũng đi kèm với sự đánh đổi về bảo mật. Khi Obsidian đang chạy, các plugin của bên thứ ba có toàn quyền truy cập vào cookie trong Trình xem web.
