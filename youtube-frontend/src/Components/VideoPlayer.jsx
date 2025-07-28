import React from 'react';

const videoMap = {
  '1': 'BSJa1UytM8w',
  '2': 'KUpwupYj_tY',
  '3': 'CtgD91Ev4NU',
  '4': 'RGKi6LSPDLU',
  '5': 'JvC7aA24m4Q',
  '6': 'hnVOvvbQrwA',
  '7': 'xSVn79TZPqs',
  '8': 'XnIY_UDhXP8',
  '9': 'pR2NV_k49lg',
  '10': 'orYf6VDtj_k',
  '11': 'zZasH6qkn8M',
};

const VideoPlayer = ({ videoId }) => {
  const embedId = videoMap[videoId] || 'hnVOvvbQrwA'; // fallback

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
