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
        className={`join-item btn w-24 ${currentPage === 1 ? 'bg-gray-300 cursor-default' : 'bg-gray-800 hover:bg-gray-900'} text-white font-bold py-2 px-4 rounded-l`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`join-item btn ${currentPage === index + 1 ? 'bg-gray-800 text-white cursor-default' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} font-bold py-2 px-4`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`join-item btn w-24 ${currentPage === totalPages ? 'bg-gray-300 cursor-default' : 'bg-gray-800 hover:bg-gray-900'} text-white font-bold py-2 px-4 rounded-r`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default HomePagenation;
