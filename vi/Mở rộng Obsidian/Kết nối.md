---
permalink: connectors
aliases:
  - skills
cover: Attachments/Connectors cover.jpg
cssclasses: null
description: Kết nối Obsidian với các tác tử AI để chúng có thể làm việc với kho dữ liệu của bạn và các định dạng tệp Obsidian.
---
Kết nối cho phép bạn dễ dàng cung cấp cho các tác nhân quyền truy cập vào Obsidian, trong khi vẫn giữ toàn quyền sở hữu dữ liệu của bạn. Obsidian Connectors có sẵn cho các ứng dụng bao gồm Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes, Kiro, Muse, OpenCode, và [nhiều hơn nữa](https://agentskills.io/clients).

Điều đó có nghĩa là các tác nhân của bạn có thể học cách:

- Viết ghi chú bằng [[Obsidian Flavored Markdown]], với [[Liên kết nội bộ|liên kết wiki]], nhúng, khung ghi chú, và [[Thuộc tính|thuộc tính]].
- Tạo và chỉnh sửa tệp [[Giới thiệu về Cơ sở|Cơ sở]] và [[Canvas|Canvas]].
- Tìm kiếm, đọc và quản lý ghi chú trong ứng dụng đang chạy với [[Obsidian CLI]].
- Đồng bộ hóa và xuất bản kho mà không cần ứng dụng máy tính để bàn bằng [[Obsidian Headless]].

Obsidian Connectors và các kỹ năng mã nguồn mở có sẵn tại [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Cài đặt

Bạn tìm Obsidian Connectors bằng cách tìm kiếm trong marketplace hoặc thư mục plugin trong ứng dụng của tác nhân. Bạn cũng có thể gửi cho tác nhân của mình liên kết đến trang này.

### Claude

Thêm [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) từ thư mục plugin chính thức của Claude.

Đối với Claude Code CLI sử dụng:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Để nhận kỹ năng mới sau này, chạy `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Thêm [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) từ thư mục plugin ChatGPT. Plugin hoạt động trong ChatGPT, Codex, và Dots.

### Antigravity

Trong Antigravity CLI, chạy:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Mở [Obsidian cho Grok Bot](https://x.ai/bot/plugin/88871845) và chọn **Thêm vào Grok Bot**.

### Muse

Yêu cầu Muse cài đặt các kỹ năng từ https://github.com/obsidianmd/obsidian-skills.

Muse chạy trên đám mây của Meta, nên kỹ năng `obsidian-cli` không hoạt động ở đó. Nếu bạn sử dụng Obsidian Headless trong Muse, bạn đăng nhập và đồng bộ hóa kho của mình trên đám mây của Meta.

### Cursor

Cài đặt [Obsidian](https://cursor.com/marketplace/obsidian) từ Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode, và các tác nhân khác

Cài đặt với [npx skills](https://github.com/vercel-labs/skills), sẽ hỏi bạn muốn cài đặt vào tác nhân nào:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Để cài đặt thủ công, sao chép các thư mục trong `plugins/obsidian/skills/` vào thư mục kỹ năng của tác nhân, ví dụ `~/.copilot/skills/` cho GitHub Copilot.

## Các kỹ năng bao gồm

| Kỹ năng             | Chức năng                                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Tạo và chỉnh sửa ghi chú [[Obsidian Flavored Markdown]].                                                                     |
| `obsidian-bases`    | Tạo và chỉnh sửa [[Cú pháp Cơ sở\|Cơ sở]] với các chế độ xem, bộ lọc, công thức, và tổng hợp.                              |
| `json-canvas`       | Tạo và chỉnh sửa tệp [[Canvas]] sử dụng định dạng [JSON Canvas](https://jsoncanvas.org/).                                   |
| `obsidian-cli`      | Tương tác với kho của bạn thông qua [[Obsidian CLI]], bao gồm phát triển plugin và chủ đề.                                   |
| `obsidian-headless` | Đồng bộ hóa và xuất bản kho từ dòng lệnh với [[Obsidian Headless]].                                                         |
| `defuddle`          | Trích xuất Markdown sạch từ trang web sử dụng [Defuddle](https://github.com/kepano/defuddle).                                 |
| `knap`              | Kết xuất mẫu Markdown từ dữ liệu JSON hoặc CSV sử dụng [Knap](https://github.com/obsidianmd/knap).                          |

## Yêu cầu

Kỹ năng `obsidian-cli` cần ứng dụng Obsidian máy tính để bàn đang chạy với [[Obsidian CLI#Cài đặt Obsidian CLI|Obsidian CLI được bật]], và một tác nhân có thể chạy lệnh trên máy tính của bạn.

Các kỹ năng Markdown, Cơ sở, và Canvas chỉ mô tả định dạng tệp, nên chúng hoạt động trong bất kỳ tác nhân nào có thể đọc và ghi tệp trong kho của bạn.

Defuddle, Knap, và Obsidian Headless là các công cụ riêng biệt không được đóng gói cùng các kỹ năng. Khi thiếu một công cụ, kỹ năng sẽ hỏi trước khi cài đặt từ npm.

## Quyền riêng tư

Obsidian Connectors không tự gửi bất cứ thứ gì. Khi một tác nhân sử dụng chúng, các ghi chú mà nó đọc trở thành một phần của cuộc hội thoại và được xử lý bởi mô hình AI bạn sử dụng. Hãy xem lại chính sách quyền riêng tư của tác nhân trước khi bạn trỏ nó đến kho có ghi chú nhạy cảm.
