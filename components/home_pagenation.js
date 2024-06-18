// components/pagenation.js

import React from 'react';

const HomePagenation = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="join">
      <button
        className="join-item btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`join-item btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="join-item btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default HomePagenation;