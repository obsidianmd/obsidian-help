---
aliases: front matter
---

YAML front matter xử lý năm cấp độ siêu dữ liệu trong Obsidian.

Front matter về cơ bản là một phần của các thuộc tính văn bản thuần túy được đặt ở đầu file. Front matter đã được phổ biến bởi các máy phát điện tĩnh như Jekyll, Hugo và Gatsby. Đó là một trong những cách phổ biến nhất để đưa siêu dữ liệu vào một file Markdown.

Front matter là một khối YAML có **ba dấu gạch ngang** cả trước và sau. ==Nó cũng cần được đặt ở đầu file.==

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

Kể từ 0.9.17, [[Thêm alias vào ghi chú|alias]] sử dụng front matter. Chúng tôi sẽ dần dần làm cho nó dễ tiếp cận hơn với các nhà lập trình plugin và thân thiện hơn với người dùng.

Hiện tại, ba khóa được hỗ trợ nguyên bản: `tags`, `aliases` và `cssclass`.