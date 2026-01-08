import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path="/post/:slug" element={
        <Layout>
          <BlogPost />
        </Layout>
      } />
    </Routes>
  )
}

export default App

