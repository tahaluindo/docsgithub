---
title: GitHub Flow
intro: 'Выполните поток данных {% data variables.product.prodname_dotcom %} для совместной работы над проектами.'
redirect_from:
  - /articles/creating-and-editing-files-in-your-repository
  - /articles/github-flow-in-the-browser
  - /articles/github-flow
  - /github/collaborating-with-issues-and-pull-requests/github-flow
  - /github/getting-started-with-github/github-flow
  - /github/getting-started-with-github/quickstart/github-flow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5458d7b14ff59bf7059f093ee47ee92034b9319f
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878685'
---
## Введение

Процесс {% data variables.product.prodname_dotcom %} — это упрощенный рабочий процесс на основе ветвей. Процесс {% data variables.product.prodname_dotcom %} полезен для всех пользователей, а не только для разработчиков. Например, на {% data variables.product.prodname_dotcom %} процесс {% data variables.product.prodname_dotcom %} используется для [политики сайта](https://github.com/github/site-policy), [документации](https://github.com/github/docs) и [плана развития](https://github.com/github/roadmap).

## Предварительные требования

Для выполнения процесса {% data variables.product.prodname_dotcom %} потребуется учетная запись {% data variables.product.prodname_dotcom %} и репозиторий. Сведения о создании учетной записи см. в разделе [Регистрация на {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github). Сведения о создании репозитория см. в разделе [Создание репозитория](/github/getting-started-with-github/create-a-repo).{% ifversion fpt or ghec %} Сведения о том, как найти существующий репозиторий для участия, см. в разделе [Способы участия в создании открытого кода в {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github).{% endif %}

## Выполнение процесса {% data variables.product.prodname_dotcom %}

{% tip %}

{% ifversion fpt or ghec %} **Совет**. Вы можете выполнить все этапы процесса {% data variables.product.prodname_dotcom %} через веб-интерфейс {% data variables.product.prodname_dotcom %}, командную строку и [{% data variables.product.prodname_cli %}](https://cli.github.com) или [{% data variables.product.prodname_desktop %}](/free-pro-team@latest/desktop).
{% else %} **Совет**. Вы можете выполнить все этапы процесса {% data variables.product.prodname_dotcom %} через веб-интерфейс {% data variables.product.prodname_dotcom %} или командную строку и [{% data variables.product.prodname_cli %}](https://cli.github.com).
{% endif %}

{% endtip %}

### Создание ветви

  Создайте ветвь репозитория. Короткое описательное имя ветви позволит участникам совместной работы быстро получать представление о текущей работе. Например, `increase-test-timeout` или `add-code-of-conduct`. Дополнительные сведения см. в разделе [Создание и удаление ветвей репозитория](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository).

  Создавая ветвь, вы организуете пространство для работы, не затрагивая ветвь по умолчанию. Кроме того, вы предоставляете участникам совместной работы возможность ознакомиться с вашей работой.

### Внесение изменений

В ветви можно вносить необходимые изменения в репозиторий. Дополнительные сведения см. в разделах [Создание файлов](/articles/creating-new-files), [Изменение файлов](/articles/editing-files), [Переименование файла](/articles/renaming-a-file), [Перемещение файла в новое расположение](/articles/moving-a-file-to-a-new-location) и [Удаление файлов из репозитория](/github/managing-files-in-a-repository/deleting-files-in-a-repository).

Ветвь — это безопасное место для внесения изменений. Если вы совершили ошибку, вы можете отменить изменения или отправить дополнительные изменения, чтобы исправить ее. Изменения не будут вноситься в ветвь по умолчанию, пока вы не выполните слияние.

Зафиксируйте и отправьте изменения в ветвь. Сопровождайте каждую фиксацию сообщением с описанием, чтобы помочь себе и будущим участникам понять, какие изменения она содержит. Например, `fix typo` или `increase rate limit`.

В идеале каждая фиксация должна содержать полное изолированное изменение. Это упрощает отмену изменений, если вы решите использовать другой подход. Например, если вы хотите переименовать переменную и добавить тесты, поместите переименованную переменную в одну фиксацию, а тесты — в другую. Позже, если вы захотите оставить тесты, но отменить переименование переменной, можно будет отменить фиксацию с переименованной переменной. Если переименованная переменная и тесты были бы в одной фиксации или переменная была бы переименована в нескольких фиксациях, на отмену изменений потребовалось бы больше усилий.

Фиксируя и отправляя изменения, вы создаете резервную копию результатов работы в удаленном хранилище. Это означает, что вы можете получить доступ к ним с любого устройства. Это также означает, что участники совместной работы могут просматривать ваши результаты, отвечать на вопросы и вносить предложения или вклад.

Продолжайте вносить, фиксировать и отправлять изменения в ветвь, пока не будете готовы запросить отзыв.

{% tip %}

**Совет**. Создавайте отдельную ветвь для каждого набора несвязанных изменений. Это упростит рецензентам предоставление отзывов. Кроме того, вам и будущим участникам совместной работы будет проще понять, зачем потребовались изменения, и отменить их или продолжить работу над ними. Если один из наборов изменений откладывается, другие изменения не откладываются вместе с ним.

{% endtip %}

### Создание запроса на включение изменений

Чтобы попросить участников совместной работы оставить отзыв о ваших изменениях, создайте запрос на вытягивание. Проверка запросов на вытягивание настолько важна, что для слияния запросов на вытягивание некоторые репозитории требуют утверждения результатов проверки. Если вы хотите получить предварительный отзыв или совет перед внесением изменений, то можете пометить запрос на вытягивание как черновик. Дополнительные сведения см. в разделе [Создание запроса на вытягивание](/articles/creating-a-pull-request).

При создании запроса на вытягивание добавьте сводку изменений и описание решаемой ими проблемы. Чтобы эти сведения были нагляднее, можно включить изображения, ссылки и таблицы. Если запрос на вытягивание призван решить проблему, свяжите его с ней, чтобы заинтересованные лица знали о запросе на вытягивание, и наоборот. При связывании с помощью ключевого слова проблема автоматически закроется после слияния запроса на вытягивание. Дополнительные сведения см. в разделах [Базовый синтаксис записи и форматирования](/github/writing-on-github/basic-writing-and-formatting-syntax) и [Связывание запроса на вытягивание с проблемой](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).

![текст запроса на вытягивание](/assets/images/help/pull_requests/pull-request-body.png)

Помимо заполнения текста запроса на вытягивание, можно добавить комментарии к определенным его строкам, чтобы привлечь к ним внимание рецензентов.

![комментарий к запросу на вытягивание](/assets/images/help/pull_requests/pull-request-comment.png)

Репозиторий может настроить так, чтобы при создании запроса на вытягивание автоматически запрашивалась проверка у определенных команд или пользователей. Можно также вручную упомянуть (@mention) конкретных людей или команды или запросить у них проверку.

Если в репозитории настроены проверки для запросов на вытягивание, вы увидите все непройденные проверки для вашего запроса на вытягивание. Это помогает узнавать об ошибках перед слиянием ветви. Дополнительные сведения см. в разделе [Сведения о проверках состояния](/github/collaborating-with-issues-and-pull-requests/about-status-checks).

### Обработка комментариев рецензентов

Рецензенты должны оставлять вопросы, комментарии и предложения. Они могут комментировать весь запрос на вытягивание или добавлять комментарии к определенным строкам. Вы и рецензенты можете вставлять изображения или предложения в отношении кода для уточнения комментариев. Дополнительные сведения см. в разделе [Проверка изменений в запросах на вытягивание](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests).

В ответ на отзывы можно продолжать фиксировать и отправлять изменения. Запрос на вытягивание будет обновляться автоматически.

### Слияние запроса на вытягивание

После утверждения запроса на вытягивание выполните его слияние. Это приведет к автоматическому слиянию ветви, так что изменения отразятся в ветви по умолчанию. На {% data variables.product.prodname_dotcom %} ведется журнал комментариев и фиксаций в запросе на вытягивание, что помогает будущим участникам понять смысл изменений. Дополнительные сведения см. в разделе [Слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% data variables.product.prodname_dotcom %} сообщит, есть ли в запросе на вытягивание конфликты, которые необходимо разрешить перед слиянием. Дополнительные сведения см. в разделе [Устранение конфликтов слияния](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts).

Параметры защиты ветви могут блокировать слияние, если запрос на вытягивание не соответствует определенным требованиям. Например, может требоваться определенное количество утверждений или утверждение от определенной команды. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches).

### Удаление ветви

После слияния запроса на вытягивание удалите ветвь. Это означает, что работа с ветвью завершена, и предотвращает случайное использование старых ветвей вами или другими пользователями. Дополнительные сведения см. в разделе [Удаление и восстановление ветвей в запросе на вытягивание](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request).

Не беспокойтесь о потере информации. Запрос на вытягивание и журнал фиксаций не удаляются. При необходимости всегда можно восстановить удаленную ветвь или вернуть запрос на вытягивание.
