---
permalink: publish/permalinks
---
Bạn có thể đổi tên URL cho ghi chú của mình bằng _liên kết cố định_.

Ví dụ, bạn có thể chuyển từ:

```
https://publish.obsidian.md/username/Company/About+us
```

Thành:

```
https://publish.obsidian.md/username/about
```

Để tạo liên kết cố định cho một ghi chú, hãy thêm thuộc tính `permalink` vào [[Thuộc tính]] của bạn.

```yaml
---
permalink: about
---
```

Nếu ai đó truy cập ghi chú bằng URL gốc, họ sẽ được tự động chuyển hướng đến liên kết cố định.

## Chuyển hướng ghi chú cũ

Đổi tên và xóa ghi chú là một phần tự nhiên khi duy trì một kho đang hoạt động. Mặc dù Obsidian tự động cập nhật các liên kết khi bạn di chuyển ghi chú trong kho cục bộ, các trang web khác vẫn có thể liên kết đến các ghi chú cũ trên trang [[Giới thiệu về Obsidian Publish|Obsidian Publish]] đã xuất bản của bạn. Bạn có thể chuyển hướng người đọc từ ghi chú này sang ghi chú khác.

Hãy tưởng tượng bạn muốn di chuyển một ghi chú từ thư mục này sang thư mục khác:

- **Guides**
  - ~~Making friends.md~~ (đã xóa)
- **Tutorials**
  - *How to make friends.md* (đã thêm)

Sau khi bạn di chuyển ghi chú, Obsidian tự động cập nhật tất cả các liên kết trong kho. Tuy nhiên, nếu bạn xuất bản thay đổi lên trang Publish, mọi liên kết đến `/Guides/Making+friends` sẽ dẫn đến lỗi 404.

Để chuyển hướng người đọc từ `/Guides/Making+friends` đến `/Tutorials/How+to+make+friends`, bạn cần thêm một [[Bí danh|bí danh]] trong `How to make friends.md`, ghi chú mà bạn muốn chuyển hướng đến.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Quan trọng
> Hãy đảm bảo rằng bạn bao gồm đường dẫn đầy đủ đến ghi chú cũ trong bí danh. Mặc dù chỉ sử dụng tên ghi chú làm bí danh vẫn hoạt động trong kho cục bộ, Publish cần đường dẫn đầy đủ đến ghi chú để có thể chuyển hướng đến nó.

Bạn có thể chuyển hướng nhiều ghi chú bằng cách thêm bí danh cho mỗi ghi chú.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```
