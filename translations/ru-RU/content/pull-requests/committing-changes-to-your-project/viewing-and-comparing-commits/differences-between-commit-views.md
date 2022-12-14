---
title: Различия между представлениями фиксации
intro: В зависимости от выбранного метода просмотра могут наблюдаться различия в журнале фиксаций.
redirect_from:
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit views
ms.openlocfilehash: 2b5d59d385f815bd09c853e398d372bb4c861650
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137093'
---
На {% data variables.product.product_name %} можно просмотреть журнал фиксаций репозитория следующим образом:

- Перейти непосредственно на [страницу фиксаций](https://github.com/mozilla/rust/commits/master) репозитория.
- Щелкнуть файл, а затем щелкнуть **Журнал**, чтобы перейти к [журналу фиксаций для определенного файла](https://github.com/mozilla/rust/commits/master/README.md).

Эти два представления фиксации иногда могут отображать _разные_ сведения. Журнал для одного файла может не содержать фиксации, которые содержатся в журнале фиксаций репозитория.

В Git существует несколько способов отображения журнала репозитория. Когда Git отображает журнал одного файла, он упрощает журнал, пропуская фиксации, которые не изменили файл. Git не проверяет, был ли файл изменен в результате каждой отдельной фиксации, а опускает целую ветвь, если при слиянии она не повлияла на итоговое содержимое файла. Будут отображаться не все фиксации в ветви, которая затронула файл.

Для журнала фиксаций файла {% data variables.product.product_name %} явно следует этой простой стратегии. Это упрощает журнал, поскольку в нем отсутствуют фиксации, которые не повлияли на итоговый результат. Например, если боковая ветвь внесла изменения, а затем отменила их, эта фиксация не будет отображаться в журнале ветви. Это повышает эффективность проверки ветвей, так как вы видите только фиксации, влияющие на файл.

Это усеченное представление может не всегда содержать сведения, которые вы ищете. Если вы хотите просмотреть весь журнал, {% data variables.product.product_name %} предоставляет представление с дополнительными сведениями на странице фиксаций репозитория.

Дополнительные сведения о том, как Git рассматривает журнал фиксаций, см. в разделе [Упрощение журнала](https://git-scm.com/docs/git-log#_history_simplification) в статье справки о `git log`.

## Дополнительные материалы

- [Подписывание фиксаций](/articles/signing-commits)
- [Поиск фиксаций](/search-github/searching-on-github/searching-commits)
