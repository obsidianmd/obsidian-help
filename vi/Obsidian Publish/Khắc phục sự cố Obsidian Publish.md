---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Trang này trình bày chi tiết một số vấn đề thường gặp mà bạn có thể gặp phải khi sử dụng Obsidian Publish.
---
Trang này liệt kê các sự cố thường gặp bạn có thể gặp phải với [[Giới thiệu về Obsidian Publish|Obsidian Publish]] và cách khắc phục chúng.

Hãy đảm bảo xem qua [[Tệp phương tiện]] và [[Giới hạn của Publish|Giới hạn của Publish]] trước.

## Chung

### Xuất bản ghi chú

**Tôi nhận được lỗi hash khi cố gắng xuất bản một ghi chú.**

Bạn có đang sử dụng [[Phần mở rộng từ cộng đồng|plugin cộng đồng]] nào chỉnh sửa thời gian sửa đổi của tệp khi cập nhật không? Nếu có, plugin này có thể xung đột với Publish. Vui lòng gửi báo cáo lỗi cho nhà phát triển plugin để giải quyết vấn đề.

**Tôi nhận được một lỗi mạng kỳ lạ, và trang Publish của tôi rất lớn.**

Rất có thể chúng tôi cần kiểm tra cơ sở dữ liệu của bạn. Vui lòng [[Trợ giúp và hỗ trợ#Liên hệ hỗ trợ Obsidian|liên hệ hỗ trợ Obsidian]] để được trợ giúp.

## CSS và chủ đề

**CSS trong [[Thư mục cấu hình]] của tôi không hoạt động trên Publish. Tại sao?**

Publish không đọc từ thư mục cấu hình. Thay vào đó, bạn cần tạo một tệp `publish.css` trong thư mục gốc của kho xuất bản. Bạn có thể tìm hiểu thêm về điều này trong [[Tùy chỉnh trang web của bạn]].

**CSS của tôi trông không giống trên Publish như trong ứng dụng. Tại sao?**

CSS của Obsidian Publish không hoàn toàn giống như trong ứng dụng. Chúng tôi khuyến nghị [phát triển bất kỳ CSS và chủ đề nào](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) dành riêng cho Publish từ đầu.

Nói _chung_, những gì hoạt động cho [[Các chế độ xem và chế độ chỉnh sửa#Chế độ đọc|chế độ đọc]] có khả năng cao sẽ hoạt động trên Publish.
