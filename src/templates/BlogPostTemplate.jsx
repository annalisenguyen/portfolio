import './BlogPostTemplate.css'

/**
 * Blog Post Template Component
 * 
 * This is the template/layout file for blog posts.
 * To add a new blog post:
 * 1. Create a new entry in src/data/posts.js following the structure below
 * 2. The template will automatically render it with this layout
 * 
 * Post structure:
 * {
 *   slug: 'unique-url-slug',
 *   title: 'Post Title',
 *   category: 'creative' | 'academic' | 'blog',
 *   excerpt: 'Short description',
 *   date: 'YYYY-MM-DD',
 *   author: 'Author Name',
 *   content: <JSX content or string>
 * }
 */
function BlogPostTemplate({ post }) {
  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <div className="blog-post-meta">
          <span className="blog-post-category">{post.category}</span>
          <span className="blog-post-date">{formatDate(post.date)}</span>
        </div>
        <h1 className="blog-post-title">{post.title}</h1>
        {post.author && (
          <p className="blog-post-author">By {post.author}</p>
        )}
      </header>

      <div className="blog-post-content">
        {typeof post.content === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          post.content
        )}
      </div>

      <footer className="blog-post-footer">
        <div className="blog-post-tags">
          {post.tags && post.tags.map((tag, index) => (
            <span key={index} className="blog-post-tag">{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  )
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export default BlogPostTemplate

