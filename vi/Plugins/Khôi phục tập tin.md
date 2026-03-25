---
permalink: plugins/file-recovery
publish: true
mobile: true
description: File Recovery helps protect your work from unintentional data loss by automatically saving snapshots of your notes at regular intervals.
aliases:
  - Plugin/File recovery
---
Khôi phục tập tin là một [[Plugin cốt lõi|plugin cốt lõi]] giúp bảo vệ công việc của bạn khỏi việc xóa nhầm, hỏng tệp hoặc các thay đổi không mong muốn bằng cách tự động lưu các ảnh chụp nhanh hoàn chỉnh của ghi chú theo khoảng thời gian đều đặn. Khôi phục tập tin không phải là giải pháp sao lưu toàn diện, và chúng tôi khuyến nghị bạn cũng nên [[Sao lưu tệp Obsidian của bạn|sao lưu]] các tệp Obsidian riêng biệt.

Để tránh chiếm [[#Lưu trữ và hiệu suất|quá nhiều dung lượng]], Obsidian giữ các ảnh chụp nhanh trong một số ngày nhất định trước khi xóa chúng. Các ảnh chụp nhanh lưu toàn bộ nội dung tệp, không chỉ các thay đổi, cho phép bạn khôi phục bất kỳ phiên bản trước đó nào.

> [!info]+ Thông tin
> Theo mặc định, các ảnh chụp nhanh được lưu cách nhau tối thiểu 5 phút và được giữ trong 7 ngày. Bạn có thể cấu hình cả hai khoảng thời gian tại **[[Cài đặt]] → Plugin cốt lõi → Khôi phục tập tin**.

Các ảnh chụp nhanh được lưu trong [[Cách Obsidian lưu trữ dữ liệu#Cài đặt toàn cục|Cài đặt toàn cục]], bên ngoài kho, để phòng trường hợp mất dữ liệu liên quan đến kho. Điều này có nghĩa là các ảnh chụp nhanh được lưu trữ với đường dẫn tuyệt đối đến ghi chú. Nếu bạn đã di chuyển kho gần đây, bạn có thể cần di chuyển nó trở lại vị trí ban đầu khi ảnh chụp nhanh được tạo.

> [!tip] Nếu bạn đang sử dụng [[Giới thiệu về Obsidian Sync|Obsidian Sync]] hoặc [[Đồng bộ hóa ghi chú giữa các thiết bị|các dịch vụ đồng bộ hóa khác]], các ảnh chụp nhanh của Khôi phục tập tin sẽ không đồng bộ giữa các thiết bị. Các ảnh chụp nhanh dành riêng cho từng thiết bị và được lưu cục bộ trên mỗi thiết bị.

## Khôi phục một ảnh chụp nhanh

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, chọn **Khôi phục tập tin** dưới **Plugin cốt lõi**.
3. Dưới **Các snapshot**, chọn **Xem**.
4. Trong trường tên tệp, bắt đầu nhập tên tệp bạn muốn khôi phục, và bạn sẽ thấy danh sách gợi ý.
5. Chọn tệp, nhấn Enter, và bạn sẽ thấy danh sách các ảnh chụp nhanh có sẵn.
6. Chọn ảnh chụp nhanh bạn muốn khôi phục.
    1. Nếu bạn muốn sao chép và dán vào ghi chú mới, chọn nút **Sao chép**.
    2. Nếu bạn muốn khôi phục tệp hoàn toàn, chọn nút **Khôi phục**.
7. Bạn có thể tùy chọn hiển thị sự khác biệt giữa các ảnh chụp nhanh bằng cách bật **Hiển thị khác biệt**. Điều này hiển thị nội dung nào đã được thêm, xóa hoặc sửa đổi giữa các phiên bản ảnh chụp nhanh.

## Xóa lịch sử ảnh chụp nhanh

> [!danger] Xóa lịch sử ảnh chụp nhanh sẽ xóa vĩnh viễn tất cả các ảnh chụp nhanh trong kho của bạn.

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, chọn **Khôi phục tập tin** dưới **Plugin cốt lõi**.
3. Dưới **Xóa lịch sử**, chọn **Xóa**.
4. Xác nhận rằng bạn muốn xóa tất cả các ảnh chụp nhanh bằng cách nhấp **Xóa**.

## Lưu trữ và hiệu suất

Các ảnh chụp nhanh của Khôi phục tập tin thường sử dụng rất ít dung lượng đĩa, vì chúng chỉ lưu các tệp đã thay đổi. Tuy nhiên, trong các kho có nhiều tệp lớn hoặc chỉnh sửa thường xuyên, các ảnh chụp nhanh có thể tích lũy theo thời gian. Hãy theo dõi việc sử dụng dung lượng lưu trữ và điều chỉnh thời gian lưu giữ nếu cần.

## Giới hạn

- **Chế độ khóa của Apple**: Tính năng này không khả dụng trên các thiết bị Apple đã bật [Chế độ khóa](https://support.apple.com/en-us/105120) trừ khi Obsidian được miễn trừ.
- **Loại tệp**: Chỉ các tệp `.md` và `.canvas` có thể được khôi phục bằng Khôi phục tập tin.
- **Vị trí kho**: Nếu bạn di chuyển kho đến vị trí khác mà không sử dụng [[Quản lý kho#Di chuyển kho đến thư mục khác|trình chuyển đổi kho]], các ảnh chụp nhanh hiện có có thể không truy cập được.
