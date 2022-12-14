---
title: Сведения о проверках состояния
intro: 'Проверки состояния позволяют узнать, удовлетворяют ли ваши фиксации условиям, заданным для репозитория, в котором вы работаете.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /articles/about-statuses
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 759889bd4f014e4bc2afff5f182a0b7258c8bb07
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065869'
---
Проверки состояния основаны на внешних процессах, таких как сборки непрерывной интеграции, которые выполняются для каждой отправки в репозиторий. В запросе на вытягивание можно увидеть состояние *ожидание*, *прохождение* или *сбой* проверок состояния рядом с отдельными фиксациями в вашем запросе на вытягивание.

![Список фиксаций и состояний](/assets/images/help/pull_requests/commit-list-statuses.png)

Любой, у кого есть разрешения на запись в репозиторий, может установить состояние для любой проверки состояния в репозитории.

Общее состояние последней фиксации в ветви можно увидеть на странице ветвей репозитория или в списке запросов на вытягивание репозитория.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

## Типы проверок состояния на {% data variables.product.product_name %}

Существует два типа проверок состояния для {% data variables.product.product_name %}:

- Проверки
- Состояния

_Проверки_ отличаются от _состояний_ тем, что они предоставляют заметки строк, более подробные обмены сообщениями и доступны только для использования с {% data variables.product.prodname_github_apps %}.

Владельцы и пользователи организации с принудительным доступом к репозиторию могут создавать проверки и состояния с помощью API {% data variables.product.product_name %}. Дополнительные сведения см. в разделах [Проверки](/rest/reference/checks) и [Состояния](/rest/reference/commits#commit-statuses).

## Проверки

При настройке _проверок_ в репозитории запросы на вытягивание имеют вкладку **Проверки**, где можно просмотреть подробные выходные данные сборки из проверок состояния и повторно запустить неудачные проверки.

![Проверки состояния в запросе на вытягивание](/assets/images/help/pull_requests/checks.png)

{% note %}

**Примечание.** Вкладка **Проверки** заполняется только для запросов на вытягивание, если для репозитория настроены _проверки_, а не _состояния_.

{% endnote %}

Если определенная строка в фиксации приводит к сбою проверки, вы увидите сведения о сбое, предупреждения или уведомления рядом с соответствующим кодом на вкладке **Файлы** запроса на вытягивание.

![Подробная информация о проверке состояния](/assets/images/help/pull_requests/checks-detailed.png)

Можно перемещаться между сводками проверок для различных фиксаций в запросе на вытягивание, используя раскрывающееся меню фиксации на вкладке **Беседа**.

![Проверка сводок по различным фиксациям в раскрывающемся меню](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

### Пропуск и запрос проверок для отдельных фиксаций

Если репозиторий настроен на автоматический запрос проверки для отправки, можно пропустить проверки для отдельной фиксации, отправленной вами. Если репозиторий _не_ настроен на автоматический запрос проверки для отправки, можно запросить проверки для отдельной фиксации, отправленной вами. Дополнительные сведения об этих параметрах см. в разделе [Наборы тестов для проверки](/rest/reference/checks#update-repository-preferences-for-check-suites).

Чтобы пропустить или запросить проверки фиксации, добавьте одну из следующих замыкающих строк в конец сообщения фиксации:

- Чтобы _пропустить проверки_ для фиксации, введите сообщение о фиксации и краткое содержательное описание изменений. После описания фиксации перед закрывающим цитированием добавьте две пустые строки, за которыми следует `skip-checks: true`:
  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```
- Для _запроса_ проверок фиксации введите сообщение о фиксации и краткое содержательное описание изменений. После описания фиксации перед закрывающим цитированием добавьте две пустые строки, за которыми следует `request-checks: true`:
  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```

{% ifversion fpt or ghec %}
### Хранение проверок состояния

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
