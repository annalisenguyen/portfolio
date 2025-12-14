import { useEffect } from 'react'
import WritingSection from '../components/WritingSection'
import { getPostsByCategory } from '../data/posts'
import './Home.css'

function Home() {
  useEffect(() => {
    // Add fade-in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.writing-section')
    sections.forEach(section => {
      section.style.opacity = '0'
      section.style.transform = 'translateY(20px)'
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <>
      <div className="content-header">
        <h2 className="section-title">My Writing</h2>
        <p className="section-subtitle">Explore my work across different genres and formats</p>
      </div>

      <WritingSection
        title="Creative Writing"
        description="Fiction, poetry, and creative narratives"
        posts={getPostsByCategory('creative')}
      />

      <WritingSection
        title="Academic Writing"
        description="Research papers, essays, and scholarly articles"
        posts={getPostsByCategory('academic')}
      />

      <WritingSection
        title="Blog & Article Writing"
        description="Informative articles, blog posts, and web content"
        posts={getPostsByCategory('blog')}
      />
    </>
  )
}

export default Home

