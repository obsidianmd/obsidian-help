Obsidian Publish™ là một dịch vụ lưu trữ trả phí cho các ghi chú của bạn.

Để biết hướng dẫn về cách publish ghi chú của bạn từ bên trong ứng dụng Obsidian, hãy tham khảo [[Publish|Publish plugin]].

### Privacy

Bạn có toàn quyền kiểm soát những gì sẽ publish thông qua [[Publish|publish plugin]] - toàn bộ vault của bạn hoặc chỉ các ghi chú đã chọn trong vault của bạn. Đối với bất kỳ ghi chú nào bạn chọn **không** publish, bạn có thể tin tưởng rằng những ghi chú đó vẫn hoàn toàn privacy và Obsidian Publish không hề biết về chúng.

### Sao lưu

Lưu ý rằng Obsidian Publish không thể sử dụng làm bản sao lưu cho nội dung của bạn. Đảm bảo rằng bạn luôn có một bản sao lưu trang web của mình bằng cách sử dụng bất kỳ phương pháp sao lưu ưa thích của bạn. Obsidian Publish sẽ tập trung hơn vào chức năng, tính dễ sử dụng và tính khả dụng của trang web.

### Demo

Có thể bạn đã xem bài viết này trên trang web chính thức của chúng tôi do Obsidian Publish cung cấp.

Nếu chưa, bạn có thể truy cập tại đây: https://publish.obsidian.md/help.

### Những gì được bao gồm trong dịch vụ

Dịch vụ Obsidian Publish cho phép bạn tạo trang web của mình trực tiếp từ bên trong ứng dụng Obsidian bằng cách chọn những ghi chú bạn muốn publish.

Để tùy chỉnh trang web của mình, bạn có thể chọn giữa chế độ sáng và tối, đồng thời chuyển đổi giữa độ dài dòng có thể đọc được và độ dài toàn trang.

Có một số thành phần có thể được bật hoặc tắt từ [[Publish|Publish plugin]]. Các thay đổi đối với các tùy chọn này sẽ được phản ánh trên trang web đã xuất bản của bạn sau khi bộ nhớ cache xóa, thường trong vòng 5 phút.

##### Điều hướng

Bật tùy chọn này sẽ thêm một thanh bên điều hướng hiển thị tất cả các trang đã publish và các thư mục chứa chúng. Người xem sẽ thấy ghi chú đang mở hiện tại được đánh dấu và có thể nhấn vào bất kỳ ghi chú nào khác để điều hướng.

##### Thanh tìm kiếm

Thêm thanh tìm kiếm vào trang. Thanh này có thể được sử dụng để tìm kiếm các trang, alias và tiêu đề trong các trang. Nó hiện không tìm kiếm thông qua toàn bộ nội dung của trang web.

##### Chế độ xem đồ họa

Hiển thị biểu đồ cục bộ của trang hiện đang mở. Nó sử dụng công cụ kết xuất tương tự như plugin [[Graph View]] trong Obsidian.

##### Mục lục

Hiển thị mục lục cho trang hiện đang mở. Danh sách được tạo từ các tiêu đề trong trang, tương tự như plugin [[Outline]]. Người xem điều hướng ghi chú sẽ thấy tiêu đề tương ứng được đánh dấu khi họ cuộn và có thể nhấn vào tiêu đề khác để chuyển đến chúng ngay lập tức.

##### Liên kết ngược

Ở cuối mỗi trang, hiển thị phần "Linked to this page" chứa các liên kết ngược từ các trang khác. Nếu không có liên kết ngược, phần này sẽ không được hiển thị.

##### Tag

Khi người đọc nhấp vào một tag, họ có thể thấy danh sách các trang khác có cùng một tag.

##### Xem trước hover

Khi di chuột qua các liên kết, nội dung của chúng được hiển thị trong hộp popup. Điều này hoạt động tương tự như plugin [[Trang xem trước]] trong Obsidian.

##### Tùy chỉnh CSS

Để tùy chỉnh style trang web của bạn, bạn có thể tải lên một `publish.css`. File này phải được lưu trữ trong thư mục gốc của trang web của bạn. Bạn có thể sử dụng chủ đề hiện có của mình và thêm một số chỉnh sửa bổ sung để xuất bản trong `publish.css`.

