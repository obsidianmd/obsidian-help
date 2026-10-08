---
permalink: pdf
publish: true
mobile: true
description: 'Tìm hiểu cách xem, tìm kiếm và liên kết đến các tệp PDF trong Obsidian, cũng như cách xuất ghi chú dưới dạng PDF.'
---
Obsidian mở tệp PDF trong trình xem tích hợp. Bạn cũng có thể nhúng PDF vào ghi chú, liên kết đến một đoạn trong đó và xuất bất kỳ ghi chú nào thành PDF. Để biết các loại tệp Obsidian hỗ trợ, xem [[Định dạng tệp được hỗ trợ]].

> [!info]+ Một số tính năng chỉ có trên máy tính
> Ứng dụng Obsidian trên di động không thể tìm kiếm bên trong PDF, sao chép trích dẫn hoặc liên kết đến phần được chọn, hoặc xuất ghi chú sang PDF.

## Mở PDF

Trong [[Trình quản lý tệp|Trình khám phá tệp]], chọn một PDF để mở nó trong một thẻ.

> [!info]+ Chú thích không được hỗ trợ
> Obsidian không hỗ trợ thêm chú thích hoặc tô sáng vào PDF. Để đánh dấu PDF, sử dụng ứng dụng khác rồi mở tệp đã cập nhật trong kho của bạn.

Trình xem có thanh công cụ với các điều khiển sau. Ứng dụng Obsidian trên di động có cùng thanh công cụ.

- **Chuyển đổi thanh bên** hiện hoặc ẩn thanh bên, và **Tùy chọn thanh bên** thay đổi nội dung hiển thị trên thanh bên.
- **Thu nhỏ** và **Phóng to** thay đổi kích thước trang.
- **Tùy chọn hiển thị** thay đổi cách bố trí trang.
- Ô trang hiển thị trang hiện tại. Nhập số trang để đến trang đó.

