import Sidebar from './Sidebar'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

export default Layout

