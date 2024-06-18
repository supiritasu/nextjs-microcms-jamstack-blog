// components/Card.js
import React from 'react';

const Card = ({ imageSrc, title, isNew, description, tags }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
