---
title: Защита сквозной цепочки поставок
shortTitle: Overview
allowTitleToDifferFromFilename: true
intro: 'Рекомендации по обеспечению полной безопасности сквозной цепочки поставок, включая личные учетные записи, код и процессы сборки.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - Dependencies
  - Advanced Security
ms.openlocfilehash: 44eb2f8fa24d172cc1ad5f988bbbda3a192797a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060685'
---
## Что такое сквозная цепочка поставок?

Защиты сквозной цепочки поставок программного обеспечения заключается в том, чтобы не допустить вмешательства в распространяемый код. Раньше злоумышленники концентрировались на применяемых пользователями зависимостях, таких как библиотеки и платформы. Теперь они расширили сферу внимания и начали воздействовать на учетные записи пользователей и процессы сборки, а значит эти системы тоже нужно защищать.

Сведения о функциях в {% data variables.product.prodname_dotcom %}, которые могут помочь вам в защите зависимостей, см. в разделе [Защита цепочки поставок](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

## Об этих руководствах

В этой серии руководств рассказывается, как защищать сквозную цепочку поставок — личную учетную запись, код и процессы сборки. В каждом руководстве рассматривается существующий в этой области риск и функции {% data variables.product.product_name %}, которые помогут его смягчить. 

Поскольку задачи могут быть разными, каждое руководство начинается с наиболее важного изменения, после чего обсуждаются дополнительные возможное доработки. Необязательно использовать все — сосредоточьтесь на тех улучшениях, которые, по вашему мнению, принесут максимальную пользу. Главная цель состоит не в том, чтобы сделать все сразу, а в том, чтобы постоянно укреплять защиту ваших систем с течением времени.

- [Рекомендации по защите учетных записей](/code-security/supply-chain-security/end-to-end-supply-chain/securing-accounts)

- [Рекомендации по защите кода в цепочке поставок](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)

- [Рекомендации по обеспечению безопасности системы сборки](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)

## Дополнительные материалы

- [Защита целостности артефактов в любой цепочке поставок программного обеспечения](https://slsa.dev/)
- [Модель обеспечения целостности цепочки поставок Майкрософт](https://github.com/microsoft/scim)
- [Документ по защите цепочки поставок программного обеспечения — группа технических рекомендаций по безопасности CNCF](https://github.com/cncf/tag-security/blob/main/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf)
