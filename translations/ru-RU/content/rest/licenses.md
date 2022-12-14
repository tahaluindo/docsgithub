---
title: Лицензии
intro: API лицензий позволяет получать популярные лицензии на средства с открытым кодом и сведения о файлах лицензии для конкретного проекта.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/licenses
ms.openlocfilehash: f6d229eb27764441ae040abaaca211b5a894e7ef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064869'
---
## Сведения об API лицензий

API лицензий использует [лицензиат Ruby Gem с открытым кодом](https://github.com/benbalter/licensee), чтобы попытаться идентифицировать лицензию проекта. Лицензиат сопоставляет содержимое файла проекта `LICENSE` (если он существует) с кратким списком известных лицензий. В результате API не учитывает лицензии зависимостей проекта или другие средства документирования лицензии проекта, такие как ссылки на имя лицензии в документации.

Если лицензия совпадает, возвращенный ключ лицензии и имя соответствуют [спецификации SPDX](https://spdx.org/).

**Примечание.** Эти конечные точки также будут возвращать сведения о лицензии репозитория:

- [Получение репозитория](/rest/reference/repos#get-a-repository)
- [Список репозиториев для пользователя](/rest/reference/repos#list-repositories-for-a-user)
- [Список репозиториев организации](/rest/reference/repos#list-organization-repositories)
- [Список вилок](/rest/reference/repos#list-forks)
- [Список репозиториев, отслеживаемых пользователем](/rest/reference/activity#list-repositories-watched-by-a-user)
- [Список репозиториев команды](/rest/reference/teams#list-team-repositories)

{% warning %}

GitHub — это много чего, но не юридическая фирма. Таким образом, GitHub не предоставляет юридических консультаций. Использование API лицензий или отправка нам сообщения электронной почты об этом не являются юридической консультацией и не создают отношений адвоката и клиента. Если есть вопросы о том, что можно и чего нельзя делать с определенной лицензией, нужно обратиться к своему собственному юридическому консультанту, прежде чем двигаться дальше. На самом деле, всегда нужно консультироваться со своим собственным адвокатом, прежде чем принимать какие-либо решения, которые могут иметь правовые последствия или которые могут повлиять на юридические права.

GitHub создали API лицензий, чтобы помочь пользователям получать сведения о лицензиях с открытым кодом и проектах, которые их используют. Мы надеемся, что это поможет, но, пожалуйста, имейте в виду, что мы — не юристы (по крайней мере, большинство из нас) и что мы можем ошибаться, как и все остальные. По этой причине GitHub предоставляет API в варианте "как есть" и не дает никаких гарантий в отношении какой-либо информации или лицензий, предоставленных в нем или им, а также отказывается от ответственности за ущерб, вызванный использованием API.

{% endwarning %}
