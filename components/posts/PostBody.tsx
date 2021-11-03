import markdownStyles from 'styles/markdown-styles.module.css'
import classnames from 'classnames'
import 'highlight.js/styles/github-dark-dimmed.css'

type Props = {
  content: string
  comment?: React.ReactNode
}

const PostBody = ({ content, comment }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={classnames(markdownStyles['markdown'], 'mb-16')}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {comment}
    </div>
  )
}

export default PostBody
