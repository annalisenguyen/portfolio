import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '../data/posts'
import BlogPostTemplate from '../templates/BlogPostTemplate'
import './BlogPost.css'

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="error-message">
          <h2>Post not found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post-container">
      <Link to="/" className="back-link">← Back to Home</Link>
      <BlogPostTemplate post={post} />
    </div>
  )
}

export default BlogPost

