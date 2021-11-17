Có một vài khác biệt giữa cách thức hoạt động của các hệ thống PKM và hệ thống ghi chú khác nhau, có nghĩa là việc chuyển đổi giữa các hệ thống phức tạp hơn một chút. Trong hầu hết các trường hợp, nếu bạn chuyển đổi nó thành markdown, nó sẽ hoạt động khá tốt trong Obsidian. Tuy nhiên, bạn có thể cần phải cẩn thận khi xử lý một số thứ như thẻ và liên kết.

Trong Forum của chúng tôi, có một [Bài đăng thu thập các phương pháp được lập trình bởi những người khác](https://forum.obsidian.md/t/meta-post-migration-workflows/768). Hiện tại, nó bao gồm:

- [Import từ Notion](https://forum.obsidian.md/t/import-from-notion/636)
- [Import từ Notion (tự động)](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728)
- [Import từ Evernote](https://forum.obsidian.md/t/import-from-evernote/108)
- [Import từ OneNote](https://forum.obsidian.md/t/new-tool-for-migration-from-onenote-updated-and-improved-version/3055)
- [Import từ Apple Notes](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
- [Import từ Bear](https://forum.obsidian.md/t/import-from-bear-app/2284)
- [Import từ Zkn3](https://forum.obsidian.md/t/migrating-from-zkn3-to-obsidian-without-losing-your-tags-and-internal-links-documentation/7457)
- [Import từ TiddlyWiki 5](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)

Nếu bạn không thấy hệ thống của mình trong danh sách này, hãy xem các bài đăng trên forum, ai đó có thể đã giải quyết vấn đề của bạn kể từ khi tài liệu này được viết.

Cũng cần lưu ý, các nhà sản xuất nvUltra, một chương trình ghi chú dựa trên markdown khác, có một danh sách trên trang web của họ về [các cách xuất sang nvUltra](https://nvultra.com/help/importing). Trong nhiều trường hợp, phương pháp dường như giống nhau, hoặc ít nhất là một nơi hữu ích để bắt đầu.

## Các công cụ tích hợp

### Nghiên cứu Roam

Nếu bạn có dữ liệu trong Roam, thật dễ dàng xuất và xử lý dữ liệu đó trong Obsidian.

> 1. Chọn "Export all" trong menu:
> ![[Pasted image.png]]

> 2. Nhấn vào nút "Export all" màu xanh lam:
> ![[Pasted image 1.png]]

> 3. Giải nén "Roam-Export-xxxxxxxxxxxxx.zip" vào một thư mục.

> 4. Nhấn vào biểu tượng vault (trong chú giải công cụ có ghi "Open another vault") ở góc dưới cùng bên trái trong ứng dụng và chọn "Open folder as vault".
> Chọn thư mục bạn vừa giải nén.

> 5. Sử dụng [[công cụ chuyển đổi định dạng markdown]] để chuyển đổi định dạng Markdown của Nghiên cứu Roam thành định dạng Obsidian.
> Nó có thể được sử dụng để biến `#tag` thành Obsidian `[[links]]`.
> Nó cũng có thể chuyển đổi `^^highlight^^` thành `==highlight==`.


### Bear

Nếu bạn đang nhập từ Bear, plugin [[công cụ chuyển đổi định dạng markdown]] có tùy chọn chuyển đổi `::highlight::` thành `==highlight==`.

### Sử dụng Zettelkasten

Nếu bạn đang sử dụng phương pháp Zettelkasten để cấu trúc ghi chú của mình, đây là điều bạn có thể muốn biết:

Các liên kết trong Obsidian yêu cầu phải khớp hoàn toàn với tên ghi chú. Điều này có nghĩa là `[[202001010000]]` sẽ không liên kết đúng với `[[202001010000 My Note]]`.

Để khắc phục điều đó, bạn có thể sử dụng [[công cụ chuyển đổi định dạng markdown]] của chúng tôi để chuyển đổi các liên kết Zettelkasten thành `[[202001010000 My Note]]` hoặc `[[202001010000 My Note|My Note]]`.

Bạn cũng có thể quan tâm đến plugin [[Zettelkasten prefixer]].
