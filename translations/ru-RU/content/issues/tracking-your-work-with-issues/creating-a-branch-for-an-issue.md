---
title: Создание ветви для работы с проблемой
intro: Вы можете создать ветвь для работы с проблемой непосредственно на странице проблемы и сразу приступить к работе.
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: '>= 3.5'
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Create branch for issue
ms.openlocfilehash: 062b41705836537de23d882acc5342e0713c316d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061141'
---
{% note %}

**Примечание.** Возможность создания ветви для проблемы в настоящее время находится в общедоступной бета-версии и может быть изменена.

{% endnote %}

## Сведения о ветвях, подключенных к проблеме
Ветви, подключенные к проблеме, отображаются в разделе "Разработка" на боковой панели проблемы. При создании запроса на вытягивание для одной из этих ветвей она автоматически связывается с проблемой. Соединение с этой ветвью удаляется, и в разделе "Разработка" отображается только запрос на вытягивание. Дополнительные сведения см. в разделе [Связывание запроса на вытягивание с проблемой](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).

## Создание ветви для проблемы

Любой пользователь с разрешением на запись в репозиторий может создать ветвь для проблемы. Для проблемы можно связать несколько ветвей.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. В списке проблем щелкните проблему, для которой нужно создать ветвь.
4. На правой боковой панели в разделе "Разработка" нажмите кнопку **Создать ветвь**. Если у проблемы уже есть связанная ветвь или запрос на вытягивание, щелкните {% octicon "gear" aria-label="The Gear icon" %} и в нижней части раскрывающегося меню нажмите кнопку **Создать ветвь**.
   ![Снимок экрана: команда "Создать ветвь", выделенная на боковой панели](/assets/images/help/issues/create-a-branch.png)
5. По умолчанию новая ветвь создается в текущем репозитории из ветви по умолчанию. Измените имя и сведения ветви в соответствии с требованиями в диалоговом окне "Создание ветви для этой проблемы".
   ![Снимок экрана: параметры в диалоговом окне "Создать ветвь"](/assets/images/help/issues/create-a-branch-options.png)
6. Выберите, следует ли работать в ветви локально или открыть ее в GitHub Desktop.
7. Когда вы будете готовы создать ветвь, нажмите кнопку **Создать ветвь**.