##### Favicon

Để thay đổi biểu tượng yêu thích của trang web của bạn, bạn có thể tải lên các biểu tượng `png` với bất kỳ kích thước nào ở định dạng `favicon-32.png` hoặc `favicon-32x32.png`. Bạn cũng có thể tải lên file `favicon.ico`. Các file này được lưu trữ trong bất kỳ thư mục nào. Các kích thước được đề xuất hiện tại (kể từ năm 2020) là `32×32`, `128x128`, `152×152`, `167x167`, `180x180`, `192x192` và `196x196`.

##### Tùy chỉnh JS

Nếu bạn muốn thực thi code JavaScript của riêng mình để thay đổi trải nghiệm truy cập hoặc thêm các tích hợp khác nhau như Discus!, Discourse, v.v..., bạn có thể thực hiện việc này bằng cách tải lên `publish.js` bên trong thư mục gốc của vault. Lưu ý rằng các tập lệnh này sẽ chỉ chạy cho khách truy cập vào miền tùy chỉnh của bạn.

##### Vô hiệu hóa lập chỉ mục của công cụ tìm kiếm

Tùy chọn này sẽ thêm thẻ meta ngăn lập chỉ mục vào tất cả các trang của bạn để các công cụ tìm kiếm như Google không lập chỉ mục trang web của bạn. Lưu ý rằng các công cụ tìm kiếm sẽ không thể lập chỉ mục trang web của bạn nếu nó được bảo vệ bằng mật khẩu.

##### Google Analytics

Nếu bạn muốn thiết lập Google Analytics cho trang web của mình, trước tiên hãy đảm bảo rằng luật và quy định địa phương của bạn cho phép. Sau đó, bạn chỉ cần đặt code theo dõi, ở dạng `UA-XXXXX-Y` vào text box và trang web của bạn sẽ tự động theo dõi số lượt xem trang. Lưu ý rằng Google Analytics chỉ có sẵn cho khách truy cập từ miền tùy chỉnh của bạn.

Khi kiểm tra Google Analytics, hãy đảm bảo tắt mọi tiện ích extension trình duyệt chặn quảng cáo như uBlock Origin, tiện ích này chặn chạy các tập lệnh Google Analytics.

Ngoài ra, Obsidian Publish hiện không tương thích trực tiếp với Google Tag Manager - bạn có thể thiết lập nó bằng cách sử dụng javascript tùy chỉnh nếu bạn muốn sử dụng Google Tag Manager thay vì Google Analytics.

### Tùy chỉnh domain

Bạn có thể thiết lập tùy chỉnh domain hoặc subdomain cho trang web Obsidian Publish. Hiện tại, chúng tôi chưa có cách nào để cung cấp chứng chỉ SSL thay mặt bạn, vì vậy bạn cần sử dụng máy chủ hỗ trợ SSL của riêng bạn hoặc thiết lập trang web của bạn trên CloudFlare, nơi cung cấp SSL miễn phí.

Bạn cũng có thể thiết lập Obsidian Publish làm sub-URL của trang web mà bạn sở hữu. Ví dụ: `https://mysite.com/my-notes/`. Để đạt được điều này, bạn phải lưu trữ máy chủ của riêng mình và proxy tất cả các yêu cầu đến máy chủ của chúng tôi tại `https://publish.obsidian.md/`.

Tiếp tục đọc để biết chi tiết thiết lập.

#### Thiết lập CloudFlare

