---
ms.openlocfilehash: 0ee285efb8b386c47d2782151fdf6a2bb24589fc
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879010"
---
1. Чтобы начать репликацию хранилищ данных, используйте команду `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **Предупреждение.** `ghe-repl-start` вызывает кратковременный сбой на главном сервере, во время которого пользователи могут видеть внутренние ошибки сервера. Чтобы предоставить более точное сообщение, запустите `ghe-maintenance -s` на первичном узле перед запуском `ghe-repl-start` на узле-реплике, чтобы поместить устройство в режим обслуживания. После начала репликации отключите режим обслуживания с помощью `ghe-maintenance -u`. Репликация Git не будет выполняться, пока основной узел находится в режиме обслуживания.

    {% endwarning %}
