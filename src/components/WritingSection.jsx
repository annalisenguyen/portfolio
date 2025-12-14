import WritingItem from './WritingItem'
import './WritingSection.css'

function WritingSection({ title, description, posts }) {
  return (
    <section className="writing-section">
      <div className="section-header">
        <h3 className="section-name">{title}</h3>
        <p className="section-description">{description}</p>
      </div>
      <div className="writing-grid">
        {posts.map((post) => (
          <WritingItem key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}

export default WritingSection

