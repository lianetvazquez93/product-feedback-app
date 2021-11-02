import React from 'react';

const ProductRequestCard: React.FC<{ request: any }> = ({ request }) => {
  return (
    <div className="bg-white rounded-large p-6 mb-4 mx-10 md:py-7 md:px-8">
      <p className="font-jost font-bold text-blue-darkest text-xs md:text-lg mb-2 md:mb-1">{request.title}</p>
      <p className="font-jost font-normal text-blue-dark text-xs md:text-base">{request.description}</p>
    </div>
  );
};

export default ProductRequestCard;
