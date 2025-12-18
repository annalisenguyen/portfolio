/**
 * Blog Posts Data
 * 
 * To add a new blog post, simply add a new object to the posts array below.
 * Follow the structure of existing posts.
 * 
 * Required fields:
 * - slug: unique URL identifier (use lowercase, hyphens for spaces)
 * - title: post title
 * - category: 'creative', 'academic', or 'blog'
 * - excerpt: short description shown on home page
 * - date: publication date in YYYY-MM-DD format
 * - content: JSX content or HTML string
 * 
 * Optional fields:
 * - author: author name (defaults to profile name if not provided)
 * - tags: array of tag strings
 */

let posts = [
  {
    slug: 'midnight-garden',
    title: 'Short Story: "The Midnight Garden"',
    category: 'creative',
    excerpt: 'A tale of mystery and wonder set in an abandoned garden...',
    date: '2024-01-15',
    author: 'Annalise Nguyen',
    tags: ['fiction', 'short story', 'mystery'],
    content: `
      <p>In the heart of the old city, where the modern world had forgotten to look, there stood a garden that only came alive at midnight.</p>
      <p>The iron gates, rusted and forgotten, creaked open only when the moon reached its zenith. Those who dared to enter found themselves in a world where time moved differently, where flowers bloomed in shades that didn't exist in daylight.</p>
      <p>Sarah discovered it by accident one late night, returning home from her shift at the hospital. The glow from within the garden caught her eye—a soft, ethereal light that seemed to pulse with its own heartbeat.</p>
      <p>She pushed open the gate, and as she stepped inside, the world outside faded away. The garden welcomed her, its paths winding through beds of midnight roses and starlight lilies. In the center stood an ancient oak, its branches reaching toward a sky that seemed closer than it should be.</p>
      <p>That night, Sarah learned that some places exist between the cracks of reality, waiting for those who need them most.</p>
    `
  },
  {
    slug: 'urban-echoes',
    title: 'Poetry Collection',
    category: 'creative',
    excerpt: 'A collection of poems exploring city life and human connections...',
    date: '2024-02-10',
    author: 'Annalise Nguyen',
    tags: ['poetry'],
    content: `
      <div class="poem">
        <h3>City Lights</h3>
        <p>Neon signs flicker<br/>
        Like distant stars<br/>
        In concrete constellations<br/>
        We navigate by</p>
      </div>
      <div class="poem">
        <h3>Subway Dreams</h3>
        <p>Underground tunnels<br/>
        Carry whispered conversations<br/>
        Between strangers<br/>
        Who never meet</p>
      </div>
      <div class="poem">
        <h3>Skyline at Dusk</h3>
        <p>Buildings reach upward<br/>
        Touching clouds<br/>
        While we below<br/>
        Touch each other's lives</p>
      </div>
    `
  },
  {
    slug: 'last-train',
    title: 'Flash Fiction: "The Last Train"',
    category: 'creative',
    excerpt: 'A moment of reflection on a late-night journey home...',
    date: '2024-03-05',
    author: 'Annalise Nguyen',
    tags: ['flash fiction', 'reflection'],
    content: `
      <p>The last train of the night was always the quietest. Empty seats stretched out before him, each one holding the ghost of a conversation that had happened hours earlier.</p>
      <p>Marcus found his usual spot—window seat, third car from the front. The city lights blurred past, streaks of gold and white against the dark sky. He watched his reflection in the glass, superimposed over the passing world.</p>
      <p>In that liminal space between stations, between the day that was and the day that would be, Marcus felt most like himself. No expectations, no roles to play. Just a man on a train, moving through the night.</p>
      <p>When the train pulled into his stop, he gathered his things and stepped onto the platform. The doors closed behind him with a soft hiss, and the train continued into the darkness, carrying its emptiness to the next station.</p>
    `
  },
  {
    slug: 'digital-media-literature',
    title: 'Research Paper: "The Impact of Digital Media on Modern Literature"',
    category: 'academic',
    excerpt: 'An analysis of how digital platforms have transformed literary consumption...',
    date: '2024-01-20',
    author: 'Annalise Nguyen',
    tags: ['research', 'literature', 'digital media'],
    content: `
      <h2>Abstract</h2>
      <p>This paper examines the transformative impact of digital media on contemporary literature, analyzing shifts in consumption patterns, narrative structures, and reader engagement. Through quantitative and qualitative analysis of digital reading platforms, social media literature communities, and emerging narrative formats, this study reveals significant changes in how literature is created, distributed, and experienced.</p>
      
      <h2>Introduction</h2>
      <p>The advent of digital media has fundamentally altered the landscape of literary production and consumption. Traditional publishing models have been disrupted by self-publishing platforms, while social media has created new spaces for literary expression and community building.</p>
      
      <h2>Methodology</h2>
      <p>This research employs a mixed-methods approach, combining survey data from 500 digital readers with in-depth interviews of 20 authors and publishers. Additionally, content analysis was performed on 100 digital-first publications across various platforms.</p>
      
      <h2>Findings</h2>
      <p>Key findings indicate that digital platforms have democratized literary production, enabling diverse voices to reach audiences without traditional gatekeepers. However, this has also led to challenges in quality control and discoverability. Reader engagement patterns show increased preference for serialized content and interactive narratives.</p>
      
      <h2>Conclusion</h2>
      <p>The digital transformation of literature represents both opportunity and challenge. While barriers to entry have been lowered, the need for curation and quality standards remains critical. Future research should explore long-term impacts on literary culture and the evolution of narrative forms.</p>
    `
  },
  {
    slug: 'postmodernism-fiction',
    title: 'Essay: "Postmodernism in Contemporary Fiction"',
    category: 'academic',
    excerpt: 'Exploring narrative techniques and themes in 21st-century literature...',
    date: '2024-02-15',
    author: 'Annalise Nguyen',
    tags: ['essay', 'postmodernism', 'literary theory'],
    content: `
      <h2>Introduction</h2>
      <p>Postmodernism, once considered a movement of the late 20th century, continues to influence contemporary fiction in profound ways. This essay explores how postmodern techniques have evolved and adapted to address 21st-century concerns.</p>
      
      <h2>Metafiction and Self-Reflexivity</h2>
      <p>Contemporary authors employ metafictional techniques to explore the nature of storytelling itself. Works like Jennifer Egan's "A Visit from the Goon Squad" demonstrate how narrative structure can become a form of commentary on contemporary life.</p>
      
      <h2>Intertextuality in the Digital Age</h2>
      <p>The internet has transformed intertextuality, allowing authors to reference not just literary works but also memes, viral content, and digital culture. This creates new layers of meaning accessible to digitally-native readers.</p>
      
      <h2>Fragmentation and Multiple Perspectives</h2>
      <p>The postmodern emphasis on fragmentation reflects contemporary experiences of information overload and multiple identities. Authors use fragmented narratives to represent the complexity of modern consciousness.</p>
      
      <h2>Conclusion</h2>
      <p>Postmodern techniques remain vital tools for contemporary authors seeking to represent the complexities of 21st-century life. Rather than being a historical movement, postmodernism has become an integral part of the contemporary literary toolkit.</p>
    `
  },
  {
    slug: 'literary-movements-20th-century',
    title: 'Case Study: "Literary Movements of the 20th Century"',
    category: 'academic',
    excerpt: 'A comprehensive study of major literary movements and their influences...',
    date: '2024-03-01',
    author: 'Annalise Nguyen',
    tags: ['case study', 'literary history'],
    content: `
      <h2>Overview</h2>
      <p>This case study examines the major literary movements of the 20th century, tracing their development, key characteristics, and lasting influence on contemporary literature.</p>
      
      <h2>Modernism (1900-1945)</h2>
      <p>Modernism emerged as a response to the disillusionment following World War I. Key characteristics include stream-of-consciousness narration, experimental forms, and a focus on individual psychology. Major figures include James Joyce, Virginia Woolf, and T.S. Eliot.</p>
      
      <h2>Postmodernism (1945-1990)</h2>
      <p>Postmodernism questioned the certainties of modernism, embracing fragmentation, metafiction, and skepticism toward grand narratives. Authors like Thomas Pynchon and Don DeLillo exemplify this movement.</p>
      
      <h2>Contemporary Trends (1990-Present)</h2>
      <p>Contemporary literature blends elements from various movements, often incorporating digital culture and global perspectives. The boundaries between genres have become increasingly fluid.</p>
      
      <h2>Conclusion</h2>
      <p>Understanding these movements provides essential context for contemporary literary production and helps readers appreciate the evolution of narrative techniques and thematic concerns.</p>
    `
  },
  {
    slug: 'tips-aspiring-writers',
    title: 'Article: "10 Tips for Aspiring Writers"',
    category: 'blog',
    excerpt: 'Practical advice for writers at any stage of their journey...',
    date: '2024-01-25',
    author: 'Annalise Nguyen',
    tags: ['writing tips', 'advice', 'craft'],
    content: `
      <p>Whether you're just starting out or looking to refine your craft, these ten tips can help guide your writing journey.</p>
      
      <h2>1. Write Regularly</h2>
      <p>Consistency is key. Set aside time each day, even if it's just 15 minutes. The act of writing regularly builds discipline and helps develop your voice.</p>
      
      <h2>2. Read Widely</h2>
      <p>Read across genres, time periods, and styles. Every book you read teaches you something about craft, structure, and storytelling.</p>
      
      <h2>3. Embrace the First Draft</h2>
      <p>Your first draft doesn't need to be perfect. Give yourself permission to write badly. You can always revise later.</p>
      
      <h2>4. Find Your Writing Time</h2>
      <p>Some writers are morning people, others are night owls. Experiment to find when you're most creative and productive.</p>
      
      <h2>5. Join a Writing Community</h2>
      <p>Connect with other writers for feedback, support, and accountability. Writing can be lonely, but it doesn't have to be.</p>
      
      <h2>6. Keep a Notebook</h2>
      <p>Ideas can strike at any time. Keep a notebook (or use your phone) to capture thoughts, observations, and snippets of dialogue.</p>
      
      <h2>7. Study the Craft</h2>
      <p>Learn about plot structure, character development, dialogue, and pacing. Understanding the tools of the trade makes you a better writer.</p>
      
      <h2>8. Don't Compare Your Journey</h2>
      <p>Every writer's path is different. Focus on your own growth rather than comparing yourself to others.</p>
      
      <h2>9. Revise Ruthlessly</h2>
      <p>Writing is rewriting. Be willing to cut, rearrange, and completely rework sections. Your story will be stronger for it.</p>
      
      <h2>10. Stay Curious</h2>
      <p>Writers are observers of the world. Stay curious about people, places, and experiences. Everything is potential material.</p>
      
      <p>Remember, writing is a journey, not a destination. Enjoy the process and keep writing!</p>
    `
  },
  {
    slug: 'storytelling-business',
    title: 'Blog Post: "The Art of Storytelling in Business"',
    category: 'blog',
    excerpt: 'How narrative techniques can enhance business communication...',
    date: '2024-02-20',
    author: 'Annalise Nguyen',
    tags: ['business', 'storytelling', 'communication'],
    content: `
      <p>In today's competitive business landscape, the ability to tell compelling stories isn't just for novelists—it's a crucial skill for anyone looking to connect with customers, inspire teams, or communicate vision.</p>
      
      <h2>Why Stories Matter in Business</h2>
      <p>Stories help people remember information. While facts and figures fade, narratives stick. A well-told story can make your brand memorable, your pitch persuasive, and your message impactful.</p>
      
      <h2>The Elements of Business Storytelling</h2>
      <p>Effective business stories share key elements with literary narratives:</p>
      <ul>
        <li><strong>Character:</strong> Your customer, your team, or your company</li>
        <li><strong>Conflict:</strong> The problem you're solving</li>
        <li><strong>Resolution:</strong> How your product or service provides the solution</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>Use storytelling in:</p>
      <ul>
        <li>Marketing campaigns that connect emotionally</li>
        <li>Sales presentations that engage prospects</li>
        <li>Team meetings that inspire action</li>
        <li>Company culture that builds identity</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Begin by identifying the core story of your business. What problem do you solve? Who do you help? What transformation do you enable? Once you have this foundation, you can adapt it for different audiences and contexts.</p>
      
      <p>Remember: the best business stories aren't about you—they're about the people you serve and the value you create.</p>
    `
  },
  {
    slug: 'literary-festivals-world',
    title: 'Feature: "Exploring Literary Festivals Around the World"',
    category: 'blog',
    excerpt: 'A guide to the most inspiring literary events and festivals...',
    date: '2024-03-10',
    author: 'Annalise Nguyen',
    tags: ['travel', 'literature', 'events'],
    content: `
      <p>Literary festivals bring together readers, writers, and book lovers from around the world. Here's a guide to some of the most inspiring events on the literary calendar.</p>
      
      <h2>Hay Festival (Hay-on-Wye, Wales)</h2>
      <p>Known as "the Woodstock of the mind," Hay Festival transforms a small Welsh town into a literary hub each spring. With over 600 events featuring authors, thinkers, and performers, it's a celebration of ideas and storytelling.</p>
      
      <h2>Edinburgh International Book Festival (Scotland)</h2>
      <p>The world's largest celebration of the written word, Edinburgh's book festival takes over Charlotte Square Gardens every August. It features both established and emerging voices from around the globe.</p>
      
      <h2>Jaipur Literature Festival (India)</h2>
      <p>Asia's largest free literary festival brings together writers, thinkers, and readers in the vibrant city of Jaipur. The festival celebrates literature in multiple languages and showcases the rich literary traditions of South Asia.</p>
      
      <h2>Brooklyn Book Festival (USA)</h2>
      <p>This free, public festival celebrates literature in one of New York's most creative boroughs. It features panels, readings, and book signings with authors from diverse backgrounds and genres.</p>
      
      <h2>Why Attend Literary Festivals?</h2>
      <p>Literary festivals offer unique opportunities to:</p>
      <ul>
        <li>Discover new authors and books</li>
        <li>Connect with fellow readers</li>
        <li>Learn about the craft of writing</li>
        <li>Experience the joy of literary community</li>
      </ul>
      
      <p>Whether you're a writer, reader, or simply curious about the world of books, literary festivals provide spaces where stories come alive and ideas flourish.</p>
    `
  }
]

