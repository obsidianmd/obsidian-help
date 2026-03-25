---
permalink: publish/publish
publish: true
mobile: true
description: Learn how to publish your content using Obsidian Publish
---
Trang này giải thích cách quản lý nội dung đã xuất bản của bạn. Để tìm hiểu cách tùy chỉnh kiểu dáng trang web, xem [[Tùy chỉnh trang web của bạn]].

## Yêu cầu trước

- Một tài khoản Obsidian. Nếu bạn chưa có, [đăng ký ngay](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Một gói đăng ký Obsidian Publish đang hoạt động. Nếu bạn chưa có, đăng ký từ [bảng điều khiển tài khoản của bạn](https://obsidian.md/account/publish).
- Plugin cốt lõi **Publish** đã được [[Thiết lập Obsidian Publish#Kích hoạt Obsidian Publish|kích hoạt]].
- Một [[Quản lý trang web#Tạo trang web mới|trang Publish]] đã được tạo.

## Xuất bản ghi chú

1. Trong **Thanh công cụ**, chọn **Xuất bản các thay đổi** ![[lucide-send.svg#icon]].
2. Trong hộp thoại **Xuất bản các thay đổi**, chọn **MỚI** để xem tất cả ghi chú chưa được xuất bản.
3. Chọn các ghi chú bạn muốn xuất bản.
4. Chọn **Xuất bản**.

## Hủy xuất bản ghi chú

Ghi chú vẫn nằm trong kho cục bộ của bạn ngay cả sau khi bạn hủy xuất bản chúng.

1. Trong **Thanh công cụ**, chọn **Xuất bản các thay đổi** ![[lucide-send.svg#icon]].
2. Trong hộp thoại **Xuất bản các thay đổi**, chọn **KHÔNG THAY ĐỔI** để xem tất cả ghi chú đã xuất bản.
3. Chọn các ghi chú bạn muốn hủy xuất bản.
4. Chọn **Xuất bản**.

## Cập nhật ghi chú đã xuất bản

1. Trong **Thanh công cụ**, chọn **Xuất bản các thay đổi** ![[lucide-send.svg#icon]].
2. Trong hộp thoại **Xuất bản các thay đổi**, chọn **THAY ĐỔI** để xem tất cả ghi chú đã sửa đổi kể từ lần xuất bản trước.
3. Chọn các ghi chú bạn muốn cập nhật.
4. Chọn **Xuất bản**.

> [!hint] Việc xóa các ghi chú đã đổi tên hoặc đã xóa và hình ảnh khỏi Publish xảy ra ở bước này. Bạn phải chọn hộp kiểm thủ công để xóa dữ liệu này, vì nó không được tự động chọn để đảm bảo an toàn.

## Xuất bản dữ liệu được liên kết

Khi xuất bản ghi chú chứa liên kết đến các ghi chú khác hoặc hình ảnh nhúng, các liên kết bị hỏng có thể xảy ra trừ khi các ghi chú được liên kết cũng được xuất bản. **Obsidian Publish** giúp ngăn chặn điều này bằng cách tự động chọn phương tiện được liên kết từ các ghi chú bạn đã chọn.

Để bao gồm tất cả ghi chú được liên kết, chọn **Thêm liên kết** trong hộp thoại **Xuất bản các thay đổi**.

Trước khi xuất bản, hãy xem lại lựa chọn đã cập nhật để đảm bảo nó không bao gồm bất kỳ dữ liệu nào bạn chưa sẵn sàng xuất bản.

> [!tip] Chức năng **Thêm liên kết** tuân thủ mọi loại trừ được định nghĩa trong [[#Bỏ qua dữ liệu]].

## Tự động chọn dữ liệu để xuất bản

Đặt `publish: true` trong [[Thuộc tính]] của ghi chú để tự động đưa nó vào danh sách xuất bản dưới dạng ghi chú mới hoặc đã thay đổi.

Bạn cũng có thể tự động chọn ghi chú và hình ảnh được liên kết trong các thư mục cụ thể bằng cách thêm chúng làm thư mục **Đã bao gồm**:

1. Trong **Thanh công cụ**, chọn **Xuất bản các thay đổi** ![[lucide-send.svg#icon]] hoặc mở [[Khay lệnh]] và gõ **Publish: Xuất bản các thay đổi...**.
2. Chọn biểu tượng **Quản lý bộ lọc xuất bản** ![[lucide-filter.svg#icon]].
3. Trong phần **Thư mục đã bao gồm**, chọn **Quản lý**.
4. Chọn các thư mục bạn muốn bao gồm từ danh sách gợi ý.
5. Thư mục được thêm vào danh sách đã bao gồm.
6. Chọn **Hoàn thành** khi xong.

### Bỏ qua dữ liệu

Để bỏ qua một ghi chú trong Obsidian Publish, đặt `publish: false` trong [[Thuộc tính]] của ghi chú. Ghi chú sẽ không còn xuất hiện trong danh sách ghi chú để xuất bản.

Bạn cũng có thể tự động bỏ qua ghi chú và hình ảnh trong các thư mục cụ thể bằng cách thêm chúng làm thư mục **Bị loại trừ**:

1. Trong **Thanh công cụ**, chọn **Xuất bản các thay đổi** ![[lucide-send.svg#icon]] hoặc mở [[Khay lệnh]] và gõ **Publish: Xuất bản các thay đổi...**.
2. Chọn biểu tượng **Quản lý bộ lọc xuất bản** ![[lucide-filter.svg#icon]].
3. Trong phần **Thư mục bị loại trừ**, chọn **Quản lý**.
4. Chọn các thư mục bạn muốn loại trừ từ danh sách gợi ý.
5. Thư mục được thêm vào danh sách bị loại trừ.
6. Chọn **Hoàn thành** khi xong.

> [!note] `publish: true` ghi đè thư mục bị loại trừ
> Nếu một tệp có `publish: true`, nó vẫn sẽ được xuất bản ngay cả khi nằm trong thư mục hoặc bộ lọc bị loại trừ. Điều này là vì `publish: true` cung cấp quyền kiểm soát cụ thể hơn.
