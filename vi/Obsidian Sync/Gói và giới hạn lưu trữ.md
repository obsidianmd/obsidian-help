---
permalink: sync/plans
publish: true
mobile: true
description: Learn about the different plan options we have available for Obsidian Sync.
---
## Các gói

Để đồng bộ ghi chú của bạn với [[Giới thiệu về Obsidian Sync|Obsidian Sync]], bạn cần một gói đăng ký. Bạn có thể mua gói Sync bằng cách đăng nhập vào [tài khoản của bạn](https://obsidian.md/account/sync). Xem [trang giới thiệu Sync](https://obsidian.md/sync) để biết giá cả.

Dưới đây là bảng so sánh giữa gói Standard và gói Plus:

|                                                                   | Sync Standard | Sync Plus       |
| ----------------------------------------------------------------- | ------------- | --------------- |
| Kho đã đồng bộ                                                   | 1             | 10              |
| Kích thước tệp tối đa                                            | 5 MB          | 200 MB          |
| Tổng dung lượng lưu trữ                                          | 1 GB          | 10 GB đến 100 GB |
| [[Lịch sử phiên bản]]                                            | 1 tháng       | 12 tháng        |
| Thiết bị                                                          | Không giới hạn | Không giới hạn  |
| [[Cộng tác trên kho lưu trữ được chia sẻ\|Kho được chia sẻ]]    | Có            | Có              |

## Giới hạn lưu trữ

Lượng dữ liệu bạn có thể lưu trữ bằng [[Giới thiệu về Obsidian Sync|Obsidian Sync]] phụ thuộc vào gói đăng ký của bạn. Với gói Sync Plus, bạn có thể mua thêm dung lượng lưu trữ lên đến 100 GB qua [bảng điều khiển tài khoản của bạn](https://obsidian.md/account/sync). Xem [[Câu hỏi thường gặp]] để biết thêm chi tiết.

Có một giới hạn lưu trữ duy nhất cho toàn bộ tài khoản áp dụng cho tất cả ghi chú trong các kho của bạn. [[Lịch sử phiên bản]] và [[Tệp đính kèm|tệp đính kèm]] cũng được tính vào giới hạn lưu trữ của tài khoản.

Khi bạn đạt đến giới hạn lưu trữ của tài khoản, plugin Sync sẽ ngừng đồng bộ tệp, và bạn sẽ được nhắc dọn dẹp kho từ xa của mình.

### Xác định và xóa các tệp lớn

Để xác định và xóa các tệp lớn khỏi kho:

1. Mở **[[Cài đặt]] → Sync**.
2. Chọn **Xem các tập tin lớn nhất** bên cạnh **Kích thước kho lưu trữ vượt quá giới hạn**.
	1. Nếu bạn không thấy **Kích thước kho lưu trữ vượt quá giới hạn**, điều đó có nghĩa là ==bạn chưa đạt đến giới hạn dung lượng==.
3. Đóng cửa sổ **Xem các tập tin lớn nhất**.
4. Xóa một số tệp lớn mà bạn không còn cần nữa.
5. Chờ Obsidian Sync hoàn thành tác vụ. Việc này có thể mất một lúc.
6. Mở **[[Cài đặt]] → Sync**.
7. Chọn **Xóa vĩnh viễn** bên cạnh **Kích thước kho lưu trữ vượt quá giới hạn**. Thao tác này sẽ xóa các tệp đã xóa khỏi kho từ xa để giải phóng dung lượng.

Sau khi quá trình dọn dẹp được đồng bộ lên máy chủ, Obsidian Sync sẽ tiếp tục hoạt động.

### Tạo một kho từ xa mới

Bạn có thể **tạo một kho từ xa mới** để loại trừ các tệp lớn trước khi đồng bộ. Lịch sử phiên bản cho các tệp của bạn sẽ bị đặt lại nếu bạn tạo kho từ xa mới. Hãy chắc chắn rằng bạn không cần lịch sử phiên bản cho các tệp cũ trước khi tiếp tục.

Để đồng bộ với một kho từ xa mới, hãy làm theo các bước sau:

1. Mở **[[Cài đặt]] → Sync**.
2. Chọn **Quản lý** bên cạnh **Kho từ xa**.
3. Chọn **Tạo hòm lưu trữ mới** và làm theo các bước để tạo. Nếu bạn hết số lượng kho, bạn có thể cần [[Thiết lập Obsidian Sync#Ngắt kết nối khỏi kho từ xa|ngắt kết nối]] khỏi kho từ xa hiện tại và [[Thiết lập Obsidian Sync#Xóa kho từ xa|xóa]] nó trước.
4. Thiết lập các tệp bị loại trừ trước khi bạn bắt đầu đồng bộ với kho từ xa mới.
5. Khởi động lại Obsidian để áp dụng các thay đổi.
6. Mở **[[Cài đặt]] → Sync**.
7. Chọn tiếp tục để bắt đầu đồng bộ với kho từ xa mới.

Kho từ xa mới sẽ nhỏ hơn kho trước đó, do không có lịch sử phiên bản và các tệp bị loại trừ.

## Nâng cấp gói của bạn

Bạn có thể nâng cấp gói bằng cách đăng nhập vào [bảng điều khiển tài khoản của bạn](https://obsidian.md/account/sync). Từ đó bạn sẽ có thể nâng cấp gói từ Sync Standard lên Sync Plus, và tăng dung lượng lưu trữ lên đến 100 GB.

## Hạ cấp gói của bạn

Nếu bạn muốn hạ cấp gói Sync nhưng mức sử dụng lưu trữ vượt quá giới hạn của gói mới, bạn sẽ cần giải phóng dung lượng trong kho từ xa. Hiện tại, không có phương pháp trực tiếp để xóa nhanh các tệp cụ thể khỏi kho từ xa hiện có. Điều này là do các tệp đính kèm được giữ lại trong lịch sử phiên bản tối đa hai tuần, và lịch sử phiên bản được tính vào giới hạn lưu trữ của bạn.

Cách nhanh nhất để giảm mức sử dụng lưu trữ Sync là tạo một kho từ xa mới với tệp đính kèm bị vô hiệu hóa, sau đó xóa kho từ xa cũ vượt quá giới hạn lưu trữ. Lưu ý rằng bạn sẽ mất lịch sử phiên bản khi làm điều này.

Nếu bạn đang hạ cấp từ Sync Plus xuống Sync Standard, bạn cũng cần giảm số lượng kho xuống còn một trước khi việc hạ cấp được cho phép.

### Bảo toàn lịch sử phiên bản

Các tệp đính kèm được giữ trong [[Lịch sử phiên bản|lịch sử phiên bản]] của bạn tối đa hai tuần. Nếu bạn dự định hạ cấp trong tương lai gần, bạn có thể bắt đầu bằng cách xóa các tệp đính kèm khỏi kho cục bộ.

Sau hai tuần, chúng sẽ bị xóa vĩnh viễn khỏi kho từ xa và sẽ không còn được tính vào giới hạn lưu trữ của bạn. Tại thời điểm đó, bạn sẽ có thể hạ cấp gói trong khi vẫn bảo toàn lịch sử phiên bản cho các loại tệp khác, chẳng hạn như tệp Markdown.
