import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllPosts, deletePost } from '../data/posts'
import './AdminDashboard.css'

function AdminDashboard() {
  const [posts, setPosts] = useState([])
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    loadPosts()
    
    // Listen for posts updates
    const handlePostsUpdate = () => {
      loadPosts()
    }
    
    window.addEventListener('postsUpdated', handlePostsUpdate)
    
    return () => {
      window.removeEventListener('postsUpdated', handlePostsUpdate)
    }
  }, [])

  // Reload posts when navigating back to dashboard
  useEffect(() => {
    if (location.pathname === '/admin') {
      loadPosts()
    }
  }, [location.pathname])

  const loadPosts = () => {
    setPosts(getAllPosts())
  }

  const handleDelete = (slug) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        deletePost(slug)
        loadPosts()
      } catch (error) {
        alert('Failed to delete post: ' + error.message)
        console.error('Delete error:', error)
      }
    }
  }

  const handleEdit = (slug) => {
    navigate(`/admin/edit/${slug}`)
  }

  const handleAdd = () => {
    navigate('/admin/add')
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <button onClick={handleAdd} className="btn btn-primary">
            + Add New Post
          </button>
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </div>

      <div className="admin-stats">
        <div className="stat-card">
          <div className="stat-number">{posts.length}</div>
          <div className="stat-label">Total Posts</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {posts.filter(p => p.category === 'creative').length}
          </div>
          <div className="stat-label">Creative</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {posts.filter(p => p.category === 'academic').length}
          </div>
          <div className="stat-label">Academic</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {posts.filter(p => p.category === 'blog').length}
          </div>
          <div className="stat-label">Blog</div>
        </div>
      </div>

      <div className="posts-table-container">
        <table className="posts-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-state">
                  No posts found. Click "Add New Post" to create one.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.slug}>
                  <td className="post-title">{post.title}</td>
                  <td>
                    <span className={`category-badge category-${post.category}`}>
                      {post.category}
                    </span>
                  </td>
                  <td>{new Date(post.date).toLocaleDateString()}</td>
                  <td>
                    <div className="tags-list">
                      {post.tags?.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                      {post.tags?.length > 3 && (
                        <span className="tag-more">+{post.tags.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => handleEdit(post.slug)}
                        className="btn-icon btn-edit"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(post.slug)}
                        className="btn-icon btn-delete"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard

