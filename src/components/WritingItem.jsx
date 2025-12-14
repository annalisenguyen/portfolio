import { useNavigate } from 'react-router-dom'
import './WritingItem.css'

function WritingItem({ post }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/post/${post.slug}`)
  }

  return (
    <article className="writing-item" onClick={handleClick}>
      <h4 className="writing-title">{post.title}</h4>
      <p className="writing-excerpt">{post.excerpt}</p>
      <a href={`/post/${post.slug}`} className="read-more" onClick={(e) => e.stopPropagation()}>
        Read More →
      </a>
    </article>
  )
}

export default WritingItem

