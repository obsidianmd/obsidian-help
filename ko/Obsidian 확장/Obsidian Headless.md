---
permalink: headless
description: Obsidian Headless is a command line client for Obsidian services. Sync your vaults without the desktop app.
---
Obsidian Headless **(오픈 베타)**는 Obsidian 서비스를 위한 헤드리스 클라이언트입니다. 데스크톱 앱 없이 명령줄에서 [[헤드리스 Sync|보관함을 동기화]]할 수 있으며, [[Obsidian Sync 소개|Obsidian Sync]]의 빠른 속도, 개인정보 보호, 종단 간 암호화의 모든 이점을 제공합니다.

Obsidian Headless를 사용할 수 있는 경우:

- 원격 백업 자동화.
- 웹사이트 게재 자동화.
- 전체 컴퓨터에 대한 접근 없이 에이전트 도구에 보관함 접근 권한 부여.
- 공유 팀 보관함을 다른 도구에 연결된 서버에 동기화.
- 예약된 자동화 실행 (예: 일일 노트를 주간 요약으로 집계, 자동 태그 지정 등).

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]]는 터미널에서 Obsidian 데스크톱 앱을 제어합니다. Obsidian Headless는 데스크톱 앱 없이 독립적으로 실행되는 독립형 클라이언트입니다.

## 설치

Obsidian Headless **(오픈 베타)**는 Node.js 22 이상이 필요합니다. [npm](https://www.npmjs.com/package/obsidian-headless)에서 설치하세요:

```shell
npm install -g obsidian-headless
```

## 인증

### 로그인

```shell
ob login
```

이미 로그인되어 있는 경우 `ob login`은 계정 정보를 표시합니다. 계정을 전환하려면 `--email` 및/또는 `--password`를 전달하여 다시 로그인하세요.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

모든 옵션은 생략 시 대화형으로 작동합니다 — 이메일과 비밀번호는 프롬프트로 요청되며, 계정에 2단계 인증이 활성화되어 있으면 자동으로 요청됩니다.

로그아웃하고 저장된 자격 증명을 지우려면:

```shell
ob logout
```

## 서비스

- [[헤드리스 Sync]]: 데스크톱 앱 없이 명령줄에서 [[Obsidian Sync 소개|Obsidian Sync]]를 사용합니다.
