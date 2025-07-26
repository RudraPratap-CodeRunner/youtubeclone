// src/Components/VideoCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`} className="block">
      <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full" />
      <div className="flex mt-2">
        <img src={video.channelAvatar} alt="Channel" className="w-10 h-10 rounded-full mr-2" />
        <div>
          <h3 className="text-sm font-semibold">{video.title}</h3>
          <p className="text-xs text-gray-500">{video.channelName}</p>
          <p className="text-xs text-gray-400">{video.views} • {video.uploaded}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
