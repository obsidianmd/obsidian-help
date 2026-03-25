---
permalink: 2fa
---
Nếu bạn có một [tài khoản Obsidian](https://obsidian.md/account), bạn có thể bật xác thực hai yếu tố (2FA) để bảo vệ tài khoản của bạn bằng một bước xác minh thứ hai.

## Kích hoạt 2FA

- Đăng nhập vào [tài khoản Obsidian của bạn](https://obsidian.md/account/profile) từ trình duyệt web.
- Trong phần **Profile**, đi tới **2-factor authentication** và chọn **Kích hoạt**.
- Một cửa sổ popup sẽ xuất hiện để yêu cầu bạn kết nối ứng dụng xác thực bằng **mã QR** hoặc **khóa thiết lập**.

> [!hint]- Các ứng dụng xác thực phổ biến
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Sau khi kết nối, ứng dụng xác thực sẽ cung cấp cho bạn một mã sáu chữ số. Nhập mã đó bên dưới phần **mã QR/khóa thiết lập**, ở bước 3.
- Cuối cùng, nhập mật khẩu hiện tại của bạn.
- Chọn **Complete set up**.
- Cửa sổ popup sẽ được thay thế bằng cửa sổ xác nhận và mã khôi phục của bạn. Vui lòng tải xuống mã khôi phục, vì bạn sẽ cần chúng để mở khóa tài khoản của mình.

2FA của bạn đã được thiết lập.

> [!warning]- Sao lưu mã QR/khóa thiết lập
> Nếu bạn quyết định giữ bản sao lưu **mã QR** hoặc **khóa thiết lập** ngoài mã khôi phục, chúng tôi khuyến nghị mạnh mẽ rằng bạn nên lưu trữ chúng trong hệ thống được mã hóa bằng mật khẩu.

## Tạo mã khôi phục

Nếu bạn đã bật 2FA trước khi mã khôi phục khả dụng, hoặc nếu bạn muốn làm mới mã khôi phục, hãy làm theo các bước sau:

- Đăng nhập vào [tài khoản Obsidian của bạn](https://obsidian.md/account/profile) từ trình duyệt web.
- Bên cạnh 2-factor authentication, chọn **Làm mới mã khôi phục**.
- Trong cửa sổ popup, nhập **mật khẩu** và **mã xác thực 6 chữ số** của bạn.
- Cửa sổ xác nhận sẽ hiển thị mã khôi phục của bạn. Bạn có hai tùy chọn:
    - **Sao chép mã khôi phục**: Sao chép mã để dán ở nơi khác.
    - **Tải xuống mã khôi phục**: Tải xuống tệp `obsidian-recovery-codes.txt` chứa mã của bạn.
- Chọn **Got it** để đóng cửa sổ popup.

Bạn có thể sử dụng mã khôi phục **một lần** thay cho **mã xác thực 6 chữ số**. Bạn cũng có thể làm mới mã khôi phục bất kỳ lúc nào.

## Vô hiệu hóa 2FA

- Đăng nhập vào [tài khoản Obsidian của bạn](https://obsidian.md/account/profile) từ trình duyệt web.
- Trong phần **Profile**, đi tới **2-factor authentication** và chọn **Vô hiệu hóa**.
- Nhập mật khẩu Obsidian của bạn.
- Nhập mã sáu chữ số hiện tại từ ứng dụng xác thực của bạn.
- Chọn **Disable 2FA**.
- Bạn sẽ được đưa trở lại màn hình quản lý tài khoản.

Cài đặt **2-factor authentication** sẽ lại hiển thị nút **Kích hoạt**, cho biết 2FA đã được vô hiệu hóa.

## Câu hỏi thường gặp

**Tôi đã bật 2FA. Tôi có bị đăng xuất khỏi các thiết bị Obsidian hiện tại không?**
Không. Việc bật 2FA không đăng xuất bạn khỏi mọi nơi để thuận tiện cho bạn. Nếu cần, bạn có thể thực hiện thủ công từ trang tài khoản của mình, và sau đó đăng nhập lại trên từng thiết bị.

**Tôi đã bật, sau đó vô hiệu hóa 2FA. Tôi muốn thiết lập lại. Tôi có thể sử dụng mã QR hoặc khóa thiết lập ban đầu không?**
Không. Bạn sẽ được cung cấp **mã QR** mới và **khóa thiết lập** mới mỗi khi bạn bắt đầu thiết lập 2FA mới.

**Tôi đã bật 2FA. Tôi vẫn chưa được yêu cầu nhập mã sau nhiều lần đăng xuất/đăng nhập. 2FA có hoạt động không?**
Bộ nhớ đệm trình duyệt của bạn có thể khiến bạn trông như đang thực hiện thay đổi trên trang (như đăng nhập hoặc đăng xuất) trong khi thực tế bạn đang truy cập dữ liệu đã lưu. Hãy thử sử dụng cửa sổ duyệt riêng tư để đăng nhập nhằm xác nhận 2FA đang hoạt động.

Nếu bạn tiếp tục gặp tình trạng này, vui lòng [gửi báo cáo lỗi](https://forum.obsidian.md/c/bug-reports/7).

**Tôi đã mất mã khôi phục, ứng dụng xác thực và mọi thứ cần thiết để đăng nhập vào tài khoản. Tôi phải làm gì?**

Nếu bạn đã mất mã khôi phục và ứng dụng xác thực, vui lòng gửi email đến [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) để được hỗ trợ lấy lại quyền truy cập vào tài khoản của bạn.
