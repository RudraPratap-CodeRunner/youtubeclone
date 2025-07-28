import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const SuggestedVideos = () => {

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

  return (
    <div className="space-y-4">
      {videos.map((video,index) => (
        <Link to={`/watch/${video.videoId}`} key={index} className="flex gap-2 hover:bg-gray-100 p-2 rounded">
          <img src={video.thumbnail} className="w-40 rounded-lg" alt={video.title} />
          <div>
            <p className="font-semibold text-sm">{video.title}</p>
            <p className="text-xs text-gray-500">{video.channelName}</p>
            <p className="text-xs text-gray-400">{video.views}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SuggestedVideos;
