---
title: Acerca de las apps
intro: 'Puedes crear integraciones con las API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} para agregar flexibilidad y reducir la fricción en tu propio flujo de trabajo.{% ifversion fpt or ghec %} También puedes compartir las integraciones con otros en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace).{% endif %}.'
redirect_from:
  - /apps/building-integrationssetting-up-a-new-integration
  - /apps/building-integrations
  - /apps/getting-started-with-building-apps
  - /apps/about-apps
  - /developers/apps/about-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: a66af14f6047b2aff435ac4ac8dc83d7a1181e92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107361'
---
Las apps en {% data variables.product.prodname_dotcom %} te permiten automatizar y mejorar tu flujo de trabajo. Puedes compilar aplicaciones para mejorar tu flujo de trabajo. {% ifversion fpt or ghec %} También puedes compartir o vender aplicaciones en [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). Para aprender a mostrar una aplicación en {% data variables.product.prodname_marketplace %}, consulta "[Comenzar con GitHub Marketplace](/marketplace/getting-started/)".{% endif %}

{% data reusables.marketplace.github_apps_preferred %}, Pero GitHub es compatible tanto con las {% data variables.product.prodname_oauth_apps %} y con las {% data variables.product.prodname_github_apps %}. Para obtener información sobre cómo elegir un tipo de aplicación, consulta "[Diferencias entre las aplicaciones de GitHub y las aplicaciones de OAuth](/developers/apps/differences-between-github-apps-and-oauth-apps)".

{% data reusables.apps.general-apps-restrictions %}

Para obtener una guía detallada del proceso de creación de una {% data variables.product.prodname_github_app %}, consulta la sección "[Crear tu primera {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)".

## Acerca de las {% data variables.product.prodname_github_apps %}

Las {% data variables.product.prodname_github_apps %} son actores de primera clase dentro de GitHub. Una {% data variables.product.prodname_github_app %} actúa por si misma, tomando las acciones a través de la API y utilizando directamente su propia identidad, lo que significa que no necesitas mantener un bot o cuenta de servicio como un usuario separado.

Las {% data variables.product.prodname_github_apps %} se pueden instalar directamente en las cuentas de organización y personales, y se les puede dar acceso a repositorios específicos. Vienen con webhooks integrados y con permisos específicos y delimitados. Cuando configuras tu {% data variables.product.prodname_github_app %}, puedes seleccionar los repositorios a los cuales quieres acceder. Por ejemplo, puedes configurar una aplicación denominada `MyGitHub` que escriba incidencias en el repositorio `octocat` y _solo_ en el repositorio `octocat`. Para instalar una {% data variables.product.prodname_github_app %}, necesitas ser propietario de la organización o tener permisos administrativos en el repositorio.

{% data reusables.apps.app_manager_role %}

Las {% data variables.product.prodname_github_apps %} son aplicaciones que necesitan hospedarse en algún lugar. Para obtener instrucciones paso a paso que cubran los temas de servidores y hospedaje, consulta la sección "[Crear tu primera {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)".

Para mejorar tu flujo de trabajo, puedes crear una {% data variables.product.prodname_github_app %} que contenga varios scripts, o bien, una aplicación completa, y después conectarla a muchas otras herramientas. Por ejemplo, puedes conectar las {% data variables.product.prodname_github_apps %} a GitHub, Slack, a otras apps locales que tuvieras, programas de correo electrónico, o incluso a otras API.

Toma estas ideas en consideración cuando crees {% data variables.product.prodname_github_apps %}:

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* Una {% data variables.product.prodname_github_app %} debe realizar acciones independientemente de un usuario (a menos que la aplicación use un token de [usuario a servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) ). {% data reusables.apps.expiring_user_authorization_tokens %}

