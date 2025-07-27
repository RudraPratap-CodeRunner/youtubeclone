import React from "react";
const ChannelBanner = ({ channelId }) => {
  return (
    <div className="bg-gray-200 h-48 w-full">
      <div className="p-4 flex items-center space-x-4">
        <img
          src="https://yt3.ggpht.com/ytc/AMLnZu9EvLlWAK7PfOTpXbPoXFaTRzHx8RMxeF3eX04l=s88-c-k-c0x00ffffff-no-rj"
          alt="Channel Logo"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-semibold">Ed Sheeran</h2>
          <button className="bg-red-600 text-white px-4 py-1 rounded mt-1">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ChannelBanner;
