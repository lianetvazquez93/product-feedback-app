import React from 'react';
import { ProductRequest } from '../pages/Suggestions';
import ProductRequestCard from './ProductRequestCard';

interface ProductRequestListProps {
  productRequests: ProductRequest[];
  updateProductRequests: () => void;
}

const ProductRequestsList: React.FC<ProductRequestListProps> = ({ productRequests, updateProductRequests }) => {
  return (
    <div>
      <ul className="mt-8">
        {productRequests.map((request: ProductRequest) => (
          <ProductRequestCard key={request.id} request={request} updateProductRequests={updateProductRequests} />
        ))}
      </ul>
    </div>
  );
};

export default ProductRequestsList;
