---
title: 本地检查拉取请求
intro: '有人从您仓库的复刻或分支向您发送拉取请求时，您可以在本地合并它以解决合并冲突， 或者在 {% data variables.product.product_name %} 上合并之前测试并验证更改。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Check out a PR locally
ms.openlocfilehash: bdb63d3951c92996ca4d6dc393bdc49b8d37acce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130084'
---
{% note %}

  注意：拉取请求创建者可授权上游存储库维护员或对上游存储库具有推送权限的人员，允许他们提交到用户拥有的分支中其拉取请求的比较分支。 有关详细信息，请参阅“[允许更改从复刻创建的拉取请求分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)”。

  {% endnote %}

## 在本地修改活动的拉取请求

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. 在拉取请求列表中，单击要修改的拉取请求。{% ifversion fpt or ghec %}
3. 要选择想打开拉取请求的位置，请选择“通过 {% octicon "triangle-down" aria-label="The down triangle icon" %} 打开”下拉列表，然后单击其中一个选项卡。
  ![访问命令行拉取请求说明的链接](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. 在合并框中，单击“命令行说明”。 按照步骤顺序解决提议的拉取请求。
  ![访问命令行拉取请求说明的链接](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. （可选）若要在 {% data variables.product.prodname_desktop %} 中查看提议的更改，请单击“在 {% data variables.product.prodname_desktop %} 中打开”。
  ![在 Desktop 中本地打开拉取请求的链接](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

若要在本地签出拉取请求，请使用 `gh pr checkout` 子命令。 将 `pull-request` 替换为拉取请求的数字、URL 或主分支。

```shell
gh pr checkout <em>pull-request</em>
```

{% endcli %}

## 在本地修改非活动拉取请求

如果拉取请求的作者对请求无响应或已删除其分叉，该拉取请求还是可以合并。 但是，如果您要对拉取请求进行更改，而其作者又没有响应，则需要执行一些额外步骤来更新拉取请求。

拉取请求在打开后，{% data variables.product.product_name %} 将远程存储所有更改。 换句话说，即使在合并拉取请求之前，拉取请求中的提交也可用于仓库。 您可以获取打开的拉取请求，并将其重建为自己的拉取请求。

任何人都可以处理先前打开的拉取请求，以继续处理它、测试它，甚至进行一些额外更改后作为新的拉取请求打开它。 但是，只有具有推送权限的协作者才能合并拉取请求。

{% data reusables.repositories.sidebar-issue-pr %}
2. 在“Pull Requests（拉取请求）”列表中，单击要合并的拉取请求。
3. 找到非活动拉取请求的 ID 号。 这是拉取请求标题后面的数字序列。
  ![拉取请求 ID 号](/assets/images/help/pull_requests/pull_request_id_number.png) {% data reusables.command_line.open_the_multi_os_terminal %}
5. 根据其 ID 号获取对该拉取请求的引用，在该过程中创建一个新分支。
  ```shell
  $ git fetch origin pull/<em>ID</em>/head:<em>BRANCHNAME</em>
  ```
6. 切换到基于此拉取请求的新分支：
  ```shell
  [main] $ git checkout <em>BRANCHNAME</em>
  > Switched to a new branch '<em>BRANCHNAME</em>'
  ```
7. 现在，您可以使用此分支执行任何操作。 您可以运行一些本地测试，或者将其他分支合并到该分支。
8. 准备就绪后，可以向上推送新分支：
  ```shell
  [pull-inactive-pull-request] $ git push origin <em>BRANCHNAME</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repository</em>.git
  >  * [new branch]      <em>BRANCHNAME</em> -> <em>BRANCHNAME</em>
  ```
9. 使用新分支[创建新的拉取请求](/articles/creating-a-pull-request)。

## 错误：无法推送某些 ref

远程 `refs/pull/` 命名空间是只读的。 如果尝试在那里推送任何提交，您将看到此错误：
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:<em>USERNAME</em>/<em>REPOSITORY</em>.git'
```

{% tip %}

提示：移除或重命名远程引用时，本地 `refs/pull/origin/` 命名空间不会受到对 `git-remote` 的调用的影响。

{% endtip %}
