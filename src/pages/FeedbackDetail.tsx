import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductRequest } from './Suggestions';
import ProductRequestCard from '../components/ProductRequestCard';
import CommentsList from '../components/CommentsList';

const FeedbackDetail: React.FC = () => {
  const [productRequest, setProductRequest] = useState<ProductRequest>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:5001/productRequests/${id}`);
      setProductRequest(data);
    })();
  }, []);

  if (!productRequest) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  return (
    <div className="mx-6 md:mx-10 lg:mx-auto mt-6 md:mt-14 pb-6 flex flex-col" style={{ maxWidth: '70rem' }}>
      <div className="flex justify-between w-full">
        <Link to="/" className="py-2.5 md:py-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" viewBox="0 0 20 20" fill="#4661E6">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-bold text-gray-dark text-sm ml-1.5 hover:underline">Go Back</span>
        </Link>
        <Link
          to={`/edit/${id}`}
          className="inline-block align-middle bg-blue text-sm text-gray-light font-bold rounded-large hover:bg-blue-light py-2.5 px-4 md:py-3 md:px-6"
        >
          Edit Feedback
        </Link>
      </div>
      <div className="flex w-full justify-center mt-6">
        <ProductRequestCard request={productRequest} />
      </div>
      {productRequest.comments ? <CommentsList comments={productRequest.comments} /> : <div className="hidden"></div>}
    </div>
  );
};

export default FeedbackDetail;
