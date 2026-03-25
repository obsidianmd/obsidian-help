---
permalink: publish/analytics
---
## Điều kiện tiên quyết

Để sử dụng phân tích trên trang [[Giới thiệu về Obsidian Publish|Obsidian Publish]] của bạn, bạn cần một [[Tên miền tùy chỉnh|tên miền tùy chỉnh]].

> [!important] Quan trọng
> Trước khi bạn kích hoạt phân tích, hãy đảm bảo rằng luật pháp và quy định địa phương của bạn cho phép theo dõi khách truy cập. Tùy thuộc vào công cụ bạn sử dụng, bạn có thể cần thêm biểu ngữ đồng ý vào trang web của mình.

## Google Analytics

Để kích hoạt Google Analytics cho trang Obsidian Publish của bạn:

1. Trong thanh công cụ, ở bên trái cửa sổ ứng dụng, nhấp vào **Xuất bản thay đổi** ![[lucide-send.svg#icon]].
2. Trong hộp thoại **Xuất bản thay đổi**, nhấp vào **Thay đổi cài đặt trang web** ![[lucide-cog.svg#icon]].
3. Trong **Mã theo dõi Google Analytics**, nhập mã theo dõi của bạn.

Để sử dụng Google Tag Manager thay vì Google Analytics, hãy sử dụng JavaScript tùy chỉnh để thêm các tập lệnh của riêng bạn.

## Plausible, Fathom và các dịch vụ phân tích khác

Bạn có thể thêm hầu hết các dịch vụ phân tích vào trang web của mình thông qua tệp [[Tùy chỉnh trang web của bạn|publish.js]]. Hãy đảm bảo thay thế `yourdomain.com` bằng tên miền của bạn và `src` của tập lệnh bằng tập lệnh từ nhà cung cấp phân tích của bạn.

Đây là ví dụ sử dụng [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Cách tiếp cận tương tự có thể được sử dụng cho [Fathom Analytics](https://usefathom.com/). Lưu ý sự thay đổi từ `data-domain` sang `data-site` — các nhà cung cấp phân tích khác nhau có thể có định dạng khác nhau về cách chèn tập lệnh.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Khắc phục sự cố

Để xác minh rằng trang web của bạn đang sử dụng dịch vụ phân tích, hãy vô hiệu hóa các tiện ích mở rộng chặn quảng cáo trên trình duyệt, chẳng hạn như uBlock Origin, vì chúng có thể chặn tập lệnh theo dõi chạy.
