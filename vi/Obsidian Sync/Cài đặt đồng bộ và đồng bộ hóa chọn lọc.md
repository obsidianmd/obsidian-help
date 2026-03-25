---
permalink: sync/settings
publish: true
mobile: true
description: Trang này giải thích các cài đặt Sync và hướng dẫn bạn chọn những tệp nào cần đồng bộ.
---
Khi bạn [[Gói và giới hạn lưu trữ#Tạo kho từ xa mới|tạo kho từ xa]] và [[Thiết lập Obsidian Sync#Kết nối với kho từ xa|kết nối với nó]], plugin cốt lõi Sync sẽ trở thành nơi quản lý kho từ xa của bạn.

## Cài đặt đồng bộ

**Kho từ xa**  
Phần này hiển thị kho từ xa hiện đang kết nối. Nó bao gồm nút **Ngắt kết nối** để ngắt kết nối khỏi kho từ xa và nút **Quản lý** để xem tất cả các kho từ xa mà tài khoản của bạn có quyền truy cập (bao gồm cả kho được chia sẻ thông qua [[Cộng tác trên kho lưu trữ được chia sẻ|cộng tác]]).

> [!warning]+ Kho từ xa trong dịch vụ đồng bộ bên thứ ba
> Nếu kho từ xa của bạn nằm trong dịch vụ đồng bộ bên thứ ba, bạn sẽ thấy thông báo lỗi màu đỏ. Hãy làm theo các bước trong [[Chuyển sang Obsidian Sync]] để giải quyết vấn đề này.

**Trạng thái đồng bộ hóa**  
Hiển thị trạng thái đồng bộ hiện tại của kho từ xa. Phần này bao gồm nút **Tạm dừng** hoặc **Tiếp tục**, tùy thuộc vào trạng thái.

**Tên thiết bị**  
Đặt tên duy nhất cho thiết bị đang đồng bộ. Điều này giúp theo dõi hoạt động trong [[Biểu tượng và thông báo trạng thái#Nhật ký hoạt động đồng bộ|nhật ký đồng bộ hóa]]. Cài đặt này dành riêng cho thiết bị, giống như [[#Đồng bộ hóa chọn lọc]].

**[[#Giải quyết xung đột]]**
Chọn cách giải quyết xung đột khi bạn chỉnh sửa một tệp trên nhiều thiết bị. Cài đặt này dành riêng cho thiết bị, giống như [[#Đồng bộ hóa chọn lọc]].

**Các tập tin đã xóa**  
Chứa nút để **Xem** hoặc **Khôi phục** các tệp đã xóa. Để biết thêm chi tiết, xem [[Lịch sử phiên bản]].

**Vault size**  
Hiển thị thanh tiến trình cho biết dung lượng lưu trữ đồng bộ đã sử dụng bao nhiêu.

> [!tip]- Thời gian xử lý của máy chủ
> Có thể mất đến 30 phút để mức sử dụng hiện tại được cập nhật do quá trình xử lý phía máy chủ.

**Liên hệ hỗ trợ**  
Cung cấp hướng dẫn về cách [[Trợ giúp và hỗ trợ#Liên hệ hỗ trợ Obsidian|liên hệ hỗ trợ Obsidian]], bao gồm các tùy chọn **Sao chép thông tin gỡ lỗi** và **Liên hệ qua email**.

### Giải quyết xung đột

Chọn cách giải quyết xung đột khi bạn chỉnh sửa một tệp trên nhiều thiết bị trước khi đồng bộ. Bạn có thể tự động hợp nhất các thay đổi hoặc tạo các tệp xung đột riêng biệt để xem xét thủ công. Xem [[Khắc phục sự cố Obsidian Sync#Giải quyết xung đột|Giải quyết xung đột]] để biết chi tiết về cách xung đột hoạt động và cách cấu hình cài đặt này.

> [!warning]+ Cấu hình trên từng thiết bị
> Cài đặt này phải được cấu hình riêng trên từng thiết bị.

---

Bạn cũng có thể chọn những gì cần đồng bộ trong cài đặt của plugin cốt lõi Sync. Phần này bao gồm **đồng bộ hóa chọn lọc** và **đồng bộ hóa cấu hình hòm lưu trữ**, cùng với các lưu ý liên quan.

## Đồng bộ hóa chọn lọc

Các tệp được đồng bộ vào [[Kho lưu trữ cục bộ và từ xa|kho từ xa]] của bạn sẽ tính vào [[Câu hỏi thường gặp#Mỗi kho từ xa có thể lớn bao nhiêu|giới hạn lưu trữ]] của bạn. Theo mặc định, Obsidian Sync kích hoạt **đồng bộ hóa chọn lọc** cho các loại tệp sau:
- Hình ảnh
- Âm thanh
- Video
- PDF

Để đồng bộ các loại tệp bổ sung, hãy bật tùy chọn `Đồng bộ hóa tất cả các loại tệp khác`.

Cài đặt **đồng bộ hóa cấu hình hòm lưu trữ** mặc định bao gồm:
- Các loại tệp khác
- Cài đặt chính
- Giao diện
- Chủ đề và mô đun
- Phím tắt
- Danh sách plugin lõi đang hoạt động
- Cài đặt plugin lõi

Để đồng bộ plugin cộng đồng, hãy bật thủ công **Danh sách plugin cộng đồng đang hoạt động** và **Danh sách plugin cộng đồng đã cài đặt**.

### Thay đổi các loại tệp bạn muốn đồng bộ

1. Mở **[[Cài đặt]] → Sync**.
2. Trong phần **Đồng bộ hóa chọn lọc**, bật các loại tệp bạn muốn đồng bộ.
3. Khởi động lại ứng dụng để áp dụng cài đặt mới. Trên di động hoặc máy tính bảng, có thể cần buộc tắt ứng dụng.

Lưu ý rằng [[Gói và giới hạn lưu trữ|gói Sync]] của bạn xác định kích thước tệp tối đa bạn có thể đồng bộ. Gói Standard cho phép đồng bộ các tệp lên đến 5 MB, trong khi gói Plus hỗ trợ các tệp lên đến 200 MB.

> [!info]+ Các tệp bị loại trừ vẫn còn trong kho từ xa
> Thêm một tệp vào danh sách **Tệp bị loại trừ** không xóa nó khỏi kho từ xa nếu nó đã được đồng bộ. Hãy cấu hình cài đặt Sync trước khi đồng bộ để tránh sử dụng dung lượng lưu trữ không cần thiết.

### Loại trừ một thư mục khỏi đồng bộ

Theo mặc định, Obsidian đồng bộ tất cả các tệp và thư mục trong kho của bạn. Để loại trừ một thư mục cụ thể khỏi đồng bộ:
1. Mở **[[Cài đặt]] → Sync**.
2. Bên cạnh **Thư mục bị loại trừ**, chọn **Quản lý**.
3. Chọn thư mục bạn muốn loại trừ từ danh sách.
4. Chọn **Hoàn thành**.

Để xóa một thư mục khỏi danh sách loại trừ, chọn nút ![[lucide-x.svg#icon]] bên cạnh tên thư mục.

#### Luôn bị loại trừ khỏi đồng bộ

##### Các snapshot khôi phục tập tin

Các snapshot trong plugin [[Khôi phục tập tin]] không được đồng bộ qua Obsidian Sync, vì các snapshot được lưu trong [[Cách Obsidian lưu trữ dữ liệu#Cài đặt toàn cục|Cài đặt toàn cục]].

##### Tệp và thư mục ẩn

Các tệp và thư mục bắt đầu bằng `.` được coi là ẩn và bị loại trừ khỏi đồng bộ. Ngoại lệ duy nhất là [[Thư mục cấu hình|thư mục cấu hình]] của kho (`.obsidian`), vẫn được đồng bộ.

Các ví dụ phổ biến về tệp và thư mục ẩn không được đồng bộ:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Cài đặt đồng bộ

Cài đặt đồng bộ không được đồng bộ giữa các thiết bị. Bạn cần cấu hình chúng riêng trên từng thiết bị theo nhu cầu.

## Cập nhật cài đặt kho đã đồng bộ

Để sửa đổi cài đặt đồng bộ trên nhiều thiết bị, hãy làm theo các bước sau:

> [!tip]- Thiết bị chính và thiết bị phụ
> Các thuật ngữ "thiết bị chính" và "thiết bị phụ" chỉ nhằm mục đích rõ ràng. Sync không phân biệt giữa chúng.

### Thiết bị chính

Thiết bị chính đóng vai trò là nguồn dữ liệu chính xác. Các thay đổi được thực hiện tại đây sẽ được đồng bộ trên tất cả các thiết bị khác.

1. Đi tới **[[Cài đặt]] → Sync**.
2. Kích hoạt các cài đặt mong muốn trong phần **Đồng bộ hóa cấu hình hòm lưu trữ**.
3. Tải lại hoặc khởi động lại Obsidian. Trên di động hoặc máy tính bảng, có thể cần buộc tắt ứng dụng.
4. Chờ đợi để cài đặt được đồng bộ với kho từ xa của bạn.

### Thiết bị phụ

Các thiết bị phụ (chẳng hạn như điện thoại của bạn) nhận cập nhật từ thiết bị chính.

1. Đi tới **[[Cài đặt]] → Sync**.
2. Bật các cài đặt cần thiết trong phần **Đồng bộ hóa cấu hình hòm lưu trữ**.
3. Chờ các thay đổi được tải xuống từ kho từ xa.
4. Tải lại hoặc khởi động lại ứng dụng để áp dụng cài đặt đã đồng bộ. Trên di động hoặc máy tính bảng, có thể cần buộc tắt ứng dụng.

### Tải lại cài đặt

Một số cài đặt có thể được tải lại nóng, trong khi các cài đặt khác yêu cầu khởi động lại:

- **Có thể tải lại nóng**: Hầu hết cấu hình Obsidian, bao gồm phím tắt và thuộc tính, cài đặt giao diện, và cấu hình cho các plugin cốt lõi đã được bật.
- **Yêu cầu tải lại**: Thay đổi CSS (ví dụ: [[Mẩu CSS]], [[Chủ đề]]), cấu hình chế độ xem đồ thị, và trạng thái plugin cốt lõi (ví dụ: bật/tắt Ghi chú hàng ngày).

Các plugin cộng đồng thường không hỗ trợ tải lại nóng và yêu cầu khởi động lại khi áp dụng cài đặt mới.

> [!info]+ Dành cho nhà phát triển plugin
> Tìm hiểu cách [tích hợp chức năng tải lại nóng với Obsidian Sync](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange).

## Hồ sơ cài đặt

Obsidian Sync có thể đồng bộ nhiều [[Thư mục cấu hình|thư mục cấu hình]] vào cùng một kho từ xa, cho phép bạn tạo các hồ sơ riêng biệt (ví dụ: một cho di động, một cho laptop).

### Tạo hồ sơ cài đặt

Để tạo hồ sơ cài đặt mới:

1. Mở **[[Cài đặt]] → Tệp & Liên kết**.
2. Trong phần **Ghi đè thư mục cấu hình**, nhập tên cho hồ sơ của bạn, bắt đầu bằng dấu chấm (`.`), ví dụ: `.obsidian-mobile`.
3. Khởi động lại Obsidian để áp dụng các thay đổi.

> [!info]+ Tránh tải lại plugin và chủ đề
> Thay đổi hồ sơ cài đặt sẽ yêu cầu cấu hình lại cài đặt đồng bộ của bạn. Để tránh tải lại plugin và chủ đề, hãy sao chép thư mục `.obsidian` hiện có và đổi tên nó cho phù hợp với hồ sơ mới của bạn (ví dụ: `.obsidian-mobile`) trước khi thực hiện thay đổi.
