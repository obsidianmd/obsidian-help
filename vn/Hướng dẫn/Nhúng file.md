### Nhúng attachment

Bạn có thể nhúng các file attachment như hình ảnh hoặc âm thanh vào ghi chú của mình. Sử dụng cú pháp `![[filename.png]]` như sau:

![[Engelbart.jpg]]

![[Trích từ Mother of All Demos (1968).ogg]]

Bạn có thể nhúng file PDF vào ghi chú của mình với cùng một cú pháp. Ngoài ra, bạn có thể viết `![[My File.pdf#page=number]]` để mở trực tiếp trang PDF cụ thể đó.

### Nhúng note

Bạn cũng có thể nhúng ghi chú, với cùng một cú pháp:

![[Accepted file formats]]

### iframe

"iframe" là một cách để nhúng một trang web vào một trang khác. Nó hữu ích vì Markdown có thể chấp nhận HTML, một ngôn ngữ đơn giản để xây dựng các trang web mà chúng ta thấy hàng ngày.

Ví dụ:

```html
<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>
```

Sản xuất:

<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>

Cú pháp cơ bản là:

```html
<iframe src="INSERT YOUR URL HERE"></iframe>
```

Một số trang web có những điều kỳ quặc không cho phép bạn nhúng chúng vào. Ví dụ: bạn không thể nhúng video YouTube bằng cách sử dụng URL bình thường của video đó, nhưng bạn có thể sử dụng URL nhúng của video đó là `https://www.youtube.com/embed/VIDEO_ID`.

Nếu bạn muốn nhúng một trang web, hãy thử tìm kiếm "{website} embed iframe".

Ví dụ: bạn có thể nhúng các tweet Twitter như vậy theo đề xuất của kết quả tìm kiếm:

```html
<iframe
	border=0
	frameborder=0
	height=250
	width=550  
	src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20">
</iframe>
```

<iframe border=0 frameborder=0 height=250 width=550  
 src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>

---

### Note của nhà lập trình

Cú pháp nhúng này được lấy cảm hứng từ cú pháp hình ảnh của Markdown. Có hai nhận xét:

 1. `[Image](link.png)` liên kết đến hình ảnh, nhưng `![Image](link.png)` thực sự hiển thị nó.

 2. Cú pháp liên kết nội bộ dựa trên giả định này: `[[My page]]` là một phím tắt (hoặc "syntactic sugar" nếu bạn muốn) cho `[My page](My page)`.

Để kết hợp hai điều này, chúng ta có thể nghĩ ra một mẫu thứ ba: `![[My page]]` phải tương đương với `![My page](My page)`, theo quy ước về hình ảnh và sẽ hiển thị nó nếu tiêu đề là giống như liên kết.

Có những cách triển khai khác, ví dụ như Roam Research sử dụng `{{embed: ((NODE_ID))}}`. Chúng tôi cũng đã xem xét việc sử dụng cú pháp `((Page name))`, nhưng chúng tôi cảm thấy như `![[Page name]]` nhất quán hơn, quen thuộc hơn và để lại nhiều khoảng trống hơn để các ký hiệu khác có ý nghĩa.

#### Thay đổi kích thước hình ảnh
Bạn có thể thay đổi kích thước hình ảnh bằng cú pháp sau:

Đối với hình ảnh markdown, hãy sử dụng `![AltText|100x100](https://url/to/image.png)`

Để nhúng, hãy sử dụng `![[image.png|100x100]]`

Để có tỷ lệ hình ảnh theo tỷ lệ khung hình của nó, hãy bỏ qua height `![[image.png|100]]`
