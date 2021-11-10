import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductRequestsList from '../components/ProductRequestsList';

const Suggestions: React.FC = () => {
  const [productRequests, setProductRequests] = useState<any>([]);
  const [sortType, setSortType] = useState<string>('Most Upvotes');

  const sortData = (data: any) => {
    switch (sortType) {
      case 'Most Upvotes': {
        setProductRequests(data.sort((a: any, b: any) => b.upvotes - a.upvotes));
        break;
      }
      case 'Least Upvotes': {
        setProductRequests(data.sort((a: any, b: any) => a.upvotes - b.upvotes));
        break;
      }
      case 'Most Comments': {
        setProductRequests(
          data.sort(
            (a: any, b: any) => (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0) || b - a,
          ),
        );
        break;
      }
      case 'Least Comments': {
        setProductRequests(
          data.sort(
            (a: any, b: any) => (a.comments ? a.comments.length : 0) - (b.comments ? b.comments.length : 0) || a - b,
          ),
        );
        break;
      }
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:5001/productRequests');
      sortData(data);
    })();
  }, [sortType]);

  return (
    <div className="m-0 p-0">
      <div className="px-6 h-20 bg-gradient-to-r from-primary via-secondary to-danger flex justify-between items-center md:invisible md:h-0">
        <div>
          <p className="font-bold text-base text-gray-light">Frontend Mentor</p>
          <p className="font-medium text-sm text-gray-light">Feedback Board</p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-indigo-dark pl-6 pr-3 py-2 mb-8 md:rounded-large md:py-3.5 md:mx-10">
        <div className="md:w-3/4 h-7">
          <div className="invisible w-0 h-0 md:visible md:inline md:w-52 md:h-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FFFFFF"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <span className="ml-4 text-gray-light font-bold text-lg my-auto">{`${productRequests.length} Suggestions`}</span>
          </div>
          <div className="md:inline md:ml-10">
            <label htmlFor="sort" className="text-sm text-gray-light">
              Sort by:
            </label>
            <select
              id="sort"
              className="border-0 ml-1 bg-transparent text-sm text-gray-light font-bold focus:border-0"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="Most Upvotes">Most Upvotes</option>
              <option value="Least Upvotes">Least Upvotes</option>
              <option value="Most Comments">Most Comments</option>
              <option value="Least Comments">Least Comments</option>
            </select>
          </div>
        </div>
        <button className="bg-purple text-sm text-gray-light font-jost font-bold rounded-large h-10 px-4 hover:bg-purple-light md:h-11">
          + Add Feedback
        </button>
      </div>
      <ProductRequestsList productRequests={productRequests} />
    </div>
  );
};

export default Suggestions;
