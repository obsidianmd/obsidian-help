---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Mẫu|Mẫu Web Clipper]] có thể sử dụng các biến để tự động điền trước dữ liệu từ trang vào một mẫu. Các biến có thể được sử dụng trong **tên ghi chú**, **vị trí ghi chú**, **thuộc tính**, và **nội dung ghi chú**. Các biến cũng có thể được chỉnh sửa bằng [[Bộ lọc|bộ lọc]].

Sử dụng biểu tượng `...` trong tiện ích mở rộng [[Giới thiệu về Obsidian Web Clipper|Web Clipper]] để truy cập các biến trang hiện tại dùng trong các mẫu. Có năm loại biến bạn có thể sử dụng:

- [[Biến#Biến cài đặt trước|Biến cài đặt trước]]
- [[Biến#Biến gợi ý|Biến gợi ý]]
- [[Biến#Biến meta|Biến meta]]
- [[Biến#Biến bộ chọn|Biến bộ chọn]]
- [[Biến#Biến Schema.org|Biến Schema.org]]

## Biến cài đặt trước

Biến cài đặt trước được tạo tự động dựa trên nội dung trang. Chúng thường hoạt động với hầu hết các trang web.

Biến nội dung chính là `{{content}}`, chứa nội dung bài viết, hoặc [[Bút tô sáng|phần tô sáng]], hoặc phần chọn nếu có văn bản được chọn trên trang. Lưu ý rằng `{{content}}` cố gắng trích xuất nội dung chính của trang, điều này không phải lúc nào cũng đúng ý bạn. Trong trường hợp đó, bạn có thể sử dụng các biến cài đặt trước khác hoặc biến bộ chọn để trích xuất nội dung bạn cần.

| Biến                | Mô tả                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Tác giả của trang                                                                      |
| `{{content}}`       | Nội dung bài viết, [[Bút tô sáng\|phần tô sáng]], hoặc phần chọn, ở định dạng Markdown |
| `{{contentHtml}}`   | Nội dung bài viết, [[Bút tô sáng\|phần tô sáng]], hoặc phần chọn, ở định dạng HTML |
| `{{date}}`          | Ngày hiện tại, có thể định dạng bằng bộ lọc `date`                                    |
| `{{description}}`   | Mô tả hoặc trích đoạn                                                                 |
| `{{domain}}`        | Tên miền                                                                               |
| `{{favicon}}`       | URL favicon                                                                            |
| `{{fullHtml}}`      | HTML chưa xử lý của toàn bộ nội dung trang                                            |
| `{{highlights}}`    | [[Bút tô sáng\|Phần tô sáng]] với văn bản và dấu thời gian                      |
| `{{image}}`         | URL hình ảnh chia sẻ mạng xã hội                                                      |
| `{{published}}`     | Ngày xuất bản, có thể định dạng bằng bộ lọc `date`                                    |
| `{{selection}}`     | Phần chọn ở định dạng Markdown                                                        |
| `{{selectionHtml}}` | Phần chọn ở định dạng HTML                                                            |
| `{{site}}`          | Tên trang web hoặc nhà xuất bản                                                       |
| `{{title}}`         | Tiêu đề của trang                                                                     |
| `{{time}}`          | Ngày và giờ hiện tại                                                                   |
| `{{url}}`           | URL hiện tại                                                                           |
| `{{words}}`         | Số từ                                                                                  |

## Biến gợi ý

Biến gợi ý tận dụng các mô hình ngôn ngữ để trích xuất và chỉnh sửa dữ liệu bằng ngôn ngữ tự nhiên. Biến gợi ý yêu cầu [[Thông dịch|Thông dịch]] phải được kích hoạt và cấu hình.

Biến gợi ý sử dụng cú pháp `{{"tóm tắt của trang"}}`. Dấu ngoặc kép quanh gợi ý rất quan trọng và giúp phân biệt gợi ý với biến cài đặt trước. Phản hồi gợi ý có thể được xử lý sau với [[Bộ lọc|bộ lọc]], ví dụ `{{"tóm tắt của trang"|blockquote}}`.

### Khi nào sử dụng biến gợi ý

Biến gợi ý có lợi thế là cực kỳ linh hoạt và dễ viết, tuy nhiên chúng đi kèm với một số đánh đổi: chúng chạy chậm hơn, và có thể có các vấn đề về chi phí và quyền riêng tư tùy thuộc vào [[Thông dịch#Mô hình|nhà cung cấp]] bạn chọn.

Không giống các loại biến khác, biến gợi ý cần được xử lý bởi một mô hình ngôn ngữ bên ngoài, nên chúng chỉ được thay thế sau khi [[Thông dịch|Thông dịch]] đã chạy.

Tốt nhất *không nên* sử dụng biến gợi ý nếu dữ liệu bạn muốn trích xuất có định dạng nhất quán có thể được trích xuất bằng các loại biến khác.

Mặt khác, biến gợi ý có thể hữu ích nếu dữ liệu bạn muốn trích xuất có định dạng *không nhất quán* giữa các trang web. Ví dụ, bạn có thể tạo một [[Obsidian Web Clipper/Mẫu|mẫu]] để lưu sách hoạt động được trên mọi trang sách. Biến gợi ý như `{{"tác giả của cuốn sách"}}` sẽ hoạt động trên bất kỳ trang sách nào, trong khi biến bộ chọn thường chỉ hoạt động cho một trang cụ thể.

### Ví dụ

Gợi ý có thể sử dụng hầu như bất kỳ truy vấn ngôn ngữ tự nhiên nào. Tùy thuộc vào mô hình bạn sử dụng, gợi ý có thể truy vấn hoặc dịch dữ liệu giữa các ngôn ngữ.

- `{{"tóm tắt ba dấu đầu dòng, dịch sang tiếng Pháp"}}` để trích xuất các dấu đầu dòng về trang, và dịch chúng sang tiếng Pháp.
- `{{"un resumé de la page en trois points"}}` để trích xuất ba dấu đầu dòng bằng gợi ý tiếng Pháp.

Gợi ý có thể biến đổi nội dung trang thành JSON có thể được thao tác với [[Bộ lọc|bộ lọc]]. Ví dụ:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Biến meta

Biến meta cho phép bạn trích xuất dữ liệu từ các [phần tử meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) trong trang, bao gồm dữ liệu [Open Graph](https://ogp.me/) được sử dụng để điền trước các bản xem trước chia sẻ mạng xã hội.

- `{{meta:name}}` trả về nội dung của thẻ meta name với tên đã cho, ví dụ `{{meta:name:description}}` cho thẻ meta `description`.
- `{{meta:property}}` trả về nội dung của thẻ meta property với thuộc tính đã cho, ví dụ `{{meta:property:og:title}}` cho thẻ meta `og:title`.

## Biến bộ chọn

Biến bộ chọn cho phép bạn trích xuất nội dung văn bản từ các phần tử trên trang bằng [bộ chọn CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Cú pháp là `{{selector:cssSelector?attribute}}`, trong đó `?attribute` là tùy chọn. Nếu không chỉ định thuộc tính, nội dung văn bản của phần tử sẽ được trả về. Bạn cũng có thể sử dụng `{{selectorHtml:cssSelector}}` để lấy nội dung HTML của phần tử. Biến bộ chọn thường hoạt động tốt nhất trên một trang web cụ thể hoặc tập hợp các trang web có cấu trúc HTML nhất quán.

- `{{selector:h1}}` trả về nội dung văn bản của bất kỳ phần tử `h1` nào trên trang.
- `{{selector:.author}}` trả về nội dung văn bản của bất kỳ phần tử `.author` nào trên trang.
- `{{selector:img.hero?src}}` trả về thuộc tính `src` của hình ảnh có lớp `hero`.
- `{{selector:a.main-link?href}}` trả về thuộc tính `href` của thẻ neo có lớp `main-link`.
- `{{selectorHtml:body|markdown}}` trả về toàn bộ HTML của phần tử `body`, chuyển đổi sang Markdown bằng [[Bộ lọc#Xử lý HTML|bộ lọc]] `markdown`.
- Bộ chọn CSS lồng nhau và các bộ kết hợp được hỗ trợ nếu bạn cần độ chính xác cao hơn.
- Nếu nhiều phần tử khớp với bộ chọn, một mảng sẽ được trả về, mà bạn có thể xử lý với [[Bộ lọc#Mảng và đối tượng|bộ lọc mảng và đối tượng]] như `join` hoặc `map`.

Biến bộ chọn cũng có thể được sử dụng trực tiếp trong [[Logic|logic mẫu]]:

- Trong vòng lặp: `{% for comment in selector:.comment %}...{% endfor %}`
- Trong điều kiện: `{% if selector:.premium-badge %}...{% endif %}`
- Trong gán biến: `{% set items = selector:.list-item %}`

## Biến Schema.org

Biến schema cho phép bạn trích xuất dữ liệu từ [schema.org](https://schema.org/) JSON-LD trên trang. Dữ liệu schema.org cũng có thể được sử dụng để tự động [[Obsidian Web Clipper/Mẫu#Khớp Schema.org|kích hoạt một mẫu]].

- `{{schema:@Type:key}}` trả về giá trị của khóa từ schema.
- `{{schema:@Type:parent.child}}` trả về giá trị của thuộc tính lồng nhau.
- `{{schema:@Type:arrayKey}}` trả về mục đầu tiên trong một mảng.
- `{{schema:@Type:arrayKey[index].property}}` trả về mục tại chỉ mục được chỉ định trong một mảng.
- `{{schema:@Type:arrayKey[*].property}}` trả về thuộc tính cụ thể từ tất cả các mục trong một mảng.

Bạn cũng có thể sử dụng ký hiệu viết tắt mà không cần chỉ định loại schema:

- `{{schema:author}}` sẽ khớp với thuộc tính `author` đầu tiên tìm thấy trong bất kỳ loại schema nào.
- `{{schema:name}}` sẽ khớp với thuộc tính `name` đầu tiên tìm thấy trong bất kỳ loại schema nào.

Ký hiệu viết tắt này đặc biệt hữu ích khi bạn không biết hoặc không quan tâm đến loại schema cụ thể, nhưng bạn biết tên thuộc tính mà bạn đang tìm kiếm.

Thuộc tính lồng nhau và truy cập mảng cũng hoạt động, cả có và không có `@Type` schema được chỉ định:

- `{{schema:author.name}}` sẽ tìm thuộc tính `author` đầu tiên và sau đó truy cập thuộc tính con `name` của nó.
- `{{schema:author[0].name}}` sẽ truy cập `name` của tác giả đầu tiên trong một mảng các tác giả.
- `{{schema:author[*].name}}` sẽ trả về một mảng tất cả tên tác giả.
