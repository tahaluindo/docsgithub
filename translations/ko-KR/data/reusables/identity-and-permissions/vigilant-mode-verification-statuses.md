---
ms.openlocfilehash: 383458a6038400299b6ab8759b8bbfd1ebbd3a2d
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: "147886219"
---
| 상태         | 설명 |
| -------------- | ----------- |
| **Verified**   | 커밋이 서명되고 서명이 성공적으로 확인되었으며 커밋한 사람은 경계 모드를 활성화한 유일한 작성자입니다. 
| **부분적으로&nbsp;확인됨** | 커밋이 서명되고 서명이 성공적으로 확인되었지만 커밋에 작성자가 있습니다. a) 커밋한 사람이 아니며 b) 경계 모드를 활성화했습니다. 이 경우 커밋 서명은 작성자의 동의를 보장하지 않으므로 커밋은 부분적으로만 확인됩니다.
| **미확인** | 다음 중 하나는 true입니다.<br>- 커밋이 서명되었지만 서명을 확인할 수 없습니다.<br>- 커밋이 서명되지 않았고 커밋한 사람이 경계 모드를 활성화했습니다.<br>- 커밋이 서명되지 않았고 작성자가 경계 모드를 활성화했습니다.<br>
