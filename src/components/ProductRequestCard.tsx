import React from 'react';

const ProductRequestCard: React.FC<{ request: any }> = ({ request }) => {
  return (
    <div className="bg-white rounded-large p-6 mb-4 mx-10 md:py-7 md:px-8">
      <p className="font-jost font-bold text-blue-darkest text-xs md:text-lg mb-2 md:mb-1">{request.title}</p>
      <p className="font-jost font-normal text-gray-dark text-xs md:text-base mb-2 md:mb-3">{request.description}</p>
      <span className="font-jost font-semibold text-xs text-blue px-4 py-1.5 bg-gray rounded-large">
        {request.category[0].toUpperCase() + request.category.slice(1)}
      </span>
    </div>
  );
};

export default ProductRequestCard;
