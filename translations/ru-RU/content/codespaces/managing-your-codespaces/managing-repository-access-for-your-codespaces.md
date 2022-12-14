---
title: Управление доступом к другим репозиториям в кодовом пространстве
allowTitleToDifferFromFilename: true
shortTitle: Repository access
intro: 'Вы можете управлять репозиториями, к которым у {% data variables.product.prodname_github_codespaces %} есть доступ.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
ms.openlocfilehash: 3f8379c322bd7ccd9ff7d31e17da90a77461536d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160106'
---
## Обзор

По умолчанию вашему кодовому пространству назначается токен, ограниченный репозиторием, из которого оно был создано. При публикации пространства кода, созданного из шаблона, в новый репозиторий в {% data variables.product.product_name %}, пространству кода назначается маркер, ограниченный новым репозиторием. Дополнительные сведения см. в статье [Безопасность в {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces#authentication). Если для вашего проекта требуются дополнительные разрешения в отношении других репозиториев, настройте их в файле `devcontainer.json` и убедитесь в том, что другие участники совместной работы имеют необходимый набор разрешений.

Если разрешения перечислены в файле `devcontainer.json`, вам будет предложено просмотреть и авторизовать дополнительные разрешения в процессе создания кодового пространства для этого репозитория. После того как вы авторизуете перечисленные разрешения, {% data variables.product.prodname_github_codespaces %} запомнит ваш выбор и не будет запрашивать авторизацию, пока разрешения в файле `devcontainer.json` не изменятся.

## Предварительные требования

Для создания кодовых пространств с определенными пользовательскими разрешениями необходимо использовать одно из следующих средств:
* веб-интерфейс {% data variables.product.prodname_dotcom %};
* [интерфейс командной строки {% data variables.product.prodname_dotcom %}](https://github.com/cli/cli/releases/latest) 2.5.2 или более поздней версии;
* [расширение {% data variables.product.prodname_github_codespaces %} {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 или более поздней версии.

## Настройка дополнительных разрешений репозитория

1. Разрешения репозитория для {% data variables.product.prodname_github_codespaces %} настраиваются в файле `devcontainer.json`. Если репозиторий еще не содержит файл `devcontainer.json`, добавьте его. Дополнительные сведения см. в разделе [Добавление контейнера разработки в проект](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces).

1. Измените файл `devcontainer.json`, добавив имя репозитория и необходимые разрешения в отношении объекта `repositories`:

  ```json{:copy}
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  {% note %}

  **Примечание.** Вы можете ссылаться только на репозитории, принадлежащие той же личной учетной записи или организации, что и репозиторий, в котором вы сейчас работаете.

  {% endnote %}

  Для каждого указанного репозитория можно предоставить любое количество следующих разрешений:
   * `actions` — чтение/запись;
   * `checks` — чтение/запись;
   * `contents` — чтение/запись;
   * `deployments` — чтение/запись;
   * `discussions` — чтение/запись;
   * `issues` — чтение/запись;
   * `packages` — чтение;
   * `pages` — чтение/запись;
   * `pull_requests` — чтение/запись;
   * `repository_projects` — чтение/запись;
   * `statuses` — чтение/запись;
   * `workflows` — запись.

  Чтобы задать разрешение для всех репозиториев в организации, добавьте подстановочный знак `*` после имени организации в объекте `repositories`.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/*": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  Чтобы задать все разрешения для определенного репозитория, используйте в объекте репозитория `"permissions": "read-all"` или `"permissions": "write-all"`.

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": "write-all"
          }
        }
      }
    }
  }
  ```

## Авторизация запрошенных разрешений

Если в файле `devcontainer.json` определены дополнительные разрешения репозитория, во время создания codespace или конфигурации предварительной сборки для этого репозитория появится запрос на просмотр и авторизацию разрешений при необходимости. При авторизации разрешений для репозитория {% data variables.product.prodname_github_codespaces %} не будет повторно запрашивать данные, пока набор запрошенных разрешений для репозитория не будет изменен.

![Страница запрошенных разрешений](/assets/images/help/codespaces/codespaces-accept-permissions.png)

Авторизуйте разрешения только для тех репозиториев, которые вы знаете и которым доверяете. Если вы не доверяете набору запрошенных разрешений, нажмите **Продолжить без авторизации**, чтобы создать кодовое пространство с базовым набором разрешений. Отклонение дополнительных разрешений может повлиять на функциональные возможности проекта в кодовом пространстве, поскольку кодовое пространство будет иметь доступ только к тому репозиторию, из которого оно был создано.

Вы можете авторизовать только те разрешения, которые есть у вашей личной учетной записи. Если кодовое пространство запрашивает разрешения в отношении репозиториев, к которым у вас нет доступа, обратитесь к владельцу или администратору соответствующего репозитория для получения доступа, а затем попробуйте создать кодовое пространство еще раз.

## Доступ и безопасность

{% warning %}

**Примечание об устаревании.** Описанные ниже параметры доступа и безопасности больше не рекомендуются и приводятся исключительно в ознакомительных целях. Чтобы включить расширенный доступ к другим репозиториям, добавьте запрошенные разрешения в определение контейнера разработки для вашего кодового пространства, как описано ниже.

{% endwarning %}

При включении доступа и безопасности для репозитория, принадлежащего вашей личной учетной записи, все кодовые пространства, созданные для этого репозитория, получают разрешения на чтение для всех других принадлежащих вам репозиториев. Доступ среды codespace к репозиториям можно ограничить либо репозиторием, для которого среда codespace была открыта, либо конкретными репозиториями. Включайте доступ и безопасность только для тех репозиториев, которым вы доверяете. 

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Доступ и безопасность" выберите параметр, подходящий для вашей личной учетной записи.

  ![Переключатели для управления доверенными репозиториями](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. Если вы выбрали "Выбранные репозитории", выберите раскрывающееся меню, а затем щелкните репозиторий, чтобы разрешить codespace репозиториям доступ к другим репозиториям, которые вам принадлежат. Повторите эти действия для всех репозиториев, средам codespace которых нужно предоставить доступ к другим принадлежащим вам репозиториям.

  ![Раскрывающееся меню "Выбранные репозитории"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
