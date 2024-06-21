import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const Card = ({ post }) => {
  const handleHover = (e) => {
    e.currentTarget.classList.add('border-white', 'ring-2', 'ring-blue-100');
  };

  const handleLeave = (e) => {
    e.currentTarget.classList.remove('border-white', 'ring-2', 'ring-blue-100');
  };

  return (
    <div className="flex justify-center">
      <div
        className="card w-full sm:w-96 bg-base-100 shadow-xl rounded-lg overflow-hidden transition duration-300 ease-in-out hover:ring-2 hover:ring-blue-100 mx-auto"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <Link href={`/blog/${post.id}`}>
          <a className="block">
            <figure className="relative w-full h-40 sm:h-48">
              <Image
                src={post.thumbnail?.url || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                alt={post.title || "Shoes"}
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-base sm:text-lg font-semibold mb-2 line-clamp-2">
                {post.title}
              </h2>
              <div className="flex flex-wrap items-center mb-2">
                {post.tag.map((tag, index) => (
                  <span key={index} className="badge badge-outline text-xs mr-1 mb-1">
                    {tag}
                  </span>
                ))}
                <span className="badge badge-secondary text-xs mb-1">NEW</span>
              </div>
              <p className="text-gray-500 text-xs">{formatDate(post.publishedAt)}</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
