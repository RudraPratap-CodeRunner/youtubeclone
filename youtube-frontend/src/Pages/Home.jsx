import React, { useState } from 'react';
import HomePage from './HomePage';
import TagsBar from '../Components/TagsBar';

const Home = ({ searchQuery }) => {
  const [activeTag, setActiveTag] = useState('All');

  return (
    <div className="mt-4 px-4 md:px-8 overflow-x-hidden">
      <TagsBar activeTag={activeTag} setActiveTag={setActiveTag} />
      <HomePage searchQuery={searchQuery} activeTag={activeTag} />
    </div>
  );
};

export default Home;
