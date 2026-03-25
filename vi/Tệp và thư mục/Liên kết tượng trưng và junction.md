---
permalink: symlinks
---
Bạn có thể sử dụng [liên kết tượng trưng](https://en.wikipedia.org/wiki/Symbolic_link) (symlink) và [junction](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) trong kho của bạn để lưu trữ tệp bên ngoài kho và [[Cách Obsidian lưu trữ dữ liệu#Cài đặt toàn cục|thư mục hệ thống]].

> [!danger] Sử dụng tự chịu rủi ro
> Chúng tôi khuyến cáo mạnh mẽ không nên sử dụng liên kết tượng trưng. Khi sử dụng liên kết tượng trưng và junction trong kho của bạn, bạn có nguy cơ mất hoặc hỏng dữ liệu, hoặc làm Obsidian bị sập. Hãy đảm bảo bạn thực hiện sao lưu thường xuyên kho và cài đặt của bạn.

Dưới đây là một số hạn chế hoặc vấn đề mà chúng tôi biết và bạn có thể muốn lưu ý:

- Vòng lặp symlink không được phép, để tránh làm Obsidian bị sập do vòng lặp vô hạn.
- Đích của symlink phải hoàn toàn tách biệt khỏi thư mục gốc của kho hoặc bất kỳ đích symlink nào khác. Tách biệt có nghĩa là một thư mục không chứa thư mục kia, hoặc ngược lại. Obsidian bỏ qua mọi symlink đến thư mục cha của kho, hoặc từ một thư mục trong kho đến một thư mục khác trong cùng kho. Đây là biện pháp bảo vệ để đảm bảo bạn không bị trùng lặp tệp trong kho, điều có thể khiến các liên kết trở nên mơ hồ.
- Symlink có thể không hoạt động tốt với Obsidian Sync, hoặc _bất kỳ loại đồng bộ nào khác_. Nếu đích của symlink là một thư mục đang được đồng bộ bởi một kho Obsidian khác, bạn có thể (tiềm ẩn) gặp xung đột đồng bộ hoặc mất dữ liệu. Một số công cụ đồng bộ, như Git, không theo dõi symlink mà đồng bộ _đường dẫn_ mà symlink trỏ đến, điều này có thể tạo ra kết quả không mong muốn nếu bạn chia sẻ kho với người khác theo cách đó.
- Trình quản lý tệp của Obsidian không thể di chuyển tệp qua ranh giới thiết bị, vì vậy nếu bạn tạo symlink đến một thư mục trên ổ đĩa khác với kho của bạn, bạn sẽ không thể kéo tệp giữa thư mục đó và các thư mục khác bằng trình khám phá tệp của Obsidian. (Bạn sẽ cần sử dụng trình khám phá của hệ điều hành cho các thao tác di chuyển đó, và Obsidian sẽ coi việc di chuyển như một lần xóa và tạo tệp mới. Nó cũng sẽ _không_ cập nhật bất kỳ liên kết nào phụ thuộc vào đường dẫn của tệp đó.)
- Symlink tệp (khác với symlink thư mục) _có thể_ hoạt động, nhưng hiện tại không được hỗ trợ chính thức. Các thay đổi thực hiện bên ngoài Obsidian không được theo dõi, vì vậy nếu bạn thay đổi tệp trực tiếp, Obsidian sẽ không phát hiện thay đổi, cập nhật chỉ mục tìm kiếm, v.v.
- Tạo symlink cho các nội dung trong thư mục `.obsidian/` để chia sẻ giữa các kho **có nguy cơ cao làm hỏng cài đặt của bạn**, trừ khi bạn _thực sự_ biết mình đang làm gì. Nếu bạn quyết định làm theo cách này, ít nhất hãy có bản sao lưu.
