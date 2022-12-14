---
title: Добавление правил поведения в проект
intro: 'Выработка кодекса поведения для определения стандартов сообщества свидетельствует о дружественном инклюзивном проекте, а также определяет процедуры для работы с нарушениями.'
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a code of conduct
ms.openlocfilehash: dcf1e589ae4f803017752f9e919aad304c570fbc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092361'
---
*Правила поведения* — это документ, определяющий стандарты участия в деятельности сообщества. Он свидетельствует о создании инклюзивной среды, в которой уважают любые вклады. В нем также описываются процедуры решения проблем между членами сообщества проекта. Дополнительные сведения о том, почему правила поведения определяют стандарты и ожидания участия в работе сообществе, см. в [руководстве по открытому коду](https://opensource.guide/code-of-conduct/).

Перед принятием правил поведения для проекта необходимо выполнить следующие задачи:

* изучить различные правила поведения, предназначенные для проектов с открытым кодом; выбрать те, которые отражают стандарты вашего сообщества;
* тщательно продумать возможность их реализации.

Правила поведения можно добавить в проект с помощью шаблона или вручную создать пользовательские правила. Правила поведения будут доступны в любом случае, но "Правила поведения" будут помечены в профиле сообщества репозитория как завершенные, только если для исх создания использовался шаблон. Если вы используете правила поведения, написанные другим человеком или организацией, обязательно следуйте любым рекомендациям из источника. Дополнительные сведения о профилях сообщества см. в статье "[Сведения о профилях сообщества для общедоступных репозиториев](//communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)".

Можно создать стандартные правила поведения для организации или личной учетной записи. Дополнительные сведения см. в статье "[Создание файла работоспособности сообщества по умолчанию](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

## Добавление правил поведения с помощью шаблона

{% data variables.product.product_name %} предоставляет шаблоны для распространенных правил поведения, которые упростят добавление правил в проект.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла введите *CODE_OF_CONDUCT.md*.
4. Щелкните **Выбрать шаблон правил поведения**.
  ![Кнопка выбора шаблона правил поведения](/assets/images/help/repository/code-of-conduct-tool.png)
5. В левой части страницы выберите правила поведения для предварительного просмотра и добавления в проект.
  ![Выбор шаблона правил поведения](/assets/images/help/repository/code-of-conduct-tool-picker.png)
6. В правой части страницы заполните поля, чтобы указать в выбранных правилах поведения соответствующие сведения.
7. Щелкните **Проверить и отправить**.
  ![Проверка и отправка правил поведения в проект](/assets/images/help/repository/code-of-conduct-tool-review.png)
8. Просмотрите содержимое правил поведения в текстовой области.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Добавление правил поведения вручную

Если нужные правила поведения недоступны в предоставленных шаблонах, можно добавить правила вручную.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла введите имя и расширение файла.
  ![Новое имя файла правил поведения](/assets/images/help/repository/new-code-of-conduct-file-name.png)
    - Чтобы сделать правила поведения видимыми в корневом каталоге репозитория, введите *CODE_OF_CONDUCT* в поле имени файла.
    - Чтобы сделать правила поведения видимыми в каталоге `docs` репозитория, введите *docs/CODE_OF_CONDUCT*.
    - Чтобы сделать правила поведения видимыми в каталоге `.github` репозитория, введите *.github/CODE_OF_CONDUCT*.
4. Добавьте пользовательские правила поведения в новый файл.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
