import React from 'react';
import VideoCard from '../Components/VideoCard'; // reuse existing component

const dummyVideos = [
  {
    thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/mqdefault.jpg',
    title: 'Shape of You',
    channelName: 'Ed Sheeran',
    views: '6.1B views',
    uploaded: '6 years ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    title: 'Never Gonna Give You Up',
    channelName: 'Rick Astley',
    views: '1.2B views',
    uploaded: '13 years ago',
  },
];

const ChannelVideoList = ({ activeTab }) => {
  if (activeTab === 'Home' || activeTab === 'Videos') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {dummyVideos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    );
  }

  return (
    <div className="p-4 text-gray-600">
      <p>{activeTab} content coming soon...</p>
    </div>
  );
};

export default ChannelVideoList;
