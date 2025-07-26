import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Sidebar from './Components/SideNavbar'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => setShowSidebar(prev => !prev);

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        {/* Sidebar (conditionally rendered) */}
        {showSidebar && <Sidebar />}

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            showSidebar ? 'ml-60' : 'ml-0'
          }`}
        >
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
