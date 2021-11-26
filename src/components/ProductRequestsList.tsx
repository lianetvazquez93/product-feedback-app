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
            <div className="mb-4 mx-6 md:mx-0">
              <ProductRequestCard request={request} updateProductRequests={updateProductRequests} />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductRequestsList;
