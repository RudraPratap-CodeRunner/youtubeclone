import React, { useEffect, useState } from 'react';
import VideoCard from '../Components/VideoCard'; 
import axios from 'axios';

const ChannelVideoList = ({ activeTab, channelId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/videos');
        // Assuming each video object has a `channelId` field
        const channelVideos = res.data.filter(video => video.channelName === channelId);
        setVideos(channelVideos);
      } catch (error) {
        console.error('Error fetching videos:', error.message);
      }
    };

    fetchVideos();
  }, [channelId]); // Add dependency

  if (activeTab === 'Home' || activeTab === 'Videos') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {videos.map((video, index) => (
          <VideoCard key={video._id || index} video={video} />
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
