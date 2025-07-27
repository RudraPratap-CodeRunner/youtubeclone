import React from 'react';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const ChannelInfo = ({id}) => {
  

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
    <div className="flex items-center justify-between border-y py-4 mb-4">
      <div className="flex items-center">
        <img
          src={videos.thumbnail}
          alt="Channel Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <Link to={`/channel/${videos.channelName}`}>
            <p className="font-semibold cursor-pointer">{videos.channelName}</p>
          </Link>
          <p className="text-sm text-gray-500">2.5M subscribers</p>
        </div>
      </div>
      <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
        Subscribe
      </button>
    </div>
  );
};

export default ChannelInfo;
