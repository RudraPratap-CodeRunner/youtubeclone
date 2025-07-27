import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../Components/VideoPlayer';
import VideoInfo from '../Components/VideoInfo';
import ChannelInfo from '../Components/ChannelInfo';
import CommentSection from '../Components/CommentSection';
import SuggestedVideos from '../Components/SuggestedVideos';

const VideoPage = () => {
  const { videoId } = useParams();
 

  // Scroll to top on video change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);

  return (
    <div className="flex flex-col md:flex-row p-4 pt-20">
      <div className="md:w-2/3">
        <VideoPlayer videoId={videoId} />
        <VideoInfo />
        <ChannelInfo videoId={videoId} />
        <CommentSection videoId='6885be2e16a25bf24ee9a05f' />
      </div>
      <div className="md:w-1/3 md:pl-4 mt-4 md:mt-0">
        <SuggestedVideos />
      </div>
    </div>
  );
};

export default VideoPage;
