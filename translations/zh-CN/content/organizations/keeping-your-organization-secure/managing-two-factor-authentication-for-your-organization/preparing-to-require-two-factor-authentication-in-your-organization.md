---
title: 准备在组织中要求双重身份验证
intro: 在要求双重身份验证 (2FA) 之前，您可以向用户通知即将发生的更改，并验证谁已使用 2FA。
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to require 2FA
ms.openlocfilehash: 67083113143145a6de7bba5412568609414f12a8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127514'
---
如果组织中需要 2FA，建议至少提前一周通知{% ifversion fpt or ghec %}组织成员、外部协作者和帐单管理员{% else %}组织成员和外部协作者{% endif %}。

需要对您的组织使用双重身份验证时，不使用 2FA 的成员、外部协作者和帐单管理员（包括自动程序帐户）将从组织中删除，并且失去访问其仓库的权限。 他们还会失去对组织私有仓库的复刻的访问权限。

在组织中要求 2FA 之前，建议：
  - 在个人帐户上[启用 2FA](/articles/securing-your-account-with-two-factor-authentication-2fa/)
  - 要求组织中的人员为其帐户设置 2FA
  - 查看[组织中的用户是否已启用 2FA](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)
  - 提醒用户：2FA 一旦启用，没有 2FA 的用户会自动从组织中删除
