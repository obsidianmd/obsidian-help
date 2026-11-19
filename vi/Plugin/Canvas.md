---
permalink: plugins/canvas
mobile: true
---
Canvas là một [[Plugin cốt lõi|plugin cốt lõi]] dành cho việc ghi chú trực quan. Nó cung cấp cho bạn không gian vô hạn để sắp xếp các ghi chú và kết nối chúng với các ghi chú khác, tệp đính kèm và trang web.

Sắp xếp ghi chú trong không gian 2D giúp bạn nhìn thấy và hiểu các mối liên kết giữa chúng. Kết nối các ghi chú bằng các đường nối và nhóm các ghi chú liên quan lại với nhau.

Obsidian lưu canvas dưới dạng tệp `.canvas` sử dụng định dạng mở [JSON Canvas](https://jsoncanvas.org/).

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

> [!note] Thẻ chỉ chứa văn bản và liên kết ngược
> Các thẻ chỉ chứa văn bản không xuất hiện trong [[Liên kết đến]]. Để chúng xuất hiện, bạn cần chuyển đổi chúng thành tệp.

### Thêm thẻ từ ghi chú

Để thêm ghi chú từ kho của bạn vào canvas:

1. Chọn hoặc kéo biểu tượng tài liệu ở phía dưới canvas.
2. Chọn ghi chú bạn muốn thêm.

Bạn cũng có thể thêm ghi chú từ menu ngữ cảnh canvas:

1. Nhấp chuột phải vào canvas và chọn **Thêm ghi chú từ kho lưu trữ**.
2. Chọn ghi chú bạn muốn thêm.

Bạn cũng có thể kéo ghi chú từ [[Trình quản lý tệp]] vào canvas.

Để chỉ hiển thị một phần ghi chú trong thẻ, nhấp chuột phải vào thẻ và chọn **Thu hẹp đến tiêu đề...** hoặc **Thu hẹp đến khối...**. Sau đó chọn tiêu đề hoặc khối.

### Thêm thẻ từ phương tiện

Để thêm phương tiện từ kho của bạn vào canvas:

1. Chọn hoặc kéo biểu tượng tệp hình ảnh ở phía dưới canvas.
2. Chọn tệp phương tiện bạn muốn thêm.

Bạn cũng có thể thêm phương tiện từ menu ngữ cảnh canvas:

1. Nhấp chuột phải vào canvas và chọn **Thêm phương tiện từ kho lưu trữ**.
2. Chọn tệp phương tiện bạn muốn thêm.

Bạn cũng có thể kéo tệp phương tiện từ [[Trình quản lý tệp]] vào canvas.

### Thêm thẻ từ trang web

Để nhúng trang web vào canvas:

1. Nhấp chuột phải vào canvas và chọn **Thêm trang web**.
2. Nhập URL của trang web và chọn **Lưu**.

Bạn cũng có thể chọn URL trong trình duyệt rồi kéo vào canvas để nhúng nó vào một thẻ.

Để mở trang web trong trình duyệt, nhấn `Ctrl` (hoặc `Cmd` trên macOS) và chọn nhãn thẻ. Hoặc, nhấp chuột phải vào thẻ và chọn **Mở liên kết bên ngoài**.

Nhấp chuột phải vào thẻ trang web để xem thêm tùy chọn.

- **Sao chép URL** sao chép địa chỉ của trang web.
- **Thay đổi URL...** thay đổi địa chỉ mà thẻ hiển thị.
- **Tải lại trang** tải lại trang web.

### Thêm thẻ từ cơ sở

Để hiển thị một [[Giới thiệu về Cơ sở|cơ sở]] trong canvas, kéo tệp cơ sở từ Trình khám phá tệp vào canvas. Thẻ sẽ hiển thị cơ sở.

Thẻ cơ sở hiển thị chế độ xem mặc định của cơ sở. Để hiển thị chế độ xem khác:

1. Nhấp chuột phải vào thẻ và chọn **Ghim chế độ xem...**.
2. Chọn chế độ xem bạn muốn.

Để quay lại chế độ xem mặc định, chọn **Ghim chế độ xem...** lần nữa, rồi chọn **Hiển thị chế độ xem mặc định**.

### Thêm thẻ từ thư mục

Kéo một thư mục từ [[Trình quản lý tệp]] để thêm tất cả các tệp trong thư mục đó vào canvas.

### Chỉnh sửa thẻ

Nhấp đúp vào thẻ văn bản hoặc thẻ ghi chú để bắt đầu chỉnh sửa. Chọn bất kỳ đâu bên ngoài thẻ để dừng chỉnh sửa. Bạn cũng có thể nhấn `Escape` để dừng chỉnh sửa thẻ.

Bạn cũng có thể chỉnh sửa thẻ bằng cách nhấp chuột phải vào nó và chọn **Chỉnh sửa**. Hoặc, chọn thẻ rồi chọn **Chỉnh sửa** ![[lucide-square-pen.svg#icon]] trong các điều khiển lựa chọn.

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

Chọn từng thẻ riêng lẻ, hoặc kéo vùng chọn xung quanh nhiều thẻ.

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

### Căn chỉnh và sắp xếp thẻ

Để căn chỉnh nhiều thẻ, chọn hai thẻ trở lên. Trong các điều khiển lựa chọn, chọn **Căn chỉnh**, rồi chọn một tùy chọn.

- **Căn chỉnh bên trái**, **Căn chỉnh chính giữa**, và **Căn chỉnh bên phải** căn các thẻ theo một đường thẳng đứng.
- **Căn chỉnh bên trên**, **Căn chỉnh giữa**, và **Căn chỉnh bên dưới** căn các thẻ theo một đường ngang.
- **Sắp xếp theo hàng**, **Sắp xếp theo cột**, và **Sắp xếp theo lưới** di chuyển các thẻ vào bố cục đó.
- **Phân phối khoảng cách ngang** và **Phân phối khoảng cách dọc** phân bố các thẻ đều nhau.
- **Căn chỉnh đều ngang** và **Căn chỉnh đều dọc** thay đổi kích thước mỗi thẻ để khớp với toàn bộ chiều rộng hoặc chiều cao của vùng chọn.

## Kết nối thẻ

Vẽ các đường nối giữa các thẻ để thể hiện mối quan hệ. Thêm màu sắc và nhãn để mô tả cách chúng liên quan.

### Kết nối hai thẻ

Để kết nối hai thẻ bằng đường có hướng:

1. Di chuột qua một trong các cạnh của thẻ cho đến khi bạn thấy một vòng tròn đặc.
2. Kéo vòng tròn đến cạnh của thẻ khác để kết nối chúng.

> [!tip]- Tạo thẻ từ kết nối mới
> Nếu bạn kéo đường nối mà không kết nối nó với thẻ khác, bạn có thể tạo thẻ mới ở đầu còn lại.

### Ngắt kết nối hai thẻ

Để xóa kết nối giữa hai thẻ:

1. Di chuột qua đường kết nối cho đến khi hai vòng tròn nhỏ xuất hiện trên đường.
2. Kéo một trong các vòng tròn ra khỏi thẻ mà không kết nối với thẻ khác.

Bạn cũng có thể ngắt kết nối hai thẻ bằng cách nhấp chuột phải vào đường nối giữa chúng, rồi chọn **Xóa**. Hoặc, chọn đường nối rồi nhấn `Backspace` (hoặc `Delete` trên macOS).

### Kết nối thẻ với thẻ khác

Để di chuyển một đầu của đường kết nối:

1. Di chuột qua đường kết nối cho đến khi hai vòng tròn nhỏ xuất hiện trên đường.
2. Kéo vòng tròn đến thẻ khác để kết nối lại.

### Điều hướng kết nối

Nếu hai thẻ được kết nối ở xa nhau, bạn có thể nhảy đến thẻ ở đầu còn lại của kết nối. Nhấp chuột phải vào đường nối gần một đầu, rồi chọn **Theo dõi kết nối**. Canvas sẽ di chuyển đến thẻ ở đầu đối diện.

### Thêm nhãn cho kết nối

Bạn có thể thêm nhãn cho đường nối để mô tả mối quan hệ giữa hai thẻ.

Để gắn nhãn cho kết nối:

1. Nhấp đúp vào đường nối.
2. Nhập nhãn rồi nhấn `Escape` hoặc chọn bất kỳ đâu trên canvas.

Bạn cũng có thể gắn nhãn cho kết nối bằng cách chọn nó rồi chọn **Chỉnh sửa nhãn** từ các điều khiển lựa chọn.

Để chỉnh sửa nhãn kết nối, nhấp đúp vào đường nối, hoặc nhấp chuột phải vào đường nối rồi chọn **Chỉnh sửa nhãn**.

Để xóa nhãn, chọn kết nối rồi chọn **Xóa nhãn** trong các điều khiển lựa chọn.

### Thay đổi hướng kết nối

Theo mặc định, kết nối có mũi tên ở đầu trỏ đến thẻ thứ hai. Để thay đổi điều này:

1. Chọn kết nối.
2. Trong các điều khiển lựa chọn, chọn **Hướng dòng**.
3. Chọn **Không hướng**, **Một chiều**, hoặc **Hai chiều**.

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

### Thêm nền cho nhóm

Bạn có thể hiển thị hình ảnh phía sau các thẻ trong nhóm.

1. Chọn nhóm.
2. Trong các điều khiển lựa chọn, chọn **Đặt nền**.
3. Chọn hình ảnh từ kho của bạn.

Để thay đổi nền, chọn nhóm rồi chọn **Chỉnh sửa nền**.

- **Thay thế nền** chọn hình ảnh khác.
- **Xóa nền** xóa hình ảnh.
- **Bao phủ** làm hình ảnh lấp đầy nhóm.
- **Giữ tỷ lệ khung hình** giữ tỷ lệ của hình ảnh.
- **Lặp lại** xếp hình ảnh lặp lại trên toàn nhóm.

## Điều hướng canvas

Sử dụng di chuyển và phóng to để di chuyển qua canvas.

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

Để thu phóng canvas sao cho tất cả các mục đã chọn đều hiển thị, nhấp chuột phải vào thẻ đã chọn rồi chọn **Thu phóng để vừa với lựa chọn**. Hoặc, nhấn `Shift+2`.

#### Đặt lại phóng to/thu nhỏ

Để thay đổi mức thu phóng về mặc định, chọn **Đặt lại phóng to/thu nhỏ** trong các điều khiển thu phóng ở góc trên bên phải.


### Nhảy đến nhóm

Để di chuyển trực tiếp đến một nhóm trong canvas lớn, mở bảng lệnh và chọn **Canvas: Nhảy đến nhóm**. Danh sách các nhóm trong canvas sẽ xuất hiện. Chọn nhóm bạn muốn đến, và canvas sẽ di chuyển để căn giữa vào nhóm đó.

## Cài đặt Canvas

Chọn **Cài đặt Bảng** ![[lucide-settings.svg#icon]] phía trên các điều khiển canvas để thay đổi cách canvas hoạt động.

- **Gắn vào lưới** gắn các thẻ vào lưới nền khi bạn di chuyển và thay đổi kích thước chúng.
- **Gắn vào các đối tượng** gắn các thẻ vào các thẻ gần kề khi bạn di chuyển và thay đổi kích thước chúng.
- **Chỉ đọc** ngăn chặn các thay đổi trên canvas.

## Xuất canvas thành hình ảnh

Bạn có thể xuất canvas thành hình ảnh PNG trên máy tính. Xuất hình ảnh không khả dụng trong ứng dụng Obsidian trên di động.

1. Mở canvas bạn muốn xuất.
2. Mở bảng lệnh và chọn **Canvas: Xuất thành hình ảnh**.
3. Chọn cài đặt của bạn.
    - **Khung nhìn** đặt phần cần xuất. Chọn **Toàn bộ bảng** cho toàn bộ canvas, hoặc **Chỉ khu vực nhìn thấy** cho phần bạn đang thấy.
    - **Thu phóng** đặt chất lượng hình ảnh. Thu phóng cao hơn tạo ra hình ảnh lớn hơn và sắc nét hơn. Hộp thoại hiển thị kích thước hình ảnh ước tính.
    - **Hiển thị biểu trưng** thêm biểu trưng Obsidian ở góc dưới bên trái. Tùy chọn này được bật theo mặc định.
    - **Chế độ bảo mật** ẩn tất cả văn bản trên canvas. Tùy chọn này được tắt theo mặc định.
4. Chọn **Lưu**.
5. Chọn nơi lưu tệp. Tên tệp mặc định là tên canvas của bạn, với phần mở rộng `.png`.

Bạn không thể xuất canvas trống.

## Hoàn tác và làm lại

Để hoàn tác thay đổi gần nhất, chọn **Hoàn tác** trong các điều khiển canvas ở bên phải canvas. Hoặc, nhấn `Ctrl+Z` (Windows và Linux) hoặc `Command+Z` (macOS).

Để làm lại thay đổi, chọn **Làm lại**. Hoặc, nhấn `Ctrl+Y` hoặc `Ctrl+Shift+Z` (Windows và Linux), hoặc `Command+Y` hoặc `Command+Shift+Z` (macOS).

## Trợ giúp Canvas

Trên máy tính, chọn **Trợ giúp Bảng** ![[lucide-help-circle.svg#icon]] phía dưới các điều khiển canvas để xem danh sách các phím tắt cho di chuyển, thu phóng, chọn và di chuyển thẻ.

## Nhúng canvas

Bạn có thể nhúng canvas vào ghi chú bằng cú pháp nhúng tiêu chuẩn. Để biết thêm thông tin, hãy tham khảo [[Nhúng tệp#Embed a canvas in a note|Nhúng canvas vào ghi chú]].

## Sử dụng Canvas trên di động

Khi bạn mở canvas trên điện thoại hoặc máy tính bảng, Obsidian hiển thị ba gợi ý.

- **Kéo để di chuyển**
- **Kéo nhẹ để thu phóng**
- **Chạm và giữ để thêm / di chuyển / chọn**

### Mở menu canvas

Chạm và giữ vùng trống trên canvas. Menu có các mục sau.

- **Thêm thẻ** thêm một thẻ văn bản.
- **Thêm ghi chú từ kho lưu trữ** thêm ghi chú từ kho của bạn.
- **Thêm phương tiện từ kho lưu trữ** thêm phương tiện từ kho của bạn.
- **Thêm trang web** nhúng trang web.
- **Tạo nhóm** tạo một nhóm trống.
- **Gắn vào lưới**, **Gắn vào các đối tượng**, và **Chỉ đọc** là các tùy chọn giống như trong **Cài đặt Canvas**.

### Thêm thẻ

Bạn có thể thêm thẻ từ menu canvas. Bạn cũng có thể chọn biểu tượng ở phía dưới canvas.

- Biểu tượng tệp trống thêm thẻ văn bản.
- Biểu tượng tài liệu thêm ghi chú từ kho của bạn.
- Biểu tượng hình ảnh thêm phương tiện từ kho của bạn.

### Thao tác với thẻ đã chọn

Chạm vào thẻ để chọn nó. Thanh công cụ xuất hiện phía trên thẻ.

- **Xóa** ![[lucide-trash-2.svg#icon]] xóa thẻ.
- **Đặt màu** ![[lucide-palette.svg#icon]] thay đổi màu của thẻ.
- **Thu phóng để vừa với lựa chọn** thu phóng canvas đến thẻ.
- **Chỉnh sửa** ![[lucide-square-pen.svg#icon]] chỉnh sửa thẻ.

### Di chuyển thẻ

1. Chạm vào thẻ để chọn nó.
2. Chạm và giữ thẻ đã chọn, rồi kéo nó đến vị trí mới.

### Thay đổi kích thước thẻ

1. Chạm vào thẻ để chọn nó.
2. Kéo các cạnh của thẻ để làm nó lớn hơn hoặc nhỏ hơn.

### Mở menu thẻ

Chạm và giữ thẻ. Menu có các mục sau.

- **Thu phóng để vừa với lựa chọn** thu phóng canvas đến thẻ.
- **Chỉnh sửa** chỉnh sửa thẻ.
- **Chuyển đổi thành tập tin...** chuyển đổi thẻ văn bản thành ghi chú.
- **Nhân bản** tạo bản sao của thẻ.
- **Xóa** xóa thẻ.

### Chỉnh sửa thẻ

Để chỉnh sửa thẻ văn bản hoặc thẻ ghi chú, sử dụng một trong hai cách.

- Chạm vào thẻ để chọn nó, rồi chạm đúp vào nó. Bàn phím sẽ mở.
- Chạm vào thẻ để chọn nó, rồi chọn **Chỉnh sửa** ![[lucide-square-pen.svg#icon]] trong thanh công cụ phía trên thẻ.

### Gắn nhãn kết nối

1. Chạm vào đường nối để chọn nó.
2. Trong thanh công cụ, chọn **Chỉnh sửa nhãn** ![[lucide-square-pen.svg#icon]]. Bàn phím sẽ mở.
3. Nhập nhãn.

Để xóa nhãn, chạm vào đường nối rồi chọn **Xóa nhãn** trong thanh công cụ.

### Thay đổi hướng kết nối

1. Chạm vào đường nối để chọn nó.
2. Trong thanh công cụ, chọn **Hướng dòng**.
3. Chọn **Không hướng**, **Một chiều**, hoặc **Hai chiều**.

### Mở menu đường nối

Chạm và giữ đường nối kết nối hai thẻ. Menu có các mục sau.

- **Chỉnh sửa nhãn** thêm hoặc thay đổi nhãn của đường nối.
- **Theo dõi kết nối** di chuyển canvas đến thẻ ở đầu đối diện của đường nối.
- **Xóa** xóa kết nối.

### Kết nối thẻ

1. Chạm vào thẻ để chọn nó.
2. Kéo một trong các vòng tròn ở cạnh thẻ đến thẻ khác.

Nếu bạn kéo đường nối và thả vào vùng trống, menu sẽ mở với **Thêm thẻ** và **Thêm ghi chú từ kho lưu trữ**. Chọn một mục để thêm thẻ ở cuối đường nối.

### Ngắt kết nối thẻ

Để xóa kết nối, sử dụng một trong hai cách.

- Chạm vào đường nối, rồi chọn **Xóa** ![[lucide-trash-2.svg#icon]].
- Kéo đầu mũi tên của đường nối ngược lại thẻ mà nó bắt đầu. Đường nối sẽ biến mất.

### Nhóm thẻ

Để tạo nhóm:

1. Chạm và giữ vùng trống trên canvas.
2. Chọn **Tạo nhóm**.
3. Kéo các cạnh của nhóm để thay đổi kích thước.

Để thêm thẻ vào nhóm, kéo chúng vào vùng của nhóm. Khi bạn di chuyển nhóm, các thẻ bên trong cũng di chuyển theo.

Để đổi tên nhóm, chạm đúp vào tên nhóm. Bàn phím sẽ mở. Nhập tên mới.

### Điều khiển canvas

Các điều khiển ở bên phải canvas thay đổi chế độ xem và cài đặt của bạn.

- **Phóng to** và **Thu nhỏ** thay đổi mức thu phóng.
- **Đặt lại phóng to/thu nhỏ** đưa canvas về mức thu phóng mặc định.
- **Thu phóng để vừa với khung** hiển thị mọi thẻ trong canvas.
- **Hoàn tác** và **Làm lại** đảo ngược hoặc lặp lại thay đổi gần nhất.
- **Cài đặt Canvas** có các tùy chọn **Gắn vào lưới**, **Gắn vào các đối tượng**, và **Chỉ đọc**.

## Mẹo nâng cao

Chúng tôi đã tạo một số video ngắn để minh họa một số trường hợp sử dụng nâng cao của Canvas.

Bạn có thể [xem tất cả 72 mẹo tại đây](https://obsidian.md/canvas#protips). Các video mẹo chỉ hiển thị trên máy tính để bàn.
