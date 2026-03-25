---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: How to sync your Obsidian notes across devices and platforms.
---
Obsidian lưu trữ ghi chú trên thiết bị của bạn nên bạn luôn có thể truy cập chúng, ngay cả khi ngoại tuyến. Để truy cập ghi chú trên nhiều thiết bị, bạn cần thiết lập phương thức đồng bộ hóa.

Hướng dẫn này đề cập đến các phương thức đồng bộ hóa phổ biến, bao gồm các mẹo để tránh mất dữ liệu và đảm bảo trải nghiệm suôn sẻ.

Chúng tôi cũng khuyến nghị đọc [[Sao lưu tệp Obsidian của bạn|hướng dẫn sao lưu]] để bảo vệ dữ liệu của bạn.

## Các phương thức đồng bộ hóa

Với Obsidian, dữ liệu của bạn đơn giản được lưu trữ dưới dạng các tệp trong một thư mục gọi là [[Kho lưu trữ cục bộ và từ xa|kho]]. Điều này có nghĩa là có nhiều cách để đồng bộ hóa dữ liệu của bạn.

Dưới đây là một số phương thức đồng bộ hóa phổ biến được các thành viên [Cộng đồng Obsidian](https://obsidian.md/community) sử dụng:

1. **Đồng bộ hóa chính hãng**: [[#Obsidian Sync]]
2. **Đồng bộ hóa đám mây bên thứ ba**: [[#iCloud]], [[#OneDrive]], và [[#Google Drive]]
3. **Đồng bộ hóa cục bộ**: [[#Syncthing]]
4. **Quản lý phiên bản**: [[#Git]] và [[#Working Copy]]

## Obsidian Sync

**Hệ thống được đề xuất**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

Phương thức đồng bộ hóa đơn giản và được hỗ trợ chính thức nhất là giải pháp chính hãng của chúng tôi: [[Giới thiệu về Obsidian Sync|Obsidian Sync]].

Obsidian Sync giữ cho các kho của bạn được đồng bộ hóa trên tất cả thiết bị bằng cách sử dụng kho từ xa ngoại tuyến để tạo bản sao dữ liệu của bạn. Một bản sao cục bộ luôn được lưu trên thiết bị của bạn.

Làm theo [[Thiết lập Obsidian Sync|hướng dẫn thiết lập]] để cấu hình Obsidian Sync.

## iCloud

**Hệ thống được đề xuất**: `macOS`, `iOS`, `iPadOS`

iCloud có thể được sử dụng để đồng bộ hóa kho giữa iOS và macOS. Tuy nhiên, **iCloud Drive trên Windows** có thể dẫn đến trùng lặp hoặc hỏng tệp.

**Cách tạo và lưu trữ kho trong iCloud Drive**:

- **Bật iCloud Drive**:
    - Trên macOS: Vào **System Preferences → Apple ID → iCloud → iCloud Drive**.
    - Trên iOS: Vào **Settings → [Tên bạn] → iCloud → iCloud Drive**.
- **Tạo kho mới trong iCloud**:
    - Trên macOS:
        1. Mở **Obsidian** và chọn **Tạo hòm lưu trữ mới**.
        2. Trong trình chọn tệp, điều hướng đến **iCloud Drive → Obsidian**.
        3. Tạo một thư mục cho kho của bạn và đặt tên.
        4. Chọn **Tạo mới** để hoàn tất.
    - Trên iOS:
        1. Mở **Obsidian** và nhấn **Tạo hòm lưu trữ mới**.
        2. Nhập tên cho kho của bạn.
        3. Bật **Store in iCloud**.
        4. Nhấn **Tạo mới**.
- **Mở kho trên thiết bị Apple khác**: 
    - Trên thiết bị macOS hoặc iOS khác, mở **Obsidian**, vào [[Quản lý kho|Chuyển đổi kho]], và chọn **Mở thư mục như một khối lưu trữ**. Điều hướng đến **iCloud Drive → Obsidian**.

> [!warning]+ Vị trí thư mục trên iOS và iPadOS
> Khi sử dụng iCloud trên thiết bị di động, hãy đảm bảo kho của bạn được lưu trữ ở đúng vị trí: `iCloud Drive/Obsidian/[Tên Kho Của Bạn]`.
> 
> Các kho phải nằm trong thư mục **Obsidian** trong iCloud Drive. Thư mục bên phải có biểu tượng Obsidian là đúng. Không sử dụng thư mục thường không có biểu tượng ứng dụng.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Để xác minh vị trí kho của bạn, mở ứng dụng **Files**, nhấn **Duyệt**, chọn **iCloud Drive** dưới **Locations**, và xác nhận kho của bạn nằm trong thư mục **Obsidian**. Nếu kho của bạn ở vị trí khác, bạn có thể gặp sự cố đồng bộ hóa.

> [!tip] Thực hành tốt nhất
> - Đối với **macOS 14 (Sonoma) và trước đó**: Tắt **Optimize Mac Storage** trong cài đặt iCloud để ngăn các tệp bị tải xuống đám mây. Cài đặt này ảnh hưởng đến tất cả bộ nhớ iCloud trên thiết bị, không chỉ Obsidian.
> - Đối với **macOS 15 (Sequoia)**: Nhấp chuột phải vào thư mục **Obsidian** trong iCloud Drive và chọn **Keep Downloaded**.

## OneDrive

**Hệ thống được đề xuất**: `Windows`, `macOS` (chức năng hạn chế trên Android)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up) là một tùy chọn lưu trữ đám mây phổ biến cho người dùng Windows và macOS. Tuy nhiên, nó có hạn chế trên Android và không được hỗ trợ chính thức để đồng bộ hóa kho Obsidian trên iOS.

> [!info] Giữ tệp khả dụng ngoại tuyến
> Trước khi sử dụng OneDrive để đồng bộ hóa, hãy đảm bảo thư mục kho của bạn được đánh dấu là **Always keep on this device**. Điều này ngăn OneDrive tải tệp lên đám mây và khiến Obsidian nghĩ rằng chúng bị thiếu.

**Cách tạo và lưu trữ kho trong OneDrive**:

1. **Thiết lập OneDrive**:
   - Trên Windows: Đăng nhập qua ứng dụng OneDrive hoặc tài khoản Microsoft.
   - Trên macOS: Tải ứng dụng OneDrive và đăng nhập.
2. **Tạo kho mới trong OneDrive**:
   - Trên Windows/macOS:
     1. Mở **File Explorer** (Windows) hoặc **Finder** (macOS) và điều hướng đến **OneDrive → Documents**.
     2. Tạo một thư mục mới (ví dụ: \"Obsidian Vault\").
     3. Mở **Obsidian**, chọn **Tạo hòm lưu trữ mới**, và chọn thư mục OneDrive.
3. **Mở kho trên thiết bị khác**:
   - Trên thiết bị khác, mở **Obsidian**, vào [[Quản lý kho|Chuyển đổi kho]], và chọn **Mở thư mục như một khối lưu trữ**. Điều hướng đến **OneDrive → Documents**.

> [!info] Đồng bộ hóa Android
> OneDrive có thể không hoạt động tốt cho đồng bộ hóa Android. Hãy cân nhắc sử dụng các ứng dụng như [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) hoặc [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

> [!tip] Thực hành tốt nhất
> - Luôn giữ các tệp kho của bạn **Available Offline** bằng cách nhấp chuột phải vào thư mục và chọn **Always keep on this device**.
> - Tránh sử dụng tính năng **Files On-Demand** của OneDrive cho các kho để ngăn sự cố đồng bộ hóa.

## Google Drive

**Hệ thống được đề xuất**: `Windows`, `macOS`, `Android` (chức năng hạn chế trên iOS)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) là một giải pháp lưu trữ đám mây phổ biến khác. Mặc dù không được hỗ trợ chính thức để đồng bộ hóa kho Obsidian, bạn có thể sử dụng các ứng dụng và plugin bên thứ ba để đồng bộ hóa giữa các thiết bị.

> [!info] Hỗ trợ iOS
> Google Drive không được hỗ trợ chính thức để đồng bộ hóa kho Obsidian trên iOS. Hãy cân nhắc sử dụng giải pháp hoặc plugin bên thứ ba để đồng bộ hóa trên iOS.

**Cách tạo và lưu trữ kho trong Google Drive**:

1. **Thiết lập Google Drive**:
    - Trên Windows hoặc macOS: Tải ứng dụng Google Drive và đăng nhập.
    - Trên Android: Đảm bảo Google Drive đã được bật và đăng nhập.
2. **Tạo kho mới trong Google Drive**:
    - Trên Windows/macOS:
        1. Mở **File Explorer** (Windows) hoặc **Finder** (macOS) và điều hướng đến **Google Drive**.
        2. Tạo một thư mục mới (ví dụ: \"Obsidian Vault\").
        3. Mở **Obsidian**, chọn **Tạo hòm lưu trữ mới**, và chọn thư mục Google Drive.
3. **Mở kho trên thiết bị khác**:
    - Trên thiết bị khác, mở **Obsidian**, vào [[Quản lý kho|Chuyển đổi kho]], và chọn **Mở thư mục như một khối lưu trữ**. Điều hướng đến thư mục Google Drive của bạn.

> [!tip] Thực hành tốt nhất
> - Đặt các tệp kho thành **Available Offline** trong Google Drive để tránh sự cố đồng bộ hóa do tải lên đám mây.
> - Đối với iOS, hãy cân nhắc các phương thức thay thế như [[Giới thiệu về Obsidian Sync|Obsidian Sync]], [[#iCloud]], hoặc sử dụng plugin **Remotely Save**.

## Syncthing

**Hệ thống được đề xuất**: `Windows`, `macOS`, `Linux`

Syncthing là một công cụ đồng bộ hóa tệp phi tập trung không dựa vào lưu trữ đám mây. Nó đồng bộ hóa kho của bạn trực tiếp giữa các thiết bị qua mạng nội bộ hoặc internet.

> [!info]+ Hỗ trợ Android
> Ứng dụng Syncthing Android chính thức không còn được duy trì. Tuy nhiên, một phiên bản fork từ cộng đồng có tên [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) vẫn tiếp tục phát triển và có thể được sử dụng trên các thiết bị Android.

**Cách tạo và lưu trữ kho bằng Syncthing**:

1. **Thiết lập Syncthing**:
   - Cài đặt Syncthing trên mỗi thiết bị. Tham khảo [trang web Syncthing](https://syncthing.net/) để xem hướng dẫn cài đặt.
   - Trên Android, cài đặt [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) từ GitHub releases hoặc F-Droid.
2. **Tạo và cấu hình thư mục chia sẻ**:
   - Trên tất cả thiết bị:
     1. Mở Syncthing và tạo một thư mục chia sẻ. Đặt đường dẫn thư mục đến kho Obsidian của bạn.
     2. Đảm bảo cùng một thư mục được chọn trên tất cả thiết bị.
     3. Cấu hình tùy chọn đồng bộ hóa thư mục (ví dụ: **Send & Receive** cho đồng bộ hóa hai chiều).
3. **Mở kho trong Obsidian**:
   - Khi thư mục đã được đồng bộ hóa giữa các thiết bị, mở **Obsidian**, vào [[Quản lý kho|Chuyển đổi kho]], và chọn **Mở thư mục như một khối lưu trữ**.

> [!info] Khả dụng thiết bị
> Syncthing hoạt động tốt nhất khi ít nhất một thiết bị luôn bật để đảm bảo đồng bộ hóa liên tục.

> [!tip] Thực hành tốt nhất
> - Đối với đồng bộ hóa cục bộ, hãy đảm bảo tất cả thiết bị kết nối cùng một mạng.
> - Loại trừ `.obsidian` khỏi đồng bộ hóa nếu bạn muốn cài đặt riêng trên mỗi thiết bị.
> - Sử dụng mẫu bỏ qua để tránh đồng bộ hóa các tệp tạm thời hoặc sao lưu.

## Git

**Hệ thống được đề xuất**: `Windows`, `macOS`, `Linux`

**Git** là một hệ thống quản lý phiên bản cho phép bạn theo dõi thay đổi, cộng tác với người khác và đồng bộ hóa kho thông qua các kho lưu trữ như GitHub, GitLab, hoặc máy chủ tự lưu trữ.

**Cách đồng bộ hóa kho bằng Git**:

1. **Thiết lập kho lưu trữ từ xa**:
    - Tạo một kho lưu trữ trên nền tảng lưu trữ Git (ví dụ: GitHub, GitLab, hoặc máy chủ tự lưu trữ).
2. **Đồng bộ hóa kho của bạn**:
    1. Mở terminal hoặc giao diện Git (ví dụ: GitKraken, Sourcetree).
    2. Khởi tạo kho lưu trữ Git trong thư mục kho bằng `git init`.
    3. Thêm kho lưu trữ từ xa: `git remote add origin [URL]`.
    4. Commit các thay đổi: `git add .` và `git commit -m "Thông điệp của bạn"`.
    5. Đẩy các thay đổi: `git push origin main`.
3. **Kéo các thay đổi trên thiết bị khác**:
    - Clone kho lưu trữ trên thiết bị khác và kéo các thay đổi bằng `git pull origin main`.

> [!info] Yêu cầu đồng bộ hóa thủ công
> Git cung cấp khả năng quản lý phiên bản mạnh mẽ, nhưng đồng bộ hóa không tự động. Bạn phải đẩy và kéo các thay đổi thủ công.

## Đồng bộ hóa iPhone và iPad

**Tùy chọn được đề xuất**:
- [[Giới thiệu về Obsidian Sync|Obsidian Sync]]
- [[#iCloud]]

> [!info] Tránh kết hợp các dịch vụ đồng bộ hóa
> Tránh đồng bộ hóa cùng một kho qua nhiều dịch vụ (ví dụ: sử dụng cả Obsidian Sync và iCloud cùng lúc) để ngăn xung đột hoặc hỏng dữ liệu.

**Tùy chọn không được hỗ trợ**:
Các dịch vụ sau không được hỗ trợ chính thức trên iOS, nhưng người dùng đã tìm ra cách giải quyết bằng công cụ hoặc plugin bên thứ ba:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Một số người dùng đã sử dụng thành công các plugin như **Remotely Save** hoặc **LiveSync** để đồng bộ hóa kho trên iOS. Tuy nhiên, các phương thức này không được hỗ trợ chính thức và kết quả có thể khác nhau.

### Working Copy

**Hệ thống được đề xuất**: `iOS`
**Yêu cầu**: [[#Git]]

**Working Copy** là một ứng dụng Git cho iOS cho phép bạn clone, commit và đẩy các thay đổi đến kho lưu trữ Git. Nó hoạt động tốt để đồng bộ hóa kho Obsidian qua Git, mặc dù một số tính năng yêu cầu mua trong ứng dụng.

**Cách đồng bộ hóa kho bằng Working Copy**:

1. **Cài đặt Working Copy**:
    - Tải ứng dụng **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** trên iPhone hoặc iPad của bạn.
2. **Clone kho lưu trữ Git**:
    - Mở Working Copy, nhấn **Add Repository**, và nhập URL kho lưu trữ (ví dụ: GitHub, GitLab).
3. **Liên kết kho lưu trữ với Obsidian**:
    - Liên kết thư mục kho lưu trữ đã clone đến một kho trống trong **Obsidian**.
4. **Commit và đẩy các thay đổi**:
    - Sau khi chỉnh sửa ghi chú trong Obsidian, sử dụng Working Copy để **Commit** và **Push** các thay đổi đến kho lưu trữ từ xa.
    - Trên các thiết bị khác, kéo các thay đổi bằng Git để đồng bộ hóa kho.

> [!info] Sử dụng từ cộng đồng
> Mặc dù Working Copy không được hỗ trợ chính thức, nhiều người dùng đã sử dụng thành công nó để đồng bộ hóa kho với Git.

## Câu hỏi thường gặp

**Tại sao dịch vụ đồng bộ hóa ưa thích của tôi không được hỗ trợ chính thức?**

Khác với một số ứng dụng ghi chú chỉ truy cập một tệp tại một thời điểm, Obsidian yêu cầu truy cập toàn bộ kho cho các tính năng của nó (ví dụ: cập nhật liên kết khi đổi tên tệp). Điều này khiến một số dịch vụ khó hoạt động ổn định với Obsidian.

**Tại sao tôi cần giữ tệp "Available Offline"?**

Nếu các dịch vụ như OneDrive hoặc iCloud tải tệp lên đám mây (ví dụ: sử dụng **Files On-Demand** hoặc **Optimize Mac Storage**), Obsidian không thể truy cập chúng, gây ra sự cố đồng bộ hóa. Đánh dấu thư mục kho là **Always keep on this device** (OneDrive) hoặc đảm bảo **Keep Downloaded** được bật (iCloud).

**Làm cách nào để quản lý các cấu hình khác nhau cho kho của tôi?**

Obsidian cho phép bạn tùy chỉnh thư mục cấu hình cho mỗi thiết bị bằng tính năng [[Thư mục cấu hình|Thư mục cấu hình]].
