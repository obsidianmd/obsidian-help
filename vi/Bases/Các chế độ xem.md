---
permalink: bases/views
---
Các chế độ xem cho phép bạn tổ chức thông tin trong một [[Giới thiệu về Cơ sở|Cơ sở]] theo nhiều cách khác nhau. Một cơ sở có thể chứa nhiều chế độ xem, và mỗi chế độ xem có thể có cấu hình riêng để hiển thị, sắp xếp và lọc tệp.

Ví dụ, bạn có thể muốn tạo một cơ sở có tên "Sách" với các chế độ xem riêng biệt cho "Danh sách đọc" và "Đọc xong gần đây".

## Thanh công cụ

Ở đầu cơ sở là một thanh công cụ cho phép bạn tương tác với các chế độ xem và kết quả của chúng.

- ![[lucide-table.svg#icon]] **Menu chế độ xem** — tạo, chỉnh sửa và chuyển đổi chế độ xem.
- **Kết quả** — giới hạn, sao chép và xuất tệp.
- ![[lucide-arrow-up-down.svg#icon]] **Sắp xếp** — sắp xếp và nhóm tệp.
- ![[lucide-list-filter.svg#icon]] **Bộ lọc** — lọc tệp.
- ![[lucide-list.svg#icon]] **Thuộc tính** — chọn thuộc tính để hiển thị và tạo [[Công thức|công thức]].
- ![[lucide-search.svg#icon]] **Tìm kiếm** — tìm kiếm mục bằng các thuộc tính hiển thị.
- ![[lucide-plus.svg#icon]] **Mới** — tạo tệp mới trong chế độ xem hiện tại.

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

Các chế độ xem có thể được hiển thị với các bố cục khác nhau bao gồm ![[lucide-table.svg#icon]] **bảng**, ![[lucide-list.svg#icon]] **danh sách**, ![[lucide-layout-grid.svg#icon]] **thẻ**, và ![[lucide-map.svg#icon]] **bản đồ**. Các bố cục bổ sung có thể được thêm bởi [[Phần mở rộng từ cộng đồng]]. Một số bố cục vẫn đang được phát triển và yêu cầu [[Phiên bản truy cập sớm|phiên bản truy cập sớm]] của Obsidian.

| Bố cục                              | Mô tả                                                                                                             | Phiên bản ứng dụng |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------- |
| [[Chế độ xem bảng\|Bảng]]           | Hiển thị tệp dưới dạng hàng trong bảng. Các cột được điền từ [[Thuộc tính|thuộc tính]] trong ghi chú của bạn.     | 1.9                 |
| [[Chế độ xem thẻ\|Thẻ]]            | Hiển thị tệp dưới dạng lưới thẻ. Cho phép bạn tạo các chế độ xem dạng bộ sưu tập với hình ảnh.                   | 1.9                 |
| [[Chế độ xem danh sách\|Danh sách]] | Hiển thị tệp dưới dạng [[Cú pháp định dạng cơ bản#Danh sách\|danh sách]] với dấu đầu dòng hoặc đánh số.          | 1.10                |
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

Mở menu ![[lucide-arrow-up-down.svg#icon]] **Sắp xếp** để sắp xếp và nhóm kết quả trong chế độ xem.

Bạn có thể sắp xếp kết quả theo một hoặc nhiều thuộc tính theo thứ tự tăng dần hoặc giảm dần. Điều này giúp dễ dàng liệt kê ghi chú theo tên, thời gian chỉnh sửa cuối cùng, hoặc bất kỳ thuộc tính nào khác — bao gồm cả công thức.

Bạn cũng có thể nhóm kết quả theo một thuộc tính để tổ chức các mục tương tự thành các phần riêng biệt trực quan. Hiện tại, Obsidian hỗ trợ nhóm theo chỉ một thuộc tính.

### Thêm sắp xếp

1. Mở menu ![[lucide-arrow-up-down.svg#icon]] **Sắp xếp** ở đầu chế độ xem.
2. Chọn thuộc tính bạn muốn sắp xếp (hoặc nhóm) theo.
3. Nếu bạn có nhiều sắp xếp, kéo chúng lên hoặc xuống bằng tay nắm ![[lucide-grip-vertical.svg#icon]] để thay đổi mức ưu tiên.

Các tùy chọn sắp xếp kết quả phụ thuộc vào loại thuộc tính:

- **Chữ**: sắp xếp *theo bảng chữ cái* (A→Z) hoặc *ngược bảng chữ cái* (Z→A).
- **Số**: sắp xếp từ *nhỏ nhất đến lớn nhất* (0→1) hoặc *lớn nhất đến nhỏ nhất* (1→0).
- **Ngày và giờ**: sắp xếp *cũ đến mới*, hoặc *mới đến cũ*.

### Xóa sắp xếp

1. Mở menu ![[lucide-arrow-up-down.svg#icon]] **Sắp xếp** ở đầu chế độ xem.
2. Nhấp vào nút thùng rác ![[lucide-trash-2.svg#icon]] bên cạnh sắp xếp hoặc nhóm bạn muốn xóa.

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
