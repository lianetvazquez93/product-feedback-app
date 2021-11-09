import React from 'react';

const ProductRequestCard: React.FC<{ request: any }> = ({ request }) => {
  return (
    <div className="bg-white rounded-large p-6 mb-4 mx-10 md:py-7 md:px-8 md:flex md:justify-between md:space-x-10">
      <div className="bg-gray invisible h-0 md:px-3 md:py-2 md:rounded-large md:visible md:h-14">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 block" viewBox="0 0 20 20" fill="#4661E6">
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-jost font-bold text-xs text-indigo text-center block">{request.upvotes}</span>
      </div>
      <div className="md:w-3/4">
        <p className="font-jost font-bold text-indigo text-sm md:text-lg mb-2 md:mb-1">{request.title}</p>
        <p className="font-jost font-normal text-gray-dark text-sm md:text-base mb-2 md:mb-3">{request.description}</p>
        <span className="font-jost font-semibold text-sm text-blue px-4 py-1.5 bg-gray rounded-large">
          {request.category[0].toUpperCase() + request.category.slice(1)}
        </span>
      </div>
      <div className="invisible h-0 md:visible md:h-6 md:px-0 md:w-10 md:my-auto inline-block">
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
      <div className="mt-4 flex justify-between items-center md:hidden">
        <div className="bg-gray py-2 pl-4 pr-3.5 rounded-large inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="#4661E6">
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-jost font-bold text-xs text-indigo ml-2">{request.upvotes}</span>
        </div>
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
