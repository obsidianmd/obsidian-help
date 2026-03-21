---
permalink: publish/troubleshoot
publish: true
mobile: true
description: This page details some common problems that you may run into when using Obsidian Publish
---

이 페이지는 [[Obsidian Publish 소개|Obsidian Publish]]에서 겪을 수 있는 일반적인 문제와 해결 방법을 정리한 것이에요.

먼저 [[미디어 파일]]과 [[Publish 제한 사항|Publish 제한 사항]]을 확인하세요.

## 일반

### 노트 게재

**노트를 게재하려고 할 때 해시 오류가 발생해요.**

파일의 수정 시간을 업데이트 시 변경하는 [[커뮤니티 플러그인|커뮤니티 플러그인]]을 사용하고 계신가요? 그렇다면 해당 플러그인이 Publish와 충돌할 수 있어요. 문제 해결을 위해 플러그인 개발자에게 버그 리포트를 제출해 주세요.

**이상한 네트워크 오류가 발생하며, Publish 사이트가 매우 커요.**

데이터베이스를 확인해야 할 가능성이 높아요. [[도움말 및 지원#Obsidian 지원팀에 문의하기|Obsidian 지원팀에 문의]]하여 도움을 받으세요.

## CSS 및 테마

**[[설정 폴더]]에 있는 CSS가 Publish에서 작동하지 않아요. 왜 그런가요?**

Publish는 설정 폴더에서 읽지 않아요. 대신, 게재 보관함의 최상위 디렉토리에 `publish.css` 파일을 생성해야 해요. 이에 대해 [[사이트 사용자 지정]]에서 자세히 알아볼 수 있어요.

**CSS가 앱에서 보이는 것과 Publish에서 다르게 보여요. 왜 그런가요?**

Obsidian Publish의 CSS는 앱의 CSS와 정확히 동일하지 않아요. Publish 전용으로 처음부터 [CSS와 테마를 개발](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes)하는 것을 권장해요.

일반적으로, [[뷰와 편집 모드#읽기 보기|읽기 보기]]에서 작동하는 것은 Publish에서도 작동할 가능성이 높아요.
