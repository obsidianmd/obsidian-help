---
permalink: publish/limitations
---
> [!tip] Các thành viên trong cộng đồng tuyệt vời của chúng tôi đã nghĩ ra các giải pháp thay thế cho một số hạn chế này. Để biết thêm thông tin, vui lòng truy cập chủ đề [Tài nguyên Publish](https://forum.obsidian.md/t/obsidian-publish-resources/74582) trên diễn đàn Obsidian.

## Phần mở rộng từ cộng đồng

Obsidian Publish hỗ trợ tối thiểu cho [[Phần mở rộng từ cộng đồng]].

Các plugin xuất ra Markdown thô, chẳng hạn như plugin Waypoint, tương thích với Publish vì chúng không yêu cầu ứng dụng để hiển thị dữ liệu.

Trong khi đó, các plugin yêu cầu một khối mã plugin để hiển thị, chẳng hạn như Dataview hoặc Fantasy Statblocks, sẽ không hoạt động theo mặc định trên Publish.

## Đồ thị

Publish cung cấp khả năng tùy chỉnh màu sắc cơ bản cho chế độ xem đồ thị bằng CSS. Bạn có thể thay đổi màu nút trong tệp `publish.css` bằng cách sử dụng [Biến CSS Chế độ xem đồ thị](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Lưu ý rằng đồ thị đã xuất bản không hỗ trợ các tùy chọn sắp xếp và xem toàn diện có sẵn trong [[Xem biểu đồ]] của ứng dụng.

## Tệp phương tiện

Obsidian Publish không được tối ưu hóa cho việc phát trực tuyến video hoặc các tệp âm thanh lớn. Chúng tôi bao gồm một số phương pháp tốt nhất để xử lý [[Tệp phương tiện|tệp phương tiện]] của bạn trong các tài liệu này.

Để cải thiện trải nghiệm cho khách truy cập, chúng tôi khuyên bạn nên sử dụng dịch vụ lưu trữ video, chẳng hạn như YouTube hoặc Vimeo.

Bạn có thể tải lên các tệp có kích thước **tối đa 50mb** lên trang Publish của bạn. ^publish-media-limit

## PDF

Trên thiết bị di động, máy tính bảng và máy tính có màn hình nhỏ, bạn có thể gặp sự cố khi PDF được nhúng không tải được hoặc chỉ hiển thị trang đầu tiên. Điều này là do hạn chế của trình hiển thị PDF trên thiết bị di động.

Đối với nội dung nhắm đến người dùng di động, chúng tôi khuyên bạn nên cung cấp liên kết đến PDF được lưu trữ bên ngoài hoặc bao gồm các liên kết nội bộ cho phép người dùng tải PDF trực tiếp về thiết bị của họ.

## Tìm kiếm

Publish hỗ trợ cơ bản cho việc tìm kiếm văn bản thuần trong nội dung đã xuất bản. Ưu tiên cho kết quả tìm kiếm được dành cho:

- Tên tệp
- Bí danh
- Tên tiêu đề

Sau khi tìm kiếm các mục trên để tìm kết quả khớp, tìm kiếm sẽ bao gồm văn bản thuần của các ghi chú đã xuất bản.

Để cải thiện khả năng tìm kiếm của trang web đã xuất bản, bạn nên sử dụng tên tệp mô tả, kết hợp nhiều bí danh và chọn tên tiêu đề phản ánh chính xác nội dung.

Ngoài ra, Publish hiện không hỗ trợ tính năng [[Tìm kiếm#Nhúng kết quả tìm kiếm vào ghi chú|nhúng kết quả tìm kiếm]] của ứng dụng.
