---
permalink: web-clipper/interpreter
aliases:
  - Thông dịch trang web
---
Thông dịch là tính năng của [[Giới thiệu về Obsidian Web Clipper|Web Clipper]] cho phép bạn tương tác với các trang web bằng ngôn ngữ tự nhiên. Thông dịch giúp bạn thu thập và chỉnh sửa dữ liệu mà bạn muốn lưu vào Obsidian. Ví dụ:

- Trích xuất các đoạn văn bản cụ thể.
- Tóm tắt hoặc giải thích thông tin.
- Chuyển đổi văn bản từ định dạng này sang định dạng khác.
- Dịch văn bản sang ngôn ngữ khác.

Thông dịch tận dụng các mô hình ngôn ngữ để xử lý thông tin trên trang web và trả về kết quả bằng [[Biến]] mà bạn có thể thêm vào [[Obsidian Web Clipper/Mẫu|Mẫu Web Clipper]] của mình.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/8j5qu8twj1?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>


## Ví dụ về câu lệnh

Câu lệnh sử dụng cú pháp [[Biến|biến]] `{{"câu lệnh của bạn"}}`. Bạn có thể sử dụng cú pháp này với bất kỳ truy vấn ngôn ngữ tự nhiên nào, ví dụ:

- `{{"a summary of the page"}}` để trích xuất tóm tắt trang.
- `{{"a three bullet point summary, translated to French"}}` để trích xuất các dấu đầu dòng về trang và dịch chúng sang tiếng Pháp.
- `{{"un resumé de la page en trois points"}}` để trích xuất ba dấu đầu dòng bằng câu lệnh tiếng Pháp.

Kết quả đầu ra của câu lệnh có thể được xử lý thêm bằng [[Bộ lọc]]. Bộ lọc được xử lý sau khi nhận được phản hồi từ mô hình. Ví dụ: `{{"a summary of the page"|blockquote}}` sẽ chuyển phản hồi thành trích dẫn khối.

## Bắt đầu

Thông dịch hoạt động với hầu hết mọi nhà cung cấp mô hình ngôn ngữ, bao gồm các tùy chọn chạy riêng tư trên thiết bị của bạn. Để thiết lập Thông dịch:

