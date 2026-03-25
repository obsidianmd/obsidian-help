---
permalink: aliases
cssclasses:
  - soft-embed
---
Nếu bạn muốn tham chiếu một tệp bằng các tên khác nhau, hãy cân nhắc thêm _bí danh_ vào ghi chú. Bí danh là một tên thay thế cho một ghi chú.

Sử dụng bí danh cho những thứ như từ viết tắt, biệt danh, hoặc để tham chiếu đến một ghi chú bằng ngôn ngữ khác.

Nếu bạn chỉ muốn thay đổi cách một liên kết hiển thị ở một nơi, hãy xem cách [[Liên kết nội bộ#Thay đổi văn bản hiển thị liên kết|Thay đổi văn bản hiển thị liên kết]] thay vào đó.

![[Liên kết nội bộ#^callout-internal-links-link-text]]

## Thêm bí danh vào ghi chú

Để thêm bí danh cho một ghi chú, thêm thuộc tính `aliases` trong ghi chú [[Thuộc tính]]. Bí danh luôn phải được định dạng dưới dạng danh sách trong YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Liên kết đến ghi chú bằng bí danh

Để liên kết đến một ghi chú bằng bí danh:

1. Bắt đầu nhập bí danh trong một [[Liên kết nội bộ|liên kết nội bộ]]. Bất kỳ bí danh nào cũng sẽ hiển thị trong danh sách gợi ý, với biểu tượng mũi tên cong bên cạnh.
2. Nhấn `Enter` để chọn bí danh.

Obsidian tạo liên kết với bí danh làm văn bản hiển thị tùy chỉnh, ví dụ `[[Artificial Intelligence|AI]]`.

> [!note] Lưu ý
> Thay vì chỉ sử dụng bí danh làm đích liên kết (`[[AI]]`), Obsidian sử dụng định dạng liên kết `[[Artificial Intelligence|AI]]` để đảm bảo tính tương thích với các ứng dụng khác sử dụng định dạng liên kết wiki.

## Tìm các lưu ý không liên kết cho bí danh

Bằng cách sử dụng [[Liên kết đến]], bạn có thể tìm các lưu ý không liên kết của bí danh.

Ví dụ, sau khi đặt "AI" làm bí danh cho "Artificial intelligence", bạn có thể thấy các đề cập đến "AI" trong các ghi chú khác.

Nếu bạn liên kết một lưu ý không liên kết với một bí danh, Obsidian sẽ chuyển đổi đề cập đó thành một [[Liên kết nội bộ|liên kết nội bộ]] với bí danh làm văn bản hiển thị.
