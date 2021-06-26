---
aliases: alias, aliases
---

Thông thường, bạn muốn tham chiếu đến cùng một file có nhiều tên trong các ngữ cảnh khác nhau. Những tên thay thế này được chúng tôi gọi là "aliases".

Ví dụ: nếu bạn muốn đề cập đến đối tác của mình bằng họ và tên hoặc biệt hiệu của họ. Hoặc bạn có thể muốn đề cập đến "Artificial Intelligence" bằng cách viết tắt "AI". Nếu bạn biết nhiều ngôn ngữ, bạn có thể muốn đề cập đến cùng một khái niệm với tên của chúng bằng cùng một ngôn ngữ mà trong ghi chú đề cập đến nó.

### Đặt aliases

Bắt đầu từ 0.9.16, bạn có thể chỉ định thuộc tính "aliases" trong [[YAML front matter]] của ghi chú như sau:

```
---
aliases: [AI, Artificial Intelligence]
---
```

Xin lưu ý rằng phần này phải được đặt ở đầu ghi chú để có hiệu lực.

Trong tương lai, chúng tôi sẽ xem xét các cách quản lý aliases thân thiện với người dùng hơn là viết chúng theo cách thủ công.

### Liên kết bằng aliases

Khi bạn đã đặt aliases cho file, bạn có thể viết `[[alias]]` để liên kết đến trang gốc. Biểu tượng chuyển hướng sẽ hiển thị trong danh sách tự động hoàn thành như sau:

![[Insert alises.png]]

Một liên kết nội bộ với văn bản hiển thị sẽ được chèn như sau: `[[Thêm aliases vào ghi chú|alias]]`.

Lưu ý: liên kết đến alias **KHÔNG** được chèn dưới dạng `[[alias]]` vì lý do khả năng tương tác, để phần mềm khác cũng có thể nhận ra nó.

### Tìm các đề cập không được liên kết

Sau khi bạn đã đặt aliases cho một ghi chú, bạn có thể tìm thấy các đề cập chưa được liên kết theo cả tên và aliases của ghi chú đó.

Ví dụ: sau khi đặt "AI" làm alias cho "Artificial intelligence", bạn sẽ thấy các đề cập về "AI" trong các file khác trong phần [[Backlinks (Liên kết ngược)]].

Nếu bạn quyết định liên kết đề cập này, một liên kết có văn bản hiển thị được đặt thành alias sẽ được tạo cho bạn. Theo ví dụ trên, `AI` sẽ trở thành `[[Artificial intelligence|AI]]` khi bạn nhấp vào nút "Link".