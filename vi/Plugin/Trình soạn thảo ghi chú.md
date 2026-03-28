---
permalink: plugins/note-composer
---
Trình soạn thảo ghi chú là một [[Plugin cốt lõi|plugin cốt lõi]] cho phép bạn hợp nhất hai ghi chú hoặc trích xuất một phần ghi chú thành một ghi chú mới.

## Hợp nhất ghi chú

Hợp nhất ghi chú sẽ thêm một ghi chú vào ghi chú khác và xóa ghi chú đầu tiên. Trình soạn thảo ghi chú cập nhật tất cả các liên kết để tham chiếu đến ghi chú đã hợp nhất.

Khi bạn chọn ghi chú để hợp nhất vào, bạn có thể chọn giữa các phương thức sau:

- `Enter`: Thêm ghi chú nguồn vào _cuối_ ghi chú đích.
- `Shift+Enter`: Thêm ghi chú nguồn vào _đầu_ ghi chú đích.
- `Ctrl+Enter` (hoặc `Cmd+Enter` trên macOS): Tạo một ghi chú mới với nội dung của ghi chú nguồn.

Để hợp nhất ghi chú đang hoạt động với một ghi chú khác trong kho của bạn:

**Trình khám phá tệp**

1. Trong Trình khám phá tệp, nhấp chuột phải vào ghi chú bạn muốn hợp nhất.
2. Nhấp vào **Kết hợp toàn bộ tập tin với...**.
3. Chọn ghi chú bạn muốn hợp nhất vào.
4. Nhấp **Hợp nhất** để xác nhận.

**Bảng lệnh**

1. Mở [[Khay lệnh]].
2. Chọn **Trình soạn thảo ghi chú: Kết hợp tập tin hiện tại với tập tin khác...**.
3. Chọn ghi chú bạn muốn hợp nhất vào.
4. Nhấp **Hợp nhất** để xác nhận.

> [!tip] Mẹo
> Theo mặc định, Trình soạn thảo ghi chú yêu cầu bạn xác nhận khi hợp nhất ghi chú. Nếu bạn vô hiệu hóa xác nhận và hợp nhất ghi chú nhầm, bạn vẫn có thể khôi phục nó bằng plugin [[Khôi phục tập tin]].

## Trích xuất ghi chú

Khi bạn chọn ghi chú để trích xuất lựa chọn vào, bạn có thể chọn giữa các phương thức sau:

- `Enter`: Thêm văn bản đã chọn vào _cuối_ ghi chú đích.
- `Shift+Enter`: Thêm văn bản đã chọn vào _đầu_ ghi chú đích.
- `Ctrl+Enter` (hoặc `Cmd+Enter` trên macOS): Tạo một ghi chú mới với văn bản đã chọn.

Để trích xuất văn bản thành một ghi chú mới:

**Trình chỉnh sửa**

1. Khi ở trong **Trình chỉnh sửa**, chọn văn bản bạn muốn trích xuất.
2. Nhấp chuột phải vào văn bản đã chọn.
3. Nhấp vào **Trích xuất lựa chọn hiện tại...**.
4. Chọn ghi chú bạn muốn trích xuất vào.

**Bảng lệnh**

1. Khi ở trong **Trình chỉnh sửa**, chọn văn bản bạn muốn trích xuất.
2. Mở [[Khay lệnh]].
3. Chọn **Trình soạn thảo ghi chú: Trích xuất lựa chọn hiện tại...**.
4. Chọn ghi chú bạn muốn trích xuất vào.

> [!tip] Mẹo
> Theo mặc định, Trình soạn thảo ghi chú thay thế văn bản đã trích xuất bằng một liên kết đến ghi chú đích. Trong cài đặt, bạn cũng có thể thay đổi thành [[Nhúng tệp|nhúng]] ghi chú đích, hoặc không để lại gì.

## Tệp mẫu

Bằng cách cấu hình một mẫu, bạn có thể tùy chỉnh nội dung trước khi thêm nó vào ghi chú mới. Để sử dụng mẫu, nhập **Vị trí tập tin mẫu** trong cài đặt plugin.

Mẫu có thể chứa các biến sau:

| Biến              | Mô tả                                                                                                                                                    |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Nội dung để hợp nhất, hoặc văn bản đã trích xuất. Nếu bạn không bao gồm biến này, Trình soạn thảo ghi chú sẽ thêm nội dung vào cuối mẫu. |
| `{{fromTitle}}`   | Tên của ghi chú nguồn.                                                                                                                                   |
| `{{newTitle}}`    | Tên của ghi chú đích. Ví dụ, để thêm tên tệp làm tiêu đề ở đầu tệp.                                                                                   |
| `{{date:FORMAT}}` | Ngày tạo ghi chú mới. Ví dụ, `{{date:YYYY-MM-DD}}`.                                                                                                     |
