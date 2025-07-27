import React from 'react';
import VideoCard from '../Components/VideoCard'
import sampleVideos from '../data/videoData';


const HomePage = () => {
  return (
    <div className="pt-20 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {sampleVideos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default HomePage;
