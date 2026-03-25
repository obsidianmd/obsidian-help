---
permalink: ribbon
publish: true
mobile: true
description: 'Tìm hiểu cách sử dụng ribbon, một khu vực dành cho các lệnh thường dùng trong Obsidian, và tùy chỉnh nó trên máy tính để bàn và thiết bị di động.'
---
Thanh công cụ đóng vai trò là nơi chứa các lệnh thường dùng trong Obsidian.

Trên máy tính, nó nằm ở [[Thanh bên#Mở thanh bên ẩn|Thanh bên trái]] và vẫn hiển thị ngay cả khi thanh bên trái đóng.

Trên di động, bạn có thể truy cập [[Ứng dụng di động#Các hành động trên thanh công cụ|Các hành động trên thanh công cụ]] bằng cách nhấn vào **Tùy chọn Menu** ![[lucide-menu.svg#icon]] ở góc dưới bên phải của ứng dụng khi bạn không đang chỉnh sửa ghi chú.

## Các hành động

Mỗi hành động được biểu diễn bằng một biểu tượng trên thanh công cụ. Di chuột qua các biểu tượng này sẽ hiển thị chú thích, trong khi chọn chúng sẽ kích hoạt hành động liên quan. Trên di động, bạn có thể nhấn vào các biểu tượng này để kích hoạt chúng.

1. Mở **[[Quản lý kho|Bộ chuyển kho]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Truy cập **trợ giúp** ![[lucide-help-circle.svg#icon]].
3. Mở **[[Cài đặt]]** ![[lucide-settings.svg#icon]].

Trong phiên bản di động, bạn có thể cấu hình một hành động truy cập nhanh trên thanh công cụ. Để biết thêm thông tin, xem [[#Di động|phần di động]] và [[Ứng dụng di động]].

## Tùy chỉnh thanh công cụ

Bố cục thanh công cụ tùy chỉnh của bạn được ghi nhớ qua các phiên làm việc. Nó đồng bộ hóa với các thiết bị khác và ứng dụng di động khi cài đặt ứng dụng (trong các tệp `workspace.json` và `workspace-mobile.json`) được đồng bộ hóa.

### Máy tính

Trên phiên bản máy tính, bạn có thể tùy chỉnh thanh công cụ như sau:

- Sắp xếp lại thứ tự các hành động trên thanh công cụ bằng cách kéo và thả các biểu tượng.
- Để ẩn các hành động cụ thể, nhấp chuột phải vào khoảng trống trong thanh công cụ và bỏ chọn các hành động bạn muốn ẩn.

#### Ẩn thanh công cụ

Bạn có thể ẩn thanh công cụ bằng hai cách:

- Nhấp chuột phải vào thanh công cụ và chọn **Ẩn thanh công cụ**.
- Mở **[[Cài đặt]]** → **Giao diện**, cuộn xuống **Nâng cao**, và vô hiệu hóa **Hiển thị Ribbon**.

#### Hiển thị thanh công cụ

Nếu bạn đã ẩn thanh công cụ và muốn hiển thị lại:

1. Mở **[[Cài đặt]]** → **Giao diện**.
2. Cuộn xuống **Nâng cao**.
3. Kích hoạt **Hiển thị Ribbon**.
4. Thanh công cụ sẽ xuất hiện lại ở phía bên trái của cửa sổ.

> [!tip] CSS tùy chỉnh
> Nếu bạn đang sử dụng chủ đề cộng đồng hoặc CSS tùy chỉnh, hãy đảm bảo nó không ẩn thanh công cụ thông qua các quy tắc kiểu tùy chỉnh.

### Di động

Trong phiên bản di động của Obsidian, bạn có thể thực hiện các hành động truy cập nhanh, sắp xếp lại các mục và tùy chỉnh menu thanh công cụ. Để truy cập các tùy chỉnh này, thực hiện các bước sau:

1. Mở **[[Cài đặt]]** của Obsidian ![[lucide-cog.svg#icon]].
2. Điều hướng đến phần **Giao diện**.
3. Cuộn xuống các tùy chọn **Nâng cao**.
4. Chọn nút **Quản lý** dưới mục **Cấu hình Ribbon**.

#### Truy cập nhanh

Theo mặc định, tùy chọn truy cập nhanh được đặt thành "Mở menu Ribbon" khi *nhấn ngắn*. Nếu bạn chọn tùy chọn khác làm truy cập nhanh:

- Tùy chọn đã chọn sẽ được kích hoạt khi *nhấn ngắn*.
- Truy cập menu thanh công cụ sẽ chuyển sang *nhấn giữ*.

> [!info] Các tùy chọn truy cập nhanh phụ thuộc vào cài đặt Obsidian và các plugin cốt lõi bạn đã kích hoạt.

#### Sắp xếp lại và hiển thị

Để thay đổi thứ tự các mục trong menu thanh công cụ, nhấn và giữ nút **kéo và thả** ![[lucide-menu.svg#icon]] và di chuyển mục đã chọn lên hoặc xuống.

Bạn có thể hiển thị hoặc ẩn các mục trong menu thanh công cụ bằng nút **xóa** màu đỏ ![[lucide-minus-circle.svg#icon]] hoặc nút **thêm** màu xanh ![[lucide-plus-circle.svg#icon]] để chuyển đổi hiển thị của chúng.

 ![[ribbon-rearrange-visibility.jpeg#interface]]
