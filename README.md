# Writing Portfolio - React App

A modern, responsive React portfolio website to showcase English writing skills across creative writing, academic writing, and blog/article writing.

## Features

- **React-based**: Built with React 18 and React Router for smooth navigation
- **Template System**: Easy-to-use blog post template for adding new content
- **Two-column layout**: Profile sidebar with photo, about section, and social links on the left; writing samples on the right
- **Three writing sections**: Creative Writing, Academic Writing, and Blog/Article Writing
- **Responsive design**: Works beautifully on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Easy content management**: Add new blog posts by simply adding entries to the data file

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy to any static hosting service.

## Adding New Blog Posts

To add a new blog post, simply edit `src/data/posts.js` and add a new object to the `posts` array. Follow this structure:

```javascript
{
  slug: 'unique-url-slug',           // Required: URL-friendly identifier
  title: 'Post Title',                // Required: Post title
  category: 'creative',               // Required: 'creative', 'academic', or 'blog'
  excerpt: 'Short description',       // Required: Shown on home page
  date: '2024-01-15',                // Required: YYYY-MM-DD format
  content: '<p>Your HTML content</p>', // Required: HTML string or JSX
  author: 'Your Name',                // Optional: defaults to profile name
  tags: ['tag1', 'tag2']             // Optional: array of tags
}
```

### Example

```javascript
{
  slug: 'my-new-post',
  title: 'My New Blog Post',
  category: 'blog',
  excerpt: 'This is a brief description of my new post...',
  date: '2024-03-20',
  author: 'Your Name',
  tags: ['writing', 'tips'],
  content: `
    <p>This is the content of my blog post.</p>
    <h2>Section Title</h2>
    <p>More content here...</p>
  `
}
```

The post will automatically appear in the appropriate category section on the home page, and clicking on it will navigate to a full-page view using the blog post template.

## Blog Post Template

The blog post template (`src/templates/BlogPostTemplate.jsx`) provides a consistent layout for all blog posts with:

- Header with category badge, date, title, and author
- Main content area (supports HTML)
- Footer with tags

You can customize the template by editing `src/templates/BlogPostTemplate.jsx` and its associated CSS file `src/templates/BlogPostTemplate.css`.

## Project Structure

```
.
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   ├── Sidebar.jsx      # Profile sidebar
│   │   ├── WritingSection.jsx
│   │   └── WritingItem.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page
│   │   └── BlogPost.jsx     # Individual post page
│   ├── templates/           # Template components
│   │   └── BlogPostTemplate.jsx  # Blog post layout template
│   ├── data/                # Data files
│   │   └── posts.js         # Blog posts data (edit this to add posts)
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Customization

### Update Your Profile Information

Edit `src/components/Sidebar.jsx` to update:
- Profile photo URL
- Name and title
- About section text
- Social media links

### Styling

Styles are organized by component:
- `src/index.css` - Global styles and CSS variables
- `src/components/*.css` - Component-specific styles
- `src/pages/*.css` - Page-specific styles
- `src/templates/*.css` - Template-specific styles

### Colors and Theme

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1e40af;
  --text-primary: #1f2937;
  /* ... */
}
```

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## Deployment

You can deploy this React app to:
- **Vercel**: Connect your Git repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the `dist` folder after building
- **Any static hosting service**: Upload the `dist` folder after running `npm run build`

## Development

- **Development server**: `npm run dev` - Starts Vite dev server with hot reload
- **Build**: `npm run build` - Creates production build
- **Preview**: `npm run preview` - Preview production build locally

## License

This project is open source and available for personal and commercial use.
