---
title: GitHub 事件类型
intro: '对于 {% data variables.product.prodname_dotcom %} 事件 API，了解每个事件类型、{% data variables.product.prodname_dotcom %} 上的触发操作以及每个事件的唯一属性。'
redirect_from:
  - /v3/activity/event_types
  - /developers/webhooks-and-events/github-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
ms.openlocfilehash: 0cd519f6dcf84fc5edd6356f1f734d23030a6711
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146064241'
---
事件 API 可以返回 GitHub 上的活动触发的不同类型事件。 每个事件响应都包含共享属性，但具有由其事件类型确定的唯一 `payload` 对象。 [事件对象公共属性](#event-object-common-properties)描述所有事件共享的属性，而每个事件类型描述特定事件唯一的 `payload` 属性。

{% ifversion fpt or ghec %}

{% endif %}

## 事件对象公共属性

从事件 API 端点返回的事件对象具有相同的结构。

| 事件 API 属性名称 | 说明 |
|--------------------------|-------------|
| `id` | 事件的唯一标识符。 |
| `type` | 事件的类型。 事件使用 PascalCase 作为名称。 |
| `actor` | 触发事件的用户。 |
| `actor.id` | 执行者的唯一标识符。 |
| `actor.login` | 执行者的用户名。 |
| `actor.display_login` | 用户名的特定显示格式。 |
| `actor.gravatar_id` | 执行者的 Gravatar 个人资料的唯一标识符。 |
| `actor.url` | 用于检索用户对象的 REST API URL，其中包括更多用户信息。 |
| `actor.avatar_url` | 执行者个人资料图像的 URL。 |
| `repo` | 发生事件的仓库对象。  |
| `repo.id` | 仓库的唯一标识符。 |
| `repo.name` | 仓库名称，包括所有者和仓库的名称。 例如，`octocat/hello-world` 是 `octocat` 个人帐户拥有的 `hello-world` 存储库的名称。 |
| `repo.url` | 用于检索仓库对象的 REST API URL，其中包括更多仓库信息。 |
| `payload` | 事件有效负载对象对于事件类型是唯一的。 有关事件 API `payload` 对象，请参阅下面的事件类型。 |
| `public` | 事件是否对所有用户可见。 |
| `created_at` | 触发事件的日期和时间。 它根据 ISO 8601 设置格式。 |
| `org` | 由行动者选择的组织来执行触发事件的操作。<br />该属性仅在适用时才会显示在事件对象中。 |
| `org.id` | 组织的唯一标识符。 |
| `org.login` | 组织名称。 |
| `org.gravatar_id` | 组织的 Gravatar 配置文件的唯一标识符。 |
| `org.url` | 用于检索组织对象的 REST API URL，其中包括更多组织信息。 |
| `org.avatar_url` | 组织的配置文件图像的 URL。 |

### WatchEvent 事件对象示例

此示例显示了使用[事件 API](/rest/reference/activity#events) 时 [WatchEvent](#watchevent) 响应的格式。

```
HTTP/2 200
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
```
```json
[
  {
    "type": "WatchEvent",
    "public": false,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]
```

## CommitCommentEvent

{% data reusables.webhooks.commit_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.commit_comment_properties %}

## CreateEvent

{% data reusables.webhooks.create_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.create_properties %}

## DeleteEvent

{% data reusables.webhooks.delete_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.delete_properties %}

## ForkEvent

{% data reusables.webhooks.fork_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.fork_properties %}

## GollumEvent

{% data reusables.webhooks.gollum_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.gollum_properties %}

## IssueCommentEvent

{% data reusables.webhooks.issue_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %}

## IssuesEvent

{% data reusables.webhooks.issues_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.issue_event_api_properties %} {% data reusables.webhooks.issue_properties %}

## MemberEvent

{% data reusables.webhooks.member_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.member_event_api_properties %} {% data reusables.webhooks.member_properties %}

{% ifversion fpt or ghes or ghec %}
## PublicEvent

{% data reusables.webhooks.public_short_desc %}
### 事件 `payload` 对象

此事件返回一个空 `payload` 对象。
{% endif %}
## PullRequestEvent

{% data reusables.webhooks.pull_request_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.pull_request_event_api_properties %} {% data reusables.webhooks.pull_request_properties %}

## PullRequestReviewEvent

{% data reusables.webhooks.pull_request_review_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

密钥 | 类型 | 说明
----|------|-------------
`action` | `string` | 执行的操作内容. 可以为 `created`。
`pull_request` | `object` | 与审查相关的拉取请求。
`review` | `object` |   受影响的审查。

## PullRequestReviewCommentEvent

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.pull_request_review_comment_event_api_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %}

## PullRequestReviewThreadEvent

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.pull_request_thread_properties %}

## PushEvent

{% data reusables.webhooks.push_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

密钥 | 类型 | 说明
----|------|-------------
`push_id` | `integer` | 推送的唯一标识符。
`size`|`integer` | 推送中的提交数。
`distinct_size`|`integer` | 推送中不同提交的数量。
`ref`|`string` | 推送的完整 [`git ref`](/rest/reference/git#refs)。 示例：`refs/heads/main`。
`head`|`string` | 推送之后在 `ref` 上最近提交的 SHA。
`before`|`string` | 推送之前在 `ref` 上最近提交的 SHA。
`commits`|`array` | 描述所推送提交的提交对象数组。 （该数组最多包含 20 个提交。 如有必要，可使用[提交 API](/rest/reference/repos#commits) 获取更多提交。 此限制仅适用于时间表事件，而不适用于 web 挂钩递送。）
`commits[][sha]`|`string` | 提交的 SHA。
`commits[][message]`|`string` | 提交消息。
`commits[][author]`|`object` | 提交的 Git 作者。
`commits[][author][name]`|`string` | Git 作者的名称。
`commits[][author][email]`|`string` | Git 作者的电子邮件地址。
`commits[][url]`|`url` | 指向提交 API 资源的 URL。
`commits[][distinct]`|`boolean` | 此提交是否与之前推送的任何提交不同。

## ReleaseEvent

{% data reusables.webhooks.release_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.release_event_api_properties %} {% data reusables.webhooks.release_properties %}

{% ifversion fpt or ghec %}
## SponsorshipEvent

{% data reusables.webhooks.sponsorship_short_desc %}

### 事件 `payload` 对象

{% data reusables.webhooks.sponsorship_event_api_properties %} {% data reusables.webhooks.sponsorship_properties %} {% endif %}

## WatchEvent

{% data reusables.webhooks.watch_short_desc %}

{% data reusables.webhooks.events_api_payload %}

### 事件 `payload` 对象

{% data reusables.webhooks.watch_properties %}
