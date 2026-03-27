---
permalink: snippets
publish: true
mobile: true
description: Tìm hiểu cách thay đổi một số phần giao diện của ứng dụng Obsidian mà không cần tạo một chủ đề hoàn chỉnh.
---
Tìm hiểu cách thay đổi các khía cạnh giao diện của ứng dụng Obsidian mà không cần [xây dựng một chủ đề](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Nếu bạn đang tìm hướng dẫn về cách xử lý CSS cho [[Giới thiệu về Obsidian Publish|Obsidian Publish]], hãy nhớ xem [[Tùy chỉnh trang web của bạn]].

CSS là một ngôn ngữ kiểm soát cách HTML hiển thị. Bằng cách thêm các đoạn trích CSS, bạn có thể thay đổi các phần của giao diện người dùng Obsidian, chẳng hạn như kích thước và màu sắc của tiêu đề. Obsidian có [biến CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) giúp bạn tùy chỉnh giao diện một cách dễ dàng.

Obsidian tìm kiếm các đoạn trích CSS bên trong [[Thư mục cấu hình|thư mục cấu hình]] của kho.

## Thêm đoạn trích

Để thêm đoạn trích CSS trên **Máy tính** ![[lucide-monitor-check.svg#icon]], hãy làm theo các bước sau:

1. Mở **[[Cài đặt]]** ![[lucide-settings.svg#icon]].
2. Trong **Giao diện → Mẩu CSS**, chọn **Mở thư mục mẩu** ![[lucide-folder-open.svg#icon]].
3. Trong thư mục mẩu, tạo một tệp CSS chứa đoạn trích của bạn.
4. Trong Obsidian, trong **Giao diện → Mẩu CSS**, chọn **Tải lại mẩu** ![[lucide-refresh-cw.svg#icon]] để xem đoạn trích trong danh sách.
5. Bật đoạn trích bằng cách nhấp vào nút chuyển.

Để thêm đoạn trích CSS trên **Di động/Máy tính bảng** ![[obsidian-icon-smartphone.svg#icon]], bạn có thể làm theo các bước sau:

1. Mở trình quản lý tệp và tìm kho của bạn. Bạn có thể kiểm tra vị trí kho trong _Quản lý kho…_ bằng cách nhấn vào kho của bạn và xem đường dẫn.
2. Mở [[Thư mục cấu hình]] và tạo một thư mục có tên `snippets` nếu nó chưa tồn tại.
3. Thêm đoạn trích CSS của bạn vào thư mục này.
4. Mở **[[Cài đặt]]** ![[lucide-settings.svg#icon]] của Obsidian.
5. Chọn **Giao diện** ở bên trái.
6. Cuộn xuống phần **Mẩu CSS**.
7. Nhấn **Tải lại mẩu** ![[lucide-refresh-cw.svg#icon]] để làm mới danh sách.
8. Nhấn nút chuyển để bật đoạn trích.

Ngoài ra, bạn có thể
- [[Đồng bộ hóa ghi chú giữa các thiết bị|Đồng bộ hóa]] mọi thay đổi với dịch vụ đồng bộ của bạn.
- Sử dụng plugin cộng đồng để tạo đoạn trích từ bên trong Obsidian.

Sau khi bật, Obsidian sẽ tự động phát hiện các thay đổi đối với đoạn trích CSS và áp dụng chúng khi bạn lưu tệp.

> [!tip] Bạn không cần khởi động lại Obsidian để các thay đổi có hiệu lực. Tuy nhiên, bạn có thể cần sử dụng lệnh trong [[Khay lệnh]] để Tải lại Obsidian mà không lưu nhằm xem các thay đổi trong chủ đề hoặc ghi chú hiện tại.

## Viết CSS cho Obsidian

Obsidian cung cấp một số phương pháp giúp việc viết CSS dễ dàng và mạnh mẽ hơn.

Nó có nhiều [biến CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) để dễ dàng thay đổi các phần của Obsidian và một [[Thuộc tính#Loại thuộc tính|loại thuộc tính]] tích hợp sẵn để thay đổi giao diện của một hoặc nhiều ghi chú.

> [!example] Biến
> Tạo một tệp có tên `headers.css` với nội dung sau để thay đổi màu sắc của sáu [[Cú pháp định dạng cơ bản#Tiêu đề|cấp tiêu đề]] thành cầu vồng:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] Lớp CSS
> Gán tên của một lớp CSS tùy chỉnh (hoặc danh sách các lớp CSS) cho [[Thuộc tính|thuộc tính]] được định nghĩa sẵn `cssclasses` để làm cho một hoặc nhiều ghi chú trông khác với các ghi chú khác.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Thuộc tính**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> Trong mỗi ghi chú chứa giá trị `red-border` trong thuộc tính `cssclasses`, hình ảnh sẽ được hiển thị với viền đỏ.

Để đảm bảo tệp CSS hợp lệ và được định dạng đúng, chúng tôi khuyên bạn nên xác thực nó bằng công cụ như [CSS Validation Service](https://jigsaw.w3.org/css-validator/), vì CSS không hợp lệ sẽ không hoạt động.

## Tìm hiểu thêm

- Nếu bạn mới làm quen với CSS, hãy xem [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) của Mozilla.
- Để biết thêm thông tin về cách tạo kiểu cho Obsidian, hãy xem:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)
