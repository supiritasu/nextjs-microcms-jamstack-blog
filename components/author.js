// components/author.js
import React from 'react';
import Image from 'next/image';
import { TwitterShareButton, LineShareButton } from 'react-share'; 

const Author = ({ post }) => {
  const defaultUrl = "https://next-tech-psi.vercel.app/blog";
  const defaultTitle = "NextTechへようこそ！";

  return (
    <aside className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Author</h2>
      <div className="flex items-center space-x-2 mb-4">
        <TwitterShareButton
          url={post ? `https://next-tech-psi.vercel.app/blog/${post.id}` : defaultUrl}
          title={post ? post.title : defaultTitle}
        >
          <Image src="/twitter_icon.svg" alt="Share on Twitter" width={32} height={32} />
        </TwitterShareButton>
        <LineShareButton
          url={post ? `https://next-tech-psi.vercel.app/blog/${post.id}` : defaultUrl}
          title={post ? post.title : defaultTitle}
        >
          <Image src="/line_icon.svg" alt="Share on LINE" width={32} height={32} />
        </LineShareButton>
      </div>
      <p className="text-gray-900">
        本ブログでは一般大学生がプログラミング，旅行，留学，雑談記事を暇なときに投稿します．
      </p>
    </aside>
  );
};

export default Author;
