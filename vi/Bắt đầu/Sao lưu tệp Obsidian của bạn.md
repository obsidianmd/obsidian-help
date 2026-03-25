---
permalink: backup
---
Nếu bạn chưa sao lưu máy tính, hãy bắt đầu ngay! Plugin [[Khôi phục tập tin]] của Obsidian hữu ích nhưng có giới hạn. Nó chỉ có thể khôi phục một lượng dữ liệu nhất định, và lưu trữ thông tin khôi phục theo từng thiết bị. Để bảo vệ tốt hơn, chúng tôi khuyên bạn nên triển khai một hệ thống sao lưu đúng cách.

**Tại sao cần sao lưu dữ liệu?**

Theo mặc định, Obsidian lưu trữ ghi chú của bạn **cục bộ** trên thiết bị, không phải trên đám mây. Điều này có nghĩa là [dữ liệu hoàn toàn thuộc về bạn](https://obsidian.md/about), cho bạn quyền kiểm soát nó. Tuy nhiên, lưu trữ cục bộ có thể bị ảnh hưởng bởi các vấn đề như hỏng dữ liệu hoặc mất dữ liệu. Đây không phải là vấn đề nếu xảy ra, mà là khi nào xảy ra. Sao lưu dữ liệu giúp bảo vệ trước những điều không thể tránh khỏi này và đảm bảo bạn duy trì quyền kiểm soát ghi chú của mình.

## Đồng bộ hóa không phải là sao lưu

Các dịch vụ như [[Giới thiệu về Obsidian Sync|Obsidian Sync]], iCloud, OneDrive và Dropbox giúp bạn đồng bộ ghi chú trên các thiết bị khác nhau. Mặc dù chúng có thể cung cấp các tính năng như [[Lịch sử phiên bản|khôi phục ghi chú]], **chúng không được thiết kế để sao lưu**. Đồng bộ hóa giữ cho ghi chú của bạn được cập nhật, nhưng không bảo vệ khỏi mất dữ liệu.

- **Đồng bộ hóa:** Đồng bộ hóa đảm bảo các tệp của bạn giống nhau trên tất cả thiết bị. Khi bạn thay đổi một tệp trên một thiết bị, nó sẽ được cập nhật trên tất cả các thiết bị đã đồng bộ. Các dịch vụ đồng bộ hóa không có thiết bị "chính".
- **Sao lưu:** Sao lưu lưu một bản sao dữ liệu của bạn ở một vị trí khác để giúp khôi phục trong trường hợp mất dữ liệu hoặc hỏng dữ liệu. Sao lưu không dành cho cập nhật thời gian thực hoặc cộng tác.

Để sao lưu kho đúng cách, hãy sử dụng một công cụ sao lưu chuyên dụng tạo bản sao một chiều dữ liệu của bạn. Công cụ này sẽ gửi dữ liệu của bạn đến một vị trí sao lưu an toàn mà không thay đổi dữ liệu trên thiết bị của bạn.

Nếu bạn sử dụng nhiều thiết bị với đồng bộ hóa, hãy chọn **một thiết bị** làm thiết bị sao lưu. Đây thường là thiết bị chính hoặc thiết bị "chủ yếu" của bạn, thiết bị bạn sử dụng nhiều nhất. Lưu ý rằng hầu hết các dịch vụ đồng bộ hóa không nhận dạng bất kỳ thiết bị nào là "chính"; đây chỉ là một khái niệm để giúp bạn quản lý sao lưu.

> [!Example] Bạn sử dụng Obsidian Sync trên laptop, máy tính bảng, điện thoại và máy tính để bàn ở công ty. Bạn chủ yếu sử dụng kho trên máy tính để bàn ở công ty, đôi khi trên laptop, và hiếm khi trên máy tính bảng hoặc điện thoại. Trong trường hợp này, máy tính để bàn ở công ty sẽ là "thiết bị chính" của bạn để sao lưu.

## Sử dụng plugin cộng đồng

Mặc dù Đội ngũ Obsidian không thể chính thức khuyên dùng bất kỳ plugin cụ thể nào, chúng tôi ghi nhận hai plugin cộng đồng đã trở nên phổ biến trong cộng đồng người dùng để sao lưu tệp:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Sử dụng plugin này để sao lưu kho bằng cách commit nội dung vào một [Kho Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Đây là cách hiệu quả để quản lý phiên bản ghi chú và đảm bảo an toàn trên máy chủ từ xa. Tuy nhiên, xin lưu ý rằng dữ liệu của bạn có thể được lưu trữ trên [[#Sử dụng dịch vụ đám mây|nền tảng lưu trữ bên ngoài]] khi sử dụng phương pháp này.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Plugin này cho phép bạn tạo bản sao cục bộ của kho trong thư mục bạn chọn, với tùy chọn lưu trữ. Bạn thậm chí có thể sử dụng thư mục đồng bộ, như thư mục Dropbox, để kết hợp sao lưu cục bộ và đám mây. Phương pháp này **kết hợp tốt** với các tùy chọn sao lưu được mô tả bên dưới.

## Sử dụng dịch vụ đám mây

> [!info] Không khuyến khích đặt vị trí kho của bạn trong dịch vụ sao lưu đã chọn.

Giữ bản sao lưu trên đám mây là một giải pháp thay thế và bổ sung cho lưu trữ dữ liệu vật lý, thay vì ổ cứng ngoài hoặc USB. Ổ cứng ngoài hoặc USB có thể bị mất hoặc hỏng. Ưu điểm lớn nhất của việc lưu trữ tệp trên đám mây là chúng có sẵn mọi lúc, mọi nơi. Nhược điểm là, hầu hết các dịch vụ sao lưu thuộc sở hữu của một công ty tư nhân.

Về mặt bảo mật, bạn nên luôn chú ý đến quyền truy cập và bảo mật với sao lưu đám mây. [Worldbackupday](https://www.worldbackupday.com/en) duy trì danh sách cập nhật các dịch vụ sao lưu trực tuyến để bạn xem xét sử dụng.

## Sử dụng ổ đĩa ngoài

**Ổ cứng và ổ SSD**
Sao lưu bằng ổ cứng ngoài vẫn có giá trị trong thế giới ngày càng dựa trên đám mây, và chủ yếu được sử dụng để lưu trữ dữ liệu và sao lưu máy tính. Nhược điểm lớn nhất của ổ đĩa ngoài là ổ đĩa có thể hỏng hoặc bị mất. Ưu điểm lớn nhất là dung lượng lưu trữ chỉ cần mua một lần. Sử dụng ổ cứng ngoài thường được kết hợp với [[#Sử dụng sao lưu máy tính|sao lưu máy tính]].

**USB flash**
Ổ flash (còn gọi là ổ USB, thẻ nhớ, hoặc bút nhớ) là phương pháp đơn giản và hiệu quả để sao lưu nhanh.

1. Cắm ổ flash vào máy tính hoặc laptop.
2. Đảm bảo thiết bị được nhận diện và gắn kết trong hệ thống tệp. Nếu cần, định dạng ổ flash để tương thích với hệ thống tệp của bạn.
3. Sao chép thư mục kho từ vị trí hiện tại sang ổ flash.
4. Gỡ ổ flash an toàn.
5. Rút ổ flash khỏi thiết bị.

**Sao lưu NAS**
Đối với người dùng có kinh nghiệm, sao lưu dữ liệu trên máy chủ NAS (Network Attached Storage - Lưu trữ Gắn Mạng) là phương pháp tốt và an toàn, vì nó có nhiều ổ cứng và các cơ chế khôi phục bổ sung.

> [!tip] Nếu ổ đĩa ngoài của bạn chứa thông tin nhạy cảm, khuyến nghị bạn nên giữ ổ đĩa ngoài ở nơi an toàn, chẳng hạn như trong phòng được bảo vệ.

## Sử dụng sao lưu máy tính

Hệ điều hành của bạn cũng cung cấp khả năng giúp tạo sao lưu, cho dù trực tuyến trên đám mây, hoặc trên ổ đĩa ngoài.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Sao lưu với OneDrive hoặc ổ đĩa ngoài.
- **[Mac](https://support.apple.com/en-us/104984)**: Sao lưu ra thiết bị ngoài bằng Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` đến thư mục hoặc ổ đĩa tùy chọn.

## Bước tiếp theo

Trang trợ giúp này cung cấp tổng quan ngắn gọn về các tùy chọn sao lưu, nhưng không đầy đủ. Để biết thêm thông tin chi tiết, hãy truy cập [Worldbackupday.com](https://www.worldbackupday.com/en) hoặc hỏi những người dùng Obsidian khác trong [cộng đồng của chúng tôi](https://obsidian.md/community) về chiến lược sao lưu của họ!
