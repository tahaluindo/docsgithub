---
ms.openlocfilehash: 1b3e7f64c7507fde4a126cddaca3c4a97247d967
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109480"
---
Принудительное утверждение фиксаций применяется только к фиксациям, выполненных через веб-интерфейс. Для фиксаций, выполненных через интерфейс командной строки Git, автор фиксации должен утвердить фиксацию с помощью команды `--signoff`. Дополнительные сведения см. в [документации Git](https://git-scm.com/docs/git-commit).


Вы можете определить, включено ли обязательное утверждение фиксаций для репозитория, в который вы делаете вклад. Для этого отметьте заголовок формы фиксации в нижней части редактируемого файла. После включения обязательного утверждения фиксаций заголовок будет выглядеть так: "Утвердить и зафиксировать изменения".

![Снимок экрана: форма фиксации с включенным обязательным утверждением](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

Перед утверждением фиксации необходимо убедиться, что фиксация соответствует правилам и требованиям лицензии, действующих в отношении репозитория, в который вы выполняете фиксацию. Репозиторий может использовать соглашение об утверждении, например сертификат происхождения разработчика из Linux Foundation. Дополнительные сведения см. в разделе [Сертификат происхождения разработчика](https://developercertificate.org/).

Подписывание фиксаций отличается от утверждения фиксации. Дополнительные сведения о подписывании фиксации см. в разделе [Сведения о проверке подписывания фиксации](/authentication/managing-commit-signature-verification/about-commit-signature-verification).
