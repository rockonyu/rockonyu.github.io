import Avatar from 'components/Avatar'
import DateFormatter from 'components/DateFormatter'
import CoverImage from 'components/CoverImage'
import PostTitle from './PostTitle'
import Author from 'types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {author && (
        <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      )}

      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        {author && (
          <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        )}
        {date && (
          <div className="mb-6 text-lg">
            <DateFormatter dateString={date} />
          </div>
        )}
      </div>
    </>
  )
}

export default PostHeader
