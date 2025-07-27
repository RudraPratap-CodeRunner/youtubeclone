import React from 'react';
import sampleVideos from '../data/videoData';
import { Link } from 'react-router-dom';

const ChannelInfo = ({id}) => {
  const video = sampleVideos.find((vid) => vid.id == id);
  console.log(video);
  return (
    <div className="flex items-center justify-between border-y py-4 mb-4">
      <div className="flex items-center">
        <img
          src={video.thumbnail}
          alt="Channel Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <Link to={`/channel/${video.channelName}`}>
            <p className="font-semibold cursor-pointer">{video.channelName}</p>
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
