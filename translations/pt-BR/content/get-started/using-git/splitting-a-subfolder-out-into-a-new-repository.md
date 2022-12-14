---
title: Dividir uma subpasta em um novo repositório
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository
intro: Você pode transformar uma pasta em um repositório do Git repository em um novo repositório.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Splitting a subfolder
ms.openlocfilehash: e99c1c1411b335837b478b32f085596ec4f5fc0f
ms.sourcegitcommit: 46eac8c63f52669996a9c832f2abf04864dc89ba
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172906'
---
Se você criar um clone do repositório, não perderá nenhuma alteração ou histórico do Git quando dividir uma pasta e criar um repositório separado.

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Altere o diretório de trabalho atual para o local em que deseja criar o novo repositório.

4. Clone o repositório que contém a subpasta.
   ```shell
   $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME
   ```

4. Altere o diretório de trabalho atual para o repositório clonado.
   ```shell
   $ cd REPOSITORY-NAME
   ```

5. Para filtrar a subpasta do restante dos arquivos no repositório, instale [`git-filter-repo`](https://github.com/newren/git-filter-repo), e execute `git filter-repo` com os argumentos a seguir.
   - `FOLDER-NAME`: a pasta dentro do seu projeto onde você deseja criar um repositório separado.

   {% windows %}

   {% tip %}

   **Dica:** usuários do Windows devem usar `/` para delimitar pastas.

   {% endtip %}

   {% endwindows %}
  
   ```shell
   $ git filter-repo --path FOLDER-NAME1/ --path FOLDER-NAME2/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/BRANCH-NAME' was rewritten
   ```
   
   Agora o repositório deve conter apenas os arquivos que estava(m) na(s) subpasta(s).

6. [Crie um repositório](/articles/creating-a-new-repository/) no {% data variables.product.product_name %}.

7. Na parte superior do seu novo repositório na página de Configuração Rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, clique em {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar a URL do repositório remoto.
    
   ![Campo Copy remote repository URL (Copiar URL do repositório remote)](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   {% tip %}

   **Dica:** Para obter informações sobre a diferença entre URLs HTTPS e SSH, confira "[Sobre repositórios remotos](/github/getting-started-with-github/about-remote-repositories)".

   {% endtip %}

8. Verifique o nome remoto do repositório. Por exemplo, `origin` ou `upstream` são duas opções comuns.
   ```shell
   $ git remote -v
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (fetch)
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (push)
   ```

9. Configure uma nova URL remota para o novo repositório usando o nome e a URL do repositório remote copiados na etapa 7.
   ```shell
   git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git
   ```

10. Verifique se a URL remota mudou com o nome do novo repositório.
    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

11. Faça push das alterações para o novo repositório no {% data variables.product.product_name %}.
    ```shell
    git push -u origin BRANCH-NAME
    ```
