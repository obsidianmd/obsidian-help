Hiển thị trình bày biểu đồ của [[Liên kết nội bộ]] giữa các ghi chú của bạn.

Ghi chú với nhiều ghi chú tham chiếu hơn, nó xuất hiện dưới dạng các nút lớn hơn trên biểu đồ.

![[Pasted image 10.png]]

### Mẹo về hình ảnh hóa

- Bạn có thể di chuột qua từng nút để làm nổi bật các kết nối của nó, làm mờ mọi thứ khác.
- ạn có thể kéo các nút xung quanh để sắp xếp lại đồ thị. Điều này có thể hữu ích nếu một số nút đang chồng lên những nút khác.

### Mẹo điều hướng

- Để thu phóng, bạn có thể sử dụng con lăn chuột, cũng như các phím `+` và `-`.
- Để xoay xung quanh, hãy kéo nền hoặc sử dụng các phím mũi tên trên bàn phím.
- Giữ phím `Shift` trong khi điều hướng bằng bàn phím để tăng tốc độ.

### Tùy chỉnh CSS

Vì đồ họa được hiển thị bằng cách sử dụng `<canvas>` và WebGL, [[Tùy chỉnh CSS|CSS]] không thể ảnh hưởng đến những thứ như nút và liên kết. Để tùy chỉnh chế độ xem đồ họa, chúng tôi đã cung cấp một cách để chuyển đổi màu CSS thành các lệnh WebGL.

#### Các class CSS sau được hỗ trợ:

```
.graph-view.color-fill
.graph-view.color-fill-tag (theme-dependent)
.graph-view.color-fill-attachment (theme-dependent)
.graph-view.color-arrow
.graph-view.color-circle
.graph-view.color-line
.graph-view.color-text
.graph-view.color-fill-highlight
.graph-view.color-line-highlight
.graph-view.color-fill-unresolved
```

\* phụ thuộc vào chủ đề có nghĩa là bạn có thể phải thêm `.theme-dark` hoặc `.theme-light` để style cho các chủ đề khác nhau. Xem [[#Tùy chỉnh CSS#Mặc định]] để biết giải thích.

#### Các quy tắc CSS sau được hỗ trợ:

```css
 .graph-view.color-class {
	/* Hỗ trợ tất cả các chỉ thị màu CSS, như #HEX, rgb và rgba */
	color:   #FFF;
	color:   #FFFFFF;
	color:   rgb(0, 0, 0);
	color:   rgba(0, 0, 0, 1);
	/* Opacity (tương tự như rgba) sẽ làm cho màu trong suốt */
	opacity: 0.5;
}
```

#### Mặc định:

Các quy tắc CSS này là những quy tắc mà Obsidian sử dụng theo mặc định. Bạn có thể ghi đè bất kỳ quy tắc nào trong số chúng bằng quy tắc CSS giống hệt hoặc [cụ thể hơn](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Điều này đặc biệt áp dụng cho `.color-fill-tag` và `.color-fill-attachment`. Cách cuối cùng, hãy thêm `!important` vào cuối quy tắc của bạn.

```css
.graph-view.color-fill,
.theme-dark .graph-view.color-fill-tag,
.theme-light .graph-view.color-fill-tag,
.theme-dark .graph-view.color-fill-attachment,
.theme-light .graph-view.color-fill-attachment,
.graph-view.color-arrow,
.graph-view.color-circle,
.graph-view.color-line,
.graph-view.color-text,
.graph-view.color-fill-highlight,
.graph-view.color-line-highlight,
.graph-view.color-fill-unresolved {}
```
