---
permalink: html
publish: true
mobile: true
description: 'Tìm hiểu cách sử dụng HTML trong Obsidian, bao gồm các hạn chế với việc hiển thị Markdown và các yêu cầu về khối HTML.'
---
Obsidian hỗ trợ HTML để cho phép bạn hiển thị ghi chú theo cách bạn muốn, hoặc thậm chí [[Nhúng trang web|nhúng trang web]]. Việc cho phép HTML bên trong ghi chú của bạn đi kèm với rủi ro. Để ngăn mã độc gây hại, Obsidian _làm sạch_ mọi HTML trong ghi chú của bạn.

> [!example]
> Phần tử `<script>` thông thường cho phép bạn chạy JavaScript bất cứ khi nào nó được tải. Nếu Obsidian không làm sạch HTML, kẻ tấn công có thể thuyết phục bạn dán một đoạn văn bản chứa JavaScript trích xuất thông tin nhạy cảm từ máy tính của bạn và gửi lại cho họ.

Tuy nhiên, vì cú pháp Markdown không hỗ trợ tất cả các dạng định dạng, việc sử dụng HTML đã được làm sạch có thể là một cách khác để nâng cao chất lượng ghi chú của bạn. Chúng tôi đã bao gồm một số cách sử dụng HTML phổ biến hơn.

## Giới hạn của HTML

Obsidian có những giới hạn cụ thể khi sử dụng HTML trong ghi chú của bạn:

### Không có Markdown bên trong HTML

Obsidian không hiển thị cú pháp Markdown bên trong các phần tử HTML. Đây là lựa chọn thiết kế có chủ đích để tối ưu hóa hiệu suất và giữ độ phức tạp của trình phân tích cú pháp ở mức thấp khi quản lý các tài liệu lớn.

Ví dụ, đoạn sau sẽ không hoạt động như mong đợi:

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### Khối HTML phải hoàn chỉnh

Khối HTML phải hoàn chỉnh và không thể chứa dòng trống bên trong chúng. Dòng trống sẽ phá vỡ khối HTML.

Đoạn sau sẽ hoạt động:

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

Đoạn sau sẽ không hoạt động đúng:

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### Khi Markdown có vẻ hoạt động trong HTML

Một số thẻ HTML nội tuyến như `<span>` hoặc `<a>` có chức năng hạn chế và có thể trông như đang hiển thị Markdown, nhưng thực tế không phải vậy. Markdown đang được xử lý bên ngoài ngữ cảnh HTML.

Để biết thêm chi tiết về cách Obsidian xử lý Markdown, xem [[Obsidian Flavored Markdown]].

## Cách sử dụng HTML phổ biến

> [!info] Thêm chi tiết về việc sử dụng `<iframe>` có thể được tìm thấy trong [[Nhúng trang web]].

### Bình luận

[[Cú pháp định dạng cơ bản#Bình luận|Bình luận Markdown]] là cách ưu tiên để thêm bình luận ẩn trong ghi chú của bạn. Tuy nhiên, một số phương pháp chuyển đổi ghi chú Markdown, chẳng hạn như [Pandoc](https://pandoc.org), có hỗ trợ hạn chế cho bình luận Markdown. Trong những trường hợp đó, bạn có thể sử dụng `<!-- HTML Comment -->` thay thế!

### Gạch chân

Nếu bạn cần nhanh chóng gạch chân một mục trong ghi chú, bạn có thể sử dụng `<u>Example</u>` để tạo <u>văn bản được gạch chân</u>.

### Span/Div

Các thẻ span và div có thể được sử dụng để áp dụng các lớp tùy chỉnh từ [[Mẩu CSS|đoạn trích CSS]], hoặc kiểu dáng tùy chỉnh, lên một vùng văn bản được chọn. Ví dụ, sử dụng `<span style="font-family: cursive">your text</span>` có thể cho phép bạn nhanh chóng <span style="font-family: cursive">thay đổi phông chữ</span>.

## Gạch ngang

Cần gạch ngang <s>một số văn bản</s>? Sử dụng `<s>this</s>` để gạch ngang nó.
