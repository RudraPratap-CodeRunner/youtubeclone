import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../Components/VideoCard';

const HomePage = ({ searchQuery, activeTag }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/videos');
        setVideos(res.data);
      } catch (error) {
        console.error('Error fetching videos:', error.message);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      searchQuery.trim() !== '' &&
      video.title?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag =
      activeTag !== 'All' &&
      video.category?.toLowerCase() === activeTag.toLowerCase();

    return matchesSearch || matchesTag || (searchQuery.trim() === '' && activeTag === 'All');
  });

  return (
    <div className="pt-20 px-4 sm:px-6 md:px-8 w-full overflow-x-hidden max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))
        ) : (
          <p className="text-lg col-span-full text-center text-gray-600">
            No videos found for "{searchQuery}" or category "{activeTag}".
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
