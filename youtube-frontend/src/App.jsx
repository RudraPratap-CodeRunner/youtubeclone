import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Sidebar from './Components/SideNavbar'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import VideoPage from './Pages/VideoPage'
import ChannelPage from './Pages/ChannelPage'
import VideoUpload from './Pages/VideoUpload'

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
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/watch/:id' element={<VideoPage />} />
            <Route path='/channel/:channelId' element={<ChannelPage />} />
            <Route path='/:id/upload' element={<VideoUpload />} />
            <Route path='/' element={<About/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