/**
 * Get all posts (returns a copy to ensure React detects changes)
 */
export function getAllPosts() {
  return [...posts]
}

/**
 * Get posts by category (returns a copy to ensure React detects changes)
 */
export function getPostsByCategory(category) {
  return posts.filter(post => post.category === category)
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug)
}

/**
 * Get all unique categories
 */
export function getCategories() {
  return [...new Set(posts.map(post => post.category))]
}

/**
 * Add a new post
 */
export function addPost(postData) {
  // Check if slug already exists
  if (posts.find(p => p.slug === postData.slug)) {
    throw new Error('A post with this slug already exists')
  }
  
  posts.push({
    ...postData,
    slug: postData.slug
  })
  
  // Save to localStorage for persistence
  savePostsToStorage()
}

/**
 * Update an existing post
 */
export function updatePost(oldSlug, postData) {
  const index = posts.findIndex(p => p.slug === oldSlug)
  
  if (index === -1) {
    throw new Error('Post not found')
  }
  
  // If slug changed, check if new slug is available
  if (oldSlug !== postData.slug && posts.find(p => p.slug === postData.slug)) {
    throw new Error('A post with this slug already exists')
  }
  
  posts[index] = {
    ...postData,
    slug: postData.slug
  }
  
  // Save to localStorage for persistence
  savePostsToStorage()
}

