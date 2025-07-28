import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChannelBanner from '../Components/ChannelBanner';
import ChannelTabs from '../Components/ChannelTabs';
import ChannelVideoList from '../Components/ChannelVideoList';

const ChannelPage = () => {
  const { channelId,thumbnail } = useParams();
  const [activeTab, setActiveTab] = useState('Home');
  const decodedThumbnail = decodeURIComponent(thumbnail);

  return (
    <div className="pt-16">
      <ChannelBanner channelId={channelId} thumbnail={decodedThumbnail} />
      <ChannelTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ChannelVideoList channelId={channelId} activeTab={activeTab} />
    </div>
  );
};

export default ChannelPage;
