---
title: Remover artefatos de fluxo de trabalho
intro: 'Você pode recuperar o armazenamento de {% data variables.product.prodname_actions %} utilizado, excluindo artefatos antes de expirarem em {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove workflow artifacts
ms.openlocfilehash: e5fe2bb21f72785f55d22fffd9ba46420d791fce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199799'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Excluir um artefato

{% warning %}

**Aviso:** depois que você excluir um artefato, ele não poderá ser restaurado.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Em **Artefatos**, clique em {% octicon "trash" aria-label="The trash icon" %} ao lado do artefato que deseja remover.
    
    ![Menu suspenso para excluir o artefato](/assets/images/help/repository/actions-delete-artifact-updated.png)
    

## Definir o período de retenção para um artefato

Os períodos de retenção para artefatos e registros podem ser configurados no repositório, organização e no nível corporativo. Para obter mais informações, confira {% ifversion fpt or ghec or ghes %}"[Limites de uso, cobrança e administração](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)".{% elsif ghae %}"[Como gerenciar as configurações do {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)", "[Como configurar o período de retenção do {% data variables.product.prodname_actions %} para artefatos e logs na sua organização](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)" ou "[Como impor políticas para o {% data variables.product.prodname_actions %} na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)".{% endif %}

Você também pode definir um período de retenção personalizado para artefatos individuais usando a ação `actions/upload-artifact` em um fluxo de trabalho. Para obter mais informações, confira "[Como armazenar dados de fluxo de trabalho como artefatos](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)".

## Localizar a data de expiração de um artefato

Você pode usar a API para confirmar a data em que um artefato está agendado para ser excluído. Para obter mais informações, confira o valor `expires_at` retornado por "[Listar artefatos de um repositório](/rest/reference/actions#artifacts)".
