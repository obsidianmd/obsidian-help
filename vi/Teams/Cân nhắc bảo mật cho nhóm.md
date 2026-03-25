---
permalink: teams/security
cssclasses:
  - soft-embed
---
Trang [Bảo mật](https://obsidian.md/security) của chúng tôi tổng hợp thông tin về cách Obsidian bảo vệ dữ liệu của bạn. Đây cũng là nơi lưu trữ các báo cáo kiểm tra bảo mật được thực hiện bởi bên thứ ba.

## Các cân nhắc

Obsidian được thiết kế để hoạt động như một ứng dụng ngoại tuyến và độc lập. Obsidian cũng hỗ trợ plugin và chủ đề tùy chỉnh. Ngoài ra, chúng tôi cung cấp hỗ trợ chính thức và không chính thức cho nhiều dịch vụ đồng bộ hóa tệp khác nhau.

Nếu bạn không có ý định sử dụng plugin cộng đồng hoặc chủ đề, hoặc [[Giới thiệu về Obsidian Sync|Obsidian Sync]] hoặc [[Giới thiệu về Obsidian Publish|Obsidian Publish]], các quy trình bảo mật tiêu chuẩn cho ứng dụng của bạn sẽ được áp dụng. Tuy nhiên, nếu bạn dự định sử dụng bất kỳ tính năng nào trong số này, chúng tôi khuyên bạn nên đánh giá kỹ lưỡng sự phù hợp của chúng cho nơi làm việc của bạn.

## Plugin cộng đồng và chủ đề

Vui lòng xem trang [[Bảo mật plugin]] cùng với phần này.

Đội ngũ Obsidian xem xét tất cả plugin cộng đồng và chủ đề được gửi đến thư mục chính thức, thông qua [kho phát hành](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc) của chúng tôi. Chúng tôi không xem xét các mục cộng đồng chưa được gửi đến thư mục chính thức.

Chúng tôi không có cửa hàng cộng đồng cho [[Mẩu CSS]]. Các tệp này thường được lấy từ [Cộng đồng Obsidian](https://obsidian.md/community) hoặc từ các kho GitHub công khai.

Chúng tôi yêu cầu đóng gói tài nguyên trong đoạn trích CSS và chủ đề. Tuy nhiên, chúng tôi đã tạo ngoại lệ cho [Google Fonts](https://fonts.google.com/) để duy trì hiệu suất trên thiết bị di động, nơi tác động của việc đóng gói phông chữ đáng chú ý hơn.

## Mạng và quyền truy cập

Trong khi ưu tiên phương pháp tiếp cận ưu tiên cục bộ của ứng dụng, Obsidian có thực hiện các cuộc gọi mạng dựa trên các dịch vụ và tính năng bạn sử dụng. Các kết nối mạng này có thể được vô hiệu hóa thông qua tường lửa tên miền hoặc khóa ứng dụng.

Obsidian thực hiện các kết nối mạng này trên cổng HTTPS 443.

Sau đây là danh sách các kết nối mạng mà Obsidian thực hiện.

### Kết nối từ Obsidian

- **Cập nhật truy cập sớm**: Sử dụng `releases.obsidian.md`.
- **Quản lý tài khoản và bản quyền**: Khi truy cập tài khoản Obsidian trong Cài đặt và áp dụng Giấy phép Thương mại, chúng tôi gọi `api.obsidian.md`.
- **Obsidian Sync**: Được sử dụng để đồng bộ hóa ghi chú giữa các thiết bị.
	- `sync-xx.obsidian.md`, trong đó `xx` là một số từ 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` và `publish-xx.obsidian.md`, trong đó `xx` là một số.
    2. Frontend: `publish.obsidian.md`.

### Kết nối từ GitHub

Obsidian thực hiện các yêu cầu mạng đến cả `github.com` và `raw.githubusercontent.com`.

- **Phát hành công khai**: Nếu tự động cập nhật được bật, Obsidian kiểm tra GitHub để tìm các phiên bản phát hành công khai.
- **Chủ đề và plugin bên thứ ba**:
    - Một lần kiểm tra được thực hiện mỗi 12 giờ kể từ thời điểm khởi động ứng dụng để tải xuống một tệp được lưu trữ trên GitHub dùng cho "ngừng hỗ trợ plugin." Tệp này giúp vô hiệu hóa từ xa các phiên bản cụ thể của plugin được biết là gặp sự cố, gây mất dữ liệu, hoặc có thể bị lỗ hổng hoặc độc hại.
    - Các plugin đã bật có thể tạo lưu lượng mạng ngoài tầm kiểm soát của Obsidian và GitHub.

### Kết nối khác

- **Nội dung trực tuyến được nhúng**: Khi mở ghi chú nhúng nội dung trực tuyến, chẳng hạn như hình ảnh (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **Yêu cầu DNS**: Nếu tên máy chủ cần được phân giải trước khi thiết lập kết nối, bao gồm DNS qua HTTPS. Tham khảo [tài liệu của Chromium](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) để biết thêm thông tin.

## Câu hỏi thường gặp

### Bảo mật tài khoản

**Obsidian có hỗ trợ Single Sign-On (SSO) không?**
Obsidian không hỗ trợ SSO. Trong hầu hết các trường hợp sử dụng, Obsidian không yêu cầu tài khoản hoặc đăng nhập tại nơi làm việc của bạn, trừ khi bạn đang sử dụng [[Giới thiệu về Obsidian Publish|Obsidian Publish]] hoặc [[Giới thiệu về Obsidian Sync|Obsidian Sync]].

**Obsidian có hỗ trợ Xác thực Đa yếu tố (MFA) không?**
Obsidian hỗ trợ [[Xác thực 2 yếu tố]] (2FA) cho tài khoản Obsidian, nhưng không hỗ trợ 2FA để mở và sử dụng ứng dụng cơ bản. Người dùng [[Giới thiệu về Obsidian Sync|Obsidian Sync]] và [[Giới thiệu về Obsidian Publish|Obsidian Publish]] đã bật 2FA sẽ được yêu cầu xác nhận khóa 2FA khi lần đầu đăng nhập vào ứng dụng.

### Đánh giá và chứng nhận

**Công ty chúng tôi có thể gửi đánh giá bảo mật cho bạn không?**
Chúng tôi yêu cầu số tiền đơn đặt hàng tối thiểu được báo giá trước khi xem xét hoàn thành một đánh giá bảo mật. Các đánh giá này thường tốn nhiều thời gian và có thể không áp dụng được cho các ứng dụng ngoại tuyến như Obsidian, vì chúng thường hướng đến các dịch vụ dựa trên đám mây.

Tuy nhiên, bạn có thể miễn số tiền đơn đặt hàng báo giá này bằng cách đồng ý trả phí giữ chỗ. Vui lòng liên hệ [[Trợ giúp và hỗ trợ#Liên hệ hỗ trợ Obsidian|hỗ trợ Obsidian]] để hỏi về tùy chọn này.

**Bạn có bất kỳ chứng nhận nào được công nhận liên quan đến Bảo mật Thông tin hoặc tiêu chuẩn chất lượng, như ISO27001, NIST, COBIT, hoặc các chứng nhận ISO hoặc CSA khác không?**
Hiện tại thì chưa. Đây có thể là điều chúng tôi khám phá trong tương lai, nhưng hiện tại, trọng tâm của chúng tôi là các [kiểm tra bảo mật](https://obsidian.md/security).
