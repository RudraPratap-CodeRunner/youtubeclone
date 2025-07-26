import React from 'react';
import VideoCard from '../Components/VideoCard'

const sampleVideos = [
  {
    thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    title: 'Never Gonna Give You Up - Rick Astley',
    channelName: 'RickAstleyVEVO',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu8Xt6eJMTkkJGm0bfUSyBD5SfhX7Gxi49rSxXOw=s88-c-k-c0x00ffffff-no-rj',
    views: '1.2B views',
    uploaded: '13 years ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/mqdefault.jpg',
    title: 'Shape of You - Ed Sheeran (Official Video)',
    channelName: 'Ed Sheeran',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu9EvLlWAK7PfOTpXbPoXFaTRzHx8RMxeF3eX04l=s88-c-k-c0x00ffffff-no-rj',
    views: '6.1B views',
    uploaded: '6 years ago',
  },
   {
    thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/mqdefault.jpg',
    title: 'Shape of You - Ed Sheeran (Official Video)',
    channelName: 'Ed Sheeran',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu9EvLlWAK7PfOTpXbPoXFaTRzHx8RMxeF3eX04l=s88-c-k-c0x00ffffff-no-rj',
    views: '6.1B views',
    uploaded: '6 years ago',
  },
   {
    thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/mqdefault.jpg',
    title: 'Shape of You - Ed Sheeran (Official Video)',
    channelName: 'Ed Sheeran',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu9EvLlWAK7PfOTpXbPoXFaTRzHx8RMxeF3eX04l=s88-c-k-c0x00ffffff-no-rj',
    views: '6.1B views',
    uploaded: '6 years ago',
  },
   {
    thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/mqdefault.jpg',
    title: 'Shape of You - Ed Sheeran (Official Video)',
    channelName: 'Ed Sheeran',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu9EvLlWAK7PfOTpXbPoXFaTRzHx8RMxeF3eX04l=s88-c-k-c0x00ffffff-no-rj',
    views: '6.1B views',
    uploaded: '6 years ago',
  },
   {
    thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/mqdefault.jpg',
    title: 'Shape of You - Ed Sheeran (Official Video)',
    channelName: 'Ed Sheeran',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu9EvLlWAK7PfOTpXbPoXFaTRzHx8RMxeF3eX04l=s88-c-k-c0x00ffffff-no-rj',
    views: '6.1B views',
    uploaded: '6 years ago',
  },
   {
    thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/mqdefault.jpg',
    title: 'Shape of You - Ed Sheeran (Official Video)',
    channelName: 'Ed Sheeran',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu9EvLlWAK7PfOTpXbPoXFaTRzHx8RMxeF3eX04l=s88-c-k-c0x00ffffff-no-rj',
    views: '6.1B views',
    uploaded: '6 years ago',
  },
   {
    thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/mqdefault.jpg',
    title: 'Shape of You - Ed Sheeran (Official Video)',
    channelName: 'Ed Sheeran',
    channelAvatar: 'https://yt3.ggpht.com/ytc/AMLnZu9EvLlWAK7PfOTpXbPoXFaTRzHx8RMxeF3eX04l=s88-c-k-c0x00ffffff-no-rj',
    views: '6.1B views',
    uploaded: '6 years ago',
  },
  

  // Add more videos here
];

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
