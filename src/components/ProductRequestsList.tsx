import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link key={request.id} to={`/details/${request.id}`}>
            <ProductRequestCard request={request} updateProductRequests={updateProductRequests} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductRequestsList;
