import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoInfo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/videos');
        const found = res.data.find((v) => String(v.videoId) === String(videoId));
        setVideo(found);
      } catch (error) {
        console.error('Error fetching videos:', error.message);
      }
    };
    fetchVideo();
  }, [videoId]);

  const handleLike = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/videos/${videoId}/like`);
      setVideo(res.data);
    } catch (err) {
      console.error('Failed to update like:', err.message);
    }
  };

  const handleDislike = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/videos/${videoId}/dislike`);
      setVideo(res.data);
    } catch (err) {
      console.error('Failed to update dislike:', err.message);
    }
  };

  if (!video) return <div>Loading...</div>;

  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold">{video.title}</h1>
      <div className="text-sm text-gray-500 mb-2">
        {video.views} • {video.uploaded}
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleLike}
          className="text-blue-500 hover:text-blue-600 font-semibold transition"
        >
          👍 {video.likes}
        </button>
        <button
          onClick={handleDislike}
          className="text-red-500 hover:text-red-600 font-semibold transition"
        >
          👎 {video.dislikes}
        </button>
        <button className="hover:text-green-600">🔗 Share</button>
        <button className="hover:text-purple-600">💾 Save</button>
      </div>
    </div>
  );
};

export default VideoInfo;
