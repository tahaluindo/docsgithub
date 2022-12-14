---
title: Comunicar-se no GitHub
intro: 'Você pode discutir projetos e alterações específicas, bem como ideias mais amplas ou objetivos de equipe, usando diferentes tipos de discussões em {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/quickstart-for-communicating-on-github
  - /articles/about-discussions-in-issues-and-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-conversations-on-github
  - /github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github
  - /github/getting-started-with-github/quickstart/communicating-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Discussions
  - Fundamentals
ms.openlocfilehash: 18321069abd4fb48956f4d61653b8bbe592c648b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106786'
---
## Introdução

{% data variables.product.product_name %} fornece ferramentas de comunicação colaborativa embutidas que permitem que você interaja de perto com sua comunidade. Este guia de início rápido irá mostrar como escolher a ferramenta certa para suas necessidades.

{% ifversion discussions %} Você pode criar problemas, solicitações de pull, {% data variables.product.prodname_discussions %} e discussões em equipe e participar deles, dependendo do tipo de conversa que deseja ter.
{% else %} Você pode criar e participar de problemas, pull requests e discussões de equipe, dependendo do tipo de conversa que você gostaria de ter.
{% endif %}

### {% data variables.product.prodname_github_issues %}
- são úteis para discutir detalhes específicos de um projeto como relatórios de erros, melhorias e feedbacks planejados. 
- são específicos para um repositório e geralmente têm um proprietário claro. 
- muitas vezes são referidos como o sistema de rastreamento de erros de {% data variables.product.prodname_dotcom %}.
  
### Solicitações de pull
- permite que você proponha alterações específicas.
- permite que comente diretamente as alterações propostas por outros. 
- são específicos para um repositório. 
 
{% ifversion fpt or ghec %}
### {% data variables.product.prodname_discussions %}
-  são como um fórum e são mais utilizados para ideias de forma aberta e discussões em que a colaboração é importante. 
-  poderá incluir muitos repositórios. 
-  oferecem uma experiência colaborativa fora da base de código, permitindo o debate de ideias e a criação de uma base de conhecimento comunitária.
-  frequentemente não têm um proprietário claro.
-  muitas vezes não resultam em uma tarefa exequível.
{% endif %}

### Discussões em equipe
- na página da sua equipe podem ser iniciadas para conversas que abrangem projetos e não pertencem a um problema específico ou pull request. Em vez de abrir uma issue em um repositório para discutir uma ideia, você pode incluir toda a equipe tendo uma conversa em uma discussão de equipe.
- permitem que você realize discussões com sua equipe sobre planejamento, análise, design, pesquisa de usuário e tomada de decisão geral do projeto em um só lugar.{% ifversion ghes or ghae %} 
- oferecem uma experiência colaborativa fora do código, o que viabiliza o levantamento de hipóteses.
- frequentemente não têm um proprietário claro.
- muitas vezes não resultam em uma tarefa útil.{% endif %}

## Que ferramenta de discussão devo usar?

### Cenários para problemas

- Quero acompanhar as tarefas, melhorias e erros.
- Eu quero arquivar um relatório de erro.
- Quero partilhar o feedback sobre um recurso específico.
- Quero fazer uma pergunta sobre os arquivos do repositório.

#### Exemplo de problema

Este exemplo ilustra como um usuário do {% data variables.product.prodname_dotcom %} criou um problema na nossa documentação de repositório de código aberto para chamar a nossa atenção para um erro e discutir uma correção. 

![Exemplo de problema](/assets/images/help/issues/issue-example.png)

- Um usuário notou que a cor azul do banner na parte superior da página na versão em chinês da documentação do {% data variables.product.prodname_dotcom %} torna o texto no banner ilegível. 
- O usuário criou um problema no repositório, identificando o problema e sugerindo uma correção (que se trata de usar uma cor de fundo diferente para o banner).
- Uma discussão se inicia e, eventualmente, será alcançado um consenso sobre a correção a ser aplicada.
- Em seguida, um contribuidor pode criar um pull request com a correção.

### Cenários para pull requests

- Eu quero corrigir um erro de digitação em um repositório.
- Quero fazer alterações em um repositório.
- Eu quero fazer alterações para consertar um problema.
- Eu quero comentar as alterações sugeridas por outras pessoas.

#### Exemplo de solicitação de pull

Este exemplo ilustra como um usuário do {% data variables.product.prodname_dotcom %} criou um pull request na nossa documentação do repositório de código aberto para corrigir um erro de digitação. 

Na guia **Conversa** da solicitação de pull, o autor explica o motivo da criação da solicitação de pull.

![Exemplo de pull request - aba Conversa](/assets/images/help/pull_requests/pr-conversation-example.png)

