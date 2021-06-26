Obsidian cho phép các nhà lập trình viết các plugin của bên thứ ba để mở rộng chức năng của Obsidian.

Hiện tại, API plugin đang ở trạng thái alpha. Điều này có nghĩa là bất kỳ phần nào của API đều có thể đưa ra các thay đổi lớn trong bản phát hành tương lai.

### Dành cho các nhà phát triển

Để biết hướng dẫn về cách tạo plugin mới, hãy xem [plugin mẫu](https://github.com/obsidianmd/obsidian-sample-plugin).

Để biết tài liệu về API, hãy xem [plugin API repo](https://github.com/obsidianmd/obsidian-api).

Sau khi tạo plugin, bạn có thể thêm plugin đó vào thị trường plugin cộng đồng của chúng tôi bằng cách tạo một pull request trong [releases repo](https://github.com/obsidianmd/obsidian-releases). Tham khảo plugin mẫu về cách phát hành bản cập nhật cho plugin của bạn.

### Dành cho người dùng

#### Chế độ an toàn

Theo mặc định, Obsidian đã bật Chế độ an toàn để bảo vệ bạn khỏi nguy cơ gây hại. Trong Chế độ an toàn, không có plugin của bên thứ ba nào chạy.

Xin lưu ý rằng các plugin của bên thứ ba có thể truy cập các file trên máy tính của bạn, kết nối internet và thậm chí cài đặt các chương trình bổ sung. Để đọc thêm về bảo mật plugin, hãy [[#Bảo mật Plugin|xem tại đây]].

Để cài đặt plugin của bên thứ ba, bạn cần tắt Chế độ an toàn trong Settings -> Third-party plugin -> Safe Mode.

#### Khám phá và cài đặt các plugin cộng đồng

Sau khi tắt Chế độ an toàn, bạn có thể tìm thấy các plugin của bên thứ ba do cộng đồng tạo trong Settings -> Third-party plugin -> Community plugins -> Browse.

Trên trang này, bạn có thể duyệt các plugin theo mức độ phổ biến hoặc tìm kiếm các plugin cụ thể. Nhấp vào một plugin để xem chi tiết và hướng dẫn từ tác giả plugin. Trong trang chi tiết, bạn có thể nhấp vào "Install" để cài đặt một plugin.

Sau khi cài đặt, bạn có thể tìm thấy các plugin đã cài đặt trong Settings -> Third-party plugin. Bạn cần kích hoạt nó để sử dụng nó. Bạn cũng có thể gỡ cài đặt nó ở đó.

### Bảo mật Plugin

Cảm ơn bạn đã tin tưởng Obsidian cho dữ liệu của bạn! Điều này có ý nghĩa rất lớn đối với chúng tôi và chúng tôi rất coi trọng vấn đề bảo mật. Điều đó cũng bao gồm các plugin của bên thứ ba.

Vì lý do kỹ thuật với nền tảng của chúng tôi, chúng tôi không thể hạn chế các quyền hoặc cấp truy cập cụ thể đối với các plugin. Obsidian hiện đang được cung cấp miễn phí nên chúng tôi không thể xem xét thủ công từng plugin.

Tin tốt là Obsidian có một cộng đồng tuyệt vời và đầy nhiệt huyết, vì vậy chúng tôi dựa vào sự tin tưởng của cộng đồng để đảm bảo tính bảo mật của các plugin của bên thứ ba.

Nói chung, bạn có thể tin tưởng hầu hết các plugin phổ biến từ cộng đồng. Chúng tôi yêu cầu tất cả các plugin của bên thứ ba cộng đồng phải có nguồn mở trên GitHub. **Nếu bạn đang làm việc với dữ liệu nhạy cảm, chúng tôi khuyên bạn nên kiểm tra mã plugin trước khi cài đặt để đáp ứng nhu cầu bảo mật của bạn.** Bạn có thể tìm thấy liên kết đến kho chứa plugin trên trang chi tiết plugin.

Nếu bạn tìm thấy bất kỳ lỗi bảo mật nào với plugin của bên thứ ba, hãy liên hệ với tác giả plugin bằng cách thêm issue trên GitHub. Nếu bạn cho rằng plugin độc hại, hãy liên hệ với chúng tôi để được điều tra và xóa plugin.