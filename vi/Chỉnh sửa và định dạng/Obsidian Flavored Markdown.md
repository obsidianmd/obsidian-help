---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Learn about Obsidian Flavored Markdown, including supported extensions and how Markdown interacts with HTML elements.'
---
Obsidian hướng đến khả năng tối đa mà không phá vỡ bất kỳ định dạng hiện có nào. Do đó, chúng tôi sử dụng sự kết hợp của nhiều biến thể [[Cú pháp định dạng cơ bản|Markdown]].

Obsidian hỗ trợ [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/), và [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown bên trong HTML
> Obsidian không hiển thị cú pháp Markdown bên trong các phần tử HTML. Đây là lựa chọn thiết kế có chủ đích nhằm tối ưu hóa hiệu suất và giữ độ phức tạp của trình phân tích cú pháp ở mức thấp khi quản lý các tài liệu lớn.
>
> Ví dụ, định dạng Markdown như `**bold**` hoặc `` `code` `` sẽ không được xử lý bên trong các thẻ `<div>`, `<span>`, `<table>`, hoặc bất kỳ thẻ HTML nào khác.
>
> ```md
> <div>
> This **will not** be bold.
> </div>
> ```

### Các phần mở rộng Markdown được hỗ trợ

| Cú pháp         | Mô tả                                                                              |
| --------------- | ----------------------------------------------------------------------------------- |
| `[[Link]]`      | [[Liên kết nội bộ]]                                                                |
| `![[Link]]`     | [[Nhúng tệp]]                                                                      |
| `![[Link#^id]]` | [[Liên kết nội bộ#Liên kết đến một khối trong ghi chú\|Tham chiếu khối]]          |
| `^id`           | [[Liên kết nội bộ#Liên kết đến một khối trong ghi chú\|Định nghĩa một khối]]      |
| `[^id]`         | [[Cú pháp định dạng cơ bản#Chú thích\|Chú thích]]                                 |
| `%%Text%%`      | [[Cú pháp định dạng cơ bản#Bình luận\|Bình luận]]                                 |
| `~~Text~~`      | [[Cú pháp định dạng cơ bản#In đậm, in nghiêng, tô sáng\|Gạch ngang]]             |
| `==Text==`      | [[Cú pháp định dạng cơ bản#In đậm, in nghiêng, tô sáng\|Tô sáng]]               |
| `` ``` ``       | [[Cú pháp định dạng cơ bản#Khối mã\|Khối mã]]                                     |
| `- [ ]`         | [[Cú pháp định dạng cơ bản#Danh sách công việc\|Công việc chưa hoàn thành]]       |
| `- [x]`         | [[Cú pháp định dạng cơ bản#Danh sách công việc\|Công việc đã hoàn thành]]         |
| `> [!note]`     | [[Khung ghi chú]]                                                                  |
| (xem liên kết) | [[Cú pháp định dạng nâng cao#Bảng\|Bảng]]                                         |
