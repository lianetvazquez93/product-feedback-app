import React from 'react';
import ProductRequestCard from './ProductRequestCard';

const ProductRequestsList: React.FC<{ productRequests: any }> = ({ productRequests }) => {
  return (
    <div>
      <ul className="mt-8">
        {productRequests.map((request: any) => (
          <li key={request.title}>
            <ProductRequestCard request={request} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRequestsList;