Để thao tác với bản thân tệp PDF, như đổi tên hoặc di chuyển, chọn **Tùy chọn khác** ![[lucide-more-horizontal.svg#icon]]. PDF có ít mục trong menu này hơn so với ghi chú. Xem [[Menu tùy chọn khác]].

## Điều hướng PDF

Chọn **Tùy chọn thanh bên**, sau đó chọn nội dung cần hiển thị.

- **Ảnh thu nhỏ** hiển thị bản xem trước nhỏ của mỗi trang.
- **Mục lục** hiển thị dàn ý của PDF, nếu có.
- **Hiển thị trang trong mục lục** tô sáng trang hiện tại trong mục lục.

Để liên kết đến một trang, nhấp chuột phải vào ảnh thu nhỏ của nó và chọn **Copy link to page N**, trong đó N là số trang. Dán liên kết vào ghi chú.

Để liên kết đến một phần, nhấp chuột phải vào mục trong mục lục và chọn **Copy link to "Title"**, trong đó Title là tên của mục. Trên di động, nhấn và giữ mục đó.

## Thay đổi giao diện PDF

Chọn **Tùy chọn hiển thị** để thay đổi bố cục.

- **Vừa chiều rộng** và **Vừa chiều cao** điều chỉnh kích thước trang phù hợp với trình xem.
- **Một trang** hiển thị mỗi lần một trang.
- **Hai trang (lẻ)** hiển thị các trang cạnh nhau, bắt đầu với trang lẻ ở bên trái. Ví dụ, trang 1 và 2 hiển thị cùng nhau, rồi trang 3 và 4.
- **Hai trang (chẵn)** hiển thị các trang cạnh nhau, bắt đầu với trang chẵn ở bên trái. Ví dụ, trang 1 hiển thị riêng, rồi trang 2 và 3 hiển thị cùng nhau.
- **Thích ứng với chủ đề** làm tối màu của PDF khi chủ đề Obsidian của bạn là tối.

## Tìm kiếm trong PDF

Tìm kiếm bên trong PDF chỉ khả dụng trên máy tính. Ứng dụng Obsidian trên di động không có tính năng tìm kiếm trong trình xem PDF.

1. Nhấn `Ctrl+F` (Windows và Linux) hoặc `Command+F` (macOS).
2. Trong **Nhập để bắt đầu tìm kiếm...**, nhập văn bản bạn muốn tìm.
3. Chọn mũi tên lên hoặc xuống để di chuyển giữa các kết quả.

Để thay đổi cách tìm kiếm hoạt động, sử dụng các tùy chọn sau.

- **Khớp chữ hoa/thường** khớp chính xác chữ hoa và chữ thường. Đó là nút **Aa** trong trường tìm kiếm.
- **Tô sáng hết** tô sáng mọi kết quả khớp. Chọn nút cài đặt bên cạnh các mũi tên để tìm tùy chọn này.
- **Phù hợp với dấu thanh** coi các chữ cái có dấu là chữ cái khác nhau. Tùy chọn này nằm trong cùng menu cài đặt.
- **Toàn bộ từ** chỉ tìm toàn bộ từ. Tùy chọn này nằm trong cùng menu cài đặt.

Chọn nút đóng để rời khỏi tìm kiếm.

## Sao chép văn bản từ PDF

Trên máy tính, chọn văn bản trong PDF, sau đó nhấp chuột phải.

- **Sao chép** sao chép văn bản.
- **Sao chép như trích dẫn** sao chép văn bản dưới dạng trích dẫn, kèm theo liên kết đến đoạn đó.
- **Sao chép liên kết đến phần được chọn** sao chép liên kết đến đoạn đó, để bạn có thể dán vào ghi chú.

Trích dẫn trông như thế này khi bạn dán vào ghi chú.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Liên kết đến phần được chọn chỉ có liên kết đó.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Trên di động, chọn văn bản trong PDF sẽ hiển thị menu văn bản tiêu chuẩn của thiết bị. **Sao chép như trích dẫn** và **Sao chép liên kết đến phần được chọn** không khả dụng.

## Nhúng PDF

Để hiển thị PDF bên trong ghi chú, xem cách [[Nhúng tệp#Nhúng PDF vào ghi chú|nhúng PDF vào ghi chú]]. PDF được nhúng có cùng thanh công cụ như trình xem. Chọn **Chỉnh sửa khối này** để thay đổi liên kết nhúng.

## Xuất ghi chú sang PDF

Bạn có thể xuất bất kỳ ghi chú nào thành PDF trên máy tính. Xuất sang PDF không khả dụng trong ứng dụng Obsidian trên di động.

1. Mở ghi chú bạn muốn xuất.
2. Mở [[Khay lệnh|Bảng lệnh]] và chọn **Xuất PDF**. Bạn cũng có thể chọn **Tùy chọn khác** ![[lucide-more-horizontal.svg#icon]] trong ghi chú, sau đó chọn **Xuất PDF**.
3. Chọn cài đặt của bạn.
    - **Bao gồm tên tệp làm tiêu đề** thêm tên tệp ở đầu PDF.
    - **Kích thước trang** đặt kích thước giấy. Bạn có thể chọn A3, A4, A5, Legal, Letter hoặc Tabloid.
    - **Ngang** xoay trang ngang.
    - **Lề** đặt lề trang thành **Mặc định**, **Tối thiểu** hoặc **Không**.
    - **Phần trăm thu nhỏ** điều chỉnh tỷ lệ nội dung trên mỗi trang. Ở mức 100, nội dung giữ nguyên kích thước đầy đủ. Giá trị thấp hơn làm cho văn bản và hình ảnh nhỏ hơn, nên nhiều nội dung vừa trên mỗi trang.
4. Chọn **Xuất ra PDF**.
5. Chọn nơi lưu tệp.

> [!tip]- Xuất ghi chú với chủ đề tối
> Xuất luôn sử dụng kiểu sáng, ngay cả khi chủ đề của bạn là tối. Để thay đổi giao diện khi xuất, bạn có thể sử dụng [[Mẩu CSS|đoạn trích CSS]]. Diễn đàn Obsidian có các ví dụ về đoạn trích cho in ấn và xuất.[^1]

[^1]: Xem [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) và [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).
