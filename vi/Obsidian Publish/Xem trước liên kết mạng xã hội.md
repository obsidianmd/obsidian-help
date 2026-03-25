---
permalink: publish/social-share
---
Nhiều mạng xã hội hiển thị bản xem trước phong phú cho trang web của bạn khi người dùng chia sẻ liên kết đến trang đó. Sử dụng [[Thuộc tính]], bạn có thể tùy chỉnh cách ghi chú của bạn xuất hiện trong bản xem trước.

> [!warning] Cảnh báo
> Các thẻ được ghi đè trong phần này **chỉ** hiển thị với trình thu thập dữ liệu web. Các trình duyệt web thông thường được phục vụ trang chưa chỉnh sửa để đảm bảo hiệu suất.

## Mô tả

Obsidian tự động tạo mô tả dựa trên nội dung ghi chú, nhưng bạn có thể cung cấp mô tả riêng bằng `description`.

```yaml
---
description: An introduction to our solar system.
---
```

> [!note] Thẻ meta
> `description` ghi đè mô tả được tạo tự động trong `<meta name="description" content="...">` và các thẻ tương đương cho `og:description` và `twitter:description`.

## Hình ảnh

Bạn có thể sử dụng hình ảnh tùy chỉnh cho bản xem trước liên kết, bằng cách thêm `image` hoặc `cover` với đường dẫn đến hình ảnh. Hình ảnh phải được tải lên Publish.

Đường dẫn có thể là đường dẫn tuyệt đối từ thư mục gốc của kho:

```yaml
---
cover: "Attachments/Cover image.png"
---
```


Đường dẫn đến hình ảnh phân biệt chữ hoa/thường. Trong ví dụ trước, chúng ta có đường dẫn đến hình ảnh tên `Cover image.png`. Đường dẫn bên dưới sẽ không hoạt động, vì sử dụng sai chữ hoa/thường.

```yaml
---
cover: "Attachments/cover Image.png"
---
```


Thay vì đường dẫn tuyệt đối trong kho, bạn cũng có thể sử dụng URL bên ngoài:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```


`image` và `cover` là giống nhau. Chỉ sử dụng một trong hai.

> [!note] Thẻ meta
> `image` và `cover` ghi đè hình ảnh được tạo tự động trong `<meta property="og:image" content="...">`.
