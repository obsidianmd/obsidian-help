---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: You've purchased Obsidian Sync and are ready to get started. This guide will help you set up and adjust your Obsidian Sync settings for daily use.
---
Bạn đã mua Obsidian Sync và sẵn sàng bắt đầu. Hướng dẫn này sẽ giúp bạn thiết lập và điều chỉnh cài đặt Obsidian Sync cho việc sử dụng hàng ngày.

- **Mới sử dụng Obsidian Sync?** Xem: [[#Thiết lập Obsidian Sync lần đầu tiên]]
- **Kết nối thiết bị thứ hai?** Xem: [[#Đồng bộ kho từ xa trên thiết bị khác]]
- **Cần thay đổi?** Xem: [[#Quản lý kho từ xa của bạn]]

## Thiết lập Obsidian Sync lần đầu tiên

Trong phần này, bạn sẽ tạo một [[Kho lưu trữ cục bộ và từ xa|kho từ xa]] mới và kết nối nó với một kho cục bộ hiện có. Bạn không cần tạo một kho cục bộ mới, trống để sử dụng Obsidian Sync cho mục đích này.

> [!info] Kho hiện tại của bạn có nằm trong thư mục iCloud, OneDrive, Dropbox, hoặc dịch vụ đồng bộ khác không? Nếu **có**, hoặc bạn **không chắc chắn**, vui lòng đọc [[Câu hỏi thường gặp#Tôi có thể sử dụng đồng bộ bên thứ ba cùng với Obsidian Sync không?|phần này]] và [[Chuyển sang Obsidian Sync]] trước khi tiếp tục.

**Điều kiện tiên quyết**

- Một tài khoản Obsidian. Nếu bạn chưa có, [đăng ký ngay](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Một [[Gói và giới hạn lưu trữ|gói đăng ký]] Obsidian Sync đang hoạt động. Nếu bạn chưa có, đăng ký từ [bảng điều khiển tài khoản của bạn](https://obsidian.md/account/sync).
- **Được đề xuất**: Một [[Sao lưu tệp Obsidian của bạn|hệ thống sao lưu]] cho các tệp Obsidian của bạn. Dịch vụ đồng bộ không phải là bản sao lưu.

### Đăng nhập bằng tài khoản Obsidian của bạn

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, chọn **Chung**.
3. Dưới **Tài khoản → Tài khoản của bạn**, chọn **Đăng nhập**.
4. Trong **Email**, nhập email của bạn.
5. Trong **Mật khẩu**, nhập mật khẩu của bạn.
6. Chọn **Đăng nhập**.

### Kích hoạt Obsidian Sync

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên dưới **Tùy chọn**, chọn **Plugin cốt lõi**.
3. Bật **Sync**.

### Tạo kho từ xa mới

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, chọn **Sync**.
3. Bên cạnh **Kho từ xa**, chọn **Chọn**.
4. Chọn **Tạo kho mới**.
5. Trong **Tên kho**, nhập tên của kho từ xa.
6. Trong **Khu vực**, chọn [[Thiết lập Obsidian Sync#Máy chủ đồng bộ khu vực|khu vực]] máy chủ cho kho từ xa của bạn.
7. Trong **Mật khẩu mã hóa**, chọn mật khẩu cho kho của bạn. Điều này tạo một kho được mã hóa đầu cuối. Mật khẩu kho tách biệt với tài khoản Obsidian của bạn và có thể khác nhau cho mỗi kho. Để biết thêm thông tin, tham khảo [[Bảo mật và quyền riêng tư]].
8. Chọn **Tạo mới**.

### Kết nối với kho từ xa

1. Chọn **Kết nối** bên cạnh kho vừa tạo.
2. Nhập mật khẩu bạn đã cấu hình cho kho trong trường **Mật khẩu mã hóa** nếu bạn đã chọn [[Obsidian Sync/Bảo mật và quyền riêng tư#Mã hóa đầu cuối có nghĩa là gì?|mã hóa đầu cuối]].
3. Chọn **Mở khóa hòm lưu trữ**.
4. **Chưa bắt đầu đồng bộ ngay.** Kiểm tra cài đặt đồng bộ trong [[#Điều chỉnh cài đặt Obsidian Sync|điều chỉnh cài đặt Obsidian Sync]].
    - Nếu bạn muốn bắt đầu đồng bộ ngay lập tức, chuyển sang [[#Bắt đầu đồng bộ với Obsidian Sync|bắt đầu đồng bộ với Obsidian Sync]].
5. Nếu bạn chưa làm, đóng hoặc bỏ qua cửa sổ bật lên yêu cầu bạn **Loại trừ thư mục** và **Bắt đầu đồng bộ hóa**. Tiến hành bước tiếp theo.

#### Điều chỉnh cài đặt Obsidian Sync

1. Điều hướng đến **[[Cài đặt]]** → **Sync** nếu cần.
2. Nếu chưa thêm tên thiết bị, hãy thêm một tên để việc đọc nhật ký Sync dễ dàng hơn!
3. Bật/tắt các cài đặt dưới **Đồng bộ hóa chọn lọc** và **Đồng bộ hóa cấu hình hòm lưu trữ** để chỉ định các mục nào cần được đồng bộ đến và từ kho từ xa.
    - **Lưu ý**: Nếu bạn gần đây đã ngắt kết nối khỏi kho từ xa và đang kết nối lại mà không khởi động lại ứng dụng, một số cài đặt có thể đã được bật sẵn.
4. Nếu bạn thay đổi bất kỳ cài đặt nào, hãy khởi động lại Obsidian hoàn toàn.
5. Sau khi Obsidian được khởi động lại, quay lại **[[Cài đặt]]** → **Sync**.

#### Bắt đầu đồng bộ với Obsidian Sync

Nếu bạn bắt đầu đồng bộ sau khi kết nối với kho từ xa, bạn sẽ thấy nút **Bắt đầu đồng bộ hóa**. Chọn nút này để bắt đầu đồng bộ.

Nếu bạn bắt đầu đồng bộ sau khi điều chỉnh cài đặt Obsidian Sync và khởi động lại ứng dụng, bạn sẽ thấy nút **Tiếp tục** trong cài đặt Sync. Chọn nút này để bắt đầu đồng bộ.

> [!done] Trạng thái đồng bộ
> Khi Obsidian Sync hoàn tất, một vòng tròn xanh lá với dấu kiểm ![[obsidian-icon-sync-synced.svg#icon]] xuất hiện ở góc dưới bên phải (máy tính) hoặc trong thanh bên phải (di động). Nhật ký Sync cũng sẽ hiển thị "Đã đồng bộ hoàn toàn" là một trong những thông báo gần nhất.
>
> Để biết thêm chi tiết về trạng thái đồng bộ, tham khảo [[Biểu tượng và thông báo trạng thái]].
^obsidian-sync-status

Để kết nối các thiết bị khác với kho từ xa vừa tạo và đồng bộ, chuyển sang [[Thiết lập Obsidian Sync#Đồng bộ kho từ xa trên thiết bị khác|Đồng bộ kho từ xa trên thiết bị khác]].

Để tìm hiểu thêm về cài đặt và tệp, chuyển sang [[Cài đặt đồng bộ và đồng bộ hóa chọn lọc]].

## Đồng bộ kho từ xa trên thiết bị khác

Trong phần này, bạn đã tạo kho từ xa và tải dữ liệu lên đó. Bây giờ, bạn muốn kết nối các thiết bị khác với nó.

**Điều kiện tiên quyết**
- Một tài khoản Obsidian. Nếu bạn chưa có, [đăng ký ngay](https://obsidian.md/account#mode=signup).
- Một gói đăng ký Obsidian Sync đang hoạt động. Nếu bạn chưa có, đăng ký từ [bảng điều khiển tài khoản](https://obsidian.md/account).
- Sync đã được kích hoạt trong cài đặt [[Plugin cốt lõi]].
- Một kho từ xa đang hoạt động. Nếu bạn chưa tạo, vui lòng tạo [[Thiết lập Obsidian Sync#Tạo kho từ xa mới|kho từ xa]] trước.
- **Được đề xuất**: Một [[Sao lưu tệp Obsidian của bạn|hệ thống sao lưu]] cho các tệp Obsidian trên thiết bị bạn sử dụng nhiều nhất. Dịch vụ đồng bộ không phải là bản sao lưu.

### Đồng bộ kho từ trình chuyển đổi kho

Nếu bạn vừa cài đặt Obsidian, khi mở chương trình bạn sẽ được hiển thị [[Quản lý kho|Trình chuyển đổi kho]]. Để tạo kho cục bộ mới từ nội dung của kho từ xa, bạn sẽ muốn thực hiện các bước sau.

1. Mở Obsidian (giả sử đây là lần đầu tiên bạn mở)
2. Chọn một trong các tùy chọn tùy thuộc vào cài đặt của bạn:
	1. **Máy tính**: Trong phần Kết nối với Obsidian Sync, chọn **Thiết lập**
	2. **Di động/Máy tính bảng**: **Thiết lập Obsidian Sync**
3. Đăng nhập bằng tài khoản người dùng Obsidian
	1. Nếu [[Xác thực 2 yếu tố|2FA]] đã được thiết lập, nhập mã 2FA của bạn.
4. Bạn sẽ được yêu cầu chọn kho từ xa nào bạn muốn đồng bộ với thiết bị này. Chọn **Kết nối**.
5. Bạn sẽ được yêu cầu chọn tên cho kho cục bộ sẽ được tạo trên thiết bị để lưu trữ dữ liệu này. Nhập tên bạn muốn.
	1. Nếu bạn sử dụng [[Obsidian URI]], bạn sẽ muốn sử dụng cùng tên với kho cục bộ trên thiết bị khác của bạn.
6. Chọn **Tạo mới**.
7. Cửa sổ kho từ xa sẽ xuất hiện thoáng qua khi Obsidian Sync kết nối với máy chủ và xác thực gói đăng ký. Sau đó nó sẽ hiển thị cửa sổ *Thiết lập kết nối*.
	1. Rất khuyến khích bạn đóng hoặc vuốt xuống từ cửa sổ này, và [[#Điều chỉnh cài đặt Obsidian Sync|điều chỉnh cài đặt Obsidian Sync]] trước.
	2. Nếu bạn thay đổi bất kỳ Cài đặt Sync nào, vui lòng tải lại hoặc khởi động lại Obsidian.

### Đồng bộ kho từ Cài đặt Obsidian

Nếu bạn đã tạo kho cục bộ trên thiết bị này, và bạn muốn kết nối kho cục bộ này với kho từ xa, các hướng dẫn rất giống với [[#Thiết lập Obsidian Sync lần đầu tiên]].

![[Thiết lập Obsidian Sync#Đăng nhập bằng tài khoản Obsidian của bạn]]

![[Thiết lập Obsidian Sync#Kích hoạt Obsidian Sync]]

#### Kết nối với kho từ xa

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, chọn **Sync**.
3. Bên cạnh **Chọn kho từ xa**, nhấn **Chọn**.
4. Nhấn **Kết nối** bên cạnh kho từ xa bạn muốn kết nối.
5. Trong **Mật khẩu mã hóa**, nhập mật khẩu cho kho của bạn, nếu có.
6. Bạn sẽ được yêu cầu bắt đầu đồng bộ. Khuyến nghị đợi và điều chỉnh cài đặt đồng bộ trước. Nếu bạn muốn đồng bộ toàn bộ kho đến thiết bị ngay, bạn có thể **Bắt đầu đồng bộ hóa**.

> [!warning] Nếu kho trên thiết bị của bạn đã chứa một số ghi chú (không khuyến nghị), bạn sẽ được cảnh báo rằng các ghi chú đó sẽ được hợp nhất trước khi tiếp tục. Xung đột sẽ được giải quyết thông qua [[Khắc phục sự cố Obsidian Sync#Giải quyết xung đột|giải quyết xung đột của Sync]].

![[Thiết lập Obsidian Sync#Điều chỉnh cài đặt Obsidian Sync]]

![[Thiết lập Obsidian Sync#Bắt đầu đồng bộ với Obsidian Sync]]

## Quản lý kho từ xa của bạn

Bạn đã tạo và kết nối với kho từ xa. Bạn cũng có thể đã đồng bộ kho từ xa này với nhiều thiết bị. Phần này đề cập đến một số hướng dẫn phổ biến khác bạn có thể cần trong việc quản lý kho từ xa này.

### Ngắt kết nối khỏi kho từ xa

1. Mở **[[Cài đặt]]** của Obsidian.
2. Chọn **Sync** trong thanh bên.
3. Nhấn nút **Ngắt kết nối** bên cạnh Kho từ xa.

Bạn đã ngắt kết nối khỏi kho từ xa và không còn đồng bộ trên thiết bị này nữa.

### Xóa kho từ xa

> [!tip] Xóa kho từ xa sẽ không xóa dữ liệu cục bộ trên thiết bị của bạn.

1. Mở **[[Cài đặt]]**.
2. Trong thanh bên, chọn **Sync**.
3. Chọn **Quản lý** bên cạnh Kho từ xa. Một cửa sổ sẽ mở với danh sách các kho từ xa của bạn.
4. Chọn biểu tượng thùng rác ![[lucide-trash-2.svg#icon]] bên cạnh kho từ xa bạn muốn xóa.
5. Xác nhận xóa bằng cách chọn nút **Xóa** màu đỏ.
6. Kho từ xa của bạn đã bị xóa.

> [!info] Nếu không thấy biểu tượng thùng rác, bạn có thể cần ngắt kết nối khỏi kho từ xa trước. Sau khi ngắt kết nối, chọn nút **Chọn** để mở danh sách các kho từ xa.

### Máy chủ đồng bộ khu vực

Obsidian Sync cho phép bạn chọn vị trí lưu trữ cho kho từ xa của bạn. Nếu bạn đang sử dụng phiên bản `1.4.16` hoặc cũ hơn của Obsidian, vị trí sẽ được tự động chọn cho bạn.

Nếu bạn không chắc khu vực của kho hiện tại, hãy xem [[Obsidian Sync/Bảo mật và quyền riêng tư#Tôi có thể tìm máy chủ Sync hiện tại ở đâu và nó được lưu trữ tại đâu?|Tôi có thể tìm máy chủ Sync hiện tại ở đâu và nó được lưu trữ ở đâu?]] để được hướng dẫn.

![[sync-regional-sync-servers.png#interface|300]]

Sau khi chọn vị trí, trung tâm dữ liệu của bạn **không thể** được chuyển sang máy chủ khác mà không cần tải lại dữ liệu. Để thay đổi khu vực, hãy làm theo [[Khu vực Sync|hướng dẫn khu vực Sync của kho]].

![[Obsidian Sync/Bảo mật và quyền riêng tư#^sync-geo-regions]]

## Bước tiếp theo

Dưới đây là một số tài liệu được đề xuất để đọc tiếp.

- Khám phá thêm về [[Cài đặt đồng bộ và đồng bộ hóa chọn lọc|chọn tệp và cài đặt để đồng bộ]].
- Tìm hiểu điều gì xảy ra nếu kho từ xa của bạn [[Lịch sử phiên bản|đầy dung lượng]].
- [[Cộng tác trên kho lưu trữ được chia sẻ]] với người dùng Obsidian Sync khác.
- Xem [[Câu hỏi thường gặp|Câu hỏi thường gặp về Sync]] để tìm câu trả lời cho các câu hỏi phổ biến.
