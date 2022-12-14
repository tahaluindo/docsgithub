---
title: Сжатие фиксаций
intro: 'Для сжатия фиксаций в журнале ветви можно использовать {% data variables.product.prodname_desktop %}.'
versions:
  fpt: '*'
ms.openlocfilehash: fb8141710a99b52f1b9a93e1abc0429b5e29f116
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117491'
---
## Сведения о сжатии фиксации

Сжатие позволяет объединить несколько фиксаций в журнале ветви в одну фиксацию. Это поможет сделать журнал репозитория более удобочитаемым и понятным.

## Сжатие фиксации

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. В списке выберите ветвь, в которой есть фиксации, которые вы хотите сжать.
{% data reusables.desktop.history-tab %}
4. Выберите фиксации для сжатия и перетащите их на фиксацию, с которой требуется их объединить. Можно выбрать одну или несколько фиксаций с помощью <kbd>клавиши Command</kbd> или <kbd>клавиши Shift</kbd>.
  ![перетаскивание сжатия](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Измените сообщение фиксации новой фиксации. Сообщения фиксации выбранных фиксаций, которые вы хотите сжать, предварительно заполняются в поля **Сводка** и **Описание**.
6. Щелкните **Сжать фиксации**.

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. В списке выберите ветвь, в которой есть фиксации, которые вы хотите сжать.
{% data reusables.desktop.history-tab %}
4. Выберите фиксации для сжатия и перетащите их на фиксацию, с которой требуется их объединить. Можно выбрать одну фиксацию или выбрать несколько фиксаций с помощью <kbd>клавиши Ctrl</kbd> или <kbd>клавиши Shift</kbd>.
  ![перетаскивание сжатия](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Измените сообщение фиксации новой фиксации. Сообщения фиксации выбранных фиксаций, которые вы хотите сжать, предварительно заполняются в поля **Сводка** и **Описание**.
6. Щелкните **Сжать фиксации**.

{% endwindows %}

## Сообщения об ошибках при сжатии фиксаций

При сжатии фиксаций можно увидеть одно из следующих уведомлений или сообщений об ошибках.

* Уведомление сообщает, что запрошенное изменение ветви потребует принудительной отправки для обновления удаленной ветви. Принудительная отправка изменяет журнал фиксаций ветви и повлияет на других участников совместной работы, работающих в этой ветви.  Выберите **Начать сжатие**, чтобы запустить сжатие, а затем щелкните **Принудительно отправить origin**, чтобы отправить изменения.

  ![диалоговое окно принудительной отправки сжатия](/assets/images/help/desktop/squash-force-push.png)

* Ошибка указывает, что сжатие завершилось неудачей, так как среди сжатых фиксаций есть фиксация слияния.

  ![изменение диалогового окна фиксации слияния](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* Отображается уведомление о том, что в текущей ветви присутствуют незафиксированные изменения. Выберите **Спрятать изменения и продолжить**, чтобы сохранить изменения и продолжить, или выберите **Закрыть**, чтобы закрыть сообщение и зафиксировать изменения. Если никаких незафиксированных изменений больше нет, можно сжать фиксации.

  ![диалоговое окно спрятанных изменений сжатия](/assets/images/help/desktop/squash-stash-dialog.png)
