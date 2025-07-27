import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoInfo = () => {
  const { videoId } = useParams();
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState(1200);
  const [dislikes, setDislikes] = useState(40);

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

  const video = videos.find((vid) => String(vid.videoId) === String(videoId));
  

  if (!videos.length) return <div>Loading...</div>;
  if (!video) return <div>Video not found</div>;

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
