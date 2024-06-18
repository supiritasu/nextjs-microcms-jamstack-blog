// components/FilteredBlogList.js
import React, { useState } from 'react';
import BlogList from './bloglist';
import TagList from './TagList';

const FilteredBlogList = ({ blogs }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tag)));

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleClearTag = () => {
    setSelectedTag(null);
  };

  const filteredBlogs = selectedTag
    ? blogs.filter(blog => blog.tag.includes(selectedTag))
    : blogs;

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <TagList tags={allTags} selectedTag={selectedTag} onTagClick={handleTagClick} onClearTag={handleClearTag} />
      </div>
      <div className="w-3/4 p-4">
        <BlogList blogs={filteredBlogs} />
      </div>
    </div>
  );
};

export default FilteredBlogList;