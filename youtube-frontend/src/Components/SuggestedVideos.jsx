import React from 'react';
import { Link } from 'react-router-dom';
import sampleVideos from '../data/videoData';


const SuggestedVideos = () => {
  return (
    <div className="space-y-4">
      {sampleVideos.map((video) => (
        <Link to={`/watch/${video.id}`} key={video.id} className="flex gap-2 hover:bg-gray-100 p-2 rounded">
          <img src={video.thumbnail} className="w-40 rounded-lg" alt={video.title} />
          <div>
            <p className="font-semibold text-sm">{video.title}</p>
            <p className="text-xs text-gray-500">{video.channel}</p>
            <p className="text-xs text-gray-400">{video.views}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SuggestedVideos;