* Asegúrate de que la {% data variables.product.prodname_github_app %} se integre con repositorios específicos.
* La {% data variables.product.prodname_github_app %} deberá conectarse a una cuenta personal o a una organización.
* No esperes que la {% data variables.product.prodname_github_app %} sepa y haga todo lo que puede hacer un usuario.
* No utilices a la {% data variables.product.prodname_github_app %} si solo necesitas el servicio de "Iniciar sesión en GitHub". Pero una {% data variables.product.prodname_github_app %} puede usar un [flujo de identificación de usuario](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) para registrar usuarios _y_ hacer otras cosas.
* No crees una {% data variables.product.prodname_github_app %} si _únicamente_ quieres actuar como usuario de GitHub y hacer todo lo que puede hacer un usuario.{% ifversion fpt or ghec %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

Para empezar a desarrollar {% data variables.product.prodname_github_apps %}, comienza con "[Crear una {% data variables.product.prodname_github_app %}](/apps/building-github-apps/creating-a-github-app/)".{% ifversion fpt or ghec %} Para aprender a usar los manifiestos de las {% data variables.product.prodname_github_app %}, que permitan a otras personas crear {% data variables.product.prodname_github_apps %} preconfiguradas, consulta "[Crear {% data variables.product.prodname_github_apps %} a partir de un manifiesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)".{% endif %}

## Acerca de las {% data variables.product.prodname_oauth_apps %}

OAuth2 es un protocolo que permite a las aplicaciones externas el solicitar autorización para usar detalles privados en una cuenta de {% data variables.product.prodname_dotcom %} del usuario sin acceder a su contraseña. Estas son preferentes sobre la Autenticación Básica, ya que los tokens pueden limitarse a ciertos tipos de datos y los usuarios pueden revocarlos en cualquier momento.

{% data reusables.apps.deletes_ssh_keys %}

Una {% data variables.product.prodname_oauth_app %} utiliza a {% data variables.product.prodname_dotcom %} como proveedor de identidad para autenticarse como el usuario que otorga el acceso a la app. Esto significa que, cuando un usuario otorga acceso a una {% data variables.product.prodname_oauth_app %}, también otorga permisos a _todos_ los repositorios a los cuales tiene acceso en su cuenta, y también a cualquier organización a la que pertenezca que no haya bloqueado el acceso de terceros.

Crear una {% data variables.product.prodname_oauth_app %} es una buena opción si estás creando procesos más complejos de lo que puede manejar un script sencillo. Nota que las {% data variables.product.prodname_oauth_apps %} son aplicaciones que necesitan hospedarse en algún lugar.

Toma estas ideas en consideración cuando crees {% data variables.product.prodname_oauth_apps %}:

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* Una {% data variables.product.prodname_oauth_app %} siempre debe actuar como el usuario autenticado de {% data variables.product.prodname_dotcom %} a través de todo {% data variables.product.prodname_dotcom %} (por ejemplo, cuando proporciona notificaciones de usuario).
* Una {% data variables.product.prodname_oauth_app %} puede utilizarse como un proveedor de identidad si el usuario autenticado habilita la opción de "Ingresar con {% data variables.product.prodname_dotcom %}".
* No crees una {% data variables.product.prodname_oauth_app %} si quieres que tu aplicación actúe en un solo repositorio. Con el alcance de OAuth de `repo`, las {% data variables.product.prodname_oauth_apps %} podrán actuar en _todos_ los repositorios del usuario autenticado.
* No crees una {% data variables.product.prodname_oauth_app %} para que actúe como una aplicación para tu equipo o compañía. Las {% data variables.product.prodname_oauth_apps %} se autentican como un solo usuario, así que, si una persona crea una {% data variables.product.prodname_oauth_app %} para el uso de una compañía, y luego salen de dicha compañía, nadie más tendrá acceso a ella.{% ifversion fpt or ghec %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

Para obtener más información sobre {% data variables.product.prodname_oauth_apps %}, consulta "[Crear una {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/)" y "[Registro de la aplicación](/rest/guides/basics-of-authentication#registering-your-app)".

## {% data variables.product.pat_generic_caps %}

Un [{% data variables.product.pat_generic %}](/articles/creating-a-personal-access-token-for-the-command-line/) es una cadena de caracteres que funciona de forma similar a un [token de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/) en el sentido de que puedes especificar sus permisos mediante [ámbitos](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). Un {% data variables.product.pat_generic %} también es similar a una contraseña, pero puedes tener varios de ellos y revocar el acceso de cada uno en cualquier momento.

Por ejemplo, puedes permitir que un {% data variables.product.pat_generic %} escriba en tus repositorios. Si después ejecutas un comando cURL o escribes un script que [genera una incidencia](/rest/reference/issues#create-an-issue) en tu repositorio, pasarías e {% data variables.product.pat_generic %} para la autenticación. Puedes almacenar el {% data variables.product.pat_generic %} como una variable de entorno para evitar tener que escribirlo cada vez que lo uses.

Ten en cuenta lo siguiente cuando uses un {% data variables.product.pat_generic %}:

* Recuerda utilizar este token para que te represente únicamente a ti.
* Puedes realizar solicitudes cURL de una sola ocasión.
* Puedes ejecutar scripts personales.
* No configures un script para que lo utilice todo tu equipo o compañía.
* No configures una cuenta personal compartida para que actúe como un usuario de bot.
* Concede al token los privilegios mínimos que necesite.
* Establece una expiración para el {% data variables.product.pat_generic %}, con el fin de ayudar a mantener la información segura.

## Determinar qué integración debes crear

Antes de que comiences a crear integraciones, necesitas determinar la mejor forma de acceder, autenticar, e interactuar con las API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. En la imagen siguiente encontrarás algunas preguntas que deberías plantearte cuando decidas si vas a usar un {% data variables.product.pat_generic %}, {% data variables.product.prodname_github_apps %} o {% data variables.product.prodname_oauth_apps %} para la integración.

![Introducción al flujo de preguntas de apps](/assets/images/intro-to-apps-flow.png)

Considera estas preguntas acerca de cómo necesita comportarse tu integración y a qué necesita acceder:

* ¿Mi integración actuará únicamente como yo, o actuará más como una aplicación?
* ¿Quiero que actúe independientemente de mí como su propia entidad?
* ¿Accederá a todo lo que yo puedo acceder, o quiero limitar su acceso?
* ¿Es simple o compleja? Por ejemplo, un {% data variables.product.pat_generic %} es una buena opción para scripts simples y cURL, mientras que una {% data variables.product.prodname_oauth_app %} puede controlar scripts más complejos.

## Solicitar soporte

{% data reusables.support.help_resources %}
