import React from 'react';
import Link from 'next/link';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const PostCard = ({ post }) => {
  const handleHover = (e) => {
    e.currentTarget.classList.add('border-white');
  };

  const handleLeave = (e) => {
    e.currentTarget.classList.remove('border-white');
  };

  return (
    <div
      className="bg-black rounded-lg shadow-md overflow-hidden border-2 border-black transition duration-300 ease-in-out hover:border-white"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Link href={`/blog/${post.id}`}>
        <a className="block">
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2 text-white">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-2">{post.category}</p>
            <div className="flex space-x-2 mb-2">
              {post.tag.map((tag, index) => (
                <p key={index} className="text-sm text-gray-500">
                {tag}
                </p>
              ))}
            </div>
            {/* <p className="text-white mb-4">{post.excerpt}</p> */}
            <p className="text-white mb-4">{formatDate(post.publishedAt)}</p>
            <p className="text-white mb-4">
            {post.thumbnail && post.thumbnail.url ? (
              <img src={post.thumbnail.url} alt="Thumbnail" width={post.thumbnail.width} height={post.thumbnail.height} />
              ) : (
              "No Thumbnail"
              )}
            </p>       
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