/**
 * Delete a post
 */
export function deletePost(slug) {
  const index = posts.findIndex(p => p.slug === slug)
  
  if (index === -1) {
    throw new Error('Post not found')
  }
  
  posts.splice(index, 1)
  
  // Save to localStorage for persistence
  savePostsToStorage()
}

/**
 * Save posts to localStorage and notify listeners
 */
function savePostsToStorage() {
  try {
    localStorage.setItem('blogPosts', JSON.stringify(posts))
    // Dispatch custom event to notify components of changes
    window.dispatchEvent(new CustomEvent('postsUpdated'))
  } catch (error) {
    console.error('Failed to save posts to localStorage:', error)
  }
}

/**
 * Load posts from localStorage on initialization
 */
function loadPostsFromStorage() {
  try {
    const savedPosts = localStorage.getItem('blogPosts')
    if (savedPosts) {
      const parsed = JSON.parse(savedPosts)
      // If we have saved posts, completely replace the default posts
      // This ensures deletions and edits are properly reflected
      if (parsed.length > 0) {
        // Clear existing posts and replace with saved ones
        posts.length = 0
        posts.push(...parsed)
      }
    }
  } catch (error) {
    console.error('Failed to load posts from localStorage:', error)
  }
}

// Load saved posts on module initialization
loadPostsFromStorage()

