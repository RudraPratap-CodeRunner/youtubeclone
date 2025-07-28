import React from 'react';

const tags = [
  'All', 'Music', 'React', 'Podcasts', 'Albums', 'Gaming', 'News', 'Live',
  'Motivation', 'Comedy', 'JavaScript', 'AI', 'Movies', 'Education', 'Tech'
];

const TagsBar = ({ activeTag, setActiveTag }) => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-3 px-4 py-2 border-b border-gray-200 bg-white sticky top-16 z-40">
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => setActiveTag(tag)}
          className={`px-4 py-1 rounded-full text-sm font-medium cursor-pointer border ${
            activeTag === tag
              ? 'bg-black text-white border-black'
              : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagsBar;
