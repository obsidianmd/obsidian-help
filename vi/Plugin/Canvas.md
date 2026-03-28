---
permalink: plugins/canvas
---
Canvas là một [[Plugin cốt lõi|plugin cốt lõi]] dành cho việc ghi chú trực quan. Nó cung cấp cho bạn không gian vô hạn để sắp xếp các ghi chú và kết nối chúng với các ghi chú khác, tệp đính kèm và trang web.

Ghi chú trực quan giúp bạn hiểu rõ hơn các ghi chú của mình bằng cách tổ chức chúng trong không gian 2D. Kết nối các ghi chú bằng các đường nối và nhóm các ghi chú liên quan lại với nhau để hiểu rõ hơn mối quan hệ giữa chúng.

Dữ liệu Canvas bạn tạo trong Obsidian được lưu dưới dạng tệp `.canvas` sử dụng định dạng tệp mở [JSON Canvas](https://jsoncanvas.org/).

## Tạo một canvas mới

Để bắt đầu sử dụng Canvas, trước tiên bạn cần tạo một tệp để chứa canvas của mình. Bạn có thể tạo canvas mới bằng các phương pháp sau.

**Bảng lệnh:**

1. Mở [[Khay lệnh]].
2. Chọn **Canvas: Tạo bảng mới** để tạo canvas trong cùng thư mục với tệp đang hoạt động.

**Trình khám phá tệp:**

- Trong [[Trình quản lý tệp]], nhấp chuột phải vào thư mục bạn muốn tạo canvas.
- Chọn **Bảng mới**.

**Thanh công cụ:**

- Trong thanh công cụ dọc, chọn **Tạo bảng mới** ![[lucide-layout-dashboard.svg#icon]] để tạo canvas trong cùng thư mục với tệp đang hoạt động.

> [!note] Extension tệp .canvas
> Obsidian lưu trữ dữ liệu canvas của bạn dưới dạng tệp `.canvas` sử dụng định dạng tệp mở có tên [JSON Canvas](https://jsoncanvas.org/).

## Thêm thẻ

Bạn có thể kéo tệp vào canvas từ Obsidian hoặc từ các ứng dụng khác. Ví dụ: tệp Markdown, hình ảnh, âm thanh, PDF, hoặc thậm chí các loại tệp không được nhận dạng.

### Thêm thẻ văn bản

Bạn có thể thêm các thẻ chỉ chứa văn bản mà không tham chiếu đến tệp nào. Bạn có thể sử dụng Markdown, liên kết và khối mã giống như trong một ghi chú.

Để thêm thẻ văn bản mới vào canvas:

- Chọn hoặc kéo biểu tượng tệp trống ở phía dưới canvas.

Bạn cũng có thể thêm thẻ văn bản bằng cách nhấp đúp vào canvas.

Để chuyển đổi thẻ văn bản thành tệp:

1. Nhấp chuột phải vào thẻ văn bản và chọn **Chuyển đổi thành tập tin...**.
2. Nhập tên ghi chú và chọn **Lưu**.

> [!note] Ghi chú
> Các thẻ chỉ chứa văn bản không xuất hiện trong [[Liên kết đến]]. Để chúng xuất hiện, bạn cần chuyển đổi chúng thành tệp.

### Thêm thẻ từ ghi chú

Để thêm ghi chú từ kho của bạn vào canvas:

1. Chọn hoặc kéo biểu tượng tài liệu ở phía dưới canvas.
2. Chọn ghi chú bạn muốn thêm.

Bạn cũng có thể thêm ghi chú từ menu ngữ cảnh canvas:

1. Nhấp chuột phải vào canvas và chọn **Thêm ghi chú từ kho lưu trữ**.
2. Chọn ghi chú bạn muốn thêm.

Hoặc, bạn có thể thêm chúng vào canvas bằng cách kéo tệp từ [[Trình quản lý tệp]].

### Thêm thẻ từ phương tiện

Để thêm phương tiện từ kho của bạn vào canvas:

1. Chọn hoặc kéo biểu tượng tệp hình ảnh ở phía dưới canvas.
2. Chọn tệp phương tiện bạn muốn thêm.

Bạn cũng có thể thêm phương tiện từ menu ngữ cảnh canvas:

1. Nhấp chuột phải vào canvas và chọn **Thêm phương tiện từ kho lưu trữ**.
2. Chọn tệp phương tiện bạn muốn thêm.

Hoặc, bạn có thể thêm chúng vào canvas bằng cách kéo tệp từ [[Trình quản lý tệp]].

### Thêm thẻ từ trang web

Để nhúng trang web vào canvas:

1. Nhấp chuột phải vào canvas và chọn **Thêm trang web**.
2. Nhập URL của trang web và chọn **Lưu**.

Bạn cũng có thể chọn URL trong trình duyệt rồi kéo vào canvas để nhúng nó vào một thẻ.

Để mở trang web trong trình duyệt, nhấn `Ctrl` (hoặc `Cmd` trên macOS) và chọn nhãn thẻ. Hoặc, nhấp chuột phải vào thẻ và chọn **Mở trong trình duyệt**.

### Thêm thẻ từ thư mục

Kéo một thư mục từ trình khám phá tệp để thêm tất cả các tệp trong thư mục đó vào canvas.

### Chỉnh sửa thẻ

Nhấp đúp vào thẻ văn bản hoặc thẻ ghi chú để bắt đầu chỉnh sửa. Nhấp ra ngoài thẻ để dừng chỉnh sửa. Bạn cũng có thể nhấn `Escape` để dừng chỉnh sửa thẻ.

Bạn cũng có thể chỉnh sửa thẻ bằng cách nhấp chuột phải vào nó và chọn **Chỉnh sửa**.

### Xóa thẻ

Xóa các thẻ đã chọn bằng cách nhấp chuột phải vào bất kỳ thẻ nào trong số đó, rồi chọn **Xóa**. Hoặc, nhấn `Backspace` (hoặc `Delete` trên macOS).

Bạn cũng có thể chọn **Xóa** ![[lucide-trash-2.svg#icon]] trong các điều khiển lựa chọn phía trên phần đã chọn.

### Hoán đổi thẻ

Bạn có thể hoán đổi thẻ ghi chú hoặc thẻ phương tiện với thẻ khác cùng loại.

Để hoán đổi thẻ ghi chú:

1. Nhấp chuột phải vào thẻ bạn muốn thay thế.
2. Chọn **Hoán đổi tệp**.
3. Chọn ghi chú bạn muốn thay thế.

## Chọn thẻ

Chọn thẻ trong canvas bằng cách nhấp vào chúng. Bạn có thể chọn nhiều thẻ bằng cách kéo vùng chọn xung quanh chúng.

Bạn cũng có thể thêm và xóa thẻ khỏi vùng chọn hiện tại bằng cách nhấn `Shift` và chọn chúng.

Nhấn `Ctrl+a` (hoặc `Cmd+a` trên macOS) để chọn tất cả thẻ trong canvas.

Để cuộn nội dung của thẻ, trước tiên bạn cần chọn nó.

### Sắp xếp thẻ

Kéo thẻ đã chọn để di chuyển nó.

Nhấn `Alt` (hoặc `Option` trên macOS) và kéo để nhân bản vùng chọn.

Bạn có thể nhấn `Shift` trong khi kéo để chỉ di chuyển theo một hướng.

Nhấn `Space` trong khi di chuyển vùng chọn để tắt tính năng bắt dính.

Chọn một thẻ sẽ đưa nó lên phía trước.

### Thay đổi kích thước thẻ

Kéo bất kỳ cạnh nào của thẻ để thay đổi kích thước.

Bạn có thể nhấn `Space` trong khi thay đổi kích thước để tắt tính năng bắt dính.

Để duy trì tỷ lệ khung hình khi thay đổi kích thước, nhấn `Shift` trong khi thay đổi kích thước.

## Kết nối thẻ

Vẽ các đường nối giữa các thẻ để tạo mối quan hệ giữa chúng. Sử dụng màu sắc và nhãn để mô tả cách chúng liên quan với nhau.

### Kết nối hai thẻ

Để kết nối hai thẻ bằng đường có hướng:

1. Di chuột qua một trong các cạnh của thẻ cho đến khi bạn thấy một vòng tròn đặc.
2. Kéo vòng tròn đến cạnh của thẻ khác để kết nối chúng.

> [!tip] Mẹo
> Nếu bạn kéo đường nối mà không kết nối nó với thẻ khác, sau đó bạn có thể thêm thẻ mà bạn muốn kết nối.

### Ngắt kết nối hai thẻ

Để xóa kết nối giữa hai thẻ:

1. Di chuột qua đường kết nối cho đến khi hai vòng tròn nhỏ xuất hiện trên đường.
2. Kéo một trong các vòng tròn ra khỏi thẻ mà không kết nối với thẻ khác.

Bạn cũng có thể ngắt kết nối hai thẻ bằng cách nhấp chuột phải vào đường nối giữa chúng, rồi chọn **Xóa**. Hoặc, chọn đường nối rồi nhấn `Backspace` (hoặc `Delete` trên macOS).

### Kết nối thẻ với thẻ khác

Để di chuyển một đầu của đường kết nối:

1. Di chuột qua đường kết nối cho đến khi hai vòng tròn nhỏ xuất hiện trên đường.
2. Kéo vòng tròn ở đầu bạn muốn kết nối lại, đến thẻ khác.

### Điều hướng kết nối

Nếu hai thẻ được kết nối ở xa nhau, bạn có thể điều hướng đến nguồn hoặc đích của kết nối bằng cách nhấp chuột phải vào đường nối và chọn **Đi đến đích** hoặc **Đi đến nguồn**.

### Thêm nhãn cho kết nối

Bạn có thể thêm nhãn cho đường nối để mô tả mối quan hệ giữa hai thẻ.

Để gắn nhãn cho kết nối:

1. Nhấp đúp vào đường nối.
2. Nhập nhãn rồi nhấn `Escape` hoặc nhấp vào bất kỳ đâu trên canvas.

Bạn cũng có thể gắn nhãn cho kết nối bằng cách chọn nó rồi chọn **Chỉnh sửa nhãn** từ các điều khiển lựa chọn.

Để chỉnh sửa nhãn kết nối, nhấp đúp vào đường nối, hoặc nhấp chuột phải vào đường nối rồi chọn **Chỉnh sửa nhãn**.

### Thay đổi màu của thẻ hoặc kết nối

1. Chọn các thẻ hoặc kết nối bạn muốn tô màu.
2. Trong các điều khiển lựa chọn, chọn **Đặt màu** ![[lucide-palette.svg#icon]].
3. Chọn một màu.

## Nhóm thẻ

### Nhóm các thẻ đã chọn

Để tạo một nhóm trống:

- Nhấp chuột phải vào canvas và chọn **Tạo nhóm**.

Để nhóm các thẻ liên quan:

1. Chọn các thẻ.
2. Nhấp chuột phải vào bất kỳ thẻ nào đã chọn rồi chọn **Tạo nhóm**.

**Đổi tên nhóm:** Nhấp đúp vào tên nhóm để chỉnh sửa, rồi nhấn `Enter` để lưu.

## Điều hướng canvas

Khi bạn bắt đầu thêm nhiều thẻ vào canvas, bạn sẽ muốn hiểu cách điều hướng canvas để xem một phần của nó. Tìm hiểu cách di chuyển và phóng to để di chuyển qua canvas một cách dễ dàng.

### Di chuyển canvas

Để di chuyển canvas theo chiều dọc và chiều ngang, còn gọi là _di chuyển_, bạn có thể sử dụng bất kỳ cách nào sau đây:

- Nhấn `Space` và kéo canvas.
- Kéo canvas bằng nút chuột giữa.
- Cuộn chuột để di chuyển theo chiều dọc, và nhấn `Shift` trong khi cuộn để di chuyển theo chiều ngang.

### Phóng to canvas

Để phóng to canvas, nhấn `Space` hoặc `Ctrl` (hoặc `Cmd` trên macOS) và cuộn bằng con lăn chuột. Hoặc, chọn **Phóng to** ![[lucide-plus.svg#icon]] và **Thu nhỏ** ![[lucide-minus.svg#icon]] từ các điều khiển thu phóng ở góc trên bên phải.

#### Thu phóng để vừa khung

Để thu phóng canvas sao cho mọi mục đều hiển thị, chọn **Thu phóng để vừa với khung** ![[lucide-maximize.svg#icon]]. Hoặc, sử dụng phím tắt `Shift+1`.

#### Thu phóng theo vùng chọn

Để thu phóng canvas sao cho tất cả các mục đã chọn đều hiển thị, nhấp chuột phải vào thẻ đã chọn rồi chọn **Thu phóng để vừa với lựa chọn**. Hoặc, sử dụng phím tắt bằng cách nhấn `Shift+2`.

#### Đặt lại phóng to/thu nhỏ

Để thay đổi mức thu phóng về mặc định, chọn **Đặt lại phóng to/thu nhỏ** trong các điều khiển thu phóng ở góc trên bên phải.

## Mẹo nâng cao

Chúng tôi đã tạo một số video ngắn để minh họa một số trường hợp sử dụng nâng cao của Canvas.

Bạn có thể [xem tất cả 72 mẹo tại đây](https://obsidian.md/canvas#protips). Xin lưu ý rằng các video mẹo chỉ hiển thị trên máy tính để bàn.
