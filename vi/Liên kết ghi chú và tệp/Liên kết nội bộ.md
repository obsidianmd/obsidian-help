---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Learn how to link to notes, attachments, and other files from your notes, using internal links.'
---
Tìm hiểu cách liên kết đến ghi chú, tệp đính kèm và các tệp khác từ ghi chú của bạn, sử dụng _liên kết nội bộ_. Bằng cách liên kết các ghi chú, bạn có thể tạo một mạng lưới kiến thức. ^b15695

Obsidian có thể tự động cập nhật liên kết nội bộ trong kho của bạn khi bạn đổi tên tệp. Nếu bạn muốn được hỏi trước thay vì tự động, bạn có thể vô hiệu hóa tùy chọn này tại:

**[[Cài đặt]]** → **[[Cài đặt#Tệp & Liên kết|Tệp & Liên kết]]** → **[[Cài đặt#Luôn cập nhật liên kết nội bộ|Luôn cập nhật liên kết nội bộ]]**.

## Các định dạng được hỗ trợ cho liên kết nội bộ

Obsidian hỗ trợ các định dạng liên kết sau:

- Liên kết wiki: `[[Three laws of motion]]` hoặc `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` hoặc `[Three laws of motion](Three%20laws%20of%20motion.md)`

Các ví dụ trên là tương đương, và chúng hiển thị giống nhau trong trình chỉnh sửa và liên kết đến cùng một ghi chú.

> [!note] Ghi chú
> Khi sử dụng định dạng Markdown, hãy đảm bảo [mã hóa URL](https://en.wikipedia.org/wiki/Percent-encoding) cho đích liên kết. Ví dụ, khoảng trắng trở thành `%20`.

Theo mặc định, do định dạng gọn hơn, Obsidian tạo liên kết bằng định dạng liên kết wiki. Nếu khả năng tương thích quan trọng với bạn, bạn có thể vô hiệu hóa liên kết wiki và sử dụng liên kết Markdown thay thế.

Để sử dụng định dạng Markdown:

1. Mở **[[Cài đặt]]**.
2. Trong **Tệp & Liên kết**, vô hiệu hóa **Use \[\[Wikilinks\]\]**.

Ngay cả khi bạn vô hiệu hóa định dạng liên kết wiki, bạn vẫn có thể tự động hoàn tất liên kết bằng cách gõ hai dấu ngoặc vuông `[[`. Khi bạn chọn một trong các tệp gợi ý, Obsidian sẽ tạo liên kết Markdown thay thế.

> [!note] Ký tự không hợp lệ
> Một chuỗi chứa các ký tự sau có thể không hoạt động như một liên kết: `# | ^ : %% [[ ]]`.
> 
> Chúng tôi khuyên bạn nên tránh sử dụng các ký tự đó và thực hành [đặt tên tệp an toàn](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Liên kết đến một tệp

Để tạo liên kết khi ở trong chế độ Chỉnh sửa, sử dụng một trong các cách sau:

- Gõ `[[` trong trình chỉnh sửa và sau đó chọn tệp bạn muốn tạo liên kết đến.
- Chọn văn bản trong trình chỉnh sửa và sau đó gõ `[[`.
- Mở [[Khay lệnh]] và sau đó chọn Thêm liên kết nội bộ.

![[Bộ chuyển đổi nhanh#^search-autocomplete-large]]

Mặc dù bạn có thể liên kết đến bất kỳ [[Định dạng tệp được hỗ trợ]] nào, liên kết đến các định dạng tệp khác ngoài Markdown cần bao gồm extension, chẳng hạn như `[[Figure 1.png]]`.

> [!tip] Thêm dấu chấm than (!) trước liên kết nội bộ cho phép bạn nhúng nội dung được liên kết. Để biết thêm chi tiết, xem [[Nhúng tệp]].

> [!info] Tệp bị loại trừ
> Các tệp khớp với mẫu [[Cài đặt#Tệp bị loại trừ|Tệp bị loại trừ]] của bạn sẽ bị giảm ưu tiên trong gợi ý liên kết khi tạo liên kết nội bộ.

## Liên kết đến một tiêu đề trong ghi chú

Bạn có thể liên kết đến các tiêu đề cụ thể trong ghi chú, còn được gọi là _liên kết neo_.

**Liên kết đến tiêu đề trong cùng một ghi chú**

Để liên kết đến một tiêu đề trong cùng một ghi chú, gõ `[[#` để nhận danh sách các tiêu đề trong ghi chú để liên kết đến.

Ví dụ, `[[#Xem trước tệp được liên kết]]` sẽ tạo liên kết đến [[#Xem trước tệp được liên kết]].

**Liên kết đến tiêu đề trong ghi chú khác**

Để liên kết đến tiêu đề trong ghi chú khác, thêm dấu thăng (`#`) ở cuối đích liên kết, tiếp theo là văn bản tiêu đề.

Ví dụ, `[[Giới thiệu về Obsidian#Liên kết là thành phần hạng nhất]]` sẽ tạo liên kết đến [[Giới thiệu về Obsidian#Liên kết là thành phần hạng nhất]].

**Liên kết đến tiêu đề phụ**

Bạn có thể thêm nhiều dấu thăng cho mỗi tiêu đề phụ.

Ví dụ, `[[Trợ giúp và hỗ trợ#Questions and advice#Report bugs and request features]]` sẽ tạo liên kết đến [[Trợ giúp và hỗ trợ#Questions and advice#Report bugs and request features]].

**Tìm kiếm tiêu đề trong toàn bộ kho**

Để tìm kiếm tiêu đề trong toàn bộ kho, sử dụng cú pháp `[[## header]]`.

Ví dụ, `[[##` sẽ tìm kiếm chung trong toàn bộ kho, trong khi `[[## team]]` sẽ tìm kiếm tất cả các tiêu đề chứa từ _team_.

> [!info]- Ảnh chụp màn hình tìm kiếm liên kết tiêu đề
>
> ![[internal-links-header.png#interface]]

## Liên kết đến một khối trong ghi chú

Một khối là một đơn vị văn bản trong ghi chú của bạn, chẳng hạn như đoạn văn, trích dẫn khối, hoặc mục danh sách.

Bạn có thể liên kết đến một khối bằng cách thêm `#^` ở cuối đích liên kết, tiếp theo là mã định danh khối duy nhất. Ví dụ: `[[2023-01-01#^37066d]]`. May mắn thay, bạn không cần tìm mã định danh thủ công — khi bạn gõ dấu mũ (`^`), danh sách gợi ý sẽ xuất hiện, cho phép bạn chọn khối chính xác.

Đối với *đoạn văn đơn giản*, đặt khoảng trắng tiếp theo dấu mũ `^` và mã định danh khối ở cuối dòng:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Đối với *khối có cấu trúc* (danh sách, trích dẫn, khung ghi chú, bảng), mã định danh khối nên nằm trên một dòng riêng, với một dòng trống trước và sau:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Đối với *dòng cụ thể trong danh sách*, mã định danh khối có thể được đặt trực tiếp trên một dấu đầu dòng:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Chúng tôi không hỗ trợ liên kết đến các phần cụ thể của trích dẫn, khung ghi chú và bảng.

**Tìm kiếm khối trong toàn bộ kho**

Bạn cũng có thể tìm kiếm các khối để liên kết đến từ toàn bộ kho bằng cú pháp `[[^^block]]`. Tuy nhiên, có nhiều mục được xem là khối hơn so với [[#Liên kết đến một tiêu đề trong ghi chú|liên kết tiêu đề]], nên danh sách này sẽ dài hơn nhiều.

> [!info]- Ảnh chụp màn hình tìm kiếm liên kết khối
> ![[link-block-heading.png#interface]]

Bạn cũng có thể tạo mã định danh khối dễ đọc bằng cách thêm khoảng trắng tiếp theo dấu mũ (`^`) và mã định danh. Mã định danh khối chỉ có thể bao gồm chữ cái Latin, số và dấu gạch ngang.

Ví dụ, thêm `^quote-of-the-day` ở cuối khối:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Bây giờ bạn có thể liên kết đến khối bằng cách gõ `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Khả năng tương thích
> Tham chiếu khối là tính năng đặc trưng của Obsidian và không phải là một phần của định dạng Markdown tiêu chuẩn. Liên kết chứa tham chiếu khối sẽ không hoạt động bên ngoài Obsidian.

## Thay đổi văn bản hiển thị của liên kết

Theo mặc định, Obsidian sẽ hiển thị văn bản liên kết như nó xuất hiện. Ví dụ:
- `[[Example]]` hiển thị là [[Example]]
- `[[Example#Details]]` hiển thị là [[Example#Details]]

Bạn có thể thay đổi cách liên kết được hiển thị bằng cách tùy chỉnh văn bản hiển thị:

**Định dạng liên kết wiki**:
Sử dụng thanh dọc (`|`) để thay đổi văn bản hiển thị.

- `[[Example|Tên tùy chỉnh]]` hiển thị là [[Example|Tên tùy chỉnh]]
- `[[Example#Details|Tên phần]]` hiển thị là [[Example#Details|Tên phần]]

**Định dạng Markdown**:
Sử dụng `[Văn bản hiển thị](URL liên kết)` để tùy chỉnh cách liên kết hiển thị.

- `[Tên tùy chỉnh](Example.md)` hiển thị là [Tên tùy chỉnh](Example.md)
- `[Tên phần](Example.md#Details)` hiển thị là [Tên phần](Example.md#Details)

Phương pháp này hữu ích cho các trường hợp đơn lẻ khi bạn muốn thay đổi giao diện liên kết trong một ngữ cảnh cụ thể. Nếu bạn muốn thiết lập tên liên kết thay thế có thể tái sử dụng trong toàn bộ kho, hãy cân nhắc sử dụng [[Bí danh|bí danh]] thay thế.

Ví dụ, nếu bạn thường xuyên tham chiếu `[[Three laws of motion]]` là `[[The 3 laws]]`, việc thêm "3 laws" làm bí danh cho phép bạn chỉ cần gõ như vậy — không cần thêm văn bản hiển thị tùy chỉnh mỗi lần.

> [!tip] Mẹo
> Sử dụng [[#Thay đổi văn bản hiển thị của liên kết|văn bản hiển thị liên kết]] khi bạn muốn tùy chỉnh cách liên kết trông *ở một vị trí cụ thể*.
> 
> Sử dụng [[Bí danh|bí danh]] khi bạn muốn tham chiếu đến cùng một ghi chú bằng *các tên khác nhau* trong toàn bộ kho.
^callout-internal-links-link-text

## Xem trước tệp được liên kết

> [!note] Ghi chú
> Để xem trước tệp được liên kết, trước tiên bạn cần bật [[Xem trước trang]].

Để xem trước tệp được liên kết, di chuột qua liên kết nội bộ. Khi ở chế độ chỉnh sửa, nhấn `Ctrl` (hoặc `Cmd` trên macOS) trong khi di chuột qua liên kết. Bản xem trước nội dung tệp sẽ xuất hiện bên cạnh con trỏ.
