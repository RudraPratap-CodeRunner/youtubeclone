import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="w-full">
      {/* Thumbnail */}
      <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
        <img
          src={video.thumbnail}
          alt="Video Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Info */}
      <div className="grid grid-cols-[40px_1fr] gap-3 mt-3">
        {/* Channel Avatar */}
        <img
          src={video.channelAvatar}
          alt="Channel Avatar"
          className="w-10 h-10 rounded-full"
        />

        {/* Title and Channel Info */}
        <div className="text-sm">
          <h3 className="font-semibold text-black line-clamp-2">
            {video.title}
          </h3>
          <p className="text-gray-600">{video.channelName}</p>
          <p className="text-gray-500 text-xs">{video.views} • {video.uploaded}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
