---
title: Изменение фиксации
intro: 'Для изменения последней фиксации можно использовать {% data variables.product.prodname_desktop %}.'
versions:
  fpt: '*'
ms.openlocfilehash: 8d92d5f755df662c4948196cf9f84b3227ec0067
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117504'
---
## Сведения о внесении изменений в фиксацию

Изменение фиксации — это способ изменения последней фиксации, выполненной в текущей ветви. Это может быть полезно, если вам нужно изменить сообщение фиксации или если вы забыли включить изменения в фиксацию.

Можно продолжать вносить изменения в фиксацию, пока она не будет отправлена в удаленный репозиторий. После отправки фиксации параметр изменения будет отключен в {% data variables.product.prodname_desktop %}. При изменении фиксации вы заменяете предыдущую фиксацию новой фиксацией в текущей ветви. Изменение фиксации, отправленной в удаленный репозиторий, может запутать других участников совместной работы с репозиторием.

## Изменение фиксации

{% data reusables.desktop.history-tab %}
2. Щелкните последнюю фиксацию правой кнопкой мыши и выберите пункт **Изменить фиксацию**.
  ![Пункт "Изменить фиксацию" в контекстном меню](/assets/images/help/desktop/amend-commit-context-menu.png)
3. Щелкните поле **Сводка**, чтобы изменить сообщение о фиксации. При необходимости можно изменить или добавить сведения о фиксации в поле **Описание**.
4. Выберите все незафиксированные изменения, которые вы хотите добавить в фиксацию. Дополнительные сведения о выборе изменений см. в разделе [Фиксация и просмотр изменений в проекте](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit).
5. После внесения всех изменений нажмите кнопку **Изменить последнюю фиксацию**.
  ![Общий вид изменения последней фиксации](/assets/images/help/desktop/amend-last-commit-overview.png)
