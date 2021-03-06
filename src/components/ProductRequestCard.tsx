import React from 'react';
import axios from 'axios';
import { ProductRequest } from '../pages/Suggestions';

interface ProductRequestCardProps {
  request: ProductRequest;
  updateProductRequests?: () => void;
}

const ProductRequestCard: React.FC<ProductRequestCardProps> = ({ request, updateProductRequests }) => {
  const increaseUpvotes = async (event: React.MouseEvent<HTMLButtonElement>, request: ProductRequest) => {
    event.preventDefault();
    event.stopPropagation();
    await axios.patch(`http://localhost:5001/productRequests/${request.id}`, { upvotes: request.upvotes + 1 });
    if (updateProductRequests) {
      updateProductRequests();
    }
  };

  return (
    <div className="product-request-card bg-white rounded-large w-full p-6 md:py-7 md:px-8">
      <div className="flex justify-start md:justify-between">
        <button
          className="bg-gray invisible h-0 w-0 md:px-3 md:py-2 md:rounded-large md:visible md:h-14 md:w-11 hover:bg-blue-lighter"
          onClick={(e) => increaseUpvotes(e, request)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 block" viewBox="0 0 20 20" fill="#4661E6">
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-jost font-bold text-xs text-indigo text-center block">{request.upvotes}</span>
        </button>
        <div className="w-full md:w-3/4">
          <p className="product-request-title font-jost font-bold text-indigo text-sm pl-0.5 md:text-lg mb-2 md:mb-1">
            {request.title}
          </p>
          <p className="font-jost font-normal text-gray-dark text-sm pl-0.5 md:text-base mb-3 md:mb-4">
            {request.description}
          </p>
          <span className="font-jost font-semibold text-sm text-blue px-4 py-1.5 bg-gray rounded-large">
            {request.category[0].toUpperCase() + request.category.slice(1)}
          </span>
        </div>
        <div className="invisible h-0 md:visible md:h-6 md:px-0 md:w-10 md:my-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="#F2F4FF">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-jost font-bold text-base text-indigo ml-2">
            {request.comments ? request.comments.length : 0}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 md:hidden">
        <button
          className="bg-gray py-2 pl-4 pr-3.5 rounded-large inline-block hover:bg-blue-lighter"
          onClick={(e) => increaseUpvotes(e, request)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="#4661E6">
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-bold text-xs text-indigo ml-2">{request.upvotes}</span>
        </button>
        <div className="pl-4 pr-3.5 inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="#F2F4FF">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-bold text-xs text-indigo ml-2">{request.comments ? request.comments.length : 0}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductRequestCard;
