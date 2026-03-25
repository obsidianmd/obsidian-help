---
permalink: syntax
publish: true
mobile: true
description: 'Learn how to apply basic formatting to your notes in Obsidian, using Markdown.'
---
Tìm hiểu cách áp dụng định dạng cơ bản cho ghi chú của bạn, sử dụng [Markdown](https://daringfireball.net/projects/markdown/). Để biết cú pháp định dạng nâng cao hơn, hãy tham khảo [[Cú pháp định dạng nâng cao]].

## Đoạn văn

Để tạo đoạn văn trong Markdown, hãy sử dụng một **dòng trống** để phân tách các khối văn bản. Mỗi khối văn bản được phân tách bởi một dòng trống được coi là một đoạn văn riêng biệt.

```md
This is a paragraph.

This is another paragraph.
```

This is a paragraph.

This is another paragraph.

Một dòng trống giữa các dòng văn bản tạo ra các đoạn văn riêng biệt. Đây là hành vi mặc định trong Markdown.

> [!tip]- Nhiều khoảng trắng
> Nhiều khoảng trắng liền kề trong và giữa các đoạn văn sẽ được thu gọn thành một khoảng trắng duy nhất khi hiển thị trong [[Các chế độ xem và chế độ chỉnh sửa#Chế độ đọc|Chế độ đọc]] hoặc trên các trang [[Giới thiệu về Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Multiple          adjacent          spaces
> 
> 
> 
> and multiple newlines between paragraphs.
> ```
> 
> > Multiple          adjacent          spaces
> > 
> > 
> > 
> > and multiple newlines between paragraphs.
> 
> Nếu bạn muốn ngăn khoảng trắng bị thu gọn hoặc thêm nhiều khoảng trắng, bạn có thể sử dụng thẻ HTML `&nbsp;` (khoảng trắng không ngắt) hoặc `<br>` (ngắt dòng).

### Ngắt dòng

Theo mặc định trong Obsidian, nhấn `Enter` một lần sẽ tạo một dòng mới trong ghi chú của bạn, nhưng điều này được coi là *sự tiếp tục* của cùng một đoạn văn trong đầu ra được hiển thị, tuân theo hành vi Markdown thông thường. Để chèn một ngắt dòng *trong* một đoạn văn mà không bắt đầu một đoạn văn mới, bạn có thể:

- Thêm **hai khoảng trắng** ở cuối dòng trước khi nhấn `Enter`, hoặc
- Sử dụng phím tắt `Shift+Enter` để chèn trực tiếp một ngắt dòng.

> [!question]- Tại sao nhiều lần nhấn `Enter` không tạo thêm ngắt dòng trong chế độ đọc?
> Trong Markdown, một lần `Enter` đơn lẻ bị bỏ qua, và nhiều lần nhấn `Enter` liên tiếp chỉ tạo ra một đoạn văn mới. Hành vi này phù hợp với quy tắc xuống dòng mềm của Markdown, trong đó các dòng trống thừa không tạo ra ngắt dòng hoặc đoạn văn bổ sung — chúng được thu gọn thành một lần ngắt đoạn duy nhất. Đây là cách Markdown xử lý văn bản theo mặc định, đảm bảo rằng các đoạn văn chảy tự nhiên mà không có các ngắt dòng không mong muốn.

Obsidian bao gồm cài đặt **[[Cài đặt#Ngắt dòng nghiêm ngặt|Ngắt dòng nghiêm ngặt]]**, giúp Obsidian tuân theo đặc tả Markdown tiêu chuẩn cho ngắt dòng.

Để bật tính năng này:

1. Mở **[[Cài đặt]]**.
2. Chuyển đến thẻ **Trình chỉnh sửa**.
3. Bật **Ngắt dòng nghiêm ngặt**.

Khi **Ngắt dòng nghiêm ngặt** được bật trong Obsidian, ngắt dòng có ba hành vi riêng biệt tùy thuộc vào cách các dòng được phân tách:

**Enter đơn không có khoảng trắng**: Một lần `Enter` đơn không có khoảng trắng ở cuối sẽ kết hợp hai dòng riêng biệt thành một dòng duy nhất khi hiển thị.

```md
line one
line two
```

Hiển thị như:

line one line two

**Enter đơn với hai hoặc nhiều khoảng trắng ở cuối**: Nếu bạn thêm hai hoặc nhiều khoảng trắng ở cuối dòng đầu tiên trước khi nhấn `Enter`, hai dòng vẫn là một phần của cùng đoạn văn, nhưng được ngắt bởi một ngắt dòng (phần tử HTML `<br>`). Chúng tôi sẽ sử dụng hai dấu gạch dưới để thay thế cho khoảng trắng trong ví dụ này.

```md
line three__  
line four
```

Hiển thị như:

line three<br>
line four

**Enter kép (có hoặc không có khoảng trắng ở cuối)**: Nhấn `Enter` hai lần (hoặc nhiều hơn) sẽ tách các dòng thành hai đoạn văn riêng biệt (phần tử HTML `<p>`), bất kể bạn có thêm khoảng trắng ở cuối dòng đầu tiên hay không.

```md
line five

line six
```

Hiển thị như:

<p>line five</p>
<p>line six</p>

## Tiêu đề

Để tạo tiêu đề, hãy thêm tối đa sáu ký hiệu `#` trước văn bản tiêu đề của bạn. Số lượng ký hiệu `#` xác định cấp độ của tiêu đề (như được hiển thị trong [[Đề cương]]).

```md
# This is a heading 1
## This is a heading 2
### This is a heading 3
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Đây là tiêu đề 1</h1>
<h2>Đây là tiêu đề 2</h2>
<h3>Đây là tiêu đề 3</h3>
<h4>Đây là tiêu đề 4</h4>
<h5>Đây là tiêu đề 5</h5>
<h6>Đây là tiêu đề 6</h6>

## In đậm, in nghiêng, tô sáng

Định dạng văn bản cũng có thể được áp dụng bằng [[Phím tắt chỉnh sửa]].

| Kiểu dáng | Cú pháp | Ví dụ | Đầu ra |
|-|-|-|-|
| In đậm | `** **` hoặc `__ __` | `**Bold text**` | **Bold text** |
| In nghiêng | `* *` hoặc `_ _`  | `*Italic text*` | *Italic text* |
| Gạch ngang | `~~ ~~` |  `~~Striked out text~~` | ~~Striked out text~~ |
| Tô sáng | `== ==` |  `==Highlighted text==` | ==Highlighted text== |
| In đậm và nghiêng lồng nhau | `** **` và `_ _`  | `**Bold text and _nested italic_ text**` | **Bold text and _nested italic_ text** |
| In đậm và nghiêng | `*** ***` hoặc `___ ___` |  `***Bold and italic text***` | ***Bold and italic text*** |

Định dạng có thể được buộc hiển thị dưới dạng văn bản thuần bằng cách thêm dấu gạch chéo ngược `\` phía trước.

\*\*This line will not be bold\*\*

```markdown
\*\*This line will not be bold\*\*
```

\**This line will be italic and show the asterisks*\*

```markdown
\**This line will be italic and show the asterisks*\*
```

## Liên kết nội bộ

Obsidian hỗ trợ hai định dạng cho [[Liên kết nội bộ|liên kết nội bộ]] giữa các ghi chú:

- Liên kết wiki: `[[Three laws of motion]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`

## Liên kết ngoài

Nếu bạn muốn liên kết đến một URL bên ngoài, bạn có thể tạo một liên kết nội dòng bằng cách bao quanh văn bản liên kết trong dấu ngoặc vuông (`[ ]`), và sau đó là URL trong dấu ngoặc đơn (`( )`).

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md)

Bạn cũng có thể tạo liên kết ngoài đến các tệp trong các kho khác, bằng cách liên kết đến một [[Obsidian URI|Obsidian URI]].

```md
[Note](obsidian://open?vault=MainVault&file=Note.md)
```

### Thoát khoảng trắng trong liên kết

Nếu URL của bạn chứa khoảng trắng, bạn phải thoát chúng bằng cách thay thế bằng `%20`.

```md
[My Note](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Bạn cũng có thể thoát URL bằng cách bao quanh nó với dấu ngoặc nhọn (`< >`).

```md
[My Note](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Hình ảnh bên ngoài

Bạn có thể thêm hình ảnh với URL bên ngoài, bằng cách thêm ký hiệu `!` trước một [[#Liên kết ngoài|liên kết ngoài]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Bạn có thể thay đổi kích thước hình ảnh, bằng cách thêm `|640x480` vào đích liên kết, trong đó 640 là chiều rộng và 480 là chiều cao.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Nếu bạn chỉ chỉ định chiều rộng, hình ảnh sẽ được thu phóng theo tỷ lệ khung hình gốc. Ví dụ:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Mẹo
> Nếu bạn muốn thêm hình ảnh từ bên trong kho của bạn, bạn cũng có thể [[Nhúng tệp#Nhúng hình ảnh vào ghi chú|nhúng hình ảnh vào ghi chú]].

## Trích dẫn

Bạn có thể trích dẫn văn bản bằng cách thêm ký hiệu `>` trước văn bản.

```md
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961
```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

> [!tip]- Mẹo
> Bạn có thể biến trích dẫn của mình thành một [[Khung ghi chú|khung ghi chú]] bằng cách thêm `[!info]` làm dòng đầu tiên trong trích dẫn.

## Danh sách

Bạn có thể tạo danh sách không thứ tự bằng cách thêm `-`, `*`, hoặc `+` trước văn bản.

```md
- First list item
- Second list item
- Third list item
```

- First list item
- Second list item
- Third list item

Để tạo danh sách có thứ tự, hãy bắt đầu mỗi dòng bằng một số theo sau bởi ký hiệu `.` hoặc `)`.

```md
1. First list item
2. Second list item
3. Third list item
```

1. First list item
2. Second list item
3. Third list item

```md
1) First list item
2) Second list item
3) Third list item
```

1) First list item
2) Second list item
3) Third list item

Bạn có thể sử dụng `Shift+Enter` để chèn một [[#Ngắt dòng|ngắt dòng]] trong danh sách có thứ tự mà không làm thay đổi việc đánh số.

```md
1. First list item
   
2. Second list item
3. Third list item
   
4. Fourth list item
5. Fifth list item
6. Sixth list item
```

### Danh sách công việc

Để tạo danh sách công việc, hãy bắt đầu mỗi mục danh sách bằng dấu gạch ngang và khoảng trắng theo sau bởi `[ ]`.

```md
- [x] This is a completed task.
- [ ] This is an incomplete task.
```

- [x] This is a completed task.
- [ ] This is an incomplete task.

Bạn có thể chuyển đổi trạng thái công việc trong Chế độ đọc bằng cách chọn hộp kiểm.

> [!tip]- Mẹo
> Bạn có thể sử dụng bất kỳ ký tự nào bên trong dấu ngoặc vuông để đánh dấu là đã hoàn thành.
>
> ```md
> - [x] Milk
> - [?] Eggs
> - [-] Eggs
> ```
>
> - [x] Milk
> - [?] Eggs
> - [-] Eggs

### Danh sách lồng nhau

Bạn có thể lồng bất kỳ loại danh sách nào — có thứ tự, không thứ tự, hoặc danh sách công việc — dưới bất kỳ loại danh sách nào khác.

Để tạo danh sách lồng nhau, hãy thụt lề một hoặc nhiều mục danh sách. Bạn có thể kết hợp các loại danh sách trong cấu trúc lồng nhau:

```md
1. First list item
   1. Ordered nested list item
2. Second list item
   - Unordered nested list item
```

1. First list item
   1. Ordered nested list item
2. Second list item
   - Unordered nested list item

Tương tự, bạn có thể tạo danh sách công việc lồng nhau bằng cách thụt lề một hoặc nhiều mục danh sách:

```md
- [ ] Task item 1
	- [ ] Subtask 1
- [ ] Task item 2
	- [ ] Subtask 1
```

- [ ] Task item 1
	- [ ] Subtask 1
- [ ] Task item 2
	- [ ] Subtask 1

Sử dụng `Tab` hoặc `Shift+Tab` để thụt lề hoặc giảm thụt lề các mục danh sách đã chọn để dễ dàng tổ chức chúng.

## Đường kẻ ngang

Bạn có thể sử dụng ba hoặc nhiều dấu sao `***`, dấu gạch ngang `---`, hoặc dấu gạch dưới `___` trên một dòng riêng để thêm một đường kẻ ngang. Bạn cũng có thể phân tách các ký hiệu bằng khoảng trắng.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Mã

Bạn có thể định dạng mã cả nội dòng trong một câu, hoặc trong khối riêng.

### Mã nội dòng

Bạn có thể định dạng mã trong một câu bằng cách sử dụng dấu backtick đơn.

```md
Text inside `backticks` on a line will be formatted like code.
```

Text inside `backticks` on a line will be formatted like code.

Nếu bạn muốn đặt dấu backtick trong khối mã nội dòng, hãy bao quanh nó bằng dấu backtick kép như sau: inline ``code with a backtick ` inside``.

### Khối mã

Để định dạng mã dưới dạng khối, hãy bao quanh nó bằng ba dấu backtick hoặc ba dấu ngã.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Bạn cũng có thể tạo khối mã bằng cách thụt lề văn bản sử dụng `Tab` hoặc 4 khoảng trắng.
`````md
    cd ~/Desktop
`````

Bạn có thể thêm tô sáng cú pháp cho khối mã, bằng cách thêm mã ngôn ngữ sau bộ dấu backtick đầu tiên.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian sử dụng Prism để tô sáng cú pháp. Để biết thêm thông tin, hãy tham khảo [Các ngôn ngữ được hỗ trợ](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS và các chế độ chỉnh sửa
> [[Các chế độ xem và chế độ chỉnh sửa#Chế độ nguồn|Chế độ nguồn]] và [[Các chế độ xem và chế độ chỉnh sửa#Xem trước trực tiếp|Xem trước trực tiếp]] không hỗ trợ PrismJS, và có thể hiển thị tô sáng cú pháp khác đi.

#### Lồng khối mã

Khi bạn cần bao gồm một khối mã bên trong một khối mã khác (ví dụ, khi viết tài liệu về cách sử dụng khối mã), bạn có thể sử dụng nhiều hơn ba dấu backtick hoặc dấu ngã cho khối mã bên ngoài.

Để lồng khối mã, hãy sử dụng bốn hoặc nhiều dấu backtick (hoặc dấu ngã) cho khối bên ngoài, trong khi khối bên trong sử dụng ba:
`````md
````md
Here's how to create a code block:
```js
console.log("Hello world")
```
````
`````

Bạn cũng có thể kết hợp dấu backtick và dấu ngã. Điều này đặc biệt hữu ích khi làm việc với mã tạo ra các khối mã khác:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

Nguyên tắc chính là khối mã bên ngoài phải sử dụng **nhiều** ký tự hàng rào (backtick hoặc dấu ngã) hơn bất kỳ khối mã bên trong nào, hoặc sử dụng loại ký tự hàng rào khác.

## Chú thích

Bạn có thể thêm chú thích[^footnote] vào ghi chú của mình bằng cú pháp sau:

[^footnote]: Đây là một chú thích.

```md
This is a simple footnote[^1].

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.
```

Bạn cũng có thể chèn chú thích nội dòng trong một câu. Lưu ý rằng dấu mũ nằm bên ngoài dấu ngoặc vuông.

```md
You can also use inline footnotes. ^[This is an inline footnote.]
```

> [!note] Lưu ý
> Chú thích nội dòng chỉ hoạt động trong chế độ đọc, không hoạt động trong Xem trước trực tiếp.

## Bình luận

Bạn có thể thêm bình luận bằng cách bao quanh văn bản với `%%`. Bình luận chỉ hiển thị trong chế độ Chỉnh sửa.

```md
This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%
```

## Thoát cú pháp Markdown

Trong một số trường hợp, bạn có thể cần hiển thị các ký tự đặc biệt trong Markdown, chẳng hạn như `*`, `_`, hoặc `#`, mà không kích hoạt định dạng của chúng. Để hiển thị các ký tự này theo nghĩa đen, hãy đặt dấu gạch chéo ngược (`\`) trước chúng.

> [!example] Các ký tự thường cần thoát
> 
> - Dấu sao: `\*`
> - Dấu gạch dưới: `\_`
> - Dấu thăng: `\#`
> - Dấu backtick: `` \` ``
> - Dấu gạch đứng (dùng trong bảng): `\|`
> - Dấu ngã: `\~`

```md
\*This text will not be italicized\*.
```

\*This text will not be italicized\*.

Khi làm việc với danh sách đánh số, bạn có thể cần thoát dấu chấm sau số để ngăn định dạng danh sách tự động. Đặt dấu gạch chéo ngược (`\`) trước dấu chấm, **không** phải trước số.

```md
1\. This won't be a list item.
```

1\. This won't be a list item.

## Tìm hiểu thêm

Để tìm hiểu thêm về cú pháp định dạng nâng cao, chẳng hạn như bảng, biểu đồ và biểu thức toán học, hãy tham khảo [[Cú pháp định dạng nâng cao]].

Để tìm hiểu thêm về cách Obsidian phân tích cú pháp Markdown, hãy tham khảo [[Obsidian Flavored Markdown]].
