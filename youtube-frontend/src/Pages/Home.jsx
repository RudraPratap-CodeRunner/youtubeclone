// Home.jsx
import React, { useState } from 'react';
import HomePage from './HomePage';
import TagsBar from '../Components/TagsBar';

const Home = ({ searchQuery }) => {
  const [activeTag, setActiveTag] = useState('All');

  return (
    <div className="mt-12">
      <TagsBar activeTag={activeTag} setActiveTag={setActiveTag} />
      <HomePage searchQuery={searchQuery} activeTag={activeTag} />
    </div>
  );
};

export default Home;
