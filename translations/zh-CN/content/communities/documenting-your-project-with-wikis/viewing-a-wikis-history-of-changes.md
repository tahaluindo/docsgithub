---
title: 查看 wiki 的更改历史记录
intro: 由于 wiki 是 Git 仓库，因此您进行的每个更改均为可查看的提交。
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: View a history of changes
ms.openlocfilehash: 1c5330a9067749b4bf0d1f2ed4e6fb9f10b38602
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086600'
---
## 查看 wiki 历史记录

Wiki 历史记录包括：
- 进行更改的用户
- 其提供的提交消息
- 进行更改的时间

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. 使用 wiki 边栏，导航到您要查看其历史记录的页面。
4. 在 wiki 顶部，单击修订链接。
   ![Wiki 修订链接](/assets/images/help/wiki/wiki_revision_link.png)

## 查看以前的内容

在 Wiki 历史记录表上，可以单击 [SHA-1哈希](http://en.wikipedia.org/wiki/SHA-1)（最右侧的字母和数字序列）以查看特定时间点存在的 Wiki 页面。

![Wiki SHA 编号](/assets/images/help/wiki/wiki_sha_number.png)

## 比较两个修订

1. 选择您要比较的两行。
2. 在历史记录表顶部，单击“比较修订”。
   ![Wiki 比较修订按钮](/assets/images/help/wiki/wiki_compare_revisions.png)
3. 您将看到更改的差异，显示添加、删除和修改了哪些行。

## 还原以前的更改

如果您有编辑 wiki 的权限，则只能还原更改。

1. 选择您要还原的行。
2. 在历史记录表顶部，单击“比较修订”。
   ![Wiki 比较修订按钮](/assets/images/help/wiki/wiki_compare_revisions.png)
3. 您将看到更改的差异，显示添加、删除和修改了哪些行。
   ![Wiki 修订差异](/assets/images/help/wiki/wiki_revision_diff.png)
4. 若要还原较新的更改，请单击“还原更改”。
   ![Wiki 还原更改按钮](/assets/images/help/wiki/wiki_revert_changes.png)