1. Đi tới phần **Thông dịch** trong cài đặt Web Clipper.
2. Bật **Bật thông dịch**.
3. Cấu hình nhà cung cấp và mô hình của bạn, xem phần [[Thông dịch trang web#Mô hình|mô hình]] bên dưới.
4. Thêm [[Biến|biến câu lệnh]] vào [[Obsidian Web Clipper/Mẫu|mẫu]] của bạn.
5. Nếu mẫu của bạn chứa biến câu lệnh, phần Thông dịch sẽ hiển thị khi bạn [[Cắt trang web|cắt trang]]. Nhấp **thông dịch** để xử lý các biến câu lệnh.

## Cách hoạt động

Khi Thông dịch được bật *và* mẫu của bạn chứa [[Biến#Biến câu lệnh|biến câu lệnh]], một phần Thông dịch mới sẽ hiển thị trong cửa sổ tiện ích mở rộng, phía trên nút **Thêm vào Obsidian**. Phần này cho phép bạn chọn một mô hình và chạy Thông dịch cho trang hiện tại.

Khi bạn nhấp **thông dịch**, Thông dịch gửi ngữ cảnh trang đến mô hình bạn đã chọn, cùng với *tất cả* các câu lệnh trong mẫu của bạn trong một yêu cầu duy nhất. Tùy thuộc vào nhà cung cấp mô hình bạn chọn, đây có thể là cuộc gọi bên ngoài hoặc cục bộ trên thiết bị của bạn. Mô hình đánh giá các câu lệnh của bạn dựa trên ngữ cảnh trang và trả về phản hồi. Thông dịch sau đó thay thế các biến câu lệnh bằng dữ liệu phản hồi.

Toàn bộ quá trình có thể mất vài mili giây hoặc hơn 30 giây tùy thuộc vào mô hình bạn sử dụng và lượng dữ liệu bạn đang xử lý.

## Ngữ cảnh

Thuật ngữ *ngữ cảnh* đề cập đến dữ liệu trang mà Thông dịch sử dụng để xử lý câu lệnh. Ngữ cảnh càng nhỏ, Thông dịch chạy càng nhanh.

Theo mặc định, Thông dịch sử dụng toàn bộ HTML trang làm ngữ cảnh, tuy nhiên điều này có thể khiến câu lệnh chậm hơn và tốn kém hơn mức cần thiết.

Bạn có thể ghi đè ngữ cảnh mặc định trong **Cài đặt nâng cao** của Thông dịch và định nghĩa ngữ cảnh cho từng [[Obsidian Web Clipper/Mẫu|mẫu]].

Để định nghĩa ngữ cảnh nhắm mục tiêu hơn, sử dụng [[Biến#Biến bộ chọn|biến bộ chọn]] (hoặc các loại biến khác) để thông dịch một phần của trang. Ví dụ, bạn có thể sử dụng biến bộ chọn sau trong ngữ cảnh Thông dịch của mẫu:

```
{{selectorHtml:#main}}
```

Điều này sẽ chỉ chạy Thông dịch trên phần tử `#main` của trang web, nếu nó tồn tại. [[Bộ lọc#Xử lý HTML|Bộ lọc xử lý HTML]] như `remove_html`, `strip_tags` và `strip_attr` có thể hữu ích để giảm thêm độ dài ngữ cảnh và tăng tốc xử lý.

## Mô hình

> [!warning] Quyền riêng tư
> Khi sử dụng nhà cung cấp mô hình bên thứ ba, bạn đồng ý với các điều khoản và chính sách quyền riêng tư của họ. Các yêu cầu Thông dịch được gửi trực tiếp đến nhà cung cấp bạn chọn. Obsidian không thu thập hoặc lưu trữ bất kỳ dữ liệu nào về các yêu cầu của bạn.

### Nhà cung cấp cài đặt trước

Thông dịch bao gồm một số nhà cung cấp cài đặt trước. Để sử dụng các nhà cung cấp này, bạn cần khóa API mà bạn có thể lấy bằng cách đăng nhập vào tài khoản nhà cung cấp. Bạn cũng cần quyết định sử dụng mô hình nào.

| Nhà cung cấp       | Khóa&nbsp;API                                               | Mô hình                                                                              |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Anthropic           | [Khóa&nbsp;API](https://console.anthropic.com/settings/keys) | [Mô hình](https://docs.anthropic.com/en/docs/about-claude/models)                     |
| Azure&nbsp;OpenAI   | [Khóa&nbsp;API](https://oai.azure.com/portal/)               | [Mô hình](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| DeepSeek            | [Khóa API](https://platform.deepseek.com/api_keys)           | [Mô hình](https://api-docs.deepseek.com/quick_start/pricing)                          |
| Google&nbsp;Gemini  | [Khóa&nbsp;API](https://aistudio.google.com/apikey)          | [Mô hình](https://ai.google.dev/gemini-api/docs/models/gemini)                        |
| Hugging Face        | [Khóa API](https://huggingface.co/settings/tokens)           | [Mô hình](https://huggingface.co/models?pipeline_tag=text-generation&sort=trending)   |
| Meta                | [Khóa API](https://llama.developer.meta.com)                 | [Mô hình](https://llama.developer.meta.com/docs/models)                               |
| Ollama              | không có                                                     | [Mô hình](https://ollama.com/search)                                                  |
| OpenAI              | [Khóa&nbsp;API](https://platform.openai.com/api-keys)        | [Mô hình](https://platform.openai.com/docs/models)                                    |
| OpenRouter          | [Khóa&nbsp;API](https://openrouter.ai/settings/keys)         | [Mô hình](https://openrouter.ai/models)                                               |
| Perplexity          | [Khóa API](https://www.perplexity.ai/settings/api)           | [Mô hình](https://docs.perplexity.ai/guides/model-cards)                              |
| xAI Grok            | [Khóa API](https://console.x.ai/team/default/api-keys)       | [Mô hình](https://docs.x.ai/docs/models)                                              |

### Chọn mô hình

Nhìn chung, chúng tôi khuyến nghị sử dụng các mô hình nhỏ với Web Clipper vì chúng nhanh hơn và hoạt động khá chính xác cho tác vụ này. Ví dụ về các mô hình nhỏ bao gồm **Claude Haiku của Anthropic**, **Google Gemini Flash**, **Llama** với tham số 3B hoặc 8B, hoặc dòng mô hình **Mini của OpenAI**.

### Nhà cung cấp và mô hình tùy chỉnh

Để thêm nhà cung cấp và/hoặc mô hình tùy chỉnh, đi tới **[[Cài đặt]]** Web Clipper → **Thông dịch**:

- **Thêm nhà cung cấp** để cấu hình nhà cung cấp cài đặt trước và tùy chỉnh.
- **Thêm mô hình** để cấu hình mô hình cài đặt trước và tùy chỉnh.

Khi thêm nhà cung cấp tùy chỉnh, chúng tôi khuyến nghị bạn sử dụng endpoint chat completions của họ cho **URL cơ sở** — nó thường kết thúc bằng `/chat/completions`.

### Mô hình cục bộ

Thông dịch có thể sử dụng mô hình cục bộ để đảm bảo quyền riêng tư tốt hơn và tương thích ngoại tuyến. Có nhiều tùy chọn để chạy mô hình cục bộ. Một trong những tùy chọn dễ cấu hình nhất là Ollama.

#### Ollama

[Ollama](https://ollama.com/) cho phép bạn chạy mô hình ngôn ngữ cục bộ và riêng tư trên thiết bị của bạn.

Sau khi bạn đã tải xuống và cài đặt Ollama, thêm Ollama bằng **Thêm nhà cung cấp** trong cài đặt Thông dịch. Ollama không yêu cầu khóa API. Sau đó chọn một mô hình từ [danh sách mô hình](https://ollama.com/search). Ví dụ nếu bạn muốn sử dụng [Llama 3.2](https://ollama.com/library/llama3.2), nhấp **Thêm mô hình**, sau đó:

- **Nhà cung cấp:** Ollama
- **Tên hiển thị:** Llama 3.2, giá trị này có thể tùy chỉnh.
- **ID mô hình:** `llama3.2`, giá trị này phải khớp chính xác với ID mô hình từ Ollama.

**Khởi động máy chủ Ollama**

Để cho phép tiện ích mở rộng trình duyệt tương tác với Ollama, bạn phải [cung cấp hướng dẫn rõ ràng](https://github.com/ollama/ollama/issues/2308) khi chạy máy chủ, nếu không bạn sẽ thấy lỗi `403`.

Đóng ứng dụng Ollama và chạy lệnh sau trong terminal của bạn. Giao thức nên được thay đổi thành giao thức tiện ích mở rộng của trình duyệt nếu bạn không sử dụng Chrome hoặc Firefox.

```
OLLAMA_ORIGINS=moz-extension://*,chrome-extension://*,safari-web-extension://* ollama serve
```

Sau đó chạy mô hình với Ollama theo cách thông thường, ví dụ:

```
ollama run llama3.2
```

**Độ dài ngữ cảnh**

Cửa sổ ngữ cảnh mặc định của Ollama là 2048 token. Đây là số token tối đa cho tin nhắn và phản hồi. Khi cắt một trang web dài, bạn có thể dễ dàng vượt quá giới hạn này. Ollama sẽ thất bại âm thầm và trả về kết quả không liên quan. Một số tùy chọn:

- Tăng tham số `num_ctx` của Ollama. Lưu ý rằng ngữ cảnh dài hơn yêu cầu nhiều bộ nhớ hơn.
- Sử dụng trường [[#Ngữ cảnh]] trong mẫu của bạn để cung cấp phần nhắm mục tiêu hơn của trang, hoặc cắt ngữ cảnh bằng [[Bộ lọc|bộ lọc]] ví dụ `{{content|slice:0,1000}}`.
