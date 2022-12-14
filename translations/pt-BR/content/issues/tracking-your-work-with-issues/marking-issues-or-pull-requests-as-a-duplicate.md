---
title: Marcando problemas ou pull requests como duplicados
intro: Marque um problema ou uma pull request como uma duplicata para acompanhar problemas ou pull requests semelhantes juntos e remover a sobrecarga desnecessária dos mantenedores e colaboradores.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-duplicate-issues-and-pull-requests
  - /articles/about-duplicate-issues-and-pull-requests
  - /github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests
  - /issues/tracking-your-work-with-issues/managing-issues/marking-issues-or-pull-requests-as-a-duplicate
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: fc5a3c28a9d7d05b15aab685887f587fc14e955b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126597'
---
Para que um evento de linha do tempo "marcado como duplicata" apareça, o usuário que cria o comentário de referência de duplicata deve ter acesso de gravação ao repositório onde ele cria o comentário.

## Marcar duplicatas

Para marcar um problema ou uma pull request como uma duplicata, digite "Duplicata de" seguido pelo número do problema ou da pull request que ele duplica no texto de um novo comentário. Também é possível usar as respostas salvas "Problema duplicado" ou "Pull request duplicada" fornecidas pelo GitHub para marcar um problema ou uma pull request como uma duplicata. Para obter mais informações, confira "[Sobre as respostas salvas](/articles/about-saved-replies)".

![Sintaxe do problema duplicado](/assets/images/help/issues/duplicate-issue-syntax.png)

## Desmarcar duplicatas

Você pode desmarcar solicitações de pull e problemas duplicados clicando em **Desfazer** na linha do tempo. Isso adicionará um novo evento de linha do tempo, indicando que o problema ou a pull request foi desmarcado(a).

![Botão Unmark duplicate issue (Desmarcar problema duplicado)](/assets/images/help/issues/unmark-duplicate-issue-button.png)
