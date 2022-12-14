---
ms.openlocfilehash: 02f279903abd69f50ad55aa88462c9c8e4b9a1a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145093113"
---
Используйте `jobs.<job_id>.strategy.matrix` для создания матрицы различных конфигураций заданий В матрице определите одну или несколько переменных, за которыми следует массив значений. Например, в указанной ниже матрице есть переменная под именем `version` со значением `[10, 12, 14]` и переменная под именем `os` со значением `[ubuntu-latest, windows-latest]`:

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

Задание будет выполняться для каждой возможной комбинации переменных. В этом примере рабочий процесс будет выполнять шесть заданий, по одному для каждой комбинации переменных `os` и `version`. 

По умолчанию {% data variables.product.product_name %} максимизирует количество параллельно выполняемых заданий в зависимости от доступности средства выполнения. Порядок переменных в матрице определяет порядок создания заданий. Первая переменная, которую вы определите, будет первым заданием, созданным в ходе выполнения рабочего процесса. Например, указанная выше матрица создаст задания в следующем порядке:

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

Матрица создаст не более 256 заданий для каждого выполнения рабочего процесса. Это ограничение применяется как к размещенным в {% data variables.product.product_name %}, так и к локальным средствам выполнения.

Переменные, которые вы определяете, становятся свойствами в контексте `matrix`, и можно ссылаться на это свойство в других областях файла рабочего процесса. В этом примере можно использовать `matrix.version` и `matrix.os`, чтобы получить доступ к текущим значениям `version` и `os`, которые использует задание. Дополнительные сведения см. в статье "[Контексты](/actions/learn-github-actions/contexts)".
