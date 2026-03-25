---
permalink: publish/customize
publish: true
description: Learn how to customize the appearance and style of your Obsidian Publish site.
---
Trang này giải thích cách bạn có thể tùy chỉnh giao diện và trải nghiệm của trang [[Giới thiệu về Obsidian Publish|Obsidian Publish]] của bạn.

## Tài nguyên tĩnh

Bạn có thể tùy chỉnh trang web bằng cách [[Xuất bản nội dung của bạn#Xuất bản ghi chú|xuất bản]] các tệp sau lên trang web của bạn:

- `publish.css` để thêm CSS tùy chỉnh
- `publish.js` để thêm JavaScript tùy chỉnh
- `favicon-32x32.png` để đặt favicon

**Ghi chú:**

- [Biến CSS cho Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) có thể được tìm thấy trên trang tài liệu của chúng tôi.
- Vì Obsidian không hỗ trợ các tệp CSS hoặc JavaScript, bạn cần sử dụng ứng dụng khác để tạo và chỉnh sửa chúng.
- Cả `publish.css` và `publish.js` phải được đặt trong thư mục gốc (`/`) của kho của bạn.
- Theo mặc định, `publish.css` và `publish.js` không xuất hiện trong trình khám phá tệp, nhưng bạn vẫn có thể xuất bản chúng từ hộp thoại **Xuất bản các thay đổi**.
- Để sử dụng JavaScript tùy chỉnh với `publish.js`, bạn cần [[Tên miền tùy chỉnh]].

Đối với favicon, Obsidian Publish hỗ trợ các quy ước đặt tên sau, trong đó `32` đại diện cho kích thước biểu tượng tính bằng pixel:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Chúng tôi khuyến nghị bạn cung cấp một hoặc nhiều kích thước sau:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Bạn có thể linh hoạt đặt favicon ở bất kỳ đâu trong kho, miễn là chúng được xuất bản lên trang web của bạn.

## Sử dụng chủ đề cộng đồng

Để sử dụng một trong các chủ đề cộng đồng cho trang web của bạn:

1. Mở kho của bạn trong trình khám phá tệp mặc định của hệ điều hành.
2. Đi đến thư mục cài đặt của kho (mặc định: `.obsidian`).
3. Mở thư mục `themes`.
4. Sao chép tệp CSS của chủ đề bạn muốn sử dụng cho trang web.
5. Dán tệp vào thư mục gốc của kho.
6. Đổi tên tệp CSS thành `publish.css`.
7. [[Xuất bản nội dung của bạn#Xuất bản ghi chú|Xuất bản]] `publish.css`.

**Ghi chú:**

- Nếu kiểu dáng không cập nhật trong vài phút, hãy thử làm mới bộ nhớ đệm trình duyệt.
- Bạn có thể chuyển đổi giữa chế độ sáng và tối trong [[Quản lý trang web#Xem cài đặt trang web|cài đặt trang web]].
- Nhiều chủ đề cộng đồng sử dụng **Style Settings** để tùy chỉnh kiểu dáng, nhưng các cài đặt này không hoạt động trên Obsidian Publish.

> [!tip] Phát triển chủ đề
> Không tìm được chủ đề phù hợp? Tìm hiểu cách [Xây dựng chủ đề Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) cho riêng bạn.

## Bật các tính năng giao diện

Bạn có thể bật/tắt một số tính năng giao diện cho trang web của mình, chẳng hạn như chế độ xem đồ thị hoặc mục lục.

Duyệt các tính năng giao diện có sẵn trong các phần **Trải nghiệm đọc** và **Các thành phần** trong [[Quản lý trang web#Xem cài đặt trang web|cài đặt trang web]]

### Tùy chỉnh điều hướng

Trong Obsidian Publish, bạn có khả năng tùy chỉnh thứ tự điều hướng và hiển thị các tệp và thư mục trong [[Trình quản lý tệp]] của Publish. Các mục điều hướng được liệt kê theo thứ tự xuất bản theo mặc định. Các ghi chú chưa xuất bản sẽ không xuất hiện trong bảng này.

#### Truy cập tùy chọn Tùy chỉnh điều hướng

1. Trong [[Thanh công cụ]], chọn **Xuất bản các thay đổi** ![[lucide-send.svg#icon]] hoặc mở [[Khay lệnh]] và gõ **Publish: Publish changes...**
2. Trong hộp thoại **Xuất bản các thay đổi**, chọn **Thay đổi cài đặt trang web** ![[lucide-cog.svg#icon]].
3. Trong **Cài đặt thành phần**, bên cạnh **Tùy chỉnh điều hướng**, chọn nút **quản lý**.

Một cửa sổ bật lên mới có tiêu đề **Điều hướng** sẽ xuất hiện trên cửa sổ **Thay đổi cài đặt trang web** của bạn.

#### Điều chỉnh các mục điều hướng

Trong phần có nhãn **Xem trước điều hướng**, bạn có thể điều chỉnh thứ tự hiển thị nội dung đã xuất bản.

1. Chọn thư mục hoặc ghi chú bạn muốn điều chỉnh.
2. Kéo ghi chú hoặc thư mục lên hoặc xuống cho đến khi nó ở vị trí mong muốn.
3. Ở góc dưới bên phải của cửa sổ **Điều hướng**, chọn **Hoàn thành**.

Publish sẽ gửi các thay đổi điều hướng của bạn đến trang web.

#### Ẩn và hiện các mục điều hướng

Nếu có các ghi chú hoặc thư mục bạn đã xuất bản nhưng không muốn hiển thị trong Điều hướng, bạn có thể chọn ẩn các mục đó thay thế.

1. Chọn thư mục hoặc ghi chú bạn muốn điều chỉnh.
2. Nhấp chuột phải và chọn **Ẩn trong điều hướng**. Mục đó sẽ biến mất khỏi **Xem trước điều hướng**.
3. Ở góc dưới bên phải của cửa sổ **Điều hướng**, chọn **Hoàn thành**.

Publish sẽ gửi các thay đổi điều hướng của bạn đến trang web.

> [!tip] Bạn có thể **Hiển thị các mục đã ẩn** bằng cách chọn hộp kiểm bên phải tiêu đề **Xem trước điều hướng**

## Câu hỏi thường gặp

**Tôi có thể di chuyển tệp từ thư mục này sang thư mục khác trong Điều hướng không?**

Không. Cấu trúc điều hướng tệp cho các ghi chú trong thư mục cần được duy trì. Bạn có thể điều chỉnh thứ tự ghi chú trong thư mục (bao gồm thư mục gốc của kho), và thứ tự thư mục trong các thư mục khác.

**Tôi có thể chỉnh sửa thứ tự của nhiều ghi chú và thư mục trước khi chọn Hoàn thành không?**

Có.

**Làm cách nào để hoàn nguyên các thay đổi này?**

- **Thứ tự hiển thị**: Chọn biểu tượng **Khôi phục mặc định** (mũi tên xoay ngược chiều kim đồng hồ) bên cạnh **Thứ tự hiển thị các mục điều hướng**. Thao tác này sẽ khôi phục các mục điều hướng của bạn về thứ tự bảng chữ cái.
- **Trạng thái ẩn**: Chọn biểu tượng **Khôi phục mặc định** (mũi tên xoay ngược chiều kim đồng hồ) bên cạnh **Ẩn trang hoặc thư mục trong điều hướng**. Thao tác này sẽ khôi phục các mục điều hướng đã ẩn của bạn về trạng thái hiển thị.
