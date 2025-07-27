import React from "react";

const tabs = ['Home', 'Videos', 'Shorts', 'Live', 'Podcasts', 'Playlists'];

const ChannelTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-4 border-b border-gray-300 px-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 ${activeTab === tab ? 'border-b-2 border-red-600 font-semibold' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ChannelTabs;
