---
permalink: callouts
publish: true
mobile: true
description: This page details how to use callouts to include additional content without breaking the flow of your notes.
---
Sử dụng khung ghi chú để thêm nội dung bổ sung mà không làm gián đoạn mạch ghi chú của bạn.

Để tạo một khung ghi chú, thêm `[!info]` vào dòng đầu tiên của một trích dẫn khối, trong đó `info` là _định danh loại_. Định danh loại xác định giao diện và cảm nhận của khung ghi chú. Để xem tất cả các loại có sẵn, tham khảo [[#Các loại được hỗ trợ]]. Khung ghi chú cũng được hỗ trợ nguyên bản trên [[Giới thiệu về Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Đây là tiêu đề khung ghi chú
> Đây là một khối khung ghi chú.
> Nó hỗ trợ **Markdown**, [[Liên kết nội bộ|liên kết wiki]], và [[Nhúng tệp|nhúng]]!
> ![[Engelbart.jpg]]
```

> [!info] Đây là tiêu đề khung ghi chú
> Đây là một khối khung ghi chú.
> Nó hỗ trợ **Markdown**, [[Liên kết nội bộ|liên kết wiki]] và [[Nhúng tệp|nhúng]]!
> ![[Engelbart.jpg]]

Bạn có thể chèn một khung ghi chú `[!note]` mặc định bằng [[Khay lệnh|lệnh]] `Insert callout`. Con trỏ sẽ tự động đặt vào trường tên khung ghi chú, cho phép bạn xóa tên mặc định và nhập tên mới trước khi chỉnh sửa nội dung.

Để bao bọc nội dung hiện có trong một khung ghi chú, chọn văn bản (bao gồm danh sách, khối mã, v.v.) và chạy lệnh `Insert callout`. Nội dung đã chọn sẽ được tự động đặt trong khung ghi chú.

Trong [[Các chế độ xem và chế độ chỉnh sửa#Xem trước trực tiếp|Xem trước trực tiếp]], bạn cũng có thể nhấp chuột phải vào tên khung ghi chú để thay đổi loại khung ghi chú.


### Thay đổi tiêu đề

Theo mặc định, tiêu đề của khung ghi chú là định danh loại được viết hoa chữ cái đầu. Bạn có thể thay đổi nó bằng cách thêm văn bản sau định danh loại:

```markdown
> [!tip] Khung ghi chú có thể có tiêu đề tùy chỉnh
> Như cái này.
```

> [!tip] Khung ghi chú có thể có tiêu đề tùy chỉnh
> Như cái này.

Bạn thậm chí có thể bỏ qua phần thân để tạo khung ghi chú chỉ có tiêu đề:

```markdown
> [!tip] Khung ghi chú chỉ có tiêu đề
```

> [!tip] Khung ghi chú chỉ có tiêu đề

### Khung ghi chú có thể thu gọn

Bạn có thể làm cho khung ghi chú có thể thu gọn bằng cách thêm dấu cộng (`+`) hoặc dấu trừ (`-`) ngay sau định danh loại.

Dấu cộng mở rộng khung ghi chú theo mặc định, và dấu trừ thu gọn nó.

```markdown
> [!faq]- Khung ghi chú có thể thu gọn không?
> Có! Trong khung ghi chú có thể thu gọn, nội dung sẽ bị ẩn khi khung ghi chú được thu gọn.
```

> [!faq]- Khung ghi chú có thể thu gọn không?
> Có! Trong khung ghi chú có thể thu gọn, nội dung sẽ bị ẩn khi được thu gọn.

### Khung ghi chú lồng nhau

Bạn có thể lồng khung ghi chú trong nhiều cấp độ.

```markdown
> [!question] Khung ghi chú có thể lồng nhau không?
> > [!todo] Có!, chúng có thể.
> > > [!example]  Bạn thậm chí có thể sử dụng nhiều lớp lồng nhau.
```

> [!question] Khung ghi chú có thể lồng nhau không?
> > [!todo] Có!, chúng có thể.
> > > [!example]  Bạn thậm chí có thể sử dụng nhiều lớp lồng nhau.

### Tùy chỉnh khung ghi chú

[[Mẩu CSS]] và [[Phần mở rộng từ cộng đồng]] có thể định nghĩa khung ghi chú tùy chỉnh, hoặc thậm chí ghi đè cấu hình mặc định.

Để định nghĩa một khung ghi chú tùy chỉnh, tạo khối CSS sau:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Giá trị của thuộc tính `data-callout` là định danh loại bạn muốn sử dụng, ví dụ `[!custom-question-type]`.

- `--callout-color` định nghĩa màu nền sử dụng các số (0–255) cho đỏ, xanh lá và xanh dương.
- `--callout-icon` có thể là ID biểu tượng từ [lucide.dev](https://lucide.dev), hoặc một phần tử SVG.

> [!warning] Lưu ý về phiên bản biểu tượng lucide
> Obsidian cập nhật biểu tượng Lucide định kỳ. Phiên bản hiện tại được bao gồm được hiển thị bên dưới; sử dụng các biểu tượng này hoặc phiên bản cũ hơn trong khung ghi chú tùy chỉnh.
> ![[Ghi công#^lucide]]

> [!tip] Biểu tượng SVG
> Thay vì sử dụng biểu tượng Lucide, bạn cũng có thể sử dụng phần tử SVG làm biểu tượng khung ghi chú.
>
> ```css
> --callout-icon: '<svg>...custom svg...</svg>';
> ```

### Các loại được hỗ trợ

Bạn có thể sử dụng nhiều loại khung ghi chú và bí danh. Mỗi loại đi kèm với màu nền và biểu tượng khác nhau.

Để sử dụng các kiểu mặc định này, thay thế `info` trong các ví dụ bằng bất kỳ loại nào sau đây, như `[!tip]` hoặc `[!warning]`. Loại khung ghi chú cũng có thể được thay đổi bằng cách nhấp chuột phải vào khung ghi chú trong chế độ Xem trước trực tiếp.

Trừ khi bạn [[#Tùy chỉnh khung ghi chú]], bất kỳ loại không được hỗ trợ nào sẽ mặc định thành loại `note`. Định danh loại không phân biệt chữ hoa chữ thường.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Bí danh: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Bí danh: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Bí danh: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Bí danh: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Bí danh: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Bí danh: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Bí danh: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Bí danh: `cite`
