---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Trang này liệt kê các sự cố không phổ biến mà bạn có thể gặp phải với Obsidian Sync và cách khắc phục chúng.
---
Trang này liệt kê các vấn đề không phổ biến mà bạn có thể gặp phải với [[Giới thiệu về Obsidian Sync|Obsidian Sync]] và cách giải quyết chúng. Trước khi tiếp tục, chúng tôi khuyên bạn nên xem lại các trang [[Biểu tượng và thông báo trạng thái]] và [[Câu hỏi thường gặp]].

## Chung

### Giải quyết xung đột

Xung đột xảy ra khi bạn thay đổi cùng một tệp trên hai hoặc nhiều thiết bị trước khi chúng đồng bộ. Ví dụ, bạn chỉnh sửa một ghi chú trên máy tính. Trước khi thay đổi đó được tải lên, bạn cũng thay đổi cùng ghi chú đó trên điện thoại.

Xung đột xảy ra thường xuyên hơn khi bạn làm việc ngoại tuyến. Có nhiều thay đổi hơn và thời gian giữa các lần đồng bộ dài hơn, điều này làm tăng khả năng xung đột.

#### Cách Obsidian Sync xử lý xung đột

Khi Obsidian Sync phát hiện xung đột, kết quả phụ thuộc vào loại tệp:

- **Tệp Markdown**: Obsidian Sync hợp nhất các thay đổi bằng thuật toán [diff-match-patch](https://github.com/google/diff-match-patch) của Google.
- **Các loại tệp khác**: Đối với tất cả các tệp khác, bao gồm cả Canvas, Obsidian sử dụng phương pháp "tệp sửa đổi sau cùng được giữ". Phiên bản được sửa đổi gần nhất sẽ thay thế các phiên bản trước đó.

Đối với xung đột trong cài đặt Obsidian, chẳng hạn như cài đặt plugin, Obsidian Sync hợp nhất các tệp JSON. Nó áp dụng các khóa từ JSON cục bộ lên trên JSON từ xa.

#### Tùy chọn giải quyết xung đột

Bắt đầu từ Obsidian 1.9.7, bạn có thể chọn cách xử lý xung đột. Để cấu hình cài đặt này:

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, chọn **Đồng bộ hóa**.
3. Trong phần **[[Cài đặt đồng bộ và đồng bộ hóa chọn lọc#Giải quyết xung đột|Giải quyết xung đột]]**, chọn tùy chọn ưa thích của bạn:
   - **Tự động hợp nhất** (mặc định): Obsidian Sync kết hợp tất cả các thay đổi từ các thiết bị khác nhau thành một tệp duy nhất. Điều này lưu tất cả các chỉnh sửa, nhưng đôi khi có thể tạo ra văn bản trùng lặp hoặc vấn đề định dạng. Bạn sẽ cần sửa chúng theo cách thủ công.
   - **Tạo tệp xung đột**: Khi Obsidian phát hiện các thay đổi xung đột, nó tạo một tệp xung đột riêng biệt thay vì hợp nhất tự động. Sau đó bạn có thể xem xét cả hai phiên bản và tự hợp nhất chúng. Điều này cho bạn toàn quyền kiểm soát kết quả cuối cùng.

> [!warning]+ Cấu hình trên tất cả thiết bị
> Cài đặt giải quyết xung đột là riêng cho từng thiết bị. Bạn phải cấu hình tùy chọn ưa thích trên mỗi thiết bị của mình. Điều này đảm bảo hành vi giống nhau trên tất cả các thiết bị đã đồng bộ của bạn.

**Mẫu đặt tên tệp xung đột**

Khi bạn sử dụng tùy chọn "Tạo tệp xung đột", Obsidian tạo một tệp mới với mẫu đặt tên sau:

```
tên-ghi-chú-gốc.sync-conflict-YYYYMMDD-HHMMSS.md
```

Ví dụ, nếu xung đột xảy ra trong một ghi chú có tên `Meeting notes.md`, tệp xung đột có thể được đặt tên là:

```
Meeting notes.sync-conflict-20241128-143022.md
```

Tệp xung đột chứa các thay đổi từ thiết bị nơi xung đột được phát hiện. Tệp gốc giữ phiên bản từ xa. Bạn có thể so sánh cả hai tệp và hợp nhất nội dung theo cách thủ công.

> [!info]+ Kiểm tra nhật ký đồng bộ hóa
> Để kiểm tra khi nào xung đột xảy ra, hãy mở [[Biểu tượng và thông báo trạng thái#Hoạt động đồng bộ hóa|Nhật ký đồng bộ hóa]]. Lọc theo "Merge Conflicts" hoặc tìm kiếm "Conflict".

### Sync đã xóa một ghi chú tôi vừa tạo trên hai thiết bị

Obsidian Sync thường cố gắng [[#Giải quyết xung đột|giải quyết xung đột]] bằng cách hợp nhất các ghi chú xung đột giữa các thiết bị. Tuy nhiên, vấn đề có thể xảy ra với người dùng tự động tạo hoặc thay đổi ghi chú khi khởi động. Điều này bao gồm [[Ghi chú hàng ngày]] hoặc khi sử dụng plugin cộng đồng [Templater](https://github.com/SilentVoid13/Templater).

Nếu bạn tạo một ghi chú cục bộ trên một thiết bị và, trong vòng vài phút, Sync tải về phiên bản từ xa của cùng ghi chú đó, Sync sẽ giữ phiên bản từ xa mà không hợp nhất hai phiên bản. Trong trường hợp này, bạn có thể khôi phục phiên bản cục bộ bằng [[Khôi phục tập tin]].

### Sync không đồng bộ các cập nhật plugin và cài đặt của tôi

Obsidian [[Câu hỏi thường gặp#Obsidian Sync có tải lại trực tiếp cài đặt của tôi không?|không tải lại trực tiếp tất cả cài đặt]]. Sau khi bạn cập nhật cài đặt hoặc plugin, bạn cần khởi động lại Obsidian trên các thiết bị khác để thấy các thay đổi. Trên thiết bị di động, bạn có thể cần buộc thoát ứng dụng.

> [!example]- Thay đổi chủ đề
> - Trên thiết bị chính của bạn (thường là máy tính), bạn thay đổi chủ đề về mặc định từ một chủ đề tùy chỉnh.
> - Nhật ký đồng bộ hóa xác nhận các tệp đã cập nhật được gửi đến kho từ xa, nhưng thiết bị di động của bạn vẫn hiển thị chủ đề tùy chỉnh.
> - Trên thiết bị di động, kiểm tra nhật ký đồng bộ hóa để xác nhận đã nhận tệp `appearance.json` đã cập nhật.
> - Tải lại hoặc khởi động lại Obsidian trên thiết bị di động.
> - Sau khi tải lại hoặc khởi động lại, thiết bị di động sẽ hiển thị cùng chủ đề như máy tính của bạn.

### Các tệp của tôi liên tục biến mất khỏi Sync ngay khi tôi khôi phục chúng

Vấn đề này phổ biến nhất trên Windows. Windows Defender có thể cách ly các tệp có khối mã, điều này khiến một số ghi chú biến mất.

Một nguyên nhân phổ biến khác là đồng bộ kép. Điều này xảy ra khi Obsidian Sync chạy cùng với một dịch vụ đồng bộ khác.

![[Chuyển sang Obsidian Sync#Di chuyển kho của bạn ra khỏi dịch vụ đồng bộ bên thứ ba hoặc lưu trữ đám mây]]

---

Cuối cùng, điều này có thể xảy ra khi bạn khôi phục một tệp trên một thiết bị, nhưng sau đó nó bị xóa từ thiết bị phụ. Điều này xảy ra khi tên tệp có [[Biểu tượng và thông báo trạng thái#Thông báo đã bỏ qua|ký tự không hợp lệ]].

## Android

**Thiết bị của tôi đang xóa các tệp đính kèm tôi nhận qua Sync**

Vấn đề này có khả năng do Google hoặc Android Photos quản lý các tệp đính kèm của bạn. Để ngăn hệ thống thay đổi các tệp nhận qua Sync, hãy thêm một tệp `.nomedia` [vào kho của bạn](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) trên thiết bị Android.

> [!tip]- Sử dụng plugin
> Plugin cộng đồng [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) giúp việc này dễ dàng hơn. Cài đặt nó trên điện thoại Android của bạn. Lưu ý rằng các tệp `.nomedia` không được đồng bộ giữa các thiết bị thông qua Obsidian Sync.
