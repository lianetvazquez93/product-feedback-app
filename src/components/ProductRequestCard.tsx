import React from 'react';

const ProductRequestCard: React.FC<{ request: any }> = ({ request }) => {
  return (
    <div className="bg-white rounded-large mb-4 p-6">
      <p className="font-jost font-bold text-blue-darkest text-xs mb-2">{request.title}</p>
      <p className="font-jost font-normal text-blue-dark text-xs">{request.description}</p>
    </div>
  );
};

export default ProductRequestCard;
