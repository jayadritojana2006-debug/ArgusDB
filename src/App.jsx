import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Cases from './pages/Cases'
import CreateCase from './pages/CreateCase'
import Documents from './pages/Documents'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')

  const handleNavigate = (page) => {
    setActivePage(page)
  }

  const renderPage = () => {
    switch (activePage) {
      case 'Cases':
        return (
          <Cases
            onCreateCase={() => setActivePage('CreateCase')}
          />
        )

      case 'CreateCase':
        return (
          <CreateCase
            onBack={() => setActivePage('Cases')}
          />
        )

      case 'Documents':
        return <Documents />

      case 'Dashboard':
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">

      {/* Sidebar */}
      <Sidebar
        activeItem={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Area */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-0 flex-1 overflow-y-auto">
          {renderPage()}
        </main>

      </div>
    </div>
  )
}

export default App