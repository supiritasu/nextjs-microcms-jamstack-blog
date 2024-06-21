import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const Card = ({ post }) => {
  const handleHover = (e) => {
    e.currentTarget.classList.add('border-white', 'ring-2', 'ring-blue-100'); // カーソルを置いた時にクラスを追加して、枠線を追加します
  };

  const handleLeave = (e) => {
    e.currentTarget.classList.remove('border-white', 'ring-2', 'ring-blue-100'); // カーソルを離した時にクラスを削除します
  };

  return (
    <div className="flex justify-center">
      <div
        className="card w-96 bg-base-100 shadow-xl rounded-lg overflow-hidden transition duration-300 ease-in-out hover:ring-2 hover:ring-blue-100 mx-auto"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <Link href={`/blog/${post.id}`}>
          <a className="block">
          <figure>
            {post.thumbnail && post.thumbnail.url ? (
              <Image
                src={post.thumbnail.url}
                alt={post.title}
                width={600}   // 画像の幅を適切に設定
                height={400}  // 画像の高さを適切に設定
              />
            ) : (
              <Image
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                width={600}   // 画像の幅を適切に設定
                height={400}  // 画像の高さを適切に設定
              />
            )}
          </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold mb-2 h-16 overflow-hidden">
                {post.title}
                
                <div className="flex items-center mb-2">
                  {post.tag.map((tag, index) => (
                    <p key={index} className="badge badge-outline text-sm text-gray-500 mr-2 mt-2.5">
                      {tag}
                    </p>
                  ))}
                  <div className="badge badge-secondary text-sm mt-2.5">NEW</div>
                </div>
              </h2>
              <p className="text-gray-500 mb-4 text-sm">{formatDate(post.publishedAt)}</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
