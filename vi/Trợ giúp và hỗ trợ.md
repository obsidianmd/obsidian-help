---
permalink: resources
publish: true
mobile: true
description: 'Find support resources, report security or community violations, and learn how to contribute to Obsidian.'
---
Tìm tài nguyên hỗ trợ, báo cáo vi phạm bảo mật hoặc vi phạm cộng đồng, và tìm hiểu cách đóng góp cho Obsidian.

## Câu hỏi và lời khuyên

Nếu bạn có câu hỏi về cách sử dụng Obsidian, hoặc muốn làm quen với những người dùng Obsidian khác, bạn có thể tham gia một trong các kênh cộng đồng của chúng tôi:

- [[Khối lưu trữ sandbox|Khám phá kho Sandbox]]
- [Tham gia máy chủ Discord của chúng tôi](https://discord.gg/obsidianmd)
- [Truy cập diễn đàn](https://forum.obsidian.md/)

### Báo cáo lỗi và yêu cầu tính năng

> [!tip]- Kiểm tra trùng lặp trước
> Trước khi bạn yêu cầu tính năng mới hoặc báo cáo lỗi, vui lòng xem qua các bài đăng khác để đảm bảo chưa ai gửi yêu cầu tương tự.

Nếu bạn muốn đề xuất tính năng trong Obsidian, hãy truy cập [Yêu cầu tính năng](https://forum.obsidian.md/c/feature-requests/8).

Nếu bạn muốn báo cáo lỗi trong Obsidian, hãy truy cập [Báo cáo lỗi](https://forum.obsidian.md/c/bug-reports/7). Các báo cáo lỗi sẽ được chuyển đến [Nghĩa trang lỗi](https://forum.obsidian.md/c/bug-graveyard/12) sau khi được giải quyết.

### Thu thập thông tin gỡ lỗi

Khi bạn gặp lỗi hoặc cần hỗ trợ từ [[#Liên hệ hỗ trợ Obsidian|hỗ trợ Obsidian]], việc cung cấp thông tin gỡ lỗi có thể rất hữu ích. Dưới đây là cách lấy thông tin:

1. Mở [[Khay lệnh]].
2. Nhập **Hiển Thị Thông Tin Gỡ Lỗi**.
3. Chọn tùy chọn **Hiển Thị Thông Tin Gỡ Lỗi** được tô sáng.
4. Chọn **Sao chép vào clipboard**.
5. Dán thông tin đã sao chép vào báo cáo lỗi hoặc email hỗ trợ Obsidian của bạn.

### Kiểm tra thời gian khởi động

Bạn có thể kiểm tra thời gian Obsidian khởi động bằng tính năng **Thời gian khởi động**.

1. Mở **[[Cài đặt]] → Chung → Nâng cao**.
2. Bên cạnh **Thông báo nếu khởi động lâu hơn dự kiến**, chọn **biểu tượng đồng hồ**.
3. Một cửa sổ **Thời gian khởi động** sẽ xuất hiện, hiển thị thông tin thời gian chi tiết:
   - **Tổng thời gian khởi động ứng dụng**: Thời gian khởi chạy tổng thể.
   - **Khởi tạo**: Thời gian tải chính ứng dụng.
   - **Kho**: Thời gian tải các tệp trong kho của bạn.
   - **Không gian làm việc**: Thời gian khôi phục các thẻ và bố cục.
   - **Plugin cốt lõi**: Thời gian sử dụng bởi các plugin cốt lõi đang hoạt động.
4. Bạn có thể chọn **Sao chép vào clipboard** để sao chép báo cáo phục vụ việc khắc phục sự cố hoặc chia sẻ.

Ngoài ra, bạn có thể bật/tắt **Thông báo nếu khởi động lâu hơn dự kiến** để nhận cảnh báo nếu thời gian khởi động chậm bất thường.

### Ghi lại nhật ký bảng điều khiển

Khi bạn cần báo cáo lỗi liên quan đến một plugin Obsidian hoặc khi được [[#Liên hệ hỗ trợ Obsidian|hỗ trợ Obsidian]] yêu cầu cung cấp thông tin nhật ký, bạn có thể cần truy cập bảng điều khiển Obsidian từ bên trong ứng dụng Obsidian. Dưới đây là cách thực hiện tùy theo hệ điều hành của bạn:

- **Windows/Linux**: `Ctrl+Shift+I`
- **macOS**: `Command+Option+I`

> [!info]+ Phương pháp truy cập thay thế
> Nếu sử dụng kiểu khung cửa sổ **Khung Obsidian**, bạn cũng có thể truy cập bảng điều khiển Obsidian qua menu tiêu đề.

Sau khi mở bảng điều khiển nhà phát triển:

1. Chọn **console** trong menu phía trên.
2. Chọn tùy chọn menu bên **errors**. Bất kỳ lỗi nào sẽ được hiển thị dưới dạng `# errors`.
3. Chọn một trong các thông báo lỗi màu đỏ.
4. Chọn tùy chọn **Save as...** Thao tác này sẽ lưu tất cả các lỗi trong bảng điều khiển.
5. Lưu tệp nhật ký vào thiết bị của bạn.
6. Đính kèm tệp nhật ký vào báo cáo lỗi hoặc email hỗ trợ Obsidian của bạn.

![[help-support-console-menu.png#interface|600]]

> [!warning]+ Truy cập bảng điều khiển trên di động
> Thiết bị di động và máy tính bảng có quyền truy cập hạn chế vào bảng điều khiển nhà phát triển. Đối với những người dùng này, chúng tôi khuyên sử dụng plugin cộng đồng [Logstravaganza](https://obsidian.md/plugins?id=logstravaganza) để tự động tạo dữ liệu nhật ký bảng điều khiển trong một ghi chú Markdown.

### Liên hệ hỗ trợ Obsidian

Obsidian chỉ cung cấp hỗ trợ qua email cho các câu hỏi về [[Bản quyền thương mại|giấy phép thương mại]], tài khoản, thanh toán và các dịch vụ bổ sung ([[Giới thiệu về Obsidian Sync|Obsidian Sync]] và [[Giới thiệu về Obsidian Publish|Obsidian Publish]]). Nếu bạn cần trợ giúp về bất kỳ chủ đề nào trong số đó, [gửi email cho đội ngũ Obsidian](mailto:support@obsidian.md).

## Báo cáo vấn đề bảo mật

Nếu bạn phát hiện vấn đề bảo mật trong Obsidian, hoặc nếu bạn nghi ngờ một plugin có mã độc, vui lòng [gửi email cho đội ngũ Obsidian](mailto:support@obsidian.md).

## Báo cáo vi phạm Quy tắc ứng xử

Dù bạn là nạn nhân hay nhân chứng của việc vi phạm [[Quy tắc ứng xử cộng đồng]], bạn có thể báo cáo sự việc cho đội ngũ điều hành của chúng tôi

Báo cáo sự việc trên một trong các kênh cộng đồng sau:

- [[Quy tắc ứng xử cộng đồng#Báo cáo trên Discord|Báo cáo trên Discord]]
- [[Quy tắc ứng xử cộng đồng#Báo cáo trên diễn đàn|Báo cáo trên diễn đàn]]

## Đóng góp cho Obsidian

Bạn muốn dành một số kỹ năng và thời gian rảnh cho Obsidian? Đây là những nơi chúng tôi thực sự cần sự giúp đỡ của bạn:

- Giúp đỡ những người dùng Obsidian khác bằng cách trả lời câu hỏi trên [máy chủ Discord](https://discord.gg/obsidianmd), [diễn đàn](https://forum.obsidian.md/) hoặc reddit [ObsidianMD](https://old.reddit.com/r/ObsidianMD/).
- [[Nhà phát triển]], chúng tôi thực sự cần sự giúp đỡ của bạn trong việc mở rộng [Tài liệu dành cho nhà phát triển Obsidian](https://github.com/obsidianmd/obsidian-developer-docs).
- Bạn biết ngôn ngữ nào khác ngoài tiếng Anh? Hãy cân nhắc hỗ trợ [[Bản dịch]] của chúng tôi sang các ngôn ngữ khác.
- Có điều gì trong tài liệu trợ giúp này đã lỗi thời hoặc gây nhầm lẫn? Tham khảo [[Hướng dẫn kiểu dáng]] và gửi [issue và pull request](https://github.com/obsidianmd/obsidian-help/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).
- Nếu có thể, bạn có thể [[Đóng góp tài chính|đóng góp tài chính]] bằng cách sử dụng một trong các dịch vụ bổ sung trả phí của chúng tôi.