A guia **Arquivos alterados** da solicitação de pull mostra a correção implementada.

![Exemplo de pull request - Aba de Arquivos alterados](/assets/images/help/pull_requests/pr-files-changed-example.png)

- Este contribuidor observa um erro de digitação no repositório.
- O usuário cria um pull request com a correção.
- Um mantenedor do repositório revisa o pull request, comenta e faz merge nela.

{% ifversion discussions %}
### Cenários para {% data variables.product.prodname_discussions %}

- Tenho uma pergunta que não é necessariamente relacionada a arquivos específicos no repositório.
- Eu quero compartilhar notícias com meus colaboradores ou com minha equipe.
- Eu quero começar ou participar de uma conversa aberta.
- Eu quero fazer um anúncio à minha comunidade.

#### Exemplo de {% data variables.product.prodname_discussions %}

Este exemplo mostra a postagem de boas-vindas de {% data variables.product.prodname_discussions %} para a documentação do repositório de código aberto {% data variables.product.prodname_dotcom %} e ilustra como a equipe quer colaborar com sua comunidade.

![Exemplo de {% data variables.product.prodname_discussions %}](/assets/images/help/discussions/github-discussions-example.png)

Este mantenedor da comunidade iniciou uma discussão para dar as boas-vindas à comunidade e pedir aos integrantes que se apresentem. Esta postagem promove uma atmosfera de acolhedora para visitantes e contribuidores. A postagem também esclarece que a equipe tem o prazer em ajudar com as contribuições para o repositório.

{% endif %}
### Cenários para discussões em equipe

- Tenho uma pergunta que não é necessariamente relacionada a arquivos específicos no repositório.
- Eu quero compartilhar notícias com meus colaboradores ou com minha equipe.
- Eu quero começar ou participar de uma conversa aberta.
- Eu quero fazer um anúncio à minha equipe.

{% ifversion fpt or ghec %} Como você pode ver, as discussões em equipe são muito parecidas com o {% data variables.product.prodname_discussions %}. Para {% data variables.product.prodname_dotcom_the_website %}, recomendamos usar {% data variables.product.prodname_discussions %} como ponto de partida para conversas. Você pode usar {% data variables.product.prodname_discussions %} para colaborar com qualquer comunidade em {% data variables.product.prodname_dotcom %}. Se você faz parte de uma organização e gostaria de iniciar conversas dentro da sua organização ou equipe dentro dessa organização, você deverá usar discussões de equipe.
{% endif %}

#### Exemplo de discussão em equipe

Este exemplo mostra uma postagem da equipe para a equipe `octo-team`.

![Exemplo de discussão em equipe](/assets/images/help/projects/team-discussions-example.png)

O membro da equipe `octocat` postou uma discussão em equipe, informando a equipe de várias coisas:
- Um integrante da equipe denominado Mona iniciou eventos remotos de jogos.
- Há uma postagem no blogue que descreve como as equipes usam {% data variables.product.prodname_actions %} para produzir sua documentação.
- Material sobre a "All Hands" de Abril agora está disponível para ver todos os integrantes da equipe.

## Próximas etapas

Estes exemplos mostraram como decidir qual é a melhor ferramenta para suas conversas em {% data variables.product.product_name %}. Mas esse é apenas o começo; há muito mais que você pode fazer para adaptar essas ferramentas às suas necessidades.

Para problemas, por exemplo, você pode marcar problemas com etiquetas para uma pesquisa mais rápida e criar modelos de problemas para ajudar os colaboradores a abrir problemas significativos. Para obter mais informações, confira "[Sobre os modelos de solicitações de pull](/github/managing-your-work-on-github/about-issues#working-with-issues)[ e de problemas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)".

Para pull requests, você pode criar pull requests de rascunho se as suas alterações propostas ainda forem um trabalho em andamento. Não é possível fazer o merge dos pull requests de rascunho até que estejam prontos para revisão. Para obter mais informações, confira "[Sobre as solicitações de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)".

{% ifversion discussions %} Para o {% data variables.product.prodname_discussions %}, você pode {% ifversion fpt or ghec %} configurar um código de conduta e{% endif %} fixar discuessões que contêm informações importantes para sua comunidade. Para obter mais informações, confira "[Sobre as discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".
{% endif %}

Para discussões em equipe, você pode editar ou excluir discussões na página de uma equipe, além de poder configurar notificações para discussões em equipe. Para obter mais informações, confira "[Sobre as discussões em equipe](/organizations/collaborating-with-your-team/about-team-discussions)".

Para saber mais sobre alguns recursos de formatação avançada que ajudarão você a se comunicar, confira "[Guia de início rápido para escrever em {% data variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)".
