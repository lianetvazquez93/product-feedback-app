import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductRequestsList from '../components/ProductRequestsList';

const Suggestions: React.FC = () => {
  const [productRequests, setProductRequests] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:5000/productRequests');
      console.log(data);
      setProductRequests(data);
    })();
  }, []);

  return (
    <div>
      <ProductRequestsList productRequests={productRequests} />
    </div>
  );
};

export default Suggestions;
