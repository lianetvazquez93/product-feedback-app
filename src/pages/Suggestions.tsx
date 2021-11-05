import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductRequestsList from '../components/ProductRequestsList';

const Suggestions: React.FC = () => {
  const [productRequests, setProductRequests] = useState<any>([]);
  const [sortedBy, setSortedBy] = useState<string>('Most Upvotes');

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:5001/productRequests');
      setProductRequests(data);
    })();
  }, []);

  return (
    <div className="m-0 p-0">
      <div className="flex justify-between bg-indigo-dark px-6 py-2 mb-8">
        <div className="h-10">
          <label htmlFor="sort" className="text-sm text-gray-light">
            Sort by:
          </label>
          <select
            id="sort"
            className="border-0 ml-1 bg-transparent text-sm text-gray-light font-bold focus:border-0"
            value={sortedBy}
          >
            <option>Most Upvotes</option>
            <option>Least Upvotes</option>
            <option>Most Comments</option>
            <option>Least Comments</option>
          </select>
        </div>
        <button className="bg-purple text-sm text-gray-light font-jost font-bold rounded-large h-10 px-4 hover:bg-purple-light">
          + Add Feedback
        </button>
      </div>
      <ProductRequestsList productRequests={productRequests} />
    </div>
  );
};

export default Suggestions;
