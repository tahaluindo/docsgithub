---
title: Trabajar con ganchos de pre-recepción
intro: Los *ganchos de pre-recepción* imponen reglas para las contribuciones antes de que las confirmaciones se puedan insertar en un repositorio.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
  - /articles/working-with-pre-receive-hooks
  - /github/collaborating-with-issues-and-pull-requests/working-with-pre-receive-hooks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/working-with-pre-receive-hooks
versions:
  ghes: '*'
shortTitle: Pre-receive hooks
ms.openlocfilehash: 6ca26aed9e9d92abfb6d742f7f4ca968c442b447
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332596'
---
Los ganchos de pre-recepción ejecutan pruebas en código que se suben a un repositorio para asegurar que las contribuciones cumplan con las políticas del repositorio o de la organización. Si los contenidos de la confirmación pasan las pruebas, se aceptará que se suban al repositorio. Si los contenidos de la confirmación no pasan las pruebas, no se aceptará que se suban al repositorio.

Si no se acepta tu subida, verás un mensaje de error que corresponde al gancho de pre-recepción fallido.

```shell
$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 916 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: always_reject.sh: failed with exit status 1
remote: error: rejecting all pushes
To https://54.204.174.51/hodor/nope.git
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'https://54.204.174.51/hodor/nope.git'
```

![Mensaje de error para gancho de pre-recepción fallido](/assets/images/help/pull_requests/pre-receive-hook-failed-error.png)

Tu {% data variables.product.product_name %} administrador del sitio puede crear y eliminar ganchos de pre-recepción para tu organización o repositorio y puede permitirle a los administradores de la organización o del repositorio habilitar o inhabilitar ganchos de pre-recepción. Para más información, vea "[Uso de enlaces previos a la recepción para aplicar la directiva](/enterprise/admin/guides/developer-workflow/using-pre-receive-hooks-to-enforce-policy)".
