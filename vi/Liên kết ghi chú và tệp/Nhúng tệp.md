---
permalink: embeds
cssclasses:
  - soft-embed
---
Tìm hiểu cách bạn có thể nhúng các ghi chú và phương tiện khác vào ghi chú của bạn. Bằng cách nhúng tệp vào ghi chú, bạn có thể tái sử dụng nội dung trong toàn bộ kho của mình.

Để nhúng một tệp trong kho của bạn, thêm dấu chấm than (`!`) phía trước một [[Liên kết nội bộ|Liên kết nội bộ]]. Bạn có thể nhúng tệp trong bất kỳ [[Định dạng tệp được hỗ trợ]] nào.

> [!tip] Kéo và thả để nhúng
> Trên máy tính, bạn cũng có thể kéo và thả các tệp được hỗ trợ trực tiếp vào ghi chú để nhúng chúng tự động.

## Nhúng ghi chú vào ghi chú khác

Để nhúng một ghi chú:

```md
![[Liên kết nội bộ]]
```

Bạn cũng có thể nhúng liên kết đến [[Liên kết nội bộ#Liên kết đến một tiêu đề trong ghi chú|tiêu đề]] và [[Liên kết nội bộ#Liên kết đến một khối trong ghi chú|khối]].

```md
![[Liên kết nội bộ#^b15695]]
```

Đoạn văn bản bên dưới là một ví dụ về khối được nhúng:

![[Liên kết nội bộ#^b15695]]

## Nhúng hình ảnh vào ghi chú

Để nhúng một hình ảnh:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Bạn có thể thay đổi kích thước hình ảnh bằng cách thêm `|640x480` vào đích liên kết, trong đó 640 là chiều rộng và 480 là chiều cao.

```md
![[Engelbart.jpg|100x145]]
```

Nếu bạn chỉ chỉ định chiều rộng, hình ảnh sẽ co giãn theo tỷ lệ khung hình gốc. Ví dụ, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Bạn cũng có thể nhúng hình ảnh được lưu trữ bên ngoài bằng cách sử dụng liên kết Markdown. Bạn có thể kiểm soát chiều rộng và chiều cao theo cách tương tự như liên kết wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Nhúng tệp âm thanh vào ghi chú

Để nhúng một tệp âm thanh:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Nhúng PDF vào ghi chú

Để nhúng một PDF:

```md
![[Document.pdf]]
```

Bạn cũng có thể mở một trang cụ thể trong PDF bằng cách thêm `#page=N` vào đích liên kết, trong đó `N` là số trang:

```md
![[Document.pdf#page=3]]
```

Bạn cũng có thể chỉ định chiều cao tính bằng pixel cho trình xem PDF được nhúng bằng cách thêm `#height=[number]` vào liên kết. Ví dụ:

```md
![[Document.pdf#height=400]]
```

## Nhúng danh sách vào ghi chú

Để nhúng một danh sách từ ghi chú khác, trước tiên hãy thêm một [[Liên kết nội bộ#Liên kết đến một khối trong ghi chú|định danh khối]] vào danh sách của bạn:

```md

- mục danh sách 1
- mục danh sách 2

^my-list-id
```

Sau đó liên kết đến danh sách bằng định danh khối:

```md
![[My note#^my-list-id]]
```

## Nhúng kết quả tìm kiếm

![[Tìm kiếm#Nhúng kết quả tìm kiếm vào ghi chú]]
