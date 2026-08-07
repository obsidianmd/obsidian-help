---
permalink: community-directory
description: Những gì trang danh sách công khai của một plugin hoặc giao diện trên thư mục Cộng đồng Obsidian hiển thị.
---
Mỗi plugin và chủ đề đều có một trang danh sách công khai trên [Thư mục Cộng đồng Obsidian](https://community.obsidian.md). Chọn một plugin từ [[Phần mở rộng từ cộng đồng#Duyệt plugin cộng đồng|Duyệt]], hoặc một chủ đề từ [[Chủ đề#Duyệt chủ đề|Duyệt]], trong Obsidian, hoặc duyệt trực tiếp tại [community.obsidian.md](https://community.obsidian.md), để mở trang danh sách của nó.

Trang này sẽ giúp bạn hiểu từng phần hoạt động như thế nào, từ góc nhìn của người dùng Obsidian.

> [!tip]- Bạn là nhà phát triển plugin hoặc chủ đề?
> Tìm hiểu cách gửi và quản lý plugin và chủ đề của riêng bạn trong [tài liệu Thư mục Cộng đồng](https://docs.obsidian.md/community-directory).

## Phần đầu

Phần đầu hiển thị biểu tượng và tên của mục, với huy hiệu **Official** nếu nó được tạo bởi những người sáng tạo ban đầu của plugin hoặc chủ đề, cùng với biểu tượng và tên của tác giả và tổng số lượt tải xuống của mục.

Chọn **Add to Obsidian** để mở mục trực tiếp trong Obsidian và cài đặt nó.

## Tổng quan

Thẻ **Overview** hiển thị ảnh chụp màn hình của mục, mô tả chi tiết, trích đoạn từ tệp README, và một lưới các plugin hoặc chủ đề liên quan trong cùng danh mục.

## Bảng điểm

Thẻ **Scorecard** hiển thị các chỉ số đánh giá sức khỏe và kiểm tra tự động cho mục.

Đánh giá sức khỏe tổng thể, chẳng hạn như Xuất sắc, được chia thành các mục: vệ sinh (liệu có README, giấy phép, hướng dẫn đóng góp và mô tả hay không), bảo trì (hoạt động commit và phát hành gần đây), khả năng phản hồi (bao nhiêu vấn đề đã được đóng và bao nhiêu người đóng góp đã hoạt động gần đây), và mức độ áp dụng (số lượt cài đặt và số sao).

Phần kiểm tra hiển thị kết quả của lần quét tự động mới nhất, chẳng hạn như Đạt, được nhóm thành các kiểm tra đạt (ví dụ không có phụ thuộc dễ bị tấn công đã biết, không có mã bị làm rối, chứng thực artifact GitHub đã xác minh, và các API Obsidian mà mục sử dụng, chẳng hạn như Vault Read hoặc Vault Write), tiết lộ (những điều mục thực hiện không nhất thiết là vấn đề nhưng bạn nên biết, chẳng hạn như truy cập bảng tạm hoặc gửi yêu cầu đến tên miền bên ngoài), và các ghi chú khác (chẳng hạn như sử dụng bộ nhớ trình duyệt thay vì API dữ liệu plugin của Obsidian).

> [!info]+ Diễn giải điểm thấp hơn
> Một plugin hoặc chủ đề có điểm sức khỏe hoặc kiểm tra thấp hơn không nhất thiết là không an toàn, nhưng đáng để xem xét kỹ hơn các tiết lộ của nó trước khi cài đặt. Hãy nghĩ về nó như đèn giao thông:
> - 🟢 Ít hoặc không có tiết lộ nghĩa là rủi ro thấp
> - 🟡 Một vài tiết lộ, đáng kiểm tra những thứ như truy cập bảng tạm hoặc mạng
> - 🔴 Nhiều tiết lộ hoặc cảnh báo nghĩa là bạn nên xem xét cẩn thận những gì mục thực hiện trước khi cài đặt.

## Cập nhật

Thẻ **Updates** liệt kê lịch sử phát hành của mục, với phiên bản và ngày của mỗi bản phát hành. Chọn **View all releases on GitHub** để xem toàn bộ lịch sử trong kho lưu trữ của mục.

## Thanh bên

Bên cạnh các thẻ, thanh bên hiển thị tóm tắt sức khỏe và kiểm tra tương ứng với thẻ Bảng điểm, mô tả chi tiết của mục, và các thông tin như phiên bản hiện tại, thời điểm cập nhật và tạo lần cuối, số lần cập nhật và lượt tải xuống, phiên bản Obsidian tương thích, nền tảng được hỗ trợ, và giấy phép. Nếu mục không phải Miễn phí, phần Thanh toán giải thích cách định giá hoạt động, ví dụ các gói trả phí hoặc giới hạn sử dụng. Nếu tác giả đã thêm liên kết tài trợ, liên kết Hỗ trợ cũng xuất hiện ở đây, cùng với biểu tượng, tên của tác giả hoặc tổ chức, và liên kết đến các hồ sơ khác của họ.

## Câu hỏi thường gặp

**Sự khác biệt giữa Miễn phí, Thanh toán tùy chọn và Trả phí trên một trang danh sách là gì?**
Miễn phí nghĩa là không có khoản thanh toán nào. Thanh toán tùy chọn nghĩa là mục dựa vào dịch vụ bên thứ ba có trả phí, hoặc khóa một số tính năng sau thanh toán, trong khi vẫn có thể sử dụng miễn phí. Trả phí nghĩa là mục chỉ có thể truy cập khi thanh toán.

Kiểm tra phần Thanh toán trong thanh bên của trang danh sách để biết chi tiết về cách định giá của một mục cụ thể.

**Tại sao tôi không thể tìm hoặc cài đặt một plugin hoặc chủ đề mà tôi đã thấy đề cập ở nơi khác?**
Tác giả có thể đã lưu trữ nó. Việc lưu trữ sẽ xóa mục khỏi thư mục cộng đồng và ngăn các cài đặt mới.

**Sự khác biệt giữa điểm Sức khỏe và Kiểm tra trên một trang danh sách là gì?**
Sức khỏe phản ánh tình trạng vệ sinh và bảo trì liên tục của mục, chẳng hạn như các commit gần đây và khả năng phản hồi vấn đề. Kiểm tra phản ánh kết quả của lần quét tự động mới nhất của một bản phát hành.
