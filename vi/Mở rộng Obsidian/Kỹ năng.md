---
permalink: skills
cssclasses: null
description: Obsidian Skills dạy các tác tử AI cách làm việc với kho dữ liệu của bạn và các định dạng tệp Obsidian.
---
Obsidian Skills là các hướng dẫn dạy cho các tác nhân AI cách làm việc với Obsidian. Chúng tuân theo định dạng mở [Agent Skills](https://agentskills.io/specification), vì vậy hoạt động với bất kỳ tác nhân nào hỗ trợ skills, bao gồm Claude Code, Claude, ChatGPT, Antigravity, Cursor, GitHub Copilot, Grok Bot, Hermes Agent, OpenCode, và [nhiều hơn nữa](https://agentskills.io/clients).

Với Obsidian Skills, một tác nhân có thể:

- Viết ghi chú bằng [[Obsidian Flavored Markdown]], với [[Liên kết nội bộ|liên kết wiki]], nhúng, khung ghi chú, và [[Thuộc tính|thuộc tính]].
- Tạo và chỉnh sửa tệp [[Giới thiệu về Cơ sở|Cơ sở]] và [[Canvas]].
- Tìm kiếm, đọc, và quản lý ghi chú trong ứng dụng đang chạy với [[Obsidian CLI]].
- Đồng bộ hóa và xuất bản kho từ dòng lệnh bằng [[Obsidian Headless]].

Các skills là mã nguồn mở tại [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills).

## Cài đặt

Obsidian là một plugin chính thức cho Claude, ChatGPT, Dots, Cursor, Grok Bot, và Hermes. Hầu hết các tác nhân khác có thể cài đặt skills từ GitHub.

### Claude

Thêm [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) từ thư mục plugin chính thức của Claude.

Với Claude Code CLI, sử dụng:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Để lấy skills mới sau này, chạy `claude plugin update obsidian@obsidian-skills`.

### ChatGPT

Thêm [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) từ thư mục plugin ChatGPT. Plugin hoạt động trong ChatGPT, Codex, và Dots.

### Antigravity

Trong Antigravity CLI, chạy:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Mở [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) và chọn **Add to Grok Bot**.

### Cursor

Cài đặt [Obsidian](https://cursor.com/marketplace/obsidian) từ Cursor Marketplace.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### GitHub Copilot, OpenCode, và các tác nhân khác

Cài đặt bằng [npx skills](https://github.com/vercel-labs/skills), công cụ sẽ hỏi bạn muốn cài đặt vào tác nhân nào:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Để cài đặt thủ công, sao chép các thư mục trong `plugins/obsidian/skills/` vào thư mục skills của tác nhân, ví dụ `~/.copilot/skills/` cho GitHub Copilot.

## Các skills đi kèm

| Skill               | Chức năng                                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | Tạo và chỉnh sửa ghi chú [[Obsidian Flavored Markdown]].                                                                     |
| `obsidian-bases`    | Tạo và chỉnh sửa [[Cú pháp Cơ sở\|Cơ sở]] với các chế độ xem, bộ lọc, công thức, và tóm tắt.                               |
| `json-canvas`       | Tạo và chỉnh sửa tệp [[Canvas]] sử dụng định dạng [JSON Canvas](https://jsoncanvas.org/).                                   |
| `obsidian-cli`      | Tương tác với kho của bạn thông qua [[Obsidian CLI]], bao gồm phát triển plugin và chủ đề.                                   |
| `obsidian-headless` | Đồng bộ hóa và xuất bản kho từ dòng lệnh với [[Obsidian Headless]].                                                         |
| `defuddle`          | Trích xuất Markdown sạch từ trang web sử dụng [Defuddle](https://github.com/kepano/defuddle).                                 |
| `knap`              | Kết xuất mẫu Markdown từ dữ liệu JSON hoặc CSV sử dụng [Knap](https://github.com/obsidianmd/knap).                          |

## Yêu cầu

Skill `obsidian-cli` cần ứng dụng Obsidian trên máy tính đang chạy với [[Obsidian CLI#Cài đặt Obsidian CLI|Obsidian CLI được bật]], và một tác nhân có thể chạy lệnh trên máy tính của bạn.

Các skills Markdown, Cơ sở, và Canvas chỉ mô tả định dạng tệp, nên chúng hoạt động trong bất kỳ tác nhân nào có thể đọc và ghi tệp trong kho của bạn.

Defuddle, Knap, và Obsidian Headless là các công cụ riêng biệt không đi kèm với skills. Khi thiếu một công cụ, skill sẽ hỏi trước khi cài đặt từ npm.

## Quyền riêng tư

Obsidian Skills không tự gửi bất cứ thứ gì. Khi một tác nhân sử dụng chúng, các ghi chú mà nó đọc sẽ trở thành một phần của cuộc hội thoại và được xử lý bởi mô hình AI bạn sử dụng. Hãy xem lại chính sách quyền riêng tư của tác nhân trước khi trỏ nó vào kho có ghi chú nhạy cảm.
