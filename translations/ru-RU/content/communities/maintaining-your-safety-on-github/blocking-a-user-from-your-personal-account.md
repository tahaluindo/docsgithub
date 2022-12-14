---
title: Блокировка пользователя из вашей личной учетной записи
intro: 'Вы можете запретить пользователю доступ к действиям и репозиториям, а также запретить отправку вам уведомлений.'
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your account
ms.openlocfilehash: bd657c221b007b6b574e97f54f2b330401b8fd9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422879'
---
## Сведения о блокировке пользователей

Вы можете заблокировать пользователя в параметрах вашей учетной записи или из профиля пользователя. {% data variables.product.prodname_dotcom %} не уведомляет пользователя о том, что вы его заблокировали. Если вы хотите избежать участия в том же проекте, что и заблокированный вами пользователь, вы можете отобразить предупреждение во всех репозиториях с предыдущими вкладами заблокированного пользователя. Дополнительные сведения см. в разделе [Блокировка пользователя в параметрах учетной записи](#blocking-a-user-in-your-account-settings). Вы по-прежнему сможете видеть активность заблокированных пользователей в общих пространствах, а заблокированные пользователи смогут удалить свое существующее содержимое.

{% tip %}

**Совет.** Если вы блокируете пользователя из-за накаленной беседы, рассмотрите возможность блокировки беседы, чтобы комментировать могли только участники совместной работы. Дополнительные сведения см. в разделе [Блокировка бесед](/communities/moderating-comments-and-conversations/locking-conversations).

{% endtip %}

Когда вы блокируете пользователя, происходит следующее.
- Пользователь перестает быть вашим подписчиком
- Пользователь перестает отслеживать ваши репозитории и открепляет их
- Пользователь не может присоединиться к каким-либо организациям, в которых вы являетесь владельцем
- Звезды и назначения проблем пользователя удаляются из ваших репозиториев
- Голоса пользователя в обсуждениях или комментарии в ваших репозиториях удаляются
- Пользователь удаляется как участник совместной работы в ваших репозиториях
- Вклады пользователя в ваши репозитории больше не учитываются как вклады в них
- Ваши вклады в репозитории заблокированного пользователя больше не учитываются как вклады в них
- Вы удаляетесь как участник совместной работы в репозиториях заблокированного пользователя
- Его спонсорство вас отменяется
- Все ожидающие приглашения репозитория или последователя учетной записи для заблокированного пользователя или от него отменяются
- Пользователь удаляется в качестве участника совместной работы из всех проектов и {% data variables.projects.projects_v1_boards %}, принадлежащих вам
- Вы удаляетесь в качестве участника совместной работы из всех проектов и {% data variables.projects.projects_v1_boards %}, принадлежащих пользователю

После блокировки пользователя он не сможет выполнять следующее.
- Отправлять вам какие-либо уведомления, в том числе путем упоминания ([@mentioning](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)) вашего имени пользователя
- Комментировать или редактировать проблемы или запросы на вытягивание, созданные вами
- Реагировать на ваши комментарии в проблемах, запросах на вытягивание и фиксациях
- Стать вашим подписчиком или видеть ваше содержимое в своем веб-канале действий
- Назначать вас для проблем или запросов на вытягивание
- Приглашать вас как участника совместной работы в его репозиториях
- Приглашать вас как участника совместной работы по рекомендациям по безопасности
- Делать перекрестные ссылки на ваши репозитории в комментариях
- Создавать вилки, отслеживать, закреплять или отмечать звездочкой ваши репозитории
- Спонсировать вас
- Добавлять вас в качестве участника совместной работы в своих проектах и {% data variables.projects.projects_v1_boards %}
- Вносить изменения в общедоступные проекты и {% data variables.projects.projects_v1_boards %}

Кроме того, в принадлежащих вам репозиториях заблокированные пользователи не смогут выполнять следующее.
- Открывать проблемы
- Отправлять, закрывать или объединять запросы на вытягивание
- Оставлять комментарии по проблемам, запросам на вытягивание или фиксациям
- Добавлять и изменять вики-страницы

## Блокировка пользователя в параметрах учетной записи

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.blocked_users %}
3. В разделе "Блокировать пользователя" введите имя пользователя, которого вы хотите заблокировать, а затем нажмите кнопку **Блокировать пользователя**.
  ![Поле имени пользователя и кнопка блокировки](/assets/images/help/settings/user-settings-block-user.png)
4. При желании вы можете задать, чтобы при посещении вами репозитория, где заблокированный пользователь является участником, отображалось предупреждение. Для этого установите флажок **Предупреждать меня, если заблокированный пользователь является предыдущим участником репозитория**.
  ![Параметр предупреждения о заблокированных пользователях](/assets/images/help/settings/warn-block-user.png)

## Блокировка пользователя на его странице профиля

{% data reusables.profile.user_profile_page_navigation %} {% data reusables.profile.user_profile_page_block_or_report %}
3. Нажмите кнопку **Заблокировать пользователя**.
   ![Модальное поле с вариантами для блокировки пользователя или сообщения о нарушении](/assets/images/help/profile/profile-blockuser.png)

{% note %}

Используйте кнопку {% data variables.contact.report_abuse %}, чтобы связаться с нами, если вы подверглись преследованиям. {% data reusables.policies.abuse %}

{% endnote %}

## Дополнительные материалы

- [Просмотр пользователей, заблокированных из вашей личной учетной записи](/communities/maintaining-your-safety-on-github/viewing-users-youve-blocked-from-your-personal-account)
- [Разблокировка пользователя из вашей личной учетной записи](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)
- [Блокировка пользователя из вашей организации](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)
- [Разблокировка пользователя из вашей организации](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)
- [Сообщение о нарушении или спаме](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Ограничение взаимодействий в вашем репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)
