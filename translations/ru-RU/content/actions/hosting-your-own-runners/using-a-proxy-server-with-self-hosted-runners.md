---
title: Использование прокси-сервера с самостоятельно размещенными средствами выполнения
intro: 'Можно настроить локальные средства выполнения, чтобы использовать прокси-сервер для обмена данными с {% data variables.product.product_name %}.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Proxy servers
ms.openlocfilehash: e6c9d36b052627726f73f6a07d989a192cd1e738
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092509'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Настройка прокси-сервера с помощью переменных среды

Если для обмена данными через прокси-сервер требуется локальное средство выполнения, приложение локального средства выполнения использует конфигурации прокси-сервера, заданные в следующих переменных среды:

* `https_proxy`: URL-адрес прокси-сервера для трафика HTTPS. При необходимости можно также включить учетные данные обычной проверки подлинности. Пример:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: URL-адрес прокси-сервера для трафика HTTP. При необходимости можно также включить учетные данные обычной проверки подлинности. Пример:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: разделенный запятыми список узлов, которые не должны использовать прокси-сервер. В `no_proxy` нельзя использовать IP-адреса, только имена узлов. Пример:
  * `example.com`
  * `example.com,myserver.local:443,example.org`

Переменные среды прокси-сервера считываются при запуске приложения локального средства выполнения, поэтому перед настройкой или запуском этого приложения необходимо задать переменные среды. При изменении конфигурации прокси необходимо перезапустить локальное приложение самостоятельного средства выполнения.

На компьютерах с Windows имена переменных среды прокси-сервера не учитывают регистр. На компьютерах с Linux и macOS рекомендуется использовать только строчные символы в переменных среды. Если у вас есть переменная среды в нижнем и верхнем регистре в Linux или macOS, например `https_proxy` и `HTTPS_PROXY`, локальное приложение Runner использует переменную среды в нижнем регистре.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

## Использование файла .env для настройки конфигурации прокси-сервера

Если параметры переменных среды не являются практическими, можно задать переменные конфигурации прокси-сервера в файле с именем _.env_ в каталоге приложения локального средства выполнения. Например, это может потребоваться, если вы хотите настроить приложение средства выполнения в качестве службы в системной учетной записи. Когда запускается приложение средства выполнения, оно считывает переменные, заданные в _.env_ для конфигурации прокси-сервера.

Ниже приведен пример _.env_ конфигурации прокси-сервера:

```ini
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Настройка конфигурации прокси-сервера для контейнеров Docker

Если в рабочих процессах используются действия контейнера Docker или контейнеры служб, возможно, потребуется настроить Docker для применения прокси-сервера в дополнение к настройке вышеуказанных переменных среды.

Сведения о требуемой конфигурации Docker см. в разделе [Настройка Docker для использования прокси-сервера](https://docs.docker.com/network/proxy/) в документации по Docker.
