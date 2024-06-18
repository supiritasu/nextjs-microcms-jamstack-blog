// components/PostCard.js
import React from 'react';
import Link from 'next/link';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const PostCard = ({ post }) => {
  return (
    <div className="bg-black rounded-lg shadow-md overflow-hidden border-2 border-black transition duration-300 ease-in-out hover:border-white">
      <Link href={`/blog/${post.id}`}>
        <a className="block p-4">
          <h1 className="text-xl font-semibold mb-2 text-white">{post.title}</h1>
          <div className="flex space-x-2 mb-2">
            {post.tag.map((tag, index) => (
              <p key={index} className="text-sm text-gray-500">
                {tag}
              </p>
            ))}
          </div>
          <p className="text-white mb-4">{formatDate(post.publishedAt)}</p>
        </a>
      </Link>
      <div className="p-4">
        <Link href={`/blog/${post.id}`}>
          <a className="text-blue-500 hover:underline">Learn More</a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;