---
ms.openlocfilehash: ec9ff0fb1eb8f9fd06d4da13716b3e8e31a758e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145883580"
---
Используйте `jobs.<job_id>.needs` для определения всех заданий, которые должны быть успешно завершены перед выполнением этого задания. Это может быть строка или массив строк. Если задание завершается ошибкой, все требуемые задания пропускаются, если задания не используют условное выражение, которое приводит к продолжению задания. Если выполнение содержит ряд заданий, которые зависят друг от друга, сбой распространяется на все задания в цепочке зависимостей, начиная с места проявления этого сбоя.

#### Пример. Необходимо успешное выполнение зависимых заданий 

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

В этом примере задание `job1` должно успешно завершить работу перед началом задания `job2`, а задание `job3` ожидает завершения заданий `job1` и `job2`.

Задания в этом примере выполняются последовательно:

1. `job1`
2. `job2`
3. `job3`

#### Пример. Успешное выполнение зависимых заданий не требуется

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

В этом примере в задании `job3` используется условное выражение `always()`, чтобы оно всегда выполнялось после завершения выполнения заданий `job1` и `job2`, независимо от того, завершились ли они успешно. Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions#status-check-functions).