Cách dễ nhất để thiết lập tùy chỉnh domain hoặc subdomain là tạo tài khoản với [CloudFlare](https://cloudflare.com) và cho phép CloudFlare quản lý domain của bạn. Điều này cho phép bạn thêm SSL miễn phí vào trang web của mình cũng như đảm bảo trang web của bạn hoạt động nhanh chóng ở bất kỳ đâu trên thế giới mà nó được truy cập từ đó. Thông thường, người dùng sẽ lưu trữ nội dung Obsidian Publish của họ trên một domain gốc (ví dụ: `mysite.com`) hoặc một subdomain (ví dụ: `notes.mysite.com`). Hướng dẫn sau đây hoạt động tốt trong cả hai trường hợp.

1. Mở Cloudflare vào domain bạn muốn thêm Publish vào (ví dụ: `mysite.com`, ngay cả khi bạn muốn một subdomain như `notes.mysite.com`).
2. Chuyển đến DNS và nhấn vào Add Record. Chọn CNAME và trong 'name' nhập domain hoặc subdomain bạn muốn (ví dụ: `notes.mysite.com`). Trong 'target', nhập `publish-main.obsidian.md`. Không bao gồm sub-URL cá nhân của bạn trong dữ liệu này, vì Obsidian Publish xử lý điều này từ cấu hình của bạn.
3. Đi tới SSL/TLS và đặt chế độ mã hóa SSL/TLS thành `Full`. Điều này sẽ tự động định cấu hình chứng chỉ SSL/TLS.

Khi bạn đã hoàn tất việc định cấu hình CloudFlare, bạn có thể đi đến các tùy chọn trang web của mình trong Obsidian và đặt URL cho domain hoặc subdomain của bạn. Điều này cho phép máy chủ của chúng tôi liên kết domain với trang web của bạn.

Khắc phục sự cố: Nếu thiết lập tùy chỉnh domain của bạn kết thúc trong một vòng lặp chuyển hướng, có thể chế độ mã hóa trong CloudFlare thành `Flexible` thay vì `Full`.

Nếu bạn muốn định cấu hình cả `mysite.com` và `www.mysite.com` cho Obsidian Publish, bạn sẽ cần tạo [Quy tắc trang](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) như sau:
- URL match: `www.mysite.com/*`
- Foward URL - 301 Permanent Redirect
- Redirect URL: `https://mysite.com/$1`

Khi bạn tạo quy tắc trang, bạn cũng nên tạo record CNAME cho `www.mysite.com` giống như bạn đã tạo cho `mysite.com`

#### Thiết lập Proxy/chuyển hướng

Nếu bạn muốn lưu trữ máy chủ web của riêng mình và thiết lập mã hóa SSL của riêng mình, bạn có thể chọn tùy chọn này. Nếu bạn đã lưu trữ một trang web trong domain hoặc subdomain của mình, bạn cũng có thể sử dụng tùy chọn này và thiết lập trang web của mình để tải trang web Obsidian Publish của bạn theo một đường dẫn URL cụ thể, thay vì lưu trữ toàn bộ trang web.

Chỉ cần ủy quyền cho tất cả các yêu cầu theo đường dẫn URL đó đến `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` và **định cấu hình các tùy chọn trang web trong Obsidian theo cùng một đường dẫn URL** bằng cách đặt **Tùy chỉnh URL** thành `mysite.com/my-notes`.

##### NGINX

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
}
```

##### Apache

Thêm vào `.htaccess`:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

Lưu ý: mod_rewrite phải được bật và bạn cũng có thể cần định cấu hình [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

##### Netlify

```
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

##### Vercel

