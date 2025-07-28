import { FaBars, FaSearch, FaMicrophone, FaVideo } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import React, { useState, useEffect, useRef } from 'react';
import AuthModal from './AuthModel.jsx';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar, setSearchQuery }) => {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [input, setInput] = useState('');
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setShowPopup(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(input);
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow fixed top-0 left-0 right-0 z-50">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <FaBars onClick={toggleSidebar} size={22} className="cursor-pointer" />
          <img
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
            alt="YouTube Logo"
            className="h-6 md:h-12"
          />
        </div>

        {/* Center Section - Search */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 flex-1 max-w-2xl mx-4">
          <div className="flex flex-1 border border-gray-300 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-1 outline-none"
            />
            <button type="submit" className="bg-gray-100 px-4">
              <FaSearch />
            </button>
          </div>
          <button type="button" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaMicrophone />
          </button>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          <Link to="/1/upload">
            <FaVideo className="cursor-pointer" size={20} />
          </Link>
          <IoMdNotificationsOutline className="cursor-pointer" size={22} />

          {user ? (
            <div className="relative" ref={popupRef}>
              <button
                onClick={() => setShowPopup(!showPopup)}
                className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer transition"
              >
                <CgProfile size={22} />
                <span className="font-medium">{user.name}</span>
              </button>

              {showPopup && (
                <div className="absolute right-0 mt-2 w-60 bg-white shadow-xl rounded-lg border border-gray-200 z-50">
                  <div className="p-4 border-b">
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <ul className="text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                      onClick={() => {
                        navigate(`/channel/${user._id}`);
                        setShowPopup(false);
                      }}
                    >
                      Your Channel
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 text-red-600 font-medium cursor-pointer transition"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} onLogin={handleLogin} />
      )}
    </>
  );
};

export default Navbar;
