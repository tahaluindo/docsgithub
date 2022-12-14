---
title: Веб-перехватчики организации
allowTitleToDifferFromFilename: true
shortTitle: Webhooks
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 68b043b92589bf1c1b3a6b543168d5b5b8c85118
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066845'
---
## Сведения об API веб-перехватчиков организации

Веб-перехватчики организации позволяют получать полезные данные HTTP-запроса `POST` всякий раз, когда в организации происходят определенные события. {% data reusables.webhooks.webhooks-rest-api-links %}

Дополнительные сведения о действиях, на которые можно подписаться, см. в разделе [Типы событий {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types).

### Область действия и ограничения

Любые действия с веб-перехватчиками организации может выполнять только прошедший проверку подлинности пользователь, являющийся администратором управляемой организации. Кроме того, токены OAuth должны иметь область действия `admin:org_hook`. Дополнительные сведения см. в разделе [Области для приложений OAuth](/developers/apps/scopes-for-oauth-apps).

Чтобы защитить конфиденциальные данные, которые могут присутствовать в конфигурациях веб-перехватчика, также применяются следующие правила управления доступом:

- Приложения OAuth могут перечислять, просматривать или изменять только те веб-перехватчики, которые были созданы ими.
- Пользователи не могут перечислять, просматривать или изменять веб-перехватчики, создаваемые приложениями OAuth.

### Получение веб-перехватчиков

Для отправки полезных данных веб-перехватчика из {% data variables.product.product_name %} требуется доступ к серверу через Интернет. Также настоятельно рекомендуется использовать SSL для передачи зашифрованных полезных данных по протоколу HTTPS.

Дополнительные рекомендации см. в нашем [руководстве](/guides/best-practices-for-integrators/).

#### Заголовки веб-перехватчиков

{% data variables.product.product_name %} может отправлять несколько разных заголовков HTTP, которые позволяют различать типы событий и идентификаторы полезных данных. Дополнительные сведения см. разделе [Заголовки веб-перехватчика](/webhooks/event-payloads/#delivery-headers).