Trong `vercel.json` [configure rewrites](https://vercel.com/docs/configuration#project/rewrites):

```json
{
  ...

  "rewrites": [
    {
      "source": "/my-notes/",
      "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes"
    },
    {
      "source": "/my-notes/:path*",
      "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:path*"
    }
  ]
}
```

##### HTTP X-Headers được hỗ trợ

Ngoài ra, nếu dịch vụ proxy của bạn không cho phép đường dẫn truy vấn, bạn có thể sử dụng `https://publish.obsidian.md/` với tiêu đề tùy chỉnh `x-obsidian-custom-domain` được đặt thành url trang web của bạn `mysite.com/my-subpath`.

#### Sự cố sau thiết lập domain tùy chỉnh

Khi bạn thiết lập domain tùy chỉnh, nếu bạn đã truy cập trang web của mình từ liên kết `https://publish.obsidian.md/slug` trước đó, bạn phải xóa bộ nhớ cache của trình duyệt cho một số thứ nhất định (như font, đồ họa hoặc truy cập mật khẩu) để hoạt động bình thường. Điều này là do các hạn chế bảo mật cross-domain được áp dụng bởi các trình duyệt hiện đại. Tin tốt là người đọc trang web của bạn sẽ không bao giờ gặp vấn đề này nếu bạn chỉ cho phép khách truy cập sử dụng domain tùy chỉnh của mình.

#### Chuyển hướng trang web cũ sang domain tùy chỉnh

Nếu bạn muốn chuyển hướng khách truy cập của mình từ trang web cũ `publish.obsidian.md` sang tên domain tùy chỉnh mới của mình, bạn có thể chọn bật tính năng này từ trang cài đặt domain tùy chỉnh của mình.

### Sắp có

Obsidian Publish vẫn đang trong giai đoạn phát triển ban đầu. Chúng tôi hiện đang có kế hoạch bổ sung các tính năng sau:

- Hỗ trợ đầy đủ cho các domain tùy chỉnh (cung cấp chứng chỉ SSL).
- Tìm kiếm toàn văn bản.
- Nhiều chủ đề tích hợp sẵn hơn.

Vui lòng cho chúng tôi biết nếu bạn có bất kỳ yêu cầu nào về tính năng Obsidian Publish bằng cách gửi [yêu cầu trên forum tại đây](https://forum.obsidian.md/).

### Pricing

Để biết giá của Obsidian Publish, vui lòng truy cập [trang Pricing](https://obsidian.md/pricing).

### Chi tiết kỹ thuật

Obsidian Publish sử dụng Cloudflare làm CDN (mạng lưới phân phối nội dung) để phân phối trang web của bạn trên toàn cầu nhằm truy cập nhanh hơn. Điều này liên quan đến việc lưu vào bộ nhớ đệm các bản sao của các tệp trên trang web của bạn trên một số trong số hơn 200 trung tâm dữ liệu để đảm bảo độ trễ thấp nhất cho người đọc của bạn và trang web vẫn chạy nhanh và tải nhanh ngay cả khi người xem của bạn ở xa các máy chủ chính của chúng tôi.

Tuy nhiên, điều này có nghĩa là khi bạn thay đổi cài đặt trang web, xuất bản nội dung mới hoặc hủy xuất bản nội dung, khách truy cập có thể không thấy phiên bản mới nhất trong một thời gian ngắn. Hiện tại, bộ nhớ cache của chúng tôi được định cấu hình để tồn tại trong một giờ trước khi nó phải được "xác thực lại" để đảm bảo nội dung không thay đổi.

Nếu bạn vừa xuất bản các mục nhưng vẫn thấy phiên bản cũ hơn, bạn thường có thể thực hiện "làm mới" bằng cách giữ nút tải lại và chọn "Hard reload" trong menu thả xuống. Nếu không, bạn có thể thử xóa bộ nhớ cache của trình duyệt hoặc tắt bộ nhớ cache bằng các công cụ dành cho nhà lập trình trong tab mạng.

#### Lưu trữ các file phương tiện

Mặc dù Obsidian Publish cho phép bạn tải lên các video clip, nhưng nó không được tối ưu hóa để phân phối video. Do đó, khách truy cập của bạn có thể thấy rằng các video trên trang web của bạn có thể không mang lại trải nghiệm tuyệt vời.

Chúng tôi khuyên bạn nên sử dụng dịch vụ lưu trữ video thích hợp như YouTube hoặc Vimeo để lưu trữ video của bạn cho Obsidian Publish. Những lợi thế của việc sử dụng một trang web lưu trữ video thích hợp bao gồm:
- Mã hóa lại tự động đảm bảo rằng video của bạn có thể được phát trên tất cả các thiết bị di động bất kể bạn đã sử dụng định dạng mã hóa nào trong tệp gốc của mình.
- Điều chỉnh chất lượng động dựa trên tính khả dụng của băng thông và đảm bảo rằng video có thể được phát mượt mà mà không liên tục tạm dừng để "lưu vào bộ đệm".
- Nén video hiệu quả cao để đảm bảo rằng khách truy cập không vượt qua giới hạn dữ liệu của họ khi xem trang web của bạn.
- CDN toàn cầu cho phép tải video của bạn nhanh chóng bất kể khách truy cập của bạn ở đâu trên thế giới.

---

### Liên quan

Tham khảo [[Publish|Publish plugin]] để biết chi tiết về cách xuất bản ghi chú của bạn.
