---
aliases: front matter
---

YAML Front Matter là một phần tuỳ chọn của YAML hợp lệ được đặt ở đầu trang và được sử dụng để duy trì siêu dữ liệu cho trang và nội dung cho trang.

YAML Front Matter có thể xử lý được 5 cấp độ siêu dữ liệu trong Obsidian.

Front Matter đã được áp dụng phổ biến bởi những trình sinh mã tĩnh như Jekyll, Hugo, và Gatsby.
Đây là một trong những cách thức phổ biến nhất để đưa siêu dữ liệu vào trong một tệp tin Markdown.

Để dễ hình dung, Front Matter là một khối YAML với **ba dấu gạch ngang** ở trước và sau. ==Và nó cũng cần được đặt ở đầu tệp tin.==

Ví dụ:

```
---
key: value
key2: value2
key3: [one, two, three]
key4:
- four
- five
- six
---
```

Kể từ bản cập nhật 0.9.17, [[Thêm Alias vào Ghi chú|alias]] sẽ sử dụng Front Matter. 
Chúng tôi sẽ dần hoàn thiện để nó có thể dễ tiếp cận hơn với các Lập trình viên đang viết các Tiện ích (Plugins) cho Obsidian và thân thiện hơn với Người dùng.

Hiện tại, ba từ khoá được hỗ trợ nguyên bản gồm: `tags` (thẻ), `aliases` (bí danh), và `cssclass` (lớp CSS).
