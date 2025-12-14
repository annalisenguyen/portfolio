import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src="https://via.placeholder.com/300x300?text=Your+Photo" 
            alt="Profile Photo" 
            className="profile-image" 
            id="profileImage"
          />
        </div>
        <h1 className="name">Annalise Nguyen</h1>
        <p className="title">Writer & Content Creator</p>
      </div>

      <div className="about-section">
        <h2>About Me</h2>
        <p className="about-text">
          Welcome to my writing portfolio. I am a passionate writer with expertise in creative writing, 
          academic research, and blog/article writing. Through my work, I aim to engage, inform, and 
          inspire readers across various genres and formats. Explore my writing samples below to see 
          the breadth and depth of my work.
        </p>
      </div>

      <div className="social-links">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <a href="mailto:your.email@example.com" className="social-button email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Email
        </a>
        <a href="https://annamarielifestyle.com" target="_blank" rel="noopener noreferrer" className="social-button blog">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            <line x1="9" y1="7" x2="15" y2="7"></line>
            <line x1="9" y1="11" x2="15" y2="11"></line>
            <line x1="9" y1="15" x2="13" y2="15"></line>
          </svg>
          Blog
        </a>
      </div>
    </aside>
  )
}

export default Sidebar

