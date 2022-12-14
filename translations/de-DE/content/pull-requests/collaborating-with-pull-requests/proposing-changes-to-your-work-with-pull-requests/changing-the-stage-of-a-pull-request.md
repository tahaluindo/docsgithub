---
title: Die Zustand eines Pull Requests ändern
intro: Du kannst Pull Request-Entwürfe als bereit zur Überprüfung markieren oder einen Pull Request in einen Entwurf konvertieren.
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
  - /articles/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the state
ms.openlocfilehash: 5ef2845e57518c4b66f13a804919f7bdea327040
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883295'
---
## Einen Pull Request als bereit zum Überprüfung markieren

{% data reusables.pull_requests.mark-ready-review %}

{% tip %}

**Tipp**: Du kannst einen Pull Request auch über die {% data variables.product.prodname_cli %} als für das Review bereit markieren. Weitere Informationen findest du unter „[`gh pr ready`](https://cli.github.com/manual/gh_pr_ready)“ in der Dokumentation zur {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste „Pull Requests“ auf den Pull Request, den du als „Ready for review“ (Bereit zur Überprüfung) markieren möchtest.
3. Klicke im Feld „Merge“ auf **Bereit für Review**.
  ![Schaltfläche „Bereit für Review“](/assets/images/help/pull_requests/ready-for-review-button.png)

## Einen Pull Request in einen Entwurf umwandeln

Du kannst einen Pull Request jederzeit in einen Entwurf umwandeln. Wenn du beispielsweise versehentlich einen Pull-Request anstelle eines Entwurfs geöffnet hast, oder wenn du Feedback zu deinem Pull Request erhalten hast, das bearbeitet werden muss, kannst du den Pull-Request in einem Entwurf umwandeln, um zu zeigen, dass weitere Änderungen erforderlich sind. Niemand kann den Pull Request zusammenführen, bevor du den Pull Request nicht erneut als bereit für die Überprüfung markiert hast. Personen, die bereits Benachrichtigungen für den Pull Request abonniert haben, werden nicht abgemeldet, wenn du den Pull Request in einen Entwurf umwandelst.

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste „Pull requests" auf den Pull Request, den du in einen Entwurf umwandeln willst.
3. Klicke in der rechten Seitenleiste unter „Reviewer“ auf **In Entwurf konvertieren**.
  ![Link „In Entwurf konvertieren“](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Klicke auf **In Entwurf konvertieren**.
  ![Bestätigung von „In Entwurf konvertieren“](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

## Weiterführende Themen

- [Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
