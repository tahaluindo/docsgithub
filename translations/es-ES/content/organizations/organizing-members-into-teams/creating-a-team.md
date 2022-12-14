---
title: Crear un equipo
intro: Puedes crear equipos independientes o anidados para administrar los permisos del repositorio y las menciones de grupos de personas.
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: c4ffe03e1108caae9bfed1171b08d8a046caeb76
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126172'
---
Solo los propietarios y mantenedores de la organización en un equipo padre pueden crear un nuevo equipo hijo debajo del padre. Los propietarios también pueden restringir los permisos de creación para todos los equipos en una organización. Para más información, vea "[Configuración de permisos de creación de equipos en la organización](/articles/setting-team-creation-permissions-in-your-organization)".

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.create-team-choose-parent %} {% ifversion ghec %}
1. Opcionalmente, si tu cuenta organizacional o empresarial utiliza la sincronización de equipos o si tu empresa utiliza {% data variables.product.prodname_emus %}, conecta un grupo de proveedor de identidad a tu equipo.
    * Si tu empresa utiliza {% data variables.product.prodname_emus %}, utiliza el menú desplegable de "Grupos de Proveedor de Identidad" y selecciona un solo grupo de proveedor de identidad para conectarlo al equipo nuevo. Para obtener más información, vea "[Administración de pertenencias a equipos con grupos de proveedores de identidades](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)".
    * Si tu cuenta organizacional o empresarial utiliza la sincronización de equipos, utiliza el menú desplegable de "Grupo de Proveedor de Identidad" y selecciona hasta cinco grupos de proveedor de identidad para conectar al equipo nuevo. Para obtener más información, vea "[Sincronización de un equipo con un grupo de proveedores de identidades](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)".
    ![Menú desplegable para elegir grupos de proveedores de identidades](/assets/images/help/teams/choose-an-idp-group.png) {% endif %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}
1. Opcionalmente, [proporcione al equipo acceso a los repositorios de la organización](/articles/managing-team-access-to-an-organization-repository).

## Información adicional

- "[Acerca de los equipos](/articles/about-teams)"
- "[Cambiar la visibilidad del equipo](/articles/changing-team-visibility)"
- "[Mover un equipo en la jerarquía de su organización](/articles/moving-a-team-in-your-organization-s-hierarchy)"
