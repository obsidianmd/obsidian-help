---
name: obsidian-ko-style
description: Apply or review Obsidian Korean style guide — voice, register, tone, terminology, and surface-specific rules for the ko locale. Use when editing, reviewing, or auditing Korean copy for the Help site, app UI, homepage, or release notes.
---

Apply the Obsidian Korean style guide to the given content.

## Voice

Modern, restrained `해요체` across all surfaces. Direct and calm. Friendly, but still unmistakably documentation.

**Default endings:** `해요` / `이에요` / `예요` / `할 수 있어요` / `하세요`

**Core rule:** Use `해요체`, but write it like product documentation, not like a blog post, onboarding coach, or marketing page.

**Never mix** `해요체` and `합니다체` on the same page unless quoting existing source text.

## Register choice

For the Obsidian Korean Help site, the best default register is:

- polite `해요체`
- neutral and practical
- low-emotion
- easy to scan

Not recommended as the site-wide default:

- rigid `합니다체`
- chatty spoken Korean
- persuasive or promotional Korean

Think:

- **good**: calm docs voice
- **bad**: stiff manual voice
- **bad**: playful onboarding voice
- **bad**: hypey marketing voice

## By surface

| Surface | Register |
|---|---|
| Help site | Restrained `해요체`. Neutral explanation. Practical, low-hype, low-drama. |
| App UI | Short labels and concise imperatives. |
| Homepage | Heading fragments or light `해요체`. Slightly more expressive, still controlled. |
| Release notes | Neutral informative prose. Slightly warmer than Help, but not salesy. |
| Error messages | Direct and calm. State what happened and what to do next. |

## Avoid

- Rhetorical questions: 어떻게 하냐고요? → state it directly
- Persuasive asides: 당연히, 물론이죠, 원하지 않으시죠?
- Hype: 진정한 힘, 최고의, 궁극의, 매우 중요해요 → 핵심 요소, 유용해요
- Chatty openers: 이제 시작해 볼까요?, 정말 강력해요!
- Translated idioms: 최우선 시민 → 핵심 요소 / 중심 개념
- Overly literal English sentence structure
- Motivational filler: 손쉽게, 놀랍게도, 멋지게, 완벽하게
- Emotional emphasis where none is needed

## Help-site tone

For Help pages, prefer:

- clear statements
- short explanation before detail
- direct instructions
- modest claims
- concrete product terms

For Help pages, avoid:

- rhetorical setup
- “selling” the feature
- abstract philosophy when a concrete benefit will do
- dramatic contrast like “진정한 힘”, “만능 솔루션”, “최고의 도구”

## Headings

Avoid sentence endings in headings. Use section labels, not full sentences.

✓ `Obsidian이란` / `내 데이터를 직접 관리` / `리본 사용자 지정`
✗ `데이터를 직접 소유하고 관리해요`

## Body copy patterns

```
정의:   "X는 … 기능이에요."
기능:   "…할 수 있어요." / "…를 지원해요."
지시:   "…하세요." / "…를 선택하세요."
조건:   "…하면 …할 수 있어요."
권장:   "…하는 것이 좋아요." / "…를 권장해요."
설명:   "…하는 데 도움이 돼요."
```

## Preferred sentence feel

Aim for:

- "Obsidian은 Markdown 편집기이자 지식 관리 앱이에요."
- "노트를 서로 연결하면 관계를 파악하는 데 도움이 돼요."
- "**설정**을 열고 **외형**을 선택하세요."

Avoid:

- "Obsidian은 Markdown 편집기이자 지식 관리 앱입니다."
- "어떻게 시작하냐고요?"
- "진정한 힘은 촘촘하게 연결된 지식 관리 체계를 관리하는 데 있어요."

## Help site structure

1. What the feature is
2. What it does
3. How to use it
4. Notes or examples

## Terminology

Keep fixed: Markdown, Canvas, CSS, API
Transliterate: 볼트, 플러그인, 테마, 스니펫, 그래프 뷰, 백링크, 명령 팔레트

Avoid heavy abstractions — prefer plain phrasing:
- 노트를 정리하는 방식 (not 지식 관리 체계)
- 핵심 요소 (not 최우선 시민)
- 타사 (not 서드파티)
- 사용자 지정 (not 커스텀 / 커스터마이즈, unless part of a stable file name or legacy link target)

## Preferred rewrites

| Avoid | Prefer |
|---|---|
| 어떻게 시작하냐고요? | 시작하려면 먼저 [[내부 링크]]를 만들어 보세요. |
| 링크는 최우선 시민이에요 | 링크는 Obsidian의 핵심 요소예요 |
| 자신의 두뇌를 맡기고 싶지 않으시죠? | 중요한 지식은 직접 소유하고 관리할 수 있어야 해요. |
| 진정한 힘은 놀라울 정도로… | 노트 사이의 관계를 찾는 데 도움이 돼요 |
| 당연히 모든 사람을 위한 단일 만능 솔루션은 없어요 | 모든 사람에게 맞는 단일 솔루션은 없어요 |
| 독선적이고 조립된 제품 | 정해진 방식을 강요하는 제품 |
| 최고이자 가장 세련된 사고 처리 도구 | Remove superlatives. State the feature or roadmap directly. |

## Translation priority

1. Clarity
2. Natural Korean
3. Consistency
4. Closeness to source

A slightly less literal sentence that reads naturally is almost always the right call.

When clarity and literalness conflict, choose the version that sounds like polished Korean product documentation.
