---
permalink: bases/views
---
Các chế độ xem cho phép bạn tổ chức thông tin trong một [[Giới thiệu về Cơ sở|Cơ sở]] theo nhiều cách khác nhau. Một cơ sở có thể chứa nhiều chế độ xem, và mỗi chế độ xem có thể có cấu hình riêng để hiển thị, sắp xếp và lọc tệp.

Ví dụ, bạn có thể muốn tạo một cơ sở có tên "Sách" với các chế độ xem riêng biệt cho "Danh sách đọc" và "Đọc xong gần đây".

## Thanh công cụ

Ở đầu cơ sở là một thanh công cụ cho phép bạn tương tác với các chế độ xem và kết quả của chúng.

- ![[lucide-table.svg#icon]] **Menu chế độ xem** — tạo, chỉnh sửa và chuyển đổi chế độ xem.
- **Kết quả** — giới hạn, sao chép và xuất tệp.
- ![[lucide-arrow-up-down.svg#icon]] **Sắp xếp** — sắp xếp tệp.
- ![[lucide-stretch-horizontal.svg#icon]] **Nhóm** — nhóm tệp và quản lý thứ tự và khả năng hiển thị nhóm.
- ![[lucide-list-filter.svg#icon]] **Bộ lọc** — lọc tệp.
- ![[lucide-list.svg#icon]] **Thuộc tính** — chọn thuộc tính để hiển thị và tạo [[Công thức|công thức]].
- ![[lucide-search.svg#icon]] **Tìm kiếm** — tìm kiếm mục bằng các thuộc tính hiển thị.
- ![[lucide-plus.svg#icon]] **Mới** — tạo tệp mới trong chế độ xem hiện tại.

Trên điện thoại, **Kết quả**, **Sắp xếp**, ![[lucide-stretch-horizontal.svg#icon]] **Nhóm**, và **Thuộc tính** nằm trong menu ![[lucide-sliders-horizontal.svg#icon]] **Hiển thị**.

## Thêm và chuyển đổi chế độ xem

Có hai cách để thêm chế độ xem vào cơ sở:

- Nhấp vào tên chế độ xem ở góc trên bên trái và chọn ![[lucide-plus.svg#icon]] **Thêm chế độ xem**.
- Sử dụng [[Khay lệnh|bảng lệnh]] và chọn **Bases: Add view**.

Chế độ xem đầu tiên trong danh sách sẽ được tải mặc định. Kéo các chế độ xem bằng biểu tượng của chúng để thay đổi thứ tự.

## Cài đặt chế độ xem

Mỗi chế độ xem có các tùy chọn cấu hình riêng. Để chỉnh sửa cài đặt chế độ xem:

1. Nhấp vào tên chế độ xem ở góc trên bên trái.
2. Nhấp vào mũi tên phải bên cạnh chế độ xem bạn muốn cấu hình.

Ngoài ra, *nhấp chuột phải* vào tên chế độ xem trong thanh công cụ của cơ sở để truy cập nhanh cài đặt chế độ xem.

## Bố cục

Các chế độ xem có thể được hiển thị với các bố cục khác nhau bao gồm ![[lucide-table.svg#icon]] **bảng**, ![[lucide-list.svg#icon]] **danh sách**, ![[lucide-layout-grid.svg#icon]] **thẻ**, ![[lucide-kanban-square.svg#icon]] **Kanban**, và ![[lucide-map.svg#icon]] **bản đồ**. Các bố cục bổ sung có thể được thêm bởi [[Phần mở rộng từ cộng đồng]].

| Bố cục                              | Mô tả                                                                                                             | Phiên bản ứng dụng |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------- |
| [[Chế độ xem bảng\|Bảng]]           | Hiển thị tệp dưới dạng hàng trong bảng. Các cột được điền từ [[Thuộc tính|thuộc tính]] trong ghi chú của bạn.     | 1.9                 |
| [[Chế độ xem thẻ\|Thẻ]]            | Hiển thị tệp dưới dạng lưới thẻ. Cho phép bạn tạo các chế độ xem dạng bộ sưu tập với hình ảnh.                   | 1.9                 |
| [[Chế độ xem danh sách\|Danh sách]] | Hiển thị tệp dưới dạng [[Cú pháp định dạng cơ bản#Danh sách\|danh sách]] với dấu đầu dòng hoặc đánh số.          | 1.10                |
| [[Chế độ xem Kanban\|Kanban]]       | Hiển thị tệp dưới dạng thẻ được tổ chức thành các cột dựa trên thuộc tính được nhóm.                             | 1.14                |
| [[Chế độ xem bản đồ\|Bản đồ]]      | Hiển thị tệp dưới dạng ghim trên bản đồ tương tác. Yêu cầu plugin Maps.                                          | 1.10                |


## Bộ lọc

Mở menu ![[lucide-list-filter.svg#icon]] **Bộ lọc** ở đầu cơ sở để thêm bộ lọc.

Một cơ sở không có bộ lọc sẽ hiển thị tất cả các tệp trong kho của bạn. Bộ lọc thu hẹp kết quả để chỉ hiển thị các tệp đáp ứng tiêu chí cụ thể. Ví dụ, bạn có thể sử dụng bộ lọc để chỉ hiển thị các tệp có [[Thẻ|thẻ]] cụ thể hoặc trong một thư mục cụ thể. Có nhiều loại bộ lọc khả dụng.

Bộ lọc có thể được áp dụng cho tất cả chế độ xem trong cơ sở, hoặc chỉ một chế độ xem duy nhất bằng cách chọn từ hai phần trong menu ![[lucide-list-filter.svg#icon]] **Bộ lọc**.

- **Tất cả chế độ xem** áp dụng bộ lọc cho tất cả chế độ xem trong cơ sở.
- **Chế độ xem này** áp dụng bộ lọc cho chế độ xem đang hoạt động.

#### Các thành phần của bộ lọc

Bộ lọc có ba thành phần:

1. **Thuộc tính** — cho phép bạn chọn một [[Thuộc tính|thuộc tính]] trong kho của bạn, bao gồm [[Cú pháp Cơ sở#Thuộc tính tệp|thuộc tính tệp]].
2. **Toán tử** — cho phép bạn chọn cách so sánh các điều kiện. Danh sách các toán tử khả dụng phụ thuộc vào loại thuộc tính (chữ, ngày, số, v.v.)
3. **Giá trị** — cho phép bạn chọn giá trị để so sánh. Giá trị có thể bao gồm toán học và [[Hàm|hàm]].

#### Liên từ

- **Tất cả điều sau đây đúng** là câu lệnh `and` — kết quả chỉ được hiển thị nếu *tất cả* điều kiện trong nhóm bộ lọc được đáp ứng.
- **Bất kỳ điều nào sau đây đúng** là câu lệnh `or` — kết quả được hiển thị nếu *bất kỳ* điều kiện nào trong nhóm bộ lọc được đáp ứng.
- **Không có điều nào sau đây đúng** là câu lệnh `not` — kết quả sẽ không được hiển thị nếu *bất kỳ* điều kiện nào trong nhóm bộ lọc được đáp ứng.

#### Nhóm bộ lọc

Nhóm bộ lọc cho phép bạn tạo logic phức tạp hơn bằng cách tạo các tổ hợp liên từ.

#### Trình chỉnh sửa bộ lọc nâng cao

Nhấp vào nút mã ![[lucide-code-xml.svg#icon]] để sử dụng trình chỉnh sửa **bộ lọc nâng cao**. Điều này hiển thị [[Cú pháp Cơ sở|cú pháp]] thô của bộ lọc, và có thể được sử dụng với các [[Hàm|hàm]] phức tạp hơn mà không thể hiển thị bằng giao diện nhấp chuột.

## Sắp xếp và nhóm kết quả

Sử dụng menu ![[lucide-arrow-up-down.svg#icon]] **Sắp xếp** để sắp xếp kết quả, và menu ![[lucide-stretch-horizontal.svg#icon]] **Nhóm** để tổ chức các mục tương tự thành các phần.

Bạn có thể sắp xếp kết quả theo một hoặc nhiều thuộc tính theo thứ tự tăng dần hoặc giảm dần. Điều này giúp dễ dàng liệt kê ghi chú theo tên, thời gian chỉnh sửa cuối cùng, hoặc bất kỳ thuộc tính nào khác — bao gồm cả công thức.

Mỗi chế độ xem có thể có nhiều sắp xếp, nhưng chỉ có thể nhóm kết quả theo một thuộc tính.

### Thêm sắp xếp

1. Mở menu ![[lucide-arrow-up-down.svg#icon]] **Sắp xếp** ở đầu chế độ xem.
2. Chọn **Thêm sắp xếp**, sau đó chọn thuộc tính bạn muốn sắp xếp theo.
3. Nếu bạn có nhiều sắp xếp, kéo chúng lên hoặc xuống bằng tay nắm ![[lucide-grip-vertical.svg#icon]] để thay đổi mức ưu tiên.

Các tùy chọn sắp xếp kết quả phụ thuộc vào loại thuộc tính:

- **Chữ**: sắp xếp *theo bảng chữ cái* (A→Z) hoặc *ngược bảng chữ cái* (Z→A).
- **Số**: sắp xếp từ *nhỏ nhất đến lớn nhất* (0→1) hoặc *lớn nhất đến nhỏ nhất* (1→0).
- **Ngày và giờ**: sắp xếp *cũ đến mới*, hoặc *mới đến cũ*.

### Xóa sắp xếp

1. Mở menu ![[lucide-arrow-up-down.svg#icon]] **Sắp xếp** ở đầu chế độ xem.
2. Chọn nút thùng rác ![[lucide-trash-2.svg#icon]] bên cạnh sắp xếp bạn muốn xóa.

### Nhóm kết quả

1. Mở menu ![[lucide-stretch-horizontal.svg#icon]] **Nhóm** ở đầu chế độ xem. Trên điện thoại, mở **Hiển thị → Nhóm**.
2. Trong **Nhóm theo**, chọn một thuộc tính.
3. Chọn thứ tự sắp xếp tự động, hoặc chọn **Thủ công** để tự sắp xếp thứ tự các nhóm.

Để ngừng nhóm kết quả, chọn nút thùng rác ![[lucide-trash-2.svg#icon]] bên cạnh thuộc tính nhóm.

### Sắp xếp lại, ẩn và thêm nhóm

Trong menu ![[lucide-stretch-horizontal.svg#icon]] **Nhóm**, chọn **Thủ công** từ menu thứ tự sắp xếp để quản lý các nhóm xuất hiện và thứ tự của chúng.

- Đánh dấu một nhóm để hiển thị, hoặc bỏ đánh dấu để ẩn. Chọn **Hiển thị tất cả** hoặc **Ẩn tất cả** để thay đổi khả năng hiển thị của tất cả các nhóm.
- Kéo tay nắm ![[lucide-grip-vertical.svg#icon]] bên cạnh nhóm để thay đổi vị trí của nó.
- Chọn **Thêm nhóm** và nhập giá trị để hiển thị một nhóm mới, trống. Điều này không tạo ghi chú hoặc thay đổi ghi chú hiện có.

Để khôi phục thứ tự nhóm tự động và hiển thị tất cả các nhóm, chọn thứ tự sắp xếp tự động thay vì **Thủ công**.

### Thu gọn nhóm

Trong bố cục [[Chế độ xem bảng|bảng]], [[Chế độ xem thẻ|thẻ]], và [[Chế độ xem danh sách|danh sách]], chọn tiêu đề nhóm để thu gọn hoặc mở rộng nhóm đó. Thu gọn nhóm tạm thời ẩn các mục của nó mà không thay đổi thuộc tính của chúng.

## Giới hạn, sao chép và xuất kết quả

### Giới hạn kết quả

Menu *kết quả* hiển thị số lượng kết quả trong chế độ xem. Nhấp vào nút kết quả để giới hạn số lượng kết quả và truy cập các hành động bổ sung.

### Sao chép vào clipboard

Hành động này sao chép chế độ xem vào bảng tạm của bạn. Sau khi có trong bảng tạm, bạn có thể dán vào tệp Markdown, hoặc vào các ứng dụng tài liệu khác bao gồm bảng tính như Google Sheets, Excel và Numbers.

### Xuất CSV

Hành động này lưu một tệp CSV của chế độ xem hiện tại.

## Nhúng chế độ xem

Bạn có thể nhúng các tệp cơ sở vào [[Nhúng tệp|bất kỳ tệp nào khác]] bằng cú pháp `![[File.base]]`. Chế độ xem đầu tiên trong danh sách sẽ được sử dụng. Bạn có thể thay đổi thứ tự bằng cách kéo các chế độ xem trong menu chế độ xem.

Để chỉ định chế độ xem mặc định cho nhúng, sử dụng `![[File.base#View]]`.
