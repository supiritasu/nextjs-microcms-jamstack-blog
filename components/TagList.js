// components/TagList.js
import React from 'react';

const TagList = ({ tags, selectedTags, onTagClick, onClearTags }) => {
  return (
    <aside className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Tags</h2>
      <div className="flex flex-wrap justify-end">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`badge badge-outline text-sm mr-2 mb-2 ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'text-gray-900'}`}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
        <button
          className="badge badge-outline text-sm text-red-500 mr-2 mb-2"
          onClick={onClearTags}
        >
          Clear Tags
        </button>
      </div>
    </aside>
  );
};

export default TagList;
