import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import sampleVideos from '../data/videoData';

const VideoInfo = () => {
  const { id } = useParams();
  
  const video = sampleVideos.find((vid) => vid.id == id);
 

  // Fallback if video not found
  if (!video) return <div>Video not found</div>;

  const [likes, setLikes] = useState(1200);
  const [dislikes, setDislikes] = useState(40);

  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold">{video.title}</h1>
      <div className="text-sm text-gray-500 mb-2">{video.views} • {video.uploaded}</div>
      <div className="flex gap-4">
        <button onClick={() => setLikes(likes + 1)} className="hover:text-blue-600">👍 {likes}</button>
        <button onClick={() => setDislikes(dislikes + 1)} className="hover:text-red-600">👎 {dislikes}</button>
        <button className="hover:text-green-600">🔗 Share</button>
        <button className="hover:text-purple-600">💾 Save</button>
      </div>
    </div>
  );
};

export default VideoInfo;
