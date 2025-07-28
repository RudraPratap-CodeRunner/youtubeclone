import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ChannelInfo = ({ videoId }) => {
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

  const video = videos.find((v) => String(v.videoId) === String(videoId));

  if (!video) return <div>Loading channel info...</div>;

  return (
    <div className="flex items-center justify-between border-y py-4 mb-4">
      <div className="flex items-center">
        <img
          src={video.thumbnail}
          alt="Channel Avatar"
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <Link to={`/channel/${video.channelName}/${encodeURIComponent(video.thumbnail)}`}>
            <p className="font-semibold cursor-pointer">{video.channelName}</p>
          </Link>
          <p className="text-sm text-gray-500">{video.subscribers}</p>
        </div>
      </div>
      <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
        Subscribe
      </button>
    </div>
  );
};

export default ChannelInfo;
