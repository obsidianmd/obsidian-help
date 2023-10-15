Obsidian에서는 [symbolic links](https://en.wikipedia.org/wiki/Symbolic_link) (symlink)와 [junctions](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions)을 사용하여 보트 외부나 [[How Obsidian stores data#Global settings|system folder]]에 파일을 저장하는 데 사용할 수 있습니다.

> [!danger] 본인 책임 하에 사용하세요
> 심볼릭 링크와 점크션을 사용하는 것을 강력히 권장하지 않습니다. 이러한 기술을 사용하여 보트에서 파일을 관리하는 경우, 데이터 손실, 훼손 또는 Obsidian 충돌이 발생할 수 있습니다. 보트 및 설정의 정기적인 백업을 수행하는 것이 중요합니다.

다음은 고려해야 할 몇 가지 알려진 제한 사항 또는 문제입니다:

- Symlink 루프는 Obsidian 충돌을 방지하기 위해 허용되지 않습니다. 무한 루프로 인해 Obsidian이 충돌할 수 있으므로 이를 방지하기 위해 금지됩니다.
- Symlink 대상은 보관소(Vault) 루트 또는 다른 symlink 대상과 완전히 겹치지 않아야 합니다. 겹치지 않는다는 것은 하나의 폴더가 다른 폴더를 포함하지 않거나 그 반대임을 의미합니다. Obsidian은 보관소(Vault)의 부모 폴더로의 symlink 또는 보관소(Vault) 내의 다른 폴더로의 symlink를 무시합니다. 이것은 Vault 내에서 파일이 중복되어 링크가 모호해지는 것을 방지하기 위한 보호장치입니다.
- Symlink는 Obsidian sync 또는 _다른 종류의 동기화_와 잘 맞지 않을 수 있습니다. Symlink의 대상이 다른 Obsidian Vault에 의해 동기화되는 폴더인 경우 동기화 충돌 또는 데이터 손실이 발생할 수 있습니다. 일부 동기화 도구, 예를 들어 Git은 symlink를 따르지 않고 대신 symlink가 가리키는 _경로_를 동기화하기 때문에 이 방법으로 보관소(Vault)를 다른 사람과 공유하는 경우 원하지 않는 결과가 발생할 수 있습니다.
- Obsidian의 파일 관리자는 파일을 장치 경계를 넘어 이동할 수 없으므로 Vault와 다른 드라이브의 폴더로의 symlink를 만들 경우 Obsidian의 파일 탐색기를 사용하여 그 폴더와 다른 폴더 간에 파일을 드래그할 수 없게 됩니다. (이러한 이동에는 OS의 탐색기가 필요하며 Obsidian은 해당 파일의 삭제 및 새 파일 생성으로 이동을 인식합니다. 그리고 해당 경로에 의존하는 모든 링크를 업데이트하지 않을 것입니다.)
- 파일 symlink(폴더 symlink가 아닌 경우)은 _공식적으로는_ 현재 지원되지 않을 수 있지만 작동할 수 있습니다. Obsidian은 외부에서 수행한 변경 사항을 감시하지 않으므로 파일을 직접 변경한 경우 Obsidian은 해당 변경 사항을 감지하지 않고 검색 인덱스를 업데이트하지 않을 것입니다.
- Vault 간에 공유하기 위해 `.obsidian/` 폴더 아래에 symlink를 만들면 **설정을 손상시키는 높은 위험이 있습니다**. 이 방법을 선택하려면 반드시 백업을 만들어두는 것이 좋습니다.
