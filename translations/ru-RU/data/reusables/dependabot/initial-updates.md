---
ms.openlocfilehash: 8adf896da9e4748cfaa5d0d0562172af14264f97
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145138777"
---
При первом включении обновлений версий может присутствовать много устаревших зависимостей, а некоторые из них могут быть устаревшими на много версий по сравнению с последней. {% data variables.product.prodname_dependabot %} проверяет наличие устаревших зависимостей сразу после включения. Новые запросы на вытягивание обновлений версий могут отобразиться в течение нескольких минут после добавления файла конфигурации в зависимости от количества файлов манифеста, для которых настроены обновления. {% data variables.product.prodname_dependabot %} также запустит обновление последующих изменений в файле конфигурации.

{% data variables.product.prodname_dependabot %} может также создавать запросы на вытягивание при изменении файла манифеста после сбоя обновления. Это связано с тем, что изменения манифеста, например удаление зависимости, вызвавшей сбой обновления, могут привести к успешному завершению нового обновления.

Для обеспечения управляемости запросов на вытягивание и упрощения их проверки {% data variables.product.prodname_dependabot %} создает не более пяти запросов на вытягивание, чтобы приступить к обновлению зависимостей до последней версии. В случае слияния некоторых из этих первых запросов на вытягивание до следующего запланированного обновления оставшиеся запросы на вытягивание откроются в том же максимальном количестве при следующем обновлении. Вы можете изменить максимальное количество открытых запросов на вытягивание, задав [параметр конфигурации`open-pull-requests-limit`](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit).
