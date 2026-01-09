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
    slug: 'urban-echoes',
    title: 'Poetry Collection',
    category: 'creative',
    excerpt: 'A collection of poems exploring city life and human connections...',
    date: '2024-02-10',
    author: 'Annalise Nguyen',
    tags: ['poetry'],
    content: `
      <div class="poem">
        <h3>Leave the Porch Light On</h3>
        <p>I prayed for these days to come, but now<br/>
        it's been too long since we've crowded this home,<br/>
        Stretching ourselves into each corner somehow.<br/>
        It's been too long, your absence feels numb.<br/>
        <br/>
        These walls which hurt and birthed, raised and hummed<br/>
        are now quiet, haunted with your absence.<br/>
        I beg you all, come back and clear my glum.<br/>
        I get it, I've got it, I'm done with this lesson.<br/>
        <br/>
        Can't you hear it? Mom crying for our adolescence?<br/>
        Can't you hear it? Or is it all quiet?<br/>
        It rings in my ears like finishing each other's sentences<br/>
        Like shattering sobs and holes in the wall – God, what a riot!<br/>
        <br/>
        I'm scared that I'm overly reliant<br/>
        It's been so long and every light is left on<br/>
        And all I can do is think about and deny it<br/>
        Don't you know, I'm still scared when you're not home by dawn.<br/>
        <br/>
        Somehow, it's been too long<br/>
        Please, my brother, I'll leave the porch light on</p>
      </div>
      <div class="poem">
        <h3>My Favorite things</h3>
        <p>I want you to know all my favorite things.<br/>
        <br/>
        But not as an icebreaker,<br/>
        not to fill a silence,<br/>
        To check another box,<br/>
        or to know how to apologize on our worst days.<br/>
        <br/>
        I want you to know my favorite color is blue.<br/>
        But with every shade and hue<br/>
        and because it makes me think of my brother's room.<br/>
        That those four walls and that exact hex<br/>
        calm every unforgiving nerve and twitch running through.<br/>
        <br/>
        I want you to know my favorite dish is goi cuon.<br/>
        How it brings me to what means home,<br/>
        that it is the only thing I could stomach for those three months,<br/>
        and I love the tradition of its skill<br/>
        that I can't wait to watch you learn.<br/>
        <br/>
        I want you to know my favorite formations are waterfalls.<br/>
        Even when we are on hikes with immaculate views.<br/>
        Because the rush makes me feel small<br/>
        and quiets my brain like every falling drop of rain…<br/>
        perhaps one day I will be that powerful.<br/>
        <br/>
        I want you to know my favorite number is five.<br/>
        That in trying to be them I needed<br/>
        the squeak of a court to make me feel alive<br/>
        and in my head its not an even nor an odd<br/>
        But perfectly in between that satisfies my mind.<br/>
        <br/>
        I want you to know my favorite person is you<br/>
        because without asking you knew<br/>
        all my favorite things -<br/>
        not as an obligation<br/>
        but because you needed to know all of me.</p>
      </div>
      <div class="poem">
        <h3>I think its time to say goodbye</h3>
        <p>I think I have to say goodbye<br/>
        <br/>
        Not a wave at the door<br/>
        Or a whisper goodnight<br/>
        <br/>
        But to cleanse my soul<br/>
        To douse this hope<br/>
        That maybe it all wasn't a lie<br/>
        <br/>
        Of the pain I feel deep inside<br/>
        To rid of you like a parasite<br/>
        Leaving room for new flower<br/>
        where they once all died<br/>
        <br/>
        There is no more: one last kiss<br/>
        Or crying as you drive right by<br/>
        No lingering hug<br/>
        Or promise of tomorrow<br/>
        To comfort me through the night<br/>
        <br/>
        I'll miss your touch<br/>
        Your giddied little sigh<br/>
        The warmth of what I knew<br/>
        Was never really mine<br/>
        <br/>
        Deep down its true<br/>
        That I was just the muse<br/>
        To your oh so beautiful, elaborate little rouse<br/>
        <br/>
        Truth come to pass,<br/>
        All just one – I love you – shaped lie<br/>
        <br/>
        I think its time to say goodbye</p>
      </div>
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
    slug: 'tips-aspiring-writers',
    title: 'Fashion Feels: the psychology behind how you dress',
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
    title: 'The Era of Loneliness',
    category: 'blog',
    excerpt: 'Exploring the modern epidemic of loneliness and emotional isolation in the 21st century...',
    date: '2024-02-20',
    author: 'Annalise Nguyen',
    tags: ['mental health', 'loneliness', 'self-care'],
    content: `
      <p>The 21st century, of which many now call 'The Era of Loneliness' seems to be nothing except for this: selfish, isolating, and almost paralyzing. With the extinction of so many breathtaking species, paired with an unsightly addiction to our phones, there seems to be nothing left in this world except the person in the mirror. Every couple of months since I have entered college, my friends and I ask each other this: 'are you happy?' And despite the time that has passed between, the answer is never simply 'yes', but how could it? The media has left us with nothing except for unrealistic expectations, drowning in the rat race to success, where no one seems to be drowning with you and only you seem to feel hopeless.</p>
      
      <p>In 2020, the spread of Covid-19 only exacerbated these effects. Despite the years that have passed since, our society has still yet to fully recover. The isolation we endured during this time never truly wore off and has left us taking on the world ourselves. If I have learned anything from these discussions in college on our intrinsic happiness however, it is that you are in fact not as lonely as you think.</p>
      
      <p>The definition of lonely is one's own unhappiness due to their solidarity or lack of companionship, the loneliness I speak of above is not of physical loneliness but emotional – the lack of shared emotional struggle. However, this feeling is 100% conceived in our own minds. To claim that "no one knows how you feel" is closed mind when we consider the countless years and people that have lived before us and it's rooted in our innate desire to be different and face struggle. This feeling of loneliness isn't due to genuine segregation but instead the perceived notion of it created by technology in the 21st century.</p>
      
      <p>Today we see unrealistic beauty standards and work habits plastered across every platform online. We are faced with endless comparison to be better, and creators everywhere purposefully make it look like a breeze. What's even worse is that we often front the worst of it when we are looking for an escape. We come home from a hard day at work to see everyone online seems to be doing great. This is what creates this feeling of loneliness and is one of the main reasons for the era's title. This feeling is created for everyone and in turn feelings of shame and inadequacy keep us from speaking about it, leading everyone to believe they are alone in this universal feeling. The truth is if you talk to someone about this honestly, you will find they feel the exact same.</p>
      
      <p>But what does this mean for us?</p>
      
      <p>It has been reported that mental health has drastically decreased overtime, especially in recent years and this is 100% not conceived in our own minds. One of the main causes for negative mental health and the outcomes that come from this is the all-consuming feeling of loneliness, often created due to the lack of genuine connection to those around us. This is simply to say you are not alone and while it is impossible to force the feeling away with one simple article, I urge you to try the following to change the downwards spiral we seem to be on.</p>
      
      <ul>
        <li>Send check-ins with your friends (daily, weekly, monthly, etc.)</li>
        <li>Do an activity or go outside when feeling down instead of scrolling online</li>
        <li>Don't post fake content to make yourself "look better"</li>
        <li>Shape your feed into a positive space – use the click 'not interested button' and be mindful of what you like and watch</li>
        <li>Be honest with the people around you on how you actually feel</li>
      </ul>
      
      <p>These actions are simple and don't take a lot of time but as life passes you will find that the mindset of isolation fades and feelings of loneliness are far more manageable. Remember above all that you are not alone and perhaps those who named the 21st century the "era of loneliness" got it wrong.</p>
      
      <p>This post is in honor of suicide prevention month, as a reminder that you are never alone. As the month comes to an end, mental health does not. Remember to take care of yourself and your loved ones, and if you are ever facing thoughts of self-harm or suicide do not be afraid to reach out to those around you.</p>
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

// Posts are loaded directly from this file
// To add, edit, or delete posts, modify the posts array above

