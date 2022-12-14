import cx from 'classnames'
import { useState } from 'react'

import { ChevronDownIcon } from '@primer/octicons-react'
import { ActionList } from '@primer/react'

import { ProductTreeNode, useMainContext } from 'components/context/MainContext'
import { Link } from 'components/Link'

const maxArticles = 5

export const ProductArticlesList = () => {
  const { currentProductTree } = useMainContext()

  if (!currentProductTree) {
    return null
  }

  return (
    <div className="d-flex gutter flex-wrap" data-testid="product-articles-list">
      {currentProductTree.childPages.map((treeNode, i) => {
        if (treeNode.documentType === 'article') {
          return null
        }

        return <ProductTreeNodeList key={treeNode.href + i} treeNode={treeNode} />
      })}
    </div>
  )
}

const ProductTreeNodeList = ({ treeNode }: { treeNode: ProductTreeNode }) => {
  const [isShowingMore, setIsShowingMore] = useState(false)

  return (
    <div className="col-12 col-lg-4 mb-6 height-full">
      <h3 className="mb-3 f4">
        <Link className="color-unset text-underline" href={treeNode.href}>
          {treeNode.title}
        </Link>
      </h3>

      <ActionList variant="full">
        {treeNode.childPages.map((childNode, index) => {
          return (
            <ActionList.Item
              as="li"
              key={childNode.href + index}
              className={cx(
                'width-full pl-0',
                !isShowingMore && index >= maxArticles ? 'd-none' : null
              )}
              sx={{
                borderRadius: 0,
                ':hover': {
                  borderRadius: 0,
                },
              }}
            >
              <Link className="d-block width-full" href={childNode.href}>
                {childNode.title}
                {childNode.documentType === 'mapTopic' ? (
                  <small className="color-fg-muted d-inline-block">
                    &nbsp;&bull; {childNode.childPages.length} articles
                  </small>
                ) : null}
              </Link>
            </ActionList.Item>
          )
        })}
      </ActionList>
      {!isShowingMore && treeNode.childPages.length > maxArticles && (
        <button onClick={() => setIsShowingMore(true)} className="mt-2 btn-link Link--secondary">
          Show {treeNode.childPages.length - maxArticles} more{' '}
          <ChevronDownIcon className="v-align-text-bottom" />
        </button>
      )}
    </div>
  )
}
