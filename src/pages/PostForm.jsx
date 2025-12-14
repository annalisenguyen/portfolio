import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostBySlug, addPost, updatePost } from '../data/posts'
import './PostForm.css'

function PostForm() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!slug

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'blog',
    excerpt: '',
    date: new Date().toISOString().split('T')[0],
    author: '',
    tags: '',
    content: ''
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isEditMode) {
      const post = getPostBySlug(slug)
      if (post) {
        setFormData({
          title: post.title,
          slug: post.slug,
          category: post.category,
          excerpt: post.excerpt,
          date: post.date,
          author: post.author || '',
          tags: post.tags?.join(', ') || '',
          content: post.content
        })
      }
    }
  }, [slug, isEditMode])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug is required'
    } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
      newErrors.slug = 'Slug must contain only lowercase letters, numbers, and hyphens'
    }
    
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required'
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required'
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    try {
      const postData = {
        ...formData,
        tags: formData.tags
          .split(',')
          .map(tag => tag.trim())
          .filter(tag => tag.length > 0)
      }

      if (isEditMode) {
        updatePost(slug, postData)
      } else {
        addPost(postData)
      }

      navigate('/admin')
    } catch (error) {
      setErrors({ submit: error.message || 'Failed to save post. Please try again.' })
    }
  }

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    setFormData(prev => ({ ...prev, slug }))
  }

  return (
    <div className="post-form-container">
      <div className="post-form-header">
        <h1>{isEditMode ? 'Edit Post' : 'Add New Post'}</h1>
        <button onClick={() => navigate('/admin')} className="btn btn-secondary">
          ← Back to Dashboard
        </button>
      </div>

      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="title">
              Title <span className="required">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <span className="error-text">{errors.title}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="slug">
              Slug <span className="required">*</span>
            </label>
            <div className="slug-input-group">
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className={errors.slug ? 'error' : ''}
                placeholder="url-friendly-identifier"
              />
              {!isEditMode && (
                <button
                  type="button"
                  onClick={generateSlug}
                  className="btn-generate-slug"
                >
                  Generate from title
                </button>
              )}
            </div>
            {errors.slug && <span className="error-text">{errors.slug}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="category">
              Category <span className="required">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="creative">Creative</option>
              <option value="academic">Academic</option>
              <option value="blog">Blog</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">
              Date <span className="required">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={errors.date ? 'error' : ''}
            />
            {errors.date && <span className="error-text">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Annalise Nguyen"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="excerpt">
            Excerpt <span className="required">*</span>
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows="3"
            className={errors.excerpt ? 'error' : ''}
            placeholder="Short description shown on home page..."
          />
          {errors.excerpt && <span className="error-text">{errors.excerpt}</span>}
        </div>

        <div className="form-group full-width">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="tag1, tag2, tag3"
          />
          <small className="form-hint">Separate tags with commas</small>
        </div>

        <div className="form-group full-width">
          <label htmlFor="content">
            Content <span className="required">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="15"
            className={errors.content ? 'error' : ''}
            placeholder="Enter HTML content..."
          />
          {errors.content && <span className="error-text">{errors.content}</span>}
          <small className="form-hint">You can use HTML tags for formatting</small>
        </div>

        {errors.submit && (
          <div className="error-message" style={{ marginBottom: '1rem' }}>
            {errors.submit}
          </div>
        )}

        <div className="form-actions">
          <button type="button" onClick={() => navigate('/admin')} className="btn btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {isEditMode ? 'Update Post' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostForm

