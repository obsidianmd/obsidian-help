---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync keeps a record of all changes made to your notes and regularly checks for updates and creates new versions of your notes.
---
[[Giới thiệu về Obsidian Sync|Obsidian Sync]] thường xuyên kiểm tra các cập nhật cho [[Cài đặt đồng bộ và đồng bộ hóa chọn lọc|các tệp đã đồng bộ]] của bạn, lưu lại bản ghi về mọi thay đổi. Những thay đổi này được lưu trữ dưới dạng các mục mới trong [[#Lịch sử phiên bản]]. Thông tin này có thể được truy cập theo một vài cách:

- [[#Lịch sử Sync]]
- [[#Lịch sử phiên bản]]

Mặc dù không phải là một phần của Obsidian Sync, lịch sử phiên bản cục bộ cũng có sẵn trên mỗi thiết bị nếu plugin [[Khôi phục tập tin]] được bật.

## Lịch sử Sync

Tính năng Lịch sử Sync (hay thanh bên Sync), được giới thiệu trong Obsidian phiên bản 1.7, cho phép bạn nhanh chóng xem các ghi chú và tệp đính kèm được tạo mới hoặc chỉnh sửa gần đây đã được đồng bộ. Bạn cũng có thể coi nó như một lịch sử _chỉnh sửa_.

Trong thanh bên, bạn có thể chọn một mục để mở tệp của nó trong cửa sổ đang hoạt động. Các mục cũng có menu ngữ cảnh, cho phép bạn thực hiện các thao tác như di chuyển tệp hoặc xem [[#Ghi chú và tệp đính kèm|Lịch sử phiên bản]] của nó.

> [!compatibility] Tính năng chỉ dành cho máy tính
> Khi bạn di chuột qua một tệp đã đồng bộ trong thanh bên, bạn có thể thấy ai đã chỉnh sửa tệp lần cuối. Điều này đặc biệt hữu ích nếu bạn đang [[Cộng tác trên kho lưu trữ được chia sẻ|cộng tác]] trên một kho được chia sẻ.

> [!tip] 
> Cài đặt và các mục đã xóa sẽ không xuất hiện trong thanh bên Lịch sử Sync. Những mục này có thể được tìm thấy trong [[#Ghi chú và tệp đính kèm|Lịch sử phiên bản]].

### Hiển thị lịch sử Sync

Khi bạn bật plugin cốt lõi [[Giới thiệu về Obsidian Sync|Sync]], Lịch sử Sync được tự động bật nhưng không xuất hiện trong thanh bên theo mặc định. Bạn sẽ cần thêm nó thủ công bằng lệnh hoặc phím tắt.

#### Kích hoạt qua Bảng lệnh

> [!info] Tùy chọn này yêu cầu plugin cốt lõi [[Khay lệnh]] phải được bật.

**Máy tính/Máy tính bảng** ![[lucide-monitor-check.svg#icon]]

1. Mở **Bảng lệnh**. ![[lucide-terminal.svg#icon]]
2. Gõ "Sync".
3. Chọn tùy chọn "Sync: Hiển thị lịch sử Sync".

Lịch sử Sync sau đó sẽ xuất hiện trong [[Thanh bên|thanh bên phải]].

**Di động** ![[obsidian-icon-smartphone.svg#icon]]

1. Mở [[Thanh công cụ]] ![[lucide-menu.svg#icon]].
2. Mở **Bảng lệnh**. ![[lucide-terminal.svg#icon]]
3. Gõ "Sync".
4. Chọn tùy chọn "Sync: Hiển thị lịch sử Sync".

Lịch sử Sync sau đó sẽ xuất hiện dưới dạng tùy chọn thả xuống trong [[Thanh bên|thanh bên phải]].

#### Kích hoạt qua Phím tắt

1. Mở **[[Cài đặt]]**.
2. Trong danh mục **Tùy chọn**, chọn **Phím tắt**.
3. Trong thanh tìm kiếm phím tắt, gõ "Sync".
4. Bên cạnh "Sync: Hiển thị lịch sử Sync," gán phím tắt mà bạn muốn.

## Lịch sử phiên bản

Ngoài [[#Lịch sử Sync]], Obsidian cũng duy trì lịch sử phiên bản để khôi phục ghi chú và tệp đính kèm. Nếu bạn vô tình xóa một ghi chú hoặc muốn quay lại phiên bản trước, bạn có thể khôi phục nó từ lịch sử phiên bản.

Thời gian lưu giữ lịch sử phiên bản của bạn phụ thuộc vào [[Gói và giới hạn lưu trữ|gói Obsidian Sync]] của bạn. Với gói Standard, ghi chú được lưu giữ trong 1 tháng, trong khi với gói Plus, chúng được lưu giữ trong 12 tháng. Sau khoảng thời gian này, các phiên bản cũ hơn của ghi chú sẽ bị xóa.

Đối với [[Tệp đính kèm|tệp đính kèm]], các phiên bản cũ hơn được lưu trữ trong <u>hai tuần</u>.

![[Cộng tác trên kho lưu trữ được chia sẻ#^version-history-image]]

### Ghi chú và tệp đính kèm

Quy trình khôi phục cả ghi chú và tệp đính kèm đều giống nhau.

#### Xem lịch sử phiên bản của một tệp

**Máy tính/Máy tính bảng** ![[lucide-monitor-check.svg#icon]]
1. Trong **Trình khám phá tệp**, chọn ghi chú bạn muốn khôi phục.
2. Chọn **Mở lịch sử phiên bản**.
3. Chọn phiên bản của ghi chú bạn muốn xem ở bên trái. Nội dung sẽ được hiển thị ở bên phải.

**Di động** ![[obsidian-icon-smartphone.svg#icon]]
1. Trong **Trình khám phá tệp**, chọn ghi chú bạn muốn khôi phục.
2. Nhấn giữ để mở menu ngữ cảnh.
3. Chọn **Mở lịch sử phiên bản**.
4. Trong menu bật lên, chọn phiên bản của ghi chú bạn muốn xem.
5. Sau khi chọn, nội dung ghi chú sẽ sẵn sàng để xem lại.

#### Xem lịch sử phiên bản của tệp đã xóa hoặc đổi tên

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, dưới **Plugin cốt lõi**, chọn **Sync**.
3. Bên cạnh **Các tập tin đã xóa**, chọn **Xem**.
4. Chọn ghi chú bạn muốn xem lịch sử phiên bản.
5. Trong cửa sổ bật lên lịch sử phiên bản, chọn phiên bản của ghi chú bạn muốn xem ở bên trái.

#### Khôi phục phiên bản trước của một tệp

**Máy tính/Máy tính bảng** ![[lucide-monitor-check.svg#icon]]
1. Trong **Trình khám phá tệp**, chọn ghi chú bạn muốn khôi phục.
2. Chọn **Mở lịch sử phiên bản**.
3. Chọn phiên bản của ghi chú bạn muốn khôi phục ở bên trái. Nội dung sẽ được hiển thị ở bên phải.
4. Chọn nút **Khôi phục**.
5. Nội dung ghi chú sẽ được thay thế bằng phiên bản đã khôi phục.

**Di động** ![[obsidian-icon-smartphone.svg#icon]]
1. Trong **Trình khám phá tệp**, chọn ghi chú bạn muốn khôi phục.
2. Nhấn giữ để mở menu ngữ cảnh.
3. Chọn **Mở lịch sử phiên bản**.
4. Trong menu bật lên, chọn phiên bản của ghi chú bạn muốn khôi phục.
5. Sau khi chọn, nội dung ghi chú sẽ sẵn sàng để xem lại.
6. Chọn nút **Khôi phục**.
7. Nội dung ghi chú sẽ được thay thế bằng phiên bản đã khôi phục.

#### Khôi phục tệp đã xóa

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, dưới **Plugin cốt lõi**, chọn **Sync**.
3. Bên cạnh **Các tập tin đã xóa**, chọn **Xem**.
4. Chọn ghi chú bạn muốn khôi phục.
5. Trong danh sách phiên bản ở bên trái, chọn phiên bản bạn muốn khôi phục.
6. Chọn nút **Khôi phục** ở bên phải.
7. Ghi chú sẽ được khôi phục về vị trí ban đầu trong hệ thống tệp.

> [!tip] Bạn có thể chọn nhiều ghi chú với **khôi phục hàng loạt** bằng cách chọn các hộp kiểm, hoặc sử dụng `shift+click`. Các tệp này sẽ không thể được xem lại trong menu này.

### Lịch sử cài đặt

Obsidian Sync cũng theo dõi các thay đổi được thực hiện đối với cài đặt cấu hình kho của bạn.

#### Xem lịch sử phiên bản của một cài đặt

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, dưới **Plugin cốt lõi**, chọn **Sync**.
3. Điều hướng xuống **Đồng bộ hóa cấu hình hòm lưu trữ**.
4. Chọn nút **Xem** bên cạnh **Lịch sử phiên bản [[Cài đặt]]**.
5. Trong cửa sổ bật lên **Tệp [[Cài đặt]]**, chọn tệp cài đặt bạn muốn xem.

#### Khôi phục phiên bản trước của một cài đặt

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, dưới **Plugin cốt lõi**, chọn **Sync**.
3. Điều hướng xuống **Đồng bộ hóa cấu hình hòm lưu trữ**.
4. Chọn nút **Xem** bên cạnh **Lịch sử phiên bản [[Cài đặt]]**.
5. Trong cửa sổ bật lên **Tệp [[Cài đặt]]**, chọn tệp cài đặt bạn muốn xem.
6. Trong cửa sổ thay đổi, chọn nút **Khôi phục**.
7. Tải lại hoặc khởi động lại Obsidian để cài đặt có hiệu lực. Để biết thêm chi tiết, tham khảo hướng dẫn trong [[Thiết lập Obsidian Sync#Điều chỉnh cài đặt Obsidian Sync|Điều chỉnh cài đặt Obsidian Sync]].
