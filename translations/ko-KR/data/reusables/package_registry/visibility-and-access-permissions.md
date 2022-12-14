---
ms.openlocfilehash: 42d6bbb15a1f147d9eea0c908b17ec30790a54c3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145121780"
---
컨테이너 이미지에 대한 관리자 권한이 있는 경우 컨테이너 이미지에 대한 액세스 권한을 프라이빗 또는 퍼블릭으로 설정할 수 있습니다. 퍼블릭 이미지는 익명 액세스를 허용하며 CLI를 통해 인증 또는 로그인하지 않고 가져올 수 있습니다.

관리자는 조직 및 리포지토리 수준에서 설정한 권한과 별개인 컨테이너 이미지에 대한 액세스 권한을 부여할 수도 있습니다.

개인 계정에서 게시하고 소유한 컨테이너 이미지의 경우 모든 사람에게 액세스 역할을 부여할 수 있습니다. 조직에서 게시하고 소유한 컨테이너 이미지의 경우 조직의 모든 사용자 또는 팀에 액세스 역할을 부여할 수 있습니다.

| 사용 권한 | 액세스 설명 |
|------------|--------------------|
| 읽기       | 패키지를 다운로드할 수 있습니다. <br> 패키지 메타데이터를 읽을 수 있습니다. |
| 쓰기      | 이 패키지를 업로드 및 다운로드할 수 있습니다. <br> 패키지 메타데이터를 읽고 쓸 수 있습니다. |
| Admin      | 이 패키지를 업로드, 다운로드, 삭제, 관리할 수 있습니다. <br> 패키지 메타데이터를 읽고 쓸 수 있습니다. <br> 패키지 권한을 부여할 수 있습니다.
