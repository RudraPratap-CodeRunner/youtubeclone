import React from 'react';

const videoMap = {
  '1': 'BSJa1UytM8w',
  '2': 'KUpwupYj_tY',
  '3': 'CtgD91Ev4NU',
};

const VideoPlayer = ({ videoId }) => {
  const embedId = videoMap[videoId] || 'dQw4w9WgXcQ'; // fallback

  return (
    <div className="w-full aspect-video mb-4">
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
