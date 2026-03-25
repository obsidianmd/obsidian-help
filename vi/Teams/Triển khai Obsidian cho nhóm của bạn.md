---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian chạy như một ứng dụng cục bộ trên thiết bị của từng thành viên trong nhóm. Ứng dụng được thiết kế để hoạt động cả trực tuyến và ngoại tuyến, an toàn và riêng tư, đồng thời mang lại cho bạn toàn quyền kiểm soát dữ liệu của nhóm. Obsidian không khả dụng dưới dạng ứng dụng web, do đó bạn sẽ cần triển khai ứng dụng cho các thành viên trong nhóm.

## Cài đặt và cập nhật Obsidian

Nhóm của bạn có thể tải Obsidian từ [trang Tải xuống](https://obsidian.md/download) của chúng tôi. Các bản phát hành cũng có sẵn trên [trang phát hành GitHub](https://github.com/obsidianmd/obsidian-releases/releases) của chúng tôi, bao gồm liên kết đến [nhật ký thay đổi](https://obsidian.md/changelog/).

> [!tip] Đối với người dùng Windows cần trình cài đặt hệ thống, tệp `.exe` Universal bao gồm tùy chọn cài đặt Obsidian cho tất cả người dùng.

Nếu tự động cập nhật được bật trong ứng dụng, các phiên bản tương lai sẽ được cài đặt tự động khi người dùng khởi động lại Obsidian. Ngoài ra, chúng tôi khuyến nghị định kỳ thực hiện [[Cập nhật Obsidian#Cập nhật trình cài đặt|cập nhật trình cài đặt]] để nhận các bản cập nhật mới nhất cho framework Electron, bao gồm các bản vá bảo mật.

Nếu bạn muốn tìm hiểu cách giới hạn truy cập mạng cho Obsidian trong quá trình này, hãy xem [[Cân nhắc bảo mật cho nhóm#Mạng và truy cập|mạng và truy cập]].

## Tùy chỉnh Obsidian

Obsidian dễ dàng điều chỉnh để phù hợp với nhu cầu của nhóm bạn. Với API mở rộng và hệ sinh thái người dùng lớn, Obsidian cung cấp quyền truy cập vào nhiều plugin, chủ đề và công cụ bổ trợ.

Đối với các câu hỏi liên quan đến bảo mật về những chủ đề này, vui lòng tham khảo [[Cân nhắc bảo mật cho nhóm]].

### Thư mục cấu hình

[[Thư mục cấu hình]] là nơi một [[Thuật ngữ#Kho|kho]] Obsidian lưu trữ các cài đặt ứng dụng. Theo mặc định, thư mục này có tên `.obsidian`, nhưng bạn có thể linh hoạt [[Thư mục cấu hình#Thay đổi thư mục cấu hình|thay đổi thư mục cấu hình]] theo sở thích.

Chúng tôi khuyến nghị tạo một mẫu chuẩn hóa của thư mục cấu hình để triển khai trên các thiết bị của nhóm.

### Plugin

[[Plugin cốt lõi]] là các tính năng tùy chọn được tạo bởi đội ngũ Obsidian. Các tính năng này được tích hợp trong mã nguồn ứng dụng cốt lõi và có thể được bật hoặc tắt.

[[Phần mở rộng từ cộng đồng]] là các tính năng của bên thứ ba được thêm vào ứng dụng Obsidian, và có thể được cài đặt qua thư mục cộng đồng. Các plugin bên thứ ba tận dụng [Obsidian API](https://github.com/obsidianmd/obsidian-api). Plugin nằm trong thư mục `.obsidian/plugins` bên trong kho, và có thể được cài đặt thủ công tại vị trí này.

### Chủ đề và đoạn trích

[[Chủ đề]] thay đổi giao diện trực quan của Obsidian. Giống như plugin, chủ đề có thể được tải xuống từ thư mục cộng đồng của chúng tôi. Chủ đề nằm trong thư mục `.obsidian/themes` bên trong kho.

[[Mẩu CSS|Đoạn trích]] là các tệp `.css` nhỏ thay đổi trực quan các khía cạnh của giao diện Obsidian. Trong một số trường hợp, chúng cũng có thể bổ sung các cải tiến chức năng. Đoạn trích nằm trong thư mục `.obsidian/snippets` bên trong kho.

## Câu hỏi thường gặp

Đối với các câu hỏi về quản lý tài khoản và bảo mật, vui lòng tham khảo [[Cân nhắc bảo mật cho nhóm#Bảo mật tài khoản|bảo mật tài khoản]].

### Triển khai

**Tôi có thể triển khai bản quyền trên nhiều bản cài đặt không?**
Hiện tại, chúng tôi không hỗ trợ triển khai bản quyền qua tập lệnh triển khai, chẳng hạn như trong tệp `.json`. Nếu bạn quan tâm đến tính năng này cho nhóm của mình, vui lòng gửi [yêu cầu tính năng](https://forum.obsidian.md/c/feature-requests/8).

**Obsidian có thể khóa một số tính năng hoặc cấu hình nhất định thông qua cài đặt hoặc cờ ứng dụng không?**
Hiện tại bạn có thể thực hiện điều này bằng cách chặn quyền chỉnh sửa đối với thư mục `.obsidian`, hoặc các tệp và thư mục cụ thể bên trong nó, như đã mô tả ở trên. Nếu bạn quan tâm đến nhiều kiểm soát truy cập hơn cho nhóm của mình, vui lòng gửi [yêu cầu tính năng](https://forum.obsidian.md/c/feature-requests/8).
