import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import PostForm from './pages/PostForm'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      {/* Public routes */}
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
      
      {/* Admin routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <Layout>
            <AdminDashboard />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/admin/add" element={
        <ProtectedRoute>
          <Layout>
            <PostForm />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/admin/edit/:slug" element={
        <ProtectedRoute>
          <Layout>
            <PostForm />
          </Layout>
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App

