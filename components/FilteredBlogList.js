// components/FilteredBlogList.js
import React, { useState } from 'react';
import BlogList from './bloglist';
import TagList from './TagList';
import Author from './author';

const FilteredBlogList = ({ blogs }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tag)));

  const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter(t => t !== tag);
      } else {
        return [...prevSelectedTags, tag];
      }
    });
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  const filteredBlogs = selectedTags.length
    ? blogs.filter(blog => selectedTags.every(tag => blog.tag.includes(tag)))
    : blogs;

  return (
<div className="flex flex-wrap">
  <div className="w-full md:w-1/4 p-4 hidden md:block">
    <TagList tags={allTags} selectedTags={selectedTags} onTagClick={handleTagClick} onClearTags={handleClearTags} />
    <div className="mt-8">
      <Author className="w-full p-4 py-8" />
    </div>
  </div>
  <div className="w-full md:w-3/4 p-4">
    <BlogList blogs={filteredBlogs} />
  </div>
</div>

  );
};

export default FilteredBlogList;
