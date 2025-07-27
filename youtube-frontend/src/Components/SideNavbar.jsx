import React from 'react';
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdWatchLater,
  MdOutlineSmartDisplay,
  MdOutlineTrendingUp,
  MdShoppingBag,
  MdMusicNote,
  MdMovie,
  MdLiveTv,
  MdSportsEsports,
  MdArticle,
  MdSchool,
  MdOutlineFaceRetouchingNatural,
} from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { label: 'Home', icon: <MdHomeFilled size={24} /> },
    { label: 'Shorts', icon: <SiYoutubeshorts size={24} /> },
    { label: 'Subscriptions', icon: <MdOutlineSubscriptions size={24} /> },
  ];

  const libraryItems = [
    { label: 'Library', icon: <MdVideoLibrary size={24} /> },
    { label: 'History', icon: <MdHistory size={24} /> },
    { label: 'Your Videos', icon: <MdOutlineSmartDisplay size={24} /> },
    { label: 'Watch Later', icon: <MdWatchLater size={24} /> },
  ];

  const exploreItems = [
    { label: 'Trending', icon: <MdOutlineTrendingUp size={24} /> },
    { label: 'Shopping', icon: <MdShoppingBag size={24} /> },
    { label: 'Music', icon: <MdMusicNote size={24} /> },
    { label: 'Movies', icon: <MdMovie size={24} /> },
    { label: 'Live', icon: <MdLiveTv size={24} /> },
    { label: 'Gaming', icon: <MdSportsEsports size={24} /> },
    { label: 'News', icon: <MdArticle size={24} /> },
    { label: 'Sports', icon: <MdOutlineTrendingUp size={24} /> },
    { label: 'Learning', icon: <MdSchool size={24} /> },
    { label: 'Fashion & Beauty', icon: <MdOutlineFaceRetouchingNatural size={24} /> },
  ];

  return (
    <div className="w-60 h-screen p-4 overflow-y-auto text-sm bg-white border-r border-gray-200 fixed top-12 left-0">
      {/* Main */}
      <div className="flex flex-col gap-1">
        {navItems.map((item, i) => (
          <button
            key={i}
            className="flex cursor-pointer items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full text-left"
          >
            {item.icon}
            <Link to='/'>
              <span>{item.label}</span>
            </Link>
          </button>
        ))}
      </div>

      <hr className="my-3 border-gray-200" />

      {/* Library */}
      <div className="flex flex-col gap-1">
        {libraryItems.map((item, i) => (
          <button
            key={i}
            className="flex cursor-pointer items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full text-left"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <hr className="my-3 border-gray-200" />

      {/* Explore */}
      <h2 className="text-gray-700 font-semibold mb-1">Explore</h2>
      <div className="flex flex-col gap-1">
        {exploreItems.map((item, i) => (
          <button
            key={i}
            className="flex cursor-pointer items-center gap-4 p-2 rounded-lg hover:bg-gray-100 w-full text-left"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
