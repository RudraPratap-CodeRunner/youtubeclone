import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChannelBanner from '../Components/ChannelBanner';
import ChannelTabs from '../Components/ChannelTabs';
import ChannelVideoList from '../Components/ChannelVideoList';

const ChannelPage = () => {
  const { channelId } = useParams();
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="pt-16">
      <ChannelBanner channelId={channelId} />
      <ChannelTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ChannelVideoList channelId={channelId} activeTab={activeTab} />
    </div>
  );
};

export default ChannelPage;
