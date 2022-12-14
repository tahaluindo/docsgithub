---
ms.openlocfilehash: 99be41c3a31f1602c08160b3c552e2686820974d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145111544"
---
| Порт | Служба | Описание                                                |
|------|---------|------------------------------------------------------------|
| 22   | SSH     | Доступ к Git по протоколу SSH. Клонирование, получение и отправка операций в поддерживаемые общедоступные и частные репозитории. |
| 25   | SMTP    | Поддержка SMTP с шифрованием (STARTTLS). |
| 80   | HTTP    | Доступ к веб-приложениям. *Все запросы перенаправляются на HTTPS-порт при включении SSL.* |
| 122  | SSH     | Доступ к оболочке экземпляра. *Порт SSH по умолчанию (22) предназначен для сетевого трафика Git+SSH приложения.* |
| 161/UDP | SNMP | Требуется для работы протокола мониторинга сети. |
| 443  | HTTPS   | Доступ к веб-приложению и Git по протоколу HTTPS. |
| 1194/UDP | VPN | Безопасный туннель сети репликации в конфигурации высокого уровня доступности. |
| 8080 | HTTP    | Веб-сайт на основе обычного текста {% data variables.enterprise.management_console %}. *Не требуется, если только SSL не отключен вручную.* |
| 8443 | HTTPS   | Безопасный веб-доступ {% data variables.enterprise.management_console %}. *Требуется для базовой установки и настройки.* |
| 9418 | Git     | Простой порт протокола Git. Клонирование и получение операций только в общедоступные репозитории. *Взаимодействие по сети без шифрования* {% data reusables.enterprise_installation.when-9418-necessary %}  |
