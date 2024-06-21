// components/bloglist.js

import React from 'react';
import Link from 'next/link';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const BlogList = ({ blogs }) => {
  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {blogs.map((post) => (
            <div key={post.id} className="py-8 flex flex-col sm:flex-row">
              <div className="sm:w-64 sm:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <div className="flex flex-wrap mb-2">
                  {post.tag.map((tag, index) => (
                    <p key={index} className="badge badge-outline text-sm text-gray-900 mr-2 mt-2.5">
                      {tag}
                    </p>
                  ))}
                </div>
                <span className="mt-1 text-gray-500 text-sm">{formatDate(post.publishedAt)}</span>
              </div>
              <div className="sm:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.title}</h2>
                <p className="leading-relaxed mb-4">{post.discription}</p>
                <Link href={`/blog/${post.id}`}>
                  <a className="text-green-500 inline-flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default BlogList;
